/**
 * Created by szatpig on 2017/9/27.
 */
import axios from 'axios'
import store from '../vuex/store'
import router from '../router/index'
import { stringify } from 'qs'
import { Message } from 'element-ui';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';//'http://hzzly.net:4000';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.user.userToken) {
      config.headers.Authorization = `token ${store.state.user.userToken}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      //console.log(error.response);
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          //store.commit(types.LOGOUT);
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          });
          break;
        case 403:
          break;
        case 504:
          break;
        case 500:
          //store.dispatch(types.AJAX_ERROR,500);
          Message({
            showClose: true,
            message: '网络超时，请刷新重试',
            type: 'error'
          });
          break;
        case 404:
          //store.dispatch(types.AJAX_ERROR,404);
          Message({
            showClose: true,
            message: '网页丢失，请刷新重试',
            type: 'error'
          });
          break;
      }
    }
    //console.log(JSON.stringify(error));/
    //console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  });

// 封装请求
export function fetch (url, options) {
  var opt = options || {};
  return new Promise((resolve, reject) => {
    axios({
      method: opt.type || 'post',
      url: url,
      params: opt.params || {},
      // 判断是否有自定义头部，以对参数进行序列化。不定义头部，默认对参数序列化为查询字符串。
      data: (opt.headers ? stringify(opt.data) : opt.data ) || {},
      responseType: opt.dataType || 'json',
      // 设置默认请求头
      headers: opt.headers || {'Content-Type': 'application/json; charset=UTF-8'}
    }).then(response => {
      if (response.data.code === 1) {
        resolve(response.data)
      } else {
        if(url.indexOf("partner/login/check")>-1){
          Message({
            showClose: true,
            message: '密码错误',
            type: 'error'
          });
          return
        }
        if(url.indexOf("partner/login/resetPassword")>-1){
          Message({
            showClose: true,
            message: response.data.message,
            type: 'error'
          });
          return
        }

        switch (response.data.code) {
          case -2401:
            // 401 清除token信息并跳转到登录页面
            //store.commit(types.LOGOUT);
            Message({
              showClose: true,
              message: '登录无效',
              type: 'error'
            });
            router.replace({
              path: '/login',
              query: {redirect: router.currentRoute.fullPath}
            });
            break;
          case 403:
            break;
          case 504:
            break;
          case 500:
            //store.dispatch(types.AJAX_ERROR,500);
            Message({
              showClose: true,
              message: '网络超时，请刷新重试',
              type: 'error'
            });
            break;
          case 404:
            //store.dispatch(types.AJAX_ERROR,404);
            Message({
              showClose: true,
              message: '网页丢失，请刷新重试',
              type: 'error'
            });
            break;
        }
        //reject(response.data)
        //store.commit('SET_LOADING', false)
      }
    }).catch(error => {
      reject(error)
      //store.commit('SET_LOADING', false)
    })
  })
}

export default axios;
