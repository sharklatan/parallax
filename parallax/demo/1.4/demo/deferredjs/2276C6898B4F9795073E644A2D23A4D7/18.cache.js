function xgc(){}
function Bgc(){}
function Egc(){}
function Z3b(a,b){a.c=b}
function qgc(a,b){this.a=a;this.b=b}
function mgc(){k5b.call(this)}
function gYb(a){HVb.call(this);this.a=a}
function tgc(){tgc=nzc;sgc=new xgc}
function Ggc(){Ggc=nzc;vgc=new Bgc}
function Hgc(){Hgc=nzc;wgc=new Egc}
var KGc='bottomColor',JGc='topColor';TR(900,893,{229:1,236:1},gYb);_.Me=function iYb(){return null};TR(1100,1,TAc);_.yb=function kgc(){h5b(this.b,new mgc(this.a))};TR(1101,944,{},mgc);_.mb=function ngc(){var b,c,d,e,f,g;this.a=new DMb(40,BDb(this.D.n),1,10000);a2b(this.a._,700,180,-500);m4b(this.F,new c4b(16448250,1000,10000));this.b=new Ktb(this.a,this.D.b);c2b(this.b.v,150);b=new EUb(16777215,1.475);a2b(b._,100,100,-100);ELb(this.F,b);c=new NUb(16777215,16777215,1.25);h_b(c.L,0.6,1,0.75);h_b(c.a,0.1,0.8,0.7);r1b(c._,500);ELb(this.F,c);g=new v$b((tgc(),sgc));EVb(g,(rXb(),oXb));dFb(tVb(g),JGc,new kJb((DJb(),oJb),new l_b(30719)));dFb(tVb(g),KGc,new kJb(oJb,new l_b(16777215)));dFb(tVb(g),JGc,new kJb(oJb,a_b(c.L)));dFb(tVb(g),'offset',new kJb(pJb,new Tgb(400)));dFb(tVb(g),'exponent',new kJb(pJb,new Tgb(0.6)));Z3b(this.F.b,a_b(qu(qu(aOb(tVb(g).i,KGc),174).d,241)));f=new VSb(4000,32,15);e=new D3b(f,g);ELb(this.F,e);YDb(this.D.n,this.F.b.c,1);this.D.n.$=true;this.D.n._=true;d=new Upc;try{Jpc(d,'./static/models/obj/lightmap/lightmap.js',new qgc(this,d))}catch(a){a=YQ(a);if(tu(a,46)){sLb();_T(rLb,(lrb(),jrb),mGc)}else throw XQ(a)}};_.nb=function ogc(a){Itb(this.b);NDb(this.D.n,this.F,this.a,null,false)};TR(1102,1,{},qgc);_.vf=function rgc(){var a;a=new D3b(this.b.a,new gYb(this.b.b));_1b(a._,0);_1b(a.eb,100);ELb(this.a.F,a)};var sgc;TR(1103,1,{},xgc);_.Md=function ygc(){return Ggc(),vgc};_.Nd=function zgc(){return Hgc(),wgc};var vgc,wgc;TR(1104,1,{},Bgc);_.bc=function Cgc(){return 'uniform vec3 topColor;\nuniform vec3 bottomColor;\nuniform float offset;\nuniform float exponent;\n\nvarying vec3 worldPosition;\n\nvoid main() {\n\n\tfloat h = normalize( worldPosition + offset ).y;\n\tgl_FragColor = vec4( mix( bottomColor, topColor, max( pow( h, exponent ), 0.0 ) ), 1.0 );\n\n}'};TR(1105,1,{},Egc);_.bc=function Fgc(){return 'varying vec3 worldPosition;\n\nvoid main() {\n\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\tworldPosition = mPosition.xyz;\n\n}'};var VL=Hgb(CFc,'MaterialsLightmap$DemoScene',1101),UL=Hgb(CFc,'MaterialsLightmap$DemoScene$1',1102),wI=Hgb(LGc,'MeshFaceMaterial',900),YL=Hgb(CFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator',1103),WL=Hgb(CFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$1',1104),XL=Hgb(CFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$2',1105);dBc(wi)(18);