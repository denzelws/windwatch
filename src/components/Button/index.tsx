import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  size?: 'normal' | 'small'
  backgroundColor?: 'black' | 'darkpurple'
  icon?: JSX.Element
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  children,
  icon,
  size = 'normal',
  backgroundColor = 'black',
  type = 'button'
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      hasIcon={!!icon}
      backgroundColor={backgroundColor}
      type={type}
    >
      {!!icon && icon}
      <span>{children}</span>
    </S.Wrapper>
  )
}

export default Button
