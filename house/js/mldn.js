//验证不能为空
function validateEmpty(elementName) {
    var obj = document.getElementById(elementName);
    var msg = document.getElementById(elementName+"Msg");
    if(obj.value != ""){
        obj.className = "right";
        if(msg != null){
            msg.innerHTML = "<font color='green'>内容输入正确！</font>"
        }
        return true;
    }else {
        obj.className = "wrong";
        if(msg != null){
            msg.innerHTML = "<font color='red'>内容不能为空！</font>"
        }
        return false;
    }
}

//正则表达式验证
function validataRegex(elementName,regex) {
    var obj = document.getElementById(elementName);
    var msg = document.getElementById(elementName+"Msg");
    if(regex.test(obj.value)){
        obj.className = "right";
        if(msg != null){
            msg.innerHTML = "<font color='green'>内容输入正确！</font>"
        }
        return true;
    }else {
        obj.className = "wrong";
        if(msg != null){
            msg.innerHTML = "<font color='red'>输入内容不符合格式要求！</font>"
        }
        return false;
    }
}

//改变颜色
function changeColor(obj,color){
    obj.bgColor = color;
}

//计算方法
function round(num, scale) {
    var result = Math.round((num * Math.pow(10, scale))) / Math.pow(10, scale);
    return result;
}
