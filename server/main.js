import {Meteor} from 'meteor/meteor';

Category = new Mongo.Collection("category");
Meteor.startup(()=>{
    if(Category.find().count==0){
    Category.insert({ctname:"프로그래밍"});
    Category.insert({ctname:"디자인"});
    Category.insert({ctname:"기획"});
    Category.insert({ctname:"사는이야기"});
    console.log("fixture 완료");
}
});

WebApp.connectHandlers.use("/category/ctname",function(req,res,next){
    var category = req.originalUrl.split('/')[2];
    console.log(category);
    res.writeHead(200);
    var obj = {list:Category.find({}).fetch()};
    res.end(JSON.stringify(obj));

})

