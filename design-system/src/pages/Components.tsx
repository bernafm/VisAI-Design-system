import { useState } from "react";
import { Sparkle, Upload } from "@phosphor-icons/react";
import {
  DocPage,
  DocSection,
  PropTable,
  Showcase,
} from "../components/doc/DocLayout";
import {
  Button,
  Callout,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  ChecklistItemDemo,
  Divider,
  InsightPanel,
  Modal,
  Pill,
  ProgressBar,
  Radio,
  Select,
  TextArea,
  TextInput,
  Toggle,
} from "../components/ds";

function ComponentDoc({
  id,
  name,
  description,
  props,
  children,
}: {
  id: string;
  name: string;
  description: string;
  props: { name: string; type: string; default?: string; required?: boolean; description?: string }[];
  children: React.ReactNode;
}) {
  return (
    <DocSection id={id} title={name} description={description}>
      {children}
      <h3 style={{ fontSize: 16, margin: "24px 0 12px" }}>Propiedades</h3>
      <PropTable props={props} />
    </DocSection>
  );
}

export function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [radio, setRadio] = useState("a");

  return (
    <DocPage
      title="Components"
      description="Componentes del sistema con estados, variantes y API documentada. Especificación completa en tokens/components.json."
    >
      <ComponentDoc
        id="button"
        name="Button"
        description="Acción principal o secundaria. Touch target mínimo 44px en size lg."
        props={[
          { name: "variant", type: "'primary' | 'secondary' | 'ghost' | 'danger'", default: "primary" },
          { name: "size", type: "'sm' | 'md' | 'lg'", default: "md" },
          { name: "disabled", type: "boolean", default: "false" },
          { name: "loading", type: "boolean", default: "false" },
          { name: "fullWidth", type: "boolean", default: "false" },
          { name: "leftIcon", type: "ReactNode" },
          { name: "rightIcon", type: "ReactNode" },
          { name: "children", type: "ReactNode", required: true },
        ]}
      >
        <Showcase title="Variantes">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </Showcase>
        <Showcase title="Tamaños">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Showcase>
        <Showcase title="Estados">
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button leftIcon={<Upload size={18} />}>Con icono</Button>
        </Showcase>
      </ComponentDoc>

      <ComponentDoc
        id="text-input"
        name="TextInput"
        description="Campo de texto de una línea con label, helper y error."
        props={[
          { name: "value", type: "string", required: true },
          { name: "onChange", type: "(value) => void", required: true },
          { name: "label", type: "string" },
          { name: "placeholder", type: "string" },
          { name: "helperText", type: "string" },
          { name: "error", type: "string" },
          { name: "disabled", type: "boolean", default: "false" },
          { name: "required", type: "boolean", default: "false" },
          { name: "id", type: "string", required: true },
        ]}
      >
        <Showcase>
          <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 400 }}>
            <TextInput label="Nombre completo" placeholder="Ej. María González" id="demo-name" />
            <TextInput label="Email" placeholder="tu@email.com" helperText="Usaremos este correo para avisarte." id="demo-email" />
            <TextInput label="Presupuesto" error="Ingresa un monto válido." id="demo-budget" defaultValue="abc" />
          </div>
        </Showcase>
      </ComponentDoc>

      <ComponentDoc
        id="textarea-select"
        name="TextArea & Select"
        description="Controles de formulario multilínea y selector."
        props={[
          { name: "label", type: "string" },
          { name: "error", type: "string" },
          { name: "disabled", type: "boolean" },
        ]}
      >
        <Showcase>
          <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 400 }}>
            <TextArea label="Proyecciones" placeholder="¿Qué esperas lograr?" id="demo-proj" rows={3} />
            <Select
              label="País de destino"
              id="demo-country"
              options={[
                { value: "ie", label: "Irlanda" },
                { value: "es", label: "España" },
                { value: "au", label: "Australia" },
              ]}
            />
          </div>
        </Showcase>
      </ComponentDoc>

      <ComponentDoc
        id="checkbox-radio-toggle"
        name="Checkbox, Radio & Toggle"
        description="Controles de selección con labels asociados."
        props={[
          { name: "checked", type: "boolean", required: true },
          { name: "onChange", type: "function", required: true },
          { name: "label", type: "ReactNode | string" },
          { name: "disabled", type: "boolean", default: "false" },
          { name: "id", type: "string", required: true },
        ]}
      >
        <Showcase title="Estados">
          <Checkbox label="Acepto recibir orientación" checked={checked} onChange={() => setChecked(!checked)} id="cb1" />
          <Checkbox label="Deshabilitado" checked={false} disabled id="cb2" />
          <Radio name="demo" value="a" label="Opción A" checked={radio === "a"} onChange={() => setRadio("a")} id="r1" />
          <Radio name="demo" value="b" label="Opción B" checked={radio === "b"} onChange={() => setRadio("b")} id="r2" />
          <Toggle label="Notificaciones" checked={toggle} onChange={() => setToggle(!toggle)} id="t1" />
        </Showcase>
      </ComponentDoc>

      <ComponentDoc
        id="card-insight"
        name="Card & InsightPanel"
        description="Contenedores elevados. InsightPanel usa acento lavanda para la capa VisAI."
        props={[
          { name: "variant", type: "'default' | 'borderless'", default: "default" },
          { name: "size", type: "'base' | 'lg'", default: "base" },
        ]}
      >
        <Showcase>
          <Card style={{ width: "100%", maxWidth: 560 }}>
            <InsightPanel
              icon={<Sparkle size={18} weight="duotone" />}
              title="Perspectiva VisAI"
            >
              Tu perfil encaja mejor con programas de 12–18 meses.
            </InsightPanel>
            <CardBody>
              <p style={{ margin: 0, fontSize: 14, color: "var(--visai-text-secondary)" }}>
                Contenido de la tarjeta con recomendación de programa.
              </p>
            </CardBody>
          </Card>
        </Showcase>
      </ComponentDoc>

      <ComponentDoc
        id="callout-pill"
        name="Callout & Pill"
        description="Mensajes contextuales y etiquetas de estado."
        props={[
          { name: "tone", type: "'info' | 'success' | 'warning' | 'error' | 'neutral' | 'accent' | 'insight'", default: "info" },
          { name: "size", type: "'sm' | 'md'", default: "md", description: "Solo Pill" },
        ]}
      >
        <Showcase title="Callouts">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
            <Callout tone="info">La visa suele tardar entre 6 y 8 semanas.</Callout>
            <Callout tone="success" title="Requisito cumplido">Pasaporte vigente verificado.</Callout>
            <Callout tone="warning">Quedan 15 días para el plazo de matrícula.</Callout>
            <Callout tone="error">No pudimos procesar el documento.</Callout>
          </div>
        </Showcase>
        <Showcase title="Pills">
          <Pill>Neutral</Pill>
          <Pill tone="accent">Recomendado</Pill>
          <Pill tone="insight">VisAI</Pill>
          <Pill tone="success" size="sm">Completado</Pill>
        </Showcase>
      </ComponentDoc>

      <ComponentDoc
        id="checklist"
        name="ChecklistItem"
        description="Ítem de checklist de requisitos de visa con estados pending, active y completed."
        props={[
          { name: "label", type: "string", required: true },
          { name: "description", type: "string", description: "Visible solo en estado active" },
          { name: "status", type: "'pending' | 'active' | 'completed'", default: "pending" },
          { name: "action", type: "ReactNode" },
        ]}
      >
        <Showcase>
          <Card style={{ width: "100%", maxWidth: 560 }}>
            <CardHeader trailing={<Pill tone="info" size="sm">3 de 4</Pill>}>
              Documentos para tu solicitud
            </CardHeader>
            <CardBody style={{ padding: "8px 16px 16px" }}>
              <ChecklistItemDemo />
            </CardBody>
          </Card>
        </Showcase>
      </ComponentDoc>

      <ComponentDoc
        id="progress"
        name="ProgressBar"
        description="Barra de progreso para checklist o flujos."
        props={[
          { name: "value", type: "number (0–100)", required: true },
          { name: "label", type: "string" },
          { name: "showValue", type: "boolean", default: "true" },
        ]}
      >
        <Showcase>
          <div style={{ width: "100%", maxWidth: 400 }}>
            <ProgressBar value={75} label="Progreso del checklist" />
          </div>
        </Showcase>
      </ComponentDoc>

      <ComponentDoc
        id="modal"
        name="Modal"
        description="Diálogo con foco atrapado, cierre con Escape y role=dialog."
        props={[
          { name: "open", type: "boolean", required: true },
          { name: "onClose", type: "() => void", required: true },
          { name: "title", type: "string", required: true },
          { name: "children", type: "ReactNode", required: true },
          { name: "footer", type: "ReactNode" },
        ]}
      >
        <Showcase>
          <Button onClick={() => setModalOpen(true)}>Abrir modal</Button>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Confirmar país de destino"
            footer={
              <>
                <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancelar</Button>
                <Button onClick={() => setModalOpen(false)}>Confirmar</Button>
              </>
            }
          >
            <p style={{ margin: 0 }}>¿Deseas continuar con Irlanda como país de destino?</p>
          </Modal>
        </Showcase>
      </ComponentDoc>

      <ComponentDoc
        id="divider"
        name="Divider"
        description="Separador horizontal estructural."
        props={[
          { name: "spacing", type: "'none' | 'sm' | 'md' | 'lg'", default: "md" },
        ]}
      >
        <Showcase>
          <span>Sección A</span>
          <Divider />
          <span>Sección B</span>
        </Showcase>
      </ComponentDoc>
    </DocPage>
  );
}
