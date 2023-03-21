import {AuthenticationStrategy} from '@loopback/authentication';
import {AuthenticationBindings} from '@loopback/authentication/dist/keys';
import {AuthenticationMetadata} from '@loopback/authentication/dist/types';
import {inject} from '@loopback/context';
import {HttpErrors, Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import parseBearerToken from 'parse-bearer-token';
import {ConfiguracionSeguridad} from '../config/configuracion.seguridad';
const fetch = require('node-fetch');

export class AuthStrategy implements AuthenticationStrategy {
  name: string = 'auth';

  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata[],
  ) {}

  /**
   * Autenticacion de un usuario frente a una accion en una base de datos
   * @param request la solicitud con el token
   * @returns el perfil del usuario, undefined cuando no tiene el permiso o un HttpError
   */
  async authenticate(request: Request): Promise<UserProfile | undefined> {
    let token = parseBearerToken(request);
    if (token) {
      let idMenu: string = this.metadata[0].options![0];
      let accion: string = this.metadata[0].options![1];

      const datos = {
        token: token,
        idMenu: idMenu,
        accion: accion,
      };

      const urlValidarPermisos = `${ConfiguracionSeguridad.enlaceMicroservicioSeguridad}/validar-permisos`;
      fetch(urlValidarPermisos, {
        method: 'post',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res: any) => res.json())
        .then((json: any) => {
          console.log('Respuesta:');
          console.log(json);

          let continuar: boolean = false;
          if (continuar) {
            let perfil: UserProfile = Object.assign({
              permitido: 'OK',
            });
            return perfil;
          } else {
            return undefined;
          }
        });
    }
    throw new HttpErrors[401](
      'no es posible ejecutar la accion por falta de permisos',
    );
  }
}
