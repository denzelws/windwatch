import { useState, useEffect } from 'react'
import { getWeatherData } from 'utils/weatherApi'

export type WeatherData = {
  name: string
  main: {
    temp: number
  }
  weather: {
    description: string
  }[]
}

const useWeatherDataList = (cities: string[]) => {
  const [weatherDataList, setWeatherDataList] = useState<
    (WeatherData | null)[]
  >([])

  useEffect(() => {
    const fetchWeatherData = async () => {
      const dataPromises = cities.map((city) => getWeatherData(city))
      const weatherData = await Promise.all(dataPromises)
      setWeatherDataList(weatherData)
    }

    if (typeof window !== 'undefined') {
      fetchWeatherData()
    }
  }, []) // Empty dependency array to ensure it runs only on the client side

  return weatherDataList
}

export default useWeatherDataList
