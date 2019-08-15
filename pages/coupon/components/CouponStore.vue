<template>
  <view class="coupon-store-wrap">
    <view class="store-info" @tap="go2Store(coupon)">
      <view class="store">
        <img class="store-icon" v-if="coupon.merchantImg" :src="coupon.merchantImg" align="top" />
        <view class="store-name" v-if="storeName">{{storeName}}</view>
      </view>
      <view class="btn-wrap">
        <view class="btn-goStore">进店</view>
        <view class="arrow"></view>
      </view>
    </view>
    <view class="coupon-info-wrap">
      <view class="coupon-info">
        <view class="coupon-detail">
          <view class="price-wrap">
            <view class="unit">&yen;</view>
            <view class="price">{{coupon.amount}}</view>
          </view>
          <view class="conditions">
            <view v-if="coupon.amountUse">满{{coupon.amountUse}}减{{coupon.amount}}</view>
            <view class="unique" v-if="coupon.couponDesc">{{coupon.couponDesc}}</view>
            <view v-if="!coupon.amountUse">无门槛</view>
          </view>
        </view>
        <view class="label">店铺优惠券</view>
        <view
          class="label expire-date"
        >有效期：{{$tools.dateFormat(new Date(coupon.timeStart*1000), 'yy.MM.dd')}} - {{$tools.dateFormat(new Date(coupon.timeEnd*1000), 'yy.MM.dd')}}</view>
      </view>
      <view class="btn-use" @tap="go2Store(coupon)">去使用</view>
    </view>
  </view>
</template>
<script>
// import utils from '@/common/util'
// import nativeBridge from '@/common/nativeBridge'
export default {
  name: 'couponStore',
  data () {
    return {
    }
  },
  props: {
    coupon: {
      type: Object
    },
    storeName: {
      type: String
    }
  },
  methods: {
    /**
     * 返回goodsId就跳商详，否则继续跳店铺
     */
    go2Store (coupon) {
      const storeId = coupon.storeId
      const goodsId = coupon.goodsId
      utils.runCodeBaseENV({
        app () {
          if (goodsId) {
            utils.toAppDetail(goodsId)
          } else {
            nativeBridge.startShopHome({ shopId: storeId })
          }
        },
        mini () {
          if (goodsId) {
            utils.toMiniDetail(goodsId)
          } else {
            // eslint-disable-next-line no-undef
            wx.miniProgram.navigateTo({
              url: `/pages/home/goodsDetail/shopDetail/shopDetail?shopid=${storeId}`
            })
          }
        },
        h5 () {
          window.location.href = utils.hostMap() + '/tjj_m.php/Tjj/Tjj/request/api_url/Wap-store-home/display_url/Shop-index/is_asynchronous/1/store_id/' + storeId
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.coupon-store-wrap {
  flex-direction: column;
  position: relative;
  margin-top: 20rpx;
  width: 100%;
  height: 264rpx;
  background: url("./../imgs/icon_coupon_store.png") no-repeat
    center center;
  background-size: 100% 100%;
  .store-info {
    height: 90rpx;
    padding: 0 40rpx;
    align-items: center;
    justify-content: space-between;
    .store {
      align-items: center;
      .store-icon {
        margin-right: 20rpx;
        width: 40rpx;
        height: 40rpx;
      }
      .store-name {
        font-size: $uni-font-size-13;
        color: $uni-text-color;
        max-width: 320rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .btn-wrap {   
      align-items: center;
      .btn-goStore {
        font-size: $uni-font-size-13;
        color: $uni-text-color;
        align-items: center;
        justify-content: center;
      }
      .arrow {
        width: 14rpx;
        height: 24rpx;
        margin-left: 10rpx;
        background: url("./../imgs/icon_right.png") no-repeat
          center center;
        background-size: 100% 100%;
      }
    }
  }
  .coupon-info-wrap {
    justify-content: space-between;
    align-items: center;
    height: 174rpx;
    padding: 0 40rpx;
    .coupon-info {
      flex-direction: column;
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
            font-size: 60rpx;
          }
        }
        .conditions {
          margin-left: 20rpx;
          font-size: $uni-font-size-14;
          color: #333333;
          letter-spacing: 0;
          align-items: center;
          font-weight: bold;
          .unique {
            padding: 0 14rpx;
            height: 34rpx;
            align-items: center;
            border-radius: $uni-border-radius-circle;
            background-color: $tjj-color;
            font-weight: normal;
            color: $uni-text-color-white;
            font-size: $uni-font-size-11;
          }
        }
      }
      .label {
        font-size: $uni-font-size-10;
        color: $uni-text-color-grey;
        letter-spacing: 0;
        align-items: center;
      }
    }

    .btn-use {
      width: 148rpx;
      height: 52rpx;
      border-radius: 26rpx;
      background-image: linear-gradient(90deg, #ff6632 2%, #ed1400 100%);
      font-size: $uni-font-size-14;
      color: $uni-text-color-white;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
