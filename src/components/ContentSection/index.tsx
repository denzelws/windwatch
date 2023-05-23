import Button from 'components/Button'
import * as S from './styles'
import useWeatherDataList from 'hooks/useWeatherDataList'
import { ChangeEvent, FormEvent, useState } from 'react'

const ContentSection = () => {
  const cities = ['New York', 'London', 'Canada']
  const [text, setText] = useState('')
  const weatherDataList = useWeatherDataList(cities)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setText(inputValue)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitted:', text)
  }

  const handleIconSubmit = () => {
    console.log('Icon Submitted:', text)
  }

  return (
    <S.ContentSection>
      <S.InputWrapper>
        <S.InputBox>
          <form onSubmit={handleSubmit}>
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
          {weatherDataList.map((weatherData, index) => (
            <S.Box key={index}>
              {weatherData && (
                <>
                  <S.City>{weatherData.name}</S.City>
                  <S.Temperature>{weatherData.main.temp}</S.Temperature>
                  <S.Status>{weatherData.weather[0].description}</S.Status>
                </>
              )}
            </S.Box>
          ))}
        </S.InformationBox>
      </S.InformationWrapper>
    </S.ContentSection>
  )
}

export default ContentSection
