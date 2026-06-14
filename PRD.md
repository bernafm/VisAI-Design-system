# PRD — [VisAI]

> **Tipo de documento:** Product Requirements Document (PRD)
> **Propósito:** Servir como fuente de verdad y contexto persistente para agentes de IA que colaboran en el diseño y desarrollo del producto.
> **Estado:** MVP en definición
> **Última actualización:** 2026-06-14

---

## 0. Cómo usar este documento

Este archivo describe **qué** se construye y **por qué**. Es el contexto base para cualquier agente de IA que trabaje en el proyecto.

- Las reglas de la sección **6. Restricciones y reglas** son de cumplimiento obligatorio y no se negocian sin aprobación explícita.
- El lenguaje visual (tipografía, color, espaciado, componentes) **no** vive aquí: está definido en un archivo separado de design system, que es la autoridad única en materia visual.
- Si una decisión de producto entra en conflicto con este PRD, gana este PRD hasta que se actualice formalmente.

---

## 1. Visión del producto

Una plataforma web que centraliza la información de visas de estudio para España y otros países, y acompaña a la persona durante todo el proceso de obtención de la visa.

Hoy, conseguir una visa de estudios es tedioso: la persona debe investigar manualmente, embajada por embajada, qué visa le conviene y qué requisitos debe cumplir. Esto consume mucho tiempo y genera incertidumbre. El producto elimina esa investigación dispersa entregando la información correcta de forma directa, ordenada y personalizada al perfil de cada usuario.

**Propuesta de valor en una frase:** dejar de investigar en mil sitios y, en su lugar, recibir en un solo lugar qué visa conviene y exactamente qué se necesita para obtenerla.

---

## 2. Problema que resuelve

El proceso de búsqueda y adjudicación de una visa de estudios es disperso y manual. La persona invierte tiempo considerable en dos frentes:

1. **Elegir qué estudiar y con qué visa**, según variables propias: edad, área profesional, proyecciones, opciones de estudio y presupuesto.
2. **Reunir los requisitos correctos**, que cambian según el país de destino y el país de procedencia. Aquí entran trámites como fotocopias, legalización o apostillaje de documentos, documentación específica, fotografías y demostración de fondos, entre otros.

La información está fragmentada (cada embajada por su lado) y es difícil de comparar. El producto resuelve esto centralizando y personalizando esa información.

---

## 3. Usuario objetivo

**Perfil principal:** personas mayores de edad que quieren ampliar sus estudios en el extranjero, ya sea cursando un máster, una carrera, un curso o un MBA.

| Atributo | Descripción |
|---|---|
| Edad | 20 a 40 años, foco principal entre 25 y 35 |
| Género | Hombres y mujeres |
| Situación | En su mayoría ya cuentan con una carrera universitaria |
| Capacidad económica | Disponen de fondos para invertir en educación en el extranjero |
| Motivación principal | Estudiar un máster en menos tiempo del que tomaría en Chile **y** vivir la experiencia de estudiar afuera, conocer y viajar |

**Necesidades clave que cubren:**
- Acortar los tiempos de formación frente a la oferta local.
- Acceder a la experiencia de vivir y estudiar en el extranjero.
- Resolver el trámite de la visa sin perder tiempo en investigación manual.

---

## 4. Objetivos del producto

1. **Centralizar** la información de visas de estudio de distintos países en un solo lugar.
2. **Personalizar** la recomendación según el perfil real de la persona (edad, área profesional, proyecciones y presupuesto).
3. **Acompañar** en el proceso de adjudicación de la visa con una guía ordenada de requisitos.
4. **Reducir** el tiempo y la incertidumbre del proceso, entregando información directa y confiable.

---

## 5. Alcance del MVP

El objetivo de esta etapa es un **MVP funcional** con las dos funcionalidades centrales.

### Feature 1 — Match de perfil con posibilidades reales

Guiar a la persona hacia las opciones de estudio y visa que realmente se ajustan a su situación.

- **Entradas (datos del usuario):** edad, carrera/área profesional, proyecciones y, de forma determinante, presupuesto.
- **Salida:** recomendaciones de opciones de estudio y de la visa más conveniente según ese perfil.
- **Regla crítica:** las recomendaciones nunca deben superar el presupuesto declarado por el usuario (ver sección 6).

### Feature 2 — Acompañamiento en la adjudicación (checklist)

Una guía tipo checklist que ordena los requisitos para postular a la visa en el país elegido.

- **Entradas:** país de destino + país de procedencia del usuario.
- **Salida:** lista clara de requisitos y trámites para esa combinación, por ejemplo: fotocopias, legalización o apostillaje de documentos, documentación específica, fotografías, demostración de fondos, entre otros.
- **Objetivo:** que la persona tenga orden y visibilidad de qué necesita y en qué estado va cada requisito.

### Fuera de alcance (por ahora)

Para mantener el foco del MVP, **no** forman parte de esta etapa (salvo decisión explícita):

- Postulación o presentación de documentos directamente ante embajadas.
- Procesamiento de pagos de aranceles o tasas oficiales.
- Asesoría legal o migratoria personalizada de carácter oficial.
- Recomendación de cursos, másteres o MBA que se salgan del presupuesto del usuario (esto está expresamente prohibido, ver sección 6).

---

## 6. Restricciones y reglas

Estas reglas son obligatorias para cualquier agente de IA y para cualquier decisión de producto o diseño.

1. **Respetar siempre el design system del proyecto.** No se permite crear nuevos lenguajes visuales ni componentes que se aparten de las normas establecidas. El cumplimiento debe ser del 100%.

2. **Tono de comunicación: culto y cercano.** Evitar el lenguaje técnico. Si en algún caso es imprescindible usar un término técnico, debe explicarse **una sola vez**, de forma simple, la primera vez que aparece.

3. **No exceder el presupuesto del usuario.** Está prohibido recomendar cursos, másteres, MBA o cualquier formato de estudios que se aleje del presupuesto declarado por la persona. Esto protege la calidad y confiabilidad de la información entregada.

4. **Leer el design system antes de escribir UI.** Antes de crear o modificar estilos, componentes o pantallas, el agente debe leer `tokens/index.json` y resolver valores desde `tokens/*.json`. Las reglas de uso están en `design.md`. No hardcodear colores, espaciados ni tipografía. El HTML en `design-system/dist/` (tras `npm run build`) es referencia visual para humanos, no fuente canónica.

---

## 7. Stack técnico

- **Tipo:** aplicación web (webapp).

> _Pendiente de definir: framework, lenguaje y servicios. Completar a medida que se tomen las decisiones técnicas._

---

## 8. Estado actual

El proyecto se encuentra en etapa de definición del MVP. La meta es desarrollar una versión funcional que cubra las dos funcionalidades centrales descritas en la sección 5.

---

## 9. Glosario

Términos que el agente debe manejar al comunicarse con el usuario (recordando la regla de explicarlos de forma simple la primera vez que aparezcan):

- **Apostillaje:** certificación internacional que valida un documento público para que tenga validez en otro país, bajo el Convenio de La Haya.
- **Legalización:** proceso alternativo al apostillaje para validar un documento ante un país que no forma parte del Convenio de La Haya.
- **Demostración de fondos:** comprobante de que la persona cuenta con los recursos económicos exigidos para sostener sus estudios y estadía.
- **País de procedencia:** país de origen o nacionalidad del usuario, que determina parte de los requisitos.
- **País de destino:** país donde la persona desea estudiar y para el cual solicita la visa.

---

## 10. Referencias

- **Design System:** `design.md` + `tokens/` (contexto para agentes IA). Referencia visual portable: `design-system/dist/` (generar con `npm run build` en `design-system/`). Este PRD no define ni sobrescribe reglas visuales.
