<template>
	<view :style="skin">
		<view class="">
			<u-subsection mode="button" @change="sectionChange" :list="topList" :current="currIndex"></u-subsection>
		</view>
		<view v-if="currIndex==0">
			<view class="mb-2 p-2 c-flex" v-for="(item,index) in dreamList" :key="index">
				<view class="d-flex">
					<view class="d-flex">
						<u-text :text="item.name"></u-text>
					</view>
					<view class="d-flex">
						<u-text text="的梦想"></u-text>
					</view>
				</view>
				<view class="d-flex a-center mt-1">
					<text class="font-sm mr-2">{{item.type}}</text>
					<u-line-progress :percentage="(item.currProgress / item.totalProgress) * 100"></u-line-progress>
				</view>
				<view>
					<text class="font-sm">参与人数:{{item.count}}人</text>
				</view>
				<view class="d-flex font-sm">
					<text class="">天使:{{item.angel}}个</text>
					<text class="ml-auto">状态：{{item.status}}</text>
				</view>
			</view>
		</view>
		<view v-if="currIndex==1">
			<view class="mb-2 p-2 c-flex" v-for="(item,index) in progressList" :key="index">
				<view class="d-flex">
					<view class="d-flex">
						<u-text :text="item.name"></u-text>
					</view>
					<view class="d-flex">
						<u-text text="的梦想"></u-text>
					</view>
				</view>
				<view class="d-flex a-center my-1 font-sm">
					<text>{{item.type}}第一轮次</text>
				</view>
				<view class="d-flex font-sm">
					<text class="">{{item.time}}人</text>
					<text class="ml-auto">+{{item.money}}</text>
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
				topList: ['充电中', '放款进度'],
				dreamList: [{
						name: '大漓子1',
						type: 'A轮',
						currProgress: 50000,
						totalProgress: 100000,
						count: 2000,
						angel: 1,
						status: '充电中'
					},
					{
						name: '大漓子2',
						type: 'A轮',
						currProgress: 50000,
						totalProgress: 100000,
						count: 2000,
						angel: 1,
						status: '充电中'
					}
				],
				progressList: [{
					name: '大漓子1',
					type: 'A轮',
					time: '2023-7-2 00:04:24',
					money: 10000
				}, {
					name: '大漓子2',
					type: 'A轮',
					time: '2023-7-2 00:04:24',
					money: 20000
				}, ]
			}
		},
		methods: {
			sectionChange(index) {
				this.currIndex = index;
			}
		}
	}
</script>

<style>

</style>