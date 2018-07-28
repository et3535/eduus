Template.categorySubList.helpers({
   list(){
       var listitem = Category.find({'_id':Session.get("ctnameid")}).fetch();
       if(listitem[0].subctname==null || listitem[0].subctname==""){
           //alert("subctname is null"+listitem[0].subctname);
           return false;
       }else{
           return listitem[0].subctname;
       }
   },
    getctname(){
        return Session.get("subtitlename");
    },
    subediting(){
       console.log(Session.get("subeditItem"));
        return Session.get("subeditItem");
    }
});
Template.categorySubList.events({
    'click button[name=subremove]'(evt,tmpl){
        //alert(tmpl.find("input[name=subctname]").value);
        //alert(this.value+tmpl.find("button[name=subremove]").value); /*tmpl.parent.find("div[name=subctname]").value);*/
        var categoryid = Session.get("ctnameid");
        Category.update({'_id':Session.get("ctnameid")},{$pull:{'subctname':tmpl.find("button[name=subremove]").value}});
        Session.set("ctnameid",categoryid);
        console.log("remove :"+Session.get("ctnameid"));
    },
    'click button[name=submodify]'(evt,tmpl){
    Session.set("subeditItem",true);
    },
    'click button[name=subcancle]'(evt,tmpl){
        Session.set("subeditItem",null);
    },
    'click button[name=subsave]'(evt,tmpl){
        var bfsubctname = tmpl.find("input[name=bfsubctname]").value;
        console.log("bfsubctname :"+bfsubctname);
        console.log("afsubctname: "+tmpl.find("input[name=subctname]").value);
        Category.update({'_id':Session.get("ctnameid")},{$pull:{'subctname':tmpl.find("input[name=bfsubctname]").value}});
        Category.update({'_id':Session.get("ctnameid")},{$push:{'subctname':tmpl.find("input[name=subctname]").value}});
    }

});

Template.categorySubInput.events({
    'click button[name=saveCategorySub]'(evt,tmpl){
        //alert(Session.get("subeditItem")+tmpl.find("input[name=subctname]").value);
        Category.update({'_id':Session.get("ctnameid")},{$push:{'subctname':tmpl.find("input[name=subctname]").value}});
        //return this._id == Session.set("subeditItem",null);
    },
    'click button[name=cancleCategorySub]'(evt,tmpl){
        Session.set("subItem",null);
        Session.set("subtitlename",null);
        Session.set('ctnameid',null);
    }

});

Template.categorySubInput.helpers({
    getctname(){
        return Session.get("subtitlename");
    }
});