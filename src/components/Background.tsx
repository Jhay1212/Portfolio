import {Canvas} from "@react-three/fiber"
import { OrbitControls,  Sparkles } from "@react-three/drei"
const Background = () => {
  return (
    <div className="h-full w-full z--10">
        <Canvas camera={{ position: [0, 0, 5] }}>
            <OrbitControls />
            <Sparkles size={10} count={100} speed={0.1} />
            <mesh>
                <boxGeometry args={[10, 10, 10]} />
                <meshNormalMaterial />
            </mesh>
        </Canvas>
    </div>
  )
}

export default Background