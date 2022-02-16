const Common = new require('./Common');

class NowPlaying extends Common {
    /**
     * 获取数据
     * @returns {Promise<[]>}
     */
    async getData() {
        let url = 'https://movie.douban.com/';
        let result = await this.request(url, {
            headers: {
                referer: url
            }
        });
        let list = [];
        const $ = this.cheerio.load(result);
        var that = this;
        $('.ui-slide-item').each(function (i, el) {
            let ticket = $(this).attr('data-ticket');
            if (ticket) {
                let id = new URL(ticket).searchParams.get('movie_id');
                list.push({
                    id,
                    name: $(this).attr('data-title'),
                    image: that.toImage($(this).find('img').attr('src')),
                    rate: $(this).attr('data-rate'),
                    release: $(this).attr('data-release'),
                    region: $(this).attr('data-region'),
                    director: $(this).attr('data-director'),
                    actors: $(this).attr('data-actors')
                });
            }
        });
        return list;
    }
}

module.exports = NowPlaying;