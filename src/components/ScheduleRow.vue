<template>
  <tr class="sub">
    <template v-for="index in len">
      <template v-if="findSub(index + startMonth - 1, res[value[0].weeks]) !== undefined">
        <schedule-col :broadcast="false"  :sub="findSub(index + startMonth - 1, res[value[0].weeks])"  @openBox="openBox" :key="indexx+':'+index"></schedule-col>
      </template>
      <td class="item space" v-else :key="'space:'+index"></td>
    </template>
  </tr>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'ScheduleRow',
  props: ['indexx', 'value', 'res', 'startMonth'],
  data () {
    return {
      len: 4
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
    getMonth (date) {
      return date.getMonth() + 1
    },
    findSub (index, subs) {
      let self = this
      return _.find(subs, (value) => { return self.getMonth(value.date) === index })
    },
    openBox (sub) {
      this.$emit('openBox', sub)
    }
  },
  mounted () {
    // console.log(this.startMonth, this.value)
  }
}
</script>

<style lang="sass" scoped>
$time-width: 60px
$item-width: 20vw
.sub
  font-size: 18px
  .time
    width: $time-width
    vertical-align: top
    padding-right: 12px
  .item
    width: $item-width
    background-color: #73828A
    color: white
    padding: 12px
    white-space: pre-line
  .clickable
    cursor: pointer
    &:hover,&active
      opacity: 0.6
    p
      font-size: 16px
@media all and (max-width: 1200px)
  .sub
    $time-width: 60px
    font-size: 14px
    .time
      width: $time-width
      vertical-align: top
      padding-left: 4px
      padding-right: 4px
    .item
      width: $item-width
      background-color: #73828A
      color: white
      padding: 6px
      white-space: pre-line
      p
        font-size: 12px
</style>