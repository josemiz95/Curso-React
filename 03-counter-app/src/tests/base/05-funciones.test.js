import {getUser, getUsuarioActivo} from '../../base/05-funciones';

describe('Pruebas para funciones', () => {
      test('getUser debe retornar un objecto', ()=> {
            const userTest = {
                  uid: 'ABC123',
                  username: 'El_Papi1502'
            };

            const user = getUser();

            expect(user).toEqual(userTest); // toEqual para comparar objectos
      });

      test('getUsuarioActivo debe retornar un objeto con un nombre dado',  () =>{
            const nombre = 'Josemi';
            const usuarioActivo = {
                  uid: 'ABC567',
                  username: nombre
            };

            const result = getUsuarioActivo(nombre);

            expect(result).toEqual(usuarioActivo);
      });
});