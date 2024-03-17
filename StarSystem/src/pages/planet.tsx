import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Link } from "react-router-dom"
import PostEffects from "./postEffects"
import Clock from "../components/Clock"

export default function Planet() {
  return (
    <>
      <div className='absolute h-[100vh] w-[100vw]'>
        <Canvas>
          <Suspense fallback={null}>
            <PostEffects/>
          </Suspense>
        </Canvas>
      </div>

      <div className="fixed text-white text-xl p-2 m-2 left-0 top-5">
        <div className='font-semibold p-1 text-3xl border-y border-orange-600 text-white flex'>
          <div className='border rounded-full p-8 m-2'></div>
          Q U A Z A R <br/>
          Cartographics
        </div>
        <div className="font-semibold text-2xl border-y border-orange-600 p-1 m-1">
          Planet 1
        </div>
        object type: star <br/>
        radius: <br/>
        gravity: <br/>
        surface temperature: <br/>
        atmosphere: <br/>
        composition: <br/>
        hydrogen: 35% <br/>
        etc <br/>
        axial tilt: <br/>
      </div>
    
      <Clock/>

      <Link to="/" className="back_button flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Back
      </Link>
    </>
  )
}