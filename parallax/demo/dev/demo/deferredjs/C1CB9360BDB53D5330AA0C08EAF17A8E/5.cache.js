function Byb(){}
function czb(){}
function gzb(){}
function fzb(){}
function jzb(){}
function nzb(){}
function mzb(){}
function sJb(){}
function tJb(){NFb.call(this)}
function Cyb(a){Dyb.call(this,a)}
function dzb(){Cyb.call(this,new gzb)}
function kzb(){Cyb.call(this,new nzb)}
function Dyb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;Wub.call(this);for(f=0;f<=20;++f){q=f/20;for(g=0;g<=20;++g){j=g/20;i=a.Qd(j,q);F5(this.F,i)}}for(f=0;f<20;++f){for(g=0;g<20;++g){b=f*21+g;c=f*21+g+1;d=(f+1)*21+g;e=(f+1)*21+g+1;k=new owb(f/20,g/20);n=new owb(f/20,(g+1)/20);o=new owb((f+1)/20,g/20);p=new owb((f+1)/20,(g+1)/20);this.o.zc(new rub(b,c,e,d));gr(J5(this.n,0),111).zc(new p6(Zq(xE,{88:1,104:1,152:1},151,[k,n,o,p])))}}Kub(this);Lub(this,(L_(),L_(),J_));Oub(this)}
var dYb='thothbot.parallax.core.shared.geometries.parametric.';_=Byb.prototype=new Bub;_.gC=function Eyb(){return jA};_=dzb.prototype=czb.prototype=new Byb;_.gC=function ezb(){return sA};_=gzb.prototype=fzb.prototype=new Tb;_.gC=function hzb(){return rA};_.Qd=function izb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new Uwb(c,d,e)};_=kzb.prototype=jzb.prototype=new Byb;_.gC=function lzb(){return uA};_=nzb.prototype=mzb.prototype=new Tb;_.gC=function ozb(){return tA};_.Qd=function pzb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new Uwb(d,e,f)};_=nJb.prototype;_.rb=function rJb(){JFb(this.c,new tJb(this.b))};_=tJb.prototype=sJb.prototype=new MFb;_.gC=function uJb(){return SB};_.kd=function vJb(){Z9(this,new Htb(45,Rab(this.s.D),1,2000))};_.fb=function wJb(){var a,b,c,d,e,f,g;this.r.E.e=400;Xsb(this.t,this.r);Xsb(this.t,new Lzb(4210752));c=new Ozb(16777215);Pwb(c.E,0,0,1);Xsb(this.t,c);e=new P5;d=new VBb;SBb(d,(UEb(),WEb(bYb,(fsb(),esb),null)));OBb(d,new Ytb(12303291));$q(e.b,e.c++,d);b=new hBb;cBb(b,new Ytb(16777215));b.i=true;b.N=true;b.O=0.10000000149011612;$q(e.b,e.c++,b);f=lFb(new dzb,e);a=gr(J5(f.v,0),187);a.c=(L_(),L_(),K_);Pwb(f.E,0,0,0);f.J.Md(20);Xsb(this.t,f);g=lFb(new kzb,e);Pwb(g.E,10,0,0);g.J.Md(100);Xsb(this.t,g)};_.jd=function xJb(){};_.gb=function yJb(a){var b,c,d;vwb(this.r.E,Math.cos(a*1.0E-4)*800);Rwb(this.r.E,Math.sin(a*1.0E-4)*800);ltb(this.r,this.t.E);for(b=0,c=this.t.v.c;b<c;++b){d=gr(J5(this.t.v,b),183);d.ud().d+=0.009999999776482582;d.ud().e+=0.004999999888241291}};var jA=X_(cYb,'Parametric'),sA=X_(dYb,'Klein'),rA=X_(dYb,'Klein$1'),uA=X_(dYb,'Mobius'),tA=X_(dYb,'Mobius$1'),SB=X_(xXb,'GeometriesParametric$DemoScene');dUb(ne)(5);