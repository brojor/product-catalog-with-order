<template>
	<li class="py-4 border-b border-zinc-300 flex items-center justify-between text-sm">
		<div>
			<h3 class="font-semibold mb-2">{{ item.product.name }}</h3>
			<p class="text-zinc-400">
				<span class="text-red-700 font-semibold mr-4">{{ item.quantity }}x</span>
				<span class="mr-2">@ {{ formatPrice(item.product.price) }}</span>
				<span class="font-semibold">{{ formatPrice(item.product.price * item.quantity) }}</span>
			</p>
		</div>
		<button class="text-zinc-400 hover:text-zinc-800" @click="cartStore.removeFromCart(item.product.id)">
			<IconsRemoveItem />
		</button>
	</li>
</template>


<script setup lang="ts">
import type { Product } from '~/types';

defineProps<{
	item: {
		product: Product;
		quantity: number;
	}
}>()

const cartStore = useCartStore()
</script>
