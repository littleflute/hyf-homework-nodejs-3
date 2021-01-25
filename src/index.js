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
app.post('/users',(req,res)=>{
    var o = {};
    o.id = 0;
    res.json({success: true,data: o})
  })

  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
