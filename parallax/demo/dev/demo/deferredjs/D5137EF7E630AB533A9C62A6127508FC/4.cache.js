function BVb(){}
function GVb(){}
function xdc(){L7b.call(this)}
function zVb(){WUb.call(this,new BVb,20)}
function EVb(){WUb.call(this,new GVb,20)}
function JVb(){WUb.call(this,new LVb,10)}
function LVb(){this.c=200;this.b=200}
function WUb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;yPb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.me(o,t);this.t.Lc(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new v3b(g/b,j/20);q=new v3b(g/b,(j+1)/20);r=new v3b((g+1)/b,j/20);s=new v3b((g+1)/b,(j+1)/20);this.j.Lc(new eQb(c,d,e));this.j.Lc(new eQb(d,f,e));Xu(xpb(this.i,0),173).Lc(new aqb(Nu(rS,_Gc,296,[p,q,r])));Xu(xpb(this.i,0),173).Lc(new aqb(Nu(rS,_Gc,296,[q,s,r])))}}pPb(this);sPb(this,false)}
var zMc='thothbot.parallax.core.shared.geometries.parametric.';yT(869,812,aHc);yT(879,869,aHc,zVb);yT(880,1,{},BVb);_.me=function CVb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Qjb(a)*(1+Zjb(a))+2*(1-Qjb(a)/2)*Qjb(a)*Qjb(b);e=-8*Zjb(a)-2*(1-Qjb(a)/2)*Zjb(a)*Qjb(b)}else{c=3*Qjb(a)*(1+Zjb(a))+2*(1-Qjb(a)/2)*Math.cos(b+3.141592653589793);e=-8*Zjb(a)}d=-2*(1-Qjb(a)/2)*Zjb(b);return new i4b(c,d,e)};yT(881,869,aHc,EVb);yT(882,1,{},GVb);_.me=function HVb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Qjb(c)*(2+a*Math.cos(c/2));e=Zjb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new i4b(d,e,f)};yT(883,869,aHc,JVb);yT(884,1,{},LVb);_.me=function MVb(a,b){var c,d;c=a*this.c;d=b*this.b;return new i4b(c,0,d)};_.b=0;_.c=0;yT(1046,1,hHc);_.Db=function vdc(){l7b(this.c,new xdc(this.b))};yT(1047,961,{},xdc);_.ob=function ydc(){var a,b,c,d,e,f,g,i;this.b=new QOb(45,CFb(this.F.n),1,2000);t3b(this.b.ab,400);QNb(this.G,new pWb(4210752));b=new RWb(16777215);c4b(b.ab,0,0,1);QNb(this.G,b);i=new tMb(wMc);nMb(i,(GEb(),FEb));oMb(i,FEb);i.n=16;d=new Epb;c=new x$b;c.r=i;p$b(c,new o1b(12303291));RXb(c,(CZb(),AZb));Ou(d.b,d.c++,c);a=new MZb;GZb(a,new o1b(16777215));a.j=true;a.X=true;a.$=0.1;RXb(a,AZb);Ou(d.b,d.c++,a);e=A6b(new zVb,d);c4b(e.ab,0,0,0);e.fb.pf(20);QNb(this.G,e);f=A6b(new EVb,d);c4b(f.ab,10,0,0);f.fb.pf(100);QNb(this.G,f);g=A6b(new JVb,d);c4b(g.ab,20,0,0);QNb(this.G,g)};_.pb=function zdc(a){var b,c,d;s3b(this.b.ab,Math.cos(a*1.0E-4)*800);e4b(this.b.ab,Math.sin(a*1.0E-4)*800);mOb(this.b,this.G.ab);for(b=0,c=this.G.R.c;b<c;b++){d=Xu(xpb(this.G.R,b),248);t1b(d.db,0.01);u1b(d.db,0.005)}OFb(this.F.n,this.G,this.b,null,false)};var zL=Eib(dMc,'GeometriesParametric$DemoScene',1047),zI=Eib(yMc,'ParametricGeometry',869),LI=Eib(zMc,'KleinParametricGeometry',879),KI=Eib(zMc,'KleinParametricGeometry$1',880),NI=Eib(zMc,'MobiusParametricGeometry',881),MI=Eib(zMc,'MobiusParametricGeometry$1',882),QI=Eib(zMc,'PlaneParametricGeometry',883),OI=Eib(zMc,'PlaneParametricGeometry$1',884);uHc(Ii)(4);