///partner/loan/listLoan
import { fetch } from '../../util/api'
import  config  from '../../api/api-config'

export const listLoan= (data)=> fetch(config.api+'/partner/loan/listLoan',{
  data,
  'type':'post',
});
export const getLoan= (data)=> fetch(config.api+'/partner/loan/getDetail',{
  data,
  'type':'post',
  headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}

});
export const finishLoan= (data)=> fetch(config.api+'/partner/loan/finishLoan',{
  data,
  'type':'post',
  headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
});
export const revokeLoan= (data)=> fetch(config.api+'/partner/loan/revokeLoan',{
  data,
  'type':'post',
  headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
});
export const listPartner= (data)=> fetch(config.api+'/partner/loan/listPartner',{
  data,
  'type':'post',
  headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}

});
export const loginIndex= (data)=> fetch(config.api+'/partner/login/index',{
  data,
  'type':'get',
});

