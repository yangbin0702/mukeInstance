/**
 * Created by Administrator on 2016/8/26.
 */
window.onload = function(){
    waterfull("main","box");
    var dataInt = {"data":[{"src":'images/0.jpg'},{"src":'images/1.jpg'},{"src":'images/2.jpg'},{"src":'images/3.jpg'}]};
    window.onscroll = function(){
        if(checkScrollSlide){
            var oParent = document.getElementById("main");
            //�����ݿ���Ⱦ����ǰҳ���β��
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
    //��main�����е�classΪbox��Ԫ��ȡ����
    var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent,box);
    //��������ҳ����ʾ��������ҳ���/box��
    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
    //����main�Ŀ��
    oParent.style.cssText = 'width:' + oBoxW*cols + 'px; margin:0 auto';
    var heigthArr = [];  //���ÿһ�и߶ȵ�����
    for( var i = 0; i < oBoxs.length;i++){
        if( i < cols){
            heigthArr.push( oBoxs[i].offsetHeight );
        }else{
            var minH = Math.min.apply(null,heigthArr);//apply ���� �Լ�call����
            var index = getMinhIndex(heigthArr, minH);
            oBoxs[i].style.position = "absolute";
            oBoxs[i].style.top = minH + "px";
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            //oBoxs[i].style.left = oBoxW*index + 'px';
            heigthArr[index] += oBoxs[i].offsetHeight;
        }
    }
}
//���һ�е���С�߶Ⱥ���������ֵ
function getMinhIndex(arr, val){
    for(var i in arr){
        if(arr[i] == val){
            return i;
        }
    }
}

//����Ƿ�߱��˹����������ݿ������
 function checkScrollSlide(){
     var oParent = document.getElementById("main");
     var oBoxs = getByClass(oParent , 'box');
     var lastBoxH = oBoxs[oBoxs.length -1].offsetTop + Math.floor(oBoxs[oBoxs.length -1].offsetHeight/2 );
     var srcollTop = document.body.scrollTop || document.documentElement.scrollTop;  //����ģʽ�ͱ�׼ģʽ
     var height = document.body.clientHeight || document.documentElement.clientHeight;
     return (lastBoxH < srcollTop + height);

 }


//����class��ȡԪ��
function getByClass(parent,clsName){
    var boxArr = [],  //�����洢��ȡ����classΪbox��Ԫ��
        oElements = parent.getElementsByTagName("*");
    for( var i = 0 ; i < oElements.length; i++){
        if( oElements[i].className == clsName){
            boxArr.push(oElements[i]);
        }
    }
return boxArr;
}