<template id="timeline-template">
  <div class="container">
    <div class="header"></div>
    <div class="item">
      <ul class="timeline">
        <li class="timeline-item"
            v-for="item in timelines"
            v-bind:key=item.id
            @click="clk(item)">
          <div class="timeline-badge"><comment-icon class="icon" /></div>
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
            <div v-if="!item.hide" class="timeline-context"><span v-html="item.context"/></div>
            <div v-if="!item.hide" class="timeline-review">心得：<span v-html="item.review"/></div>
          </div>
        </li>
      </ul>
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
            id: 10,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'Micheal',
            created: '24. Sep',
            context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，返得永生。',
            review: '<p>aaa</p>'
          },
          {
            id: 9,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'SamuelYeh',
            created: '24. Sep',
            context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，返得永生。',
            review: '<p>aaa</p>'
          },
          {
            id: 8,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'test',
            created: '24. Sep',
            context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，返得永生。',
            review: '<p>aaa</p>'
          },
          {
            id: 7,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'test',
            created: '24. Sep',
            context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，返得永生。',
            review: '<p>aaa</p>'
          },
          {
            id: 6,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'test',
            created: '24. Sep',
            context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，返得永生。',
            review: '<p>aaa</p>'
          },
          {
            id: 5,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'test',
            created: '24. Sep',
            context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，返得永生。',
            review: '<p>aaa</p>'
          },
          {
            id: 4,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'test',
            created: '24. Sep',
            context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，返得永生。',
            review: '<p>aaa</p>'
          },
          {
            id: 3,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'test',
            created: '24. Sep',
            context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，返得永生。',
            review: '<p>aaa</p>'
          },
          {
            id: 2,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'test',
            created: '24. Sep',
            context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，返得永生。',
            review: '<p>aaa</p>'
          },
          {
            id: 1,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'test',
            created: '24. Sep',
            context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，返得永生。',
            review: '<p>aaa</p>'
          }
        ]
      }
    },
    methods: {
      clk: function (item) {
        item.hide = !item.hide
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '../sass/timeline.scss'
div.container 
  display: flex
  flex: auto
  flex-direction: column
  max-height: 100%
  width: 100%

div.header 
  height: auto
  background: white
  // color: ghostwhite
  padding: .5rem 1rem .5rem 1rem
  @media all and (max-height: 700px)
    padding: 0rem 1rem 0rem 1rem

  position: relative
  &:after
    content: ''
    position: absolute
    // bottom: -5rem
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
  display: flex
  flex: auto
  overflow-y: scroll
  height: 70vh
  @media all and (max-height: 700px)
    height: 130vw
  @media all and (min-height: 1200px)
    height: 100vw
  

.icon
  top: -5px;

</style>
