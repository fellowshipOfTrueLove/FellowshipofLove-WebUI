<template>
  <td class="item clickable" :class="{short: sub.type === 'S'}" v-if="sub.introduction !== ''" @click.stop="openBox(sub)" :rowspan="calcRowspan(sub)"  :colspan="(broadcast)?5:''">
    <h1>{{ formatDate(sub.date) }}</h1>
    <h2>{{ sub.topic }}</h2>
    <p v-if="sub.type != ''">{{sub.type}}</p>
  </td>
  <td class="item" v-else :rowspan="calcRowspan(sub)" :colspan="(broadcast)?5:''">
    {{ sub.topic }}
    <p v-if="sub.type != ''">{{sub.type}}</p>
  </td>
</template>

<script>
export default {
  name: 'ScheduleCol',
  props: ['sub', 'broadcast'],
  methods: {
    calcRowspan (sub) {
      // var date = sub.start
      // var nums = 1
      // var indexof = -1
      // for (var j = 0; j < this.times.length; j++) {
      //   if (new Date(this.times[j]).valueOf() === date.valueOf()) {
      //     indexof = j
      //     break
      //   }
      // }
      // if (indexof !== -1) {
      //   for (var i = indexof + 1; i < this.times.length; i++) {
      //     if (new Date(this.times[i]).valueOf() < sub.end.valueOf()) nums++
      //     else break
      //   }
      // }
      // if (nums !== 1) {
      //   window._rowspan[sub.room] = nums - 1
      // }
      return 1
    },
    paddingLeft (num) {
      if (num / 10 < 1) return '0' + num
      else return num
    },
    formatDate (date) {
      return this.paddingLeft(date.getMonth() + 1) + '/' + this.paddingLeft(date.getDate())
    },
    openBox (sub) {
      this.$emit('openBox', sub)
    }
  }
}
</script>

<style lang="sass" scoped>
.item
  text-align: left
  background-color: #73828A
  color: white
  padding: 12px
  white-space: pre-line
  position: relative
  sub
    position: absolute
    bottom: 5px
    right: 5px
    font-size: 12px
    color: #ffeb3b
    font-weight: 500
  h1
    padding-top: 10px
    padding-bottom: 20px
  h2
    font-size: 20px
    padding-bottom: 10px
    padding-left: 3px
  p
    font-size: 15px
    padding-left: 3px
.item.short
  background-color: #96A3AA
.clickable
  cursor: pointer
  &:hover,&:active
    opacity: 0.6
@media all and (max-width: 1200px)
  .item
    background-color: #73828A
    color: white
    padding: 6px
    white-space: pre-line
    h2
      font-size: 15px
    p
      font-size: 12px
</style>