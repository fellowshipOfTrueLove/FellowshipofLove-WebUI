<template>
  <div id="app">
    <main-nav v-if="appMode()"></main-nav>
    <main class="Main" :class="{ app: !appMode() }">
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="child-view"/>
        </keep-alive>
      </transition>
    </main>
    <main-footer :class="$route.name"></main-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  methods: {
    appMode () {
      return window.location.search.match('mode=app') === null
    },
    h () {
      if (document.getElementsByClassName('Navbar')[0].clientHeight + document.getElementsByClassName('Main')[0].clientHeight + document.getElementsByClassName('Footer')[0].clientHeight < window.innerHeight) {
        document.getElementsByClassName('Footer')[0].classList.add('fix')
      } else {
        document.getElementsByClassName('Footer')[0].classList.remove('fix')
      }
    },
    resize () {
      this.h()
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      let self = this
      setTimeout(() => {
        self.h()
      }, 100)
    }
  },
  mounted () {
    let self = this
    window.addEventListener('resize', function () {
      self.resize()
    })
    this.h()
  },
  destroyed () {
    let self = this
    window.removeEventListener('resize', function () {
      self.resize()
    })
  }
}
</script>

<style lang="sass">
@import 'sass/main.sass'
body.isShowFancyBox
  overflow: hidden
body.isScrollSpaceFancyBox
  overflow: hidden
  div#app
    header
      nav
        padding-right: 17px
    main
      .child-view
        padding-right: 17px
main.app
  padding-top: 0px
.child-view
  transition-property: transform,opacity
  transition-duration: .5s
  transition-timing-function: cubic-bezier(.55,0,.1,1)
.BibleBus
  position: fixed
  width: 100%
  bottom: 0
.fix
  position: fixed
  width: 100%
  bottom: 0
</style>
