import React, { useState, useEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, OrbitControls, ScrollControls} from '@react-three/drei'
import MacContainer from './MacContainer'
import './style.css'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <div className="navbar line text-white flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
      {["iPhone","iPad","ios","Products","services","iPhone","iPad","ios","Products","services"].map((e,i)=>(
        <a href='' className='text-white font-[400] text-sm capitalize' key={i}>{e}</a>
      ))}
      </div>
      <div className='absolute flex flex-col items-center text-white top-32  left-1/2 -translate-x-1/2 font-["Helvetica_Now_Display"]'>
         <h3 className='text-7xl masked tracking-tighter font-[700] mt-[-20px]'>macbook pro.</h3>
         <h5 className='mt-[-10px]'>Oh so Pro !</h5>
         <p className='text-center w-3/4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam quasi, facilis.</p>
      </div>
    <Canvas camera={{fov:12,position:[0,-10, 220]}}>
      <OrbitControls />
      <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
      <ScrollControls pages={3}>
         <MacContainer />
      </ScrollControls>
   </Canvas>
  </div>
  )
  
}

export default App