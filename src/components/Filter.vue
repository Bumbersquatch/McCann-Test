<template>
    <div class="mb-3">
        <select @change="authorFilterChange($event)">
        <option value="0">Select Author</option>
        <option value="0">All</option>
        <option v-for="author in authors" :key="author.id" :value="author.id">
            {{author.name}}
        </option> 
        </select>
    </div>
</template>

<script>
export default {
  name: 'Filter',
  props: {
    page: Number,
    links: null,
    numPosts: null,
    authors: null
  },
  methods:{
      paginationLink(rel) {
        const link = this.links[rel]
        if (link) {
          this.$emit('postsFetch', link.url)
        }
      },
      authorFilterChange(event) {
        if(event.target.value && event.target.value > 0) {
            this.$emit('postsFetch', `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${this.numPosts}&userId=${event.target.value}`)
        } else {
            this.$emit('postsFetch', `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${this.numPosts}`)
        }
      }
  }
}
</script>


