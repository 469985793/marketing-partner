/**
 * Created by szatpig on 2017/9/26.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
import user from './modules/user'
import menu from './modules/menu'
import socket from './modules/socket'

Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    api,user,menu,socket
  }
})
