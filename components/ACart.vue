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
			<div class="flex items-center justify-between my-6">
				<span class="text-sm">Order Total</span>
				<span class="text-2xl font-bold">{{ formatPrice(cartStore.totalPrice) }}</span>
			</div>
			<button @click="$emit('submit')" class="bg-red-700 text-white py-4 w-full text-center rounded-full hover:bg-red-800">Confirm Order</button>
		</template>
</div>
</template>


<script setup lang="ts">
defineEmits(['submit'])

const cartStore = useCartStore()
const isEmpty = computed(() => cartStore.totalQuantity === 0)
</script>