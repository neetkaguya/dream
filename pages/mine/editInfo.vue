<template>
	<view :style="skin">
		<view class="mx-2">
			<u--form labelWidth="100" labelPosition="left" :model="form" :rules="rules" ref="uForm">
				<u-form-item>
					<view class="topBack d-flex w-100 px-3 a-center" style="height: 200rpx;"
						:style="{'background':'url('+form.background+') '}">
						<u-avatar class="mb-auto mt-auto" :src="form.avatar" size="50"></u-avatar>
						<view class="ml-auto">
							<u-button shape="circle" type="primary" size="" text="更换背景"></u-button>
						</view>
					</view>
				</u-form-item>
				<u-form-item label="姓名" prop="userInfo.name" borderBottom>
					<u--input v-model="form.name" border="none"></u--input>
				</u-form-item>
				<u-form-item label="简介" prop="userInfo.desc" borderBottom>
					<u--input v-model="form.desc" border="none"></u--input>
				</u-form-item>
				<u-form-item label="性别" prop="userInfo.sex" borderBottom @click="showSex = true; hideKeyboard()"
					ref="item">
					<u--input v-model="form.sex" disabled disabledColor="#ffffff" placeholder="请选择性别"
						border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="生日" prop="userInfo.birthday" borderBottom>
					<u--input v-model="form.birthday" border="none"></u--input>
				</u-form-item>
				<u-form-item label="所在地" prop="userInfo.address" borderBottom>
					<u--input v-model="form.address" border="none"></u--input>
				</u-form-item>
				<u-form-item label="邮箱" prop="userInfo.email" borderBottom>
					<u--input v-model="form.email" border="none"></u--input>
				</u-form-item>
				<u-form-item label="公司" prop="userInfo.company" borderBottom>
					<u--input v-model="form.company" border="none"></u--input>
				</u-form-item>
				<u-form-item label="手机号" prop="userInfo.mobile" borderBottom>
					<u--input v-model="form.mobile" border="none"></u--input>
				</u-form-item>
				<u-form-item label="微信号" prop="userInfo.wechat" borderBottom>
					<u--input v-model="form.wechat" border="none"></u--input>
				</u-form-item>
				<u-form-item>
					<u-button text="保存" type="primary"></u-button>
				</u-form-item>
			</u--form>
		</view>
		<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" description="如果选择保密会报错"
			@close="showSex = false" @select="sexSelect">
		</u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSex: false,
				form: {
					avatar: '',
					background: '/static/image/back.jpg',
					name: '大狸子',
					desc: '简介',
					sex: '男',
					birthday: '2000-3-14 00:00:00',
					address: '河南许昌',
					email: '123456798@qq.com',
					company: '大狸子公司',
					mobile: '12345678901',
					wechat: 'wechat',

				},
				actions: [{
						name: '男',
					},
					{
						name: '女',
					},
					{
						name: '保密',
					},
				],
				rules: []
			}
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.uForm.setRules(this.rules)
		},
		methods: {
			sexSelect(e) {
				this.form.sex = e.name
				this.$refs.uForm.validateField('userInfo.sex')
			},
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