import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (category) => {

    //  eslint-disable-next-line no-unused-vars
    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsloading(false);

    }


    useEffect(() => {
        getImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return {
        images,
        isLoading,
    }
}
