function Trb(){}
function Zrb(){}
function asb(){}
function fsb(){}
function esb(){}
function jsb(){}
function isb(){}
function zLb(){}
function HLb(){}
function e$b(){}
function g$b(){PQb.call(this)}
function ILb(){fKb.call(this)}
function Urb(){Uqb.call(this,(Yrb(),Xrb))}
function LJb(){MJb.call(this,16777215,1,0)}
function ALb(){fKb.call(this);this.b=false;this.c=1}
function Yrb(){Yrb=R6b;Xrb=new asb}
function msb(){msb=R6b;$rb=new fsb}
function nsb(){nsb=R6b;_rb=new jsb}
function f$b(){var a,b,c,d,e,f,g,i;a=$doc.createElement(Mbc);a.width=256;a.height=256;b=a.getContext(Nbc);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=Lr(Math.floor(g^i))}b.putImageData(d,0,0);return a}
var Kbc='mFar',Jbc='mNear';_=Urb.prototype=Trb.prototype=new Pqb;_.gC=function Vrb(){return Jz};_.Ad=function Wrb(){Rqb(this,Jbc,new Zvb((swb(),ewb),new D3(1)));Rqb(this,Kbc,new Zvb(ewb,new D3(2000)));Rqb(this,Lbc,new Zvb(ewb,new D3(1)))};var Xrb;_=asb.prototype=Zrb.prototype=new Tb;_.gC=function bsb(){return Iz};_.Dd=function csb(){return msb(),$rb};_.Ed=function dsb(){return nsb(),_rb};var $rb=null,_rb=null;_=fsb.prototype=esb.prototype=new Tb;_.gC=function gsb(){return Gz};_.bc=function hsb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n}\r\n'};_=jsb.prototype=isb.prototype=new Tb;_.gC=function ksb(){return Hz};_.bc=function lsb(){return 'void main() {\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n'};_=LJb.prototype=KJb.prototype;_=ALb.prototype=zLb.prototype=new QJb;_.Me=function BLb(){return null};_.gC=function CLb(){return oC};_.Oe=function DLb(){return new Urb};_.Je=function ELb(){return this.c};_.Ke=function FLb(){return this.b};_.Pe=function GLb(a,b,c){VJb(this,c);if(b.gC()==JA){Yvb(Fr(E6(this.T,Jbc),138),new D3(Fr(b,145).e));Yvb(Fr(E6(this.T,Kbc),138),new D3(Fr(b,145).c))}Yvb(Fr(E6(this.T,Lbc),138),new D3(this.O))};_.cM={182:1,185:1};_.b=false;_.c=0;_=ILb.prototype=HLb.prototype=new QJb;_.gC=function JLb(){return pC};_.Oe=function KLb(){return null};_.cM={185:1,189:1};_=_Zb.prototype;_.ub=function d$b(){LQb(this.c,new g$b(this.b))};_=g$b.prototype=e$b.prototype=new OQb;_.gC=function h$b(){return EE};_.wd=function i$b(){zdb(this,new izb(45,reb(this.B.D),1,2000))};_.ib=function j$b(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;mDb(this.A.E,0,200,800);uyb(this.C,this.A);c=new aAb;for(i=0;i<=40;++i){c.I.Jc(new rDb(-500,-75,i*25-500));c.I.Jc(new rDb(500,-75,i*25-500));c.I.Jc(new rDb(i*25-500,-75,-500));c.I.Jc(new rDb(i*25-500,-75,500))}n=new oKb;lKb(n,new Czb(16777215));n.O=0.2;k=new WNb(c,n,(dOb(),bOb));uyb(this.C,k);C=new exb(f$b());Zwb(C,(c3(),c3(),b3));this.b=new m9;t=new TLb;t.q=C;t.N=true;c9(this.b,t);u=new TLb;NLb(u,new Czb(14540253));cKb(u,(WKb(),TKb));c9(this.b,u);y=new CMb;vMb(y,new Czb(197379));wMb(y,new Czb(14540253));zMb(y,new Czb(39168));y.w=30;cKb(y,TKb);c9(this.b,y);c9(this.b,new oMb);p=new eLb;_Kb(p,new Czb(16755200));p.N=true;$Jb(p,(EKb(),xKb));c9(this.b,p);v=new TLb;NLb(v,new Czb(14540253));cKb(v,VKb);c9(this.b,v);A=new CMb;A.s=C;A.N=true;c9(this.b,A);x=new oMb;cKb(x,VKb);c9(this.b,x);q=new eLb;_Kb(q,new Czb(65450));q.i=true;c9(this.b,q);c9(this.b,new ALb);w=new TLb;NLb(w,new Czb(6710886));PLb(w,new Czb(16711680));MLb(w,new Czb(0));cKb(w,VKb);c9(this.b,w);z=new CMb;vMb(z,new Czb(0));yMb(z,new Czb(16776960));wMb(z,new Czb(0));zMb(z,new Czb(6710886));z.w=10;cKb(z,VKb);z.O=0.9;z.N=true;c9(this.b,z);r=new eLb;q.k=C;q.N=true;c9(this.b,r);g=new zIb(70,32,16);e=new zIb(70,32,16);f=new zIb(70,32,16);for(i=0,j=f.r.Tc();i<j;++i){b=Fr(f.r.Lc(i),147);b.i=0}$zb(f,this.b);c9(this.b,new ILb);this.c=new m9;for(i=0,j=this.b.c;i<j;++i){o=Fr(g9(this.b,i),185);d=o.gC()==pC?f:o.S==TKb?e:g;B=new pOb(d,o);KCb(B.E,i%4*200-400);oDb(B.E,Math.floor(i/4)*200-200);KCb(B.H,Math.random()*200-100);LCb(B.H,Math.random()*200-100);oDb(B.H,Math.random()*200-100);c9(this.c,B);uyb(this.C,B)}s=new eLb;_Kb(s,new Czb(16777215));this.d=new pOb(new zIb(4,8,8),s);uyb(this.C,this.d);uyb(this.C,new CJb(1118481));a=new GJb(16777215,0.125);KCb(a.E,Math.random()-0.5);LCb(a.E,Math.random()-0.5);oDb(a.E,Math.random()-0.5);a.E.ke();uyb(this.C,a);this.e=new LJb;uyb(this.C,this.e)};_.vd=function k$b(){};_.jb=function l$b(a){var b,c,d,e,f;f=1.0E-4*a;KCb(this.A.E,Math.cos(f)*1000);oDb(this.A.E,Math.sin(f)*1000);Oyb(this.A,this.C.E);for(b=0,c=this.c.c;b<c;++b){e=Fr(g9(this.c,b),201);e.H.d+=0.01;e.H.e+=0.005;d=Fr(g9(this.b,b),185);b>9&&Hr(d,191)?wzb(Fr(d,191).e,0.54,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&Hr(d,190)&&wzb(Fr(d,190).e,0.04,1,0.7*(0.5+0.5*Math.cos(35*f)))}KCb(this.d.E,Math.sin(f*7)*300);LCb(this.d.E,Math.cos(f*5)*400);oDb(this.d.E,Math.cos(f*3)*300);KCb(this.e.d,this.d.E.d);LCb(this.e.d,this.d.E.e);oDb(this.e.d,this.d.E.c)};_.b=null;_.c=null;_.d=null;_.e=null;var Jz=o3(Obc,'ShaderDepth'),Iz=o3(Obc,'ShaderDepth_Resources_default_InlineClientBundleGenerator'),Gz=o3(Obc,'ShaderDepth_Resources_default_InlineClientBundleGenerator$1'),Hz=o3(Obc,'ShaderDepth_Resources_default_InlineClientBundleGenerator$2'),oC=o3(Pbc,'MeshDepthMaterial'),pC=o3(Pbc,'MeshFaceMaterial'),EE=o3(tac,'MaterialsCanvas2D$DemoScene');T6b(oe)(17);