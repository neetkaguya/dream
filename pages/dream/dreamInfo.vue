<template>
	<view :style="skin">
		<view class="w-100 d-flex">
			<video class="w-100" :src="getBackSrc(dreamInfo.videoSrc)"></video>
		</view>
		<view class="rounded-2 bg-white py-2 px-3 d-flex a-center mt-2 mx-2">
			<u-avatar></u-avatar>
			<view class="c-flex ml-3">
				<text> {{userInfo.name}}</text>
				<text class="font-mt text-grey"> {{userInfo.type}}</text>
			</view>
			<view class="ml-auto">
				<u-button type="primary" shape="circle" :text="userInfo.isFollow?'取关':'关注'"></u-button>
			</view>
		</view>
		<view class="mx-2 bg-white mt-2 d-flex  p-2" @click="goPaihang">
			<u-line-progress type="success" height="30" :showText="false"
				:percentage="(dreamInfo.currProgress/dreamInfo.totalProgress) * 100">
				<text class="ml-auto mr-auto">{{dreamInfo.currProgress}} / {{dreamInfo.totalProgress}}</text>
			</u-line-progress>
			<!--  -->
		</view>
		<view class="mx-2 mt-2">
			<u-subsection mode="subsection" @change="sectionChange" :list="list" :current="currIndex"></u-subsection>
		</view>
		<view class="rounded-2 bg-white mx-2 mt-2 p-2" style="min-height: 600rpx;">
			<u-parse :content="content"></u-parse>
		</view>
		<view class="d-flex mx-2 mt-2">
			<u-button class="" type="primary" text="联系他"></u-button>
			<u-button @click="goFlyDream" class="" type="error" text="我投了!"></u-button>
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
				list: ['介绍', '动态'],
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
		background-color: #eeeeee;
	}

	.u-percentage-slot {
		padding: 1px 5px;
		background-color: $u-warning;
		color: #fff;
		border-radius: 100px;
		font-size: 10px;
		margin-right: -5px;
	}
</style>