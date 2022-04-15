import { getImagen } from "../../base/11-async-await";


describe('Pruebas con async', () => {
      test('Debe retornar una url', async()=>{
            const url = await getImagen();

            expect(typeof url).toBe('string');
            expect(url.includes('https://')).toBe(true);
      });
});