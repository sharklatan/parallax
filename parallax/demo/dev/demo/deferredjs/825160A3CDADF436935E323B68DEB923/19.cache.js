function Ooc(){}
function Soc(){}
function Voc(){}
function FIb(a,b){a.f=b}
function Goc(){Sac.call(this)}
function Koc(){Koc=DLc;Joc=new Ooc}
function Xoc(){Xoc=DLc;Moc=new Soc}
function Yoc(){Yoc=DLc;Noc=new Voc}
function bJb(a,b){!a.b&&(a.b=new LSb);a.b.vd(eRc,b)}
function Foc(a){var b,c;c=new mrb;for(b=0;b<a.j.Xc();b++){Wu(a.j.Pc(b),241);brb(c,b,new Lrb(Mu(OT,fNc,299,[new A7b(1,0,0),new A7b(0,1,0),new A7b(0,0,1)])))}return c}
UU(1182,1,pNc);_.Db=function Doc(){sac(this.c,new Goc(this.b))};UU(1183,980,{},Goc);_.ob=function Hoc(){var a,b,c,d,e,f,g,i;this.b=new bRb(40,rHb(this.H.n),1,2000);w7b(this.b.ab,800);c=new OWb(150,150,150);d=new OWb(150,150,150);e=new P0b;e.j=true;this.c=new $Yb(c,e);J6b(this.c.ab,-150);$Pb(this.I,this.c);b=new GIb((XIb(),VIb),Foc(d));FIb(b,(NIb(),LIb));g=new P3b((Koc(),Joc));bJb(I$b(g),b);this.e=new $Yb(d,g);J6b(this.e.ab,150);$Pb(this.I,this.e);i=new DXb(75,32,16);a=new GIb(VIb,Foc(i));FIb(a,LIb);f=new P3b(Joc);bJb(I$b(f),a);this.d=new $Yb(i,f);J6b(this.d.ab,-150);$Pb(this.I,this.d)};_.pb=function Ioc(a){K4b(this.c.db,0.005);L4b(this.c.db,0.01);K4b(this.e.db,0.005);L4b(this.e.db,0.01);if(this.d){K4b(this.d.db,0.005);L4b(this.d.db,0.01)}DHb(this.H.n,this.I,this.b,null,false)};var Joc;UU(1184,1,{},Ooc);_.Vd=function Poc(){return Xoc(),Moc};_.Wd=function Qoc(){return Yoc(),Noc};var Moc,Noc;UU(1185,1,{},Soc);_.uc=function Toc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};UU(1186,1,{},Voc);_.uc=function Woc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var TN=lkb(sSc,'MaterialsWireframe$DemoScene',1183),WN=lkb(sSc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1184),UN=lkb(sSc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1185),VN=lkb(sSc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1186);DNc(Ii)(19);