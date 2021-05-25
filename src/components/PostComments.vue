<template v-if="postId">
    <loading-button class="btn btn-primary card-link" :click="commentsFetch" :loading="loading">{{buttonText}}</loading-button>
    <div class="comments" v-if="showComments">
        <div class="comment" v-for="comment in comments" :key="comment.id" >
            <p class="name">{{comment.email}}:</p>
            <p class="title">{{comment.name}}</p>
            <p class="body">{{comment.body}}</p>
        </div>
    </div>
</template>

<script>
import LoadingButton from '@/components/LoadingButton.vue'
export default {
  name: 'PostComments',
  props: {
    postId: Number
  },
  components:{
    LoadingButton
  },
  data() {
      return {
          comments: null,
          buttonText: 'Show Comments',
          showComments: false,
          loading: false
      }
  },
  methods: {
    commentsFetch() {
      this.showComments = !this.showComments
      this.buttonText = this.showComments ? 'Hide Comments' : 'Show Comments'
      if (!this.comments) {
        this.loading = true;
        const url = `https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`
        fetch(url).then((res) => res.json()).then(data => {
            this.comments = data
            setTimeout(() => {
              this.loading = false
            }, 150);
        })
        .catch(err => {
          console.log('comments fetch error:', err.message)
          this.loading = false
        })
      }
    }
  }
}
</script>