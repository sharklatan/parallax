function Jtc(a,b){a.e=b}
function Rac(a){this.b=a}
function $ac(a){this.b=a}
function Uac(a,b){this.b=a;this.c=b}
function Xac(a,b){this.b=a;this.c=b}
function Nac(){q7b.call(this)}
function iyb(a){return new $wnd.DataView(a)}
function Vkb(a,b){mk(a.b,String.fromCharCode.apply(null,b));return a}
function euc(a,b){Htc();Ktc.call(this,a,b);Jtc(this,(uab(),sab));Itc(this)}
function auc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new Ykb(a.byteLength);for(d=0;d<a.byteLength;d++){Vkb(c,aib(b[d]))}return c.b.b}
function Mac(a,b,c,d,e){var f;f=new xWb(d,e);J3b(f.ab,b,1,c);vNb(a.G,f);f.T=true;f.f=-1;f.g=1;f.i=1;f.e=-1;f.B=1;f.A=4;f.J=1024;f.H=1024;f.v=-0.005;f.F=0.15}
function aib(a){if(a<0||a>1114111){throw new Lib}return a>=65536?vu(rQ,mFc,-1,[55296+(a-65536>>10&1023)&65535,56320+(a-65536&1023)&65535]):vu(rQ,mFc,-1,[a&65535])}
function Ihb(a){var b;if(!(b=Hhb,!b&&(b=Hhb=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new Tjb(aOc+a+DJc)}return parseFloat(a)}
function buc(a){var b,c,d,e,f;f=iyb(a.c);e=Nu(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function cuc(a){var b,c,d,e,f,g,i,j,k,n;b=new dPb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',FJc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',FJc);for(j=f.exec(n);j;j=f.exec(n)){d=new P3b(Ihb(j[1]),Ihb(j[3]),Ihb(j[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',FJc);for(k=g.exec(n);k;k=g.exec(n)){b.t.Hc(new P3b(Ihb(k[1]),Ihb(k[3]),Ihb(k[5])))}c=b.t.Sc();b.j.Hc(new PPb(c-3,c-2,c-1,d))}!b.u&&(b.u=new G0b);E0b(b.u,b.t);!b.v&&(b.v=new P2b);M2b(b.v,b.t);return b}
function duc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=iyb(a.c);j=Nu(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(Nu(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new MOb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(w>>5&31)/31;c=(w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;jyb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);jyb(u,v,r);jyb(u,v+1,s);jyb(u,v+2,t);if(o){jyb(d,v,A);jyb(d,v+1,k);jyb(d,v+2,c)}v+=3}}IOb(n,$Ic,new FOb(F,3));IOb(n,nMc,new FOb(u,3));if(o){IOb(n,WKc,new FOb(d,3));a.b=b}return n}
var Hhb;bT(1007,1,OGc);_.Db=function Kac(){S6b(this.c,new Nac(this.b))};bT(1008,955,{},Nac);_.ob=function Oac(){var a,b,c;this.b=new vOb(35,hFb(this.F.n),1,15);J3b(this.b.ab,3,0.15,3);this.c=new P3b(0,-0.25,0);X5b(this.G,new N5b(7496795,2,15));c=new d_b;W$b(c,new V0b(10066329));T$b(c,new V0b(10066329));a_b(c,new V0b(1052688));b=new l5b(new DUb(40,40),c);g1b(b.db,-1.5707963267948966);$2b(b.ab,-0.5);vNb(this.G,b);b.V=true;new euc('./static/models/stl/ascii/slotted_disk.stl',new Rac(this));a=new d_b;T$b(a,new V0b(5592405));W$b(a,new V0b(11184810));a_b(a,new V0b(1118481));a.G=200;new euc('./static/models/stl/binary/pr2_head_pan.stl',new Uac(this,a));new euc('./static/models/stl/binary/pr2_head_tilt.stl',new Xac(this,a));new euc('./static/models/stl/binary/colored.stl',new $ac(this));vNb(this.G,new WVb(7829367));Mac(this,1,1,16777215,1.35);Mac(this,0.5,-1,16755200,1);FFb(this.F.n,this.G.c.d,1);this.F.n.bb=true;this.F.n.cb=true};_.pb=function Pac(a){Z2b(this.b.ab,Math.cos(a*5.0E-4)*3);L3b(this.b.ab,Math.sin(a*5.0E-4)*3);TNb(this.b,this.c);tFb(this.F.n,this.G,this.b,null,false)};bT(1009,1,{},Rac);_.yf=function Sac(a,b){var c,d;c=new d_b;T$b(c,new V0b(16733491));W$b(c,new V0b(16733491));a_b(c,new V0b(1118481));c.G=200;d=new l5b(b,c);J3b(d.ab,0,-0.25,0.6);b1b(d.db,0,-1.5707963267948966);J3b(d.fb,0.5,0.5,0.5);d.T=true;d.V=true;vNb(this.b.G,d)};bT(1010,1,{},Uac);_.yf=function Vac(a,b){var c;c=new l5b(b,this.c);J3b(c.ab,0,-0.37,-0.6);b1b(c.db,-1.5707963267948966,0);J3b(c.fb,2,2,2);c.T=true;c.V=true;vNb(this.b.G,c)};bT(1011,1,{},Xac);_.yf=function Yac(a,b){var c;c=new l5b(b,this.c);J3b(c.ab,0.136,-0.37,-0.6);b1b(c.db,-1.5707963267948966,0.3);J3b(c.fb,2,2,2);c.T=true;c.V=true;vNb(this.b.G,c)};bT(1012,1,{},$ac);_.yf=function _ac(a,b){var c,d;c=new d_b;uXb(c,Fu(a,336).b);b_b(c,(cYb(),bYb));d=new l5b(b,c);J3b(d.ab,0.5,0.2,0);b1b(d.db,-1.5707963267948966,1.5707963267948966);J3b(d.fb,0.3,0.3,0.3);d.T=true;d.V=true;vNb(this.b.G,d)};bT(1300,1298,{336:1},euc);_.Af=function fuc(a){return null};_.Bf=function guc(a){this.c=a;return buc(this)?duc(this):cuc(auc(a))};_.b=0;var CK=kib(ILc,'LoaderSTL$DemoScene',1008),yK=kib(ILc,'LoaderSTL$DemoScene$1',1009),zK=kib(ILc,'LoaderSTL$DemoScene$2',1010),AK=kib(ILc,'LoaderSTL$DemoScene$3',1011),BK=kib(ILc,'LoaderSTL$DemoScene$4',1012),CO=kib(bOc,'STLLoader',1300);_Gc(Hi)(45);