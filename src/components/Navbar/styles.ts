import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const NavBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.gray};
    font-weight: bold;
    font-size ${theme.font.sizes.xsmall};
    align-items: center;
    gap: 4rem;
    cursor: pointer;
  `}
`
export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem;
  color: black;

  ${media.lessThan('medium')`
  display: flex;
  align-items: center;
  justify-content: center;

  ${NavBox}, button {
   display: none;
  }

  `}
`

export const Logo = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    color: #231942;
    text-align: center;

    > span {
      margin-left: 0.5rem;
    }

    ${media.lessThan('medium')`
    > span {
    display: none;
    }
  `}
  `}
`
