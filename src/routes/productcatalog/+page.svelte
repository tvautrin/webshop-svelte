<script lang="ts">
    import Product from './Product.svelte'

    export let data;
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