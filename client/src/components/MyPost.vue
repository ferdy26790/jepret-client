<template>
  <div class="container" style ="max-width: 50rem">
    <div class="card mb-3">
      <img style="max-width:100%; margin: auto" :src="detailsPost.image" alt="Card image">
      <div class="card-body">
        <p class="pinggir">
          caption : {{detailsPost.title}}
        </p>
        <div class="card border-primary mb-3" style="max-width: 100%;">
          <div class="card-header">
            <div class="">
              <a href="#"><i class="fa fa-heart" style="font-size:24px;"></i> {{detailsPost.likes.length}} likes</a>
              <a href="#"><i class="fa fa-comment" style="font-size:24px; margin-left: 10px"></i> {{detailsPost.comments.length}} comments</a>
            </div>
          </div>
          <div class="card-body text-primary pinggir">
            <p v-for="comment in detailsPost.comments" class="card-text"><img src="https://pre00.deviantart.net/a37c/th/pre/f/2014/023/d/4/anonymous_facebook_profil_by_24eri-d73cu1y.jpg" style="width: 3%" alt="">{{comment.userComment.name}}: {{comment.comment}}</p>
          </div>
          <div  style="max-width: 100%;">
            <img src="https://pre00.deviantart.net/a37c/th/pre/f/2014/023/d/4/anonymous_facebook_profil_by_24eri-d73cu1y.jpg" style="width: 3%" alt="">
            <input v-model="comment" style="max-width: 100%;" type="text" placeholder="enter comment...">
            <a href="#" v-on:click="addCom()" ><i class="fa fa-level-up" style="font-size:18px;"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'MyPost',
  data () {
    return {
      comment: this.comment
    }
  },
  mounted () {
    this.fetchUser()
    console.log(this.user)
  },
  computed: {
    ...mapState([
      'detailsPost',
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'detailPost',
      'addComment',
      'fetchUser'
    ]),
    addCom () {
      let payload = {
        id: this.detailsPost._id,
        comment: this.comment
      }
      this.addComment(payload)
    }
  },
  created () {
    this.detailPost(this.$route.params.id)
  }
}
</script>

<style lang="css">
.pinggir{
  text-align: left
}
</style>
