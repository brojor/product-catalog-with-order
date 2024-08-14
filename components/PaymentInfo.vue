<template>
	<h3 class="my-4 font-semibold">Payment Method:</h3>
	<label v-for="method in paymentMethods" :key="method.name" :for="method.id"
		class="flex gap-4 border  rounded px-4 py-2 mb-2 cursor-pointer text-sm"
		:class="{ 'border-red-700/30 bg-red-700/10': selectedMethod === method.id }">
		<input type="radio" :name="method.name" :id="method.id" class="accent-red-700" v-model="selectedMethod"
			:value="method.id">
		<span>{{ method.name }}</span>
		<span class="ml-auto">{{ formatPrice(method.price) }}</span>
	</label>
</template>


<script setup lang="ts">
const paymentMethods = [
	{ id: 'card', name: 'Credit Card', price: 0 },
	{ id: 'paypal', name: 'PayPal', price: 0 },
	{ id: 'cod', name: 'Cash on Delivery', price: 1.75 },
] as const

const selectedMethod = ref<typeof paymentMethods[number]['id']>('card')

</script>