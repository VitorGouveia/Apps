import { ButtonHTMLAttributes, memo } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};

const ShimmerButton: React.FC = memo(() => {
  return <button>shimmer</button>;
});

export { ShimmerButton };

export default memo(Button);
