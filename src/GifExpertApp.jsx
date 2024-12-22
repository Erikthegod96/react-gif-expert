import { useState } from 'react';
import { AddCategoria ,GifGrid} from './components'

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Goku'])

    const onNuevaCategoria = (nuevaCategoria) => {
        if (categorias.includes(nuevaCategoria)) return
        setCategorias([nuevaCategoria, ...categorias])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {
                <AddCategoria
                    onNuevaCategoria={(value) => onNuevaCategoria(value)}
                />
            }
            {
                categorias.map((categoria) =>
                    (<GifGrid key={categoria} categoria={categoria} />)
                )
            }
        </>
    )
}
