import { Canvas } from "@react-three/fiber";
import { Planets } from "../components/Planets";


export default function TestPage() {
    return (
      <>
        <Canvas camera={{ fov: 40, position: [-15,45,42], rotation: [-0.7,0,-0.5]}}>
          <Planets/>
        </Canvas>

      </>
    )
}