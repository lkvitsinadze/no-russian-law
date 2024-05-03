<script setup>
const businessmen = [
  { name: 'ნოშრევან ნამორაძე', companies: ['კრწანისი ვილა რეზიდენსი'] },
  { name: 'ლევან ფხაკაძე, სოსო ფხაკაძე', companies: ['დანკინი', 'ვენდისი', 'ვისოლი', 'სმარტი'] },
  { name: 'ივლიანე (ილია) წულაია', companies: ['არქი'] },
  { name: 'ელდარ მილდიანი', companies: ['წინანდლის ძველი მარანი'] },
  { name: 'ზურაბ ჩხაიძე', companies: ['კახური ტრადიციული მეღვინეობა'] },
  { name: 'შოთა ბერეკაშვილი', companies: ['ბკ ქონსთრაქშენი'] },
  { name: 'მინდია  საბანაძე', companies: ['სითი მოლი'] },
  { name: 'ირაკლი კვერღელიძე', companies: ['ორბი'] },
  { name: 'ვანო ჩხარტიშვილი', companies: [] },
  { name: 'დიმა ნაფეტვარიძე', companies: ['ოკკასიო ნოვა'] },
  { name: 'ლაშა კვაჭაძე', companies: ['ბლოქსი'] },
  { name: 'შალვა გვარამაძე', companies: ['შალვინო'] },
  { name: 'ზაზა გოგოტიშვილი', companies: ['ანაგი დეველოპმენტი'] },
];
</script>

<template>
  <TheSection class="mb-4" title="ბოიკოტი">
    <p class="font-bold mb-4 text-lg">
      კომპანიებისა და ბიზნესმენების სია რომლებაც მხარდაჭერა გამოუცხადეს რუსულ კანონს:
    </p>

    <div class="rounded-xl border border-slate-100 overflow-hidden xl:w-2/3">
      <table class="table table-auto border-collapse w-full">
        <thead>
          <tr class="bg-slate-200">
            <th class="px-4 py-3 border-b border-slate-100 text-gray-700 font-bold text-left">სახელი</th>
            <th class="px-4 py-3 border-b border-l border-slate-100 text-gray-700 font-bold text-left">კომპანიები</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in businessmen" :key="person.name" class="border-b border-slate-100 last-of-type:border-transparent">
            <td class="p-4 py-3 text-gray-600">{{ person.name}}</td>
            <td class="border-l border-slate-100 p-4 py-3 text-gray-600">{{ person.companies.join(', ')}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 class="mt-10 mb-4">წყარო:</h4>
    <ol class="list-decimal pl-10">
      <li><a class="underline text-blue-400 mb-1 block" href="https://formulanews.ge/News/110200" target="_blank">https://formulanews.ge/News/110200</a></li>
      <li><a  class="underline text-blue-400 mb-1 block" href="https://on.ge/story/128774-რუსული-კანონის-მხარდამჭერი-ბიზნესმენების-სია-კავშირები-მთავრობასთან-შემოწირულება-და-კორუფციული-ბრალდებები" target="_blank">https://on.ge/story/128774-რუსული-კანონის-მხარდამჭერი-ბიზნესმენების-სია-კავშირები-მთავრობასთან-შემოწირულება-და-კორუფციული-ბრალდებები</a></li>
    </ol>
  </TheSection>
</template>
