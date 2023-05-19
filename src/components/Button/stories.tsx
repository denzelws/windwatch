import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

import { WeatherCloudy } from '@styled-icons/typicons/WeatherCloudy'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: { table: { disable: true } }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Search'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  children: 'Open Maps',
  icon: <WeatherCloudy />
}
