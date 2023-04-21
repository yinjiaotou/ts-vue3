<!--
 * @Author: yin
 * @Date: 2023-03-26 23:08:43
 * @LastEditTime: 2023-04-21 22:22:16
 * @LastEditors: yin
 * @Description: 
-->
<template>
    <div style="display: flex; height: 100%">
        <div
            style="
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #a90;
            "
        >
            <a-button @click="toHome">去首页</a-button>
        </div>
        <div
            style="
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f99;
            "
        >
            <a-button @click="toManager">去后台</a-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const toHome = () => {
    router.push({ name: 'home' })
}
const toManager = () => {
    router.push({ name: 'layout' })
}
</script>
