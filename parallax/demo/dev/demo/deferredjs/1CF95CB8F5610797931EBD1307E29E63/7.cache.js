function BFb(){}
function hGb(){}
function lGb(){}
function kGb(){}
function oGb(){}
function sGb(){}
function rGb(){}
function wSb(){}
function xSb(){dOb.call(this)}
function CFb(a){DFb.call(this,a)}
function iGb(){CFb.call(this,new lGb)}
function pGb(){CFb.call(this,new sGb)}
function DFb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;Hwb.call(this);for(f=0;f<=20;++f){q=f/20;for(g=0;g<=20;++g){j=g/20;i=a.ue(j,q);this.H.Jc(i)}}for(f=0;f<20;++f){for(g=0;g<20;++g){b=f*21+g;c=f*21+g+1;d=(f+1)*21+g;e=(f+1)*21+g+1;k=new dAb(f/20,g/20);n=new dAb(f/20,(g+1)/20);o=new dAb((f+1)/20,g/20);p=new dAb((f+1)/20,(g+1)/20);this.q.Jc(new Bxb(b,c,e,d));tr(M7(this.p,0),110).Jc(new t8(kr(TF,{86:1,103:1,154:1},153,[k,n,o,p])))}}vwb(this);wwb(this,(U1(),U1(),S1));zwb(this)}
var Uqc='GeometriesParametric$DemoScene',Qqc='Klein',Rqc='Klein$1',Sqc='Mobius',Tqc='Mobius$1',Oqc='Parametric',Pqc='thothbot.parallax.core.shared.geometries.parametric.';_=BFb.prototype=new kwb;_.gC=function EFb(){return WA};_=iGb.prototype=hGb.prototype=new BFb;_.gC=function jGb(){return eB};_=lGb.prototype=kGb.prototype=new Tb;_.gC=function mGb(){return dB};_.ue=function nGb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new WAb(c,d,e)};_=pGb.prototype=oGb.prototype=new BFb;_.gC=function qGb(){return gB};_=sGb.prototype=rGb.prototype=new Tb;_.gC=function tGb(){return fB};_.ue=function uGb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new WAb(d,e,f)};_=rSb.prototype;_.qb=function vSb(){_Nb(this.b,new xSb(this.a))};_=xSb.prototype=wSb.prototype=new cOb;_.gC=function ySb(){return NC};_.ud=function zSb(){ccb(this,new Ovb(45,Wcb(this.A.C),1,2000))};_.hb=function ASb(){var a,b,c,d,e,f,g;this.z.D.d=400;Yub(this.B,this.z);Yub(this.B,new RGb(4210752));c=new UGb;RAb(c.D,0,0,1);Yub(this.B,c);e=new S7;d=new OJb;LJb(d,(dNb(),fNb(Fqc,(fub(),eub),null)));HJb(d,new gwb(12303291));lr(e.a,e.b++,d);b=new _Ib;WIb(b,new gwb(16777215));b.g=true;b.K=true;b.L=0.1;lr(e.a,e.b++,b);f=wNb(new iGb,e);a=tr(M7(f.u,0),196);a.b=(U1(),U1(),T1);RAb(f.Jd(),0,0,0);f.I.le(20);Yub(this.B,f);g=wNb(new pGb,e);RAb(g.Jd(),10,0,0);g.I.le(100);Yub(this.B,g)};_.td=function BSb(){};_.ib=function CSb(a){var b,c,d;nAb(this.z.D,Math.cos(a*1.0E-4)*800);TAb(this.z.D,Math.sin(a*1.0E-4)*800);svb(this.z,this.B.D);for(b=0,c=this.B.u.b;b<c;++b){d=tr(M7(this.B.u,b),191);d.Kd().c+=0.01;d.Kd().d+=0.005}};var WA=e2(Gqc,Oqc),eB=e2(Pqc,Qqc),dB=e2(Pqc,Rqc),gB=e2(Pqc,Sqc),fB=e2(Pqc,Tqc),NC=e2(aoc,Uqc);Z4b(be)(7);