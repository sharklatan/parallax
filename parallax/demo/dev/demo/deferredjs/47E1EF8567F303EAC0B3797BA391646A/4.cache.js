function aXb(){}
function fXb(){}
function gfc(){D9b.call(this)}
function $Wb(){vWb.call(this,new aXb,20)}
function dXb(){vWb.call(this,new fXb,20)}
function iXb(){vWb.call(this,new kXb,10)}
function kXb(){this.b=200;this.a=200}
function vWb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;XQb.call(this);n=b+1;for(g=0;g<=20;g++){t=g/20;for(j=0;j<=b;j++){o=j/b;k=a.je(o,t);this.s.Fc(k)}}for(i=0;i<20;i++){for(j=0;j<b;j++){c=i*n+j;d=i*n+j+1;e=(i+1)*n+j;f=(i+1)*n+j+1;p=new j5b(i/b,j/20);q=new j5b(i/b,(j+1)/20);r=new j5b((i+1)/b,j/20);s=new j5b((i+1)/b,(j+1)/20);this.i.Fc(new DRb(c,d,e));this.i.Fc(new DRb(d,f,e));zu(qqb(this.g,0),173).Fc(new Vqb(pu($S,DLc,297,[p,q,r])));zu(qqb(this.g,0),173).Fc(new Vqb(pu($S,DLc,297,[q,s,r])))}}OQb(this);RQb(this,false)}
var gRc='thothbot.parallax.core.shared.geometries.parametric.';fU(877,820,ELc);fU(887,877,ELc,$Wb);fU(888,1,{},aXb);_.je=function bXb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Jkb(a)*(1+Skb(a))+2*(1-Jkb(a)/2)*Jkb(a)*Jkb(b);e=-8*Skb(a)-2*(1-Jkb(a)/2)*Skb(a)*Jkb(b)}else{c=3*Jkb(a)*(1+Skb(a))+2*(1-Jkb(a)/2)*Math.cos(b+3.141592653589793);e=-8*Skb(a)}d=-2*(1-Jkb(a)/2)*Skb(b);return new Z5b(c,d,e)};fU(889,877,ELc,dXb);fU(890,1,{},fXb);_.je=function gXb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Jkb(c)*(2+a*Math.cos(c/2));e=Skb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new Z5b(d,e,f)};fU(891,877,ELc,iXb);fU(892,1,{},kXb);_.je=function lXb(a,b){var c,d;c=a*this.b;d=b*this.a;return new Z5b(c,0,d)};_.a=0;_.b=0;fU(1056,1,LLc);_.zb=function efc(){d9b(this.b,new gfc(this.a))};fU(1057,970,{},gfc);_.nb=function hfc(){var a,b,c,d,e,f,g,i;this.a=new jQb(45,zGb(this.G.k),1,2000);h5b(this.a._,400);gPb(this.H,new QXb(4210752));b=new qYb(16777215);T5b(b._,0,0,1);gPb(this.H,b);i=new LNb(dRc);FNb(i,(CFb(),BFb));GNb(i,BFb);i.k=16;d=new xqb;c=new g0b;c.q=i;$_b(c,new c3b(12303291));rZb(c,(d_b(),b_b));qu(d.a,d.b++,c);a=new n_b;h_b(a,new c3b(16777215));a.i=true;a.W=true;a.Z=0.1;rZb(a,b_b);qu(d.a,d.b++,a);e=r8b(new $Wb,d);T5b(e._,0,0,0);e.eb.of(20);gPb(this.H,e);f=r8b(new dXb,d);T5b(f._,10,0,0);f.eb.of(100);gPb(this.H,f);g=r8b(new iXb,d);T5b(g._,20,0,0);gPb(this.H,g)};_.ob=function ifc(a){var b,c,d;g5b(this.a._,Math.cos(a*1.0E-4)*800);V5b(this.a._,Math.sin(a*1.0E-4)*800);FPb(this.a,this.H._);for(b=0,c=this.H.Q.b;b<c;b++){d=zu(qqb(this.H.Q,b),249);h3b(d.cb,0.01);i3b(d.cb,0.005)}LGb(this.G.k,this.H,this.a,null,false)};var dL=xjb(MQc,'GeometriesParametric$DemoScene',1057),cI=xjb(fRc,'ParametricGeometry',877),oI=xjb(gRc,'KleinParametricGeometry',887),nI=xjb(gRc,'KleinParametricGeometry$1',888),qI=xjb(gRc,'MobiusParametricGeometry',889),pI=xjb(gRc,'MobiusParametricGeometry$1',890),sI=xjb(gRc,'PlaneParametricGeometry',891),rI=xjb(gRc,'PlaneParametricGeometry$1',892);ZLc(xi)(4);