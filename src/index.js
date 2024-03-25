const express = require('express');
var morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 8081;

var a = 1
var b = 2
var c = a + b
//chỉ cần gõ tên thư mục thì file index sẽ đc nạp nếu có
const route = require('./routes');
const db = require('./config/db')

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
); //xử lý data của form gởi lên server-post
app.use(express.json()); // xử lý data post lên bằng code-script

//HTTP logger
//app.use(morgan('combined'))

//template engine- sử dụng engine là handlebars với thư viện handlebar khai báo ở trên
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
