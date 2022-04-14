describe('Pruebas de algo', () => {
      test('Should be true', () => { 
            const mensaje = 'Hola Mundo';
      
            const mensaje2 = () => 'Hola Mundo';
      
            expect(mensaje2()).toBe(mensaje);
      });
});
