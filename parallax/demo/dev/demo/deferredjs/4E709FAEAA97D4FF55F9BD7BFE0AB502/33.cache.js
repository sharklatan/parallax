function olc(){}
function slc(){}
function vlc(){}
function Clc(){}
function Glc(){}
function Jlc(){}
function ilc(){ilc=ZJc;hlc=new olc}
function klc(){klc=ZJc;jlc=new Clc}
function xlc(){xlc=ZJc;mlc=new slc}
function ylc(){ylc=ZJc;nlc=new vlc}
function Llc(){Llc=ZJc;Alc=new Glc}
function Mlc(){Mlc=ZJc;Blc=new Jlc}
function elc(){z9b.call(this);this.c=0.01}
ZT(1143,1,ILc);_.zb=function clc(){_8b(this.b,new elc(this.a))};ZT(1144,972,{328:1},elc);_.nb=function flc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.a=new fQb(30,vGb(this.G.k),1,10000);R5b(this.a._,100);this.b=new SPb(this.G.k.Z,this.G.k.Y,-10000,10000);R5b(this.b._,100);this.k=new e8b;this.n=new e8b;e=new mYb(16777215);P5b(e._,0,0,1).qf();cPb(this.k,e);f=new nYb(16755370,1.5);P5b(f._,0,0,-1).qf();cPb(this.k,f);this.j=new cOb(this.G.k.Z,this.G.k.Y);uNb(this.j,(gEb(),aEb));sNb(this.j,(XDb(),WDb));pNb(this.j,(rCb(),qCb));this.d=new j2b((ilc(),hlc));gIb(cZb(this.d),TRc,new IMb((_Mb(),NMb),new Fjb(0)));this.e=new j2b((klc(),jlc));gIb(cZb(this.e),kRc,new IMb(TMb,this.j));jZb(this.e,false);n=new tWb(this.G.k.Z,this.G.k.Y);this.i=new r7b(n,this.d);R5b(this.i._,-100);cPb(this.k,this.i);i=new g1b;Y0b(i,new $2b(5570560));d1b(i,new $2b(16720384));i.F=5;g=new g1b;Y0b(g,new $2b(5592405));d1b(g,new $2b(16755200));g.F=5;a=new MWb(100,25,15,30);this.o=new r7b(a,g);P5b(this.o._,0,0,100);P5b(this.o.eb,1.5,1.5,1.5);cPb(this.k,this.o);this.p=new r7b(a,i);P5b(this.p._,0,150,100);P5b(this.p.eb,0.75,0.75,0.75);cPb(this.k,this.p);o=new r7b(n,this.e);R5b(o._,-100);cPb(this.n,o);b=new EWb(10,64,32);j=new j_b;d_b(j,new $2b(16777215));g_b(j,this.j);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new r7b(b,j);c5b(k._,(c-2)*20);d5b(k._,(d-2)*20);R5b(k._,0);m3b(k.cb,-1.5707963267948966);cPb(this.H,k)}}PGb(this.G.k,false)};_.ob=function glc(a){Z4b(this.a._,(this.f-this.a._.c)*0.05);$4b(this.a._,(-this.g-this.a._.d)*0.05);BPb(this.a,this.H._);if(!!this.o&&!!this.p){m3b(this.o.cb,-a*0.0015);m3b(this.p.cb,-a*0.0015+1.5707963267948966)}(qu(qu(HRb(cZb(this.d).i,TRc),225).d,150).a>1||qu(qu(HRb(cZb(this.d).i,TRc),225).d,150).a<0)&&(this.c*=-1);GMb(qu(HRb(cZb(this.d).i,TRc),225),new Fjb(qu(qu(HRb(cZb(this.d).i,TRc),225).d,150).a+this.c));oGb(this.G.k,true);HGb(this.G.k,this.k,this.b,this.j,true);HGb(this.G.k,this.n,this.b,null,false);HGb(this.G.k,this.H,this.a,null,false)};_.c=0;_.f=0;_.g=0;var hlc;var jlc;ZT(1145,1,{},olc);_.Od=function plc(){return xlc(),mlc};_.Pd=function qlc(){return ylc(),nlc};var mlc,nlc;ZT(1146,1,{},slc);_.nc=function tlc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};ZT(1147,1,{},vlc);_.nc=function wlc(){return _Rc};ZT(1150,1,{},Clc);_.Od=function Dlc(){return Llc(),Alc};_.Pd=function Elc(){return Mlc(),Blc};var Alc,Blc;ZT(1151,1,{},Glc);_.nc=function Hlc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};ZT(1152,1,{},Jlc);_.nc=function Klc(){return _Rc};var CM=tjb(yQc,'MaterialsRenderTarget$DemoScene',1144),FM=tjb(yQc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1145),DM=tjb(yQc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1146),EM=tjb(yQc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1147),IM=tjb(yQc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1150),GM=tjb(yQc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1151),HM=tjb(yQc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1152);WLc(xi)(33);