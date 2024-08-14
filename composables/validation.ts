import * as z from 'zod'

type FormSchema = z.infer<typeof formSchema>

const formSchema = z.object({
	name: z
		.string()
		.regex(/^\p{L}+(?:\s+\p{L}+)+$/u, 'Please enter your full name'),
	phone: z
		.string()
		.regex(
			/^\+?(\d{1,3})? ?\d{3} ?\d{3} ?\d{3}$/,
			'Please enter a valid phone number'
		),
	email: z.string().email('Please enter a valid email address'),
	street: z.string().min(2, 'Please enter your street address'),
	city: z.string().min(2, 'Please enter your city'),
	zip: z.string().regex(/^\d{3} ?\d{2}$/, 'Please enter a valid ZIP code'),
})

export function useValidation(inputData: Ref<FormSchema>) {
	const errors = ref<z.ZodFormattedError<FormSchema> | null>(null)


	const validateForm = () => {
		const result = formSchema.safeParse(inputData.value)
		if (!result.success) {
			errors.value = result.error.format()
			return
		}
		errors.value = null
	}

	return { inputData, errors, validateForm }
}
