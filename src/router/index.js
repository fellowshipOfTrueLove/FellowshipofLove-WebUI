import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main'
import Calendar from '../pages/Calendar'
import Songbook from '../pages/Songbook'
import Biblebus from '../pages/Biblebus'
import Sheet from '../pages/Sheet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { index: 0 }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      meta: { index: 1 }
    },
    {
      path: '/songbook',
      name: 'Songbook',
      component: Songbook,
      meta: { index: 2 }
    },
    {
      path: '/biblebus',
      name: 'Biblebus',
      component: Biblebus,
      meta: { index: 3 }
    },
    {
      path: '/sheet',
      name: 'Sheet',
      component: Sheet,
      meta: { index: 4 }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (from.meta.page === false || to.meta.page === false) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
