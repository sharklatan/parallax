function hYb(){}
function mYb(){}
function dhc(){Abc.call(this)}
function fYb(){BXb.call(this,new hYb,20)}
function kYb(){BXb.call(this,new mYb,20)}
function pYb(){BXb.call(this,new rYb,10)}
function rYb(){this.b=200;this.a=200}
function BXb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;cSb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.le(o,t);this.s.Fc(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new U7b(g/b,j/20);q=new U7b(g/b,(j+1)/20);r=new U7b((g+1)/b,j/20);s=new U7b((g+1)/b,(j+1)/20);this.i.Fc(new KSb(c,d,e));this.i.Fc(new KSb(d,f,e));yv(_qb(this.g,0),173).Fc(new Frb(ov(wU,_Nc,301,[p,q,r])));yv(_qb(this.g,0),173).Fc(new Frb(ov(wU,_Nc,301,[q,s,r])))}}VRb(this);YRb(this,false)}
var yTc='thothbot.parallax.core.shared.geometries.parametric.';DV(891,834,aOc);DV(901,891,aOc,fYb);DV(902,1,{},hYb);_.le=function iYb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*slb(a)*(1+Blb(a))+2*(1-slb(a)/2)*slb(a)*slb(b);e=-8*Blb(a)-2*(1-slb(a)/2)*Blb(a)*slb(b)}else{c=3*slb(a)*(1+Blb(a))+2*(1-slb(a)/2)*Math.cos(b+3.141592653589793);e=-8*Blb(a)}d=-2*(1-slb(a)/2)*Blb(b);return new C8b(c,d,e)};DV(903,891,aOc,kYb);DV(904,1,{},mYb);_.le=function nYb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=slb(c)*(2+a*Math.cos(c/2));e=Blb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new C8b(d,e,f)};DV(905,891,aOc,pYb);DV(906,1,{},rYb);_.le=function sYb(a,b){var c,d;c=a*this.b;d=b*this.a;return new C8b(c,0,d)};_.a=0;_.b=0;DV(1076,1,iOc);_.Mb=function bhc(){abc(this.b,new dhc(this.a))};DV(1077,990,{},dhc);_.nb=function ehc(){var a,b,c,d,e,f,g,i;this.a=new oRb(45,sGb(this.G.k),1,2000);Q7b(this.a._,400);kQb(this.H,new IZb(4210752));b=new j$b(16777215);v8b(b._,0,0,1);kQb(this.H,b);i=new POb(vTc);JOb(i,(oGb(),nGb));KOb(i,nGb);i.k=16;d=new grb;c=new c2b;c.q=i;W1b(c,new f5b(12303291));n_b(c,(_0b(),Z0b));pv(d.a,d.b++,c);a=new j1b;d1b(a,new f5b(16777215));a.i=true;a.Y=true;a._=0.1;n_b(a,Z0b);pv(d.a,d.b++,a);e=nac(new fYb,d);v8b(e._,0,0,0);e.eb.ff(20);kQb(this.H,e);f=nac(new kYb,d);v8b(f._,10,0,0);f.eb.ff(100);kQb(this.H,f);g=nac(new pYb,d);v8b(g._,20,0,0);kQb(this.H,g)};_.ob=function fhc(a){var b,c,d;P7b(this.a._,Math.cos(a*1.0E-4)*800);x8b(this.a._,Math.sin(a*1.0E-4)*800);KQb(this.a,this.H._);for(b=0,c=this.H.Q.b;b<c;b++){d=yv(_qb(this.H.Q,b),250);l5b(d.cb,0.01);m5b(d.cb,0.005)}RHb(this.G.k,this.H,this.a,null,false)};var uM=gkb(bTc,'GeometriesParametric$DemoScene',1077),nJ=gkb(xTc,'ParametricGeometry',891),zJ=gkb(yTc,'KleinParametricGeometry',901),yJ=gkb(yTc,'KleinParametricGeometry$1',902),BJ=gkb(yTc,'MobiusParametricGeometry',903),AJ=gkb(yTc,'MobiusParametricGeometry$1',904),DJ=gkb(yTc,'PlaneParametricGeometry',905),CJ=gkb(yTc,'PlaneParametricGeometry$1',906);wOc(Ej)(4);