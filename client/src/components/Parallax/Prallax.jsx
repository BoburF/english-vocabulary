import React from 'react'
import Parallax from 'parallax-js'
import { useEffect, useRef } from 'react';
import './Parallax.scss'


const Prallax = () => {
    const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [])

  return (
    <div className='parallax' ref={sceneEl}>
        <div className="circle top_left" data-depth="0.5"></div>
        <div className="circle top_right" data-depth="0.2"></div>
        <div className="circle bottom_left" data-depth="0.3"></div>
        <div className="circle bottom_right" data-depth="0.4"></div>
        <div className="circle bottom_bottom" data-depth="0.1"></div>
    </div>
  )
}

export default Prallax