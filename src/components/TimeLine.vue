<template id="timeline-template">
  <div class="container">
    <div class="header"></div>
    <div class="item">
      <div class="timeline">
        <div class="year"
            v-for="timeline in timelines"
            v-bind:key=timeline.year>
          <h3>{{timeline.year}}</h3>
          <div class="timeline-item"
              v-for="item in timeline.items"
              v-bind:key=item.id>
            <div class="timeline-badge">
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">{{ item.chapter }}</h4>
                    <div class="timeline-panel-controls">
                      <div class="timestamp">
                        <small class="text-muted">{{ item.created }}</small>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-body">{{ item.author }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TimeLine',
    data () {
      return {
        timelines: [
          {
            year: 2018,
            items: [
              {
                id: 10,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'Micheal',
                created: '24. Sep',
                experience: '<p>aaa</p>'
              }
            ]
          },
          {
            year: 2017,
            items: [
              {
                id: 9,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'SamuelYeh',
                created: '24. Sep',
                experience: '<p>aaa</p>'
              },
              {
                id: 8,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                experience: '<p>aaa</p>'
              },
              {
                id: 7,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                experience: '<p>aaa</p>'
              },
              {
                id: 6,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                experience: '<p>aaa</p>'
              },
              {
                id: 5,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                experience: '<p>aaa</p>'
              },
              {
                id: 4,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                experience: '<p>aaa</p>'
              }
            ]
          },
          {
            year: 2016,
            items: [
              {
                id: 3,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                experience: '<p>aaa</p>'
              },
              {
                id: 2,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                experience: '<p>aaa</p>'
              },
              {
                id: 1,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                experience: '<p>aaa</p>'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="sass" scoped>
div.container 
  display: flex
  flex: auto
  flex-direction: column
  max-height: 100%

div.header 
  height: auto
  background: white
  // color: ghostwhite
  padding: 2.3rem 1rem 2.3rem 1rem
  position: relative
  &:after
    content: ''
    position: absolute
    bottom: -5rem
    left: 0rem
    height: 5rem
    display: block
    width: 100%
    z-index: 300
    background: -moz-linear-gradient(top, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)
    background: -webkit-linear-gradient(top, rgba(255,255,255,1) 20%,rgba(255,255,255,0) 100%)
    background: linear-gradient(to bottom, rgba(255,255,255,1) 20%,rgba(255,255,255,0) 100%) 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 )

div.item 
  height: 66vh
  display: flex
  flex: auto
  overflow-y: scroll
  padding: 0rem 5rem 0rem 0rem

div.timeline
  position: relative
  display: table
  height: 100%
  margin-top: 5rem
  margin-left: auto
  margin-right: auto

  h3
    // float: left 
    padding: 0
    display: flex
    position: -webkit-sticky
    position: sticky
    top: 5rem
    color: #888
    margin: 0
    font: 
      size: 1.1em
      weight: 400
    
    @media (min-width: 62em) 
      font-size: 1.1em

  .timeline-item
    padding: 0 0 0 75px
    margin: -1.35rem 0 1em
    max-width: 32rem
    font-size: 1em
    @media (min-width: 62em) 
      font-size: 1.1em
      padding: 0 0 0 81px
  
  &:last-child 
    margin:
      bottom: 0

  &:after 
    content: ''
    width: .2rem
    position: absolute
    top: 0rem
    bottom: 0rem
    left: 3.46rem
    z-index: 0
    background: #C5C5C5
  
  .timeline-badge
    text-align: left
    border: 1px solid #C5C5C5
    width: 20rem
    border-radius: 2px
    box-shadow: 0 1px 2px rgba(100, 100, 100, 0.2)
    position: relative
    margin-left: .5rem
    margin-top: .5rem
    margin-bottom: 2rem
    font-size: 1rem

    .timestamp
      text-align: right

    &:after
      content: ''
      width: .5rem
      height: .5rem
      background: #C5C5C5
      border: .2rem solid #FFFFFF
      border-radius: 50%
      position: absolute
      z-index: 2
      top: -.2rem
      left: -2.5rem

  .timeline-badge + .timeline-panel 
    &:before 
      border-bottom: 15px solid transparent
      border-left: 0 solid #ccc
      border-right: 15px solid #ccc
      border-top: 15px solid transparent
      content: ''
      display: inline-block
      position: absolut
      left: -15px
      right: auto
      top: 26px
    

    &:after 
      border-bottom: 14px solid transparent
      border-left: 0 solid #fff
      border-right: 14px solid #fff
      border-top: 14px solid transparent
      content: ''
      display: inline-block
      position: absolute
      left: -14px
      right: auto
      top: 27px
        
</style>
