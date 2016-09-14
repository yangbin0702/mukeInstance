/**
 * Created by Administrator on 2016/9/14.
 */
window.onload = function(){
    var dataInt = {"data":[{"src":'images/0.jpg'},{"src":'images/1.jpg'},{"src":'images/2.jpg'},{"src":'images/3.jpg'}]};
    window.onscroll = function() {
        if (checkScrollSlide) {
            var oParent = document.getElementById("main");
            //�����ݿ���Ⱦ����ǰҳ���β��
            for (var i = 0; i < dataInt.data.length; i++) {
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
        }
    };

    //����Ƿ�߱��˹����������ݿ������
    function checkScrollSlide(){
        var oParent = document.getElementById("main");
        var oBoxs = getByClass(oParent , 'box');
        var lastBoxH = oBoxs[oBoxs.length -1].offsetTop + Math.floor(oBoxs[oBoxs.length -1].offsetHeight/2 );
        var srcollTop = document.body.scrollTop || document.documentElement.scrollTop;  //����ģʽ�ͱ�׼ģʽ
        var height = document.body.clientHeight || document.documentElement.clientHeight;
        return (lastBoxH < srcollTop + height);

    }
};