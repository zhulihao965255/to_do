
$(function () {
    for(var j=0;j<localStorage.length;j++){
        var value=localStorage.getItem(localStorage.key(j));
        value=value.split("detail=")[0];
        $(".task-list").append(value);
    }
    var i=localStorage.length;
    $(".add-task > button").click(function (){
        i=i+1;
        var task_title=$(".add-task  input").val();
        var str="<div class='task-item'><span><input type='checkbox'+></span> " +
            "<span class='task-content'>"+task_title+"</span> " +
            "<span class='detail'>detail</span> <span class='del'>delete</span>  </div>";
        $(".task-list").append(str);
        $(".add-task  input").val("");
        localStorage.setItem("task"+i,str+"detail=date=");
    });
    $(".task-list").on("click",$(".del,.detail"),function (event) {
        if($(event.target).hasClass("del")){
            $(".task-delete > p").text("是否删除"+$(event.target).prev().prev().text());
            $(".task-delete,.delete-trfa").css("display","block ");
            $(".sel > button").click(function () {
                if($(".sel > button").index($(this))===0){
                    var index=$(".del").index($(event.target));
                    $(event.target).parent().remove();
                    localStorage.removeItem(localStorage.key(index));
                }
                $(".task-delete,.delete-trfa").css("display","none");
            });
        }else if($(event.target).hasClass("detail")){
            var key=localStorage.key($(".detail").index($(event.target)));
            $("textarea").val(localStorage.getItem(key).split("detail=")[1].split("date=")[0]);
            $("input[type=date]").val(localStorage.getItem(key).split("detail=")[1].split("date=")[1]);
            $(".task-detail-mask ,.task-detail").css("display","block");
            $(".content").text($(event.target).prev($(".task-content")).text());
            var i=0;
            $(".task-detail #zz").click(function (e) {
                e.preventDefault();
                i++;
                console.log(i);
                var value=localStorage.getItem(key).split("detail=")[0]+"detail="+$("textarea").val()+"date="+$("input[type=date]").val();
                console.log(key);
                console.log(value);
                localStorage.setItem(key,value);
                $(".task-detail-mask,.task-detail").css("display","none");
            });
        }
    });
})
