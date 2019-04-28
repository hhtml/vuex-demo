<template>
	<div id="two">
		<div class="container">
			<h3>财富排行榜2019</h3>
			<div class="wrap">
				<div class="item" v-for="item in changePerson" :key="item.name">
					<span>{{item.name}}</span>
					<span>${{item.money}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		// props:["person"], //接收父组件传过来的值
		data(){
			return{

			}
		},
		computed:{
			person(){
				return this.$store.state.person
			},
			changePerson(){
				return this.$store.getters.changePerson
			}
		}
	};
</script>

<style scoped>
	.container{
		width: 100%;
		background-color: #d2e2ff;
		padding:20px;
		box-sizing: border-box;
		margin-top: 20px;
	}
	.item{
		display: flex;
		flex-direction: column;
		background-color: rgba(255,255,255,0.54);
		padding:10px;
		box-sizing: border-box;
		margin-top: 10px;
	}
	.item span:last-child{
		color:#bb23fe;
		font-weight: bold;
	}
</style>