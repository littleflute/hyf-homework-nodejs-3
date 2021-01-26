const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users',function(req,res){
	console.log("xdtest: step-2");
	res.json([]);
})

// CREATE
app.post('/user',(req,res)=>{
	console.log("xdtest: step-3.13");
    var o = {};
    o.id = 0;
    var l = [];
    l.push(o);
    res.json({success: true,data: l})
  })

  
app.route('/users/:id')
// READ
.get((req,res)=>{
  // User.findById()
  var o = {};
    o.id = 0;
    res.json({success: true,data: o})
})
// UPDATE
.put((req,res)=>{
  // User.findByIdAndUpdate()
})
// DELETE
.delete((req,res)=>{
  // User.findByIdAndDelete()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
