// 查看图片
function seeImg(idx, imgList) {
	uni.previewImage({
		current: idx,
		urls: imgList
	});
}
export default {
	seeImg,Format
}
