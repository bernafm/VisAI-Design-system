import type { InputHTMLAttributes, ReactNode } from "react";
import { Check } from "@phosphor-icons/react";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
  indeterminate?: boolean;
}

export function Checkbox({ label, id, className = "", indeterminate, ...props }: CheckboxProps) {
  const inputId = id ?? `checkbox-${String(label).toLowerCase().replace(/\s/g, "-")}`;

  return (
    <label className={`${styles.label} ${className}`} htmlFor={inputId}>
      <input
        type="checkbox"
        id={inputId}
        className={styles.input}
        ref={(el) => {
          if (el) el.indeterminate = !!indeterminate;
        }}
        {...props}
      />
      <span className={styles.box} aria-hidden="true">
        <Check size={14} weight="bold" />
      </span>
      {label && <span className={styles.text}>{label}</span>}
    </label>
  );
}

export function Radio({ label, id, className = "", ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label?: ReactNode }) {
  const inputId = id ?? `radio-${String(label).toLowerCase().replace(/\s/g, "-")}`;

  return (
    <label className={`${styles.label} ${className}`} htmlFor={inputId}>
      <input type="radio" id={inputId} className={styles.radioInput} {...props} />
      <span className={styles.radio} aria-hidden="true" />
      {label && <span className={styles.text}>{label}</span>}
    </label>
  );
}

export function Toggle({ label, id, checked, className = "", ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label?: string }) {
  const inputId = id ?? `toggle-${label?.toLowerCase().replace(/\s/g, "-")}`;

  return (
    <label className={`${styles.toggleLabel} ${className}`} htmlFor={inputId}>
      <input type="checkbox" role="switch" id={inputId} className={styles.toggleInput} checked={checked} {...props} />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} />
      </span>
      {label && <span className={styles.text}>{label}</span>}
    </label>
  );
}
