<template>
	<div class="flex flex-col mb-2">
		<picture>
			<source media="(min-width: 640px)" :srcset="`/images/${product.imgName}-desktop.jpg`">
			<img :src="`/images/${product.imgName}-mobile.jpg`" :alt="product.name" class="rounded-xl" :class="{'border-2 border-red-700': isActive}">
		</picture>
		<AddToCartButton :product="product" :isActive="isActive" />
		<p class="text-zinc-500 text-sm mt-1">{{ product.category }}</p>
		<h2 class="font-semibold my-1">{{ product.name }}</h2>
		<p class="font-semibold text-red-700">{{ formatPrice(product.price) }}</p>
	</div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';

const props = defineProps<{ product: Product }>()
const cartStore = useCartStore()
const isActive = computed(() => cartStore.isInCart(props.product.id))
</script>