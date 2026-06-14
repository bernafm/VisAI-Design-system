import type { ReactNode } from "react";
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from "@phosphor-icons/react";
import styles from "./Callout.module.css";

type Tone = "info" | "success" | "warning" | "error";

const icons = {
  info: Info,
  success: CheckCircle,
  warning: Warning,
  error: WarningCircle,
};

export function Callout({
  tone = "info",
  title,
  children,
  showIcon = true,
}: {
  tone?: Tone;
  title?: string;
  children: ReactNode;
  showIcon?: boolean;
}) {
  const Icon = icons[tone];

  return (
    <div className={`${styles.callout} ${styles[tone]}`} role={tone === "error" ? "alert" : "status"}>
      {showIcon && <Icon size={20} weight="regular" className={styles.icon} aria-hidden="true" />}
      <div>
        {title && <p className={styles.title}>{title}</p>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

type PillTone = "neutral" | "accent" | "insight" | "success" | "warning" | "error" | "info";

export function Pill({
  tone = "neutral",
  size = "md",
  children,
}: {
  tone?: PillTone;
  size?: "sm" | "md";
  children: ReactNode;
}) {
  return (
    <span className={`${styles.pill} ${styles[tone]} ${styles[`pill-${size}`]}`}>
      {children}
    </span>
  );
}

export function ProgressBar({
  value,
  label,
  showValue = true,
}: {
  value: number;
  label?: string;
  showValue?: boolean;
}) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={styles.progressWrapper}>
      {(label || showValue) && (
        <div className={styles.progressHeader}>
          {label && <span className={styles.progressLabel}>{label}</span>}
          {showValue && <span className={styles.progressValue}>{clamped}%</span>}
        </div>
      )}
      <div
        className={styles.progressTrack}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div className={styles.progressFill} style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
}
