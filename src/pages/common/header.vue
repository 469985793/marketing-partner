<template>
    <div class="header-container">
      <el-row>
        <el-col :xs="24" :sm="4" :md="4" :lg="4"><div class="header-logo" v-text="sysTitle"></div></el-col>
        <el-col :xs="0" :sm="20" :md="20" :lg="20">
          <div class="header-info pull-right">
            <div class="img-area pull-left">
              <!--<img class="logo-img" alt="" :src="userAvatar">-->
            </div>
            <div class="information-show pull-left">
              <el-dropdown @command="handleCommand" trigger="click">
  <span class="el-dropdown-link" v-text="nickname" style="color:#fff;">
    administrator<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">修改密码</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <i class="icon-loginout pull-left" @click="loginOut">&#xe63a;</i>
          </div>
        </el-col>
      </el-row>
      <el-dialog
        title="修改密码"
        :visible.sync="dialogVisible"
        size="tiny">
        <el-form :model="form" :rules="rules">
          <el-form-item label="原密码" :label-width="formLabelWidth" prop="oldPassword">
            <el-input type="password" v-model="form.oldPassword"  placeholder="请输入原密码"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth" prop="newPassword1">
            <el-input type="password" v-model="form.newPassword1" placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" :label-width="formLabelWidth" prop="newPassword2">
            <el-input type="password" v-model="form.newPassword2" placeholder="请再次输入新密码"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="comformPassword">确 定</el-button>
  </span>
      </el-dialog>
    </div>

</template>

<script>
    import { mapState ,mapActions } from 'vuex';
    import {resetPassword} from '@/api/login/login-api'

    export default {
        name: 'head',
        data () {
          return {
            formLabelWidth:'100px',
            form: {
              oldPassword: '',
              newPassword1: '',
              newPassword2: '',
            },
            dialogVisible:false,
            sysTitle:'客户管理系统',
            rules: {
              oldPassword: [
                { required: true, message: '请输入原密码', trigger: 'blur' },
              ],
              newPassword1: [
                { required: true, message: '请输入新密码', trigger: 'blur' }
              ],
              newPassword2: [
                { required: true, message: '请再次输入新密码', trigger: 'blur' }
              ]
            }
          }
        },
        components: {},
        methods: {
          ...mapActions([
              'userLoginOut'
          ]),
          comformPassword(){
              let _self =this;
            if(this.form.newPassword1===this.form.newPassword2){
               let  _data = {
                 username:this.userName,
                 password:this.form.oldPassword,
                 newPassword:this.form.newPassword1
               };
              resetPassword(_data).then((res)=>{
                _self.dialogVisible = false;

                _self.$message({
                  type: 'success',
                  message: '设置成功'
                });
              })
            }else{
              this.$message({
                type: 'warning',
                message: '两次输入密码不一致'
              });
            }
          },
          handleCommand(command) {
            let _self = this;
            if(command==='a'){
              _self.dialogVisible = true;
            }

          },
          loginOut(){
            this.$confirm('确定要退出吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '退出成功'
              });
              this.userLoginOut();

              let _data_ = {
                "type": "PARTNER_LOAN",
                "data": 'disconnect'
              };
              this.$socket.emit('request',JSON.stringify(_data_));
              this.$socket.disconnect();
              this.$router.push({path:'/login'});
            }).catch(() => {});
          },
        },
        computed: {
          ...mapState({
            userName:state=>state.user.userInfo.username,
            nickname:state=>state.user.userInfo.nickname,
            userAvatar:state=>state.user.userInfo.avatar,
          })
        },
        created() {

        }
    }
</script>

<style lang="scss">
.information-show span{
  cursor: pointer;
}
</style>
