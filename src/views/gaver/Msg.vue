<template>
    <h3>信息管理</h3>
    <el-button type="primary" @click="dialogAdd = true">新增</el-button>
    <el-button type="danger" @click="delAll()">删除</el-button>
    <br>
    <el-input
      v-model="message.title"
      style="max-width: 400px"
      placeholder="标题"
      class="input-with-select"
    >
      <template #prepend>
        <el-button :icon="Search" @click="quire()"/>
      </template>
      <template #append>
        <el-select v-model="message.status" placeholder="状态" style="width: 80px">
          <el-option label="已读" value="1" />
          <el-option label="未读" value="0" />
        </el-select>
        &emsp;
        &emsp;
        &emsp;
        <el-select v-model="message.type" placeholder="类型" style="width: 80px">
        
          <el-option label="通知" value="1" />
          <el-option label="反馈" value="0" />
        </el-select>
      </template>
      &emsp;
      &emsp;
    </el-input>
      <el-date-picker
        v-model="message.time"
        type="date"
        placeholder="Pick a day"
        :size="size"
      />
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column label="标题" prop="title" />
      <el-table-column label="发送方" prop="fromName" />
      <el-table-column label="接收方" prop="toName" />
      <el-table-column label="时间" prop="time" />
      <!-- <el-table-column label="状态" :prop="status" :formatter="dySta" /> -->
      <el-table-column label="类别" prop="type=" :formatter="dyTyp" />
      <el-table-column align="right">
        
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            查看
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 20]"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />

    <!-- 新增 -->
    <el-dialog
    v-model="dialogAdd"
    title="通知"
    width="500"
    draggable
    overflow
  >
    <div>
        <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="标题">
      <el-input v-model="addMes.title" />
    </el-form-item>
    <el-form-item label="类型">
      <el-radio-group v-model="addMes.type">
        <el-radio value="1">公告</el-radio>
        <el-radio value="0">回复</el-radio>
      </el-radio-group>

    </el-form-item>
    <el-form-item label="回复给" v-if="addMes.type==0">
      <el-input v-model="addMes.toName" placeholder="请指定用户名" />
    </el-form-item>
    
    <el-form-item label="内容">
      <el-input v-model="addMes.content" type="textarea" />
    </el-form-item>
  </el-form>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogAdd = false">取消</el-button>
        <el-button type="primary" @click="send()">
          发送
        </el-button>
      </div>
    </template>
  </el-dialog>


  <!-- 编辑 -->
  <el-dialog
    v-model="dialogEdit"
    title="通知"
    width="500"
    draggable
    overflow
  >
    <div>
        <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="标题">
      <el-input disabled="true" v-model="editMes.title" />
    </el-form-item>
    <el-form-item label="来自">
      <el-input disabled="true" v-model="editMes.fromName" />
    </el-form-item>
    
    <el-form-item label="日期">
      <el-col :span="11">
        <el-date-picker
          disabled="true"
          v-model="editMes.time"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      
    </el-form-item>
    
    
    <el-form-item label="状态">
      <el-radio-group v-model="editMes.status">
        <el-radio value="1">已读</el-radio>
        <el-radio value="0">未读</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="内容">
      <el-input disabled="true" v-model="editMes.content" type="textarea" />
    </el-form-item>
    
  </el-form>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogEdit = false">取消</el-button>
        <el-button type="primary" @click="rep=1">
          回复
        </el-button>
      </div>
      <div v-if="rep==1">
        <el-form-item label="标题">
        <el-input v-model="repMes.title" />
        </el-form-item>
        <el-form-item label="内容">
        <el-input v-model="repMes.content" type="textarea" />
        </el-form-item>
        <el-button type="primary" @click="edit">
          确认
        </el-button>


      </div>
    </template>

  </el-dialog>
</template>
  
<script  setup>
import { computed, ref,onMounted} from 'vue'
import api from '../../api/index'
import { Search } from '@element-plus/icons-vue'

const tableData=ref([])
const multipleSelection = ref([])
const total=ref(0)
const value1 = ref('')
const currentPage = ref(1)
const pageSize = ref(5)
const dialogAdd = ref()
const dialogEdit = ref()
const ids = ref([])
const rep=ref(0)
  

const message=ref({})

const dySta=(row,index)=>{
  if(row.status==1)
    return '已读'
  else
    return '未读'
}
const dyTyp=(row,index)=>{
  if(row.type==1)
    return '通知'
  else
    return '反馈'
}
const addMes=ref({
    fromName:'',//管理员

    status:0
})
const editMes=ref({
    fromName:'',//管理员
    toName:'',//反馈用户
    constent:''

})
const repMes=ref({
  title:'',
  fromName:'经济',//管理员
  toName:'',
  status:0
    
})
  
const search = ref('')
//   const filterTableData = computed(() =>
//     tableData.filter(
//       (data) =>
//         !search.value ||
//         data.name.toLowerCase().includes(search.value.toLowerCase())
//     )
//   )
const quire=()=>{
    console.log("ikun")
    init()
}
const handleEdit = (index, row) => {
    editMes.value=row
    dialogEdit.value=true
    console.log(index, row)
}
const edit=()=>{
  
    api.postReq("/fat/add",repMes.value).then(res=>{
        if(res.data.code==1)
          ElMessage.success('发送成功')
        else
          ElMessage.error('发送失败')
    })
    dialogEdit.value=false
}
const handleDelete = (index, row) => {
    console.log(row)

    api.postReq("/fat/del?id="+row.id).then(res=>{
        if(res.data.code==1){
          ElMessage.success(res.data.msg)
          init()

        }
        else
          ElMessage.error(res.data.msg)

    })

}
const handleSelectionChange = (val) => {
    // console.log(val)
  multipleSelection.value = val
  ids.value=val.map(x=>x.id)
}
onMounted(()=>{
    init()

})
const init=()=>{
    api.postReq("/fat/show?pageNum="+currentPage.value+"&pageSize="+pageSize.value,message.value).then(res=>{
        console.log(res.data.data.list)
        tableData.value=res.data.data.list
        currentPage.value=res.data.data.pageNum
        pageSize.value=res.data.data.pageSize
        total.value=res.data.data.total
            
    })

}
const send=()=>{
    api.postReq("/fat/add",addMes.value).then(res=>{
        if(res.data.code==1)
          ElMessage.success('发送成功')
        else
          ElMessage.error('发送失败')
    })
    dialogAdd.value=false
}


const delAll=()=>{
    api.postReq("/fat/delAll",ids.value).then(res=>{
        if(res.data.code!=0){
          ElMessage.success(res.data.msg)
          init()

        }
        else
          ElMessage.error(res.data.msg)

    })
}

 
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
  pageSize.value=val
  init()
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
  currentPage.value=val
  init()
}
</script>
  

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
.demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
