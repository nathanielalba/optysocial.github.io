<template>
  <div id='landing'>
    <router-link to='/terms'>
      Terms and Conditions
    </router-link>

    <router-link to='/privacy'>
      Privacy
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Landing',
}
</script>

<style scoped>
#landing {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>