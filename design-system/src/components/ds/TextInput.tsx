import type { InputHTMLAttributes } from "react";
import styles from "./TextInput.module.css";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function TextInput({
  label,
  helperText,
  error,
  id,
  className = "",
  ...props
}: TextInputProps) {
  const inputId = id ?? `input-${label?.toLowerCase().replace(/\s/g, "-")}`;
  const describedBy = error
    ? `${inputId}-error`
    : helperText
      ? `${inputId}-helper`
      : undefined;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {props.required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`${styles.input} ${error ? styles.error : ""} ${className}`}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className={styles.errorText} role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${inputId}-helper`} className={styles.helper}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export function TextArea({
  label,
  helperText,
  error,
  id,
  rows = 4,
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  helperText?: string;
  error?: string;
}) {
  const inputId = id ?? `textarea-${label?.toLowerCase().replace(/\s/g, "-")}`;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        className={`${styles.input} ${styles.textarea} ${error ? styles.error : ""} ${className}`}
        aria-invalid={!!error}
        {...props}
      />
      {error && <p className={styles.errorText} role="alert">{error}</p>}
      {!error && helperText && <p className={styles.helper}>{helperText}</p>}
    </div>
  );
}

export function Select({
  label,
  error,
  id,
  options,
  className = "",
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}) {
  const inputId = id ?? `select-${label?.toLowerCase().replace(/\s/g, "-")}`;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <select
        id={inputId}
        className={`${styles.input} ${styles.select} ${error ? styles.error : ""} ${className}`}
        aria-invalid={!!error}
        {...props}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <p className={styles.errorText} role="alert">{error}</p>}
    </div>
  );
}
