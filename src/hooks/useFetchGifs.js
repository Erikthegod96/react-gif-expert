import{useState,useEffect} from 'react'
import { getGif } from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {
    const [imagenes, setImagenes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImagenes = async () => {
        const nuevaImagen = await getGif(categoria)
        setImagenes(nuevaImagen)
        setIsLoading(false)
    }

    useEffect(() => {
        getImagenes()
    }, [])

    return {
        imagenes,
        isLoading
    }
}
