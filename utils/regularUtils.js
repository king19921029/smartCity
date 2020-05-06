// 是否输入的全是空格
function isTwoNull(str) {
	if (str.match(/^[ ]*$/)) {
		return false;
	} else {
		return true;
	}
}
// 身份证
function isIdNum(idNum) {
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if (reg.test(idNum)) {
		return true;
	} else {
		return false;
	}
}
// 手机号
function isPhone(phone) {
	if (!(/^1[3456789]\d{9}$/.test(phone))) {
		return false;
	} else {
		return true;
	}
}
// 邮箱
function isEmail(email) {
	var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	if (reg.test(email)) {
		return true;
	} else {
		return false;
	}
}
module.exports = {
	isTwoNull: isTwoNull,
	isIdNum: isIdNum,
	isPhone:isPhone,
	isEmail:isEmail
}
