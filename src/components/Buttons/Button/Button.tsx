import { Link } from 'react-router-dom';
import scrollToBlock from 'assets/utils/scrollToBlock';
import css from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'BorderLight' | 'BorderDark' | 'Black' | 'White';
  size?: 'big' | 'small';
  full?: boolean;
  blank?: boolean;
  disabled?: boolean;
  scrollto?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  to,
  href,
  onClick,
  variant,
  size,
  full = false,
  blank = false,
  disabled = false,
  scrollto,
  children,
}) => {
  const buttonClasses = [
    css.Button,
    size === 'big' ? css.Big : '',
    size === 'small' ? css.Small : '',
    variant ? css[variant] : '',
    full ? css.Full : '',
  ].join(' ');

  const commonProps = {
    className: buttonClasses,
    target: blank ? '_blank' : undefined,
    rel: blank ? 'noreferrer' : undefined,
    'data-scrollto': scrollto,
    disabled,
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.dataset.scrollto) {
      scrollToBlock(e.currentTarget.dataset.scrollto);
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  if (to) {
    return (
      <Link to={to} {...commonProps}>
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} {...commonProps}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={handleClick} {...commonProps}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
