<template>
  <div class="py-8">
    <p v-if="$fetchState.pending" class="text-center font-bold" >Fetching montains detail mountains...</p>
    <p v-else-if="$fetchState.error" class="text-center font-bold" >An error occurred :(</p>
    <div v-else>
      <h1 class="text-center font-bold py-5 text-5xl">{{ mountain.title }}</h1>
      <!--  -->
      <img class="h-80 max-w-full object-cover mx-auto my-5" :src="`${mountain.image}`" alt="Title">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-bold text-xl">Height: {{ mountain.height }}</h2>
        <p class="font-bold text-xl">Countries: {{ countries }}</p>
        <p class="font-bold text-xl mb-5">Continent: {{ mountain.continent }}</p>
        <p class="font-semibold text-lg leading-relaxed">{{ mountain.description }}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
 export default {
    name: 'SlugIndexPage',
    layout(context) {
      return 'DefaultBase'
    },
    data(){
      return {
        mountain: [],
        countries: '',
      }
    },
    async fetch() {
      this.mountain = await fetch(
        `https://api.nuxtjs.dev/mountains/${this.$route.params.slug}`
      ).then(res => res.json())
      this.countries = this.mountain.countries[0]
    }
  }
 
</script>