<template>
  <!-- <div class="bg-red-100/50 h-screen"> -->
    <div class="max-w-6xl w-full mx-auto p-6 md:p-8 flex flex-col lg:flex-row gap-8">
      <main class="border border-red-500">
        <h1 class="text-4xl font-bold mb-4">Desserts</h1>
        <div class="grid sm:grid-cols-2 gap-6">
          <ProductItem v-for="product in data" :key="product.id" :product="product" />
        </div>
      </main>
      <aside class="border border-green-500 w-full md:w-1/2 lg:w-[24rem] mx-auto shrink-0"></aside>
    </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/products')
</script>

<style>
body {
  @apply bg-red-100/50;
}
</style>