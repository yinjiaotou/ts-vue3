<!--
 * @Author: yin
 * @Date: 2023-03-28 22:20:12
 * @LastEditTime: 2023-04-21 23:37:53
 * @LastEditors: yin
 * @Description: 后台管理页面布局
-->
<template>
    <a-layout class="main_class">
        <a-layout-sider width="16%" class="layout_left">
            <SiderMenu></SiderMenu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background-color: #77bfe0">Header</a-layout-header>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import SiderMenu from './components/siderMenu.vue'
</script>
<style scoped lang="scss">
.main_class {
    width: 100%;
    height: 100%;
}
.layout_left {
    background-color: #2868d6;
}
</style>
