import { useState } from "react"
import { CollapsableProps } from './Collapsable.props'
import { CaretUpIcon, CaretDownIcon } from '../Icon'

export const Collapsable = ({
    children,
    open,
    startIcon,
    title,
}: CollapsableProps) => {
  const [isOpen, setIsOpen] = useState(open || false);

  const handleToggle = () => { setIsOpen(!isOpen) };

  return (
    <div>
      <button className='collapsable-header' onClick={handleToggle}>
        {startIcon && startIcon}
        {title}
        { isOpen ? <CaretUpIcon /> : <CaretDownIcon /> }
      </button>
      { isOpen && <div className='collapsable-content'>{children}</div> }
    </div>
  );
}
