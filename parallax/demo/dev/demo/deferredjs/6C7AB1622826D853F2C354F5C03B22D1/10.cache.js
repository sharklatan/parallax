function CXb(){DXb.call(this,5,8,6)}
function rUb(a,b){return a.ge(sUb(a,b))}
function Fic(){pbc.call(this);this.d=wv(Zob(Eic(),wTc),252);this.e=100;this.s=3;this.t=4;this.f=false;this.g=true;this.i=false;this.j=false;this.k=false;this.a=new q8b;this.q=new q8b;this.v=0;this.w=0;this.o=0;this.p=0}
function g5b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.a;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(Xlb(c,qTc)){a.d=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.c=Math.atan2(-j,o);a.e=Math.atan2(-e,d)}else{a.c=hlb(n,i);a.e=0}}else if(Xlb(c,rTc)){a.c=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.d=hlb(f,o);a.e=hlb(g,i)}else{a.d=Math.atan2(-k,d);a.e=0}}else if(Xlb(c,sTc)){a.c=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.d=Math.atan2(-k,o);a.e=Math.atan2(-e,i)}else{a.d=0;a.e=hlb(g,d)}}else if(Xlb(c,tTc)){a.d=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.c=hlb(n,o);a.e=hlb(g,d)}else{a.c=0;a.e=Math.atan2(-e,i)}}else if(Xlb(c,uTc)){a.e=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.c=Math.atan2(-j,i);a.d=Math.atan2(-k,d)}else{a.c=0;a.d=hlb(f,o)}}else if(Xlb(c,vTc)){a.e=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.c=hlb(n,i);a.d=hlb(f,d)}else{a.c=Math.atan2(-j,o);a.d=0}}else{PPb();HX(OPb,(Gub(),Fub),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.b=c;!!a.a&&$Tb(a.a,a);return a}
zV(894,832,QNc,CXb);zV(1091,1,YNc);_.Mb=function aic(){Rac(this.b,new Fic(this.a))};zV(1100,988,{318:1},Fic);_.nb=function Gic(){var a,b;this.n=new dRb(50,iGb(this.G.k),0.01,1000);k8b(this.n._,0,50,500);this.u=new dRb(84,iGb(this.G.k),0.01,1000);a=new $Zb(16777215);k8b(a._,0,0,1);_Pb(this.H,a);this.r=new sQb;F7b(this.r._,100);_Pb(this.r,this.u);_Pb(this.H,this.r);this.c=new JYb(this.u);_Pb(this.H,this.c);Bic(this);b=new $0b;U0b(b,new W4b(14540253));this.b=new fZb(new CXb,b);_Pb(this.r,this.b);kQb(this.c,this.k);kQb(this.b,this.k)};_.ob=function Hic(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=wv(this.A.d.fe(j),303);g.ef(this.t);i=this.A.e.b;f=j*i;d=Ev(jlb(f));e=(d+1)%i;o8b(this.a,wv(Rqb(this.A.a,e),303),wv(Rqb(this.A.a,d),303));V7b(this.a.ef(f-d),wv(Rqb(this.A.a,d),303));b=wv(rUb(this.A.d,j),303);a8b(this.q.bf(this.a),b);V7b(g,this.q.af().ef(15));hQb(this.u,g);hQb(this.b,g);c=wv(this.A.d.fe((j+30/this.A.d.de())%1).Ze(this.t),303);this.j||V7b(c.bf(g),b);$5b(this.u.V,this.u._,c,this.q);g5b(this.u.cb,this.u.V,this.u.cb.b);IYb(this.c);b5b(this.r.cb,(this.v-this.r.cb.d)*0.05);GHb(this.G.k,this.H,this.f?this.u:this.n,null,false)};_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.o=0;_.p=0;_.s=0;_.t=0;_.v=0;_.w=0;var QM=Yjb(PSc,'GeometryExtrudeSplines$DemoScene',1100);kOc(Ej)(10);