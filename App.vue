<script>
	export default {
		globalData: {

		},
		onLaunch: function() {


		},

		onHide: function() {

		},
		methods: {
			// 调用示例
			async getUserInfo(code) {
				try {
					let data = await this.$wxhttp.post({
						url: '/xxxxxx',
					})
				} catch (e) {

				}
			}
		},
	}
</script>

<style lang="scss">
	// 系统栏
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background: #FFFFFF;
	}
	// 系统栏fixed
	.uni_nav_bar{
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		background: #FFFFFF;
		z-index: 998;
	}
	view {
		line-height: 1;
	}
	// 项目通用logo大小
	.logo {
		width: 60rpx;
		height: 60rpx;
	}
	//向左箭头大小
	.right_icon {
		width: 22rpx;
		height: 22rpx;
	}
	// 向下箭头大小
	.bottom_icon {
		width: 32upx;
		height: 18upx;
	}
	/*每个页面公共css */
	.box {
		font-size: 30upx;
		color: #333333;
	}
	.bg_fff {
		background: #fff;
	}
	/* 主色 */
	.bg_all {
		background: #448C7D;
		color: #FFFFFF;
	}
	.bg_gray {
		background: rgba(204, 204, 204, 1);
	}
	.bg_yel {
		background: #FF8036;
		color: #FFFFFF;
	}
	.color_666 {
		color: #C7C7C7;
	}
	.color_red {
		color: #FF0000;
	}
	.color_yel {
		color: #FF8036;
		font-weight: 400;
	}
	.color_blue {
		color: #0873DE;
	}
	.color_green {
		color: #006350;
		font-weight: 400;
	}
	.color_fff {
		color: #fff;
	}
	.color_all {
		color: #006350;
	}
	.color_gray {
		color: #999999;

	.font_weight_s {
		font-weight: 400;
	}
	.font_weight_b {
		font-weight: bold;
	}
	// 0.5px下边框 需要给父级position: relative;
	.border-gradient:after {
		content: " ";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-image: linear-gradient(0deg, #EEEEEE 50%, transparent 50%);
	}
	.border_top {
		border-top: 1rpx solid #EEEEEE;
	}
	.border_bottom {
		border-bottom: 1rpx solid #EEEEEE;
	}
	.com_width {
		width: 90%;
		margin-left: 5%;
	}
	.display_flex {
		display: flex;
		align-items: center;
	}
	.display_column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.space_between {
		justify-content: space-between;
	}
	.overflow {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.overflow_tow {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
