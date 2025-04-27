import React, { useRef } from 'react';
import { styled } from 'styled-components';
import { appTypography, appShadows, noSelect, getAccentColor } from '../../../../config/styles';
import PropTypes from 'prop-types';
import useCustomLockBodyScroll from '../../../../helpers/hooks/useCustomLockBodyScroll';
import useIsomorphicLayoutEffect from '../../../../helpers/hooks/useIsomorphicLayoutEffect';
import useWindowSize from '../../../../helpers/hooks/useWindowSize';

// const buttonColor = ({ theme, isDestructive, isWarning }, intensity, fallbackColor) =>
// 	isWarning ? theme.app.warning[intensity] : isDestructive ? theme.app.error[intensity] : fallbackColor || theme.app.primary[intensity];

const MainContainer = styled.ul`
  width: ${({ wMax }) => (wMax ? 'max-content' : 'auto')};
  min-width: 132px;
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.app.shades.white};
  border: 1px solid ${({ theme }) => theme.app.moreColors.menuStroke};
  filter: drop-shadow(${appShadows.menuShadow});
  border-radius: 8px;
  padding: 4px;
  z-index: 501;
  gap: 2px;
  right: 0px;
  top: calc(100% + 4px);
  list-style-type: none;
`;

const OptionItem = styled.button`
  ${noSelect};
  ${appTypography.paraSmall.regular};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 8px;
  gap: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  color: ${props => getAccentColor(props, 500, props.theme.app.typography[700])};
  background: ${({ theme }) => theme.app.shades.white};

  &:active {
    transition: background 0s ease-in-out;
    background: ${props => getAccentColor(props, 50, props.theme.app.neutral[50])};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${props => getAccentColor(props, 300, props.theme.app.typography[300])};
    * {
      cursor: not-allowed !important;
    }
  }

  @media (max-width: 1110px) {
    ${appTypography.paraMed.regular};
  }

  /* media query for pointer supported devices (desktop) */
  @media (pointer: fine) {
    &:hover {
      background: ${props => getAccentColor(props, 50, props.theme.app.neutral[50])};
    }
  }

  transition: background 0.2s ease-in-out;

  &:focus-visible {
    outline: 2px solid ${props => getAccentColor(props, 500)};
  }
`;

function CustomContextMenuV1(props) {
	const { mainContainerStyleOverride, optionsData, handleCloseMenu, wMax } = props;

	const menuRef = useRef(null);
	const [innerWidth, innerHeight] = useWindowSize();

	function handleOptionClick(option) {
		const { onClick, keepMenuOpen = false } = option;
		onClick();
		if (handleCloseMenu && !keepMenuOpen) {
			handleCloseMenu();
		}
	}

	useIsomorphicLayoutEffect(() => {
		if (menuRef.current?.parentNode && innerHeight && innerWidth) {
			const position = menuRef?.current?.getBoundingClientRect();
			const parentPosition = menuRef.current?.parentNode.getBoundingClientRect();
			if (position.height + parentPosition.bottom > innerHeight - 24) {
				menuRef.current.style.top = `-${position.height + 4}px`;
			}
		}
	}, [innerWidth, innerHeight]);

	useCustomLockBodyScroll(1110);

	if (!optionsData || optionsData.length === 0 || optionsData.element) {
		console.error('CustomContextMenuV1: optionsData is required and should be an array of objects');
		return null;
	}

	return (
		<MainContainer style={mainContainerStyleOverride} ref={menuRef} wMax={wMax}>
			{optionsData.map((option, index) => {
				if ((!option.label && !option.element) || !option.onClick) {
					return null;
				}
				return (
					<OptionItem
						key={index}
						isDestructive={option.isDestructive}
						isWarning={option.isWarning}
						disabled={option.isDisabled}
						onClick={() => handleOptionClick(option)}
						tabIndex={0}
					>
						{option.label || <option.element />}
					</OptionItem>
				);
			})}
		</MainContainer>
	);
}

CustomContextMenuV1.propTypes = {
	mainContainerStyleOverride: PropTypes.object,
	handleCloseMenu: PropTypes.func,
	optionsData: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			onClick: PropTypes.func.isRequired,
			isDisabled: PropTypes.bool,
			isDestructive: PropTypes.bool,
			isWarning: PropTypes.bool,
			element: PropTypes.element, // New prop for custom JSX element
			keepMenuOpen: PropTypes.bool, // New prop to keep menu open after click
		}),
	).isRequired,
	wMax: PropTypes.bool,
};

CustomContextMenuV1.defaultProps = {
	handleCloseMenu: null,
	wMax: true,
};

export default React.memo(CustomContextMenuV1);
