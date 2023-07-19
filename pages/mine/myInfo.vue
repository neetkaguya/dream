<template>
	<view :style="skin">
		<view class="topBack" style="height: 300rpx; " :style="{'background':'url('+background+') '}"></view>
		<view class=" mt-2 ">
			<view class="c-flex  p-3 " style="margin-top:-80rpx">
				<view class="d-flex a-center ">
					<view>
						<u-avatar size="75" :src="getBackSrc(userInfo.avatar)"></u-avatar>
					</view>
					<view class="c-flex ml-2 mt-4">
						<text>{{userInfo.name}}</text>
						<view class="d-flex a-center mt-1">
							<text class="font-mt">{{userInfo.sign}}</text>
							<u-icon size="20" name="share-square"></u-icon>
						</view>
					</view>
					<view class="ml-auto d-flex mt-4">
						<view class="c-flex a-center">
							<text>{{userInfo.follow}}</text>
							<text>关注</text>
						</view>
						<view class="mx-1">
							<u-line direction="col"></u-line>
						</view>
						<view class="c-flex a-center">
							<text>{{userInfo.fans}}</text>
							<text>粉丝</text>
						</view>
					</view>
				</view>
				<view class="mt-3">
					<u-text :text="userInfo.company"></u-text>
				</view>
				<view class="mt-3 d-flex a-center border-bottom pb-2">
					<text class="font-mt">ip：{{userInfo.ipAddress}}</text>
					<view class="ml-auto">
						<u-button size="mini" type="primary" :plain="true" round="10">编辑资料</u-button>
					</view>
				</view>

			</view>
			<view class=" d-flex w-100">
				<u-tabs lineColor="#52cac4" :itemStyle="itemStyle" :list="dynamicList" @click="clickTabs"></u-tabs>
			</view>
		</view>
		<view class="pt-2" style="background-color: #eee;">
			<view v-if="tagsIndex==0" class="mx-2 mb-2 rounded-2 p-2 bg-white" style="border: 1px solid #000000 "
				v-for="(item,index) in dreamList" :key="index">
				<view class="d-flex a-center mb-1">
					<u-avatar bg-color="#fff" :src="getBackSrc(item.avatar)">
					</u-avatar>
					<view class="ml-2 c-flex">
						<view>
							<u--text :block="true" :text="item.name" bold size="17"></u--text>
						</view>
						<view>
							<u--text :block="true" :text="$u.timeFormat(item.updateTime)" size="15"></u--text>
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
						<view class=" d-flex mr-8 a-center">

							<u-icon color="var(--nav-lightGrey)" name="share-square" size="30"></u-icon>
							<text class="font-sm">{{item.sendCount}}</text>
							<!-- <u-text color="var(--nav-lightGrey)" text="转发"></u-text> -->
						</view>
						<view class=" d-flex mr-8 a-center">
							<u-icon color="var(--nav-lightGrey)" name="chat" size="30"></u-icon>
							<text class="font-sm">{{item.commentCount}}</text>
							<!-- <u-text color="var(--nav-lightGrey)" text="回复"></u-text> -->
						</view>
						<view class=" d-flex  a-center">
							<u-icon color="var(--nav-lightGrey)" name="thumb-up" size="30"></u-icon>
							<text class="font-sm">{{item.likeCount}}</text>
							<!-- <u-text color="var(--nav-lightGrey)" text="点赞"></u-text> -->
						</view>
					</view>

				</view>

			</view>
			<view v-if="tagsIndex==1" class="mx-2 mb-2 rounded-2 p-2 c-flex bg-white"  style="border:1px #000000 solid ;"
				v-for="(item,index) in projectList" :key="index">
				<view>
					<text>{{item.name}}</text>
				</view>
				<view class="d-flex mt-1">
					<u-tag :plain="true" class="mr-1" v-for="(value,key) in item.tags" :text="value"></u-tag>
				</view>
				<view class="d-flex mt-1 a-center">
					<text class="font-sm">{{item.company}}</text>
					<view class="ml-auto mr-auto d-flex">
						<u-icon name="map"></u-icon>
						<text class="font-sm">{{item.address}}</text>
					</view>
					<view>
						<text class="font-sm">{{item.chargeCount}}人充电</text>
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
				pageIndex: 1,
				tagsIndex: 0,
				userInfo: {
					avatar: '',
					name: '大狸子',
					type: '个体商户',
					isFollow: false,
					fans: 10,
					follow: 12,
					sign: '起床起床起床起床起床',
					company: '上海樱众梦科技有限公司',
					ipAddress: '杭州',
					info: '这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介'
				},
				background: '/static/image/back.jpg',
				dynamicList: [{
					name: '主页'
				}, {
					name: '项目'
				}],
				currIndex: 0,

				itemStyle: {
					'width': '320rpx',
					'padding-bottom': '20rpx'
				},
				dreamList: [{
					avatar: '',
					name: '大狸子1',
					tag: '工作那点事儿',
					content: '大狸子1的梦想xxxxxxx',
					updateTime: '2023-06-17 14:52:00',
					likeList: ['小狸子', '中狸子'],
					likeCount: 199,
					commentCount: 200,
					sendCount: 3,
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
					sendCount: 3,
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
				}],
				projectList: [{
					name: '给美术家鸡腿',
					tags: ['努力', '奖励', '加油'],
					company: '上海应众梦科技有限公司',
					address: '上海静安区',
					chargeCount: 18
				}]
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			clickTabs(index) {
				console.log(index)
				this.tagsIndex = index.index
				this.pageIndex = 1;
				if (index.index == 0) {

					this.getList();
				} else {
					this.getDynamicList()
				}
			},
			getList() {
				uni.$u.http.post('/app/dreams/PersonalHome', {
					pageNum: this.pageIndex,
					pageSize: 10,
					workId: this.$store.state.workId
				}).then(res => {
					console.log(res);
				})
			},
			getDynamicList() {
				uni.$u.http.post('/app/dreams/PersonalTrends', {
					pageNum: this.pageIndex,
					pageSize: 10,
					workId: this.$store.state.workId
				}).then(res => {

				})
			},
			sectionChange(index) {
				this.currIndex = index
			},
			goEditInfo() {
				uni.$u.route('/pages/mine/editInfo')
			}
		}
	}
</script>

<style>
	

	.topBack {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0% 50%;
	}
</style>