import Clock from '../components/Clock';
import { OrbitControls} from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Link } from "react-router-dom";
import PostEffects from './postEffects';
import { Suspense, useState } from 'react';
import { Planets } from '../components/Planets';
import { Comet } from '../components/Comet';
import { Asteroids } from '../components/Asteroids';
import { Orbits } from '../components/Orbits';
import { Coordinates } from '../components/Coordinates';

function MainPage() {
  const [isToggle_orbits, setToggleOrbits] = useState(true)
  const [isToggle_asteroids, setToggleAsteroids] = useState(true)
  const [isToggle_comet, setToggleComet] = useState(true)
  const [isToggle_planets, setTogglePlanets] = useState(true)
  const [isToggle_names, setToggleNames] = useState(true)
  const [isToggle_All, setToggleAll] = useState(true)

  function Toggle_Orbits() {
    setToggleOrbits(isToggle_orbits => !isToggle_orbits);
  }
  function Toggle_Asteroids() {
    setToggleAsteroids(isToggle_asteroids => !isToggle_asteroids);
  }
  function Toggle_Comet() {
    setToggleComet(isToggle_comet => !isToggle_comet);
  }
  function Toggle_Planets() {
    setTogglePlanets(isToggle_planets => !isToggle_planets);
  }
  function Toggle_Names() {
    setToggleNames(isToggle_names => !isToggle_names);
  }
  function Toggle_All() {
    setToggleAll(isToggle_All => !isToggle_All);
  }

  return (
    <>
      <div className='absolute h-[100vh] w-[100vw]'>
        <Canvas camera={{position: [6,11,24]}}>
          <Suspense fallback={null}>
            <OrbitControls/>
            {isToggle_All? <>
            {isToggle_names? <Coordinates/> : ''}
            {isToggle_orbits? <Orbits/> : ''}
            {isToggle_asteroids? <Asteroids/>  : ''}
            {isToggle_planets? <Planets/>  : ''}
            {isToggle_comet? <Comet/>  : ''}
            </> : ''}
            <PostEffects/>
          </Suspense>
        </Canvas>
      </div>

      <Clock/>

      <div className="absolute text-white top-0 left-0 p-2 m-2">
        <div className='font-semibold p-1 text-3xl border-y border-orange-600 text-white flex'>
          <div className='border rounded-full p-8 m-2'></div>
          Q U A Z A R <br/>
          Cartographics
        </div>
        <div className='text-3xl font-semibold m-1'>
          Sagali system
        </div>
        <div className='text-lg m-1'>
          Objects count: <br/>
          Stars: 1 <br/>
          Planets: 6 <br/>
          Moons: 3 <br/>
          Asteroid belts: 2
        </div>
      </div>

      <div className="absolute left-0 bottom-32 m-2 p-2">
        <div className='text-white text-2xl border-orange-600 border-y-2'>
          Data visualization:
        </div>

        <div className='text-def-small grid grid-cols-4 m-1'>
          <div className='flex flex-col text-center'>
            all <br/>
            names <br/>
            orbits
          </div>
          <div>
            <div onClick={Toggle_All} className='visual-button'> {isToggle_All?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg> : ''}
            </div>
            <div onClick={Toggle_Names} className='visual-button'> {isToggle_names?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg> : ''}
            </div>
            <div onClick={Toggle_Orbits} className='visual-button'> {isToggle_orbits?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg> : ''}
            </div>
          </div>
          <div className='flex flex-col text-center'>
            planets <br/>
            asteroids<br/>
            comet
          </div>
          <div>
            <div onClick={Toggle_Planets} className='visual-button'> {isToggle_planets?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg> : ''}
            </div>
            <div onClick={Toggle_Asteroids} className='visual-button'> {isToggle_asteroids?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg> : ''}
            </div> 
            <div onClick={Toggle_Comet} className='visual-button'> {isToggle_comet?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg> : ''}
            </div>
          </div>
        </div>
      </div>

      <Link to="/SagaliStarSystem/about" className="about_button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-orange-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
      </Link>
      
      <div className='fixed bottom-14 left-0'>
          <Link className='object_button' to="/SagaliStarSystem/objects/1">
          HOK-542-R
          </Link>
          <Link className='object_button' to="/SagaliStarSystem/objects/2">
          HOK-535-R
          </Link>
          <Link className='object_button' to="/SagaliStarSystem/objects/3">
          HIQ-225
          </Link>
          <Link className='object_button' to="/SagaliStarSystem/objects/4">
          HIQ-402
          </Link>
          <Link className='object_button' to="/SagaliStarSystem/objects/5">
          HIQ-223
          </Link>
          <Link className='object_button' to="/SagaliStarSystem/objects/6">
          HIO-204
          </Link>
          <Link className='object_button' to="/SagaliStarSystem/objects/7">
          Sagitarious
          </Link>
      </div>

      <div className='fixed border-orange-200 border bottom-10 left-0 w-[100vw]'/>
    </>
  )
}

export default MainPage
