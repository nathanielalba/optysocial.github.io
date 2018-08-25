<template>
  <div class="body">
    {{body}}
  </div>
</template>

<script>
export default {
  name: 'TextBody',
  props: {
    body: {
      type: String,
      default: 'Text body!!',
    },
  },
}
</script>

<style scoped>
.body {
  font-size: 12pt;
  color: #02285E;
  margin: 1em 0;
}
</style>