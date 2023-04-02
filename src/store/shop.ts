/*
 * @Author: yin
 * @Date: 2023-04-02 14:35:15
 * @LastEditTime: 2023-04-02 14:43:43
 * @LastEditors: yin
 * @Description:
 */
import { defineStore } from 'pinia'

export const shop = defineStore('shop', {
	state: () => {
		return {
			shopList: ['图书', '服装', '水果'],
		}
	},
	getters: {},
	actions: {},
})
