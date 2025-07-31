import React, {useRef, useMemo, useState, useEffect} from 'react'
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {Points, PointMaterial} from "@react-three/drei";
import { color } from 'framer-motion';

interface CometTrailProps {
    count?: number;
    speed?: number;
    spread?: number; 
    colors?: string
}

interface CometHeadProps {
    position?: [number, number, number];
    color?: string;
};
interface CometData {
    position: [number, number, number];
    rotation: [number, number, number];
    headColor: string;
    trailColor: string;
    particleCount: number;
    speed: number;
    spread: number;
};

interface CometSystemProps {
    comets: CometData[];
}
const CometTrail: React.FC = ({count =200, speed=0.02, spread=2, colors="#60a5fa"}: CometTrailProps) => {
    const points = useRef<THREE.Points>(null);
    const [positions, velocities] = useMemo(()=> {
        const positions = new Float32Array(count * 3);
        const velocities= new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // start particles in a line behind the comet head
            positions[i3] = (Math.random()- 0.5) * spread;
            positions[i3 + 1] = (Math.random() - 0.5) * spread;
            positions[i3 + 2] = -Math.random() * 5

            velocities[i3] = (Math.random()- 0.5) * 0.01;
            velocities[i3 + 1] = (Math.random()- 0.5) * 0.01;
            velocities[i3 + 2] = Math.random() * speed + 0.01;
        }
        return [positions, velocities]
    }, [count, spread, speed]);

    useFrame(() => {
        if(!points.current) return;
        const positions = points.current.geometry.attributes.position.array as Float32Array;
        for(let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] += velocities[i3];
            positions[i3 + 1] += velocities[i3 + 1];
            positions[i3 + 2] = velocities[i3 + 2]

            if (positions[i3+2]> 3) {
                positions[i3] = (Math.random() - 0.5) * spread;
                positions[i3 + 1] = (Math.random() - 0.5) * spread;
                positions[i3 + 2] = -5;
            }
        }
        points.current.geometry.attributes.position.needsUpdate = true;
    })
    return(
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3} 
                    />
            </bufferGeometry>
            <pointsMaterial
                transparent
                color={colors}
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />

        </points>
    );
}

const CometHead = ({position=[0,0,0], color="#f2f343"}: CometHeadProps) => {
    const mesh = useRef<THREE.Mesh>(null);
    useFrame((state)=> {
        if(mesh.current) {
            mesh.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
            mesh.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 1;

        };
        return(
            <mesh ref={mesh} position={position}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshBasicMaterial color={color} />
                <mesh scale={2}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshBasicMaterial color={color}
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending} />
                </mesh>
            </mesh>
        );
    }
)
}
const CometSystem = ({comets}: CometSystemProps) => {
    return(
        <>
        {comets.map((comet, index) => {
            <group key={index} position={comet.position} rotation={comet.rotation}>
                
            </group>
        })}
        </>
    )
}
