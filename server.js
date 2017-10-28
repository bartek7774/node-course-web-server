const express = require('express');
const exphbs = require('express-handlebars');
const helpers = require('./lib/helpers');
const fs=require('fs');
const app = express();

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: helpers }));
app.set('view engine', 'hbs');

app.use((req,res,next)=>{
  let now=new Date().toString();
  let log=`${now} method: ${req.method} ${req.path}`;
  console.log(log);
  fs.appendFile('server.log',log+'\n',(err)=>{
    if(err){
      console.log('Unable to append to server.log');
    }
  });
  next();
});

// app.use((req,res,next)=>{
//   res.render('maintenance');
// });

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Bartek',
    people: [
      { firstName: "Yehuda", lastName: "Katz" },
      { firstName: "Carl", lastName: "Lerche" },
      { firstName: "Alan", lastName: "Johnson" }
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Popper',
  });
});

app.listen(3333, () => {
  console.log('Server up to work at port');
});