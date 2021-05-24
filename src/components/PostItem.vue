<template v-if="post">
    <div class="card mb-3">
    <div class="card-body ">
        <h5 class="card-title">{{post.title}}</h5>
        <h6 v-if="authorPost" class="card-subtitle mb-2 text-muted">{{authorPost.name}}</h6>
        <p class="card-text">{{post.body}}</p>
        <PostComments :postId="post.id" />
    </div>
    </div>
</template>

<script>
import PostComments from '@/components/PostComments.vue'

export default {
  name: 'PostItem',
  components:{
    PostComments
  },
  props: {
    post: null,
    authors: null,
    author: Object
  },
  computed: {
      authorPost() {
          if (this.authors && this.post) {
            return this.authors.filter((auth) => auth.id === this.post.userId)[0]
          } 
          return 'anonymous'
      }
  },
  methods: {
      
  }
}
</script>