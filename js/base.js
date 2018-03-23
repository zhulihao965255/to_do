
$(function () {
    for(var j=0;j<localStorage.length;j++){
        var value=localStorage.getItem(localStorage.key(j));
        value=value.split("detail=")[0]
        $(".task-list").append(value);
    }
    var i=localStorage.length;
    function add() {
        i=i+1;
        var task_title=$(".add-task  input").val();
        var str="<div class='task-item'><span><input type='checkbox'+></span> " +
            "<span class='task-content'>"+task_title+"  任务设置时间-"+new Date().getDate()+"号"+new Date().getHours()+"时"+new Date().getMinutes()+"分"+"</span> " +
            "<span class='detail'>detail</span> <span class='del'>delete</span>  </div>";
        $(".task-list").append(str);
        $(".add-task  input").val("");
        localStorage.setItem("task"+i,str+"detail=date=");
    }
    $("input[type=text]").keydown(function(event) {
        if (event.keyCode == 13) {
            add();
        }
    })
    $(".add-task > button").click(function (){
        add();
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
            $(".task-detail").unbind().on("click",".submit,.cancle",function (event) {
                if($(event.target).hasClass("submit")){
                    var value=localStorage.getItem(key).split("detail=")[0]+"detail="+$("textarea").val()+"date="+$("input[type=date]").val();
                    localStorage.setItem(key,value);
                }
                $(".task-detail-mask,.task-detail").css("display","none");
            });
        }
    });
})
