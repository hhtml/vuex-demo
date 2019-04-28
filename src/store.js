import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{ //存储数据
		person:[
        {name:'马云',money:300},
        {name:'马化腾',money:200},
        {name:'马蓉',money:160},
        {name:'马建国',money:100},
      ]
  },
  getters:{ 
  	changePerson:(state) => {
  		var changePerson = state.person.map(person => {
  			return{
  				name:'*'+person.name + '*',
  				money:person.money / 2
  			}
  		})
  		return changePerson
  	}
  },
  mutations:{ //触发事件改变数据
  	reduceMoney:(state,payload) => {
  		return state.person.forEach(person => {
  			person.money -= payload
  		})
  	}
  },
  actions:{
  	reduceMoney:(context,payload) => {
  		setTimeout(function(){
  			context.commit('reduceMoney',payload)
  		},1000)
  	}
  }
})
