import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'testing'
  },
  mutations: {
    fetchData(state, data){
     state.test= data.products
    }
  },
  actions: {
    async fetchProduct({commit}){
      try {
        console.log('test')
        let {data} = await axios("https://dummyjson.com/products")
       commit('fetchData',data)
        console.log(data)
    
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {},
})
