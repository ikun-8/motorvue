<template>
    <el-breadcrumb :separator-icon="ArrowRight">
       <el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
       <el-breadcrumb-item>地址信息</el-breadcrumb-item>
     </el-breadcrumb>
     <el-divider></el-divider>
     <div>
       <el-row :gutter="30">
       <el-col span="4">
         <span>账号:</span>
         <el-input v-model="searchForm.userAccount" placeholder="请输入账号" style="width: 240px" />
       </el-col>
       <el-col span="4">
         <span>手机号:</span>
         <el-input v-model="searchForm.phone" placeholder="请输入手机号" style="width: 120px" />
       </el-col>
       <el-col span="4">
         <span>省会:</span>
         <el-input v-model="searchForm.addressProvince" placeholder="请输入省会" style="width: 120px" />
       </el-col>
       <el-col span="4">
         <span>城市:</span>
         <el-input v-model="searchForm.addressCity" placeholder="请输入城市" style="width: 120px" />
       </el-col>
       <el-col span="4">
         <span>地区:</span>
         <el-input v-model="searchForm.addressArea" placeholder="请输入地区" style="width: 120px" />
       </el-col>
       <el-col span="4">
         <el-button type="success" round @click="search">查询</el-button>
       </el-col>
     </el-row>
     </div>
     <el-divider/>
     <div>
       <el-table
               :data="tableData" 
               border
               style="width: 100%"
               @selection-change="handleSelectionChange"
           >
               <el-table-column type="selection" width="55" />
               <el-table-column prop="phone" label="手机号" width="180" />
               <el-table-column prop="addressProvince" label="省份" width="100" />
               <el-table-column prop="addressCity" label="城市" width="100" />
               <el-table-column prop="addressArea" label="地区" width="100" />
               <el-table-column prop="addressDetail" label="地址详情" width="600" />
               <el-table-column prop="userAccount" label="账号" width="180" />
               <el-table-column fixed="right" label="操作">
                   <template #default="scope">
                       <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                           编辑
                       </el-button>
                       <el-popconfirm title="确认要删除该用户信息吗?" @confirm="handleDelete(scope.$index, scope.row)">
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
           <div class="demo-pagination-block">
       <el-pagination
         v-model:current-page="currentPage"
         v-model:page-size="pageSize"
         :size="size"
         :disabled="disabled"
         :background="background"
         layout="total,prev, pager, next, jumper"
         :total="total"
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
       />
     </div>
     </div>
   </template>
   
   <script lang="ts" setup>
   import { onMounted, ref } from "vue"
   import { ArrowRight } from '@element-plus/icons-vue'
   import api from '../../api/index'
   import type { ComponentSize } from 'element-plus'
   import { ElMessage } from 'element-plus'
   import 'element-plus/dist/index.css'
   
   //分页
   const currentPage = ref(1)
   const pageSize = ref(5)
   const size = ref<ComponentSize>('default')
   const background = ref(true)
   const disabled = ref(false)
   
   const handleSizeChange = (val: number) => {
     console.log(`${val} items per page`)
     pageSize.value = val
     initDate()
   }
   const handleCurrentChange = (val: number) => {
     console.log(`current page: ${val}`)
     currentPage.value = val
     initDate()
   }
   
   const ids = ref<Number[]>([])
   const multipleSelection = ref<Address[]>([])
   const handleSelectionChange = (val: Address[]) => {
     multipleSelection.value = val
     ids.value = val.map(x => x.addressId)
   }
   
   interface Address {
     addressId:Number,
     phone:string,
     addressProvince:string,
     addressCity:string,
     addressArea:string,
     userAccount:string
   }
   
   const handleEdit = (index: number, row: Address) => {
     console.log(index, row)
   }
   const handleDelete = (index: number, row: Address) => {
     console.log(index, row)
     api.postReq('/address/delete?addressId=' + row.addressId).then(res => {
       let result = res.data;
           if(result.code == 1){
             ElMessage.success(result.msg);
             initDate();
           }else{
             ElMessage.error(result.msg)
           }
     })
     
   }
   
   const search = () => {
     initDate()
   }
   
   const searchForm = ref({
     phone:null,
     addressProvince:null,
     addressCity:null,
     addressArea:null,
     userAccount:null
   })
   
   const total = ref()
   const tableData = ref([])
   
   const initDate = () => {
     api.postReq('/address/show?pageNum='+ currentPage.value + '&pageSize=' + pageSize.value +'',searchForm.value)
     .then(res=>{
           let result = res.data;
           console.log(res.data.data)
           //给表格集合赋值
           tableData.value = result.data.list;
           //分页
           total.value = result.data.total
           currentPage.value = result.data.pageNum
           pageSize.value = result.data.pageSize
       })
   }
   
   onMounted(() => {
       //初始化数据，给tableDate赋值
       initDate();
   })
   
   </script>
   
   <style scoped>
   .demo-date-picker {
     display: flex;
     width: 100%;
     padding: 0;
     flex-wrap: wrap;
   }
   
   .demo-date-picker .block {
     padding: 30px 0;
     text-align: center;
     border-right: solid 1px var(--el-border-color);
     flex: 1;
   }
   
   .demo-date-picker .block:last-child {
     border-right: none;
   }
   
   .demo-date-picker .demonstration {
     display: block;
     color: var(--el-text-color-secondary);
     font-size: 14px;
     margin-bottom: 20px;
   }
   .demo-pagination-block {
     display: flex;
     justify-content: left;
     margin-top: 16px;
   }
   .demo-form-inline .el-input {
     --el-input-width: 160px;
   }
   .demo-form-inline .el-select {
     --el-select-width: 160px;
   }
   </style>
   