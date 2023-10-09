import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";

const Gallery = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('/gallery.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const handleCategoryClick = (categoryId) => {
        if (categoryId === selectedCategory) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(categoryId);
        }
    };


    const imagesToDisplay = selectedCategory !== null
        ? categories
            .find(category => category.id === selectedCategory)
            .images
        : categories.map(category => category.images).flat();

    return (
        <div>
            <NavBar></NavBar>
            <div className="grid lg:grid-cols-4 grid-cols-1 w-5/6 mx-auto mt-6">
                <div className="space-y-4">
                    <h2 onClick={() => handleCategoryClick(null)} className="text-2xl">All Categories</h2>
                    {categories.map(category => (
                        <button
                            className="lg:block ml-4"
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-3">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                        {imagesToDisplay.map((image, index) => (
                            <img
                                className="h-52 w-full"
                                key={index}
                                src={image}

                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
