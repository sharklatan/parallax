function u_b(){}
function B_b(){}
function C_b(a){this.b=a}
function v_b(){NPb.call(this)}
function V2b(a){var b,c,d;if(!a.i||!a.e)return;b=a.c/a.g;a.k+=8;a.k=a.k%a.c;a.k<0&&(a.k+=a.c);c=a.j+_q(DAb(_q(v3(a.k/b)),a.g-1));if(c!=a.b){i8(a.i.i,a.f,new B2(0));i8(a.i.i,a.b,new B2(1));i8(a.i.i,c,new B2(0));a.f=a.b;a.b=c}d=a.k%b/b;i8(a.i.i,a.b,new B2(d));i8(a.i.i,a.f,new B2(1-d))}
_=p_b.prototype;_.rb=function t_b(){JPb(this.c,new v_b(this.b))};_=v_b.prototype=u_b.prototype=new MPb;_.gC=function w_b(){return jE};_.pd=function x_b(){xcb(this,new gyb(40,pdb(this.B.D),1,10000))};_.ib=function y_b(){var a,b;this.A.E.e=200;sxb(this.C,this.A);b=new EIb(16777215,1.3);kCb(b.E,1,1,1);sxb(this.C,b);this.b=new K2b;try{s2b(this.b,'./static/models/animated/flamingo.js',new C_b(this))}catch(a){a=qG(a);if(Xq(a,40)){jxb();MJ(ixb,(sJ(),qJ),Lac)}else throw a}this.B.J=true;this.B.K=true;this.B.N=false;this.B.I=false};_.od=function z_b(){};_.jb=function A_b(a){var b;this.c=ad();b=a*0.01;IBb(this.A.E,600*Math.sin(b*3.141592653589793/360));mCb(this.A.E,600*Math.cos(b*3.141592653589793/360));Mxb(this.A,this.C.E);V2b(z2b(this.b),_q(ad()-this.c));Knb(this.B,false,false,false)};_.b=null;_.c=0;_=C_b.prototype=B_b.prototype=new Tb;_.gC=function D_b(){return iE};_.Re=function E_b(){var a;z2b(this.b.b).c=3000;a=B2b(this.b.b);lCb(a.J,2);lCb(a.E,0);sxb(this.b.C,a)};_.b=null;var jE=m2(k9b,'MorphNormalsFlamingo$DemoScene'),iE=m2(k9b,'MorphNormalsFlamingo$DemoScene$1');R5b(be)(22);