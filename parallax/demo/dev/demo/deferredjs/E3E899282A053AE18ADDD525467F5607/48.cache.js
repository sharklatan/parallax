function kzc(a,b){a.e=b}
function lfc(a){this.b=a}
function ufc(a){this.b=a}
function ofc(a,b){this.b=a;this.c=b}
function rfc(a,b){this.b=a;this.c=b}
function hfc(){Obc.call(this)}
function LAb(a){return new $wnd.DataView(a)}
function snb(a,b){Ql(a.b,String.fromCharCode.apply(null,b));return a}
function Hzc(a,b){izc();lzc.call(this,a,b);kzc(this,(Rcb(),Pcb));jzc(this)}
function Dzc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new vnb(a.byteLength);for(d=0;d<a.byteLength;d++){snb(c,xkb(b[d]))}return c.b.b}
function gfc(a,b,c,d,e){var f;f=new G$b(d,e);p8b(f.ab,b,1,c);LQb(a.I,f);f.T=true;f.f=-1;f.g=1;f.i=1;f.e=-1;f.B=1;f.A=4;f.J=1024;f.H=1024;f.v=-0.005;f.F=0.15}
function xkb(a){if(a<0||a>1114111){throw new glb}return a>=65536?Tv(zT,XMc,-1,[55296+(~~(a-65536)>>10&1023)&65535,56320+(a-65536&1023)&65535]):Tv(zT,XMc,-1,[a&65535])}
function dkb(a){var b;if(!(b=ckb,!b&&(b=ckb=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new omb(FWc+a+xRc)}return parseFloat(a)}
function Ezc(a){var b,c,d,e,f;f=LAb(a.c);e=jw(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function Fzc(a){var b,c,d,e,f,g,i,j,k,n;b=new DSb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',zRc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',zRc);for(j=f.exec(n);j;j=f.exec(n)){d=new v8b(dkb(j[1]),dkb(j[3]),dkb(j[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',zRc);for(k=g.exec(n);k;k=g.exec(n)){b.t.Mc(new v8b(dkb(k[1]),dkb(k[3]),dkb(k[5])))}c=b.t.Xc();b.j.Mc(new oTb(c-3,c-2,c-1,d))}!b.u&&(b.u=new f5b);d5b(b.u,b.t);!b.v&&(b.v=new u7b);r7b(b.v,b.t);return b}
function Gzc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=LAb(a.c);j=jw(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(jw(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new jSb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(~~w>>5&31)/31;c=(~~w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;MAb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);MAb(u,v,r);MAb(u,v+1,s);MAb(u,v+2,t);if(o){MAb(d,v,A);MAb(d,v+1,k);MAb(d,v+2,c)}v+=3}}dSb(n,VQc,new aSb(F,3));dSb(n,hUc,new aSb(u,3));if(o){dSb(n,NSc,new aSb(d,3));a.b=b}return n}
var ckb;kW(1043,1,xOc);_.Qb=function efc(){obc(this.c,new hfc(this.b))};kW(1044,990,{},hfc);_.ob=function ifc(){var a,b,c;this.b=new PRb(35,UGb(this.H.n),1,15);p8b(this.b.ab,3,0.15,3);this.c=new v8b(0,-0.25,0);qac(this.I,new gac(7496795,2,15));c=new C3b;s3b(c,new A5b(10066329));p3b(c,new A5b(10066329));z3b(c,new A5b(1052688));b=new MZb(new dYb(40,40),c);N5b(b.db,-1.5707963267948966);F7b(b.ab,-0.5);LQb(this.I,b);b.V=true;new Hzc('./static/models/stl/ascii/slotted_disk.stl',new lfc(this));a=new C3b;p3b(a,new A5b(5592405));s3b(a,new A5b(11184810));z3b(a,new A5b(1118481));a.I=200;new Hzc('./static/models/stl/binary/pr2_head_pan.stl',new ofc(this,a));new Hzc('./static/models/stl/binary/pr2_head_tilt.stl',new rfc(this,a));new Hzc('./static/models/stl/binary/colored.stl',new ufc(this));LQb(this.I,new c$b(7829367));gfc(this,1,1,16777215,1.35);gfc(this,0.5,-1,16755200,1);AIb(this.H.n,this.I.b.d,1);this.H.n.Y=true;this.H.n.Z=true};_.pb=function jfc(a){E7b(this.b.ab,Math.cos(a*5.0E-4)*3);r8b(this.b.ab,Math.sin(a*5.0E-4)*3);jRb(this.b,this.c);qIb(this.H.n,this.I,this.b,null,false)};kW(1045,1,{},lfc);_.Jf=function mfc(a,b){var c,d;c=new C3b;p3b(c,new A5b(16733491));s3b(c,new A5b(16733491));z3b(c,new A5b(1118481));c.I=200;d=new MZb(b,c);p8b(d.ab,0,-0.25,0.6);I5b(d.db,0,-1.5707963267948966);p8b(d.fb,0.5,0.5,0.5);d.T=true;d.V=true;LQb(this.b.I,d)};kW(1046,1,{},ofc);_.Jf=function pfc(a,b){var c;c=new MZb(b,this.c);p8b(c.ab,0,-0.37,-0.6);I5b(c.db,-1.5707963267948966,0);p8b(c.fb,2,2,2);c.T=true;c.V=true;LQb(this.b.I,c)};kW(1047,1,{},rfc);_.Jf=function sfc(a,b){var c;c=new MZb(b,this.c);p8b(c.ab,0.136,-0.37,-0.6);I5b(c.db,-1.5707963267948966,0.3);p8b(c.fb,2,2,2);c.T=true;c.V=true;LQb(this.b.I,c)};kW(1048,1,{},ufc);_.Jf=function vfc(a,b){var c,d;c=new C3b;H_b(c,bw(a,346).b);A3b(c,(q0b(),p0b));d=new MZb(b,c);p8b(d.ab,0.5,0.2,0);I5b(d.db,-1.5707963267948966,1.5707963267948966);p8b(d.fb,0.3,0.3,0.3);d.T=true;d.V=true;LQb(this.b.I,d)};kW(1345,1343,{346:1},Hzc);_.Lf=function Izc(a){return null};_.Mf=function Jzc(a){this.c=a;return Ezc(this)?Gzc(this):Fzc(Dzc(a))};_.b=0;var BM=Hkb(BTc,'LoaderSTL$DemoScene',1044),xM=Hkb(BTc,'LoaderSTL$DemoScene$1',1045),yM=Hkb(BTc,'LoaderSTL$DemoScene$2',1046),zM=Hkb(BTc,'LoaderSTL$DemoScene$3',1047),AM=Hkb(BTc,'LoaderSTL$DemoScene$4',1048),qR=Hkb(GWc,'STLLoader',1345);LOc(Pj)(48);