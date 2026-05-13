var levenshtein = require('levenshtein-edit-distance');
var express= require('express');
var app=express();
var funct = require('./function.js');
var funcs = require('./func.js');
var config = require('./config.js');
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',express.static('public_static'));

app.post('/search_item',function (req,res) {
    funct.searching(req.body.name,function (data) {
    
    	s=data[0];
    	s1=data[1];
    	s2=data[2];
    	s3=data[3];
    	s4=data[4];
    	s5=data[5];
    	
         res.send('<html><body bgcolor="#00CED1" ><br><br><center><p> <font size="100"><b><u>Searched Hotels</font></u></b><br></p></center><br><center><font size="10"><b>Hotel:'+s+'</font></center><br><center><font size="10">Hotel:<b>'+s1+'</font></center><br><center><font size="10">Hotel:<b>'+s2+'</font></center><br><center><font size="10">Hotel:<b>'+s3+'</font></center><br><center><font size="10">Hotel:<b>'+s4+'</font></center></body></html>');
    });
});
   app.post('/search_item1',function(req,res) {
    funct.search(req,function(data) {
       
       s=data[0];
    	s1=data[1];
    	s2=data[2];
    	s3=data[3];
    	s4=data[4];
    	s5=data[5];
    	
         res.send('<html><body bgcolor="#00CED1" ><br><br><center><p> <font size="100"><b><u>Top Recommended Hotels</font></u></b><br></p></center><br><center><font size="10"><b>Hotel:'+s+'</font></center><br><center><font size="10">Hotel:<b>'+s1+'</font></center><br><center><font size="10">Hotel:<b>'+s2+'</font></center><br><center><font size="10">Hotel:<b>'+s3+'</font></center><br><center><font size="10">Hotel:<b>'+s4+'</font></center></body></html>');
    });

});
   app.post('/search_item2',function (req,res) {
   	
    funct.loc(req.body.lat,req.body.long,function (data) {
    	var i;var s="";
    	s=data[0].dist;
    	s1=data[1].dist;
    	s2=data[2].dist;
    	s3=data[3].dist;
    	s4=data[4].dist;
    	
    	
s5=data[0].prop_name;
    	s6=data[1].prop_name;
    	s7=data[2].prop_name;
    	s8=data[3].prop_name;
    	s9=data[4].prop_name;
    	

        res.send('<html><body bgcolor="#00CED1" ><br><br><center><p> <font size="100"><b><u>Nearby Hotels</font></u></b><br></p></center><br><center><font size="20">Hotel:<b>'+s5+'</font></b><br>Distance:'+s+'</center><br><center><font size="20">Hotel:<b>'+s6+'</font></b><br>Distance:'+s1+'</center><br><center><font size="20">Hotel:<b>'+s7+'</font></b><br>Distance:'+s2+'</center><br><center><font size="20">Hotel:<b>'+s8+'</font></b><br>Distance:'+s3+'</center><br><center><font size="20">Hotel:<b>'+s9+'</font></b><br>Distance:'+s4+'</center></body></html>');
            });
});
   app.post('/search_item3',function (req,res) {
   	
    funct.compound(req.body.sname,req.body.srating,req.body.erating,req.body.cname,function (data) {
s=data[0][1];
  s1=data[1][1];
  s2=data[2][1];
  s3=data[3][1];  	
  s4=data[4][1];
    	

    	s5=data[0][0];
    	s6=data[1][0];
    	s7=data[2][0];
    	s8=data[3][0];
    	 s9=data[4][0];
    	s10=data[5][0];
    	s11=data[6].prop_name;
    	s12=data[7].prop_name;
    	s13=data[8].prop_name;
    	s14=data[9].prop_name;
    	s15=data[10].prop_name;
    	s16=data[11].prop_name;
    	s17=data[12].prop_name;
    	s18=data[13].prop_name;
    	s19=data[14].prop_name;

   s20=data[5].prop_address;
  s21=data[6].prop_address;
  s22=data[7].prop_address;
  s23=data[8].prop_address;  	
  s24=data[9].prop_address;
  s25=data[10].prop_address;
  s26=data[11].prop_address;
  s27=data[12].prop_address;
  s28=data[13].prop_address;  	
  s29=data[14].prop_address;
      res.send('<html><body bgcolor="#00CED1" ><br><br><center><p> <font size="100"><b><u>Preferred Hotels</font></u></b><br></p></center><br><center>Hotel:<b>'+s5+'</b><br>Address:'+s+'</center><br><center>Hotel:<b>'+s6+'</b><br>Address:'+s1+'</center><br><center>Hotel:<b>'+s7+'</b><br>Address:'+s2+'</center><br><center>Hotel:<b>'+s8+'</b><br>Address:'+s3+'</center><br><center>Hotel:<b>'+s9+'</b><br>Address:'+s4+'</center></body></html>');
    });
});
    app.post('/search_toprated',function (req,res) {
   	
    funct.searchrated(req.body.cname,function (data) {
s=data[0][1];
  s1=data[1][1];
  s2=data[2][1];
  s3=data[3][1];  	
  s4=data[4][1];
    	

    	s5=data[0][0];
    	s6=data[1][0];
    	s7=data[2][0];
    	s8=data[3][0];
    	 s9=data[4][0];
    	s10=data[5][0];
    	s11=data[6].prop_name;
    	s12=data[7].prop_name;
    	s13=data[8].prop_name;
    	s14=data[9].prop_name;
    	s15=data[10].prop_name;
    	s16=data[11].prop_name;
    	s17=data[12].prop_name;
    	s18=data[13].prop_name;
    	s19=data[14].prop_name;

   s20=data[5].prop_address;
  s21=data[6].prop_address;
  s22=data[7].prop_address;
  s23=data[8].prop_address;  	
  s24=data[9].prop_address;
  s25=data[10].prop_address;
  s26=data[11].prop_address;
  s27=data[12].prop_address;
  s28=data[13].prop_address;  	
  s29=data[14].prop_address;
      res.send('<html><body bgcolor="#00CED1" ><br><br><center><p> <font size="100"><b><u>Preferred Hotels</font></u></b><br></p></center><br><center>Hotel:<b>'+s5+'</b><br>Address:'+s+'</center><br><center>Hotel:<b>'+s6+'</b><br>Address:'+s1+'</center><br><center>Hotel:<b>'+s7+'</b><br>Address:'+s2+'</center><br><center>Hotel:<b>'+s8+'</b><br>Address:'+s3+'</center><br><center>Hotel:<b>'+s9+'</b><br>Address:'+s4+'</center></body></html>');
    });
});
app.post('/new',function (req,res) {
   

});
app.listen(3000,function(err,res){
    console.log("Server running on port 3000");
});
