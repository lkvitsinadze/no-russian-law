<script setup lang="ts">
const links = [
{
  label: 'თანხის შეგროვება',
  to: '#fundraising'
},
// {
//   label: 'უსაფრთხოების წესები',
//   to: '#terms'
// },
{
  label: 'იურიდიული დახმარება',
  to: '#law-help'
},
  {
    label: 'საჭირო ინფორმაცია',
    to: '#info'
  },
]
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 dark:border-gray-800 flex-wrap"
  />
</template>
