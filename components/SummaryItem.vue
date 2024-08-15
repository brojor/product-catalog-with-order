<template>
	<li class="flex gap-4 pb-4 mb-4 border-b border-slate-300">
		<img :src="`/images/${product.imgName}-thumbnail.jpg`" :alt="product.name" class="w-12 h-12 rounded">
		<div class="text-xs">
			<h3 class="text-sm font-semibold mb-3">{{ product.name }}</h3>
			<span class="text-red-700 font-semibold">{{ quantity }}x</span>
			<span class="ml-4 text-slate-500">@ {{ formatPrice(product.price) }}</span>
		</div>
		<span class="ml-auto self-center font-semibold">{{ formatPrice(product.price * quantity) }}</span>
	</li>
</template>


<script setup lang="ts">
import type { Product } from '~/types';

defineProps<{
	product: Product;
	quantity: number;
}>()

</script>