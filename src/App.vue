<template>
  <div id="app">
    <Home :option='list'/>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
import Home from './views/Home.vue'
export default {
  components:{Home},
  created(){
      this.getList()
    },
    computed:{
       ...mapState(['list'])
    },
    methods: {
      ...mapActions(['getList']),
    }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
