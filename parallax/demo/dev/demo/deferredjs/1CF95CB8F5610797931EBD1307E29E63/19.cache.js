function Itb(){}
function wvb(){}
function zYb(){}
function YIb(a,b){a.c=b}
function AYb(){dOb.call(this)}
function Vtb(){Ptb.call(this,256,256)}
function xvb(a,b,c){var d,e;e=a.g;d=e.o;e.o=false;e.a=0;znb(b,c,a.d,e,false);e.a=1;znb(b,c,a.a,e,false);e.a=2;znb(b,c,a.e,e,false);e.a=3;znb(b,c,a.b,e,false);e.a=4;znb(b,c,a.f,e,false);e.o=d;e.a=5;znb(b,c,a.c,e,false)}
function yvb(){hvb.call(this);this.d=new Ovb(90,1,1,1000);RAb(this.d.J,0,-1,0);svb(this.d,new WAb(1,0,0));Yub(this,this.d);this.a=new Ovb(90,1,1,1000);RAb(this.a.J,0,-1,0);svb(this.a,new WAb(-1,0,0));Yub(this,this.a);this.e=new Ovb(90,1,1,1000);RAb(this.e.J,0,0,1);svb(this.e,new WAb(0,1,0));Yub(this,this.e);this.b=new Ovb(90,1,1,1000);RAb(this.b.J,0,0,-1);svb(this.b,new WAb(0,-1,0));Yub(this,this.b);this.f=new Ovb(90,1,1,1000);RAb(this.f.J,0,-1,0);svb(this.f,new WAb(0,0,1));Yub(this,this.f);this.c=new Ovb(90,1,1,1000);RAb(this.c.J,0,-1,0);svb(this.c,new WAb(0,0,-1));Yub(this,this.c);this.g=new Vtb;otb(this.g,($lb(),Ylb));qtb(this.g,(gmb(),emb));rtb(this.g,(smb(),mmb))}
var Osc='./static/textures/ruins.jpg',Qsc='CubeCamera',Rsc='MaterialsCubemapDynamicReflection$DemoScene';_=Vtb.prototype=Itb.prototype=new Jtb;_.gC=function Wtb(){return Bz};_.Dd=function Xtb(){return ur(M7(this.b,this.a))};_.Ed=function Ytb(a){var b,c;if(this.b)return;wtb(this,a.createTexture());c=izb(this.j)&&izb(this.d);this.b=new S7;this.c=new S7;jeb(a,(Olb(),elb).a,this.w);utb(this,a,elb.a,c);for(b=0;b<6;++b){I7(this.b,a.createFramebuffer());I7(this.c,a.createRenderbuffer());Reb(a,ilb.a+b,0,this.k.a,this.j,this.d,0,this.k.a,this.v.a,null);Ntb(this,a,ur(M7(this.b,b)),ilb.a+b);Otb(this,a,ur(M7(this.c,b)))}c&&Feb(a,elb.a);jeb(a,elb.a,null);ieb(a,pjb.a,null);heb(a,Ihb.a,null)};_.Fd=function Ztb(a){jeb(a,(Olb(),elb).a,this.w);Feb(a,elb.a);jeb(a,elb.a,null)};_.cM={139:1};_.a=0;_.b=null;_.c=null;_=yvb.prototype=wvb.prototype=new Wub;_.gC=function zvb(){return Mz};_.cM={191:1,197:1};_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_=uYb.prototype;_.qb=function yYb(){_Nb(this.b,new AYb(this.a))};_=AYb.prototype=zYb.prototype=new cOb;_.gC=function BYb(){return TD};_.ud=function CYb(){ccb(this,new Ovb(this.c,Wcb(this.A.C),1,1000))};_.hb=function DYb(){var a,b,c,d;this.z.D.b=400;Yub(this.B,this.z);d=(dNb(),fNb(Osc,(fub(),eub),null));b=new _Ib;b.j=d;c=new fMb(new OFb(500,60,40),b);c.I.c=-1;Yub(this.B,c);this.b=new yvb;rtb(this.b.g,(smb(),nmb));Yub(this.B,this.b);a=new _Ib;YIb(a,this.b.g);this.k=new fMb(new OFb(20,60,40),a);Yub(this.B,this.k);this.a=new fMb(new aFb(20,20,20),a);Yub(this.B,this.a);this.o=new fMb(new aGb(20,5,100,100),a);Yub(this.B,this.o)};_.td=function EYb(){};_.ib=function FYb(a){this.e+=0.15;this.d=c3(-85,e3(85,this.d));this.j=(90-this.d)*3.141592653589793/180;this.n=this.e*3.141592653589793/180;nAb(this.k.D,Math.sin(a*0.001)*30);oAb(this.k.D,Math.sin(a*0.0011)*30);TAb(this.k.D,Math.sin(a*0.0012)*30);this.k.G.c+=0.02;this.k.G.d+=0.03;nAb(this.a.D,Math.sin(a*0.001+2)*30);oAb(this.a.D,Math.sin(a*0.0011+2)*30);TAb(this.a.D,Math.sin(a*0.0012+2)*30);this.a.G.c+=0.02;this.a.G.d+=0.03;nAb(this.o.D,Math.sin(a*0.001+4)*30);oAb(this.o.D,Math.sin(a*0.0011+4)*30);TAb(this.o.D,Math.sin(a*0.0012+4)*30);this.o.G.c+=0.02;this.o.G.d+=0.03;nAb(this.z.D,100*i3(this.j)*a3(this.n));oAb(this.z.D,100*a3(this.j));TAb(this.z.D,100*i3(this.j)*i3(this.n));svb(this.z,new WAb(0,0,0));this.k.M=false;xvb(this.b,this.A,this.B);this.k.M=true};_.cM={213:1};_.a=null;_.b=null;_.c=70;_.d=0;_.e=0;_.f=false;_.g=0;_.i=0;_.j=0;_.k=null;_.n=0;_.o=null;var Mz=e2(Psc,Qsc),TD=e2(aoc,Rsc);Z4b(be)(19);