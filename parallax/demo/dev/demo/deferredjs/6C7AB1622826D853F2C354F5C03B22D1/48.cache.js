function Nyc(a,b){a.d=b}
function Oec(a){this.a=a}
function Xec(a){this.a=a}
function Rec(a,b){this.a=a;this.b=b}
function Uec(a,b){this.a=a;this.b=b}
function Kec(){pbc.call(this)}
function _zb(a){return new $wnd.DataView(a)}
function Imb(a,b){kl(a.a,String.fromCharCode.apply(null,b));return a}
function izc(a,b){Lyc();Oyc.call(this,a,b);Nyc(this,(gcb(),ecb));Myc(this)}
function ezc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new Lmb(a.byteLength);for(d=0;d<a.byteLength;d++){Imb(c,Ojb(b[d]))}return c.a.a}
function Jec(a,b,c,d,e){var f;f=new _Zb(d,e);k8b(f._,b,1,c);_Pb(a.H,f);f.S=true;f.e=-1;f.f=1;f.g=1;f.d=-1;f.A=1;f.w=4;f.I=1024;f.G=1024;f.u=-0.005;f.D=0.15}
function Ojb(a){if(a<0||a>1114111){throw new xkb}return a>=65536?mv(OS,xMc,-1,[55296+(a-65536>>10&1023)&65535,56320+(a-65536&1023)&65535]):mv(OS,xMc,-1,[a&65535])}
function ujb(a){var b;if(!(b=tjb,!b&&(b=tjb=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new Flb(WVc+a+QQc)}return parseFloat(a)}
function fzc(a){var b,c,d,e,f;f=_zb(a.b);e=Ev(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function gzc(a){var b,c,d,e,f,g,i,j,k,n;b=new TRb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',SQc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',SQc);for(j=f.exec(n);j;j=f.exec(n)){d=new r8b(ujb(j[1]),ujb(j[3]),ujb(j[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',SQc);for(k=g.exec(n);k;k=g.exec(n)){b.s.Fc(new r8b(ujb(k[1]),ujb(k[3]),ujb(k[5])))}c=b.s.Qc();b.i.Fc(new DSb(c-3,c-2,c-1,d))}!b.t&&(b.t=new B4b);z4b(b.t,b.s);!b.u&&(b.u=new o7b);l7b(b.u,b.s);return b}
function hzc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=_zb(a.b);j=Ev(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(Ev(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new zRb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(w>>5&31)/31;c=(w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;aAb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);aAb(u,v,r);aAb(u,v+1,s);aAb(u,v+2,t);if(o){aAb(d,v,A);aAb(d,v+1,k);aAb(d,v+2,c)}v+=3}}tRb(n,lQc,new qRb(F,3));tRb(n,yTc,new qRb(u,3));if(o){tRb(n,cSc,new qRb(d,3));a.a=b}return n}
var tjb;zV(1041,1,YNc);_.Mb=function Hec(){Rac(this.b,new Kec(this.a))};zV(1042,988,{},Kec);_.nb=function Lec(){var a,b,c;this.a=new dRb(35,iGb(this.G.k),1,15);k8b(this.a._,3,0.15,3);this.b=new r8b(0,-0.25,0);T9b(this.H,new J9b(7496795,2,15));c=new X2b;N2b(c,new W4b(10066329));K2b(c,new W4b(10066329));U2b(c,new W4b(1052688));b=new fZb(new sXb(40,40),c);i5b(b.cb,-1.5707963267948966);F7b(b._,-0.5);_Pb(this.H,b);b.U=true;new izc('./static/models/stl/ascii/slotted_disk.stl',new Oec(this));a=new X2b;K2b(a,new W4b(5592405));N2b(a,new W4b(11184810));U2b(a,new W4b(1118481));a.H=200;new izc('./static/models/stl/binary/pr2_head_pan.stl',new Rec(this,a));new izc('./static/models/stl/binary/pr2_head_tilt.stl',new Uec(this,a));new izc('./static/models/stl/binary/colored.stl',new Xec(this));_Pb(this.H,new xZb(7829367));Jec(this,1,1,16777215,1.35);Jec(this,0.5,-1,16755200,1);QHb(this.G.k,this.H.a.c,1);this.G.k.X=true;this.G.k.Y=true};_.ob=function Mec(a){E7b(this.a._,Math.cos(a*5.0E-4)*3);m8b(this.a._,Math.sin(a*5.0E-4)*3);zQb(this.a,this.b);GHb(this.G.k,this.H,this.a,null,false)};zV(1043,1,{},Oec);_.pf=function Pec(a,b){var c,d;c=new X2b;K2b(c,new W4b(16733491));N2b(c,new W4b(16733491));U2b(c,new W4b(1118481));c.H=200;d=new fZb(b,c);k8b(d._,0,-0.25,0.6);d5b(d.cb,0,-1.5707963267948966);k8b(d.eb,0.5,0.5,0.5);d.S=true;d.U=true;_Pb(this.a.H,d)};zV(1044,1,{},Rec);_.pf=function Sec(a,b){var c;c=new fZb(b,this.b);k8b(c._,0,-0.37,-0.6);d5b(c.cb,-1.5707963267948966,0);k8b(c.eb,2,2,2);c.S=true;c.U=true;_Pb(this.a.H,c)};zV(1045,1,{},Uec);_.pf=function Vec(a,b){var c;c=new fZb(b,this.b);k8b(c._,0.136,-0.37,-0.6);d5b(c.cb,-1.5707963267948966,0.3);k8b(c.eb,2,2,2);c.S=true;c.U=true;_Pb(this.a.H,c)};zV(1046,1,{},Xec);_.pf=function Yec(a,b){var c,d;c=new X2b;a_b(c,wv(a,345).a);V2b(c,(L_b(),K_b));d=new fZb(b,c);k8b(d._,0.5,0.2,0);d5b(d.cb,-1.5707963267948966,1.5707963267948966);k8b(d.eb,0.3,0.3,0.3);d.S=true;d.U=true;_Pb(this.a.H,d)};zV(1343,1341,{345:1},izc);_.rf=function jzc(a){return null};_.sf=function kzc(a){this.b=a;return fzc(this)?hzc(this):gzc(ezc(a))};_.a=0;var PL=Yjb(SSc,'LoaderSTL$DemoScene',1042),LL=Yjb(SSc,'LoaderSTL$DemoScene$1',1043),ML=Yjb(SSc,'LoaderSTL$DemoScene$2',1044),NL=Yjb(SSc,'LoaderSTL$DemoScene$3',1045),OL=Yjb(SSc,'LoaderSTL$DemoScene$4',1046),FQ=Yjb(XVc,'STLLoader',1343);kOc(Ej)(48);