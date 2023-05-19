import { render, screen } from '@testing-library/react'

import ContentSection from '.'

describe('<ContentSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<ContentSection />)

    expect(screen.getByRole('heading', { name: /ContentSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
