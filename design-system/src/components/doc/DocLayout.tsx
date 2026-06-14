import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./DocLayout.module.css";

const NAV = [
  { to: "/foundations", label: "Foundations" },
  { to: "/components", label: "Components" },
  { to: "/inventory", label: "Inventory" },
];

export function DocLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  return (
    <div className={styles.layout}>
      <header className={styles.topbar}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandVis}>Vis</span>
          <span className={styles.brandAI}>AI</span>
          <span className={styles.brandSub}>Design System</span>
        </Link>
        <nav className={styles.topNav} aria-label="Secciones principales">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={pathname.startsWith(item.to) ? styles.active : ""}
              aria-current={pathname.startsWith(item.to) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className={styles.themeToggle}
          onClick={toggle}
          aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export function DocPage({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <article className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </header>
      {children}
    </article>
  );
}

export function DocSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={styles.section}>
      <h2>{title}</h2>
      {description && <p className={styles.sectionDesc}>{description}</p>}
      {children}
    </section>
  );
}

export function TokenTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PropTable({
  props,
}: {
  props: { name: string; type: string; default?: string; required?: boolean; description?: string }[];
}) {
  return (
    <TokenTable
      headers={["Prop", "Tipo", "Default", "Req.", "Descripción"]}
      rows={props.map((p) => [
        <code key="n">{p.name}</code>,
        <code key="t">{p.type}</code>,
        p.default ?? "—",
        p.required ? "Sí" : "No",
        p.description ?? "",
      ])}
    />
  );
}

export function Showcase({
  title,
  children,
  code,
}: {
  title?: string;
  children: ReactNode;
  code?: string;
}) {
  return (
    <div className={styles.showcase}>
      {title && <h3 className={styles.showcaseTitle}>{title}</h3>}
      <div className={styles.showcasePreview}>{children}</div>
      {code && <pre className={styles.showcaseCode}><code>{code}</code></pre>}
    </div>
  );
}

export function InventoryLink({ category }: { category: string }) {
  return (
    <p className={styles.inventoryLink}>
      Valores y tokens →{" "}
      <a href={`/inventory#tokens-${category}`}>Inventory · {category}</a>
    </p>
  );
}

export function VisualSwatch({
  name,
  cssVar,
  usage,
}: {
  name: string;
  cssVar: string;
  usage?: string;
}) {
  return (
    <div className={styles.swatch}>
      <div
        className={styles.swatchColor}
        style={{ background: `var(${cssVar})` }}
      />
      <div className={styles.swatchInfo}>
        <strong>{name}</strong>
        {usage && <span className={styles.swatchUsage}>{usage}</span>}
      </div>
    </div>
  );
}

export function ColorSwatch({
  name,
  token,
  light,
  dark,
  usage,
}: {
  name: string;
  token: string;
  light: string;
  dark: string;
  usage?: string;
}) {
  const { theme } = useTheme();
  const hex = theme === "light" ? light : dark;

  return (
    <div className={styles.swatch}>
      <div className={styles.swatchColor} style={{ background: hex }} />
      <div className={styles.swatchInfo}>
        <strong>{name}</strong>
        <code>{token}</code>
        <span>{hex}</span>
        {usage && <span className={styles.swatchUsage}>{usage}</span>}
      </div>
    </div>
  );
}

export function SideNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav className={styles.sideNav} aria-label="Subsecciones">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
