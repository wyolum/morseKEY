keys=[];
document.onkeydown=function(e){keys[e.keyCode]=true;}
document.onkeyup=function(e) {
 var e = e || window.event;
 var uc= e.keyCode
 keys[uc]=false;
 if (e.ctrlKey) return;
 if (uc==84) {
  document.cookie="font=;expires="+(new Date(1).toUTCString())+";path=/;";
  location.reload(true);
 }
 if (uc==190) confuzz(document.body);
 if (uc==73) {
  if (!window.invertedColour) {
   invertPageColour();
   window.sessionStorage.inverted='1';
  }else {
   document.head.removeChild(invertedColour);
   invertedColour=false;
   window.sessionStorage.inverted='';
  }
 }
 if (uc==77){
  if (!window.mirrored){
   (mirrored=document.createElement("style")).innerHTML='body{transform:scaleX(-1);}';
   document.head.appendChild(mirrored)
  }else{document.head.removeChild(mirrored);mirrored=false;}
 }
};

function invertPageColour(){
   invertedColour=document.createElement("style");
   invertedColour.innerHTML='body{background:#000;filter: invert(1) grayscale(1); -webkit-filter: invert(1) grayscale(1);}';
   document.head.appendChild(invertedColour);
}
if (window.sessionStorage.inverted) invertPageColour();

function confuzz(obj){
  var a=obj.innerHTML.split(""), len=a.length, word=[], i=0, j=0, u,v,w, s;

  while (i<len) {
  
    if (a[i].match(/[a-zA-Z]/)) word[j++]=a[i];
    else {
      if (j>2) {
        word=word.slice(1,j-1);
        
        w = word.length;
        while(w){ 
          u = Math.floor(Math.random() * w); 
          v = word[--w]; 
          word[w] = word[u]; 
          word[u] = v;
        }
        Array.prototype.splice.apply(a, [i-j+1, j-2].concat(word));
      }
      word=[];j=0;
    }
    while (a[i]=="<" || a[i]=="&") {
      s=a.slice(i+1,i+6).join("");
      if (s=="scrip" || s=="style") { while (a[++i]!="<"&&a[i+1]!="/" &&i<len) {} }
      
      if (a[i]=="<") {while (a[++i]!=">" &&i<len) {}}
      if (a[i]=="&") {while (a[++i]!=";" &&i<len) {}}
    }
    i++;
  }
  obj.innerHTML=a.join("");
}

//disable Firefox bfcache
//function UnloadHandler() { window.removeEventListener('unload', UnloadHandler, false); }
//window.addEventListener('unload', UnloadHandler, false);