<template>
	<view :style="skin">
		<view class="mx-2 mt-2">
			<view class="border rounded-2 d-flex a-center p-3 " @click="goUserInfo">
				<u-avatar :src="getBackSrc(userInfo.avatar)"></u-avatar>
				<view class="d-flex">
					<view class="c-flex ml-3">
						<text> {{userInfo.name}}</text>
						<text class="font-mt text-grey"> {{userInfo.type}}</text>
					</view>

				</view>
				<view class="ml-auto">
					<u-button type="primary" shape="circle" :text="userInfo.isFollow?'取关':'关注'"></u-button>
				</view>
			</view>
		</view>
		<view class="my-5">
			<u-line :hairline="false" class="my-5"></u-line>
		</view>
		<view class="rounded-2 border shadow mx-2 p-3" style="height: 500rpx;">
			<u-text :text="info"></u-text>
		</view>
		<view class="mt-5   flex-1">
			<u-button :customStyle="{'width':'33%'}" type="primary" size="normal" text="聊一下"></u-button>
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
				},
				info: '我是一个一个一个一个招聘简历，我要招聘哼哼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
			}
		},
		methods: {
			goUserInfo() {
				uni.$u.route('/pages/community/userInfo', {
					userId: this.userInfo.userId
				})
			}
		}
	}
</script>

<style>

</style>