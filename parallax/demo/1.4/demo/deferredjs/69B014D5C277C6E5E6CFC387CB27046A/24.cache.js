function MXb(a,b){a.e=b}
function Uvb(a,b,c,d,e){Tvb(a,36160,b.b,c.b+d,e,0)}
function YKb(a,b,c,d,e){lvb(b,36160,c);Uvb(b,(nzb(),jzb),d,e,a.F)}
function lwb(a,b,c,d,e,f,g){jwb(a,b.b+c,0,f.b,d,e,0,f.b,g.b,null)}
function ZKb(){_Jb();TKb.call(this,256,256);this.b=0}
function egc(){r5b.call(this);this.j=0;this.k=0;this.i=false;this.e=70;this.f=0;this.g=0;this.n=0;this.p=0}
function vMb(a,b,c){var d,e;e=a.i;d=e.s;e.s=false;e.b=0;$Db(b,c,a.e,e,false);e.b=1;$Db(b,c,a.b,e,false);e.b=2;$Db(b,c,a.f,e,false);e.b=3;$Db(b,c,a.c,e,false);e.b=4;$Db(b,c,a.g,e,false);e.s=d;e.b=5;$Db(b,c,a.d,e,false)}
function wMb(){QLb();gMb.call(this);this.e=new QMb(90,1,1,1000);i2b(this.e.gb,0,-1,0);oMb(this.e,new o2b(1,0,0));RLb(this,this.e);this.b=new QMb(90,1,1,1000);i2b(this.b.gb,0,-1,0);oMb(this.b,new o2b(-1,0,0));RLb(this,this.b);this.f=new QMb(90,1,1,1000);i2b(this.f.gb,0,0,1);oMb(this.f,new o2b(0,1,0));RLb(this,this.f);this.c=new QMb(90,1,1,1000);i2b(this.c.gb,0,0,-1);oMb(this.c,new o2b(0,-1,0));RLb(this,this.c);this.g=new QMb(90,1,1,1000);i2b(this.g.gb,0,-1,0);oMb(this.g,new o2b(0,0,1));RLb(this,this.g);this.d=new QMb(90,1,1,1000);i2b(this.d.gb,0,-1,0);oMb(this.d,new o2b(0,0,-1));RLb(this,this.d);this.i=new ZKb;eKb(this.i,(Fzb(),Dzb));hKb(this.i,(jBb(),hBb));jKb(this.i,(uBb(),oBb))}
eS(778,779,{179:1,180:1},ZKb);_.Rd=function $Kb(){return Iu(Mnb(this.c,this.b))};_.Sd=function _Kb(a){var b,c;if(this.c)return;pKb(this,a.createTexture());c=T_b(this.k)&&T_b(this.e);this.c=new Tnb;this.d=new Tnb;ovb(a,(UBb(),NBb),this.F);nKb(this,a,0,NBb,c);for(b=0;b<6;b++){Jnb(this.c,a.createFramebuffer());Jnb(this.d,a.createRenderbuffer());lwb(a,RBb,b,this.k,this.e,this.p,this.D);YKb(this,a,Iu(Mnb(this.c,b)),RBb,b);SKb(this,a,Iu(Mnb(this.d,b)))}c&&Xvb(a,NBb.b);ovb(a,NBb,null);mvb(a,36161,null);lvb(a,36160,null)};_.Td=function aLb(a){ovb(a,(UBb(),NBb),this.F);Xvb(a,NBb.b);ovb(a,NBb,null)};_.b=0;eS(791,790,xAc,wMb);eS(1092,1,JAc);_.Cb=function cgc(){o5b(this.c,new egc(this.b))};eS(1093,940,{271:1},egc);_.nb=function fgc(){var a,b,c,d;this.b=new QMb(this.e,ODb(this.F.o),1,1000);d=new wKb('./static/textures/ruins.jpg');b=new QXb;b.n=d;c=new L3b(new iTb(500,60,40),b);y1b(c.fb,-1);RLb(this.G,c);this.d=new wMb;jKb(this.d.i,(uBb(),pBb));RLb(this.G,this.d);a=new QXb;MXb(a,this.d.i);this.o=new L3b(new iTb(20,30,15),a);RLb(this.G,this.o);this.c=new L3b(new tSb(20,20,20),a);RLb(this.G,this.c);this.q=new L3b(new uTb(20,5,100,25),a);RLb(this.G,this.q);$Db(this.F.o,this.G,this.b,null,false)};_.ob=function ggc(a){this.g+=0.15;this.f=hib(-85,jib(85,this.f));this.n=(90-this.f)*3.141592653589793/180;this.p=this.g*3.141592653589793/180;y1b(this.o.ab,Math.sin(a*0.001)*30);z1b(this.o.ab,Math.sin(a*0.0011)*30);k2b(this.o.ab,Math.sin(a*0.0012)*30);z_b(this.o.db,0.02);A_b(this.o.db,0.03);y1b(this.c.ab,Math.sin(a*0.001+2)*30);z1b(this.c.ab,Math.sin(a*0.0011+2)*30);k2b(this.c.ab,Math.sin(a*0.0012+2)*30);z_b(this.c.db,0.02);A_b(this.c.db,0.03);y1b(this.q.ab,Math.sin(a*0.001+4)*30);z1b(this.q.ab,Math.sin(a*0.0011+4)*30);k2b(this.q.ab,Math.sin(a*0.0012+4)*30);z_b(this.q.db,0.02);A_b(this.q.db,0.03);y1b(this.b.ab,100*oib(this.n)*fib(this.p));z1b(this.b.ab,100*fib(this.n));k2b(this.b.ab,100*oib(this.n)*oib(this.p));oMb(this.b,this.G.ab);_Lb(this.o,false);vMb(this.d,this.F.o,this.G);_Lb(this.o,true);$Db(this.F.o,this.G,this.b,null,false)};_.e=0;_.f=0;_.g=0;_.i=false;_.j=0;_.k=0;_.n=0;_.p=0;var fM=Vgb(xFc,'MaterialsCubemapDynamicReflection$DemoScene',1093),SG=Vgb(LGc,'CubeCamera',791);VAc(Hi)(24);