function ZXb(){}
function cYb(){}
function Hgc(){cbc.call(this)}
function XXb(){rXb.call(this,new ZXb,20)}
function aYb(){rXb.call(this,new cYb,20)}
function fYb(){rXb.call(this,new hYb,10)}
function hYb(){this.b=200;this.a=200}
function rXb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;TRb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.ke(o,t);this.s.Fc(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new X6b(g/b,j/20);q=new X6b(g/b,(j+1)/20);r=new X6b((g+1)/b,j/20);s=new X6b((g+1)/b,(j+1)/20);this.i.Fc(new ASb(c,d,e));this.i.Fc(new ASb(d,f,e));wv(Rqb(this.g,0),173).Fc(new vrb(mv(sU,CNc,302,[p,q,r])));wv(Rqb(this.g,0),173).Fc(new vrb(mv(sU,CNc,302,[q,s,r])))}}KRb(this);NRb(this,false)}
var ZSc='thothbot.parallax.core.shared.geometries.parametric.';zV(889,832,DNc);zV(899,889,DNc,XXb);zV(900,1,{},ZXb);_.ke=function $Xb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*ilb(a)*(1+rlb(a))+2*(1-ilb(a)/2)*ilb(a)*ilb(b);e=-8*rlb(a)-2*(1-ilb(a)/2)*rlb(a)*ilb(b)}else{c=3*ilb(a)*(1+rlb(a))+2*(1-ilb(a)/2)*Math.cos(b+3.141592653589793);e=-8*rlb(a)}d=-2*(1-ilb(a)/2)*rlb(b);return new L7b(c,d,e)};zV(901,889,DNc,aYb);zV(902,1,{},cYb);_.ke=function dYb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=ilb(c)*(2+a*Math.cos(c/2));e=rlb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new L7b(d,e,f)};zV(903,889,DNc,fYb);zV(904,1,{},hYb);_.ke=function iYb(a,b){var c,d;c=a*this.b;d=b*this.a;return new L7b(c,0,d)};_.a=0;_.b=0;zV(1074,1,LNc);_.Mb=function Fgc(){Eac(this.b,new Hgc(this.a))};zV(1075,988,{},Hgc);_.nb=function Igc(){var a,b,c,d,e,f,g,i;this.a=new dRb(45,iGb(this.G.k),1,2000);V6b(this.a._,400);_Pb(this.H,new sZb(4210752));b=new VZb(16777215);F7b(b._,0,0,1);_Pb(this.H,b);i=new EOb(WSc);yOb(i,(eGb(),dGb));zOb(i,dGb);i.k=16;d=new Yqb;c=new O1b;c.q=i;G1b(c,new Q4b(12303291));Z$b(c,(L0b(),J0b));nv(d.a,d.b++,c);a=new V0b;P0b(a,new Q4b(16777215));a.i=true;a.Y=true;a._=0.1;Z$b(a,J0b);nv(d.a,d.b++,a);e=R9b(new XXb,d);F7b(e._,0,0,0);e.eb.rf(20);_Pb(this.H,e);f=R9b(new aYb,d);F7b(f._,10,0,0);f.eb.rf(100);_Pb(this.H,f);g=R9b(new fYb,d);F7b(g._,20,0,0);_Pb(this.H,g)};_.ob=function Jgc(a){var b,c,d;U6b(this.a._,Math.cos(a*1.0E-4)*800);H7b(this.a._,Math.sin(a*1.0E-4)*800);zQb(this.a,this.H._);for(b=0,c=this.H.Q.b;b<c;b++){d=wv(Rqb(this.H.Q,b),250);V4b(d.cb,0.01);W4b(d.cb,0.005)}GHb(this.G.k,this.H,this.a,null,false)};var pM=Yjb(CSc,'GeometriesParametric$DemoScene',1075),jJ=Yjb(YSc,'ParametricGeometry',889),vJ=Yjb(ZSc,'KleinParametricGeometry',899),uJ=Yjb(ZSc,'KleinParametricGeometry$1',900),xJ=Yjb(ZSc,'MobiusParametricGeometry',901),wJ=Yjb(ZSc,'MobiusParametricGeometry$1',902),zJ=Yjb(ZSc,'PlaneParametricGeometry',903),yJ=Yjb(ZSc,'PlaneParametricGeometry$1',904);ZNc(Ej)(4);