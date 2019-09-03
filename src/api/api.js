import request from '@/utils/request';
export function getAllGrades (data) {
    return request({
        url: '/admin/getallgrades',
        method: "post",
        data
    })
}
export function getUserInfo (data) {
    return request({
        url: '/user/getinfo',
        method: 'post',
        data
    })
}
export function getStuGrades (data) {
    return request({
        url: '/stu/getgrades',
        method: 'post',
        data
    })
}
export function getAllStudents (data) {
    return request({
        url: '/admin/getallstudents',
        method: 'post',
        data
    })
}
export function getAllCourses (data) {
    return request({
        url: '/admin/getallcourses',
        method: 'post',
        data
    })
}
export function getAllTeachers (data) {
    return request({
        url: '/admin/getallteachers',
        method: 'post',
        data
    })
}
export function login (data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}
export function logout () {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}
export function postReq(){
    return request({
        url:'/act/acts',
        method:'post'
    })
}