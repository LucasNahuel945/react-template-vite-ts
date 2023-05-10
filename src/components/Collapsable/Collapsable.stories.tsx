import { useState } from "react"
import { Meta, StoryFn } from '@storybook/react'
import { Collapsable } from './Collapsable.component'
import { CollapsableProps } from './Collapsable.props'
import { CaretUpIcon, CaretDownIcon } from '../Icon'

export default {
  title: 'Components/Collapsable',
  component: Collapsable,
  argTypes: {
    children: { control: 'text' },
    open: { control: 'boolean' },
    startIcon: { control: 'text' },
    title: { control: 'text' },
  },
} as Meta

const Template: StoryFn<CollapsableProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.open || false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button className="collapsable-header" onClick={handleToggle}>
        {args.startIcon && args.startIcon}
        {args.title}
        {isOpen ? <CaretUpIcon /> : <CaretDownIcon />}
      </button>
      {isOpen && <div className="collapsable-content">{args.children}</div>}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  children: 'Content',
  open: false,
}