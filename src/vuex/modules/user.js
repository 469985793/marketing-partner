/**
 * Created by szatpig on 2017/10/9.
 */
import * as _ from '@/util/util'
import { USER_INFO,USER_TOKEN,USER_LOGIN_OUT } from '../types';

const state={
    userInfo:JSON.parse(sessionStorage.getItem('userInfo')) || {},
    userToken:sessionStorage.getItem('userToken') || null,
    userAvatar:''
};

const getters={

};

const actions={
  //保存用户信息
  userInfo({ commit }, res) {
    sessionStorage.setItem('userInfo',JSON.stringify(res));
    commit(USER_INFO, res);
  },
  //保存用户token
  userToken({ commit }, token) {
    _.setCookie('userToken',token);
    sessionStorage.setItem('userToken',token);
    commit(USER_TOKEN,token)
  },
  //用户退出
  userLoginOut({commit}){
    _.setCookie('userToken',null);
    sessionStorage.setItem('userToken',null);
    sessionStorage.setItem('userInfo',JSON.stringify({}));
    commit(USER_LOGIN_OUT)
  }
};

const mutations={
  [USER_INFO](state,res){
    state.userInfo=res;
    state.userAvatar=res.avatar;
  },
  [USER_TOKEN](state,token){
    state.userToken=token;
  },
  [USER_LOGIN_OUT](state){
    state.userToken=null;
    state.userInfo=[];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}


