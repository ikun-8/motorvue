<template>
    <!--搜索-->
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="店铺名称">
          <el-select v-model="searchForm.storeName" placeholder="请选择店铺名称" clearable>
           <el-option label="全部" value="全部"/>
            <el-option label="洗烘" value="洗烘" />
            <el-option label="饮水" value="饮水" />
            <el-option label="淋浴" value="淋浴" />
            <el-option label="吹风机" value="吹风机" />
            <el-option label="充电桩" value="充电桩" />
          </el-select>
          </el-form-item>
          <el-form-item label="支付方式">
          <el-select v-model="searchForm.method" placeholder="请选择支付方式" clearable>
            <el-option label="微信" value="微信支付"/>
            <el-option label="支付宝" value="支付宝支付"/>
            <el-option label="银行卡" value="银行卡支付"/>
            <el-option label="其他" value="其他方式支付"/>
          </el-select>
        </el-form-item>
        <el-form-item label="实付金额">
          <el-input style="width: 100px" v-model="searchForm.minPayment"  placeholder="最小金额" clearable />
          -
          <el-input style="width: 100px" v-model="searchForm.maxPayment"  placeholder="最大金额" clearable />
        </el-form-item>
        <el-form-item label="订单支付时间">
          <el-date-picker style="width: 100px" v-model="searchForm.beginTime" type="date" placeholder="开始时间" clearable />
          -
          <el-date-picker style="width: 100px" v-model="searchForm.lastTime" type="date" placeholder="结束时间" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
        </el-form-item>
      </el-form>
      <!-- 新增 批量删除 -->
      <el-button type="primary" @click="dialogAdd = true">新增</el-button>
     
      <el-popconfirm title="确认删除？" @confirm="deleteAll">
        <template #reference>
          <el-button type="danger">批量删除</el-button>
        </template>
      </el-popconfirm>
    
      <!-- table 展示（修改 删除） -->
      <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column fixed type="selection" width="55" />
        <el-table-column fixed sortable prop="id" label="编号" width="80" />
        <el-table-column prop="amount" label="订单总额" width="85" />
        <el-table-column prop="payment" label="实付款" />
        <el-table-column prop="unlockTime" label="解锁时间" width="85"/>
        <el-table-column prop="endTime" label="结束时间" width="85"/>
        <el-table-column prop="paymentTime" label="支付时间" width="85"/>
        <el-table-column prop="method" label="付款方式" width="85"/>
        <el-table-column prop="deviceName" label="设备名称" width="85"/>
        <el-table-column prop="storeName" label="店铺名称" width="85"/>
        <el-table-column prop="type" label="消费类型" width="85"/>
        <el-table-column prop="userTickets" label="消耗小票" width="85"/>
        <el-table-column prop="userAddress" label="用户地址" width="85"/>
        <el-table-column prop="userPoints" label="消耗积分" width="85"/>
        <el-table-column fixed = "right" align="center" label="操作" width="160">
    
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
             修改
            </el-button>
            <el-popconfirm title="确认删除？" @confirm="handleDelete(scope.$index, scope.row)">
        <template #reference>
          <el-button size="small" type="danger">
             删除
            </el-button>
        </template>
      </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <!-- layout="total, sizes, prev, pager, next, jumper"
       total：控制是否前端显示总条数
       sizes:控制是否前端显示每页条数下拉框
       prev:控制显示上一页
       pager:页码数
       next:下一页
       jumper:跳转到指定页码数 -->
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[5, 10, 50, 100]"
        :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
        :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      <!--新增窗口弹出层：待定 还要加入多表关联-->
      <el-dialog v-model="dialogAdd" title="新增订单" width="500" draggable overflow>
        <el-form ref="ruleFormRef" style="max-width: 600px" :model="addForm" :rules="rules" label-width="auto"
          class="demo-ruleForm" :size="size" status-icon>
          <el-form-item label="消费总额" prop="amount">
            <el-input  placeholder="请输入消费总额" v-model="addForm.amount" />
          </el-form-item>
          <el-form-item label="实付款" prop="payment">
            <el-input  placeholder="请输入实付款" v-model="addForm.payment" />
          </el-form-item>
          <el-form-item label="设备名称" prop="deviceName">
            <el-input  placeholder="请输入设备名称" v-model="addForm.deviceName" />
          </el-form-item>
          <el-form-item label="支付时间" required>
            <el-col :span="11">
              <el-form-item prop="paymentTime">
                <el-date-picker v-model="addForm.paymentTime" type="date" aria-label="Pick a time" placeholder="请输入支付时间"
                  style="width: 100%" />
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="支付方式">
          <el-select v-model="addForm.method" placeholder="请选择支付方式" clearable>
            <el-option label="微信" value="微信支付" />
            <el-option label="支付宝" value="支付宝支付" />
            <el-option label="银行卡" value="银行卡支付" />
            <el-option label="其他" value="其他支付" />
          </el-select>
        </el-form-item>
          <el-form-item label="店铺名称" prop="storeName">
            <el-radio-group v-model="addForm.storeName" size="large">
          <el-radio-button label="淋浴" value="淋浴" />
          <el-radio-button label="饮水" value="饮水" />
          <el-radio-button label="洗烘" value="洗烘" />
          <el-radio-button label="吹风机" value="吹风机" />
          <el-radio-button label="充电桩" value="充电桩" />
        </el-radio-group>
          </el-form-item>
        </el-form>
    
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogAdd = false">取消</el-button>
            <el-button type="primary" @click="add">
              新增
            </el-button>
          </div>
        </template>
      </el-dialog>
        <!--修改窗口弹出层：默认隐藏 单击修改才会显示-->
        <el-dialog v-model="dialogEdit" title="修改订单" width="500" draggable overflow>
            <el-form ref="ruleFormRef" style="max-width: 600px" :model="addForm" :rules="rules" label-width="auto"
          class="demo-ruleForm" :size="size" status-icon>
          <el-form-item label="消费总额" prop="amount">
            <el-input  placeholder="请输入消费总额" v-model="editForm.amount" />
          </el-form-item>
          <el-form-item label="实付款" prop="payment">
            <el-input  placeholder="请输入实付款" v-model="editForm.payment" />
          </el-form-item>
          <el-form-item label="设备名称" prop="deviceName">
            <el-input  placeholder="请输入设备名称" v-model="editForm.deviceName" />
          </el-form-item>
          <el-form-item label="支付时间" required>
            <el-col :span="11">
              <el-form-item prop="paymentTime">
                <el-date-picker v-model="editForm.paymentTime" type="date" aria-label="Pick a time" placeholder="请输入支付时间"
                  style="width: 100%" />
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="支付方式">
          <el-select v-model="editForm.method" placeholder="请选择支付方式" clearable>
            <el-option label="微信" value="微信支付" />
            <el-option label="支付宝" value="支付宝支付" />
            <el-option label="银行卡" value="银行卡支付" />
            <el-option label="其他" value="其他方式支付" />
          </el-select>
        </el-form-item>
          <el-form-item label="店铺名称" prop="storeName">
            <el-radio-group v-model="editForm.storeName" size="large">
          <el-radio-button label="淋浴" value="淋浴" />
          <el-radio-button label="饮水" value="饮水" />
          <el-radio-button label="洗烘" value="洗烘" />
          <el-radio-button label="吹风机" value="吹风机" />
          <el-radio-button label="充电桩" value="充电桩" />
        </el-radio-group>
          </el-form-item>
        </el-form>
    
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogEdit = false">取消</el-button>
            <el-button type="primary" @click="edit">
             修改
            </el-button>
          </div>
        </template>
      </el-dialog>
    </template>
    
    <script lang="ts" setup>
    import api from '../../api/index'
    import axios from "axios";
    import { ref, reactive, onMounted } from "vue"
    import type { ComponentSize ,FormRules} from 'element-plus'
    import { ElMessage} from 'element-plus'
    import 'element-plus/dist/index.css'
    //类似于Java定义类的类型
    interface Orders {
      id: number
     amount: number,
     payment:number,
     unlockTime:Date,
     endTime:Date,
     paymentTime:Date,
     method:string,
     storeName:string,
     deviceName:string,
     type:string,
     userTickets:number,
     userAddress:string,
     userPoints:number
    }
    //定义批量删除的id数组
    const ids = ref<Number[]>([])
    const total = ref(0)
    //修改的弹出层
    const dialogEdit = ref(false)
    //修改
    const editForm = ref({
        amount:0,
        payment:0,
        paymentTime:new Date(),
        method:'',
        storeName:'',
        deviceName:''
    })
    //修改函数
    const edit = () => {
      api.postReq('/orders/update',editForm.value).then(res=>{
        let result = res.data;
        if(result.code==1){
          //成功的提示
          ElMessage.success(result.msg)
          //重新加载数据
          initData()
          //清空修改表单的数据
         editForm.value={
            amount:0,
        payment:0,
        paymentTime:new Date(),
        method:'',
        storeName:'',
        deviceName:''}
        }else{
          ElMessage.error(result.msg)
        }
      })
      //关闭新增弹出层
      dialogEdit.value = false;
    }
    //表单验证
    const rules = reactive<FormRules<Orders>>({
      amount: [
        { required: true, message: '消费金额不能为空', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      payment:[{ required: true, message: '实付款不能为空', trigger: 'blur' },],
      paymentTime:[{ required: true, message: '支付时间不能为空', trigger: 'blur' },],
      method:[{ required: true, message: '支付方式不能为空', trigger: 'blur' },],
      storeName:[{ required: true, message: '店铺不能为空', trigger: 'blur' },],
      deviceName:[{ required: true, message: '设备不能为空', trigger: 'blur' },]
    })
    //新增表单属性对象 待定
    const addForm = ref({
        amount:'',
        payment:'',
        paymentTime:'',
        method:'',
        storeName:'',
        deviceName:''
    })
    //新增函数
    const add = () => {
      api.postReq('/orders/add',addForm.value).then(res=>{
        let result = res.data;
        if(result.code==1){
          //成功的提示
          ElMessage.success(result.msg)
          //重新加载数据
          initData()
          //清空新增表单的数据
          addForm.value={
        amount:'',
        payment:'',
        paymentTime:'',
        method:'',
        storeName:'',
        deviceName:''}
        }else{
          ElMessage.error(result.msg)
        }
      })
      //关闭新增弹出层
      dialogAdd.value = false;
    }
    //新增弹出层 显示状态
    const dialogAdd = ref(false)
    //搜索
    const search = () => {
      //初始化数据分页搜索
      initData();
    }
    //搜索订单数据 待定
    const searchForm = ref({
      storeName: null,
      method: null,
      minPayment:null,
      maxPayment:null,
     beginTime: null,
     lastTime: null
    })
    const currentPage = ref(1)
    const pageSize = ref(5)
    const size = ref<ComponentSize>('default')
    const background = ref(true)
    const disabled = ref(false)
    //修改每页条数触发的函数
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
      //每页条数赋值
      pageSize.value=val;
      //重新初始化数据
      initData();
    }
    //修改当前页数触发的函数
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
      currentPage.value=val;
      initData();
    }
    const handleEdit = (index: number, row: Orders) => {
      console.log(index, row)
      //显示原来用户的信息
      editForm.value=row;
      //显示修改的弹出层
      dialogEdit.value=true
    }
    //删除触发的函数
    const handleDelete = (index: number, row: Orders) => {
      console.log(index, row)
      api.postReq('/orders/deleteById?id='+row.id).then(res=>{
        let result = res.data;
        if(result.code==1){
          //成功的提示
          ElMessage.success(result.msg)
          //重新加载数据
          initData()
        }else{
          //失败的提示
          ElMessage.error(result.msg)
        }
      })
    }
    const multipleSelection = ref<Orders[]>([])
    //复选框只要改变了就触发的函数
    const handleSelectionChange = (val: Orders[]) => {
      multipleSelection.value = val
      //将对象数组转换成id数组
      ids.value=val.map(x=>x.id)
    }
    //通过后端动态查询 不能写死 挂在函数 来查询
    const tableData = ref([])
    //挂载函数：第一次访问才会触发
    onMounted(()=>{
    //初始化数据 给tableData赋值
    initData();
    })
    const initData=()=>{
    api.postReq('/orders/selectAll?pageNum='+currentPage.value+'&pageSize='+pageSize.value,searchForm.value).then(res=>{
     let result =  res.data;
     //给表格集合赋值
     tableData.value=result.data.list;
     //分页当前页数 每页。。。总条数。。。
     currentPage.value=result.data.pageNum;
     pageSize.value=result.data.pageSize;
     total.value=result.data.total;
    })
    }
    //批量删除触发的函数
    const deleteAll = () => {
      console.log(ids.value);
      api.postReq('/orders/deleteAll',ids.value).then(res=>{
        let result = res.data;
        if(result.code==1){
          //成功的提示
          ElMessage.success(result.msg)
          //重新加载数据
          initData()
        }else{
          //失败的提示
          ElMessage.error(result.msg)
        }
      })
    }
    </script>
    
    <style scoped>
    .demo-form-inline .el-input {
      --el-input-width: 50px;
    }
    
    .demo-form-inline .el-select {
      --el-select-width: 100px;
    }
    </style>
    