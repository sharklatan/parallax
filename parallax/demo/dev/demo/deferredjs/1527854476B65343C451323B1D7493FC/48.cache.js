function Uxc(a,b){a.e=b}
function Ucc(a){this.b=a}
function Lcc(a){this.b=a}
function Occ(a,b){this.b=a;this.c=b}
function Rcc(a,b){this.b=a;this.c=b}
function Hcc(){k9b.call(this)}
function Nzb(a){return new $wnd.DataView(a)}
function wmb(a,b){Jk(a.b,String.fromCharCode.apply(null,b));return a}
function pyc(a,b){Sxc();Vxc.call(this,a,b);Uxc(this,(Wbb(),Ubb));Txc(this)}
function lyc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new zmb(a.byteLength);for(d=0;d<a.byteLength;d++){wmb(c,Cjb(b[d]))}return c.b.b}
function Gcc(a,b,c,d,e){var f;f=new bYb(d,e);B5b(f.ab,b,1,c);_Ob(a.I,f);f.T=true;f.f=-1;f.g=1;f.i=1;f.e=-1;f.B=1;f.A=4;f.J=1024;f.H=1024;f.v=-0.005;f.F=0.15}
function Cjb(a){if(a<0||a>1114111){throw new lkb}return a>=65536?Nu(LR,DLc,-1,[55296+(~~(a-65536)>>10&1023)&65535,56320+(a-65536&1023)&65535]):Nu(LR,DLc,-1,[a&65535])}
function ijb(a){var b;if(!(b=hjb,!b&&(b=hjb=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new tlb(UUc+a+dQc)}return parseFloat(a)}
function myc(a){var b,c,d,e,f;f=Nzb(a.c);e=dv(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function nyc(a){var b,c,d,e,f,g,i,j,k,n;b=new JQb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',fQc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',fQc);for(k=f.exec(n);k;k=f.exec(n)){d=new H5b(ijb(k[1]),ijb(k[3]),ijb(k[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',fQc);for(j=g.exec(n);j;j=g.exec(n)){b.t.Lc(new H5b(ijb(j[1]),ijb(j[3]),ijb(j[5])))}c=b.t.Wc();b.j.Lc(new tRb(c-3,c-2,c-1,d))}!b.u&&(b.u=new y2b);w2b(b.u,b.t);!b.v&&(b.v=new H4b);E4b(b.v,b.t);return b}
function oyc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=Nzb(a.c);j=dv(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(dv(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new qQb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(~~w>>5&31)/31;c=(~~w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;Ozb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);Ozb(u,v,r);Ozb(u,v+1,s);Ozb(u,v+2,t);if(o){Ozb(d,v,A);Ozb(d,v+1,k);Ozb(d,v+2,c)}v+=3}}mQb(n,xPc,new jQb(F,3));mQb(n,LSc,new jQb(u,3));if(o){mQb(n,rRc,new jQb(d,3));a.b=b}return n}
var hjb;vU(1019,1,dNc);_.Db=function Ecc(){M8b(this.c,new Hcc(this.b))};vU(1020,967,{},Hcc);_.ob=function Icc(){var a,b,c;this.b=new _Pb(35,NGb(this.H.n),1,15);B5b(this.b.ab,3,0.15,3);this.c=new H5b(0,-0.25,0);R7b(this.I,new H7b(7496795,2,15));c=new V0b;L0b(c,new N2b(10066329));I0b(c,new N2b(10066329));S0b(c,new N2b(1052688));b=new d7b(new hWb(40,40),c);$2b(b.db,-1.5707963267948966);S4b(b.ab,-0.5);_Ob(this.I,b);b.V=true;new pyc('./static/models/stl/ascii/slotted_disk.stl',new Lcc(this));a=new V0b;I0b(a,new N2b(5592405));L0b(a,new N2b(11184810));S0b(a,new N2b(1118481));a.G=200;new pyc('./static/models/stl/binary/pr2_head_pan.stl',new Occ(this,a));new pyc('./static/models/stl/binary/pr2_head_tilt.stl',new Rcc(this,a));new pyc('./static/models/stl/binary/colored.stl',new Ucc(this));_Ob(this.I,new AXb(7829367));Gcc(this,1,1,16777215,1.35);Gcc(this,0.5,-1,16755200,1);jHb(this.H.n,this.I.c.d,1);this.H.n.bb=true;this.H.n.cb=true};_.pb=function Jcc(a){R4b(this.b.ab,Math.cos(a*5.0E-4)*3);D5b(this.b.ab,Math.sin(a*5.0E-4)*3);xPb(this.b,this.c);ZGb(this.H.n,this.I,this.b,null,false)};vU(1021,1,{},Lcc);_.Ff=function Mcc(a,b){var c,d;c=new V0b;I0b(c,new N2b(16733491));L0b(c,new N2b(16733491));S0b(c,new N2b(1118481));c.G=200;d=new d7b(b,c);B5b(d.ab,0,-0.25,0.6);V2b(d.db,0,-1.5707963267948966);B5b(d.fb,0.5,0.5,0.5);d.T=true;d.V=true;_Ob(this.b.I,d)};vU(1022,1,{},Occ);_.Ff=function Pcc(a,b){var c;c=new d7b(b,this.c);B5b(c.ab,0,-0.37,-0.6);V2b(c.db,-1.5707963267948966,0);B5b(c.fb,2,2,2);c.T=true;c.V=true;_Ob(this.b.I,c)};vU(1023,1,{},Rcc);_.Ff=function Scc(a,b){var c;c=new d7b(b,this.c);B5b(c.ab,0.136,-0.37,-0.6);V2b(c.db,-1.5707963267948966,0.3);B5b(c.fb,2,2,2);c.T=true;c.V=true;_Ob(this.b.I,c)};vU(1024,1,{},Ucc);_.Ff=function Vcc(a,b){var c,d;c=new V0b;_Yb(c,Xu(a,339).b);T0b(c,(KZb(),JZb));d=new d7b(b,c);B5b(d.ab,0.5,0.2,0);V2b(d.db,-1.5707963267948966,1.5707963267948966);B5b(d.fb,0.3,0.3,0.3);d.T=true;d.V=true;_Ob(this.b.I,d)};vU(1347,1345,{339:1},pyc);_.Hf=function qyc(a){return null};_.If=function ryc(a){this.c=a;return myc(this)?oyc(this):nyc(lyc(a))};_.b=0;var cL=Mjb(eSc,'LoaderSTL$DemoScene',1020),$K=Mjb(eSc,'LoaderSTL$DemoScene$1',1021),_K=Mjb(eSc,'LoaderSTL$DemoScene$2',1022),aL=Mjb(eSc,'LoaderSTL$DemoScene$3',1023),bL=Mjb(eSc,'LoaderSTL$DemoScene$4',1024),CP=Mjb(VUc,'STLLoader',1347);rNc(Ii)(48);