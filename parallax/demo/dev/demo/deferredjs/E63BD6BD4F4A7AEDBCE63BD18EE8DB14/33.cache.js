function zjc(){}
function Djc(){}
function Gjc(){}
function Njc(){}
function Rjc(){}
function Ujc(){}
function tjc(){tjc=_Ec;sjc=new zjc}
function vjc(){vjc=_Ec;ujc=new Njc}
function Ijc(){Ijc=_Ec;xjc=new Djc}
function Jjc(){Jjc=_Ec;yjc=new Gjc}
function Wjc(){Wjc=_Ec;Ljc=new Rjc}
function Xjc(){Xjc=_Ec;Mjc=new Ujc}
function pjc(){n7b.call(this);this.c=0.01}
YS(1127,1,JGc);_.zb=function njc(){P6b(this.b,new pjc(this.a))};YS(1128,958,{327:1},pjc);_.nb=function qjc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.a=new sOb(30,eFb(this.D.k),1,10000);I3b(this.a._,100);this.b=new fOb(this.D.k.Z,this.D.k.Y,-10000,10000);I3b(this.b._,100);this.k=new V5b;this.n=new V5b;e=new tWb(16777215);G3b(e._,0,0,1).kf();sNb(this.k,e);f=new uWb(16755370,1.5);G3b(f._,0,0,-1).kf();sNb(this.k,f);this.j=new sMb(this.D.k.Z,this.D.k.Y);KLb(this.j,(SCb(),MCb));ILb(this.j,(HCb(),GCb));FLb(this.j,(bBb(),aBb));this.d=new b0b((tjc(),sjc));RGb(iXb(this.d),dNc,new YKb((pLb(),bLb),new tib(0)));this.e=new b0b((vjc(),ujc));RGb(iXb(this.e),vMc,new YKb(hLb,this.j));pXb(this.e,false);n=new AUb(this.D.k.Z,this.D.k.Y);this.i=new i5b(n,this.d);I3b(this.i._,-100);sNb(this.k,this.i);i=new a_b;T$b(i,new S0b(5570560));Z$b(i,new S0b(16720384));i.F=5;g=new a_b;T$b(g,new S0b(5592405));Z$b(g,new S0b(16755200));g.F=5;a=new TUb(100,25,15,30);this.o=new i5b(a,g);G3b(this.o._,0,0,100);G3b(this.o.eb,1.5,1.5,1.5);sNb(this.k,this.o);this.p=new i5b(a,i);G3b(this.p._,0,150,100);G3b(this.p.eb,0.75,0.75,0.75);sNb(this.k,this.p);o=new i5b(n,this.e);I3b(o._,-100);sNb(this.n,o);b=new LUb(10,64,32);j=new oZb;iZb(j,new S0b(16777215));lZb(j,this.j);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new i5b(b,j);W2b(k._,(c-2)*20);X2b(k._,(d-2)*20);I3b(k._,0);e1b(k.cb,-1.5707963267948966);sNb(this.F,k)}}yFb(this.D.k,false)};_.ob=function rjc(a){R2b(this.a._,(this.f-this.a._.c)*0.05);S2b(this.a._,(-this.g-this.a._.d)*0.05);QNb(this.a,this.F._);if(!!this.o&&!!this.p){e1b(this.o.cb,-a*0.0015);e1b(this.p.cb,-a*0.0015+1.5707963267948966)}(Au(Au(QPb(iXb(this.d).i,dNc),225).d,150).a>1||Au(Au(QPb(iXb(this.d).i,dNc),225).d,150).a<0)&&(this.c*=-1);WKb(Au(QPb(iXb(this.d).i,dNc),225),new tib(Au(Au(QPb(iXb(this.d).i,dNc),225).d,150).a+this.c));$Eb(this.D.k);qFb(this.D.k,this.k,this.b,this.j,true);qFb(this.D.k,this.n,this.b,null,false);qFb(this.D.k,this.F,this.a,null,false)};_.c=0;_.f=0;_.g=0;var sjc;var ujc;YS(1129,1,{},zjc);_.Md=function Ajc(){return Ijc(),xjc};_.Nd=function Bjc(){return Jjc(),yjc};var xjc,yjc;YS(1130,1,{},Djc);_.ac=function Ejc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};YS(1131,1,{},Gjc);_.ac=function Hjc(){return lNc};YS(1134,1,{},Njc);_.Md=function Ojc(){return Wjc(),Ljc};_.Nd=function Pjc(){return Xjc(),Mjc};var Ljc,Mjc;YS(1135,1,{},Rjc);_.ac=function Sjc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};YS(1136,1,{},Ujc);_.ac=function Vjc(){return lNc};var DM=hib(ILc,'MaterialsRenderTarget$DemoScene',1128),GM=hib(ILc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1129),EM=hib(ILc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1130),FM=hib(ILc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1131),JM=hib(ILc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1134),HM=hib(ILc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1135),IM=hib(ILc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1136);WGc(xi)(33);