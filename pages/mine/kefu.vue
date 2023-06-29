<template>
	<view :style="skin">
		<view class="d-flex a-center position-fixed bg-white w-100" style="bottom: 0;height: 100rpx;">
			<view class="ml-1 mr-2">
				<u-input :custom-style="inputStyle"></u-input>
			</view>
			<view>
				<u-icon size="30" name="plus"></u-icon>
			</view>
			<view class="ml-auto mr-1">
				<u-button text="发送" type="primary"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputStyle: {
					'background-color': '#eeeeee',
					'width': '500rpx',
				}
			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #eeeeee;
	}
</style>