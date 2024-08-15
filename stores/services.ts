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

	getters: {
		totalPrice: (state) => {
			const paymentPrice = state.paymentMethod?.price || 0
			const shippingPrice = state.shippingMethod?.price || 0
			return paymentPrice + shippingPrice
		},
	},
})
