function fYb(a,b){a.e=b}
function nwb(a,b,c,d,e){mwb(a,36160,b.b,c.b+d,e,0)}
function rLb(a,b,c,d,e){Gvb(b,36160,c);nwb(b,(Izb(),Ezb),d,e,a.F)}
function Gwb(a,b,c,d,e,f,g){Ewb(a,b.b+c,0,f.b,d,e,0,f.b,g.b,null)}
function sLb(){uKb();mLb.call(this,256,256);this.b=0}
function zgc(){M5b.call(this);this.j=0;this.k=0;this.i=false;this.e=70;this.f=0;this.g=0;this.n=0;this.p=0}
function QMb(a,b,c){var d,e;e=a.i;d=e.s;e.s=false;e.b=0;tEb(b,c,a.e,e,false);e.b=1;tEb(b,c,a.b,e,false);e.b=2;tEb(b,c,a.f,e,false);e.b=3;tEb(b,c,a.c,e,false);e.b=4;tEb(b,c,a.g,e,false);e.s=d;e.b=5;tEb(b,c,a.d,e,false)}
function RMb(){jMb();BMb.call(this);this.e=new jNb(90,1,1,1000);D2b(this.e.gb,0,-1,0);JMb(this.e,new J2b(1,0,0));kMb(this,this.e);this.b=new jNb(90,1,1,1000);D2b(this.b.gb,0,-1,0);JMb(this.b,new J2b(-1,0,0));kMb(this,this.b);this.f=new jNb(90,1,1,1000);D2b(this.f.gb,0,0,1);JMb(this.f,new J2b(0,1,0));kMb(this,this.f);this.c=new jNb(90,1,1,1000);D2b(this.c.gb,0,0,-1);JMb(this.c,new J2b(0,-1,0));kMb(this,this.c);this.g=new jNb(90,1,1,1000);D2b(this.g.gb,0,-1,0);JMb(this.g,new J2b(0,0,1));kMb(this,this.g);this.d=new jNb(90,1,1,1000);D2b(this.d.gb,0,-1,0);JMb(this.d,new J2b(0,0,-1));kMb(this,this.d);this.i=new sLb;zKb(this.i,($zb(),Yzb));CKb(this.i,(EBb(),CBb));EKb(this.i,(PBb(),JBb))}
BS(784,785,{179:1,180:1},sLb);_.Vd=function tLb(){return $u(fob(this.c,this.b))};_.Wd=function uLb(a){var b,c;if(this.c)return;KKb(this,a.createTexture());c=m0b(this.k)&&m0b(this.e);this.c=new mob;this.d=new mob;Jvb(a,(nCb(),gCb),this.F);IKb(this,a,0,gCb,c);for(b=0;b<6;b++){cob(this.c,a.createFramebuffer());cob(this.d,a.createRenderbuffer());Gwb(a,kCb,b,this.k,this.e,this.p,this.D);rLb(this,a,$u(fob(this.c,b)),kCb,b);lLb(this,a,$u(fob(this.d,b)))}c&&qwb(a,gCb.b);Jvb(a,gCb,null);Hvb(a,36161,null);Gvb(a,36160,null)};_.Xd=function vLb(a){Jvb(a,(nCb(),gCb),this.F);qwb(a,gCb.b);Jvb(a,gCb,null)};_.b=0;BS(797,796,SAc,RMb);BS(1098,1,cBc);_.Cb=function xgc(){J5b(this.c,new zgc(this.b))};BS(1099,946,{271:1},zgc);_.nb=function Agc(){var a,b,c,d;this.b=new jNb(this.e,hEb(this.F.o),1,1000);d=new RKb('./static/textures/ruins.jpg');b=new jYb;b.n=d;c=new e4b(new DTb(500,60,40),b);T1b(c.fb,-1);kMb(this.G,c);this.d=new RMb;EKb(this.d.i,(PBb(),KBb));kMb(this.G,this.d);a=new jYb;fYb(a,this.d.i);this.o=new e4b(new DTb(20,30,15),a);kMb(this.G,this.o);this.c=new e4b(new OSb(20,20,20),a);kMb(this.G,this.c);this.q=new e4b(new PTb(20,5,100,25),a);kMb(this.G,this.q);tEb(this.F.o,this.G,this.b,null,false)};_.ob=function Bgc(a){this.g+=0.15;this.f=Bib(-85,Dib(85,this.f));this.n=(90-this.f)*3.141592653589793/180;this.p=this.g*3.141592653589793/180;T1b(this.o.ab,Math.sin(a*0.001)*30);U1b(this.o.ab,Math.sin(a*0.0011)*30);F2b(this.o.ab,Math.sin(a*0.0012)*30);U_b(this.o.db,0.02);V_b(this.o.db,0.03);T1b(this.c.ab,Math.sin(a*0.001+2)*30);U1b(this.c.ab,Math.sin(a*0.0011+2)*30);F2b(this.c.ab,Math.sin(a*0.0012+2)*30);U_b(this.c.db,0.02);V_b(this.c.db,0.03);T1b(this.q.ab,Math.sin(a*0.001+4)*30);U1b(this.q.ab,Math.sin(a*0.0011+4)*30);F2b(this.q.ab,Math.sin(a*0.0012+4)*30);U_b(this.q.db,0.02);V_b(this.q.db,0.03);T1b(this.b.ab,100*Iib(this.n)*zib(this.p));U1b(this.b.ab,100*zib(this.n));F2b(this.b.ab,100*Iib(this.n)*Iib(this.p));JMb(this.b,this.G.ab);uMb(this.o,false);QMb(this.d,this.F.o,this.G);uMb(this.o,true);tEb(this.F.o,this.G,this.b,null,false)};_.e=0;_.f=0;_.g=0;_.i=false;_.j=0;_.k=0;_.n=0;_.p=0;var DM=nhb(XFc,'MaterialsCubemapDynamicReflection$DemoScene',1099),nH=nhb(jHc,'CubeCamera',797);oBc(Ii)(24);