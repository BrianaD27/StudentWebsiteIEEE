import React from 'react'
import NavBar from '../../components/NavBar'
import blueBg from "../../assets/blueBg.png"

const PhalanxHomePage = () => {
  return (
    <div className="h-auto flex flex-col">

      <div className="relative">
        <img
          className="h-[50vh] sm:h-[50vh] w-full object-cover relative"
          src={blueBg}
          alt=""
        />


        <div className="absolute inset-0 flex flex-row text-center justify-center">
          <div className="flex flex-col justify-center items-center mx-6 md:mx-8">
            <h1 className="text-md font-bold text-center text-white px-4 py-2 bg-IEEE-Orange  rounded-full shadow-xl uppercase">
              The Phalanx
            </h1>

            <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold mt-6 text-white uppercase">
              About IEEE{" "}
              <span className="text-IEEE-Orange font-extrabold uppercase">vsu</span>
            </h1>
           
            <p className="text-Blue-Grey mt-5 px-10 md:px-20 text-lg font-bold">
              Where Trojan spirit meets technological excellence—building the future one innovation at a time.
            </p>
            

          </div>

          <div className="absolute top-4 right-4 text-md font-medium text-white bg-IEEE-Orange px-4 py-1 rounded-lg shadow-lg">
            <p>Last Updated: February 25, 2026 at 10:48 AM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhalanxHomePage