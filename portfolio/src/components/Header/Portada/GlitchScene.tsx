import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Glitch, EffectComposer } from '@react-three/postprocessing';
import { TextureLoader } from 'three';
import { GlitchMode } from 'postprocessing';

import portada from '@/assets/PORTADA.png';

const BackgroundImage = () => {
    const texture = useLoader(TextureLoader, portada);
    return (
        <mesh position={[0,0, -10]} scale={[20,15,1]}>
            <planeGeometry args={[1,1]}/>
            <meshBasicMaterial map={texture} />
        </mesh>
    );
};

export const GlitchScene: React.FC = () => {
    return (

        <Canvas 
            className="glitch-canvas" 
            camera={{ fov: 75, position: [0, 0, 5] }}>

            <Suspense fallback={null}>
                
                <ambientLight intensity={0.5} />
                
                <BackgroundImage />

                <EffectComposer>
                    <Glitch 
                    delay={[0.5, 2.5] as any}     
                    duration={[0.1, 0.4] as any}  
                    strength={[0.1, 0.3] as any} 
                        mode={GlitchMode.SPORADIC}
                    />
                </EffectComposer>

            </Suspense>
        </Canvas>
    );
};