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
     
    res.json({success: true,data: 0})
  })

  
app.route('/user/:id')
// READ
.get((req,res)=>{
    res.json([{success: true,data: 0}])
}) 