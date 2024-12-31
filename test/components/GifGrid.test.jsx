import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid /> component', () => {
    const categoria = 'One Punch';

    test('Debe mostrar el cargando inicialmente', () => {
        useFetchGifs.mockReturnValue({
            imagenes: [],
            isLoading: true
        });

        render(<GifGrid categoria={categoria} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(categoria));
    });

    test('Debe mostrar items when images are loaded from useFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            imagenes: [],
            isLoading: true
        });
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            imagenes: gifs,
            isLoading: false
        });

        render(<GifGrid categoria={categoria} />);
        expect(screen.getByText(categoria));
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});