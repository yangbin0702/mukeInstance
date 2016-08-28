/**
 * Created by Administrator on 2016/8/26.
 */
window.onload = function(){
    waterfull("main","box");
    var dataInt = {"data":[{"src":'images/0.jpg'},{"src":'images/1.jpg'},{"src":'images/2.jpg'},{"src":'images/3.jpg'}]};
    window.onscroll = function(){
        if(checkScrollSlide){
            var oParent = document.getElementById("main");
            //将数据块渲染到当前页面的尾部
            for(var i = 0; i<dataInt.data.length; i++){
                var oBox = document.createElement("div");
                oBox.className = "box";
                oParent.appendChild(oBox);
                var oPic = document.createElement("div");
                oPic.className = "pic";
                oBox.appendChild(oPic);
                var oImg = document.createElement('img');
                oImg.src = dataInt.data[i].src;
                oPic.appendChild(oImg);
            }
            waterfull("main","box");
        }
    }
}
function waterfull(parent,box){
    //将main下所有的class为box的元素取出来
    var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent,box);
    //计算整个页面显示的列数（页面宽/box宽）
    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
    //设置main的宽度
    oParent.style.cssText = 'width:' + oBoxW*cols + 'px; margin:0 auto';
    var heigthArr = [];  //存放每一列高度的数组
    for( var i = 0; i < oBoxs.length;i++){
        if( i < cols){
            heigthArr.push( oBoxs[i].offsetHeight );
        }else{
            var minH = Math.min.apply(null,heigthArr);//apply 方法 以及call方法
            var index = getMinhIndex(heigthArr, minH);
            oBoxs[i].style.position = "absolute";
            oBoxs[i].style.top = minH + "px";
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            //oBoxs[i].style.left = oBoxW*index + 'px';
            heigthArr[index] += oBoxs[i].offsetHeight;
        }
    }
}
//求得一行的最小高度后求其索引值
function getMinhIndex(arr, val){
    for(var i in arr){
        if(arr[i] == val){
            return i;
        }
    }
}

//检测是否具备了滚动加载数据块的条件
 function checkScrollSlide(){
     var oParent = document.getElementById("main");
     var oBoxs = getByClass(oParent , 'box');
     var lastBoxH = oBoxs[oBoxs.length -1].offsetTop + Math.floor(oBoxs[oBoxs.length -1].offsetHeight/2 );
     var srcollTop = document.body.scrollTop || document.documentElement.scrollTop;  //混杂模式和标准模式
     var height = document.body.clientHeight || document.documentElement.clientHeight;
     return (lastBoxH < srcollTop + height);

 }


//根据class获取元素
function getByClass(parent,clsName){
    var boxArr = [],  //用来存储获取所有class为box的元素
        oElements = parent.getElementsByTagName("*");
    for( var i = 0 ; i < oElements.length; i++){
        if( oElements[i].className == clsName){
            boxArr.push(oElements[i]);
        }
    }
return boxArr;
}