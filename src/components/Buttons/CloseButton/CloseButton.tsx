interface CloseButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return <button type="button" className="popup-close" onClick={onClick}></button>;
};

export default CloseButton;
