import axios from "axios"
import router from "../router";

let SERVER = 'https://sidepro-k3.herokuapp.com';

if(process.env.NODE_ENV !== 'PRODUCTION'){
    SERVER = 'http://localhost:1337';
}

export const getList = () => axios({
    method: 'get',
    url: `${SERVER}/posts`,
})

export const getListItem = (id) => axios({
    method: 'get',
    url: `${SERVER}/posts/${id}`,
})

export const setListItem = (data) => axios({
    method: 'post',
    url: `${SERVER}/posts`,
    data: {...data}
})

export const editListItem = (id, data) => axios({
    method: 'put',
    url: `${SERVER}/posts/${id}`,
    data
})

export const deleteListItem = (id) => axios({
    method: 'delete',
    url: `${SERVER}/posts/${id}`
})

export const goList = () => {
    router.push('/notice');
}
