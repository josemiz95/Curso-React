import {getHeroeByIdAsync} from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('pruebas con promesas', () => { 
      test('getHeroesByIdAsync debe retornar un heroe async', (done) => { 
            const id = 1;

            getHeroeByIdAsync(id). then(heroe => {
                  expect(heroe).toEqual(heroes[0]);
                  done();
            });
      });

      test('getHeroesByIdAsync debe retornar un error si no existe', (done) => { 
            const id = 10;

            getHeroeByIdAsync(id). catch(error => {
                  expect(error).toBe( 'No se pudo encontrar el héroe' );
                  done();
            });
      });
});