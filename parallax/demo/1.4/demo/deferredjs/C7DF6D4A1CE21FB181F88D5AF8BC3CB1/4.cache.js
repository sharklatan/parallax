function zTb(){}
function ETb(){}
function xac(){w5b.call(this)}
function xTb(){WSb.call(this,new zTb,20)}
function CTb(){WSb.call(this,new ETb,20)}
function HTb(){WSb.call(this,new JTb,10)}
function JTb(){this.b=200;this.a=200}
function WSb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;yNb.call(this);n=b+1;for(g=0;g<=20;g++){t=g/20;for(j=0;j<=b;j++){o=j/b;k=a.fe(o,t);this.s.Fc(k)}}for(i=0;i<20;i++){for(j=0;j<b;j++){c=i*n+j;d=i*n+j+1;e=(i+1)*n+j;f=(i+1)*n+j+1;p=new F1b(i/b,j/20);q=new F1b(i/b,(j+1)/20);r=new F1b((i+1)/b,j/20);s=new F1b((i+1)/b,(j+1)/20);this.i.Fc(new eOb(c,d,e));this.i.Fc(new eOb(d,f,e));Au(Knb(this.g,0),121).Fc(new nob(qu(VQ,UAc,245,[p,q,r])));Au(Knb(this.g,0),121).Fc(new nob(qu(VQ,UAc,245,[q,s,r])))}}pNb(this);sNb(this,false)}
var nGc='thothbot.parallax.core.shared.geometries.parametric.';cS(859,802,VAc);cS(868,859,VAc,xTb);cS(869,1,{},zTb);_.fe=function ATb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*dib(a)*(1+mib(a))+2*(1-dib(a)/2)*dib(a)*dib(b);e=-8*mib(a)-2*(1-dib(a)/2)*mib(a)*dib(b)}else{c=3*dib(a)*(1+mib(a))+2*(1-dib(a)/2)*Math.cos(b+3.141592653589793);e=-8*mib(a)}d=-2*(1-dib(a)/2)*mib(b);return new s2b(c,d,e)};cS(870,859,VAc,CTb);cS(871,1,{},ETb);_.fe=function FTb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=dib(c)*(2+a*Math.cos(c/2));e=mib(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new s2b(d,e,f)};cS(872,859,VAc,HTb);cS(873,1,{},JTb);_.fe=function KTb(a,b){var c,d;c=a*this.b;d=b*this.a;return new s2b(c,0,d)};_.a=0;_.b=0;cS(1019,1,aBc);_.yb=function vac(){t5b(this.b,new xac(this.a))};cS(1020,943,{},xac);_.mb=function yac(){var a,b,c,d,e,f,g,i;this.a=new PMb(45,NDb(this.D.n),1,2000);D1b(this.a._,400);QLb(this.F,new nUb(4210752));b=new PUb(16777215);m2b(b._,0,0,1);QLb(this.F,b);i=new vKb(kGc);pKb(i,(KCb(),JCb));qKb(i,JCb);i.k=16;d=new Rnb;c=new FYb;c.q=i;xYb(c,new x_b(12303291));QVb(c,(DXb(),BXb));ru(d.a,d.b++,c);a=new NXb;HXb(a,new x_b(16777215));a.i=true;a.W=true;a.Z=0.1;ru(d.a,d.b++,a);e=I4b(new xTb,d);m2b(e._,0,0,0);e.eb.kf(20);QLb(this.F,e);f=I4b(new CTb,d);m2b(f._,10,0,0);f.eb.kf(100);QLb(this.F,f);g=I4b(new HTb,d);m2b(g._,20,0,0);QLb(this.F,g)};_.nb=function zac(a){var b,c,d;C1b(this.a._,Math.cos(a*1.0E-4)*800);o2b(this.a._,Math.sin(a*1.0E-4)*800);nMb(this.a,this.F._);for(b=0,c=this.F.Q.b;b<c;b++){d=Au(Knb(this.F.Q,b),196);C_b(d.cb,0.01);D_b(d.cb,0.005)}ZDb(this.D.n,this.F,this.a,null,false)};var EK=Tgb(TFc,'GeometriesParametric$DemoScene',1020),VH=Tgb(mGc,'ParametricGeometry',859),eI=Tgb(nGc,'KleinParametricGeometry',868),dI=Tgb(nGc,'KleinParametricGeometry$1',869),gI=Tgb(nGc,'MobiusParametricGeometry',870),fI=Tgb(nGc,'MobiusParametricGeometry$1',871),iI=Tgb(nGc,'PlaneParametricGeometry',872),hI=Tgb(nGc,'PlaneParametricGeometry$1',873);mBc(wi)(4);