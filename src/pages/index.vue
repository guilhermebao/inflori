<template>
  <div>
    <hero />
    <data-enterprise />
    <!-- <smartmaps /> -->
    <!-- <contact /> -->
    <!-- <services /> -->
    <!-- <section-hero /> -->
    <!-- <triade /> -->
    <contact-button />
    <person />
    <team-sections />
    <faq-sections />
    <category-previews />
    <category-two-previews />
    <footer-data />
  </div>
</template>

<script setup>
import hero from "../components/hero.vue";
import smartmaps from "../components/smartmaps.main.vue";
import contact from "../components/contact.vue";
import footerData from "../components/footer.data.vue";
import contactButton from "../components/contact.button.vue";
import sectionHero from "../components/section.hero.vue";
import triade from "../components/triade.vue";
import services from "../components/services.vue"
import faqSections from "../components/faq.sections.vue";
import categoryPreviews from "../components/category.previews.vue";
import categoryTwoPreviews from "../components/category.two.previews.vue";
import dataEnterprise from "../components/data.enterprise.vue";
import person from "../components/person.vue";
import teamSections from "../components/team.sections.vue";

</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

