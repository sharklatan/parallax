function Myc(a,b){a.d=b}
function Nec(a){this.a=a}
function Wec(a){this.a=a}
function Qec(a,b){this.a=a;this.b=b}
function Tec(a,b){this.a=a;this.b=b}
function Jec(){obc.call(this)}
function Zzb(a){return new $wnd.DataView(a)}
function Gmb(a,b){cl(a.a,String.fromCharCode.apply(null,b));return a}
function hzc(a,b){Kyc();Nyc.call(this,a,b);Myc(this,(ecb(),ccb));Lyc(this)}
function dzc(a){var b,c,d;b=new $wnd.Uint8Array(a);c=new Jmb(a.byteLength);for(d=0;d<a.byteLength;d++){Gmb(c,Mjb(b[d]))}return c.a.a}
function Iec(a,b,c,d,e){var f;f=new $Zb(d,e);j8b(f._,b,1,c);$Pb(a.H,f);f.S=true;f.e=-1;f.f=1;f.g=1;f.d=-1;f.A=1;f.w=4;f.I=1024;f.G=1024;f.u=-0.005;f.D=0.15}
function Mjb(a){if(a<0||a>1114111){throw new vkb}return a>=65536?ov(OS,xMc,-1,[55296+(a-65536>>10&1023)&65535,56320+(a-65536&1023)&65535]):ov(OS,xMc,-1,[a&65535])}
function sjb(a){var b;if(!(b=rjb,!b&&(b=rjb=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/),b.test(a))){throw new Dlb(fWc+a+SQc)}return parseFloat(a)}
function ezc(a){var b,c,d,e,f;f=Zzb(a.b);e=Gv(f.getUint32(80,true));b=84+e*50;if(b==f.byteLength){return true}c=f.byteLength;for(d=0;d<c;d++){if(f.getUint8(d)>127){return true}}return false}
function fzc(a){var b,c,d,e,f,g,i,j,k,n;b=new SRb;d=null;e=new RegExp('facet([\\s\\S]*?)endfacet',UQc);for(i=e.exec(a);i;i=e.exec(a)){n=i[0];f=new RegExp('normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',UQc);for(j=f.exec(n);j;j=f.exec(n)){d=new q8b(sjb(j[1]),sjb(j[3]),sjb(j[5]))}g=new RegExp('vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+',UQc);for(k=g.exec(n);k;k=g.exec(n)){b.s.Fc(new q8b(sjb(k[1]),sjb(k[3]),sjb(k[5])))}c=b.s.Qc();b.i.Fc(new CSb(c-3,c-2,c-1,d))}!b.t&&(b.t=new A4b);y4b(b.t,b.s);!b.u&&(b.u=new n7b);k7b(b.u,b.s);return b}
function gzc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F;B=Zzb(a.b);j=Gv(B.getUint32(80,true));o=false;d=null;A=0;k=0;c=0;g=0;f=0;e=0;b=0;for(q=0;q<70;q++){if(Gv(B.getUint32(q,false))==1129270351&&B.getUint8(q+4)==82&&B.getUint8(q+5)==61){o=true;d=new $wnd.Float32Array(j*3*3);g=B.getUint8(q+6)/255;f=B.getUint8(q+7)/255;e=B.getUint8(q+8)/255;b=B.getUint8(q+9)/255}}v=0;n=new yRb;F=new $wnd.Float32Array(j*3*3);u=new $wnd.Float32Array(j*3*3);for(i=0;i<j;i++){C=84+i*50;r=B.getFloat32(C,true);s=B.getFloat32(C+4,true);t=B.getFloat32(C+8,true);if(o){w=B.getUint16(C+48,true);if((w&32768)==0){A=(w&31)/31;k=(w>>5&31)/31;c=(w>>10&31)/31}else{A=g;k=f;c=e}}for(p=1;p<=3;p++){D=C+p*12;$zb(F,v,B.getFloat32(D,true));F[v+1]=B.getFloat32(D+4,true);F[v+2]=B.getFloat32(D+8,true);$zb(u,v,r);$zb(u,v+1,s);$zb(u,v+2,t);if(o){$zb(d,v,A);$zb(d,v+1,k);$zb(d,v+2,c)}v+=3}}sRb(n,oQc,new pRb(F,3));sRb(n,JTc,new pRb(u,3));if(o){sRb(n,nSc,new pRb(d,3));a.a=b}return n}
var rjb;zV(1038,1,YNc);_.Mb=function Gec(){Qac(this.b,new Jec(this.a))};zV(1039,985,{},Jec);_.nb=function Kec(){var a,b,c;this.a=new cRb(35,gGb(this.G.k),1,15);j8b(this.a._,3,0.15,3);this.b=new q8b(0,-0.25,0);S9b(this.H,new I9b(7496795,2,15));c=new W2b;M2b(c,new V4b(10066329));J2b(c,new V4b(10066329));T2b(c,new V4b(1052688));b=new eZb(new rXb(40,40),c);h5b(b.cb,-1.5707963267948966);E7b(b._,-0.5);$Pb(this.H,b);b.U=true;new hzc('./static/models/stl/ascii/slotted_disk.stl',new Nec(this));a=new W2b;J2b(a,new V4b(5592405));M2b(a,new V4b(11184810));T2b(a,new V4b(1118481));a.H=200;new hzc('./static/models/stl/binary/pr2_head_pan.stl',new Qec(this,a));new hzc('./static/models/stl/binary/pr2_head_tilt.stl',new Tec(this,a));new hzc('./static/models/stl/binary/colored.stl',new Wec(this));$Pb(this.H,new wZb(7829367));Iec(this,1,1,16777215,1.35);Iec(this,0.5,-1,16755200,1);PHb(this.G.k,this.H.a.c,1);this.G.k.X=true;this.G.k.Y=true};_.ob=function Lec(a){D7b(this.a._,Math.cos(a*5.0E-4)*3);l8b(this.a._,Math.sin(a*5.0E-4)*3);yQb(this.a,this.b);FHb(this.G.k,this.H,this.a,null,false)};zV(1040,1,{},Nec);_.qf=function Oec(a,b){var c,d;c=new W2b;J2b(c,new V4b(16733491));M2b(c,new V4b(16733491));T2b(c,new V4b(1118481));c.H=200;d=new eZb(b,c);j8b(d._,0,-0.25,0.6);c5b(d.cb,0,-1.5707963267948966);j8b(d.eb,0.5,0.5,0.5);d.S=true;d.U=true;$Pb(this.a.H,d)};zV(1041,1,{},Qec);_.qf=function Rec(a,b){var c;c=new eZb(b,this.b);j8b(c._,0,-0.37,-0.6);c5b(c.cb,-1.5707963267948966,0);j8b(c.eb,2,2,2);c.S=true;c.U=true;$Pb(this.a.H,c)};zV(1042,1,{},Tec);_.qf=function Uec(a,b){var c;c=new eZb(b,this.b);j8b(c._,0.136,-0.37,-0.6);c5b(c.cb,-1.5707963267948966,0.3);j8b(c.eb,2,2,2);c.S=true;c.U=true;$Pb(this.a.H,c)};zV(1043,1,{},Wec);_.qf=function Xec(a,b){var c,d;c=new W2b;_$b(c,yv(a,345).a);U2b(c,(K_b(),J_b));d=new eZb(b,c);j8b(d._,0.5,0.2,0);c5b(d.cb,-1.5707963267948966,1.5707963267948966);j8b(d.eb,0.3,0.3,0.3);d.S=true;d.U=true;$Pb(this.a.H,d)};zV(1340,1338,{345:1},hzc);_.sf=function izc(a){return null};_.tf=function jzc(a){this.b=a;return ezc(this)?gzc(this):fzc(dzc(a))};_.a=0;var PL=Wjb(bTc,'LoaderSTL$DemoScene',1039),LL=Wjb(bTc,'LoaderSTL$DemoScene$1',1040),ML=Wjb(bTc,'LoaderSTL$DemoScene$2',1041),NL=Wjb(bTc,'LoaderSTL$DemoScene$3',1042),OL=Wjb(bTc,'LoaderSTL$DemoScene$4',1043),FQ=Wjb(gWc,'STLLoader',1340);kOc(wj)(48);