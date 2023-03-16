import {Entity, model, property, hasMany} from '@loopback/repository';
import {Venta} from './venta.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  PrimerNombre: string;

  @property({
    type: 'string',
  })
  SegundoNombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  PrimerApellido: string;

  @property({
    type: 'string',
  })
  SegundoApellido?: string;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: true,
  })
  Celular: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @hasMany(() => Venta)
  compras: Venta[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
