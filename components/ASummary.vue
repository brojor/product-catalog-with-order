<template>
	<h2 class="text-3xl font-bold">Thank you!</h2>
	<p class="text-slate-500 my-2">We hope you enjoy your food</p>
	<div class="mt-4 bg-red-100/30 p-6 rounded">
		<ul>
			<SummaryItem v-for="cartItem in cartStore.$state.items" :key="cartItem.product.id" :product="cartItem.product"
				:quantity="cartItem.quantity" />
			<li class="flex font-semibold pb-4 mb-4 border-b border-slate-300">
				<span class="text-sm mr-2 text-slate-500">Payment:</span>
				<span class="text-sm ">{{ servicesStore.$state.paymentMethod!.name }}</span>
				<span class="ml-auto">{{ formatPrice(servicesStore.$state.paymentMethod!.price) }}</span>
			</li>
			<li class="flex font-semibold pb-4 mb-4 border-b border-slate-300">
				<span class="text-sm mr-2 text-slate-500">Shipping:</span>
				<span class="text-sm ">{{ servicesStore.$state.shippingMethod!.name }}</span>
				<span class="ml-auto">{{ formatPrice(servicesStore.$state.shippingMethod!.price) }}</span>
			</li>
		</ul>
		<div class="flex justify-between items-center">
			<span class="font-semibold">Total:</span>
			<span class="text-2xl font-bold">{{ formatPrice(totalPrice) }}</span>
		</div>
	</div>
	<button class="block bg-red-700 text-white py-4 w-full sm:w-1/2 rounded-full hover:bg-red-800 mt-8 mx-auto"
		@click="startNewOrder">
		Start new order
	</button>
</template>

<script setup lang="ts">
const emit = defineEmits(['submit'])

const cartStore = useCartStore()
const servicesStore = useServicesStore()

const totalPrice = computed(() => {
	return cartStore.totalPrice + servicesStore.totalPrice
})

const startNewOrder = () => {
	cartStore.clearCart()
	servicesStore.reset()
	emit('submit')
}
</script>