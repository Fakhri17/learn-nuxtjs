<template>
  <div>
    <h1 class="text-center py-8 font-bold text-2xl"> WELCOME TO MY BLOG </h1>
    <div class="my-5">
      <div class="card lg:w-80 w-100 bg-base-100 shadow-xl">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="justify-end card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card lg:w-80 w-100 bg-base-100 shadow-xl">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="justify-end card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
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
