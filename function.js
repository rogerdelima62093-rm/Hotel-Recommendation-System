var levenshtein = require('levenshtein-edit-distance');



//var math = require('mathjs')
//var collectTime = measure.measure('timer1');
var config = require('./config.js');
var mongodbUrl = 'mongodb://' + config.mongodbHost + ':27017/final';
var MongoClient = require('mongodb').MongoClient;
exports.getEditDistance = function(a, b){
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
};
exports.searching=function (name,callback) {
    MongoClient.connect(mongodbUrl, function (err, db) {
        var collection = db.collection("hotel");
        var app=collection.find();
        var obj=[];
        var dbo=db.db("final");
          console.time("dbsave");
          var start = new Date();
        app.forEach(function (result) {
            //var t=result.state.toLowerCase();
            //var t1=result.hotel_star_rating;
            var myobj = {name:result.property_name};
            var t1=result.property_name;
            //console.log(t1);


            

                                    

                               // var dist = levenshtein(t1 ,name);
                             //  var dist;=getEditDistance(t1,name);
                             var dist;
                            
                             if(t1.length == 0) dist= name.length; 

 else if(name.length == 0) dist= t1.length; 
else{
  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= name.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= t1.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= name.length; i++){
    for(j = 1; j <= t1.length; j++){
      if(name.charAt(i-1) == t1.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }
  dist=matrix[name.length][t1.length];
}
                                //console.log("A is " + a  + " " + b);

                               // console.log("Distance " , dist);

                                if(dist<=5)
                                   { //console.log("OK " + result['property_name']);
                                    obj.push(result['property_name']);
                                    //console.log("YY");
                                    dbo.collection("recent").insertOne(myobj, function(err, res) {
                      if (err) throw err;
   //console.log("Number of documents inserted: ");
    
  });
                                }
                                    
                                
        });
        setTimeout(function () {
            var end = new Date() - start;
    console.info("Execution time: %dms", end);
            callback(obj);
        },1000);
       // db.close();
    });
};
exports.search=function (nam,callback) {
    MongoClient.connect(mongodbUrl, function (err, db) {
        var collection = db.collection("recent");
        //var app=collection.find();
        var app=collection.aggregate([{$group:{_id:"$name",count:{"$sum":1}}},{$sort:{count:-1}},{$limit:5}]);
        var obj=[];
        var dbo=db.db("final");

        app.forEach(function (result) {
            //var t=result.state.toLowerCase();
            //var t1=result.hotel_star_rating;
            var myobj = {name:result._id};
            var t1=result._id;
            var i=0;
            console.log(t1);
            obj.push(result['_id']);


            

                                    

                               
                                    
                                
        });
        setTimeout(function () {
            callback(obj);
        },1000);
       // db.close();
    });
};
/*exports.loc=function (v1,v2,callback) {
   MongoClient.connect(mongodbUrl, function (err, db) {
    var l1=(parseFloat(v1));
    var l2=(parseFloat(v2));
    console.log(l1);
    console.log("long"+ l2);

    var collection = db.collection("hotel");
        //var app=collection.find();
        var app=collection.find();
        var obj=[];
        var obj1=[];
        var dbo=db.db("final");

        app.forEach(function (result) {
            //var t=result.state.toLowerCase();
            //var t1=result.hotel_star_rating;
            var myobj = {name:result.latitude};
            var t1=(parseFloat(result.latitude));
             var t2=(parseFloat(result.longitude));
             var d= ((t1-l1)*(t1-l1)+(t2-l2)*(t2-l2));
             obj.push({dist:d,prop_name:result.property_name,prop_add:result.property_address});
           //  console.log("prop_name"+result.property_name);
             obj.sort(function(a,b)
    {
        return a.dist-b.dist;
    })
             //obj.sort();
             /* obj = obj.sort(function (a, b) {
    return a.dist.localeCompare( b.dist );
       });
             */ 
            
            //console.log(d);

          //  obj.push(result['_id']);


/*var i=0;
      for(i=0;i<5;i++)
      {console.log("hey"+obj[]);
obj1.push(obj[i]);
//i=i+1;
      }
                                  

                               
                                
                                
        });*/
  exports.loc=function (v1,v2,callback) {
   MongoClient.connect(mongodbUrl, function (err, db) {
    var l1=(parseFloat(v1));
    var l2=(parseFloat(v2));
    console.log(l1);
    console.log("long"+ l2);

    var collection = db.collection("hotel");
        //var app=collection.find();
        var app=collection.find();
        var obj=[];
        var obj1=[];
        var dbo=db.db("final");

        app.forEach(function (result) {
            //var t=result.state.toLowerCase();
            //var t1=result.hotel_star_rating;
            var myobj = {name:result.latitude};
            var t1=(parseFloat(result.latitude));
             var t2=(parseFloat(result.longitude));
            // var d= ((t1-l1)*(t1-l1)+(t2-l2)*(t2-l2));
             var dd=((t1-l1)*(t1-l1)+(t2-l2)*(t2-l2));
             var d1=(parseInt(result.hotel_star_rating));
             var d=(0.4)*d1+((0.6)/dd);
             /*var f=t1-l1;
             var s=t2-l2;
             if((t1-l1)<0)
             {
                 f=l1-t1;
             }
             if((t2-l2)<0)
             {
                s=l2-t2;
             }
             var d=f+s;
              */
            // var d=(((t1*l1)+(t2*l2))/(((t1*t1)+(t2*t2))*((l1*l1)+(l2*l2))));
             obj.push({dist:d,prop_name:result.property_name,prop_add:result.property_address});
           //  console.log("prop_name"+result.property_name);
             obj.sort(function(a,b)
    {
        return b.dist-a.dist;
    })
             //obj.sort();
             /* obj = obj.sort(function (a, b) {
    return a.dist.localeCompare( b.dist );
       });
             */ 
            
            //console.log(d);

          //  obj.push(result['_id']);


/*var i=0;
      for(i=0;i<5;i++)
      {console.log("hey"+obj[]);
obj1.push(obj[i]);
//i=i+1;
      }
         */                           

                               
                                
                                
        });  
console.log(obj[0]);
        setTimeout(function () {
            var i=0;
            for(i=0;i<5;i++){
            obj1.push(obj[i]);}
            callback(obj1);
        },1000);
       // db.close();
       
    });
};

exports.compound=function (v1,v2,v3,v4,callback) {
   MongoClient.connect(mongodbUrl, function (err, db) {
    
    var collection = db.collection("hotel");
        //var app=collection.find();
        var app=collection.find();
        var obj=[];
        var obj1=[];
        var dbo=db.db("final");

        app.forEach(function (result) {
        var t=result.state.toLowerCase();
        var t2=result.city.toLowerCase();
            var t1=result.hotel_star_rating;
        
            

          //  obj.push(result['_id']);
         // console.log("v1 "+v1+"v2 "+v2+t);
                 /* &&((v2===''||v2<=t1))&&
            ((v3==='')||(v3>=t1))    */
           if((t.includes((v1.toLowerCase()))===true)&&(t2.includes((v4.toLowerCase()))===true)&&((v2===''||v2<=t1))&&
            ((v3==='')||(v3>=t1))){

                                console.log("insert");
                                obj.push([result['property_name'],result['property_address']]);
                               }
                                
                                
        });  

        setTimeout(function () {
           
            callback(obj);
        },1000);
       // db.close();
       
    });
};
exports.searchrated=function (v4,callback) {
   MongoClient.connect(mongodbUrl, function (err, db) {
    
    var collection = db.collection("hotel");
        //var app=collection.find();
        var app=collection.mapReduce(    function() { emit(this.city,this.hotel_star_rating); }, function(key, values,rereduce) {return Math.max.apply({},values)}, {query:{state:v4},         out:"post_max"     }  ).find()
        var app1=collection.find();
        var obj=[];
        var obj1=[];
        var dbo=db.db("final");
        app
        app1.forEach(function (result) {
        
        var t2=result.city;
            var t1=result.hotel_star_rating;
        
             app.forEach(function(result1){
                var id=result1._id;
                var rat=result1.value;
                if(id==t2&&rat==t1)
                {
                    console.log("insert");
                                obj.push([result['property_name'],result['property_address']]);
                }
             });

          //  obj.push(result['_id']);
         // console.log("v1 "+v1+"v2 "+v2+t);
                 /* &&((v2===''||v2<=t1))&&
            ((v3==='')||(v3>=t1))    */
    });
           

        setTimeout(function () {
           
            callback(obj);
        },1000);
       // db.close();
       
});
};