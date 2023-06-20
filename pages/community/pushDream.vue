<template>
	<view :style="skin">
		<view class="mx-3">
			<u--form :borderBottom="false" labelPosition="left" :model="form" :rules="rules" ref="uForm">
				<u-form-item :borderBottom="false" prop="title">
					<u--input custom-style="border:1px solid var(--nav-darkGrey)" shape="square" placeholder="请输入标题"
						v-model="form.title" border="surround"></u--input>
				</u-form-item>
				<u-form-item prop="content">
					<u-textarea custom-style="border:1px solid var(--nav-darkGrey)" border="surround"
						v-model="form.content" count placeholder="请输入内容"></u-textarea>
				</u-form-item>

				<u-form-item prop="type">
					<u--input custom-style="border:1px solid var(--nav-darkGrey)" shape="square" placeholder="请输入类型"
						v-model="form.type" border="surround"></u--input>
				</u-form-item>
				<u-form-item prop="tag">
					<u--input custom-style="border:1px solid var(--nav-darkGrey)" shape="square" placeholder="请输入标签"
						v-model="form.tag" border="surround"></u--input>
				</u-form-item>
				<u-form-item>
					<u-button text="发布" type="primary"></u-button>
				</u-form-item>
			</u--form>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					title: '',
					content: '',
					tag: '',
					type: ''

				},
				plateList: ['梦想', '日常', '经验', '问答'],
				rules: [],
			}
		},
		onReady() {
			//onReady 为uni-app支持的生命周期之一
			this.$refs.uForm.setRules(this.rules)
		},
		methods: {
			radioChange(index) {
				console.log(index)
			}
		}
	}
</script>

<style>

</style>