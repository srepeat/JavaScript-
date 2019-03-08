window.onload = function () {
    document.getElementById("unitprice").addEventListener("blur",validataUnitprice,false);
    document.getElementById("rent").addEventListener("blur",validataRent,false);
    document.getElementById("cost").addEventListener("blur",validataCost,false);
    document.getElementById("area").addEventListener("blur",validataArea,false);
    document.getElementById("interest").addEventListener("blur",validataInterest,false);

    var trElement = document.all("tabRow");
    for (var x = 0; x < trElement.length; x++) {
        trElement[x].addEventListener("mousemove", function () {
            changeColor(this, '#ffffff')
        }, false);
        trElement[x].addEventListener("mouseout", function () {
            changeColor(this, '#f2f2f2')
        }, false);
    }

    //按钮事件
    var btn = document.getElementById("calBut");
    btn.addEventListener("click",cla,false);
}

//租金
function validataUnitprice() {
    return validataRegex("unitprice",/^\d+(\.\d{1,2})?$/);
}

//平米单价
function validataRent() {
    return validataRegex("rent",/^\d+(\.\d{1,2})?$/);
}
//物业费
function validataCost() {
    return validataRegex("cost",/^\d+(\.\d{1,2})?$/);
}
//面积
function validataArea() {
    return validataRegex("area",/^\d+(\.\d{1,2})?$/);
}
//贷款利息

function validataInterest() {
    return validataRegex("interest",/^\d+(\.\d{1,2})?$/);
}

//验证是否都通过
function validate(){
    return	validataUnitprice()&&
        validataCost() &&
        validataRent() &&
        validataArea()&&
        validataInterest();
}

//判断是否通过验证
function cla (){
    if(validate()){
        var t_unitprice=parseFloat(getValue("unitprice"));//每平米面积
        var t_rent=parseFloat(getValue("rent"));//租金
        var t_cost=parseFloat(getValue("cost"));//物业费
        var t_area=parseFloat(getValue("area"));//面积
        var t_first=parseFloat(getValue("first")) / 10;
        var t_interest=parseFloat(getValue("interest")) /100;//利息


        document.getElementById("firstResult").innerHTML="￥"+round(t_unitprice * t_area * t_first ,2);
        document.getElementById("totalResult").innerHTML="￥"+round(t_unitprice * t_area *(1-t_first),2);
        document.getElementById("monthResult").innerHTML="￥"+round((t_unitprice * t_area *(1-t_first)) * t_interest /12 ,2);
        document.getElementById("rentResult").innerHTML="￥"+round(t_rent * t_area ,2);
        document.getElementById("costResult").innerHTML="￥"+round(t_area * t_cost,2);
    }
}


//获取元素
function getValue(elementName) {
    var obj = document.getElementById(elementName);
    if(obj != null){
        return obj.value;
    }else {
        return "";
    }
}