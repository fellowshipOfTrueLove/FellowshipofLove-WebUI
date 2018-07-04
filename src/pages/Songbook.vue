<template>
  <article class="all">
    <main-footer></main-footer>
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
    openBox (name, sponsor) {
      this.sponsorLevel = name
      this.sponsorName = sponsor.name
      this.sponsorSummary = sponsor.summary
      this.sponsorImage = sponsor.icon
      this.activityBox = true
    }
  },
  watch: {
    activityBox: function (state) {
      var self = this
      if (!state) {
        setTimeout(function () {
          self.sponsorImage = ''
        }, 400)
      }
    }
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
