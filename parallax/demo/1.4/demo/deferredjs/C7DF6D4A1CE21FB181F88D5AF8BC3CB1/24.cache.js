function JXb(a,b){a.d=b}
function Svb(a,b,c,d,e){Rvb(a,36160,b.a,c.a+d,e,0)}
function XKb(a,b,c,d,e){jvb(b,36160,c);Svb(b,(lzb(),hzb),d,e,a.D)}
function jwb(a,b,c,d,e,f,g){hwb(a,b.a+c,0,f.a,d,e,0,f.a,g.a,null)}
function YKb(){$Jb();SKb.call(this,256,256);this.a=0}
function Vfc(){w5b.call(this);this.i=0;this.j=0;this.g=false;this.d=70;this.e=0;this.f=0;this.k=0;this.o=0}
function uMb(a,b,c){var d,e;e=a.g;d=e.r;e.r=false;e.a=0;ZDb(b,c,a.d,e,false);e.a=1;ZDb(b,c,a.a,e,false);e.a=2;ZDb(b,c,a.e,e,false);e.a=3;ZDb(b,c,a.b,e,false);e.a=4;ZDb(b,c,a.f,e,false);e.r=d;e.a=5;ZDb(b,c,a.c,e,false)}
function vMb(){PLb();fMb.call(this);this.d=new PMb(90,1,1,1000);m2b(this.d.fb,0,-1,0);nMb(this.d,new s2b(1,0,0));QLb(this,this.d);this.a=new PMb(90,1,1,1000);m2b(this.a.fb,0,-1,0);nMb(this.a,new s2b(-1,0,0));QLb(this,this.a);this.e=new PMb(90,1,1,1000);m2b(this.e.fb,0,0,1);nMb(this.e,new s2b(0,1,0));QLb(this,this.e);this.b=new PMb(90,1,1,1000);m2b(this.b.fb,0,0,-1);nMb(this.b,new s2b(0,-1,0));QLb(this,this.b);this.f=new PMb(90,1,1,1000);m2b(this.f.fb,0,-1,0);nMb(this.f,new s2b(0,0,1));QLb(this,this.f);this.c=new PMb(90,1,1,1000);m2b(this.c.fb,0,-1,0);nMb(this.c,new s2b(0,0,-1));QLb(this,this.c);this.g=new YKb;dKb(this.g,(Dzb(),Bzb));gKb(this.g,(hBb(),fBb));iKb(this.g,(sBb(),mBb))}
cS(781,782,{179:1,180:1},YKb);_.Od=function ZKb(){return Cu(Knb(this.b,this.a))};_.Pd=function $Kb(a){var b,c;if(this.b)return;oKb(this,a.createTexture());c=W_b(this.j)&&W_b(this.d);this.b=new Rnb;this.c=new Rnb;mvb(a,(SBb(),LBb),this.D);mKb(this,a,0,LBb,c);for(b=0;b<6;b++){Hnb(this.b,a.createFramebuffer());Hnb(this.c,a.createRenderbuffer());jwb(a,PBb,b,this.j,this.d,this.o,this.C);XKb(this,a,Cu(Knb(this.b,b)),PBb,b);RKb(this,a,Cu(Knb(this.c,b)))}c&&Vvb(a,LBb.a);mvb(a,LBb,null);kvb(a,36161,null);jvb(a,36160,null)};_.Qd=function _Kb(a){mvb(a,(SBb(),LBb),this.D);Vvb(a,LBb.a);mvb(a,LBb,null)};_.a=0;cS(794,793,QAc,vMb);cS(1092,1,aBc);_.yb=function Tfc(){t5b(this.b,new Vfc(this.a))};cS(1093,943,{272:1},Vfc);_.mb=function Wfc(){var a,b,c,d;this.a=new PMb(this.d,NDb(this.D.n),1,1000);d=new vKb('./static/textures/ruins.jpg');b=new NXb;b.k=d;c=new P3b(new fTb(500,60,40),b);C1b(c.eb,-1);QLb(this.F,c);this.c=new vMb;iKb(this.c.g,(sBb(),nBb));QLb(this.F,this.c);a=new NXb;JXb(a,this.c.g);this.n=new P3b(new fTb(20,30,15),a);QLb(this.F,this.n);this.b=new P3b(new sSb(20,20,20),a);QLb(this.F,this.b);this.p=new P3b(new rTb(20,5,100,25),a);QLb(this.F,this.p);ZDb(this.D.n,this.F,this.a,null,false)};_.nb=function Xfc(a){this.f+=0.15;this.e=fib(-85,hib(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;C1b(this.n._,Math.sin(a*0.001)*30);D1b(this.n._,Math.sin(a*0.0011)*30);o2b(this.n._,Math.sin(a*0.0012)*30);C_b(this.n.cb,0.02);D_b(this.n.cb,0.03);C1b(this.b._,Math.sin(a*0.001+2)*30);D1b(this.b._,Math.sin(a*0.0011+2)*30);o2b(this.b._,Math.sin(a*0.0012+2)*30);C_b(this.b.cb,0.02);D_b(this.b.cb,0.03);C1b(this.p._,Math.sin(a*0.001+4)*30);D1b(this.p._,Math.sin(a*0.0011+4)*30);o2b(this.p._,Math.sin(a*0.0012+4)*30);C_b(this.p.cb,0.02);D_b(this.p.cb,0.03);C1b(this.a._,100*mib(this.k)*dib(this.o));D1b(this.a._,100*dib(this.k));o2b(this.a._,100*mib(this.k)*mib(this.o));nMb(this.a,this.F._);$Lb(this.n,false);uMb(this.c,this.D.n,this.F);$Lb(this.n,true);ZDb(this.D.n,this.F,this.a,null,false)};_.d=0;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.o=0;var YL=Tgb(VFc,'MaterialsCubemapDynamicReflection$DemoScene',1093),MG=Tgb(kHc,'CubeCamera',794);mBc(wi)(24);