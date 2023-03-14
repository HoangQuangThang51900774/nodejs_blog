const express = require('express')
const app = express()
const port = 8080

//arrow function
app.get('/Trangchu', (req, res) => {
  var a=1;
  var b=2;
  var c=a+b;
  res.send('Hello World!')
})

/* function bình thường
app.get('/', function(req, res){
  return res.send('Hello Worlsd!')
})
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})