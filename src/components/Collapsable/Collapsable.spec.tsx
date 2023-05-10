import { render, fireEvent } from '@testing-library/react';
import { Collapsable } from './Collapsable.component';
import { UserIcon } from '../Icon';

describe('Collapsable component', () => {
  test('should render title', () => {
    const title = 'My Collapsable';
    const { getByText } = render(<Collapsable title={title}>Content</Collapsable>);

    expect(getByText(title)).toBeInTheDocument();
  });

  test('should show content when header is clicked', () => {
    const content = 'Collapsable content';
    const { getByText, queryByText } = render(
      <Collapsable title="My Collapsable">{content}</Collapsable>
    );

    expect(queryByText(content)).not.toBeInTheDocument();

    const header = getByText('My Collapsable');
    fireEvent.click(header);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should hide content when header is clicked twice', () => {
    const content = 'Collapsable content';
    const { getByText, queryByText } = render(
      <Collapsable title="My Collapsable" open={true}>{content}</Collapsable>
    );

    const header = getByText('My Collapsable');
    fireEvent.click(header);

    expect(queryByText(content)).not.toBeInTheDocument();

    fireEvent.click(header);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should show start icon', () => {
    const icon = <UserIcon testid="user-icon" />;
    const { getByTestId } = render(
      <Collapsable title="My Collapsable" startIcon={icon}>Content</Collapsable>
    );

    expect(getByTestId('user-icon')).toBeInTheDocument();
  });
});