function Ggc(){}
function Kgc(){}
function Ngc(){}
function h4b(a,b){a.c=b}
function zgc(a,b){this.a=a;this.b=b}
function vgc(){u5b.call(this)}
function qYb(a){RVb.call(this);this.a=a}
function Cgc(){Cgc=wzc;Bgc=new Ggc}
function Pgc(){Pgc=wzc;Egc=new Kgc}
function Qgc(){Qgc=wzc;Fgc=new Ngc}
var VGc='bottomColor',UGc='topColor';XR(902,895,{229:1,236:1},qYb);_.Me=function sYb(){return null};XR(1102,1,aBc);_.yb=function tgc(){r5b(this.b,new vgc(this.a))};XR(1103,946,{},vgc);_.mb=function wgc(){var b,c,d,e,f,g;this.a=new NMb(40,LDb(this.D.n),1,10000);k2b(this.a._,700,180,-500);w4b(this.F,new m4b(16448250,1000,10000));this.b=new Utb(this.a,this.D.b);m2b(this.b.v,150);b=new OUb(16777215,1.475);k2b(b._,100,100,-100);OLb(this.F,b);c=new XUb(16777215,16777215,1.25);r_b(c.L,0.6,1,0.75);r_b(c.a,0.1,0.8,0.7);B1b(c._,500);OLb(this.F,c);g=new F$b((Cgc(),Bgc));OVb(g,(BXb(),yXb));nFb(DVb(g),UGc,new uJb((NJb(),yJb),new v_b(30719)));nFb(DVb(g),VGc,new uJb(yJb,new v_b(16777215)));nFb(DVb(g),UGc,new uJb(yJb,k_b(c.L)));nFb(DVb(g),'offset',new uJb(zJb,new bhb(400)));nFb(DVb(g),'exponent',new uJb(zJb,new bhb(0.6)));h4b(this.F.b,k_b(su(su(kOb(DVb(g).i,VGc),174).d,241)));f=new dTb(4000,32,15);e=new N3b(f,g);OLb(this.F,e);gEb(this.D.n,this.F.b.c,1);this.D.n.$=true;this.D.n._=true;d=new bqc;try{Spc(d,'./static/models/obj/lightmap/lightmap.js',new zgc(this,d))}catch(a){a=aR(a);if(vu(a,46)){CLb();dU(BLb,(vrb(),trb),xGc)}else throw _Q(a)}};_.nb=function xgc(a){Stb(this.b);XDb(this.D.n,this.F,this.a,null,false)};XR(1104,1,{},zgc);_.vf=function Agc(){var a;a=new N3b(this.b.a,new qYb(this.b.b));j2b(a._,0);j2b(a.eb,100);OLb(this.a.F,a)};var Bgc;XR(1105,1,{},Ggc);_.Md=function Hgc(){return Pgc(),Egc};_.Nd=function Igc(){return Qgc(),Fgc};var Egc,Fgc;XR(1106,1,{},Kgc);_.bc=function Lgc(){return 'uniform vec3 topColor;\nuniform vec3 bottomColor;\nuniform float offset;\nuniform float exponent;\n\nvarying vec3 worldPosition;\n\nvoid main() {\n\n\tfloat h = normalize( worldPosition + offset ).y;\n\tgl_FragColor = vec4( mix( bottomColor, topColor, max( pow( h, exponent ), 0.0 ) ), 1.0 );\n\n}'};XR(1107,1,{},Ngc);_.bc=function Ogc(){return 'varying vec3 worldPosition;\n\nvoid main() {\n\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\tworldPosition = mPosition.xyz;\n\n}'};var ZL=Rgb(NFc,'MaterialsLightmap$DemoScene',1103),YL=Rgb(NFc,'MaterialsLightmap$DemoScene$1',1104),AI=Rgb(WGc,'MeshFaceMaterial',902),aM=Rgb(NFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator',1105),$L=Rgb(NFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$1',1106),_L=Rgb(NFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$2',1107);mBc(wi)(18);