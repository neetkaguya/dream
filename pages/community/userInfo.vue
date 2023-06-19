<template>
	<view :style="skin">
		<view class="topBack" style="height: 400rpx; " :style="{'background':'url('+background+') '}"></view>
		<view class="mx-2 mt-2">
			<view class="border rounded-2 c-flex  p-3 ">
				<view class="d-flex a-center">
					<u-avatar :src="getBackSrc(userInfo.avatar)"></u-avatar>
					<view class="d-flex w-100">
						<view class="d-flex ml-3 w-100 a-center">
							<view>
								<u-text :text="userInfo.name"> </u-text>
							</view>
							<view class="ml-auto c-flex a-center">
								<view class="d-flex mb-1">
									<view>
										<u-text :block="true" width="200" word-wrap="break-word" text="粉丝"></u-text>
									</view>
									<view>
										<u-text :block="true" color="var(--nav-red)" :text="userInfo.fans"> </u-text>
									</view>
									<view>
										<u-text :block="true" text="个"></u-text>
									</view>
								</view>
								<view class="ml-auto">
									<u-button size="mini" type="primary" shape="circle"
										:text="userInfo.isFollow?'取关':'关注'"></u-button>
								</view>
							</view>
						</view>

					</view>
				</view>
				<view class="mt-2">
					<u-text :text="userInfo.info"></u-text>
				</view>
				

			</view>
			<view class="mt-2">
				<u-subsection mode="button" @change="sectionChange" :list="dynamicList"
					:current="currIndex"></u-subsection>
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
					info: '这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介这是大狸子的简介'
				},
				background: '/static/image/back.jpg',
				dynamicList: ['发布的项目', '动态'],
				currIndex: 0,
			}
		},
		onLoad() {

		},
		methods: {
			sectionChange(index) {
				this.currIndex = index
			}
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