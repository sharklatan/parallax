function Nnc(){}
function Rnc(){}
function Unc(){}
function $Hb(a,b){a.f=b}
function Fnc(){Q9b.call(this)}
function Jnc(){Jnc=oKc;Inc=new Nnc}
function Wnc(){Wnc=oKc;Lnc=new Rnc}
function Xnc(){Xnc=oKc;Mnc=new Unc}
function wIb(a,b){!a.b&&(a.b=new bSb);a.b.rd(KPc,b)}
function Enc(a){var b,c;c=new Kqb;for(b=0;b<a.j.Tc();b++){Fu(a.j.Lc(b),241);zqb(c,b,new grb(vu(hT,SLc,299,[new k6b(1,0,0),new k6b(0,1,0),new k6b(0,0,1)])))}return c}
nU(1170,1,_Lc);_.Db=function Cnc(){q9b(this.c,new Fnc(this.b))};nU(1171,968,{},Fnc);_.ob=function Gnc(){var a,b,c,d,e,f,g,i;this.b=new wQb(40,MGb(this.H.n),1,2000);g6b(this.b.ab,800);c=new eWb(150,150,150);d=new eWb(150,150,150);e=new A_b;e.j=true;this.c=new I7b(c,e);t5b(this.c.ab,-150);tPb(this.I,this.c);b=new _Hb((qIb(),oIb),Enc(d));$Hb(b,(gIb(),eIb));g=new A2b((Jnc(),Inc));wIb(tZb(g),b);this.e=new I7b(d,g);t5b(this.e.ab,150);tPb(this.I,this.e);i=new VWb(75,32,16);a=new _Hb(oIb,Enc(i));$Hb(a,eIb);f=new A2b(Inc);wIb(tZb(f),a);this.d=new I7b(i,f);t5b(this.d.ab,-150);tPb(this.I,this.d)};_.pb=function Hnc(a){u3b(this.c.db,0.005);v3b(this.c.db,0.01);u3b(this.e.db,0.005);v3b(this.e.db,0.01);if(this.d){u3b(this.d.db,0.005);v3b(this.d.db,0.01)}YGb(this.H.n,this.I,this.b,null,false)};var Inc;nU(1172,1,{},Nnc);_.Rd=function Onc(){return Wnc(),Lnc};_.Sd=function Pnc(){return Xnc(),Mnc};var Lnc,Mnc;nU(1173,1,{},Rnc);_.qc=function Snc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};nU(1174,1,{},Unc);_.qc=function Vnc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var rN=Kjb(XQc,'MaterialsWireframe$DemoScene',1171),uN=Kjb(XQc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1172),sN=Kjb(XQc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1173),tN=Kjb(XQc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1174);nMc(Hi)(19);