function UWb(){VWb.call(this,5,8,6)}
function JTb(a,b){return a.ie(KTb(a,b))}
function fhc(){Q9b.call(this);this.e=Fu(Lob(ehc(),BRc),251);this.f=100;this.t=3;this.u=4;this.g=false;this.i=true;this.j=false;this.k=false;this.n=false;this.b=new j6b;this.r=new j6b;this.w=0;this.A=0;this.p=0;this.q=0}
function A3b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.b;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(Jlb(c,vRc)){a.e=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.d=Math.atan2(-j,o);a.f=Math.atan2(-e,d)}else{a.d=Vkb(n,i);a.f=0}}else if(Jlb(c,wRc)){a.d=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.e=Vkb(f,o);a.f=Vkb(g,i)}else{a.e=Math.atan2(-k,d);a.f=0}}else if(Jlb(c,xRc)){a.d=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.e=Math.atan2(-k,o);a.f=Math.atan2(-e,i)}else{a.e=0;a.f=Vkb(g,d)}}else if(Jlb(c,yRc)){a.e=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.d=Vkb(n,o);a.f=Vkb(g,d)}else{a.d=0;a.f=Math.atan2(-e,i)}}else if(Jlb(c,zRc)){a.f=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.d=Math.atan2(-j,i);a.e=Math.atan2(-k,d)}else{a.d=0;a.e=Vkb(f,o)}}else if(Jlb(c,ARc)){a.f=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.d=Vkb(n,i);a.e=Vkb(f,d)}else{a.d=Math.atan2(-j,o);a.e=0}}else{hPb();qW(gPb,(qub(),pub),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.c=c;!!a.b&&pTb(a.b,a);return a}
nU(880,818,ULc,UWb);nU(1071,1,_Lc);_.Db=function Cgc(){q9b(this.c,new fhc(this.b))};nU(1080,968,{314:1},fhc);_.ob=function ghc(){var a,b;this.o=new wQb(50,MGb(this.H.n),0.01,1000);e6b(this.o.ab,0,50,500);this.v=new wQb(84,MGb(this.H.n),0.01,1000);a=new DYb(16777215);e6b(a.ab,0,0,1);tPb(this.I,a);this.s=new LPb;u5b(this.s.ab,100);tPb(this.s,this.v);tPb(this.I,this.s);this.d=new XXb(this.v);tPb(this.I,this.d);bhc(this);b=new A_b;u_b(b,new p3b(14540253));this.c=new I7b(new UWb,b);tPb(this.s,this.c);EPb(this.d,this.n);EPb(this.c,this.n)};_.pb=function hhc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Fu(this.B.e.he(j),299);g.rf(this.u);i=this.B.f.c;f=j*i;d=Nu(Xkb(f));e=(d+1)%i;h6b(this.b,Fu(Dqb(this.B.b,e),296),Fu(Dqb(this.B.b,d),296));this.b.rf(f-d).mf(Fu(Dqb(this.B.b,d),296));b=Fu(JTb(this.B.e,j),299);W5b(this.r.of(this.b),b);g.mf(this.r.nf().rf(15));BPb(this.v,g);BPb(this.c,g);c=Fu(this.B.e.he((j+30/this.B.e.fe())%1).ef(this.u),299);this.k||c.of(g).mf(b);h4b(this.v.W,this.v.ab,c,this.r);A3b(this.v.db,this.v.W,this.v.db.c);WXb(this.d);v3b(this.s.db,(this.w-this.s.db.e)*0.05);YGb(this.H.n,this.I,this.g?this.v:this.o,null,false)};_.f=0;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.p=0;_.q=0;_.t=0;_.u=0;_.w=0;_.A=0;var LL=Kjb(VQc,'GeometryExtrudeSplines$DemoScene',1080);nMc(Hi)(10);