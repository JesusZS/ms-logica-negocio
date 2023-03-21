import {Entity, hasMany, model, property} from '@loopback/repository';
import {VentaProducto} from './venta-producto.model';
import {Venta} from './venta.model';

@model()
export class Producto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Foto: string;

  @property({
    type: 'number',
    required: true,
  })
  PrecioVenta: number;

  @property({
    type: 'number',
    required: true,
  })
  CantidadDisponible: number;

  @hasMany(() => Venta, {through: {model: () => VentaProducto}})
  ventas: Venta[];

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
