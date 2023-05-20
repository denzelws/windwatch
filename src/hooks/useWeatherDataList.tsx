import { useEffect, useState } from 'react'
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

    fetchWeatherData()
  }, [cities])

  return weatherDataList
}

export default useWeatherDataList