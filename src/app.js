const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "../public");
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'../views'));
app.use(express.static(static_path));

app.get("/",(req,res) => { 
    res.render('index')
})

app.get("/weather",(req,res) => { 
    res.render('weather')
})

app.get("*",(req,res) => { 
    res.render('error')
})

app.listen(port, () => {
         console.log(`listening to port ${port}`)
})
