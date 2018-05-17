<template>
    <div class="menu-container">
      <el-menu class="el-menu-vertical-demo" :default-active="$route.path"   router :unique-opened="true" :collapse="isCollapse" theme="dark">
        <!--<el-menu-item index="/home/index">-->
          <!--<i class="el-icon-my-menu" style="font-size: 18px;">&#xe626;</i>-->
          <!--<span slot="title">主页</span>-->
        <!--</el-menu-item>-->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-my-market">&#xe6bd;</i>
            <span slot="title">订单管理</span>
          </template>
          <el-menu-item-group>
            <div v-for="(item,index) in partnerList">
              <el-menu-item :index="'/home/'+item.id" v-show="item.id==partnerId2" :key="item.id">订单列表</el-menu-item>

            </div>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
  import { mapState,mapActions } from 'vuex'
  export default {
        name: 'app',
        data () {
            return {
              partnerId2:0,
              menuList:[]
            }
        },
        components: {},
        methods: {
          ...mapActions([
              'menuCollapse'
          ]),
          isMenuCollapse(){
            window.onresize=(()=>{
              let clientWidth=document.body.clientHeight;
              if(clientWidth<1024){
                this.isCollapse=true;
              }
            });
          },
          getMenuHeight(){
            let availableHeight = document.body.clientHeight  - document.querySelector('.header-container').offsetHeight;
            document.querySelector('.content-container').style.height=availableHeight+'px';
            //this.isMenuCollapse();
          },
        },
        watch:{
           'partnerId':function (val) {
             this.partnerId2 = this.$route.params.id||val;

           }
        },
        computed: {
          ...mapState({
            isCollapse: state=>state.menu.isCollapse,
            partnerId:state=>state.menu.partnerId,
            partnerList:state=>state.menu.partnerList,
          })

        },
        mounted (){
          this.getMenuHeight();
          window.onresize=(()=>{
            (!!document.querySelector('.content-container'))?this.getMenuHeight():null;
          });
        },
        created() {
            let _self = this;
            setTimeout(function(){
              _self.partnerId2 = _self.$route.params.id;

            },1000)

        }
    }
</script>
<style lang="scss">

</style>
