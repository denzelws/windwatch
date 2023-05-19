import { Story, Meta } from '@storybook/react'
import Navbar from '.'

export default {
  title: 'Navbar',
  component: Navbar
} as Meta

export const Default: Story = () => <Navbar />
