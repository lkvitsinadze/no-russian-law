<script setup lang="ts">
const route = useRoute()

const links = [
{
  label: 'თანხის შეგროვება'
},
{
  label: 'უსაფრთხოების წესები'
},
{
  label: 'საჭირო ინფორმაცია'
},
{
  label: 'იურიდიული დახმარება'
},
]
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 dark:border-gray-800"
  />
</template>
