(function(g){var window=this;'use strict';var J6=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.qe=!1;this.player=a;this.T(a,"minimized",this.eg);this.T(a,"onStateChange",this.vH)},K6=function(a){g.sM.call(this,a);
this.i=new J6(this.player);this.i.hide();g.eM(this.player,this.i.element,4);a.Te()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(J6,g.V);g.k=J6.prototype;
g.k.jF=function(){this.tooltip=new g.hQ(this.player,this);g.H(this,this.tooltip);g.eM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Bc=new g.lN(this.player);g.H(this,this.Bc);this.Hg=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.H(this,this.Hg);this.Hg.Ea(this.element);this.T(this.Hg.element,"click",this.NA);var a=new g.V({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"\u0110o\u0301ng"},V:[g.eK()]});g.H(this,a);a.Ea(this.Hg.element);this.T(a.element,"click",
this.Li);a=new g.Y1(this.player,this);g.H(this,a);a.Ea(this.Hg.element);this.Op=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.H(this,this.Op);this.Op.Ea(this.Hg.element);this.T(this.Op.element,"click",this.NA);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,b);b.Ea(this.Op.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ea(this.Op.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,c);c.Ea(this.Op.element);this.gO=
new g.KO(this.player,this,!1);g.H(this,this.gO);this.gO.Ea(b.element);b=new g.IO(this.player,this);g.H(this,b);b.Ea(a.element);this.nextButton=new g.KO(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ea(c.element);this.Kg=new g.UP(this.player,this);g.H(this,this.Kg);this.Kg.Ea(this.Hg.element);this.Kc=new g.SO(this.player,this);g.H(this,this.Kc);g.eM(this.player,this.Kc.element,4);this.DA=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.H(this,this.DA);g.eM(this.player,this.DA.element,
4);a=new g.V({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"\u0110o\u0301ng"},V:[g.eK()]});g.H(this,a);a.Ea(this.DA.element);this.T(a.element,"click",this.Li);a=new g.V({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"\u0110o\u0301ng"},V:[g.lK()]});g.H(this,a);a.Ea(this.DA.element);this.T(a.element,"click",this.NW);this.T(this.player,"presentingplayerstatechange",this.Tc);this.T(this.player,"appresize",this.Ab);this.T(this.player,"fullscreentoggled",
this.Ab);this.Ab()};
g.k.show=function(){this.Td=new g.Zq(this.Bq,null,this);this.Td.start();this.qe||(this.jF(),this.qe=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Kc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Td&&(this.Td.dispose(),this.Td=void 0);g.V.prototype.hide.call(this);this.player.Te()||(this.qe&&this.Kc.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.Td&&(this.Td.dispose(),this.Td=void 0);g.V.prototype.xa.call(this)};
g.k.Li=function(){this.player.stopVideo();this.player.Qa("onCloseMiniplayer")};
g.k.NW=function(){this.player.playVideo()};
g.k.NA=function(a){if(a.target===this.Hg.element||a.target===this.Op.element)this.player.U().N("kevlar_miniplayer_play_pause_on_scrim")?g.UI(this.player.Bb())?this.player.pauseVideo():this.player.playVideo():this.player.Qa("onExpandMiniplayer")};
g.k.eg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Te())};
g.k.qd=function(){this.Kc.Sb();this.Kg.Sb()};
g.k.Bq=function(){this.qd();this.Td&&this.Td.start()};
g.k.Tc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.Ab=function(){g.fP(this.Kc,0,this.player.fb().getPlayerSize().width,!1);g.TO(this.Kc)};
g.k.vH=function(a){this.player.Te()&&(0===a?this.hide():this.show())};
g.k.kc=function(){return this.tooltip};
g.k.Ze=function(){return!1};
g.k.Cf=function(){return!1};
g.k.Ei=function(){return!1};
g.k.Hx=function(){};
g.k.Fn=function(){};
g.k.Gs=function(){};
g.k.Vn=function(){return null};
g.k.jw=function(){return null};
g.k.Fj=function(){return new g.sn(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Iq=function(a,b,c,d,e){var f=0,h=d=0,l=g.In(a);if(b){c=g.or(b,"ytp-prev-button")||g.or(b,"ytp-next-button");var m=g.or(b,"ytp-play-button"),n=g.or(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Gn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.or(b,"ytp-miniplayer-button-top-left"),f=g.Gn(b,this.element),b=g.In(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.fb().getPlayerSize().width;e=f+(e||0);l=g.Rg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.zl=function(){};
g.k.Qk=function(){return!1};g.u(K6,g.sM);K6.prototype.create=function(){};
K6.prototype.Zi=function(){return!1};
K6.prototype.load=function(){this.player.hideControls();this.i.show()};
K6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.rM("miniplayer",K6);})(_yt_player);
