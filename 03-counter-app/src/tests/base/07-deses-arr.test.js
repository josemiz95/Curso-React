import {retornaArreglo} from '../../base/07-deses-arr';

describe('Pruebas en desestructuracion', () => {
      test('Debe retornar un string y un numero', () => {
            const [letras, numero] = retornaArreglo();

            expect(letras).toBe('ABC');
            expect(typeof letras).toBe('string');
            expect(numero).toBe(123);
      });
});