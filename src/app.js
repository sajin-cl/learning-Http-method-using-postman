const express = require('express');
const app = express();
const sum = require('./sum');
const multiply = require('./multiply');

const port = 4000;

/* app.get('/', (req, res) => {
  res.send('first page')
  sum(10,12);
  multiply(10,2);
});

app.get('/hello', (req, res) => {
  res.send('Hello')
});


app.get('/hai', (req, res) => {
  res.send('hai')
}); */

app.get('/user',(req,res)=>{
  res.send('get : data fetched succesfully ')
});

app.post('/user',(req,res)=>{
  res.send('post:data stored succesfully')
});

app.put('/user',(req,res)=>{
  res.send('put: data replacable successfully')
});

app.patch('/user',(req,res)=>{
  res.send('patch: data updated succesfully')
});

app.delete('/user',(req,res)=>{
  res.send('deleted successfully')
});


app.listen(port, () => console.info('server created'));