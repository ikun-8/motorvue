<template>
    <img src="../assets/icons/index.png" style="width: 100%;height: 100%;">
    <!-- <RouterView></RouterView> -->

</template>

<script setup>
import {onMounted, ref} from "vue"
import { useRouter } from "vue-router";

const router=useRouter()
onMounted(()=>{
    setTimeout(()=>{
        console.log("index")
        router.push("/home")

    },3000)
})
</script>

<style scoped>
</style>
