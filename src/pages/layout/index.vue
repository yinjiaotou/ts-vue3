<!--
 * @Author: yin
 * @Date: 2023-03-28 22:20:12
 * @LastEditTime: 2023-03-28 23:22:47
 * @LastEditors: yin
 * @Description: 
-->
<template>
	<a-layout class="main_class">
		<a-layout-sider width="16%" class="layout_left">Sider</a-layout-sider>
		<a-layout>
			<a-layout-header style="background-color: #77bfe0">Header</a-layout-header>
			<a-layout-content>Content</a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	components: {},
	data() {
		return {
			collapsed: ref<boolean>(false),
			selectedKeys: ref<string[]>(['1']),
		}
	},
})
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
