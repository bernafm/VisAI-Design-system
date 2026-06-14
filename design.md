# VisAI Design System

> **Autoridad única en materia visual.** El directorio `/tokens/` define los valores. Este archivo define las **reglas** y el **orden de lectura**. El PRD no sobrescribe estas reglas.

- **Dirección:** Corriente serena
- **Versión:** 1.0.0
- **Accesibilidad:** WCAG 2.1 Level AA

---

## Contexto para agentes de IA

**Sí: `tokens/*.json` + `design.md` es suficiente** para que un agente implemente UI sin servidor ni URL.

| Archivo | Rol |
|---|---|
| `tokens/index.json` | Punto de entrada, reglas, orden de lectura |
| `tokens/{categoría}.json` | Valores canónicos (light/dark, paths, descripciones) |
| `tokens/components.json` | API de componentes |
| `design.md` | Reglas de uso y contexto (este archivo) |

El agente **no necesita** el HTML del sitio de documentación. Los valores viven en JSON; `design.md` aporta reglas que el JSON no repite (teal vs lavanda, tono de UI, restricciones).

**Regla clave:** nunca inferir hex, px o paths desde `design.md` ni desde el HTML exportado. Siempre resolver desde `tokens/*.json`.

---

## Compartir con humanos (HTML exportado)

El sitio en `design-system/` es una **herramienta de desarrollo y referencia visual**, no la fuente de verdad.

Para compartirlo:

```bash
cd design-system
npm run build
```

La carpeta **`design-system/dist/`** contiene HTML + assets estáticos. Puedes:

- Comprimirla en zip y enviarla
- Subirla a Netlify Drop, Vercel, Google Drive (vista web), o cualquier hosting estático
- **Referencia en vivo:** [vis-ai-design-system.vercel.app](https://vis-ai-design-system.vercel.app) (Foundations · Inventory · Components)
- No requiere `localhost` ni un puerto fijo

| Sección del sitio | Para humanos | Para agentes IA |
|---|---|---|
| Foundations | Referencia visual | No usar como fuente de valores |
| Inventory | Tabla legible (espejo del JSON) | Preferir `tokens/*.json` |
| Components | Ver estados interactivos | Preferir `tokens/components.json` |

**HTML + `design.md` juntos:** útil si compartes el repo o el zip con alguien que *también* use un agente — el humano abre el HTML, el agente lee JSON + `design.md`. El HTML solo no reemplaza a los tokens JSON.

---

## Reglas obligatorias

1. **Tokens semánticos** — nunca hardcodear valores.
2. **Teal** (`color.accent`) → acciones, links, confianza.
3. **Lavanda** (`color.accent-secondary`) → capa VisAI, insights, wordmark "AI".
4. Sin box-shadows ni gradientes.
5. Tipografía: **Figtree** (ver `tokens/typography.json`).
6. Iconos: [Phosphor Icons](https://phosphoricons.com) — Regular base, Duotone activo/IA.
7. Tono UI: culto y cercano, sin tecnicismos.
8. Cumplir WCAG 2.1 AA (ver `tokens/color.json`).

---

## Identidad — Corriente serena

**Personalidad:** Equilibrada y contemplativa — profundidad humana (teal) y luz inteligente (lavanda).

**Wordmark:** **Vis** semibold + **AI** medium en `color.accent-secondary`.

---

## Dónde encontrar cada cosa

| Necesitas… | Lee… |
|---|---|
| Colores light/dark | `tokens/color.json` |
| Tipografía | `tokens/typography.json` |
| Espaciado | `tokens/spacing.json` |
| Bordes y radius | `tokens/border.json` |
| Elevación | `tokens/elevation.json` |
| Tamaños | `tokens/size.json` |
| Layout y grid | `tokens/layout.json` |
| Estados interactivos | `tokens/connection.json` |
| Animaciones | `tokens/motion.json` |
| Iconografía | `tokens/iconography.json` |
| API de componentes | `tokens/components.json` |
| Referencia visual (humanos) | [vis-ai-design-system.vercel.app](https://vis-ai-design-system.vercel.app) o `design-system/dist/` tras `npm run build` |

---

## Estructura del repositorio

```
tokens/              ← Valores canónicos (JSON) — contexto IA
design.md            ← Reglas y orden de lectura — contexto IA
design-system/       ← Código fuente del sitio de documentación
design-system/dist/  ← Export HTML (generado, portable)
PRD.md               ← Producto (no define visual)
```

---

## Componentes implementados

Ver `tokens/components.json`. Implementación React en `design-system/src/components/ds/`: Button, TextInput, TextArea, Select, Checkbox, Radio, Toggle, Card, InsightPanel, Callout, Pill, Divider, Modal, ChecklistItem, ProgressBar.
