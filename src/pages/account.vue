<!--
 * @Author: yin
 * @Date: 2023-03-26 23:08:15
 * @LastEditTime: 2023-04-02 15:51:30
 * @LastEditors: yin
 * @Description: 
-->
<template>
	<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center">
		<div @click="toLogin">toLogin</div>
		<!-- <router-view></router-view> -->
		<div>
			<h5>name:{{ name }}</h5>
			<h5>num:{{ num }}</h5>
			<h5>{{ changeNum }}</h5>
			<a-button @click="btn">ddd</a-button>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { user } from '@/store/user'
import { storeToRefs } from 'pinia'

let userStore = user()
//通过storeToRefs将store里面的状态装变为响应式数据
const { name, num, changeNum } = storeToRefs(userStore)

const router = useRouter()

const btn = () => {
	userStore.upNum(5)
}

function toLogin() {
	// router.push({ name: 'login' })
	router.push('/login')
}
</script>
<style lang="scss" scoped></style>
