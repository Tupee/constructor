function createObject() {
var request_type;
var browser = navigator.appName;
	if(browser == "Microsoft Internet Explorer"){
		request_type = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		request_type = new XMLHttpRequest();
	}
	return request_type;
}
var http = createObject();
var nocache = 0;
function insert(){
	var form=document.getElementById('form2');
	var img = form.getElementsByTagName('input');
	var length = img.length/2;
	
	var name = document.getElementById('name').value;
	name=name.replace(/\s+/g, '');
	name=name.toLowerCase();
	var ldd = document.getElementsByClassName('thumb');
	var ld =ldd.length; var name1='', val=0;
	for(i=0;i<ld;i++){
	name1 = document.getElementById('name').value;
		ldd=document.getElementsByClassName('thumb');
		if(name1==ldd[i].parentNode.title){val++;
		//document.getElementById('same').style.display="block";
		//setTimeout("document.getElementById('same').style.display='none'", 2000);
		}
	}//alert(name+' -- name '+name.length+'dsd'+val)
	if(name.length>2 && val<10){
		document.getElementById('photo').style.visibility='hidden';
	//	document.getElementById('insert_response').innerHTML = "Just a second..."
		nocache = Math.random();
		http.open('get', 'insert.php?name='+name+'&nocache = '+nocache);
		http.onreadystatechange = insertReply;
		http.send(null);
	}
}
function insertReply() {
	if(http.readyState == 4){
		var response = http.responseText;
		var pat= /\D/;
		if(response.length==2){
			document.getElementById('foto').style.display='block';setTimeout("document.getElementById('foto').style.display='none'", 4000);
		}else{
			document.getElementById('foto').style.display='none';
			add_foto1(response);
		//	document.getElementById('insert_response').innerHTML = 'Найдено:'+response;
		}
	}
}