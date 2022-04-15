import { getSaludo } from '../../base/02-template-string';

describe('Pruebas para template string', () => { 
      test('getSaludo debe retornar: Hola "nombre"', () => { 
            const nombre = 'Josemi';

            const saludo = getSaludo(nombre);

            expect(saludo).toBe('Hola '+nombre);
       });

       test('getSaludo sin parametros debe retornar: Hola default', () => { 
            const saludo = getSaludo();

            expect(saludo).toBe('Hola default');
       });
});