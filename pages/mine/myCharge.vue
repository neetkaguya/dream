<template>
	<view :style="skin">
		<view class="mt-2 mb-2 p-3 border rounded-2 mx-2 d-flex a-center" v-for="(item,index) in list" :key="index">
			<view>
				<u-text :text="item.name"></u-text>
			</view>
			<view class="c-flex ml-auto a-end">
				<view>
					<u-text text="收益"></u-text>
				</view>
				<view>
					<u-text :text="item.money"></u-text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '梦想计划1',
					money: 114514
				}, {
					name: '梦想计划2',
					money: 114514
				}, {
					name: '梦想计划3',
					money: 114514
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>