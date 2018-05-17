<template>
    <div class="login-container">
      <div class="login-from">
        <p class="login-system-name" v-text="sysTitle"></p>
        <el-form :label-position="labelPosition"  label-width="80px" :model="userForm">
          <el-form-item label="">
            <i class="my-account">&#xe634;</i>
            <el-input  v-model="userForm.userName" v-on:input = "inputT" placeholder="请输入用户名" :maxlength="100"></el-input>
          </el-form-item>
          <el-form-item label="">
            <i class="my-password">&#xe606;</i>
            <el-input type="password" :maxlength="16" v-model="userForm.userPassword" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="Login"  @keyup.enter="Login">登录</el-button>
            <!--<el-button type="primary" @click="mock">验证码</el-button>-->
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  import { userLogin,sendSms,mockData } from '@/api/login/login-api'
  import{ mapActions } from 'vuex'
  export default {
    data () {
      return {
        sysTitle:'客户管理系统',
        labelPosition: 'top',
        userForm:{
          userName:'',
          userPassword:''
        }
      }
    },
    components: {},
    methods: {
      ...mapActions([
        'userInfo',
        'userToken'
      ]),

      inputT(){
          this.userForm.userName = this.userForm.userName.replace(/[`~!@#$%^&*()+=|{}':\/\s;',\[\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]/,"")
      },
      Login(){
        if(!(this.userForm.userName&&this.userForm.userPassword)){
          this.$message({
            showClose: true,
            message: '用户名或密码不能空哟 >_<',
            type: 'error'
          });
          return false;
        }
        let _data = {
          username: this.userForm.userName,
          password: this.userForm.userPassword,
        };
        let _self = this;
        userLogin(_data).then((data)=>{
          _self.userInfo(data.data);
          _self.userToken(data.data.status);
          localStorage.setItem("userInfoNow",JSON.stringify(data.data));
          if(data.code===1){
              console.log(data);

            _self.$message({
              showClose: true,
              message: '登录成功',
              type: 'success'
            });
            if(data.data.username=='admin'){
              _self.$router.push({ path:'home/'+1});
            }else{
              _self.$router.push({ path:'home/'+data.data.partnerId});
            }
          }
        }).catch(function(){
          this.$message({
            showClose: true,
            message: '帐号或者密码错误',
            type: 'warning'
          });
        })
      }
    },
    computed: {},
    created() {

    }
  }
</script>

<style lang="scss">

</style>
