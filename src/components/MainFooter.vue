<template>
  <footer class="Footer">
    <div>
      <p>© 真愛團契 | Fellowship of True Love</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
footer
  height: 100px
  text-align: center
  background-color: $main-color
  &:before
    content: " "
    width: 0
    height: 100%
    display: inline-block
    position: relative
    vertical-align: middle
  div
    display: inline-block
    vertical-align: middle
    div
      a
        margin: 6px
        img
          height: 30px
    p
      margin-top: 10px
      color: white
      font-size: 14px
</style>
