
$(function () {
    // localStorage.clear();
    for(var j=0;j<localStorage.length;j++){
        var value=localStorage.getItem("task"+(j+1));
        $(".task-list").append(value);
    }
    var i=localStorage.length;
    // localStorage.setItem("gg",0);
    $(".add-task button").click(function (){
        // i=parseInt(localStorage.getItem("gg"));
        i=i+1;
        var task_title=$(".add-task  input").val();
        var str="<div class="+"task-item"+"><span><input type="+
            "checkbox"+"></span> <span class="+"task-content"+">"+
            task_title+"</span> <span class='delete'>delete</span> <span class='detail'>detail</span> </div>";
        $(".task-list").append(str);
        $(".add-task  input").val("");
        // localStorage.setItem("gg",i);
        localStorage.setItem("task"+i,str);
    });
    $(".delete").on("click",function () {
        var index=$(".delete").index($(this))+1;
        localStorage.removeItem("task"+index);
    });
})



