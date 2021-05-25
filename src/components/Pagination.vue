<template v-if="links">
    <div class="pagination ">
      <div>
        <loading-button class="btn btn-primary first" :class="{disabled: links.first && links.first._page == page}" :click="paginationLink" params="first" :loading="loading.first">First</loading-button>
        <loading-button class="btn btn-primary prev" :class="{disabled: !links.prev}" :click="paginationLink" params="prev" :loading="loading.prev">Prev</loading-button>
      </div>
      <div class="page-num">{{page}} / {{total}}</div>
      <div>
        <loading-button class="btn btn-primary next" :class="{disabled: !links.next}" :click="paginationLink" params="next" :loading="loading.next">Next</loading-button>
        <loading-button class="btn btn-primary last" :class="{disabled: links.last && links.last._page == page}" :click="paginationLink" params="last" :loading="loading.last">Last</loading-button>
      </div>
    </div>
</template>

<script>
import LoadingButton from '@/components/LoadingButton.vue'
export default {
  name: 'Pagination',
  props: {
    page: Number,
    total: Number,
    links: null,
  },
  data() {
    return {
      loading: {
        next: false,
        prev: false,
        last:false,
        first:false
      }
    }
  },
  components:{
    LoadingButton
  },
  methods:{
      paginationLink(rel) {
        const link = this.links[rel]
        this.loading[rel] = true
        if (link) {
          this.$emit('postsFetch', { 
            url: link.url, 
            done: () => {
              setTimeout(() => {
                this.loading[rel] = false
              }, 200);
              
            }
          })
        }
      }
  }
}
</script>