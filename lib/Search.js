const Common = new require('./Common');

class Search extends Common {
    /**
     * 解析数据
     * @param dom
     * @returns {{originalName: string, image: string, year: string, link: string, name: (boolean|void|*|undefined|string), rating: (*|string), main: string, id: *, content: *}}
     */
    parseData(dom) {
        const $content = this.cheerio.load(dom);
        let id = new URL($content('.nbg').attr('href')).searchParams.get('url');
        id = id.replace('https://movie.douban.com/', '').split('/').filter(v => v).pop();
        let link = 'https://movie.douban.com/subject/' + id + '/';
        let name = $content('a').text().replace(/\s/g, "");
        let rate = $content('.rating_nums').text() || '0.0';
        let image = this.toImage($content('img').attr('src'));
        let subject = $content('.subject-cast').text().replace(/\s/g, "");
        let subjectArray = subject.split('/');
        let originalName = subjectArray.splice(0, 1)[0].replace('原名:', '');
        let year = subjectArray.pop();
        let main = subjectArray.join('/');
        let content = $content('p').text();
        return {
            id,
            link,
            name,
            image,
            originalName,
            rate,
            main,
            year,
            content
        };
    }

    /**
     * 获取数据
     * @param keyword
     * @param pageNo
     * @returns array
     */
    async getData(keyword, pageNo = 1) {
        pageNo -= 1;
        let start = pageNo <= 0 ? 0 : pageNo * 20;
        let result = {
            total: 0,
            pageNo,
            pageNum: 20,
            more: false,
            list: []
        };
        const url = 'https://www.douban.com/j/search?q=' + this.encodeURL(keyword) + '&start=' + start + '&cat=1002';
        const res = await this.request(url, {
            method: 'GET',
            headers: {
                'referer': url
            }
        }, true).catch(e => {
        });
        if (!res) return result;
        try {
            let items = res.items;
            result.total = res.total;
            result.more = res.more;
            for (let i = 0; i < items.length; i++) {
                result.list.push(this.parseData(items[i]));
            }
        } catch (e) {
            console.log(e)
        }
        return result;
    }
}

module.exports = Search;