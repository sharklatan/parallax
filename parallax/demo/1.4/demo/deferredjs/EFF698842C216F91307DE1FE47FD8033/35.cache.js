function SNb(a,b){a.f=b}
function H8b(a){this.a=a}
function K8b(a){this.a=a}
function K3b(a,b){a.j=0;a.e=b;a.g=a.e-a.j+1}
function D8b(){m5b.call(this);this.f=new i2b(0,150,0)}
function j_b(a){var b;b=g_b(a);b.a+=0;b.c+=0.3;b.b+=0;k_b(a,b.a,b.c,b.b);return a}
function J3b(a,b){GLb(a,b);b.d=a.d;b.i=a.i;b.k=a.k;b.f=a.f;b.a=a.a;b.b=a.b;b.c=a.c;return b}
function M3b(a,b){z3b();F3b.call(this,a,b);this.d=1000;this.i=false;this.k=0;this.f=0;this.a=0;this.b=1;this.c=false;K3b(this,a.p.b-1)}
function Qpc(a){var b,c;if(!!a.a.n&&a.a.n.b>0){b=qu(znb(a.a.n,0),190);for(c=0;c<b.a.b;c++){SNb(qu(a.a.i.Ic(c),188),qu(znb(b.a,c),241));j_b(qu(a.a.i.Ic(c),188).f)}}}
function L3b(a,b){var c,d,e;c=a.d/a.g;a.k+=a.b*b;if(a.i){if(a.k>a.d||a.k<0){a.b*=-1;if(a.k>a.d){a.k=a.d;a.c=true}if(a.k<0){a.k=0;a.c=false}}}else{a.k=a.k%a.d;a.k<0&&(a.k+=a.d)}d=a.j+yu(L_b(yu(Vhb(a.k/c)),0,a.g-1));if(d!=a.a){Dnb(a.r,a.f,new Ugb(0));Dnb(a.r,a.a,new Ugb(1));Dnb(a.r,d,new Ugb(0));a.f=a.a;a.a=d}e=a.k%c/c;a.c&&(e=1-e);Dnb(a.r,a.a,new Ugb(e));Dnb(a.r,a.f,new Ugb(1-e))}
UR(928,927,{195:1,196:1,252:1,253:1},M3b);_.Sd=function N3b(){return J3b(this,new M3b(qu(this.t,189),this.u))};_.a=0;_.b=0;_.c=false;_.d=0;_.e=0;_.f=0;_.g=0;_.i=false;_.j=0;_.k=0;UR(996,1,VAc);_.yb=function B8b(){j5b(this.b,new D8b(this.a))};UR(997,945,{},D8b);_.mb=function E8b(){var b,c,d,e;this.e=new p4b;this.a=new EMb(40,0.5*CDb(this.D.n),1,10000);t1b(this.a._,300);aMb(new H8b(this));b=new HUb(16777215,1.3);c2b(b._,1,1,1);FLb(this.F,b);d=new HUb(16777215,0.1);c2b(d._,0.25,-1,0);FLb(this.F,d);c=new HUb(16777215,1.3);c2b(c._,1,1,1);FLb(this.e,c);e=new HUb(16777215,0.1);c2b(e._,0.25,-1,0);FLb(this.e,e);this.c=new Gnb;this.b=new Wpc;try{Lpc(this.b,'./static/models/animated/flamingo.js',new K8b(this))}catch(a){a=ZQ(a);if(tu(a,46)){tLb();aU(sLb,(mrb(),krb),nGc)}else throw YQ(a)}this.D.n.$=true;this.D.n._=true;jEb(this.D.n,false);this.D.n.Y=false};_.nb=function F8b(a){var b,c,d;this.d=qh();d=a*0.01;s1b(this.a._,600*Math.sin(d*3.141592653589793/360));e2b(this.a._,600*Math.cos(d*3.141592653589793/360));cMb(this.a,this.f);for(b=0;b<this.c.b;b++){c=qu(znb(this.c,b),253);L3b(c,yu(qh()-this.d))}xDb(this.D.n);lEb(this.D.n,0,~~(this.D.n.X/2),this.D.n.W);ODb(this.D.n,this.F,this.a,null,false);lEb(this.D.n,~~(this.D.n.X/2),~~(this.D.n.X/2),this.D.n.W);ODb(this.D.n,this.e,this.a,null,false)};_.d=0;UR(998,1,SAc,H8b);_.Fd=function I8b(a){zMb(this.a.a,0.5*CDb(a.a))};UR(999,1,{},K8b);_.vf=function L8b(){var a,b,c,d;Qpc(this.a.b);a=new wYb;pYb(a,new o_b(16777215));a.j=true;a.i=true;uYb(a,(pWb(),mWb));tYb(a,(mXb(),jXb));c=new M3b(this.a.b.a,a);c.d=5000;b2b(c.eb,1.5);t1b(c._,150);FLb(this.a.F,c);wnb(this.a.c,c);b=new xZb;oZb(b,new o_b(16777215));uZb(b,new o_b(16777215));b.F=20;b.o=true;b.n=true;vZb(b,mWb);sZb(b,lXb);d=new M3b(this.a.b.a,b);d.d=5000;b2b(d.eb,1.5);t1b(d._,150);FLb(this.a.e,d);wnb(this.a.c,d)};var $J=Igb(GFc,'MorphNormalsFlamingo$DemoScene',997),YJ=Igb(GFc,'MorphNormalsFlamingo$DemoScene$1',998),ZJ=Igb(GFc,'MorphNormalsFlamingo$DemoScene$2',999),YI=Igb(kGc,'MorphAnimMesh',928);fBc(wi)(35);