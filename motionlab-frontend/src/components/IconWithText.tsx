interface IconWithTextProps {
  icon: React.ReactNode;
  text: string | number;
  onClick?: () => void;
  className?: string;
}

const IconWithText = ({ icon, text, onClick, className }: IconWithTextProps) => {
  return (
    <div
      className={`icon-with-text ${className || ''}`}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      onClick={onClick}
    >
      {icon}
      <span className="icon-text">{text}</span>
    </div>
  );
};

export default IconWithText;
