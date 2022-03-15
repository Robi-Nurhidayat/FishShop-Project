const express = require('express');
const app = express();

// load template for ejs
app.set('view engine', 'ejs');

// routing

app.get('/',function(req,res){
    res.render('home')
})



// end of routing

// typer localhost:3000 for access 
app.listen(3000,function(){
    console.log('Server running on port 3000');
})