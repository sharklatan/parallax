function qzc(a,b){a.e=b}
function kdc(a){this.b=a}
function tdc(a){this.b=a}
function ndc(a,b){this.b=a;this.c=b}
function qdc(a,b){this.b=a;this.c=b}
function gdc(){L9b.call(this)}
function Izb(a){return new $wnd.DataView(a)}
function qmb(a,b){mk(a.b,String.fromCharCode.apply(null,b));return a}
function Nzc(a,b){ozc();rzc.call(this,a,b);qzc(this,(Rbb(),Pbb));pzc(this)}
function Jzc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new tmb(a.byteLength);for(d=0;d<a.byteLength;d++){qmb(c,xjb(b[d]))}return c.b.b}
function fdc(a,b,c,d,e){var f;f=new AYb(d,e);a6b(f.ab,b,1,c);pPb(a.I,f);f.T=true;f.f=-1;f.g=1;f.i=1;f.e=-1;f.B=1;f.A=4;f.J=1024;f.H=1024;f.v=-0.005;f.F=0.15}
function xjb(a){if(a<0||a>1114111){throw new gkb}return a>=65536?uu(CR,_Mc,-1,[55296+(a-65536>>10&1023)&65535,56320+(a-65536&1023)&65535]):uu(CR,_Mc,-1,[a&65535])}
function djb(a){var b;if(!(b=cjb,!b&&(b=cjb=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new olb(CWc+a+vRc)}return parseFloat(a)}
function Kzc(a){var b,c,d,e,f;f=Izb(a.c);e=Mu(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function Lzc(a){var b,c,d,e,f,g,i,j,k,n;b=new eRb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',xRc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',xRc);for(k=f.exec(n);k;k=f.exec(n)){d=new g6b(djb(k[1]),djb(k[3]),djb(k[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',xRc);for(j=g.exec(n);j;j=g.exec(n)){b.t.Ic(new g6b(djb(j[1]),djb(j[3]),djb(j[5])))}c=b.t.Tc();b.j.Ic(new QRb(c-3,c-2,c-1,d))}!b.u&&(b.u=new Y2b);W2b(b.u,b.t);!b.v&&(b.v=new f5b);c5b(b.v,b.t);return b}
function Mzc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=Izb(a.c);j=Mu(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(Mu(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new NQb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(w>>5&31)/31;c=(w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;Jzb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);Jzb(u,v,r);Jzb(u,v+1,s);Jzb(u,v+2,t);if(o){Jzb(d,v,A);Jzb(d,v+1,k);Jzb(d,v+2,c)}v+=3}}IQb(n,PQc,new FQb(F,3));IQb(n,dUc,new FQb(u,3));if(o){IQb(n,LSc,new FQb(d,3));a.b=b}return n}
var cjb;mU(1019,1,COc);_.Db=function ddc(){l9b(this.c,new gdc(this.b))};mU(1020,967,{},gdc);_.ob=function hdc(){var a,b,c;this.b=new sQb(35,IGb(this.H.n),1,15);a6b(this.b.ab,3,0.15,3);this.c=new g6b(0,-0.25,0);p8b(this.I,new f8b(7496795,2,15));c=new t1b;j1b(c,new l3b(10066329));g1b(c,new l3b(10066329));q1b(c,new l3b(1052688));b=new E7b(new GWb(40,40),c);y3b(b.db,-1.5707963267948966);q5b(b.ab,-0.5);pPb(this.I,b);b.V=true;new Nzc('./static/models/stl/ascii/slotted_disk.stl',new kdc(this));a=new t1b;g1b(a,new l3b(5592405));j1b(a,new l3b(11184810));q1b(a,new l3b(1118481));a.G=200;new Nzc('./static/models/stl/binary/pr2_head_pan.stl',new ndc(this,a));new Nzc('./static/models/stl/binary/pr2_head_tilt.stl',new qdc(this,a));new Nzc('./static/models/stl/binary/colored.stl',new tdc(this));pPb(this.I,new ZXb(7829367));fdc(this,1,1,16777215,1.35);fdc(this,0.5,-1,16755200,1);eHb(this.H.n,this.I.b.d,1);this.H.n.bb=true;this.H.n.cb=true};_.pb=function idc(a){p5b(this.b.ab,Math.cos(a*5.0E-4)*3);c6b(this.b.ab,Math.sin(a*5.0E-4)*3);OPb(this.b,this.c);UGb(this.H.n,this.I,this.b,null,false)};mU(1021,1,{},kdc);_.Ef=function ldc(a,b){var c,d;c=new t1b;g1b(c,new l3b(16733491));j1b(c,new l3b(16733491));q1b(c,new l3b(1118481));c.G=200;d=new E7b(b,c);a6b(d.ab,0,-0.25,0.6);t3b(d.db,0,-1.5707963267948966);a6b(d.fb,0.5,0.5,0.5);d.T=true;d.V=true;pPb(this.b.I,d)};mU(1022,1,{},ndc);_.Ef=function odc(a,b){var c;c=new E7b(b,this.c);a6b(c.ab,0,-0.37,-0.6);t3b(c.db,-1.5707963267948966,0);a6b(c.fb,2,2,2);c.T=true;c.V=true;pPb(this.b.I,c)};mU(1023,1,{},qdc);_.Ef=function rdc(a,b){var c;c=new E7b(b,this.c);a6b(c.ab,0.136,-0.37,-0.6);t3b(c.db,-1.5707963267948966,0.3);a6b(c.fb,2,2,2);c.T=true;c.V=true;pPb(this.b.I,c)};mU(1024,1,{},tdc);_.Ef=function udc(a,b){var c,d;c=new t1b;yZb(c,Eu(a,340).b);r1b(c,(h$b(),g$b));d=new E7b(b,c);a6b(d.ab,0.5,0.2,0);t3b(d.db,-1.5707963267948966,1.5707963267948966);a6b(d.fb,0.3,0.3,0.3);d.T=true;d.V=true;pPb(this.b.I,d)};mU(1362,1360,{340:1},Nzc);_.Gf=function Ozc(a){return null};_.Hf=function Pzc(a){this.c=a;return Kzc(this)?Mzc(this):Lzc(Jzc(a))};_.b=0;var KK=Hjb(yTc,'LoaderSTL$DemoScene',1020),GK=Hjb(yTc,'LoaderSTL$DemoScene$1',1021),HK=Hjb(yTc,'LoaderSTL$DemoScene$2',1022),IK=Hjb(yTc,'LoaderSTL$DemoScene$3',1023),JK=Hjb(yTc,'LoaderSTL$DemoScene$4',1024),tP=Hjb(DWc,'STLLoader',1362);QOc(Hi)(48);