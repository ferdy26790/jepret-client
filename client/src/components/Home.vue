<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{user.data.name}}</h4>
        <img src="https://pre00.deviantart.net/a37c/th/pre/f/2014/023/d/4/anonymous_facebook_profil_by_24eri-d73cu1y.jpg" style="width: 10%" alt="">
        <br> <br>
        <q class="card-text"><i>{{user.data.about}}...</i></q>
        <br>
        <br>
        <div class="">
          <button type="button" class="btn btn-outline-primary">Following : <span class="badge badge-secondary">{{user.data.following.length}}</span></button>
        </div>
        <br>
        <div class="">
          <button type="button" class="btn btn-outline-primary">Followers : <span class="badge badge-secondary">{{user.data.followers.length}}</span></button>
        </div>
        <br>

        <br>
        <div class="line">

        </div><br>

        <div class="row">
          <div v-for='myPost in user.data.post' class="card1 border-primary mb-3 col-sm-4" style="max-width: 20rem">
              <a :href="goTo(myPost._id)"><img :src="myPost.image" alt="" style="max-width: 17rem; max-height: 9rem"></a>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState([
      'user'
    ])
  },
  created () {
    this.fetchUser()
  },
  methods: {
    ...mapActions([
      'fetchUser'
    ]),
    goTo (id) {
      return '/myPost/' + id
    }
  }
}
</script>

<style>
.line{
  border: 1px solid lightgrey
}
.card1 {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0px solid rgba(0,0,0,0.125);
    border-radius: 0.25rem;
}
</style>
