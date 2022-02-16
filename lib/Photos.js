const Common = new require('./Common');

class Photos extends Common {
    /**
     * 获取数据
     * @param dbId
     * @param pageNo
     * @returns {Promise<[]>}
     */
    async getData(dbId, pageNo = 1) {
        pageNo -= 1;
        let start = pageNo <= 0 ? 0 : pageNo * 30;
        let result = [];
        let url = 'https://movie.douban.com/subject/' + dbId + '/photos?type=S&start=' + start + '&sortby=like&size=a&subtype=a';
        result.push(await this.request(url, {
            headers: {
                referer: url
            }
        }));
        let url2 = 'https://movie.douban.com/subject/' + dbId + '/photos?type=R&start=' + start + '&sortby=like&size=a&subtype=a';
        result.push(await this.request(url2, {
            headers: {
                referer: url2
            }
        }));
        let list = [];
        for (let i = 0; i < result.length; i++) {
            const $ = this.cheerio.load(result[i]);
            $('li').each(function (i, el) {
                let id = $(this).attr('data-id');
                if (id) {
                    let image = $(this).find('img').attr('src');
                    image = 'https://img1.doubanio.com' + new URL(image).pathname;
                    let prop = $(this).find('.prop').text().trim();
                    list.push({
                        id,
                        detail: 'https://movie.douban.com/photos/photo/' + id,
                        s: image.replace('/m/', '/s/'),
                        m: image,
                        l: image.replace('/m/', '/l/'),
                        b: image.replace('/m/', '/b/'),
                        prop
                    });
                }
            });
        }
        return list;
    }
}


module.exports = Photos;
