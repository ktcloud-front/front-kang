import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>
  
export const primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}

export const medium: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}
