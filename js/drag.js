function crop_foto(b){
document.getElementById('image'+b).remove();
document.getElementById('imag'+b).remove();

}

function add_foto1(nam){
var span = document.createElement('span');
var inputs = list.getElementsByTagName('img');
var count = inputs.length;
var tt;
			var count1= count;
			for(i=0;i<count1;i++){
				tt=inputs[i].id;
				while(count==tt[3]){count++;}
			}
var form=document.getElementById('form2');
var img = document.getElementsByClassName('drag');
var length = img.length;
var h=span.style.height;

	span.className ='drag';
	var drr = document.getElementsByClassName('drag');
	var drrle = drr.length;
	for(i=0;i<drrle;i++){
		drr[i].setAttribute('select',false);
		drr[i].style.zIndex="4";
	}
	span.setAttribute('select',true);
	span.id ='image'+count;
	span.style.position='absolute';
	span.style.left=count*100+'px';
	span.style.top='0px';
	nam1 =nam.substr(1);
	nam=nam1.substring(0, nam1.length-4);
	span.title=nam;
	span.style.overflow='visible';
	span.style.zIndex='4';
	span.innerHTML = '<img id=\'img'+count+'\' class="thumb" style="height:120;position:relative;z-index:0;" onmousedown="dra()" src="http://fotobank.biz/constructor/fon/'+nam1+'"/>';
	span.innerHTML += "<span id=\'br\' class='resize' onmousedown='br(this)' style='cursor: se-resize;position:absolute;width:15px;height:15px; bottom:-15px; right:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:1;'></span><span id='bl' class='resize' onmousedown='bl(this)' style='cursor: sw-resize;position: absolute; width:15px;height:15px; bottom:-15px; left:-15px;background-color: rgba(211, 211, 211, 0.7);display:block;z-index:1;'></span><span id='tr' class='resize'  onmousedown='tr(this)' style=' cursor: ne-resize;position: absolute; width:15px;height:15px; top:-15px; right:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:1;'></span><span id='tl' onmousedown='tl(this)' class='resize' style='cursor: nw-resize;position: absolute; width:15px;height:15px; top:-15px; left:-15px;background-color: rgba(211, 211, 211, 0.7);display:block;z-index:12;'></span><span id='t' onmousedown='toop(this)' class='resize' style='cursor:n-resize; position:absolute;width:15px;height:15px;top:-15px;left:calc(50% - 15px);background-color: rgba(211, 211, 211, 0.7);z-index:1;' ></span><span id='b' onmousedown='bot(this)' class='resize' style='cursor:s-resize; position:absolute;width:15px;height:15px;bottom:-15px;left:calc(50% - 15px);background-color: rgba(211, 211, 211, 0.7);z-index:1;' ></span><span id='l' class='resize' onmousedown='left(this)' style='cursor:w-resize; position:absolute;width:15px;height:15px;top:calc(50% - 15px);left:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:1;' ></span><span id='r' onmousedown='right(this)' class='resize' style='cursor:e-resize; position:absolute;width:15px;height:15px;top:calc(50% - 15px);right:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:1;' ></span>";
	document.getElementById('list').insertBefore(span, null);

//прилипает к низу
	img=document.getElementById('img').clientHeight;
	img1=document.getElementById('img'+count).clientWidth;
	height=document.getElementById('img'+count).clientHeight;
	if(parseInt(height)>300 || parseInt(height)==2 || parseInt(height)==0){
		document.getElementById('img'+count).setAttribute('longdesc','250px');
		document.getElementById('img'+count).style.height='120px'}
	
	//добавляем кнопку удалить
	var len=count+1;
	var le=nam+'  ';
	document.getElementById('insert_response').innerHTML+="<tr id='imag"+count+"' class='input'><td>"+len+".  "+le+"</td><td><span onclick='crop_foto("+count+")'><img height='16px' src='img/but/del.png'></span></td></tr>";
		var h=document.getElementById('img'+count).clientHeight;
		if(h==0)h=154;
	img=parseInt(img)-parseInt(h)-20;
	span.style.top=img;

	if(parseInt(span.offsetTop)>238){span.style.top=158}
 }
							
function handf(evt, width, height){
document.getElementById('form_3').style.display='none';
	var files = evt.target.files; // FileList object
	var name = files[0].name;
    for (var i = 0, f; f = files[i]; i++) {
	if(f.size<31457280){
	      if (!f.type.match('image.*')) {
        continue;
      }
		var reader = new FileReader();
		
		var opts = {
	lines: 13, // The number of lines to draw
	length: 20, // The length of each line
	width: 10, // The line thickness
	radius: 30, // The radius of the inner circle
	corners: 1, // Corner roundness (0..1)
	rotate: 0, // The rotation offset
	direction: 1, // 1: clockwise, -1: counterclockwise
	color: '#000', // #rgb or #rrggbb or array of colors
	speed: 1, // Rounds per second
	trail: 60, // Afterglow percentage
	shadow: false, // Whether to render a shadow
	hwaccel: false, // Whether to use hardware acceleration
	className: 'spinner', // The CSS class to assign to the spinner
	zIndex: 2e9, // The z-index (defaults to 2000000000)
	top: '50%', // Top position relative to parent
	left: '50%' // Left position relative to parent
	};
	var target = document.getElementById('img');
	var spinner = new Spinner(opts).spin(target);


	target.appendChild(spinner.el);
		
		reader.onload = (function(theFile) {
			return function(e) {
			$.ajax({type:'POST',url:'qw.php',data:{name:theFile.name,data:e.target.result,width:width,height:height},success:function(data){
			/////////////////////////////////////////copy download safetly

			var wwww= data.indexOf('Fatal error');
			if(wwww>-1){
				alert('Изините мы не можем открыть этот файл, попробуйте другой.');
				document.getElementById('form_3').style.display='block';
				remove(document.getElementsByClassName('spinner')[0]);
			}else{
			var span = document.createElement('span');
			var list=document.getElementById('list');
			var inputs = list.getElementsByTagName('img');
			var count = inputs.length;
			
			var form=document.getElementById('form_img');
			var inp=document.createElement('input');
			var di=document.createElement('tr');
			var count1= count;
			var tt;
			for(i=0;i<count1;i++){
				tt=inputs[i].id;
				while(count==tt[3]){count++;}
			}
			var c=count+1;
			var namee=theFile.name;
				span.innerHTML = '<img unselectable="on" style=\'height:120;margin-top:0px; position:relative; z-index:0;\' onmousedown="dra()" id=\'img'+count+'\' class="thumb" 	src="'+data+'" title="'+theFile.name+'"/>';
				span.innerHTML += " <span id=\'br\' class='resize' onmousedown='br(this)' style='cursor: se-resize;position: absolute;width:15px;height:15px; bottom:-15px; right:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:1;'></span><span id='bl' onmousedown='bl(this)' class='resize' style='cursor: sw-resize;position: absolute; width:15px;height:15px; bottom:-15px; left:-15px;background-color: rgba(211, 211, 211, 0.7);display:block;z-index:1;'></span><span id='tr' class='resize' onmousedown='tr(this)' style='cursor: ne-resize;position: absolute; width:15px;height:15px; top:-15px; right:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:1;'></span><span id='tl' class='resize' onmousedown='tl(this)' style='cursor: nw-resize;position: absolute; width:15px;height:15px; top:-15px; left:-15px;background-color: rgba(211, 211, 211, 0.7);display:block;z-index:1;'></span><span id='t' onmousedown='toop(this)' class='resize' style='cursor:n-resize; position:absolute;width:15px;height:15px;top:-15px;left:calc(50% - 7.5px);background-color: rgba(211, 211, 211, 0.7);z-index:1;' ></span><span id='b' onmousedown='bot(this)' class='resize' style='cursor:s-resize; position:absolute;width:15px;height:15px;bottom:-15px;left:calc(50% - 7.5px);background-color: rgba(211, 211, 211, 0.7);z-index:1;' ></span><span id='l' class='resize' onmousedown='left(this)' style='cursor:w-resize; position:absolute;width:15px;height:15px;top:calc(50% - 7.5px);left:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:1;' ></span><span id='r' onmousedown='right(this)' class='resize' style='cursor:e-resize; position:absolute;width:15px;height:15px;top:calc(50% - 7.5px);right:-15px;background-color: rgba(211, 211, 211, 0.7);z-index:1;' ></span>";
				remove(document.getElementsByClassName('spinner')[0]);
				span.className ='drag';
				var drr = document.getElementsByClassName('drag');
				var drrle = drr.length;
				for(i=0;i<drrle;i++){
					drr[i].setAttribute('select',false);
					drr[i].style.zIndex="4";
				}
				
				span.setAttribute('select',true);				
				span.id ='drag'+count;
				span.style.left=count*100+'px';
				span.style.zIndex=5;
				span.title = theFile.name;
				span.setAttribute('unselectable', 'on')
				span.style.position='absolute';
				document.getElementById('list').insertBefore(span, null);

				di.id='imag'+count;
				namee=namee.substr(0, namee.length-4);
				if(namee.length>30){namee=namee.substr(0, 10)}
				di.innerHTML+='<td>'+c+'. '+namee+'</td><td><span onclick="del_inp(\''+count+'\')"><img height="16px" src="img/but/del.png"></span></td></tr>';
				var pl=document.getElementById('insert_response').appendChild(di);
				var src=document.getElementById('img'+count).src;
				var w= document.getElementById('img').clientHeight;
				var p=document.getElementById('img').offsetTop;
				//var top=w-span.clientHeight;
				span.style.top=170+'px';
				var f = document.getElementById('form_img');
				
				document.getElementById('form_3').style.display='block';
				document.getElementById('self_foto').value='1';
			 ////////////////////////////////////////copy download safetly
			 }//if fatal error
			 }});
			
			 }
		})(f);
		reader.readAsDataURL(f);
		}else{alert('размер картинки должен быть до 30 мб');
		document.getElementById('form_3').style.display='block';
		}
	}
document.getElementById('files').value='';	
 }

var _URL = window.URL || window.webkitURL;
  document.getElementById('files').addEventListener('change', 
   function(e){ 
   
	var file, img;
    if ((file = this.files[0])) {
        img = new Image();
        img.onload = function() {

//			handleFileSelect(e,this.width, this.height);
			handf(e,this.width, this.height);
        };
        img.onerror = function() {
           // alert( "не верный формат файла: " + file.type);	
		   document.getElementById('format').style.display='block';
		   setTimeout("document.getElementById('format').style.display='none'", 3000);
        };
        img.src = _URL.createObjectURL(file);
    }
	
  }

  
  
  
  
  //handleFileSelect, false
  );
  function dra(){
//document.getElementById('name').value='200';
document.getElementById('dis').value='200';
  
 
              var agt=navigator.userAgent.toLowerCase(); 
          var is_major = parseInt(navigator.appVersion); 
          var is_minor = parseFloat(navigator.appVersion); 
 
          var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1) 
                      && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1) 
                      && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)); 
          var is_nav4 = (is_nav && (is_major == 4)); 
          var is_nav6 = (is_nav && (is_major == 5)); 
          var is_nav6up = (is_nav && (is_major >= 5)); 
          var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1)); 
 
          var dragapproved=false 
          var z,x,y 
          var maxleft,maxtop,maxright,maxbottom; 
 

          function move(e)
          { 
            var tmpXpos = (!is_ie)? temp1+e.clientX-x: temp1+event.clientX-x; 
               var tmpYpos = (!is_ie)? temp2+e.clientY-y : temp2+event.clientY-y; 
               if (dragapproved) 
               { 
					document.getElementById('imag'+z.id[z.id.length-1]).style.backgroundColor='gray';
var id = z.id[z.id.length-1];
var height = z.clientHeight;
var width = z.clientWidth;
var imgw = document.getElementById('img').clientWidth;
var imgh = document.getElementById('img').clientHeight;
    maxright = parseInt(imgw)-30; 
	maxbottom = parseInt(imgh)-30; 
	maxleft = 0-width+30; 
    maxtop = 0-height+30;
				z.style.left = tmpXpos; 
                z.style.top = tmpYpos;
	
  																								//limits for picture
                  if (tmpXpos < maxleft) 
                      z.style.left = maxleft; 
 
                  if (tmpXpos > maxright) 
                      z.style.left = maxright; 
 
                  if (tmpYpos < maxtop) 
                      z.style.top = maxtop; 
                  if (tmpYpos > maxbottom) 
                      z.style.top = maxbottom
			 		 																			//limits for picture					  
					  
/* 				var xx= document.getElementById('img0').offsetLeft;
				var yy= document.getElementById('img0').offsetTop;
				var wx= document.getElementById('img0').clientWidth;
				var hx= document.getElementById('img0').clientHeight; */
/* 				document.getElementById('imX').value=z.style.left;
				document.getElementById('imY').value=z.style.top;
				document.getElementById('hei_im').value=hx;
				document.getElementById('wid_im').value=wx; */

                  return false 
               } 
          } 
 
            function drags(e) 
          { 
		   
		    var st
			var eee=document.getElementById('dis').value;
			if(eee==200){eee=0;}
			document.getElementById('dis').value=eee;
			if(!eee) {
                 if (!(is_ie)&&!(!is_ie)) return 
 
                 var firedobj=(!is_ie)? e.target : event.srcElement 
                 var topelement=(!is_ie)? "HTML" : "BODY" 
 
                 while (firedobj.tagName!=topelement && firedobj.className!="drag" && firedobj.tagName!='SELECT' && firedobj.tagName!='TEXTAREA' && firedobj.tagName!='INPUT') 
                 { 
                     // here you can add the elements that cannot be used for drag . using their class name or id or tag names 
                     firedobj=(!is_ie)? firedobj.parentNode : firedobj.parentElement 
                 } 
 
                 if (firedobj.className=="drag") 
                 { 
                     dragapproved = true 
                     z = firedobj 
                     var tmpheight = z.style.height.split("px") 
                     maxbottom = (tmpheight[0])?document.body.clientHeight - tmpheight[0]:document.body.clientHeight - 20; 
 
                     temp1 = parseInt(z.style.left+0) 
                     temp2 = parseInt(z.style.top+0) 
                     x = (!is_ie)? e.clientX: event.clientX 
                     y = (!is_ie)? e.clientY: event.clientY 
                     document.onmousemove = move 
					 
					 var drr = document.getElementsByClassName('drag');
					 var drrle = drr.length;
					 for(i=0;i<drrle;i++){
						drr[i].setAttribute('select',false);
						drr[i].style.zIndex="4";
					 }
					 var wwq = document.getElementsByClassName('resize');
					 var lla= wwq.length;
					 for(i=0;i<lla;i++){
						wwq = document.getElementsByClassName('resize');
						wwq[i].style.display='none';
					 }
					 var wwq = z.getElementsByClassName('resize');
					 var lla= wwq.length;
					 for(i=0;i<lla;i++){
						wwq = z.getElementsByClassName('resize');
						wwq[i].style.display='block';
					 }
					 
					 z.style.zIndex="4";
					 z.setAttribute('select',true);
					 
				 }     
						return false 
            } 
          }   
			

			  document.onmousedown=drags;
			  document.onmouseup=new Function("dragapproved=false")
			     document.onmouseup=function(){ 
				 document.getElementById('imag'+z.id[z.id.length-1]).style.backgroundColor='';
			st=1; document.onmousemove=''; document.onmouseup=new Function("dragapproved=false"); }
 			var kr= document.getElementById('name').value;
			if(kr==1){stop=1; document.onmousemove=''; document.onmouseup=new Function("dragapproved=false");} 
	//}
}