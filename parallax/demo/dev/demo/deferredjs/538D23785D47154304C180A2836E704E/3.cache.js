function cfc(){J9b.call(this)}
function uWb(a){vWb.call(this,a)}
function xWb(){pWb.call(this,75,2)}
function SWb(){pWb.call(this,75,0)}
function d5b(){e5b.call(this,new c6b,50)}
function uXb(a,b){lPb();vXb.call(this,a,b,50,16776960)}
function aWb(a){var b,c,d,e,f,g,i,j;bRb.call(this);a=3>a?3:a;b=new c6b;c=new p5b(0.5,0.5);g=new Dqb;this.s.Fc(b);ju(g.a,g.b++,c);for(d=0;d<=a;d++){j=new c6b;m5b(j,50*Math.cos(d/a*6.283185307179586));n5b(j,50*Math.sin(d/a*6.283185307179586));this.s.Fc(j);tqb(g,new p5b((j.c/50+1)/2,-(j.d/50+1)/2+1))}f=new d6b(0,0,-1);for(e=1;e<=a;e++){i=e+1;this.i.Fc(new LRb(e,i,0,new _qb(iu(XS,JLc,299,[f,f,f]))));su(wqb(this.g,0),173).Fc(new _qb(iu(WS,KLc,297,[(ngb(e,g.b),su(g.a[e],297)),(ngb(e+1,g.b),su(g.a[e+1],297)),c])))}UQb(this);wQb(this,new d5b)}
function vWb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v;bRb.call(this);i=1/(a.b-1);for(f=0;f<=20;f++){o=f*0.05*6.283185307179586;d=Pkb(o);q=Ykb(o);for(j=0;j<a.b;j++){p=(ngb(j,a.b),su(a.a[j],299));v=new c6b;m5b(v,d*p.c-q*p.d);n5b(v,q*p.c+d*p.d);_5b(v,p.b);this.s.Fc(v)}}n=a.b;for(g=0;g<20;g++){for(j=0,k=a.b;j<k-1;j++){c=j+n*g;b=c+n;d=c+1+n;e=c+1;r=g*0.05;t=j*i;s=r+0.05;u=t+i;this.i.Fc(new JRb(c,b,e));su(wqb(this.g,0),173).Fc(new _qb(iu(WS,KLc,297,[new p5b(r,t),new p5b(s,t),new p5b(r,u)])));this.i.Fc(new JRb(b,d,e));su(wqb(this.g,0),173).Fc(new _qb(iu(WS,KLc,297,[new p5b(s,t),new p5b(s,u),new p5b(r,u)])))}}_Qb(this);UQb(this);XQb(this,false)}
function xXb(){lPb();var a,b,c,d,e,f,g,i,j,k,n,o,p,q;EPb.call(this);n=new bRb;n.s.Fc(new c6b);n.s.Fc(new d6b(0,100,0));d=new cWb(0,5,25,5,1);e=new GZb;DZb(e,new i3b(16711680));o=new t_b;n_b(o,new i3b(16711680));i=new IXb(n,e);x3b(i.cb,-1.5707963267948966);mPb(this,i);a=new B7b(d,o);m5b(a._,100);x3b(a.cb,-1.5707963267948966);mPb(this,a);f=new GZb;DZb(f,new i3b(65280));p=new t_b;n_b(p,new i3b(65280));j=new IXb(n,f);mPb(this,j);b=new B7b(d,p);n5b(b._,100);mPb(this,b);g=new GZb;DZb(g,new i3b(255));q=new t_b;n_b(q,new i3b(255));k=new IXb(n,g);v3b(k.cb,1.5707963267948966);mPb(this,k);c=new B7b(d,q);_5b(c._,100);v3b(c.cb,1.5707963267948966);mPb(this,c)}
bU(874,824,LLc,aWb);bU(879,824,LLc,uWb);bU(880,878,LLc,xWb);_.he=function yWb(){var a;a=iu(bT,mKc,142,[iu(tR,pKc,-1,[0,2,4]),iu(tR,pKc,-1,[0,4,3]),iu(tR,pKc,-1,[0,3,5]),iu(tR,pKc,-1,[0,5,2]),iu(tR,pKc,-1,[1,2,5]),iu(tR,pKc,-1,[1,5,3]),iu(tR,pKc,-1,[1,3,4]),iu(tR,pKc,-1,[1,4,2])]);return a};_.ie=function zWb(){var a;a=iu(aT,mKc,141,[iu(sR,mLc,-1,[1,0,0]),iu(sR,mLc,-1,[-1,0,0]),iu(sR,mLc,-1,[0,1,0]),iu(sR,mLc,-1,[0,-1,0]),iu(sR,mLc,-1,[0,0,1]),iu(sR,mLc,-1,[0,0,-1])]);return a};bU(887,878,LLc,SWb);_.he=function TWb(){var a;a=iu(bT,mKc,142,[iu(tR,pKc,-1,[2,1,0]),iu(tR,pKc,-1,[0,3,2]),iu(tR,pKc,-1,[1,3,0]),iu(tR,pKc,-1,[2,3,1])]);return a};_.ie=function UWb(){var a;a=iu(aT,mKc,141,[iu(sR,mLc,-1,[1,1,1]),iu(sR,mLc,-1,[-1,-1,1]),iu(sR,mLc,-1,[-1,1,-1]),iu(sR,mLc,-1,[1,-1,-1])]);return a};bU(897,815,HLc,uXb);bU(898,815,HLc,xXb);bU(941,1,{},d5b);bU(1057,1,SLc);_.zb=function afc(){j9b(this.b,new cfc(this.a))};bU(1058,974,{},cfc);_.nb=function dfc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v;this.a=new pQb(45,FGb(this.G.k),1,2000);n5b(this.a._,400);mPb(this.H,new WXb(4210752));b=new wYb(16777215);Z5b(b._,0,1,0);mPb(this.H,b);v=new RNb(_Qc);LNb(v,(IFb(),HFb));MNb(v,HFb);v.k=16;c=new m0b;c.q=v;e0b(c,new i3b(12303291));xZb(c,(j_b(),h_b));d=new B7b(new OWb(75,20,10),c);Z5b(d._,-400,0,200);mPb(this.H,d);k=new B7b(new qWb(75,1),c);Z5b(k._,-200,0,200);mPb(this.H,k);n=new B7b(new xWb,c);Z5b(n._,0,0,200);mPb(this.H,n);o=new B7b(new SWb,c);Z5b(o._,200,0,200);mPb(this.H,o);p=new B7b(new HWb(100,100,4,4),c);Z5b(p._,-400,0,0);mPb(this.H,p);q=new B7b(new $Vb(100,100,100,4,4,4),c);Z5b(q._,-200,0,0);mPb(this.H,q);r=new B7b(new aWb(20),c);Z5b(r._,0,0,0);mPb(this.H,r);s=new B7b(new LWb(10,50,20,5),c);Z5b(s._,200,0,0);mPb(this.H,s);t=new B7b(new cWb(25,75,100,40,5),c);Z5b(t._,400,0,0);mPb(this.H,t);u=new Dqb;for(a=0;a<50;a++){tqb(u,new d6b(Math.sin(a*0.2)*Math.sin(a*0.1)*15+50,0,(a-5)*2))}e=new B7b(new uWb(u),c);Z5b(e._,-400,0,-200);mPb(this.H,e);f=new B7b(new WWb(50,20,20,20),c);Z5b(f._,-200,0,-200);mPb(this.H,f);g=new B7b(new $Wb(50,10,50,20),c);Z5b(g._,0,0,-200);mPb(this.H,g);i=new xXb;Z5b(i._,200,0,-200);mPb(this.H,i);j=new uXb(new d6b(0,1,0),new d6b(0,0,0));Z5b(j._,400,0,-200);mPb(this.H,j)};_.ob=function efc(a){var b,c,d;m5b(this.a._,Math.cos(a*1.0E-4)*800);_5b(this.a._,Math.sin(a*1.0E-4)*800);LPb(this.a,this.H._);for(b=0,c=this.H.Q.b;b<c;b++){d=su(wqb(this.H.Q,b),249);n3b(d.cb,0.01);o3b(d.cb,0.005)}RGb(this.G.k,this.H,this.a,null,false)};var ZK=Djb(IQc,'Geometries$DemoScene',1058),qI=Djb(aRc,'AxisHelper',898),ZH=Djb(bRc,'OctahedronGeometry',880),fI=Djb(bRc,'TetrahedronGeometry',887),UH=Djb(bRc,'CircleGeometry',874),YH=Djb(bRc,'LatheGeometry',879);eMc(xi)(3);