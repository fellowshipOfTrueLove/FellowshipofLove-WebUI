<template>
  <article>
      <time-line></time-line>
    <main-footer class="footer"></main-footer>
  </article>
</template>

<script>

export default {
  name: 'BibleBus',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
article
  position: fixed
  width: 100%
  background-color: white
  
.footer
  position: fixed
  width: 100%
  bottom: 0
</style>
