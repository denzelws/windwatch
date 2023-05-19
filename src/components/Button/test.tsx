import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { WeatherCloudy } from '@styled-icons/typicons'

describe('<Button />', () => {
  it('should render button with primary color by default', () => {
    renderWithTheme(<Button>Search</Button>)

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /search/i })).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('should render button with backgroundBlack by default', () => {
    renderWithTheme(<Button backgroundColor="black">Search</Button>)

    expect(screen.getByRole('button', { name: /search/i })).toHaveStyle({
      backgroundColor: '#030517'
    })
  })

  it('should render button with darkpurple background', () => {
    renderWithTheme(<Button backgroundColor="darkpurple">Search</Button>)

    expect(screen.getByRole('button', { name: /search/i })).toHaveStyle({
      backgroundColor: '#231942'
    })
  })

  it('should render button with normal size by default', () => {
    renderWithTheme(<Button>Search</Button>)

    expect(screen.getByRole('button', { name: /search/i })).toHaveStyle({
      height: '5.5rem',
      width: '17rem'
    })
  })

  it('should render button with small size', () => {
    renderWithTheme(<Button size="small">Search</Button>)

    expect(screen.getByRole('button', { name: /search/i })).toHaveStyle({
      height: '4rem',
      width: '15rem'
    })
  })

  it('should render button with icon', () => {
    renderWithTheme(
      <Button icon={<WeatherCloudy data-testid="icon" />}>Open Maps</Button>
    )

    expect(screen.getByText(/open maps/i)).toBeInTheDocument()
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })
})
