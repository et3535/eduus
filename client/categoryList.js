Template.categoryList.helpers({
   list(){
       return Category.find({},{limit:10,sort:{ctname:1}});
   },
    editing(){
       return this._id == Session.get("editItem");
    }
});
Template.categoryList.events({
   'click button[name=remove]'(evt,tmpl){
       if(Category.find({'ctname':this.ctname,'subctname':this.ctname.subctname}).count()===0){
           Category.remove({_id:this._id});
       }else{
           alert("Sub Category is exists, if You want to remove this category, please remove sub category");
       }
   },
    'click button[name=modify]'(evt,tmpl){
       Session.set("editItem",this._id);
    },
    'click button[name=cancle]'(evt,tmpl){
       Session.set("editItem",null);
    },
    'click button[name=save]'(evt,tmpl){
       Category.update({_id:this._id},{$set:{'ctname': tmpl.find("input[name=ctname]").value,'subctname' : this.subctname }},{upsert:true});
       Session.set("editItem",null);
    },
    'click tr'(evt,tmpl){
       alert(this.ctname);
    }
});

Template.categoryInput.events({
   'click button[name=saveCategory]'(evt,tmpl){
       var category = {
           'ctname' : tmpl.find("input[name=ctname]").value
           ,'subctname':[]
       };
       if(Category.find({'ctname':tmpl.find("input[name=ctname]").value}).count()===0){
           Category.insert(category);
           tmpl.find("input[name=ctname]").value="";
       }else{
           alert("Category name is exists, please change your category name");
       }
   }
});

//db.getCollection('category').update({"ctname" : "프로그래밍"},{$set:{"subctname":"Clang"}},{upsert:true})
//db.getCollection('category').update({"ctname" : "프로그래밍"},{$push:{"subctname":"CLANG"}},{upsert:true})