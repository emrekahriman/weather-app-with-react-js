import React from 'react'
import { useSelector } from 'react-redux'


function InfoCard() {
  const {city} = useSelector(state => state.city)

  return (
    <div className="w-80 sm:w-[30rem] px-4 py-6 rounded-3xl shadow-lg bg-white text-coloryek ">
      <div className="text-center">
        <h2 className="text-4xl mb-10">{city ? city.name : 'N/A'}</h2>
      </div>
      <div className="grid grid-rows-[auto,1fr] grid-cols-2 gap-0 my-6">
        <div className="grid place-items-center">
          <span className="text-7xl font-extralight">{city ? city.weather.temp : '?'}°C</span>
        </div>
        <div className="grid place-items-center">
          <span className="font-bold text-lg">{city ? city.weather.main : 'N/A'}</span>
          <span>Min: {city ? city.weather.min : '?'}°C</span>
          <span>Max: {city ? city.weather.max : '?'}°C</span>
        </div>
        <div className="col-span-2 grid place-content-center">
          <div className="bg-black w-40 h-40 rounded-full grid place-items-center shadow-xl">
            {city ? <img src={`https://openweathermap.org/img/wn/${city.weather.icon}@4x.png`} alt="Weather Icon" /> : <img className='animate-pulse' src="https://avatars.githubusercontent.com/u/59236526?s=120&v=4" alt="emrekhrmn" /> }
            
          </div>
        </div>
        <div className="grid place-items-center">
          <span className="text-6xl font-extralight">{city ? city.weather.feels_like : '?'}°C</span>
          <span>Feels Like</span>
        </div>
        <div className="grid place-items-center">
          <span className="text-6xl font-extralight">{city ? city.weather.humidity : '?'}%</span>
          <span>Humidity</span>
        </div>
      </div>
    </div>
  )
}

export default InfoCard