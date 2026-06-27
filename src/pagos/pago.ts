// Procesa el pago del pedido en línea.
import { cobrarConPasarela } from './pasarela';
export async function pagarPedido(monto: number) {
  return cobrarConPasarela(monto);
}
