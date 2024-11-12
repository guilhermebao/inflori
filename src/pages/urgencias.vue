<template>
  <div>
    <header-data />
    <div>
      <!-- Image section -->
      <!-- <div class="xl:mx-auto xl:max-w-7xl xl:px-8 mt-24">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt=""
          class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div> -->

      <div
        class="bg-white py-8 sm:py-8 xl:mx-auto xl:max-w-7xl xl:px-8 px-6 lg:px-8"
      >
        <div>
          <div class="mx-auto lg:mx-0">
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              URGÊNCIAS ODONTOLÓGICAS
            </h2>

            <div class="mt-6">
              <img
                src="/src/assets/img/dor-dente.jpg"
                alt=""
                class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
              />
            </div>

            <p class="mt-6 text-lg leading-8 text-gray-600">
              Está com DOR DE DENTE? O DENTE PROVISÓRIO SOLTOU? Precisa de um
              DENTISTA que RESOLVA DE VEZ O SEU PROBLEMA? Não espere!
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Na INFLÓRI CLÍNICA oferecemos atendimentos odontológicos de
              URGÊNCIA com dentistas de confiança e rapidez!
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Os serviços de urgências realizados são em clientes acima de 15
              anos de idade. O serviços são:
              <br />- Extração de dente <br />- ⁠Canal <br />- ⁠Cimentação de
              peças definitivas e provisórias <br />- ⁠Remoção de cáries <br />-
              ⁠E muito mais!
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Não sofra mais! Entre em CONTATO AGORA MESMO.
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Telefones<br />
              (31) 2512-6053<br />
              (31) 9.7553-1043<br />
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600"></p>
          </div>
        </div>
      </div>
    </div>
    <contact-button />
    <footer-data />
  </div>
</template>


<script setup>
import hero from "../components/hero.vue";
import headerData from "../components/header.data.vue";
import footerData from "../components/footer.data.vue";
import contactButton from "../components/contact.button.vue";
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>