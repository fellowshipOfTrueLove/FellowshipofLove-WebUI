<template>
  <article class="all">
    <section>
      <commingSoon>
        <center>
          <h1> [Coming Soon] </h1>
        </center>
      </commingSoon>
    </section>
  </article>
</template>

<script>
export default {
  name: 'SongBook',
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/songbook.scss'
@import '../sass/global.sass'
article
  width: 100%
  background-color: white
  section
    min-height: 85vh
    text-align: left
    padding-top: 40px
    padding-bottom: 40px
    position: relative
    margin-bottom: 50px;
    img
      display: block
    .title
      width: 60%
    .message
      position: absolute
      top: 20px
      right: 20px
      width: 32%
    .date
      position: absolute
      bottom: 75px
      right: 40px
      width: 28%
      
  @media all and (max-width: 1000px)
    .brand
      .content
        width: 100%
      .image
        width: 100%
        margin-top: 0px
        img
          margin-left: unset
          margin: 0 auto
</style>
