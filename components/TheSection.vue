<template>
  <UContainer class="my-10">
    <h2
      v-if="props.title"
      class="text-2xl mb-4 font-firago-regular uppercase"
    >
      {{ props.title }}
    </h2>
    <slot />
  </UContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>
