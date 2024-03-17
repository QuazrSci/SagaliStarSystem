import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Link } from "react-router-dom"
import PostEffects from "./postEffects"
import Clock from "../components/Clock"
import { Gas_giant_1 } from "../components/Gas_giant_1"
import { Gas_giant_2 } from "../components/Gas_giant_2"
import { Planet_1 } from "../components/Planet_1"
import { Planet_2 } from "../components/Planet_2"
import { Planet_3 } from "../components/Planet_3"
import { Planet_4 } from "../components/Planet_4"
import { Star } from "../components/Star"

export default function Planet() {
  const indx = window.location.href.substring(window.location.href.length-1)
  return (
    <>
      <div className='absolute h-[100vh] w-[100vw]'>
        <Canvas camera={{position: [0,0,2.6]}}>
          <Suspense fallback={null}>
            { indx=="1"?  <Gas_giant_1/> : ''}
            { indx=="2"?  <Gas_giant_2/> : ''}
            { indx=="3"?  <Planet_1/> : ''}
            { indx=="4"?  <Planet_2/> : ''}
            { indx=="5"?  <Planet_3/> : ''}
            { indx=="6"?  <Planet_4/> : ''}
            { indx=="7"?  <Star/> : ''}
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
          %object_name%
        </div>
        object type: <br/>
        radius: <br/>
        gravity: <br/>
        surface temperature: <br/>
        atmosphere: <br/>
        composition:
          <div className="m-2">
          hydrogen: 35% <br/>
          etc
          </div>
        axial tilt:
      </div>
    
      <Clock/>

      <Link to="/SagaliStarSystem/" className="back_button flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Back
      </Link>
    </>
  )
}