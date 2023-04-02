/*
 * @Author: yin
 * @Date: 2023-03-26 23:02:11
 * @LastEditTime: 2023-04-02 15:19:36
 * @LastEditors: yin
 * @Description: 
 */
import { createPinia } from 'pinia'
//引入pinia持久化插件
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
// 使用插件
store.use(piniaPluginPersist)

export default store
