function NWb(){OWb.call(this,5,8,6)}
function CTb(a,b){return a.fe(DTb(a,b))}
function $gc(){J9b.call(this);this.d=su(Eob(Zgc(),oRc),251);this.e=100;this.s=3;this.t=4;this.f=false;this.g=true;this.i=false;this.j=false;this.k=false;this.a=new c6b;this.q=new c6b;this.v=0;this.w=0;this.o=0;this.p=0}
function t3b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.a;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(Clb(c,iRc)){a.d=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.c=Math.atan2(-j,o);a.e=Math.atan2(-e,d)}else{a.c=Okb(n,i);a.e=0}}else if(Clb(c,jRc)){a.c=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.d=Okb(f,o);a.e=Okb(g,i)}else{a.d=Math.atan2(-k,d);a.e=0}}else if(Clb(c,kRc)){a.c=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.d=Math.atan2(-k,o);a.e=Math.atan2(-e,i)}else{a.d=0;a.e=Okb(g,d)}}else if(Clb(c,lRc)){a.d=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.c=Okb(n,o);a.e=Okb(g,d)}else{a.c=0;a.e=Math.atan2(-e,i)}}else if(Clb(c,mRc)){a.e=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.c=Math.atan2(-j,i);a.d=Math.atan2(-k,d)}else{a.c=0;a.d=Okb(f,o)}}else if(Clb(c,nRc)){a.e=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.c=Okb(n,i);a.d=Okb(f,d)}else{a.c=Math.atan2(-j,o);a.d=0}}else{aPb();jW(_Ob,(jub(),iub),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.b=c;!!a.a&&iTb(a.a,a);return a}
bU(886,824,LLc,NWb);bU(1077,1,SLc);_.zb=function vgc(){j9b(this.b,new $gc(this.a))};bU(1086,974,{314:1},$gc);_.nb=function _gc(){var a,b;this.n=new pQb(50,FGb(this.G.k),0.01,1000);Z5b(this.n._,0,50,500);this.u=new pQb(84,FGb(this.G.k),0.01,1000);a=new wYb(16777215);Z5b(a._,0,0,1);mPb(this.H,a);this.r=new EPb;n5b(this.r._,100);mPb(this.r,this.u);mPb(this.H,this.r);this.c=new QXb(this.u);mPb(this.H,this.c);Wgc(this);b=new t_b;n_b(b,new i3b(14540253));this.b=new B7b(new NWb,b);mPb(this.r,this.b);xPb(this.c,this.k);xPb(this.b,this.k)};_.ob=function ahc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=su(this.A.d.ee(j),299);g.of(this.t);i=this.A.e.b;f=j*i;d=Au(Qkb(f));e=(d+1)%i;a6b(this.a,su(wqb(this.A.a,e),296),su(wqb(this.A.a,d),296));this.a.of(f-d).jf(su(wqb(this.A.a,d),296));b=su(CTb(this.A.d,j),299);P5b(this.q.lf(this.a),b);g.jf(this.q.kf().of(15));uPb(this.u,g);uPb(this.b,g);c=su(this.A.d.ee((j+30/this.A.d.ce())%1).bf(this.t),299);this.j||c.lf(g).jf(b);a4b(this.u.V,this.u._,c,this.q);t3b(this.u.cb,this.u.V,this.u.cb.b);PXb(this.c);o3b(this.r.cb,(this.v-this.r.cb.d)*0.05);RGb(this.G.k,this.H,this.f?this.u:this.n,null,false)};_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.o=0;_.p=0;_.s=0;_.t=0;_.v=0;_.w=0;var zL=Djb(IQc,'GeometryExtrudeSplines$DemoScene',1086);eMc(xi)(10);