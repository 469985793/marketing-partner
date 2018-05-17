<template>
  <div class="sms-template-container">
    <el-row>
      <el-col>
        <div class="search-container">
          <el-row :gutter="15">
            <el-col :span="4" v-if="usertype==2">
              <el-input :span="4" v-model="searchData.channel" :input="trimK" placeholder="请输入渠道号" size="small"></el-input>
            </el-col>
            <el-col :span="4">
              <el-input :span="4" v-model="searchData.key" :input="trimK" placeholder="请输入姓名或者填单号码" size="small"></el-input>
            </el-col>


            <el-col :span="3" v-if="usertype==2">
              <el-select v-model="addSmsTemplate.vocation" :span="4" placeholder="请选择职业" clearable size="small">
                <el-option label="企业主" value="0"></el-option>
                <el-option label="个体户" value="1"></el-option>
                <el-option label="工薪族" value="2"></el-option>
                <el-option label="公务员" value="3"></el-option>
                <el-option label="退休人员" value="4"></el-option>
                <el-option label="其他" value="5"></el-option>
              </el-select>
            </el-col>


            <el-col :span="3" v-if="username!='admin'&&partnerId===1">
              <el-select v-model="addSmsTemplate.vocation" :span="4" placeholder="请选择职业" clearable size="small">
                <el-option label="企业主" value="0"></el-option>
                <el-option label="个体户" value="1"></el-option>
                <el-option label="工薪族" value="2"></el-option>
                <el-option label="公务员" value="3"></el-option>
                <el-option label="退休人员" value="4"></el-option>
                <el-option label="其他" value="5"></el-option>
              </el-select>
            </el-col>
            <el-col :span="3" v-if="username!='admin'&&partnerId===6">
              <el-select v-model="addSmsTemplate.vocation" :span="4" placeholder="请选择职业" clearable size="small">
                <el-option label="企业主" value="0"></el-option>
                <el-option label="工薪族" value="2"></el-option>
                <el-option label="公务员" value="3"></el-option>
                <el-option label="其他" value="5"></el-option>
              </el-select>
            </el-col>
            <el-col :span="3" v-if="username!='admin'&&partnerId===7">
              <el-select v-model="addSmsTemplate.vocation" :span="4" placeholder="请选择职业" clearable size="small">
                <el-option label="企业主" value="0"></el-option>
                <el-option label="工薪族" value="2"></el-option>
                <el-option label="公务员" value="3"></el-option>
                <el-option label="其他" value="5"></el-option>
              </el-select>
            </el-col>
            <el-col :span="3" v-if="username!='admin'&&partnerId===8">
              <el-select v-model="addSmsTemplate.vocation" :span="4" placeholder="请选择职业" clearable size="small">
                <el-option label="企业主" value="0"></el-option>
                <el-option label="工薪族" value="2"></el-option>
                <el-option label="公务员" value="3"></el-option>
                <el-option label="其他" value="5"></el-option>
              </el-select>
            </el-col>

            <el-col :span="3" v-if="usertype==2">
              <el-select v-model="addSmsTemplate.jine" :span="4" placeholder="请选择金额" clearable  size="small">
                <el-option label="10-20万" value="0"></el-option>
                <el-option label="20-30万" value="1"></el-option>
                <el-option label="100万以上" value="2"></el-option>
                <el-option label="超低利率，年化利率3.5%专用通道" value="3"></el-option>
                <el-option label="5-50万" value="4"></el-option>
                <el-option label="50-100万" value="5"></el-option>
                <el-option label="0-5万" value="6"></el-option>
                <el-option label="5-10万" value="7"></el-option>
                <el-option label="20万以上" value="8"></el-option>
                <el-option label="30万以下" value="10"></el-option>
                <el-option label="30-100万" value="11"></el-option>
                <el-option label="10万以上" value="12"></el-option>
              </el-select>
            </el-col>




            <el-col :span="3" v-if="username!='admin'&&partnerId===1">
              <el-select v-model="addSmsTemplate.jine" :span="4" placeholder="请选择金额" clearable  size="small">
                <el-option label="10-20万" value="0"></el-option>
                <el-option label="20-30万" value="1"></el-option>
                <el-option label="30万以下" value="10"></el-option>
                <el-option label="30-100万" value="11"></el-option>
                <el-option label="100万以上" value="2"></el-option>
                <el-option label="超低利率，年化利率3.5%专用通道" value="3"></el-option>
              </el-select>
            </el-col>
            <el-col :span="3" v-if="username!='admin'&&partnerId===2">
              <el-select v-model="addSmsTemplate.jine" :span="4" placeholder="请选择金额" clearable size="small">
                <el-option label="5-50万" value="4"></el-option>
                <el-option label="50-100万" value="5"></el-option>
                <el-option label="100万以上" value="2"></el-option>
              </el-select>
            </el-col>
            <el-col :span="3" v-if="username!='admin'&&partnerId===6">
              <el-select v-model="addSmsTemplate.jine" :span="4" placeholder="请选择金额" clearable size="small">
                <el-option label="10-20万" value="0"></el-option>
                <el-option label="20-30万" value="1"></el-option>
                <el-option label="100万以上" value="2"></el-option>
              </el-select>
            </el-col>
            <el-col :span="3" v-if="username!='admin'&&partnerId===7">
              <el-select v-model="addSmsTemplate.jine" :span="4" placeholder="请选择金额" clearable size="small">
                <el-option label="10-20万" value="0"></el-option>
                <el-option label="20-30万" value="1"></el-option>
                <el-option label="100万以上" value="2"></el-option>
              </el-select>
            </el-col>
            <el-col :span="3" v-if="username!='admin'&&partnerId===8">
              <el-select v-model="addSmsTemplate.jine" :span="4" placeholder="请选择金额" clearable size="small">
                <el-option label="10-20万" value="0"></el-option>
                <el-option label="20-30万" value="1"></el-option>
                <el-option label="100万以上" value="2"></el-option>
              </el-select>
            </el-col>
            <el-col :span="3">
              <el-select v-model="addSmsTemplate.zhuangtai" :span="2" placeholder="请选择状态" clearable filterable size="small">
                <el-option label="未处理" value="0"></el-option>
                <el-option label="已处理" value="1"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-date-picker
                v-model="value7"
                type="daterange"
                align="right"
                size="small"
                style="width:100%;"
                placeholder="选择日期范围"
                @change="handleChanges"
                range-separator=" -- "
                :picker-options="pickerOptions2">
              </el-date-picker>
            </el-col>
            <el-col :span="3" style="text-align: left">
              <el-button :span="3" type="success" @click="searchEvent" size="small">查询</el-button>
            </el-col>
            <!--<el-col :span="2">-->
            <!--<el-button :span="4" type="success" class="search-add"  @click="dialogFormVisible = true;isEdit=false;">新增</el-button>-->
            <!--</el-col>-->
          </el-row>
        </div>
        <div class="search-table">
          <el-table
            ref="multipleTable"
            :data="tableData"
            height="500"
            border
            :default-sort = "{prop: 'id', order: 'descending'}"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column prop="orderNo" label="订单号" show-overflow-tooltip  width="250"  v-if="usertype==2"> </el-table-column>
            <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-icon name="time"></el-icon>
                {{ scope.row.createTimeStr }}
              </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名"  show-overflow-tooltip> </el-table-column>
            <el-table-column prop="mobile" label="填单号码" show-overflow-tooltip  width="130" > </el-table-column>
            <el-table-column prop="originalMobile" label="原始发送号码" show-overflow-tooltip width="130"  v-if="usertype==2">
              <template slot-scope="scope">
                {{ scope.row.originalMobile=='null'?'':scope.row.originalMobile }}
              </template>
            </el-table-column>

            <el-table-column v-if="username!='admin'&&partnerId!=6&&partnerId!=7&&partnerId!=8&&partnerId!=12" prop="sex" label="性别" width="90" show-overflow-tooltip> </el-table-column>
            <el-table-column v-if="usertype==2" prop="sex" label="性别" width="90" show-overflow-tooltip> </el-table-column>

            <el-table-column prop="vocation" v-if="username!='admin'&&partnerId===1" label="职业" width="90" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-tag :type="'success'">{{ scope.row.vocation }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="vocation" v-if="username!='admin'&&partnerId===6" label="职业" width="90" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-tag :type="'success'">{{ scope.row.vocation }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="vocation" v-if="username!='admin'&&partnerId===7" label="职业" width="90" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-tag :type="'success'">{{ scope.row.vocation }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="vocation" v-if="username!='admin'&&partnerId===8" label="职业" width="90" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-tag :type="'success'">{{ scope.row.vocation }}</el-tag>
              </template>
            </el-table-column>


            <el-table-column prop="vocation" v-if="usertype==2" label="职业" width="90" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-tag :type="'success'">{{ scope.row.vocation }}</el-tag>
              </template>
            </el-table-column>

\            <el-table-column prop="loanAmount" v-if="username!='admin'&&partnerId!==3&&partnerId!==4&&partnerId!==5" label="理财金额" width="120" show-overflow-tooltip> </el-table-column>

            <el-table-column prop="loanAmount" v-if="usertype==2" label="贷款金额" width="120" show-overflow-tooltip> </el-table-column>


            <el-table-column prop="cityId" v-if="usertype==2" label="城市" width="160" show-overflow-tooltip> </el-table-column>
            <el-table-column prop="channel" v-if="usertype==2" label="渠道" width="120" show-overflow-tooltip> </el-table-column>

            <el-table-column prop="remark" v-if="usertype==2" label="备注" width="120" show-overflow-tooltip> </el-table-column>

            <el-table-column prop="status" label="状态" width="90" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-tag :type="scope.row.status =='已处理' ? 'success' : 'danger'">{{ scope.row.status }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="partner" label="合作方" width="90" show-overflow-tooltip v-if="usertype==2"> </el-table-column>
            <el-table-column label="操作" width="220" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-button
                  size="small"
                  @click="showDetail(scope.row.id)">详情</el-button>
                <el-button
                  size="small"
                  :type="scope.row.status == '已处理' ? 'success' : 'danger'"
                  @click="handleStop(scope.$index, scope.row)">{{scope.row.status=='已处理' ? '设置为未处理' : '设置为已处理'}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-row>
          <el-col :span="8">
            <el-tooltip class="item" effect="dark" content="按已筛选的条件将数据导出到 Excel 文件" placement="top">
              <el-button type="primary" style="margin-left:20px;position: relative"  @click="exportData">导出</el-button>
            </el-tooltip>

          </el-col>
          <el-col :span="16" style="text-align: right">
            <div class="search-page">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page.currentPage"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="page.pageSize"
                layout="total , sizes , prev, pager, next, jumper"
                :total="page.total">
              </el-pagination>
            </div>
          </el-col>

        </el-row>

      </el-col>
    </el-row>
    <audio ref="audio"></audio>
    <el-dialog title="详情" :visible.sync="dialogTableVisible">
      <div v-for="(item,key) in detailData">
      {{key}}:{{item}}

      </div>
      <div v-show="!!detailShow">
        对不起暂无数据
      </div>

    </el-dialog>
  </div>

</template>

<script>
  import {mapState} from 'vuex';
  import { listLoan , finishLoan ,revokeLoan ,getLoan } from '@/api/smsManagement/smsTemplate-api'
  import methodAction from '@/mixins/methods'
  import mp3 from '@/assets/mp3/tmp.mp3'

  export default {
    name: 'sysRole',
    data () {
      return {
        detailShow:true,
        detailData:[],
        dialogTableVisible:false,
        url:'',
        searchData:{
          key:'',
          orderNo:'',
          startTime:'',
          endTime:'',
          channel:''
        },
        page:{
          pageSize:10,
          total:10,
          currentPage: 1
        },
        usertype:0,
        partnerId:1,
        partnerIdre:1,
        tableData: [],
        multipleSelection: [],
        dialogFormVisible: false,
        isEdit:false,
        username:'',
        addSmsTemplate: {
          name:'',
          zhuangtai: '',
          jine:'',
          vocation: '',
          content:''
        },
        formLabelWidth: '100px',
        rules: {
          name: [
            { required: true, message: '请输入模板名称', trigger: 'blur' },
          ],
          content: [
            { required: true, message: '请输入模板内容', trigger: 'change' }
          ],
          type: [
            { required: true, message: '请输入模板类型', trigger: 'blur' }
          ]
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: ''
      }
    },
    mixins: [methodAction],
    methods: {
      showDetail(val){
        let _self = this;
        let _data = {loanId:val};
        getLoan(_data).then((res)=>{
          _self.dialogTableVisible = true;
          if(res.data !== null){
            _self.detailShow = false;
            let detailData = res.data;
            let newData = {};
            for (let key in detailData){
                switch (key){
                  case 'loanId':
                    newData.ID = detailData[key];
                    break;
                  case 'birthDay':
                    newData['生日'] = detailData[key];
                    break;
                  case 'age':
                    newData['年龄'] = detailData[key];
                    break;
                  case 'salary':
                    newData['月收入'] = detailData[key];
                    break;
                  case 'grantMethod':
                    newData['工资发放形式'] = detailData[key];
                    break;
                  case 'isLocalSB':
                    newData['是否有本地社保'] = detailData[key];
                    break;
                  case 'isLocalGJJ':
                    newData['是否有公积金'] = detailData[key];
                    break;
                  case 'hasHouse':
                    newData['是否有房'] = detailData[key];
                    break;
                  case 'hasCar':
                    newData['是否有车'] = detailData[key];
                    break;
                  case 'hasInsurance':
                    newData['是否有寿险或疾病险'] = detailData[key];
                    break;
                  case 'hasCreditCard':
                    newData['是否有信用卡'] = detailData[key];
                    break;
                  case 'hasLoan':
                    newData['是否有微粒贷'] = detailData[key];
                    break;
                  default:
                    newData[key] = detailData[key];
                }
            }
            _self.detailData = newData;
          }else{
            _self.detailShow = true;

            _self.detailData = res.data;

          }
        })
      },
      changeUrl() {
        this.url = mp3;
        addEventListener('message', () => {
          this.$refs.audio.src = this.url;
          this.$refs.audio.play()
        }, false);
        postMessage(1, '*')
      },
      handleChanges(val){
        this.searchData.startTime = val.split(' -- ')[0];
        this.searchData.endTime = val.split(' -- ')[1];
      },
      exportData(){
        let vocation = this.addSmsTemplate.vocation;
        let zhuangtai = this.addSmsTemplate.zhuangtai;
        let jine = this.addSmsTemplate.jine;
        let searchData = this.searchData.key;
        let phone ='',name ='';
        if(searchData.length==11){
          phone = searchData
        }else{
          name =searchData
        }
        if(this.usertype==2){
          window.location.href = window.location.origin + '/partner/loan/export'+"?partnerId="+this.partnerIdre+"&status="+zhuangtai+"&loanAmount="+jine+"&vocation="+vocation+"&mobile="+phone+"&name="+name+"&channel="+this.searchData.channel+"&startTime="+this.searchData.startTime+"&endTime="+this.searchData.endTime+'&flag=admin'
        }else{
          window.location.href = window.location.origin  + '/partner/loan/export'+"?partnerId="+this.partnerIdre+"&status="+zhuangtai+"&loanAmount="+jine+"&vocation="+vocation+"&mobile="+phone+"&name="+name+"&channel="+this.searchData.channel+"&startTime="+this.searchData.startTime+"&endTime="+this.searchData.endTime
        }

      },
      trimK(){
        this.searchData.key = this.searchData.key.replace(/(^\s*)|(\s*$)/g,"");
      },
      searchEvent(){
        let vocation = this.addSmsTemplate.vocation;
        let zhuangtai = this.addSmsTemplate.zhuangtai;
        let jine = this.addSmsTemplate.jine;
        let searchData = this.searchData.key;
        let _self = this;
        if(searchData&&searchData.length==11){
          let data = {
            "currPage":1,
            "prePageResult":10,
            "partnerId":this.partnerIdre,
            "status":zhuangtai,
            "loanAmount":jine,
            "vocation":vocation,
            "mobile":searchData,
            "name":"",
            "channel":this.searchData.channel,
            "startTime":_self.searchData.startTime,
            "endTime":_self.searchData.endTime

          };
          listLoan(data).then(function(res){
            _self.tableData = res.data;
            _self.page = {
              pageSize:10,
              total:res.total,
              currentPage: 0
            }
          })
        }else {
          let data = {
            "currPage":1,
            "prePageResult":10,
            "partnerId":this.partnerIdre,
            "status":zhuangtai,
            "loanAmount":jine,
            "vocation":vocation,
            "mobile":'',
            "name":searchData,
            "channel":this.searchData.channel,
            "startTime":_self.searchData.startTime,
            "endTime":_self.searchData.endTime
          };
          listLoan(data).then(function(res){
            _self.tableData = res.data;
            _self.page = {
              pageSize:10,
              total:res.total,
              currentPage: 0
            }
          })
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleStop(index, row){
        let _self = this;
        this.$confirm(row.status=='已处理' ? '此操作将标注【'+row.name+'】未处理用户, 是否继续?' :  '此操作将标注【'+row.name+'】已处理'+'用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(row.status=='已处理'){
            revokeLoan({loanId:row.id}).then(function () {
              _self.tableData[index].status ="未处理"
              _self.$message({
                type: 'success',
                message: '设置成功!'
              });
            })
          }else{
            finishLoan({loanId:row.id}).then(function () {
              _self.tableData[index].status ="已处理"
              _self.$message({
                type: 'success',
                message: '设置成功!'
              });
            })
          }


        }).catch(() => {
          console.log('标注取消');
        });

      },
      handleSizeChange(val) {
        let _self = this;
        _self.page.pageSize = val;
        let data = {
          "currPage":this.page.currentPage,
          "prePageResult":val,
          "partnerId":this.partnerIdre
        };
        listLoan(data).then(function(res){
          _self.tableData = res.data;
          _self.page = {
            pageSize:val,
            total:res.total,
            currentPage: _self.page.currentPage,
          }
        })
      },
      handleCurrentChange(val) {
        let _self = this;
        console.log(`当前页: ${val}`);
        let vocation = this.addSmsTemplate.vocation;
        let zhuangtai = this.addSmsTemplate.zhuangtai;
        let jine = this.addSmsTemplate.jine;
        let searchData = this.searchData.key;
        if(searchData&&searchData.length==11) {
          let data = {
            "currPage": val,
            "prePageResult": _self.page.pageSize,
            "partnerId": this.partnerIdre,
            "status": zhuangtai,
            "loanAmount": jine,
            "vocation": vocation,
            "mobile": searchData,
            "name": "",
            "channel":this.searchData.channel,
            "startTime":_self.searchData.startTime,
            "endTime":_self.searchData.endTime
          }
          listLoan(data).then(function(res){
            _self.tableData = res.data;
          })
        }else{
          let data = {
            "currPage": val,
            "prePageResult":  _self.page.pageSize,
            "partnerId": this.partnerIdre,
            "status": zhuangtai,
            "loanAmount": jine,
            "vocation": vocation,
            "mobile": '',
            "name": searchData,
            "channel":this.searchData.channel,
            "startTime":_self.searchData.startTime,
            "endTime":_self.searchData.endTime
          }
          listLoan(data).then(function(res){
            _self.tableData = res.data;
            _self.page = {
              pageSize: _self.page.pageSize,
              total:res.total,
              currentPage: val,
            }
          })
        }

      },
      loadPage(val){
        let data = {
          "currPage":1,
          "prePageResult":10,
          "partnerId":val
        };
        let _self = this;
        listLoan(data).then(function(res){
          _self.tableData = res.data;
          _self.page = {
            pageSize:10,
            total:res.total,
            currentPage: 1
          }
        })
      },
      handleChange(val){
        console.log(val)
      },
    },

    watch:{
      "message2":function(val){
        let _self = this;
        if(val[0]&&val[0].data&&val[0].data.msg&&val[0].data.msg.indexOf("您有新的订单啦")>-1){
          setTimeout(()=>{
            _self.changeUrl();
            _self.handleSocketMessage(val[0].data.data.name+":"+val[0].data.data.mobile);
            let data = {
              "currPage":1,
              "prePageResult":10,
              "partnerId":_self.partnerIdre
            };
            listLoan(data).then(function(res){
              _self.tableData = res.data;
              _self.page = {
                pageSize:10,
                total:res.total,
                currentPage: 1
              }
            })
          },20)
        }
      },
      'partnerObj.partnerId': function(val) {
//        this.loadPage(val);
//        this.partnerIdre = val;
//        this.addSmsTemplate= {
//          name:'',
//          zhuangtai: '',
//          jine:'',
//          vocation: '',
//          content:''
//        }
//        this.searchData = {
//          key:'',
//          orderNo:'',
//          channel:'',
//          startTime:'',
//          endTime:''
//        }
//        this.value6='';
//        this.value7 = '';
      },
      '$route' (to, from) {
        // react to route changes...
        let _self= this;
        console.log(to.params.id)
        this.loadPage(to.params.id);
        this.partnerIdre = to.params.id;
        this.addSmsTemplate= {
          name:'',
          zhuangtai: '',
          jine:'',
          vocation: '',
          content:''
        }
        this.searchData = {
          key:'',
          orderNo:'',
          channel:'',
          startTime:'',
          endTime:''
        }
        this.value6='';
        this.value7 = '';
      }
    },
    computed: {
      ...mapState({
        partnerObj: state=>state.menu,
        message2: state=>state.socket.message,
      })
    },
    created() {
        let _self= this;
      if(JSON.parse(localStorage.getItem("userInfoNow")).type==2){
        this.partnerId = this.$route.params.id;
        this.partnerIdre = this.$route.params.id;
      }else{
        if(this.$route.params.id!=JSON.parse(localStorage.getItem("userInfoNow")).partnerId){
          this.$router.push({ path:'/'});
        }
         this.partnerId =JSON.parse(localStorage.getItem("userInfoNow")).partnerId;
        this.partnerIdre = JSON.parse(localStorage.getItem("userInfoNow")).partnerId;
      }
      this.username = JSON.parse(localStorage.getItem("userInfoNow")).username;
      this.usertype = JSON.parse(localStorage.getItem("userInfoNow")).type;

      let data = {
        "currPage":1,
        "prePageResult":10,
        "partnerId":this.$route.params.id
      };
      listLoan(data).then(function(res){
        _self.tableData = res.data;
        _self.page = {
          pageSize:10,
          total:res.total,
          currentPage: 1
        }
      })
    }
  }
</script>
