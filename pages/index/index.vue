<template>
  <view class="page">
    <view class="section jumbotron">
      <image class="logo" src="/static/logo.png"></image>
      <view>
        <text class="slogan">
          Progressive Scaffold for build Hybrid Application.
        </text>
      </view>
    </view>
    <view class="section start">
      <navigator url="/pages/sample/index" hover-class="navigator-hover">
        <view>
          <uni-icon
            type="info"
            size="64"
            class="icon"
            v-if="platform === 'h5'"
          />
          <icon type="info" size="64" v-else />
        </view>
        <view class="start-text">
          <text>Click me to get started !</text>
        </view>
      </navigator>
    </view>
  </view>
</template>

<script>
import Vuex from "vuex";

import { uniIcon } from "@dcloudio/uni-ui";

export default {
  data() {
    return {
      platform: getApp().globalData.platform
    };
  },
  computed: Vuex.mapState({
    store: state => state.index
  }),
  components: {
    uniIcon
  },
  methods: {},
  onLoad() {}
};
</script>

<style lang="scss" scoped>
.slogan {
  font-size: $uni-font-size-14;
  background-image: -webkit-linear-gradient(92deg, #00a3ff, #00a3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 12s infinite linear;
}

.logo {
  height: 256rpx;
  width: 256rpx;
}

.jumbotron {
  padding: 32rpx 0 64rpx;
}

.start {
  padding: 64rpx 0;

  &-text {
    padding: 32rpx 0;
    font-size: $uni-font-size-14;
  }
}

.navigator-hover {
  color: $uni-color-success;
  background-color: transparent;
}
</style>
