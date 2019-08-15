export default $http => {
  const name = 'coupon';

  const state = {
    initCompleted: false,
    isEmpty: false,
    navIndex: 0,
    couponStoreList: [],
    couponPlatformList: [],
    couponLotteryList: []
  };

  const mutations = {
    updateInitCompleted(state, data) {
      state.loaded = data;
    },
    updateNavIndex(state, data) {
      state.navIndex = data;
      state.isEmpty = false;
      if (
        state.navIndex == 0 &&
        state.couponStoreList.length +
          state.couponPlatformList.length +
          state.couponLotteryList.length ==
          0
      ) {
        state.isEmpty = true;
      } else if (state.navIndex == 1 && state.couponStoreList.length == 0) {
        state.isEmpty = true;
      } else if (state.navIndex == 2 && state.couponPlatformList.length == 0) {
        state.isEmpty = true;
      } else if (state.navIndex == 3 && state.couponLotteryList.length == 0) {
        state.isEmpty = true;
      }
    },
    updateCouponList(state, data) {
      if (data.type == 1) {
        state.couponStoreList = data.list;
      } else if (data.type == 2) {
        state.couponPlatformList = data.list;
      } else if (data.type == 3) {
        state.couponLotteryList = data.list;
      }
    }
  };

  const getters = {
    totalCouponCount: state => {
      let num = 0;
      state.couponStoreList.map(item => {
        num += (item.coupon && item.coupon.length) || 0;
      });
      state.couponPlatformList.map(item => {
        num += (item.coupon && item.coupon.length) || 0;
      });
      num += state.couponLotteryList.length;
      return num;
    },
    storeCouponCount: state => {
      let num = 0;
      state.couponStoreList.map(item => {
        num += (item.coupon && item.coupon.length) || 0;
      });
      return num;
    },
    platFormCouponCount: state => {
      let num = 0;
      state.couponPlatformList.map(item => {
        num += (item.coupon && item.coupon.length) || 0;
      });
      return num;
    },
    lotteryCouponCount: state => state.couponLotteryList.length
  };

  const actions = {
    getCouponList({ commit }) {
      $http.phpHost[`/api.php/Api2_18_0/UCenter/myCoupon`]
        .get({
          uuid: '40e478f4-a797-51d8-ba2774cb8567',
          user_id: '30403438110800576',
          token: '385a91c1451ef26_',
          version: 'Api2_18_0'
        })
        .then(res => {
          const {
            result,
            couponCompany,
            couponLottery,
            couponStore,
            message
          } = res.data;
          if (result == 1) {
            console.log(couponStore);
            commit('updateCouponList', { type: 1, list: couponStore || [] });
            commit('updateCouponList', { type: 2, list: couponCompany || [] });
            commit('updateCouponList', { type: 3, list: couponLottery || [] });
            commit('updateNavIndex', 0);
          } else {
            throw new Error({ message });
          }
        })
        .catch(e => {
          console.log(e.message);
        })
        .finally(() => {
          commit('updateInitCompleted', true);
        });
    }
  };
  return {
    name,
    state,
    mutations,
    getters,
    actions
  };
};
