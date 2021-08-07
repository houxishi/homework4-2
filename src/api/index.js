import axios from 'axios'

const instance = axios.create({
        timeout: 10000
    })
    // axios默认配置

// axios.defaults.timeout = 100000 // 超时时间

// http request 拦截器
axios.interceptors.request.use((config) => config)

axios.interceptors.request.eject((config) => {
    return config
})

// http response 拦截器
axios.interceptors.response.use((config) => {
    return config
})
axios.interceptors.request.eject((config) => config)

const api = {
    test: () => {
        return instance.get("/api/list")
    }
}

export default api