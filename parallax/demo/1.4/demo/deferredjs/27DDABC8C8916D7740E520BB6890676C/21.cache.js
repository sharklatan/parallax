function _Gb(){}
function dHb(){}
function gHb(){}
function iHb(){iHb=Dzc;ZGb=new dHb}
function jHb(){jHb=Dzc;$Gb=new gHb}
function XGb(){XGb=Dzc;WGb=new _Gb}
function UGb(){EFb.call(this,(XGb(),WGb))}
function qgc(){A5b.call(this);this.c=0;this.d=0}
dS(734,716,VAc,UGb);_.Jd=function VGb(){sFb(this,'mRefractionRatio',new zJb((SJb(),EJb),new ghb(1.02)));sFb(this,'mFresnelBias',new zJb(EJb,new ghb(0.1)));sFb(this,'mFresnelPower',new zJb(EJb,new ghb(2)));sFb(this,'mFresnelScale',new zJb(EJb,new ghb(1)));sFb(this,nHc,new yJb(KJb))};var WGb;dS(735,1,{},_Gb);_.Md=function aHb(){return iHb(),ZGb};_.Nd=function bHb(){return jHb(),$Gb};var ZGb,$Gb;dS(736,1,{},dHb);_.bc=function eHb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};dS(737,1,{},gHb);_.bc=function hHb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};dS(1097,1,hBc);_.yb=function ogc(){x5b(this.b,new qgc(this.a))};dS(1098,944,{273:1},qgc);_.mb=function rgc(){var a,b,c,d,e,f,g,i,j;this.a=new SMb(60,QDb(this.D.n),1,100000);s2b(this.a._,3200);this.b=new SMb(60,QDb(this.D.n),1,100000);this.e=new D4b;a=new kTb(100,32,16);j=new HKb('./static/textures/cube/park2/*.jpg');gKb(j,(Gzb(),Ezb));g=new UGb;xJb(Au(pOb(g.i,nHc),174),j);c=new N$b(g);this.f=new Unb;for(b=0;b<500;b++){e=new T3b(a,c);G1b(e._,nib()*10000-5000);H1b(e._,nib()*10000-5000);s2b(e._,nib()*10000-5000);p2b(e.eb,nib()*3+1);TLb(this.F,e);Knb(this.f,e)}this.F.W=false;i=new eGb;xJb(Au(pOb(i.i,nHc),174),j);f=new N$b(i);VVb(f,(IXb(),FXb));d=new T3b(new vSb(100000,100000,100000),f);TLb(this.e,d);this.D.n.Y=false};_.nb=function sgc(a){var b,c,d,e;e=1.0E-4*a;B1b(this.a._,(this.c-this.a._.c)*0.05);C1b(this.a._,(-this.d-this.a._.d)*0.05);qMb(this.a,this.F._);J_b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=Au(Nnb(this.f,b),252);G1b(d._,5000*Math.cos(e+b));H1b(d._,5000*Math.sin(e+b*1.1))}LDb(this.D.n);aEb(this.D.n,this.e,this.b,null,false);aEb(this.D.n,this.F,this.a,null,false)};_.c=0;_.d=0;var bM=Wgb(bGc,'MaterialsCubemapFresnel$DemoScene',1098),ZF=Wgb(oHc,'FresnelShader',734),YF=Wgb(oHc,'FresnelShader_Resources_default_InlineClientBundleGenerator',735),WF=Wgb(oHc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',736),XF=Wgb(oHc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',737);tBc(wi)(21);