import axios from "axios";
// import { Toast } from "vant";

// import qs from 'qs'
// import { goLogin, isWeiXin, handlenauth, getCookie } from "@/utils";

// create an axios instance
// const serve = axios.create({
//   baseURL: process.env.BASE_URL, // api 的 base_url
//   timeout: 30000 // request timeout
// })
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
console.log("VUE_APP_BASE_URL", process.env);
axios.defaults.timeout = 30000;
axios.defaults.withCredentials = false;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    // const token = window.localStorage.getItem("token");
    // Toast({
    //   message: 'toke==>'+token
    // });
    // token && (config.headers.Authorization = `Bearer ${token}`);

    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response interceptor
axios.interceptors.response.use(
  response => {
    const res = response;
    // if (res.code == "0" || res.status == "0") {
    //   return res.data;
    // } else if (res.code == 40004 || res.code == 123) {
    //   //   Toast("未登录");
    //   //todo
    //   // debugger;
    //   // handlenauth(redirect_url);
    // } else {
    //   //   Toast({
    //   //     message: res.msg || res.message || "网络连接异常",
    //   //     duration: 1000,
    //   //     forbidClick: true
    //   //   });
    // }

    return res.data;
  },

  error => {
    console.dir("err===>" + error); // for debug
    // Toast('555');
    return Promise.reject(error);
  }
);

function fetch(opt) {
  let { url, method, data, ...config } = opt;

  data = method == "get" ? data : data;
  const options = {
    url,
    method,
    [method == "get" ? "params" : "data"]: data,
    ...config
  };
  return new Promise((resolve, reject) => {
    axios(options)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export default fetch;
