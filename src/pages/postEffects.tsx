import { Environment, useEnvironment} from "@react-three/drei"
import { Bloom, DepthOfField, EffectComposer } from "@react-three/postprocessing";

function PostEffects() {
    const envMap = useEnvironment({ files: "/textures/HDR_blue_nebulae-1_4k.hdr"})
    return (
        <>
            <Environment map={envMap} background/>
            <ambientLight intensity={1}/>
            <EffectComposer>
                <DepthOfField focusDistance={0} focalLength={1} bokehScale={0.5} height={700} />
                <Bloom luminanceThreshold={0.01} luminanceSmoothing={2} height={300}/>
            </EffectComposer>
        </>
    )
}

export default PostEffects