const { HttpRequest } = require('./HttpRequest');
const GlobalVar = require("./GlobalVar.json");

/**
 * Ajax请求对象
 */
module.exports = (() => {
    const get = ({ url, queryStringsObj, success }) => {
        HttpRequest({
            method: 'GET',
            url,
            query: queryStringsObj,
            headers: {
                "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
                "accept": 'application/json, text/plain, */*',
                "cookie": GlobalVar.cookie
            },
            success: res => success(res.body)
        })
    };
    const post = ({ url, data, success }) => {
        HttpRequest({
            method: 'POST',
            url,
            contents: data,
            headers: {
                "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
                "accept": 'application/json, text/plain, */*',
                "content-type": 'application/x-www-form-urlencoded; charset=utf-8',
                "cookie": GlobalVar.cookie
            },
            success: res => success(res.body),
        })
    };
    return { get, post };
})();
