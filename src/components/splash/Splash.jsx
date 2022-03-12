import './splash.scss';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Ball from '../3D/ball/Ball';
import Overlay from './Overlay';

const Splash = () => {
  return (
    <div className="splash">
        <Overlay />
        <Canvas>
            <Suspense fallback={null}>
                <Ball />
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Splash