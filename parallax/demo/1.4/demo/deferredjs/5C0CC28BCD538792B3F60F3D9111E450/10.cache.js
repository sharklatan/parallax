function CTb(){DTb.call(this,5,8,6)}
function rQb(a,b){return a.ie(sQb(a,b))}
function Ccc(){M5b.call(this);this.e=Yu(nmb(Bcc(),BGc),198);this.f=100;this.t=3;this.u=4;this.g=false;this.i=true;this.j=false;this.k=false;this.n=false;this.b=new I2b;this.r=new I2b;this.w=0;this.A=0;this.p=0;this.q=0}
function $_b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.b;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(mjb(c,vGc)){a.e=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.d=Math.atan2(-j,o);a.f=Math.atan2(-e,d)}else{a.d=yib(n,i);a.f=0}}else if(mjb(c,wGc)){a.d=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.e=yib(f,o);a.f=yib(g,i)}else{a.e=Math.atan2(-k,d);a.f=0}}else if(mjb(c,xGc)){a.d=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.e=Math.atan2(-k,o);a.f=Math.atan2(-e,i)}else{a.e=0;a.f=yib(g,d)}}else if(mjb(c,yGc)){a.e=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.d=yib(n,o);a.f=yib(g,d)}else{a.d=0;a.f=Math.atan2(-e,i)}}else if(mjb(c,zGc)){a.f=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.d=Math.atan2(-j,i);a.e=Math.atan2(-k,d)}else{a.d=0;a.e=yib(f,o)}}else if(mjb(c,AGc)){a.f=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.d=yib(n,i);a.e=yib(f,d)}else{a.d=Math.atan2(-j,o);a.e=0}}else{$Lb();EU(ZLb,(Urb(),Trb),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.c=c;!!a.b&&ZPb(a.b,a);return a}
BS(867,805,XAc,CTb);BS(1038,1,cBc);_.Cb=function Zbc(){J5b(this.c,new Ccc(this.b))};BS(1047,946,{259:1},Ccc);_.nb=function Dcc(){var a,b;this.o=new jNb(50,hEb(this.F.o),0.01,1000);D2b(this.o.ab,0,50,500);this.v=new jNb(84,hEb(this.F.o),0.01,1000);a=new lVb(16777215);D2b(a.ab,0,0,1);kMb(this.G,a);this.s=new BMb;U1b(this.s.ab,100);kMb(this.s,this.v);kMb(this.G,this.s);this.d=new FUb(this.v);kMb(this.G,this.d);ycc(this);b=new jYb;dYb(b,new P_b(14540253));this.c=new e4b(new CTb,b);kMb(this.s,this.c);uMb(this.d,this.n);uMb(this.c,this.n)};_.ob=function Ecc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Yu(this.B.e.he(j),246);g.rf(this.u);i=this.B.f.c;f=j*i;d=ev(Aib(f));e=(d+1)%i;G2b(this.b,Yu(fob(this.B.b,e),243),Yu(fob(this.B.b,d),243));this.b.rf(f-d).mf(Yu(fob(this.B.b,d),243));b=Yu(rQb(this.B.e,j),246);u2b(this.r.of(this.b),b);g.mf(this.r.nf().rf(15));sMb(this.v,g);sMb(this.c,g);c=Yu(this.B.e.he((j+30/this.B.e.fe())%1).ef(this.u),246);this.k||c.of(g).mf(b);G0b(this.v.W,this.v.ab,c,this.r);$_b(this.v.db,this.v.W,this.v.db.c);EUb(this.d);V_b(this.s.db,(this.w-this.s.db.e)*0.05);tEb(this.F.o,this.G,this.g?this.v:this.o,null,false)};_.f=0;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.p=0;_.q=0;_.t=0;_.u=0;_.w=0;_.A=0;var EL=nhb(VFc,'GeometryExtrudeSplines$DemoScene',1047);oBc(Ii)(10);