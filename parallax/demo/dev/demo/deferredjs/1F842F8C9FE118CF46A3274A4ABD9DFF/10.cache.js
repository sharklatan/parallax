function PXb(){QXb.call(this,5,8,6)}
function EUb(a,b){return a.ce(FUb(a,b))}
function iic(){Kac.call(this);this.d=Au(dpb(hic(),QXc),252);this.e=100;this.s=3;this.t=4;this.f=false;this.g=true;this.i=false;this.j=false;this.k=false;this.a=new e7b;this.q=new e7b;this.v=0;this.w=0;this.o=0;this.p=0}
function v4b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.a;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(cmb(c,KXc)){a.d=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.c=Math.atan2(-j,o);a.e=Math.atan2(-e,d)}else{a.c=olb(n,i);a.e=0}}else if(cmb(c,LXc)){a.c=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.d=olb(f,o);a.e=olb(g,i)}else{a.d=Math.atan2(-k,d);a.e=0}}else if(cmb(c,MXc)){a.c=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.d=Math.atan2(-k,o);a.e=Math.atan2(-e,i)}else{a.d=0;a.e=olb(g,d)}}else if(cmb(c,NXc)){a.d=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.c=olb(n,o);a.e=olb(g,d)}else{a.c=0;a.e=Math.atan2(-e,i)}}else if(cmb(c,OXc)){a.e=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.c=Math.atan2(-j,i);a.d=Math.atan2(-k,d)}else{a.c=0;a.d=olb(f,o)}}else if(cmb(c,PXc)){a.e=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.c=olb(n,i);a.d=olb(f,d)}else{a.c=Math.atan2(-j,o);a.d=0}}else{gQb();XW(fQb,(Lub(),Kub),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.b=c;!!a.a&&kUb(a.a,a);return a}
PU(884,822,bSc,PXb);PU(1073,1,iSc);_.zb=function Fhc(){kac(this.b,new iic(this.a))};PU(1082,972,{315:1},iic);_.nb=function jic(){var a,b;this.n=new tRb(50,LHb(this.G.k),0.01,1000);_6b(this.n._,0,50,500);this.u=new tRb(84,LHb(this.G.k),0.01,1000);a=new yZb(16777215);_6b(a._,0,0,1);sQb(this.H,a);this.r=new KQb;p6b(this.r._,100);sQb(this.r,this.u);sQb(this.H,this.r);this.c=new SYb(this.u);sQb(this.H,this.c);eic(this);b=new v0b;p0b(b,new k4b(14540253));this.b=new D8b(new PXb,b);sQb(this.r,this.b);DQb(this.c,this.k);DQb(this.b,this.k)};_.ob=function kic(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Au(this.A.d.be(j),300);g.lf(this.t);i=this.A.e.b;f=j*i;d=Iu(qlb(f));e=(d+1)%i;c7b(this.a,Au(Xqb(this.A.a,e),297),Au(Xqb(this.A.a,d),297));this.a.lf(f-d).ff(Au(Xqb(this.A.a,d),297));b=Au(EUb(this.A.d,j),300);R6b(this.q.hf(this.a),b);g.ff(this.q.gf().lf(15));AQb(this.u,g);AQb(this.b,g);c=Au(this.A.d.be((j+30/this.A.d._d())%1).$e(this.t),300);this.j||c.hf(g).ff(b);c5b(this.u.V,this.u._,c,this.q);v4b(this.u.cb,this.u.V,this.u.cb.b);RYb(this.c);q4b(this.r.cb,(this.v-this.r.cb.d)*0.05);XHb(this.G.k,this.H,this.f?this.u:this.n,null,false)};_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.o=0;_.p=0;_.s=0;_.t=0;_.v=0;_.w=0;var FL=dkb(iXc,'GeometryExtrudeSplines$DemoScene',1082);wSc(xi)(10);