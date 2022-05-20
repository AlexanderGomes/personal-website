import React, {useRef} from 'react'
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import { softShadows } from '@react-three/drei'
import THREE from 'three'

const Box = ({position}) => { 
  const mesh = useRef()
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh position={position} ref={mesh}>
    <pointLight intensity={0.5} />
    <boxBufferGeometry attach="geometry" args={[1, 1,1]}/>
    <meshBasicMaterial attach="material" color='grey' className='color__app'/>
   </mesh>
  )

}
 


const Three = () => {


  return (
    <div>
     <Canvas className='box'>
      <Box  position={[0, 3, 0]} />
      <Box  position={[-3,1, 0]} />
      <Box  position={[2.30, 1, 0]} />
     </Canvas>
    </div>
  )
}

export default Three