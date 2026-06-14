import {
  ArrowRight,
  CheckCircle,
  Compass,
  Globe,
  Sparkle,
} from "@phosphor-icons/react";
import { Button } from "../components/ds";
import {
  DocPage,
  DocSection,
  InventoryLink,
  Showcase,
  SideNav,
  VisualSwatch,
} from "../components/doc/DocLayout";
import { BORDER_TOKENS, FOUNDATIONS_NAV, SPACING_TOKENS } from "../data/tokenInventory";
import styles from "../components/doc/DocLayout.module.css";

const RADIUS_DEMOS = BORDER_TOKENS.filter((t) => t.path.includes("radius") && t.preview === "radius");

const COLOR_GROUPS = [
  {
    label: "Superficies",
    items: [
      { name: "Surface", cssVar: "--visai-surface", usage: "Fondo base" },
      { name: "Elevated", cssVar: "--visai-surface-elevated", usage: "Tarjetas" },
      { name: "Sunken", cssVar: "--visai-surface-sunken", usage: "Inputs" },
      { name: "Insight", cssVar: "--visai-surface-insight", usage: "Capa VisAI" },
    ],
  },
  {
    label: "Texto",
    items: [
      { name: "Primary", cssVar: "--visai-text-primary" },
      { name: "Secondary", cssVar: "--visai-text-secondary" },
      { name: "Tertiary", cssVar: "--visai-text-tertiary" },
    ],
  },
  {
    label: "Acentos",
    items: [
      { name: "Teal", cssVar: "--visai-accent", usage: "Acciones" },
      { name: "Lavanda", cssVar: "--visai-accent-secondary", usage: "VisAI" },
    ],
  },
  {
    label: "Estados",
    items: [
      { name: "Success", cssVar: "--visai-success" },
      { name: "Warning", cssVar: "--visai-warning" },
      { name: "Error", cssVar: "--visai-error" },
      { name: "Info", cssVar: "--visai-info" },
    ],
  },
];

export function FoundationsPage() {
  return (
    <DocPage
      title="Foundations"
      description="Referencia visual del sistema. Valores canónicos en tokens/*.json y design.md (raíz del repo). Export portable: design-system/dist/."
    >
      <div className={styles.pageWithSide}>
        <SideNav items={FOUNDATIONS_NAV} />
        <div>
          <DocSection
            id="colors"
            title="Colors"
            description="Teal = confianza y acciones. Lavanda = capa VisAI. Usa el toggle superior para comparar light y dark."
          >
            {COLOR_GROUPS.map((group) => (
              <div key={group.label} style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--visai-text-secondary)", marginBottom: 12 }}>
                  {group.label}
                </p>
                <div className={styles.swatchGrid}>
                  {group.items.map((item) => (
                    <VisualSwatch key={item.name} {...item} />
                  ))}
                </div>
              </div>
            ))}
            <Showcase title="Texto sobre superficies">
              <div style={{ display: "grid", gap: 12, width: "100%" }}>
                <div style={{ padding: 16, background: "var(--visai-surface-elevated)", borderRadius: 8, border: "1px solid var(--visai-border-default)" }}>
                  <p style={{ margin: 0, color: "var(--visai-text-primary)", fontWeight: 600 }}>Text primary</p>
                  <p style={{ margin: "4px 0 0", color: "var(--visai-text-secondary)", fontSize: 14 }}>Text secondary</p>
                  <p style={{ margin: "4px 0 0", color: "var(--visai-text-tertiary)", fontSize: 12 }}>Text tertiary</p>
                </div>
                <div style={{ padding: 16, background: "var(--visai-accent)", borderRadius: 8 }}>
                  <p style={{ margin: 0, color: "var(--visai-text-on-accent)", fontWeight: 500 }}>Text on accent</p>
                </div>
                <div style={{ padding: 16, background: "var(--visai-surface-insight)", borderRadius: 8 }}>
                  <p style={{ margin: 0, color: "var(--visai-text-on-insight)", fontWeight: 500 }}>Text on insight</p>
                </div>
              </div>
            </Showcase>
            <InventoryLink category="color" />
          </DocSection>

          <DocSection
            id="layout-grid"
            title="Layout grid"
            description="Grilla de 12 columnas. Contenedor máximo 1280px."
          >
            <Showcase title="12 columnas">
              <div className={styles.gridDemo} style={{ width: "100%" }}>
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className={styles.gridCol}>{i + 1}</div>
                ))}
              </div>
            </Showcase>
            <Showcase title="Span de ejemplo — 8 + 4">
              <div className={styles.gridDemo} style={{ width: "100%" }}>
                <div className={styles.gridCol} style={{ gridColumn: "span 8" }}>span 8</div>
                <div className={styles.gridCol} style={{ gridColumn: "span 4" }}>span 4</div>
              </div>
            </Showcase>
            <InventoryLink category="layout" />
          </DocSection>

          <DocSection
            id="connections"
            title="Connections"
            description="Estados interactivos. Cumplen WCAG 2.1 AA."
          >
            <div className={styles.connectionGrid}>
              <div className={styles.connectionCard}>
                <p style={{ margin: "0 0 8px", fontSize: 12, color: "var(--visai-text-tertiary)" }}>Link</p>
                <a href="#connections">Explorar programas en Irlanda</a>
              </div>
              <div className={styles.connectionCard}>
                <p style={{ margin: "0 0 8px", fontSize: 12, color: "var(--visai-text-tertiary)" }}>Focus ring</p>
                <Button style={{ boxShadow: "var(--visai-focus-ring)" }}>Tab aquí</Button>
              </div>
              <div className={`${styles.connectionCard} ${styles.connectionSelected}`}>
                <p style={{ margin: "0 0 4px", fontSize: 12, color: "var(--visai-accent-secondary)" }}>Selección</p>
                <span style={{ fontSize: 14 }}>Ítem activo</span>
              </div>
              <div className={styles.connectionCard}>
                <p style={{ margin: "0 0 8px", fontSize: 12, color: "var(--visai-text-tertiary)" }}>Disabled</p>
                <Button disabled>Deshabilitado</Button>
              </div>
            </div>
            <InventoryLink category="connection" />
          </DocSection>

          <DocSection
            id="typography"
            title="Typography"
            description="Figtree — geométrica, amigable, alta legibilidad."
          >
            <Showcase>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
                <p style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", margin: 0 }}>Display — Tu camino al extranjero</p>
                <p style={{ fontSize: 28, fontWeight: 600, margin: 0 }}>H1 — Opciones para tu perfil</p>
                <p style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>H2 — Requisitos de la visa</p>
                <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>H3 — Universidad de Melbourne</p>
                <p style={{ fontSize: 16, margin: 0 }}>Body — Te acompañamos en cada paso del proceso.</p>
                <p style={{ fontSize: 14, color: "var(--visai-text-secondary)", margin: 0 }}>Body sm — Matrícula anual · 18 meses</p>
                <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>Label — País de destino</p>
                <p style={{ fontSize: 12, color: "var(--visai-text-tertiary)", margin: 0 }}>Caption — Actualizado junio 2026</p>
              </div>
            </Showcase>
            <Showcase title="Pesos">
              <span style={{ fontWeight: 400 }}>Regular 400</span>
              <span style={{ fontWeight: 500 }}>Medium 500</span>
              <span style={{ fontWeight: 600 }}>Semibold 600</span>
              <span style={{ fontWeight: 700 }}>Bold 700</span>
            </Showcase>
            <InventoryLink category="typography" />
          </DocSection>

          <DocSection id="spacing" title="Spacing" description="Escala base 4px. Densidad limpia y amplia.">
            <Showcase title="Escala visual">
              {SPACING_TOKENS.filter((t) => t.preview === "spacing").map((s) => (
                <div key={s.path} className={styles.spacingRow} style={{ width: "100%" }}>
                  <span style={{ width: 48, fontSize: 14, fontWeight: 500 }}>{s.value}</span>
                  <div className={styles.spacingBar} style={{ width: parseInt(s.value!, 10) }} />
                </div>
              ))}
            </Showcase>
            <InventoryLink category="spacing" />
          </DocSection>

          <DocSection
            id="elevations"
            title="Elevations"
            description="Sin box-shadows. Elevación por superficie y borde."
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
              <div className={`${styles.elevationCard} ${styles.elevation0}`}>Level 0 — surface</div>
              <div className={`${styles.elevationCard} ${styles.elevation1}`}>Level 1 — card</div>
              <div className={`${styles.elevationCard} ${styles.elevation2}`}>Level 2 — popover</div>
              <div className={`${styles.elevationCard} ${styles.elevation3}`}>Level 3 — insight</div>
            </div>
            <InventoryLink category="elevation" />
          </DocSection>

          <DocSection id="borders-radius" title="Borders & radius">
            <Showcase title="Border radius">
              <div className={styles.radiusRow}>
                {RADIUS_DEMOS.map((r) => (
                  <div key={r.path} className={styles.radiusItem}>
                    <div className={styles.radiusBox} style={{ borderRadius: r.value }} />
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{r.path.split(".").pop()}</span>
                    <span style={{ fontSize: 12, color: "var(--visai-text-tertiary)" }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </Showcase>
            <Showcase title="Border width">
              {[
                { label: "thin", px: 1 },
                { label: "medium", px: 2 },
                { label: "thick", px: 3 },
              ].map((b) => (
                <div key={b.label} className={styles.borderWidthRow}>
                  <span style={{ width: 72, fontSize: 14, fontWeight: 500 }}>{b.label}</span>
                  <div className={styles.borderWidthLine} style={{ height: b.px, background: "var(--visai-accent)" }} />
                  <span>{b.px}px</span>
                </div>
              ))}
            </Showcase>
            <InventoryLink category="border" />
          </DocSection>

          <DocSection id="sizes" title="Sizes">
            <Showcase title="Control heights">
              <div className={styles.sizeRow}>
                <div className={styles.sizeControl} style={{ height: 32 }}>sm</div>
                <div className={styles.sizeControl} style={{ height: 40 }}>md</div>
                <div className={styles.sizeControl} style={{ height: 48 }}>lg</div>
                <div className={styles.sizeControl} style={{ height: 44, width: 44, minWidth: 44 }}>44</div>
              </div>
            </Showcase>
            <Showcase title="Icon sizes">
              <div className={styles.iconRow}>
                {[16, 20, 24, 32].map((s) => (
                  <div key={s} style={{ textAlign: "center" }}>
                    <Globe size={s} color="var(--visai-accent)" />
                    <p style={{ fontSize: 11, marginTop: 6, color: "var(--visai-text-tertiary)" }}>{s}px</p>
                  </div>
                ))}
              </div>
            </Showcase>
            <InventoryLink category="size" />
          </DocSection>

          <DocSection id="layout" title="Layout" description="Breakpoints y estructura de página.">
            <Showcase title="Breakpoints">
              <div className={styles.breakpointBar}>
                <div className={styles.breakpointSegment} style={{ flex: 640 }}>sm</div>
                <div className={styles.breakpointSegment} style={{ flex: 128 }}>md</div>
                <div className={styles.breakpointSegment} style={{ flex: 256 }}>lg</div>
                <div className={styles.breakpointSegment} style={{ flex: 256 }}>xl</div>
              </div>
            </Showcase>
            <Showcase title="Sidebar">
              <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
                <div style={{ width: 280, background: "var(--visai-surface-elevated)", border: "1px solid var(--visai-border-default)", borderRadius: 8, padding: 16, fontSize: 13 }}>
                  Sidebar
                </div>
                <div style={{ flex: 1, background: "var(--visai-surface-sunken)", borderRadius: 8, padding: 16, fontSize: 13 }}>
                  Contenido principal
                </div>
              </div>
            </Showcase>
            <InventoryLink category="layout" />
          </DocSection>

          <DocSection
            id="iconography"
            title="Iconography"
            description="Phosphor Icons — Regular base, Duotone para activo y capa IA."
          >
            <div className={styles.iconRow}>
              <div style={{ textAlign: "center" }}>
                <Globe size={24} weight="regular" color="var(--visai-text-secondary)" />
                <p style={{ fontSize: 12, marginTop: 8 }}>Regular</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <Compass size={24} weight="duotone" color="var(--visai-accent)" />
                <p style={{ fontSize: 12, marginTop: 8 }}>Duotone</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <Sparkle size={24} weight="duotone" color="var(--visai-accent-secondary)" />
                <p style={{ fontSize: 12, marginTop: 8 }}>Duotone IA</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <CheckCircle size={24} weight="regular" color="var(--visai-success)" />
                <p style={{ fontSize: 12, marginTop: 8 }}>Estado</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <ArrowRight size={20} weight="regular" color="var(--visai-accent)" />
                <p style={{ fontSize: 12, marginTop: 8 }}>Inline</p>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "var(--visai-text-secondary)", marginTop: 16 }}>
              <a href="https://phosphoricons.com" target="_blank" rel="noopener noreferrer">phosphoricons.com</a>
            </p>
            <InventoryLink category="iconography" />
          </DocSection>

          <DocSection id="animations" title="Animations">
            <Showcase title="Pasa el cursor — distintas duraciones">
              <div className={styles.motionGrid}>
                {[
                  { label: "fast", ms: 150 },
                  { label: "normal", ms: 250 },
                  { label: "slow", ms: 400 },
                ].map((m) => (
                  <div key={m.ms} className={styles.motionBox}>
                    <div
                      className={styles.motionDemo}
                      style={{ transitionDuration: `${m.ms}ms` }}
                    />
                    <span style={{ fontSize: 12, color: "var(--visai-text-secondary)" }}>{m.label}</span>
                  </div>
                ))}
              </div>
            </Showcase>
            <InventoryLink category="motion" />
          </DocSection>
        </div>
      </div>
    </DocPage>
  );
}
