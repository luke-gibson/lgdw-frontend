<script setup lang="ts">
  const props = defineProps({
    to: {
      type: String,
      required: true,
    },
  });

  const route = useRoute();
  const isActive = computed(() => route.path === props.to);
</script>

<template>
  <NuxtLink
    :to="to"
    :class="[
      'py-2 px-5 text-primary sm:text-primary hover:text-palette-light transition-colors block text-center text-2xl sm:text-lg',
      { 'font-bold': isActive },
    ]"
  >
    <slot />
  </NuxtLink>
</template>
