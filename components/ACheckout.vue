<template>
	<h2 class="text-xl sm:text-3xl font-bold mb-6">Shipping and payment</h2>
	<form @submit.prevent="submitForm">
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
			<div v-for="input in formInputs" :key="input.id">
				<label :for="input.id" class="font-semibold text-zinc-500">{{ input.label }}</label>
				<input :type="input.type" :id="input.id" v-model="inputData[input.id]" class="w-full p-2 border border-zinc-300 rounded-md"
					:class="{ '!border-red-500': errors?.[input.id]}" />
				<span class="font-semibold text-red-500">{{ errors?.[input.id]?._errors[0] }}</span>
			</div>
		</div>

		<button type="submit"
			class="block bg-red-700 text-white py-4 w-full sm:w-1/2 rounded-full hover:bg-red-800 mt-8 mx-auto">
			Confirm Order
		</button>
	</form>
</template>


<script setup lang="ts">
const formInputs = [
	{id: 'name', label: 'Full Name', type: 'text'},
	{id: 'phone', label: 'Phone', type: 'tel'},
	{id: 'email', label: 'Email', type: 'email'},
	{id: 'street', label: 'Street', type: 'text'},
	{id: 'city', label: 'City', type: 'text'},
	{id: 'zip', label: 'ZIP Code', type: 'text'},
] as const

	const inputData = ref({
		name: '',
		phone: '',
		email: '',
		street: '',
		city: '',
		zip: '',
	})
const { errors, validateForm } = useValidation(inputData)

const submitForm = () => {
	validateForm()
}
</script>