import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // console.log(categories);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory))
            return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Título */}
            <h1>Gif Expert App</h1>
            {/* Input */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            // setCategories={setCategories}
            />
            {/* Listado de Gif */}
            {
                categories.map((category) =>
                    <GifGrid key={category} category={category} />
                )
            }
        </>
    )
}

