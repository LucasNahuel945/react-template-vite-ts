import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal.component';

describe('Modal', () => {
    test('renders nothing when isOpen is false', () => {
        const props = {
          isOpen: false,
          onClose: jest.fn(),
          children: <div>Modal content</div>,
        };

        const { queryByText } = render(<Modal {...props} />);
        expect(queryByText(/modal/i)).not.toBeInTheDocument();
      });

  test('renders a modal when isOpen is true', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal content</p>
      </Modal>
    );
    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
  });

  test('calls onClose when clicking the backdrop or the close button', () => {
    const onClose = jest.fn();
    const id = 'my-awesome-modal';

    render(
      <Modal isOpen={true} onClose={onClose} testid={id}>
        <p>Modal content</p>
      </Modal>
    );

    const backdrop = screen.getByTestId('backdrop-for-' + id);
    const closeButton = screen.getByTestId('close-for-' + id);
    
    fireEvent.click(backdrop);
    fireEvent.click(closeButton);
    
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});