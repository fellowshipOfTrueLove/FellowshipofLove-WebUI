import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main'
import Calendar from '../pages/Calendar'
import Songbook from '../pages/Songbook'
import Biblebus from '../pages/Biblebus'
import Wishingwell from '../pages/Wishingwell'

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
      path: '/calendar/sub/:subId',
      name: 'CalendarSub',
      component: Calendar,
      meta: { index: 1, page: false }
    },
    {
      path: '/songbook',
      name: 'SongBook',
      component: Songbook,
      meta: { index: 2 }
    },
    {
      path: '/biblebus',
      name: 'BibleBus',
      component: Biblebus,
      meta: { index: 3 }
    },
    {
      path: '/wishingwell',
      name: 'WishingWell',
      component: Wishingwell,
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
