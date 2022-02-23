<template>
  <div>
    <h1>{{ mountains.title }}</h1>
  </div>
</template>

<script>
 export default {
    name: `SlugIndexPage`,
    data(){
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        `https://api.nuxtjs.dev/mountains/${this.$route.params.slug}`
      ).then(res => res.json())
    }
  }
 
</script>