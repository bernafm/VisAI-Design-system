import { useEffect, useRef, type ReactNode } from "react";
import { X } from "@phosphor-icons/react";
import { Button } from "./Button";
import styles from "./Modal.module.css";

export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };
    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, [onClose]);

  if (!open) return null;

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="modal-title">
      <div className={styles.header}>
        <h2 id="modal-title" className={styles.title}>{title}</h2>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">
          <X size={20} />
        </button>
      </div>
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </dialog>
  );
}

export function ModalDemo() {
  return (
    <Modal
      open
      onClose={() => {}}
      title="Confirmar país de destino"
      footer={
        <>
          <Button variant="ghost">Cancelar</Button>
          <Button>Confirmar</Button>
        </>
      }
    >
      <p>¿Deseas continuar con Irlanda como país de destino? Podrás cambiarlo más adelante.</p>
    </Modal>
  );
}
