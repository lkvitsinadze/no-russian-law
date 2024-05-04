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
  },
  {
    label: 'აგენტების კანონპროექტი',
    to: 'https://gaanate.org/',
    window: '_blank'
  }
]
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 dark:border-gray-800 flex-wrap z-10"
    :ui="{
      wrapper: 'sticky top-0 bg-white',
      label: 'font-firago-regular uppercase text-lg'
    }"
  />
</template>
