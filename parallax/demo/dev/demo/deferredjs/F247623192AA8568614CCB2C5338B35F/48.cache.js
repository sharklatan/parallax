function fzc(a,b){a.d=b}
function _cc(a){this.a=a}
function idc(a){this.a=a}
function cdc(a,b){this.a=a;this.b=b}
function fdc(a,b){this.a=a;this.b=b}
function Xcc(){A9b.call(this)}
function xzb(a){return new $wnd.DataView(a)}
function fmb(a,b){dk(a.a,String.fromCharCode.apply(null,b));return a}
function Czc(a,b){dzc();gzc.call(this,a,b);fzc(this,(Gbb(),Ebb));ezc(this)}
function yzc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new imb(a.byteLength);for(d=0;d<a.byteLength;d++){fmb(c,mjb(b[d]))}return c.a.a}
function Wcc(a,b,c,d,e){var f;f=new pYb(d,e);R5b(f._,b,1,c);ePb(a.H,f);f.S=true;f.e=-1;f.f=1;f.g=1;f.d=-1;f.A=1;f.w=4;f.I=1024;f.G=1024;f.u=-0.005;f.D=0.15}
function mjb(a){if(a<0||a>1114111){throw new Xjb}return a>=65536?pu(vR,PMc,-1,[55296+(a-65536>>10&1023)&65535,56320+(a-65536&1023)&65535]):pu(vR,PMc,-1,[a&65535])}
function Uib(a){var b;if(!(b=Tib,!b&&(b=Tib=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new dlb(vWc+a+jRc)}return parseFloat(a)}
function zzc(a){var b,c,d,e,f;f=xzb(a.b);e=Hu(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function Azc(a){var b,c,d,e,f,g,i,j,k,n;b=new VQb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',lRc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',lRc);for(k=f.exec(n);k;k=f.exec(n)){d=new X5b(Uib(k[1]),Uib(k[3]),Uib(k[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',lRc);for(j=g.exec(n);j;j=g.exec(n)){b.s.Fc(new X5b(Uib(j[1]),Uib(j[3]),Uib(j[5])))}c=b.s.Qc();b.i.Fc(new FRb(c-3,c-2,c-1,d))}!b.t&&(b.t=new N2b);L2b(b.t,b.s);!b.u&&(b.u=new W4b);T4b(b.u,b.s);return b}
function Bzc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=xzb(a.b);j=Hu(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(Hu(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new CQb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(w>>5&31)/31;c=(w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;yzb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);yzb(u,v,r);yzb(u,v+1,s);yzb(u,v+2,t);if(o){yzb(d,v,A);yzb(d,v+1,k);yzb(d,v+2,c)}v+=3}}xQb(n,CQc,new uQb(F,3));xQb(n,YTc,new uQb(u,3));if(o){xQb(n,ESc,new uQb(d,3));a.a=b}return n}
var Tib;fU(1022,1,pOc);_.zb=function Ucc(){a9b(this.b,new Xcc(this.a))};fU(1023,970,{},Xcc);_.nb=function Ycc(){var a,b,c;this.a=new hQb(35,xGb(this.G.k),1,15);R5b(this.a._,3,0.15,3);this.b=new X5b(0,-0.25,0);e8b(this.H,new W7b(7496795,2,15));c=new i1b;$0b(c,new a3b(10066329));X0b(c,new a3b(10066329));f1b(c,new a3b(1052688));b=new t7b(new vWb(40,40),c);n3b(b.cb,-1.5707963267948966);f5b(b._,-0.5);ePb(this.H,b);b.U=true;new Czc('./static/models/stl/ascii/slotted_disk.stl',new _cc(this));a=new i1b;X0b(a,new a3b(5592405));$0b(a,new a3b(11184810));f1b(a,new a3b(1118481));a.F=200;new Czc('./static/models/stl/binary/pr2_head_pan.stl',new cdc(this,a));new Czc('./static/models/stl/binary/pr2_head_tilt.stl',new fdc(this,a));new Czc('./static/models/stl/binary/colored.stl',new idc(this));ePb(this.H,new OXb(7829367));Wcc(this,1,1,16777215,1.35);Wcc(this,0.5,-1,16755200,1);VGb(this.G.k,this.H.a.c,1);this.G.k.ab=true;this.G.k.bb=true};_.ob=function Zcc(a){e5b(this.a._,Math.cos(a*5.0E-4)*3);T5b(this.a._,Math.sin(a*5.0E-4)*3);DPb(this.a,this.b);JGb(this.G.k,this.H,this.a,null,false)};fU(1024,1,{},_cc);_.Bf=function adc(a,b){var c,d;c=new i1b;X0b(c,new a3b(16733491));$0b(c,new a3b(16733491));f1b(c,new a3b(1118481));c.F=200;d=new t7b(b,c);R5b(d._,0,-0.25,0.6);i3b(d.cb,0,-1.5707963267948966);R5b(d.eb,0.5,0.5,0.5);d.S=true;d.U=true;ePb(this.a.H,d)};fU(1025,1,{},cdc);_.Bf=function ddc(a,b){var c;c=new t7b(b,this.b);R5b(c._,0,-0.37,-0.6);i3b(c.cb,-1.5707963267948966,0);R5b(c.eb,2,2,2);c.S=true;c.U=true;ePb(this.a.H,c)};fU(1026,1,{},fdc);_.Bf=function gdc(a,b){var c;c=new t7b(b,this.b);R5b(c._,0.136,-0.37,-0.6);i3b(c.cb,-1.5707963267948966,0.3);R5b(c.eb,2,2,2);c.S=true;c.U=true;ePb(this.a.H,c)};fU(1027,1,{},idc);_.Bf=function jdc(a,b){var c,d;c=new i1b;nZb(c,zu(a,340).a);g1b(c,(YZb(),XZb));d=new t7b(b,c);R5b(d._,0.5,0.2,0);i3b(d.cb,-1.5707963267948966,1.5707963267948966);R5b(d.eb,0.3,0.3,0.3);d.S=true;d.U=true;ePb(this.a.H,d)};fU(1365,1363,{340:1},Czc);_.Df=function Dzc(a){return null};_.Ef=function Ezc(a){this.b=a;return zzc(this)?Bzc(this):Azc(yzc(a))};_.a=0;var DK=wjb(rTc,'LoaderSTL$DemoScene',1023),zK=wjb(rTc,'LoaderSTL$DemoScene$1',1024),AK=wjb(rTc,'LoaderSTL$DemoScene$2',1025),BK=wjb(rTc,'LoaderSTL$DemoScene$3',1026),CK=wjb(rTc,'LoaderSTL$DemoScene$4',1027),mP=wjb(wWc,'STLLoader',1365);DOc(xi)(48);