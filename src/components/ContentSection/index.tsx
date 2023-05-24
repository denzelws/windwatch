import axios from 'axios'
import { ChangeEvent, FormEvent, useState } from 'react'

import { API_ENDPOINT, API_KEY } from '../../../config'
import { transformData } from 'utils/weatherApi'
import useWeatherDataList, { WeatherData } from 'hooks/useWeatherDataList'
import Button from 'components/Button'

import * as S from './styles'

const ContentSection = () => {
  const cities = ['New York', 'London', 'Canada']
  const [text, setText] = useState('')
  const [weatherForecast, setWeatherForecast] = useState<WeatherData | null>(
    null
  )

  const weatherDataList = useWeatherDataList(cities)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setText(inputValue)
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (text) {
      axios
        .get(`${API_ENDPOINT}?q=${text}&appid=${API_KEY}`)
        .then((response) => {
          if (response.status === 200) {
            return response.data
          }
        })
        .then((data) => {
          console.log(data)
          const transformedData = transformData(data)
          setWeatherForecast(transformedData)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  return (
    <S.ContentSection>
      <S.InputWrapper>
        <S.InputBox>
          <form onSubmit={handleSearch}>
            <S.SearchIcon size={22} />
            <S.Input
              type="text"
              placeholder="Enter your city..."
              value={text}
              onChange={handleChange}
            />
            <Button backgroundColor="darkpurple" size="small" type="submit">
              Search
            </Button>
          </form>
        </S.InputBox>
      </S.InputWrapper>

      <S.InformationWrapper>
        <S.TitleWrapper>
          <S.Title>Recent Place</S.Title>
        </S.TitleWrapper>

        <S.InformationBox>
          {weatherForecast ? (
            <>
              <S.Box>
                <S.City>{weatherForecast.name}</S.City>
                <S.Temperature>{weatherForecast.main.temp}</S.Temperature>
                <S.Status>{weatherForecast.weather[0].description}</S.Status>
              </S.Box>
            </>
          ) : (
            weatherDataList.map((weatherData, index) => (
              <S.Box key={index}>
                {weatherData && (
                  <>
                    <S.City>{weatherData.name}</S.City>
                    <S.Temperature>{weatherData.main.temp}</S.Temperature>
                    <S.Status>{weatherData.weather[0].description}</S.Status>
                  </>
                )}
              </S.Box>
            ))
          )}
        </S.InformationBox>
      </S.InformationWrapper>
    </S.ContentSection>
  )
}

export default ContentSection
