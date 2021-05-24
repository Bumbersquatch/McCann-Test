<template >
    <div v-if="authors" class="mb-3 filter">
        <label for="filter">Filter by Author:</label>
        <select id="filter" class="form-control" @change="authorFilterChange($event)">
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
    numPosts: null,
    authors: null
  },
  methods:{
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


