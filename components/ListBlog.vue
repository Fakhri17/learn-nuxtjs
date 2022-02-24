<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else class="grid lg:grid-cols-4 lg:gap-4">
      <div v-for="(mountain, index) in mountains" :key="index" class="card lg:w-auto w-100 bg-base-100 shadow-xl lg:mb-0 mb-5">
         <img class="h-64 object-cover" :src="`${mountain.image}`" alt="Title">
        <div class="card-body">
          <h2 class="card-title">{{ mountain.title }}</h2>
          <p>Created At: <span class="font-bold">{{ mountain.updatedAt | formatDate('MM-DD-YYYY') }}</span></p>
          <div class="justify-end card-actions">
            <NuxtLink :to="`${mountain.slug}`">
              <button class="btn btn-accent">Read More</button>
            </NuxtLink>   
          </div>
        </div>
      </div>
      
    </div>  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>