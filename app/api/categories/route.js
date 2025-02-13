export async function GET() {
    try {
        const response = await fetch("https://dev.tech360-dz.com/wp-json/wc/v3/products/categories?consumer_key=ck_609715003f9439a3bcc5e78065e24e7f70488df2&consumer_secret=cs_493e8cc291bed657bfb21c436a94edff4e4b2d0c");
        const data = await response.json();

        // Filter categories where parent is not 0
        const filteredCategories = data
            .filter(category => category.parent !== 0)
            .map(category => ({
                id: category.id,
                name: category.name,
                slug: category.slug,
                parent: category.parent,
                description: category.description,
                image: category.image ? category.image.src : null,
            }));

        return Response.json(filteredCategories, { status: 200 });
    } catch (error) {
        return Response.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}
