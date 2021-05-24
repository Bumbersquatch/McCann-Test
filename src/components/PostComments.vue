<template v-if="postId">
    <a href="#" class="btn btn-primary card-link" @click.prevent="commentsFetch">{{buttonText}}</a>
    <div class="comments" v-if="showComments">
        <div class="comment" v-for="comment in comments" :key="comment.id" >
            <p class="name">{{comment.email}}:</p>
            <p class="title">{{comment.name}}</p>
            <p class="body">{{comment.body}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PostComments',
  props: {
    postId: Number
  },
  data() {
      return {
          comments: null,
          buttonText: 'Show Comments',
          showComments: false
      }
  },
  methods: {
    commentsFetch() {
      this.showComments = !this.showComments
      this.buttonText = this.showComments ? 'Hide Comments' : 'Show Comments'
      if (!this.comments) {
        const url = `https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`
        fetch(url).then((res) => res.json()).then(data => {
            this.comments = data
        })
        .catch(err => console.log('comments fetch error:', err.message))
      }
    }
  }
}
</script>