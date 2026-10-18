import { ShieldCheck } from 'lucide-react';
export function ScopePanel() {
 return <section className="surface scope-panel"><div className="section-heading"><h2><ShieldCheck size={18}/> Alcance del prototipo PC2</h2><span className="status-pill amber">Criterios propuestos · Por validar</span></div><p>Los identificadores RF son un mapeo referencial. No se recibió una especificación oficial ni umbrales de aceptación de los requisitos no funcionales.</p><details><summary>Requisitos funcionales: qué puedes demostrar</summary><div className="table-scroll"><table><thead><tr><th>Requisito propuesto</th><th>Ejemplo concreto</th><th>Límite</th></tr></thead><tbody>{[
 ['RF-M01 · Consulta contextual','Seleccionar Gestión de Procesos y preguntar por las entradas de una compra.','Solo preguntas preparadas del curso seleccionado.'],
 ['RF-M02 · Evidencia','Abrir el fragmento de la guía, página 3, desde una respuesta.','Fuente ficticia; no hay búsqueda ni PDF real.'],
 ['RF-M03 · Derivación','Preguntar por una nota y completar la solicitud de atención.','Confirmación local; no se envía un correo ni un ticket.'],
 ['RF-M04 · Versiones','Reemplazar la guía v2 y visualizar v3.','Estado en memoria; no carga ni indexa archivos.'],
 ['RF-M05 · Saturación','Activar “Simular ocupado” e intentar una consulta.','Capacidad controlada manualmente.'],
 ['RF-M06 · Reintento','Liberar cola y reenviar la pregunta conservada.','Una pregunta propia pendiente; sin cola real.'],
 ['RF-M07 · Integración y registros','Ver widget → API → RAG y eventos de la interfaz.','Diagrama futuro y registros mock; sin integración oficial.'],
 ].map(row=><tr key={row[0]}>{row.map(cell=><td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></details><details><summary>Requisitos no funcionales: límites y validación pendiente</summary><div className="nfr-grid">{[
 ['Rendimiento','La espera de 1,1 segundos es artificial. Una generación activa es una política inicial pendiente de benchmark; no hay una latencia objetivo validada.'],
 ['Disponibilidad','24/7 es un objetivo. La demo depende del servidor Vite local y no acredita continuidad, recuperación ni un SLA.'],
 ['Seguridad y privacidad','No hay login ni autorización real. Usar datos ficticios; mensajes y formularios viven en memoria y no se envían a servicios.'],
 ['Usabilidad y accesibilidad','Diseño responsivo, etiquetas y foco visible. Se requiere validar con usuarios y realizar una auditoría de accesibilidad; no se certifica conformidad WCAG.'],
 ['Trazabilidad y confiabilidad','Cada respuesta preparada tiene un fragmento de ejemplo. No se mide precisión de IA; los eventos no constituyen una auditoría persistente.'],
 ['Despliegue y mantenibilidad','Frontend React + TypeScript local. Backend, embeddings, pgvector, Ollama CPU y Nginx son futuros y requieren coordinación con TI.'],
 ].map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></details></section>;
}
