<template v-if="postId">
    <a href="#" class="btn btn-primary card-link" @click.prevent="commentsFetch">{{buttonText}}</a>
    <div v-if="showComments">
        <div v-for="comment in comments" :key="comment.id" >
            <p>{{comment.email}}</p>
            <p>{{comment.name}}</p>
            <p>{{comment.body}}</p>
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
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            this.comments = data
        })
        .catch(err => console.log('comments fetch error:', err.message))
      }
    }
  }
}
</script>