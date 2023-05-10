import { render } from '@testing-library/react';
import { Lista } from './List.components';

describe('Lista', () => {
  test('renders a list of items', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const { getByText } = render(<Lista items={items} />);
    items.forEach((item) => {
      const listItem = getByText(item);
      expect(listItem).toBeInTheDocument();
      expect(listItem.tagName).toBe('LI');
    });
  });
});