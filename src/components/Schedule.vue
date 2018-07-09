<template>
  <div class="schedule">
    <div v-if="!mobile" class="container">
      <table>
        <tbody>
          <template v-if="res !== null">
            <schedule-row v-for="(value, index) in times" :indexx="index" :value="value" :res="res" :times="times" :sites="sites" @openBox="goSub" :key="'row:'+index"></schedule-row>
          </template>
        </tbody>
      </table>
    </div>
    <div v-else class="mobile-table">
      <mobile-row v-for="(value) in times" :notop="notop" :value="value" :res="res" @openBox="goSub" :key="'times:'+value"></mobile-row>
    </div>
    <fancybox class="box" v-model="activityBox">
      <h2><span v-if="type !== '' && type !== '其他'">{{ type }} - </span><span>{{ topic }}</span></h2>
      <p class="text">負責人: {{ moderator !== '' ? moderator : 'N/A' }}</p>
      <p class="text"><span>領會: {{ worshipLeader !== '' ? worshipLeader : 'N/A' }}</span><span>司琴: {{ worshipPianist !== '' ? worshipPianist : 'N/A' }}</span></p>
      <p class="text" v-if="worshipGroup !== ''">敬拜小組: {{ worshipGroup }}</p>
      <h3 v-if="subSpeakerName!==''">{{ 'About '+subSpeakerName }}</h3>
      <h4>簡介</h4>
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
      times: [],
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
      // let result = submissions.slice()
      return null
    },
    res: function () {
      var temp = _.map(this.subs, (slot) => ({
        ...slot,
        start: new Date(slot.start),
        end: new Date(slot.end)
      }))
      this.times = _.map(temp, 'start')
      this.times = _.uniqBy(this.times, this.formatDate)
      this.times = this.times.slice().sort()

      return _.groupBy(temp, (schedule) => (schedule.start))
    }
  },
  methods: {
    paddingLeft (num) {
      if (num / 10 < 1) return '0' + num
      else return num
    },
    formatDate (date) {
      return this.paddingLeft(date.getMonth() + 1) + '/' + this.paddingLeft(date.getDate())
    },
    goSub (sub) {
      this.$router.replace('/schedule/sub/' + sub.id)
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
      var item = _.find(this.subs, (value) => { return value.id === this.$route.params.subId })
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
        self.$router.replace('/schedule')
      }
    },
    '$route.params.subId': function (state) {
      var item = _.find(this.subs, (value) => { return value.id === this.$route.params.subId })
      if (item !== undefined) {
        this.openBox(item)
      }
    }
  },
  destroyed () {
    window.removeEventListener('resize')
  }
}
</script>

<style lang="sass" scoped>
div.subtable
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
  div.subtable
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