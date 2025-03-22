import React, { useCallback, useMemo, useRef, useState } from 'react';

import { useMediaQuery } from '../../../../helpers/hooks/useMediaQuery';
import CreatePostContextMenu from '../../Posts/CreatePost/Common/CreatePostContextMenu';

const [isShareModalOpen, setIsShareModalOpen] = useState(false);
	const isResponsive = useMediaQuery('(max-width: 1110px)');


    const handleShareProduct = useCallback(() => {
		logAnalytics({ action: 'click', identifier: 'product share', product: productId });

		const shareData = {
			title: productDetails?.title || 'Products',
			text: `Hey, check this awsome product`, //`Hey, check ${productDetails?.createdBy?.username}'s product`,
			url: `${location.origin}${productDetails.shareUrl}`,
		};

		if (isStandalone) {
			sendToRN({ type: 'shareAction', data: shareData });
			return;
		}

		if (isResponsive) {
			try {
				const canShare = navigator.canShare?.(shareData);

				if (canShare) {
					navigator.share(shareData);
					console.log('Thanks for sharing!');
				} else {
					console.log("Your system doesn't support native share.");
					setIsShareModalOpen(prev => !prev);
				}
			} catch (err) {
				console.error("Couldn't share because of", err);
			}
		} else {
			setIsShareModalOpen(prev => !prev);
		}
	}, [isStandalone, isResponsive, productId, productDetails]);

	const createPostContextMenuData = useMemo(() => {
		const options = [];

		if (canModerateProducts) {
			options.push(
				{
					id: `edit-product-${productId}`,
					label: t('modals.modalAction.edit', { ns: 'common' }),
					onClick: handleEdit,
					isWarning: true,
				},
				{
					id: `delete-product-${productId}`,
					label: t('modals.modalAction.delete', { ns: 'common' }),
					onClick: () => setIsDeleteOpen(true),
					isDestructive: true,
				},
				{
					id: `share-product-${productId}`,
					label: t('modals.invite.share'),
					onClick: () => handleShareProduct(),
				},
			);
		}

		return options;
	}, [canModerateProducts, handleShareProduct]);

