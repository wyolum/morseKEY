(function(g){var window=this;var g9=function(a,b){g.V(a).experiments.g("player_gel_logging")&&a.app.Z.oc("onLogToGel",{payload_name:"thumbnailLoaded",payload:b})},h9=function(a,b,c,d){var e=b.Qb();
g.Qd(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.Ch();d=b.bd(c,d?d:"mqdefault.jpg");var k=b instanceof g.Rx?g.zy(b.lengthSeconds):null,l=!!f,f=l&&"RD"==g.my(f).type;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.Q("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.pk(c),is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.py&&(c.playlist_length=b.B);a.update(c)},i9=function(a){var b=
g.V(a),c=b.experiments.g("video_wall_moving_thumbnails_hover"),c=b.experiments.g("video_wall_moving_thumbnails_autoplay")||c;
this.C=b.C&&!b.H;var d=g.Th||g.qc?{style:"will-change: opacity"}:null,e=["ytp-videowall-still"];b.experiments.g("video_wall_show_text")&&e.push("ytp-show-text");b={K:"img",Y:"ytp-videowall-moving-thumbnail",X:{src:"{{moving_thumbnail}}"}};g.W.call(this,{K:"a",ea:e,X:{href:"{{url}}",target:this.C?"_blank":null,"aria-label":"{{watch}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},T:[{K:"div",Y:"ytp-videowall-still-image",X:{style:"{{background}}"}},c?b:null,{K:"span",Y:"ytp-videowall-still-info",
T:[{K:"span",Y:"ytp-videowall-still-info-bg",T:[{K:"span",Y:"ytp-videowall-still-info-content",X:d,T:[{K:"span",Y:"ytp-videowall-still-info-title",T:["{{title}}"]},{K:"span",Y:"ytp-videowall-still-info-author",T:["{{author_and_views}}"]},{K:"span",Y:"ytp-videowall-still-info-duration",T:["{{duration}}"]}]}]}]},{K:"span",ea:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],T:[{K:"span",Y:"ytp-videowall-still-listlabel-icon"},g.Q("YTP_PLAYLIST"),{K:"span",Y:"ytp-videowall-still-listlabel-length",
T:[" (",{K:"span",T:["{{playlist_length}}"]},")"]}]},{K:"span",ea:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],T:[{K:"span",Y:"ytp-videowall-still-listlabel-mix-icon"},g.Q("YTP_MIX"),{K:"span",Y:"ytp-videowall-still-listlabel-length",T:[" (50+)"]}]}]});this.o=a;this.A=null;this.D=0;this.S("click",this.fL);this.S("keypress",this.gL);c&&this.U(this.ua["ytp-videowall-moving-thumbnail"],"load",this.iL);g.V(a).experiments.g("player_interaction_logging")&&(a=a.app.ca,g.bb(a.B,this),
b=String(a.G++),this.element.setAttribute("data-visual-id",b),g.Ab(this,(0,g.z)(a.D,a,this)))},j9=function(a){if(5E5<g.zw(g.V(a.o).D)){var b=a.A.ik();
b&&(a.D=(0,g.Nk)(),a.update({moving_thumbnail:b}))}},k9=function(a){g.Iy.call(this,a,{K:"div",
ea:["ytp-thumbnail-overlay","ytp-channel-overlay"],T:[{K:"div",Y:"ytp-thumbnail-overlay-image",X:{style:"{{background}}"}},{K:"div",Y:"ytp-thumbnail-overlay-curtain"}]})},l9=function(a){var b=g.V(a).experiments.g("moving_thumbnails_autonav"),c={K:"img",
Y:"ytp-upnext-moving-thumbnail",X:{src:"{{moving_thumbnail}}"}},c={K:"div",Y:"ytp-upnext",X:{"aria-label":"{{watch}}"},T:[{K:"div",Y:"ytp-thumbnail-overlay-image",X:{style:"{{background}}"}},b?c:null,{K:"div",Y:"ytp-thumbnail-overlay-curtain"},{K:"span",Y:"ytp-upnext-top",T:[{K:"span",Y:"ytp-upnext-header",T:[g.Q("YTP_PLAYLIST_UP_NEXT")]},{K:"span",Y:"ytp-upnext-title",T:["{{title}}"]},{K:"span",Y:"ytp-upnext-author",T:["{{author}}"]}]},{K:"a",Y:"ytp-upnext-autoplay-icon",X:{href:"{{url}}"},T:[{K:"svg",
X:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},T:[{K:"circle",Y:"ytp-svg-autoplay-circle",X:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{K:"circle",Y:"ytp-svg-autoplay-ring",X:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{K:"polygon",Y:"ytp-svg-autoplay-triangle",X:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{K:"span",Y:"ytp-upnext-bottom",T:[{K:"span",
Y:"ytp-upnext-cancel"},{K:"span",Y:"ytp-upnext-paused",T:[g.Q("YTP_AUTOPLAY_PAUSED_2")]}]},{K:"span",Y:"ytp-upnext-close"}]};g.W.call(this,c);this.D=null;var d=this.ua["ytp-upnext-cancel"],c=this.ua["ytp-upnext-close"];this.D=new g.W({K:"button",ea:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:0,"aria-label":g.Q("YTP_AUTOPLAY_CANCEL")},T:[g.Q("YTP_CANCEL")]});g.M(this,this.D);this.D.S("click",this.qu,this);this.D.Fa(d);d=new g.W({K:"button",ea:["ytp-upnext-close-button","ytp-button"]});g.M(this,
d);d.S("click",this.qu,this);d.Fa(c);this.o=a;this.L=this.ua["ytp-svg-autoplay-ring"];this.F=this.C=this.A=this.B=null;this.G=new g.Hd(this.Vj,5E3,this);g.M(this,this.G);this.H=0;this.U(this.ua["ytp-upnext-autoplay-icon"],"click",this.nG);this.nu();this.U(a,"autonavvisibility",this.nu);this.U(a,"mdxnowautoplaying",this.GF);this.U(a,"mdxautoplaycanceled",this.HF);this.U(a,"mdxautoplayupnext",this.dw);3==this.o.Za()&&(a=(a=g.Yk(this.o).G)?a.loaded?a.C.suggestion:null:null)&&this.dw(a);b&&(this.J=0,
this.U(this.ua["ytp-upnext-moving-thumbnail"],"load",this.VM))},m9=function(a,b){a.B=b;
h9(a,b,g.V(a.o),"hqdefault.jpg");g.Od(a.element,"ytp-moving-thumbnail-loaded");a.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});if(5E5<g.zw(g.V(a.o).D)){var c=a.B.ik();c&&(a.J=(0,g.Nk)(),a.update({moving_thumbnail:c}))}},n9=function(a,b){a.A||(g.ei("a11y-announce",g.Q("YTP_PLAYLIST_UP_NEXT")+" "+a.B.title),a.H=(0,g.Nk)(),a.A=new g.Hd((0,g.z)(a.Fm,a,b),25),a.Fm(b));
g.Od(a.element,"ytp-upnext-autoplay-paused")},p9=function(a){o9(a);
a.H=(0,g.Nk)();a.Fm();g.O(a.element,"ytp-upnext-autoplay-paused")},o9=function(a){a.A&&(a.A.dispose(),a.A=null)},q9=function(a,b){g.yy.call(this,{K:"div",
ea:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.o=a;this.V=!1},r9=function(a){a=g.V(a);
return a.Rb&&!a.Aa},s9=function(a,b){q9.call(this,a,"videowall-endscreen");
this.ca=a;this.ba=b;this.G=0;this.A=[];this.H=this.D=this.C=null;this.J=this.Z=!1;this.F=new g.hr(this);g.M(this,this.F);this.N=new g.Hd(g.B(g.O,this.element,"ytp-show-tiles"),0);g.M(this,this.N);var c=new g.W({K:"button",ea:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":g.Q("YTP_PREVIOUS")},T:[g.Bg()]});g.M(this,c);c.Fa(this.element);c.S("click",this.dL,this);this.P=new g.ln({K:"div",Y:"ytp-endscreen-content"});g.M(this,this.P);this.P.Fa(this.element);c=new g.W({K:"button",ea:["ytp-button",
"ytp-endscreen-next"],X:{"aria-label":g.Q("YTP_NEXT")},T:[g.Cg()]});g.M(this,c);c.Fa(this.element);c.S("click",this.cL,this);this.B=new l9(a);g.M(this,this.B);g.Jl(this.o,this.B.element,5);this.ma()},t9=function(a){return(0,g.S)(a.N,function(a){return g.By(a)})},u9=function(a,b,c){return 0==b&&a.C.length&&(b=c/s9.g,2<=c/s9.g&&2<=b&&g.V(a.o).experiments.g("video_wall_emphasize_first"))?2*s9.g:s9.g},v9=function(a){var b=a.ba.Hp();
b!=a.Z&&(a.Z=b,a.o.Ra("autonavvisibility"))},w9=function(a){q9.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.A=new k9(a);g.M(this,this.A);g.Jl(this.o,this.A.element,5);this.B=new g.W(["div","ytp-subscribe-card",["img","ytp-author-image",{src:b.profilePicture}],["div","ytp-subscribe-card-right",["div","ytp-author-name",b.author],["div","html5-subscribe-button-container"]]]);g.M(this,this.B);this.B.Fa(this.element);this.C=new g.tn(g.Q("YTP_SUBSCRIBE"),g.Q("YTP_UNSUBSCRIBE"),!0,b.Lq,b.subscribed,"trailer-endscreen",null,a);g.M(this,this.C);this.C.Fa(this.B.ua["html5-subscribe-button-container"]);
this.ma()},x9=function(a){g.wy.call(this,a);
g.fh({});this.o=null;this.isAvailable=!0;this.A=new g.hr(this);g.M(this,this.A);this.B=g.V(a);r9(a)?this.o=new s9(this.g,this):this.B.Aa?this.o=new w9(this.g):this.o=new q9(this.g);g.M(this,this.o);g.Jl(this.g,this.o.element,5);this.qv();this.A.U(a,"videodatachange",this.qv,this);this.A.U(a,"crn_endscreen",this.NK,this);this.A.U(a,"crx_endscreen",this.OK,this)};
g.C(i9,g.W);g.h=i9.prototype;g.h.qh=function(){var a=this.A.Qb().videoId;g.D6(this.o.app,a,this.A.dd,this.A.Ch(),void 0,void 0)};
g.h.fL=function(a){g.Nl(this.o,this);g.Dy(a,this.o,!this.o.isFullscreen()&&this.C,this.A.dd||void 0)&&this.qh()};
g.h.hL=function(){this.Ca(this.B);this.B=null;j9(this)};
g.h.gL=function(a){switch(a.keyCode){case 13:case 32:g.ck(a)||(this.qh(),g.bk(a))}};
g.h.iL=function(a){120<g.Xj(a).naturalWidth&&(g.O(this.element,"ytp-videowall-moving-thumbnail-loaded"),this.A.videoId&&g9(this.o,{isMovingThumbnail:!0,durationLoadingMs:(0,g.Nk)()-this.D,videoId:this.A.videoId}))};
g.C(k9,g.Iy);k9.prototype.Ab=function(a){a?this.B.show():g.mq(this.B)};
g.C(l9,g.W);g.h=l9.prototype;g.h.Vj=function(){this.C&&(this.G.stop(),this.Ca(this.F),this.F=null,this.C.close(),this.C=null)};
g.h.nu=function(){this.Ab(g.Zk(this.o))};
g.h.dG=function(){window.focus();this.Vj()};
g.h.Fm=function(a){a=a||g.V(this.o).experiments.o("autoplay_time")||1E4;var b=Math.min((0,g.Nk)()-this.H,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.o.Za()?this.select(!0):this.A&&this.A.start()};
g.h.select=function(a){var b=g.V(this.o);if(b.experiments.g("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.nl(this.o,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.B.Qb(),this.Vj(),this.C=new window.Notification(g.Q("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.bd(b)}),this.F=this.U(this.C,"click",this.dG),this.G.start())}o9(this);this.o.gj(!1,
a)};
g.h.nG=function(a){!g.cf(this.D.element,g.Xj(a))&&g.Dy(a,this.o)&&this.select()};
g.h.qu=function(){g.ol(this.o,"autonavcancel");g.bl(this.o,!0)};
g.h.VM=function(a){120<g.Xj(a).naturalWidth&&(g.O(this.element,"ytp-moving-thumbnail-loaded"),g9(this.o,{isMovingThumbnail:!0,durationLoadingMs:(0,g.Nk)()-this.J,videoId:this.B.Qb().videoId}))};
g.h.GF=function(a){this.show();n9(this,a)};
g.h.dw=function(a){this.B&&this.B.Qb().videoId==a.Qb().videoId||m9(this,a)};
g.h.HF=function(){o9(this);this.ma()};
g.h.R=function(){o9(this);this.Vj();l9.M.R.call(this)};
g.C(q9,g.yy);q9.prototype.create=function(){this.V=!0};
q9.prototype.destroy=function(){this.V=!1};
q9.prototype.Km=function(){return!1};
g.C(s9,q9);s9.g=2;g.h=s9.prototype;g.h.create=function(){s9.M.create.call(this);var a=this.o.getVideoData();a&&(this.C=t9(a),this.D=a);this.Yf();this.F.U(this.o,"appresize",this.Yf);this.F.U(this.o,"videodatachange",this.eL);this.F.U(this.o,"autonavchange",this.ox);this.F.U(this.o,"autonavcancel",this.bL);this.F.U(this.element,"transitionend",this.nH)};
g.h.destroy=function(){g.jr(this.F);g.Cb(this.A);this.A=[];this.C=null;s9.M.destroy.call(this);g.Od(this.element,"ytp-show-tiles");this.N.stop()};
g.h.Km=function(){return 1!=this.D.autonavState};
g.h.Ti=function(){return g.Kl(this.o)&&this.Km()&&!this.H};
g.h.show=function(){s9.M.show.call(this);g.Od(this.element,"ytp-show-tiles");g.V(this.o).isMobile?g.Id(this.N):this.N.start();(this.J||this.H&&this.H!=this.D.clientPlaybackNonce)&&g.bl(this.o,!1);var a=this.Ti();g.Kl(this.o)&&g.V(this.o).experiments.g("ui_logging")&&this.ba.log({cancelButtonShow:a?"1":"0",state:this.Km()?"enabled":"disabled"});a?(v9(this),2==this.D.autonavState?g.V(this.o).experiments.g("fast_autonav_in_background")&&3==this.o.Uw()?this.B.select(!0):n9(this.B):3==this.D.autonavState&&
p9(this.B)):(g.bl(this.o,!0),v9(this))};
g.h.ma=function(){s9.M.ma.call(this);p9(this.B);v9(this)};
g.h.nH=function(a){g.Xj(a)==this.element&&this.Yf()};
g.h.Yf=function(){if(this.C&&this.C.length){var a=g.V(this.o).experiments.g("video_wall_moving_thumbnails_hover");g.O(this.element,"ytp-endscreen-paginate");var b=g.hj(this.element),c=b.width/b.height,d=96/54,e=s9.g,f=s9.g,k=Math.max(b.width/96,2),l=Math.max(b.height/54,2),m=this.C.length,n=Math.pow(s9.g,2),q,t=u9(this,0,l),w=u9(this,1,l);q=m*n+(Math.pow(t,2)-n);q+=Math.pow(w,2)-n;for(q-=n;0<q&&(e<k||f<l);){var x=e/s9.g,A=f/s9.g,F=e<=k-s9.g&&q>=A*n,I=f<=l-s9.g&&q>=x*n;if((x+1)/A*d/c>c/(x/(A+1)*d)&&
I)q-=x*n,f+=s9.g;else if(F)q-=A*n,e+=s9.g;else if(I)q-=x*n,f+=s9.g;else break}d=!1;k=s9.g+t;q>=3*n&&6>=m*n-q&&(f>=k||e>=k)&&w<=s9.g&&(d=!0);q=96*e;n=54*f;c=q/n<c?b.height/n:b.width/q;c=Math.min(c,2);q*=c;n*=c;q*=g.se(b.width/q||1,1,1.21);n*=g.se(b.height/n||1,1,1.21);q=Math.floor(Math.min(b.width,q));n=Math.floor(Math.min(b.height,n));b=this.P.element;g.gj(b,q,n);g.Ri(b,{marginLeft:q/-2+"px",marginTop:n/-2+"px"});m9(this.B,this.C[0]);g.Qd(this.element,"ytp-endscreen-takeover",this.Ti());v9(this);
c=q+4;q=n+4;n=0;k=!this.Ti();l=!1;for(x=0;x<e;x++)for(A=0;A<f;A++){var I=w>s9.g&&1<=n&&!l?n+1:n,K=0;d&&x>=e-s9.g&&A>=f-s9.g?K=1:0==A%s9.g&&0==x%s9.g&&(A<t&&x<t?0==A&&0==x&&(K=t):w>s9.g&&A>=f-w&&x>=e-w?A==f-w&&x==e-w&&(l=!0,I=1,K=w):K=s9.g);I=g.te(I+this.G,m);if(0!=K){F=this.A[n];F||(F=new i9(this.o),this.A[n]=F,b.appendChild(F.element));var Ua=Math.floor(q*A/f),lb=Math.floor(c*x/e),gb=Math.floor(q*(A+K)/f)-Ua-4,wd=Math.floor(c*(x+K)/e)-lb-4;g.Xi(F.element,lb,Ua);g.gj(F.element,wd,gb);g.Ri(F.element,
"transitionDelay",(A+x)/20+"s");g.Qd(F.element,"ytp-videowall-still-mini",1==K);g.Qd(F.element,"ytp-videowall-still-large",2<K);I=this.C[I];K=k&&!a;F.A=I;Ua=g.V(F.o);h9(F,I,Ua,g.Ld(F.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");g.Od(F.element,"ytp-videowall-moving-thumbnail-loaded");F.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});K?(g.O(F.element,"ytp-videowall-active"),j9(F)):Ua.experiments.g("video_wall_moving_thumbnails_hover")&&
!F.B&&(F.B=F.S("mouseover",F.hL));K=I.dd;I=F.o;g.V(I).experiments.g("player_interaction_logging")&&(I=I.app.ca,K=K&&K.itct,F=F.element.getAttribute("data-visual-id"),g.Ll(I,"onLogServerVeCreated",{id:F,tracking_params:K}));n++}}g.Qd(this.element,"ytp-endscreen-paginate",n<m);for(a=this.A.length-1;a>=n;a--)F=this.A[a],g.Xe(F.element),g.Bb(F);this.A.length=n}};
s9.A=2;s9.o=1.21;g.h=s9.prototype;g.h.eL=function(){var a=this.o.getVideoData();this.D!=a&&(this.G=0,this.C=t9(a),this.D=a,this.Yf())};
g.h.cL=function(){this.G+=this.A.length;this.Yf()};
g.h.dL=function(){this.G-=this.A.length;this.Yf()};
g.h.uD=function(){return!!this.B.A};
g.h.ox=function(a){1==a?(this.J=!1,this.H=this.D.clientPlaybackNonce,o9(this.B),this.g&&this.Yf()):(this.J=!0,this.g&&this.Ti()&&(2==a?n9(this.B):3==a&&p9(this.B)))};
g.h.bL=function(a){if(a){for(a=0;a<this.A.length;a++)g.Ol(this.ca,this.A[a],!0);this.ox(1)}else this.H=null,this.J=!1;this.Yf()};
g.C(w9,q9);w9.prototype.show=function(){w9.M.show.call(this);this.A.Ab(!0)};
w9.prototype.ma=function(){w9.M.ma.call(this);this.A.Ab(!1)};
g.C(x9,g.wy);g.h=x9.prototype;g.h.ix=function(){var a=this.g.getVideoData(),b=!r9(this.g)||!(!a.N||!a.N.length),a=g.$k(a,"ypc_module"),c=g.g3(this.g.app);return(b||!1)&&!a&&!c};
g.h.Hp=function(){return(this.o instanceof s9||!1)&&this.o.g&&this.o.Ti()};
g.h.rD=function(){return this.Hp()?this.o.uD():!1};
g.h.R=function(){g.Gl(this.g,"endscreen");x9.M.R.call(this)};
g.h.load=function(){x9.M.load.call(this);this.o.show();g.V(this.g).Aa&&.01>Math.random()&&this.log({trailerEndscreenShow:1})};
g.h.log=function(a){g.nl(this.g,"end",a)};
g.h.unload=function(){x9.M.unload.call(this);this.o.ma();this.o.destroy();this.isAvailable=!1};
g.h.NK=function(a){this.ix()&&(this.o.V||this.o.create(),"load"==a.getId()&&this.load())};
g.h.OK=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.qv=function(){g.Gl(this.g,"endscreen");var a=Math.max(1E3*(this.g.getVideoData().lengthSeconds-10),0),a=new g.bn(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.bn(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.Dl(this.g,[a,b])};
window._exportCheck==g.wa&&g.ka("ytmod.player.endscreen",x9,void 0);})(_yt_player);
