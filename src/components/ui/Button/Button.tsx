import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  rightIcon,
  leftIcon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

      {children}

      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
}
