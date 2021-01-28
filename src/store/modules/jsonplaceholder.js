import * as api from '@/api/jsonplaceholder';
import * as types from '@/store/mutations/types/jsonplaceholder';

export const state = {
  users: [],
};

export const getters = {
  users: (state) => state.users,
};

export const mutations = {
  [types.FETCH_USERS_SUCCESS](state, users) {
    state.users = users;
  },

  [types.FETCH_USERS_FAILURE](state) {
    state.users = [];
  },
};

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const { data } = await api.fetchUsers();

      commit(types.FETCH_USERS_SUCCESS, data);
    } catch (error) {
      commit(types.FETCH_USERS_FAILURE);

      throw error;
    }
  },
};
