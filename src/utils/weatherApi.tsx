import axios from 'axios'
import { WeatherData } from 'hooks/useWeatherDataList'

const cache = new Map()

const getWeatherData = async (cityName: string) => {
  if (cache.has(cityName)) {
    return cache.get(cityName)
  }

  const apiKey = 'ea4023385742a12398dfda46caa285da'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

  try {
    const response = await axios.get(apiUrl)
    return transformData(response.data)
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}

const transformData = (data: WeatherData) => {
  const kelvinToCelsius = (kelvin: number) => {
    const celsius = kelvin - 273.15
    return celsius.toFixed(2)
  }

  const celsiusTemp = kelvinToCelsius(data.main.temp)
  return {
    name: data.name,
    main: {
      temp: Number(celsiusTemp)
    },
    weather: [
      {
        description: data.weather[0].description
      }
    ]
  }
}

export { getWeatherData }
