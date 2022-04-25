import { getGifts } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fecth', ()=>{
    test('Debe traer 10 elementos', async() => { 
        const gifs = await getGifts('Algo');

        expect(gifs.length).toBe(10);
    });

    test('No debe traet elementos', async() => { 
        const gifs = await getGifts('');

        expect(gifs.length).toBe(0);
    });
});