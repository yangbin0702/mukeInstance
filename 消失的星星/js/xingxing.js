var img_width_max = 80;
var img_width_min = 10;

window.onload = function(){
	document.body.bgColor = "black";
	setInterval("init()",1000);
};
 function init(){
 	var y_top = 0;
	var x_left = 0;
 	var x_right = window.innerWidth-img_width_max;
	var y_bottom = window.innerHeight-img_width_max;
 	var width = getRandom(img_width_max,img_width_min);
// 	console.log(width);
 	var x = getRandom(x_left,x_right);
	var y = getRandom(y_top,y_bottom);
 	var img = document.createElement("img");
	document.body.appendChild(img);
	img.setAttribute("src","img/xingxing.gif");
//	img.style.width = width;
//	console.log(x+" "+y);
//	var str = "position:absolute;left:"+x+"px;top:"+y+"px;";
	var str = "position:absolute;width:"+width+"px;top:"+y+"px;left:"+x+"px;";
//	img.style = str;
	img.setAttribute("style",str);
	img.onclick = function(){
		document.body.removeChild(this);
	}
 }
 function getRandom(max1,min1){//随机获取数值
	return Math.floor(Math.random()*(max1 - min1)+min1);
}