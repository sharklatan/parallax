function Cxc(a,b){a.d=b}
function Pdc(a){this.a=a}
function Ydc(a){this.a=a}
function Sdc(a,b){this.a=a;this.b=b}
function Vdc(a,b){this.a=a;this.b=b}
function Ldc(){qac.call(this)}
function Pzb(a){return new $wnd.DataView(a)}
function wmb(a,b){dk(a.a,String.fromCharCode.apply(null,b));return a}
function Zxc(a,b){Axc();Dxc.call(this,a,b);Cxc(this,(Wbb(),Ubb));Bxc(this)}
function Vxc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new zmb(a.byteLength);for(d=0;d<a.byteLength;d++){wmb(c,Cjb(b[d]))}return c.a.a}
function Kdc(a,b,c,d,e){var f;f=new rZb(d,e);U6b(f._,b,1,c);yPb(a.H,f);f.S=true;f.e=-1;f.f=1;f.g=1;f.d=-1;f.A=1;f.w=4;f.I=1024;f.G=1024;f.u=-0.005;f.D=0.15}
function Cjb(a){if(a<0||a>1114111){throw new lkb}return a>=65536?hu(AR,kLc,-1,[55296+(a-65536>>10&1023)&65535,56320+(a-65536&1023)&65535]):hu(AR,kLc,-1,[a&65535])}
function ijb(a){var b;if(!(b=hjb,!b&&(b=hjb=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new tlb(NUc+a+FPc)}return parseFloat(a)}
function Wxc(a){var b,c,d,e,f;f=Pzb(a.b);e=zu(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function Xxc(a){var b,c,d,e,f,g,i,j,k,n;b=new pRb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',HPc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',HPc);for(k=f.exec(n);k;k=f.exec(n)){d=new $6b(ijb(k[1]),ijb(k[3]),ijb(k[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',HPc);for(j=g.exec(n);j;j=g.exec(n)){b.s.Fc(new $6b(ijb(j[1]),ijb(j[3]),ijb(j[5])))}c=b.s.Qc();b.i.Fc(new aSb(c-3,c-2,c-1,d))}!b.t&&(b.t=new P3b);N3b(b.t,b.s);!b.u&&(b.u=new Z5b);W5b(b.u,b.s);return b}
function Yxc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=Pzb(a.b);j=zu(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(zu(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new XQb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(w>>5&31)/31;c=(w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;Qzb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);Qzb(u,v,r);Qzb(u,v+1,s);Qzb(u,v+2,t);if(o){Qzb(d,v,A);Qzb(d,v+1,k);Qzb(d,v+2,c)}v+=3}}RQb(n,YOc,new OQb(F,3));RQb(n,oSc,new OQb(u,3));if(o){RQb(n,VQc,new OQb(d,3));a.a=b}return n}
var hjb;lU(1033,1,NMc);_.zb=function Idc(){S9b(this.b,new Ldc(this.a))};lU(1034,980,{},Ldc);_.nb=function Mdc(){var a,b,c;this.a=new BQb(35,RGb(this.G.k),1,15);U6b(this.a._,3,0.15,3);this.b=new $6b(0,-0.25,0);V8b(this.H,new L8b(7496795,2,15));c=new k2b;a2b(c,new d4b(10066329));Z1b(c,new d4b(10066329));h2b(c,new d4b(1052688));b=new yYb(new SWb(40,40),c);q4b(b.cb,-1.5707963267948966);i6b(b._,-0.5);yPb(this.H,b);b.U=true;new Zxc('./static/models/stl/ascii/slotted_disk.stl',new Pdc(this));a=new k2b;Z1b(a,new d4b(5592405));a2b(a,new d4b(11184810));h2b(a,new d4b(1118481));a.F=200;new Zxc('./static/models/stl/binary/pr2_head_pan.stl',new Sdc(this,a));new Zxc('./static/models/stl/binary/pr2_head_tilt.stl',new Vdc(this,a));new Zxc('./static/models/stl/binary/colored.stl',new Ydc(this));yPb(this.H,new QYb(7829367));Kdc(this,1,1,16777215,1.35);Kdc(this,0.5,-1,16755200,1);nHb(this.G.k,this.H.a.c,1);this.G.k.ab=true;this.G.k.bb=true};_.ob=function Ndc(a){h6b(this.a._,Math.cos(a*5.0E-4)*3);W6b(this.a._,Math.sin(a*5.0E-4)*3);XPb(this.a,this.b);bHb(this.G.k,this.H,this.a,null,false)};lU(1035,1,{},Pdc);_.Bf=function Qdc(a,b){var c,d;c=new k2b;Z1b(c,new d4b(16733491));a2b(c,new d4b(16733491));h2b(c,new d4b(1118481));c.F=200;d=new yYb(b,c);U6b(d._,0,-0.25,0.6);l4b(d.cb,0,-1.5707963267948966);U6b(d.eb,0.5,0.5,0.5);d.S=true;d.U=true;yPb(this.a.H,d)};lU(1036,1,{},Sdc);_.Bf=function Tdc(a,b){var c;c=new yYb(b,this.b);U6b(c._,0,-0.37,-0.6);l4b(c.cb,-1.5707963267948966,0);U6b(c.eb,2,2,2);c.S=true;c.U=true;yPb(this.a.H,c)};lU(1037,1,{},Vdc);_.Bf=function Wdc(a,b){var c;c=new yYb(b,this.b);U6b(c._,0.136,-0.37,-0.6);l4b(c.cb,-1.5707963267948966,0.3);U6b(c.eb,2,2,2);c.S=true;c.U=true;yPb(this.a.H,c)};lU(1038,1,{},Ydc);_.Bf=function Zdc(a,b){var c,d;c=new k2b;p$b(c,ru(a,340).a);i2b(c,($$b(),Z$b));d=new yYb(b,c);U6b(d._,0.5,0.2,0);l4b(d.cb,-1.5707963267948966,1.5707963267948966);U6b(d.eb,0.3,0.3,0.3);d.S=true;d.U=true;yPb(this.a.H,d)};lU(1332,1330,{340:1},Zxc);_.Df=function $xc(a){return null};_.Ef=function _xc(a){this.b=a;return Wxc(this)?Yxc(this):Xxc(Vxc(a))};_.a=0;var EK=Mjb(JRc,'LoaderSTL$DemoScene',1034),AK=Mjb(JRc,'LoaderSTL$DemoScene$1',1035),BK=Mjb(JRc,'LoaderSTL$DemoScene$2',1036),CK=Mjb(JRc,'LoaderSTL$DemoScene$3',1037),DK=Mjb(JRc,'LoaderSTL$DemoScene$4',1038),rP=Mjb(OUc,'STLLoader',1332);_Mc(xi)(48);