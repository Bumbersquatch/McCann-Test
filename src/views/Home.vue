<template v-if="posts && authors">
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png">
    <Filter @postsFetch="postsFetch" :authors="authors" :numPosts="numPosts" />
    <template v-for="post in posts" :key="post.id">
        <PostItem :post="post" :authors="authors" />
    </template>
    <Pagination :page="currentPage" :total="totalPages" :links="links" @postsFetch="postsFetch" />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
import Pagination from '@/components/Pagination.vue'
import Filter from '@/components/Filter.vue'
import parseLinkHeader from 'parse-link-header'

export default {
  name: 'Home',
  components: {
    PostItem,
    Pagination,
    Filter
  },
  data () {
    return {
      posts: null,
      authors: null,
      numPosts: 8,
      total: 0,
      links: null
    }
  },
  mounted () {
    this.postsFetch({url:`https://jsonplaceholder.typicode.com/posts?_page=${this.currentPage}&_limit=${this.numPosts}`})
    this.authorFetch(`https://jsonplaceholder.typicode.com/users`)
  },
  computed: {
    currentPage() {
      let page = 1;
      if (this.links) {
          page = this.links.next != null ? parseInt(this.links.next._page) - 1 : parseInt(this.links.last._page);
      }
      return page;
    },
    totalPages() {
      let pages = 1
      if (this.total > this.numPosts) {
        pages = Math.ceil(this.total / this.numPosts)
      }
      return pages;
    }
  },
  methods: {
    postsFetch(param) {
      fetch(param.url)
      .then((res) => {
        this.total = res.headers.get('x-total-count')
        this.links = parseLinkHeader(res.headers.get('link'))
        return res.json()
      })
      .then(data => {
        this.posts = data
        if(param.done) {
          param.done(true)
        }
      })
      .catch(err => console.log('posts fetch error:', err.message))
    },
    authorFetch(url) {
      fetch(url)
      .then((res) => res.json())
      .then(data => {
        this.authors = data
      })
      .catch(err => console.log('author fetch error:', err.message))
    }
  }
}
</script>
