const install = (Vue, vm) => {

	function getBackSrc(img) {

		if (!img) {
			return null;
		}
		if (img.startsWith('http') || img.startsWith('https')) {
			return img;
		} else {
			// console.log(vm.$store.state.apiRes + img)
			// return vm.$store.state.resUrl + img;
			return vm.$store.state.apiUrl + '/' + img;
		}
	}

	function getImgSrc(img) {

		if (!img) {
			return null;
		}
		if (img.startsWith('http') || img.startsWith('https')) {
			return img;
		} else {
			// console.log(vm.$store.state.resUrl + img)
			// return vm.$store.state.resUrl + img;
			return vm.$store.state.resUrl + img;
		}
	}

	function getBackgroundImg() {
		return vm.$store.state.resUrl + 'static/background.png';
	}


	///分钟转小时
	function toHoursAndMinutes(totalMinutes) {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		return `${hours}h${minutes > 0 ? ` ${minutes.toFixed(0)}m` : ''}`;
	}

	///分钟转小时
	function toHoursAndMinutesAndSecond(totalHours) {
		const second = totalHours * 3600;
		const hours = Math.floor(second / 3600);
		const minutes = second / 60;
		return `${hours >0?`${hours}h`:'0h' }${minutes > 0 ? ` ${minutes.toFixed(0)}m` : ''}`;
	}

	//查看大图,imgList可传入字符串或数组
	function previewImageInfo(imgList, index, name) {
		let _this = this
		if (!index) {
			index = 0
		}
		if (vm.$u.test.empty(imgList)) {
			return
		}
		//是数组
		if (vm.$u.test.array(imgList)) {
			let list = [];
			imgList.forEach((item, index) => {
				// console.log(item)
				if (!vm.$u.test.isEmpty(name)) {
					list[index] = this.getBackSrc(item[name])
				} else {
					list[index] = this.getBackSrc(item)
				}
			})
			uni.previewImage({
				current: index,
				urls: list
			})
		} else {
			//是字符串
			let list = [];
			list[0] = this.getBackSrc(imgList)
			uni.previewImage({
				current: index,
				urls: list
			})
		}
	}

	function yearTime(e) {
		var a = new Date();
		var y = a.getFullYear();
		var m = a.getMonth() + 1;
		m = m < 10 ? "0" + m : m;
		var d = a.getDate();
		d = d < 10 ? "0" + d : d;

		var h = a.getHours();
		h = h < 10 ? "0" + h : h;
		var mm = a.getMinutes();
		mm = mm < 10 ? "0" + mm : mm;
		var s = a.getSeconds();
		s = s < 10 ? "0" + s : s;

		if (e == 'year') {
			return y + '/' + m + '/' + d;
		}
		if (e == 'time') {
			return h + ':' + mm + ':' + s;
		}
		if (e == 'yearTime') {
			return y + '/' + m + '/' + d + '  ' + h + ':' + mm + ':' + s;
		}
		return y + '/' + m + '/' + d;
	}

	function getWeek() {
		var a = new Date();
		var h = a.getDay() - 1;
		var we = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期七']
		return we[h]
	}

	function appleTime() {
		// 苹果时间
		var end = Date.now()
		var start = 1000 * 60 * 60 * 8
		var interval = end + start; //结束 - 开始 = 毫秒值
		var a = new Date(interval);
		var y = a.getFullYear();
		var m = a.getMonth() + 1;
		m = m < 10 ? "0" + m : m;
		var d = a.getDate();
		d = d < 10 ? "0" + d : d;

		var h = a.getHours();
		h = h < 10 ? "0" + h : h;
		var mm = a.getMinutes();
		mm = mm < 10 ? "0" + mm : mm;
		var s = a.getSeconds();
		s = s < 10 ? "0" + s : s;

		return y + '/' + m + '/' + d + '  ' + h + ':' + mm + ':' + s;
	}

	function goHomePage() {
		console.log('回家')
		uni.switchTab({
			url: '/pages/home/mine'
		})
	}

	function getTimeSlot(startTime, endTime) {
		let str;
		const startTimeMs = new Date(startTime).setHours(0, 0, 0, 0);
		const endTimeMs = new Date(endTime).setHours(0, 0, 0, 0);
		if (startTimeMs === endTimeMs) {
			str = vm.$u.timeFormat(startTime, 'yyyy-mm-dd hh:MM') + ' ' + vm.$u.timeFormat(endTime, 'hh:MM')
		} else {
			str = vm.$u.timeFormat(startTime, 'yyyy-mm-dd hh:MM') + ' ' + vm.$u.timeFormat(endTime,
				'yyyy-mm-dd hh:MM')
		}
		return str;
	}


	function groupBy(array, id) {
		let groups = {};
		array.forEach(function(o) {
			let group = JSON.stringify(o[id]);
			groups[group] = groups[group] || [];
			groups[group].push(o);
		});
		return Object.values(groups);
	}


	function SetPaobuBar() {
		uni.setTabBarItem({
			index: 0,
			text: '地图',
			iconPath: '/static/shouye-jd_slices/ditu.png',
			selectedIconPath: '/static/shouye-jd_slices/ditu.png',
			pagePath: '/pages/home/ditu',
		})
		uni.setTabBarItem({
			index: 1,
			text: '排行榜',
			iconPath: '/static/shouye-jd_slices/Num.png',
			selectedIconPath: '/static/shouye-jd_slices/Num.png',
			pagePath: '/pages/home/test',
		})
		uni.setTabBarItem({
			index: 2,
			text: '跑步',
			iconPath: '/static/shouye-jd_slices/run.png',
			selectedIconPath: '/static/shouye-jd_slices/run.png',
			pagePath: '/pages/paobu/paobu',
		})
		uni.setTabBarItem({
			index: 3,
			text: '我的',
			iconPath: '/static/shouye-jd_slices/me.png',
			selectedIconPath: '/static/shouye-jd_slices/me.png',
			pagePath: '/pages/paobu/fenxiang',
		})
	}

	function SetlanqiuBar() {

		uni.setTabBarItem({
			index: 0,
			"text": "跑步",
			"pagePath": "pages/home/ditu",
			"iconPath": "/static/tab/paobu_0.png",
			"selectedIconPath": "/static/tab/paobu_1.png"
		})
		uni.setTabBarItem({
			index: 1,
			"text": "球场",
			"pagePath": "pages/home/qiuchang",
			"iconPath": "/static/tab/qiuchang_0.png",
			"selectedIconPath": "/static/tab/qiuchang_1.png"
		})
		uni.setTabBarItem({
			index: 2,
			"text": "体测",
			"pagePath": "pages/home/tice",
			"iconPath": "/static/tab/tice_0.png",
			"selectedIconPath": "/static/tab/tice_1.png"
		})
		uni.setTabBarItem({
			index: 3,
			"text": "我的",
			"pagePath": "pages/home/mine",
			"iconPath": "/static/tab/wode_0.png",
			"selectedIconPath": "/static/tab/wode_1.png"
		})
	}

	Vue.prototype.getBackSrc = getBackSrc
	Vue.prototype.getImgSrc = getImgSrc
	Vue.prototype.toHoursAndMinutes = toHoursAndMinutes
	Vue.prototype.toHoursAndMinutesAndSecond = toHoursAndMinutesAndSecond
	Vue.prototype.previewImageInfo = previewImageInfo
	Vue.prototype.getBackgroundImg = getBackgroundImg
	Vue.prototype.yearTime = yearTime
	Vue.prototype.getWeek = getWeek
	Vue.prototype.appleTime = appleTime
	Vue.prototype.goHomePage = goHomePage
	Vue.prototype.getTimeSlot = getTimeSlot
	Vue.prototype.groupBy = groupBy
	Vue.prototype.SetPaobuBar = SetPaobuBar
	Vue.prototype.SetlanqiuBar = SetlanqiuBar
}

export default {
	install
}