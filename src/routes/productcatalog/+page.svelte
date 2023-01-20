<script lang="ts">
    import Product from './Product.svelte'

    export let data;
    let test = [{
        id: 30,
        title: 'Key Holder',
        description: 'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Golden',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/30/1.jpg',
            'https://i.dummyjson.com/data/products/30/2.jpg',
            'https://i.dummyjson.com/data/products/30/3.jpg',
            'https://i.dummyjson.com/data/products/30/thumbnail.jpg'
        ]
    }, {
        id: 30,
        title: 'Key Holder',
        description: 'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Golden',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/30/1.jpg',
            'https://i.dummyjson.com/data/products/30/2.jpg',
            'https://i.dummyjson.com/data/products/30/3.jpg',
            'https://i.dummyjson.com/data/products/30/thumbnail.jpg'
        ]
    }
    ]

</script>
<div class="album py-5 bg-light">
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {#each data.products as product}
                <Product thumbnail="{product.thumbnail}" description="{product.description}"/>
            {/each}

        </div>
    </div>
</div>