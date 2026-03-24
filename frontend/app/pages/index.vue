<script setup lang="ts">
const { data, pending, error, refresh } = await useApi<{
  name: string, 
  price: number, 
}>('/api/products/1')
</script>

<template>
  <main style="padding: 24px; font-family: sans-serif;">
    <h1>Nuxt + Symfony API</h1>

    <p v-if="pending">Ładowanie...</p>
    <p v-else-if="error">Błąd: {{ error.message }}</p>

    <div v-else>
      <p>Produkt: {{ data?.name }}</p>
      <p>Cena: {{ data?.price }}</p>
    </div>

    <button @click="refresh" style="margin-top: 16px;">
      Odśwież
    </button>
  </main>
</template>