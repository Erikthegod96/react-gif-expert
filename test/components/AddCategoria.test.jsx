import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategoria } from '../../src/components/AddCategoria';

describe('Pruebas en <AddCategoria />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategoria onNuevaCategoria={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe('Saitama');
    });

    test('debe de llamar onNuevaCategoria si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNuevaCategoria = jest.fn();

        render(<AddCategoria onNuevaCategoria={onNuevaCategoria} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        expect(onNuevaCategoria).toHaveBeenCalled();
        expect(onNuevaCategoria).toHaveBeenCalledTimes(1);
        expect(onNuevaCategoria).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar el onNuevaCategoria si el input está vacío', () => {
        const onNuevaCategoria = jest.fn();
        render(<AddCategoria onNuevaCategoria={onNuevaCategoria} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNuevaCategoria).not.toHaveBeenCalled();
    });

});