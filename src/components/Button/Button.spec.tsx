import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button.component';
import { UserIcon } from '../Icon';

describe('Button', () => {
  test('renders button label', () => {
    const label = 'Click me';
    const { getByText } = render(<Button label={label} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  test('renders button children', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  test('renders start icon', () => {
    const icon = <UserIcon testid='user-icon'/>;
    const { getByTestId } = render(<Button startIcon={icon} data-test-id='button-with-start-icon' />);
    expect(getByTestId('button-with-start-icon')).toContainElement(getByTestId('user-icon'));
  });

  test('renders end icon', () => {
    const icon = <UserIcon testid='user-icon'/>;
    const { getByTestId } = render(<Button endIcon={icon} data-test-id='button-with-end-icon' />);
    expect(getByTestId('button-with-end-icon')).toContainElement(getByTestId('user-icon'));
  });

  test('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disables button when disabled prop is true', () => {
    const { getByRole } = render(<Button disabled>Click me</Button>);
    expect(getByRole('button')).toBeDisabled();
  });
});