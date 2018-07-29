<template>
  <div class="schedule">
    <div v-if="!mobile" class="container">
      <table>
        <tbody>
          <tr>
            <td>
            </td>
          </tr>
          <template v-if="res !== null">
            <schedule-row v-for="(value, index) in res" :value="value" :indexx="index" :res="res" :startMonth="getMonth(value[0].date)" @openBox="goSub" :key="'row:'+index"></schedule-row>
          </template>
        </tbody>
      </table>
    </div>
    <div v-else class="mobile-table">
      <mobile-row v-for="(value, index) in subs" :value="value" :notop="notop" @openBox="goSub" :key="'times:'+index"></mobile-row>
    </div>
    <fancybox class="box" v-model="activityBox">
      <h2><span v-if="type !== undefined && type !== '' && type !== '其他'">{{ type }} &nbsp; - &nbsp;</span><span>{{ topic }}</span></h2>
      <p class="text">負責人：{{ moderator !== undefined && moderator !== '' ? moderator : 'N/A' }}</p>
      <p class="text"><span>領會：{{ worshipLeader !== undefined && worshipLeader !== '' ? worshipLeader : 'N/A' }}</span><span>司琴：{{ worshipPianist !== undefined && worshipPianist !== '' ? worshipPianist : 'N/A' }}</span></p>
      <p class="text">敬拜小組：{{ worshipGroup !== undefined && worshipGroup !== '' ? worshipGroup : 'N/A' }}</p>
      <h3>簡介</h3>
      <div class="content" v-if="introduction !== ''">
        <div class="text">{{ introduction }}</div>
      </div>
    </fancybox>
  </div>
</template>

<script>
// import submissions from '../../static/json/submissions.json'
import _ from 'lodash'
export default {
  name: 'Schedule',
  data () {
    return {
      times: [
        {
          uid: '0',
          date: new Date('07 07 2018'),
          weeks: 0,
          worshipLeader: 'Micheal',
          worshipPianist: '韓寧',
          topic: 'aaaaaa',
          introduction: 'aaa',
          type: '小組查經'
        },
        {
          uid: '1',
          date: new Date('07 14 2018'),
          weeks: 1,
          worshipLeader: '0',
          worshipPianist: '1',
          topic: '迎新',
          introduction: 'aaaa',
          type: '其他'
        },
        {
          uid: '2',
          date: new Date('07 21 2018'),
          weeks: 2,
          worshipLeader: '1',
          worshipPianist: '2',
          topic: 'b',
          introduction: 'bbbb',
          type: '小組查經'
        },
        {
          uid: '3',
          date: new Date('07 28 2018'),
          weeks: 3,
          worshipLeader: '3',
          worshipPianist: '4',
          topic: 'c',
          introduction: 'c',
          type: '小組查經'
        },
        {
          uid: '4',
          date: new Date('08 04 2018'),
          weeks: 0,
          worshipLeader: 'Micheal',
          worshipPianist: '韓寧',
          topic: '新生命 I：徒2:4-47',
          introduction: 'aaa',
          type: '小組查經'
        },
        {
          uid: '5',
          date: new Date('08 11 2018'),
          weeks: 1,
          worshipLeader: '0',
          worshipPianist: '1',
          topic: '迎新',
          introduction: 'aaaa',
          type: '其他'
        },
        {
          uid: '6',
          date: new Date('08 18 2018'),
          weeks: 2,
          worshipLeader: '1',
          worshipPianist: '2',
          topic: '新基業 I：弗1:1-2:10',
          introduction: 'bbbb',
          type: '小組查經'
        },
        {
          uid: '7',
          date: new Date('08 25 2018'),
          weeks: 3,
          worshipLeader: '3',
          worshipPianist: '4',
          topic: '新基業 II：啟21:1-22:5',
          introduction: 'c',
          type: '小組查經'
        }
      ],
      activityBox: false,
      worshipLeader: '',
      worshipPianist: '',
      worshipGroup: '',
      topic: '',
      introduction: '',
      type: '',
      moderator: '',
      date: '',
      mobile: false,
      notop: false
    }
  },
  computed: {
    subs: function () {
      return this.times
    },
    res: function () {
      return _.groupBy(this.subs, (schedule) => (schedule.weeks))
    }
  },
  methods: {
    paddingLeft (num) {
      if (num / 10 < 1) return '0' + num
      else return num
    },
    getMonth (date) {
      return date.getMonth()
    },
    formatDate (date) {
      return this.paddingLeft(date.getMonth() + 1) + '/' + this.paddingLeft(date.getDate())
    },
    goSub (sub) {
      this.$router.replace('/calendar/sub/' + sub.uid)
    },
    openBox (sub) {
      let list = ['worshipLeader', 'worshipPianist', 'worshipGroup', 'topic', 'introduction', 'type', 'moderator', 'date']
      for (let i of list) {
        this[i] = sub[i]
      }
      this.activityBox = true
    },
    resize () {
      this.mobile = (window.innerWidth <= 1000)
    }
  },
  created () {
  },
  mounted () {
    var self = this
    self.resize()
    window.addEventListener('resize', function () {
      self.resize()
    })

    self.notop = window.location.search.match('mode=app') !== null

    if (this.$route.params.subId !== undefined) {
      var item = _.find(this.subs, (value) => { return value.uid === this.$route.params.subId })
      if (item !== undefined) {
        this.openBox(item)
      }
    }
  },
  watch: {
    activityBox: function (state) {
      var self = this
      if (!state) {
        setTimeout(function () {
          self.subAvatar = ''
        }, 400)
        self.$router.replace('/calendar')
      }
    },
    '$route.params.subId': function (state) {
      var item = _.find(this.subs, (value) => value.uid === this.$route.params.subId)
      if (item !== undefined) {
        this.openBox(item)
      }
    }
  },
  destroyed () {
    window.removeEventListener('resize', function () {
      self.resize()
    })
  }
}
</script>

<style lang="sass" scoped>
div.schedule
  margin-top: 30px
  width: 100%
  $time-width: 80px
  margin-bottom: 20px
  div.container
    overflow-y: hidden
    table
      width: 100%
      thead
        tr
          .time
            width: $time-width
            padding-right: 12px
          th
            width: 20%
            font-size: 16px
@media all and (max-width: 1000px)
  div.schedule
    $time-width: 60px
    div.container
      table
        thead
          tr
            .time
              width: $time-width
              padding: 8px
            th
              width: 20%
              font-size: 12px

</style>