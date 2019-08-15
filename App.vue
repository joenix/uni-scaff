<script>
export default {
  globalData: {
    sample: `[Sample] Global Data .`,
    platform: process.env.VUE_APP_PLATFORM,
    systems: uni.getSystemInfoSync()
  },
  onLaunch: function() {
    console.log(`[Sample] App Launch`);
  },
  onShow: function() {
    console.log(`[Sample] App Show`);
  },
  onHide: function() {
    console.log(`[Sample] App Hide`);
  }
};
</script>

<style lang="scss">
/* General Class */
html, body {
	box-sizing: border-box;
}
body {
  background-color: $uni-bg-color-grey;
}
image {
	width: 100%;
	will-change: transform;
}
view {
	display: flex;
	flex-direction: row;
	color: $uni-text-color;
	font-size: $uni-font-size-14;
	box-sizing: border-box;
}
input {
	width: 100%;
	color: $uni-text-color;
	font-size: $uni-font-size-14;
}
// 点击时的列表项颜色
.list-hover {
	background-color: rgba(204,204,204,0.1);
}
// 重写pickerview中的字号
.uni-picker-action, .uni-picker {
	font-size: $uni-font-size-13 !important;
}
// 重写pickerview中的颜色
.uni-picker-action-confirm {
	color: $uni-text-color !important;
}

</style>
