function Lzc(a,b){a.e=b}
function Fdc(a){this.b=a}
function Odc(a){this.b=a}
function Idc(a,b){this.b=a;this.c=b}
function Ldc(a,b){this.b=a;this.c=b}
function Bdc(){eac.call(this)}
function bAb(a){return new $wnd.DataView(a)}
function Lmb(a,b){Jk(a.b,String.fromCharCode.apply(null,b));return a}
function gAc(a,b){Jzc();Mzc.call(this,a,b);Lzc(this,(jcb(),hcb));Kzc(this)}
function cAc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new Omb(a.byteLength);for(d=0;d<a.byteLength;d++){Lmb(c,Rjb(b[d]))}return c.b.b}
function Adc(a,b,c,d,e){var f;f=new VYb(d,e);v6b(f.ab,b,1,c);KPb(a.I,f);f.T=true;f.f=-1;f.g=1;f.i=1;f.e=-1;f.B=1;f.A=4;f.J=1024;f.H=1024;f.v=-0.005;f.F=0.15}
function Rjb(a){if(a<0||a>1114111){throw new Akb}return a>=65536?Mu(ZR,uNc,-1,[55296+(~~(a-65536)>>10&1023)&65535,56320+(a-65536&1023)&65535]):Mu(ZR,uNc,-1,[a&65535])}
function xjb(a){var b;if(!(b=wjb,!b&&(b=wjb=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new Ilb(aXc+a+XRc)}return parseFloat(a)}
function dAc(a){var b,c,d,e,f;f=bAb(a.c);e=cv(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function eAc(a){var b,c,d,e,f,g,i,j,k,n;b=new zRb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',ZRc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',ZRc);for(k=f.exec(n);k;k=f.exec(n)){d=new B6b(xjb(k[1]),xjb(k[3]),xjb(k[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',ZRc);for(j=g.exec(n);j;j=g.exec(n)){b.t.Mc(new B6b(xjb(j[1]),xjb(j[3]),xjb(j[5])))}c=b.t.Xc();b.j.Mc(new jSb(c-3,c-2,c-1,d))}!b.u&&(b.u=new r3b);p3b(b.u,b.t);!b.v&&(b.v=new A5b);x5b(b.v,b.t);return b}
function fAc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=bAb(a.c);j=cv(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(cv(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new gRb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(~~w>>5&31)/31;c=(~~w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;cAb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);cAb(u,v,r);cAb(u,v+1,s);cAb(u,v+2,t);if(o){cAb(d,v,A);cAb(d,v+1,k);cAb(d,v+2,c)}v+=3}}bRb(n,pRc,new $Qb(F,3));bRb(n,DUc,new $Qb(u,3));if(o){bRb(n,jTc,new $Qb(d,3));a.b=b}return n}
var wjb;JU(1025,1,XOc);_.Db=function ydc(){G9b(this.c,new Bdc(this.b))};JU(1026,973,{},Bdc);_.ob=function Cdc(){var a,b,c;this.b=new NQb(35,bHb(this.H.n),1,15);v6b(this.b.ab,3,0.15,3);this.c=new B6b(0,-0.25,0);K8b(this.I,new A8b(7496795,2,15));c=new O1b;E1b(c,new G3b(10066329));B1b(c,new G3b(10066329));L1b(c,new G3b(1052688));b=new Z7b(new _Wb(40,40),c);T3b(b.db,-1.5707963267948966);L5b(b.ab,-0.5);KPb(this.I,b);b.V=true;new gAc('./static/models/stl/ascii/slotted_disk.stl',new Fdc(this));a=new O1b;B1b(a,new G3b(5592405));E1b(a,new G3b(11184810));L1b(a,new G3b(1118481));a.G=200;new gAc('./static/models/stl/binary/pr2_head_pan.stl',new Idc(this,a));new gAc('./static/models/stl/binary/pr2_head_tilt.stl',new Ldc(this,a));new gAc('./static/models/stl/binary/colored.stl',new Odc(this));KPb(this.I,new sYb(7829367));Adc(this,1,1,16777215,1.35);Adc(this,0.5,-1,16755200,1);zHb(this.H.n,this.I.b.d,1);this.H.n.bb=true;this.H.n.cb=true};_.pb=function Ddc(a){K5b(this.b.ab,Math.cos(a*5.0E-4)*3);x6b(this.b.ab,Math.sin(a*5.0E-4)*3);hQb(this.b,this.c);nHb(this.H.n,this.I,this.b,null,false)};JU(1027,1,{},Fdc);_.If=function Gdc(a,b){var c,d;c=new O1b;B1b(c,new G3b(16733491));E1b(c,new G3b(16733491));L1b(c,new G3b(1118481));c.G=200;d=new Z7b(b,c);v6b(d.ab,0,-0.25,0.6);O3b(d.db,0,-1.5707963267948966);v6b(d.fb,0.5,0.5,0.5);d.T=true;d.V=true;KPb(this.b.I,d)};JU(1028,1,{},Idc);_.If=function Jdc(a,b){var c;c=new Z7b(b,this.c);v6b(c.ab,0,-0.37,-0.6);O3b(c.db,-1.5707963267948966,0);v6b(c.fb,2,2,2);c.T=true;c.V=true;KPb(this.b.I,c)};JU(1029,1,{},Ldc);_.If=function Mdc(a,b){var c;c=new Z7b(b,this.c);v6b(c.ab,0.136,-0.37,-0.6);O3b(c.db,-1.5707963267948966,0.3);v6b(c.fb,2,2,2);c.T=true;c.V=true;KPb(this.b.I,c)};JU(1030,1,{},Odc);_.If=function Pdc(a,b){var c,d;c=new O1b;TZb(c,Wu(a,340).b);M1b(c,(C$b(),B$b));d=new Z7b(b,c);v6b(d.ab,0.5,0.2,0);O3b(d.db,-1.5707963267948966,1.5707963267948966);v6b(d.fb,0.3,0.3,0.3);d.T=true;d.V=true;KPb(this.b.I,d)};JU(1368,1366,{340:1},gAc);_.Kf=function hAc(a){return null};_.Lf=function iAc(a){this.c=a;return dAc(this)?fAc(this):eAc(cAc(a))};_.b=0;var fL=_jb(YTc,'LoaderSTL$DemoScene',1026),bL=_jb(YTc,'LoaderSTL$DemoScene$1',1027),cL=_jb(YTc,'LoaderSTL$DemoScene$2',1028),dL=_jb(YTc,'LoaderSTL$DemoScene$3',1029),eL=_jb(YTc,'LoaderSTL$DemoScene$4',1030),QP=_jb(bXc,'STLLoader',1368);jPc(Ii)(48);