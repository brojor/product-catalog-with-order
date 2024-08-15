import type { Product } from '~/types'

export const useCartStore = defineStore('cart', {
	state: () => ({
		items: [] as { product: Product; quantity: number }[],
	}),

	getters: {
		totalPrice: (state) =>
			state.items.reduce(
				(total, item) => total + item.product.price * item.quantity,
				0
			),

		totalQuantity: (state) =>
			state.items.reduce((total, item) => total + item.quantity, 0),

		isInCart: (state) => (productId: number) =>
			state.items.some((item) => item.product.id === productId),

		getQuantity: (state) => (productId: number) => {
			const item = state.items.find((item) => item.product.id === productId)
			return item ? item.quantity : 0
		},
	},

	actions: {
		addToCart(product: Product) {
			const item = this.items.find((item) => item.product.name === product.name)
			if (item) {
				item.quantity++
			} else {
				this.items.push({ product, quantity: 1 })
			}
		},

		removeFromCart(productId: number) {
			const index = this.items.findIndex(
				(item) => item.product.id === productId
			)
			if (index !== -1) {
				this.items.splice(index, 1)
			}
		},

		incrementQuantity(productId: number) {
			const item = this.items.find((item) => item.product.id === productId)
			if (item) {
				item.quantity++
			}
		},

		decrementQuantity(productId: number) {
			const item = this.items.find((item) => item.product.id === productId)
			if (item && item.quantity > 1) {
				item.quantity--
			} else {
				this.removeFromCart(productId)
			}
		},

		clearCart() {
			this.items = []
		},
	},
})
