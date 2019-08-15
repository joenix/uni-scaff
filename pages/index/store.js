export default $http => {
  const name = "index";

  const state = {
    name: "joenix",
    nick: "Social Cat"
  };

  const mutations = {
    rename(state, option) {
      state.name = option;
    }
  };

  const actions = {
    chance({ commit, state }, message) {
      commit("rename", message);
    },
    chanceAsync: async function({ commit, state }, message) {
      return await new Promise(resolve => {
        commit("rename", message);
        resolve("emmm...");
      });
    }
  };

  return {
    name,
    state,
    mutations,
    actions
  };
};
