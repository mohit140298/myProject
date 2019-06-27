//jshint esversion:6
const express =require("express");
const app=express();
const port=3000;
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  // res.send("Thank you for Your Request");
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  // console.log(req.body);
  // console.log(req,body.num1);
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var result=n1+n2;
  res.send("your sum is :" + result);
});
app.listen(3000,function(){
  console.log("Express Server is running on port 3000");
});
