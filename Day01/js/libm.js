//验证输入的编号不超过四位数
function vaildataEmpno() {
    var obj = document.getElementById("empno");
    var msg = document.getElementById("empnoMsg");
    //使用正则表达式进行验证
    if(/^\d{4}$/.test(obj.value)){
        obj.className = "right";
        msg.innerHTML = "<font color='green'>输入内容正确!</font>"
        return true;
    }else{
        obj.className = "wrong";
        msg.innerHTML = "<font color='red'>输入内容不符合格式要求!</font>"
        return false;
    }
}
//对姓名和职位抽取一个公共的方法
function validataPulicByNameAndJob(elementName) {
    var obj = document.getElementById(elementName);
    var msg = document.getElementById(elementName + "Msg");
    //判断输入数据不允许为空
    if(obj.value != ""){
        obj.className = "right";
        msg.innerHTML = "<font color='green'>输入内容正确!</font>"
        return true;
    }else{
        obj.className = "wrong";
        msg.innerHTML = "<font color='red'>输入内容不允许为空!</font>"
        return false;
    }
}
//日期验证
function validateHiredate() {
    var obj = document.getElementById("hiredate");
    var msg = document.getElementById("hiredateMsg");
    //使用正则表达式进行验证
    if(/^\d{4}-\d{2}-\d{2}$/.test(obj.value)){
        obj.className = "right";
        msg.innerHTML = "<font color='green'>输入内容正确!</font>"
        return true;
    }else{
        obj.className = "wrong";
        msg.innerHTML = "<font color='red'>输入内容不符合格式要求!</font>"
        return false;
    }
}

//对佣金和工资验证
function validateNumberr(elementName) {
    var obj = document.getElementById(elementName);
    var msg = document.getElementById(elementName + "Msg");
    //使用正则表达式进行验证
    if(/^\d+(\.\d{1,2})?$/.test(obj.value)){
        obj.className = "right";
        msg.innerHTML = "<font color='green'>输入内容正确!</font>"
        return true;
    }else{
        obj.className = "wrong";
        msg.innerHTML = "<font color='red'>输入内容不符合格式要求!</font>"
        return false;
    }
}

//使用id进行绑定
function vaildataEmp() {
    return validateRegex("empno",/^\d{4}$/);
}
//姓名
function vaildataName(){
    return vaildataEmpty("name");
}
//职位
function vaildataJob(){
    return vaildataEmpty("job")
}
//日期
function vaildataHire(){
    return validateRegex("hiredate",/^\d{4}-\d{2}-\d{2}$/);
}

function vaildataSalNum(){
    return validateRegex("sal",/^\d+(\.\d{1,2})?$/);
}

function vaildataComm(){
    return validateRegex("comm",/^\d+(\.\d{1,2})?$/);
}

//页面DOM加载完毕后执行
window.onload = function(){
    var empon = document.getElementById("empno");
    empon.addEventListener("blur",vaildataEmp,false);

    var nameElem = document.getElementById("name");
    nameElem.addEventListener("blur",vaildataName,false);

    var jobElem = document.getElementById("job");
    jobElem.addEventListener("blur",vaildataJob,false);

    /*var hiredateElem = document.getElementById("hiredate");
    hiredateElem.addEventListener("blur",vaildataHire,false);*/

    var salElem = document.getElementById("sal");
    salElem.addEventListener("blur",vaildataSalNum,false);

    var commElem = document.getElementById("comm");
    commElem.addEventListener("blur",vaildataComm,false);

    //获取行上的id数组，使用遍历的方法然后取出并且绑定函数
    var trElement = document.all("tabRow");
    for (var x = 0; x < trElement.length; x++) {
        trElement[x].addEventListener("mousemove", function () {
            changeColor(this, '#ffffff')
        }, false);
        trElement[x].addEventListener("mouseout", function () {
            changeColor(this, '#f2f2f2')
        }, false);
    }
}

//拦截验证提交表单
function vaildata() {
    return vaildataEmp() && vaildataName()&& vaildataJob()&& vaildataHire()&&vaildataSalNum()&&
        vaildataComm();
}