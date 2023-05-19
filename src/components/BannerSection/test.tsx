import { screen } from '@testing-library/react'

import BannerSection from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<BannerSection />', () => {
  it('should render the heading', () => {
    renderWithTheme(<BannerSection />)

    expect(
      screen.getByRole('heading', { name: /provide you a world/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/The World's most accurate Forecaster/i)
    ).toBeInTheDocument()
  })
})
