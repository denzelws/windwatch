import Button from 'components/Button'
import useWeatherDataList from 'hooks/useWeatherDataList'
import { ChangeEvent, FormEvent, useState } from 'react'

import * as S from './styles'
import axios from 'axios'
import { API_KEY } from '../../../config'

const ContentSection = () => {
  const cities = ['New York', 'London', 'Canada']
  const [text, setText] = useState('')
  const [weatherForecast, setWeatherForecast] = useState<any>({})

  const weatherDataList = useWeatherDataList(cities)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setText(inputValue)
  }

  const handleIconSubmit = () => {
    console.log('Icon Submitted:', text)
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (text) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}`
        )
        .then((response) => {
          if (response.status === 200) {
            return response.data
          }
        })
        .then((data) => {
          console.log(data)
          setWeatherForecast(data)
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
            <S.SearchIcon size={22} onClick={handleIconSubmit} />
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
          {Object.keys(weatherForecast).length > 0 ? (
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
