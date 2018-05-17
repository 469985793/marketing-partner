/**
 * Created by szatpig on 2017/10/11.
 */
import * as _ from '@/util/util'
import { MENU_COLLAPSE ,SELECT_PARTNER} from '../types';

const state={
  isCollapse:false,
  partnerId:0,
  partnerList:[]
};

const getters={

};

const actions={
  //菜单伸缩
  menuCollapse({ commit }) {
    commit(MENU_COLLAPSE);
  },
  selectPartner({ commit }, data) {
    sessionStorage.setItem('selectPartner',JSON.stringify(data.curr));
    sessionStorage.setItem('partnerList',JSON.stringify(data.all));
    commit(SELECT_PARTNER, data);
  },
};

const mutations={
  [MENU_COLLAPSE](state){
    state.isCollapse=!state.isCollapse;
  },
  [SELECT_PARTNER](state,data){
    state.partnerId=data.curr.id;
    state.partnerList=data.all;

  },
};

export default {
  state,
  getters,
  actions,
  mutations
}




