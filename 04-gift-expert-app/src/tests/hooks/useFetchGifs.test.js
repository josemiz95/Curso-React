import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en hook', () => { 
    test('debe retornar el estado inncial', () => {
        const { result } = renderHook(()=> useFetchGifs( 'One punch' ) );
        const [data, loading] = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    }); 

    test('debe retornar un array de imagenes y loafing en false', async() => { 
        const {result} = renderHook(()=> useFetchGifs( 'One punch' ) );

        await waitFor(() => {
            expect(result.current[1]).toBe(false)
        }, {timeout: 10000});

        const [data, loading] = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
})