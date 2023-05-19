import styled, { css } from 'styled-components'

export const ContentSection = styled.div`
  display: flex;
  gap: 2rem;
`

export const InputWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
  background: #bde0fe;
  height: 25vh;
`

export const InputBox = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    height: 6.5rem;

    > button {
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    height: 4rem;
    border: none;
    outline: none;
    width: 50%;
    padding: ${theme.spacings.xsmall};
  `}
`

export const InformationWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-left: ${theme.spacings.small};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    text-align: left;
  `}
`

export const InformationBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 15rem;
    width: 15rem;
    margin: ${theme.spacings.xsmall};
    background: ${theme.colors.darkGray};
  `}
`

export const City = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const Temperature = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Status = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`
