const express = require('express')
var morgan = require('morgan')
const handlebars= require('express-handlebars');
const path =require('path')
const app = express()
const port = 8080

app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('combined'))

//template engine- sử dụng engine là handlebars với thư viện handlebar khai báo ở trên
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'))

//arrow function
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

/* function bình thường
app.get('/', function(req, res){
  return res.send('Hello Worlsd!')
})
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})