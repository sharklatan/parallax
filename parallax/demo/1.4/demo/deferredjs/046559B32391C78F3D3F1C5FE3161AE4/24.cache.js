function FXb(a,b){a.d=b}
function Ovb(a,b,c,d,e){Nvb(a,36160,b.a,c.a+d,e,0)}
function TKb(a,b,c,d,e){fvb(b,36160,c);Ovb(b,(hzb(),dzb),d,e,a.D)}
function fwb(a,b,c,d,e,f,g){dwb(a,b.a+c,0,f.a,d,e,0,f.a,g.a,null)}
function UKb(){WJb();OKb.call(this,256,256);this.a=0}
function Rfc(){s5b.call(this);this.i=0;this.j=0;this.g=false;this.d=70;this.e=0;this.f=0;this.k=0;this.o=0}
function qMb(a,b,c){var d,e;e=a.g;d=e.r;e.r=false;e.a=0;VDb(b,c,a.d,e,false);e.a=1;VDb(b,c,a.a,e,false);e.a=2;VDb(b,c,a.e,e,false);e.a=3;VDb(b,c,a.b,e,false);e.a=4;VDb(b,c,a.f,e,false);e.r=d;e.a=5;VDb(b,c,a.c,e,false)}
function rMb(){LLb();bMb.call(this);this.d=new LMb(90,1,1,1000);i2b(this.d.fb,0,-1,0);jMb(this.d,new o2b(1,0,0));MLb(this,this.d);this.a=new LMb(90,1,1,1000);i2b(this.a.fb,0,-1,0);jMb(this.a,new o2b(-1,0,0));MLb(this,this.a);this.e=new LMb(90,1,1,1000);i2b(this.e.fb,0,0,1);jMb(this.e,new o2b(0,1,0));MLb(this,this.e);this.b=new LMb(90,1,1,1000);i2b(this.b.fb,0,0,-1);jMb(this.b,new o2b(0,-1,0));MLb(this,this.b);this.f=new LMb(90,1,1,1000);i2b(this.f.fb,0,-1,0);jMb(this.f,new o2b(0,0,1));MLb(this,this.f);this.c=new LMb(90,1,1,1000);i2b(this.c.fb,0,-1,0);jMb(this.c,new o2b(0,0,-1));MLb(this,this.c);this.g=new UKb;_Jb(this.g,(zzb(),xzb));cKb(this.g,(dBb(),bBb));eKb(this.g,(oBb(),iBb))}
XR(784,785,{179:1,180:1},UKb);_.Od=function VKb(){return uu(Gnb(this.b,this.a))};_.Pd=function WKb(a){var b,c;if(this.b)return;kKb(this,a.createTexture());c=S_b(this.j)&&S_b(this.d);this.b=new Nnb;this.c=new Nnb;ivb(a,(OBb(),HBb),this.D);iKb(this,a,0,HBb,c);for(b=0;b<6;b++){Dnb(this.b,a.createFramebuffer());Dnb(this.c,a.createRenderbuffer());fwb(a,LBb,b,this.j,this.d,this.o,this.C);TKb(this,a,uu(Gnb(this.b,b)),LBb,b);NKb(this,a,uu(Gnb(this.c,b)))}c&&Rvb(a,HBb.a);ivb(a,HBb,null);gvb(a,36161,null);fvb(a,36160,null)};_.Qd=function XKb(a){ivb(a,(OBb(),HBb),this.D);Rvb(a,HBb.a);ivb(a,HBb,null)};_.a=0;XR(797,796,MAc,rMb);XR(1095,1,YAc);_.yb=function Pfc(){p5b(this.b,new Rfc(this.a))};XR(1096,946,{272:1},Rfc);_.mb=function Sfc(){var a,b,c,d;this.a=new LMb(this.d,JDb(this.D.n),1,1000);d=new rKb('./static/textures/ruins.jpg');b=new JXb;b.k=d;c=new L3b(new bTb(500,60,40),b);y1b(c.eb,-1);MLb(this.F,c);this.c=new rMb;eKb(this.c.g,(oBb(),jBb));MLb(this.F,this.c);a=new JXb;FXb(a,this.c.g);this.n=new L3b(new bTb(20,30,15),a);MLb(this.F,this.n);this.b=new L3b(new oSb(20,20,20),a);MLb(this.F,this.b);this.p=new L3b(new nTb(20,5,100,25),a);MLb(this.F,this.p);VDb(this.D.n,this.F,this.a,null,false)};_.nb=function Tfc(a){this.f+=0.15;this.e=bib(-85,dib(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;y1b(this.n._,Math.sin(a*0.001)*30);z1b(this.n._,Math.sin(a*0.0011)*30);k2b(this.n._,Math.sin(a*0.0012)*30);y_b(this.n.cb,0.02);z_b(this.n.cb,0.03);y1b(this.b._,Math.sin(a*0.001+2)*30);z1b(this.b._,Math.sin(a*0.0011+2)*30);k2b(this.b._,Math.sin(a*0.0012+2)*30);y_b(this.b.cb,0.02);z_b(this.b.cb,0.03);y1b(this.p._,Math.sin(a*0.001+4)*30);z1b(this.p._,Math.sin(a*0.0011+4)*30);k2b(this.p._,Math.sin(a*0.0012+4)*30);y_b(this.p.cb,0.02);z_b(this.p.cb,0.03);y1b(this.a._,100*iib(this.k)*_hb(this.o));z1b(this.a._,100*_hb(this.k));k2b(this.a._,100*iib(this.k)*iib(this.o));jMb(this.a,this.F._);WLb(this.n,false);qMb(this.c,this.D.n,this.F);WLb(this.n,true);VDb(this.D.n,this.F,this.a,null,false)};_.d=0;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.o=0;var RL=Pgb(IFc,'MaterialsCubemapDynamicReflection$DemoScene',1096),FG=Pgb(ZGc,'CubeCamera',797);iBc(wi)(24);