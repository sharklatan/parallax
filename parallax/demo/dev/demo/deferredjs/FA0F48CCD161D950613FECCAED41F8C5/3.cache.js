function vgc(){Vac.call(this)}
function HXb(a){IXb.call(this,a)}
function KXb(){CXb.call(this,75,2)}
function dYb(){CXb.call(this,75,0)}
function q6b(){r6b.call(this,new p7b,50)}
function HYb(a,b){CQb();IYb.call(this,a,b,50,16776960)}
function nXb(a){var b,c,d,e,f,g,i,j;oSb.call(this);a=3>a?3:a;b=new p7b;c=new C6b(0.5,0.5);g=new nrb;this.t.Hc(b);wu(g.b,g.c++,c);for(e=0;e<=a;e++){j=new p7b;z6b(j,50*Math.cos(e/a*6.283185307179586));A6b(j,50*Math.sin(e/a*6.283185307179586));this.t.Hc(j);drb(g,new C6b((j.d/50+1)/2,-(j.e/50+1)/2+1))}f=new q7b(0,0,-1);for(d=1;d<=a;d++){i=d+1;this.j.Hc(new YSb(d,i,0,new Lrb(vu(QT,mSc,300,[f,f,f]))));Fu(grb(this.i,0),173).Hc(new Lrb(vu(PT,nSc,298,[($gb(d,g.c),Fu(g.b[d],298)),($gb(d+1,g.c),Fu(g.b[d+1],298)),c])))}fSb(this);JRb(this,new q6b)}
function IXb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v;oSb.call(this);i=1/(a.c-1);for(g=0;g<=20;g++){o=g*0.05*6.283185307179586;d=Alb(o);q=Jlb(o);for(j=0;j<a.c;j++){p=($gb(j,a.c),Fu(a.b[j],300));v=new p7b;z6b(v,d*p.d-q*p.e);A6b(v,q*p.d+d*p.e);m7b(v,p.c);this.t.Hc(v)}}n=a.c;for(f=0;f<20;f++){for(j=0,k=a.c;j<k-1;j++){c=j+n*f;b=c+n;d=c+1+n;e=c+1;r=f*0.05;t=j*i;s=r+0.05;u=t+i;this.j.Hc(new WSb(c,b,e));Fu(grb(this.i,0),173).Hc(new Lrb(vu(PT,nSc,298,[new C6b(r,t),new C6b(s,t),new C6b(r,u)])));this.j.Hc(new WSb(b,d,e));Fu(grb(this.i,0),173).Hc(new Lrb(vu(PT,nSc,298,[new C6b(s,t),new C6b(s,u),new C6b(r,u)])))}}mSb(this);fSb(this);iSb(this,false)}
function KYb(){CQb();var a,b,c,d,e,f,g,i,j,k,n,o,p,q;VQb.call(this);n=new oSb;n.t.Hc(new p7b);n.t.Hc(new q7b(0,100,0));d=new pXb(0,5,25,5,1);e=new T$b;Q$b(e,new v4b(16711680));o=new G0b;A0b(o,new v4b(16711680));i=new VYb(n,e);K4b(i.db,-1.5707963267948966);DQb(this,i);a=new O8b(d,o);z6b(a.ab,100);K4b(a.db,-1.5707963267948966);DQb(this,a);f=new T$b;Q$b(f,new v4b(65280));p=new G0b;A0b(p,new v4b(65280));j=new VYb(n,f);DQb(this,j);b=new O8b(d,p);A6b(b.ab,100);DQb(this,b);g=new T$b;Q$b(g,new v4b(255));q=new G0b;A0b(q,new v4b(255));k=new VYb(n,g);I4b(k.db,1.5707963267948966);DQb(this,k);c=new O8b(d,q);m7b(c.ab,100);I4b(c.db,1.5707963267948966);DQb(this,c)}
WU(869,819,oSc,nXb);WU(874,819,oSc,HXb);WU(875,873,oSc,KXb);_.he=function LXb(){var a;a=vu(WT,RQc,142,[vu(kS,UQc,-1,[0,2,4]),vu(kS,UQc,-1,[0,4,3]),vu(kS,UQc,-1,[0,3,5]),vu(kS,UQc,-1,[0,5,2]),vu(kS,UQc,-1,[1,2,5]),vu(kS,UQc,-1,[1,5,3]),vu(kS,UQc,-1,[1,3,4]),vu(kS,UQc,-1,[1,4,2])]);return a};_.ie=function MXb(){var a;a=vu(VT,RQc,141,[vu(jS,RRc,-1,[1,0,0]),vu(jS,RRc,-1,[-1,0,0]),vu(jS,RRc,-1,[0,1,0]),vu(jS,RRc,-1,[0,-1,0]),vu(jS,RRc,-1,[0,0,1]),vu(jS,RRc,-1,[0,0,-1])]);return a};WU(882,873,oSc,dYb);_.he=function eYb(){var a;a=vu(WT,RQc,142,[vu(kS,UQc,-1,[2,1,0]),vu(kS,UQc,-1,[0,3,2]),vu(kS,UQc,-1,[1,3,0]),vu(kS,UQc,-1,[2,3,1])]);return a};_.ie=function fYb(){var a;a=vu(VT,RQc,141,[vu(jS,RRc,-1,[1,1,1]),vu(jS,RRc,-1,[-1,-1,1]),vu(jS,RRc,-1,[-1,1,-1]),vu(jS,RRc,-1,[1,-1,-1])]);return a};WU(892,810,kSc,HYb);WU(893,810,kSc,KYb);WU(936,1,{},q6b);WU(1051,1,vSc);_.Db=function tgc(){vac(this.c,new vgc(this.b))};WU(1052,969,{},vgc);_.ob=function wgc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v;this.b=new ERb(45,WHb(this.H.n),1,2000);A6b(this.b.ab,400);DQb(this.I,new hZb(4210752));b=new JZb(16777215);k7b(b.ab,0,1,0);DQb(this.I,b);v=new gPb(IXc);aPb(v,(YGb(),XGb));bPb(v,XGb);v.n=16;c=new z1b;c.r=v;r1b(c,new v4b(12303291));K$b(c,(w0b(),u0b));d=new O8b(new _Xb(75,20,10),c);k7b(d.ab,-400,0,200);DQb(this.I,d);k=new O8b(new DXb(75,1),c);k7b(k.ab,-200,0,200);DQb(this.I,k);n=new O8b(new KXb,c);k7b(n.ab,0,0,200);DQb(this.I,n);o=new O8b(new dYb,c);k7b(o.ab,200,0,200);DQb(this.I,o);p=new O8b(new UXb(100,100,4,4),c);k7b(p.ab,-400,0,0);DQb(this.I,p);q=new O8b(new lXb(100,100,100,4,4,4),c);k7b(q.ab,-200,0,0);DQb(this.I,q);r=new O8b(new nXb(20),c);k7b(r.ab,0,0,0);DQb(this.I,r);s=new O8b(new YXb(10,50,20,5),c);k7b(s.ab,200,0,0);DQb(this.I,s);t=new O8b(new pXb(25,75,100,40,5),c);k7b(t.ab,400,0,0);DQb(this.I,t);u=new nrb;for(a=0;a<50;a++){drb(u,new q7b(Math.sin(a*0.2)*Math.sin(a*0.1)*15+50,0,(a-5)*2))}e=new O8b(new HXb(u),c);k7b(e.ab,-400,0,-200);DQb(this.I,e);f=new O8b(new hYb(50,20,20,20),c);k7b(f.ab,-200,0,-200);DQb(this.I,f);g=new O8b(new lYb(50,10,50,20),c);k7b(g.ab,0,0,-200);DQb(this.I,g);i=new KYb;k7b(i.ab,200,0,-200);DQb(this.I,i);j=new HYb(new q7b(0,1,0),new q7b(0,0,0));k7b(j.ab,400,0,-200);DQb(this.I,j)};_.pb=function xgc(a){var b,c,d;z6b(this.b.ab,Math.cos(a*1.0E-4)*800);m7b(this.b.ab,Math.sin(a*1.0E-4)*800);aRb(this.b,this.I.ab);for(b=0,c=this.I.R.c;b<c;b++){d=Fu(grb(this.I.R,b),250);A4b(d.db,0.01);B4b(d.db,0.005)}gIb(this.H.n,this.I,this.b,null,false)};var lL=okb(pXc,'Geometries$DemoScene',1052),EI=okb(JXc,'AxisHelper',893),lI=okb(KXc,'OctahedronGeometry',875),tI=okb(KXc,'TetrahedronGeometry',882),gI=okb(KXc,'CircleGeometry',869),kI=okb(KXc,'LatheGeometry',874);JSc(Hi)(3);