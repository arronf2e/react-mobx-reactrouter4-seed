import axios from 'axios';
import { getFormdata } from '../utils';
import { message } from 'antd';

const http = axios.create({
	'development': {
		// 'withCredentials': true,
		'baseURL': 'http://gank.io/api',
		'headers': {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json',
		}
	},
	'test': {
		'withCredentials': true,
		'baseURL': '',
		'headers': {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json',
		},
	},
	'uat': {
		'withCredentials': true,
		'baseURL': '',
		'headers': {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json',
		},
	},
	'production': {
		'withCredentials': true,
		'headers': {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json',
		},
	}
}[process.env.NODE_ENV || 'development']);

http.interceptors.request.use(config => {
	config.params = Object.assign(
		// { timestamp: Date.now() },
		config.params || {}
	);
	return config;
});

http.interceptors.response.use(res => {
	let body = res.data;
	if(body.error || body.code !== 200) {
		return Promise.reject(body);
	}
	return body
}, err => {
	return Promise.reject(err);
});

const request = (config) => {
	let {
		url,
		method,
		data,
		params
	} = config;
	return http.request({
			url,
			method: method || 'get',
			data: data,
			params: getFormdata(params, true)
		})
		.then(res => {
			// 通用数据处理
			return res
		})
		.catch(body => {
			// 通用错误逻辑
			if(body.code === 401) { // 如果401，跳转到登录
				message.warning(`${body.resultMessage || '请先登录'}`);
			} else if(body.code === 403) { // 如果403，提示无权限
				message.warning(`'没有此api权限: ${url}`);
			} else {
				message.error(body.resultMessage || '请求出错');
			}
			throw body;
		});
};

export default request;
