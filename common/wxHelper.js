//
//                  ___====-_  _-====___
//            _--^^^#####//      \\#####^^^--_
//         _-^##########// (    ) \\##########^-_
//        -############//  |\^^/|  \\############-
//      _/############//   (@::@)   \############\_
//     /#############((     \\//     ))#############\
//    -###############\\    (oo)    //###############-
//   -#################\\  / VV \  //#################-
//  -###################\\/      \//###################-
// _#/|##########/\######(   /\   )######/\##########|\#_
// |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
// `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
//    `   `  `      `   / | |  | | \   '      '  '   '
//                     (  | |  | |  )
//                    __\ | |  | | /__
//                   (vvv(VVV)(VVV)vvv)
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               神兽保佑            永无BUG


const install = (Vue, vm) => {

	/**
	 * 微信小程序登录
	 */
	function getWxData(backcall = null,type = null,shopId = null) {
		// #ifdef MP-WEIXIN
		if (vm.$store.state.isLogin == true) {
			return;
		}
		// if (vm.$store.state.isShowWxLogin == true) {
		// 	return;
		// }

		vm.$u.vuex('isShowWxLogin', true)
		uni.showModal({
			title: '温馨提示',
			content: '亲，授权微信登录后才能正常使用小程序功能',
			success(res) {
				//如果用户点击了确定按钮
				if (res.confirm) {
					uni.getUserProfile({
						desc: "获取头像昵称用于登录",
						lang: 'zh_CN',
						success: function(res) {
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									let code = loginRes.code;
									let userInfo = res.userInfo;
									let sendData = {
										code: code,
										nick: userInfo.nickName,
										headImg: userInfo.avatarUrl,
									}
									console.log(sendData)
									if (backcall) {
										vm.$u.vuex('isLogin', true)
										backcall(sendData);
									}
								}
							});
						},
						fail: function(r) {
							vm.$u.toast('登录失败，请重试')
							vm.$u.vuex('isShowWxLogin', false)
						},
					})

				} else if (res.cancel) {
					vm.$u.toast('您拒绝了请求,不能正常使用小程序')
					vm.$u.vuex('isShowWxLogin', false)
					return;
				}
			},
			/*  */
			fail() {
				vm.$u.vuex('isShowWxLogin', false)
			}
		});
		// #endif
	}

	/**
	 * 询问用户订阅
	 */
	function askUserTemplate(templateList) {
		wx.showModal({
			title: '温馨提示',
			content: '亲，订阅消息可以在微信收到实时通知',
			success(res) {
				//如果用户点击了确定按钮
				if (res.confirm) {
					wx.requestSubscribeMessage({
						tmplIds: templateList,
						success(data) {
							vm.$u.toast('订阅成功')
						},
						complete(data) {

						}
					})
				}
			}
		})
	}

	/**
	 * 微信登录获取code（静默授权）
	 */
	function wechatGetCode() {
		// 截取地址中的code，如果没有code就去微信授权，如果已经获取到code了就直接把code传给后台获取openId
		let code = decodeURIComponent((new RegExp('[?|&]' + 'code' + '=' + '([^&;]+?)(&|#|;|$)').exec(location
				.href) || [, ''])[1]
			.replace(/\+/g, '%20')) || null
		if (vm.$u.test.empty(code)) {
			let local = encodeURIComponent(window.location.href); //获取当前页面地址
			vm.setStorageSync('loginWX', true)
			let url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
				vm.$store.state.appid + ///你APP申请的APPId，每个app都有个ID是识别你app的方式
				"&redirect_uri=" +
				local +
				"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
			window.location.href = url;

			// redirect_uri是授权成功后，跳转的url地址，微信会帮我们跳转到该链接，并且通过？的形式拼接code，这里需要用encodeURIComponent对链接进行处理。
			// 如果配置参数一一对应，那么此时已经通过回调地址刷新页面后，你就会再地址栏中看到code了。
			// http://127.0.0.1/pages/views/profile/login/login?code=001BWV4J1lRzz00H4J1J1vRE4J1BWV4q&state=1
		} else {
			return code;
		}
	}

	function checkWxLogin() {
		if (vm.$store.state.isLogin) {
			return
		}
		let code = wechatGetCode();
		vm.$u.get('Wechat/AppLogin', {
			code: code
		}).then(res => {
			vm.$u.vuex('access_token', res.data.accessToken)
			vm.$u.vuex('refresh_token', res.data.refreshToken)
			vm.$u.vuex('isLogin', true)
		})
	}

	/**
	 * 获得模板列表
	 */
	function getWxTempList() {
		vm.$u.get('Wechat/GetTempList').then(res => {
			vm.$u.vuex('templateList', res.data)
		})
	}





	Vue.prototype.getWxData = getWxData;
	Vue.prototype.askUserTemplate = askUserTemplate;
	Vue.prototype.wechatGetCode = wechatGetCode;
	Vue.prototype.checkWxLogin = checkWxLogin;
	Vue.prototype.getWxTempList = getWxTempList;
}

export default {
	install
}
