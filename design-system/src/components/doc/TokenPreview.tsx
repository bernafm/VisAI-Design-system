import { Globe } from "@phosphor-icons/react";
import { useTheme } from "../../context/ThemeContext";
import type { TokenEntry } from "../../data/tokenInventory";
import styles from "./DocLayout.module.css";

export function TokenPreview({ token }: { token: TokenEntry }) {
  const { theme } = useTheme();
  const hex = token.light && token.dark
    ? theme === "light" ? token.light : token.dark
    : undefined;

  if (token.preview === "color" && hex) {
    return (
      <div
        className={styles.tokenPreviewColor}
        style={{ background: hex }}
        title={hex}
      />
    );
  }

  if (token.preview === "spacing" && token.value) {
    const px = parseInt(token.value, 10);
    if (!isNaN(px)) {
      return <div className={styles.tokenPreviewSpacing} style={{ width: px }} />;
    }
  }

  if (token.preview === "radius" && token.value) {
    return (
      <div
        className={styles.tokenPreviewRadius}
        style={{ borderRadius: token.value }}
      />
    );
  }

  if (token.preview === "size" && token.value) {
    const px = parseInt(token.value, 10);
    if (!isNaN(px)) {
      return <div className={styles.tokenPreviewSize} style={{ width: px, height: px }} />;
    }
  }

  if (token.preview === "text" && token.path.includes("fontSize")) {
    return (
      <span style={{ fontSize: token.value, fontWeight: 600, whiteSpace: "nowrap" }}>
        Aa
      </span>
    );
  }

  if (token.preview === "motion" && token.value?.endsWith("ms")) {
    const ms = parseInt(token.value, 10);
    return (
      <div
        className={styles.tokenPreviewMotion}
        style={{ transitionDuration: `${ms}ms` }}
        title={`Hover — ${ms}ms`}
      />
    );
  }

  if (token.path.startsWith("iconography")) {
    return <Globe size={20} weight="regular" color="var(--visai-text-secondary)" />;
  }

  return <span className={styles.tokenPreviewEmpty}>—</span>;
}

export function InventoryTokenTable({ tokens }: { tokens: TokenEntry[] }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Preview</th>
            <th scope="col">Token</th>
            <th scope="col">Light</th>
            <th scope="col">Dark</th>
            <th scope="col">Valor</th>
            <th scope="col">CSS var</th>
            <th scope="col">Notas</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((t) => (
            <tr key={t.path}>
              <td><TokenPreview token={t} /></td>
              <td><code>{t.path}</code></td>
              <td>{t.light ? <code>{t.light}</code> : "—"}</td>
              <td>{t.dark ? <code>{t.dark}</code> : "—"}</td>
              <td>{t.value ? <code>{t.value}</code> : "—"}</td>
              <td>{t.cssVar ? <code>{t.cssVar}</code> : "—"}</td>
              <td>{t.description ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
