<template>
	<view :style="skin">
		<view>
			<u-swiper :list="swiperList" @change="change" @click="click"></u-swiper>
		</view>
		<u-grid @click="onGrid">
			<u-grid-item v-for="(item,index) in baseList" :key="index">
				<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="item.name" :size="22"></u-icon>
				<text class="grid-text" style="padding: 10rpx 0 20rpx 0rpx;">{{item.title}}</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				baseList: [{
						name: 'plus-circle',
						title: '发布项目'
					},
					{
						name: 'list',
						title: '我的项目'
					},

				]
			}
		},
		methods: {
			change() {

			},
			onGrid(index) {
				console.log(index)
				if (index == 0) {
					uni.$u.route('/pages/mine/myDream')
				}
			}
		}
	}
</script>

<style>

</style>