Template.enroll.events({
    'click button[name=urlsave]'(evt,tmpl){
        var url = tmpl.find("input[name=urlinfo]").value;
        alert(tmpl.find("input[name=urlinfo]").value);
        var Socket = new WebSocket("127.0.0.1", [protocal] );
    }
});

Template.enroll.helpers({

});