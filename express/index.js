const express = require('express');
var bodyParser = require('body-parser');
const { taskRouter } = require('./routes/routes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// let db = [];
// let id =0;

// app.get('/tasks/active', (req,res) => {
//   let completed = (req.query.isCompleted)==='true';
//   console.log(completed);
//   let list = db.filter(item => item.isCompleted === completed);
//   res.json(list);
//   // console.log(list);
// });

// app.get('/tasks', (req, res) => {
//   res.json(db);
// });



// app.post('/tasks', (req, res) => {
//   console.log(req.body);
  
//   db.push({
//     ...req.body.name,
//     _id: id,
//     isCompleted: false 
//   });
//   res.end();
// });

// app.patch('/task/:id', (req, res) => {
//   db = db.map((item) => {
//     if(item._id == req.params.id)
//     {
//       item.isCompleted = req.body.isCompleted;
//     }
//     return item;
//   });
//   res.end();
// });



// app.delete('/task/:id',(req,res) => {
//   //console.log(req.params.id);
//   db = db.filter((item) => item._id != req.params.id);
//   res.end();

// });




app.use('/tasks', taskRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});