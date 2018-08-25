<template>
  <div id='privacy'>
    <section class="section">
      <Header :title="$t('privacy.title')" />

      <TextBody :body="$t('privacy.body1')" />
      <TextBody :body="$t('privacy.body2')" />

      <Header :title="$t('privacy.scope.title')" />
      <TextBody :body="$t('privacy.scope.body')" />
    </section>
  </div>
</template>

<script>
import Header from './Header.vue'
import TextBody from './TextBody.vue'

export default {
  name: 'Privacy',
  components: {
    Header,
    TextBody,
  },
}
</script>

<style scoped>
</style>