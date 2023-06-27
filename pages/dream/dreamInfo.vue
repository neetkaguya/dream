<template>
	<view :style="skin">
		<view class="w-100 d-flex">
			<video class="w-100" :src="getBackSrc(dreamInfo.videoSrc)"></video>
		</view>
		<view class="rounded-2 bg-white py-2 px-3 d-flex a-center mt-2 mx-2 border">
			<u-avatar></u-avatar>
			<view class="c-flex ml-3">
				<text> {{userInfo.name}}</text>
				<text class="font-mt text-grey"> {{userInfo.type}}</text>
			</view>
			<view class="ml-auto">
				<u-button type="primary" shape="circle" :text="userInfo.isFollow?'取关':'关注'"></u-button>
			</view>
		</view>
		<view class="mx-2 bg-white mt-2 d-flex  p-2 border rounded-2" @click="goPaihang">
			<u-line-progress type="success" height="30" :showText="false"
				:percentage="(dreamInfo.currProgress/dreamInfo.totalProgress) * 100">
				<text class="ml-auto mr-auto">{{dreamInfo.currProgress}} / {{dreamInfo.totalProgress}}</text>
			</u-line-progress>
			<!--  -->
		</view>
		<view class="mx-2 mt-2">
			<u-subsection mode="subsection" @change="sectionChange" :list="list" :current="currIndex"></u-subsection>
		</view>
		<view v-if="currIndex==0">
			<view class="rounded-2 bg-white mx-2 mt-2 p-2 border " style="min-height: 600rpx;">
				<u-parse :content="content"></u-parse>

			</view>

			<view class="d-flex mx-2 mt-2 pb-2">
				<u-button class="" type="primary" text="聊一下"></u-button>
				<u-button @click="goFlyDream" class="" type="error" text="充电"></u-button>
			</view>
		</view>
		<view v-else class=" mt-2">
			<view class="mx-2">
				<text class="font-me pb-2">{{commentList.count}}条评论</text>
				<view class="border rounded-2 p-2 mb-2 c-flex" v-for="(item,index) in commentList.list" :key="index">
					<view class="d-flex a-center">
						<view class="d-flex a-center">
							<u-avatar :src="item.avatar"></u-avatar>
							<view class="ml-2">
								<u-text :text="item.name"></u-text>
							</view>
						</view>
						<view class="ml-auto">
							<u-icon name="more-dot-fill"></u-icon>
						</view>
					</view>
					<view class="my-2">
						<u-text :text="item.content"></u-text>
					</view>
					<view class="ml-auto d-flex">
						<view class="mr-4">
							<u-text text="回复"></u-text>
						</view>
						<view>
							<u-text text="点赞"></u-text>
						</view>
					</view>
				</view>
			</view>
			<view class="position-fixed w-100" style="bottom: 0;">
				<u-button type="primary" text="充电后解锁"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dreamInfo: {
					dreamId: '',
					videoSrc: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
					currProgress: 50000,
					totalProgress: 100000,
				},
				userInfo: {
					avatar: '',
					name: '大狸子',
					type: '个体商户',
					isFollow: false,
				},
				commentList: {
					count: 121,
					list: [{
						avatar: '',
						name: '大狸子1',
						content: '噢噢噢噢噢噢噢噢噢噢噢噢噢',
						money: 10
					}, {
						avatar: '',
						name: '大狸子2',
						content: '嘎嘎嘎嘎嘎嘎嘎嘎',
						money: 20
					}]
				},
				list: ['介绍', '评论'],
				currIndex: 0,
				content: `<p>This is a paragraph of text.</p>
<p>This is another paragraph of text.</p>
<ul>
  <li>This is a list item.</li>
  <li>This is another list item.</li>
</ul>
<p><strong>This text is bold.</strong></p>
<p><em>This text is italicized.</em></p>
<p><a href="https://www.example.com">This is a link</a></p>
<img src="https://picsum.photos/400/400?random=1" width="300" height="150"></>
`
			}
		},
		onLoad(options) {
			this.dreamInfo.dreamId = options.dreamId
		},
		methods: {
			sectionChange(index) {
				this.currIndex = index;
			},
			goPaihang() {
				console.log(11)
				uni.$u.route('/pages/dream/paihang', {
					dreamId: this.dreamInfo.dreamId
				})
			},
			goFlyDream() {
				uni.$u.route('/pages/dream/flyDream', {
					dreamId: this.dreamInfo.dreamId
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		// background-color: #eeeeee;
	}
</style>