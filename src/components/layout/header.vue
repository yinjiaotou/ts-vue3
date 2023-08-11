<!--
 * @Author: yin
 * @Date: 2023-04-02 18:53:02
 * @LastEditTime: 2023-04-02 22:44:16
 * @LastEditors: yin
 * @Description: 
-->
<template>
    <div class="main_header">
        <div class="main_flex">
            <img src="@/assets/vue.svg" alt="" />
            <span @click="to(1)">首页</span>
            <span @click="to(2)">课程</span>
            <span @click="to(3)">会员</span>
            <span @click="to(4)">简历</span>
            <span @click="to(5)">博客</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const to = (v: number) => {
    if (v == 1) {
        router.push('/home')
    }
    if (v == 2) {
        router.push('/course')
    }
    if (v == 3) {
        router.push('/vip')
    }
    if (v == 4) {
        router.push('/notes')
    }
    if (v == 5) {
        router.push('/blog')
    }
}
</script>

<style scoped lang="scss">
.main_header {
    width: 100%;
    height: 80px;
    color: #808080;
    background-color: #ffffff;
    box-shadow: 5px 5px 10px #b0b0b0;
    display: flex;
    justify-content: center;
}
.main_flex {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
