<template>
  <div class="errors">
    <p 
      class="error" 
      :key="index"
      v-for="(error,index) in errors"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    errors: Array
  }
}
</script>

<style scoped>
  .errors {
    color: #c10000;  
    margin: 0 auto 30px;
    max-width: 500px;
    width: 90%;
  }
  .error {
    font-size: 14px;
    margin: 5px 0;
  }
</style>