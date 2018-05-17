/**
 * Created by szatpig on 2017/9/26.
 */

import { API_LOGIN, API_LOGOUT } from '../types'

const state= {
  user: {},
  token: null
};

const actions={

};

const mutations={
  [API_LOGIN](state, data)  {
    localStorage.token = data;
    state.token = data;
  },
  [API_LOGOUT](state) {
    localStorage.removeItem('token');
    state.token = null
  }
};

export default {
  state,
  mutations
}
