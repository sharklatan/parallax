function Ngc(){}
function Rgc(){}
function Ugc(){}
function o4b(a,b){a.d=b}
function Ggc(a,b){this.b=a;this.c=b}
function Cgc(){B5b.call(this)}
function xYb(a){YVb.call(this);this.b=a}
function Jgc(){Jgc=Dzc;Igc=new Ngc}
function Wgc(){Wgc=Dzc;Lgc=new Rgc}
function Xgc(){Xgc=Dzc;Mgc=new Ugc}
var eHc='bottomColor',dHc='topColor';hS(896,889,{229:1,236:1},xYb);_.Pe=function zYb(){return null};hS(1096,1,iBc);_.Cb=function Agc(){y5b(this.c,new Cgc(this.b))};hS(1097,940,{},Cgc);_.nb=function Dgc(){var b,c,d,e,f,g;this.b=new UMb(40,SDb(this.F.o),1,10000);r2b(this.b.ab,700,180,-500);D4b(this.G,new t4b(16448250,1000,10000));this.c=new _tb(this.b,this.F.c);t2b(this.c.w,150);b=new VUb(16777215,1.475);r2b(b.ab,100,100,-100);VLb(this.G,b);c=new cVb(16777215,16777215,1.25);y_b(c.M,0.6,1,0.75);y_b(c.b,0.1,0.8,0.7);I1b(c.ab,500);VLb(this.G,c);g=new M$b((Jgc(),Igc));VVb(g,(IXb(),FXb));uFb(KVb(g),dHc,new BJb((UJb(),FJb),new C_b(30719)));uFb(KVb(g),eHc,new BJb(FJb,new C_b(16777215)));uFb(KVb(g),dHc,new BJb(FJb,r_b(c.M)));uFb(KVb(g),'offset',new BJb(GJb,new ihb(400)));uFb(KVb(g),'exponent',new BJb(GJb,new ihb(0.6)));o4b(this.G.c,r_b(Fu(Fu(rOb(KVb(g).j,eHc),174).e,241)));f=new kTb(4000,32,15);e=new U3b(f,g);VLb(this.G,e);nEb(this.F.o,this.G.c.d,1);this.F.o._=true;this.F.o.ab=true;d=new iqc;try{Zpc(d,'./static/models/obj/lightmap/lightmap.js',new Ggc(this,d))}catch(a){a=mR(a);if(Iu(a,46)){JLb();kU(ILb,(Crb(),Arb),IGc)}else throw lR(a)}};_.ob=function Egc(a){Ztb(this.c);cEb(this.F.o,this.G,this.b,null,false)};hS(1098,1,{},Ggc);_.yf=function Hgc(){var a;a=new U3b(this.c.b,new xYb(this.c.c));q2b(a.ab,0);q2b(a.fb,100);VLb(this.b.G,a)};var Igc;hS(1099,1,{},Ngc);_.Pd=function Ogc(){return Wgc(),Lgc};_.Qd=function Pgc(){return Xgc(),Mgc};var Lgc,Mgc;hS(1100,1,{},Rgc);_.ec=function Sgc(){return 'uniform vec3 topColor;\nuniform vec3 bottomColor;\nuniform float offset;\nuniform float exponent;\n\nvarying vec3 worldPosition;\n\nvoid main() {\n\n\tfloat h = normalize( worldPosition + offset ).y;\n\tgl_FragColor = vec4( mix( bottomColor, topColor, max( pow( h, exponent ), 0.0 ) ), 1.0 );\n\n}'};hS(1101,1,{},Ugc);_.ec=function Vgc(){return 'varying vec3 worldPosition;\n\nvoid main() {\n\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\tworldPosition = mPosition.xyz;\n\n}'};var jM=Ygb(YFc,'MaterialsLightmap$DemoScene',1097),iM=Ygb(YFc,'MaterialsLightmap$DemoScene$1',1098),MI=Ygb(fHc,'MeshFaceMaterial',896),mM=Ygb(YFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator',1099),kM=Ygb(YFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$1',1100),lM=Ygb(YFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$2',1101);uBc(Gi)(18);