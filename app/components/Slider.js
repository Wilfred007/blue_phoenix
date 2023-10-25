"use client"
import React, { useState } from 'react'
import { sliderData } from './sliderData'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const slider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl text-center font-extrabold p-4">Testimonials</h1>
      <div className="relative flex justify-center p-4">
        {sliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-gray-300/70 cursor-pointer select-none z-[2] hover:text-gray-500 ease-in duration-1000"
                size={30}
              />
              {index === current && (
                <>
                  <h1 className="p-5 text-gray-500">{slide.words}</h1>
                  <h1 className="text-3xl text-green-400 text-center p-4 font-extrabold">
                    {slide.author}
                  </h1>
                  <h1 className="font-bold text-gray-400 text-center">
                    {slide.post}
                  </h1>
                  <h1 className="font-bold text-center mt-4">
                    {slide.company}
                  </h1>
                </>
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] text-gray-300/70 cursor-pointer select-none z-[2] hover:text-gray-500 ease-in duration-1000"
                size={30}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default slider