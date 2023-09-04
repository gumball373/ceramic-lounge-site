<script setup>
    import { onMount } from "svelte";

    let visible = true;

    let cart;
    let cartContainer;

    onMount(() => {
        if(!visible){
            toggleVissible()
        }
        // localStorage.removeItem('cart')
        let cart = localStorage.getItem('cart');
        let cartData = JSON.parse(cart);

        for (var [key, value] of Object.entries(cartData)) {
            addToCart(value.src, value.alt, value.name, value.price, value.priceID);
        }

        try{
            refresh();
        } catch {

        }
    })

    function toggleVissible() {
        if(cartContainer.style.transform == 'translateX(0%)'){
            // cartContainer.style.width = "0px"
            cartContainer.style.transform = 'translateX(100%)'
        } else {
            // cartContainer.style.width = "300px"
            cartContainer.style.transform = 'translateX(0%)'
        }
    }
</script>
<div class="cart-user">
    <!-- svelte-ignore a11y-positive-tabindex -->
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <img tabindex="6" src="/user-icon.svg" alt="user">
    <!-- svelte-ignore a11y-positive-tabindex -->
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img tabindex="7" src="/shopping-cart-icon.svg" alt="cart" on:click={toggleVissible}>
    <!-- svelte-ignore a11y-positive-tabindex -->
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div class="mobile-menu-button" tabindex="9">
        <div class="mobile-menu">
            <div><a href="/">Home</a></div>
            <div><a href="/products">Products</a></div>
            <div><a href="/nutrition">Nutrition</a></div>
            <div><a href="/contact">Contact</a></div>
        </div>
    </div>
</div>
{#if visible}
<div bind:this={cart} id="cart">
    <div bind:this={cartContainer} id="cartContainer" class="container">
        <div class="top">
            <div class="title">Shopping Cart</div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div on:click={toggleVissible} class="close">X</div>
        </div>
        <button on:click={() => addToCart('/10mm.png', '10mm', '10mm', '12.99', 'price_JKnKNllckdlkDNSI_zusyl')}></button>
        <div class="checkout">Checkout</div>
    </div>
</div>
{/if}

<style>
    .title{
        padding: 16px 10px;
    }
    .container{
        position: absolute;
        right: 0;
        top: -2px;
        height: 101vh;
        height: 101dvh;
        width: 300px; /**300px after load*/
        background-color: #000000;
        z-index: 200;
        border-left: 2px solid black;
        overflow: scroll;
        transition: 100ms ease-out;
        transform: translateX(100%);
    }
    .top{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #AC0000;
    }
    .close{
        padding: 16px 18px;
        font-weight: 700;
        cursor: pointer;
        background-color: #00000025;
    }
    .checkout{
        position: absolute;
        bottom: 5px;
        right: 0px;
        height: 30px;
        width: 150px;
        background-color: #AC0000;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
    }
    .cart-user{
		position: absolute;
		right: 15px;
		top:0;
		height: 30px;
		padding: 5px;
		display: flex;
		gap: 8px;
	}

	.cart-user > img {
		aspect-ratio: 1/1;
		height: 100%;
		cursor: pointer;
	}

	.mobile-menu{
		position: absolute;
        top: 0px;
        right: 0px;
        width: 200px;
        height: 0vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background-color: #ac0000;
		gap: 2px;
		transition: 150ms;
	}
	.mobile-menu-button{
		height: 100%;
		aspect-ratio: 1/1;
		background-color: black;
		border-radius: 5px;
		display: none;
	}
	@media only screen and (max-width: 900px){
		.mobile-menu-button{
			display: block;
		}
	}
	.cart-user .mobile-menu-button:focus .mobile-menu{
		height: 140vh;
		height: 100dvh;
	}
	.mobile-menu > div{
		position: relative;
		padding: 10px;
		background-color: #00000040;
		cursor: pointer;
		margin: 0 2.5px;
	}
	.mobile-menu > div::after{
		content: "";
		display: block;
		bottom: 0;
		height: 2px;
		width: 0px;
		border-radius: 2px;
		transition: 250ms;
	}
	.mobile-menu > div:hover::after{
		content: "";
		width: 100%;
		background-color: white; 
	}
    .mobile-menu a{
        color: white;
        text-decoration: none;
    }
</style>