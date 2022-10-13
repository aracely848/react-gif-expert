import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GitIem />', () => { 

    const title = 's01e01 GIF';
    const url = 'https://media4.giphy.com/media/d2PqO9s7M9CNO/giphy.gif?cid=18265621fgbkz39v1x5i743g441bqhoorv3f8zbwzulpjd7y&rid=giphy.gif&ct=g';
    
    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render( <GifItem title={ title } url={ url} />)
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render( <GifItem title={ title } url={ url} />)
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe( url );
        // expect(screen.getByRole('img').alt).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect ( src ).toBe( url );
        expect ( alt ).toBe( title );
    });

    test('Debe de mostrar el titulo en el componente', () => { 
        render( <GifItem title={ title } url={ url} />);
        expect( screen.getByText( title )).toBeTruthy();
    });

});