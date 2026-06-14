import { DocPage, DocSection, TokenTable } from "../components/doc/DocLayout";
import { InventoryTokenTable } from "../components/doc/TokenPreview";
import { TOKEN_CATEGORIES } from "../data/tokenInventory";
import styles from "../components/doc/DocLayout.module.css";

const COMPONENTS = [
  { name: "Button", variants: "primary, secondary, ghost, danger", states: "default, hover, active, focus, disabled, loading", impl: "✓" },
  { name: "IconButton", variants: "default, ghost, insight", states: "default, hover, active, focus, disabled", impl: "—" },
  { name: "TextInput", variants: "—", states: "default, hover, focus, error, disabled", impl: "✓" },
  { name: "TextArea", variants: "—", states: "default, focus, error, disabled", impl: "✓" },
  { name: "Select", variants: "—", states: "default, focus, error, disabled", impl: "✓" },
  { name: "Checkbox", variants: "—", states: "unchecked, checked, indeterminate, focus, disabled", impl: "✓" },
  { name: "Radio", variants: "—", states: "unchecked, checked, focus, disabled", impl: "✓" },
  { name: "Toggle", variants: "—", states: "off, on, focus, disabled", impl: "✓" },
  { name: "Card", variants: "default, borderless", states: "—", impl: "✓" },
  { name: "InsightPanel", variants: "—", states: "—", impl: "✓" },
  { name: "Callout", variants: "info, success, warning, error", states: "—", impl: "✓" },
  { name: "Pill", variants: "neutral, accent, insight, success, warning, error, info", states: "—", impl: "✓" },
  { name: "Link", variants: "—", states: "default, hover, focus", impl: "✓" },
  { name: "Divider", variants: "—", states: "—", impl: "✓" },
  { name: "Modal", variants: "sm, md, lg", states: "open, closed", impl: "✓" },
  { name: "NavItem", variants: "—", states: "default, hover, active, focus", impl: "—" },
  { name: "ChecklistItem", variants: "—", states: "pending, active, completed", impl: "✓" },
  { name: "RecommendationCard", variants: "—", states: "—", impl: "—" },
  { name: "ProgressBar", variants: "—", states: "—", impl: "✓" },
];

const TOTAL_TOKENS = TOKEN_CATEGORIES.reduce((n, c) => n + c.tokens.length, 0);

export function InventoryPage() {
  return (
    <DocPage
      title="Inventory"
      description={`Fuente canónica legible: ${TOTAL_TOKENS} tokens + ${COMPONENTS.length} componentes. Los valores autoritativos viven en /tokens/*.json (raíz del repo). Esta página es su espejo; compártela exportando design-system/dist/ tras npm run build.`}
    >
      <DocSection
        id="inventory-role"
        title="Rol de esta sección"
        description="Para agentes de IA: leer /tokens/*.json + design.md en la raíz del repo. Para humanos: validar valores aquí o compartir design-system/dist/ (npm run build)."
      >
        <TokenTable
          headers={["Capa", "Ruta", "Contenido", "¿Canónico?"]}
          rows={[
            ["JSON", "tokens/*.json", "Valores, modos light/dark, API", "Sí"],
            ["Inventory", "design-system/dist/ → /inventory", "Espejo tabular del JSON", "Espejo"],
            ["Foundations", "design-system/dist/ → /foundations", "Demos visuales", "No"],
            ["Components", "design-system/dist/ → /components", "Estados y props interactivos", "API en components.json"],
            ["design.md", "design.md", "Reglas, orden de lectura, contexto", "Reglas sí; valores no"],
          ]}
        />
      </DocSection>

      <nav className={styles.inventoryNav} aria-label="Categorías de tokens">
        {TOKEN_CATEGORIES.map((cat) => (
          <a key={cat.id} href={`#tokens-${cat.id}`}>
            {cat.title} ({cat.tokens.length})
          </a>
        ))}
        <a href="#component-inventory">Components ({COMPONENTS.length})</a>
      </nav>

      {TOKEN_CATEGORIES.map((category) => (
        <DocSection
          key={category.id}
          id={`tokens-${category.id}`}
          title={category.title}
          description={`tokens/${category.file}`}
        >
          <p className={styles.inventoryCount}>{category.tokens.length} tokens</p>
          <InventoryTokenTable tokens={category.tokens} />
        </DocSection>
      ))}

      <DocSection
        id="component-inventory"
        title="Components"
        description="API definida en tokens/components.json"
      >
        <TokenTable
          headers={["Componente", "Variantes", "Estados", "Implementado"]}
          rows={COMPONENTS.map((c) => [c.name, c.variants, c.states, c.impl])}
        />
      </DocSection>

      <DocSection
        id="ai-consumption"
        title="AI consumption guide"
        description="Orden de lectura recomendado para agentes de IA."
      >
        <TokenTable
          headers={["Paso", "Acción"]}
          rows={[
            ["1", "Leer tokens/index.json — manifiesto y reglas"],
            ["2", "Leer tokens/meta.json — versión y restricciones"],
            ["3", "Leer tokens/{categoría}.json según necesidad — valores canónicos"],
            ["4", "Leer tokens/components.json — API de componentes"],
            ["5", "Consultar design.md — reglas de uso, no valores duplicados"],
            ["6", "Opcional: design-system/dist/ para validación humana; agentes no lo requieren"],
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
