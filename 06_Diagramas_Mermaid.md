# Diagramas PC2 — propuesta para revisión

## BPMN AS-IS (representación preliminar, NO validada con CEE)
```mermaid
flowchart LR
 A([Alumno tiene duda]) --> B[Busca en material del curso]
 B --> C{¿Encuentra respuesta?}
 C -->|Sí| D([Continúa estudio])
 C -->|No| E[Consulta a docente o soporte]
 E --> F[Espera respuesta humana]
 F --> D
```

## BPMN TO-BE (flujo propuesto; convertir a BPMN 2.0 formal antes de entrega)
```mermaid
flowchart LR
 A([Alumno autenticado en Campus]) --> B[Abre Tutor Virtual]
 B --> C[Envía pregunta]
 C --> D{¿Servicio disponible?}
 D -->|No| E[Mostrar espera o saturación]
 D -->|Sí| F[Recuperar fragmentos autorizados]
 F --> G{¿Hay evidencia suficiente?}
 G -->|Sí| H[Generar respuesta con fuentes]
 G -->|No| I[Abstenerse y ofrecer derivación]
 H --> J([Alumno consulta respuesta])
 I --> K[Registrar solicitud mínima]
 E --> J
 K --> J
```

## Flujo 1 — consulta del alumno
```mermaid
flowchart TD
 A[Campus Virtual]-->B[Widget Tutor]
 B-->C[Pregunta]
 C-->D[Simular recuperación]
 D-->E[Respuesta con fuente]
```

## Flujo 2 — evidencia insuficiente
```mermaid
flowchart TD
 A[Pregunta]-->B{¿Existe fuente validada?}
 B-->|Sí|C[Responder con cita]
 B-->|No|D[Informar limitación]
 D-->E[Ofrecer atención humana]
```

## Flujo 3 — documentos y versiones
```mermaid
flowchart TD
 A[Operador autorizado]-->B[Seleccionar PDF o FAQ]
 B-->C[Validar metadatos]
 C-->D[Registrar versión]
 D-->E[Retirar versión anterior del índice]
 E-->F[Publicar versión vigente]
```

## Flujo 4 — saturación
```mermaid
flowchart TD
 A[Consulta]-->B{¿Inferencia libre?}
 B-->|Sí|C[Procesar]
 B-->|No|D{¿Cola disponible?}
 D-->|Sí|E[Mostrar espera]
 D-->|No|F[Mostrar ocupado y reintentar]
 E-->C
```

## Casos de uso UML (PlantUML)
```plantuml
@startuml
left to right direction
actor Alumno
actor "Operador CEE" as Operador
actor "Servicio Campus (Grupo 3)" as Campus
rectangle "Tutor Virtual CEE" {
 usecase "Abrir chat desde Campus" as U1
 usecase "Consultar material validado" as U2
 usecase "Ver respuesta y fuentes" as U3
 usecase "Solicitar derivación" as U4
 usecase "Gestionar documentos/versiones" as U5
 usecase "Ver estado técnico" as U6
}
Alumno --> U1
Alumno --> U2
Alumno --> U3
Alumno --> U4
Operador --> U5
Operador --> U6
Campus --> U1
U2 ..> U3 : <<include>>
@enduml
```

## Modelo ER conceptual — 7 entidades propuestas, sujetas a validación
```mermaid
erDiagram
 USUARIO ||--o{ CONSULTA : realiza
 CURSO ||--o{ DOCUMENTO : contiene
 DOCUMENTO ||--o{ VERSION_DOCUMENTO : tiene
 VERSION_DOCUMENTO ||--o{ FRAGMENTO : produce
 CONSULTA }o--o{ FRAGMENTO : cita
 CONSULTA ||--o| DERIVACION : genera
 USUARIO { uuid id PK string referencia_campus }
 CURSO { uuid id PK string codigo string nombre }
 DOCUMENTO { uuid id PK uuid curso_id FK string titulo }
 VERSION_DOCUMENTO { uuid id PK uuid documento_id FK int version bool vigente }
 FRAGMENTO { uuid id PK uuid version_id FK string contenido string pagina }
 CONSULTA { uuid id PK uuid usuario_id FK string pregunta string respuesta string estado datetime creada }
 DERIVACION { uuid id PK uuid consulta_id FK string motivo string estado }
```

**Nota de modelado:** modelo conceptual de exactamente 7 entidades. La respuesta se almacena como atributo de CONSULTA; las referencias a fragmentos requieren una tabla de unión en un modelo físico posterior. No afirmar que el modelo está aprobado.
