<template>
  <div id='terms'>
    <section class="section">
      <Header :title="$t('terms.title')" />

      <Title :text="$t('terms.app.title')" />
      <TextBody :body="$t('terms.app.body1')" />
      <TextBody :body="$t('terms.app.body2')" />

      <Title :text="$t('terms.use.title')" />
      <TextBody :body="$t('terms.use.body2')" />
      <TextBody :body="$t('terms.use.body2')" />
    </section>
  </div>
</template>

<script>
import Header from './Header.vue'
import Title from './Title.vue'
import TextBody from './TextBody.vue'

export default {
  name: 'TermsAndConditions',
  components: {
    Header,
    Title,
    TextBody,
  },
}
</script>

<style scoped>
</style>