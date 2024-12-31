import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategoria = ({ onNuevaCategoria }) => {

    const [inputValor, setInputValor] = useState('')

    const onInputChange = ({ target }) => {
        setInputValor(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValor.trim().length <= 1) return
        onNuevaCategoria(inputValor.trim())
        setInputValor('')
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type='text'
                placeholder="Buscar gifs"
                value={inputValor}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategoria.propTypes = {
    onNuevaCategoria: PropTypes.func.isRequired
}
