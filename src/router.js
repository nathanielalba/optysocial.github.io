import VueRouter from 'vue-router'
import { Landing, Privacy, TermsAndConditions } from './components'

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: Landing },
    { path: '/privacy', component: Privacy },
    { path: '/terms', component: TermsAndConditions },
  ],
})

export default router