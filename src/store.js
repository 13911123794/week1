import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    setlist(state,data){
      state.list = data
      data.map((item,index)=>{
        
        if(item.parentid==1){
          return item
        }
        if(item.parentid == item.id){
          console.log(item)
        }
      })
    }
  },
  actions: {
    getList({commit}){
      axios.get("/list").then(({data})=>{
        commit('setlist',data)
      })
    }
  }
})
