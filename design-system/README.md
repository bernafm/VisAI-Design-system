# VisAI Design System — Sitio de documentación

Código fuente del sitio visual. **No es la fuente canónica de valores** — esos viven en `../tokens/*.json` y las reglas en `../design.md`.

## Desarrollo local (opcional)

```bash
npm install --cache ../.npm-cache
npm run dev
```

Abre el puerto que indique Vite en la terminal (configurado en `vite.config.ts`).

## Compartir con otras personas

```bash
npm run build
```

La carpeta **`dist/`** es estática y portable:

- Comprímela en zip y compártela
- Súbela a Netlify Drop, Vercel, S3, Google Drive, etc.
- No depende de `localhost` ni de este repositorio en ejecución

Quien reciba el zip solo necesita un hosting estático (o un servidor local con `npx serve dist`).

## Secciones del sitio

| Ruta | Contenido |
|---|---|
| `/foundations` | Referencia visual |
| `/inventory` | Espejo tabular de `tokens/*.json` |
| `/components` | Playground de componentes |

## Contexto para agentes de IA

Los agentes deben leer **`../tokens/`** + **`../design.md`**. No necesitan este sitio ni una URL.
