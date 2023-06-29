<template>
	<view :style="skin">
		<view class="mt-2 mb-2 p-3 border rounded-2 mx-2 c-flex">
			<view>
				<u-text text="钱包"></u-text>
			</view>
			<view>
				<u-text :text="money"></u-text>
			</view>
		</view>
		<view class="p-3 border rounded-2 mx-2 c-flex">
			<view>
				<u-text text="能量币"></u-text>
			</view>
			<view>
				<u-text :text="energy"></u-text>
			</view>
		</view>
		<view class="mt-2 p-3 border rounded-2 mx-2 c-flex" @click="goMyCharge">
			<view>
				<u-text text="我的充电"></u-text>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: 1.21,
				energy: 114514
			}
		},
		methods: {
			goMyCharge() {
				uni.$u.route('/pages/mine/myCharge')
			}
		}
	}
</script>

<style>

</style>