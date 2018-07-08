<template>
  <article>
    <section>
      <commingSoon>
        <center>
          <h1> [Coming Soon] </h1>
        </center>
      </commingSoon>
    </section>
    <!-- <main-footer></main-footer> -->
  </article>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
  },
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
article
  width: 100%
  background-color: white
  section
    min-height: 85vh
  p.temp
    font-size: 36px
    height: 70vh
    padding-top: 20vh
    text-align: center
    color: $main-color
    font-weight: 500
  section.activity
    padding-top: 30px
    padding-bottom: 30px
    user-select: none
    .button
      display: inline-block
      vertical-align: middle
      color: white
      width: 12.2%
      height: 60px
      background-color: $main-color
      border-radius: 12px
      text-align: left
      margin: 6px
      user-select: none
      cursor: pointer
      font-size: 0px
      &:hover,&:active
        opacity: 0.8
      &:before
        content: " "
        width: 0
        height: 100%
        display: inline-block
        position: relative
        vertical-align: middle
        background: #f00
      img
        display: inline-block
        vertical-align: middle
        height: 100%
        padding: 6px
      p
        display: inline-block
        vertical-align: middle
        text-align: left
        font-weight: 600
        font-size: 12px
        line-height: 18px
        white-space: pre-line
        text-overflow: ellipsis
    .online
      width: 30%
      position: relative
      p
        width: 99%
        text-align: center
        font-size: 24px
    .broadcast
      width: 30%
      position: relative
      img
        position: absolute
        text-align: left
      p
        width: 99%
        text-align: center
        font-size: 24px
@media all and (max-width: 1000px)
  article
    section.activity
      .button
        width: 45%
      .online
        width: 45%
        p
          width: 100%
          font-size: 18px
      .broadcast
        width: 95%
</style>
