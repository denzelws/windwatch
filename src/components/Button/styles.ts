import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'backgroundColor'>

const wrapperModifiers = {
  normal: () => css`
    height: 5.5rem;
    width: 17rem;
  `,
  small: () => css`
    height: 4rem;
    width: 15rem;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 3rem;
      margin-right: ${theme.spacings.xxsmall};
    }
  `,
  black: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
  `,
  darkpurple: () => css`
    background: #231942;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, size, backgroundColor }) => css`
    cursor: pointer;
    display: align-flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xlarge};

    > span {
      font-size: ${theme.font.sizes.medium};
    }

    ${!!size && wrapperModifiers[size]()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${backgroundColor === 'black' && wrapperModifiers.black(theme)}
    ${backgroundColor === 'darkpurple' && wrapperModifiers.darkpurple()}
  `}
`
