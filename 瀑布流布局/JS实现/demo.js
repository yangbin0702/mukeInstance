/**
 * Created by Administrator on 2016/8/26.
 */
window.onload = function(){
    waterfull("main","box");
    window.onscroll = function(){}
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