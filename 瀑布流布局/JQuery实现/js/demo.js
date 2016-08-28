/**
 * Created by Administrator on 2016/8/28.
 */
$(window).on('load',function() {
    waterfull();
    var dataInt = {"data":[{"src":'images/0.jpg'},{"src":'images/1.jpg'},{"src":'images/2.jpg'},{"src":'images/3.jpg'}]};
    window.onscroll = function() {
        if (checkScrollSlide()) {
            $.each(dataInt.data, function (key, value) {
                var oBox = $('<div>').addClass('box').appendTo($("#main"));
                var oPic = $('<div>').addClass('pic').appendTo($(oBox));
                $('<img>').attr('src', $(value).attr('src')).appendTo($(oPic));
            });
            waterfull();
        }
    }
});
function waterfull(){
    var boxs = $('#main>div');
    var w = boxs.eq(0).outerWidth();
    var cols = Math.floor( $(window).width() / w );
    $( "#main" ).width(w * cols).css('margin', '0 auto');
    var hArr = [];
    boxs.each(function(index,value){
        var h = boxs.eq(index).outerHeight();

        if( index < cols ){
            hArr[index] = h;
        }
        else{
            var minH = Math.min.apply(null, hArr);
            var minHIndex = $.inArray(minH,hArr);
            $(value).css({
                'position':'absolute',
                'top': minH + 'px',
                'left':minHIndex*w + 'px'
            })
            hArr[minHIndex]+=boxs.eq(index).outerHeight();
        }
    })
}
function checkScrollSlide(){
    var $lastBox = $("#main>div").last();
    var lastBoxDis = $lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
    var scrollTop = $( window ).scrollTop();
    var documentH = $(document).height();
    return(lastBoxDis < scrollTop+documentH);
}