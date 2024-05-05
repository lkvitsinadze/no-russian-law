<script setup lang="ts">
const route = useRoute()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  script: [{
    innerHTML: `(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0&appId=1161289928451992&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));`
  }]
})

useSeoMeta({
  ogTitle: 'პროტესტის გზამკვლელი - არა რუსულ კანონს',
  ogDescription: 'არა რუსულ კანონს, მნიშვნელოვანი რესურსების ბაზა',
  ogImage: '/fb-og.jpg',
  twitterImage: '/fb-og.jpg',
  twitterCard: 'summary_large_image'
})

watch(() => route.fullPath, () => {
  window.FB.XFBML.parse();
})

</script>

<template>
  <AppHeader />

  <NuxtPage />

  <AppFooter />

  <UNotifications />
</template>
