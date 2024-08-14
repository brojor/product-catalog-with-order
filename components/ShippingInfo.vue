<template>
	<h3 class="my-4 font-semibold">Shipping Method:</h3>
	<label v-for="method in filteredShippingMethods" :key="method.name" :for="method.id" class="flex gap-4 border  rounded px-4 py-2 mb-2 cursor-pointer" :class="{ 'border-red-700/30 bg-red-700/10': selectedMethod === method.id }">
		<input type="radio" :name="method.name" :id="method.id" class="accent-red-700" v-model="selectedMethod" :value="method.id">
		<span>{{ method.name }}</span>
		<span class="ml-auto">Free</span>
	</label>
</template>


<script setup lang="ts">
const cartStore = useCartStore()
const shippingMethods = [
	{ id: 'courier', name: 'Courier' },
	{ id: 'pickup', name: 'Pickup' },
	{ id: 'post', name: 'Post' },
] as const

const filteredShippingMethods = computed(() => {
	if(cartStore.items.length > 1) {
		return [shippingMethods[0]]
	}
	return shippingMethods
})

const selectedMethod = ref<typeof shippingMethods[number]['id']>('courier')

</script>