function nXb(){oXb.call(this,5,8,6)}
function cUb(a,b){return a.me(dUb(a,b))}
function Ahc(){jac.call(this);this.e=Xu(epb(zhc(),_Rc),251);this.f=100;this.t=3;this.u=4;this.g=false;this.i=true;this.j=false;this.k=false;this.n=false;this.b=new E6b;this.r=new E6b;this.w=0;this.A=0;this.p=0;this.q=0}
function V3b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.b;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(bmb(c,VRc)){a.e=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.d=Math.atan2(-j,o);a.f=Math.atan2(-e,d)}else{a.d=nlb(n,i);a.f=0}}else if(bmb(c,WRc)){a.d=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.e=nlb(f,o);a.f=nlb(g,i)}else{a.e=Math.atan2(-k,d);a.f=0}}else if(bmb(c,XRc)){a.d=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.e=Math.atan2(-k,o);a.f=Math.atan2(-e,i)}else{a.e=0;a.f=nlb(g,d)}}else if(bmb(c,YRc)){a.e=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.d=nlb(n,o);a.f=nlb(g,d)}else{a.d=0;a.f=Math.atan2(-e,i)}}else if(bmb(c,ZRc)){a.f=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.d=Math.atan2(-j,i);a.e=Math.atan2(-k,d)}else{a.d=0;a.e=nlb(f,o)}}else if(bmb(c,$Rc)){a.f=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.d=nlb(n,i);a.e=nlb(f,d)}else{a.d=Math.atan2(-j,o);a.e=0}}else{CPb();NW(BPb,(Mub(),Lub),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.c=c;!!a.b&&KTb(a.b,a);return a}
KU(886,824,nMc,nXb);KU(1077,1,uMc);_.Db=function Xgc(){L9b(this.c,new Ahc(this.b))};KU(1086,974,{314:1},Ahc);_.ob=function Bhc(){var a,b;this.o=new RQb(50,fHb(this.H.n),0.01,1000);z6b(this.o.ab,0,50,500);this.v=new RQb(84,fHb(this.H.n),0.01,1000);a=new YYb(16777215);z6b(a.ab,0,0,1);OPb(this.I,a);this.s=new eQb;P5b(this.s.ab,100);OPb(this.s,this.v);OPb(this.I,this.s);this.d=new qYb(this.v);OPb(this.I,this.d);whc(this);b=new V_b;P_b(b,new K3b(14540253));this.c=new b8b(new nXb,b);OPb(this.s,this.c);ZPb(this.d,this.n);ZPb(this.c,this.n)};_.pb=function Chc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Xu(this.B.e.le(j),299);g.vf(this.u);i=this.B.f.c;f=j*i;d=dv(plb(f));e=(d+1)%i;C6b(this.b,Xu(Yqb(this.B.b,e),296),Xu(Yqb(this.B.b,d),296));this.b.vf(f-d).qf(Xu(Yqb(this.B.b,d),296));b=Xu(cUb(this.B.e,j),299);p6b(this.r.sf(this.b),b);g.qf(this.r.rf().vf(15));WPb(this.v,g);WPb(this.c,g);c=Xu(this.B.e.le((j+30/this.B.e.je())%1).jf(this.u),299);this.k||c.sf(g).qf(b);C4b(this.v.W,this.v.ab,c,this.r);V3b(this.v.db,this.v.W,this.v.db.c);pYb(this.d);Q3b(this.s.db,(this.w-this.s.db.e)*0.05);rHb(this.H.n,this.I,this.g?this.v:this.o,null,false)};_.f=0;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.p=0;_.q=0;_.t=0;_.u=0;_.w=0;_.A=0;var gM=ckb(tRc,'GeometryExtrudeSplines$DemoScene',1086);IMc(Ii)(10);