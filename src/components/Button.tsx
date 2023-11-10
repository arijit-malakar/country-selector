interface ButtonProps {
  type: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, icon, children, onClick }) => {
  let classNames = "btn ";
  switch (type) {
    case "back":
      classNames += "btn-with-icon btn-back";
      break;
    case "theme-switch":
      classNames += "btn-with-icon btn-theme-toggle";
      break;
    case "country":
      classNames += "btn-country";
      break;
  }

  return (
    <button className={classNames} onClick={onClick}>
      {icon && <span className="btn-icon-wrapper">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
