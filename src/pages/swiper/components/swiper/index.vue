<!--
 * @Author: yin
 * @Date: 2023-04-02 19:37:39
 * @LastEditTime: 2023-04-02 21:45:02
 * @LastEditors: yin
 * @Description: 
-->
<template>
    <div class="swiper">
        <div class="box_top" @mouseleave="hihhenRight">
            <div class="box_left">
                <div v-for="item in list">
                    <div class="item" :class="{'item_active':item.index == text}" @mouseenter="showRight(item.index)" @mouseleave="leaveItem(item.index)"><span>{{item.name}}</span><span class="item_right">></span></div>
                    <!-- <div class="item" @mouseenter="showRight('2')"><span>Javescript</span><span class="item_right">></span></div>
                    <div class="item" @mouseenter="showRight('3')"><span>NodeJs</span><span class="item_right">></span></div>
                    <div class="item" @mouseenter="showRight('4')"><span>前端框架</span><span class="item_right">></span></div>
                    <div class="item" @mouseenter="showRight('5')"><span>跨平台开发</span><span class="item_right">></span></div> -->
                </div>
            </div>
            <div class="box_right">
                <div class="swiper_box">

                </div>
                <div class="position_box" v-if="isHover">
                    {{ text }}
                </div>
            </div>
        </div>
        <div class="box_buttom"></div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const list = reactive([
    {
        name:'HTML/CSS',
        index:1
    },
    {
        name:'Javescript',
        index:2
    },
    {
        name:'NodeJs',
        index:3
    },
    {
        name:'前端框架',
        index:4
    },
    {
        name:'跨平台开发',
        index:5
    },
])
const visible = ref<boolean>(false);
const hide = () => {
    visible.value = false;
};
const text = ref<string | number>('')
const isHover = ref<boolean>(false)


const leaveItem = (v:number)=>{
    // text.value = ''
}
// 鼠标移入高亮、并显示右侧内容
const showRight = (v:string | number)=>{
    isHover.value = true
    text.value = v
}
// 鼠标移出、右侧内容隐藏、选项高亮取消
const hihhenRight = ()=>{
    isHover.value = false
    text.value = ''
}

</script>

<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 500px;
    background-color: #f9f0f0;

    .box_top {
        width: 100%;
        height: 80%;
        display: flex;

        .box_left {
            color: #fff;
            width: 25%;
            height: 100%;
            background-color: #2b283d;
            .item{
                width: 100%;
                height: 50px;
                line-height: 50px;
                display: flex;
                justify-content: space-between;
                span{
                    padding-left: 10px;
                }
                .item_right{
                    width: 12%;
                }
            }
            .item_active{
                background:linear-gradient(#99d9ea 50%,#00a2e8 50%);
                background: repeating-linear-gradient(to right,#00a2e8,#0e222b);;
            }
            .item1:hover{
                background:linear-gradient(#99d9ea 50%,#00a2e8 50%);
                background: repeating-linear-gradient(to right,#00a2e8,#0e222b);;
            }
        }

        .box_right {
            width: 75%;
            height: 100%;
            background-color: #5c9593;
            position: relative;
            .swiper_box{
                width: 100%;
                height: 100%;
                background-color: #479b65;
            }
            .position_box{
                width: 100%;
                height: 100%;
                background-color: #f50;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }

    .box_buttom {
        width: 100%;
        height: 20%;
    }
}
</style>
