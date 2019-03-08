//验证用户名
function vaildataUserEmpty() {
    var userElement = document.getElementById("user");
    var msgElement = document.getElementById("userMsg");
    //判断用户名的value不能为空
    if(userElement.value != ""){
        userElement.className = "right";
        msgElement.innerHTML ="<font color='green'>用户名有效</font>";
        return true;
    }else{
        userElement.className = "wrong";
        msgElement.innerHTML ="<font color='red'>用户名不能为空</font>";
        return false;
    }
}
//对密码框进行判空
function vaildataEmpty(elementName) {
    var objElement =  document.getElementById(elementName);
    var msgElement =  document.getElementById(elementName+"Msg");
    if(objElement.value != ""){
        objElement.className = "right";
        msgElement.innerHTML = "<font color='green'>输入内容正确</font>";
        return true;
    }else {
        objElement.className = "wrong";
        msgElement.innerHTML = "<font color='red'>输入内容不能为空</font>";
        return false;
    }
}

// 判断两个文本框的值是否一致
function vaildataReapt(srcName,descName) {
    var srcElement = document.getElementById(srcName);
    var descElement = document.getElementById(descName);
    var msgElement = document.getElementById(descName+"Msg")
    if(srcElement.value == descElement.value){
        descName.className = "right";
        msgElement.innerHTML = "<font color='green'>输入内容正确！</font>";
        return true;
    }else {
        descName.className = "wrong";
        msgElement.innerHTML = "<font color='red'>与之前输入的内容不一致！</font>";
        return false;
    }
}

//对密码文本进行传值
function vaildataPwd() {
    return vaildataEmpty("pwd");
}

function vaildataConf() {
    if(vaildataEmpty("conf")){
        return vaildataReapt("pwd","conf");
    }
    return false;
}

function vaildataUser() {

    return  vaildataUserEmpty();
}

/**
 * 使用页面加载完毕后执行事件
 */
window.onload = function(){
    var pwd =  document.getElementById("pwd");
    pwd.addEventListener("blur",vaildataPwd,false);

    var conf = document.getElementById("conf");
    conf.addEventListener("blur",vaildataConf,false);

    var user = document.getElementById("user");
    user.addEventListener("blur",vaildataUser,false);
}

/**
 * 对页面进行拦截
 */
function vaildata() {
    return vaildataUserEmpty();
}