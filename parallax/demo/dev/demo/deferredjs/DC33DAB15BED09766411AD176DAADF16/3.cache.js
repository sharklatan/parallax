function ogc(){Oac.call(this)}
function AXb(a){BXb.call(this,a)}
function DXb(){vXb.call(this,75,2)}
function YXb(){vXb.call(this,75,0)}
function j6b(){k6b.call(this,new i7b,50)}
function AYb(a,b){vQb();BYb.call(this,a,b,50,16776960)}
function gXb(a){var b,c,d,e,f,g,i,j;hSb.call(this);a=3>a?3:a;b=new i7b;c=new v6b(0.5,0.5);g=new grb;this.s.Ec(b);ju(g.a,g.b++,c);for(e=0;e<=a;e++){j=new i7b;s6b(j,50*Math.cos(e/a*6.283185307179586));t6b(j,50*Math.sin(e/a*6.283185307179586));this.s.Ec(j);Yqb(g,new v6b((j.c/50+1)/2,-(j.d/50+1)/2+1))}f=new j7b(0,0,-1);for(d=1;d<=a;d++){i=d+1;this.i.Ec(new RSb(d,i,0,new Erb(iu(ET,dSc,300,[f,f,f]))));su(_qb(this.g,0),173).Ec(new Erb(iu(DT,eSc,298,[(Tgb(d,g.b),su(g.a[d],298)),(Tgb(d+1,g.b),su(g.a[d+1],298)),c])))}$Rb(this);CRb(this,new j6b)}
function BXb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v;hSb.call(this);i=1/(a.b-1);for(g=0;g<=20;g++){o=g*0.05*6.283185307179586;d=tlb(o);q=Clb(o);for(j=0;j<a.b;j++){p=(Tgb(j,a.b),su(a.a[j],300));v=new i7b;s6b(v,d*p.c-q*p.d);t6b(v,q*p.c+d*p.d);f7b(v,p.b);this.s.Ec(v)}}n=a.b;for(f=0;f<20;f++){for(j=0,k=a.b;j<k-1;j++){c=j+n*f;b=c+n;d=c+1+n;e=c+1;r=f*0.05;t=j*i;s=r+0.05;u=t+i;this.i.Ec(new PSb(c,b,e));su(_qb(this.g,0),173).Ec(new Erb(iu(DT,eSc,298,[new v6b(r,t),new v6b(s,t),new v6b(r,u)])));this.i.Ec(new PSb(b,d,e));su(_qb(this.g,0),173).Ec(new Erb(iu(DT,eSc,298,[new v6b(s,t),new v6b(s,u),new v6b(r,u)])))}}fSb(this);$Rb(this);bSb(this,false)}
function DYb(){vQb();var a,b,c,d,e,f,g,i,j,k,n,o,p,q;OQb.call(this);n=new hSb;n.s.Ec(new i7b);n.s.Ec(new j7b(0,100,0));d=new iXb(0,5,25,5,1);e=new M$b;J$b(e,new o4b(16711680));o=new z0b;t0b(o,new o4b(16711680));i=new OYb(n,e);D4b(i.cb,-1.5707963267948966);wQb(this,i);a=new H8b(d,o);s6b(a._,100);D4b(a.cb,-1.5707963267948966);wQb(this,a);f=new M$b;J$b(f,new o4b(65280));p=new z0b;t0b(p,new o4b(65280));j=new OYb(n,f);wQb(this,j);b=new H8b(d,p);t6b(b._,100);wQb(this,b);g=new M$b;J$b(g,new o4b(255));q=new z0b;t0b(q,new o4b(255));k=new OYb(n,g);B4b(k.cb,1.5707963267948966);wQb(this,k);c=new H8b(d,q);f7b(c._,100);B4b(c.cb,1.5707963267948966);wQb(this,c)}
KU(875,825,fSc,gXb);KU(880,825,fSc,AXb);KU(881,879,fSc,DXb);_.ee=function EXb(){var a;a=iu(KT,JQc,142,[iu($R,MQc,-1,[0,2,4]),iu($R,MQc,-1,[0,4,3]),iu($R,MQc,-1,[0,3,5]),iu($R,MQc,-1,[0,5,2]),iu($R,MQc,-1,[1,2,5]),iu($R,MQc,-1,[1,5,3]),iu($R,MQc,-1,[1,3,4]),iu($R,MQc,-1,[1,4,2])]);return a};_.fe=function FXb(){var a;a=iu(JT,JQc,141,[iu(ZR,IRc,-1,[1,0,0]),iu(ZR,IRc,-1,[-1,0,0]),iu(ZR,IRc,-1,[0,1,0]),iu(ZR,IRc,-1,[0,-1,0]),iu(ZR,IRc,-1,[0,0,1]),iu(ZR,IRc,-1,[0,0,-1])]);return a};KU(888,879,fSc,YXb);_.ee=function ZXb(){var a;a=iu(KT,JQc,142,[iu($R,MQc,-1,[2,1,0]),iu($R,MQc,-1,[0,3,2]),iu($R,MQc,-1,[1,3,0]),iu($R,MQc,-1,[2,3,1])]);return a};_.fe=function $Xb(){var a;a=iu(JT,JQc,141,[iu(ZR,IRc,-1,[1,1,1]),iu(ZR,IRc,-1,[-1,-1,1]),iu(ZR,IRc,-1,[-1,1,-1]),iu(ZR,IRc,-1,[1,-1,-1])]);return a};KU(898,816,bSc,AYb);KU(899,816,bSc,DYb);KU(942,1,{},j6b);KU(1057,1,mSc);_.zb=function mgc(){oac(this.b,new ogc(this.a))};KU(1058,975,{},ogc);_.nb=function pgc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v;this.a=new xRb(45,PHb(this.G.k),1,2000);t6b(this.a._,400);wQb(this.H,new aZb(4210752));b=new CZb(16777215);d7b(b._,0,1,0);wQb(this.H,b);v=new _Ob(wXc);VOb(v,(RGb(),QGb));WOb(v,QGb);v.k=16;c=new s1b;c.q=v;k1b(c,new o4b(12303291));D$b(c,(p0b(),n0b));d=new H8b(new UXb(75,20,10),c);d7b(d._,-400,0,200);wQb(this.H,d);k=new H8b(new wXb(75,1),c);d7b(k._,-200,0,200);wQb(this.H,k);n=new H8b(new DXb,c);d7b(n._,0,0,200);wQb(this.H,n);o=new H8b(new YXb,c);d7b(o._,200,0,200);wQb(this.H,o);p=new H8b(new NXb(100,100,4,4),c);d7b(p._,-400,0,0);wQb(this.H,p);q=new H8b(new eXb(100,100,100,4,4,4),c);d7b(q._,-200,0,0);wQb(this.H,q);r=new H8b(new gXb(20),c);d7b(r._,0,0,0);wQb(this.H,r);s=new H8b(new RXb(10,50,20,5),c);d7b(s._,200,0,0);wQb(this.H,s);t=new H8b(new iXb(25,75,100,40,5),c);d7b(t._,400,0,0);wQb(this.H,t);u=new grb;for(a=0;a<50;a++){Yqb(u,new j7b(Math.sin(a*0.2)*Math.sin(a*0.1)*15+50,0,(a-5)*2))}e=new H8b(new AXb(u),c);d7b(e._,-400,0,-200);wQb(this.H,e);f=new H8b(new aYb(50,20,20,20),c);d7b(f._,-200,0,-200);wQb(this.H,f);g=new H8b(new eYb(50,10,50,20),c);d7b(g._,0,0,-200);wQb(this.H,g);i=new DYb;d7b(i._,200,0,-200);wQb(this.H,i);j=new AYb(new j7b(0,1,0),new j7b(0,0,0));d7b(j._,400,0,-200);wQb(this.H,j)};_.ob=function qgc(a){var b,c,d;s6b(this.a._,Math.cos(a*1.0E-4)*800);f7b(this.a._,Math.sin(a*1.0E-4)*800);VQb(this.a,this.H._);for(b=0,c=this.H.Q.b;b<c;b++){d=su(_qb(this.H.Q,b),250);t4b(d.cb,0.01);u4b(d.cb,0.005)}_Hb(this.G.k,this.H,this.a,null,false)};var _K=hkb(dXc,'Geometries$DemoScene',1058),sI=hkb(xXc,'AxisHelper',899),_H=hkb(yXc,'OctahedronGeometry',881),hI=hkb(yXc,'TetrahedronGeometry',888),WH=hkb(yXc,'CircleGeometry',875),$H=hkb(yXc,'LatheGeometry',880);ASc(xi)(3);