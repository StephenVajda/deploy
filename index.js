const express=require('express');
const { readFile } = require('fs').promises;
const app=express();

app.get('/', async (request,response)=>{
   response.send( await readFile('./index.html','utf8') );

   
});

app.listen(process.env.variable||3000, ()=> {`We are listening`});  