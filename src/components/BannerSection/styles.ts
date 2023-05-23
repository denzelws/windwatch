import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const BannerSectionBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 40vh;

  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    padding: ${theme.spacings.medium};
    color: #231942;
    font-weight: ${theme.font.bold};

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    text-align: left;
    padding: 0 ${theme.spacings.xxsmall};
  `}
  `}
`

export const BannerBox = styled.div`
  display: flex;
  align-items: center;
`

export const SectionBox = styled.div`
  display: flex;
  align-items: center;
`

export const SectionText = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: 3rem;
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    text-align: left;

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.medium};
    padding: 0 ${theme.spacings.xxsmall};
  `}
  `}
`
