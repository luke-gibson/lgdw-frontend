<script setup lang="ts">
  const menuOpen = ref(false);

  function toggleMenu() {
    menuOpen.value = !menuOpen.value;
  }

  const router = useRouter();
  router.afterEach( () => {
    menuOpen.value = false;
  });
  
</script>

<template>
  <nav
    :class="[
      'items-center justify-center flex-col sm:flex-row h-screen bg-white/50 backdrop-blur-md sm:bg-white absolute left-0 right-0 top-0 bottom-0 sm:static sm:h-auto',
      menuOpen ? 'flex' : 'hidden sm:flex'
    ]"
    data-nav>
    <LayoutNavigationItem to="/">home</LayoutNavigationItem>
    <LayoutNavigationItem to="/about">about</LayoutNavigationItem>
    <LayoutNavigationItem to="/services">services</LayoutNavigationItem>
    <LayoutNavigationItem to="/contact">contact</LayoutNavigationItem>
  </nav>

  <LayoutHamburgerComponent :menuOpen="menuOpen" @toggleMenu="toggleMenu" class="sm:hidden block" />
</template>