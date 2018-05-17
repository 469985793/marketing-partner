/**
 * Created by liuli on 2018/3/9.
 */
let config = {};
if(process.env.NODE_ENV === 'production'){//生产环境
  config = {
    wxIp:location.hostname == '10.99.1.133' ? 'ws://10.99.1.134:12122/' : "ws://61.155.178.245:12122/",
    api:''
  }
}else{
  config = {
    wxIp:"ws://10.99.1.134:12122/",
    api:'/api'
  }
}
export default config
