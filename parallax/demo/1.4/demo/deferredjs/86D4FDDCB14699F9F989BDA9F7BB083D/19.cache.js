function Fic(){}
function Jic(){}
function Mic(){}
function REb(a,b){a.e=b}
function xic(){w5b.call(this)}
function Bic(){Bic=zzc;Aic=new Fic}
function Oic(){Oic=zzc;Dic=new Jic}
function Pic(){Pic=zzc;Eic=new Mic}
function nFb(a,b){!a.a&&(a.a=new qOb);a.a.od(KEc,b)}
function wic(a){var b,c;c=new Qnb;for(b=0;b<a.i.Qc();b++){su(a.i.Ic(b),188);OG==OG?Fnb(c,b,new mob(iu(RQ,WAc,249,[new e3b(1,0,0,0),new e3b(0,1,0,0),new e3b(0,0,1,0)]))):Fnb(c,b,new mob(iu(RQ,WAc,249,[new e3b(1,0,0,1),new e3b(1,1,0,1),new e3b(0,1,0,1),new e3b(0,0,0,1)])))}return c}
YR(1130,1,dBc);_.yb=function uic(){t5b(this.b,new xic(this.a))};YR(1131,947,{},xic);_.mb=function yic(){var a,b,c,d,e,f,g,i,j,k,n;this.a=new OMb(40,MDb(this.D.n),1,2000);o2b(this.a._,800);d=new rSb(150,150,150);e=new rSb(150,150,150);f=new rSb(150,150,150);g=new OXb;g.i=true;this.b=new P3b(d,g);C1b(this.b._,0);PLb(this.F,this.b);b=new SEb((hFb(),gFb),wic(e));REb(b,(ZEb(),XEb));j=new I$b((Bic(),Aic));nFb(GVb(j),b);this.d=new P3b(e,j);C1b(this.d._,300);PLb(this.F,this.d);c=new SEb(gFb,wic(f));REb(c,XEb);k=new I$b(Aic);nFb(GVb(k),c);this.e=new P3b(f,k);C1b(this.e._,-300);PLb(this.F,this.e);n=new gTb(75,32,16);a=new SEb(gFb,wic(n));REb(a,XEb);i=new I$b(Aic);nFb(GVb(i),a);this.c=new P3b(n,i);C1b(this.c._,0);PLb(this.F,this.c)};_.nb=function zic(a){D_b(this.b.cb,0.005);E_b(this.b.cb,0.01);D_b(this.d.cb,0.005);E_b(this.d.cb,0.01);D_b(this.e.cb,0.005);E_b(this.e.cb,0.01);if(this.c){D_b(this.c.cb,0.005);E_b(this.c.cb,0.01)}YDb(this.D.n,this.F,this.a,null,false)};var Aic;YR(1132,1,{},Fic);_.Md=function Gic(){return Oic(),Dic};_.Nd=function Hic(){return Pic(),Eic};var Dic,Eic;YR(1133,1,{},Jic);_.bc=function Kic(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec4 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nfloat edgeFactorQuad1() {\n\n\tvec2 d = fwidth( vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n\n}\n\nfloat edgeFactorQuad2() {\n\n\tvec2 d = fwidth( 1.0 - vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, 1.0 - vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n}\n\nvoid main() {\n\n\tif ( vCenter.w == 0.0 ) {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\n\t} else {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), min( edgeFactorQuad1(), edgeFactorQuad2() ) );\n\n\t}\n\n\tgl_FragColor.a = 1.0;\n\n}\n'};YR(1134,1,{},Mic);_.bc=function Nic(){return 'attribute vec4 center;\nvarying vec4 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var xM=Sgb(QFc,'MaterialsWireframe$DemoScene',1131),RQ=Rgb(ZGc,'Vector4;',1378,XI),AM=Sgb(QFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1132),yM=Sgb(QFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1133),zM=Sgb(QFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1134);pBc(wi)(19);