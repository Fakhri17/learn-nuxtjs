<template>
  <div>
    <div v-if="error.statusCode === 404">
      <div class="flex items-center justify-center w-screen h-screen bg-accent">
        <div class="px-40 py-20 bg-white rounded-md shadow-xl">
          <div class="flex flex-col items-center">
            <h1 class="font-bold text-accent text-9xl">404</h1>

            <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              Oops! Page not found
            </h6>

            <p class="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            
            <a href="/" class="px-6 py-2 text-sm font-semibold bg-accent">Go home</a>
          </div>
        </div>
      </div>
    </div>
    <h1 v-else>An error occurred - {{ error.statusCode }} </h1>
  </div>
</template>

<script>
  export default {
    name: 'ErrorBase',
    props: {
      error: {
        type: Object,
        default: () => {},
      },
    },
  }

</script>
