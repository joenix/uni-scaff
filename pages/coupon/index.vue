<template>
  <view class="coupon-container">
    <!-- 顶部tab导航 -->
    <coupon-nav />
    <!-- 优惠券列表 -->
    <view class="coupon-list-wrap" v-if="!isEmpty">
      <!--TAB-全部-->
      <view class="tab-container" v-if="navIndex == 0">
        <coupon-list couponType="platform" />
        <coupon-list couponType="store" />
        <coupon-list couponType="lottery" />
      </view>

      <!--TAB-店铺优惠券-->
      <view class="tab-container" v-if="navIndex == 1">
        <coupon-list couponType="store" :showTitle="false" />
      </view>

      <!--TAB-平台优惠券-->
      <view class="tab-container" v-if="navIndex == 2">
        <coupon-list couponType="platform" :showTitle="false" />
      </view>

      <!--TAB-抽奖券-->
      <view class="tab-container" v-if="navIndex == 3">
        <coupon-list couponType="lottery" :showTitle="false" />
      </view>
    </view>
    <view class="empty" v-else>抱歉，您还没有优惠券～</view>
  </view>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import couponNav from './components/CouponNav'
import couponList from './components/CouponList'
export default {
  data() {
    return {
      platform: getApp().globalData.platform,
    }
  },
  computed: {
    ...mapState({
      initCompleted: state => state.coupon.initCompleted,
      navIndex: state => state.coupon.navIndex,
      isEmpty: state => state.coupon.isEmpty,
    })
  },
  mounted() {
    this.init()
  },
  onPullDownRefresh() {
    this.init()
    uni.stopPullDownRefresh()
  },
  methods: {
    ...mapActions(['getCouponList']),
    async init() {
      await this.getCouponList()
    }
  },
  components: {
    couponNav,
    couponList
  }
}
</script>
<style lang="scss" scoped>
.coupon-list-wrap {
  width: 100%;
  padding: 88rpx 26rpx 60rpx;
  .tab-container {
    flex-direction: column;
    width: 100%;
  }
}
.empty {
  width: 100%;
  padding-top: 750rpx;
  background: url("./imgs/icon_coupon_empty.png") no-repeat center 350rpx;
  background-size: 402rpx 312rpx;
  font-size: $uni-font-size-15;
  color: #757575;
  justify-content: center;
}
</style>