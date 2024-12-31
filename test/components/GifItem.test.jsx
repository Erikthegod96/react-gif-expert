import {render,screen} from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Prueba en GifItem', ()=>{

    const title = 'Gifs'
    const url = 'http://localhost/Goku'
    test('Debe hacer match snapshot', () => {
        const {container} = render (<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render (<GifItem title={title} url={url}/>)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })
})