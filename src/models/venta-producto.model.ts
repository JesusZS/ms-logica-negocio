import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_venta_producto_idProducto: {
        name: 'fk_venta_producto_idProducto',
        entity: 'Producto',
        entityKey: 'id',
        foreignKey: 'productoId',
      },
      fk_venta_producto_idVenta: {
        name: 'fk_venta_producto_idVenta',
        entity: 'Venta',
        entityKey: 'id',
        foreignKey: 'ventaId',
      },
    },
  },
})
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
    type: 'number',
  })
  productoId?: number;

  @property({
    type: 'number',
  })
  ventaId?: number;

  constructor(data?: Partial<VentaProducto>) {
    super(data);
  }
}

export interface VentaProductoRelations {
  // describe navigational properties here
}

export type VentaProductoWithRelations = VentaProducto & VentaProductoRelations;
