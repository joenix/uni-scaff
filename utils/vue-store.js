export default (Vuex, Http) => {
  const stores = require.context(`@/pages/`, true, /\w+\/store.js/),
    modules = {};

  stores
    .keys()
    .map(file =>
      (store => (modules[store.name] = store))(stores(file).default(Http))
    );

  return new Vuex.Store({
    namespaced: true,
    modules
  });
};
