<template>
	<view :style="skin">
		<view class="mt-2 c-flex  mx-2">
			<u-textarea custom-style="border:1px solid var(--nav-darkGrey)" border="surround" v-model="content" count
				placeholder="请输入内容"></u-textarea>
			<view class="ml-auto mr-auto mt-2">
				<u-image :src="qrcode"></u-image>
			</view>
			<view class="mt-2">
				<u-button text="提交" type="primary"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				qrcode: '',
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>