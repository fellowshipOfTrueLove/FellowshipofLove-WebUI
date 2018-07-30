<template>
  <article>
    <schedule></schedule>
  </article>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
  },
  data () {
    return {
      Calendar: [
        [
          {
            uid: 0,
            date: '2018 07 07',
            worshipLeader: '以誠',
            worshipPianist: '詩吟姐',
            worshipGroup: '',
            topic: '迎新送舊',
            introduction: '真愛迎新聚會! 歡迎第一次來參加的來參加看看～',
            type: '其他',
            moderator: ''
          },
          {
            uid: 1,
            date: '2018 08 04',
            worshipLeader: '麥可',
            worshipPianist: '韓寧',
            worshipGroup: '核心同工',
            topic: '新生命 I：使二4-47',
            introduction: '',
            type: '小組查經',
            moderator: ''
          },
          {
            uid: 0,
            date: '2018 09 01',
            worshipLeader: '',
            worshipPianist: '',
            worshipGroup: '第三小組',
            topic: '新生命 II：羅七14-八39',
            introduction: '',
            type: '小組查經',
            moderator: ''
          },
          {
            uid: 0,
            date: '2018 10 06',
            worshipLeader: '',
            worshipPianist: '',
            worshipGroup: '',
            topic: '新生命 III：加四1-31',
            introduction: '',
            type: '小組查經',
            moderator: ''
          }
        ]
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/global.sass'
article
  width: 100%
  background-color: white
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
