/*
 * @Author: yin
 * @Date: 2023-04-02 17:50:04
 * @LastEditTime: 2023-04-02 17:59:11
 * @LastEditors: yin
 * @Description: 
 */
import request from '@/utils/request'
interface Idata {
    id: [string, number];
    name: string
}

export function mostNew(data: Idata) {
    return request({
        url: '/api/course/mostNew',
        method: "post",
        data
    })
}
