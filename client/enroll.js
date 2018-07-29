Template.enroll.events({
    'click button[name=urlsave]'(evt,tmpl){
        var url = tmpl.find("input[name=urlinfo]").value;
        //alert(tmpl.find("input[name=urlinfo]").value);
        //window.location.href="http://localhost:8080/";
        //C:\Program Files (x86)\Google\Chrome\Application>chrome.exe --user-data-dir="C:\Program Files (x86)\Google\Chrome\Application\chrome dev session" --disable-web-security
        //var temp = document.domain;
        //document.domain = "youtube.com";
        $.get(url, function(response) {
            console.log(response);
        });
        //document.domain = temp;
        var obj = {
          'code':"111"
          ,"upCode":"222"
        };
        $.ajax({
            type       : "post",
            contentType: 'application/json',
            data : JSON.stringify(obj),
            dataType   : 'json',
            url        : "http://127.0.0.1:8080/greeting2",
            error      : function(json){
                console.log('저장중 오류가 발생하였습니다');
            },
            success    : function(data){
                console.log(data+JSON.stringify(data));
            }
        });

/*        $.get("http://127.0.0.1:8080/greeting",function(data,status) {
            alert("data :"+data+"status:"+status+"JSONStringify:"+JSON.stringify(data));
        });*/
/*        $.post("http://127.0.0.1:8080/greeting2",obj,contentType: 'application/json').done(function(data){
            alert(data+JSON.stringify(data));
        });*/
/*        $.post("http://127.0.0.1:8080/greeting2",data:obj,function(data,status){
            alert("data :"+data+"status:"+status+"JSONStringify:"+JSON.stringify(data));
        });*/
    }
});

Template.enroll.helpers({

});