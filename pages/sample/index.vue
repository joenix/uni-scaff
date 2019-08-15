<template>
  <view class="page">
    <view class="section">
      <x-sample :message="store.name" />
    </view>
    <view class="section">
      <view class="block">
        <button type="default" @click="doDispatch()">[Action] Dispatch</button>
      </view>
      <view class="block">
        <button type="default" @click="doDispatchSync()">
          [Action] Dispatch Sync
        </button>
      </view>
      <view class="block">
        <button type="default" @click="doCommit()">[Mutation] Commit</button>
      </view>
      <view class="block">
        <button type="default" @click="doState()">[State] Change</button>
      </view>
    </view>
  </view>
</template>

<script>
import Vuex from "vuex";

import Sample from "@/components/sample";

export default {
  data() {
    return {};
  },
  computed: Vuex.mapState({
    store: state => state.index
  }),
  components: {
    "x-sample": Sample
  },
  methods: {
    doDispatch() {
      this.$store.dispatch("chance", "Has Dispatch");
    },
    doDispatchSync() {
      this.$store.dispatch("chanceAsync", "Sync Dispatch").then(sync => {
        setTimeout(() => {
          this.$store.state.index.name = sync;
        }, 2000);
      });
    },
    doCommit() {
      this.$store.commit("rename", "Has Commit");
    },
    doState() {
      this.$store.state.index.name = "Change Name";
    }
  },
  onLoad() {
    this.$http.mock[`/home/love`]
      .get({ a: 1, b: 2, c: 3 }, { headerParams: "header-params" })
      .then(response => {
        console.log("http response is : ", response);
      });
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 40rpx;
}
.block {
  padding: 20rpx 0;
}
.case {
  padding: 40rpx 0;
}
</style>
