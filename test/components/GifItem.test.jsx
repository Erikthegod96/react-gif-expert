import {render} from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Prueba en GifItem', ()=>{

    const title = 'Gifs'
    const url = 'Goku'
    test('Debe hacer match snapshot', () => {
        const {container} = render (<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
    })
})