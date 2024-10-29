<template>
  <div class="bg-gray-900">
    <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/src/assets/img/logo-inflori.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        

        <a href="/inflori" class="text-sm font-semibold leading-6 text-gray-900 uppercase">Inflóri clinica</a>
        <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a> -->
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 uppercase">
            Tratamentos
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <!-- <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div> -->
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <!-- <p class="mt-1 text-gray-600">{{ item.description }}</p> -->
                  </div>
                </div>
              </div>
              <!-- <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div> -->
            </PopoverPanel>
          </transition>
        </Popover>
        <a href="/cliente" class="text-sm font-semibold leading-6 text-gray-900 uppercase">Clientes</a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> -->
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Inflóri clinica</span>
            <img class="h-8 w-auto" src="/src/assets/img/logo-inflori.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
        <a href="/inflori" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Inflóri clinica</a>

          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Tratamentos
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in [...products]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <a href="/clientes" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Clientes</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

    

    <swiper :pagination="{clickable: true}" :modules="[Navigation, Pagination]" :loop="true" navigation pagination class="mySwiper">
      <swiper-slide>
        <div class="card relative isolate overflow-hidden pt-14">
      <img src="/src/assets/img/img-1-1.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
      <!-- <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div> -->
      <div class="mx-12 max-w-2xl py-32 sm:py-48 lg:py-56">
        <!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Announcing our next round of funding. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div> -->
        <div class="text-center h-80">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">REABILITAÇÃO ORAL</h1>
          <p class="mt-6 text-lg leading-8 text-white">Para que seu sorriso seja o mais natural possível, o nosso projeto de novo sorriso leva em conta sua personalidade, traços faciais e seus desejos.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="https://infloriclinica.com/lentes" class="rounded-md bg-[#132035] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#132035ad] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#132035ad]">SAIBA MAIS</a>
          </div>
        </div>
      </div>
      <!-- <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div> -->
    </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card relative isolate overflow-hidden pt-14">
      <img src="/src/assets/img/img-1-2.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
      <!-- <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div> -->
      <div class="mx-12 max-w-2xl py-32 sm:py-48 lg:py-56">
        <!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Announcing our next round of funding. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div> -->
        <div class="text-center h-80">
          <h1 class="text-4xl font-bold tracking-tight text-[#132035] sm:text-6xl">LENTES DE CONTATO DENTAL</h1>
          <p class="mt-6 text-lg leading-8 text-white">Resinas Compostas ou Porcelanas? Qual material para o meu caso? Nosso time de especialistas irá te ajudar com cada detalhe e explicação do seu caso. E saida, você terá um sorriso novo!</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="https://infloriclinica.com/lentes" class="rounded-md bg-[#132035] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#132035ad] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#132035ad]">SAIBA MAIS</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card relative isolate overflow-hidden pt-14">
      <img src="/src/assets/img/img-1-3.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
      <!-- <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div> -->
      <div class="mx-12 max-w-2xl py-32 sm:py-48 lg:py-56">
        <!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Announcing our next round of funding. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div> -->
        <div class="text-center h-80">
          <h1 class="text-4xl font-bold tracking-tight  text-white sm:text-6xl">TRATAMENTO COM MICROSCÓPIO</h1>
          <p class="mt-6 text-lg leading-8 text-white">Alta tecnologia nos tratamentos mais complexos. Onde a exigência por detalhes é maior. Elevando a margem de sucesso nos procedimentos de endodonticos (canal)</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="https://infloriclinica.com/lentes" class="rounded-md bg-[#132035] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#132035ad] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#132035ad]">SAIBA MAIS</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
      </swiper-slide>
  </swiper>

    
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';



const navigation = [
  { name: "Inflóri clinica", href: "/inflori" },
  { name: "Lentes de contato", href: "/lentes" },
  // { name: "Tratamentos", href: "#link3" },
  { name: "Clientes", href: "/cliente" },
];

const products = [
  { name: 'Lentes de contato', href: '/lentes' },
  { name: 'Canal com microscópio', href: '/endodontico' },
  { name: 'Prótese fixa / Implante', href: '/implantes' },
  { name: 'Ortodontia (invisaling)', href: '/ortodontia' },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const mobileMenuOpen = ref(false);
</script>

<script>
function mobileMenuOpen() {
  var div = document.getElementById("back");
  div.style.display = "block";
}

const buildSlideMarkup = (count) => {
	let slideMarkup = '';
  for (var i = 1; i <= count; i++) {
  	slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
  }
  return slideMarkup;
};

</script>

<style>
.swiper-button-prev, .swiper-button-next {
  width: 35px;
  height: 35px;
  color: #132035;
  font-weight: bold;
  background: white;
  border-radius: 100%;
}

.swiper-pagination-bullet-active {
  background: #132035 !important;
}

.swiper-button-prev::after, .swiper-button-next::after {
  font-size: 20px !important;
}

.swiper-button-next::after {
 padding-left: 2px
}

.swiper-button-prev::after {
 padding-right: 2px;
}

@media (max-width: 768px) {
  .swiper-button-prev, .swiper-button-next {
    display: none;
  }
}
</style>