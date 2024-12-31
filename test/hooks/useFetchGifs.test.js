import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs Hook', () => {
    const categoria = 'Cristiano Ronaldo';

    test('should return initial state', async () => {
        const { result } = renderHook(() => useFetchGifs(categoria));
        expect(result.current.imagenes).toEqual([]);
        expect(result.current.isLoading).toBe(true);
    });

    test('should return an array of images and isLoading false', async () => {
        const { result } = renderHook(() => useFetchGifs(categoria));
        await waitFor(
            () => {
                expect(result.current.imagenes.length).toBeGreaterThan(0)
            }
        );
        const { imagenes, isLoading } = result.current;
        expect(imagenes.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
    });
});