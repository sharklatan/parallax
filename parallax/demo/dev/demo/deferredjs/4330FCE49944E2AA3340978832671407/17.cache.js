function mrb(){}
function vrb(){}
function srb(){}
function Arb(){}
function zrb(){}
function Erb(){}
function Drb(){}
function UKb(){}
function aLb(){}
function zZb(){}
function BZb(){iQb.call(this)}
function bLb(){AJb.call(this)}
function nrb(){nqb.call(this,(rrb(),qrb))}
function eJb(){fJb.call(this,16777215,1,0)}
function VKb(){AJb.call(this);this.a=false;this.b=1}
function Hrb(){Hrb=k6b;trb=new Arb}
function rrb(){rrb=k6b;qrb=new vrb}
function Irb(){Irb=k6b;urb=new Erb}
function AZb(){var a,b,c,d,e,f,g,i;a=$doc.createElement(cbc);a.width=256;a.height=256;b=a.getContext(dbc);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=dr(Math.floor(g^i))}b.putImageData(d,0,0);return a}
var abc='mFar',_ac='mNear';_=nrb.prototype=mrb.prototype=new iqb;_.gC=function orb(){return Xy};_.ud=function prb(){kqb(this,_ac,new svb((Nvb(),zvb),new Y2(1)));kqb(this,abc,new svb(zvb,new Y2(2000)));kqb(this,bbc,new svb(zvb,new Y2(1)))};var qrb;_=vrb.prototype=srb.prototype=new Tb;_.gC=function wrb(){return Wy};_.xd=function xrb(){return Hrb(),trb};_.yd=function yrb(){return Irb(),urb};var trb=null,urb=null;_=Arb.prototype=zrb.prototype=new Tb;_.gC=function Brb(){return Uy};_.Wb=function Crb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n}\r\n'};_=Erb.prototype=Drb.prototype=new Tb;_.gC=function Frb(){return Vy};_.Wb=function Grb(){return 'void main() {\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n'};_=eJb.prototype=dJb.prototype;_=VKb.prototype=UKb.prototype=new jJb;_.Ge=function WKb(){return null};_.gC=function XKb(){return CB};_.Ie=function YKb(){return new nrb};_.De=function ZKb(){return this.b};_.Ee=function $Kb(){return this.a};_.Je=function _Kb(a,b,c){oJb(this,c);if(b.gC()==Xz){rvb(Zq(Z5(this.S,_ac),138),new Y2(Zq(b,145).d));rvb(Zq(Z5(this.S,abc),138),new Y2(Zq(b,145).b))}rvb(Zq(Z5(this.S,bbc),138),new Y2(this.N))};_.cM={182:1,185:1};_.a=false;_.b=0;_=bLb.prototype=aLb.prototype=new jJb;_.gC=function cLb(){return DB};_.Ie=function dLb(){return null};_.cM={185:1,189:1};_=uZb.prototype;_.qb=function yZb(){eQb(this.b,new BZb(this.a))};_=BZb.prototype=zZb.prototype=new hQb;_.gC=function CZb(){return SD};_.qd=function DZb(){Ucb(this,new Dyb(45,Mdb(this.A.C),1,2000))};_.hb=function EZb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;HCb(this.z.D,0,200,800);Pxb(this.B,this.z);c=new vzb;for(i=0;i<=40;++i){c.H.Cc(new MCb(-500,-75,i*25-500));c.H.Cc(new MCb(500,-75,i*25-500));c.H.Cc(new MCb(i*25-500,-75,-500));c.H.Cc(new MCb(i*25-500,-75,500))}n=new JJb;GJb(n,new Xyb(16777215));n.N=0.2;k=new pNb(c,n,(yNb(),wNb));Pxb(this.B,k);C=new zwb(AZb());swb(C,(x2(),x2(),w2));this.a=new H8;t=new mLb;t.p=C;t.M=true;x8(this.a,t);u=new mLb;gLb(u,new Xyb(14540253));xJb(u,(pKb(),mKb));x8(this.a,u);y=new XLb;QLb(y,new Xyb(197379));RLb(y,new Xyb(14540253));ULb(y,new Xyb(39168));y.v=30;xJb(y,mKb);x8(this.a,y);x8(this.a,new JLb);p=new zKb;uKb(p,new Xyb(16755200));p.M=true;tJb(p,(ZJb(),SJb));x8(this.a,p);v=new mLb;gLb(v,new Xyb(14540253));xJb(v,oKb);x8(this.a,v);A=new XLb;A.r=C;A.M=true;x8(this.a,A);x=new JLb;xJb(x,oKb);x8(this.a,x);q=new zKb;uKb(q,new Xyb(65450));q.g=true;x8(this.a,q);x8(this.a,new VKb);w=new mLb;gLb(w,new Xyb(6710886));iLb(w,new Xyb(16711680));fLb(w,new Xyb(0));xJb(w,oKb);x8(this.a,w);z=new XLb;QLb(z,new Xyb(0));TLb(z,new Xyb(16776960));RLb(z,new Xyb(0));ULb(z,new Xyb(6710886));z.v=10;xJb(z,oKb);z.N=0.9;z.M=true;x8(this.a,z);r=new zKb;q.j=C;q.M=true;x8(this.a,r);g=new UHb(70,32,16);e=new UHb(70,32,16);f=new UHb(70,32,16);for(i=0,j=f.q.Mc();i<j;++i){b=Zq(f.q.Ec(i),147);b.g=0}tzb(f,this.a);x8(this.a,new bLb);this.b=new H8;for(i=0,j=this.a.b;i<j;++i){o=Zq(B8(this.a,i),185);d=o.gC()==DB?f:o.R==mKb?e:g;B=new KNb(d,o);dCb(B.D,i%4*200-400);JCb(B.D,Math.floor(i/4)*200-200);dCb(B.G,Math.random()*200-100);eCb(B.G,Math.random()*200-100);JCb(B.G,Math.random()*200-100);x8(this.b,B);Pxb(this.B,B)}s=new zKb;uKb(s,new Xyb(16777215));this.c=new KNb(new UHb(4,8,8),s);Pxb(this.B,this.c);Pxb(this.B,new XIb(1118481));a=new _Ib(16777215,0.125);dCb(a.D,Math.random()-0.5);eCb(a.D,Math.random()-0.5);JCb(a.D,Math.random()-0.5);a.D.ee();Pxb(this.B,a);this.d=new eJb;Pxb(this.B,this.d)};_.pd=function FZb(){};_.ib=function GZb(a){var b,c,d,e,f;f=1.0E-4*a;dCb(this.z.D,Math.cos(f)*1000);JCb(this.z.D,Math.sin(f)*1000);hyb(this.z,this.B.D);for(b=0,c=this.b.b;b<c;++b){e=Zq(B8(this.b,b),201);e.G.c+=0.01;e.G.d+=0.005;d=Zq(B8(this.a,b),185);b>9&&_q(d,191)?Ryb(Zq(d,191).d,0.54,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&_q(d,190)&&Ryb(Zq(d,190).d,0.04,1,0.7*(0.5+0.5*Math.cos(35*f)))}dCb(this.c.D,Math.sin(f*7)*300);eCb(this.c.D,Math.cos(f*5)*400);JCb(this.c.D,Math.cos(f*3)*300);dCb(this.d.c,this.c.D.c);eCb(this.d.c,this.c.D.d);JCb(this.d.c,this.c.D.b)};_.a=null;_.b=null;_.c=null;_.d=null;var Xy=J2(ebc,'ShaderDepth'),Wy=J2(ebc,'ShaderDepth_Resources_default_InlineClientBundleGenerator'),Uy=J2(ebc,'ShaderDepth_Resources_default_InlineClientBundleGenerator$1'),Vy=J2(ebc,'ShaderDepth_Resources_default_InlineClientBundleGenerator$2'),CB=J2(fbc,'MeshDepthMaterial'),DB=J2(fbc,'MeshFaceMaterial'),SD=J2(M9b,'MaterialsCanvas2D$DemoScene');m6b(be)(17);