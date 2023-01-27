import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCity } from '../store/city';


function SearchArea() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    // Get city data from API
    const getCityData = async (cityName) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
            const data = await response.json();

            // Check if city exists in API else return false
            if (data.cod === 200) {
                console.log(data)
                return {
                    name: data.name,
                    weather: {
                        temp: Math.round(data.main.temp),
                        main: data.weather[0].main,
                        min: data.main.temp_min,
                        max: data.main.temp_max,
                        feels_like: Math.round(data.main.feels_like),
                        humidity: data.main.humidity,
                        icon: data.weather[0].icon,
                    },
                }
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = async e => {
        setSearch(e.target.value);
        // Get city data
        const city = await getCityData(e.target.value);
        // Set city data to redux store
        dispatch(setCity(city));
    }

    return (
        <>
            <h1 className="mb-5 sm:text-6xl text-5xl font-bold text-white drop-shadow-xl">Weather YEK</h1>
            <input onChange={handleInputChange} value={search} type="text" className="h-12 w-80 sm:w-[30rem] mb-5 rounded-3xl focus:outline-none px-4 text-center text-lg text-coloryek caret-coloryek placeholder:text-coloryek placeholder:opacity-50" placeholder='Please enter a city name' />
        </>
    )
}

export default SearchArea