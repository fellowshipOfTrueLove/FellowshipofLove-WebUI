<template>
  <article>
    <section>
      <commingSoon>
        <center>
          <h1> [Coming Soon] </h1>
        </center>
      </commingSoon>
    </section>
    <main-footer></main-footer>
  </article>
</template>

<script>
  export default {
    name: 'Sheet'
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
article
  width: 100%
  background-color: white
  section
    min-height: 85vh
    text-align: left
    padding-top: 20px
    padding-bottom: 40px
    color: $main-color
    h2
      margin-top: 26px
      margin-bottom: 12px
      font-size: 20px
    p
      font-size: 14px
      line-height: 22px
</style>
