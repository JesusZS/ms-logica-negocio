import {Entity, model, property} from '@loopback/repository';

@model()
export class VentaProducto extends Entity {
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
  idVenta: string;

  @property({
    type: 'string',
    required: true,
  })
  idProducto: string;

  @property({
    type: 'number',
    required: true,
  })
  Cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  PrecioUnitario: number;

  @property({
    type: 'string',
  })
  productoId?: string;

  @property({
    type: 'string',
  })
  ventaId?: string;

  constructor(data?: Partial<VentaProducto>) {
    super(data);
  }
}

export interface VentaProductoRelations {
  // describe navigational properties here
}

export type VentaProductoWithRelations = VentaProducto & VentaProductoRelations;
