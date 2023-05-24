import axios from 'axios'
import { API_KEY, API_ENDPOINT } from '../../config'
import { WeatherData } from 'hooks/useWeatherDataList'

const getWeatherData = async (cityName: string) => {
  const apiUrl = `${API_ENDPOINT}?q=${cityName}&appid=${API_KEY}`

  try {
    const response = await axios.get(apiUrl)
    return transformData(response.data)
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}

export const transformData = (data: WeatherData) => {
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
