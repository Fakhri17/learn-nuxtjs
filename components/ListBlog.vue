<template>
  <div>
    <div class="form-control w-25 mb-5">
      <input v-model="search" type="text" placeholder="Search" class="input input-bordered">
    </div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-if="!filterSearch.length">
      <h1 class="text-center">DATA NOT FOUND</h1>
    </div>
    <div v-else class="grid lg:grid-cols-4 lg:gap-4">
      <div v-for="(mountain, index) in filterSearch" :key="index"
        class="card lg:w-auto w-100 bg-base-100 shadow-xl lg:mb-0 mb-5">
        <img class="h-64 object-cover" :src="mountain.image" alt="Title">
        <div class="card-body">
          <h2 class="card-title">{{ mountain.title }}</h2>
          <p>Created At: <span class="font-bold">{{ mountain.updatedAt | formatDate('MM-DD-YYYY') }}</span></p>
          <div class="justify-end card-actions">
            <NuxtLink :to="`blog/${mountain.slug}`">
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
        mountains: [],
        search: '',
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    },
    
    computed: {
      // credit: https://codepen.io/AndrewThian/pen/QdeOVa
      filterSearch() {
        return this.mountains.filter((mountain) => {
          return mountain.title.toLowerCase().match(this.search) || mountain.title.toUpperCase().match(this.search) || mountain.title.match(this.search)
        });
      }
    }
  }

</script>
