function _yc(a,b){a.d=b}
function Vcc(a){this.a=a}
function cdc(a){this.a=a}
function Ycc(a,b){this.a=a;this.b=b}
function _cc(a,b){this.a=a;this.b=b}
function Rcc(){u9b.call(this)}
function rzb(a){return new $wnd.DataView(a)}
function _lb(a,b){dk(a.a,String.fromCharCode.apply(null,b));return a}
function wzc(a,b){Zyc();azc.call(this,a,b);_yc(this,(Abb(),ybb));$yc(this)}
function szc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new cmb(a.byteLength);for(d=0;d<a.byteLength;d++){_lb(c,gjb(b[d]))}return c.a.a}
function Qcc(a,b,c,d,e){var f;f=new jYb(d,e);L5b(f._,b,1,c);$Ob(a.H,f);f.S=true;f.e=-1;f.f=1;f.g=1;f.d=-1;f.A=1;f.w=4;f.I=1024;f.G=1024;f.u=-0.005;f.D=0.15}
function gjb(a){if(a<0||a>1114111){throw new Rjb}return a>=65536?fu(mR,JMc,-1,[55296+(a-65536>>10&1023)&65535,56320+(a-65536&1023)&65535]):fu(mR,JMc,-1,[a&65535])}
function Oib(a){var b;if(!(b=Nib,!b&&(b=Nib=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new Zkb(eWc+a+bRc)}return parseFloat(a)}
function tzc(a){var b,c,d,e,f;f=rzb(a.b);e=xu(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function uzc(a){var b,c,d,e,f,g,i,j,k,n;b=new PQb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',dRc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',dRc);for(k=f.exec(n);k;k=f.exec(n)){d=new R5b(Oib(k[1]),Oib(k[3]),Oib(k[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',dRc);for(j=g.exec(n);j;j=g.exec(n)){b.s.Fc(new R5b(Oib(j[1]),Oib(j[3]),Oib(j[5])))}c=b.s.Qc();b.i.Fc(new zRb(c-3,c-2,c-1,d))}!b.t&&(b.t=new H2b);F2b(b.t,b.s);!b.u&&(b.u=new Q4b);N4b(b.u,b.s);return b}
function vzc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=rzb(a.b);j=xu(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(xu(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new wQb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(w>>5&31)/31;c=(w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;szb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);szb(u,v,r);szb(u,v+1,s);szb(u,v+2,t);if(o){szb(d,v,A);szb(d,v+1,k);szb(d,v+2,c)}v+=3}}rQb(n,uQc,new oQb(F,3));rQb(n,HTc,new oQb(u,3));if(o){rQb(n,nSc,new oQb(d,3));a.a=b}return n}
var Nib;YT(1023,1,jOc);_.zb=function Occ(){W8b(this.b,new Rcc(this.a))};YT(1024,971,{},Rcc);_.nb=function Scc(){var a,b,c;this.a=new bQb(35,rGb(this.G.k),1,15);L5b(this.a._,3,0.15,3);this.b=new R5b(0,-0.25,0);$7b(this.H,new Q7b(7496795,2,15));c=new c1b;U0b(c,new W2b(10066329));R0b(c,new W2b(10066329));_0b(c,new W2b(1052688));b=new n7b(new pWb(40,40),c);h3b(b.cb,-1.5707963267948966);_4b(b._,-0.5);$Ob(this.H,b);b.U=true;new wzc('./static/models/stl/ascii/slotted_disk.stl',new Vcc(this));a=new c1b;R0b(a,new W2b(5592405));U0b(a,new W2b(11184810));_0b(a,new W2b(1118481));a.F=200;new wzc('./static/models/stl/binary/pr2_head_pan.stl',new Ycc(this,a));new wzc('./static/models/stl/binary/pr2_head_tilt.stl',new _cc(this,a));new wzc('./static/models/stl/binary/colored.stl',new cdc(this));$Ob(this.H,new IXb(7829367));Qcc(this,1,1,16777215,1.35);Qcc(this,0.5,-1,16755200,1);PGb(this.G.k,this.H.a.c,1);this.G.k.ab=true;this.G.k.bb=true};_.ob=function Tcc(a){$4b(this.a._,Math.cos(a*5.0E-4)*3);N5b(this.a._,Math.sin(a*5.0E-4)*3);xPb(this.a,this.b);DGb(this.G.k,this.H,this.a,null,false)};YT(1025,1,{},Vcc);_.Bf=function Wcc(a,b){var c,d;c=new c1b;R0b(c,new W2b(16733491));U0b(c,new W2b(16733491));_0b(c,new W2b(1118481));c.F=200;d=new n7b(b,c);L5b(d._,0,-0.25,0.6);c3b(d.cb,0,-1.5707963267948966);L5b(d.eb,0.5,0.5,0.5);d.S=true;d.U=true;$Ob(this.a.H,d)};YT(1026,1,{},Ycc);_.Bf=function Zcc(a,b){var c;c=new n7b(b,this.b);L5b(c._,0,-0.37,-0.6);c3b(c.cb,-1.5707963267948966,0);L5b(c.eb,2,2,2);c.S=true;c.U=true;$Ob(this.a.H,c)};YT(1027,1,{},_cc);_.Bf=function adc(a,b){var c;c=new n7b(b,this.b);L5b(c._,0.136,-0.37,-0.6);c3b(c.cb,-1.5707963267948966,0.3);L5b(c.eb,2,2,2);c.S=true;c.U=true;$Ob(this.a.H,c)};YT(1028,1,{},cdc);_.Bf=function ddc(a,b){var c,d;c=new c1b;hZb(c,pu(a,340).a);a1b(c,(SZb(),RZb));d=new n7b(b,c);L5b(d._,0.5,0.2,0);c3b(d.cb,-1.5707963267948966,1.5707963267948966);L5b(d.eb,0.3,0.3,0.3);d.S=true;d.U=true;$Ob(this.a.H,d)};YT(1366,1364,{340:1},wzc);_.Df=function xzc(a){return null};_.Ef=function yzc(a){this.b=a;return tzc(this)?vzc(this):uzc(szc(a))};_.a=0;var uK=qjb(aTc,'LoaderSTL$DemoScene',1024),qK=qjb(aTc,'LoaderSTL$DemoScene$1',1025),rK=qjb(aTc,'LoaderSTL$DemoScene$2',1026),sK=qjb(aTc,'LoaderSTL$DemoScene$3',1027),tK=qjb(aTc,'LoaderSTL$DemoScene$4',1028),dP=qjb(fWc,'STLLoader',1366);xOc(xi)(48);