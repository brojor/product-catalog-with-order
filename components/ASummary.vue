<template>
	<h2 class="text-3xl font-bold">Thank you!</h2>
	<p class="text-slate-500 my-2">We hope you enjoy your food</p>
	<div class="mt-4 bg-red-100/30 p-6 rounded">
		<ul>
			<li v-for="cartItem in cartStore.$state.items" :key="cartItem.product.id"
				class="flex gap-4 pb-4 mb-4 border-b border-slate-300">
				<img :src="`/images/${cartItem.product.imgName}-thumbnail.jpg`" :alt="cartItem.product.name" class="w-12 h-12 rounded">
				<div class="text-xs">
					<h3 class="text-sm font-semibold mb-3">{{ cartItem.product.name }}</h3>
					<span class="text-red-700 font-semibold">{{ cartItem.quantity }}x</span>
					<span class="ml-4 text-slate-500">@ {{formatPrice(cartItem.product.price)  }}</span>
				</div>
				<span class="ml-auto self-center font-semibold">{{ formatPrice(cartItem.product.price * cartItem.quantity) }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
</script>