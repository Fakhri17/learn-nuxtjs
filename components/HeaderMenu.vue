<template>
  <div class="bg-gray-100">
    <nav class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400">Home
        </router-link>
        <div class="flex md:hidden" @click="showMenu = !showMenu">
          <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      <ul class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0" :class="showMenu ? 'flex' : 'hidden'">
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <NuxtLink to="/about">about</NuxtLink>
        </li>
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <NuxtLink to="/contact">contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
  };

</script>
