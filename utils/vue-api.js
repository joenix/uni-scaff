import hosts from "@/registry/hosts";

const METHODS = [
  "get",
  "post",
  "put",
  "delete",
  "connect",
  "head",
  "options",
  "trace"
];

const ROOT = hosts(process.env.env);

function exp(uri) {
  return uri; // uri.replace(/^\//, "").replace(/\//g, "_");
}

function rest(url, handler = {}) {
  METHODS.map(method => {
    handler[method.toLowerCase()] = (data = {}, header = {}) =>
      new Promise((resolve, reject) => {
        uni.request({
          url,
          method,
          data,
          header,
          success: resolve,
          fail: reject
        });
      });
  });
  return handler;
}

function batch(uris, root, group = {}) {
  if (uris) uris.map(uri => transfer(root, uri, group));
  return group;
}

function transfer(root, uri, group, name = exp(uri)) {
  group[name] = rest(`${root}${uri}`);
}

export default (Apis, http = {}) => (
  Object.keys(ROOT).map(name => (http[name] = batch(Apis[name], ROOT[name]))),
  http
);
