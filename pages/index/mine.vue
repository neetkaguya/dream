<template>
	<view :style="skin">
		<view class=" ">
			<view class="p-3 mineBg c-flex" style="height: 250rpx;">
				<view class="d-flex font-me a-center" @click="goMyInfo">
					<u-avatar :src="data.src" size="60"></u-avatar>
					<view class="ml-3 c-flex">
						<view class="ml-3 d-flex flex-nowrap mb-2 a-center">
							<text class="font-md font-weight mr-2">{{data.name}}</text>

						</view>
						<view class="d-flex">
							<input placeholder="点击请输入个性签名" class="font-me" maxlength="15" v-model="data.sign">
							<u-icon name="share-square"></u-icon>
						</view>
					</view>
					<view class="c-flex ml-10 text-center">
						<text class="font-mini  text-center font-weight">1000 </text>
						<text class="font-mini text-grey">关注</text>
					</view>
					<view class="c-flex ml-3 text-center">
						<text class="font-mini text-center font-weight">20W</text>
						<text class="font-mini text-grey">粉丝</text>
					</view>

				</view>
				<view class="c-flex a-center mr-auto  mt-2 font-mt ml-10">
					<text>已充电</text>
					<text>{{data.rechargeCount}}</text>
				</view>
			</view>

			<view class="mx-2">

				<view class="mb-2   p-2 vip" @click="goWallet">
					<view class="c-flex font-me font-weight text-white">
						<view class=" d-flex a-center ml-2 mt-1 ">
							<u-image mode="widthFix"  width="200" height="50" src="/static/image/viptext.png"></u-image>
							<!-- <text class="font-md vipText">升级VIP 享受更多权益</text> -->
							<view class="ml-auto vipText mr-5">
								<text>去升级</text>
							</view>
						</view>
						

					</view>
				</view>

				<view class="mb-2   p-2 wallet" @click="goWallet">
					<view class="c-flex font-me font-weight text-white ml-2">
						<view class=" d-flex a-center">
							<text class="font-md">钱包</text>
							<u-icon color="white" :name="data.moneyShow ? 'eye' : 'eye-off'" class="ml-1" size="25"
								　@click="toggleShow">
							</u-icon>
						</view>
						<text class="font-lr font-weight" v-show="data.moneyShow ">0.00</text>
						<text class="font-lr font-weight" v-show="!data.moneyShow ">****</text>
					</view>
				</view>

				<view class="mb-2 d-flex flex-wrap bg-white rounded-2 p-2 j-sb ">
					<view class="text-center" @click="goDreamCenter">
						<u--image :showLoading="true" :src="icon.pushCenter" class="ml-1" width="100rpx"
							height="100rpx"></u--image>
						<text class="font-mini font-weight text-center">发布中心</text>
					</view>
					<view class="text-center" @click="goDreamCenter">
						<u--image :showLoading="true" :src="icon.idCard" class="ml-1" width="100rpx"
							height="100rpx"></u--image>
						<text class="font-mini font-weight text-center">身份认证</text>
					</view>
					<view class="text-center" @click="goDreamCenter">
						<u--image :showLoading="true" :src="icon.dreamMoney" class="ml-1" width="100rpx"
							height="100rpx"></u--image>
						<text class="font-mini font-weight text-center">梦想贷</text>
					</view>
					<view class="text-center" @click="goDreamCenter">
						<u--image :showLoading="true" :src="icon.dreamHeart" class="ml-1" width="100rpx"
							height="100rpx"></u--image>
						<text class="font-mini font-weight text-center ml-2">梦想公益</text>
					</view>
				</view>

				<view class="mb-2 bg-white rounded-2 p-2 d-flex a-center" @click="goKefu">
					<u-icon class="mr-1"  size="30" :name="getImgSrc('/static/icon/yijian.png')"></u-icon>
					<text class=" font-md font-weight">联系客服</text>
				</view>

				<view class="mb-2 bg-white rounded-2 p-2 d-flex a-center" @click="goDonate">
					<u-icon class="mr-1"  size="30" :name="getImgSrc('/static/icon/zanzhu.png')"></u-icon>
					<text class=" font-md font-weight">赞助我们</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					name: '这是名字',
					src: 'https://cdn.uviewui.com/uview/album/5.jpg',
					sign: '王国之泪GOTY!',
					moneyShow: true,
					rechargeCount: 22,
				},
				icon: {
					next: '../../static/icon/next.png',
					wallet: '../../static/icon/钱包.png',
					eyeOpen: '../../static/icon/eye.png',
					eyeClose: '../../static/icon/eye-close.png',
					dreamPlan: '../../static/icon/plan.png',
					pushCenter: '/static/icon/pushCenter.png',
					idCard: '/static/icon/idCard.png',
					dreamMoney: '/static/icon/dreamMoney.png',
					dreamHeart: '/static/icon/dreamHeart.png'
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

	.mineBg {
		background-image: linear-gradient(#6ce0f5, #f3fdfe);
	}

	.wallet {
		/* margin-top: -40rpx; */
		background-image: url('/static/bg/wallet.png');
		background-size: 100% 100%;
	}

	.vip {
		margin-top: -40rpx;
		background-image: url('/static/bg/vip.png');
		background-size: 100% 100%;
		height: 130rpx;
	}

	.dream-image {
		height: 200rpx;
		width: 200rpx;
		background-size: 200rpx 200rpx;
		background-image: url();
		background-repeat: no-repeat;
	}

	

	text.vipText {
		/* font-size: 48px; */
		color: gold;
		text-shadow: 0 0 10px gold;
		box-shadow: 0 0 20px gold;
		animation: glowing 2s infinite;
	}


	/* 定义动画 */
	@keyframes glowing {
		0% {
			text-shadow: 0 0 10px gold;
			box-shadow: 0 0 20px gold;
		}

		50% {
			text-shadow: 0 0 20px gold;
			box-shadow: 0 0 30px gold;
		}

		100% {
			text-shadow: 0 0 10px gold;
			box-shadow: 0 0 20px gold;
		}
	}
</style>