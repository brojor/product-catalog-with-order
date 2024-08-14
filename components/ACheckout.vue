<template>
	<h2 class="text-xl sm:text-3xl font-bold mb-6">Shipping and payment</h2>
	<form @submit.prevent="submitForm">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
			<div>
				<label for="name" class="font-semibold text-zinc-500">Full Name</label>
				<input type="text" id="name" v-model="imputData.name" class="w-full p-2 border border-zinc-300 rounded-md"
					:class="{'border-red-500': errors?.name }" />
				<span class="font-semibold text-red-500">{{ errors?.name?._errors[0] }}</span>
			</div>
			<div>
				<label for="phone" class="font-semibold text-zinc-500">Phone</label>
				<input type="tel" id="phone" v-model="imputData.phone" class="w-full p-2 border border-zinc-300 rounded-md" :class="{'border-red-500': errors?.phone }"/>
				<span class="font-semibold text-red-500">{{ errors?.phone?._errors[0] }}</span>
			</div>
			<div>
				<label for="email" class="font-semibold text-zinc-500">Email</label>
				<input type="email" id="email" v-model="imputData.email" class="w-full p-2 border border-zinc-300 rounded-md" :class="{'border-red-500': errors?.email }"/>
				<span class="font-semibold text-red-500">{{ errors?.email?._errors[0] }}</span>
			</div>
			<div>
				<label for="street" class="font-semibold text-zinc-500">Street</label>
				<input type="text" id="street" v-model="imputData.street"
					class="w-full p-2 border border-zinc-300 rounded-md" :class="{'border-red-500': errors?.street }"/>
				<span class="font-semibold text-red-500">{{ errors?.street?._errors[0] }}</span>
			</div>
			<div>
				<label for="city" class="font-semibold text-zinc-500">City</label>
				<input type="text" id="city" v-model="imputData.city" class="w-full p-2 border border-zinc-300 rounded-md" :class="{'border-red-500': errors?.name }"/>
				<span class="font-semibold text-red-500">{{ errors?.city?._errors[0] }}</span>
			</div>
			<div>
				<label for="zip" class="font-semibold text-zinc-500">ZIP Code</label>
				<input type="text" id="zip" v-model="imputData.zip" class="w-full p-2 border border-zinc-300 rounded-md" :class="{'border-red-500': errors?.name }"/>
				<span class="font-semibold text-red-500">{{ errors?.zip?._errors[0] }}</span>
			</div>
		</div>


		<button type="submit"
			class="block bg-red-700 text-white py-4 w-full sm:w-1/2 rounded-full hover:bg-red-800 mt-8 mx-auto">
			Confirm Order
		</button>
	</form>
</template>


<script setup lang="ts">
import * as z from 'zod';

const imputData = ref({
	name: '',
	phone: '',
	email: '',
	street: '',
	city: '',
	zip: '',
});

const formSchema = z.object({
	name: z.string().regex(/^\p{L}+(?:\s+\p{L}+)+$/u, "Please enter your full name"),
	phone: z.string().regex(/^\+?(\d{1,3})? ?\d{3} ?\d{3} ?\d{3}$/, "Please enter a valid phone number"),
	email: z.string().email("Please enter a valid email address"),
	street: z.string().min(2, "Please enter your street address"),
	city: z.string().min(2, "Please enter your city"),
	zip: z.string().regex(/^\d{3} ?\d{2}$/, "Please enter a valid ZIP code"),

});

type FormSchema = z.infer<typeof formSchema>;
const errors = ref<z.ZodFormattedError<FormSchema> | null>(null)

const submitForm = () => {
	const result = formSchema.safeParse(imputData.value)
	if (!result.success) {
		errors.value = result.error.format()
		console.log("errors", errors.value);
		return
	}
	console.log("success");
	errors.value = null
}



</script>