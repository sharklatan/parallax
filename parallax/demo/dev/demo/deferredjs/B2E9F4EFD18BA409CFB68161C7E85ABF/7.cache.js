function kHb(){}
function SHb(){}
function WHb(){}
function VHb(){}
function ZHb(){}
function bIb(){}
function aIb(){}
function dUb(){}
function eUb(){NPb.call(this)}
function lHb(a){mHb.call(this,a)}
function THb(){lHb.call(this,new WHb)}
function $Hb(){lHb.call(this,new bIb)}
function mHb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;$yb.call(this);for(f=0;f<=20;++f){q=f/20;for(g=0;g<=20;++g){j=g/20;i=a.le(j,q);this.I.Cc(i)}}for(f=0;f<20;++f){for(g=0;g<20;++g){b=f*21+g;c=f*21+g+1;d=(f+1)*21+g;e=(f+1)*21+g+1;k=new zBb(f/20,g/20);n=new zBb(f/20,(g+1)/20);o=new zBb((f+1)/20,g/20);p=new zBb((f+1)/20,(g+1)/20);this.r.Cc(new Uzb(b,c,e,d));Vq(e8(this.q,0),114).Cc(new N8(Mq(YF,{89:1,107:1,156:1},155,[k,n,o,p])))}}Oyb(this);Pyb(this,(a2(),a2(),$1));Syb(this)}
var B9b='thothbot.parallax.core.shared.geometries.parametric.';_=kHb.prototype=new Eyb;_.gC=function nHb(){return YA};_=THb.prototype=SHb.prototype=new kHb;_.gC=function UHb(){return gB};_=WHb.prototype=VHb.prototype=new Tb;_.gC=function XHb(){return fB};_.le=function YHb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new pCb(c,d,e)};_=$Hb.prototype=ZHb.prototype=new kHb;_.gC=function _Hb(){return iB};_=bIb.prototype=aIb.prototype=new Tb;_.gC=function cIb(){return hB};_.le=function dIb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new pCb(d,e,f)};_=$Tb.prototype;_.rb=function cUb(){JPb(this.c,new eUb(this.b))};_=eUb.prototype=dUb.prototype=new MPb;_.gC=function fUb(){return SC};_.pd=function gUb(){xcb(this,new gyb(45,pdb(this.B.D),1,2000))};_.ib=function hUb(){var a,b,c,d,e,f,g;this.A.E.e=400;sxb(this.C,this.A);sxb(this.C,new AIb(4210752));c=new DIb(16777215);kCb(c.E,0,0,1);sxb(this.C,c);e=new k8;d=new RKb;OKb(d,(MOb(),OOb(y9b,(Bwb(),Awb),null)));KKb(d,new Ayb(12303291));Nq(e.b,e.c++,d);b=new cKb;ZJb(b,new Ayb(16777215));b.i=true;b.N=true;b.O=0.1;Nq(e.b,e.c++,b);f=dPb(new THb,e);a=Vq(e8(f.v,0),201);a.c=(a2(),a2(),_1);kCb(f.Ad(),0,0,0);f.J.ce(20);sxb(this.C,f);g=dPb(new $Hb,e);kCb(g.Ad(),10,0,0);g.J.ce(100);sxb(this.C,g)};_.od=function iUb(){};_.jb=function jUb(a){var b,c,d;IBb(this.A.E,Math.cos(a*1.0E-4)*800);mCb(this.A.E,Math.sin(a*1.0E-4)*800);Mxb(this.A,this.C.E);for(b=0,c=this.C.v.c;b<c;++b){d=Vq(e8(this.C.v,b),194);d.Bd().d+=0.01;d.Bd().e+=0.005}};var YA=m2(z9b,'Parametric'),gB=m2(B9b,'Klein'),fB=m2(B9b,'Klein$1'),iB=m2(B9b,'Mobius'),hB=m2(B9b,'Mobius$1'),SC=m2(k9b,'GeometriesParametric$DemoScene');R5b(be)(7);