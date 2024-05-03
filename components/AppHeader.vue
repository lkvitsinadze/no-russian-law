<script setup lang="ts">
const links = [
  {
    label: 'არა რუსულ კანონს',
    to: '/'
  },
// {
//   label: 'უსაფრთხოების წესები',
//   to: '#terms'
// },
  {
    label: 'აქცია',
    to: '/protest'
  },
  {
    label: 'ბოიკოტი',
    to: '/boycott'
  }
]
</script>

<template>
  <UHorizontalNavigation
      :links="links"
      class="border-b border-gray-200 dark:border-gray-800 flex-wrap"
  />
</template>
