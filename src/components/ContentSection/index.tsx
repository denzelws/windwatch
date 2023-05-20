import Button from 'components/Button'
import * as S from './styles'
import useWeatherDataList from 'hooks/useWeatherDataList'

const ContentSection = () => {
  const cities = ['New York', 'London', 'Canada']
  const weatherDataList = useWeatherDataList(cities)

  return (
    <S.ContentSection>
      <S.InputWrapper>
        <S.InputBox>
          <S.SearchIcon size={22} />
          <S.Input type="text" placeholder="Enter your city..." />
          <Button backgroundColor="darkpurple" size="small">
            Search
          </Button>
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
