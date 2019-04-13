import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  strict: true,
  state: {
    forceData: null
  },
  getters: {
    forceData(state) {
      return state.forceData
    }
  },
  mutations: {
    getForceData(state, payload) {
      state.forceData = payload
    }
  },
  actions: {
    getForceData({ commit }, { $http }) {
      return $http
        .get('test.json')
        .then(({ data }) => {
          let nodes = {}
          const links = data
          links.forEach(link => {
            const {
              sourceId,
              sourceName,
              sourceType,
              targetId,
              targetName,
              targetType
            } = link
            nodes[sourceId] = {
              id: sourceId,
              name: sourceName,
              type: sourceType
            }
            nodes[targetId] = {
              id: targetId,
              name: targetName,
              type: targetType
            }
          })
          nodes = Object.values(nodes)
          commit('getForceData', { nodes, links })
          return { nodes, links }
        })
        .catch(() => {
          commit('getForceData', { nodes: {}, links: {} })
          return { nodes: {}, links: {} }
        })
    }
  }
})
