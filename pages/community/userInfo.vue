<template>
	<view :style="skin">
		<view class="topBack" style="height: 400rpx; " :style="{'background':'url('+background+') '}"></view>
		<view class="mx-2 mt-2">
			<view class="border rounded-2 d-flex a-center p-3 " @click="goUserInfo">
				<u-avatar :src="getBackSrc(userInfo.avatar)"></u-avatar>
				<view class="d-flex">
					<view class="d-flex ml-3 w-100">
						<view>
							<u-text :text="userInfo.name"> </u-text>
						</view>
						<view class="ml-auto c-flex">
							<view>
								<u-text :text="userInfo.fans"> </u-text>
							</view>
							<view class="ml-auto">
								<u-button size="mini" type="primary" shape="circle"
									:text="userInfo.isFollow?'取关':'关注'"></u-button>
							</view>
						</view>
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
				userInfo: {
					avatar: '',
					name: '大狸子',
					type: '个体商户',
					isFollow: false,
					fans: 10,
				},
				background: '/static/image/back.jpg'
			}
		},
		onLoad() {

		},
		methods: {

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