import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "borderless";
  size?: "base" | "lg";
}

export function Card({ variant = "default", size = "base", children, className = "", style, ...props }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[size]} ${className}`} style={style} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, trailing }: { children: ReactNode; trailing?: ReactNode }) {
  return (
    <div className={styles.header}>
      <span className={styles.headerTitle}>{children}</span>
      {trailing}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`${styles.body} ${className}`} style={style}>
      {children}
    </div>
  );
}

export function InsightPanel({
  title = "Perspectiva VisAI",
  icon,
  children,
}: {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={styles.insight} role="note" aria-label={title}>
      <div className={styles.insightInner}>
        {icon && <div className={styles.insightIcon}>{icon}</div>}
        <div>
          <p className={styles.insightTitle}>{title}</p>
          <div className={styles.insightBody}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Divider({ spacing = "md" }: { spacing?: "none" | "sm" | "md" | "lg" }) {
  return <hr className={`${styles.divider} ${styles[`spacer-${spacing}`]}`} />;
}
