<template>
	<view :style="skin">
		<view class="mx-2 mt-2">
			<view class="  d-flex a-center p-3 " @click="goUserInfo">
				<u-avatar :src="getBackSrc(topicInfo.avatar)"></u-avatar>
				<view class="d-flex">
					<view class="c-flex ml-3">
						<text> {{topicInfo.name}}</text>
						<text class="font-mt text-grey"> {{ topicInfo.updateTime | timeFormat}}</text>
					</view>

				</view>
				<view class="ml-auto">
					<u-button type="primary" shape="circle" :text="topicInfo.isFollow?'取关':'关注'"></u-button>
				</view>
			</view>
		</view>
		<view>
			<u-line></u-line>
		</view>
		<view class="mx-2 mt-2 c-flex">
			<view class=" c-flex mb-4  p-3 rounded-2 ">
				<view class="d-flex py-1">
					<u-tag icon="#" shape="circle" :plain="true" :text="topicInfo.tag"></u-tag>
				</view>
				<u--text margin="0 0 8px 0" :text="topicInfo.content"></u--text>
				<u-album :multipleSize="90" :urls="topicInfo.albumList"></u-album>
				<view class="d-flex text-grey mt-1">
					<view class="mr-1">
						<u-text text="ip属地"></u-text>
					</view>
					<view>
						<u-text :text="topicInfo.place"></u-text>
					</view>
				</view>


			</view>
		</view>
		<view class=" d-flex px-4">
			<view class="d-flex">
				<view>
					<u-text :block="true" :text="topicInfo.commentCount"></u-text>
				</view>
				<view>
					<u-text :block="true" text="条评价"></u-text>
				</view>
			</view>
			<view class="ml-auto">
				<u-text :block="true" text="热门"></u-text>
			</view>
		</view>
		<view class="c-flex mx-2 mt-2">
			<view class=" border-bottom c-flex p-2 mb-2" v-for="(item,index) in topicInfo.comment"
				:key="index">
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
		<view class="" style="height: 100rpx;">

		</view>
		<view class="position-fixed border shadow-lg w-100 bg-white d-flex" style="height: 70rpx;bottom: 0rpx;">
			<view class="" style="width: 80%;">
				<u-input placeholder="请输入内容" :custom-style="inputStyle" v-model="inputContent"></u-input>
			</view>
			<view class="" style="width: 20%;">
				<u-button type="primary" text="发送"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputContent: '1111111',
				inputStyle: {
					backgroundColor: '#eeeeee',
					// border:'1px solid #000000'
				},
				topicInfo: {

					avatar: '',
					name: '大狸子1',
					tag: '工作那点事儿',
					isFollow: false,
					type: '个体',
					content: '大狸子1的梦想xxxxxxx',
					updateTime: '2023-06-17 14:52:00',
					likeList: ['小狸子', '中狸子'],
					likeCount: 199,
					commentCount: 200,
					place: '火星',
					comment: [{
							name: '小狸子',
							content: '噢噢噢噢噢噢噢噢！',
							avatar: '',
						},
						{
							name: '中狸子',
							content: '俺觉得挺好的',
							avatar: '',
						}
					],
					albumList: ['https://cdn.uviewui.com/uview/album/1.jpg',
						'https://cdn.uviewui.com/uview/album/2.jpg',
						'https://cdn.uviewui.com/uview/album/3.jpg',
						'https://cdn.uviewui.com/uview/album/4.jpg',
						'https://cdn.uviewui.com/uview/album/5.jpg',
						'https://cdn.uviewui.com/uview/album/6.jpg',
						'https://cdn.uviewui.com/uview/album/7.jpg',
						'https://cdn.uviewui.com/uview/album/8.jpg',
						'https://cdn.uviewui.com/uview/album/9.jpg',
						'https://cdn.uviewui.com/uview/album/10.jpg',
					]

				}
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>