export default {
  install(Vue, App) {
    return new Vue({ ...App }).$mount();
  }
};
