import React from "react";

async function getCategories() {
    const res = await fetch("http://localhost:3000/api/categories");
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
}

export default async function CategoriesPage() {
    const categories = await getCategories();

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        {category.image && <img src={category.image} alt={category.name} width={50} />}
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
