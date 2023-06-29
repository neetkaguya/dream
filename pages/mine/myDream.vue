<template>
	<view :style="skin">
		<view class="mx-3">
			<u--form :borderBottom="false" labelPosition="left" :model="form" :rules="rules" ref="uForm">
				<u-form-item>
					<view class="border rounded-2 p-3 d-flex ">
						<view class="ml-auto mr-auto a-center c-flex">
							<u-icon name="plus" size="50"></u-icon>
							<view class="mt-2">
								<u-text text="添加视频"></u-text>
							</view>
						</view>
					</view>
				</u-form-item>
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
				<u-form-item>
					<u-subsection mode="button" @change="sectionChange" :list="typeList"
						:current="typeIndex"></u-subsection>
				</u-form-item>
				<u-form-item label="项目类型">
					
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
					video: '',


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
				typeIndex: 0,
				typeList: ['公司', '个体户', '项目'],
				plateList: ['梦想', '日常', '经验', '问答'],
				rules: [],
			}
		},
		methods: {
			sectionChange(index) {
				this.typeIndex = index;
			},
		}
	}
</script>

<style>

</style>