<template>
	<view :style="skin">
		<view class="mx-2 mt-2 c-flex">
			<view class="mb-2 px-3 py-4 d-flex a-center bg-white rounded-2" v-for="(item,index) in list" :key="index">
				<view>
					<u-avatar :src="getBackSrc(item.avatar)"></u-avatar>
				</view>
				<view class="c-flex ml-3">
					<text class="mb-auto">{{item.name}}</text>
				</view>
				<view class="ml-auto d-flex mt-auto">
					<text>助力了</text>
					<text class="text-red">{{item.money}}</text>
					<text>元</text>
				</view>
			</view>
			<view class="ml-auto mr-2">等{{count}}人助力 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 1587,
				list: [{
						userId: 1,
						name: '大狸子1',
						avatar: '',
						money: 10000
					},
					{
						userId: 2,
						name: '大狸子2',
						avatar: '',
						money: 20000
					}, {
						userId: 3,
						name: '大狸子3',
						avatar: '',
						money: 30000
					}, {
						userId: 4,
						name: '大狸子4',
						avatar: '',
						money: 40000
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #eee;
	}
</style>