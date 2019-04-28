<template>
  <div id="app">

    <!-- 父组件向子组件传值 -->
    <!-- <one :person="person"></one>
    <two :person="person"></two> -->

    <one></one>
    <two></two>

  </div>
</template>

<script>
import one from './components/one.vue'
import two from './components/two.vue'
export default {
  name: 'app',
  data(){
    return{
      // person:[
      //   {name:'马云',money:300},
      //   {name:'马化腾',money:200},
      //   {name:'马蓉',money:160},
      //   {name:'马建国',money:100},
      // ]
    }
  },
  components:{
    "one":one,
    "two":two
  }
};
</script>

<style scoped>

</style>
