<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <p
          class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          <!-- Planos para todos os tamanhos de provedores -->
          Planos adaptados, resultados ampliados
        </p>
      </div>
      <p
        class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
      >
        Conheça nossos planos! Oferecemos desde planos básicos para pequenos
        provedores até pacotes avançados para empresas de grande porte.
      </p>

      <div
        class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-5"
      >
        <div
          v-for="tier in tiers"
          :key="tier.id"
          :class="[
            tier.mostPopular
              ? 'ring-2 ring-indigo-600'
              : 'ring-1 ring-gray-200',
            'rounded-3xl p-8',
          ]"
        >
          <h3
            :id="tier.id"
            :class="[
              tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
              'text-lg font-semibold leading-8',
            ]"
          >
            {{ tier.name }}
          </h3>
          <p class="mt-4 text-sm leading-6 text-gray-600">
            {{ tier.description }}
          </p>

          <a
            :href="tier.href"
            :aria-describedby="tier.id"
            :class="[
              tier.mostPopular
                ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
              'mt-6 block rounded-md py-2 px-3 text-center text-sm leading-6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
            ]"
            >Solicitar</a
          >
          <ul
            role="list"
            class="mt-8 space-y-3 text-sm leading-5 text-gray-600"
          >
            <li v-for="feature in tier.features" :key="feature" class="flex">
              <CheckIcon
                class="h-4 flex-none text-indigo-600"
                aria-hidden="true"
              />
              {{ feature }}
            </li>
          </ul>
          <p class="text-center mt-5 text-slate-1000">
            {{ tier.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tiers = [
  {
    name: "Personal",
    id: "tier-Personal",
    href: "#",
    price: "R$ 199,00",
    description: "Plano básico.",
    features: [
      "Suporte 24/7 via Whatsapp",
      "1 Usuário",
      "Usuário adicional R$159,00",
      "Documentação de Rede óptica FTTX",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    id: "tier-professional",
    href: "#",
    price: "R$ 299,00",
    description: "Começe a expandir.",
    features: [
      "Suporte 24/7 via Whatsapp",
      "3 Usuário",
      "Usuário adicional R$119,00",
      "Vendas",
    ],
    mostPopular: false,
  },
  {
    name: "Premium",
    id: "tier-Premium",
    href: "#",
    price: "R$ 399,00",
    description: "Integre seus dados comerciais.",
    features: [
      "Suporte 24/7 via Whatsapp",
      "7 Usuário",
      "Usuário adicional R$69,00",
      "Vendas",
      "Integração com ERP",
    ],
    mostPopular: true,
  },
  {
    name: "Supervisor",
    id: "tier-Supervisor",
    href: "#",
    price: "R$ 499,00",
    description: "Integre e monitore sua rede.",
    features: [
      "Suporte 24/7 via Whatsapp",
      "10 Usuário",
      "Usuário adicional R$25,00",
      "Vendas",
      "Integração com ERP",
      "Integração com OLT",
    ],
    mostPopular: false,
  },
  {
    name: "Enterprise",
    id: "tier-Enterprise",
    href: "#",
    price: "Consulte",
    description: "Integre e monitore sua rede.",
    features: [
      "Suporte 24/7 via Whatsapp",
      "50 Usuário*",
      "Vendas",
      "Integração com ERP",
      "Integração com OLT",
      "OTDR Inteligente",
    ],
    mostPopular: false,
  },
];
</script>