import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas de getHeroes', ()=> {
      test('retorna un heroe', () => {
            const id = 2;
            const heroe = heroes.find(heroe => heroe.id === id);

            const result = getHeroeById(id);

            expect(result).toEqual(heroe);
      });

      test('retorna undefined', () => {
            const id = 23;
            const result = getHeroeById(id);

            expect(result).toBe(undefined);
      });
});

describe('Pruebas de getHeroesByOwner', ()=> {
      test('retorna los heroes de marvel', () => {
            const owner = 'DC';
            const heroesDC = heroes.filter( (heroe) => heroe.owner === owner );

            const result = getHeroesByOwner(owner);

            expect(result.length).toBe(heroesDC.length);
            expect(result).toEqual(heroesDC);
      });

      test('retorna un array vacio', () => {
            const owner = 'ALGUNO';

            const result = getHeroesByOwner(owner);

            expect(result.length).toBe(0);
            expect(result).toEqual([]);
      });
});