# Tutor Virtual 24/7 — CEE FIIS-UNI

Demo navegable para PC2 (análisis y diseño), construida con React, TypeScript y Vite. Identidad visual **propuesta y referencial**: no reproduce ni integra el Campus oficial. No utiliza logos institucionales; el monograma es un placeholder.

Paleta basada en el [Manual de identidad UNI](https://portal.uni.edu.pe/images/archivospdf/Manual-identidad-UNI.pdf): granate `#711610`, gris `#9A999D` y beige arena `#E6D9AA`. Los tonos de fondo y estados son adaptaciones para la interfaz; no representan una validación institucional del diseño.

## Ejecutar en Visual Studio Code

Requisitos: Node.js 20.19+ o 22.12+ y npm. Abre esta carpeta en VS Code y ejecuta en su terminal:

```sh
npm install
npm run dev
```

Abre la URL local indicada por Vite (normalmente http://127.0.0.1:5173). Para verificar y servir la compilación:

```sh
npm run build
npm run preview
```

La instalación descarga dependencias; la aplicación en ejecución no necesita servicios externos ni fuentes remotas. `npm run build` comprueba TypeScript y genera `dist/`.

## Cuatro vistas

1. **Campus + Tutor**: Lucía Valdez, estudiante ficticia; dos cursos, materiales de ejemplo, tutor lateral y drawer en pantallas menores de 950 px. Inicio, Mis cursos, Materiales y Tutor IA comparten el shell del Campus.
2. **Gestión documental**: cambia el selector superior “Vista DEMO” a Operador para mostrar este acceso. No hay autenticación real.
3. **Estado del servicio**: controles de saturación, cola de ejemplo y política inicial de una generación activa, pendiente de benchmark.
4. **Integración Campus**: diagrama de arquitectura futura, responsabilidades propuestas por validar y eventos técnicos de ejemplo RF-M07.

## Seis comportamientos / recorrido de exposición

El recorrido comienza en **Inicio**, con el tutor cerrado. Selecciona **Entrar al curso** en una tarjeta de Inicio o Mis cursos. Se abre Materiales; desde allí pulsa **Abrir Tutor IA**. La guía de pasos permite regresar a materiales o a la selección de curso. Al cambiar de curso se limpia el contexto de la conversación; mientras hay una consulta procesándose o pendiente se bloquea el cambio de curso.

También puedes usar el **asistente flotante del costado derecho** desde cualquier sección del Campus. Desde Inicio o Mis cursos ofrece los dos cursos para establecer contexto; dentro del curso abre directamente su tutor. Es un acceso al mismo chat simulado, no una segunda IA ni un servicio conectado.

### Casos concretos disponibles

| Curso | Pregunta preparada | Ejemplo de respuesta |
| --- | --- | --- |
| Gestión de Procesos | ¿Qué es un proceso? | Requerimiento → revisión y aprobación → orden de compra |
| Gestión de Procesos | ¿Cómo identifico entradas y salidas en una compra? | Solicitud de 10 teclados y orden aprobada; se distingue la recepción como otro proceso |
| Gestión de Procesos | ¿Cómo calculo el tiempo de este proceso de compra? | 20 + 40 + 15 = 75 minutos; actividades secuenciales sin esperas |
| Sistemas Integrados Empresariales | ¿Qué es un sistema ERP? | Un pedido compartido entre Ventas, Inventario y Finanzas |
| Sistemas Integrados Empresariales | ¿Cómo conecta un ERP ventas, inventario y finanzas? | PED-001: 5 cuadernos a S/ 10; stock 20 → 15; cuenta por cobrar S/ 50 |
| Sistemas Integrados Empresariales | ¿Qué ocurre si se registra dos veces el pedido PED-001? | Posible doble movimiento y propuesta de validar un identificador único |

Las preguntas se pueden elegir en botones o escribir. La comparación ignora tildes, mayúsculas, espacios repetidos y ciertos signos de puntuación. No interpreta paráfrasis ni entiende lenguaje natural. Cada respuesta se respalda en el texto ficticio visible del modal de página 3. Cualquier otra pregunta produce abstención, incluida “¿Qué nota obtendré en el examen final?”.

La vista **Integración Campus** incluye “Alcance del prototipo PC2”, con secciones desplegables de RF-M01 a RF-M07 y criterios no funcionales: rendimiento, disponibilidad, seguridad y privacidad, usabilidad y accesibilidad, trazabilidad y despliegue. Se distinguen lo demostrable y la validación pendiente. No se han proporcionado requisitos oficiales detallados ni umbrales numéricos de aceptación.

1. Dentro del curso, cierra el tutor con la X y ábrelo desde Tutor IA o el botón flotante. El curso permanece visible y seleccionado. En móvil el drawer aparece al solicitarlo, no al entrar al Campus.
2. Pulsa “¿Qué es un proceso?” (o la pregunta ERP en el segundo curso). Tras una espera simulada aparece una respuesta preparada con “Fuente: Guía del curso (demostración), p. 3”. “Ver fuente” abre un fragmento mock, no un PDF institucional.
3. Pulsa “Consulta sin respaldo”. Aparece “No encuentro evidencia suficiente” y “Solicitar atención humana”. El formulario conserva la pregunta asociada a esa respuesta e identifica el curso. Completa un correo ficticio y al menos diez caracteres de detalle: se muestra la confirmación DEMO-024, sin envío. La guía de pasos indica la revisión de fuente o el registro simulado de la solicitud.
4. En Vista operador → Gestión documental, pulsa “Simular reemplazo”. Una espera breve precede al incremento de versión y cambio de estado. No se elige ni carga ningún archivo; el archivado anterior es conceptual.
5. En Estado del servicio pulsa “Simular ocupado”. Pulsa “Probar consulta en Campus” e intenta una pregunta: queda pendiente y se conserva sin permitir sobrescribirla. Desde el aviso pulsa “Ver estado del servicio”, luego “Liberar cola” y “Volver a consulta pendiente”. El aviso ahora indica disponibilidad; pulsa “Reintentar consulta”. No existe planificación ni procesamiento de cola real.
6. Abre Integración Campus, revisa Campus → widget → API FastAPI → RAG local, las responsabilidades propuestas de Grupo 3 / Grupo 5 / TI y los registros locales generados por las acciones. Usa “Regresar al Campus”.

## Cobertura referencial del MVP reajustado

No se proporcionaron descripciones oficiales de RF-M01 a RF-M07. Para esta exposición se propone el mapeo siguiente, sujeto a contrastar con la especificación académica:

| Requisito | Representación en la demo |
| --- | --- |
| RF-M01 | Consulta contextual desde el Campus |
| RF-M02 | Respuesta con evidencia y consulta de fuente |
| RF-M03 | Abstención y solicitud de atención humana |
| RF-M04 | Documentos y versiones |
| RF-M05 | Estado y saturación |
| RF-M06 | Cola y reintento manual |
| RF-M07 | Integración y registros técnicos de ejemplo |

## Límites del mock

- Todo vive en memoria: recargar restablece mensajes, versiones, cola, rol y registros.
- El selector de rol solo cambia la interfaz. No es control de seguridad.
- Las respuestas se eligen por coincidencia normalizada con seis preguntas preparadas, sin IA, embeddings, búsqueda semántica ni RAG real. Las preguntas fuera de ese catálogo no tienen respaldo.
- Las fuentes, materiales, curso, docente, estudiante y solicitudes son ficticios. Los materiales abren el mismo fragmento de guía del curso seleccionado.
- La cola contiene tres entradas ficticias al simular ocupado y puede mostrar una consulta propia pendiente; no es una cola FIFO ni procesa automáticamente.
- “1 generación activa” es una **política inicial pendiente de benchmark**. No se midió rendimiento ni se garantiza disponibilidad 24/7.
- Los registros son ejemplos en memoria, sin telemetría, servidor ni persistencia. Las asignaciones de responsabilidades requieren validación.
- No hay backend, login, PostgreSQL, Ollama ni API cloud. No se envían formularios ni se suben archivos.
- Stack futuro, **no implementado**: FastAPI, PostgreSQL + pgvector, embeddings locales, Ollama CPU, Nginx y despliegue local con TI.

Accesibilidad básica: HTML semántico, etiquetas, foco visible, mensajes de estado, validación de formulario y modal con Escape, contención y restauración de foco.

## Archivos

```text
.
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
├── README.md
└── src/
    ├── main.tsx
    ├── demoContent.ts
    ├── ScopePanel.tsx
    ├── styles.css
    └── uni-theme.css
```

Pie obligatorio: “Prototipo de integración — sujeto a validación del Grupo 3”.
