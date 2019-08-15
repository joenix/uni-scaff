<template>
  <view class="coupon-platform-wrap">
    <view class="platform-info">
      <view class="coupon-detail">
          <view class="price-wrap">
            <view class="unit">&yen;</view>
            <view class="price">{{coupon.amount}}</view>
          </view>
        <view class="conditions">
          <view v-if="coupon.amountUse">满{{coupon.amountUse}}减{{coupon.amount}}</view>
          <view v-else>无门槛</view>
        </view>
      </view>
      <view class="label">平台优惠券</view>
      <view class="label expire-date">有效期：{{$tools.dateFormat(new Date(coupon.timeStart*1000), 'yy.MM.dd')}} - {{$tools.dateFormat(new Date(coupon.timeEnd*1000), 'yy.MM.dd')}}</view>
    </view>
    <view class="btn-wrap">
      <view class="btn-use" @tap="go2Home">去使用</view>
    </view>
  </view>
</template>
<script>
// import utils from '@/common/util'
// import nativeBridge from '@/common/nativeBridge'
export default {
  name: 'couponPlatform',
  data () {
    return {
    }
  },
  props: {
    coupon: {
      type: Object
    }
  },
  mounted () {
  },
  methods: {
    go2Home () {
      utils.runCodeBaseENV({
        app () {
          nativeBridge.backHome()
        },
        mini () {
          // eslint-disable-next-line no-undef
          wx.miniProgram.getEnv(function (res) {
            // eslint-disable-next-line no-undef
            wx.miniProgram.switchTab({
              url: '/pages/home/home'
            })
          })
        },
        h5 () {
          window.location.href = utils.hostMap() + '/tjj_m.php/Tjj/Tjj/request/api_url/Home-homeInfo/display_url/Index-index/is_asynchronous/1'
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.coupon-platform-wrap {
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 20rpx;
  width: 100%;
  height: 172rpx;
  background: url("./../imgs/icon_coupon_platform.png") no-repeat center center;
  background-size: 100% 100%;
  .platform-info {
    flex-direction: column;
    flex: auto;
    padding-left: 40rpx;
    .coupon-detail {
      align-items: baseline;
      .price-wrap {
        align-items: baseline;
        font-weight: bold;
        .unit {
          color: $uni-bg-color-red;
          font-size: $uni-font-size-18;
        }
        .price {
          color: $uni-bg-color-red;
          margin-left: 6rpx;
          font-size: $uni-font-size-30;
        }
      }
      .conditions {
        margin-left: 20rpx;
        font-size: $uni-font-size-14;
        color: $uni-text-color;
        align-items: center;
        font-weight: bold;
      }
    }
    .label {
      font-size: $uni-font-size-10;
      color: $uni-text-color-grey;
      align-items: center;
    }
  }
  .btn-wrap {
    width: 200rpx;
    align-items: center;
    justify-content: center;
    .btn-use {
      width: 148rpx;
      height: 52rpx;
      border-radius: 26rpx;
      background-image: linear-gradient(90deg, #FF6632 2%, #ED1400 100%);
      font-size: $uni-font-size-14;
      color: $uni-text-color-white;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
