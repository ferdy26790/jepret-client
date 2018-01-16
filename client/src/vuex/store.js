import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

Vue.use(Vuex)

const state = {
  user: {
    data: null,
    loggedIn: false
  },
  detailsPost: null
}

const mutations = {
  setUserLogin (state) {
    state.user.loggedIn = true
  },
  fetchDataUser (state, dataUser) {
    state.user.data = dataUser
    console.log(state.user.data)
  },
  fetchDetailPost (state, detailPost) {
    state.detailsPost = detailPost
    console.log('ini state', detailPost)
  },
  addComment (state, payload) {
    console.log(state.user)
    console.log(payload)
    state.detailsPost.comments.push({
      comment: payload.comment,
      userComment: {
        name: state.user.data.name
      }
    })
    console.log(state.detailsPost);
  }
}

const actions = {
  register ({ commit }, payload ) {
    http.post('/register', {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      about: payload.about
    })
    .then((response) => {
      console.log(response)
      alert('register berhasil silahkan login')
    }).catch((err) => {
      console.error(err)
    })
  },
  login ({ commit }, {email, password}) {
    http.post('/login',
      {
        'email': email,
        'password': password
      })
      .then((response) => {
        console.log(response.data.msg)
        if (response.data.status === true) {
          localStorage.setItem('token', response.data.token)
          commit('setUserLogin')
          router.push('/home')
        } else {
          console.log('ini else', response)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  },
  fetchUser ({ commit }) {
    http.get('/users', {
      headers: {token: localStorage.getItem('token')}})
      .then((response) => {
        console.log(response.data.data)
        commit('fetchDataUser', response.data.data)
      }).catch((err) => {
        console.error(err)
      })
  },
  detailPost ({ commit }, id) {
    http.get(`users/getPost/${id}`)
    .then((response) => {
      commit("fetchDetailPost", response.data.data)
    }).catch((err) => {
      console.error(err)
    })
  },
  addComment ({ commit }, payload) {
    let self = this
    console.log(payload)
    http.post(`users/addComment/${payload.id}`, {
      comment: payload.comment
    },
    {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then((response) => {
      let payloadMut = {
        comment: response.data.comment.comment,
        name: self.user
      }
      commit('addComment', payloadMut)
    }).catch((err) => {
      console.error(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
