<template>
	<view :style="skin">
		<view class="">
			<u-subsection mode="button" @change="sectionChange" :list="topList" :current="currIndex"></u-subsection>
		</view>
		<view class="c-flex mt-2">
			<view class="border rounded-2 p-3 mx-2 mb-2 d-flex a-center">
				<u-icon name="bell" size="30"></u-icon>
				<view class="c-flex ml-3">
					<text class="text-grey">系统消息</text>
				</view>
			</view>
			<view class="border rounded-2 mx-2 mb-2 d-flex p-3 a-center" v-for="(item,index) in messageList"
				:key="index">
				<u-avatar :src="getBackSrc(item.avatar)"></u-avatar>
				<view class="c-flex ml-3">
					<text class="">{{item.name}}</text>
					<view class="d-flex a-center mt-1">
						<text class="text-grey font-mt mr-2">{{item.content}}</text>

					</view>
				</view>
				<view class="ml-auto">
					<u-badge type="error" max="99" :value="item.redCount"></u-badge>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currIndex: 0,
				topList: ['聊天', '圈子'],
				messageList: [{
					messageId: 1,
					avatar: '',
					name: '大狸子1',
					content: '你好，聊骚啊',
					redCount: 1
				}, {
					messageId: 2,
					avatar: '',
					name: '大狸子2',
					content: '不好不好啊啊啊啊啊',
					redCount: 2
				}, {
					messageId: 3,
					avatar: '',
					name: '大狸子3',
					content: '咕咕咕咕咕咕咕咕咕',
					redCount: 3
				}]
			}
		},
		methods: {
			sectionChange(index) {
				if (index == 1) {
					uni.$u.toast('暂未开放')
				} else {
					this.currIndex = index;
				}

			}
		}
	}
</script>

<style>

</style>