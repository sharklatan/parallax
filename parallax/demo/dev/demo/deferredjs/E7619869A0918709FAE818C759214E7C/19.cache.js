function Tpc(){}
function Xpc(){}
function $pc(){}
function qJb(a,b){a.f=b}
function Lpc(){Xbc.call(this)}
function Ppc(){Ppc=UMc;Opc=new Tpc}
function aqc(){aqc=UMc;Rpc=new Xpc}
function bqc(){bqc=UMc;Spc=new $pc}
function OJb(a,b){!a.b&&(a.b=new xTb);a.b.vd(vSc,b)}
function Kpc(a){var b,c;c=new Irb;for(b=0;b<a.j.Xc();b++){bw(a.j.Pc(b),242);xrb(c,b,new fsb(Tv(eV,wOc,304,[new E8b(1,0,0),new E8b(0,1,0),new E8b(0,0,1)])))}return c}
kW(1192,1,GOc);_.Qb=function Ipc(){xbc(this.c,new Lpc(this.b))};kW(1193,990,{},Lpc);_.ob=function Mpc(){var a,b,c,d,e,f,g,i;this.b=new PRb(40,UGb(this.H.n),1,2000);A8b(this.b.ab,800);c=new zXb(150,150,150);d=new zXb(150,150,150);e=new F1b;e.j=true;this.c=new MZb(c,e);L7b(this.c.ab,-150);LQb(this.I,this.c);b=new rJb((IJb(),GJb),Kpc(d));qJb(b,(yJb(),wJb));g=new F4b((Ppc(),Opc));OJb(y_b(g),b);this.e=new MZb(d,g);L7b(this.e.ab,150);LQb(this.I,this.e);i=new oYb(75,32,16);a=new rJb(GJb,Kpc(i));qJb(a,wJb);f=new F4b(Opc);OJb(y_b(f),a);this.d=new MZb(i,f);L7b(this.d.ab,-150);LQb(this.I,this.d)};_.pb=function Npc(a){F5b(this.c.db,0.005);G5b(this.c.db,0.01);F5b(this.e.db,0.005);G5b(this.e.db,0.01);if(this.d){F5b(this.d.db,0.005);G5b(this.d.db,0.01)}qIb(this.H.n,this.I,this.b,null,false)};var Opc;kW(1194,1,{},Tpc);_.Vd=function Upc(){return aqc(),Rpc};_.Wd=function Vpc(){return bqc(),Spc};var Rpc,Spc;kW(1195,1,{},Xpc);_.uc=function Ypc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};kW(1196,1,{},$pc);_.uc=function _pc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var gP=Hkb(JTc,'MaterialsWireframe$DemoScene',1193),jP=Hkb(JTc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1194),hP=Hkb(JTc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1195),iP=Hkb(JTc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1196);UOc(Pj)(19);