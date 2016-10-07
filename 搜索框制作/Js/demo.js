/**
 * Created by Administrator on 2016/9/15.
 */
var getDOM = function(id){
    return document.getElementById(id);
}

var addEvent = function(id,event,fn){
    var el = getDOM(id)||document;
    if(el.addEventListener){
        el.addEventListener(event,fn,false);
    }else if(el.attachEvent){
        el.attachEvent('on'+event,fn);
    }
}

var getElementLeft = function(element){
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while(current != null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}

var getElementTop = function(element){
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while(current != null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
///////
addEvent('search_input','keyup',function(){
    getDOM('search-suggest').style.top = getElementTop(getDOM('search-form'))+38+'px';
    getDOM('search-suggest').style.left = getElementLeft(getDOM('search-form'))+'px';
    getDOM('search=suggest').style.position = 'absolute';
    getDOM('search-suggest').style.display = 'block';
})
