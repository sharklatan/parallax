function zrb(){}
function ntb(){}
function pWb(){}
function PGb(a,b){a.d=b}
function qWb(){WLb.call(this)}
function Mrb(){Grb.call(this,256,256)}
function otb(a,b,c){var d,e;e=a.i;d=e.p;e.p=false;e.b=0;qlb(b,c,a.e,e,false);e.b=1;qlb(b,c,a.b,e,false);e.b=2;qlb(b,c,a.f,e,false);e.b=3;qlb(b,c,a.c,e,false);e.b=4;qlb(b,c,a.g,e,false);e.p=d;e.b=5;qlb(b,c,a.d,e,false)}
function ptb(){$sb.call(this);this.e=new Ftb(90,1,1,1000);Iyb(this.e.K,0,-1,0);jtb(this.e,new Nyb(1,0,0));Psb(this,this.e);this.b=new Ftb(90,1,1,1000);Iyb(this.b.K,0,-1,0);jtb(this.b,new Nyb(-1,0,0));Psb(this,this.b);this.f=new Ftb(90,1,1,1000);Iyb(this.f.K,0,0,1);jtb(this.f,new Nyb(0,1,0));Psb(this,this.f);this.c=new Ftb(90,1,1,1000);Iyb(this.c.K,0,0,-1);jtb(this.c,new Nyb(0,-1,0));Psb(this,this.c);this.g=new Ftb(90,1,1,1000);Iyb(this.g.K,0,-1,0);jtb(this.g,new Nyb(0,0,1));Psb(this,this.g);this.d=new Ftb(90,1,1,1000);Iyb(this.d.K,0,-1,0);jtb(this.d,new Nyb(0,0,-1));Psb(this,this.d);this.i=new Mrb;frb(this.i,(Rjb(),Pjb));hrb(this.i,(Zjb(),Xjb));irb(this.i,(jkb(),dkb))}
_=Mrb.prototype=zrb.prototype=new Arb;_.gC=function Nrb(){return Vy};_.wd=function Orb(){return Wq(D5(this.c,this.b))};_.xd=function Prb(a){var b,c;if(this.c)return;nrb(this,a.createTexture());c=_wb(this.k)&&_wb(this.e);this.c=new J5;this.d=new J5;acb(a,(Fjb(),Xib).b,this.x);lrb(this,a,Xib.b,c);for(b=0;b<6;++b){z5(this.c,a.createFramebuffer());z5(this.d,a.createRenderbuffer());Icb(a,_ib.b+b,0,this.n.b,this.k,this.e,0,this.n.b,this.w.b,null);Erb(this,a,Wq(D5(this.c,b)),_ib.b+b);Frb(this,a,Wq(D5(this.d,b)))}c&&wcb(a,Xib.b);acb(a,Xib.b,null);_bb(a,ghb.b,null);$bb(a,zfb.b,null)};_.yd=function Qrb(a){acb(a,(Fjb(),Xib).b,this.x);wcb(a,Xib.b);acb(a,Xib.b,null)};_.cM={138:1};_.b=0;_.c=null;_.d=null;_=ptb.prototype=ntb.prototype=new Nsb;_.gC=function qtb(){return ez};_.cM={190:1,196:1};_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_.i=null;_=kWb.prototype;_.rb=function oWb(){SLb(this.c,new qWb(this.b))};_=qWb.prototype=pWb.prototype=new VLb;_.gC=function rWb(){return lD};_.nd=function sWb(){V9(this,new Ftb(this.d,Nab(this.B.D),1,1000))};_.ib=function tWb(){var a,b,c,d;this.A.E.c=400;Psb(this.C,this.A);d=(WKb(),YKb('./static/textures/ruins.jpg',(Yrb(),Xrb),null));b=new SGb;b.k=d;c=new YJb(new FDb(500,60,40),b);c.J.d=-1;Psb(this.C,c);this.c=new ptb;irb(this.c.i,(jkb(),ekb));Psb(this.C,this.c);a=new SGb;PGb(a,this.c.i);this.n=new YJb(new FDb(20,60,40),a);Psb(this.C,this.n);this.b=new YJb(new TCb(20,20,20),a);Psb(this.C,this.b);this.p=new YJb(new TDb(20,5,100,100),a);Psb(this.C,this.p)};_.md=function uWb(){};_.jb=function vWb(a){this.f+=0.15;this.e=V0(-85,X0(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;eyb(this.n.E,Math.sin(a*0.001)*30);fyb(this.n.E,Math.sin(a*0.0011)*30);Kyb(this.n.E,Math.sin(a*0.0012)*30);this.n.H.d+=0.02;this.n.H.e+=0.03;eyb(this.b.E,Math.sin(a*0.001+2)*30);fyb(this.b.E,Math.sin(a*0.0011+2)*30);Kyb(this.b.E,Math.sin(a*0.0012+2)*30);this.b.H.d+=0.02;this.b.H.e+=0.03;eyb(this.p.E,Math.sin(a*0.001+4)*30);fyb(this.p.E,Math.sin(a*0.0011+4)*30);Kyb(this.p.E,Math.sin(a*0.0012+4)*30);this.p.H.d+=0.02;this.p.H.e+=0.03;eyb(this.A.E,100*_0(this.k)*T0(this.o));fyb(this.A.E,100*T0(this.k));Kyb(this.A.E,100*_0(this.k)*_0(this.o));jtb(this.A,new Nyb(0,0,0));this.n.N=false;otb(this.c,this.B,this.C);this.n.N=true};_.cM={212:1};_.b=null;_.c=null;_.d=70;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.n=null;_.o=0;_.p=null;var ez=X_(G6b,'CubeCamera'),lD=X_(C5b,'MaterialsCubemapDynamicReflection$DemoScene');m2b(be)(19);