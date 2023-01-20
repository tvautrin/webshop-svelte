export async function load({ fetch }) {
    const res = await fetch(`https://dummyjson.com/products/`);
    const items = await res.json();
    const products =items.products;
    return { products: products };
}