export default defineEventHandler((event) => {
	return [
		{
			id: 1,
			imgName: 'waffle',
			name: 'Waffle with Berries',
			category: 'Waffle',
			price: 6.5,
		},
		{
			id: 2,
			imgName: 'creme-brulee',
			name: 'Vanilla Crème Brûlée',
			category: 'Crème Brûlée',
			price: 7.0,
		},
		{
			id: 3,
			imgName: 'macaron',
			name: 'Macaron Mix of Five',
			category: 'Macaron',
			price: 8.0,
		},
	]
})
