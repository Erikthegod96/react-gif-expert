import {render,screen} from '@testing-library/react'
import { getGif } from '../../src/helpers/getGifs'

describe('Prueba en getGifs()', ()=>{

    test('Debe retornar una array de gifs', async() => {
        const gifs = await getGif('Goku')
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String)
        })
    })

})