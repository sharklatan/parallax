function Bpc(){}
function Cpc(){j7b.call(this)}
function uNb(a){BNb(a,a.e*a.e);yNb(a,a.c*a.c);xNb(a,a.b*a.b);return a}
_=wpc.prototype;_.wb=function Apc(){f7b(this.c,new Cpc(this.b))};_=Cpc.prototype=Bpc.prototype=new i7b;_.gC=function Dpc(){return wH};_.nb=function Epc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z;this.b=new jNb(25,eDb(this.D.o),50,10000000);this.b.X.c=44597;this.c=new Xtb(this.b,this.D.c);this.c.p=0.2;this.c.b=0.3;this.c.n=7008.1;this.c.k=637100;b=new q$b(16777215);_Sb(b.X,-1,0,1).Be();kMb(this.E,b);s=new AKb('./static/textures/planets/earth_atmos_2048.jpg');a=new AKb('./static/textures/planets/earth_clouds_1024.png');j=new AKb('./static/textures/planets/earth_normal_2048.jpg');u=new AKb('./static/textures/planets/earth_specular_2048.jpg');i=new AKb(VPc);g=new p4b(new wHb);g.d=true;y=q_b(g).j;CJb(Mq(y.b[WPc],166),j);xSb(Mq(Mq(y.b[XPc],166).e,192),0.85,0.85);CJb(Mq(y.b[_Oc],166),s);CJb(Mq(y.b[YPc],166),u);CJb(Mq(y.b[ZPc],166),(beb(),beb(),_db));CJb(Mq(y.b[$Pc],166),aeb);CJb(Mq(y.b[ZOc],166),aeb);ANb(Mq(Mq(y.b[dPc],166).e,178),16777215);ANb(Mq(Mq(y.b[ePc],166).e,178),6710886);ANb(Mq(Mq(y.b[cPc],166).e,178),0);CJb(Mq(y.b[_Pc],166),new _eb(20));uNb(Mq(Mq(y.b[dPc],166).e,178));uNb(Mq(Mq(y.b[ePc],166).e,178));uNb(Mq(Mq(y.b[cPc],166).e,178));c=new fYb(6371,100,50);hOb(c);this.f=new b5b(c,g);this.f.$.e=0;this.f.$.c=0.41;kMb(this.E,this.f);e=new x2b;r2b(e,new FNb(16777215));e.q=a;e.R=true;this.d=new b5b(c,e);aTb(this.d.ab,1.005);this.d.$.c=0.41;kMb(this.E,this.d);f=new r3b;j3b(f,new FNb(16777215));f.u=i;this.e=new b5b(c,f);_Sb(this.e.X,31855,0,0);aTb(this.e.ab,0.23);kMb(this.E,this.e);w=new pOb;for(d=0;d<1500;++d){z=new eTb;ySb(z,Math.random()*2-1);zSb(z,Math.random()*2-1);cTb(z,Math.random()*2-1);z.Ae(6371);w.y.Ec(z)}k=new X3b;V3b(k,new FNb(5592405));k.e=2;k.f=false;x=new smb;Eq(x.b,x.c++,k);n=new X3b;V3b(n,new FNb(5592405));n.e=1;n.f=false;Eq(x.b,x.c++,n);o=new X3b;V3b(o,new FNb(3355443));o.e=2;o.f=false;Eq(x.b,x.c++,o);p=new X3b;V3b(p,new FNb(3815994));p.e=1;p.f=false;Eq(x.b,x.c++,p);q=new X3b;V3b(q,new FNb(1710618));q.e=2;q.f=false;Eq(x.b,x.c++,q);r=new X3b;V3b(r,new FNb(1710618));r.e=1;r.f=false;Eq(x.b,x.c++,r);for(d=10;d<30;++d){v=new u5b(w,Mq((hbb(d%6,x.c),x.b[d%6]),224));ySb(v.$,Math.random()*6);zSb(v.$,Math.random()*6);cTb(v.$,Math.random()*6);t=d*10;aTb(v.ab,t);v.S=false;vMb(v);kMb(this.E,v)}this.D.o.U=false;this.D.o.O=false;this.D.o.Q=true;this.D.o.R=true;this.g=Uc()};_.ob=function Fpc(a){var b,c;c=(Uc()-this.g)*0.001;tSb(this.f.$,0.1*c);tSb(this.d.$,0.125*c);b=c*0.1;pMb(this.e,new fTb(Math.cos(b)*this.e.X.d-Math.sin(b)*this.e.X.c,0,Math.sin(b)*this.e.X.d+Math.cos(b)*this.e.X.c));tSb(this.e.$,-b);Vtb(this.c);bDb(this.D.o);this.g=Uc();jDb(this.D.o,this.E,this.b,null,false)};_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=0;var wH=Qeb(uOc,'TrackballEarth$DemoScene',RD);_Kc(Wd)(39);