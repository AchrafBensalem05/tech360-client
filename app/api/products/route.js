export async function GET() {
    try {
        const response = await fetch("https://dev.tech360-dz.com/wp-json/wc/v3/products?consumer_key=ck_609715003f9439a3bcc5e78065e24e7f70488df2&consumer_secret=cs_493e8cc291bed657bfb21c436a94edff4e4b2d0c"); // Replace with your actual API URL
        const data = await response.json();

        // Restructure the data
        const formattedData = data.map(product => ({
            id: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            regularPrice: product.regular_price,
            salePrice: product.sale_price,
            onSale: product.on_sale,
            category: product.categories?.[0]?.name || "Uncategorized",
            image: product.images?.[0]?.src || "/placeholder.jpg",
            dealId: product.deal_id,
            type: product.type,
            attributes: product.default_attributes?.map(attr => ({
                name: attr.name,
                value: attr.option
            })) || [],
        }));

        return Response.json(formattedData, { status: 200 });
    } catch (error) {
        return Response.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}
