<template>

    <!-- 搜索 -->
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
    <el-form-item label="卡名称" style="width: 200px;">
      <el-input v-model="searchForm.name" placeholder="请输入卡名称" clearable />
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="searchForm.content" placeholder="请输入描述" clearable />
    </el-form-item>
    <el-form-item label="价格" style="width: 200px;">
      <el-input v-model="searchForm.price" placeholder="请输入卡价格" clearable />
    </el-form-item>
    <el-form-item label="流量" style="width: 150px;">
      <el-input v-model="searchForm.genflow" placeholder="请输入最少流量" clearable />
    </el-form-item>
    <el-form-item label="通话时长">
      <el-input v-model="searchForm.chattime" placeholder="请输入最少通话时间" clearable />
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" @click="search">查询</el-button>
    </el-form-item>
  </el-form>

  <!-- 新增 批量删除 -->
<el-button type="primary" @click="dialogAdd=true">新增</el-button> 
<el-popconfirm title="是否删除?" @confirm="deleteAll()">
  <template #reference>
    <el-button
      type="danger"
      >
      批量删除
    </el-button>
  </template>
</el-popconfirm>

<!-- 展示 修改 删除 -->
<el-table :data="tableData" 
border style="width: 100%"
@selection-change="handleSelectionChange"
>
    <el-table-column type="selection" width="55" />
    <el-table-column sortable prop="id" label="编号" width="180" />
    <el-table-column prop="name" label="卡名称" width="180" />
    <el-table-column prop="content" label="描述" />
    <el-table-column prop="price" label="价格" />
    <el-table-column prop="genflow" label="通用流量" />
    <el-table-column prop="directflow" label="定向流量" />
    <el-table-column prop="chattime" label="通话时长" />
    <el-table-column label="操作" align="center">
    
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          修改
        </el-button>
        
          <el-popconfirm title="是否删除?" @confirm="handleDelete(scope.$index, scope.row)">
            <template #reference>
              <el-button
                size="small"
                type="danger"
                >
                删除
              </el-button>
            </template>
          </el-popconfirm>
        
      </template>
    </el-table-column>
  </el-table>

   <!-- 分页 layout="total, sizes, prev, pager, next, jumper"
                total：控制前段显示总条数
                sizes：控制是否显示每页条数
                prev 上一页, pager 页码数, next 下一页, 
                jumper:控制是否跳转页数
-->
<el-pagination
       
       v-model:current-page="currentPage"
       v-model:page-size="pageSize"
       :page-sizes="[5, 10, 50, 100]"
       :size="size"
       :disabled="disabled"
       :background="background"
       layout="total, sizes, prev, pager, next, jumper"
       :total="total"
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
     />

     <!-- 新增窗口弹出层 默认隐藏 单机新增才会显示 -->
<el-dialog
    v-model="dialogAdd"
    title="新增用户"
    width="500"
    draggable
    overflow
  >
  <!-- 表单验证 -->
    <span>
        <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="addForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    :size="size"
    status-icon
  >
  <el-form-item label="手机卡名" prop="name">
      <el-input placeholder="请输入卡名" v-model="addForm.name" />
    </el-form-item>
    <el-form-item label="描述" prop="content">
      <el-input placeholder="请输入描述" v-model="addForm.content" />
    </el-form-item>
    <el-form-item label="价格" prop="price">
      <el-input placeholder="请输入价格" v-model="addForm.price" />
    </el-form-item>
    <el-form-item label="通用流量" prop="genflow">
      <el-input placeholder="请输入通用流量大小" v-model="addForm.genflow" />
    </el-form-item>
    <el-form-item label="定向流量" prop="directflow">
      <el-input placeholder="请输入定向流量大小" v-model="addForm.directflow" />
    </el-form-item>
    <el-form-item label="通话时长" prop="chattime">
      <el-input placeholder="请输入通话时长" v-model="addForm.chattime" />
    </el-form-item>
   
  </el-form>
    </span>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogAdd = false">取消</el-button>
        <el-button type="primary" @click="add()">
          新增
        </el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 修改弹出框 默认隐藏 单机修改才会显示-->
  <el-dialog
    v-model="dialogEdit"
    title="修改用户"
    width="500"
    draggable
    overflow
  >
  <!-- 表单验证 -->
    <span>
        <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="editForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    :size="size"
    status-icon
  >
  <el-form-item label="手机卡名" prop="name">
      <el-input placeholder="请输入卡名" v-model="editForm.name" />
    </el-form-item>
    <el-form-item label="描述" prop="content">
      <el-input placeholder="请输入描述" v-model="editForm.content" />
    </el-form-item>
    <el-form-item label="价格" prop="price">
      <el-input placeholder="请输入价格" v-model="editForm.price" />
    </el-form-item>
    <el-form-item label="通用流量" prop="genflow">
      <el-input placeholder="请输入通用流量大小" v-model="editForm.genflow" />
    </el-form-item>
    <el-form-item label="定向流量" prop="directflow">
      <el-input placeholder="请输入定向流量大小" v-model="editForm.directflow" />
    </el-form-item>
    <el-form-item label="通话时长" prop="chattime">
      <el-input placeholder="请输入通话时长" v-model="editForm.chattime" />
    </el-form-item>
  </el-form>
    </span>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogEdit = false">取消</el-button>
        <el-button type="primary" @click="edit()">
          修改
        </el-button>
      </div>
    </template>
  </el-dialog>


</template>

<script lang="ts" setup>
import api from "../../api/index";
import {ref,reactive, onMounted} from "vue"
import { resultProps, type ComponentSize,type FormRules} from 'element-plus'
import { ElMessage } from "element-plus";
import 'element-plus/dist/index.css'

// 搜索的用户数据
const searchForm = ref({
  name: null,
  content: null,
  price: null,
  genflow: null,
  chattime:null

})
const search = () => {
  initData()
}

// 分页的函数
const currentPage = ref(1)
const pageSize = ref(5)
const total=ref(50)
const size = ref<ComponentSize>('default')
const background = ref(true)
const disabled = ref(false)
//修改每页条数触发
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  //每页条数赋值
  pageSize.value=val
  //重新初始化函数
  initData()
}
//修改当前页数触发的函数
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  currentPage.value=val;
  initData()
}
//类似于java定义类的类型
interface Card {
  id:Number,
  name:String,
  content:String,
  price:Number,
  genflow:Number,
  directflow:Number,
  chattime:Number,
  image:String,
}

//新增弹出层 显示状态
const dialogAdd=ref(false)
//新增的表单属性对象
const addForm=ref({
    name:'',
    content:'',
    price:'',
    genflow:'',
    directflow:'',
    chattime:''
})

//新增的表单验证
const rules = reactive<FormRules<Card>>({
    name:[
    {     required: true, message: '卡名不能为空', trigger: 'blur' },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },blur失去焦点
    ],
    content:[
        { required: true, message: '描述不能为空', trigger: 'blur' }
    ],
    price:[
        { required: true, message: '价格不能为空', trigger: 'blur' }
    ],
    genflow:[
        { required: true, message: '通用流量不能为空', trigger: 'blur' }
    ],
    directflow:[
        { required: true, message: '定向流量不能为空', trigger: 'blur' }
    ],
    chattime:[
        { required: true, message: '通话时长不能为空', trigger: 'blur' }
    ]
})

//新增函数
const add=()=>{
  api.postReq('/card/add',addForm.value).then(res=>{
    console.log(res.data.msg)
    let result=res.data
    if(result.code==1){
      //成功的提示
      ElMessage.success(result.msg)
      //重新加载数据
      initData()
      //清空新增表单的数据
      addForm.value={
        name:'',
        content:'',
        price:'',
        genflow:'',
        directflow:'',
        chattime:''
      }
    }else{
      //失败的提示
      const open4 = () => {
      ElMessage.error(result.msg)
      }
    }
  })
    //关闭新增弹出层
    dialogAdd.value=false
}

//修改的弹出层
const dialogEdit=ref(false)
//修改的表单属性(默认值显示原来数据)
const editForm=ref<Card>({
    name:'',
    content:'',
    price:'',
    genflow:'',
    directflow:'',
    chattime:''
})
//修改函数
const edit=()=>{
  api.postReq('/card/update',editForm.value).then(res=>{
    console.log(res.data.msg)
    let result=res.data
    if(result.code==1){
      //成功的提示
      ElMessage.success(result.msg)
      //重新加载数据
      initData()
      //清空新增表单的数据
      editForm.value={
        name:'',
        content:'',
        price:'',
        genflow:'',
        directflow:'',
        chattime:''
      }
    }else{
      //失败的提示
      const open4 = () => {
      ElMessage.error(result.msg)
      }
    }

    //关闭修改弹出层
    dialogEdit.value=false
  })
}
//修改表单验证 跟上面的新增的一样 直接用上面的

//定义批量删除的id数组
const ids=ref<Number[]>([])
// 批量删除
const deleteAll=()=>{
    console.log(ids.value)
    
    api.postReq('/card/delAll',ids.value).then(res=>{
      let result=res.data
    if(result.code==1){
      //成功的提示
      ElMessage.success(result.msg)
      //重新加载数据
      initData()
    }else{
      //失败的提示
      const open4 = () => {
      ElMessage.error(result.msg)
      }
    }
    })
}

const multipleSelection = ref<Card[]>([])
// 复选框变了就触发函数
const handleSelectionChange = (val: Card[]) => {
  multipleSelection.value = val
  //将对象数组转换成创数组
  ids.value=val.map(x=>x.id)
}

//修改触发的函数
const handleEdit = (index: number, row: Card) => {
  console.log(index, row)
  //显示原来用户的信息
  editForm.value=row
  //显示修改的弹出层

  dialogEdit.value=true
}

//删除触发的函数
const handleDelete = (index: number, row: Card) => {
  console.log(row.id)
  api.postReq('/card/del?id='+row.id).then(res=>{
    console.log(res.data.msg)
    let result=res.data
    if(result.code==1){
      //成功的提示
      ElMessage.success(result.msg)
      //重新加载数据
      initData()
    }else{
      //失败的提示
      const open4 = () => {
      ElMessage.error(result.msg)
      }
    }
  })
}
//通过后端动态查询 挂载函数处理 查询
const tableData = ref([])

//挂载函数 第一次访问触发
onMounted(()=>{
    //初始化数据 给tableData赋值
    initData();
})
const initData=()=>{
    api.postReq('/card/selectAll?pageNum='+currentPage.value+'&pageSize='+pageSize.value,searchForm.value)
    .then(res=>{
        let result=res.data;
        console.log(result);
        console.log(result.data.list)
        //给表格的集合赋值
        tableData.value=result.data.list;
        // 分页当前页数 
        currentPage.value=result.data.pageNum
        pageSize.value=result.data.pageSize
        total.value=result.data.total
    })
}

</script>

<style scoped>
</style>
