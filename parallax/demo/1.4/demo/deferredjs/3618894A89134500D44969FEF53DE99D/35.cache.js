function eOb(a,b){a.g=b}
function R8b(a){this.b=a}
function U8b(a){this.b=a}
function X3b(a,b){a.k=0;a.f=b;a.i=a.f-a.k+1}
function N8b(){z5b.call(this);this.g=new v2b(0,150,0)}
function v_b(a){var b;b=s_b(a);b.b+=0;b.d+=0.3;b.c+=0;w_b(a,b.b,b.d,b.c);return a}
function W3b(a,b){ULb(a,b);b.e=a.e;b.j=a.j;b.n=a.n;b.g=a.g;b.b=a.b;b.c=a.c;b.d=a.d;return b}
function Z3b(a,b){M3b();S3b.call(this,a,b);this.e=1000;this.j=false;this.n=0;this.g=0;this.b=0;this.c=1;this.d=false;X3b(this,a.q.c-1)}
function $pc(a){var b,c;if(!!a.b.o&&a.b.o.c>0){b=Fu(Nnb(a.b.o,0),190);for(c=0;c<b.b.c;c++){eOb(Fu(a.b.j.Lc(c),188),Fu(Nnb(b.b,c),241));v_b(Fu(a.b.j.Lc(c),188).g)}}}
function Y3b(a,b){var c,d,e;c=a.e/a.i;a.n+=a.c*b;if(a.j){if(a.n>a.e||a.n<0){a.c*=-1;if(a.n>a.e){a.n=a.e;a.d=true}if(a.n<0){a.n=0;a.d=false}}}else{a.n=a.n%a.e;a.n<0&&(a.n+=a.e)}d=a.k+Nu(X_b(Nu(hib(a.n/c)),0,a.i-1));if(d!=a.b){Rnb(a.s,a.g,new ghb(0));Rnb(a.s,a.b,new ghb(1));Rnb(a.s,d,new ghb(0));a.g=a.b;a.b=d}e=a.n%c/c;a.d&&(e=1-e);Rnb(a.s,a.b,new ghb(e));Rnb(a.s,a.g,new ghb(1-e))}
hS(923,922,{195:1,196:1,252:1,253:1},Z3b);_.Vd=function $3b(){return W3b(this,new Z3b(Fu(this.u,189),this.v))};_.b=0;_.c=0;_.d=false;_.e=0;_.f=0;_.g=0;_.i=0;_.j=false;_.k=0;_.n=0;hS(991,1,eBc);_.Cb=function L8b(){w5b(this.c,new N8b(this.b))};hS(992,940,{},N8b);_.nb=function O8b(){var b,c,d,e;this.f=new C4b;this.b=new SMb(40,0.5*QDb(this.F.o),1,10000);G1b(this.b.ab,300);oMb(new R8b(this));b=new TUb(16777215,1.3);p2b(b.ab,1,1,1);TLb(this.G,b);d=new TUb(16777215,0.1);p2b(d.ab,0.25,-1,0);TLb(this.G,d);c=new TUb(16777215,1.3);p2b(c.ab,1,1,1);TLb(this.f,c);e=new TUb(16777215,0.1);p2b(e.ab,0.25,-1,0);TLb(this.f,e);this.d=new Unb;this.c=new eqc;try{Vpc(this.c,'./static/models/animated/flamingo.js',new U8b(this))}catch(a){a=mR(a);if(Iu(a,46)){HLb();kU(GLb,(Arb(),yrb),DGc)}else throw lR(a)}this.F.o._=true;this.F.o.ab=true;xEb(this.F.o,false);this.F.o.Z=false};_.ob=function P8b(a){var b,c,d;this.e=Ah();d=a*0.01;F1b(this.b.ab,600*Math.sin(d*3.141592653589793/360));r2b(this.b.ab,600*Math.cos(d*3.141592653589793/360));qMb(this.b,this.g);for(b=0;b<this.d.c;b++){c=Fu(Nnb(this.d,b),253);Y3b(c,Nu(Ah()-this.e))}LDb(this.F.o);zEb(this.F.o,0,~~(this.F.o.Y/2),this.F.o.X);aEb(this.F.o,this.G,this.b,null,false);zEb(this.F.o,~~(this.F.o.Y/2),~~(this.F.o.Y/2),this.F.o.X);aEb(this.F.o,this.f,this.b,null,false)};_.e=0;hS(993,1,bBc,R8b);_.Id=function S8b(a){NMb(this.b.b,0.5*QDb(a.b))};hS(994,1,{},U8b);_.yf=function V8b(){var a,b,c,d;$pc(this.b.c);a=new IYb;BYb(a,new A_b(16777215));a.k=true;a.j=true;GYb(a,(BWb(),yWb));FYb(a,(yXb(),vXb));c=new Z3b(this.b.c.b,a);c.e=5000;o2b(c.fb,1.5);G1b(c.ab,150);TLb(this.b.G,c);Knb(this.b.d,c);b=new JZb;AZb(b,new A_b(16777215));GZb(b,new A_b(16777215));b.G=20;b.p=true;b.o=true;HZb(b,yWb);EZb(b,xXb);d=new Z3b(this.b.c.b,b);d.e=5000;o2b(d.fb,1.5);G1b(d.ab,150);TLb(this.b.f,d);Knb(this.b.d,d)};var nK=Wgb(VFc,'MorphNormalsFlamingo$DemoScene',992),lK=Wgb(VFc,'MorphNormalsFlamingo$DemoScene$1',993),mK=Wgb(VFc,'MorphNormalsFlamingo$DemoScene$2',994),lJ=Wgb(AGc,'MorphAnimMesh',923);qBc(Gi)(35);