<template>
  <h4 id="title">
    {{text}}
  </h4>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      default: 'Text',
    },
  },
}
</script>

<style scoped>
#title {
  font-size: 14pt;
  margin: .7em 0;
  color: #02265E;
  font-weight: 600;
}
</style>