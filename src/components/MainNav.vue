<template>
  <header class="Navbar">
    <nav :class="{ open: toggle }">
      <div class="container">
        <div class="nav-left">
          <router-link class="item" v-on:click.native="toggle = !toggle" v-bind:class="{active: $route.name == 'Main'}" to="/"><div>首頁<p>HOME</p></div></router-link>
          <router-link class="item divider" v-on:click.native="toggle = !toggle" v-bind:class="{active: $route.name == 'Calendar'}" to="/calendar"><div>聚會行事曆<p>CALENDAR</p></div></router-link>
          <router-link class="item divider" v-on:click.native="toggle = !toggle" v-bind:class="{active: $route.name == 'SongBook'}" to="/songbook"><div>詩歌資料庫<p>SONG BOOK</p></div></router-link>
          <router-link class="item divider" v-on:click.native="toggle = !toggle" v-bind:class="{active: $route.name == 'BibleBus'}" to="/biblebus"><div>經文列車<p>BIBLE BUS</p></div></router-link>
          <router-link class="item divider" v-on:click.native="toggle = !toggle" v-bind:class="{active: $route.name == 'Sheet'}" to="/sheet"><div>開坑專區<p>SHEET</p></div></router-link>
        </div>
      </div>
      <div class="side-blur"></div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        toggle: false
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
nav
  user-select: none
  position: fixed
  top: 0
  left: 0
  right: 0
  height: $nav-height
  background-color: $nav-color
  z-index: 1
  .side-blur
    display:none
  div.container
    height: 100%
    text-align: start
    &:before
      content: " "
      width: 0
      height: 100%
      display: inline-block
      position: relative
      vertical-align: middle
      background: #f00
    .nav-side-btn
      display: none
    a.title
      position: relative
      z-index: 5
      display: inline-block
      vertical-align: middle
      margin-right: 30px
      img
        vertical-align: middle
        width: 110px
    .nav-right
      float: right
      height: 100%
      &:before
        content: " "
        width: 0
        height: 100%
        display: inline-block
        position: relative
        vertical-align: middle
        background: #f00
      .join-btn
        display: inline-block
        vertical-align: middle
        color: $nav-color
        text-decoration: none
        background-color: white
        padding: 5px
        border-radius: 5px
        margin-right: 10px
        div
          font-size: 16px
          p
            font-size: 12px
      .icon
        display: inline-block
        vertical-align: middle
        margin-right: 10px
        img
          height: 45px

    .nav-left
      display: inline-block
      vertical-align: middle
      height: 100%
      &:before
        content: " "
        width: 0
        height: 100%
        display: inline-block
        position: relative
        vertical-align: middle
        background: #f00
      a.item
        position: relative
        display: inline-block
        vertical-align: middle
        color: white
        text-decoration: none
        div
          display: inline-block
          vertical-align: middle
          font-size: 16px
          font-weight: 800
          p
            display: block
            position: relative
            top: 0px
            font-weight: 400
            font-size: 12px
          &:after
            display: block
            content: " "
            width: 0
            height: 3px
            background-color: rgb(97, 193, 190)
            margin-top: 2px
            margin-left: 50%
            transition: all .4s
          &:hover:after
            width: 105%
            margin-left: 0
          &:active:after
            width: 105%
            margin-left: 0
      a.nopc
        display: none
      a.divider
        &:before
          display: inline-block
          vertical-align: middle
          content: " "
          background-color: white
          width: 1px
          height: 36px
          margin-left: 18px
          margin-right: 18px
@media all and (max-width: 1000px)
  nav
    height: $nav-mobile-height
    div.container
      .nav-side-btn
        cursor: pointer
        position: relative
        z-index: 5
        display: inline-block
        vertical-align: middle
        width: 40px
        height: 40px
        margin-left: -5px
        margin-right: 5px
        background-image: url('../assets/menu-mobile.png')
        background-size: auto 35%
        background-position: center
        background-repeat: no-repeat
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
      .nav-right
        display: none
      .nav-left
        display: block
        position: fixed
        top: 0
        left: $nav-side-width*-1
        bottom: 0
        width: $nav-side-width
        height: 100%
        background-color: $nav-side-color
        z-index: 3
        padding-top: $nav-mobile-height
        will-change: transform
        transition: transform .2s cubic-bezier(.4,0,.2,1)
        &:before
          content: " "
          display: block
          width: 90%
          height: 2px
          background-color: rgb(152, 152, 152)
          margin: 0 auto
        a.item
          display: block
          margin-left: 23px
          margin-top: 25px
          margin-bottom: 25px
          &:before
            display: none
          div
            &:after
              display: none
        a.divider
          &:before
            display: none

        a.active
          margin-left: 0px
          &:before
            display: inline-block
            vertical-align: middle
            content: " "
            background-color: rgb(97, 193, 190)
            width: 3px
            height: 42px
            margin-left: 10px
            margin-right: 10px
  nav.open
    .side-blur
      display: block
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: 2
      background-color: rgba(141, 141, 141, 0.7)
    div.container
      .nav-side-btn
        background-image: url('../assets/back-mobile.png')
      .nav-left
        transform: translateX(100%)
</style>


