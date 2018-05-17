
import { fetch } from '../../util/api'
import  config  from '../../api/api-config'

//用户登录
export const userLogin= (data)=> fetch(config.api+'/partner/login/check',{
  data,
  'type':'post',
  headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
});

export const sendSms = (data,activityId)=>fetch(config.api+'/user/sendSms/'+activityId,{
  data,
  'type':'post'
});

export const mockData = ()=>fetch(config.api+'/login',{
  'type':'get'
});

export const resetPassword = (data)=>fetch(config.api+'/partner/login/resetPassword',{
  data,
  'type':'post',
  headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}

});
