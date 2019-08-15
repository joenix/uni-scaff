<template>
  <!--expire/act-->
  <view class="coupon-lottery-wrap" :class="{'act': couponStatus == 2, 'expire': couponStatus == 0}">
    <view class="lottery-info">
      <view class="lottery-name">奖品：{{coupon.goods_name}}</view>
      <view class="label">编号：{{coupon.coupon_id}}</view>
      <view class="label expire-date">开奖时间：{{coupon.lottery_time}}</view>
    </view>
    <view class="btn-wrap" @tap="go2Fission()">
      <view class="btn-use">{{couponStatus==0?'未中奖':couponStatus==2?'中奖':'等待开奖'}}</view>
      <view class="btn-right"></view>
    </view>
  </view>
</template>
<script>
// import utils from '@/common/util'
// import nativeBridge from '@/common/nativeBridge'
export default {
  name: 'couponLottery',
  data () {
    return {
      btnText: ''
    }
  },
  props: {
    coupon: {
      type: Object// status:0 未开奖、未中奖 1中奖 lottery_id coupon_id goods_name lottery_time
    }
  },
  computed: {
    /**
     * 处理券的状态
     * 接口返回status为1、2时【中奖】，返回0时判断当开奖时间>当前时间则【等待开奖】否则【未中奖】
     * @returns {number}处理之后返回状态：0未中奖 1等待开奖 2中奖
     */
    couponStatus () {
      let statusTemp = -1
      if (this.coupon.count_down > 0) {
        statusTemp = 1
      } else if (this.coupon.count_down == 0) {
        if (this.coupon.status == 1 || this.coupon.status == 2) {
          statusTemp = 2
        } else {
          statusTemp = 0
        }
      }
      return statusTemp
    }
  },
  methods: {
    go2Fission () {
      // eslint-disable-next-line no-unused-vars
      let url = ''
      if (location.href.indexOf('static-h5.taojiji.com') > -1) {
        url += 'https://activity.taojiji.com/'
      } else {
        url += 'https://activity.tjjshop.cn/'
      }
      const userInfo = utils.queryUserInfo()
      url += `project/anniversary/view/qkcart?user_id=${userInfo.user_id}&token=${userInfo.token}&uuid=${userInfo.uuid}&os=${userInfo.os}`
      utils.runCodeBaseENV({
        app () {
          nativeBridge.openWeb(url)
        },
        mini () {
          window.location.href = url
        },
        h5 () {
          window.location.href = url
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.coupon-lottery-wrap {
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 20rpx;
  width: 100%;
  height: 172rpx;
  background: url("./../imgs/icon_coupon_platform.png") no-repeat center center;
  background-size: 100% 100%;
  .lottery-info {
    flex-direction: column;
    flex: auto;
    padding-left: 40rpx;
    .lottery-name {
      max-width: 420rpx;
      font-size: $uni-font-size-14;
      color: $uni-text-color;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .label {
      font-size: $uni-font-size-10;
      color: $uni-text-color-grey;
      align-items: center;
    }
  }
  .btn-wrap {
    display: flex;
    width: 200rpx;
    align-items: center;
    justify-content: center;
    .btn-use {
      font-size: $uni-font-size-18;
      color: $tjj-color;
      align-items: center;
      justify-items: center;
      font-weight: bold;
    }
    .btn-right {
      margin-left: 12rpx;
      width: 14rpx;
      height: 24rpx;
      background: url("./../imgs/icon_right_red.png") no-repeat center center;
      background-size: 100% 100%;
    }
  }

  &.act {
    background: url("./../imgs/icon_coupon_lottory_act.png") no-repeat center center;
    background-size: 100% 100%;
    .lottery-info {
      .lottery-name {
        color: #fff;
      }
      .label {
        color: #fff;
      }
    }
    .btn-wrap {
      .btn-use {
        color: #fff;
      }
      .btn-right {
        background: none;
        width: 16rpx;
        height: 16rpx;
        border-top: 4rpx solid #fff;
        border-right: 4rpx solid #fff;
        transform: rotate(45deg);
      }
    }
  }
  &.expire {
    background: url("./../imgs/icon_coupon_lottory.png") no-repeat center center;
    background-size: 100% 100%;
    .lottery-info {
      .lottery-name {
        color: $uni-text-color-grey;
      }
    }
    .btn-wrap {
      .btn-use {
        color: $uni-text-color-grey;
      }
      .btn-right {
        background: url("./../imgs/icon_right.png") no-repeat center center;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
