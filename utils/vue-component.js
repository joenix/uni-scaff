export default {
  install(Vue, prefix = "x") {
    const components = require.context(`@/components/`, true, /.vue$/);
    components
      .keys()
      .map(file =>
        (vue => Vue.component(`${prefix}-${vue.name}`, vue))(
          components(file).default
        )
      );
  }
};
