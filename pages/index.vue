<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <UCard>
    <template #header>
      <Placeholder class="h-8" />
    </template>

    <Placeholder class="h-32" />

    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>
