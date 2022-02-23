<template>
  <div>
    <h1 class="text-center py-8 font-bold text-2xl"> WELCOME TO MY BLOG </h1>
    <div class="my-5">
      <ListBlog />
    </div>
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
