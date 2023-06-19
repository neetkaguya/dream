<template>
	<view :style="skin">
		<u-swiper :list="bannerList" @change="change" @click="click"></u-swiper>
		<view class="d-flex font-me mt-2 px-2">
			<text>火热</text>
			<text class="ml-2">附近</text>
			<text class="ml-2">最新</text>
			<view class="ml-auto">筛选 </view>
		</view>
		<view class="px-2 mt-2">
			<view class="mb-2 c-flex bg-white rounded-2 p-2 " v-for="(item,index) in list" :key="index"
				@click="goDreamInfo(item.dreamId)">
				<view class="font-lg font-weight">{{item.title}}</view>
				<view class="d-flex font-me">
					<text>{{item.type}}</text>
					<text class="ml-2">{{item.group}}</text>

				</view>
				<view class="d-flex mt-1 a-center">
					<view class="d-flex">
						<u-tag class="mr-1" v-for="(value,key) in item.tags" :key="key" :text="value"
							shape="circle"></u-tag>
					</view>
					<view class="ml-auto font-me">
						<text>助力进度</text>
						<text>{{item.currProgress}}/{{item.totalProgress}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				list: [{
					dreamId: 1,
					title: '梦想计划书',
					type: '类型1',
					group: '团队1',
					tags: ['梦想', '拼搏'],
					currProgress: 1888,
					totalProgress: 100000,
				}, {
					dreamId: 2,
					title: '梦想计划书',
					type: '类型2',
					group: '团队2',
					tags: ['梦想', '拼搏'],
					currProgress: 1888,
					totalProgress: 100000,
				}, {
					dreamId: 3,
					title: '梦想计划书',
					type: '类型3',
					group: '团队3',
					tags: ['梦想', '拼搏'],
					currProgress: 1888,
					totalProgress: 100000,
				}, {
					dreamId: 4,
					title: '梦想计划书',
					type: '类型4',
					group: '团队4',
					tags: ['梦想', '拼搏'],
					currProgress: 1888,
					totalProgress: 100000,
				}]
			}
		},
		methods: {
			change() {

			},
			goDreamInfo(dreamId) {
				uni.$u.route('/pages/dream/dreamInfo', {
					dreamId: dreamId
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #eeeeee;
	}
</style>