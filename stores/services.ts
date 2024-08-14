import type { Service } from '~/types'

export const useServicesStore = defineStore('services', {
	state: () => ({
		paymentMethod: null as Service | null,
		shippingMethod: null as Service | null,
	}),

	actions: {
		setPaymentMethod(service: Service) {
			this.paymentMethod = service
		},

		setShippingMethod(service: Service) {
			this.shippingMethod = service
		},
	},
})
