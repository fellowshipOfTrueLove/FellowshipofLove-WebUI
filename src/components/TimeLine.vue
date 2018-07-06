<template id="timeline-template">
  <div class="container">
    <div class="header"></div>
    <div class="item">
      <div class="timeline">
        <div class="timeline-item"
            v-for="item in timeline"
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
</template>

<script>
  export default {
    name: 'TimeLine',
    data () {
      return {
        timeline: [
          {
            id: 10,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'Micheal',
            created: '24. Sep',
            experience: '<p>aaa</p>'
          },
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
          },
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
    text-align: center
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
    padding: 0rem 1rem 0rem 1rem
    .timeline
      position: relative
      display: table
      height: 100%
      
      list-style-type: none
      padding: 0 0 0 75px
      margin-top: 5rem
      
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
          width: 2px
          position: absolute
          top: .5rem
          bottom: 0rem
          left: 60px
          z-index: 300
          background: #C5C5C5
      
      .timeline-badge
        position: relative
        margin-left: .5rem
        &:after
          content: ''
          width: 10px
          height: 10px
          background: #C5C5C5
          border: 2px solid #FFFFFF
          border-radius: 50%
          position: absolute
          z-index: 2
          top: 0rem
          left: -2rem
        
        &:not(:first-child)
        margin-top: .5rem
        
</style>
