<template>
	<div id="one">
		<div class="container">
			<h3>财富排行榜2019</h3>
			<div class="wrap">
				<div class="item"  v-for="item in changePerson" :key="item.name">
					<span>{{item.name}}</span>
					<span>${{item.money}}</span>
				</div>
			</div>
			<button @click="reduceMoney(4)" class="btn">产品降价</button>
		</div>
	</div>
</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

	export default{
		// props:["person"], //接收父组件传过来的值
		data(){
			return{

			}
		},
		methods:{
			// reduceMoney:function(price) {
			// 	// this.$store.commit('reduceMoney') //使用mutations
			// 	this.$store.dispatch('reduceMoney',price) //使用actions
			// }

			...mapActions([
					"reduceMoney"
				])
		},
		computed:{
			person(){
				return this.$store.state.person
			},
			// changePerson(){
			// 	return this.$store.getters.changePerson
			// },
			...mapGetters([
					"changePerson"
				])
		}
	};
</script>

<style scoped>
	.container{
		width:100%;
		padding:20px;
		box-sizing: border-box;
		background-color: #fbffa7;
	}
	.wrap{
		display: flex;
	}
	.item{
		background-color: rgba(255,255,255,0.54);
		padding:10px;
		margin-right:10px;
		border-radius: 6px;
	}
	.item span:last-child{
		color:#df900f;
		margin-left: 4px;
	}
	.btn{
		margin-top: 10px;
	}
</style>