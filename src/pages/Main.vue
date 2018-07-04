<template>
  <article class="main">
    <section class="container">
      <h1>[照片輪播]</h1>
    </section>
    <section class="brand">
      <div class="brand-image"></div>
      <div class="container">
        <div class="content">
          <h2>ABOUT</h2>
          <h3>真愛團契</h3>
        </div>
      </div>
    </section>
    <section class="brand color">
      <div class="brand-image"></div>
      <div class="container">
        <div class="content">
          <h2>聚會內容</h2>
          <h3>小組查經</h3>
        </div>
      </div>
    </section>
    <section class="brand">
      <div class="brand-image"></div>
      <div class="container">
        <div class="content">
          <h2>聚會內容</h2>
          <h3>生活專題</h3>
        </div>
      </div>
    </section>
    <section class="brand color">
      <div class="brand-image"></div>
      <div class="container">
        <div class="content">
          <h2>聚會內容</h2>
          <h3>聖經綜覽</h3>
        </div>
      </div>
    </section>
    <section class="brand">
      <div class="brand-image"></div>
      <div class="container">
        <div class="content">
          <h2>聚會內容</h2>
          <h3>信仰專題</h3>
        </div>
      </div>
    </section>
    <main-footer></main-footer>
  </article>
</template>

<script>
  export default {
    name: 'Main'
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
.main
  width: 100%
  background-color: white
  overflow-x: hidden
  h3
    padding-bottom: 0px
    padding-top: 0px
  section
    text-align: left
    padding-top: 50px
    padding-bottom: 50px
    position: relative
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
  .brand
    text-align: left
    position: relative
    color: #585858
    .content
      padding-left: 25px
      width: 55%
      h2
        font-size: 22px
        font-weight: 300
      h3
        width: 100%
        font-size: 28px
        line-height: 34px
        margin-top: 12px
        margin-bottom: 18px
        font-weight: 300
        overflow-y: hidden
      p
        font-size: 18px
        line-height: 26px
        font-weight: 500
    .brand-image
      position: absolute
      top: 0
      bottom: 0
      right: 0
      width: 35%
      background-position: left center
      background-size: 110% auto
      background-repeat: no-repeat
  .color
    background-color: $main-color
    color: white

@media all and (max-width: 1000px)
  .main
    section
      padding-top: 30px
      padding-bottom: 30px
      position: relative
      img
        display: block
        vertical-align: top
      .title
        width: 80%
      .message
        position: absolute
        top: unset
        bottom: 220px
        right: -8%
        width: 43%
      .date
        position: static
        width: auto
        height: 180px
        margin-top: 20px
    .brand
      text-align: left
      position: relative
      .content
        width: 100%
        padding-left: 0px
        h2
          font-size: 28px
          line-height: 34px
        h3
          width: 50%
          font-size: 24px
          line-height: 30px
          overflow-y: hidden
          margin-bottom: 12px
        p
          font-size: 18px
          line-height: 26px
      .brand-image
        position: absolute
        top: 10px
        bottom: unset
        right: 0
        width: 45%
        height: 30%
        background-position: right center
        background-size: contain
        background-repeat: no-repeat
</style>
