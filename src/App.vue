<template>
  <div id="app" class="container">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@import '~bulma/css/bulma.css';

#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
