import { ButtonHTMLAttributes, memo } from "react";

import styles from "./styles.module.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Is this the principal call to action on the page?
   */
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <button className={styles.container}>{label}</button>;
};

const ShimmerButton: React.FC = memo(() => {
  return <Button label="shimmer" />;
});

export { ShimmerButton };

export default memo(Button);
