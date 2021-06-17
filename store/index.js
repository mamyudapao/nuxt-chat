import Vuex from 'vuex'
import firebase from '../plugins/firebase'

export const state = () => {
  username: null
}

export const getters = {
  username(state) {
    return state.username
  }
}

export const mutations = {
  setUserName(state, username) {
    state.username = username;
  }
}
