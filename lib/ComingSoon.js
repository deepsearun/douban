const Common = new require('./Common');

class ComingSoon extends Common {
    async getData() {
        let url = 'https://movie.douban.com/cinema/later/guangzhou/';
        let result = await this.request(url, {
            headers: {
                referer: url
            }
        });
        let list = [];
        const $ = this.cheerio.load(result);
        var that = this;
        $('.item').each(async function (i, el) {
            let link = $(this).find('.thumb').attr('href');
            let id = that.getDouBan(link);
            let image = that.toImage($(this).find('img').attr('src'));
            let release_date = '', category = '', region = '';
            $(this).find('.dt').each(function (i, e) {
                if (i === 0) {
                    release_date = $(this).text();
                }
                if (i === 1) {
                    category = $(this).text();
                }
                if (i === 2) {
                    region = $(this).text();
                }
            });
            list.push({
                id,
                name: $(this).find('h3 a').text(),
                category,
                image,
                release_date,
                region
            });
        });
        return list;
    }
}

module.exports = ComingSoon;