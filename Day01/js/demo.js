//验证非空判断
function vaildataEmpty(elementName){
    var obj = document.getElementById(elementName);
    var msg = document.getElementById(elementName + "Msg");
    //判断输入数据不允许为空
    if(obj.value != ""){
        obj.className = "right";
        if(msg != null){
            msg.innerHTML = "<font color='green'>输入内容正确!</font>";
        }
        return true;
    }else{
        obj.className = "wrong";
        if(msg != null){
            msg.innerHTML = "<font color='red'>输入内容不允许为空!</font>";
        }
        return false;
    }
}
//正则验证
function validateRegex(eleName, regex) {
    var obj = document.getElementById(eleName);
    var msg = document.getElementById(eleName+"Msg");
    //使用正则表达式进行验证
    if(regex.test(obj.value)){
        obj.className = "right";
        if(msg != null){
            msg.innerHTML = "<font color='green'>输入内容正确!</font>";
        }
        return true;
    }else{
        obj.className = "wrong";
        if(msg != null){
            msg.innerHTML = "<font color='red'>输入内容不符合格式要求!</font>";
        }
        return false;
    }
}
//变换颜色
function changeColor(obj,color) {
    obj.bgColor=color;
}