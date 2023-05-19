import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Navbar />)

    expect(
      screen.getByRole('img', { name: /the icon shows a blue tornado/ })
    ).toBeInTheDocument()
    expect(screen.getByText(/windwatch/i)).toBeInTheDocument()
    expect(screen.getAllByRole('heading')).toHaveLength(5)
  })
})
