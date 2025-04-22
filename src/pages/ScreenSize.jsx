import React, { useEffect, useState } from 'react'

const ScreenSize = () => {
  const [windowDim, detectHW] = useState({
   winWidth: window.innerWidth,
   winHeight: window.innerHeight,

  })

  const detectSize = () => {
    detectHW({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })
  }
    useEffect(() => {
        window.addEventListener('resize', detectSize) ;

        return() => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDim])

    if(windowDim.winHeight < '590px') {
        console.log("Height : Less than 590PX")
     }
  

 
  return (
    <div className='p-8'>
        <p>Width is: <strong>{windowDim.winWidth}</strong> </p>
        <p>Height is: <strong>{windowDim.winHeight}</strong> </p>
    </div>
  )
}

export default ScreenSize

// calculating Screen Height 
  //const [maxFeatures, setMaxFeatures] = useState(4);  
	// const [windowDim, detectHW] = useState({
	// 	winHeight: window.innerHeight,	 
	//    })
	  
	//  //  const [maxFeatures, setMaxFeatures] = useState(4);  
	//    const detectSize = () => {
	// 	 detectHW({
	// 		 winHeight: window.innerHeight,
	// 	 })
	//    }
	// 	 useIsomorphicLayoutEffect(() => {
	// 		 window.addEventListener('resize', detectSize) ;	 
	// 		 return() => {
	// 			 window.removeEventListener('resize', detectSize)
	// 		 }
	// 	 }, [windowDim])

	//  console.log('Current Screen Height :', windowDim.winHeight)

	//  useIsomorphicLayoutEffect(() => {
	// 	if(windowDim.winHeight < 266 )  {
	// 		setMaxFeatures(0);
	//     } else if(windowDim.winHeight < 341 ) {
	// 	 setMaxFeatures(1);
	//     } else if (windowDim.winHeight < 417) {
	// 	  setMaxFeatures(2);
	// 	} else if (windowDim.winHeight < 492) {
	// 	  setMaxFeatures(3);
	// 	} else {
	// 	  setMaxFeatures(4);
	// 	}
	//   }, [windowDim.winHeight]);
