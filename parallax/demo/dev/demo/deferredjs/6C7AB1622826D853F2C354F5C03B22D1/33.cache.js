function dnc(){}
function hnc(){}
function knc(){}
function rnc(){}
function vnc(){}
function ync(){}
function mnc(){mnc=mMc;bnc=new hnc}
function nnc(){nnc=mMc;cnc=new knc}
function Anc(){Anc=mMc;pnc=new vnc}
function Bnc(){Bnc=mMc;qnc=new ync}
function Zmc(){Zmc=mMc;Ymc=new dnc}
function _mc(){_mc=mMc;$mc=new rnc}
function Vmc(){pbc.call(this);this.c=0.01}
zV(1159,1,YNc);_.Mb=function Tmc(){Rac(this.b,new Vmc(this.a))};zV(1160,988,{332:1},Vmc);_.nb=function Wmc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.a=new dRb(30,iGb(this.G.k),1,10000);m8b(this.a._,100);this.b=new QQb(this.G.k.hb,this.G.k.gb,-10000,10000);m8b(this.b._,100);this.k=new V9b;this.n=new V9b;e=new $Zb(16777215);k8b(e._,0,0,1).gf();_Pb(this.k,e);f=new _Zb(16755370,1.5);k8b(f._,0,0,-1).gf();_Pb(this.k,f);this.j=new _Ob(this.G.k.hb,this.G.k.gb);rOb(this.j,(OEb(),IEb));pOb(this.j,(DEb(),CEb));mOb(this.j,(ZCb(),YCb));this.d=new $3b((Zmc(),Ymc));dJb(T$b(this.d),lUc,new FNb((YNb(),KNb),new ikb(0)));this.e=new $3b((_mc(),$mc));dJb(T$b(this.e),ETc,new FNb(QNb,this.j));$$b(this.e,false);n=new sXb(this.G.k.hb,this.G.k.gb);this.i=new fZb(n,this.d);m8b(this.i._,-100);_Pb(this.k,this.i);i=new X2b;N2b(i,new W4b(5570560));U2b(i,new W4b(16720384));i.H=5;g=new X2b;N2b(g,new W4b(5592405));U2b(g,new W4b(16755200));g.H=5;a=new LXb(100,25,15,30);this.o=new fZb(a,g);k8b(this.o._,0,0,100);k8b(this.o.eb,1.5,1.5,1.5);_Pb(this.k,this.o);this.p=new fZb(a,i);k8b(this.p._,0,150,100);k8b(this.p.eb,0.75,0.75,0.75);_Pb(this.k,this.p);o=new fZb(n,this.e);m8b(o._,-100);_Pb(this.n,o);b=new DXb(10,64,32);j=new $0b;U0b(j,new W4b(16777215));X0b(j,this.j);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new fZb(b,j);E7b(k._,(c-2)*20);F7b(k._,(d-2)*20);m8b(k._,0);j5b(k.cb,-1.5707963267948966);_Pb(this.H,k)}}jGb(this.G.k,false)};_.ob=function Xmc(a){y7b(this.a._,(this.f-this.a._.c)*0.05);z7b(this.a._,(-this.g-this.a._.d)*0.05);zQb(this.a,this.H._);if(!!this.o&&!!this.p){j5b(this.o.cb,-a*0.0015);j5b(this.p.cb,-a*0.0015+1.5707963267948966)}(wv(wv(HSb(T$b(this.d).i,lUc),226).d,150).a>1||wv(wv(HSb(T$b(this.d).i,lUc),226).d,150).a<0)&&(this.c*=-1);DNb(wv(HSb(T$b(this.d).i,lUc),226),new ikb(wv(wv(HSb(T$b(this.d).i,lUc),226).d,150).a+this.c));oHb(this.G.k,true);GHb(this.G.k,this.k,this.b,this.j,true);GHb(this.G.k,this.n,this.b,null,false);GHb(this.G.k,this.H,this.a,null,false)};_.c=0;_.f=0;_.g=0;var Ymc;var $mc;zV(1161,1,{},dnc);_.Od=function enc(){return mnc(),bnc};_.Pd=function fnc(){return nnc(),cnc};var bnc,cnc;zV(1162,1,{},hnc);_.nc=function inc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};zV(1163,1,{},knc);_.nc=function lnc(){return tUc};zV(1166,1,{},rnc);_.Od=function snc(){return Anc(),pnc};_.Pd=function tnc(){return Bnc(),qnc};var pnc,qnc;zV(1167,1,{},vnc);_.nc=function wnc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};zV(1168,1,{},ync);_.nc=function znc(){return tUc};var WN=Yjb(RSc,'MaterialsRenderTarget$DemoScene',1160),ZN=Yjb(RSc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1161),XN=Yjb(RSc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1162),YN=Yjb(RSc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1163),aO=Yjb(RSc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1166),$N=Yjb(RSc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1167),_N=Yjb(RSc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1168);kOc(Ej)(33);