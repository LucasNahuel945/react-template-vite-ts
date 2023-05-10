import { ButtonProps } from './Button.props'

export const Button = ({
  startIcon,
  endIcon,
  disabled = false,
  onClick,
  children,
  label,
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {startIcon && <span className="btn-icon">{startIcon}</span>}
      {children || label}
      {endIcon && <span className="btn-icon">{endIcon}</span>}
    </button>
  );
}
