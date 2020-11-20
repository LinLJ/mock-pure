import request from './request'

export function postMapping(url){
    return request({
        url:url,
        method:'post'
    })
}