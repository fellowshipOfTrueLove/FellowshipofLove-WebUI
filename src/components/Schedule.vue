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
      <h2>{{subSubject}}</h2>
      <p class="text">{{subSummary}}</p>
      <h3 v-if="subSpeakerName!==''">{{ 'About '+subSpeakerName }}</h3>
      <div class="content" v-if="subSpeakerName!==''">
        <div class="text">{{subBio}}</div>
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
      subSubject: '',
      subSummary: '',
      subslides: '',
      subSpeakerName: '',
      subAvatar: '',
      subBio: '',
      mobile: false,
      notop: false
    }
  },
  computed: {
    subs: function () {
      // let result = submissions.slice()
      // if (!this.mobile) result = this.filterSub(result)
      return null
    },
    res: function () {
      var temp = _.map(this.subs, (slot) => ({
        ...slot,
        start: new Date(slot.start),
        end: new Date(slot.end)
      }))
      this.times = _.map(temp, 'start')
      this.times = _.uniqBy(this.times, this.formatTime)
      this.times = this.times.slice().sort()

      return _.groupBy(temp, (schedule) => (schedule.start))
    }
  },
  methods: {
    filterSub (subs) {
      let array = ['午餐']
      let result = subs.filter((value) => {
        return array.indexOf(value.subject) === -1
      })
      return result
    },
    paddingLeft (num) {
      if (num / 10 < 1) return '0' + num
      else return num
    },
    formatTime (date) {
      return this.paddingLeft(date.getHours()) + ':' + this.paddingLeft(date.getMinutes())
    },
    goSub (sub) {
      this.$router.replace('/agenda/sub/' + sub.id)
    },
    openBox (sub) {
      this.subSubject = sub.subject
      this.subslides = sub.slide
      this.subAvatar = sub.speaker.avatar
      this.subBio = sub.speaker.bio
      this.subSpeakerName = sub.speaker.name
      this.subSummary = sub.summary
      this.activityBox = true
    },
    resize () {
      this.mobile = (window.innerWidth <= 1000)
    }
  },
  created () {
    window._rowspan = {
      'R2': 0,
      'R0': 0,
      'R1': 0,
      'R3': 0,
      'S': 0
    }
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
        self.$router.replace('/agenda')
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