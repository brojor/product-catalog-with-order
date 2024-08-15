<template>
	<h2 class="text-xl sm:text-3xl font-bold mb-6">Shipping and payment</h2>
	<form @submit.prevent="submitForm">

		<ShippingInfo />
		<hr class="my-6">
		<PaymentInfo />
		<hr class="my-6">
		<PersonalInfo ref="personalInfo" />

		<button type="submit"
			class="block bg-red-700 text-white py-4 w-full sm:w-1/2 rounded-full hover:bg-red-800 mt-8 mx-auto">
			Send Order
		</button>
	</form>
</template>


<script setup lang="ts">
import PersonalInfo from './PersonalInfo.vue';

const emit = defineEmits(['sendOrder'])

const personalInfo = ref<typeof PersonalInfo | null>(null)

const submitForm = () => {
	const errors = personalInfo.value?.validateForm()
	if (!errors) {
		emit('sendOrder')
	}
}
</script>