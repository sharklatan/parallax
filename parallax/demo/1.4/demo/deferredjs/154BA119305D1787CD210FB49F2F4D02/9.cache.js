function ETb(){FTb.call(this,5,8,6)}
function vQb(a,b){return a.ie(wQb(a,b))}
function ycc(){W5b.call(this);this.e=Xu(qmb(xcc(),aHc),198);this.f=100;this.t=3;this.u=4;this.g=false;this.i=true;this.j=false;this.k=false;this.n=false;this.b=new R2b;this.r=new R2b;this.w=0;this.A=0;this.p=0;this.q=0}
function g0b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.b;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(pjb(c,WGc)){a.e=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.d=Math.atan2(-j,o);a.f=Math.atan2(-e,d)}else{a.d=Bib(n,i);a.f=0}}else if(pjb(c,XGc)){a.d=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.e=Bib(f,o);a.f=Bib(g,i)}else{a.e=Math.atan2(-k,d);a.f=0}}else if(pjb(c,YGc)){a.d=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.e=Math.atan2(-k,o);a.f=Math.atan2(-e,i)}else{a.e=0;a.f=Bib(g,d)}}else if(pjb(c,ZGc)){a.e=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.d=Bib(n,o);a.f=Bib(g,d)}else{a.d=0;a.f=Math.atan2(-e,i)}}else if(pjb(c,$Gc)){a.f=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.d=Math.atan2(-j,i);a.e=Math.atan2(-k,d)}else{a.d=0;a.e=Bib(f,o)}}else if(pjb(c,_Gc)){a.f=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.d=Bib(n,i);a.e=Bib(f,d)}else{a.d=Math.atan2(-j,o);a.e=0}}else{cMb();HU(bMb,(Xrb(),Wrb),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.c=c;!!a.b&&bQb(a.b,a);return a}
ES(866,805,wBc,ETb);ES(1035,1,DBc);_.Cb=function Vbc(){T5b(this.c,new ycc(this.b))};ES(1044,946,{260:1},ycc);_.nb=function zcc(){var a,b;this.o=new nNb(50,lEb(this.F.o),0.01,1000);M2b(this.o.ab,0,50,500);this.v=new nNb(84,lEb(this.F.o),0.01,1000);a=new nVb(16777215);M2b(a.ab,0,0,1);oMb(this.G,a);this.s=new FMb;b2b(this.s.ab,100);oMb(this.s,this.v);oMb(this.G,this.s);this.d=new HUb(this.v);oMb(this.G,this.d);ucc(this);b=new lYb;fYb(b,new X_b(14540253));this.c=new n4b(new ETb,b);oMb(this.s,this.c);yMb(this.d,this.n);yMb(this.c,this.n)};_.ob=function Acc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Xu(this.B.e.he(j),247);g.rf(this.u);i=this.B.f.c;f=j*i;d=dv(Dib(f));e=(d+1)%i;P2b(this.b,Xu(iob(this.B.b,e),244),Xu(iob(this.B.b,d),244));this.b.rf(f-d).mf(Xu(iob(this.B.b,d),244));b=Xu(vQb(this.B.e,j),247);D2b(this.r.of(this.b),b);g.mf(this.r.nf().rf(15));wMb(this.v,g);wMb(this.c,g);c=Xu(this.B.e.he((j+30/this.B.e.fe())%1).ef(this.u),247);this.k||c.of(g).mf(b);O0b(this.v.W,this.v.ab,c,this.r);g0b(this.v.db,this.v.W,this.v.db.c);GUb(this.d);b0b(this.s.db,(this.w-this.s.db.e)*0.05);xEb(this.F.o,this.G,this.g?this.v:this.o,null,false)};_.f=0;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.p=0;_.q=0;_.t=0;_.u=0;_.w=0;_.A=0;var AL=qhb(uGc,'GeometryExtrudeSplines$DemoScene',1044);PBc(Hi)(9);