<template>
	<view :style="skin">
		<view class="d-flex a-center">
			<view class="pt-1 pl-1 d-flex">
				<u-input prefixIcon="search" v-model="searchWord" :custom-style="inputStyle"></u-input>

			</view>
			<u-icon name="calendar" size="30"></u-icon>
		</view>
		<view>
			<u-tabs :list="tagList" @click="click"></u-tabs>
		</view>
		<view class="mx-3 mt-2  c-flex">
			<view class="album c-flex mb-4 " v-for="(item,index) in dreamList" :key="index"
				@click="goTopicInfo(item.id)">
				<view class="d-flex a-center mb-1">
					<u-avatar bg-color="#fff" :src="getBackSrc(item.avatar)">
					</u-avatar>
					<view class="ml-2 c-flex">
						<view>
							<u--text :block="true" :text="item.name" bold size="17"></u--text>
						</view>
						<view>
							<u--text :block="true" :text="$u.timeFormat(item.updateTime)" size="17"></u--text>
						</view>
					</view>
					<view class="ml-auto">
						<u-icon size="20" name="more-dot-fill"></u-icon>
					</view>
				</view>
				<view class="">

					<u--text margin="0 0 8px 0" :text="item.content"></u--text>
					<u-album :multipleSize="90" :urls="item.albumList"></u-album>
					<view class="d-flex my-3">
						<u-tag icon="#" shape="circle" :plain="true" :text="item.tag"></u-tag>
					</view>
					<view class="d-flex mt-3 j-sa">
						<view class=" d-flex mr-8">
							<!-- <u-icon color="var(--nav-lightGrey)" name="chat" size="30"></u-icon> -->
							<u-text color="var(--nav-lightGrey)" text="转发"></u-text>
						</view>
						<view class=" d-flex mr-8 ">
							<!-- <u-icon color="var(--nav-lightGrey)" name="heart" size="30"></u-icon> -->
							<u-text color="var(--nav-lightGrey)" text="回复"></u-text>
						</view>
						<view class=" d-flex  ">
							<!-- <u-icon color="var(--nav-lightGrey)" name="heart" size="30"></u-icon> -->
							<u-text color="var(--nav-lightGrey)" text="点赞"></u-text>
						</view>
					</view>

				</view>
				<view class="mt-2">
					<u-line></u-line>
				</view>
			</view>
			<view class="position-fixed " style="bottom: 200rpx;right: 50rpx;width: 100rpx;">
				<u-icon :customStyle="plusStyle" name="plus" color="var(--nav-main)" size="40"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currIndex: 0,
				topList: ['推荐', '日常', '经验', '问答'],
				searchWord: '',
				inputStyle: {
					"border-radius": '30rpx',
					"background-color": '#eeeeee',
					'width': '50%'
				},
				plusStyle:{
					"border":'1px solid var(--nav-main)',
					"border-radius":'50rpx'
				},
				tagList: [{
					name: '推荐'
				}, {
					name: '日常'
				}, {
					name: '经验'
				}, {
					name: '问答'
				}, {
					name: '我的关注'
				}],
				dreamList: [{
					avatar: '',
					name: '大狸子1',
					tag: '工作那点事儿',
					content: '大狸子1的梦想xxxxxxx',
					updateTime: '2023-06-17 14:52:00',
					likeList: ['小狸子', '中狸子'],
					likeCount: 199,
					commentCount: 200,
					comment: [{
							name: '小狸子',
							content: '噢噢噢噢噢噢噢噢！'
						},
						{
							name: '中狸子',
							content: '俺觉得挺好的'
						}
					],
					albumList: ['https://cdn.uviewui.com/uview/album/1.jpg',
						// 'https://cdn.uviewui.com/uview/album/2.jpg',
						// 'https://cdn.uviewui.com/uview/album/3.jpg',
						// 'https://cdn.uviewui.com/uview/album/4.jpg',
						// 'https://cdn.uviewui.com/uview/album/5.jpg',
						// 'https://cdn.uviewui.com/uview/album/6.jpg',
						// 'https://cdn.uviewui.com/uview/album/7.jpg',
						// 'https://cdn.uviewui.com/uview/album/8.jpg',
						// 'https://cdn.uviewui.com/uview/album/9.jpg',
						// 'https://cdn.uviewui.com/uview/album/10.jpg',
					]
				}, {
					avatar: '',
					name: '大狸子2',
					content: '大狸子2的梦想xxxxxxx',
					updateTime: '2023-06-17 14:52:00',
					likeList: ['小狸子', '中狸子'],
					likeCount: 199,
					commentCount: 200,
					tag: '工作那点事儿',
					comment: [{
							name: '小狸子',
							content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！'
						},
						{
							name: '中狸子',
							content: '不太行😂'
						}
					],
					albumList: ['https://cdn.uviewui.com/uview/album/1.jpg',
						'https://cdn.uviewui.com/uview/album/2.jpg',
						'https://cdn.uviewui.com/uview/album/3.jpg',
						'https://cdn.uviewui.com/uview/album/4.jpg',
						'https://cdn.uviewui.com/uview/album/5.jpg',
						'https://cdn.uviewui.com/uview/album/6.jpg',
						'https://cdn.uviewui.com/uview/album/7.jpg',
						'https://cdn.uviewui.com/uview/album/8.jpg',
						'https://cdn.uviewui.com/uview/album/9.jpg',
						'https://cdn.uviewui.com/uview/album/10.jpg',
					]
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
			},
			sectionChange(index) {
				this.currIndex = index;
			},
			goTopicInfo(id) {
				uni.$u.route('/pages/home/topicInfo', {
					topicId: id
				})
			}
		}
	}
</script>

<style>
	page {}
</style>