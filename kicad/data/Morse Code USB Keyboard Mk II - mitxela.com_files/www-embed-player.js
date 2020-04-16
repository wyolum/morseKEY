(function(){var h,n=this;function p(a){return void 0!==a}
function r(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function t(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function aa(){}
function ba(a){a.Aa=void 0;a.getInstance=function(){return a.Aa?a.Aa:a.Aa=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){return"array"==ca(a)}
function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function ga(a){return"function"==ca(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return v.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function oa(a,b){for(var c in b)a[c]=b[c]}
var pa=Date.now||function(){return+new Date};
function w(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.cd=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function qa(a,b,c){this.i=c;this.g=a;this.w=b;this.f=0;this.b=null}
qa.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function ra(a,b){a.w(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(sa,Error);sa.prototype.name="CustomError";var ta;function ua(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function va(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function wa(a){var b=ya,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function za(){var a=Aa,b;for(b in a)return!1;return!0}
function Ba(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ca(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Da="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ea(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Da.length;f++)c=Da[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ga=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function Ha(a){a=p(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Ga("0",Math.max(0,2-b))+a}
function Ia(a,b){return a<b?-1:a>b?1:0}
function Ja(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Ka(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function La(a){var b=u(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Ma=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};r("yt.config_",Ma,void 0);var Na=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};r("yt.msgs_",Na,void 0);function Oa(a){Pa(Ma,arguments)}
function x(a,b){return a in Ma?Ma[a]:b}
function y(a,b){ga(a)&&(a=Qa(a));return window.setTimeout(a,b)}
function Ra(a){window.clearTimeout(a)}
function Qa(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Sa(b)}}:a}
function Sa(a,b){var c=t("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=x("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),Oa("ERRORS",c))}
function Pa(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var Ta=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Ua="Microsoft Internet Explorer"==navigator.appName;function Va(a,b,c){a&&(a.dataset?a.dataset[Wa(b)]=c:a.setAttribute("data-"+b,c))}
function Xa(a,b){return a?a.dataset?a.dataset[Wa(b)]:a.getAttribute("data-"+b):null}
function Ya(a,b){a&&(a.dataset?delete a.dataset[Wa(b)]:a.removeAttribute("data-"+b))}
var Za={};function Wa(a){return Za[a]||(Za[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function z(){this.S=this.S;this.H=this.H}
z.prototype.S=!1;z.prototype.C=function(){return this.S};
z.prototype.dispose=function(){this.S||(this.S=!0,this.G())};
function $a(a,b){a.S?p(void 0)?b.call(void 0):b():(a.H||(a.H=[]),a.H.push(p(void 0)?v(b,void 0):b))}
z.prototype.G=function(){if(this.H)for(;this.H.length;)this.H.shift()()};
function ab(a){a&&"function"==typeof a.dispose&&a.dispose()}
function bb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?bb.apply(null,d):ab(d)}}
;var cb;a:{var db=n.navigator;if(db){var eb=db.userAgent;if(eb){cb=eb;break a}}cb=""}function B(a){return-1!=cb.indexOf(a)}
;function fb(a){Pa(Ma,arguments)}
function gb(a,b){return a in Ma?Ma[a]:b}
;var hb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ib=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=u(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},jb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},kb=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function lb(a,b){var c;a:{c=a.length;for(var d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:u(a)?a.charAt(c):a[c]}
function mb(a,b){return 0<=hb(a,b)}
function nb(a,b){var c=hb(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function ob(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function pb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function qb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function rb(a,b,c,d){return Array.prototype.splice.apply(a,sb(arguments,1))}
function sb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function tb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(da(d))for(var e=0;e<d.length;e+=8192)for(var f=tb.apply(null,sb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function ub(){this.f=this.b=null}
var wb=new qa(function(){return new vb},function(a){a.reset()},100);
ub.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function vb(){this.next=this.scope=this.b=null}
vb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
vb.prototype.reset=function(){this.next=this.scope=this.b=null};function xb(a,b){isNaN(b)&&(b=void 0);var c=t("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):y(a,b||0)}
;function yb(){this.b="";this.f=zb}
yb.prototype.za=!0;yb.prototype.ya=function(){return this.b};
function Ab(a){if(a instanceof yb&&a.constructor===yb&&a.f===zb)return a.b;ca(a);return"type_error:SafeUrl"}
var Bb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Cb(a){if(a instanceof yb)return a;a=a.za?a.ya():String(a);Bb.test(a)||(a="about:invalid#zClosurez");return Db(a)}
var zb={};function Db(a){var b=new yb;b.b=a;return b}
Db("about:blank");function Eb(){this.b="";this.f=Fb}
Eb.prototype.za=!0;Eb.prototype.ya=function(){return this.b};
var Fb={};function Gb(){return B("Safari")&&!(Hb()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))}
function Hb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function Ib(a){n.setTimeout(function(){throw a;},0)}
var Jb;
function Kb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Oa;c.Oa=null;a()}};
return function(a){d.next={Oa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function Lb(){this.b="";this.f=Mb}
Lb.prototype.za=!0;Lb.prototype.ya=function(){return this.b};
function Nb(a){if(a instanceof Lb&&a.constructor===Lb&&a.f===Mb)return a.b;ca(a);return"type_error:SafeHtml"}
var Mb={};function Ob(a){var b=new Lb;b.b=a;return b}
Ob("<!DOCTYPE html>");Ob("");Ob("<br>");function Pb(a,b){Qb||Rb();Sb||(Qb(),Sb=!0);var c=Tb,d=wb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Qb;function Rb(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);Qb=function(){a.then(Ub)}}else Qb=function(){var a=Ub;
!ga(n.setImmediate)||n.Window&&n.Window.prototype&&!B("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Jb||(Jb=Kb()),Jb(a)):n.setImmediate(a)}}
var Sb=!1,Tb=new ub;function Ub(){for(var a;a=Tb.remove();){try{a.b.call(a.scope)}catch(b){Ib(b)}ra(wb,a)}Sb=!1}
;function Vb(a,b){var c;c=b instanceof yb?b:Cb(b);a.href=Ab(c)}
function Wb(a,b){a.rel="stylesheet";var c;b instanceof Eb&&b.constructor===Eb&&b.f===Fb?c=b.b:(ca(b),c="type_error:TrustedResourceUrl");a.href=c}
;function D(a){z.call(this);this.w=1;this.g=[];this.i=0;this.b=[];this.f={};this.A=!!a}
w(D,z);h=D.prototype;h.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.w;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.w=e+3;d.push(e);return e};
function Xb(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.U(d),b.apply(void 0,arguments))},a)}
function Yb(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=lb(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.U(b)}}
h.U=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.g.push(a),this.b[a+1]=aa):(c&&nb(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
h.M=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Zb(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.U(c)}}return 0!=e}return!1};
function Zb(a,b,c){Pb(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.U,this),delete this.f[a])}else this.b.length=0,this.f={}};
h.fa=function(a){if(a){var b=this.f[a];return b?b.length:0}a=0;for(b in this.f)a+=this.fa(b);return a};
h.G=function(){D.B.G.call(this);this.clear();this.g.length=0};var $b=t("yt.pubsub.instance_")||new D;D.prototype.subscribe=D.prototype.subscribe;D.prototype.unsubscribeByKey=D.prototype.U;D.prototype.publish=D.prototype.M;D.prototype.clear=D.prototype.clear;r("yt.pubsub.instance_",$b,void 0);var ac=t("yt.pubsub.subscribedKeys_")||{};r("yt.pubsub.subscribedKeys_",ac,void 0);var bc=t("yt.pubsub.topicToKeys_")||{};r("yt.pubsub.topicToKeys_",bc,void 0);var cc=t("yt.pubsub.isSynchronous_")||{};r("yt.pubsub.isSynchronous_",cc,void 0);
var dc=t("yt.pubsub.skipSubId_")||null;r("yt.pubsub.skipSubId_",dc,void 0);function ec(a,b,c){var d=fc();if(d){var e=d.subscribe(a,function(){if(!dc||dc!=e){var d=arguments,g;g=function(){ac[e]&&b.apply(c||window,d)};
try{cc[a]?g():y(g,0)}catch(k){Sa(k)}}},c);
ac[e]=!0;bc[a]||(bc[a]=[]);bc[a].push(e);return e}return 0}
function gc(a){var b=fc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete ac[a]}))}
function E(a,b){var c=fc();return c?c.publish.apply(c,arguments):!1}
function hc(a,b){cc[a]=!0;var c=fc();c&&c.publish.apply(c,arguments);cc[a]=!1}
function ic(a){bc[a]&&(a=bc[a],C(a,function(a){ac[a]&&delete ac[a]}),a.length=0)}
function jc(a){var b=fc();if(b)if(b.clear(a),a)ic(a);else for(var c in bc)ic(c)}
function fc(){return t("yt.pubsub.instance_")}
;function kc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(lc,""),c=c.replace(mc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else nc(a,b)}
function nc(a,b){var c=oc(a),d=document.getElementById(c),e=d&&Xa(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=ec(c,b),g=""+ia(b);pc[g]=e}f||(d=qc(a,c,function(){Xa(d,"loaded")||(Va(d,"loaded","true"),E(c),y(na(jc,c),0))}))}}
function qc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function rc(a,b){if(a&&b){var c=""+ia(b);(c=pc[c])&&gc(c)}}
function oc(a){var b=document.createElement("a");Vb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ja(a)}
var lc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,mc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,pc={};var sc=null;function tc(){var a=gb("BG_I",null),b=gb("BG_IU",null),c=x("BG_P",void 0);b?kc(b,function(){sc=new botguard.bg(c)}):a&&(eval(a),sc=new botguard.bg(c))}
function uc(){return null!=sc}
function vc(){return sc?sc.invoke():null}
;var wc=[],xc=!1;function yc(){function a(){xc=!0;"google_ad_status"in window?fb("DCLKSTAT",1):fb("DCLKSTAT",2)}
kc("//static.doubleclick.net/instream/ad_status.js",a);wc.push(xb(function(){xc||"google_ad_status"in window||(rc("//static.doubleclick.net/instream/ad_status.js",a),fb("DCLKSTAT",3))},5E3))}
function zc(){return parseInt(x("DCLKSTAT",0),10)}
;function Ac(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Bc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],k=e[3],l=e[4],m,q,c=0;80>c;c++)40>c?20>c?(m=k^d&(f^k),q=1518500249):(m=d^f^k,q=1859775393):60>c?(m=d&f|k&(d|f),q=2400959708):(m=d^f^k,q=3395469782),m=((a<<5|a>>>27)&4294967295)+m+l+q+b[c]&4294967295,l=k,k=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,q+=64;for(;d<c;)if(f[m++]=a[d++],q++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,q+=64}
function d(){var a=[],d=8*q;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,q;a();return{reset:a,update:c,digest:d,Nb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Cc=window,Dc=document,Ec=Cc.location;function Fc(){}
var Gc=/\[native code\]/;function F(a,b,c){return a[b]=a[b]||c}
function Hc(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Ic(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Jc(){var a;if((a=Object.create)&&Gc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Kc=F(Cc,"gapi",{});function Lc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Mc(a){a=String(a);if(Lc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Nc(a){return eval("("+a+")")}
function Oc(a){var b=[];Pc(new Qc,a,b);return b.join("")}
function Qc(){}
function Pc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Pc(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Rc(d,c),c.push(":"),Pc(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Rc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Sc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Tc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Rc(a,b){b.push('"',a.replace(Tc,function(a){var b=Sc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Sc[a]=b);return b}),'"')}
;function Uc(a,b){this.width=a;this.height=b}
h=Uc.prototype;h.Lb=function(){return this.width*this.height};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!this.Lb()};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Vc(a){this.b=a||{cookie:""}}
var Wc=/\s*;\s*/;h=Vc.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(pa()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Wc),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.b.cookie};
h.fa=function(){return this.b.cookie?(this.b.cookie||"").split(Wc).length:0};
h.clear=function(){for(var a=(this.b.cookie||"").split(Wc),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Xc=new Vc("undefined"==typeof document?null:document);Xc.f=3950;function Yc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Zc(a){Zc[" "](a);return a}
Zc[" "]=aa;function $c(a,b){var c=ad;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function bd(){}
;function cd(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in dd||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
cd.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
cd.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
cd.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var dd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function ed(a,b,c){this.b=a;this.g=b;this.f=c}
var fd=1;function gd(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var hd=null;"undefined"!=typeof XMLHttpRequest?hd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(hd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function id(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function jd(a){this.b=a}
jd.prototype.set=function(a,b){p(b)?this.b.set(a,Oc(b)):this.b.remove(a)};
jd.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return Mc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
jd.prototype.remove=function(a){this.b.remove(a)};function kd(a){return x("EXPERIMENT_FLAGS",{})[a]}
;function md(){return{apiaryHost:x("APIARY_HOST",void 0),Jb:x("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:x("GAPI_HINT_OVERRIDE"),gapiHintParams:x("GAPI_HINT_PARAMS",void 0),innertubeApiKey:x("INNERTUBE_API_KEY",void 0),innertubeApiVersion:x("INNERTUBE_API_VERSION",void 0),cc:x("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:x("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ec:x("INNERTUBE_CONTEXT_HL",void 0),dc:x("INNERTUBE_CONTEXT_GL",void 0),Qc:x("XHR_APIARY_HOST",void 0)}}
function nd(a){a={client:{hl:a.ec,gl:a.dc,clientName:a.cc,clientVersion:a.innertubeContextClientVersion}};x("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:x("DELEGATED_SESSION_ID")});return a}
;var G;G=F(Cc,"___jsl",Jc());F(G,"I",0);F(G,"hel",10);function od(){var a=Ec.href,b;if(G.dpo)b=G.h;else{b=G.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function pd(a){var b=F(G,"PQ",[]);G.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function qd(a){return F(F(G,"H",Jc()),a,Jc())}
;function rd(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function sd(a){this.b=a}
w(sd,jd);function td(a){this.data=a}
function ud(a){return!p(a)||a instanceof td?a:new td(a)}
sd.prototype.set=function(a,b){sd.B.set.call(this,a,ud(b))};
sd.prototype.f=function(a){a=sd.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
sd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};var vd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function wd(a){return a.match(vd)}
function xd(a){return a?decodeURI(a):a}
function yd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function zd(a,b,c){if(da(b))for(var d=0;d<b.length;d++)zd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ad(a,b,c){for(c=c||0;c<b.length;c+=2)zd(b[c],b[c+1],a);return a}
function Bd(a,b){for(var c in b)zd(c,b[c],a);return a}
function Cd(a){a=Bd([],a);a[0]="";return a.join("")}
function Dd(a,b){return yd(2==arguments.length?Ad([a],arguments[1],0):Ad([a],arguments,1))}
;function Ed(a,b,c){var d=[],e=[];if(1==(da(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Fd(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Fd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Fd(a){var b=Bc();b.update(a);return b.Nb().toLowerCase()}
;var Gd=F(G,"perf",Jc());F(Gd,"g",Jc());var Hd=F(Gd,"i",Jc());F(Gd,"r",[]);Jc();Jc();function Id(a,b,c){b&&0<b.length&&(b=Jd(b),c&&0<c.length&&(b+="___"+Jd(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=F(Hd,"_p",Jc()),F(b,c,Jc())[a]=(new Date).getTime(),b=Gd.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Jd(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function Kd(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function I(a,b){return a.classList?a.classList.contains(b):mb(Kd(a),b)}
function J(a,b){a.classList?a.classList.add(b):I(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Ld(a,b){if(a.classList)C(b,function(b){J(a,b)});
else{var c={};C(Kd(a),function(a){c[a]=!0});
C(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function Md(a,b){a.classList?a.classList.remove(b):I(a,b)&&(a.className=ib(Kd(a),function(a){return a!=b}).join(" "))}
function Nd(a,b){a.classList?C(b,function(b){Md(a,b)}):a.className=ib(Kd(a),function(a){return!mb(b,a)}).join(" ")}
function Od(a,b,c){c?J(a,b):Md(a,b)}
function Pd(a,b,c){I(a,b)&&(Md(a,b),J(a,c))}
function Qd(a,b){var c=!I(a,b);Od(a,b,c)}
;function Rd(a){this.b=a}
w(Rd,sd);Rd.prototype.set=function(a,b,c){if(b=ud(b)){if(c){if(c<pa()){Rd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=pa()}Rd.B.set.call(this,a,b)};
Rd.prototype.f=function(a,b){var c=Rd.B.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<pa()||!!d&&d>pa()}if(d)Rd.prototype.remove.call(this,a);else return c}};function Sd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?da(b[f])?qb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Td(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Sd(d[1]||""),e;for(e in b)d[e]=b[e];return yd(Bd([a],d))+c}
;var Ud=Jc(),Vd=[];function Wd(a){throw Error("Bad hint"+(a?": "+a:""));}
Vd.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?G[b]=F(G,b,[]).concat(c):F(G,b,c)}if(b=a.u)a=F(G,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Xd=/^(\/[a-zA-Z0-9_\-]+)+$/,Yd=[/\/amp\//,/\/amp$/,/^\/amp$/],Zd=/^[a-zA-Z0-9\-_\.,!]+$/,$d=/^gapi\.loaded_[0-9]+$/,ae=/^[a-zA-Z0-9,._-]+$/;function be(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Ud[f],k=null;g?k=g(e,b,c,d):Wd("no hint processor for: "+f);k||Wd("failed to generate load url");b=k;c=b.match(ce);(d=b.match(de))&&1===d.length&&ee.test(b)&&c&&1===c.length||Wd("failed sanity: "+a);return k}
function fe(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=ge(a);$d.test(c)||Wd("invalid_callback");b=he(b);d=d&&d.length?he(d):null;return[encodeURIComponent(a.Cc).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Ma?"/am="+e(a.Ma):"",a.lb?"/rs="+e(a.lb):"",a.xb?"/t="+e(a.xb):"","/cb=",e(c)].join("")}
function ge(a){"/"!==a.charAt(0)&&Wd("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Wd("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");Xd.test(b)||Wd("invalid_prefix");c=0;for(d=Yd.length;c<d;++c)Yd[c].test(b)&&Wd("invalid_prefix");c=ie(a,
"k",!0);d=ie(a,"am");e=ie(a,"rs");a=ie(a,"t");return{Cc:b,version:c,Ma:d,lb:e,xb:a}}
function he(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");ae.test(e)&&b.push(e)}return b.join(",")}
function ie(a,b,c){a=a[b];!a&&c&&Wd("missing: "+b);if(a){if(Zd.test(a))return a;Wd("invalid: "+b)}return null}
var ee=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,de=/\/cb=/g,ce=/\/\//g;function je(){var a=od();if(!a)throw Error("Bad hint");return a}
Ud.m=function(a,b,c,d){(a=a[0])||Wd("missing_hint");return"https://apis.google.com"+fe(a,b,c,d)};
var ke=decodeURI("%73cript"),le=/^[-+_0-9\/A-Za-z]+={0,2}$/;function me(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Hc.call(b,e)&&c.push(e)}return c}
function ne(){var a=G.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(le)?a:G.nonce=null;var b=F(G,"us",[]);if(!b||!b.length)return G.nonce=null;for(var c=Dc.getElementsByTagName(ke),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,k=b.length;g<k&&b[g]!==f.src;++g);if(g!==k&&a&&a===String(a)&&a.match(le))return G.nonce=a}}return null}
function oe(a){if("loading"!=Dc.readyState)pe(a);else{var b=ne(),c="";null!==b&&(c=' nonce="'+b+'"');Dc.write("<"+ke+' src="'+encodeURI(a)+'"'+c+"></"+ke+">")}}
function pe(a){var b=Dc.createElement(ke);b.setAttribute("src",a);a=ne();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Dc.getElementsByTagName(ke)[0])?a.parentNode.insertBefore(b,a):(Dc.head||Dc.body||Dc.documentElement).appendChild(b)}
function qe(a,b){var c=b&&b._c;if(c)for(var d=0;d<Vd.length;d++){var e=Vd[d][0],f=Vd[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function re(a,b,c){se(function(){var c;c=b===od()?F(Kc,"_",Jc()):Jc();c=F(qd(b),"_",c);a(c)},c)}
function te(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);qe(a,c);var d=a?a.split(":"):[],e=c.h||je(),f=F(G,"ah",Jc());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var l=k.split("."),l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e,m=g.length&&g[g.length-1]||null,q=m;m&&m.hint==l||(q={hint:l,features:[]},g.push(q));q.features.push(k)}var M=g.length;if(1<M){var V=c.callback;V&&(c.callback=function(){0==--M&&V()})}for(;d=g.shift();)ue(d.features,c,d.hint)}else ue(d||[],c,e)}
function ue(a,b,c){function d(a,b){if(M)return 0;Cc.clearTimeout(q);V.push.apply(V,A);var d=((Kc||{}).config||{}).update;d?d(f):f&&F(G,"cu",[]).push(f);if(b){Id("me0",a,H);try{re(b,c,m)}finally{Id("me1",a,H)}}return 1}
a=Ic(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var q=null,M=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=F(qd(c),"r",[]).sort(),V=F(qd(c),"L",[]).sort(),H=[].concat(l);0<g&&(q=Cc.setTimeout(function(){M=!0;k()},g));
var A=me(a,V);if(A.length){var A=me(a,l),xa=F(G,"CP",[]),Y=xa.length;xa[Y]=function(a){function b(){var a=xa[Y+1];a&&a()}
function c(b){xa[Y]=null;d(A,a)&&pd(function(){e&&e();b()})}
if(!a)return 0;Id("ml1",A,H);0<Y&&xa[Y-1]?xa[Y]=function(){c(b)}:c(b)};
if(A.length){var ld="loaded_"+G.I++;Kc[ld]=function(a){xa[Y](a);Kc[ld]=null};
a=be(c,A,"gapi."+ld,l);l.push.apply(l,A);Id("ml0",A,H);b.sync||Cc.___gapisync?oe(a):pe(a)}else xa[Y](Fc)}else d(A)&&e&&e()}
function se(a,b){if(G.hee&&0<G.hel)try{return a()}catch(c){b&&b(c),G.hel--,te("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Kc.load=function(a,b){return se(function(){return te(a,b)})};var ve="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function we(){}
we.prototype.next=function(){throw ve;};
we.prototype.ea=function(){return this};
function xe(a){if(a instanceof we)return a;if("function"==typeof a.ea)return a.ea(!1);if(ea(a)){var b=0,c=new we;c.next=function(){for(;;){if(b>=a.length)throw ve;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ye(a,b){if(ea(a))try{C(a,b,void 0)}catch(c){if(c!==ve)throw c;}else{a=xe(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ve)throw c;}}}
function ze(a){if(ea(a))return pb(a);a=xe(a);var b=[];ye(a,function(a){b.push(a)});
return b}
;function K(a,b){this.l=p(a)?a:0;this.o=p(b)?b:0}
K.prototype.equals=function(a){return a instanceof K&&(this==a?!0:this&&a?this.l==a.l&&this.o==a.o:!1)};
function Ae(a,b){return new K(a.l-b.l,a.o-b.o)}
K.prototype.ceil=function(){this.l=Math.ceil(this.l);this.o=Math.ceil(this.o);return this};
K.prototype.floor=function(){this.l=Math.floor(this.l);this.o=Math.floor(this.o);return this};
K.prototype.round=function(){this.l=Math.round(this.l);this.o=Math.round(this.o);return this};var Be=B("Opera"),L=B("Trident")||B("MSIE"),Ce=B("Edge"),De=Ce||L,Ee=B("Gecko")&&!(-1!=cb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Fe=-1!=cb.toLowerCase().indexOf("webkit")&&!B("Edge"),Ge=B("Macintosh"),He=B("Windows"),Ie=B("Android"),Je=rd(),Ke=B("iPad"),Le=B("iPod");function Me(){var a=n.document;return a?a.documentMode:void 0}
var Ne;a:{var Oe="",Pe=function(){var a=cb;if(Ee)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ce)return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Fe)return/WebKit\/(\S+)/.exec(a);if(Be)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Pe&&(Oe=Pe?Pe[1]:"");if(L){var Qe=Me();if(null!=Qe&&Qe>parseFloat(Oe)){Ne=String(Qe);break a}}Ne=Oe}var Re=Ne,ad={};
function Se(a){return $c(a,function(){for(var b=0,c=Fa(String(Re)).split("."),d=Fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=Ia(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||Ia(0==g[2].length,0==k[2].length)||Ia(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})}
var Te;var Ue=n.document;Te=Ue&&L?Me()||("CSS1Compat"==Ue.compatMode?parseInt(Re,10):5):void 0;var Ve=!Ee&&!L||L&&9<=Number(Te)||Ee&&Se("1.9.1"),We=L&&!Se("9");function Xe(a){Ye();var b=new Eb;b.b=a;return b}
var Ye=aa;function Ze(a){this.b=a}
w(Ze,Rd);function $e(){}
w($e,bd);$e.prototype.fa=function(){var a=0;ye(this.ea(!0),function(){a++});
return a};
$e.prototype.clear=function(){var a=ze(this.ea(!0)),b=this;C(a,function(a){b.remove(a)})};var af=B("Firefox"),bf=rd()||B("iPod"),cf=B("iPad"),df=B("Android")&&!(Hb()||B("Firefox")||B("Opera")||B("Silk")),ef=Hb(),ff=Gb()&&!(rd()||B("iPad")||B("iPod"));function gf(a){return a?new hf(jf(a)):ta||(ta=new hf)}
function N(a){return u(a)?document.getElementById(a):a}
function kf(a){var b=document;return u(a)?b.getElementById(a):a}
function lf(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):mf("*",a,b)}
function O(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=mf("*",a,b)[0];return d||null}
function mf(a,b,c){var d=document;c=c||d;a=a&&"*"!=a?String(a).toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(a||b))return c.querySelectorAll(a+(b?"."+b:""));if(b&&c.getElementsByClassName){c=c.getElementsByClassName(b);if(a){for(var d={},e=0,f=0,g;g=c[f];f++)a==g.nodeName&&(d[e++]=g);d.length=e;return d}return c}c=c.getElementsByTagName(a||"*");if(b){d={};for(f=e=0;g=c[f];f++)a=g.className,"function"==typeof a.split&&mb(a.split(/\s+/),b)&&(d[e++]=g);d.length=e;return d}return c}
function nf(a,b){ua(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:of.hasOwnProperty(d)?a.setAttribute(of[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var of={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function pf(a){a=a.document;a=qf(a)?a.documentElement:a.body;return new Uc(a.clientWidth,a.clientHeight)}
function rf(a){var b=sf(a);a=tf(a);return L&&Se("10")&&a.pageYOffset!=b.scrollTop?new K(b.scrollLeft,b.scrollTop):new K(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function sf(a){return a.scrollingElement?a.scrollingElement:!Fe&&qf(a)?a.documentElement:a.body||a.documentElement}
function tf(a){return a.parentWindow||a.defaultView}
function qf(a){return"CSS1Compat"==a.compatMode}
function uf(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function vf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function wf(a){return Ve&&void 0!=a.children?a.children:ib(a.childNodes,function(a){return 1==a.nodeType})}
function xf(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function yf(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function zf(a){return ha(a)&&1==a.nodeType}
function Af(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function jf(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Bf(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else uf(a),a.appendChild(jf(a).createTextNode(String(b)))}
function Cf(a,b){var c=[];return Df(a,b,c,!0)?c[0]:void 0}
function Df(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Df(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Ef={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ff={IMG:" ",BR:"\n"};function Gf(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Hf(a)||If(a)):Hf(a)&&If(a))&&L){var c;!ga(a.getBoundingClientRect)||L&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Hf(a){return L&&!Se("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function If(a){a=a.tabIndex;return fa(a)&&0<=a&&32768>a}
function Jf(a){if(We&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Kf(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");We||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Kf(a,b,c){if(!(a.nodeName in Ef))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ff)b.push(Ff[a.nodeName]);else for(a=a.firstChild;a;)Kf(a,b,c),a=a.nextSibling}
function Lf(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Mf(a,function(a){return(!e||a.nodeName==e)&&(!c||u(a.className)&&mb(a.className.split(/\s+/),c))},!0,d)}
function P(a,b){return Lf(a,null,b,void 0)}
function Mf(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function hf(a){this.b=a||n.document||document}
h=hf.prototype;h.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
h.createElement=function(a){return this.b.createElement(String(a))};
h.appendChild=function(a,b){a.appendChild(b)};
h.isElement=zf;h.contains=Af;function Nf(a,b){this.b=0;this.D=void 0;this.i=this.f=this.g=null;this.w=this.A=!1;if(a!=aa)try{var c=this;a.call(b,function(a){Of(c,2,a)},function(a){Of(c,3,a)})}catch(d){Of(this,3,d)}}
function Pf(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Pf.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Qf=new qa(function(){return new Pf},function(a){a.reset()},100);
function Rf(a,b,c){var d=Qf.get();d.g=a;d.f=b;d.context=c;return d}
function Sf(a){if(a instanceof Nf)return a;var b=new Nf(aa);Of(b,2,a);return b}
function Tf(a){return new Nf(function(b,c){c(a)})}
Nf.prototype.then=function(a,b,c){return Uf(this,ga(a)?a:null,ga(b)?b:null,c)};
Yc(Nf);Nf.prototype.cancel=function(a){0==this.b&&Pb(function(){var b=new Vf(a);Wf(this,b)},this)};
function Wf(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Wf(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Xf(c),Yf(c,e,3,b)))}a.g=null}else Of(a,3,b)}
function Zf(a,b){a.f||2!=a.b&&3!=a.b||$f(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Uf(a,b,c,d){var e=Rf(null,null,null);e.b=new Nf(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Vf?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Zf(a,e);return e.b}
Nf.prototype.H=function(a){this.b=0;Of(this,2,a)};
Nf.prototype.K=function(a){this.b=0;Of(this,3,a)};
function Of(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.H,g=a.K;if(e instanceof Nf)Zf(e,Rf(f||aa,g||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(m){k=!1}else k=!1;if(k)e.then(f,g,a),d=!0;else{if(ha(e))try{var l=e.then;if(ga(l)){ag(e,l,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.D=c,a.b=b,a.g=null,$f(a),3!=b||c instanceof Vf||bg(a,c))}}
function ag(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function $f(a){a.A||(a.A=!0,Pb(a.F,a))}
function Xf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Nf.prototype.F=function(){for(var a;a=Xf(this);)Yf(this,a,this.b,this.D);this.A=!1};
function Yf(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.w;a=a.g)a.w=!1;if(b.b)b.b.g=null,cg(b,c,d);else try{b.i?b.g.call(b.context):cg(b,c,d)}catch(e){dg.call(null,e)}ra(Qf,b)}
function cg(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function bg(a,b){a.w=!0;Pb(function(){a.w&&dg.call(null,b)})}
var dg=Ib;function Vf(a){sa.call(this,a)}
w(Vf,sa);Vf.prototype.name="cancel";function eg(a){this.b=a}
w(eg,$e);h=eg.prototype;h.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeItem(a)};
h.fa=function(){return this.b.length};
h.ea=function(a){var b=0,c=this.b,d=new we;d.next=function(){if(b>=c.length)throw ve;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.b.clear()};
h.key=function(a){return this.b.key(a)};function fg(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(fg,eg);function gg(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(gg,eg);function hg(a){var b=a.__yt_uid_key;b||(b=ig(),a.__yt_uid_key=b);return b}
var ig=t("yt.dom.getNextId_");if(!ig){ig=function(){return++jg};
r("yt.dom.getNextId_",ig,void 0);var jg=0}function kg(a,b){a=N(a);b=N(b);return!!Mf(a,function(a){return a===b},!0,void 0)}
function lg(a,b){var c=mf(a,null,b);return c.length?c[0]:null}
function mg(){var a=document,b;kb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function ng(){Od(document.body,"hide-players",!1);C(lf("preserve-players"),function(a){Md(a,"preserve-players")})}
;function og(a){this.b=a||md();pg||(pg=qg(this.b))}
var pg=null;function qg(a){return(new Nf(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ga(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Ea(d,{_c:{jsl:{h:x("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||x("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=Sd(1<g.length?g[1]:g[0])}else e={};var k=e.gapi_jsh;k&&Ea(d,{_c:{jsl:{h:k}}})}te("client",d)}catch(l){Sa(l)}})).then(function(){})}
og.prototype.i=function(){var a=t("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Jb;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",x("SESSION_INDEX"));t("gapi.client.setApiKey")(this.b.innertubeApiKey)};
og.prototype.f=function(){return{context:nd(this.b)}};
og.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=y(function(){e||(e=!0,c.$&&c.$())},c.timeout));
rg(this,a,b,function(a){if(!e)if(e=!0,d&&Ra(d),a)c.O&&c.O(a);else if(c.onError)c.onError()})};
function rg(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":x("VISITOR_DATA")},method:"POST",body:Oc(c)},f=v(a.i,a);pg.then(function(){f();t("gapi.client.request")(e).execute(d||aa)})}
;var ya=t("yt.events.listeners_")||{};r("yt.events.listeners_",ya,void 0);var sg=t("yt.events.counter_")||{count:0};r("yt.events.counter_",sg,void 0);function tg(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return wa(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Q(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=tg(a,b,c,d);if(e)return e;var e=++sg.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new cd(d);if(!Mf(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new cd(b);
b.currentTarget=a;return c.call(a,b)};
g=Qa(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);ya[e]=[a,b,c,g,d];return e}
function ug(a,b,c){return vg(a,b,function(a){return I(a,c)})}
function vg(a,b,c){var d=a||document;return Q(d,"click",function(a){var e=Mf(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function wg(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in ya){var b=ya[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete ya[a]}}))}
function xg(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function yg(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
;var zg={log_event:"events",log_interaction:"interactions"},Ag={},Bg={},Cg=0,Aa=t("yt.logging.transport.logsQueue_")||{};r("yt.logging.transport.logsQueue_",Aa,void 0);function Dg(a,b){Aa[a.endpoint]=Aa[a.endpoint]||[];var c=Aa[a.endpoint];c.push(a.ib);Bg[a.endpoint]=b;c.length>=(Number(kd("web_logging_max_batch")||0)||20)?Eg():Fg()}
function Eg(){Ra(Cg);if(!za()){for(var a in Aa){var b=Ag[a];if(!b){b=Bg[a];if(!b)continue;b=new b;Ag[a]=b}var c=b.f();c.requestTimeMs=Math.round(Ta());c[zg[a]]=Aa[a];b.g(a,c,{});delete Aa[a]}za()||Fg()}}
function Fg(){Ra(Cg);Cg=y(Eg,x("LOGGING_BATCH_TIMEOUT",1E4))}
;function Gg(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Qa(b)(l)}
var l=hd&&hd();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);f="POST"==c;if(e=Hg(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Hg(a,b){b=b||{};var c;c||(c=window.location.href);var d=wd(a)[1]||null,e=xd(wd(a)[3]||null);d&&e?(d=c,c=wd(a),d=wd(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?xd(wd(c)[3]||null)==e&&(Number(wd(c)[4]||null)||null)==(Number(wd(a)[4]||null)||null):!0;for(var f in Ig){if((e=d=x(Ig[f]))&&!(e=c)){var e=f,g=x("CORS_HEADER_WHITELIST")||{},k=xd(wd(a)[3]||null);e=k?(g=g[k])?mb(g,e):!1:!0}e&&(b[f]=d)}return b}
function Jg(a,b){b.method="POST";b.J||(b.J={});Kg(a,b)}
function Lg(a,b){var c=x("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.ed&&(!xd(wd(a)[3]||null)||b.withCredentials||xd(wd(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.J&&b.J[c])}
function Kg(a,b){var c=b.format||"JSON";b.ac&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=x("XSRF_FIELD_NAME",void 0),e=x("XSRF_TOKEN",void 0),f=b.Da;f&&(f[d]&&delete f[d],a=Td(a,f||{}));var g=b.postBody||"",f=b.J;Lg(a,b)&&(f||(f={}),f[d]=e);f&&u(g)&&(d=Sd(g),Ea(d,f),g=b.jb&&"JSON"==b.jb?JSON.stringify(d):Cd(d));var k=!1,l,m=Gg(a,function(a){if(!k){k=!0;l&&Ra(l);var d=id(a),e=null;if(d||400<=a.status&&500>a.status)e=
Mg(c,a,b.dd);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.O&&b.O.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ba&&b.Ba.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.$&&0<b.timeout&&(l=y(function(){k||(k=!0,m.abort(),Ra(l),b.$.call(b.context||n,m))},b.timeout))}
function Mg(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Nc(a));break;case "XML":if(b=(b=b.responseXML)?Ng(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=Og(a)})}c&&Pg(d);
return d}
function Pg(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Ob(a[b]);a[c]=d}else Pg(a[b])}}
function Ng(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Og(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Ig={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function Qg(){if(!Rg&&!Sg||!window.JSON)return null;var a;try{a=Rg.get("yt-player-two-stage-token")}catch(b){}if(!u(a))try{a=Sg.get("yt-player-two-stage-token")}catch(b){}if(!u(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var Sg,Tg=new fg;Sg=Tg.isAvailable()?new Ze(Tg):null;var Rg,Ug=new gg;Rg=Ug.isAvailable()?new Ze(Ug):null;function Vg(){this.b=md()}
Vg.prototype.f=function(){return{context:nd(this.b)}};
Vg.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":x("VISITOR_DATA")},J:b,jb:"JSON",$:c.$,O:c.O,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=Ac(String(n.location.href)),e=n.__OVERRIDE_SID;null==e&&(e=(new Vc(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==d&&(d=(new Vc(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(n.location.href);
c=f&&d&&e?[e,Ed(Ac(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=x("SESSION_INDEX",0));Jg("//"+this.b.Qc+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};function Wg(){if(null==t("_lact",window)){var a=parseInt(x("LACT"),10),a=isFinite(a)?pa()-Math.max(a,0):-1;r("_lact",a,window);-1==a&&Xg();Q(document,"keydown",Xg);Q(document,"keyup",Xg);Q(document,"mousedown",Xg);Q(document,"mouseup",Xg);ec("page-mouse",Xg);ec("page-scroll",Xg);ec("page-resize",Xg)}}
function Xg(){null==t("_lact",window)&&(Wg(),t("_lact",window));var a=pa();r("_lact",a,window);E("USER_ACTIVE")}
function Yg(){var a=t("_lact",window);return null==a?-1:Math.max(pa()-a,0)}
;var Zg={},$g=0;function ah(a,b,c,d){var e={};e.eventTimeMs=Math.round(d||Ta());e[a]=b;kd("web_gel_lact")&&(e.context={lastActivityMs:Yg()});Dg({endpoint:"log_event",ib:e},c)}
;function bh(a,b,c){ch(dh(),{attachChild:{csn:a,parentVisualElement:gd(b),visualElements:[gd(c)]}},void 0)}
function eh(a,b){var c=dh(),d=jb(b,function(a){return gd(a)});
ch(c,{visibilityUpdate:{csn:a,visualElements:d}})}
function ch(a,b,c){b.eventTimeMs=Math.round(Ta());b.lactMs=Yg();c&&(b.clientData=fh(c));Dg({endpoint:"log_interaction",ib:b},a)}
function fh(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=jb(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function dh(){return kd("enable_youtubei_innertube")?Vg:og}
;function gh(){var a=x("ROOT_VE_TYPE",void 0);return a?new ed(void 0,a,void 0):null}
function hh(){var a=x("client-screen-nonce",void 0);a||(a=x("EVENT_ID",void 0));return a}
;var ih=pa().toString();function jh(a){var b,c;b=void 0===b?{}:b;c=void 0===c?"":c;var d=window.location;a=yd(Bd([a],b))+c;a=a instanceof yb?a:Cb(a);d.href=Ab(a)}
function kh(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=x("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=x("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=xd(wd(window.location.href)[3]||null);f&&e.push(f);f=xd(wd(d)[3]||null);if(mb(e,f)||!f&&0==d.lastIndexOf("/",0))if(kd("autoescape_tempdata_url")&&(e=document.createElement("a"),Vb(e,d),d=e.href),d){var f=wd(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
hh();d="ST-"+Ja(d).toString(36);e=b?Cd(b):"";Xc.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=t("yt.logging.screen.storeParentElement"),b&&d&&d(new ed(b)))}}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):jh(a);return!0}
;function lh(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Ca(mh);this.assets=a.assets||{};this.attrs=a.attrs||Ca(nh);this.params=a.params||Ca(oh);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var mh={enablejsapi:1},nh={},oh={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function ph(a){a instanceof lh||(a=new lh(a));return a}
function qh(a){var b=new lh,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"object"==ca(d)?b[c]=Ca(d):b[c]=d}return b}
;function rh(){this.g=this.f=this.b=0;this.i="";var a=t("window.navigator.plugins"),b=t("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,k,l,m;if(Ua)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(q){g=null}else l=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=l.appendChild(m);if(g&&"GetVariable"in g)try{k=g.GetVariable("$version")}catch(q){k=""}l&&m&&l.removeChild(m);(g=k||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ba(rh);function sh(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function th(){z.call(this);this.b=new D;$a(this,na(ab,this.b))}
w(th,z);th.prototype.subscribe=function(a,b,c){return this.C()?0:this.b.subscribe(a,b,c)};
th.prototype.U=function(a){return this.C()?!1:this.b.U(a)};
th.prototype.i=function(a,b){this.C()||this.b.M.apply(this.b,arguments)};function uh(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=uh.prototype;h.getHeight=function(){return this.bottom-this.top};
h.contains=function(a){return this&&a?a instanceof uh?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.l>=this.left&&a.l<=this.right&&a.o>=this.top&&a.o<=this.bottom:!1};
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function vh(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
vh.prototype.contains=function(a){return a instanceof K?a.l>=this.left&&a.l<=this.left+this.width&&a.o>=this.top&&a.o<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
vh.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
vh.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
vh.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function wh(a,b,c){if(u(b))(b=xh(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=xh(c,d);f&&(c.style[f]=e)}}
var yh={};function xh(a,b){var c=yh[b];if(!c){var d=Ka(b),c=d;void 0===a.style[d]&&(d=(Fe?"Webkit":Ee?"Moz":L?"ms":Be?"O":null)+La(d),void 0!==a.style[d]&&(c=d));yh[b]=c}return c}
function zh(a,b){var c=jf(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Ah(a,b){return zh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Bh(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}L&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Ch(a){if(L&&!(8<=Number(Te)))return a.offsetParent;var b=jf(a),c=Ah(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Ah(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Dh(a){for(var b=new uh(0,Infinity,Infinity,0),c=gf(a),d=c.b.body,e=c.b.documentElement,f=sf(c.b);a=Ch(a);)if(!(L&&0==a.clientWidth||Fe&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Ah(a,"overflow")){var g=Eh(a),k=new K(a.clientLeft,a.clientTop);g.l+=k.l;g.o+=k.o;b.top=Math.max(b.top,g.o);b.right=Math.min(b.right,g.l+a.clientWidth);b.bottom=Math.min(b.bottom,g.o+a.clientHeight);b.left=Math.max(b.left,g.l)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
pf(tf(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Eh(a){var b=jf(a),c=new K(0,0),d;d=b?jf(b):document;d=!L||9<=Number(Te)||qf(gf(d).b)?d.documentElement:d.body;if(a==d)return c;a=Bh(a);b=rf(gf(b).b);c.l=a.left+b.l;c.o=a.top+b.o;return c}
function Fh(a){a=Bh(a);return new K(a.left,a.top)}
function Gh(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Hh(a){var b=Ih;if("none"!=Ah(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Ih(a){var b=a.offsetWidth,c=a.offsetHeight,d=Fe&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new Uc(b,c):(a=Bh(a),new Uc(a.right-a.left,a.bottom-a.top))}
function Jh(a){var b=Eh(a);a=Hh(a);return new vh(b.l,b.o,a.width,a.height)}
function Kh(a){return"rtl"==Ah(a,"direction")}
function Lh(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Mh(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Lh(a,c):0}
var Nh={thin:2,medium:4,thick:6};function Oh(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Nh?Nh[c]:Lh(a,c)}
;function Ph(a,b,c,d){z.call(this);this.g=b||null;this.D="*";this.i=c||null;this.b=null;this.channel=d||null;this.K=!!a;this.F=v(this.N,this);window.addEventListener("message",this.F)}
w(Ph,z);Ph.prototype.N=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&u(a.data)){var b;try{b=Mc(a.data)}catch(c){return}if(!(null==b||this.K&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.D=a.origin:Sa(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.b=b.id;this.f&&(this.f(),this.f=null);break;case "command":this.w&&(this.A&&!mb(this.A,b.func)||this.w(b.func,b.args))}}};
Ph.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var d=Oc(a);c.postMessage(d,this.D)}catch(e){Sa(e,"WARNING")}}};
Ph.prototype.G=function(){window.removeEventListener("message",this.F);Ph.B.G.call(this)};function Qh(a,b,c){Ph.call(this,a,b,c||x("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.A=this.f=this.w=null}
w(Qh,Ph);function Rh(){var a=mg();return a?a:null}
;function Sh(a){if(window.spf){var b=a.match(Th);spf.style.load(a,b?b[1]:"",void 0)}else Uh(a)}
function Uh(a){var b=Vh(a),c=document.getElementById(b),d=c&&Xa(c,"loaded");d||c&&!d||(c=Wh(a,b,function(){Xa(c,"loaded")||(Va(c,"loaded","true"),E(b),y(na(jc,b),0))}))}
function Wh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Xe(a);Wb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Vh(a){var b=document.createElement("a");Vb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ja(a)}
var Th=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Xh={},Yh=0;function Zh(a,b){a&&(x("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Gg(a,b):$h(a,b))}
function $h(a,b){var c=new Image,d=""+Yh++;Xh[d]=c;c.onload=c.onerror=function(){b&&Xh[d]&&b();delete Xh[d]};
c.src=a}
;function ai(){var a=Ca(bi);return new Nf(function(b,c){a.O=function(a){id(a)?b(a):c(new ci("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new ci("Unknown request error","net.unknown"))};
a.$=function(){c(new ci("Request timed out","net.timeout"))};
Kg("//googleads.g.doubleclick.net/pagead/id",a)})}
function ci(a,b){sa.call(this,a+", errorCode="+b);this.errorCode=b}
w(ci,sa);ci.prototype.name="PromiseAjaxError";var di;var ei=cb,ei=ei.toLowerCase();if(-1!=ei.indexOf("android")){var fi=ei.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(fi)di=Number(fi[1]);else{var gi={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},hi=[],ii=0,ji;for(ji in gi)hi[ii++]=ji;var ki=ei.match("("+hi.join("|")+")");di=ki?gi[ki[0]]:0}}else di=void 0;var li=cb,mi=li.match(/\((BB10|PlayBook|BlackBerry);/);!mi||2>mi.length||li.match(/Version\/(\d+\.\d+)/);cb.match(/Mozilla\/[\d\.]+ \(Mobile;.* rv:([\d\.]+)\) Gecko\/[\d\.]+ Firefox\/[\d\.]+/);var ni;var oi=cb,pi=oi.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!pi||2>pi.length)ni=void 0;else{var qi=oi.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);ni=qi&&6==qi.length?Number(qi[5].replace("_",".")):0}0<=ni&&0<=cb.search("Safari")&&cb.search("Version");var ri=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],si=['audio/mp4; codecs="mp4a.40.2"'];L&&Se("9");!Fe||Se("528");Ee&&Se("1.9b")||L&&Se("8")||Be&&Se("9.5")||Fe&&Se("528");Ee&&!Se("8")||L&&Se("9");function ti(a){z.call(this);this.b=[];this.f=a||this}
w(ti,z);function ui(a,b,c,d){d=Qa(v(d,a.f));d={target:b,name:c,va:d};b.addEventListener(c,d.va,void 0);a.b.push(d)}
function vi(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.va)}}
ti.prototype.G=function(){vi(this);ti.B.G.call(this)};function R(a,b){this.version=a;this.args=b}
function wi(a){if(!a.qb){var b={};a.call(b);a.qb=b.version}return a.qb}
function xi(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=wi(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function S(a,b){this.topic=a;this.b=b}
S.prototype.toString=function(){return this.topic};var yi=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function zi(a){R.call(this,1,arguments)}
w(zi,R);var Ai=new S("timing-sent",zi);var Bi=t("yt.pubsub2.instance_")||new D;D.prototype.subscribe=D.prototype.subscribe;D.prototype.unsubscribeByKey=D.prototype.U;D.prototype.publish=D.prototype.M;D.prototype.clear=D.prototype.clear;r("yt.pubsub2.instance_",Bi,void 0);var Ci=t("yt.pubsub2.subscribedKeys_")||{};r("yt.pubsub2.subscribedKeys_",Ci,void 0);var Di=t("yt.pubsub2.topicToKeys_")||{};r("yt.pubsub2.topicToKeys_",Di,void 0);var Ei=t("yt.pubsub2.isAsync_")||{};r("yt.pubsub2.isAsync_",Ei,void 0);r("yt.pubsub2.skipSubKey_",null,void 0);
function T(a,b){var c=Fi();c&&c.publish.call(c,a.toString(),a,b)}
function Gi(a,b,c){var d=Fi();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Ci[e])try{if(g&&a instanceof S&&a!=d)try{g=xi(a.b,g)}catch(l){throw l.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,g)}catch(l){Sa(l)}};
Ei[a.toString()]?t("yt.scheduler.instance")?xb(f,void 0):y(f,0):f()}});
Ci[e]=!0;Di[a.toString()]||(Di[a.toString()]=[]);Di[a.toString()].push(e);return e}
function Hi(a){var b=Fi();b&&(fa(a)&&(a=[a]),C(a,function(a){b.unsubscribeByKey(a);delete Ci[a]}))}
function Fi(){return t("yt.pubsub2.instance_")}
;function Ii(a,b,c){z.call(this);this.b=a;this.i=b||0;this.f=c;this.g=v(this.Pb,this)}
w(Ii,z);h=Ii.prototype;h.ga=0;h.G=function(){Ii.B.G.call(this);this.stop();delete this.b;delete this.f};
h.start=function(a){this.stop();var b=this.g;a=p(a)?a:this.i;if(!ga(b))if(b&&"function"==typeof b.handleEvent)b=v(b.handleEvent,b);else throw Error("Invalid listener argument");this.ga=2147483647<Number(a)?-1:n.setTimeout(b,a||0)};
h.stop=function(){this.isActive()&&n.clearTimeout(this.ga);this.ga=0};
h.isActive=function(){return 0!=this.ga};
h.Pb=function(){this.ga=0;this.b&&this.b.call(this.f)};var Ji={vc:!0},Ki={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},Li="ap c cver ei yt_fss yt_li".split(" "),Mi=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Ni=v(yi.clearResourceTimings||yi.webkitClearResourceTimings||yi.mozClearResourceTimings||yi.msClearResourceTimings||yi.oClearResourceTimings||aa,yi);
function Oi(a,b){if(!b&&"_"!=a[0]){var c=a;yi.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),yi.mark(c))}var c=Pi(),d=b||Ta();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(Qi()["tick_"+a]=b)||Ta();kd("csi_on_gel")?(c=Ri(),"_start"==a?ah("latencyActionBaselined",{clientActionNonce:c},Vg,b):ah("latencyActionTicked",{tickName:a,clientActionNonce:c},Vg,b),c=!0):c=!1;if(c=!c)c=!t("yt.timing.pingSent_");if(c&&(d=x("TIMING_ACTION",void 0),c=Pi(),t("yt.timing.ready_")&&d&&c._start&&Si())){var d=
!0,e=x("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in c)){d=!1;break}d&&Ti()}}
function Ui(){var a=Vi().info.yt_lt="hot_bg";Qi().info_yt_lt=a;if(kd("csi_on_gel"))if("yt_lt"in Ki){var b={},c=Ki.yt_lt;mb(Mi,c)&&(a=!!a);b[c]=a;a=Ri();b.clientActionNonce=a;ah("latencyActionInfo",b,Vg)}else"yt_lt"in Li||Sa(Error("Unknown label yt_lt logged with GEL CSI."))}
function Si(){var a=Pi();if(a.aft)return a.aft;for(var b=x("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Ti(){if(!kd("csi_on_gel")){var a=Pi(),b=Vi().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&da(a[d])){var e=d.slice(1);if(e in Ji){var f=jb(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=t("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Wi(f,e),Xi(),Ni(),Yi(!1,void 0),fb("PREVIOUS_ACTION",x("TIMING_ACTION")),fb("TIMING_ACTION","")}else{var g=x("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:x("TIMING_ACTION",void 0)},k=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+t("ytplayer.config.assets.js");(l=yi.getEntriesByName?yi.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):delete b.h5jse}a.aft=
Si();Zi()&&"youtube"==g&&(Ui(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=Ta();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=t("ytdebug.logTiming"))&&a(f,b);Wi(f,e,void 0);T(Ai,new zi(b.aft+(k||0)))}}}
function Wi(a,b,c){if(kd("debug_csi_data")){var d=t("yt.timing.csiData");d||(d=[],r("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||Zh(a,void 0)}catch(f){Zh(a,void 0)}else Zh(a);Yi(!0,c)}
function Ri(){var a=Vi().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=pa();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(ih)for(c=1,d=0;d<ih.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^ih.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Vi().nonce=a}return a}
function Pi(){return Vi().tick}
function Qi(){var a=Vi();"gel"in a||(a.gel={});return a.gel}
function Vi(){return t("ytcsi.data_")||Xi()}
function Xi(){var a={tick:{},info:{}};r("ytcsi.data_",a,void 0);return a}
function Yi(a,b){r("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Zi(){var a=Pi(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Vi().info.yt_pvis}
;new Ii($i,1E3);function $i(){Oi("vptl",0);Oi("vpl",0)}
;var aj={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function bj(a,b){z.call(this);this.A=this.w=a;this.ca=b;this.F=!1;this.f={};this.ka=this.ba=null;this.da=new D;$a(this,na(ab,this.da));this.i={};this.K=this.la=this.g=this.ua=this.b=null;this.ha=!1;this.N=this.D=this.V=this.W=null;this.ma={};this.Hb=["onReady"];this.ia=new ti(this);$a(this,na(ab,this.ia));this.sa=null;this.Ka=NaN;this.ja={};cj(this);this.R("onDetailedError",v(this.sc,this));this.R("onTabOrderChange",v(this.Mb,this));this.R("onTabAnnounce",v(this.La,this));this.R("WATCH_LATER_VIDEO_ADDED",
v(this.tc,this));this.R("WATCH_LATER_VIDEO_REMOVED",v(this.uc,this));af||(this.R("onMouseWheelCapture",v(this.pc,this)),this.R("onMouseWheelRelease",v(this.qc,this)));this.R("onAdAnnounce",v(this.La,this));this.T=new ti(this);$a(this,na(ab,this.T));this.ta=!1;this.ra=null}
w(bj,z);var dj=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];h=bj.prototype;h.Ea=function(a,b){this.C()||(ej(this,a),fj(this,b),this.F&&gj(this))};
function ej(a,b){a.ua=b;a.b=qh(b);a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.ca,a.b.attrs.id=a.ca);a.A.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.ca;a.la||(a.la=hj(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.A.style.width=Gh(Number(c)||c,!0));if(c=a.b.attrs.height)a.A.style.height=Gh(Number(c)||c,!0)}
h.Tb=function(){return this.ua};
function gj(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function ij(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=sh(rh.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function jj(a,b){if((!b||(5!=(aj[b.errorCode]||5)?0:-1!=dj.indexOf(b.errorCode)))&&ij(a)){var c=kj(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=ph(c));d.args.autoplay=1;d.args.html5_unavailable="1";ej(a,d);fj(a,"flash")}}
function fj(a,b){if(!a.C()){if(!b){var c;if(!(c=!a.b.html5&&ij(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==di)d=!0;else{a:{var e=c;c=t("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),r("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?ri:si,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=lj(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?ij(a)?"flash":"unsupported":"html5"}("flash"==b?a.Oc:a.Pc).call(a)}}
function lj(a){var b=!0,c=kj(a);c&&a.b&&(a=a.b,b=Xa(c,"version")==a.assets.js);return b&&!!t("yt.player.Application.create")}
h.Pc=function(){if(!this.ha){var a=lj(this);a&&"html5"==mj(this)?(this.K="html5",this.F||this.aa()):(nj(this),this.K="html5",a&&this.V?(this.w.appendChild(this.V),this.aa()):(this.b.loaded=!0,this.W=v(function(){var a=this.w,c=qh(this.b);t("yt.player.Application.create")(a,c);this.aa()},this),this.ha=!0,a?this.W():(kc(this.b.assets.js,this.W),Sh(this.b.assets.css))))}};
h.Oc=function(){var a=qh(this.b);if(!this.D){var b=kj(this);b&&(this.D=document.createElement("SPAN"),this.D.tabIndex=0,ui(this.ia,this.D,"focus",this.eb),this.N=document.createElement("SPAN"),this.N.tabIndex=0,ui(this.ia,this.N,"focus",this.eb),b.parentNode&&b.parentNode.insertBefore(this.D,b),b.parentNode&&b.parentNode.insertBefore(this.N,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==mj(this))this.K="flash",this.F||this.aa();else{nj(this);
this.K="flash";this.b.loaded=!0;var b=rh.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!sh(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.w;if(c){var b=u(b)?kf(b):b,d=Ca(a.attrs);d.tabindex=0;var e=Ca(a.params);e.flashvars=Cd(a.args);if(Ua){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=
document.createElement("object"),f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var k in d)a.setAttribute(k,d[k]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.aa()}};
h.eb=function(){kj(this).focus()};
function kj(a){var b=N(a.g);!b&&a.A&&a.A.querySelector&&(b=a.A.querySelector("#"+a.g));return b}
h.aa=function(){if(!this.C()){var a=kj(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.ha=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))jj(this);else{cj(this);this.F=!0;a=kj(this);a.addEventListener&&(this.ba=oj(this,a,"addEventListener"));a.removeEventListener&&(this.ka=oj(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=oj(this,a,d))}for(var e in this.i)this.ba(e,
this.i[e]);gj(this);this.la&&this.la(this.f);this.da.M("onReady",this.f)}else this.Ka=y(v(this.aa,this),50)}};
function oj(a,b,c){var d=b[c];return function(){try{return a.sa=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.sa=e,Sa(e,"WARNING"))}}}
function cj(a){a.F=!1;if(a.ka)for(var b in a.i)a.ka(b,a.i[b]);for(var c in a.ja)Ra(parseInt(c,10));a.ja={};a.ba=null;a.ka=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=v(a.R,a);a.f.removeEventListener=v(a.Ec,a);a.f.destroy=v(a.dispose,a);a.f.getLastError=v(a.Ub,a);a.f.getPlayerType=v(a.Vb,a);a.f.getCurrentVideoConfig=v(a.Tb,a);a.f.loadNewVideoConfig=v(a.Ea,a);a.f.isReady=v(a.Rc,a)}
h.Rc=function(){return this.F};
h.R=function(a,b){if(!this.C()){var c=hj(this,b);if(c){if(!mb(this.Hb,a)&&!this.i[a]){var d=pj(this,a);this.ba&&this.ba(a,d)}this.da.subscribe(a,c);"onReady"==a&&this.F&&y(na(c,this.f),0)}}};
h.Ec=function(a,b){if(!this.C()){var c=hj(this,b);c&&Yb(this.da,a,c)}};
function hj(a,b){var c=b;if("string"==typeof b){if(a.ma[b])return a.ma[b];c=function(){var a=t(b);a&&a.apply(n,arguments)};
a.ma[b]=c}return c?c:null}
function pj(a,b){var c="ytPlayer"+b+a.ca;a.i[b]=c;n[c]=function(c){var d=y(function(){if(!a.C()){a.da.M(b,c);var e=a.ja,g=String(d);g in e&&delete e[g]}},0);
Ba(a.ja,String(d))};
return c}
h.Mb=function(a){a=a?yf:xf;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.D||b==this.N||(b.focus(),b!=document.activeElement));)b=a(b)};
h.La=function(a){E("a11y-announce",a)};
h.sc=function(a){jj(this,a)};
h.tc=function(a){E("WATCH_LATER_VIDEO_ADDED",a)};
h.uc=function(a){E("WATCH_LATER_VIDEO_REMOVED",a)};
h.pc=function(){this.ta||(ef?(this.ra=rf(document),ui(this.T,window,"scroll",this.Ac),ui(this.T,this.w,"touchmove",this.yc)):(ui(this.T,this.w,"mousewheel",this.hb),ui(this.T,this.w,"wheel",this.hb)),this.ta=!0)};
h.qc=function(){vi(this.T);this.ta=!1};
h.hb=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
h.Ac=function(){window.scrollTo(this.ra.l,this.ra.o)};
h.yc=function(a){a.preventDefault()};
h.Vb=function(){return this.K||mj(this)};
h.Ub=function(){return this.sa};
function mj(a){return(a=kj(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function nj(a){Oi("dcp");a.cancel();cj(a);a.K=null;a.b&&(a.b.loaded=!1);var b=kj(a);"html5"==mj(a)?a.V=b:b&&b.destroy&&b.destroy();uf(a.w);vi(a.ia);a.D=null;a.N=null}
h.cancel=function(){this.W&&rc(this.b.assets.js,this.W);Ra(this.Ka);this.ha=!1};
h.G=function(){nj(this);if(this.V&&this.b)try{this.V.destroy()}catch(b){Sa(b)}this.ma=null;for(var a in this.i)n[this.i[a]]=null;this.ua=this.b=this.f=null;delete this.w;delete this.A;bj.B.G.call(this)};var qj={},rj="player_uid_"+(1E9*Math.random()>>>0);function sj(a,b){a=u(a)?kf(a):a;b=ph(b);var c=rj+"_"+ia(a),d=qj[c];if(d)return d.Ea(b),d.f;d=new bj(a,c);qj[c]=d;E("player-added",d.f);$a(d,na(tj,d));y(function(){d.Ea(b)},0);
return d.f}
function tj(a){qj[a.ca]=null}
function uj(a){a=N(a);if(!a)return null;var b=rj+"_"+ia(a),c=qj[b];c||(c=new bj(a,b),qj[b]=c);return c.f}
;var vj=t("yt.abuse.botguardInitialized")||uc;r("yt.abuse.botguardInitialized",vj,void 0);var wj=t("yt.abuse.invokeBotguard")||vc;r("yt.abuse.invokeBotguard",wj,void 0);var xj=t("yt.abuse.dclkstatus.checkDclkStatus")||zc;r("yt.abuse.dclkstatus.checkDclkStatus",xj,void 0);var yj=t("yt.player.exports.navigate")||kh;r("yt.player.exports.navigate",yj,void 0);var zj=t("yt.player.embed")||sj;r("yt.player.embed",zj,void 0);var Aj=t("yt.player.getPlayerByElement")||uj;r("yt.player.getPlayerByElement",Aj,void 0);
var Bj=t("yt.util.activity.init")||Wg;r("yt.util.activity.init",Bj,void 0);var Cj=t("yt.util.activity.getTimeSinceActive")||Yg;r("yt.util.activity.getTimeSinceActive",Cj,void 0);var Dj=t("yt.util.activity.setTimestamp")||Xg;r("yt.util.activity.setTimestamp",Dj,void 0);function Ej(a,b,c){fa(a)?(this.date=Fj(a,b||0,c||1),Gj(this,c||1)):ha(a)?(this.date=Fj(a.getFullYear(),a.getMonth(),a.getDate()),Gj(this,a.getDate())):(this.date=new Date(pa()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Gj(this,a))}
function Fj(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
h=Ej.prototype;h.getFullYear=function(){return this.date.getFullYear()};
h.getMonth=function(){return this.date.getMonth()};
h.getDate=function(){return this.date.getDate()};
h.getTime=function(){return this.date.getTime()};
function Hj(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+Ha(c)+":"+Ha(b)}return a}
h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
h.pa=function(a,b){return[this.getFullYear(),Ha(this.getMonth()+1),Ha(this.getDate())].join(a?"-":"")+(b?Hj(this):"")};
h.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
h.toString=function(){return this.pa()};
function Gj(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
h.valueOf=function(){return this.date.valueOf()};
function Ij(a,b,c,d,e,f,g){this.date=fa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():pa())}
w(Ij,Ej);Ij.prototype.pa=function(a,b){var c=Ej.prototype.pa.call(this,a);return a?c+" "+Ha(this.date.getHours())+":"+Ha(this.date.getMinutes())+":"+Ha(this.date.getSeconds())+(b?Hj(this):""):c+"T"+Ha(this.date.getHours())+Ha(this.date.getMinutes())+Ha(this.date.getSeconds())+(b?Hj(this):"")};
Ij.prototype.equals=function(a){return this.getTime()==a.getTime()};
Ij.prototype.toString=function(){return this.pa()};function Jj(a){R.call(this,1,arguments);this.b=a}
w(Jj,R);function Kj(a){R.call(this,1,arguments);this.b=a}
w(Kj,R);function Lj(a,b,c){R.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
w(Lj,R);function Mj(a,b,c,d,e){R.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
w(Mj,R);function Nj(a,b,c){R.call(this,1,arguments);this.b=a;this.subscriptionId=b}
w(Nj,R);function Oj(a,b,c,d,e,f,g){R.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.w=d||null;this.i=e||null;this.g=f||null;this.source=g||null}
w(Oj,R);
var Pj=new S("subscription-batch-subscribe",Jj),Qj=new S("subscription-batch-unsubscribe",Jj),Rj=new S("subscription-subscribe",Mj),Sj=new S("subscription-subscribe-loading",Kj),Tj=new S("subscription-subscribe-loaded",Kj),Uj=new S("subscription-subscribe-success",Nj),Vj=new S("subscription-subscribe-external",Mj),Wj=new S("subscription-unsubscribe",Oj),Xj=new S("subscription-unsubscirbe-loading",Kj),Yj=new S("subscription-unsubscribe-loaded",Kj),Zj=new S("subscription-unsubscribe-success",Kj),ak=
new S("subscription-external-unsubscribe",Oj),bk=new S("subscription-enable-ypc",Kj),ck=new S("subscription-disable-ypc",Kj),dk=new S("subscription-prefs",Lj),ek=new S("subscription-prefs-success",Lj),fk=new S("subscription-prefs-failure",Lj);function gk(a,b){(a=N(a))&&a.style&&(a.style.display=b?"":"none",Od(a,"hid",!b))}
function hk(a){return(a=N(a))?"none"!=a.style.display&&!I(a,"hid"):!1}
function ik(a){C(arguments,function(a){!ea(a)||a instanceof Element?gk(a,!0):C(a,function(a){ik(a)})})}
function jk(a){C(arguments,function(a){!ea(a)||a instanceof Element?gk(a,!1):C(a,function(a){jk(a)})})}
;function kk(a,b,c,d,e,f,g){var k,l;if(k=c.offsetParent){var m="HTML"==k.tagName||"BODY"==k.tagName;m&&"static"==Ah(k,"position")||(l=Eh(k),m||(m=(m=Kh(k))&&Ee?-k.scrollLeft:!m||De&&Se("8")||"visible"==Ah(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft,l=Ae(l,new K(m,k.scrollTop))))}k=l||new K;l=Jh(a);if(m=Dh(a)){var q=new vh(m.left,m.top,m.right-m.left,m.bottom-m.top),m=Math.max(l.left,q.left),M=Math.min(l.left+l.width,q.left+q.width);if(m<=M){var V=Math.max(l.top,q.top),q=Math.min(l.top+
l.height,q.top+q.height);V<=q&&(l.left=m,l.top=V,l.width=M-m,l.height=q-V)}}m=gf(a);V=gf(c);if(m.b!=V.b){var M=m.b.body,H;var V=tf(V.b),q=new K(0,0),A;A=(A=jf(M))?tf(A):window;b:{try{Zc(A.parent);H=!0;break b}catch(ld){}H=!1}if(H){H=M;do{var xa=A==V?Eh(H):Fh(H);q.l+=xa.l;q.o+=xa.o}while(A&&A!=V&&A!=A.parent&&(H=A.frameElement)&&(A=A.parent))}H=Ae(q,Eh(M));!L||9<=Number(Te)||qf(m.b)||(H=Ae(H,rf(m.b)));l.left+=H.l;l.top+=H.o}a=lk(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new K(b,l.top+(a&1?
l.height:0));b=Ae(b,k);e&&(b.l+=(a&4?-1:1)*e.l,b.o+=(a&1?-1:1)*e.o);var Y;g&&(Y=Dh(c))&&(Y.top-=k.o,Y.right-=k.l,Y.bottom-=k.o,Y.left-=k.l);return mk(b,c,d,f,Y,g,void 0)}
function mk(a,b,c,d,e,f,g){a=new K(a.l,a.o);var k=lk(b,c);c=Hh(b);g=g?new Uc(g.width,g.height):new Uc(c.width,c.height);a=new K(a.l,a.o);g=new Uc(g.width,g.height);var l=0;if(d||0!=k)k&4?a.l-=g.width+(d?d.right:0):k&2?a.l-=g.width/2:d&&(a.l+=d.left),k&1?a.o-=g.height+(d?d.bottom:0):d&&(a.o+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.l<e.left||d.l>=e.right)&&(f&=-2);132==(f&132)&&(d.o<e.top||d.o>=e.bottom)&&(f&=-5);d.l<e.left&&f&1&&(d.l=e.left,l|=1);if(f&16){var m=d.l;d.l<e.left&&(d.l=e.left,l|=
4);d.l+k.width>e.right&&(k.width=Math.min(e.right-d.l,m+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.l+k.width>e.right&&f&1&&(d.l=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.l<e.left?16:0)|(d.l+k.width>e.right?32:0));d.o<e.top&&f&4&&(d.o=e.top,l|=2);f&32&&(m=d.o,d.o<e.top&&(d.o=e.top,l|=8),d.o+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.o,m+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.o+k.height>e.bottom&&f&4&&(d.o=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.o<
e.top?64:0)|(d.o+k.height>e.bottom?128:0));e=l}else e=256;l=e}f=new vh(0,0,0,0);f.left=a.l;f.top=a.o;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;g=new K(f.left,f.top);g instanceof K?(a=g.l,g=g.o):(a=g,g=void 0);b.style.left=Gh(a,!1);b.style.top=Gh(g,!1);g=new Uc(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=qf(gf(jf(b)).b),!L||Se("10")||g&&Se("8")?(b=b.style,Ee?b.MozBoxSizing="border-box":Fe?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(L?(g=Mh(b,"paddingLeft"),f=Mh(b,"paddingRight"),d=Mh(b,"paddingTop"),k=Mh(b,"paddingBottom"),g=new uh(d,f,k,g)):(g=zh(b,"paddingLeft"),f=zh(b,"paddingRight"),d=zh(b,"paddingTop"),k=zh(b,"paddingBottom"),g=new uh(parseFloat(d),parseFloat(f),parseFloat(k),parseFloat(g))),!L||9<=Number(Te)?(f=zh(b,"borderLeftWidth"),d=zh(b,"borderRightWidth"),k=zh(b,"borderTopWidth"),b=zh(b,"borderBottomWidth"),b=new uh(parseFloat(k),parseFloat(d),parseFloat(b),
parseFloat(f))):(f=Oh(b,"borderLeft"),d=Oh(b,"borderRight"),k=Oh(b,"borderTop"),b=Oh(b,"borderBottom"),b=new uh(k,d,b,f)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function lk(a,b){return(b&8&&Kh(a)?b^4:b)&-9}
;var nk={},ok="ontouchstart"in document;function pk(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Mf(c,function(a){return I(a,b)},!0,d)}
function qk(a){var b="mouseover"==a.type&&"mouseenter"in nk||"mouseout"==a.type&&"mouseleave"in nk,c=a.type in nk||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=nk[b],d;for(d in c.f){var e=pk(b,d,a.target);e&&!Mf(a.relatedTarget,function(a){return a==e},!0)&&c.M(d,e,b,a)}}if(b=nk[a.type])for(d in b.f)(e=pk(a.type,d,a.target))&&b.M(d,e,a.type,a)}}
Q(document,"blur",qk,!0);Q(document,"change",qk,!0);Q(document,"click",qk);Q(document,"focus",qk,!0);Q(document,"mouseover",qk);Q(document,"mouseout",qk);Q(document,"mousedown",qk);Q(document,"keydown",qk);Q(document,"keyup",qk);Q(document,"keypress",qk);Q(document,"cut",qk);Q(document,"paste",qk);ok&&(Q(document,"touchstart",qk),Q(document,"touchend",qk),Q(document,"touchcancel",qk));function rk(a){this.w=a;this.D={};this.H=[];this.F=[]}
h=rk.prototype;h.L=function(a){return P(a,U(this))};
function U(a,b){return"yt-uix"+(a.w?"-"+a.w:"")+(b?"-"+b:"")}
h.unregister=function(){gc(this.H);this.H.length=0;Hi(this.F);this.F.length=0};
h.init=aa;h.dispose=aa;function sk(a,b,c){a.H.push(ec(b,c,a))}
function tk(a,b,c){a.F.push(Gi(b,c,a))}
function W(a,b,c,d){d=U(a,d);var e=v(c,a);b in nk||(nk[b]=new D);nk[b].subscribe(d,e);a.D[c]=e}
function X(a,b,c,d){if(b in nk){var e=nk[b];Yb(e,U(a,d),a.D[c]);0>=e.fa()&&(e.dispose(),delete nk[b])}delete a.D[c]}
h.Z=function(a,b,c){var d=this.j(a,b);if(d&&(d=t(d))){var e=sb(arguments,2);rb(e,0,0,a);d.apply(null,e)}};
h.j=function(a,b){return Xa(a,b)};
function uk(a,b){Va(a,"tooltip-text",b)}
;function vk(){rk.call(this,"button");this.b=null;this.g=[];this.f={}}
w(vk,rk);ba(vk);h=vk.prototype;h.register=function(){W(this,"click",this.rb);W(this,"keydown",this.Wa);W(this,"keypress",this.Xa);sk(this,"page-scroll",this.Yb)};
h.unregister=function(){X(this,"click",this.rb);X(this,"keydown",this.Wa);X(this,"keypress",this.Xa);wk(this);this.f={};vk.B.unregister.call(this)};
h.rb=function(a){a&&!a.disabled&&(xk(this,a),this.click(a))};
h.Wa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=yk(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=Cf(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.kc:"table"==e&&(f=this.jc);f&&zk(this,a,b,c,v(f,this))}}};
h.Yb=function(){var a=this.f,b=0,c;for(c in a)b++;if(0!=b)for(var d in a){b=a[d];c=P(b.activeButtonNode||b.parentNode,U(this));if(void 0==c||void 0==b)break;Ak(this,c,b,!0)}};
function zk(a,b,c,d,e){var f=hk(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Bk(a,c)){if(p(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;"a"==b.tagName.toLowerCase()?jh(b.href):yg(b)}else g&&Ck(a,b);else f?27==d.keyCode?(Bk(a,c),Ck(a,b)):e(b,c,d):(a=I(b,U(a,"reverse"))?38:40,d.keyCode==a&&(yg(b),d.preventDefault()))}
h.Xa=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=yk(this,a),hk(a)&&c.preventDefault())};
function Bk(a,b){var c=U(a,"menu-item-highlight"),d=O(c,b);d&&Md(d,c);return d}
function Dk(a,b,c){J(c,U(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=U(a,"item-id-"+ia(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.jc=function(a,b,c){var d=Bk(this,b);if(d){var e=lg("table",b);b=mf("td",null,e);d=Ek(d,b,mf("td",null,lg("tr",e)).length,c);-1!=d&&(Dk(this,a,b[d]),c.preventDefault())}};
h.kc=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Bk(this,b);d&&(b=ib(mf("li",null,b),hk),Dk(this,a,b[Ek(d,b,1,c)]),c.preventDefault())}};
function Ek(a,b,c,d){var e=b.length;a=hb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Fk(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=U(a,"menu-mask"),jk(c),b.iframeMask=c);return c}
function Ak(a,b,c,d){var e=P(b,U(a,"group")),f=!!a.j(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,k=Jh(b);if(I(b,U(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(q){}}I(b,"flip")&&(I(b,U(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.j(b,"button-has-sibling-menu")?l=Ch(e):a.j(b,"button-menu-root-container")&&(l=Gk(a,b));L&&!Se("8")&&(l=null);var m;l&&(m=Jh(l),m=new uh(-m.top,m.left,m.top,-m.left));l=new K(0,1);I(b,U(a,"center-menu"))&&(l.l-=Math.round((Hh(c).width-Hh(b).width)/
2));d&&(l.o+=rf(document).o);if(a=Fk(a,b))b=Hh(c),a.style.width=b.width+"px",a.style.height=b.height+"px",kk(e,f,a,g,l,m,197),d&&wh(a,"position","fixed");kk(e,f,c,g,l,m,197)}
function Gk(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return P(b,c)}return document.body}
h.tb=function(a){if(a){var b=yk(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=Gk(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Fk(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.f[hg(a).toString()]=b);Ak(this,a,b,c);hc("yt-uix-button-menu-before-show",a,b);ik(b);d&&ik(d);
this.Z(a,"button-menu-action",!0);J(a,U(this,"active"));b=v(this.sb,this,a,!1);d=v(this.sb,this,a,!0);c=v(this.Nc,this,a,void 0);this.b&&yk(this,this.b)==yk(this,a)||wk(this);E("yt-uix-button-menu-show",a);wg(this.g);this.g=[Q(document,"click",d),Q(document,"contextmenu",b),Q(window,"resize",c)];this.b=a}}};
function Ck(a,b){if(b){var c=yk(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");jk(c);a.Z(b,"button-menu-action",!1);var d=Fk(a,b),e=hg(c).toString();delete a.f[e];y(function(){d&&d.parentNode&&(jk(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=P(b,U(a,"group")),f=[U(a,"active")];
e&&f.push(U(a,"group-active"));Nd(b,f);E("yt-uix-button-menu-hide",b);wg(a.g);a.g.length=0}}
h.Nc=function(a,b){var c=yk(this,a);if(c){b&&(b instanceof Lb?c.innerHTML=Nb(b):Bf(c,b));var d=!!this.j(a,"button-menu-fixed");Ak(this,a,c,d)}};
h.sb=function(a,b,c){c=xg(c);var d=P(c,U(this));if(d){var d=yk(this,d),e=yk(this,a);if(d==e)return}var d=P(c,U(this,"menu")),e=d==yk(this,a),f=I(c,U(this,"menu-item")),g=I(c,U(this,"menu-close"));if(!d||e&&(f||g))Ck(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=O(U(this,"content"),a))&&Bf(a,Jf(c)),Hk(this,d,c))};
function Hk(a,b,c){var d=U(a,"menu-item-selected");C(lf(d,b),function(a){Md(a,d)});
J(c.parentNode,d)}
function yk(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id"),c=c&&N(c),d=U(a,"menu");c?Ld(c,[d,U(a,"menu-external")]):c=O(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return I(a,U(this,"toggled"))};
function xk(a,b){if(a.j(b,"button-toggle")){var c=P(b,U(a,"group")),d=U(a,"toggled"),e=I(b,d);if(c&&a.j(c,"button-toggle-group")){var f=a.j(c,"button-toggle-group");C(lf(U(a),c),function(a){a!=b||"optional"==f&&e?(Md(a,d),a.removeAttribute("aria-pressed")):(J(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Qd(b,d)}}
h.click=function(a){if(yk(this,a)){var b=yk(this,a);if(b){var c=P(b.activeButtonNode||b.parentNode,U(this));c&&c!=a?(Ck(this,c),y(v(this.tb,this,a),1)):hk(b)?Ck(this,a):this.tb(a)}a.focus()}this.Z(a,"button-action")};
function wk(a){a.b&&Ck(a,a.b)}
;function Ik(a){rk.call(this,a);this.g=null}
w(Ik,rk);h=Ik.prototype;h.L=function(a){var b=rk.prototype.L.call(this,a);return b?b:a};
h.register=function(){sk(this,"yt-uix-kbd-nav-move-out-done",this.P)};
h.dispose=function(){Ik.B.dispose.call(this);Jk(this)};
h.j=function(a,b){var c=Ik.B.j.call(this,a,b);return c?c:(c=Ik.B.j.call(this,a,"card-config"))&&(c=t(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.L(a);if(b){J(b,U(this,"active"));var c=Kk(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Lk(this,a,c);var d=U(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.Z(b,"card-action",a);this.g=a;jk(c);y(v(function(){e||(ik(c),E("yt-uix-card-show",b,a,c));Mk(c);J(c,d);E("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Kk(a,b,c){var d=c||b,e=U(a,"card");c=Nk(a,d);var f=N(U(a,"card")+hg(d));if(f)return a=O(U(a,"card-body"),f),Af(a,c)||(vf(c),a.appendChild(c)),f;f=document.createElement("div");f.id=U(a,"card")+hg(d);f.className=e;(d=a.j(d,"card-class"))&&Ld(f,d.split(/\s+/));d=document.createElement("div");d.className=U(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=U(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;vf(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Lk(a,b,c){var d=a.j(b,"orientation")||"horizontal",e=O(U(a,"anchor"),b)||b,f=a.j(b,"position"),g=!!a.j(b,"force-position"),k=a.j(b,"position-fixed"),d="horizontal"==d,l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f,q,M;m&&l?(M=13,q=8):m&&!l?(M=12,q=9):!m&&l?(M=9,q=12):(M=8,q=13);var V=Kh(document.body),f=Kh(b);V!=f&&(M^=4);var H;d?(f=b.offsetHeight/2-12,H=new K(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,H=new K(b.offsetWidth+6,-12));var A=Hh(c),f=Math.min(f,(d?A.height:
A.width)-24-6);6>f&&(f=6,d?H.o+=12-b.offsetHeight/2:H.l+=12-b.offsetWidth/2);A=null;g||(A=10);b=U(a,"card-flip");a=U(a,"card-reverse");Od(c,b,m);Od(c,a,l);A=kk(e,M,c,q,H,null,A);!g&&A&&(A&48&&(m=!m,M^=4,q^=4),A&192&&(l=!l,M^=1,q^=1),Od(c,b,m),Od(c,a,l),kk(e,M,c,q,H));k&&(e=parseInt(c.style.top,10),g=rf(document).o,wh(c,"position","fixed"),wh(c,"top",e-g+"px"));V&&(c.style.right="",e=Jh(c),e.left=e.left||parseInt(c.style.left,10),g=pf(window),c.style.left="",c.style.right=g.width-e.left-e.width+"px");
e=O("yt-uix-card-body-arrow",c);g=O("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!V&&m||V&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=O("yt-uix-card-arrow",c);m=O("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Hh(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.P=function(a){if(a=this.L(a)){var b=N(U(this,"card")+hg(a));b&&(Md(a,U(this,"active")),Md(b,U(this,"card-visible")),jk(b),this.g=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(vf(b.cardMask),b.cardMask=null))}};
function Jk(a){a.g&&a.P(a.g)}
h.Mc=function(a,b){var c=this.L(a);if(c){if(b){var d=Nk(this,c);if(!d)return;b instanceof Lb?d.innerHTML=Nb(b):Bf(d,b)}I(c,U(this,"active"))&&(c=Kk(this,a,c),Lk(this,a,c),ik(c),Mk(c))}};
h.isActive=function(a){return(a=this.L(a))?I(a,U(this,"active")):!1};
function Nk(a,b){var c=b.cardContentNode;if(!c){var d=U(a,"content"),e=U(a,"card-content");(c=(c=a.j(b,"card-id"))?N(c):O(d,b))||(c=document.createElement("div"));var f=c;Md(f,d);J(f,e);b.cardContentNode=c}return c}
function Mk(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Ld(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;var Ok=!L&&!Gb();function Pk(a,b){return Ok&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function Qk(){rk.call(this,"kbd-nav")}
var Rk;w(Qk,rk);ba(Qk);h=Qk.prototype;h.register=function(){W(this,"keydown",this.Ua);sk(this,"yt-uix-kbd-nav-move-in",this.bb);sk(this,"yt-uix-kbd-nav-move-in-to",this.lc);sk(this,"yt-uix-kbd-move-next",this.cb);sk(this,"yt-uix-kbd-nav-move-to",this.na)};
h.unregister=function(){X(this,"keydown",this.Ua);wg(Rk)};
h.Ua=function(a,b,c){var d=c.keyCode;if(a=P(a,U(this)))switch(d){case 13:case 32:this.bb(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Pk(a,"kbdNavMoveOut");!c;){c=P(a.parentElement,U(this));if(!c)break a;c=Pk(c,"kbdNavMoveOut")}c=N(c);this.na(c);E("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&I(a,U(this,"list")))switch(d){case 40:this.cb(b,a);break;case 38:d=document.activeElement==a,a=Sk(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Tk(this,a[b]))}c.preventDefault()}};
h.bb=function(a){var b=Pk(a,"kbdNavMoveIn"),b=N(b);Uk(this,a,b);this.na(b)};
h.lc=function(a){var b;a:{var c=document;try{b=c&&c.activeElement;break a}catch(d){}b=null}Uk(this,b,a);this.na(a)};
h.na=function(a){if(a)if(Gf(a))a.focus();else{var b=Cf(a,function(a){return zf(a)?Gf(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Uk(a,b,c){b&&c&&(J(c,U(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Ok&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
h.cb=function(a,b){var c=document.activeElement==b,d=Sk(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Tk(this,d[c]))};
function Tk(a,b){if(b){var c=Lf(b,"LI");c&&(J(c,U(a,"highlight")),Rk=Q(b,"blur",v(function(a){Md(a,U(this,"highlight"));wg(Rk)},a,c)))}}
function Sk(a){if("UL"!=a.tagName.toUpperCase())return[];a=ib(wf(a),function(a){return"LI"==a.tagName.toUpperCase()});
return ib(jb(a,function(a){return hk(a)?Cf(a,function(a){return zf(a)?Gf(a):!1}):!1}),function(a){return!!a})}
;function Vk(){rk.call(this,"menu");this.f=this.b=null;this.g={};this.A={};this.i=null}
w(Vk,rk);ba(Vk);function Wk(a){var b=Vk.getInstance();if(I(a,U(b)))return a;var c=b.L(a);return c?c:P(a,U(b,"content"))==b.b?b.f:null}
h=Vk.prototype;h.register=function(){W(this,"click",this.Ta);W(this,"mouseenter",this.Wb);sk(this,"page-scroll",this.Zb);sk(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.L(a);Xk(this,a)});
this.i=new D};
h.unregister=function(){X(this,"click",this.Ta);this.f=this.b=null;wg(tb(va(this.g)));this.g={};ua(this.A,function(a){vf(a)},this);
this.A={};ab(this.i);this.i=null;Vk.B.unregister.call(this)};
h.Ta=function(a,b,c){a&&(b=Yk(this,a),!b.disabled&&kg(c.target,b)&&Zk(this,a))};
h.Wb=function(a,b,c){a&&I(a,U(this,"hover"))&&kg(c.target,Yk(this,a))&&Zk(this,a,!0)};
h.Zb=function(){this.b&&this.f&&$k(this,this.f,this.b)};
function $k(a,b,c){var d=al(a,b);if(d){var e=Hh(c),f;if(e instanceof Uc)f=e.height,e=e.width;else throw Error("missing height argument");d.style.width=Gh(e,!0);d.style.height=Gh(f,!0)}c==a.b&&(e=9,f=8,I(b,U(a,"reversed"))&&(e^=1,f^=1),I(b,U(a,"flipped"))&&(e^=4,f^=4),a=new K(0,1),d&&kk(b,e,d,f,a,null,197),kk(b,e,c,f,a,null,197))}
function Zk(a,b,c){bl(a,b)&&!c?Xk(a,b):(cl(a,b),!a.b||kg(b,a.b)?a.ub(b):Xb(a.i,v(a.ub,a,b)))}
h.ub=function(a){if(a){var b=dl(this,a);if(b){hc("yt-uix-menu-before-show",a,b);this.b?kg(a,this.b)||Xk(this,this.f):(this.f=a,this.b=b,I(a,U(this,"sibling-content"))||(vf(b),document.body.appendChild(b)),b.style.minWidth=Yk(this,a).offsetWidth-2+"px");var c=al(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);Md(b,U(this,"content-hidden"));$k(this,a,b);Ld(Yk(this,a),[U(this,"trigger-selected"),"yt-uix-button-toggled"]);E("yt-uix-menu-show",a);el(b);fl(this,a);E("yt-uix-kbd-nav-move-in-to",
b);var d=v(this.Sc,this,a),e=v(this.hc,this,a),c=ia(a).toString();this.g[c]=[Q(b,"click",e),Q(document,"click",d)];I(a,U(this,"indicate-selected"))&&(d=v(this.ic,this,a),this.g[c].push(Q(b,"click",d)));I(a,U(this,"hover"))&&(a=v(this.Xb,this,a),this.g[c].push(Q(document,"mousemove",a)))}}};
h.Xb=function(a,b){var c=xg(b);c&&(kg(c,Yk(this,a))||gl(this,c)||hl(this,a))};
h.Sc=function(a,b){var c=xg(b);if(c){if(gl(this,c)){var d=P(c,U(this,"content")),e=Lf(c,"LI");e&&d&&Af(d,e)&&hc("yt-uix-menu-item-clicked",c);c=P(c,U(this,"close-on-select"));if(!c)return;d=Wk(c)}Xk(this,d||a)}};
function cl(a,b){if(b){var c=P(b,U(a,"content"));c&&C(lf(U(a),c),function(a){!kg(a,b)&&bl(this,a)&&hl(this,a)},a)}}
function Xk(a,b){if(b){var c=[];c.push(b);var d=dl(a,b);d&&(d=lf(U(a),d),d=pb(d),c=c.concat(d),C(c,function(a){bl(this,a)&&hl(this,a)},a))}}
function hl(a,b){if(b){var c=dl(a,b);Nd(Yk(a,b),[U(a,"trigger-selected"),"yt-uix-button-toggled"]);J(c,U(a,"content-hidden"));var d=dl(a,b);d&&nf(d,{"aria-expanded":"false"});(d=al(a,b))&&d.parentNode&&vf(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.i&&a.i.M("ROOT_MENU_REMOVED"));E("yt-uix-menu-hide",b);c=ia(b).toString();wg(a.g[c]);delete a.g[c]}}
h.hc=function(a,b){var c=xg(b);c&&il(this,a,c)};
h.ic=function(a,b){var c=xg(b);if(c){var d=Yk(this,a);if(d&&(c=Lf(c,"LI")))if(c=Jf(c).trim(),d.hasChildNodes()){var e=vk.getInstance();(d=O(U(e,"content"),d))&&Bf(d,c)}else Bf(d,c)}};
function fl(a,b){var c=dl(a,b);if(c){C(c.children,function(a){"LI"==a.tagName&&nf(a,{role:"menuitem"})});
nf(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+ia(c),c.id=d);(c=Yk(a,b))&&nf(c,{"aria-controls":d})}}
function il(a,b,c){var d=dl(a,b);d&&I(b,U(a,"checked"))&&(a=Lf(c,"LI"))&&(a=O("yt-ui-menu-item-checked-hid",a))&&(C(lf("yt-ui-menu-item-checked",d),function(a){Pd(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Pd(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function bl(a,b){var c=dl(a,b);return c?!I(c,U(a,"content-hidden")):!1}
function el(a){C(mf("UL",null,a),function(a){a.tabIndex=0;var b=Qk.getInstance();Ld(a,[U(b),U(b,"list")])})}
function dl(a,b){var c=Xa(b,"menu-content-id");return c&&(c=N(c))?(Ld(c,[U(a,"content"),U(a,"content-external")]),c):b==a.f?a.b:O(U(a,"content"),b)}
function al(a,b){var c=ia(b).toString(),d=a.A[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[U(a,"mask")];C(Kd(b),function(a){e.push(a+"-mask")});
Ld(d,e);a.A[c]=d}return d||null}
function Yk(a,b){return O(U(a,"trigger"),b)}
function gl(a,b){return kg(b,a.b)||kg(b,a.f)}
;function jl(){Ik.call(this,"clickcard");this.b={};this.f={}}
w(jl,Ik);ba(jl);h=jl.prototype;h.register=function(){jl.B.register.call(this);W(this,"click",this.Qa,"target");W(this,"click",this.Pa,"close")};
h.unregister=function(){jl.B.unregister.call(this);X(this,"click",this.Qa,"target");X(this,"click",this.Pa,"close");for(var a in this.b)wg(this.b[a]);this.b={};for(a in this.f)wg(this.f[a]);this.f={}};
h.Qa=function(a,b,c){c.preventDefault();b=Lf(c.target,"button");b&&b.disabled||(a=(b=this.j(a,"card-target"))?kf(b):a,b=this.L(a),this.j(b,"disabled")||(I(b,U(this,"active"))?(this.P(a),Md(b,U(this,"active"))):(this.show(a),J(b,U(this,"active")))))};
h.show=function(a){jl.B.show.call(this,a);var b=this.L(a),c=ia(a).toString();if(!Xa(b,"click-outside-persists")){if(this.b[c])return;var b=Q(document,"click",v(this.Ra,this,a)),d=Q(window,"blur",v(this.Ra,this,a));this.b[c]=[b,d]}a=Q(window,"resize",v(this.Mc,this,a,void 0));this.f[c]=a};
h.P=function(a){jl.B.P.call(this,a);a=ia(a).toString();var b=this.b[a];b&&(wg(b),this.b[a]=null);if(b=this.f[a])wg(b),delete this.f[a]};
h.Ra=function(a,b){var c="yt-uix"+(this.w?"-"+this.w:"")+"-card",d=null;b.target&&(d=P(b.target,c)||P(Wk(b.target),c));(d=d||P(document.activeElement,c)||P(Wk(document.activeElement),c))||this.P(a)};
h.Pa=function(a){(a=P(a,U(this,"card")))&&(a=a.cardTargetNode)&&this.P(a)};function kl(){Ik.call(this,"hovercard")}
w(kl,Ik);ba(kl);h=kl.prototype;h.register=function(){W(this,"mouseenter",this.Ya,"target");W(this,"mouseleave",this.$a,"target");W(this,"mouseenter",this.Za,"card");W(this,"mouseleave",this.ab,"card")};
h.unregister=function(){X(this,"mouseenter",this.Ya,"target");X(this,"mouseleave",this.$a,"target");X(this,"mouseenter",this.Za,"card");X(this,"mouseleave",this.ab,"card")};
h.Ya=function(a){if(ll!=a){ll&&(this.P(ll),ll=null);var b=v(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10),b=y(b,-1<c?c:200);Va(a,"card-timer",b.toString());ll=a;a.alt&&(Va(a,"card-alt",a.alt),a.alt="");a.title&&(Va(a,"card-title",a.title),a.title="")}};
h.$a=function(a){var b=parseInt(this.j(a,"card-timer"),10);Ra(b);this.L(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;y(v(this.$b,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
h.$b=function(a){this.L(a).isCardHidable&&(this.P(a),ll=null)};
h.Za=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.ab=function(a){a&&this.P(a.cardTargetNode)};
var ll=null;function ml(a,b,c,d,e,f){this.b=a;this.D=null;this.g=O("yt-dialog-fg",this.b)||this.b;if(a=O("yt-dialog-title",this.g)){var g="yt-dialog-title-"+ia(this.g);a.setAttribute("id",g);this.g.setAttribute("aria-labelledby",g)}this.g.setAttribute("tabindex","-1");this.K=O("yt-dialog-focus-trap",this.b);this.N=!1;this.i=new D;this.F=[];this.F.push(ug(this.b,v(this.mc,this),"yt-dialog-dismiss"));this.F.push(Q(this.K,"focus",v(this.Sb,this),!0));nl(this);this.S=b;this.V=c;this.T=d;this.H=e;this.W=f;this.A=
this.w=null}
var ol={LOADING:"loading",Vc:"content",bd:"working"};function pl(a,b){a.C()||a.i.subscribe("post-all",b)}
function nl(a){a=O("yt-dialog-fg-content",a.b);var b=[];ua(ol,function(a){b.push("yt-dialog-show-"+a)});
Nd(a,b);J(a,"yt-dialog-show-content")}
h=ml.prototype;
h.show=function(){if(!this.C()){this.D=document.activeElement;if(!this.T){this.f||(this.f=N("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=pf(b).height,qf(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,e=
a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.f.style.height=a+"px";ik(this.f)}this.Va();a=ql(this);rl(a);this.w=Q(document,"keydown",v(this.gc,this));a=this.b;d=ec("player-added",this.Va,this);Va(a,"player-ready-pubsub-key",d);this.V&&(this.A=Q(document,"click",v(this.Bc,this)));ik(this.b);this.g.setAttribute("tabindex","0");sl(this);this.H||J(document.body,"yt-dialog-active");wk(vk.getInstance());Jk(jl.getInstance());Jk(kl.getInstance());E("yt-ui-dialog-show-complete",this)}};
function tl(){return kb(lf("yt-dialog"),function(a){return hk(a)})}
h.Va=function(){if(!this.W){var a=this.b;Od(document.body,"hide-players",!0);a&&Od(a,"preserve-players",!0)}};
function ql(a){var b=mf("iframe",null,a.b);C(b,function(a){var b=Xa(a,"onload");b&&(b=t(b))&&Q(a,"load",b);if(b=Xa(a,"src"))a.src=b},a);
return pb(b)}
function rl(a){C(document.getElementsByTagName("iframe"),function(b){-1==hb(a,b)&&J(b,"iframe-hid")})}
function ul(){C(lf("iframe-hid"),function(a){Md(a,"iframe-hid")})}
h.mc=function(a){a=a.currentTarget;a.disabled||(a=Xa(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.C()){this.i.M("pre-all");this.i.M("pre-"+a);jk(this.b);Jk(jl.getInstance());Jk(kl.getInstance());this.g.setAttribute("tabindex","-1");tl()||(jk(this.f),this.H||Md(document.body,"yt-dialog-active"),ng(),ul());this.w&&(wg(this.w),this.w=null);this.A&&(wg(this.A),this.A=null);var b=this.b;if(b){var c=Xa(b,"player-ready-pubsub-key");c&&(gc(c),Ya(b,"player-ready-pubsub-key"))}this.i.M("post-all");E("yt-ui-dialog-hide-complete",this);"cancel"==a&&E("yt-ui-dialog-cancelled",
this);this.i&&this.i.M("post-"+a);this.D&&this.D.focus()}};
h.setTitle=function(a){Bf(O("yt-dialog-title",this.b),a)};
h.gc=function(a){y(v(function(){this.S||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&I(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.Bc=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.C=function(){return this.N};
h.dispose=function(){hk(this.b)&&this.dismiss("dispose");wg(this.F);this.F.length=0;y(v(function(){this.D=null},this),0);
this.K=this.g=null;this.i.dispose();this.i=null;this.N=!0};
h.Sb=function(a){a.stopPropagation();sl(this)};
function sl(a){y(v(function(){this.g&&this.g.focus()},a),0)}
r("yt.ui.Dialog",ml,void 0);function vl(){rk.call(this,"overlay");this.i=this.f=this.g=this.b=null}
w(vl,rk);ba(vl);h=vl.prototype;h.register=function(){W(this,"click",this.Ca,"target");W(this,"click",this.vb,"close");wl(this)};
h.unregister=function(){vl.B.unregister.call(this);X(this,"click",this.Ca,"target");X(this,"click",this.vb,"close");this.i&&(gc(this.i),this.i=null);this.f&&(wg(this.f),this.f=null)};
h.Ca=function(a){if(!this.b||!hk(this.b.b)){var b=this.L(a);a=xl(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.j(b,"disable-shortcuts")||!1,d=!!this.j(b,"disable-outside-click-dismiss")||!1;this.b=new ml(a,c);this.g=b;var e=O("yt-dialog-fg",a);if(e){var f=this.j(b,"overlay-class")||"",g=this.j(b,"overlay-style")||"default",k=this.j(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(U(this,g));f.push(U(this,k));Ld(e,f)}this.b.show();E("yt-uix-kbd-nav-move-to",e||a);wl(this);c||
d||(c=v(function(a){I(a.target,"yt-dialog-base")&&yl(this)},this),this.f=Q(O("yt-dialog-base",a),"click",c));
this.Z(b,"overlay-shown");E("yt-uix-overlay-shown",b)}}};
function wl(a){a.i||(a.i=ec("yt-uix-overlay-hide",zl));a.b&&pl(a.b,function(){var a=vl.getInstance();a.g=null;a.b.dispose();a.b=null})}
function yl(a){if(a.b){var b=a.g;a.b.dismiss("overlayhide");b&&a.Z(b,"overlay-hidden");a.g=null;a.f&&(wg(a.f),a.f=null);a.b=null}}
function xl(a,b){var c;if(a)if(c=O("yt-dialog",a)){var d=N("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=P(b,"yt-dialog"));return c}
function Al(){var a=vl.getInstance();if(a.g)a=O("yt-dialog-fg-content",a.g.overlayContentNode);else a:{if(a=lf("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=P(a[b],"yt-dialog");if(hk(c)){a=a[b];break a}}a=null}return a}
h.vb=function(a){a&&a.disabled||E("yt-uix-overlay-hide")};
function zl(){yl(vl.getInstance())}
h.show=function(a){this.Ca(a)};var Bl={},Cl=[];function Dl(a){a=P(a,"yt-uix-button-subscription-container");return O("yt-dialog",O("unsubscribe-confirmation-overlay-container",a))}
function El(a,b){wg(Cl);Cl.length=0;Bl[b]||(Bl[b]=Dl(a));vl.getInstance().show(Bl[b]);var c=Al();return new Nf(function(a){Cl.push(ug(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function Fl(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Dd(c,"mode",b));c=Dd("/signin?context=popup","next",c);c=Dd(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=ec("LOGGED_IN",function(b){gc(x("LOGGED_IN_PUBSUB_KEY",void 0));fb("LOGGED_IN",!0);a(b)});
fb("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
r("yt.pubsub.publish",E,void 0);function Gl(){var a=gb("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!gb("SESSION_INDEX")&&!gb("LOGGED_IN"))}
;function Hl(){rk.call(this,"tooltip");this.b=0;this.f={}}
w(Hl,rk);ba(Hl);h=Hl.prototype;h.register=function(){W(this,"mouseover",this.oa);W(this,"mouseout",this.X);W(this,"focus",this.Sa);W(this,"blur",this.Na);W(this,"click",this.X);W(this,"touchstart",this.pb);W(this,"touchend",this.qa);W(this,"touchcancel",this.qa)};
h.unregister=function(){X(this,"mouseover",this.oa);X(this,"mouseout",this.X);X(this,"focus",this.Sa);X(this,"blur",this.Na);X(this,"click",this.X);X(this,"touchstart",this.pb);X(this,"touchend",this.qa);X(this,"touchcancel",this.qa);this.dispose();Hl.B.unregister.call(this)};
h.dispose=function(){for(var a in this.f)this.X(this.f[a]);this.f={}};
h.oa=function(a){if(!(this.b&&1E3>pa()-this.b)){var b=parseInt(this.j(a,"tooltip-hide-timer"),10);b&&(Ya(a,"tooltip-hide-timer"),Ra(b));var b=v(function(){Il(this,a);Ya(a,"tooltip-show-timer")},this),c=parseInt(this.j(a,"tooltip-show-delay"),10)||0,b=y(b,c);
Va(a,"tooltip-show-timer",b.toString());a.title&&(uk(a,Jl(this,a)),a.title="");b=ia(a).toString();this.f[b]=a}};
h.X=function(a){var b=parseInt(this.j(a,"tooltip-show-timer"),10);b&&(Ra(b),Ya(a,"tooltip-show-timer"));b=v(function(){if(a){var b=N(Kl(this,a));b&&(Ll(b),vf(b),Ya(a,"content-id"));b=N(Kl(this,a,"arialabel"));vf(b)}Ya(a,"tooltip-hide-timer")},this);
b=y(b,50);Va(a,"tooltip-hide-timer",b.toString());if(b=this.j(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.f[b]};
h.Sa=function(a){this.b=0;this.oa(a)};
h.Na=function(a){this.b=0;this.X(a)};
h.pb=function(a,b,c){c.changedTouches&&(this.b=0,(a=pk(b,U(this),c.changedTouches[0].target))&&this.oa(a))};
h.qa=function(a,b,c){c.changedTouches&&(this.b=pa(),(a=pk(b,U(this),c.changedTouches[0].target))&&this.X(a))};
function Ml(a,b,c){uk(b,c);a=a.j(b,"content-id");(a=N(a))&&Bf(a,c)}
function Jl(a,b){return a.j(b,"tooltip-text")||b.title}
function Il(a,b){if(b){var c=Jl(a,b);if(c){var d=N(Kl(a,b));if(!d){d=document.createElement("div");d.id=Kl(a,b);d.className=U(a,"tip");var e=document.createElement("div");e.className=U(a,"tip-body");var f=document.createElement("div");f.className=U(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=U(a,"tip-content");var k=Nl(a,b),l=Kl(a,b,"content");g.id=l;Va(b,"content-id",l);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var m=Jf(b),l=Kl(a,b,"arialabel"),f=document.createElement("div");J(f,U(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Bf(f,m);b.setAttribute("aria-labelledby",l);l=Rh()||document.body;l.appendChild(f);l.appendChild(d);Ml(a,b,c);(c=parseInt(a.j(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",J(g,U(a,"normal-wrap")));g=I(b,U(a,"reverse"));Ol(a,b,d,e,k,g)||Ol(a,b,d,e,k,!g);var q=U(a,"tip-visible");
y(function(){J(d,q)},0)}}}}
function Ol(a,b,c,d,e,f){Od(c,U(a,"tip-reverse"),f);var g=0;f&&(g=1);var k=Hh(b);f=new K((k.width-10)/2,f?k.height:0);var l=Eh(b);mk(new K(l.l+f.l,l.o+f.o),c,g);f=pf(window);var m;1==c.nodeType?m=Fh(c):(c=c.changedTouches?c.changedTouches[0]:c,m=new K(c.clientX,c.clientY));c=Hh(d);var q=Math.floor(c.width/2),g=!!(f.height<m.o+k.height),k=!!(m.o<k.height),l=!!(m.l<q);f=!!(f.width<m.l+q);m=(c.width+3)/-2- -5;a=a.j(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||k)}
function Kl(a,b,c){a=U(a)+hg(b);c&&(a+="-"+c);return a}
function Nl(a,b){var c=null;He&&I(b,U(a,"masked"))&&((c=N("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),ik(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=U(a,"tip-mask")));return c}
function Ll(a){var b=N("yt-uix-tooltip-shared-mask"),c=b&&Mf(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),jk(b),document.body.appendChild(b))}
;function Pl(){rk.call(this,"subscription-button")}
w(Pl,rk);ba(Pl);Pl.prototype.register=function(){W(this,"click",this.Fa);tk(this,Sj,this.gb);tk(this,Tj,this.fb);tk(this,Uj,this.xc);tk(this,Xj,this.gb);tk(this,Yj,this.fb);tk(this,Zj,this.zc);tk(this,bk,this.oc);tk(this,ck,this.nc)};
Pl.prototype.unregister=function(){X(this,"click",this.Fa);Pl.B.unregister.call(this)};
var Ql={Ga:"hover-enabled",yb:"yt-uix-button-subscribe",zb:"yt-uix-button-subscribed",Tc:"ypc-enabled",Ab:"yt-uix-button-subscription-container",Bb:"yt-subscription-button-disabled-mask-container"},Rl={Uc:"channel-external-id",Cb:"subscriber-count-show-when-subscribed",Db:"subscriber-count-tooltip",Eb:"subscriber-count-title",Wc:"href",Xc:"insecure",Ha:"is-subscribed",Yc:"parent-url",Zc:"clicktracking",Fb:"show-unsub-confirm-dialog",$c:"show-unsub-confirm-time-frame",Gb:"style-type",Ia:"subscribed-timestamp",
Ja:"subscription-id",ad:"target",Ib:"ypc-enabled"};h=Pl.prototype;h.Fa=function(a){var b=this.j(a,"href"),c=this.j(a,"insecure"),d=Gl(),c=c&&!0;if(b)a=this.j(a,"target")||"_self",window.open(b,a);else if(!c)if(d){var b=this.j(a,"channel-external-id"),d=this.j(a,"clicktracking"),c=Sl(this,a),e=this.j(a,"parent-url");if(this.j(a,"is-subscribed")){var f=this.j(a,"subscription-id"),g=new Oj(b,f,c,a,d,e);Tl(this,a)?El(a,b).then(function(){T(Wj,g)}):T(Wj,g)}else T(Rj,new Mj(b,c,d,e))}else Ul(this,a)};
h.gb=function(a){this.Y(a.b,this.nb,!0)};
h.fb=function(a){this.Y(a.b,this.nb,!1)};
h.xc=function(a){this.Y(a.b,this.ob,!0,a.subscriptionId)};
h.zc=function(a){this.Y(a.b,this.ob,!1)};
h.oc=function(a){this.Y(a.b,this.Qb)};
h.nc=function(a){this.Y(a.b,this.Ob)};
h.ob=function(a,b,c){b?(Va(a,Rl.Ha,"true"),c&&Va(a,Rl.Ja,c),this.j(a,Rl.Fb)&&(b=new Ij,Va(a,Rl.Ia,(b.getTime()/1E3).toString()))):(Ya(a,Rl.Ha),Ya(a,Rl.Ia),Ya(a,Rl.Ja));Vl(this,a)};
function Sl(a,b){if(!a.j(b,"ypc-enabled"))return null;var c=a.j(b,"ypc-item-type"),d=a.j(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
h.nb=function(a,b){var c=P(a,Ql.Ab);Od(c,Ql.Bb,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Vl(a,b){var c=a.j(b,Rl.Gb),d=!!a.j(b,"is-subscribed"),c="-"+c,e=Ql.zb+c;Od(b,Ql.yb+c,!d);Od(b,e,d);a.j(b,Rl.Db)&&!a.j(b,Rl.Cb)&&(c=U(Hl.getInstance()),Od(b,c,!d),b.title=d?"":a.j(b,Rl.Eb));d?y(function(){J(b,Ql.Ga)},1E3):Md(b,Ql.Ga)}
h.Qb=function(a){var b=!!this.j(a,"ypc-item-type"),c=!!this.j(a,"ypc-item-id");!this.j(a,"ypc-enabled")&&b&&c&&(J(a,"ypc-enabled"),Va(a,Rl.Ib,"true"))};
h.Ob=function(a){this.j(a,"ypc-enabled")&&(Md(a,"ypc-enabled"),Ya(a,"ypc-enabled"))};
function Wl(a,b){return ib(lf(U(a)),function(a){return b==this.j(a,"channel-external-id")},a)}
h.Kb=function(a,b,c){var d=sb(arguments,2);C(a,function(a){b.apply(this,ob(a,d))},this)};
h.Y=function(a,b,c){var d=Wl(this,a);this.Kb.apply(this,ob([d],sb(arguments,1)))};
function Ul(a,b){var c=v(function(a){a.discoverable_subscriptions&&fb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Fa(b)},a);
Fl(c,"subscribe")}
function Tl(a,b){if(!a.j(b,"show-unsub-confirm-dialog"))return!1;var c=a.j(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.j(b,"subscribed-timestamp"),10),(new Ij).getTime()<1E3*(c+600))?!0:!1}
;var Xl=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};r("yt.uix.widgets_",Xl,void 0);function Yl(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Zl(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return $l(a)}
function $l(a,b,c){if(ha(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function am(a,b,c,d){if(ha(a)&&!da(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function bm(a){var b=a.video_id||a.videoId;if(u(b)){var c=Qg()||{},d=Qg()||{};p(void 0)?d[b]=void 0:delete d[b];var e=pa()+3E5,f=Sg;if(f&&window.JSON){u(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;var cm=null,dm=[];function em(a){return{externalChannelId:a.externalChannelId,fc:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function fm(a){a&&a.externalChannelId&&gm(em(a))}
function gm(a){Gl()?(T(Rj,new Mj(a.externalChannelId,a.fc?{itemType:"U",itemId:a.externalChannelId}:null)),a=Cd({event:"subscribe",source:a.source}),Zh("/gen_204?"+a,void 0)):hm(a)}
function hm(a){Fl(function(b){b.subscription_ajax&&gm(a)},null)}
function im(a){a=em(a);T(Wj,new Oj(a.externalChannelId,a.subscriptionId,null));a=Cd({event:"unsubscribe",source:a.source});Zh("/gen_204?"+a,void 0)}
function jm(a){cm&&cm.channelSubscribed(a.b,a.subscriptionId)}
function km(a){cm&&cm.channelUnsubscribed(a.b)}
;function lm(a){z.call(this);this.f=a;this.f.subscribe("command",this.kb,this);this.g={};this.i=!1}
w(lm,z);h=lm.prototype;h.start=function(){this.i||this.C()||(this.i=!0,mm(this.f,"RECEIVING"))};
h.kb=function(a,b){if(this.i&&!this.C()){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.g))){var d=v(this.Gc,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&nm(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=om(a,b||{}),c=this.b[a].apply(this.b,c),(c=pm(a,c))&&this.i&&!this.C()&&mm(this.f,a,c))}}};
h.Gc=function(a,b){this.i&&!this.C()&&mm(this.f,a,this.wa(a,b))};
h.wa=function(a,b){if(null!=b)return{value:b}};
function nm(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
h.G=function(){var a=this.f;a.C()||Yb(a.b,"command",this.kb,this);this.f=null;for(var b in this.g)nm(this,b);lm.B.G.call(this)};new D;function qm(a,b,c){th.call(this);this.f=a;this.g=b;this.w=c}
w(qm,th);function mm(a,b,c){if(!a.C()){var d=a.f;d.C()||a.g!=d.b||(a={id:a.w,command:b},c&&(a.data=c),d.b.postMessage(Oc(a),d.g))}}
qm.prototype.G=function(){this.g=this.f=null;qm.B.G.call(this)};function rm(){var a=this.f=new Qh(!!x("WIDGET_ID_ENFORCE")),b=v(this.Dc,this);a.w=b;a.A=null;this.f.channel="widget";if(a=x("WIDGET_ID"))this.f.b=a;this.i=[];this.A=!1;this.w={}}
h=rm.prototype;h.Dc=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.w[c]||"onReady"==c||(this.addEventListener(c,sm(this,c)),this.w[c]=!0)}else this.wb(a,b)};
h.wb=function(){};
function sm(a,b){return v(function(a){this.sendMessage(b,a)},a)}
h.addEventListener=function(){};
h.Rb=function(){this.A=!0;this.sendMessage("initialDelivery",this.xa());this.sendMessage("onReady");C(this.i,this.mb,this);this.i=[]};
h.xa=function(){return null};
function tm(a,b){a.sendMessage("infoDelivery",b)}
h.mb=function(a){this.A?this.f.sendMessage(a):this.i.push(a)};
h.sendMessage=function(a,b){this.mb({event:a,info:void 0==b?null:b})};
h.dispose=function(){this.f=null};function um(a,b,c){z.call(this);this.b=a;this.g=c;this.i=Q(window,"message",v(this.w,this));this.f=new qm(this,a,b);$a(this,na(ab,this.f))}
w(um,z);um.prototype.w=function(a){var b;if(b=!this.C())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,u(a))){try{a=Mc(a)}catch(d){return}a.command&&(b=this.f,b.C()||b.i("command",a.command,a.data))}};
um.prototype.G=function(){wg(this.i);this.b=null;um.B.G.call(this)};function vm(a,b){lm.call(this,b);this.b=a;this.start()}
w(vm,lm);vm.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
vm.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function om(a,b){switch(a){case "loadVideoById":return b=$l(b),bm(b),[b];case "cueVideoById":return b=$l(b),bm(b),[b];case "loadVideoByPlayerVars":return bm(b),[b];case "cueVideoByPlayerVars":return bm(b),[b];case "loadPlaylist":return b=am(b),bm(b),[b];case "cuePlaylist":return b=am(b),bm(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function pm(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
vm.prototype.wa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return vm.B.wa.call(this,a,b)};
vm.prototype.G=function(){vm.B.G.call(this);delete this.b};function wm(a){rm.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.wc,this));this.addEventListener("onVideoProgress",v(this.Kc,this));this.addEventListener("onVolumeChange",v(this.Lc,this));this.addEventListener("onApiChange",v(this.Fc,this));this.addEventListener("onPlaybackQualityChange",v(this.Hc,this));this.addEventListener("onPlaybackRateChange",v(this.Ic,this));this.addEventListener("onStateChange",v(this.Jc,this))}
w(wm,rm);h=wm.prototype;h.wb=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Yl(a)){var c;c=b;if(ha(c[0])&&!da(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=$l.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Zl.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=am.apply(window,c)}c=d}bm(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Yl(a)&&tm(this,this.xa())}};
h.wc=function(){var a=v(this.Rb,this);this.f.f=a};
h.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
h.xa=function(){if(!this.b)return null;var a=this.b.getApiInterface();nb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var k=this.b[e]();b[f]=k}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=pa()/1E3;return b};
h.Jc=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:pa()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());tm(this,a)};
h.Hc=function(a){tm(this,{playbackQuality:a})};
h.Ic=function(a){tm(this,{playbackRate:a})};
h.Fc=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
h.Lc=function(){tm(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
h.Kc=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:pa()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());tm(this,a)};
h.dispose=function(){wm.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};var xm=document,Z=window;var ym=!1,zm="";function Am(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(ym=!0,a.description)){zm=Am(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){ym=!0;zm="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],ym=!(!a||!a.enabledPlugin))){zm=Am(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");ym=!0;zm=Am(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");ym=!0;zm="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),ym=!0,zm=Am(b.GetVariable("$version"))}catch(c){}})();
var Bm=ym,Cm=zm;(function(){var a;return He?(a=/Windows NT ([0-9.]+)/,(a=a.exec(cb))?a[1]:"0"):Ge?(a=/10[_.][0-9_.]+/,(a=a.exec(cb))?a[0].replace(/_/g,"."):"10"):Ie?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(cb))?a[1]:""):Je||Ke||Le?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(cb))?a[1].replace(/_/g,"."):""):""})();function Dm(a){return(a=a.exec(cb))?a[1]:""}
(function(){if(af)return Dm(/Firefox\/([0-9.]+)/);if(L||Ce||Be)return Re;if(ef)return Dm(/Chrome\/([0-9.]+)/);if(ff&&!(rd()||B("iPad")||B("iPod")))return Dm(/Version\/([0-9.]+)/);if(bf||cf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(cb);if(a)return a[1]+"."+a[2]}else if(df)return(a=Dm(/Android\s+([0-9.]+)/))?a:Dm(/Version\/([0-9.]+)/);return""})();(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
n.addEventListener("test",null,b)}catch(c){}return a})();var Em=(new Date).getTime();function Fm(a){sa.call(this,a.message||a.description||a.name);this.b=a instanceof Vf}
w(Fm,sa);Fm.prototype.name="BiscottiError";function Gm(a,b){this.f=a;this.b=b}
Gm.prototype.then=function(a,b,c){try{if(p(this.f))return a?Sf(a.call(c,this.f)):Sf(this.f);if(p(this.b)){if(!b)return Tf(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Tf(this.b):Sf(d)}throw Error("Invalid Result_ state");}catch(e){return Tf(e)}};
Yc(Gm);var bi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Hm=null;function Im(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Jm(""),Hm=new Gm(""),"";a=JSON.parse(a.substr(4)).id;Jm(a);Hm=new Gm(a);Km(18E5,2);return a}
function Lm(a,b){var c=new Fm(b);Jm("");Hm=new Gm(void 0,c);0<a&&Km(12E4,a-1);throw c;}
function Km(a,b){y(function(){var a=v(Lm,n,b),a=ai().then(Im,a);Uf(a,null,aa,void 0)},a)}
function Jm(a){r("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Mm(){}
function Nm(){try{var a;try{var b=t("yt.www.ads.biscotti.getId_"),c;if(b)c=b();else{if(!Hm){var d=v(Lm,n,2);Hm=ai().then(Im,d)}c=Hm}a=c}catch(e){a=Tf(e)}a.then(Om,Mm);y(Nm,18E5)}catch(e){Sa(e)}}
function Om(a){var b;a:{try{b=window.top.location.href}catch(q){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Em,flash:Cm||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=Z.history.length}catch(q){c=0}b.u_his=c;b.u_java=!!Z.navigator&&"unknown"!==typeof Z.navigator.javaEnabled&&!!Z.navigator.javaEnabled&&Z.navigator.javaEnabled();Z.screen&&(b.u_h=Z.screen.height,b.u_w=Z.screen.width,b.u_ah=Z.screen.availHeight,b.u_aw=Z.screen.availWidth,b.u_cd=Z.screen.colorDepth);
Z.navigator&&Z.navigator.plugins&&(b.u_nplug=Z.navigator.plugins.length);Z.navigator&&Z.navigator.mimeTypes&&(b.u_nmime=Z.navigator.mimeTypes.length);b.bid=a;b.ca_type=Bm?"flash":"image";if(kd("enable_server_side_search_pyv")||kd("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(q){}try{var f=a.outerWidth,g=a.outerHeight}catch(q){}try{var k=a.innerWidth,l=a.innerHeight}catch(q){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?
a.screen.availTop:void 0,f,g,k,l];var m;e=window.top||Z;try{m=e.document&&!e.document.body?new Uc(-1,-1):pf(e||window).round()}catch(q){m=new Uc(-12245933,-12245933)}e=0;window.SVGElement&&document.createElementNS&&(e|=1);oa(b,{bc:e,bih:m.height,biw:m.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[xm.webkitVisibilityState||xm.mozVisibilityState||xm.visibilityState||""]||0,wgl:!!Z.WebGLRenderingContext})}Jg("//www.youtube.com/ad_data_204",{ac:!1,J:b})}
;function Pm(){this.b=x("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Xc.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Qm[d]=c.toString())}}}
ba(Pm);var Qm=t("yt.prefs.UserPrefs.prefs_")||{};r("yt.prefs.UserPrefs.prefs_",Qm,void 0);function Rm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Sm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Tm(a){a=void 0!==Qm[a]?Qm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Pm.prototype.get=function(a,b){Sm(a);Rm(a);var c=void 0!==Qm[a]?Qm[a].toString():null;return null!=c?c:b?b:""};
Pm.prototype.set=function(a,b){Sm(a);Rm(a);if(null==b)throw Error("ExpectedNotNull");Qm[a]=b.toString()};
Pm.prototype.remove=function(a){Sm(a);Rm(a);delete Qm[a]};
Pm.prototype.clear=function(){Qm={}};function Um(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&Zh(c.data.follow_on_url)}}
;function Vm(a){R.call(this,1,arguments);this.va=a}
w(Vm,R);function Wm(a,b){R.call(this,2,arguments);this.f=a;this.b=b}
w(Wm,R);function Xm(a,b,c,d){R.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(Xm,R);function Ym(a,b){R.call(this,1,arguments);this.f=a;this.b=b||null}
w(Ym,R);function Zm(a){R.call(this,1,arguments)}
w(Zm,R);var $m=new S("ypc-core-load",Vm),an=new S("ypc-guide-sync-success",Wm),bn=new S("ypc-purchase-success",Xm),cn=new S("ypc-subscription-cancel",Zm),dn=new S("ypc-subscription-cancel-success",Ym),en=new S("ypc-init-subscription",Zm);var fn=!1,gn=[],hn=[];function jn(a){a.b?fn?T(Vj,a):T($m,new Vm(function(){T(en,new Zm(a.b))})):kn(a.f,a.i,a.g,a.source)}
function ln(a){a.b?fn?T(ak,a):T($m,new Vm(function(){T(cn,new Zm(a.b))})):mn(a.f,a.subscriptionId,a.i,a.g,a.source)}
function nn(a){on(pb(a.b))}
function pn(a){qn(pb(a.b))}
function rn(a){sn(a.g,a.f,a.b)}
function tn(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(Uj,new Nj(b,c,a.b.channelInfo))}
function un(a){var b=a.b;ua(a.f,function(a,d){T(Uj,new Nj(d,a,b[d]))})}
function vn(a){T(Zj,new Kj(a.f.itemId));a.b&&a.b.length&&(wn(a.b,Zj),wn(a.b,bk))}
function kn(a,b,c,d){var e=new Kj(a);T(Sj,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=gb("PLAYBACK_ID"))&&(c.plid=d);(d=gb("EVENT_ID"))&&(c.ei=d);b&&xn(b,c);Kg("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Da:f,J:c,O:function(b,c){var d=c.response;T(Uj,new Nj(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&E("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Um(d.actions)},
Ba:function(){T(Tj,e)}})}
function mn(a,b,c,d,e){var f=new Kj(a);T(Xj,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=gb("PLAYBACK_ID"))&&(d.plid=a);(a=gb("EVENT_ID"))&&(d.ei=a);c&&xn(c,d);Kg("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Da:g,J:d,O:function(a,b){var c=b.response;T(Zj,f);c.actions&&Um(c.actions)},
Ba:function(){T(Yj,f)}})}
function sn(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Lj(a,b,c);Kg("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",J:d,onError:function(){T(fk,e)},
O:function(){T(ek,e)}})}}
function on(a){if(a.length){var b=rb(a,0,40);T("subscription-batch-subscribe-loading");wn(b,Sj);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");wn(b,Tj)};
Kg("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",J:c,O:function(c,f){d();var e=f.response,k=e.id;if(da(k)&&k.length==b.length){var l=e.channel_info_map;C(k,function(a,c){var d=b[c];T(Uj,new Nj(d,a,l[d]))});
a.length?on(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function qn(a){if(a.length){var b=rb(a,0,40);T("subscription-batch-unsubscribe-loading");wn(b,Xj);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");wn(b,Yj)};
Kg("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",J:c,O:function(){d();wn(b,Zj);a.length&&qn(a)},
onError:function(){d()}})}}
function wn(a,b){C(a,function(a){T(b,new Kj(a))})}
function xn(a,b){var c=Sd(a);oa(b,c)}
;var yn=null,zn=null,An=null,Bn={};function Cn(a){ah(a.payload_name,a.payload,kd("enable_youtubei_innertube")?Vg:og,void 0)}
function Dn(a){var b=a.id;a=a.ve_type;var c=fd++;a=new ed(void 0,a,c);Bn[b]=a;b=hh();c=gh();b&&c&&bh(b,c,a)}
function En(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(fb("client-screen-nonce",b),fb("ROOT_VE_TYPE",a),a=gh()))for(var c in Bn)bh(b,a,Bn[c])}
function Fn(a){Bn[a.id]=new ed(a.tracking_params)}
function Gn(a){var b=hh();a=Bn[a.id];b&&a&&ch(dh(),{click:{csn:b,visualElement:gd(a)}},void 0)}
function Hn(a){a=a.ids;var b=hh();if(b){for(var c=[],d=0;d<a.length;d++){var e=Bn[a[d]];e&&c.push(e)}c.length&&eh(b,c)}}
function In(){var a=yn;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;r("yt.setConfig",fb,void 0);r("yt.setMsg",function(a){Pa(Na,arguments)},void 0);
r("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||x("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||x("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=$g)){e=a.stacktrace;d=a.columnNumber;var f=t("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,k,l=!1;try{g=a.lineNumber||a.line||"Not available"}catch(M){g="Not available",l=!0}try{k=a.fileName||a.filename||a.sourceURL||
n.$googDebugFname||f}catch(M){k="Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(Zg[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Da:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},J:{url:x("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.J.stack=e);for(var m in c)b.J["client."+m]=c[m];if(m=x("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var q in m)b.J[q]=m[q];Kg("/error_204",b);Zg[a.message]=!0;$g++}}},void 0);
r("writeEmbed",function(){var a=x("PLAYER_CONFIG",void 0);"1"!=a.privembed&&Nm();"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=gb("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);gb("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&bm(a.args);yn=a=sj("player",a);a.addEventListener("onScreenChanged",En);a.addEventListener("onLogClientVeCreated",Dn);a.addEventListener("onLogServerVeCreated",Fn);a.addEventListener("onLogToGel",
Cn);a.addEventListener("onLogVeClicked",Gn);a.addEventListener("onLogVesShown",Hn);a.addEventListener("onReady",In);b=gb("POST_MESSAGE_ID","player");gb("ENABLE_JS_API")?An=new wm(a):gb("ENABLE_POST_API")&&u(b)&&u(c)&&(zn=new um(window.parent,b,c),An=new vm(a,zn.f));gb("BG_P")&&(gb("BG_I")||gb("BG_IU"))&&tc();yc();cm=a;cm.addEventListener("SUBSCRIBE",fm);cm.addEventListener("UNSUBSCRIBE",im);dm.push(Gi(Uj,jm),Gi(Zj,km))},void 0);
r("yt.www.watch.ads.restrictioncookie.spr",function(a){Zh(a+"mac_204?action_fcts=1");return!0},void 0);
var Jn=Qa(function(){Oi("ol");fn=!0;hn.push(Gi(Rj,jn),Gi(Wj,ln));fn||hn.push(Gi(Vj,jn),Gi(ak,ln),Gi(Pj,nn),Gi(Qj,pn),Gi(dk,rn),Gi(bn,tn),Gi(dn,vn),Gi(an,un));var a=Pm.getInstance(),b=1<window.devicePixelRatio;if(!!((Tm("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Tm(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Qm[c]:(b=d.toString(16),Qm[c]=b.toString());var a=a.b,c=[],e;for(e in Qm)c.push(e+"="+escape(Qm[e]));Xc.set(""+a,c.join("&"),63072E3,"/","youtube.com")}}),
Kn=Qa(function(){var a=yn;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();gb("PL_ATT")&&(sc=null);for(var a=0,b=wc.length;a<b;a++){var c=wc[a];if(!isNaN(c)){var d=t("yt.scheduler.instance.cancelJob");d?d(c):Ra(c)}}wc.length=0;a=oc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))jc(a),b.parentNode.removeChild(b);xc=!1;fb("DCLKSTAT",0);gc(gn);gn.length=0;Hi(hn);hn.length=0;fn=!1;cm&&(cm.removeEventListener("SUBSCRIBE",gm),cm.removeEventListener("UNSUBSCRIBE",im));cm=null;Hi(dm);dm.length=
0;bb(An,zn);if(a=yn)a.removeEventListener("onScreenChanged",En),a.removeEventListener("onLogClientVeCreated",Dn),a.removeEventListener("onLogServerVeCreated",Fn),a.removeEventListener("onLogToGel",Cn),a.removeEventListener("onLogVeClicked",Gn),a.removeEventListener("onLogVesShown",Hn),a.removeEventListener("onReady",In),a.destroy();Bn={}});
window.addEventListener?(window.addEventListener("load",Jn),window.addEventListener("unload",Kn)):window.attachEvent&&(window.attachEvent("onload",Jn),window.attachEvent("onunload",Kn));var Ln=Pl.getInstance(),Mn=U(Ln);Mn in Xl||(Ln.register(),sk(Ln,"yt-uix-init-"+Mn,Ln.init),sk(Ln,"yt-uix-dispose-"+Mn,Ln.dispose),Xl[Mn]=Ln);}).call(this);
