export const state = () => ({
  list: require("~/assets/data/words.json").words.sort((a, b) =>
    a.localeCompare(b)
  ),
  current: null,
});

export const getters = {};

export const actions = {};

export const mutations = {
  setCurrent(state, newCurrent) {
    state.current = newCurrent;
  },
};
