function amc(){}
function emc(){}
function hmc(){}
function omc(){}
function smc(){}
function vmc(){}
function jmc(){jmc=ZKc;$lc=new emc}
function kmc(){kmc=ZKc;_lc=new hmc}
function xmc(){xmc=ZKc;mmc=new smc}
function ymc(){ymc=ZKc;nmc=new vmc}
function Wlc(){Wlc=ZKc;Vlc=new amc}
function Ylc(){Ylc=ZKc;Xlc=new omc}
function Slc(){mac.call(this);this.c=0.01}
qU(1148,1,JMc);_.zb=function Qlc(){O9b(this.b,new Slc(this.a))};qU(1149,977,{328:1},Slc);_.nb=function Tlc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.a=new xQb(30,NGb(this.G.k),1,10000);S6b(this.a._,100);this.b=new iQb(this.G.k.Z,this.G.k.Y,-10000,10000);S6b(this.b._,100);this.k=new T8b;this.n=new T8b;e=new mZb(16777215);Q6b(e._,0,0,1).sf();uPb(this.k,e);f=new nZb(16755370,1.5);Q6b(f._,0,0,-1).sf();uPb(this.k,f);this.j=new uOb(this.G.k.Z,this.G.k.Y);MNb(this.j,(yEb(),sEb));KNb(this.j,(nEb(),mEb));HNb(this.j,(JCb(),ICb));this.d=new j3b((Wlc(),Vlc));yIb(c$b(this.d),gTc,new $Mb((rNb(),dNb),new Ujb(0)));this.e=new j3b((Ylc(),Xlc));yIb(c$b(this.e),zSc,new $Mb(jNb,this.j));j$b(this.e,false);n=new OWb(this.G.k.Z,this.G.k.Y);this.i=new uYb(n,this.d);S6b(this.i._,-100);uPb(this.k,this.i);i=new g2b;Y1b(i,new _3b(5570560));d2b(i,new _3b(16720384));i.F=5;g=new g2b;Y1b(g,new _3b(5592405));d2b(g,new _3b(16755200));g.F=5;a=new fXb(100,25,15,30);this.o=new uYb(a,g);Q6b(this.o._,0,0,100);Q6b(this.o.eb,1.5,1.5,1.5);uPb(this.k,this.o);this.p=new uYb(a,i);Q6b(this.p._,0,150,100);Q6b(this.p.eb,0.75,0.75,0.75);uPb(this.k,this.p);o=new uYb(n,this.e);S6b(o._,-100);uPb(this.n,o);b=new ZWb(10,64,32);j=new j0b;d0b(j,new _3b(16777215));g0b(j,this.j);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new uYb(b,j);d6b(k._,(c-2)*20);e6b(k._,(d-2)*20);S6b(k._,0);n4b(k.cb,-1.5707963267948966);uPb(this.H,k)}}fHb(this.G.k,false)};_.ob=function Ulc(a){$5b(this.a._,(this.f-this.a._.c)*0.05);_5b(this.a._,(-this.g-this.a._.d)*0.05);TPb(this.a,this.H._);if(!!this.o&&!!this.p){n4b(this.o.cb,-a*0.0015);n4b(this.p.cb,-a*0.0015+1.5707963267948966)}(zu(zu(aSb(c$b(this.d).i,gTc),225).d,150).a>1||zu(zu(aSb(c$b(this.d).i,gTc),225).d,150).a<0)&&(this.c*=-1);YMb(zu(aSb(c$b(this.d).i,gTc),225),new Ujb(zu(zu(aSb(c$b(this.d).i,gTc),225).d,150).a+this.c));GGb(this.G.k,true);ZGb(this.G.k,this.k,this.b,this.j,true);ZGb(this.G.k,this.n,this.b,null,false);ZGb(this.G.k,this.H,this.a,null,false)};_.c=0;_.f=0;_.g=0;var Vlc;var Xlc;qU(1150,1,{},amc);_.Od=function bmc(){return jmc(),$lc};_.Pd=function cmc(){return kmc(),_lc};var $lc,_lc;qU(1151,1,{},emc);_.nc=function fmc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};qU(1152,1,{},hmc);_.nc=function imc(){return oTc};qU(1155,1,{},omc);_.Od=function pmc(){return xmc(),mmc};_.Pd=function qmc(){return ymc(),nmc};var mmc,nmc;qU(1156,1,{},smc);_.nc=function tmc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};qU(1157,1,{},vmc);_.nc=function wmc(){return oTc};var QM=Ijb(NRc,'MaterialsRenderTarget$DemoScene',1149),TM=Ijb(NRc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1150),RM=Ijb(NRc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1151),SM=Ijb(NRc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1152),WM=Ijb(NRc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1155),UM=Ijb(NRc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1156),VM=Ijb(NRc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1157);XMc(xi)(33);