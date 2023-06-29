<template>
	<view :style="skin">
		<view class="px-2 mt-2">
			<view class="mb-2 bg-white rounded-2 p-2">
				<view class="d-flex font-me " @click="goMyInfo">
					<u-avatar :src="data.src" size="60"></u-avatar>
					<view class="ml-3 c-flex">
						<view class="ml-3 d-flex flex-nowrap mb-2 a-center">
							<text class="font-md font-weight mr-2">名字</text>
							<view class="c-flex ml-10 text-center">
								<text class="font-mini  text-center font-weight">1000 </text>
								<text class="font-mini text-grey">关注</text>
							</view>
							<view class="c-flex ml-3 text-center">
								<text class="font-mini text-center font-weight">20W</text>
								<text class="font-mini text-grey">粉丝</text>
							</view>
						</view>
						<input placeholder="点击请输入个性签名" class="font-me" maxlength="15" v-model="data.sign">
					</view>
					<view class="d-flex a-center ml-8">
						<u--image :showLoading="true" :src="icon.next" width="20px" height="80px"></u--image>
					</view>
				</view>
			</view>

			<view class="mb-2 bg-white rounded-2 p-2" @click="goWallet">
				<view class="c-flex font-me font-weight">
					<view class=" d-flex a-center">
						<text class="font-md">钱包</text>
						<u--image :showLoading="true" :src="data.moneyShow ? icon.eyeOpen : icon.eyeClose" class="ml-1"
							width="40rpx" height="40rpx" 　@click="toggleShow"></u--image>
					</view>
					<text class="font-lr font-weight" v-show="data.moneyShow ">0.00</text>
					<text class="font-lr font-weight" v-show="!data.moneyShow ">****</text>
				</view>
			</view>

			<view class="mb-2 d-flex flex-wrap bg-white rounded-2 p-2 j-sb ">
				<view class="text-center" @click="goDreamCenter">
					<u--image :showLoading="true" :src="icon.dreamPlan" class="ml-1" width="100rpx"
						height="100rpx"></u--image>
					<text class="font-mini font-weight text-center">梦想中心</text>
				</view>
			</view>

			<view class="mb-2 bg-white rounded-2 p-2" @click="goKefu">
				<text class=" font-md font-weight">联系客服</text>
			</view>

			<view class="mb-2 bg-white rounded-2 p-2" @click="goDonate">
				<text class=" font-md font-weight">赞助我们</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					src: 'https://cdn.uviewui.com/uview/album/5.jpg',
					sign: '王国之泪GOTY!',
					moneyShow: true,
				},
				icon: {
					next: '../../static/icon/next.png',
					wallet: '../../static/icon/钱包.png',
					eyeOpen: '../../static/icon/eye.png',
					eyeClose: '../../static/icon/eye-close.png',
					dreamPlan: '../../static/icon/plan.png'
				}
			}
		},
		methods: {
			toggleShow() {
				this.data.moneyShow = !this.data.moneyShow
			},
			goMyInfo() {
				uni.$u.route('/pages/mine/myInfo')
			},
			goWallet() {
				uni.$u.route('/pages/mine/wallet')
			},
			goDreamCenter() {
				uni.$u.route('/pages/mine/dreamCenter')
			},
			goKefu() {
				uni.$u.route('/pages/mine/kefu')
			},
			goDonate() {
				uni.$u.route('/pages/mine/donate')
			}
		}
	}
</script>

<style>
	page {
		background-color: #eeeeee;
	}

	.dream-image {
		height: 200rpx;
		width: 200rpx;
		background-size: 200rpx 200rpx;
		background-image: url();
		background-repeat: no-repeat;
	}

	.wallet {
		vertical-align: middle;
	}
</style>