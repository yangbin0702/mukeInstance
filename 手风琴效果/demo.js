/**
 * Created by Administrator on 2016/9/15.
 */
window.onload = function()
{

    function initList() {
        var outer = document.getElementById("subject");
        var list = outer.getElementsByTagName("li");
        for (var i = 0; i < list.length; i++) {
            bind(list[i], 'mouseover', mouseoverHandler);
        }
        /*for(var i = 0; i< list.length; i++){
            list[i].onmouseover = mouseoverHandler;
        }*/
    }

    function bind(el, eventType, callback) {
        /*±ê×¼ä¯ÀÀÆ÷ºÍIEä¯ÀÀÆ÷Çø·Ö*/
        if (typeof el.addEventListener === 'function') {
            /*±ê×¼ä¯ÀÀÆ÷*/
            el.addEventListener(eventType, callback,false);
        } else if (typeof el.attachEvent === 'function') {
            /*IEä¯ÀÀÆ÷*/
            el.attachEvent('on' + eventType, callback);
        }
    }

    function mouseoverHandler(e) {
        var target = e.target || e.srcElement;
        var outer = document.getElementById("subject");
        var list = outer.getElementsByTagName("li");

        for (var i = 0; i < list.length; i++) {
            list[i].className = '';
        }
        while (target.tagName != 'LI' || target.tagName == 'BODY') {
            target = target.parentNode;
        }
        target.className = 'big';
    }

    initList();
};