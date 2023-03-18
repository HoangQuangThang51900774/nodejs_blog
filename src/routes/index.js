const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    //arrow function
    // app.get('/', (req, res) => {
    //     res.render('home');
    // })
    /* function bình thường
    app.get('/', function(req, res){
    return res.send('Hello Worlsd!')
    })
    */

    // app.get('/news', (req, res) => {
    //     console.log(req.query.q)
    //     res.render('news');
    // })

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })

    // app.post('/search', (req, res) => {
    //     console.log(req.body)
    //     res.send('');
    // })
}

module.exports = route;
