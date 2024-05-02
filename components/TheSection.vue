<template>
    <UContainer class="my-10">
        <h2 class="text-2xl mb-4">{{props.title}}</h2>
        <slot></slot>
    </UContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>