<!--
 * @Author: yin
 * @Date: 2023-04-02 18:50:02
 * @LastEditTime: 2023-04-02 23:02:20
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
import Header from './components/header.vue'
import Main from './components/main.vue'
import Footer from './components/footer.vue'
import swiper from './components/swiper/index.vue'
</script>

<style scoped lang="scss">
</style>
