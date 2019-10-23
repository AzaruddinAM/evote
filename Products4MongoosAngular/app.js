const express = require('express');
const candidatedata = require('./src/model/candidatedata');
const cors = require('cors');
const User = require('./src/model/user');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json())



app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    var candidate = {
       
        candidatename : req.body.candidate.candidatename,
        electionname: req.body.candidate.electionname,
        electionDate : req.body.candidate.electionDate,
        description : req.body.candidate.description,
        imageUrl : req.body.candidate.imageUrl,
        votecount :req.body.candidate.votecount,
        resultflag :req.body.candidate.resultflag,

   }
   var candidate = new candidatedata(candidate);
   candidate.save();
   res.send({msg:"Inserted "+req.body.candidate.candidatename});
});






app.get('/candidate',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    candidatedata.find()
                .then(function(candidates){
                    res.send(candidates);
                    console.log(candidates);
                });
});




app.get('/users',function(req,res){
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  User.find()
              .then(function(users){
                
                  res.send(users);

              });
});


app.get('/delete/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const id=req.params.id;
    candidatedata.remove({_id:id}).then((err)=>{
        res.send({"msg":"Deleted candidate : "+id});
    })
})
app.get('/deleteall',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id=req.params.id;
  User.remove().then((err)=>{
      res.send({"msg":"Deleted users : "});
  })
})



app.get('/deleteusers/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id=req.params.id;
  User.remove({_id:id}).then((err)=>{
      res.send({"msg":"Deleted User : "+id});
  })
})
app.get('/update/:id' , (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const id=req.params.id;
    candidatedata.findOne({_id:id}).then((data)=>{
       console.log(data);
        res.send(data);
    })
    

});

app.post('/changecandidate/:id' , (req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id=req.params.id;
  candidatedata.findOne({_id:id}).then((data)=>{
     console.log(data);
      res.send(data);
  })
  var candidate = {
      
    candidatename : req.body.candidate.candidatename,
    electionname : req.body.candidate.electionname,
    electionDate : req.body.candidate.electionDate,
    description : req.body.candidate.description,
    imageUrl : req.body.candidate.imageUrl,
    votecount :req.body.candidate.votecount,
    resultflag :req.body.candidate.resultflag,
}
candidatedata.update({_id:req.body.candidate._id},candidate).then((err)=>{
    res.send({msg:"Updated"+req.body.candidate});
});

});

app.get('/updateusers/:id' , (req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id=req.params.id;
  User.findOne({_id:id}).then((data)=>{
     console.log(data);
      res.send(data);
  })
});

app.post('/changeusers/:id' , (req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id=req.params.id;
  
  User.findOne({_id:id}).then((data)=>{
     console.log(data);
      res.send(data);
  })
  var user = {
      
    username : req.body.user.username,
    email : req.body.user.email,
    mobilenumber: req.body.user.mobilenumber,
    password : req.body.user.password,
    adhar : req.body.user.adhar,
    requestflag :req.body.user.requestflag,
    votedflag :req.body.user.votedflag,
    
}
User.update({_id:req.body.user._id},user).then((err)=>{
    res.send({msg:" User Data changed"});
});

});

// app.post('/changeusers',(req,res)=>{
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
//   console.log(req.body);

//   var user = {
      
//       username : req.body.user.username,
//       email : req.body.user.email,
//       mobilenumber: req.body.user.mobilenumber,
//       password : req.body.user.password,
//       adhar : req.body.user.adhar,
//       requestflag :req.body.user.requestflag,
//  }
//   User.update({_id:req.body.user._id},user).then((err)=>{
//       res.send({msg:" User Data changed"});
//   });
// });





app.post('/update',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    var candidate = {
        
        candidatename : req.body.candidate.candidatename,
        electionname : req.body.candidate.electionname,
        electionDate : req.body.candidate.electionDate,
        description : req.body.candidate.description,
        imageUrl : req.body.candidate.imageUrl,
        votecount:req.body.candidate.votecount,
        resultflag :req.body.candidate.resultflag,
   }
    candidatedata.update({_id:req.body.candidate._id},candidate).then((err)=>{
        res.send({msg:"Updated"});
    });
});

app.post('/updateall',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  console.log(req.body);

  var candidate = {
      
      
      resultflag :"true",
 }
  candidatedata.updateMany({},candidate).then((err)=>{
      res.send({msg:"Updated all"});
      console.log(candidatedata)
  });
});
app.post('/clearall',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  console.log(req.body);

  var candidate = {
      
      
      resultflag :"false",
 }
  candidatedata.updateMany({},candidate).then((err)=>{
      res.send({msg:"Cleared all"});
      console.log(candidatedata)
  });
});




app.post('/updateusers',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  console.log(req.body);

  var user = {
      
      username : req.body.user.username,
      email : req.body.user.email,
      mobilenumber: req.body.user.mobilenumber,
      password : req.body.user.password,
      adhar : req.body.user.adhar,
      requestflag : req.body.user.requestflag,
      votedflag :req.body.user.requestflag,
 }
  User.update({_id:req.body.user._id},user).then((err)=>{
      res.send({msg:" User Data Updated"});
  });
});


app.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        let payload = {subject: registeredUser._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    })
  })

  


  app.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid Email')
        } else 
        if ( user.password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: user._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token, user})
        }
      }
    })
  })

app.listen(3001, function(){
    console.log('listening to port 3001');
});
