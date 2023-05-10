import { CloseIcon } from '../Icon';
import { ModalProps } from './Modal.props';

export const Modal = ({ isOpen, onClose, children, testid }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="backdrop" onClick={onClose} data-test-id={'backdrop-for-' + testid}/>
          <div className="modal" data-test-id={testid}>
            <button className="close-button" onClick={onClose} data-test-id={'close-for-' + testid}>
              <CloseIcon />
            </button>
            {children}
          </div>
        </>
      )}
    </>
  );
};
