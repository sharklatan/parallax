function IXb(){}
function NXb(){}
function Pfc(){jac.call(this)}
function GXb(){bXb.call(this,new IXb,20)}
function LXb(){bXb.call(this,new NXb,20)}
function QXb(){bXb.call(this,new SXb,10)}
function SXb(){this.c=200;this.b=200}
function bXb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;DRb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.qe(o,t);this.t.Mc(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new R5b(g/b,j/20);q=new R5b(g/b,(j+1)/20);r=new R5b((g+1)/b,j/20);s=new R5b((g+1)/b,(j+1)/20);this.j.Mc(new jSb(c,d,e));this.j.Mc(new jSb(d,f,e));Xu(Yqb(this.i,0),173).Mc(new Brb(Nu(DT,mMc,297,[p,q,r])));Xu(Yqb(this.i,0),173).Mc(new Brb(Nu(DT,mMc,297,[q,s,r])))}}uRb(this);xRb(this,false)}
var PRc='thothbot.parallax.core.shared.geometries.parametric.';KU(881,824,nMc);KU(891,881,nMc,GXb);KU(892,1,{},IXb);_.qe=function JXb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*olb(a)*(1+xlb(a))+2*(1-olb(a)/2)*olb(a)*olb(b);e=-8*xlb(a)-2*(1-olb(a)/2)*xlb(a)*olb(b)}else{c=3*olb(a)*(1+xlb(a))+2*(1-olb(a)/2)*Math.cos(b+3.141592653589793);e=-8*xlb(a)}d=-2*(1-olb(a)/2)*xlb(b);return new F6b(c,d,e)};KU(893,881,nMc,LXb);KU(894,1,{},NXb);_.qe=function OXb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=olb(c)*(2+a*Math.cos(c/2));e=xlb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new F6b(d,e,f)};KU(895,881,nMc,QXb);KU(896,1,{},SXb);_.qe=function TXb(a,b){var c,d;c=a*this.c;d=b*this.b;return new F6b(c,0,d)};_.b=0;_.c=0;KU(1060,1,uMc);_.Db=function Nfc(){L9b(this.c,new Pfc(this.b))};KU(1061,974,{},Pfc);_.ob=function Qfc(){var a,b,c,d,e,f,g,i;this.b=new RQb(45,fHb(this.H.n),1,2000);P5b(this.b.ab,400);OPb(this.I,new wYb(4210752));b=new YYb(16777215);z6b(b.ab,0,0,1);OPb(this.I,b);i=new rOb(MRc);lOb(i,(iGb(),hGb));mOb(i,hGb);i.n=16;d=new drb;c=new O0b;c.r=i;G0b(c,new K3b(12303291));ZZb(c,(L_b(),J_b));Ou(d.b,d.c++,c);a=new V_b;P_b(a,new K3b(16777215));a.j=true;a.X=true;a.$=0.1;ZZb(a,J_b);Ou(d.b,d.c++,a);e=Z8b(new GXb,d);z6b(e.ab,0,0,0);e.fb.vf(20);OPb(this.I,e);f=Z8b(new LXb,d);z6b(f.ab,10,0,0);f.fb.vf(100);OPb(this.I,f);g=Z8b(new QXb,d);z6b(g.ab,20,0,0);OPb(this.I,g)};_.pb=function Rfc(a){var b,c,d;O5b(this.b.ab,Math.cos(a*1.0E-4)*800);B6b(this.b.ab,Math.sin(a*1.0E-4)*800);lQb(this.b,this.I.ab);for(b=0,c=this.I.R.c;b<c;b++){d=Xu(Yqb(this.I.R,b),249);P3b(d.db,0.01);Q3b(d.db,0.005)}rHb(this.H.n,this.I,this.b,null,false)};var IL=ckb(tRc,'GeometriesParametric$DemoScene',1061),HI=ckb(ORc,'ParametricGeometry',881),UI=ckb(PRc,'KleinParametricGeometry',891),TI=ckb(PRc,'KleinParametricGeometry$1',892),WI=ckb(PRc,'MobiusParametricGeometry',893),VI=ckb(PRc,'MobiusParametricGeometry$1',894),YI=ckb(PRc,'PlaneParametricGeometry',895),XI=ckb(PRc,'PlaneParametricGeometry$1',896);IMc(Ii)(4);