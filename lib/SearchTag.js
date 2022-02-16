const Common = new require('./Common');

class SearchTag extends Common {
    /**
     * 初始化
     * @param tag
     * @param pageNo
     * @param pageNum
     * @param sort
     */
    constructor(tag = '热门', pageNo = 1, pageNum = 10, sort = 'recommend') {
        super();
        this.tag = tag;
        this.pageNo = pageNo;
        this.pageNum = pageNum;
        this.sort = sort;
    }

    /**
     * 电视剧
     * @returns {SearchTag}
     */
    tv() {
        this.type = 'tv';
        return this;
    }

    /**
     * 电影
     * @returns {SearchTag}
     */
    movie() {
        this.type = 'movie';
        return this;
    }

    /**
     * 获取数据
     * @returns {Promise<{list: []}>}
     */
    async getData() {
        this.pageNo -= 1;
        let pageStart = this.pageNo <= 0 ? 0 : this.pageNo * this.pageNum;
        const url = 'https://movie.douban.com/j/search_subjects?type=' + this.type + '&tag=' + this.encodeURL(this.tag) + '&page_limit=' + this.pageNum + '&page_start=' + pageStart + '&sort=' + this.sort;
        const res = await this.request(url, {
            method: 'GET',
            headers: {
                referer: 'https://movie.douban.com/'
            }
        }, true).catch(e => {
        });
        let result = {
            pageNo: this.pageNo + 1,
            pageNum: this.pageNum,
            type: this.type,
            tag: this.tag,
            sort: this.sort,
            list: []
        };
        if (!res) return result;
        try {
            for (let i = 0; i < res.subjects.length; i++) {
                let item = res.subjects[i];
                result.list.push({
                    id: item.id,
                    name: item.title,
                    episodes_info: item.episodes_info,
                    rate: item.rate,
                    url: item.url,
                    image: this.toImage(item.cover),
                    is_new: item.is_new
                });
            }
        } catch (e) {
        }
        return result;
    }
}

module.exports = SearchTag;