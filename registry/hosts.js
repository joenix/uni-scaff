const general = {
  mock: `http://47.99.112.156:8030`
};

const dev = {
  ...general,

  javaHost: `https://dev.japi.taojiji.com`,
  javaCdnHost: `https://dev.japi-cdn.taojiji.com`,
  phpHost: '/local'
};

const test = {
  ...general,

  javaHost: `http://qa.japi.taojiji.com`,
  javaCdnHost: `http://qa.japi-cdn.taojiji.com`,
  phpHost: 'http://api.tjjshop.cn'
};

const preview = {
  ...general,

  javaHost: `http://qa.japi.taojiji.com`,
  javaCdnHost: `http://qa.japi-cdn.taojiji.com`,
  phpHost: 'http://api.taojiji.com'
};

const production = {
  ...general,

  javaHost: `http://qa.japi.taojiji.com`,
  javaCdnHost: `http://qa.japi-cdn.taojiji.com`,
  phpHost: 'http://api.taojiji.com'
};

export default env => {
  return {
    dev,
    test,
    preview,
    production
  }[env];
};
