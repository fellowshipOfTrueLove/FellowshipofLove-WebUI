<template id="timeline-template">
  <div class="container">
    <div class="header"></div>
    <div class="item">
      <div class="inner">
        <div class="year"
            v-for="year in timelines"
            v-bind:key=year.year>
          <h3>{{year.year}}</h3>
          <ul class="timeline">
            <li class="timeline-item"
                v-for="item in year.items"
                v-bind:key=item.id>
              <div class="timeline-badge" @click="clk(item)"><comment-icon class="icon" title=""/></div>
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
                context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。',
                review: '<p>aaa</p>'
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
                context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。',
                review: '<p>aaa</p>'
              }
            ]
          },
          {
            year: 2016,
            items: [
              {
                id: 8,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。',
                review: '<p>aaa</p>'
              },
              {
                id: 7,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。',
                review: '<p>aaa</p>'
              },
              {
                id: 6,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。',
                review: '<p>aaa</p>'
              },
              {
                id: 5,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。',
                review: '<p>aaa</p>'
              },
              {
                id: 4,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。',
                review: '<p>aaa</p>'
              },
              {
                id: 3,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。',
                review: '<p>aaa</p>'
              },
              {
                id: 2,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。',
                review: '<p>aaa</p>'
              },
              {
                id: 1,
                hide: true,
                chapter: '約翰福音 3:16',
                author: 'test',
                created: '24. Sep',
                context: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。',
                review: '<p>aaa</p>'
              }
            ]
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

.icon
  top: -5px;

</style>
