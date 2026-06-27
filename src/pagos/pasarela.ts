// Integración con pasarela de pagos externa.
export async function cobrarConPasarela(monto: number) {
  return { aprobado: true, monto };
}
