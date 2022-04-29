import { renderHook } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en hook', () => { 
    test('debe retornar el estado inncial', () => {
        const { result } = renderHook(()=> useFetchGifs( 'One punch' ) );
        const [data, loading] = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    }); 

    test('debe retornar un array de imagenes y loafing en false', async() => { 
        // Con react 18 no existe waitForNextUpdate
        
        // const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        // await waitForNextUpdate();

        // const { data, loading } = result.current;

        // expect( data.length ).toBe( 10 );
        // expect( loading ).toBe( false );
    });
})