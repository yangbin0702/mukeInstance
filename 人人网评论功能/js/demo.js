window.onload = function()
{
    var list = document.getElementById("list");
    var lis = list.children;
    //删除节点
    function removeNode(node){
        node.parentNode.removeChild(node);
    }

    //赞分享
    function praiseBox(box,el){
        var praiseElement = box.getElementsByClassName("praises-total")[0];
        var odlTotal = parseInt(praiseElement.getAttribute('total'));
        var txt = el.innerHTML;
        var newTotal;
        var timer;
        if(txt == '赞'){
            newTotal = odlTotal + 1;
            praiseElement.innerHTML = (newTotal == 1) ? "我觉得很赞":"我和"+ odlTotal + "个人觉得很赞";
            el.innerText = "取消赞";
        }
        else{
            newTotal = odlTotal - 1;
            praiseElement.innerText = (newTotal == 0) ? '': newTotal + "个人觉得很赞";
            el.innerText = "赞";
        }
        praiseElement.setAttribute('total',newTotal);
        praiseElement.style.display = (newTotal == 0) ?  'none':'block';
    }
    
    //分享回复
    function replaybox(box){
    	var textarea = box.getElementsByTagName("textarea")[0];
    	var list = box.getElementsByClassName("comment-list")[0];
    	var li = document.createElement('li');
    	li.className = 'comment-box clearfix';
    	li.setAttribute('user','self');
    	var html = '<img class="myhead" src="img/my.jpg" alt=""/>'+
                    ' <div class="comment-content">'+
                    '<p class="comment-text"><span class="user">我：</span>'+ textarea.value +'</p>'+
                    '<p class="comment-time">'+
                    getTime()+
                    '<a href="javascript:;" class="comment-praise" total="0" my="0" style="" > 赞</a>'+
                    '<a href="javascript:;" class="comment-operate">删除</a>'+
                    '</p>'+
                    '</div>';
        li.innerHTML = html;
        list.appendChild(li);
        textarea.value = '';
        textarea.onblur();
    }
    
    function getTime(){
    	var t = new Date();
    	var y = t.getFullYear();
    	var m = t.getMonth()+1;
    	var d = t.getDate();
    	var h = t.getHours();
    	var mi = t.getMinutes();

    	m = m < 10 ? '0'+m :m ;
    	d = d < 10 ? '0'+d :d ;
    	h = h < 10 ? '0'+h :h ;
    	mi = mi < 10 ? '0'+mi :mi ;
    	return y + '-' + m + '-' + d + '-' +h+ ':' +mi ;
    }
    
    
    
    for(var i = 0; i < lis.length; i++){
        lis[i].onclick = function(e){
            e = e || window.event;
            var el = e.srcElement;
            switch (el.className){
                case 'close':
                    removeNode(el.parentNode);
                    break;
                //赞分享
                case 'praise':
                    praiseBox(el.parentNode.parentNode.parentNode,el);
                    break;
                //回复按钮灰色
                case 'btn btn-off':
                	clearTimeout(timer);
                	break;
                //回复按钮蓝色
                case 'btn':
                	replaybox(el.parentNode.parentNode.parentNode);
                	break;
            }
        }
        var textarea = lis[i].getElementsByTagName("textarea")[0];
        textarea.onfocus = function(){
        	this.parentNode.className = 'text-box text-box-on';
        	this.value = this.value == '评论...' ? '':this.value;
        	this.onkeyup();
        }
        textarea.onblur = function(){
        	var me = this;
        	if(me.value ==''){
        		timer = setTimeout(function(){
        			me.parentNode.className = 'text-box';
        			me.value = '评论...';
        		},400)
        	}
        }
        textarea.onkeyup = function(e){
        	var len = this.value.length;
        	var p = this.parentNode;
        	var btn = p.children[1];
        	var word = p.children[2];
        	if(len == 0 || len > 140){
        		btn.className = 'btn btn-off';
        	}
        	else{
        		btn.className = 'btn';
        	} 
        	word.innerHTML = len +'/140';
        	
        }
    }
}
