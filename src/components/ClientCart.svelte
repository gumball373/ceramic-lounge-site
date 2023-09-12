<script setup>
    import { onMount } from "svelte";

    let cartContainer;

onMount(() => {
    // if(!visible){
    //     toggleVissible()
    // }
    let cart = localStorage.getItem('cl-stripe-cart');
    let cartData = JSON.parse(cart);

    for (var [key, value] of Object.entries(cartData)) {
        addToCart(value.src, value.alt, value.name, value.price, value.priceID);
    }

    // if(visible){
    //     toggleVissible()
    // }

    try{
        refresh();
    } catch {

    }
})

</script>
<div bind:this={cartContainer} id="cartContainer">

</div>