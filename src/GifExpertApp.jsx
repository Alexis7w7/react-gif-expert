import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Bleach']);
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        // valorant
        setCategories([...categories, newCategory]);
        // categories.push(newCategory); esto se debe de evitar
        // console.log(newCategory);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={event => onAddCategory(event)}
            />

            {/* Listado de gifs */}


            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

            {/* gifItem */}
        </>
    )
}


