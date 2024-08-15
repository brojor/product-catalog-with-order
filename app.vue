<template>
  <div class="max-w-6xl w-full mx-auto p-6 md:p-8 flex flex-col lg:flex-row gap-8">
    <main>
      <h1 class="text-4xl font-bold mb-4">Desserts</h1>
      <div class="grid sm:grid-cols-2 gap-6">
        <ProductItem v-for="product in data" :key="product.id" :product="product" />
      </div>
    </main>
    <aside class="w-full md:w-1/2 lg:w-[24rem] mx-auto shrink-0">
      <ACart @submit="openModal" />
    </aside>
  </div>
  <ModalWindow v-if="isModalOpen" @close="closeModal">
    <ACheckout v-if="!isOrderSended" @send-order="showSummary" />
    <ASummary v-else @submit="startNewOrder" />
  </ModalWindow>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/products')

const cartStore = useCartStore()
const servicesStore = useServicesStore()

const isModalOpen = ref(false)
const isOrderSended = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  if(isOrderSended.value) {
    startNewOrder()
  }
  isModalOpen.value = false
}

const showSummary = () => {
  isOrderSended.value = true
}

const startNewOrder = () => {
  isOrderSended.value = false
  isModalOpen.value = false
  cartStore.clearCart()
	servicesStore.reset()
}
</script>

<style>
body {
  @apply bg-red-100/50;
}
</style>