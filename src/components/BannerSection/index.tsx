/* eslint-disable react/no-unescaped-entities */
import { Container } from 'components/Container'
import * as S from './styles'

const BannerSection = () => (
  <S.BannerSectionBox>
    <S.BannerBox>
      <S.Title>Provide you a world wide weather forecast</S.Title>
    </S.BannerBox>

    <S.SectionBox>
      <S.SectionText>
        The World's most accurate Forecaster.With
        <br /> extreme weather on the rise. Its so easy to
        <br /> receive the weather conditions in your
        <br /> current location.
      </S.SectionText>
    </S.SectionBox>
  </S.BannerSectionBox>
)

export default BannerSection
