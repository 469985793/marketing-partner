<template>
    <div class="title-container clearfix">
      <span class="collapse-icon" @click="collapseEvent">&#xe61a;</span>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      <div style="overflow-x: scroll;width:100%;position: absolute;left: 50px;top:0;">
        <div v-if="isAdmin" :style="'display: inline-block;width:'+ 105*list.length+'px'">
          <el-button type="text" v-for="item in list" @click="spartner(item)" :key="item.id" :style="$route.params.id==item.id?'color:red;':''">{{item.name}}</el-button>
        </div>
      </div>

    </div>
</template>

<script>
  import VueSocketio from 'vue-socket.io';
  import Vue from 'vue';
  import { mapActions,mapState} from 'vuex';
  import io from 'socket.io-client';
  import store from '@/vuex/store';
  import { listPartner,loginIndex } from '@/api/smsManagement/smsTemplate-api';
  import config from '@/api/api-config';


  export default {
      name: 'app',
      data () {
          return {
            isAdmin:false,
              list: [],
              currId : '1',

          }
      },
      components: {},
      methods: {
        spartner(data){

          this.selectPartner({curr:data,all:this.list});
//          this.$router.go(0);
          this.$router.push({ name: 'marketTask', params: { id:data.id }});
          this.currId = data.id;
        },
        ...mapActions([
          'menuCollapse',
          'selectPartner'
        ]),
        collapseEvent(){
            this.menuCollapse();
        }
      },
    computed:{
      ...mapState({
        accountId: state=>state.user.userInfo.accountId,
      })
    },
      created() {
        let _self = this;
        loginIndex().then((res)=>{
          if(res.data){
            Vue.use(VueSocketio, io(config.wxIp,{
              transports: ['websocket'],
              query:{ token: res.data,partnerId:JSON.parse(localStorage.getItem("userInfoNow")).partnerId}
            }),store);

            let _data_ = {
              "type": "PARTNER_LOAN",
              "data": {
                partnerId: JSON.parse(localStorage.getItem("userInfoNow")).partnerId
              }
            };
            _self.$socket.emit('request',JSON.stringify(_data_));
          }
        });
        if(JSON.parse(localStorage.getItem("userInfoNow")).type==2){
          this.currId = this.$route.params.id;
          this.isAdmin =true;
        }else{
          this.currId = JSON.parse(localStorage.getItem("userInfoNow")).partnerId;
          this.isAdmin =false;
        }
        listPartner({accountId:this.accountId}).then((res)=>{
          _self.list = res.data;
          let currData = {};

          res.data.forEach((item)=>{
            if(item.id==this.currId){
                currData = item;
              }
          });
          console.log(res.data.some((res)=>res.id==this.accountId))
          console.log(this.accountId);

          if(!res.data.some((res)=>res.id==this.accountId)){
            this.$router.push('/home/'+_self.list[0].id)

          }
//          if(this.currId!=JSON.parse(localStorage.getItem("userInfoNow")).partnerId){
//            this.$router.push('/')
//          }
          if(JSON.stringify(currData)=='{}'&&this.currId!=JSON.parse(localStorage.getItem("userInfoNow")).partnerId){
            this.$router.push('/')
          }
          setTimeout(function () {
            _self.selectPartner({curr:currData,all:_self.list})
          },200)
        })
      }
  }
</script>

<style lang="scss">

</style>
