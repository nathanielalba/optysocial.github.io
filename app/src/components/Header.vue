<template>
  <h2 id="header">
    {{title}}
  </h2>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Header',
    },
  },
}
</script>

<style scoped>
#header {
  font-weight: 600;
  font-size: 1.4em;
  margin: 1em 0;
}
</style>