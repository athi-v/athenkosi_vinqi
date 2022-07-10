import React from 'react'
import Slider from '../components/Slider' 

//The Slider is imported from the components
//to avoid a cluster, I decided to have slider and its imports on its own 
const Hero = () => {
  return (
    <div className='hero'>
        <Slider /> 
    </div>
  )
}

export default Hero