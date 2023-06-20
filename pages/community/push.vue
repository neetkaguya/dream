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
				<u-form-item prop="image">
					<view class="c-flex position-relative">
						<view>
							<u-album space="10" maxCount="8" multipleSize="110" :urls="form.image"></u-album>
						</view>
						<view class="position-absolute d-flex"
							style="width: 220rpx;height: 220rpx;background-color: #eee; bottom: 0;right: 0; ">
							<u-icon class="ml-auto mr-auto" size="50" name="plus"></u-icon>
						</view>
					</view>
				</u-form-item>
				<u-form-item prop="tag">
					<!-- <tag> -->
					<view class="d-flex ">
						<u-tag icon="attach" shape="circle" :plain="true" :text="form.tag"></u-tag>
					</view>
				</u-form-item>
				<u-form-item labelWidth="150rpx" prop="plateId" label="发布板块">
					<u-radio-group v-model="form.plateId">
						<u-radio :customStyle="{marginRight: '20rpx'}" v-for="(item,index) in plateList" :key="index"
							:label="item" :name="item" @change="radioChange"></u-radio>
					</u-radio-group>
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
					tag: '添加话题',
					plateId: '',
					image: ['https://cdn.uviewui.com/uview/album/1.jpg',
						'https://cdn.uviewui.com/uview/album/2.jpg',
						'https://cdn.uviewui.com/uview/album/3.jpg',
						'https://cdn.uviewui.com/uview/album/4.jpg',
						'https://cdn.uviewui.com/uview/album/5.jpg',
						'https://cdn.uviewui.com/uview/album/6.jpg',
						'https://cdn.uviewui.com/uview/album/7.jpg',
						'https://cdn.uviewui.com/uview/album/8.jpg',
					],
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