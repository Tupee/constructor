function square(){
var wid = document.getElementsByClassName('width');
var le = wid.length;
var name='', square=0, sq=0, heigh=0;
	for(i=0;i<le;i++){
		name=wid[i].name;
		if(name[0]=='w'){
			height=document.getElementById('height'+name[6]).value;
			square=wid[i].value*height;
			sq=sq+square/1000000;
		}
	}
	sq= sq.toFixed(2);
	document.getElementById('squa').innerHTML='  '+sq+' кв.м.';
}
function refresh(){
var ddd=document.getElementById('canvas1').getElementsByTagName('canvas').length;
if(ddd>0){
	var ii=document.getElementById('img');
	var co = ii.getElementsByClassName('hidden').length;
	var c = ii.getElementsByClassName('hidden');
	var inpf=document.getElementById('insert_response');
	var co2 = inpf.getElementsByClassName('hidden').length;
	var c2 = inpf.getElementsByClassName('hidden');
	var canva = ii.getElementsByClassName('canvas');
	var canlen = ii.getElementsByClassName('canvas').length;
		for(i=0;i<co;i++){
			document.getElementById(c[0].id).className='drag';
		} 
		for(i=0;i<co2;i++){
			c2[0].className='';
		}
		var g, qa;
 		for(i=0;i<canlen;i++){
			g=canva[i].id;
			qa=canva[i].title;
			g=g.replace(/\D+/g,"");
			if(qa[0]=='.'){
				canva[i].innerHTML='<div style="position:absolute;z-index:5;">'+g+'</div>';
			}else{
				if(document.getElementById('width'+g).value<1000 || document.getElementById('height'+g).value<400){
					canva[i].innerHTML='<div style="position:absolute;z-index:5;">'+g+'</div><span class="podpis" id="po'+g+'" style="font-size:1em;font-family:Courier New;position:relative;margin: auto;z-index:-1;margin-top:0px;opacity: 0.3;text-align: center; font-family:Courier New;font-weight: bold;font-size:1.5em;top:calc(50% - 30px);"></span>';
				}else{
					canva[i].innerHTML='<div style="position:absolute;z-index:5;">'+g+'</div><span class="podpis" id="po'+g+'" style="font-size:1em;font-family:Courier New;position:relative;margin: auto;z-index:-1;margin-top:0px;opacity: 0.3;text-align: center; font-family:Courier New;font-weight: bold;font-size:1.5em;top:calc(50% - 30px);">Место для фото</span>';			
				}
			}
		}	
	document.getElementById('text_help').innerHTML="С начала введите размеры нужных вам блоков, разместите фото, а затем нажмите \"обрезать лишнее <img src=\"img/split.png\">\".";
	
	var widt = document.getElementsByClassName('width');
	var widtlen = widt.length;
	for(i=0;i<widtlen;i++){
		widt[i].disabled=false;
	}
	document.getElementById('name').disabled=false;
	document.getElementById('files').disabled=false;
	
	document.getElementById('bttn').className='btn';
	
 	document.getElementById('add').setAttribute('onclick','add_input()');
	document.getElementById('add').className='button';
	var add = document.getElementsByClassName('Add_small');
	var addlen = add.length;
	for(i=0;i<addlen;i++){
	var num = add[i].parentNode.id;
	num=num.substring(2,num.length);
	add[i].setAttribute('onclick','add_small('+num+')');
	}
	var cl = document.getElementsByClassName('crop');
	var cllen = cl.length;
	for(i=0;i<cllen;i++){
	var num = cl[i].parentNode.parentNode.id;
	cl[i].setAttribute('onclick','crop_div('+num+')');
	}
	var li=document.getElementsByTagName('li');
	arra=['flip', 'flip2', 'canvas_size', 'split'];
	oclk=['flip_h()','flip_v()','set()','cut()'];
	for(i=0;i<4;i++){
		li[i].setAttribute('onclick', oclk[i]);
		li[i].className='';
		li[i].childNodes[0].src='img/'+arra[i]+'.png';
	}
	
	var canva = document.getElementsByClassName('canvas');
	var clen = canva.length;
	}
	document.getElementById('insert').disabled=false;
	
	var l = document.getElementById('list').getElementsByTagName('img').length;
	var lf = document.getElementById('list').getElementsByTagName('img');
	for(i=0;i<l;i++){
		lf = document.getElementById('list').getElementsByTagName('img');
		lf[i].parentNode.style.top=getCookie('vt['+i+']');

		lf[i].parentNode.style.left=getCookie('vl['+i+']');
		lf[i].parentNode.style.width=getCookie('vw['+i+']');
		lf[i].parentNode.style.height=getCookie('vh['+i+']');
		lf[i].style.width=getCookie('vw['+i+']');
		lf[i].style.height=getCookie('vh['+i+']');
		//alert(getCookie('vt['+i+']'));
  		delete_cookie('vt['+i+']');
		delete_cookie('vl['+i+']');
		delete_cookie('vw['+i+']');
		delete_cookie('vh['+i+']');  

		//alert(document.cookie);
	}
	var dsds = document.getElementsByClassName('bord').length;
	var dds = document.getElementsByClassName('bord');
	var nnam;
	for(i=0;i<dsds;i++){
		nnam = dds[i].id;
		if(nnam[0]=='s'){
		dds[i].style.display="block";
		}
	}
	document.getElementById('text').innerHTML='';
}
function delete_cookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function prov(){}
function add_fotobank(){
var form=document.getElementById('form2');
var length= form.getElementsByTagName('input').length;

	length=length/2;
	length++;
form.innerHTML+='<input name="name'+length+'" type="text" id="name'+length+'" value=""/><input class=\'button\' onclick="insert('+length+')" id="insert'+length+'" type="submit" name="Submit" value="Вставить"/></br>';

}

function resize (corner, event) {
 	if (document.addEventListener) {
		document.addEventListener ("mousemove",moveCorner,true);
		document.addEventListener ("mouseup",upCorner,true);
	}
	else if (document.attachEvent) {
		corner.setCapture();
		corner.attachEvent("onmoosemove",moveCorner);
		corner.attachEvent("onmouseup",upCorner);
		corner.attachEvent("onlosecapture",upCorner);
	}
	if (event.stopPropagation) event.stopPropagation();
	else event.cancelBubble = true;
	if (event.preventDefault) event.preventDefault();
	else event.returnValue = false; 
}

function moveCorner(e) {
	if (!e) e = window.event;
	var resize_pic = document.getElementById("image1");
	var container = document.getElementById("container");
	container.style.width = (e.clientX - container.offsetLeft) + "px";
	container.style.height = (e.clientY - container.offsetTop) + "px";
	resize_pic.style.width = container.style.width;
	resize_pic.style.height = container.style.height;
	if (e.stopPropagation) e.stopPropagation();
	else e.cancelBubble = true;
}

function upCorner(e) {
	if (!e) e = window.event;
	if (document.removeEventListener) {
		document.removeEventListener("mouseup",upCorner,true);
		document.removeEventListener("mousemove",moveCorner,true);
	}
	else if (document.detachEvent) {
		corner.detachEvent("onlosecapture",upCorner);
		corner.detachEvent("onmouseup",upCorner);
		corner.detachEvent("onmousemove",moveCorner);
		corner.releaseCapture();
	}
	if (e.stopPropagation) e.stopPropagation();
	else e.cancelBubble = true;
}





function dragOBJ(d,e) {
if(document.getElementById('drag').checked){
var asa=d.id.replace(/\D+/g,"");
var inp=parseInt(asa);
inp=document.getElementById(inp);
if(d.parentNode.id=="img"){
inp=inp.getElementsByTagName('input');
inp[0].className += 'active';
inp[1].className += 'active';
}
    var soX=parseInt(d.style.left),seX=xy(e),tX;
	var soY=parseInt(d.style.top),seY=xy(e,1),tY,stop;
	var tzX=xy(e,1)+soY-seY;
	var tzY=xy(e)+soX-seX;


    function drag(e) { if(!stop) { 
	
	var tX=xy(e,1)+oY-eY;
	var tY=xy(e)+oX-eX;
	var img=document.getElementById('img');
	//var kol=img.getElementsByTagName('div').length;
	//var h=parseFloat(document.getElementById(d['id']).offsetTop);	

	var X=(tY=xy(e)+oX-eX);
	var Y=(tX=xy(e,1)+oY-eY);
	

	//var height=d.style.height;

	d.style.left=(tY=xy(e)+oX-eX+'px');
	d.style.top=(tX=xy(e,1)+oY-eY+'px');

	var dl=parseInt(d.style.left);
	var dt=parseInt(d.style.top);
	var hei=parseInt(d.offsetHeight);
	var hg=document.getElementById('img').offsetHeight;
	var wd=document.getElementById('img').offsetWidth;
	var wdt=parseInt(d.offsetWidth);
	
	wdt=parseInt(wd)-wdt;
	maxt=parseInt(hg)-hei;
	if(dl>wdt){d.style.left=wdt+'px';}
	if(dl<0){d.style.left='0px';}
	if(dt>maxt){d.style.top=maxt+'px';}
	if(dt<0){d.style.top='0px';}
 	var id=d['id'];
//	var ID=id;
	var kol=img.getElementsByTagName('div').length-1;
	var rid=parseInt(id.replace(/\D+/g,""));
	var widthV = [];
	var hV = [];
	var leftV = new Array();
	var topV = new Array();
//	var leftM=document.getElementById('canvas'+rid).style.left;
//	var topM=document.getElementById('canvas'+rid).style.top;
 	for(i=0;i<kol;i++){
		var ii=i+1;
		widthV[i]=document.getElementById('canvas'+ii).style.width;
		hV[i]=document.getElementById('canvas'+ii).style.height;
		leftV[i]=document.getElementById('canvas'+ii).offsetLeft;
		topV[i]=document.getElementById('canvas'+ii).style.top;
		
		widthV[i]=parseInt(widthV[i]);
		hV[i]=parseInt(hV[i]);	
		leftV[i]=parseInt(leftV[i]);
		topV[i]=parseInt(topV[i]);
	} 
/* 
	for(i=2;i<=kol;i++){
		var fd=i-1;
		var ri=rid-1;
		}
	document.getElementById('x').value=X;document.getElementById('y').value=Y;	 */
	for(q=0;q<kol;q++){
		if(rid!=q+1)
		{	
			if ((leftV[rid-1]<leftV[q]+widthV[q])&&(leftV[rid-1]+widthV[rid-1]>leftV[q])&&(topV[rid-1]<topV[q]+hV[q]&&topV[rid-1]+hV[rid-1]>topV[q])){

				//var fff=rid-1;
		//		if(topV[rid-1]<topV[q]+hV[q] && topV[rid-1]+hV[q]>topV[q]+hV[q] ){//bottom
			//		d.style.top=topV[q]+hV[q]}
		//		if(topV[rid-1]+hV[rid-1]>topV[q]+20 && topV[rid-1]+hV[rid-1]-hV[q]<topV[q]+20  ){//top
		//			d.style.top=topV[q]-hV[q]}
				if(d.parentNode.id=='top'){			/* alert(d.parentNode.id)				 */													////special for top-block
				//	if(topV[rid-1]<topV[q]+hV[q] && topV[rid-1]+hV[q]>topV[q]+hV[q] ){//bottom
				//	d.style.top=topV[q]+hV[q]}
					if(topV[rid-1]+hV[rid-1]>topV[q] && topV[rid-1]+hV[rid-1]-hV[q]<topV[q]  ){//top
					d.style.top=topV[q]-hV[rid-1]-3;}
					
																									////special for top-block
				}else{
				
					if(leftV[rid-1]<=leftV[q]+widthV[q] && leftV[rid-1]>=leftV[q]){//right
						d.style.left=leftV[q]+widthV[q]+2;
						var ss=parseInt(d.style.left);
						if(ss<0){d.style.left=leftV[q]+widthV[q]}
						do{
							check_move(d.id ,q);
							var rr=document.getElementById('rr').value;
							d.style.left=parseInt(d.style.left)+1	; 
							rr=document.getElementById('rr').value;

						}while(rr==3)
					}
					if(leftV[rid-1]+widthV[rid-1]>=leftV[q] && leftV[rid-1]+widthV[rid-1]<=leftV[q]+widthV[q]){//LEFT						
						d.style.left=leftV[q]-widthV[q]
						var ss=parseInt(d.style.left);
						if(ss<0){d.style.left=leftV[q]+widthV[q];}
						do{
							check_move(d.id ,q);
							var rr=document.getElementById('rr').value;
							if(d.style.left<0){d.style.left=tzY+'px';d.style.top=tzX+'px';}
							else{d.style.left=parseInt(d.style.left)-1;} 
							rr=document.getElementById('rr').value;	
						}while(rr==3)

					}
			}	
			}
		}	
	}	
	} }


	var oX=parseInt(d.style.left),eX=xy(e),tX;
	var oY=parseInt(d.style.top),eY=xy(e,1),tY,stop;
 
    document.onmousemove=drag; document.onmouseup=function(){ 
			stop=1; document.onmousemove=''; document.onmouseup=new Function("dragapproved=false"); 
			check_move(d.id);
			rr=document.getElementById('rr').value;
			var wd=document.getElementById('img').offsetWidth;
			var wdt=parseInt(d.offsetWidth);
			wdt=parseInt(wd)-wdt;
			if(rr==3){	d.style.left=tzY+'px';d.style.top=tzX+'px'; document.getElementById('rr').value=1;}
			if(parseInt(d.style.left)<0){d.style.left=tzY+'px';d.style.top=tzX+'px';}
			if(parseInt(d.style.left)>wdt){d.style.left=tzY+'px';d.style.top=tzX+'px';}
			if(d.parentNode.id=="img"){inp[0].className = '';inp[1].className = '';
		}};
	}
 	} 
function check_move(id,qwe){
var leng = document.getElementsByClassName('canvas').length;
var ng = document.getElementsByClassName('canvas');
//var ID=id;
//d=document.getElementById(id);
//var od=document.getElementById('canvas1').style.width;
	img=document.getElementById('img');
	kol=img.getElementsByTagName('div').length-1;
	r=parseInt(id.replace(/\D+/g,""));
	widthV = [];
	hV = [];
if(!qwe){qwe=-1};
var leftV = new Array();
	topV = new Array();
	leftM=document.getElementById('canvas'+r).style.left;
	topM=document.getElementById('canvas'+r).style.top;
 	for(i=0;i<leng;i++){
		var ii=i+1;
		widthV[i]=ng[i].style.width;//document.getElementById('canvas'+ii).style.width;
		hV[i]=ng[i].style.height;
		leftV[i]=ng[i].offsetLeft;
		topV[i]=ng[i].offsetTop;	
		id[i]=ng[i].id;
		widthV[i]=parseInt(widthV[i]);
		hV[i]=parseInt(hV[i]);	
		leftV[i]=parseInt(leftV[i]);
		topV[i]=parseInt(topV[i]);
		
	} //document.getElementById('dis').value=leng;
/* 	document.getElementById('text').value=''; */
	var fd=document.getElementById(id);
/* 	for(i=0;i<leng;i++){
	}document.getElementById('text').value=' '; */
	for(k=0;k<leng;k++){
		if(parseInt(ng[k].id.replace(/\D+/g,""))!=r)
		{	//document.getElementById('text').value+=' '+parseInt(ng[k].id.replace(/\D+/g,""))+' != '+r+' ';
		//document.getElementById('text').value+=' '+fd.offsetLeft+'+'+ fd.style.width+' < '+leftV[k]+' + '+widthV[k];
			if ((parseInt(fd.offsetLeft)<leftV[k]+widthV[k])&&(parseInt(fd.offsetLeft)+parseInt(fd.style.width)>leftV[k])&&(parseInt(fd.offsetTop)<topV[k]+hV[k]&&parseInt(fd.offsetTop)+parseInt(fd.style.height)>topV[k])){document.getElementById('rr').value='3';
			//if ((leftV[r-1]<leftV[k]+widthV[k])&&(leftV[r-1]+widthV[r-1]>leftV[k])&&(topV[r-1]<topV[k]+hV[k]&&topV[r-1]+hV[r-1]>topV[k])){document.getElementById('rr').value='3';
			return false;
			}
			else{document.getElementById('rr').value='1';
			}
		}
	}
}  

function fixPageXY(e) {
  if (e.pageX == null && e.clientX != null ) { // если нет pageX..
    var html = document.documentElement;
		body = document.body;
    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
    e.pageX -= html.clientLeft || 0;
    e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
    e.pageY -= html.clientTop || 0;
  }
}

function check_w(id){
	var sum=0;
	var a=0;
	var widtlength = document.getElementById('form').getElementsByClassName('width').length;
	var widt = document.getElementById('form').getElementsByClassName('width');
	var wi = '';
	var ti = '';
	for(i=0; i<widtlength;i++){
		wi= widt[i].name;
		ti= wi.substr(6, wi.length-1);
		wi= wi.substr(0,3);
		if(wi== 'wid'){
			ti=document.getElementById('canvas'+ti).title;
			ti=ti[0];
			if(ti=='.'){}else{
				a=parseInt(widt[i].value);
				sum=sum + a;
			}
		}
	}
	return sum;
	square();
}
	
	
function add_input(){
	var zna = document.getElementsByClassName('width');
	var ccc = zna.length;
	var zva=[], zid=[];
	for(i=0;i<ccc;i++){
		zna = document.getElementsByClassName('width');
 		zid[i]=zna[i].id;
		zva[i]=zna[i].value; 
	}

	var img=document.getElementById('img');
	var kol=img.getElementsByClassName('canvas').length;
	var cann=img.getElementsByClassName('canvas');
	var di=document.getElementById("img");
	var ss=document.getElementById("addd");
	var inp=document.getElementById("form_input");
	//var co = ss.getElementsByTagName('input').length;
	var	co	= 1;
	var wer;var mm=0;mm=parseInt(mm);
	for(i=0;i<kol;i++){
		wer=cann[i].id;
		wer=wer.substr(6);
		if(mm<wer){mm=wer}
		while(co==wer){co++;}
	}
 	for(i=0;i<kol;i++){
		wer=cann[i].id;
		wer=wer.substr(6);
		if(co==wer){co= parseInt(mm)+1;}
	} 
		
	var idi =ss.getElementsByTagName('div').length;
	if(idi<1){idi=1;}else idi=co-1;
	var count=check_w(idi);
	if(count>=10100){document.getElementById('width').style.visibility='visible';}
	else{
		
	var wid1 = document.getElementById('width1').value;
	var hei1 = document.getElementById('height1').value;
	

	wid=parseInt(wid1)/6;
	hei= parseInt(hei1)/6;
	var name_x='width'+co;
	var name_y='height'+co;
	//if(!document.getElementById('crop')){} else{document.getElementById('crop').remove();}///										CROP CROP X
	var add = document.getElementsByClassName('Add_small');
	var le=document.getElementById('img').offsetTop;
	var l=document.getElementById('img').style.height;

	var top=310-parseInt(hei)-32;
	//var div = document.createElement('div');
	//	div.id=co;
	document.getElementById('addd').innerHTML+="<tr id="+co+" class='che'><td>"+co+".</td><td style='border-right:1px dotted;'><input type='text' id='height"+co+"' value='"+hei1+"' class='width' name='height"+co+"' onkeyup='resize_y(&#39"+name_y+"&#39,"+co+")\'></td><td><input type='text' id='width"+co+"' class='width' name='width_"+co+"' value='"+wid1+"' onkeyup='resize_x(&#39"+name_x+"&#39,"+co+")\'></td><td id ='ko"+co+"'><span id='ad"+co+"'><a class='Add_small' onclick='add_small("+co+");'><img height='16px' title='добавить верхний блок' src='img/but/triangle.png'></a></span></td><td><a id='crop"+co+"' class='crop' onclick=crop_div("+co+")><img style='width:16px; height:16px;' src='img/but/del.png'/></a></td></tr>"
		//ss.appendChild(div);
		var bottom=hei+top;
		var hg= document.getElementById('height'+co).value;
		hg=hg/6;
		di.innerHTML=di.innerHTML+"<div id='canvas"+co+"' class='canvas' style='text-align:center;position: absolute;left: 30; width:"+wid+"px; height:"+hei+"px; top:"+top+"px'; onmousedown='dragOBJ(this,event); return false;' ><div style='position:absolute;z-index:5;'>"+co+"</div><span id='po"+co+"' class='podpis' style='font-size:1em;font-family:Courier New;position:relative;z-index:-1;margin-top:0px;opacity: 0.3;text-align: center; font-family:Courier New;font-weight: bold;font-size:1.5em;top:calc(50% - 30px)'>Место для фото</span></div><div id='canl"+co+"' class='bord' style='position: absolute; top: "+top+"; left: 31; width:0px; height:"+hg+";z-index:5;border-left:1px dotted lightgrey;'></div><div id='canr"+co+"' class='bord' style='position: absolute; top: "+top+"; left: 0; width:0px; height:"+hg+";z-index:5;border-left:1px dotted lightgrey;'></div><div id='canb"+co+"' class='bord' style='position: absolute; top: "+bottom+"; left: 31; width:"+wid+"px; height:0px;z-index:5;border-top:1px dotted lightgrey;'></div><div id='cant"+co+"' class='bord' style='position: absolute; top: "+top+"; left: 31; width:"+wid+"px; height:0px;z-index:5;border-top:1px dotted lightgrey;'></div><span id='spc"+co+"' class='bord' style='position: absolute; top: "+top+"; left: 31; width:20px; height:20px;z-index:5;font:20px arial,sans-serif;z-index:5;'>"+co+"</span>";
		var tr=document.getElementById('canvas'+co);
 		do{
		check_move('canvas'+co);
		var rr=document.getElementById('rr').value;
		tr.style.left=parseInt(tr.style.left)+1; 
		rr=document.getElementById('rr').value;		
		}while(rr==3) 
		}
		
		var left = document.getElementById('canvas'+co).style.left;
		//alert(bottom);
		document.getElementById('canr'+co).style.left=wid+parseInt(left);
		document.getElementById('canl'+co).style.left=parseInt(left);
		document.getElementById('canb'+co).style.left=parseInt(left);
		//document.getElementById('canb'+co).style.top=parseInt(left);
		document.getElementById('cant'+co).style.left=parseInt(left);
		document.getElementById('spc'+co).style.left=left;
	for(i=0;i<ccc;i++){
		document.getElementById(zid[i]).value=zva[i];
	}
	square();
	wid1 = document.getElementById('width1').value;
	hei1 = document.getElementById('height1').value;
	if(parseInt(wid1)<1000 || parseInt(hei1)<400){document.getElementById('po'+co).innerHTML=''}else{document.getElementById('po'+co).innerHTML='Место для фото';}
	//if(){document.getElementById('po'+co).innerHTML=''}else{document.getElementById('po'+co).innerHTML='Место для фото';}
	
}
function remove(elem){
  return elem.parentNode ? elem.parentNode.removeChild(elem) : elem;
}
function strip(html)
{
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent||tmp.innerText;
}
function add_small(id){
var sm=document.getElementById(id);
var saw=document.getElementById(id);
saw=saw.getElementsByTagName('a'); 
sm=sm.getElementsByClassName('Add_small');
if(!sm){}else{remove(sm[0]);}
var widt = document.getElementById('width1').value;
wid=parseInt(widt)/6;
var di=document.getElementById('canvas'+id);
var len=document.getElementById('canvas'+id).offsetLeft;
var kol=document.getElementsByClassName('canvas').length;
var top = document.getElementById('top');
	top = top.childNodes;
var topc = top.length;
var ks=document.getElementsByClassName('canvas');
var bla=ks[kol-1].innerHTML;
bla=strip(bla);
kol=parseInt(bla)+1;

var canv=document.getElementById('addd'); 
var ok = canv.getElementsByTagName('tr').length;
	for(i=0;i<ok;i++){
		var qq=canv.children[i].id;
		if(kol==qq){kol++}	
	}

if(topc>0){
topn =top[topc-1].innerHTML;
if(kol<=topn){kol++}
 topn =top[topc-1].innerHTML;
if(kol<=topn){kol++}
topn =top[topc-1].innerHTML;
if(kol<=topn){kol++} 
}


var sm_in_len=document.createElement('input');
var sm_in_w=document.createElement('input');
var sm_in_h=document.createElement('input');
var sm_div=document.createElement('div');
//var label=document.createElement('label');
var top=document.getElementById('canvas'+id).style.top;
var of=document.getElementById('img').offsetTop;
var tt=parseInt(top)-41.6;
di.title='canvas'+kol;
sm_div.id='canvas'+kol;
sm_div.innerHTML='<span style="position:absolute;z-index:5;">'+kol+'</span>';
sm_div.setAttribute('onmousedown', 'dragOBJ(this,event); return false;');
sm_div.title='.'+id;
sm_div.className='canvas';
sm_div.style.top=tt+'px';
sm_div.style.left=len+'px';
sm_div.style.height='41.6px'; 
sm_div.style.width=wid+'px'; 





sm_in_h.id='height'+kol;
var div_i=document.getElementById(id);
//
var tr = document.createElement('tr');
var par = div_i.parentNode;
var heig=250;//document.getElementById('height'+kol).value;
//heig=heig/6;
var bl='отступ';
wid=wid*6;
//div_i.parentNode.insertBefore('<tr><td><h1>111eee111</h1></td></tr>', div_i); 
//div_i.parentNode.innerHTML+='<tr id="'+kol+'"><td id="ko1'+kol+'"><img src="img/but/triangle.png">'+kol+'. </td><td id="ko2'+kol+'" style="border-right:1px dotted;"></td><td id="ko3'+kol+'"></td><td style="color:#009746" id="ko4'+kol+'"></td><td id="'+kol+'"><a class="crop" onclick="crop_div('+kol+')"><img height="16px" src="img/but/del.png"></a></td></tr>';
tr.innerHTML='<td id="ko'+kol+'" class="che"><img src="img/but/triangle.png">'+kol+'. </td><td id="ko2'+kol+'" style="border-right:1px dotted;"><input value="'+heig+'" class="width" name="height'+kol+'" id="height'+kol+'" type="text" onkeyup="resize_y(\'height'+kol+'\', '+kol+')"></td><td id="ko3'+kol+'"><input class="width" id="width'+kol+'" name="width_'+kol+'" type="text" onkeyup="resize_x(\'width'+kol+'\', '+kol+')" value="'+wid+'"></td><td style="color:#009746" id="ko4'+kol+'"><input type="text" placeholder="'+bl+'" class="width" id="block'+kol+'" name="block'+kol+'" onkeyup="ize('+kol+', '+id+')"></td><td id="ko'+kol+'"><a class="crop" onclick="crop_div('+kol+')"><img height="16px" src="img/but/del.png"></a></td>';
tr.id=kol;
insertAfter(par, tr, div_i);
//div_i.appendChild(label);
//document.getElementById('ko4'+kol).appendChild(sm_in_len);
//document.getElementById('ko3'+kol).appendChild(sm_in_w);
//document.getElementById('ko2'+kol).appendChild(sm_in_h);
document.getElementById('top').appendChild(sm_div);
var bottom=tt+41.6;
wid=wid/6;
var right=len+wid;
var hg=document.getElementById('height'+kol).value;
hg=hg/6;
var bord="<div id='canl"+kol+"' class='bord' style='position: absolute; top: "+tt+"; left: "+len+"; width:0px; height:"+hg+";z-index:5;border-left:1px dotted lightgrey;'></div><div id='canr"+kol+"' class='bord' style='position: absolute; top: "+tt+"; left: "+right+"; width:0px; height:"+hg+";z-index:5;border-left:1px dotted lightgrey;'></div><div id='canb"+kol+"' class='bord' style='position: absolute; top: "+bottom+"; left: "+len+"; width:"+wid+"px; height:0px;z-index:5;border-top:1px dotted lightgrey;'></div><div id='cant"+kol+"' class='bord' style='position: absolute; top: "+tt+"; left: "+len+"; width:"+wid+"px; height:0px;z-index:5;border-top:1px dotted lightgrey;'></div><span id='spc"+kol+"' class='bord' style='position: absolute; top: "+tt+"; left: "+len+"; width:20px; height:20px;z-index:5;font:20px arial,sans-serif;z-index:5;'>"+kol+"</span>";

document.getElementById('top').innerHTML+=bord;

square();
}	

function insertAfter(parent, node, referenceNode) { 
  parent.insertBefore(node, referenceNode.nextSibling); 
}
function crop_div(id,t){
var title=document.getElementById('canvas'+id).title;
var width=document.getElementById('canvas'+id).style.width;
var wwi=width;
var ilef=document.getElementById('canvas'+id).style.left;
var im=document.getElementById('addd');
var kol=im.getElementsByTagName('div');
	var q=kol.lastChild;
	var i=id-1;
if(!title){}else{
	if(title[0]=='.'){document.getElementById('ko'+title[1]).innerHTML+='<a class="Add_small" onclick="add_small('+title[1]+');"><img height="16px" src="img/but/triangle.png"></a>';
	document.getElementById('canvas'+title[1]).title='';
	}
	if(title[0]=='c'){remove(document.getElementById(title));
	var title=title.replace(/\D+/g,"");
	remove(document.getElementById(title));//alert(id)
	remove(document.getElementById('canb'+title));
	remove(document.getElementById('canl'+title));
	remove(document.getElementById('cant'+title));
	remove(document.getElementById('canr'+title));
	remove(document.getElementById('spc'+title));
	
	
	}
}
	if(id==2){
	var element = document.getElementById('canvas'+id);
		remove(element);
		remove(document.getElementById(id));	
	}else{ 

	var element = document.getElementById('canvas'+id);
		remove(element);
		remove(document.getElementById(id));
		}
	var koll = document.getElementsByClassName('canvas');
	var kollen=koll.length;
	var eva, tit;
	if(!title){eva=0;}else{if(title[0]=='.'){eva=1;}else{eva=0;}}
	if(eva==0){
		for(i=0;i<kollen;i++){
			var it=parseInt(koll[i].id.replace(/\D+/g,""));
			var le=parseInt(koll[i].style.left);
	
			if(le>parseInt(ilef)){
				koll[i].style.left=parseInt(le)-parseInt(wwi)-2;
				do{
					check_move(koll[i].id);
					var rr=document.getElementById('rr').value;
					koll[i].style.left=parseInt(koll[i].style.left)+1; 
					rr=document.getElementById('rr').value;		
				}while(rr==3) 
			
			}
			//it
			var to = document.getElementById('canvas'+it).style.top;
			var left = document.getElementById('canvas'+it).style.left;
			var width = document.getElementById('canvas'+it).style.width;
			var height = document.getElementById('canvas'+it).style.height;
	
	change_sm(it, to, left, width, height);	
		}
	}
	remove(document.getElementById('canb'+id));
	remove(document.getElementById('canl'+id));
	remove(document.getElementById('cant'+id));
	remove(document.getElementById('canr'+id));
	remove(document.getElementById('spc'+id));
	
	
square();
		/* 	var iii=id-1;
	var sad=document.getElementById(iii); */
}

function ize(name, id){
	var kol=img.getElementsByTagName('div').length;
	kol=kol-1;
	var k=id+1;
	var le=document.getElementById('canvas'+id).offsetLeft;
	var l=document.getElementById('block'+name).value;
	var sm=document.getElementById('canvas'+name);
	var as=parseInt(l)/6+parseInt(le);
	l=parseInt(l);
	if(l>-1 && l<10001){
		sm.style.left=as+'px';
	}else{
		document.getElementById('block'+name).value=0;
		as=parseInt(le);
		sm.style.left=as+'px';
	}
	var to = document.getElementById('canvas'+name).style.top;
	var left = document.getElementById('canvas'+name).style.left;
	var width = document.getElementById('canvas'+name).style.width;
	var height = document.getElementById('canvas'+name).style.height;
	
	change_sm(name, to, left, width, height);	
}

function resize_x(name, id){

 	var w=document.getElementById(name);
	var val=document.getElementById('width'+id).value;
	var width=parseInt(val)/6;
	var wid=document.getElementById('canvas'+id).style.width;
	var razn=-width+parseInt(wid);
	var ddd=document.getElementById('img').getElementsByTagName('div').length-1;
	var su = check_w(id);
	var dr = document.getElementById('drag');
	if(su<10100){			
		if(val<1000){
			if(!document.getElementById('po'+id)){}else{document.getElementById('po'+id).innerHTML=''}
		}
		else{
			if(!document.getElementById('po'+id)){}else{document.getElementById('po'+id).innerHTML='Место для фото';}
		}
		var li = document.getElementById('canvas'+id).offsetLeft;
		var wi = document.getElementById('canvas'+id).offsetWidth;
		var can = document.getElementsByClassName('canvas');
		var canlen = document.getElementsByClassName('canvas').length;
		var titl=document.getElementById('canvas'+id).title;
		var tt='';
			//if(!titl){}else{alert(titl)}
			if(!titl || titl[0]=='c'){
				for(i=0;i<canlen;i++){
					var l=can[i].style.left;
					var er=parseInt(can[i].id.replace(/\D+/g,""));
					
					var lll=parseInt(can[i].style.left);
					var lli=parseInt(document.getElementById('canvas'+id).style.left);
					//if(can[i].style.left==id)re=id;
					if(lll>lli){
						tt=can[i].title;
						if(tt[0]!='.'){
							can[i].style.left=parseInt(l)-razn;
							var name =can[i].id;
							name = name.substr(6, name.length-1);
							var to = can[i].style.top;
							var left = can[i].style.left;
							var widw = can[i].style.width;
							var heigw = can[i].style.height;
	
							change_sm(name, to, left, widw, heigw);
						
						}
					}
				}
			}	
	}	
	var su = check_w(id);
	if(su<10000){document.getElementById('width').style.display='none';
	}
	if(su>10000){ 
		document.getElementById('width'+id).value='1000';
		document.getElementById('canvas'+id).style.width= "166px";
		document.getElementById('width').style.display='block';
		setTimeout("document.getElementById('width').style.display='none'", 3000);
		}else document.getElementById('canvas'+id).style.width= width+"px";
 	if(val==''){
		document.getElementById('width'+id).value='10';
		document.getElementById('canvas'+id).style.width= "2px";
		} 
	var www=document.getElementsByClassName('width');
	var lll=www.length;
	var qqa, qwe, wer;
	for(i=0;i<lll;i++){
		www=document.getElementsByClassName('width');
		www=www[i].id;
		qqa=www.substr(0,4);
		if(qqa=='bloc'){
			qwe=www[www.length-1]
			wer = document.getElementById('canvas'+qwe).title;
			if(wer[0]=='.'){
				ize(qwe,wer[1]);
			}
		}
	}
	var to = document.getElementById('canvas'+id).style.top;
	var left = document.getElementById('canvas'+id).style.left;
	var width = document.getElementById('canvas'+id).style.width;
	var height = document.getElementById('canvas'+id).style.height;
	
	change_sm(id, to, left, width, height);	
	square();
}
	
function change_sm(id, top, left, width, height){
	document.getElementById('canl'+id).style.left=left;
	document.getElementById('canl'+id).style.top=top;
	document.getElementById('canl'+id).style.height=height;
	document.getElementById('canr'+id).style.left=parseInt(left)+parseInt(width);
	document.getElementById('canr'+id).style.top=top;
	document.getElementById('canr'+id).style.height=height;
	document.getElementById('canb'+id).style.left=parseInt(left);
	document.getElementById('canb'+id).style.top=parseInt(top)+parseInt(height);
	document.getElementById('canb'+id).style.width=width;
	document.getElementById('cant'+id).style.left=left;
	document.getElementById('cant'+id).style.top=parseInt(top);
	document.getElementById('cant'+id).style.width=width;
	document.getElementById('spc'+id).style.left=left;
	document.getElementById('spc'+id).style.top=top;
}
	
 function resize_y(name, id){
	var y=document.getElementById(name);
	var can=document.getElementById('canvas'+id);
	var h =document.getElementById('canvas'+id).style.height;
	var val=document.getElementById('height'+id).value;
	if(y.value>=0 && y.value<1501){
		if(y.value<400){
			if(!document.getElementById('po'+id)){}else{document.getElementById('po'+id).innerHTML='';}
		}else{
			if(!document.getElementById('po'+id)){}else{document.getElementById('po'+id).innerHTML='Место для фото';}
		}
		var height=parseInt(y.value);
		height=height/6;
		document.getElementById('height').style.display='none';
		document.getElementById('canvas'+id).style.height=height+"px";
		var hh=document.getElementById('canvas'+id).style.top;
		//var h1=document.getElementById('canvas'+id).offsetTop;

		var r=height-parseInt(h);
		hh=parseInt(hh)-parseInt(r);
		document.getElementById('canvas'+id).style.top=hh+"px";
		if(can.title){
 			var nam=can.title;
			if(nam[0]=='c'){
				var bl=document.getElementById(nam).style.top;
				var bh=document.getElementById(nam).style.height;
				var val=parseInt(bl)+parseInt(hh);
				bl=parseInt(hh)-parseInt(bh)+'px'; 
				document.getElementById(nam).style.top=bl;
				var idc = nam.substr(6, nam.length-1);
//				alert(idc);
				 	var to = document.getElementById('canvas'+idc).style.top;
				var left = document.getElementById('canvas'+idc).style.left;
				var width = document.getElementById('canvas'+idc).style.width;
				var height = document.getElementById('canvas'+idc).style.height;
				change_sm(idc, to, left, width, height);	
			}
		}
	}
	else{
		document.getElementById('height'+id).value='1350';
		document.getElementById('canvas'+id).style.height="225px";
		var top = document.getElementById('img').offsetTop;
		var to = document.getElementById('img').offsetHeight;
		var he = document.getElementById('canvas'+id).offsetHeight;
		var point = parseInt(to)-parseInt(he)-30;
		document.getElementById('canvas'+id).style.top=point+"px";
		document.getElementById('height').style.display='block';
		setTimeout("document.getElementById('height').style.display='none'", 3000);
		}
	if(val==''){
		document.getElementById('height'+id).value='0';
		document.getElementById('canvas'+id).style.height= w.value+"px";
		}
 	var to = document.getElementById('canvas'+id).style.top;
	var left = document.getElementById('canvas'+id).style.left;
	var width = document.getElementById('canvas'+id).style.width;
	var height = document.getElementById('canvas'+id).style.height;
	
	change_sm(id, to, left, width, height);	
		
	square();
	}

//////////////////////////////////////////////////drag
function agent(v) { return(Math.max(navigator.userAgent.toLowerCase().indexOf(v),0)); }

function xy(e,v) { return(v?(agent('msie')?event.clientY+document.body.scrollTop:e.pageY):(agent('msie')?event.clientX+document.body.scrollTop:e.pageX)); }
////////////////////////////////////////////drag






