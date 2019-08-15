<template>
  <view class="coupon-nav-wrap">
    <view class="coupon-nav">
      <view class="coupon-item" :class="navIndex == 0 ? 'act' : ''" @tap="updateNavIndex(0)">
        <view class="label">
          全部
          <view class="info" v-if="totalCouponCount">{{totalCouponCount}}</view>
        </view>
      </view>
      <view class="coupon-item" :class="navIndex == 1 ? 'act' : ''" @tap="updateNavIndex(1)">
        <view class="label">
          店铺优惠券
          <view class="info" v-if="storeCouponCount">{{storeCouponCount}}</view>
        </view>
      </view>
      <view class="coupon-item" :class="navIndex == 2 ? 'act' : ''" @tap="updateNavIndex(2)">
        <view class="label">
          平台优惠券
          <view class="info" v-if="platFormCouponCount">{{platFormCouponCount}}</view>
        </view>
      </view>
      <view class="coupon-item" :class="navIndex == 3 ? 'act' : ''" @tap="updateNavIndex(3)">
        <view class="label">
          抽奖券
          <view class="info" v-if="lotteryCouponCount">{{lotteryCouponCount}}</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'couponNav',
  data() {
    return {
    }
  },
  mounted() {

  },
  computed: {
    ...mapState({
      navIndex: state => state.coupon.navIndex,
    }),
    ...mapGetters(['totalCouponCount', 'storeCouponCount', 'platFormCouponCount', 'lotteryCouponCount'])
  },
  methods: {
    ...mapMutations(['updateNavIndex'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style lang="scss" scoped>
.coupon-nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88rpx;
  color: $uni-text-color-light;
  background: #ffffff;
  border-bottom: 1px solid $uni-border-color;
  z-index: 1;
  .coupon-nav {
    width: 100%;
    height: 100%;
    flex-flow: row nowrap;
    align-items: stretch;
    justify-content: center;
    .coupon-item {
      position: relative;
      flex: 1;
      align-items: center;
      justify-content: center;

      &.act {
        .label {
          color: $uni-text-color;
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 56rpx;
          height: 6rpx;
          margin-left: -28rpx;
          background: $tjj-color;
        }
      }
      .label {
        position: relative;
        color: $uni-text-color-light;
        .info {
          position: absolute;
          top: -10rpx;
          right: -30rpx;
          width: 30rpx;
          height: 30rpx;
          align-items: center;
          justify-content: center;
          background: $uni-bg-color-red;
          color: $uni-text-color-white;
          font-size: $uni-font-size-12;
          border-radius: $uni-border-radius-circle;
        }
      }
    }
  }
}
</style>
