<template>
  <div class="py-8">
    <h1 class="text-center py-5 font-bold text-4xl"> WELCOME TO MY BLOG </h1>
     <ListBlog />
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    layout(context) {
      return 'DefaultBase'
    }
  }

</script>
