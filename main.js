// Import Staff
import Scaff from "@cafee/uni";

// Import Utils
import {
  vueRegister,
  vueStore,
  vueApi,
  vueComponent,
  vueUI,
  vueTools
} from "./utils";

// Import Registy
import { apis } from "./registry";

// Import App
import App from "./App";

// Running
new Scaff().then(({ Vue, Vuex }) => {
  // Config Tip
  Vue.config.productionTip = false;

  // Use Http
  const http = vueApi(apis);

  // Use Store
  const store = vueStore(Vuex, http);

  // in FE
  if (process.env.fe) {
    // Component Registry
    Vue.use(vueComponent);

    // UI Registry
    Vue.use(vueUI);
  }

  // Vue Register
  Vue.use(vueRegister, {
    argv: { ...process.env },
    $http: http,
    $store: store,
    $tools: vueTools
  });

  // App Configure
  App.mpType = "app";

  // Instant
  new Vue({
    store,
    ...App
  }).$mount();
});
