export async function load({ fetch }) {
    const res = await fetch(`https://dummyjson.com/products/`);
    const items = await res.json();
    return { products: items.products };
}