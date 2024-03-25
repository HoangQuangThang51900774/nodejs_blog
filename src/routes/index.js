const newsRouter = require('./news');
const siteRouter = require('./site');
const productRouter = require('./product');
function route(app) {
    var a = 1
    var b = 2
    var c = a + b
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    app.use('/products', productRouter);

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
