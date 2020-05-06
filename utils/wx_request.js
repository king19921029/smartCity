let host = "http://jinbizx.com/ccos/api/wj/wechat/rest"
// 公共请求参数
let configData = {}
// 获取header
function getHeader(method, isJson) {
	if (method == "POST") {
		if (isJson) {
			return {
				"authorization": uni.getStorageSync("token"),
				'Content-type': 'application/json',
			}
		} else {
			return {
				"authorization": uni.getStorageSync("token"),
				"Content-type": "application/x-www-form-urlencoded",
			}
		}

	}
	if (method == "GET") {
		return {
			'Content-type': 'application/json',
			"authorization": uni.getStorageSync("token"),
		}
	}
}

// 小程序请求数据的方法
function request(url, method, data, noLoading, isJson) {
	if (!noLoading) {
		uni.showLoading({
			title: "正在加载..."
		});
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: host + url,
			method: method,
			data: data,
			header: getHeader(method, isJson),
			success: function(res) {
				if (res.data.code == 0) {
					uni.hideLoading();
					resolve(res.data)
				} else if (res.data.code == 10001) {
					uni.removeStorageSync("token")
					uni.hideLoading();
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 1000
					})
					uni.navigateTo({
						url: "/pages/wxLogin/wxLogin.vue"
					})
					reject(res)
				} else {
					uni.hideLoading();
					uni.showToast({
						title: res.data.msg || res.data.message,
						icon: 'none',
						duration: 1000
					})
					reject(res)
				}
			},
			fail: function(res) {
				uni.hideLoading();
			},
			complete: function() {

			},

		})
	})
}

function uploadFileAjax(url, filePath, data, fileName) {
	uni.showLoading({
		title: "正在加载..."
	});
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: uploadFileUlr + url,
			header: getHeader(),
			filePath: filePath,
			name: encodeURI(fileName),
			formData: data,
			success: (res) => {
				// console.log(res.data)
				// console.log(res.statusCode)
				if (res.statusCode == 200) {
					uni.hideLoading();
					resolve(res.data)

				} else {
					uni.hideLoading();
					uni.showToast({
						title: res.data.msg || res.data.message,
						icon: 'none',
						duration: 1000
					})
					reject(res)
				}
			},
			fail: function(res) {
				console.log(res)
				uni.hideLoading();
			},
		});
	})
}

function get(obj) {
	let noLoading = obj.noLoading ? obj.noLoading : false
	return request(obj.url, 'GET', obj.data, noLoading)
}

function post(obj) {
	console.log(obj)
	let noLoading = obj.noLoading ? obj.noLoading : false
	let isJson = obj.isJson ? obj.isJson : false
	return request(obj.url, 'POST', obj.data, noLoading, isJson)
}

function uploadFile(obj) {
	let noLoading = obj.noLoading ? obj.noLoading : false
	return uploadFileAjax(obj.url, obj.filePath, obj.data, obj.name, noLoading)
}


export default {
	request,
	get,
	post,
	host,
	uploadFile,
}
