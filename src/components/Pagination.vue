<template v-if="links">
    <div class="pagination ">
      <p class="text-center w-100">
        <a class="btn btn-primary first" :class="{disabled: links.first && links.first._page == page}" href="#" @click.prevent="paginationLink('first')">First</a> 
        <a class="btn btn-primary prev" :class="{disabled: !links.prev}" href="#" @click.prevent="paginationLink('prev')">Prev</a>
          <span class="page-num">{{page}} / {{total}}</span>
        <a class="btn btn-primary next" :class="{disabled: !links.next}" href="#" @click.prevent="paginationLink('next')">Next</a>
        <a class="btn btn-primary last" :class="{disabled: links.last && links.last._page == page}" href="#" @click.prevent="paginationLink('last')">Last</a> 
      </p>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    page: Number,
    total: Number,
    links: null
  },
  methods:{
      paginationLink(rel) {
        const link = this.links[rel]
        if (link) {
          this.$emit('postsFetch', link.url)
        }
      }
  }
}
</script>