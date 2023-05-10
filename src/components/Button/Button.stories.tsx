import { StoryFn, Meta } from '@storybook/react';
import { Button } from './Button.component';
import { ButtonProps } from './Button.props';
import { UserIcon } from '../Icon';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    startIcon: { control: false },
    endIcon: { control: false },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  children: 'Button',
  startIcon: <UserIcon />,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  children: 'Button',
  endIcon: <UserIcon />,
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  children: 'Button',
  startIcon: <UserIcon />,
  endIcon: <UserIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
};