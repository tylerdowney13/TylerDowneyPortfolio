import './ball.scss';
import NormalMap from '../../../assets/textures/NormalMap2.png';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from 'react';

const Ball = () => {

    const normalMap = useLoader(TextureLoader, NormalMap);

    const ballRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        ballRef.current.rotation.y = elapsedTime / 6;
    })



  return (
    <>
        <pointLight color="#2de2e6" position={[-5, 2, 2]} intensity={0.4} />
        <pointLight color="#d40078" position={[5, -3, 2]} intensity={0.4} />
        <Stars radius={300} depth={60} count={20000} factor={10} saturation={0} fade={true}/>
        <mesh ref={ballRef} position={[0, 0, 0]}>
            <sphereGeometry args={[1.7, 64, 64]} />
            <meshStandardMaterial normalMap={normalMap} />
        </mesh>
    </>
  )
}

export default Ball