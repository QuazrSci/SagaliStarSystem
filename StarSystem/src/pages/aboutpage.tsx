import { Link } from "react-router-dom"
import { Canvas } from '@react-three/fiber'
import Clock from "../components/Clock"
import PostEffects from "./postEffects";
import { Suspense } from "react";
import { Orbits } from "../components/Orbits";
import { Asteroids } from "../components/Asteroids";
import { Planets } from "../components/Planets";
import { Comet } from "../components/Comet";


function AboutPage() {
  return (
    <>
       <div className='absolute h-[100vh] w-[100vw]'>
        <Canvas camera={{ fov: 40, position: [-15,45,42], rotation: [-0.7,0,-0.5]}}>
          <Suspense fallback={null}>
              <Orbits/>
              <Asteroids/>
              <Planets/>
              <Comet/>
              <PostEffects/>
            </Suspense>
        </Canvas>
      </div>

      <Clock/>

      <div className="absolute text-white font-bold  text-xl top-0 left-0 p-2 m-2">
        <div className='font-semibold p-1 text-3xl border-y border-orange-600 text-white flex'>
          <div className='border rounded-full p-8 m-2'></div>
          Q U A Z A R <br/>
          Cartographics
        </div>
        
        <div className="border-orange-600 border-s-2 m-2 p-2">
          Sagali system is an art project. <br/>
          It's a simulator of a fiction star system <br/>
        </div>
        <br/>
        <div className="border-orange-600 border-s-2 m-2 p-2">
          Made with Vite, React, Three, drei, fiber, TailwindCSS
        </div>

        <div className="border-orange-600 border-s-2 m-2 p-2">
        Contact info: <br/>
        X(Twitter) at @QuazaraSci <br/>
        quazarasci00@gmail.com <br/>
        Personal website at <br/>
        https:\\quazarasci.carrd.co <br/>
        </div>
      </div>

      <Link to="/" className="back_button flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Back
      </Link>
    </>
  )
}

export default AboutPage
