const Config = require('../config');
class Common {
    /**
     * 初始化
     */
    constructor() {
        this.qs = require('querystring');
        this.requestHandle = require('request');
        this.cheerio = require('cheerio');
        this.cookie = Config.cookie;
    }

    /**
     * urlencode
     * @param val
     * @returns {string}
     */
    encodeURL(val) {
        val = decodeURIComponent(val);
        return encodeURIComponent(val);
    }

    /**
     * toImage
     * @param val
     * @returns {string}
     */
    toImage(val) {
        return val.replace('.webp', ".jpg").replace('s_ratio_poster', 'l_ratio_poster');
    }

    /**
     * preg
     * @param str
     * @param reg
     * @param array
     * @returns {[]|string}
     */
    preg(str, reg, array = false) {
        let list = [];
        try {
            let res = str.matchAll(reg);
            res = [...res];
            for (let i = 0; i < res.length; i++) {
                let item = res[i];
                list.push(item[1]);
            }
        } catch (e) {
        }
        if (!list.length) return '';
        if (array) return list;
        return list.length === 1 ? list[0] : list;
    }

    /**
     * 获取豆瓣ID
     * @param link
     */
    getDouBan(link) {
        let url = new URL(link).pathname;
        return url.split('/').filter(v => v).pop();
    }

    /**
     * request
     * @param uri
     * @param opts
     * @param toJson
     * @returns {Promise<unknown>}
     */
    request(uri, opts, toJson = false) {
        return new Promise((resolve, reject) => {
            opts.headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36';
            opts.headers['cookie'] = this.cookie;
            this.requestHandle(uri, opts, (err, response, body) => {
                if (err) return reject(err);
                if (toJson) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {
                    }
                }
                return resolve(body);
            })
        })
    }
}

module.exports = Common;