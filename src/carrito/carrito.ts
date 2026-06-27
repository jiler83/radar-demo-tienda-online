// Gestión del carrito de compras.
export class Carrito {
  items: string[] = [];
  agregar(p: string) { this.items.push(p); }
  quitar(p: string) { this.items = this.items.filter(i => i !== p); }
}
