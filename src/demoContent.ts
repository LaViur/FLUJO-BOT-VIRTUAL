export const courseExamples = [
  [
    { question: '¿Qué es un proceso?', answer: 'Un proceso transforma entradas en resultados mediante actividades relacionadas. En una compra: entrada = requerimiento del área; actividades = revisar, aprobar y emitir la orden; salida = orden de compra aprobada; responsable = área de Compras.' },
    { question: '¿Cómo identifico entradas y salidas en una compra?', answer: 'Caso ficticio: el laboratorio solicita 10 teclados. Entrada: requerimiento con cantidad y especificaciones. Actividades: verificar necesidad, aprobar presupuesto y emitir la orden. Salida: orden de compra aprobada por 10 teclados. Responsable del proceso: Compras. La recepción de los teclados pertenece al proceso de recepción, no a la salida de este ejemplo.' },
    { question: '¿Cómo calculo el tiempo de este proceso de compra?', answer: 'Caso ficticio de la guía: revisar solicitud = 20 minutos; aprobar presupuesto = 40 minutos; emitir orden = 15 minutos. Si las actividades son secuenciales y no hay esperas, el tiempo total es 20 + 40 + 15 = 75 minutos. Este cálculo no representa una medición del Campus ni un benchmark del tutor.' },
  ],
  [
    { question: '¿Qué es un sistema ERP?', answer: 'Un ERP integra datos y procesos de áreas como Ventas, Inventario y Finanzas. Caso ficticio: Ventas registra un pedido de 5 unidades; Inventario reserva las 5; Finanzas registra el comprobante. Las tres áreas trabajan con la misma referencia de pedido.' },
    { question: '¿Cómo conecta un ERP ventas, inventario y finanzas?', answer: 'Caso ficticio PED-001: se venden 5 cuadernos a S/ 10 cada uno. Ventas registra S/ 50; Inventario reduce las existencias de 20 a 15 unidades; Finanzas registra una cuenta por cobrar de S/ 50. Se omiten impuestos, descuentos y devoluciones para explicar el flujo básico. No se realiza ninguna operación real.' },
    { question: '¿Qué ocurre si se registra dos veces el pedido PED-001?', answer: 'En el caso de la guía, duplicar PED-001 podría descontar inventario y registrar una cuenta por cobrar dos veces. El control propuesto es validar un identificador único de pedido antes de confirmar la operación. Es una explicación académica: esta demo no implementa un ERP ni controles transaccionales.' },
  ],
];
export const normalizeQuestion = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[¿?¡!.,]/g, '').replace(/\s+/g, ' ').trim();
export function findExample(course: number, question: string) {
  return courseExamples[course].find(example => normalizeQuestion(example.question) === normalizeQuestion(question));
}
export const unsupportedQuestion = '¿Qué nota obtendré en el examen final?';
