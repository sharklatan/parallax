function jhc(){}
function nhc(){}
function qhc(){}
function L4b(a,b){a.d=b}
function chc(a,b){this.b=a;this.c=b}
function $gc(){Y5b.call(this)}
function VYb(a){uWb.call(this);this.b=a}
function shc(){shc=_zc;hhc=new nhc}
function fhc(){fhc=_zc;ehc=new jhc}
function thc(){thc=_zc;ihc=new qhc}
var GHc='bottomColor',FHc='topColor';FS(903,896,{229:1,236:1},VYb);_.Te=function XYb(){return null};FS(1103,1,GBc);_.Cb=function Ygc(){V5b(this.c,new $gc(this.b))};FS(1104,947,{},$gc);_.nb=function _gc(){var b,c,d,e,f,g;this.b=new oNb(40,mEb(this.F.o),1,10000);O2b(this.b.ab,700,180,-500);$4b(this.G,new Q4b(16448250,1000,10000));this.c=new wub(this.b,this.F.c);Q2b(this.c.w,150);b=new rVb(16777215,1.475);O2b(b.ab,100,100,-100);pMb(this.G,b);c=new AVb(16777215,16777215,1.25);W_b(c.M,0.6,1,0.75);W_b(c.b,0.1,0.8,0.7);d2b(c.ab,500);pMb(this.G,c);g=new i_b((fhc(),ehc));rWb(g,(eYb(),bYb));QFb(gWb(g),FHc,new XJb((oKb(),_Jb),new $_b(30719)));QFb(gWb(g),GHc,new XJb(_Jb,new $_b(16777215)));QFb(gWb(g),FHc,new XJb(_Jb,P_b(c.M)));QFb(gWb(g),'offset',new XJb(aKb,new Dhb(400)));QFb(gWb(g),'exponent',new XJb(aKb,new Dhb(0.6)));L4b(this.G.c,P_b(Xu(Xu(NOb(gWb(g).j,GHc),174).e,241)));f=new ITb(4000,32,15);e=new p4b(f,g);pMb(this.G,e);JEb(this.F.o,this.G.c.d,1);this.F.o._=true;this.F.o.ab=true;d=new Gqc;try{vqc(d,'./static/models/obj/lightmap/lightmap.js',new chc(this,d))}catch(a){a=KR(a);if($u(a,46)){dMb();IU(cMb,(Yrb(),Wrb),iHc)}else throw JR(a)}};_.ob=function ahc(a){uub(this.c);yEb(this.F.o,this.G,this.b,null,false)};FS(1105,1,{},chc);_.Cf=function dhc(){var a;a=new p4b(this.c.b,new VYb(this.c.c));N2b(a.ab,0);N2b(a.fb,100);pMb(this.b.G,a)};var ehc;FS(1106,1,{},jhc);_.Td=function khc(){return shc(),hhc};_.Ud=function lhc(){return thc(),ihc};var hhc,ihc;FS(1107,1,{},nhc);_.ic=function ohc(){return 'uniform vec3 topColor;\nuniform vec3 bottomColor;\nuniform float offset;\nuniform float exponent;\n\nvarying vec3 worldPosition;\n\nvoid main() {\n\n\tfloat h = normalize( worldPosition + offset ).y;\n\tgl_FragColor = vec4( mix( bottomColor, topColor, max( pow( h, exponent ), 0.0 ) ), 1.0 );\n\n}'};FS(1108,1,{},qhc);_.ic=function rhc(){return 'varying vec3 worldPosition;\n\nvoid main() {\n\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\tworldPosition = mPosition.xyz;\n\n}'};var IM=rhb(zGc,'MaterialsLightmap$DemoScene',1104),HM=rhb(zGc,'MaterialsLightmap$DemoScene$1',1105),jJ=rhb(HHc,'MeshFaceMaterial',903),LM=rhb(zGc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator',1106),JM=rhb(zGc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$1',1107),KM=rhb(zGc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$2',1108);SBc(Hi)(18);