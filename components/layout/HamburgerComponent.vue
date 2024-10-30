<script setup lang="ts">
  const props = defineProps({
    menuOpen: Boolean,
  });

  const emit = defineEmits(['toggleMenu']);

  function handleClick() {
    emit('toggleMenu');
  }
</script>

<template>
  <button @click="handleClick" :aria-expanded="props.menuOpen" class="relative group">
    <div class="relative flex overflow-hidden items-center justify-center rounded-full rounded-bl-none w-[45px] h-[45px] transform transition-all bg-primary duration-200 shadow-md">
      <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
        <div :class="['bg-white h-[2px] w-7 transform transition-all duration-300 origin-left', props.menuOpen ? 'translate-x-10' : '']"></div>
        <div :class="['bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75', props.menuOpen ? 'translate-x-10' : '']"></div>
        <div :class="['bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150', props.menuOpen ? 'translate-x-10' : '']"></div>
        <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0" :class="props.menuOpen ? 'translate-x-0 w-12' : ''">
          <div :class="['absolute bg-white h-[2px] w-5 transform transition-all duration-500', props.menuOpen ? 'rotate-45' : '']"></div>
          <div :class="['absolute bg-white h-[2px] w-5 transform transition-all duration-500', props.menuOpen ? '-rotate-45' : '']"></div>
        </div>
      </div>
    </div>
  </button>
</template>