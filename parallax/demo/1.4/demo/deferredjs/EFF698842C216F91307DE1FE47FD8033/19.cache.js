function vic(){}
function zic(){}
function Cic(){}
function HEb(a,b){a.e=b}
function nic(){m5b.call(this)}
function ric(){ric=pzc;qic=new vic}
function Eic(){Eic=pzc;tic=new zic}
function Fic(){Fic=pzc;uic=new Cic}
function dFb(a,b){!a.a&&(a.a=new gOb);a.a.od(zEc,b)}
function mic(a){var b,c;c=new Gnb;for(b=0;b<a.i.Qc();b++){qu(a.i.Ic(b),188);KG==KG?vnb(c,b,new cob(gu(NQ,MAc,249,[new W2b(1,0,0,0),new W2b(0,1,0,0),new W2b(0,0,1,0)]))):vnb(c,b,new cob(gu(NQ,MAc,249,[new W2b(1,0,0,1),new W2b(1,1,0,1),new W2b(0,1,0,1),new W2b(0,0,0,1)])))}return c}
UR(1128,1,VAc);_.yb=function kic(){j5b(this.b,new nic(this.a))};UR(1129,945,{},nic);_.mb=function oic(){var a,b,c,d,e,f,g,i,j,k,n;this.a=new EMb(40,CDb(this.D.n),1,2000);e2b(this.a._,800);d=new hSb(150,150,150);e=new hSb(150,150,150);f=new hSb(150,150,150);g=new EXb;g.i=true;this.b=new F3b(d,g);s1b(this.b._,0);FLb(this.F,this.b);b=new IEb((ZEb(),YEb),mic(e));HEb(b,(PEb(),NEb));j=new y$b((ric(),qic));dFb(wVb(j),b);this.d=new F3b(e,j);s1b(this.d._,300);FLb(this.F,this.d);c=new IEb(YEb,mic(f));HEb(c,NEb);k=new y$b(qic);dFb(wVb(k),c);this.e=new F3b(f,k);s1b(this.e._,-300);FLb(this.F,this.e);n=new YSb(75,32,16);a=new IEb(YEb,mic(n));HEb(a,NEb);i=new y$b(qic);dFb(wVb(i),a);this.c=new F3b(n,i);s1b(this.c._,0);FLb(this.F,this.c)};_.nb=function pic(a){t_b(this.b.cb,0.005);u_b(this.b.cb,0.01);t_b(this.d.cb,0.005);u_b(this.d.cb,0.01);t_b(this.e.cb,0.005);u_b(this.e.cb,0.01);if(this.c){t_b(this.c.cb,0.005);u_b(this.c.cb,0.01)}ODb(this.D.n,this.F,this.a,null,false)};var qic;UR(1130,1,{},vic);_.Md=function wic(){return Eic(),tic};_.Nd=function xic(){return Fic(),uic};var tic,uic;UR(1131,1,{},zic);_.bc=function Aic(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec4 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nfloat edgeFactorQuad1() {\n\n\tvec2 d = fwidth( vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n\n}\n\nfloat edgeFactorQuad2() {\n\n\tvec2 d = fwidth( 1.0 - vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, 1.0 - vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n}\n\nvoid main() {\n\n\tif ( vCenter.w == 0.0 ) {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\n\t} else {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), min( edgeFactorQuad1(), edgeFactorQuad2() ) );\n\n\t}\n\n\tgl_FragColor.a = 1.0;\n\n}\n'};UR(1132,1,{},Cic);_.bc=function Dic(){return 'attribute vec4 center;\nvarying vec4 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var sM=Igb(EFc,'MaterialsWireframe$DemoScene',1129),NQ=Hgb(NGc,'Vector4;',1376,TI),wM=Igb(EFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1130),uM=Igb(EFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1131),vM=Igb(EFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1132);fBc(wi)(19);