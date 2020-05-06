<template>
	<view class="black_box">
		<view class="black_box_content">
			<view class="black_box_content_title">{{title}}</view>
			<view class="black_box_content_info">
				{{contentText}}
			</view>
			<view class="black_box_content_footer">
				<view @click="onClickLeft" class="left_btn">{{leftText}}</view>
				<view style="width: 16rpx;"></view>
				<view @click="onClickRight" class="right_btn">{{rightText}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "comAlert",
		props: {
			title: {
				type: String,
				default: ""
			},
			leftText: {
				type: String,
				default: ""
			},
			rightText: {
				type: String,
				default: ""
			},
			contentText:{
				type: String,
				default: ""
			},
			color: {
				type: String,
				default: "#000000"
			},
			backgroundColor: {
				type: String,
				default: "#FFFFFF"
			},
		},
		methods: {
			onClickLeft() {
				this.$emit("clickLeft");
			},
			onClickRight() {
				this.$emit("clickRight");
			}
		}
	};
</script>

<style lang="scss" scoped>
	//通用浮层
	.black_box {
		height: 100vh;
		z-index: 999;
		background: rgba(000, 000, 000, .5);
		width: 100%;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		.black_box_content {
			width: 620rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 16rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			box-sizing: border-box;

			.black_box_content_title {
				width: 100%;
				padding: 48rpx 0 28rpx 0;
				font-size: 34rpx;
				font-weight: 500;
				color: #333333;
				text-align: center;
			}

			.black_box_content_info {
				padding: 0 70rpx;
				line-height: 52rpx;
				font-size: 28rpx;
				font-size: 34rpx;
				color: #333333;
			}

			.black_box_content_footer {
				display: flex;
				align-items: center;
				padding: 68rpx 0 56rpx 0;

				view {
					width: 240rpx;
					height: 86rpx;
					line-height: 86rpx;
					border-radius: 8rpx;
					text-align: center;
				}

				.right_btn {
					background: rgba(68, 140, 125, 1);
					color: #FFFFFF;
				}

				.left_btn {
					background: rgba(68, 140, 125, .4);
					color: #448C7D;
				}
			}

			.color_all {
				height: 35%;
				line-height: 90rpx;
				font-size: 36rpx;
				font-weight: 500;
			}
		}
	}
</style>
