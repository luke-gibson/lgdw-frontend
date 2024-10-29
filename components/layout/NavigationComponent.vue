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
      'items-center justify-center flex-col sm:flex-row h-screen bg-primary sm:bg-white absolute left-0 right-0 top-0 bottom-0 sm:static sm:h-auto',
      menuOpen ? 'flex' : 'hidden sm:flex'
    ]"
    data-nav>
    <LayoutNavigationItem to="/">home</LayoutNavigationItem>
    <LayoutNavigationItem to="/about">about</LayoutNavigationItem>
    <LayoutNavigationItem to="/services">services</LayoutNavigationItem>
    <LayoutNavigationItem to="/contact">contact</LayoutNavigationItem>
  </nav>

  <button
    @click="toggleMenu"
    :class="['relative group sm:hidden block', { '': menuOpen }]"
    data-menu-button>
    <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-primary duration-200 shadow-md">
      <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">        
        <div
          :class="[
            'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left',
            menuOpen ? 'translate-x-10' : ''
          ]">
        </div>        
        <div
          :class="[
            'bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75',
            menuOpen ? 'translate-x-10' : ''
          ]">
        </div>
        <div
          :class="[
            'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150',
            menuOpen ? 'translate-x-10' : ''
          ]">
        </div>
        <div
          :class="[
            'absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0',
            menuOpen ? 'translate-x-0 w-12' : ''
          ]">
          <div
            :class="[
              'absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300',
              menuOpen ? 'rotate-45' : 'rotate-0'
            ]">
          </div>
          <div
            :class="[
              'absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300',
              menuOpen ? '-rotate-45' : 'rotate-0'
            ]">
          </div>
        </div>
      </div>
    </div>
  </button>
</template>