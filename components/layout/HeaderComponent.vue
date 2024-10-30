<script setup lang="ts"></script>

<template>
  <header class="py-2 fixed top-0 left-0 right-0 bg-white sm:static shadow-md shadow-black/10 sm:shadow-none">
    <LayoutContainerComponent class="flex justify-between items-center">
      <NuxtLink class="z-10" to="/" aria-label="home page link">
        <IconsLogoIcon class="w-28 sm:w-36"/>
      </NuxtLink>
      <LayoutNavigationComponent/>
    </LayoutContainerComponent>
  </header>
</template>