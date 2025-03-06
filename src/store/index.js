import { createStore } from 'vuex';

export default createStore({
  state: {
    cookies: 0,
    productionAuto: 0,
    upgrades: [
      { id: 1, name: 'Minis four...', cost: 10, boost: 1 },
      { id: 2, name: 'Production off-shore', cost: 50, boost: 5 },
      { id: 3, name: 'Une entière factory de pancakes', cost: 200, boost: 20 },
      { id: 4, name: 'Un chef decookies', cost: 1000, boost: 100 },
      { id: 5, name: 'Un Master à cookies', cost: 5000, boost: 500 },
      { id: 6, name: 'Une.. alternance de cookies?', cost: 10000, boost: 1000 },
      { id: 7, name: 'Expansion du territoire : Infinite Cookies', cost: 999999999999, boost: 9999999999 }
    ]
  },
  mutations: {
    ADD_COOKIE(state) {
      state.cookies++;
    },
    BUY_UPGRADE(state, upgrade) {
      if (state.cookies >= upgrade.cost) {
        state.cookies -= upgrade.cost;
        state.productionAuto += upgrade.boost;
      }
    },
    GENERATE_COOKIES(state) {
      state.cookies += state.productionAuto;
    }
  },
  actions: {
    startAutoProduction({ commit }) {
      setInterval(() => {
        commit('GENERATE_COOKIES');
      }, 1000);
    }
  },
  getters: {
    getCookies: state => state.cookies,
    getProduction: state => state.productionAuto,
    getUpgrades: state => state.upgrades
  }
});
