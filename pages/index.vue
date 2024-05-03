<script setup lang="ts">
const toast = useToast()

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const fbGroups = [
  'https://www.facebook.com/groups/337755359323575',
  'https://www.facebook.com/groups/1481110879282239/'
];

const crowdFunding = [
  {
    title: 'ჯგუფი დაიტოვე',
    description: 'ჯგუფი დაიტოვე',
    source: 'https://www.facebook.com/groups/daitove/posts/339001249198986/',
    accounts: [
      {
        bank: 'საქართველოს ბანკი',
        iban: 'GE69BG0000000589373217',
        receiver: 'ოთარ შავერდაშვილი'
      },
      {
        bank: 'თბს ბანკი',
        iban: 'GE87TB7510545064300012',
        receiver: 'მარიამ ბაბუნაშვილი'
      }
    ],
  },
  {
    title: 'სამხედრო გვერდი - World Military / ანალიტიკა',
    source:  'https://www.facebook.com/profile.php?id=100068160218572',
    accounts: [
      {
        bank: 'საქართველოს ბანკი',
        iban: 'GE82BG0000000537580124 ',
      },
      {
        bank: 'თბს ბანკი',
        iban: 'GE48TB7830545061600045 ',
      }
    ],
  }
];

async function copyIbanToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast.add({
      id: 'success',
      title: 'IBAN დაკოპირებულია',
      description: text,
      timeout: 5000,
    })
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}
</script>

<template>
  <TheSection id="fundraising" class="mb-4" title="თანხის შეგროვება">
    <div class="grid grid-cols-2 gap-6">
      <UCard v-for="item in crowdFunding">
        <template #header>
          <h3 class="font-bold">{{ item.title }}</h3>
        </template>
        <div v-for="account in item?.accounts" class="text-sm mb-2">
          <div>ბანკი: {{ account.bank }}</div>
          <div>ანგარიში: <span class="font-bold cursor-pointer" @click="copyIbanToClipboard(account.iban)">#{{ account.iban }}</span></div>
          <div v-if="account.receiver">მიმღები: {{ account.receiver }}</div>
        </div>
        <template #footer v-if="item.source">
          <p><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" :href="item.source" target="_blank">{{ item.source }}</a></p>
        </template>
      </Ucard>
    </div>
  </TheSection>

  <TheSection class="mb-4" id="law-help" title="იურიდიული დახმარება">
      <UAlert
        icon="i-heroicons-information-circle"
        color="orange"
        variant="soft"
    >
      <template #title>
       <span class="text-md font-bold">ცხელი ხაზი: <a class="link" href="tel:577070563">577070563</a></span>
      </template>
      <template #description>
        <p class="mb-2">მოქალაქეთა საყურადღებოდ: იმ შემთხვევაში თუ თქვენ დაგაკავეს აქციაზე ქართული არასამთავრობო ორგანიზაციები მზად არიან უფასოდ გაგიწიონ იურიდიული დახმარება.
        დარეკეთ ცხელ ხაზზე </p>
        <a href="https://www.facebook.com/tigeorgia/posts/pfbid0mSi56jDgjyshrvQvQEttJTn9WyLZu8ijqFrBvfSCUNbWpr6PzyiaLKzUyU1zFmidl">https://www.facebook.com/tigeorgia/posts/pfbid0mSi56jDgjyshrvQvQEttJTn9WyLZu8ijqFrBvfSCUNbWpr6PzyiaLKzUyU1zFmidl</a>
      </template>
    </UAlert>
  </TheSection>

  <TheSection id="info" class="mb-4" title="ჯგუფები თვითორგანიზებისთვის">
    <div class="flex gap-5">
      <UCard class="max-w-[450px]" v-for="link in fbGroups">
        <div class="fb-group"
            :data-href="link"
            data-width="400"
            data-show-metadata="false">
        </div>
      </UCard>
    </div>
  </TheSection>
</template>
