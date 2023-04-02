/*
 * @Author: yin
 * @Date: 2023-04-02 14:35:15
 * @LastEditTime: 2023-04-02 15:59:15
 * @LastEditors: yin
 * @Description:
 */
import { defineStore } from 'pinia'

export const user = defineStore('user', {
	state: () => {
		return {
			num: 0,
			name: '张三',
		}
	},
	getters: {
		changeNum(): number {
			return this.num + 100
		},
	},
	actions: {
		upNum(val: number): void {
			this.num += val
		},
	},
	//开启缓存
	persist: {
		enabled: true,
		// 配置项
		strategies: [
			{
				key: 'my_user',		//自定存储的key
				storage: localStorage, 	//指定存储的位置、不写的话默认存储到会话存储sectionStorage
				// paths: ['name', 'num']	//需要本地存储的状态，不写的话默认存储所有
			}
		]
	}
})
