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
        <p>Width : <strong>{windowDim.winWidth}</strong> </p>
        <p>Height : <strong>{windowDim.winHeight}</strong> </p>
    </div>
  )
}

export default ScreenSize

