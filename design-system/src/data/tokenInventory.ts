export type TokenEntry = {
  path: string;
  light?: string;
  dark?: string;
  value?: string;
  cssVar?: string;
  description?: string;
  preview?: "color" | "spacing" | "radius" | "size" | "text" | "motion" | "none";
};

export type TokenCategory = {
  id: string;
  title: string;
  file: string;
  tokens: TokenEntry[];
};

export const COLOR_TOKENS: TokenEntry[] = [
  { path: "color.surface", light: "#F6F7FB", dark: "#0E1218", cssVar: "--visai-surface", description: "Fondo base", preview: "color" },
  { path: "color.surface-elevated", light: "#FFFFFF", dark: "#161B26", cssVar: "--visai-surface-elevated", description: "Tarjetas, modales", preview: "color" },
  { path: "color.surface-sunken", light: "#EEF0F6", dark: "#0A0E14", cssVar: "--visai-surface-sunken", description: "Inputs, wells", preview: "color" },
  { path: "color.surface-insight", light: "#9B97E628", dark: "#AEA9F022", cssVar: "--visai-surface-insight", description: "Perspectiva VisAI", preview: "color" },
  { path: "color.text-primary", light: "#0F1A22", dark: "#ECEEF4", cssVar: "--visai-text-primary", description: "Títulos y cuerpo", preview: "color" },
  { path: "color.text-secondary", light: "#5A6270", dark: "#949AAA", cssVar: "--visai-text-secondary", description: "Metadatos", preview: "color" },
  { path: "color.text-tertiary", light: "#8A919E", dark: "#6E7585", cssVar: "--visai-text-tertiary", description: "Hints, placeholders", preview: "color" },
  { path: "color.text-on-accent", light: "#FFFFFF", dark: "#0F1A22", cssVar: "--visai-text-on-accent", description: "Texto en botones teal", preview: "color" },
  { path: "color.text-on-insight", light: "#0F1A22", dark: "#ECEEF4", cssVar: "--visai-text-on-insight", description: "Texto en insight panel", preview: "color" },
  { path: "color.border-default", light: "#DDE0EC", dark: "#282E3C", cssVar: "--visai-border-default", description: "Bordes estructurales", preview: "color" },
  { path: "color.border-strong", light: "#C5CAD8", dark: "#3A4154", cssVar: "--visai-border-strong", description: "Bordes de énfasis", preview: "color" },
  { path: "color.border-focus", light: "#0B6E78", dark: "#22B5C4", cssVar: "--visai-border-focus", description: "Anillo de foco", preview: "color" },
  { path: "color.accent", light: "#0B6E78", dark: "#22B5C4", cssVar: "--visai-accent", description: "Teal — CTAs, links", preview: "color" },
  { path: "color.accent-hover", light: "#095A62", dark: "#2EC9D8", cssVar: "--visai-accent-hover", description: "Hover teal", preview: "color" },
  { path: "color.accent-muted", light: "#0B6E7818", dark: "#22B5C422", cssVar: "--visai-accent-muted", description: "Fondo tintado teal", preview: "color" },
  { path: "color.accent-secondary", light: "#9B97E6", dark: "#AEA9F0", cssVar: "--visai-accent-secondary", description: "Lavanda — capa VisAI", preview: "color" },
  { path: "color.accent-secondary-muted", light: "#9B97E655", dark: "#AEA9F044", cssVar: "--visai-accent-secondary-muted", description: "Fondo tintado lavanda", preview: "color" },
  { path: "color.success", light: "#1A8A6B", dark: "#3FAE7A", cssVar: "--visai-success", preview: "color" },
  { path: "color.success-muted", light: "#1A8A6B18", dark: "#3FAE7A22", cssVar: "--visai-success-muted", preview: "color" },
  { path: "color.warning", light: "#B8720A", dark: "#E5A54B", cssVar: "--visai-warning", preview: "color" },
  { path: "color.warning-muted", light: "#B8720A18", dark: "#E5A54B22", cssVar: "--visai-warning-muted", preview: "color" },
  { path: "color.error", light: "#C43A52", dark: "#E87888", cssVar: "--visai-error", preview: "color" },
  { path: "color.error-muted", light: "#C43A5218", dark: "#E8788822", cssVar: "--visai-error-muted", preview: "color" },
  { path: "color.info", light: "#3D7A9E", dark: "#6A9FD4", cssVar: "--visai-info", preview: "color" },
  { path: "color.info-muted", light: "#3D7A9E18", dark: "#6A9FD422", cssVar: "--visai-info-muted", preview: "color" },
];

export const TYPOGRAPHY_TOKENS: TokenEntry[] = [
  { path: "typography.fontFamily.sans", value: "Figtree, system-ui, sans-serif", cssVar: "--visai-font-sans", preview: "text" },
  { path: "typography.fontWeight.regular", value: "400" },
  { path: "typography.fontWeight.medium", value: "500" },
  { path: "typography.fontWeight.semibold", value: "600" },
  { path: "typography.fontWeight.bold", value: "700" },
  { path: "typography.fontSize.display", value: "32px", description: "LH 1.25 · 600", preview: "text" },
  { path: "typography.fontSize.h1", value: "28px", description: "LH 1.29 · 600", preview: "text" },
  { path: "typography.fontSize.h2", value: "22px", description: "LH 1.27 · 600", preview: "text" },
  { path: "typography.fontSize.h3", value: "18px", description: "LH 1.33 · 600", preview: "text" },
  { path: "typography.fontSize.body", value: "16px", description: "LH 1.5 · 400", preview: "text" },
  { path: "typography.fontSize.body-sm", value: "14px", description: "LH 1.43 · 400", preview: "text" },
  { path: "typography.fontSize.label", value: "14px", description: "LH 1.43 · 500", preview: "text" },
  { path: "typography.fontSize.caption", value: "12px", description: "LH 1.33 · 400", preview: "text" },
  { path: "typography.letterSpacing.tight", value: "-0.02em" },
  { path: "typography.letterSpacing.normal", value: "0" },
  { path: "typography.letterSpacing.wide", value: "0.02em" },
];

export const SPACING_TOKENS: TokenEntry[] = [
  { path: "spacing.0", value: "0px", cssVar: "--visai-space-0", preview: "spacing" },
  { path: "spacing.1", value: "4px", cssVar: "--visai-space-1", preview: "spacing" },
  { path: "spacing.2", value: "8px", cssVar: "--visai-space-2", preview: "spacing" },
  { path: "spacing.3", value: "12px", cssVar: "--visai-space-3", preview: "spacing" },
  { path: "spacing.4", value: "16px", cssVar: "--visai-space-4", preview: "spacing" },
  { path: "spacing.5", value: "20px", cssVar: "--visai-space-5", preview: "spacing" },
  { path: "spacing.6", value: "24px", cssVar: "--visai-space-6", preview: "spacing" },
  { path: "spacing.8", value: "32px", cssVar: "--visai-space-8", preview: "spacing" },
  { path: "spacing.10", value: "40px", cssVar: "--visai-space-10", preview: "spacing" },
  { path: "spacing.12", value: "48px", cssVar: "--visai-space-12", preview: "spacing" },
  { path: "spacing.16", value: "64px", cssVar: "--visai-space-16", preview: "spacing" },
  { path: "spacing.20", value: "80px", cssVar: "--visai-space-20", preview: "spacing" },
  { path: "spacing.semantic.page-padding-mobile", value: "24px", description: "{spacing.6}" },
  { path: "spacing.semantic.page-padding-desktop", value: "48px", description: "{spacing.12}" },
  { path: "spacing.semantic.card-padding", value: "24px", description: "{spacing.6}" },
  { path: "spacing.semantic.section-gap", value: "32px", description: "{spacing.8}" },
  { path: "spacing.semantic.stack-gap-sm", value: "8px", description: "{spacing.2}" },
  { path: "spacing.semantic.stack-gap-md", value: "16px", description: "{spacing.4}" },
  { path: "spacing.semantic.stack-gap-lg", value: "24px", description: "{spacing.6}" },
  { path: "spacing.semantic.inline-gap", value: "12px", description: "{spacing.3}" },
];

export const BORDER_TOKENS: TokenEntry[] = [
  { path: "border.width.none", value: "0px", preview: "none" },
  { path: "border.width.thin", value: "1px", preview: "size" },
  { path: "border.width.medium", value: "2px", preview: "size" },
  { path: "border.width.thick", value: "3px", preview: "size" },
  { path: "border.radius.none", value: "0px", preview: "radius" },
  { path: "border.radius.sm", value: "4px", cssVar: "--visai-radius-sm", description: "Pills", preview: "radius" },
  { path: "border.radius.md", value: "8px", cssVar: "--visai-radius-md", description: "Inputs, botones", preview: "radius" },
  { path: "border.radius.lg", value: "12px", cssVar: "--visai-radius-lg", description: "Tarjetas", preview: "radius" },
  { path: "border.radius.xl", value: "16px", cssVar: "--visai-radius-xl", description: "Modales", preview: "radius" },
  { path: "border.radius.full", value: "9999px", cssVar: "--visai-radius-full", description: "Pills circulares", preview: "radius" },
  { path: "border.style.default", value: "solid" },
];

export const ELEVATION_TOKENS: TokenEntry[] = [
  { path: "elevation.level-0", value: "surface", description: "Sin borde", preview: "color" },
  { path: "elevation.level-1", value: "surface-elevated + border-default", description: "Tarjetas", preview: "color" },
  { path: "elevation.level-2", value: "surface-elevated + border-strong", description: "Popovers", preview: "color" },
  { path: "elevation.level-3", value: "surface-insight", description: "Insight VisAI", preview: "color" },
];

export const SIZE_TOKENS: TokenEntry[] = [
  { path: "size.icon.xs", value: "16px", preview: "size" },
  { path: "size.icon.sm", value: "20px", description: "Inline", preview: "size" },
  { path: "size.icon.md", value: "24px", description: "UI estándar", preview: "size" },
  { path: "size.icon.lg", value: "32px", description: "Feature", preview: "size" },
  { path: "size.touch-target.min", value: "44px", description: "WCAG mínimo", preview: "size" },
  { path: "size.control.height-sm", value: "32px", preview: "size" },
  { path: "size.control.height-md", value: "40px", preview: "size" },
  { path: "size.control.height-lg", value: "48px", preview: "size" },
  { path: "size.avatar.sm", value: "32px", preview: "size" },
  { path: "size.avatar.md", value: "40px", preview: "size" },
  { path: "size.avatar.lg", value: "48px", preview: "size" },
  { path: "size.container.max-width", value: "1280px" },
  { path: "size.container.content-max", value: "720px", description: "Texto prolongado" },
];

export const LAYOUT_TOKENS: TokenEntry[] = [
  { path: "layout.grid.columns", value: "12" },
  { path: "layout.grid.gutter.mobile", value: "16px" },
  { path: "layout.grid.gutter.tablet", value: "24px" },
  { path: "layout.grid.gutter.desktop", value: "24px" },
  { path: "layout.grid.margin.mobile", value: "24px" },
  { path: "layout.grid.margin.tablet", value: "32px" },
  { path: "layout.grid.margin.desktop", value: "48px" },
  { path: "layout.grid.maxWidth", value: "1280px" },
  { path: "layout.breakpoint.sm", value: "640px" },
  { path: "layout.breakpoint.md", value: "768px" },
  { path: "layout.breakpoint.lg", value: "1024px" },
  { path: "layout.breakpoint.xl", value: "1280px" },
  { path: "layout.sidebar.width", value: "280px" },
  { path: "layout.sidebar.width-collapsed", value: "64px" },
];

export const CONNECTION_TOKENS: TokenEntry[] = [
  { path: "connection.link.color", value: "{color.accent}", description: "Light y dark" },
  { path: "connection.link.hover", value: "{color.accent-hover}", description: "+ underline" },
  { path: "connection.focus-ring.width", value: "2px" },
  { path: "connection.focus-ring.offset", value: "2px" },
  { path: "connection.focus-ring.color", value: "{color.border-focus}", preview: "color" },
  { path: "connection.interactive.hover-opacity", value: "0.92" },
  { path: "connection.interactive.active-scale", value: "0.98" },
  { path: "connection.interactive.disabled-opacity", value: "0.45" },
  { path: "connection.interactive.transition", value: "150ms standard" },
  { path: "connection.selection.background", value: "{color.accent-secondary-muted}", preview: "color" },
  { path: "connection.selection.border", value: "{color.accent-secondary}", preview: "color" },
];

export const MOTION_TOKENS: TokenEntry[] = [
  { path: "motion.duration.instant", value: "0ms" },
  { path: "motion.duration.fast", value: "150ms", cssVar: "--visai-duration-fast", preview: "motion" },
  { path: "motion.duration.normal", value: "250ms", cssVar: "--visai-duration-normal", preview: "motion" },
  { path: "motion.duration.slow", value: "400ms", cssVar: "--visai-duration-slow", preview: "motion" },
  { path: "motion.easing.standard", value: "cubic-bezier(0.4, 0, 0.2, 1)", cssVar: "--visai-easing" },
  { path: "motion.easing.enter", value: "cubic-bezier(0, 0, 0.2, 1)" },
  { path: "motion.easing.exit", value: "cubic-bezier(0.4, 0, 1, 1)" },
  { path: "motion.reducedMotion.respectUserPreference", value: "true" },
];

export const ICONOGRAPHY_TOKENS: TokenEntry[] = [
  { path: "iconography.library.name", value: "Phosphor Icons" },
  { path: "iconography.library.url", value: "https://phosphoricons.com" },
  { path: "iconography.weight.base", value: "regular" },
  { path: "iconography.weight.active", value: "duotone" },
  { path: "iconography.size.inline", value: "20px" },
  { path: "iconography.size.ui", value: "24px" },
  { path: "iconography.size.feature", value: "32px" },
  { path: "iconography.color.default", value: "{color.text-secondary}" },
  { path: "iconography.color.accent", value: "{color.accent}" },
  { path: "iconography.color.insight", value: "{color.accent-secondary}" },
  { path: "iconography.duotone.primaryColor", value: "{color.accent}" },
  { path: "iconography.duotone.secondaryColor", value: "{color.accent-secondary}" },
  { path: "iconography.duotone.secondaryOpacity", value: "0.35" },
];

export const META_TOKENS: TokenEntry[] = [
  { path: "meta.name", value: "VisAI Design System" },
  { path: "meta.version", value: "1.0.0" },
  { path: "meta.direction", value: "Corriente serena" },
  { path: "meta.typographyFamily", value: "Figtree" },
  { path: "meta.iconLibrary", value: "Phosphor Icons" },
  { path: "meta.iconBaseWeight", value: "regular" },
  { path: "meta.iconActiveWeight", value: "duotone" },
  { path: "meta.accessibility", value: "WCAG 2.1 Level AA" },
];

export const TOKEN_CATEGORIES: TokenCategory[] = [
  { id: "color", title: "Color", file: "color.json", tokens: COLOR_TOKENS },
  { id: "typography", title: "Typography", file: "typography.json", tokens: TYPOGRAPHY_TOKENS },
  { id: "spacing", title: "Spacing", file: "spacing.json", tokens: SPACING_TOKENS },
  { id: "border", title: "Border & radius", file: "border.json", tokens: BORDER_TOKENS },
  { id: "elevation", title: "Elevation", file: "elevation.json", tokens: ELEVATION_TOKENS },
  { id: "size", title: "Size", file: "size.json", tokens: SIZE_TOKENS },
  { id: "layout", title: "Layout", file: "layout.json", tokens: LAYOUT_TOKENS },
  { id: "connection", title: "Connection", file: "connection.json", tokens: CONNECTION_TOKENS },
  { id: "motion", title: "Motion", file: "motion.json", tokens: MOTION_TOKENS },
  { id: "iconography", title: "Iconography", file: "iconography.json", tokens: ICONOGRAPHY_TOKENS },
  { id: "meta", title: "Meta", file: "meta.json", tokens: META_TOKENS },
];

export const FOUNDATIONS_NAV = [
  { id: "colors", label: "Colors" },
  { id: "layout-grid", label: "Layout grid" },
  { id: "connections", label: "Connections" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "elevations", label: "Elevations" },
  { id: "borders-radius", label: "Borders & radius" },
  { id: "sizes", label: "Sizes" },
  { id: "layout", label: "Layout" },
  { id: "iconography", label: "Iconography" },
  { id: "animations", label: "Animations" },
];
