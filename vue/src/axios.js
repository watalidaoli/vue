/*========将axios单独保存========*/
//vue_app_00/src/axios.js
/* 1.引入vue实例 */
import Vue from 'vue'; //
/* 2.引入axios库 */
import axios from "axios";
/* 3.发送时保存session相关 */
axios.defaults.withCredentials=true; //保存session
/* 4.设置基础路径 */
// axios.defaults.baseURL="http://127.0.0.1:3000/"; //设置基础路径
axios.defaults.baseURL=""; //需要切换两个域名 故不设置
// axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/* 5.将axios注册到vue实例 */
Vue.prototype.axios = axios;
/* 6.在main.js中引入axios.js即可 */
