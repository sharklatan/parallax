function ieb(){}
function veb(){}
function ueb(){}
function ZMb(){}
function cNb(){}
function gNb(){}
function yTb(){}
function GTb(){}
function _Mb(a,b){a.c=b}
function dNb(a){this.a=a}
function HTb(a){this.a=a}
function QBb(a,b,c,d){a.b=b;a.c=c;a.d=d;a.a=1;return a}
function leb(a){dCb(a.i,-a.d.e+(a.d.f?1:0));eCb(a.i,-(a.d.o?1:0)+a.d.n);JCb(a.i,-(a.d.j?1:0)+(a.d.i?1:0))}
function keb(a){var b;b=a.d.c||a.a&&!a.d.a?1:0;dCb(a.e,-(a.d.d?1:0)+(a.d.g?1:0));eCb(a.e,-(a.d.b?1:0)+(a.d.k?1:0));JCb(a.e,-b+(a.d.a?1:0))}
function PBb(a){var b;b=$3(a.b*a.b+a.c*a.c+a.d*a.d+a.a*a.a);if(b==0){a.b=0;a.c=0;a.d=0;a.a=0}else{b=1/b;a.b=a.b*b;a.c=a.c*b;a.d=a.d*b;a.a=a.a*b}}
function hNb(a,b,c,d,e,f){this.i=a;this.g=b.a;this.c=c;this.k=0;this.n=0;this.o=0;this.f=1;this.e=1;this.d=d;this.b=e;this.a=f}
function aNb(a,b,c,d){Zxb.call(this);this.b=new LCb;this.a=new H8;_Mb(this,new dNb(this));!!a&&$Mb(this,a,b,new Y2(0),c,d,null)}
function NBb(a,b){var c,d,e,f,g,i,j,k;d=a.b;e=a.c;f=a.d;c=a.a;i=b.b;j=b.c;k=b.d;g=b.a;a.b=d*g+c*i+e*k-f*j;a.c=e*g+c*j+f*i-d*k;a.d=f*g+c*k+d*j-e*i;a.a=c*g-d*i-e*j-f*k}
function jeb(a,b){var c,d;c=b*a.f;d=b*a.g;Uxb(a.w,a.e.c*c);Vxb(a.w,a.e.d*c);Wxb(a.w,a.e.b*c);PBb(QBb(a.j,a.i.c*d,a.i.d*d,a.i.b*d));NBb(a.w.E,a.j);BBb(a.w.y,a.w.D);DBb(a.w.y,a.w.E);a.w.B=true}
function $Mb(a,b,c,d,e,f,g){Gxb();XJ(Fxb,(DJ(),wJ),'LensFlare: add new LensSprite');!c&&(c=J3(-1));!d&&(d=new Y2(0));!g&&(g=new Y2(1));!f&&(f=new Xyb(16777215));!e&&(e=(ZJb(),XJb));d=new Y2(V3(d.a,T3(0,d.a)));x8(a.a,new hNb(b,c,d.a,g.a,f,e))}
function ATb(){iQb.call(this);this.c=(hPb(),jPb('./static/textures/lensflare/lensflare0.png',(Ywb(),Xwb),null));this.d=jPb('./static/textures/lensflare/lensflare2.png',Xwb,null);this.e=jPb('./static/textures/lensflare/lensflare3.png',Xwb,null)}
function meb(a,b){Ydb.call(this,a,b);cy!=Av&&(this.x.A.setAttribute(U9b,V9b),undefined);this.k=~~(bg(b.A,W9b)/2);this.n=~~(bg(b.A,X9b)/2);this.w.K=true;this.j=new SBb;this.c=0;this.d=new veb;this.e=new MCb(0,0,0);this.i=new MCb(0,0,0);TM(this.x,this,(pk(),pk(),ok));TM(this.x,this,(tl(),tl(),sl));TM(this.x,this,(ml(),ml(),ll));TM(this.x,this,(Al(),Al(),zl));TM((SX(),WX(null)),this,(Sk(),Sk(),Rk));TM(WX(null),this,(Zk(),Zk(),Yk))}
function zTb(a,b,c,d,e){var f,g,i;i=new fJb(16777215,1.5,4500);HCb(i.c,d,e,-1000);Pxb(a.B,i);Ryb(i.d,b,c,0.99);f=new Xyb(16777215);Nyb(f,i.d);UOb(f,0,-0.5,0.5);g=new aNb(a.c,J3(700),(ZJb(),SJb),f);$Mb(g,a.d,J3(512),new Y2(0),SJb,null,null);$Mb(g,a.d,J3(512),new Y2(0),SJb,null,null);$Mb(g,a.d,J3(512),new Y2(0),SJb,null,null);$Mb(g,a.e,J3(60),new Y2(0.6),SJb,null,null);$Mb(g,a.e,J3(70),new Y2(0.7),SJb,null,null);$Mb(g,a.e,J3(120),new Y2(0.9),SJb,null,null);$Mb(g,a.e,J3(70),new Y2(1),SJb,null,null);_Mb(g,new HTb(g));Rxb(g,i.c);Pxb(a.B,g)}
_=meb.prototype=ieb.prototype=new Xdb;_.gC=function neb(){return gy};_.Db=function oeb(a){a.a.preventDefault()};_.Eb=function peb(a){if(a.a.altKey)return;switch(a.a.keyCode||0){case 87:this.d.c=true;break;case 83:this.d.a=true;break;case 65:this.d.d=true;break;case 68:this.d.g=true;break;case 82:this.d.k=true;break;case 70:this.d.b=true;break;case 38:this.d.f=true;break;case 40:this.d.e=1;break;case 37:this.d.n=1;break;case 39:this.d.o=true;break;case 81:this.d.i=true;break;case 69:this.d.j=true;}keb(this);leb(this)};_.Fb=function qeb(a){switch(a.a.keyCode||0){case 87:this.d.c=false;break;case 83:this.d.a=false;break;case 65:this.d.d=false;break;case 68:this.d.g=false;break;case 82:this.d.k=false;break;case 70:this.d.b=false;break;case 38:this.d.f=false;break;case 40:this.d.e=0;break;case 37:this.d.n=0;break;case 39:this.d.o=false;break;case 81:this.d.i=false;break;case 69:this.d.j=false;}keb(this);leb(this)};_.Gb=function reb(a){a.a.preventDefault();a.a.stopPropagation();if(this.b){++this.c}else{switch(ug(a.a)){case 1:this.d.c=true;break;case 2:this.d.c=false;}}};_.Hb=function seb(a){if(!this.b||this.c>0){this.d.n=~~(-(ek(a)-Ag(this.x.A)-this.k)/this.k);this.d.e=~~((fk(a)-(Cg(this.x.A)+$wnd.pageYOffset)-this.n)/this.n);leb(this)}};_.Ib=function teb(a){a.a.preventDefault();a.a.stopPropagation();if(this.b){--this.c;this.d.n=this.d.e=0}else{switch(ug(a.a)){case 1:this.d.c=false;break;case 2:this.d.c=false;}}leb(this)};_.cM={17:1,20:1,21:1,23:1,24:1,25:1,37:1};_.a=false;_.b=false;_.c=0;_.d=null;_.e=null;_.f=1;_.g=0.005;_.i=null;_.j=null;_.k=0;_.n=0;_=veb.prototype=ueb.prototype=new Tb;_.gC=function web(){return fy};_.a=false;_.b=false;_.c=false;_.d=false;_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.n=0;_.o=false;_=aNb.prototype=ZMb.prototype=new Nxb;_.gC=function bNb(){return MB};_.cM={194:1,197:1,202:1};_.a=null;_.b=null;_.c=null;_=dNb.prototype=cNb.prototype=new Tb;_.gC=function eNb(){return KB};_.Ne=function fNb(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;++a){b=Zq(B8(this.a.a,a),198);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.j=b.k*3.141592653589793*0.25;b.e+=(b.j-b.e)*0.25}};_.a=null;_=hNb.prototype=gNb.prototype=new Tb;_.gC=function iNb(){return LB};_.cM={198:1};_.a=null;_.b=null;_.c=0;_.d=0;_.e=0;_.f=0;_.g=0;_.i=null;_.j=0;_.k=0;_.n=0;_.o=0;_=tTb.prototype;_.qb=function xTb(){eQb(this.b,new ATb(this.a))};_=ATb.prototype=yTb.prototype=new hQb;_.gC=function BTb(){return PC};_.qd=function CTb(){Ucb(this,new Dyb(40,Mdb(this.A.C),1,15000))};_.hb=function DTb(){var a,b,c,d,e,f,g;this.z.D.b=250;Pxb(this.B,this.z);this.a=new meb(this.z,this.A.C);this.a.f=2500;this.a.g=0.5235987755982988;this.a.a=false;this.a.b=false;d=new LOb(0,3500,15000);Ryb(d.c,0.51,0.6,0.025);ROb(this.B,d);b=new gHb(250,250,250);f=new XLb;RLb(f,new Xyb(16777215));QLb(f,new Xyb(16777215));ULb(f,new Xyb(16777215));f.v=50;f.k=true;for(e=0;e<3000;++e){g=new KNb(b,f);dCb(g.D,8000*(2*Math.random()-1));eCb(g.D,8000*(2*Math.random()-1));JCb(g.D,8000*(2*Math.random()-1));dCb(g.G,Math.random()*3.141592653589793);eCb(g.G,Math.random()*3.141592653589793);JCb(g.G,Math.random()*3.141592653589793);g.z=false;Xxb(g);Pxb(this.B,g)}a=new XIb(16777215);Ryb(a.d,0.1,0.5,0.3);Pxb(this.B,a);c=new _Ib(16777215,0.125);HCb(c.D,0,-1,0).ee();Pxb(this.B,c);Ryb(c.d,0.1,0.725,0.9);zTb(this,0.55,0.825,5000,0);zTb(this,0.08,0.825,0,0);zTb(this,0.995,0.025,5000,5000);this.A.N=8;sob(this.A,this.B.e.c);this.A.I=true;this.A.J=true;this.A.L=true;this.b=ad()};_.pd=function ETb(){};_.ib=function FTb(a){jeb(this.a,(ad()-this.b)*0.001);this.b=ad()};_.a=null;_.b=0;_=HTb.prototype=GTb.prototype=new Tb;_.gC=function ITb(){return OC};_.Ne=function JTb(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;++a){b=Zq(B8(this.a.a,a),198);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.e=0}Zq(B8(this.a.a,2),198).n+=0.025;Zq(B8(this.a.a,3),198).e=this.a.b.c*0.5+0.7853981633974483};_.a=null;var gy=J2(Y9b,'FlyControls'),fy=J2(Y9b,'FlyControls$MoveState'),KB=J2(Z9b,'LensFlare$1'),LB=J2(Z9b,'LensFlare$LensSprite'),PC=J2(M9b,'EffectsLensFlares$DemoScene'),OC=J2(M9b,'EffectsLensFlares$DemoScene$1');m6b(be)(4);