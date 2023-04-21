<!--
 * @Author: yin
 * @Date: 2023-04-02 18:50:02
 * @LastEditTime: 2023-04-21 22:12:40
 * @LastEditors: yin
 * @Description: 
-->
<template>
    <Header></Header>
    <Main>
        <swiper></swiper>
    </Main>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/layout/header.vue'
import Main from '@/components/layout/main.vue'
import Footer from '@/components/layout/footer.vue'
import swiper from './components/index.vue'
</script>

<style scoped lang="scss"></style>
