var fixtures = [
    {"ctname":"프로그래밍",'subctname':[]},
    {"ctname":"디자인",'subctname':[]},
    {"ctname":"기획",'subctname':[]},
    {"ctname":"스타트업",'subctname':[]}
];


Meteor.startup(()=>{
   if(Category.find().count()===0){
       console.log("데이터가 존재하지 않습니다. fixtures 데이터를 입력합니다.");
       for(var i=0,len=10;i<len;i++){
           Category.insert(fixtures[i]);
       }
   }
});

//meteor run --port 3200
