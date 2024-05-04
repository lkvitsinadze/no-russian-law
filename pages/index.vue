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
]

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
    ]
  },
  {
    title: 'World Military / ანალიტიკა',
    source: 'https://www.facebook.com/profile.php?id=100068160218572',
    accounts: [
      {
        bank: 'საქართველოს ბანკი',
        iban: 'GE82BG0000000537580124'
      },
      {
        bank: 'თბს ბანკი',
        iban: 'GE48TB7830545061600045'
      }
    ]
  },
  {
    title: 'დაფიონი',
    source: 'https://www.facebook.com/DAFIONI/posts/pfbid0ZiST3YcdmWEyNgHkKEmyEzQTgQ3bzjTmsLLkno3Cjw8iYWrtoF1oCjA1JbkWxPxel',
    accounts: [
      {
        bank: 'საქართველოს ბანკი',
        iban: 'GE24BG0000000565777225 '
      },
      {
        bank: 'თბს ბანკი',
        iban: 'GE20TB7720245064300045'
      }
    ]
  }
]

async function copyIbanToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    toast.add({
      id: 'success',
      title: 'IBAN დაკოპირებულია',
      description: text,
      timeout: 5000
    })
    console.log('Text copied to clipboard')
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>

<template>
  <div class="w-full">
    <img
      class="object-cover w-full"
      src="/header.jpeg"
    >
  </div>

  <TheSection
    id="fundraising"
    class="mb-4"
    title="თანხის შეგროვება"
  >
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <UCard v-for="item in crowdFunding">
        <template #header>
          <h3 class="font-bold font-firago-regular uppercase">
            {{ item.title }}
          </h3>
        </template>
        <div
          v-for="account in item?.accounts"
          class="text-sm mb-2"
        >
          <div>ბანკი: {{ account.bank }}</div>
          <div>
            ანგარიში: <span
              class="font-firago-bold cursor-pointer"
              @click="copyIbanToClipboard(account.iban)"
            >#{{ account.iban }}</span>
          </div>
          <div>
            მიმღები: {{ account.receiver }}
          </div>
        </div>
        <template
          v-if="item.source"
          #footer
        >
          <p>
            <a
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline break-words"
              :href="item.source"
              target="_blank"
            >წყარო</a>
          </p>
        </template>
      </Ucard>
    </div>
  </TheSection>

  <TheSection
    id="law-help"
    class="mb-4"
    title="იურიდიული დახმარება"
  >
    <ClientOnly>
      <UAlert
        icon="i-heroicons-information-circle"
        color="orange"
        variant="soft"
      >
        <template #title>
          <p class="text-lg font-firago-regular uppercase">
            ცხელი ხაზი:
            <a
              class="link"
              href="tel:577070563"
            >577070563</a>
          </p>
        </template>
        <template #description>
          <div>
            <p class="mb-2">
              მოქალაქეთა საყურადღებოდ: იმ შემთხვევაში თუ თქვენ დაგაკავეს აქციაზე ქართული არასამთავრობო ორგანიზაციები მზად არიან უფასოდ გაგიწიონ იურიდიული დახმარება.
              დარეკეთ ცხელ ხაზზე
            </p>
            <a href="https://www.facebook.com/tigeorgia/posts/pfbid0mSi56jDgjyshrvQvQEttJTn9WyLZu8ijqFrBvfSCUNbWpr6PzyiaLKzUyU1zFmidl">https://www.facebook.com/tigeorgia/posts/pfbid0mSi56jDgjyshrvQvQEttJTn9WyLZu8ijqFrBvfSCUNbWpr6PzyiaLKzUyU1zFmidl</a>
          </div>
        </template>
      </UAlert>
    </ClientOnly>
  </TheSection>

  <TheSection
    id="info"
    class="mb-4"
    title="ჯგუფები თვითორგანიზებისთვის"
  >
    <div class="flex flex-wrap gap-5">
      <UCard
        v-for="link in fbGroups"
        class="max-w-[450px]"
      >
        <div
          class="fb-group"
          :data-href="link"
          data-width="340"
          data-show-metadata="false"
        />
      </UCard>
    </div>
  </TheSection>
</template>
