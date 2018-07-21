import request from './request';
const apis = {
    apiTest(config) {
		return request({
			url: '/xiandu/categories ',
			method: 'get',
		});
	},
};
export default apis;
