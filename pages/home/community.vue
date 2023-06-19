<template>
	<view :style="skin">
		<view class="">
			<u-subsection mode="button" @change="sectionChange" :list="topList" :current="currIndex"></u-subsection>
		</view>
		<view v-if="currIndex==0">
			<u-subsection mode="button" @change="sectionChange2" :list="topList2" :current="currIndex2"></u-subsection>
		</view>

		<view class="mx-3 mt-2  c-flex">
			<view v-if="currIndex==0" class="album c-flex mb-4 " v-for="(item,index) in dreamList" :key="index">
				<view class="d-flex a-center mb-1">
					<u-avatar bg-color="#fff" :src="getBackSrc(item.avatar)">
					</u-avatar>
					<view class="ml-2">
						<u--text :block="true" :text="item.name" bold size="17"></u--text>
					</view>
					<view class="ml-auto">
						<u-icon size="20" name="more-dot-fill"></u-icon>
					</view>
				</view>
				<view class="">

					<u--text margin="0 0 8px 0" :text="item.content"></u--text>
					<u-album :multipleSize="90" :urls="item.albumList"></u-album>
					<view class="d-flex my-3">
						<u-tag icon="attach" shape="circle" :plain="true" :text="item.tag"></u-tag>
					</view>
					<view class="d-flex mt-3 j-sa">
						<view class=" d-flex mr-8">
							<u-icon color="var(--nav-lightGrey)" name="chat" size="30"></u-icon>
							<u-text color="var(--nav-lightGrey)" :text="item.commentCount"></u-text>
						</view>
						<view class=" d-flex ml-8 ">
							<u-icon color="var(--nav-lightGrey)" name="heart" size="30"></u-icon>
							<u-text color="var(--nav-lightGrey)" :text="item.likeCount"></u-text>
						</view>
					</view>
					<!-- 				<view class="my-2 d-flex a-center">
						<u--text type="info" :text="$u.timeFormat (item.updateTime)"></u--text>
						<u-icon class="ml-auto" name="more-dot-fill"></u-icon>
					</view> -->
					<!-- <view class="py-1 px-2" style="background-color: #eee;">
						<view class="d-flex">
							<view class="d-flex a-center mr-1" v-for="(value,key) in item.likeList" :key="key">
								<u-icon color="red" name="heart-fill"></u-icon>
								<u--text type="info" :text="value"></u--text>
							</view>
						</view>
						<view class="mt-1">
							<view class="d-flex flex-wrap" v-for="(value,key) in item.comment" :key="key">
								<view class="mr-1">
									<u--text class="" type="info" :text="value.name+':'"></u--text>
								</view>
								<view>
									<u--text type="info" :text="value.content"></u--text>
								</view>
							</view>
						</view>
					</view> -->
				</view>
				<view class="mt-2">
					<u-line></u-line>
				</view>
			</view>
			<view v-if="currIndex==1">
				<view class="d-flex ">
					<view class="d-flex w-100 a-center" style="">
						<u-tabs class="d-flex " style="width: 600rpx;" :list="tabList" @click="click">
						</u-tabs>
						<view>
							<u-text class="" text="筛选"></u-text>
						</view>
					</view>
				</view>
				<view class="c-flex mt-2">
					<view class="d-flex rounded-2 border mb-2 p-2" v-for="(item,index) in dreamerList" :key="index"
						@click="goRecruitment(item.userId)">
						<u-avatar :src="getBackSrc(item.avatar)"></u-avatar>
						<view class="c-flex ml-3">
							<text class="">{{item.name}}</text>
							<view class="d-flex a-center">
								<text class="text-grey font-sm mr-2">{{item.type}}</text>
								<u-tag :plain="true" shape="circle" :text="item.tag"></u-tag>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="position-fixed d-flex" style="bottom:150rpx ;right: 50rpx; ">
			<u-icon size="70rpx" name="plus-circle-fill"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topList: ['社区', '一同追梦'],
				topList2: ['梦想', '日常', '经验', '问答'],
				tabList: [{
					name: '火热'
				}, {
					name: '附近'
				}, {
					name: '最新'
				}],
				currIndex: 0,
				currIndex2: 0,
				albumWidth: 0,
				dreamerList: [{
					userId: 1,
					avatar: '',
					name: '大狸子1',
					type: '个人商户',
					tag: '追梦人'
				}, {
					userId: 2,
					avatar: '',
					name: '大狸子2',
					type: '个人商户',
					tag: '追梦人'
				}, {
					userId: 3,
					avatar: '',
					name: '大狸子3',
					type: '个人商户',
					tag: '追梦人'
				}, {
					userId: 4,
					avatar: '',
					name: '大狸子4',
					type: '个人商户',
					tag: '追梦人'
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
			sectionChange(index) {
				this.currIndex = index;
			},
			sectionChange2(index) {
				this.currIndex2 = index
			},
			goRecruitment(userId) {
				uni.$u.route('/pages/community/recruitment', {
					userId: userId
				})
			}
		}
	}
</script>

<style lang="scss">
	// page {
	// 	background-color: #eee
	// }
</style>