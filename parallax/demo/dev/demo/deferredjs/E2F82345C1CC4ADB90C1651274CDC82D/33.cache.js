function nlc(){}
function rlc(){}
function ulc(){}
function Blc(){}
function Flc(){}
function Ilc(){}
function hlc(){hlc=YJc;glc=new nlc}
function jlc(){jlc=YJc;ilc=new Blc}
function wlc(){wlc=YJc;llc=new rlc}
function xlc(){xlc=YJc;mlc=new ulc}
function Klc(){Klc=YJc;zlc=new Flc}
function Llc(){Llc=YJc;Alc=new Ilc}
function dlc(){y9b.call(this);this.c=0.01}
ZT(1143,1,HLc);_.zb=function blc(){$8b(this.b,new dlc(this.a))};ZT(1144,972,{328:1},dlc);_.nb=function elc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.a=new eQb(30,uGb(this.G.k),1,10000);Q5b(this.a._,100);this.b=new RPb(this.G.k.Z,this.G.k.Y,-10000,10000);Q5b(this.b._,100);this.k=new d8b;this.n=new d8b;e=new lYb(16777215);O5b(e._,0,0,1).qf();bPb(this.k,e);f=new mYb(16755370,1.5);O5b(f._,0,0,-1).qf();bPb(this.k,f);this.j=new bOb(this.G.k.Z,this.G.k.Y);tNb(this.j,(fEb(),_Db));rNb(this.j,(WDb(),VDb));oNb(this.j,(qCb(),pCb));this.d=new i2b((hlc(),glc));fIb(bZb(this.d),SRc,new HMb(($Mb(),MMb),new Fjb(0)));this.e=new i2b((jlc(),ilc));fIb(bZb(this.e),jRc,new HMb(SMb,this.j));iZb(this.e,false);n=new sWb(this.G.k.Z,this.G.k.Y);this.i=new q7b(n,this.d);Q5b(this.i._,-100);bPb(this.k,this.i);i=new f1b;X0b(i,new Z2b(5570560));c1b(i,new Z2b(16720384));i.F=5;g=new f1b;X0b(g,new Z2b(5592405));c1b(g,new Z2b(16755200));g.F=5;a=new LWb(100,25,15,30);this.o=new q7b(a,g);O5b(this.o._,0,0,100);O5b(this.o.eb,1.5,1.5,1.5);bPb(this.k,this.o);this.p=new q7b(a,i);O5b(this.p._,0,150,100);O5b(this.p.eb,0.75,0.75,0.75);bPb(this.k,this.p);o=new q7b(n,this.e);Q5b(o._,-100);bPb(this.n,o);b=new DWb(10,64,32);j=new i_b;c_b(j,new Z2b(16777215));f_b(j,this.j);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new q7b(b,j);b5b(k._,(c-2)*20);c5b(k._,(d-2)*20);Q5b(k._,0);l3b(k.cb,-1.5707963267948966);bPb(this.H,k)}}OGb(this.G.k,false)};_.ob=function flc(a){Y4b(this.a._,(this.f-this.a._.c)*0.05);Z4b(this.a._,(-this.g-this.a._.d)*0.05);APb(this.a,this.H._);if(!!this.o&&!!this.p){l3b(this.o.cb,-a*0.0015);l3b(this.p.cb,-a*0.0015+1.5707963267948966)}(qu(qu(GRb(bZb(this.d).i,SRc),225).d,150).a>1||qu(qu(GRb(bZb(this.d).i,SRc),225).d,150).a<0)&&(this.c*=-1);FMb(qu(GRb(bZb(this.d).i,SRc),225),new Fjb(qu(qu(GRb(bZb(this.d).i,SRc),225).d,150).a+this.c));nGb(this.G.k,true);GGb(this.G.k,this.k,this.b,this.j,true);GGb(this.G.k,this.n,this.b,null,false);GGb(this.G.k,this.H,this.a,null,false)};_.c=0;_.f=0;_.g=0;var glc;var ilc;ZT(1145,1,{},nlc);_.Od=function olc(){return wlc(),llc};_.Pd=function plc(){return xlc(),mlc};var llc,mlc;ZT(1146,1,{},rlc);_.nc=function slc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};ZT(1147,1,{},ulc);_.nc=function vlc(){return $Rc};ZT(1150,1,{},Blc);_.Od=function Clc(){return Klc(),zlc};_.Pd=function Dlc(){return Llc(),Alc};var zlc,Alc;ZT(1151,1,{},Flc);_.nc=function Glc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};ZT(1152,1,{},Ilc);_.nc=function Jlc(){return $Rc};var CM=tjb(xQc,'MaterialsRenderTarget$DemoScene',1144),FM=tjb(xQc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1145),DM=tjb(xQc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1146),EM=tjb(xQc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1147),IM=tjb(xQc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1150),GM=tjb(xQc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1151),HM=tjb(xQc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1152);VLc(xi)(33);