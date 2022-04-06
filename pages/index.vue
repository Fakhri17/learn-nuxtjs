<template>
  <div class="py-8">
    <h1 class="text-center py-5 font-bold text-4xl"> WELCOME TO MY BLOG </h1>
     <ListBlog />
  </div>
</template>

<script>
 const fs = require('fs');
  export default {
    name: 'IndexPage',
    layout(context) {
      return 'DefaultBase'
    },
    mounted(){
     
      const dateHolidays = new Holidays.default();
      const getListCountry = dateHolidays.getCountries();
      const data = JSON.stringify(getListCountry);
      fs.writeFile('user.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
      });
      console.log(getListCountry)
    }
  }

</script>
