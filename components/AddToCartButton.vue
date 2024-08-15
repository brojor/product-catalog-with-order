<template>
	<button v-if="!isActive" @click="cartStore.addToCart(product)"
		class="button border border-zinc-600 bg-white text-sm inline-flex items-center justify-center gap-2 font-semibold hover:text-red-700">
		<IconsAddToCart />
		Add to Cart
	</button>
	<div v-else class="button flex justify-between items-center font-semibold bg-red-700 text-white px-3">
		<button @click="cartStore.decrementQuantity(product.id)"
			class="flex w-5 h-5 border border-white rounded-full justify-center items-center hover:bg-white hover:text-red-700">
			<IconsDecrementQuantity />
		</button>
		<span>{{ cartStore.getQuantity(product.id) }}</span>
		<button @click="cartStore.incrementQuantity(product.id)"
			class="flex w-5 h-5 border border-white rounded-full justify-center items-center hover:bg-white hover:text-red-700">
			<IconsIncrementQuantity />
		</button>
	</div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';

defineProps<{ product: Product, isActive: boolean }>();

const cartStore = useCartStore()
</script>

<style>
.button {
	@apply w-40 h-10 rounded-full mx-auto -mt-5
}
</style>