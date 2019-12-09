import axios from 'axios'
export async function getUserInfo(token) {

    const data:object = await new Promise((resolve,reject) => {
        axios.get('/api/user/info?accessToken=' + token).then((res) => {
            if(res.data.data){
                resolve(res.data.data)
            }
        })
    })
    return data
}
