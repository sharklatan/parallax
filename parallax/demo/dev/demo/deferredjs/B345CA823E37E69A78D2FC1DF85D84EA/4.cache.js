function XXb(){}
function aYb(){}
function Fgc(){abc.call(this)}
function VXb(){pXb.call(this,new XXb,20)}
function $Xb(){pXb.call(this,new aYb,20)}
function dYb(){pXb.call(this,new fYb,10)}
function fYb(){this.b=200;this.a=200}
function pXb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;RRb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.ke(o,t);this.s.Fc(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new V6b(g/b,j/20);q=new V6b(g/b,(j+1)/20);r=new V6b((g+1)/b,j/20);s=new V6b((g+1)/b,(j+1)/20);this.i.Fc(new ySb(c,d,e));this.i.Fc(new ySb(d,f,e));yv(Pqb(this.g,0),173).Fc(new trb(ov(sU,ANc,302,[p,q,r])));yv(Pqb(this.g,0),173).Fc(new trb(ov(sU,ANc,302,[q,s,r])))}}IRb(this);LRb(this,false)}
var gTc='thothbot.parallax.core.shared.geometries.parametric.';zV(886,829,BNc);zV(896,886,BNc,VXb);zV(897,1,{},XXb);_.ke=function YXb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*glb(a)*(1+plb(a))+2*(1-glb(a)/2)*glb(a)*glb(b);e=-8*plb(a)-2*(1-glb(a)/2)*plb(a)*glb(b)}else{c=3*glb(a)*(1+plb(a))+2*(1-glb(a)/2)*Math.cos(b+3.141592653589793);e=-8*plb(a)}d=-2*(1-glb(a)/2)*plb(b);return new J7b(c,d,e)};zV(898,886,BNc,$Xb);zV(899,1,{},aYb);_.ke=function bYb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=glb(c)*(2+a*Math.cos(c/2));e=plb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new J7b(d,e,f)};zV(900,886,BNc,dYb);zV(901,1,{},fYb);_.ke=function gYb(a,b){var c,d;c=a*this.b;d=b*this.a;return new J7b(c,0,d)};_.a=0;_.b=0;zV(1071,1,JNc);_.Mb=function Dgc(){Cac(this.b,new Fgc(this.a))};zV(1072,985,{},Fgc);_.nb=function Ggc(){var a,b,c,d,e,f,g,i;this.a=new bRb(45,gGb(this.G.k),1,2000);T6b(this.a._,400);ZPb(this.H,new qZb(4210752));b=new TZb(16777215);D7b(b._,0,0,1);ZPb(this.H,b);i=new COb(dTc);wOb(i,(cGb(),bGb));xOb(i,bGb);i.k=16;d=new Wqb;c=new M1b;c.q=i;E1b(c,new O4b(12303291));X$b(c,(J0b(),H0b));pv(d.a,d.b++,c);a=new T0b;N0b(a,new O4b(16777215));a.i=true;a.Y=true;a._=0.1;X$b(a,H0b);pv(d.a,d.b++,a);e=P9b(new VXb,d);D7b(e._,0,0,0);e.eb.rf(20);ZPb(this.H,e);f=P9b(new $Xb,d);D7b(f._,10,0,0);f.eb.rf(100);ZPb(this.H,f);g=P9b(new dYb,d);D7b(g._,20,0,0);ZPb(this.H,g)};_.ob=function Hgc(a){var b,c,d;S6b(this.a._,Math.cos(a*1.0E-4)*800);F7b(this.a._,Math.sin(a*1.0E-4)*800);xQb(this.a,this.H._);for(b=0,c=this.H.Q.b;b<c;b++){d=yv(Pqb(this.H.Q,b),250);T4b(d.cb,0.01);U4b(d.cb,0.005)}EHb(this.G.k,this.H,this.a,null,false)};var pM=Wjb(LSc,'GeometriesParametric$DemoScene',1072),jJ=Wjb(fTc,'ParametricGeometry',886),vJ=Wjb(gTc,'KleinParametricGeometry',896),uJ=Wjb(gTc,'KleinParametricGeometry$1',897),xJ=Wjb(gTc,'MobiusParametricGeometry',898),wJ=Wjb(gTc,'MobiusParametricGeometry$1',899),zJ=Wjb(gTc,'PlaneParametricGeometry',900),yJ=Wjb(gTc,'PlaneParametricGeometry$1',901);XNc(wj)(4);