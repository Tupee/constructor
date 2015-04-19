  function toop(d){
ad=d.parentNode;
var fd = ad.getElementsByTagName('img');
im=fd[0].id;
 var h = d.parentNode.clientHeight;
 var t = d.parentNode.offsetTop;
 var p = parseInt(t)+parseInt(h);
 
 var tim = document.getElementById('img').offsetTop;
var tim = document.getElementById('img').offsetTop;
tim=parseInt(tim);
 var qa = '';//document.getElementById('canvas1').offsetTop;
 var cann = document.getElementsByClassName('canvas');
var cannl = cann.length;
var cac = new Array();
for(i=0;i<cannl;i++){
	cac[i]=cann[i].offsetTop;
}
	function dr(event){
		if(!sto) {
			var parent=d.parentNode.id;
			var x = xy(event);
			var y = xy(event,1);
			
		for(i=0;i<cannl;i++){
			if(y+5>cac[i]+tim && y-5<cac[i]+tim){qa=cac[i];}
		}
			//var qa = document.getElementById('canvas1').offsetTop;
			if(y>qa+10 && y<qa+25){
				document.getElementById(parent).style.top=qa;
				var rrr = parseInt(y)-parseInt(qa); 
				h=parseInt(p)-parseInt(qa);
				document.getElementById(parent).style.height=h;
				document.getElementById(im).style.height=h;
			}else{
				var imgt = document.getElementById('img').offsetTop;
				var ww=document.getElementById(parent).offsetWidth;
				var h=document.getElementById(parent).offsetHeight;
				var ll=document.getElementById(parent).offsetLeft;
				var tt=document.getElementById(parent).style.top;
				var r=parseInt(tt)+parseInt(imgt)-parseInt(y);
				h=r+h;
				if(y<parseInt(tt)+parseInt(h)){	
					document.getElementById(parent).style.top=y-parseInt(imgt);
					document.getElementById(parent).style.width=ww;
					document.getElementById(parent).style.height=h;
					document.getElementById(im).style.width=ww;
					document.getElementById(im).style.height=h; 
				}
			}
		} 
	}
 var sto;
	document.onmousemove=dr;
	document.onmouseup=function(){ 
		sto=1;
		document.onmouseup='';
		document.onmouseup=new Function("dragapproved=false");
		}  
}
  function bot(d){
ad=d.parentNode;
var fd = ad.getElementsByTagName('img');
im=fd[0].id;
 var qa = document.getElementById('canvas1').offsetTop;
 var qah = document.getElementById('canvas1').clientHeight;
 var qaa=parseInt(qa)+parseInt(qah);
 	function dr(event){
		if(!sto) {
			var qa = d.parentNode.offsetTop;
			
			var parent=d.parentNode.id;
			var x = xy(event);
			var y = xy(event,1);
			var ddd = document.getElementById('img').offsetTop;
			if(parseInt(y)-parseInt(ddd)<parseInt(qaa) && parseInt(y)-parseInt(ddd)>parseInt(qaa)-25){
				var h = parseInt(qaa)-parseInt(qa);
				document.getElementById(parent).style.height=h;
				document.getElementById(im).style.height=h;
			}else{
				imgt = document.getElementById('img').offsetTop;
				var ww=document.getElementById(parent).offsetWidth;
				var h=document.getElementById(parent).offsetHeight;
				var ll=document.getElementById(parent).offsetLeft;
				var tt=document.getElementById(parent).offsetTop;
				var r=parseInt(y)-parseInt(tt)-parseInt(h)-parseInt(imgt);
				h=r+h;
			//if(y<parseInt(tt)+parseInt(h)){
				document.getElementById(parent).style.width=ww;
				document.getElementById(parent).style.height=h;
				document.getElementById(im).style.width=ww;
				document.getElementById(im).style.height=h;
			}
		} 
	}
 var sto;
	document.onmousemove=dr;
	document.onmouseup=function(){ 
		sto=1;
		document.onmouseup='';
		document.onmouseup=new Function("dragapproved=false");
		}  
}
function left(d){
ad=d.parentNode;
var fd = ad.getElementsByTagName('img');
im=fd[0].id;

var cann = document.getElementsByClassName('canvas');
var cannl = cann.length;
var cac = new Array();
var caf = new Array();
for(i=0;i<cannl;i++){
	cac[i]=cann[i].offsetLeft;
	caf[i]=cann[i].offsetWidth;
	caf[i]=parseInt(cac[i])+parseInt(caf[i]);
}
//alert(ssd);
//var la = document.getElementById('canvas1').offsetLeft;
var la = document.getElementById('canvas1').offsetTop;
var ww = d.parentNode.offsetWidth;
var ll = d.parentNode.offsetLeft;
var lwp = parseInt(ll)+parseInt(ww);

	function dr(event){
		if(!sto) {
			var parent=d.parentNode.id;
			var x = xy(event);
			var y = xy(event,1);
			for(i=0;i<cannl;i++){
			if(x>parseInt(cac[i]) && x<parseInt(caf[i])){la=cac[i];}
			}
			var width = parseInt(lwp)-parseInt(la);
			if(parseInt(x)>parseInt(la) && parseInt(x)<parseInt(la)+25){
				document.getElementById(parent).style.left=parseInt(la);
				document.getElementById(im).style.width=width;
				document.getElementById(parent).style.width=width;
			}else{
				rw=document.getElementById('img').clientLeft;
				ww=document.getElementById(parent).offsetWidth;
				h=document.getElementById(parent).offsetHeight;
				ll=document.getElementById(parent).style.left;
				r=parseInt(ll)-parseInt(x);
				w=r+ww;

				if(x<parseInt(ll)+parseInt(ww)){
					document.getElementById(parent).style.left=parseInt(x);
					document.getElementById(parent).style.width=w;
					document.getElementById(parent).style.height=h;
					document.getElementById(im).style.width=w;
					document.getElementById(im).style.height=h;
				}
			}
		} 
	}
 var sto;
	document.onmousemove=dr;
	document.onmouseup=function(){ 
		sto=1;
		document.onmouseup='';
		document.onmouseup=new Function("dragapproved=false");
		}  
}
  function right(d){
 ad=d.parentNode;
var fd = ad.getElementsByTagName('img');
im=fd[0].id;
var cann = document.getElementsByClassName('canvas');
var erw = document.getElementById('img').clientLeft;
var cannl = cann.length;
var cac = new Array();
var caf = new Array();
for(i=0;i<cannl;i++){
	cac[i]=cann[i].offsetLeft;
	caf[i]=cann[i].offsetWidth;
	caf[i]=parseInt(cac[i])+parseInt(caf[i]);
}

 				var lll= document.getElementById('canvas1').offsetLeft; 
				var lpp= document.getElementById('canvas1').offsetWidth; 
				var ppp= parseInt(lpp)+parseInt(lll); 
				//alert(lpp+' '+lll)
var lww= d.parentNode.offsetLeft; 
/* var lpw= d.parentNode.offsetWidth; 
var pdp= parseInt(lpw)+parseInt(lww);  */

	function dr(event){
		if(!sto) {
			var parent=d.parentNode.id;
			var x = xy(event);
			var y = xy(event,1);
  			for(i=0;i<cannl;i++){
				if(x>parseInt(cac[i]) && x<parseInt(caf[i])){
					ppp=caf[i];//alert(cac[i]+' '+caf[i])
				}
			}  
			if(parseInt(x)<parseInt(ppp) && parseInt(x)>parseInt(ppp)-25){//alert(erw);
 				var w = ppp-parseInt(lww);
				document.getElementById(parent).style.width=w;
				document.getElementById(im).style.width=w; 
			}else{
				ww=document.getElementById(parent).offsetWidth;
				h=document.getElementById(parent).offsetHeight;
				ll=document.getElementById(parent).offsetLeft;
				r=parseInt(x)-parseInt(ll)-parseInt(ww);
				w=r+ww;
				document.getElementById(parent).style.width=w;
				document.getElementById(parent).style.height=h;
				document.getElementById(im).style.width=w;
				document.getElementById(im).style.height=h;
			}
		} 
	}
 var sto;
	document.onmousemove=dr;
	document.onmouseup=function(){ 
		sto=1;
		document.onmouseup='';
		document.onmouseup=new Function("dragapproved=false");
		}   
}
 function br(d){
ad=d.parentNode;
var fd = ad.getElementsByTagName('img');
im=fd[0].id;
				hh=document.getElementById(im).offsetHeight;
				ww=document.getElementById(im).offsetWidth;
								k=parseInt(ww)/parseInt(hh);
			
	function dr(event){
	
		if(!sto) {
			var parent=d.parentNode.id;
			var x = xy(event);
			var y = xy(event,1);
			var to = document.getElementById(parent).style.top;
				l = document.getElementById(parent).offsetLeft;
				imgl = document.getElementById('img').offsetLeft;
				imgt = document.getElementById('img').offsetTop;
				f=parseInt(x)-parseInt(l);
				h=f/k;

				t=parseInt(to);//+parseInt(imgt);
				l=parseInt(l)+parseInt(imgl);

					document.getElementById(parent).style.top=t;
					document.getElementById(im).style.height=h;
					document.getElementById(im).style.width=f;		
					document.getElementById(parent).style.width=f;		
					document.getElementById(parent).style.height=h;

		} 
	}
 var sto;
	document.onmousemove=dr;
	document.onmouseup=function(){ 
		sto=1;
		document.onmouseup='';
		document.onmouseup=new Function("dragapproved=false");
		}  
}
function bl(d){
ad=d.parentNode;
var fd = ad.getElementsByTagName('img');
im=fd[0].id;
				hh=document.getElementById(im).offsetHeight;
				ww=document.getElementById(im).offsetWidth;
								k=parseInt(ww)/parseInt(hh);
	function dr(event){
	
		if(!sto) {
			var parent=d.parentNode.id;
			var x = xy(event);
			var y = xy(event,1);
			var l = document.getElementById(parent).style.left;
			var imgl = document.getElementById('img').offsetLeft;
			l=parseInt(l);
			var t = document.getElementById(parent).style.top;
			var imgt = document.getElementById('img').offsetTop;
			var r = parseInt(l)-parseInt(x);
			var w = document.getElementById(parent).offsetWidth;

				f=r+parseInt(w);
				h=f/k;
			if(x<parseInt(l)+parseInt(w)){
			document.getElementById(parent).style.top=t;
			document.getElementById(parent).style.left=parseInt(l)-parseInt(r)+0.1;
			document.getElementById(parent).style.width=r+parseInt(w);
			document.getElementById(parent).style.height=h;
			document.getElementById(im).style.width=r+parseInt(w);
			document.getElementById(im).style.height=h;			
			}
		}	
	}
var sto;
	document.onmousemove=dr;
	document.onmouseup=function(){ 
		sto=1;
		document.onmouseup='';
		document.onmouseup=new Function("dragapproved=false");
		}
}

function tr(d){
var ad=d.parentNode;
var fd = ad.getElementsByTagName('img');
im=fd[0].id;
	hh1=document.getElementById(im).offsetHeight;
	ww=document.getElementById(im).offsetWidth;
	k=parseInt(ww)/parseInt(hh1);
	var parent=d.parentNode.id;
	var hh = document.getElementById(parent).offsetHeight;
	var t = document.getElementById(parent).offsetTop;
	function rr(event){

		if(!sto) {
			var x = xy(event);
			var y = xy(event,1);
			
			var imgt = document.getElementById('img').offsetTop;
			var imgl = document.getElementById('img').offsetLeft;
			
			var l = document.getElementById(parent).offsetLeft;
			
			var w = document.getElementById(parent).offsetWidth;
			//
			dsds = parseInt(t)+parseInt(hh)
			f=parseInt(x)-parseInt(l);
			h=f/k;
			var ry=h-hh
			var st=parseInt(t)-ry

			if(y<parseInt(t)+parseInt(h)+parseInt(imgt) && x>parseInt(l)){
				document.getElementById(parent).style.top=st;
				document.getElementById(parent).style.width=f;
				document.getElementById(parent).style.height=h;		
				document.getElementById(im).style.height=h;	
				document.getElementById(im).style.width=f;				
			}
		}	
	}

var sto;
	document.onmousemove=rr;
	document.onmouseup=function(){ 
		sto=1;
		document.onmouseup='';
		document.onmouseup=new Function("dragapproved=false");
		} 
}
function tl(d){
ad=d.parentNode;
var fd = ad.getElementsByTagName('img');
im=fd[0].id;
	hh=document.getElementById(im).offsetHeight;
	ww=document.getElementById(im).offsetWidth;
	k=parseInt(ww)/parseInt(hh);
	parent=d.parentNode.id;
	hh = document.getElementById(parent).offsetHeight;
	t = document.getElementById(parent).offsetTop;
	function rr(event){
		 	var x = xy(event);
				y = xy(event,1);
		if(!sto) {
			
			imgt = document.getElementById('img').offsetTop;
			l = document.getElementById(parent).style.left;
			r = parseInt(l)-parseInt(x);
			w = document.getElementById(parent).offsetWidth;
			
 			img = document.getElementById('img').offsetTop;
			f=parseInt(r)+parseInt(w);
			h=f/k;	
			ry=h-parseInt(hh);
			ry= parseInt(t)-ry;
			if(x<parseInt(l)+parseInt(w)){
				document.getElementById(parent).style.left=parseInt(l)-parseInt(r)+0.1;
				document.getElementById(parent).style.top=ry;
				document.getElementById(parent).style.width=r+parseInt(w);
				document.getElementById(parent).style.height=h;		
				document.getElementById(im).style.height=h;
				document.getElementById(im).style.width=r+parseInt(w);				
			}
		}	
	}
var sto;
	document.onmousemove=rr;
	document.onmouseup=function(){ 
		sto=1;
		document.onmouseup='';
		document.onmouseup=new Function("dragapproved=false");
		}
}