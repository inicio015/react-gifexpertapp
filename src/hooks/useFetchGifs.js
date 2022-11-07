import { useState,useEffect } from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async() =>{
        const newImages = await getGifs(category)
        setImages(newImages);
        setIsLoading(false);
    }
    //solo se dispara cuando tengamos un cambio en un funcion correspondiente o variable
    useEffect( () => {
    getImages();
    }, [ ]);


    //exportamos o retornamos todo lo que regresa nuestro custom hook 
    return {
        images,
        isLoading
    }
}
