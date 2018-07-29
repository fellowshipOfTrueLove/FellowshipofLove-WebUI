<template>
  <div class="mobile-item">
    <div class="content clickable" @click.stop="openBox(value)">
      <div class="timecol" :class="{'notop':notop}">{{ formatTime(value.date) }}</div>
      <div>
        <div class="topic">{{value.topic}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MobileRow',
    props: ['value', 'notop'],
    methods: {
      paddingLeft (num) {
        if (num / 10 < 1) return '0' + num
        else return num
      },
      formatTime (date) {
        return this.paddingLeft(date.getMonth() + 1) + '/' + this.paddingLeft(date.getDate())
      },
      openBox (sub) {
        if (sub.summary !== '') {
          this.$emit('openBox', sub)
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
.mobile-item
  color: white
  text-align: left
  .timecol
    padding-top: 10px
    padding-bottom: 10px
    padding-left: 18px
    padding-right: 18px
    background-color: #54656E
    font-size: 20px
    position: sticky
    top: $nav-mobile-height
  .notop
    top: 0
  .content
    background-color: #677F8B
    font-size: 0px
    padding-top: 12px
    padding-bottom: 12px
    padding-left: 18px
    padding-right: 18px
    border-bottom: 1px solid #54656E
    >div
      &:first-child
        padding-bottom: 2px
      >*
        display: inline-block
        vertical-align: top
      .title
        width: 80%
        font-size: 16px
        font-weight: 500
        white-space: pre-line
        sub
          font-size: 12px
          color: #ffeb3b
          font-weight: 500
      .room
        width: 20%
        font-size: 16px
        text-align: right
        padding-top: 5px
      .topic
        width: 50%
        font-size: 14px
        font-weight: 500
      .interval
        width: 50%
        font-size: 12px
        text-align: right
  .clickable
    cursor: pointer
    &:hover,&:active
      opacity: 0.6
</style>