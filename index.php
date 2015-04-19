<html>
<head><title>SKINALI</title>
	<link rel="stylesheet" type="text/css" href="css/main.css" />
	<meta http-equiv="Content-type" content="application/x-www-form-urlencoded; charset=UTF-8"/>
	<script type="text/javascript" src="js/resize.js"></script>
	<script type="text/javascript" src="js/js.js"></script>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script src="js/ajax_framework.js" language="javascript"></script>
	<script type="text/javascript" src="js/html2canvas (1).js"></script>
    <script src="js/jquery.js"></script>
    <script src="js/spin.js"></script>
    
</head>
<body>

	<div id="img" style="">
		<h2 id="warn">
	<span id="width" class="warning">общая ширина должна быть не более 10 метров</span></br>
	<span id="height" class="warning">общая высота должна быть не более 1.5 метров</span></br>
	<span id="photo" class="warning">имя файла с фотобанка должно быть минимум 5 символов</span></br>
	<span id="foto" class="warning">нет такого файла в фотобанке</span>
	<span id="prepare" class="warning">предварительно нажмите кнопку обрезать лишнее</span>
	<span id="cut" class="warning">блок для вырезки не до конца заполнен</span>
	<span id="download" class="warning">файл должен быть меньше 5мб</span>
	<span id="same" class="warning">такой файл уже существует</span>
	<span id="format" class="warning">Проблемы при открытии файла</span>
	</h2>
		<output id="list">
			
			<span id="drag0" title="<?php if(isset($_GET['img']))echo $_GET['img'];else echo's_ab075';?>" class="drag" unselectable="on" style="position: absolute; left: 1px; top: 170px;z-index:4 " select="true">
				<img id="img0" src="http://fotobank.biz/constructor/fon/<?php if(isset($_GET['img']))echo $_GET['img'];else echo's_ab075';?>.jpg" unselectable="on" onmousedown="dra()" id="img0" class="thumb" style="height:120px;margin-top: 0px; position: relative; z-index: 0; ">
				<span id='br' onmousedown='br(this)' class='resize' style='cursor: se-resize;position: absolute;width:15px;height:15px; bottom:-15px; right:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:6;'></span><span id='bl' class='resize' onmousedown='bl(this)' style='cursor: sw-resize;position: absolute; width:15px;height:15px; bottom:-15px; left:-15px;background-color: rgba(211, 211, 211, 0.7);display:block;z-index:5;'></span><span id='tr' onmousedown='tr(this)' class='resize' style='cursor: ne-resize;position: absolute; width:15px;height:15px; top:-15px; right:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:6;'></span><span id='tl' class='resize' onmousedown='tl(this)' style='cursor: nw-resize;position: absolute; width:15px;height:15px; top:-15px; left:-15px;background-color: rgba(211, 211, 211, 0.7);display:block;z-index:6;'></span><span id='t' class="resize" onmousedown='toop(this)' class='resize' style='cursor:n-resize; position:absolute;width:15px;height:15px;top:-15px; left:-webkit-calc(50% - 7.5px);left:calc(50% - 7.5px);background-color: rgba(211, 211, 211, 0.7);z-index:6;' ></span><span id='b' class='resize' onmousedown='bot(this)' style='cursor:s-resize; position:absolute;width:15px;height:15px;bottom:-15px; left:-webkit-calc(50% - 7.5px);left:calc(50% - 7.5px);background-color: rgba(211, 211, 211, 0.7);z-index:6;' ></span><span id='l' onmousedown='left(this)' class='resize' style='cursor:w-resize; position:absolute;width:15px;height:15px;top:-webkit-calc(50% - 7.5px);top:calc(50% - 7.5px);left:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:6;' ></span><span id='r' onmousedown='right(this)' class='resize' style='cursor:e-resize; position:absolute;width:15px;height:15px;top:-webkit-calc(50% - 7.5px);top:calc(50% - 7.5px);right:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:6;' ></span>
			</span>
			
		</output>
		<div id="canl1" class="bord" style="position: absolute; top: 158; left: 31; width:0px; height:120px;z-index:5;border-left:1px dotted lightgrey;"></div>
		<div id="canr1" class="bord" style="position: absolute; top: 158; left: 131; width:0px; height:120px;z-index:5;border-left:1px dotted lightgrey;"></div>
		<div id="canb1" class="bord" style="position: absolute; top: 158; left: 31; width:100px; height:0px;z-index:5;border-top:1px dotted lightgrey;"></div>
		<div id="cant1" class="bord" style="position: absolute; top: 278; left: 31; width:100px; height:0px;z-index:5;border-top:1px dotted lightgrey;"></div>
		<span id="spc1" class="bord podpi" style="position: absolute; top: 158; left: 31; width:20px; height:20px;z-index:5;font:20px arial,sans-serif;z-index:5;opacity:1;margin:10 0 0 20;">1</span>
		
		<div id="canvas1" class="canvas" style="text-align: center;position: absolute; top: 158; left: 31; width:100px; height:120px;z-index:0;"  onmousedown="dragOBJ(this,event); return false;opacity:0.5;"><div style="position:absolute;z-Index:10;display:none;">1</div><span id='po1' class="podpis" style="  display: inline-block;
  vertical-align: middle;font-size:1em;font-family:Courier New;position:relative;margin: auto;z-index:-1;opacity: 0.3;text-align: center; font-family:Courier New;font-weight: 900;font-size:1.5em;top:calc(50% - 30px)"></span></div>
<!--		<div id="canvas2" class="canvas" style="position: absolute; top: 158; left: 136; width:100px; height:120px;z-index:0;"  onmousedown="dragOBJ(this,event); return false;">2</div>-->
		<div id='top'></div>
	</div>
<div id='body_panel'>
	<div id='panel'>
		<ul>
			<li class="activ" onclick="flip_h()" ><img class='but' title='отразить по горизонтали'  src='img/flip.png'></li>
			<li onclick="flip_v()"><img class='but' title='отразить по вертикали' src='img/flip2.png'></li>
			<li onclick="set()"><img class='but' title='Установить по размеру блоков' onclick="set()" src='img/canvas_size.png'></li>
			<li onclick="cut()"><img class='but' title='обрезать лишнее' onclick="cut()" src='img/split.png'></li>
			<li onclick="refresh()"><img class='but' title='вернуться в начало' onclick="refresh()" src='img/rotate.png'></li> 
			<li onclick="eee()">
				<input type="image" name="st" class='but' title='оформить заказ' src='img/basket_put.png'>
			</li>
			<!--<li><img class='but' title='cохранить' onClick="downimg()" src='img/film_save.png'></li>-->
			<li onclick="var res = document.getElementById('canvas1');res=res.getElementsByTagName('canvas').length;	if(res==0){document.getElementById('prepare').style.display='block';fufu();return false;}else{document.getElementById('saver').value=1}"><form id='save' method="POST" onsubmit="var res = document.getElementById('canvas1');res=res.getElementsByTagName('canvas').length;	if(res==0){document.getElementById('prepare').style.display='block';fufu();return false;}else{document.getElementById('saver').value=1}" action="savepic.php"><input style="width:32px" type="image" class='but' title='сохранить картинку' src='img/film_save.png'><input type="hidden"  name="savedis" value="namename"><textarea style="display:none;" type="hidden" id='my_edit'  name="data"></textarea>
			<input type="hidden" id="savedis1" name="savedis1" value='<?php if(isset($_GET['img']))echo $_GET['img'];else echo's_ab075';?>'>
			
			</form></li>
			
			<li onclick="window.location.assign('http://www.fotobank.biz')"><img class='but' title='вернуться на сайт' onclick="window.location.assign('http://www.fotobank.biz')" src='img/exit.png'></li>
			
			<li style="margin-left:60px;">
			<a href="http://youtu.be/2cEkw3X_Rkk" target="_blank"><img src="img/help.png"></a>
			</li>
		</ul>
	</div>
	<div id='help' style="width:450px;height:55px;float:right;">
	<div style="text-align: center;float:left;width:40px;font-size:40px;margin-top:35px;"><img src="img/support.png"></div>
	<div style="text-align: center;border:1px solid black ;border-radius:10px;float:right;width:400px;height:55px;margin-top:30px;background: rgba(10, 139, 7,0.3);color:924805;">
		
		<div id="text_help">
			С начала введите размеры нужных вам блоков, разместите фото, а затем нажмите "обрезать лишнее <img width="24px" height="24px" src="img/split.png">".
		</div>
	</div>
	</div>
			<form id='form_panel' onsubmit="eee()" action="http://fotobank.biz/index.php/zakazat"  method="post">
				
				<input type="hidden" id='w_order' name="w_order">
				<input type="hidden" id='h_order' name="h_order" >
				<input type="hidden" name="img_type" value="скинали">
				<input type="hidden" id='kol_order' name="kol_order" value="">
				<input type="hidden" id='tr_post' name="tr_post">
				<input type="hidden" id='img_name' name="img_name">
				<input type="hidden" id="eskiz_order" name="eskiz_order">
				<input type="hidden" id='path' name="path">
				<input type="hidden" id='name_im' name="name_im">
				</form>
		<form action="javascript:prov()" method="POST" id="form">
				<input type="hidden" name="X1" id="X1" value="">
				<input type="hidden" name="test_self_foto" id="self_foto" value="">
				<input type="hidden" name="x1" id="x1" value="">
				<input type="hidden" name="dis" id="dis" value="">
				<input type="hidden" name="rr" id="rr" value="">
				<input type="hidden" name="src" id="src" value="">
				<input type="hidden" name="Y1" id="Y1" value="">
				<input type="hidden" name="wid_im" id="wid_im" value="w">
				<input type="hidden" name="hei_im" id="hei_im" value="h">
				<input type="hidden" name="imX" id="imX" value="im">
				<input type="hidden" name="imY" id="imY" value="imy">
				<input type="hidden" name="saver" id="saver">

				<table style=" padding:20px;"><thead>
				<caption style="font:18px Tahoma;"><img height='16px' src="img/but/I.png">  Размеры изделия</caption>
				<tr ><td style="width:29px;"></td><td id="tdd" style="border-right:1px dotted;border-top:1px dotted;border-bottom:1px dotted;font:14px Tahoma;">Высота<span style="color:#009746;font-size:12;"> (мм)<span></td><td style="border-top:1px dotted;border-bottom:1px dotted;font:14px Tahoma;">Ширина<span style="color:#009746;font-size:12;"> (мм)<span></td><td></td><td></td></tr>
				<tr id="1" class="che"><td>1.</td><td style="border-right:1px dotted;font:12px Tahoma;">
				<input type="text" style="font:12px Tahoma;" name="height1" id="height1" class="width" onkeyup="resize_y('height1',1)" value="600"></label>
				</td> 
				<td>
				<input type="text" name="width_1" class="width" id="width1" style="font:12px Tahoma;" onkeyup="resize_x('width1',1)" value="2500"></td><td>
				<span id="ko1"><a class="Add_small" onclick='add_small(1);'><img height="16px"  title='добавить верхний блок' src="img/but/triangle.png"></a></span></td><td></tr>
				</thead>

			<tbody id="addd" style="margin-left:20px">
			
	<!--		<tr id="2"><td>2.</td><td style="border-right:1px dotted;font:12px Tahoma;">
				<input type="text" style="font:12px Tahoma;" name="height2" id="height2" class="width"  onkeyup="resize_y('height2',2)" value="600"></label>
				</td> 
				<td>
				<input type="text" name="width_2" class="width" id="width2" style="font:12px Tahoma;" onkeyup="resize_x('width2',2)" value="500"></td><td>
				<span id="ko2"><a class="Add_small" onclick='add_small(2);'><img height="16px" src="img/but/triangle.png"></a></span></td><td></tr>
		-->	
			
			</tbody><!--<div >
				
			</div>-->
			<tr><td></td><td colspan="4">
			<label style="display:none"><input type="checkbox" id="drag" name="drag" value="false"><!--разрешить перемещение блоков---></label>
			<span id='add' class='button' style="width:10%; margin-top:30px;" onclick='add_input();'><img height="15px" style="" src='img/but/more_green.png'>   Добавить ещё один блок</span>
				</td></tr>
			</table>		
			<div id="form_input"></div>
		</form>
		<div id='form_img'>
		<table style="padding:20px;">
		<caption style="font:18px Tahoma;"><img src="img/but/II.png" height='16px'>   Изображения</caption>
		
		<tr><td style="border-top:1px dotted;font:14px Tahoma;">из коллекции</td><td style="border-top:1px dotted;font:14px Tahoma;">с компьютера</td></tr>
		<tr>
			<td style="height:45px;padding:0;border-bottom:1px dotted;">
				<form id="form2" action="javascript:insert()" method="post" >
					<label>
					<input name="name" type="text" id="name"  value=""/></label>
					<input  id="insert" type="image" height="22px" style="margin-left:-25px; position:relative;bottom:-6px;" title='добавить введеный код' src="img/but/more_blue.png" name="Submit" />
					</br>
					
				</form>
			</td>
			<td style="padding:0px;border-bottom:1px dotted;">
			
				<form action="load_big_image.php" method="POST" id="form_3">
					<h3 style="color: #6C7F93;">
					</h3>
					<div class="container upload">    <span id='bttn' class="btn">обзор</span>
					<!--<input type="hidden" name="MAX_FILE_SIZE" value="300">-->
					<input type="file" accept="image" id="files" name="files[]" multiple />
					</div>
				</form>
			</td>
		</tr>
		<tbody id="insert_response" style=" padding:1px;">
		<tr id="imag0" style=" padding:1px;">
		<td  style="text-align:left;">1. 
		<?php if(isset($_GET['img']))echo $_GET['img'];else echo's_ab075';?></span>
		</td>
		<td><span onclick="del_inp('0')"><img height="16px" src="img/but/del.png"></td>
		</tr>
		</tbody>
		</table>
		
		</div>
	<div id="form3" style="position:relative;FLOAT:right">
		<table style="padding:20px;">
<!-- 			<caption style="font:18px Tahoma;"><img src="img/but/III.png" height='16px'>   Материалы </caption>
			<tr><td style="border-top:1px dotted;font:14px Tahoma;">укажите тип материала:</td></tr>
			<tr><td style="border-bottom:1px dotted;">
			<div class="select-outer">
			<select name="type">
				<option value="0" selected>тип материала</option>
				<option value="1">вариант1</option>
				<option value="2">вариант2</option>
			</select>
			<a class="select-button"></a>
			</div>
			<img height="16px" style="padding-left:20px;position:relative;top:-2px;" src="img/but/asc.png">
			</td></tr> -->
			<tr><td style="font:14px Tahoma ;">Общая площадь:<span id="squa" style="font:bold 18px Tahoma ;"> 1.5 кв.м.</span> </td></tr>
			
		</table>
	</div><!--form3-->
</div>

</body><?php if(isset($_GET['delname'])){	$q=unlink($_GET['delname']);	if($q==1){echo 'all right';}}?>
<script type="text/javascript" src="js/drag.js"></script>
<script type="text/javascript" >
function get_browser(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return 'IE '+(tem[1]||'');
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return 'Opera '+tem[1];}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return M[0];
    }

function get_browser_version(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];                                                                                                                         
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1]||'');
        }
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return 'Opera '+tem[1];}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return M[1];
    }



function dfs(){
var browser=get_browser();
var browser_version=get_browser_version();
//alert(browser+' '+browser_version);

if (browser=='MSIE'){if(browser_version<11){alert('Ваш браузер устаревший.Используйте пожалуйста другой браузер, иначе наш конструтор будет работать не корректно');}}


	var widt = document.getElementsByClassName('width');
	var widtlen = widt.length;
	for(i=0;i<widtlen;i++){
		widt[i].disabled=false;
	}
	document.getElementById('name').disabled=false;
}
function eee(){
	var res=document.getElementById('canvas1').getElementsByTagName('canvas').length;
	if(res==0){document.getElementById('prepare').style.display='block';
		fufu();
		return false;
	}
	if(res==0){return false;}
	else{
		var inner = '<span id="mess" class="warning">прикрепите исходный файл вашего фото к письму заказа</span>';
		document.getElementById('warn').innerHTML+=inner;
		
		if( document.getElementById('self_foto').value==1){
			var wq = document.getElementById('mess').style.display='block';
			setTimeout(function(){
			document.getElementById('mess').style.display='none';
			document.getElementById('form_panel').submit();}, 3000);
		}else
		{	
			document.getElementById('form_panel').submit();
		}
	}
}
function proc(br){
var drags = document.getElementsByClassName('drag');
var count=drags.length;
var canvas=document.getElementsByClassName('canvas');
	img=document.getElementById('img');
	kol=document.getElementsByClassName('canvas').length;
	maxy=parseInt(img.offsetTop);
	x1=parseInt(img.clientWidth)+parseInt(img.offsetLeft);
	y1=parseInt(img.offsetTop)+parseInt(img.clientHeight);
	var imh=document.getElementById('img').clientTop;
	var imw=document.getElementById('img').clientLeft;
	var maxy, maxx=0, div=[], l=[], t=[], h=[], w=[], prx1, pry1, prx2, pry2, output='',tit='';
	
	for(i=0;i<kol;i++){
	var div = document.getElementsByClassName('canvas')
		
		t[i]=div[i].style.top;
		l[i]=div[i].style.left;
		h[i]=div[i].style.height;
		w[i]=div[i].style.width; 
		if(maxx<parseInt(l[i])+parseInt(w[i])){maxx=parseInt(l[i])+parseInt(w[i]);}
		if(maxy<parseInt(t[i])+parseInt(h[i])){maxy=parseInt(t[i])+parseInt(h[i]);}
		if(y1>parseInt(t[i])){y1=parseInt(t[i])}
		if(x1>parseInt(l[i])){x1=parseInt(l[i]);}
	}
	
	for(i=0;i<count;i++){
	var drag = document.getElementsByClassName('drag');
		prx1=parseInt(x1)-parseInt(drag[i].style.left);
		pry1=parseInt(y1)-parseInt(drag[i].style.top);
		prx2=parseInt(drag[i].clientWidth)+parseInt(drag[i].style.left)-maxx-parseInt(imw);
		pry2=parseInt(drag[i].clientHeight)+parseInt(drag[i].style.top)-maxy-parseInt(imh);
		prx1=prx1/parseInt(drag[i].offsetWidth);
		pry1=pry1/parseInt(drag[i].offsetHeight);
		prx2=prx2/parseInt(drag[i].clientWidth);
		pry2=pry2/parseInt(drag[i].clientHeight);
		prx1=prx1*100;
		pry1=pry1*100;
		prx2=prx2*100;
		pry2=pry2*100;
		prx1=prx1.toFixed(1);
		prx1 = new String(prx1);
		prx1 = prx1.replace(".",",");
		pry1=pry1.toFixed(1);
		pry1 = new String(pry1);
		pry1 = pry1.replace(".",",");
		prx2=prx2.toFixed(1);
		prx2 = new String(prx2);
		prx2 = prx2.replace(".",",");
		pry2=pry2.toFixed(1);
		pry2 = new String(pry2);
		pry2 = pry2.replace(".",",");
		tit = drag[i].title;
		if(tit.length>30)tit=tit.substr(0, 15);
		//output+=tit+' '+prx1+'; '+pry1+'; '+prx2+'; '+pry2+''+br;
		output+=tit+br;
	}
	//alert('x1 '+prx1+' y1 '+pry1+' x2 '+prx2+' y2 '+pry2);
	return output;
}
function fufu(){setTimeout("document.getElementById('prepare').style.display='none'", 5000);
}
function order(){
	var res = document.getElementById('canvas1').childNodes.length;
	if(res==1){document.getElementById("prepare").style.display="block";fufu();return false;}
	}
function downimg(){
var wiw=document.getElementById('img').clientWidth;
var wwii=document.getElementsByClassName('canvas');
var wwiil=wwii.length;tot=0;
for(i=0;i<wwiil;i++)
{
	if(wwii[i].title[0]=='.'){}else{
		tot=tot+parseInt(wwii[i].offsetWidth);
	}
}
tot=tot+330;
 document.getElementById('img').style.width=tot+'px';
document.getElementById('warn').innerHTML='';
		html2canvas($('#img'), {
			onrendered: function (canvas) {
				var img = canvas.toDataURL("image/jpeg").replace(/data:image\/jpeg;base64,/, '');
				document.getElementById('my_edit').value = img;
				var name=document.getElementById('savedis1').value;
				var ww=document.getElementById('save').value=1;
				document.getElementById('path').value=img;
				if(name.length>30){name=name.substr(0, 10)}
				document.getElementById('eskiz_order').value=name;
				$.ajax({type:'POST',url:'write.php',data:{name:name,data:img}});
				document.getElementById('img').style.width=wiw+'px';
 				var canv=document.getElementById('text');

			}
		}); 
	document.getElementById('warn').innerHTML='<span id="width" class="warning">общая ширина превысила максимальное значение</span></br><span id="height" class="warning">общая высота превысила максимальное значение</span></br><span id="photo" class="warning">имя файла с фотобанка должно быть минимум 5 символов</span></br>	<span id="foto" class="warning">нет такого файла в фотобанке</span>	<span id="prepare" class="warning">предварительно нажмите кнопку обрезать лишнее</span>	<span id="cut" class="warning">блок для вырезки не до конца заполнен</span><span id="download" class="warning">файл должен быть меньше 5мб</span>';

}
function set(){
	var obmen = document.getElementsByClassName('input');
	img=document.getElementById('img');
	maxy=parseInt(img.offsetTop);
	x1=parseInt(img.clientWidth)+parseInt(img.offsetLeft);
	y1=parseInt(img.offsetTop)+parseInt(img.clientHeight);
	var div = document.getElementsByClassName('canvas');
	var kol = div.length;
	var x1, width , y1, maxy, maxx=0, div=[],  img, l=[], t=[], h=[], w=[]; //ww=[], span=[], ll=[], tt=[], hh=[], inside=[], mxx, x11, mxy, y11;
	for(i=0;i<kol;i++){
	div = document.getElementsByClassName('canvas');
		t[i]=div[i].style.top;
		l[i]=div[i].style.left;
		h[i]=div[i].style.height;
		w[i]=div[i].style.width; 
		if(maxx<parseInt(l[i])+parseInt(w[i])){maxx=parseInt(l[i])+parseInt(w[i]);}
		if(maxy<parseInt(t[i])+parseInt(h[i])){maxy=parseInt(t[i])+parseInt(h[i]);}
		if(y1>parseInt(t[i])){y1=parseInt(t[i])}
		if(x1>parseInt(l[i])){x1=parseInt(l[i]);}  
	}

var l = document.getElementById('list').getElementsByTagName('img').length;
var lf = document.getElementById('list').childNodes;
var ww=maxx-x1;
var hh=maxy-y1;
var lk = document.getElementById('list').getElementsByTagName('img');
var vt=[], vl=[], vw=[], vh=[];
	for(i=0;i<l;i++){
		var tt=lk[i].parentNode.getAttribute('select');
		if(tt=='true'){
			lkk=document.getElementById(lk[i].id).parentNode;
			lk = document.getElementById('list').getElementsByTagName('img');

/* 			vt[i]=lk[i].parentNode.offsetTop;
			document.cookie='vt['+i+']'+'='+lk[i].parentNode.offsetTop;
			vl[i]=lk[i].parentNode.offsetLeft;
			document.cookie='vl['+i+']'+'='+lk[i].parentNode.offsetLeft;
			vw[i]=lk[i].offsetWidth;
			document.cookie='vw['+i+']'+'='+lk[i].parentNode.offsetWidth;
			vh[i]=lk[i].offsetHeight;
			document.cookie='vh['+i+']'+'='+lk[i].parentNode.offsetHeight; */

			lkk.style.top=y1;
			lkk.style.left=x1;
			lkk.style.width=ww;
			lkk.style.height=hh;
			document.getElementById(lk[i].id).style.width=ww;
			document.getElementById(lk[i].id).style.height=hh; 
		}
	}
}
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


function del_inp(id){

remove(document.getElementById('imag'+id));
remove(document.getElementById('drag'+id));
}</script>
<script type="text/javascript">
function back(){location.reload()}
function flip_h(){
	var im=document.getElementsByClassName('drag');
	var co=im.length;
	for(i=0;i<co;i++){
		var img=im[i].getElementsByTagName('img');
		if(im[i].getAttribute('select')=='true')
		{
			var cl=document.getElementById(img[0].id).className;
			if(cl=='thumb'){	
			document.getElementById(img[0].id).className='flip';}
			if(cl=='flip'){
			document.getElementById(img[0].id).className='thumb';}
			if(cl=='flipT'){
			document.getElementById(img[0].id).className='flipV';} 
			if(cl=='flipV'){
			document.getElementById(img[0].id).className='flipT';} 
		}
	}
}
function flip_v(){
	var im=document.getElementsByClassName('drag');
	var co=im.length;
	for(i=0;i<co;i++){
		
		
		var img=im[i].getElementsByTagName('img');
		var cl=document.getElementById(img[0].id).className;
		var cla=document.getElementById(img[0].id);
		var tt=cla.parentNode.getAttribute('select');//lert(tt);
		if(tt=='true'){
		
			if(cl=='flipV'){
			document.getElementById(img[0].id).className='thumb';}
			if(cl=='thumb'){
			document.getElementById(img[0].id).className='flipV';}
			if(cl=='flip'){
			document.getElementById(img[0].id).className='flipT';}
			if(cl=='flipT'){
			document.getElementById(img[0].id).className='flip';} 
		}
	}
}		

function cut(){
if(fill_check()){
var dsd=proc('\n ');var dsdd=proc('</br>');
var srccan=document.getElementsByClassName('canvas')
var countcan = document.getElementsByClassName('canvas').length;	
	for(i=0;i<countcan;i++){
		var wq=i+1;
		var qq =document.getElementById('canvas'+wq).innerHTML='';
	}
	var img=document.getElementById('img');
	kol=img.getElementsByClassName('canvas').length;
	for(i=0;i<kol;i++){cut_images(srccan[i]);
	}
	
	var count = document.getElementsByClassName('drag').length;
	var ct = document.getElementsByClassName('drag');f=[];
	var num, width='', height='';
	document.getElementById('tr_post').value='Фотопечать под стекло \n';                            //tr_post             /////////////////////////////////////////////
	document.getElementById('savedis1').value='';
	for(j=0;j<count;j++){

		var title=document.getElementById(ct[j].id).title;
		var top=document.getElementById(ct[j].id).offsetTop;
		var pt=document.getElementById(ct[j].id).parentNode.offsetTop;
		var rrry=parseInt(top)-parseInt(pt);
		var left=document.getElementById(ct[j].id).offsetLeft;
		var pl=document.getElementById(ct[j].id).parentNode.offsetLeft;
		var rrrx=parseInt(left)-parseInt(pl);
		var widim=document.getElementById(ct[j].id).offsetWidth;
		var heim=document.getElementById(ct[j].id).offsetHeight;
		if(title.length>30){title=title.substr(0, 10)}
		document.getElementById('tr_post').value+=title+'\n';
		document.getElementById('savedis1').value+=title+'_';
		f[j]=ct[j].id;
	}

	for(j=0;j<count;j++){
		document.getElementById(f[j]).className='hidden';
		if(document.getElementById('imag'+j)){
		document.getElementById('imag'+j).className='hidden';}
		if(document.getElementById('inp'+j)){
		document.getElementById('inp'+j).className='hidden';}
	}
	var canv=document.getElementsByClassName('che');
	var canle=canv.length;
	for(i=0;i<canle;i++){
	num=parseInt(canv[i].id.replace(/\D+/g,""));
	width+=num+'в: '+document.getElementById('height'+num).value+'мм ш: '+document.getElementById('width'+num).value+'мм';
	if(!document.getElementById('block'+num)){width+='\n';}else{width+= ' о: '+document.getElementById('block'+num).value+'мм\n';}
	}
	

	document.getElementById('tr_post').value+='блоки для обрезки: \n '+width+' \n ';
	
	document.getElementById('tr_post').value+=dsd;
										//////////////////////////////////////////////////
	
	var widt = document.getElementsByClassName('width');
	var widtlen = widt.length;
	for(i=0;i<widtlen;i++){
		widt[i].disabled=true;
	}	
	document.getElementById('name').disabled=true;
	document.getElementById('files').disabled=true;
	var eee=document.getElementsByClassName('btn');
	eee[0].className='hi';
	document.getElementById('add').setAttribute('onclick','');
	document.getElementById('add').className='hi';
	var add = document.getElementsByClassName('Add_small');
	var addlen = add.length;
	for(i=0;i<addlen;i++){
	add[i].setAttribute('onclick','');
	}
	var cl = document.getElementsByClassName('crop');
	var cllen = cl.length;
	for(i=0;i<cllen;i++){
	cl[i].setAttribute('onclick','');
	}
	var li=document.getElementsByTagName('li');
	arra=['flip_black', 'flip2black', 'canvas_black', 'splitblack'];
	for(i=0;i<4;i++){
		li[i].className='hid';
		li[i].childNodes[0].src='img/'+arra[i]+'.png';
	}
	document.getElementById('insert').disabled=true;
	var dsds = document.getElementsByClassName('bord').length;
	var dds = document.getElementsByClassName('bord');
	var nnam;
	for(i=0;i<dsds;i++){
		nnam = dds[i].id;
		if(nnam[0]=='s'){
		dds[i].style.display="none";
		}
	}
	
	
		var dsds = document.getElementsByClassName('podpi').length;
	var dds = document.getElementsByClassName('podpi');
	var nnam;
	for(i=0;i<dsds;i++){
		nnam = dds[i].id;
		if(nnam[0]=='s'){
		dds[i].style.display="block";
		}
	}
	
	
	
	var fdf=document.getElementsByClassName('podpis');
	var lfdf=fdf.length;var t;
 	for(i=lfdf-1;i>-1;i--){
		t=fdf[i].id;
		document.getElementById(t).remove();
	} 
	downimg();
	var spa = document.createElement('span');
	spa.id='text';
	spa.style.cssFloat="right";
	spa.style.position="absolute";
	var wi = spa.clientWidth;
	var ww = document.getElementById('img').clientWidth;
	spa.style.left=parseInt(ww)-195;
	spa.style.top="10px";
	spa.style.backgroundColor="white";
	
		document.getElementById("img").appendChild(spa);
/* 	var q = document.getElementById('text');
	alert(q.tagName); */
	var canva=document.getElementsByClassName('che');
	var canle=canva.length;
	var canv=document.getElementById('text');
	width='';
  	for(i=0;i<canle;i++){
		num=parseInt(canva[i].id.replace(/\D+/g,""));
		width+=num+'. в: '+document.getElementById('height'+num).value+' мм; ш: '+document.getElementById('width'+num).value+' мм; \n';
		canv.innerHTML+=width;
		if(!document.getElementById('block'+num)){canv.innerHTML+='</br>';}else{canv.innerHTML+= ' отступ: '+document.getElementById('block'+num).value+'</br>';}
		width='';
	} 
	canv.innerHTML+=dsdd;
	var ccc = canv.clientWidth;
	iii = document.getElementById('img').clientWidth;
	var qwqw=canv.style.left=parseInt(iii)-parseInt(ccc);
	document.getElementById('text_help').style.fontSize='15px';
	document.getElementById('text_help').innerHTML="Вы можете оформить заказ нажав по кнопке <img height='24' width='24' src='img/basket_put.png'>, или вернуться на шаг назад с помощью кнопки <img height='24' width='24' src='img/rotate.png'>";
}
}
function cut_images(i){
	var lr=[],r=[];
	var count = document.getElementsByClassName('drag').length;
	var src=document.getElementsByClassName('drag');
 	for(j=0;j<count;j++){

		
 		var xx1= i.style.left;
		var yy1=i.style.top; 
		var sr=src[j];
		var sorc=sr.getElementsByTagName('img');
		var srce=sorc[0].getAttribute('src');
		var classNam=sorc[0].className;
		var height=sorc[0].offsetHeight;
		var width=sorc[0].offsetWidth;
		var fo_id=sorc[0].id;
		var foto=document.getElementById(fo_id);
		
		var iimm=foto;
		var imm=iimm.id;
		iimm=document.getElementById(imm);
		var spanst=sr.style.top;
		var imt=document.getElementById('img').offsetTop;
		var iml=document.getElementById('img').offsetLeft;
		r[j]=-parseInt(yy1)+parseInt(spanst)-1;
		lr[j]=-parseInt(xx1)+parseInt(sr.style.left)//-parseInt(imt);
		var top = sr.offsetTop;
		left = sr.offsetLeft;
		var img=document.createElement('img');
		img.src=srce;
		img.id='im'+j;
		img.style.height=height+'px';
		img.style.position='absolute';
		img.className=classNam;
		img.style.left='0px';
		img.style.top='0px';
		var df=document.getElementById(imm).longDesc;
		img.style.marginLeft=lr;
		img.style.marginTop=r;
		i.style.overflow='hidden'; 
}




	var dss= document.getElementsByClassName('drag');
	var sas= dss.length;
 	var widt=i.clientWidth;
	var heigh=i.clientHeight;
	var wwa=i.id;
	i.innerHTML+='<canvas id="c'+wwa+'" width="'+widt+'" height="'+heigh+'" unselectable="on" class="thumb">';
	var canvas= document.getElementById('c'+wwa);

	for(e=0;e<sas;e++){
	
		var nn=dss[e].getElementsByTagName('img');
		nn=nn[0];
		var width=nn.clientWidth;
		var height=nn.clientHeight;
//alert(nn.id)
		downlo(nn, i, lr[e], r[e]);

	}		
	
//////////////////////////////////////////////////////////////////new block
/* var myi=[], eee=[];
myi[0]=document.getElementById('img0');
myi[1]=document.getElementById('img1');

*/

	function downlo(nn, i, lr, l){

	var file=document.getElementById(nn.id);
	var lid=nn.id.replace(/\D+/g,"");
	lid=parseInt(lid)-1;
	var bb=nn.className;
	var z=1; var x=1;

	var context = canvas.getContext('2d');
		if(nn.className=='flip'){
			if(lid>-1){
				if(!document.getElementById('img'+lid)){}else{
					lid=document.getElementById('img'+lid).className;
					if(lid=='flipV'){
						z=-1;
					}
					if(lid=='flip'){
						x=-1;
					}
					if(lid=='flipT'){
						z=z*(-1);x=x*(-1);
					}
				}
			}
			context.scale(-1*x, 1*z); 
			context.save(); 
			context.drawImage(file, -lr-parseInt(width), l, parseInt(width), parseInt(height));
			context.restore;
		}
		if(nn.className=='flipV'){
			if(lid>-1){
				if(!document.getElementById('img'+lid)){}else{
					lid=document.getElementById('img'+lid).className;
					if(lid=='flipV'){
						z=-1;
					}
					if(lid=='flip'){
						x=-1;
					}
					if(lid=='flipT'){
						z=z*(-1);x=x*(-1);
					}
				}
			}
			context.scale(1*x, -1*z); 
			context.save(); 
			context.drawImage(file, lr, -l-parseInt(height), parseInt(width), parseInt(height));
			context.restore;
		}
		if(nn.className=='flipT'){
			if(lid>-1){
				if(!document.getElementById('img'+lid)){}else{
					lid=document.getElementById('img'+lid).className;
					if(lid=='flipV'){
						z=-1;
					}
					if(lid=='flip'){
						x=-1;
					}
					if(lid=='flipT'){
						z=z*(-1);x=x*(-1);
					}
				}
			}
			context.scale(-1*x, -1*z); 
			context.save(); 
			context.drawImage(file, -lr-parseInt(width), -l-parseInt(height), parseInt(width), parseInt(height));
			context.restore;
		}
		if(nn.className=='thumb'){
			if(lid>-1){
				if(!document.getElementById('img'+lid)){}else{
					lid=document.getElementById('img'+lid).className;
					if(lid=='flipV'){
						z=-1;
					}
					if(lid=='flip'){
						x=-1;
					}
					if(lid=='flipT'){
						z=z*(-1);x=x*(-1);
					}
				}
			}
			context.scale(1*x, 1*z); 
			context.save(); 
			context.drawImage(file, lr, l, parseInt(width), parseInt(height));
			context.restore;
		}
		nn.className=bb;
	}  
}

function fill_check(){
	var obmen = document.getElementsByClassName('input');
	img=document.getElementById('img');
	kol=document.getElementsByClassName('canvas').length;
	maxy=parseInt(img.offsetTop);
	x1=parseInt(img.clientWidth)+parseInt(img.offsetLeft);
	y1=parseInt(img.offsetTop)+parseInt(img.clientHeight);
	var x1, width , y1, maxy, maxx=0, div=[], span=[], img, l=[], t=[], h=[], w=[], ww=[], ll=[], tt=[], hh=[], inside=[], mxx, x11, mxy, y11;
	
	for(i=0;i<kol;i++){
	var div = document.getElementsByClassName('canvas')
		
		t[i]=div[i].style.top;
		l[i]=div[i].style.left;
		h[i]=div[i].style.height;
		w[i]=div[i].style.width; 
		if(maxx<parseInt(l[i])+parseInt(w[i])){maxx=parseInt(l[i])+parseInt(w[i]);}
		if(maxy<parseInt(t[i])+parseInt(h[i])){maxy=parseInt(t[i])+parseInt(h[i]);}
		if(y1>parseInt(t[i])){y1=parseInt(t[i])}
		if(x1>parseInt(l[i])){x1=parseInt(l[i]);}
	}
	y1=document.getElementById('canvas1');
	y1=parseInt(y1.offsetTop);

	var numim = document.getElementsByClassName('drag');
	for(i=0;i<numim.length;i++){
		ww[i] = numim[i].offsetWidth;
		ll[i] = numim[i].offsetLeft;
		tt[i] = numim[i].offsetTop;
		hh[i] = numim[i].offsetHeight;
		document.getElementById('x1').value='false';
		if(x1+3>parseInt(ll[i]) && maxx-3<parseInt(ww[i])+parseInt(ll[i])  && y1+3>tt[i] && maxy-3<tt[i]+hh[i] ){
			document.getElementById('x1').value='ok';
			return true;
		}else{
			if(maxx>ll[i] && ll[i]>x1 && y1+10>tt[i] && maxy-10<tt[i]+hh[i]){mxx=ll[i];}
			if(ll[i]+ww[i]>=x1 && ll[i]+ww[i]<=maxx && y1+10>tt[i] && maxy-10<tt[i]+hh[i]){x11=ll[i]+ww[i];}
			var ewe=ll[i]+ww[i];
		}
		if(y1>parseInt(tt[i]) && maxy<parseInt(hh[i])+parseInt(tt[i]) && x1>ll[i] && maxx<ll[i]+ww[i]){
			document.getElementById('x1').value='ok';
			return true;
		}else{
			if(tt[i]>y1 && tt[i]<maxy && x1>ll[i] && maxx<ll[i]+ww[i]){mxy=tt[i];}
			if(tt[i]+hh[i]>y1 && tt[i]+hh[i]<maxy && x1>ll[i] && maxx<ll[i]+ww[i]){y11=tt[i]+hh[i];}
		}
	}
	//alert( ewe+' \n '+x11+'>'+mxx+' \n '+y11+'>'+mxy);
	if(x11>mxx-10){document.getElementById('x1').value='ok';return true;}
	if(y11>mxy){document.getElementById('x1').value='ok';return true;}
	if(document.getElementById('x1').value=='false'){document.getElementById('cut').style.display='block';setTimeout("document.getElementById('cut').style.display='none'", 4000);}
}

</script>
      <script type="text/javascript">
	 $(document).ready(function(){dfs();resize_x('width1',1);resize_y('height1',1);});
    </script>
</html>
