<template>
  <view class="x-sample">
    <view>
      <image
        src="http://tjjstatic.taojiji.com/wechat/homeIcon/icon_dianpu@2x.png"
      />
    </view>
    <view>
      <text>
        {{ message }}
      </text>
    </view>
  </view>
</template>

<script>
export default {
  name: "sample",
  props: {
    message: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
