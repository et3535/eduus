import {Meteor} from 'meteor/meteor';


WebApp.connectHandlers.use("/category/ctname",function(req,res,next){
    var category = req.originalUrl.split('/')[2];
    console.log(category);
    res.writeHead(200);
    var obj = {list:Category.find({}).fetch()};
    res.end(JSON.stringify(obj));

})

