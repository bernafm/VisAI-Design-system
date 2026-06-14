import type { ReactNode } from "react";
import { Check } from "@phosphor-icons/react";
import { Button } from "./Button";
import styles from "./ChecklistItem.module.css";

type Status = "pending" | "active" | "completed";

export function ChecklistItem({
  label,
  description,
  status = "pending",
  action,
}: {
  label: string;
  description?: string;
  status?: Status;
  action?: ReactNode;
}) {
  const completed = status === "completed";

  return (
    <div
      className={`${styles.item} ${styles[status]}`}
      aria-current={status === "active" ? "step" : undefined}
    >
      <div className={`${styles.check} ${completed ? styles.checked : ""}`} aria-hidden="true">
        {completed && <Check size={14} weight="bold" />}
      </div>
      <div className={styles.content}>
        <p className={`${styles.label} ${completed ? styles.done : ""}`}>{label}</p>
        {description && status === "active" && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export function ChecklistItemDemo() {
  return (
    <div className={styles.list}>
      <ChecklistItem label="Pasaporte vigente (mín. 6 meses)" status="completed" />
      <ChecklistItem label="Certificado de notas oficial" status="completed" />
      <ChecklistItem
        label="Resultado de examen de idioma"
        status="active"
        description="Sube el PDF con tu puntaje. Si aún no lo tienes, te guiamos para programar el examen."
        action={<Button variant="secondary" size="sm">Subir</Button>}
      />
      <ChecklistItem label="Comprobante de fondos" status="pending" />
    </div>
  );
}
