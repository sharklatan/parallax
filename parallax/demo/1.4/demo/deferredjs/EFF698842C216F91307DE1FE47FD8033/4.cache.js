function qTb(){}
function vTb(){}
function qac(){m5b.call(this)}
function oTb(){LSb.call(this,new qTb,20)}
function tTb(){LSb.call(this,new vTb,20)}
function yTb(){LSb.call(this,new ATb,10)}
function ATb(){this.b=200;this.a=200}
function LSb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;nNb.call(this);n=b+1;for(g=0;g<=20;g++){t=g/20;for(j=0;j<=b;j++){o=j/b;k=a.fe(o,t);this.s.Fc(k)}}for(i=0;i<20;i++){for(j=0;j<b;j++){c=i*n+j;d=i*n+j+1;e=(i+1)*n+j;f=(i+1)*n+j+1;p=new v1b(i/b,j/20);q=new v1b(i/b,(j+1)/20);r=new v1b((i+1)/b,j/20);s=new v1b((i+1)/b,(j+1)/20);this.i.Fc(new VNb(c,d,e));this.i.Fc(new VNb(d,f,e));qu(znb(this.g,0),121).Fc(new cob(gu(LQ,NAc,245,[p,q,r])));qu(znb(this.g,0),121).Fc(new cob(gu(LQ,NAc,245,[q,s,r])))}}eNb(this);hNb(this,false)}
var XFc='thothbot.parallax.core.shared.geometries.parametric.';UR(860,803,OAc);UR(870,860,OAc,oTb);UR(871,1,{},qTb);_.fe=function rTb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Uhb(a)*(1+bib(a))+2*(1-Uhb(a)/2)*Uhb(a)*Uhb(b);e=-8*bib(a)-2*(1-Uhb(a)/2)*bib(a)*Uhb(b)}else{c=3*Uhb(a)*(1+bib(a))+2*(1-Uhb(a)/2)*Math.cos(b+3.141592653589793);e=-8*bib(a)}d=-2*(1-Uhb(a)/2)*bib(b);return new i2b(c,d,e)};UR(872,860,OAc,tTb);UR(873,1,{},vTb);_.fe=function wTb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Uhb(c)*(2+a*Math.cos(c/2));e=bib(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new i2b(d,e,f)};UR(874,860,OAc,yTb);UR(875,1,{},ATb);_.fe=function BTb(a,b){var c,d;c=a*this.b;d=b*this.a;return new i2b(c,0,d)};_.a=0;_.b=0;UR(1021,1,VAc);_.yb=function oac(){j5b(this.b,new qac(this.a))};UR(1022,945,{},qac);_.mb=function rac(){var a,b,c,d,e,f,g,i;this.a=new EMb(45,CDb(this.D.n),1,2000);t1b(this.a._,400);FLb(this.F,new eUb(4210752));b=new GUb(16777215);c2b(b._,0,0,1);FLb(this.F,b);i=new kKb('./static/textures/ash_uvgrid01.jpg');eKb(i,(zCb(),yCb));fKb(i,yCb);i.k=16;d=new Gnb;c=new wYb;c.q=i;oYb(c,new o_b(12303291));HVb(c,(uXb(),sXb));hu(d.a,d.b++,c);a=new EXb;yXb(a,new o_b(16777215));a.i=true;a.W=true;a.Z=0.1;hu(d.a,d.b++,a);e=y4b(new oTb,d);c2b(e._,0,0,0);e.eb.kf(20);FLb(this.F,e);f=y4b(new tTb,d);c2b(f._,10,0,0);f.eb.kf(100);FLb(this.F,f);g=y4b(new yTb,d);c2b(g._,20,0,0);FLb(this.F,g)};_.nb=function sac(a){var b,c,d;s1b(this.a._,Math.cos(a*1.0E-4)*800);e2b(this.a._,Math.sin(a*1.0E-4)*800);cMb(this.a,this.F._);for(b=0,c=this.F.Q.b;b<c;b++){d=qu(znb(this.F.Q,b),196);t_b(d.cb,0.01);u_b(d.cb,0.005)}ODb(this.D.n,this.F,this.a,null,false)};var uK=Igb(CFc,'GeometriesParametric$DemoScene',1022),KH=Igb(WFc,'ParametricGeometry',860),WH=Igb(XFc,'KleinParametricGeometry',870),VH=Igb(XFc,'KleinParametricGeometry$1',871),YH=Igb(XFc,'MobiusParametricGeometry',872),XH=Igb(XFc,'MobiusParametricGeometry$1',873),$H=Igb(XFc,'PlaneParametricGeometry',874),ZH=Igb(XFc,'PlaneParametricGeometry$1',875);fBc(wi)(4);