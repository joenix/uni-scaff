<template>
  <view class="coupon-list">
    <!-- 店铺优惠券列表 -->
    <view 
      class="coupon-box-wrap"
      v-if="couponType == 'store' && couponStoreList && couponStoreList.length">
      <view class="title" v-if="showTitle">店铺优惠券</view>
      <block v-for="(couponStore,couponStoreIndex) in couponStoreList" :key="couponStoreIndex">
        <coupon-store
          :coupon="coupon"
          :storeName="couponStore.storeName"
          v-for="(coupon,couponIndex) in couponStore.coupon"
          :key="couponIndex"
        />
      </block>
    </view>
     <!-- 平台优惠券列表 -->
    <view
      class="coupon-box-wrap"
      v-if="couponType == 'platform' && couponPlatformList && couponPlatformList.length">
      <view class="title" v-if="showTitle">平台优惠券</view>
      <block
        v-for="(couponPlatform,couponPlatformIndex) in couponPlatformList"
        :key="couponPlatformIndex">
        <coupon-platform
          :coupon="coupon"
          :storeName="couponPlatform.storeName"
          v-for="(coupon,couponIndex) in couponPlatform.coupon"
          :key="couponIndex"/>
      </block>
    </view>
    <!-- 抽奖券 -->
    <view class="coupon-box-wrap" v-if="couponType == 'lottery' && couponLotteryList && couponLotteryList.length">
      <view class="title" v-if="showTitle">抽奖券</view>
      <block
        v-for="(couponLottery,couponLotteryIndex) in couponLotteryList"
        :key="couponLotteryIndex">
        <coupon-lottery :coupon="couponLottery" />
      </block>
    </view>
  </view>
</template>
<script>
import { mapState } from 'vuex'
import couponStore from './CouponStore'
import couponPlatform from './CouponPlatform'
import couponLottery from './CouponLottery'
export default {
  name: 'couponList',
  data() {
    return {}
  },
  props: {
    /**
     * 优惠券列表类型（store:店铺券，platform:平台券）
     */
    couponType: {
      type: String
    },
    /**
     * 列表是否显示title
     * 默认显示
     */
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState({
      couponStoreList: state => state.coupon.couponStoreList,
      couponPlatformList: state => state.coupon.couponPlatformList,
      couponLotteryList: state => state.coupon.couponLotteryList
    })
  },
  components: {
    couponStore,
    couponPlatform,
    couponLottery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.coupon-list {
  width: 100%;
  flex-direction: column;
  .coupon-box-wrap {
    flex-direction: column;
  }
}
.title {
  align-items: center;
  margin-top: $uni-spacing-col-16;
  color: $uni-text-color;
  font-weight: bold;
}
</style>
