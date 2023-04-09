<!--
 * @Author: yin
 * @Date: 2023-04-02 19:23:25
 * @LastEditTime: 2023-04-02 23:02:54
 * @LastEditors: yin
 * @Description: 
-->
<template>
    <div class="main_box">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import swiper from './swiper/index.vue'

</script>

<style scoped lang="scss">
.main_box{
    width: 100%;
    display:flex;
    justify-content: center;
}
.content{
    width: 70%;
    min-height: calc(100vh - 140px);//撑满整个屏幕
}
</style>
