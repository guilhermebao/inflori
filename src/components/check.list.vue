<template>
  <div class="mb-6">
    <p class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        /></svg
      >{{ props.text }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["text"]);
</script>