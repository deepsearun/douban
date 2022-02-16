const express = require('express');
const app = express();
const port = 6501;

// 返回结果数据
const showResData = (msg, data = []) => {
    return {
        code: 200,
        msg,
        data
    }
};

// API异常处理
const ApiException = (message, errorCode = 999, status = 500) => {
    throw JSON.stringify({
        errorCode,
        message,
        status
    });
};

// 全局返回头
app.all('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    next();
});

// 全局报错处理
app.use((err, req, res, next) => {
    err = JSON.parse(err);
    res.status(err.status || 500);
    res.json(err);
});

// 豆瓣搜索
app.get('/search/:keyword/:page', async (req, res, next) => {
    const search = new require('./lib/Search');
    let {keyword, page} = req.params;
    page = !page ? 1 : Number(page);
    let data = await new search().getData(keyword, page);
    res.send(showResData('获取成功', data));
});

// 豆瓣标签搜索
app.get('/search_tag/:type/:sort/:tag/:pageNo/:pageNum', async (req, res, next) => {
    const search = new require('./lib/SearchTag');
    let {type, tag, pageNo, pageNum, sort} = req.params;
    pageNo = !pageNo ? 1 : Number(pageNo);
    let data = await new search(tag, pageNo, pageNum, sort)[type]().getData();
    res.send(showResData('获取成功', data));
});

// 豆瓣正在上映
app.get('/now_playing', async (req, res, next) => {
    const handle = new require('./lib/NowPlaying');
    let data = await new handle().getData();
    res.send(showResData('获取成功', data));
});

// 豆瓣即将上映
app.get('/coming_soon', async (req, res, next) => {
    const handle = new require('./lib/ComingSoon');
    let data = await new handle().getData();
    res.send(showResData('获取成功', data));
});

// 豆瓣海报
app.get('/photos/:id/:pageNo', async (req, res, next) => {
    const handle = new require('./lib/Photos');
    let {id, pageNo} = req.params;
    pageNo = !pageNo ? 1 : Number(pageNo);
    let data = await new handle().getData(id, pageNo);
    res.send(showResData('获取成功', data));
});

// 豆瓣详情
app.get('/subject/:id', async (req, res, next) => {
    const handle = new require('./lib/Subject');
    let {id} = req.params;
    let data = await new handle().getData(id);
    res.send(showResData('获取成功', data));
});

app.listen(port, () => {
    console.log(`douban app listening on port ${port}`)
});