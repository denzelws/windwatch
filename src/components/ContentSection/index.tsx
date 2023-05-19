import Button from 'components/Button'
import * as S from './styles'

import { Search } from '@styled-icons/ionicons-outline/Search'

export type ContentSectionProps = {
  title: string
  temperature: string
  status: string
}

const ContentSection = () => (
  <S.ContentSection>
    <S.InputWrapper>
      <S.InputBox>
        <Search size={22} />
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
        <S.Box>
          <S.City>New York</S.City>
          <S.Temperature>12</S.Temperature>
          <S.Status>Raining</S.Status>
        </S.Box>
        <S.Box>
          <S.City>New York</S.City>
          <S.Temperature>12</S.Temperature>
          <S.Status>Raining</S.Status>
        </S.Box>
        <S.Box>
          <S.City>New York</S.City>
          <S.Temperature>12</S.Temperature>
          <S.Status>Raining</S.Status>
        </S.Box>
      </S.InformationBox>
    </S.InformationWrapper>
  </S.ContentSection>
)

export default ContentSection
