<!--
 * @Author: yin
 * @Date: 2023-04-21 23:23:24
 * @LastEditTime: 2023-04-22 11:50:47
 * @LastEditors: yin
 * @Description: 
-->
<template>
    <div style="height: 100vh; overflow-y: scroll">
        <a-menu
            triggerSubMenuAction="click"
            v-model:selectedKeys="selectedKeys"
            style="width: 100%; height: 100vh; background-color: #b4a992"
            mode="inline"
            :open-keys="openKeys"
            @openChange="onOpenChange"
        >
            <a-sub-menu
                v-for="(i, index) in routeArr"
                :key="i.key"
                :index="index"
                @titleClick="titleClick"
            >
                <!-- <template #icon>
                    <component class="icons" :is="i.meta?.icon"></component>
                </template> -->
                <template #title class="title">
                    <span>{{ i.title }}</span>
                </template>
                <a-menu-item
                    v-for="(it, idx) in i.children"
                    :index="idx"
                    :key="it.path"
                    @click="toPath(i, it)"
                >
                    <!-- <template #icon>
                        <component class="icons" :is="it.meta?.icon"></component>
                    </template> -->
                    <span>{{ it.title }}</span>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface stateType {
    rootSubmenuKeys: string[]
    openKeys: string[]
    selectedKeys: string[]
}
const initState: stateType = {
    rootSubmenuKeys: [],
    openKeys: [],
    selectedKeys: []
}
const state = reactive(initState)
const { rootSubmenuKeys, openKeys, selectedKeys } = toRefs(state)

const onOpenChange = (openKeys: string[]) => {
    console.log('openKeys', openKeys)
    const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1)
    if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys
    } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : []
    }
}

const routeArr = reactive([
    {
        title: '标签一',
        key: 'bq1',
        path: 'layout',
        children: [
            {
                title: 'page1',
                path: 'page1',
                key: 'page1',
                children: []
            },
            {
                title: 'page2',
                path: 'page2',
                key: 'page2',
                children: []
            }
        ]
    },
    {
        title: '标签二',
        key: 'bq2',
        path: 'layout',
        children: [
            {
                title: 'page3',
                path: 'page3',
                key: 'page3',
                children: []
            }
        ]
    },
    {
        title: '标签三',
        key: 'bq3',
        path: 'layout',
        children: [
            {
                title: 'page4',
                path: 'page4',
                key: 'page4',
                children: []
            }
        ]
    }
])

state.rootSubmenuKeys = routeArr.filter(item => item.children).map(i => i.key)
console.log('rootSubmenuKeys', rootSubmenuKeys)
state.openKeys[0] = state.rootSubmenuKeys[0]
state.selectedKeys[0] = 'page1'

const titleClick = () => {
    console.log('8888', selectedKeys)
}

type parType = {
    path: string
}
const toPath = (par: parType, cur: parType) => {
    router.push('/' + par.path + '/' + cur.path)
}
console.log('selectedKeysselectedKeys', selectedKeys)
</script>

<style scoped></style>
