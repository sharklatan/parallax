function Jic(){}
function Nic(){}
function Qic(){}
function XEb(a,b){a.f=b}
function Bic(){B5b.call(this)}
function Fic(){Fic=Dzc;Eic=new Jic}
function Sic(){Sic=Dzc;Hic=new Nic}
function Tic(){Tic=Dzc;Iic=new Qic}
function tFb(a,b){!a.b&&(a.b=new wOb);a.b.rd(QEc,b)}
function Aic(a){var b,c;c=new Wnb;for(b=0;b<a.j.Tc();b++){Fu(a.j.Lc(b),188);$G==$G?Lnb(c,b,new sob(vu(aR,_Ac,249,[new j3b(1,0,0,0),new j3b(0,1,0,0),new j3b(0,0,1,0)]))):Lnb(c,b,new sob(vu(aR,_Ac,249,[new j3b(1,0,0,1),new j3b(1,1,0,1),new j3b(0,1,0,1),new j3b(0,0,0,1)])))}return c}
hS(1123,1,iBc);_.Cb=function yic(){y5b(this.c,new Bic(this.b))};hS(1124,940,{},Bic);_.nb=function Cic(){var a,b,c,d,e,f,g,i,j,k,n;this.b=new UMb(40,SDb(this.F.o),1,2000);t2b(this.b.ab,800);d=new xSb(150,150,150);e=new xSb(150,150,150);f=new xSb(150,150,150);g=new SXb;g.j=true;this.c=new U3b(d,g);H1b(this.c.ab,0);VLb(this.G,this.c);b=new YEb((nFb(),mFb),Aic(e));XEb(b,(dFb(),bFb));j=new M$b((Fic(),Eic));tFb(KVb(j),b);this.e=new U3b(e,j);H1b(this.e.ab,300);VLb(this.G,this.e);c=new YEb(mFb,Aic(f));XEb(c,bFb);k=new M$b(Eic);tFb(KVb(k),c);this.f=new U3b(f,k);H1b(this.f.ab,-300);VLb(this.G,this.f);n=new kTb(75,32,16);a=new YEb(mFb,Aic(n));XEb(a,bFb);i=new M$b(Eic);tFb(KVb(i),a);this.d=new U3b(n,i);H1b(this.d.ab,0);VLb(this.G,this.d)};_.ob=function Dic(a){H_b(this.c.db,0.005);I_b(this.c.db,0.01);H_b(this.e.db,0.005);I_b(this.e.db,0.01);H_b(this.f.db,0.005);I_b(this.f.db,0.01);if(this.d){H_b(this.d.db,0.005);I_b(this.d.db,0.01)}cEb(this.F.o,this.G,this.b,null,false)};var Eic;hS(1125,1,{},Jic);_.Pd=function Kic(){return Sic(),Hic};_.Qd=function Lic(){return Tic(),Iic};var Hic,Iic;hS(1126,1,{},Nic);_.ec=function Oic(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec4 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nfloat edgeFactorQuad1() {\n\n\tvec2 d = fwidth( vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n\n}\n\nfloat edgeFactorQuad2() {\n\n\tvec2 d = fwidth( 1.0 - vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, 1.0 - vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n}\n\nvoid main() {\n\n\tif ( vCenter.w == 0.0 ) {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\n\t} else {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), min( edgeFactorQuad1(), edgeFactorQuad2() ) );\n\n\t}\n\n\tgl_FragColor.a = 1.0;\n\n}\n'};hS(1127,1,{},Qic);_.ec=function Ric(){return 'attribute vec4 center;\nvarying vec4 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var IM=Ygb(YFc,'MaterialsWireframe$DemoScene',1124),aR=Xgb(gHc,'Vector4;',1371,gJ),LM=Ygb(YFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1125),JM=Ygb(YFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1126),KM=Ygb(YFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1127);uBc(Gi)(19);