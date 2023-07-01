<template>
	<view :style="skin">
		<view class="mx-3">
			<u--form labelWidth="150rpx" :borderBottom="false" labelPosition="left" :model="form" :rules="rules"
				ref="uForm">
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
							style="width: 200rpx;height: 200rpx;background-color: #eee; bottom: 0;right: 0; ">
							<u-icon class="ml-auto mr-auto" size="50" name="plus"></u-icon>
						</view>
					</view>
				</u-form-item>
				<u-form-item label="企业类型">
					<u-radio-group v-model="form.groupType" placement="row" @change="groupChange">
						<u-radio :customStyle="{marginRight: '8px'}" v-for="(item, index) in groupList" :key="index"
							:label="item.name" :name="item.name">
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="项目类型" borderBottom prop="form.projectType">
					<u-input border="none" placeHolder="请填写项目类型" v-model="form.projectType"></u-input>
				</u-form-item>
				<u-form-item label="标签" borderBottom prop="form.tag">
					<u-input border="none" placeHolder="请填写标签" v-model="form.tag"></u-input>
				</u-form-item>
				<u-form-item label="微信" borderBottom prop="form.projectType">
					<u-input border="none" placeHolder="请填写微信" v-model="form.projectType"></u-input>
				</u-form-item>
				<u-form-item label="手机号" borderBottom prop="form.projectType">
					<u-input border="none" placeHolder="请填写手机号" v-model="form.projectType"></u-input>
				</u-form-item>
				<u-form-item label="对公账户" borderBottom prop="form.projectType">
					<u-input border="none" placeHolder="请填写对公账户" v-model="form.projectType"></u-input>
				</u-form-item>
				<u-form-item label="理想金额" borderBottom prop="form.projectType">
					<u-input border="none" placeHolder="请填写理想金额" v-model="form.projectType"></u-input>
				</u-form-item>
				<u-form-item label="营业执照" borderBottom prop="form.projectType">
					<view class="border p-2">
						<u-icon name="plus" size="40" label="点击上传" labelPos="bottom"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label="身份证" borderBottom prop="form.projectType">
					<view class="border p-2">
						<u-icon name="plus" size="40" label="点击上传" labelPos="bottom"></u-icon>
					</view>
				</u-form-item>
				<u-form-item>
					<u-button text="发布" type="primary" @click="onsubmit"></u-button>
				</u-form-item>
			</u--form>
		</view>
		<view class="">
			<u-popup :customStyle="popStyle" :show="showNotice" mode="center" :round="10">
				<view class="p-3 c-flex h-100">

					<view class="mt-2">
						<u-text :text="bossSay"></u-text>
					</view>
					<view class="mt-auto" style="">
						<u-button type="primary" text="我知道了" @click="iknow"></u-button>
					</view>
				</view>
			</u-popup>
		</view>
		<view class="">
			<u-modal :show="showZhengce" @confirm="push" confirmText="发布项目">
				<view class="c-flex">
					<view class="ml-auto mr-auto">
						<text>{{zhengce}}</text>
					</view>
					<view class="d-flex mt-5">
						<u-checkbox :customStyle="{marginBottom: '8px'}" label="我已阅读并同意用户协议,隐私政策和免责声明" name="true"
							@change="">
						</u-checkbox>

					</view>
				</view>

			</u-modal>
		</view>
		<view class="">
			<u-popup :show="showPay" mode="bottom" :round="10" :closeable="true" @close="showPay = false">
				<view class="p-3 c-flex h-100">
					<text class="ml-auto mr-auto">微信支付</text>
					<view>
						<text class="font-me">{{payInfo}}</text>
					</view>
					<view class=" d-flex my-2">

						<view class="d-flex">
							<u-icon name="weixin-fill"></u-icon>
							<u-text text="微信支付"></u-text>
						</view>
						<view class="ml-auto">
							<u-radio v-model="radioYes">
							</u-radio>
						</view>
					</view>
					<view class="mt-auto" style="">
						<u-button type="primary" text="支付" @click="goPaySuccess"></u-button>
					</view>
				</view>
			</u-popup>
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
					groupType: '',
					projectType: '',
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
				popStyle: {
					width: '600rpx',
					'min-height': '1000rpx'
				},
				bossSay: '老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话老板说的话',
				showNotice: true,
				showZhengce: false,
				showPay: false,
				groupList: [{
						name: '公司'
					},
					{
						name: '个体户'
					}, {
						name: '项目'
					}
				],
				zhengce: '法律免责',
				radioYes: true,
				plateList: ['梦想', '日常', '经验', '问答'],
				rules: [],
				isPlain: true,
				payInfo: `500+5%理想金额的钱付款后提交审核此时没有付款，刚才编辑的项目内容会保存在我的项目中等待付款如果付款了也会出现在我的项目中查看进程`
			}
		},
		methods: {
			groupChange(index) {
				this.form.groupType = index
				console.log(index);
			},
			iknow() {
				this.showNotice = false;
			},
			onsubmit() {
				this.showZhengce = true;
			},
			radioChange(index) {
				console.log(index)
			},
			push() {
				this.showPay = true;
				this.showZhengce = false;
			},
			goPaySuccess() {
				uni.$u.route('/pages/mine/paySuccess')
			}
		}
	}
</script>

<style>

</style>