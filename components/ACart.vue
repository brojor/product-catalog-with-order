<template>
<div class="bg-white rounded-xl p-6">
	<h2 class="text-2xl text-red-700 font-bold">Your Cart ({{ cartStore.totalQuantity }})</h2>
	<div v-if="isEmpty" class="flex flex-col items-center my-4">
		<IlustrationEmptyCart />
		<p class="text-zinc-500 text-sm font-semibold mt-4">Your added items will appear here</p>
	</div>
	<template v-else>
			<ul class="py-2">
				<CartItem v-for="item in cartStore.items" :key="item.product.id" :item="item" />
			</ul>
			<div class="flex items-center justify-between mt-6">
				<span class="text-sm">Order Total</span>
				<span class="text-2xl font-bold">{{ formatPrice(cartStore.totalPrice) }}</span>
			</div>
		</template>
</div>
</template>


<script setup lang="ts">
const cartStore = useCartStore()
const isEmpty = computed(() => cartStore.totalQuantity === 0)
</script>