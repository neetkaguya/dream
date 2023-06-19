<template>
	<view :style="skin">
		<view class="rounded-2 mx-2 mt-2 bg-white p-2 d-flex">
			<u-avatar :src="getBackSrc(userInfo.avatar)"></u-avatar>
			<view class="ml-3 c-flex">
				<text>{{userInfo.name}}</text>
				<text class="font-mt text-grey"> {{userInfo.type}}</text>
			</view>
			<view class="ml-auto">
				<u-button type="primary" shape="circle" :text="userInfo.isFollow?'取关':'关注'"></u-button>
			</view>
		</view>
		<view class="mx-2 bg-white mt-2 d-flex  p-2">
			<u-line-progress type="success" height="30" :showText="false"
				:percentage="(dreamInfo.currProgress/dreamInfo.totalProgress) * 100">
				<text class="ml-auto mr-auto">{{dreamInfo.currProgress}} / {{dreamInfo.totalProgress}}</text>
			</u-line-progress>
			<!--  -->
		</view>
		<view class="bg-white mt-2 p-1 mx-2 d-flex">
			<text class="font-me ml-auto mr-auto">{{dreamInfo.content}}</text>
		</view>
		<view class="rounded-2 bg-white mx-2 d-flex flex-wrap p-2 j-center mt-2">
			<view @click="changeGift(item.giftId)" class="c-flex p-2  a-center mr-2 mb-2 rounded-2"
				style="border:1px solid var(--nav-main)" :style="{'background-color':currGift==item.giftId?'var(--nav-main)':'',
				'color':currGift==item.giftId?'var(--nav-white)':'var(--nav-main)'}" v-for="(item,index) in gift" :key="index">
				<text>{{item.name}}</text>
				<text>{{item.price}}元</text>
			</view>
		</view>
		<view class="c-flex mx-2 mt-5">
			<view>
				<view @click="changePay(item.payType)" v-for="(item,index) in payList" :key="index"
					style="border: 1px solid ;"
					:style="{'background':currPay==item.payType? item.backColor:'', 'color':currPay==item.payType ?'var(--nav-white)':item.backColor,'border-color': item.backColor }"
					class="d-flex mb-2 p-1 rounded-2">
					<view class="ml-auto mr-auto d-flex">
						<u-icon :name="item.icon" :color="currPay==item.payType?'var(--nav-white)':item.backColor"
							size="28"></u-icon>
						<text class="ml-2 ">{{item.name}}</text>
					</view>
				</view>
			</view>
			<view class="mt-5">
				<u-button size="large" type="primary" text="确认购买"></u-button>
			</view>

		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currGift: 1,
				currPay: 1,
				userInfo: {
					avatar: '',
					name: '大狸子',
					type: '个体商户',
					isFollow: false,

				},
				payList: [{
					payType: 1,
					name: '微信',
					backColor: '#1AAD19',
					icon: 'weixin-fill'
				}, {
					payType: 2,
					name: '钱包',
					backColor: 'var(--nav-red)',
					icon: 'rmb-circle'
				}],
				dreamInfo: {
					dreamId: '',
					videoSrc: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
					currProgress: 50000,
					totalProgress: 100000,
					content: '感谢你的支持！世界因有梦想变得更美好！'
				},
				gift: [{
						giftId: 1,
						name: '辣条',
						price: 1
					},
					{
						giftId: 2,
						name: '矿泉水',
						price: 3
					},
					{
						giftId: 3,
						name: '泡面',
						price: 5
					},
					{
						giftId: 4,
						name: '雪糕',
						price: 10
					},
					{
						giftId: 5,
						name: '外卖',
						price: 20
					},
					{
						giftId: 6,
						name: '肯德基',
						price: 50
					},
					{
						giftId: 7,
						name: '红包',
						price: 100
					},
				]
			}
		},
		methods: {
			changeGift(index) {
				this.currGift = index
			},
			changePay(index) {
				console.log(index)
				this.currPay = index
			}
		}
	}
</script>

<style>
	page {
		background-color: #eee;
	}
</style>