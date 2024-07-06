<template>
  <div class="bg-white py-24 sm:py-32">
    <div id="link1">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Quem somos
          </h2>
          <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
        </div>
        <div
          class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        ></div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <!-- <div>
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</p>
          <p class="mt-6 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
        </div> -->
        <dl
          class="col-span-4 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-4"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-9"
          >
            <dt class="font-semibold text-gray-900">
              <CheckIcon
                class="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                aria-hidden="true"
              />
              {{ feature.name }}
            </dt>
            <!-- <dd class="mt-2">{{ feature.description }}</dd> -->
          </div>
        </dl>
      </div>
    </div>

    <div class="mx-auto max-w-2xl sm:text-center px-6 mt-9">
        <h2 class="text-lg font-semibold leading-7 text-indigo-600">Um time de advogados para te direcionar quando você mais precisar!</h2>
      </div>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Plano de ação para proteger sua empresa",
  },
  {
    name: "Contrato de parceria comercial",
  },
  {
    name: "Contratos sociais e acordo entre sócios",
  },
  {
    name: "Contrato de prestação de serviço",
  },
  {
    name: "Contratos com parceiros e colaboradores",
  },
  {
    name: "Acordo de confidencialidade",
  },
  {
    name: "Guia de boas práticas para sua empresa",
  },
  {
    name: "Distrato, rescisões e negociações ",
  },
  {
    name: "Notificação extrajudicial / Contranotificação ",
  },
];
</script>