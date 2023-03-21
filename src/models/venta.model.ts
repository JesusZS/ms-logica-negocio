import {
  belongsTo,
  Entity,
  hasMany,
  model,
  property,
} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Producto} from './producto.model';
import {VentaProducto} from './venta-producto.model';

@model()
export class Venta extends Entity {
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
  Numero: string;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  idCliente: string;

  @property({
    type: 'boolean',
    required: true,
  })
  Notificada: boolean;

  @belongsTo(() => Cliente)
  clienteId: string;

  @hasMany(() => Producto, {through: {model: () => VentaProducto}})
  productos: Producto[];

  constructor(data?: Partial<Venta>) {
    super(data);
  }
}

export interface VentaRelations {
  // describe navigational properties here
}

export type VentaWithRelations = Venta & VentaRelations;
