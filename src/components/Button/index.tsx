import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  size?: 'normal' | 'small'
  backgroundColor?: 'black' | 'darkpurple'
  icon?: JSX.Element
}

const Button = ({
  children,
  icon,
  size = 'normal',
  backgroundColor = 'black'
}: ButtonProps) => (
  <S.Wrapper size={size} hasIcon={!!icon} backgroundColor={backgroundColor}>
    {!!icon && icon}
    <span>{children}</span>
  </S.Wrapper>
)

export default Button
