<template id="timeline-template">
  <ul class="timeline">
    <li class="timeline-item"
        v-for="item in items" 
        is="timeline-item" 
        :item="item"
        v-bind:key=item.id>
      <div class="timeline-badge">
        <i class="{{ item.icon_class }}"></i>
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
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'TimeLine',
    data () {
      return {
        timeline: [
          {
            id: 5,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'Micheal',
            created: '24. Sep',
            experience: '<p>aaa</p>'
          },
          {
            id: 4,
            hide: true,
            chapter: '約翰福音 3:16',
            author: 'SamuelYeh',
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
          },
        ]
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
