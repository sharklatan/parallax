function uKb(){}
function yKb(){}
function BKb(){}
function qKb(){qKb=TKc;pKb=new uKb}
function DKb(){DKb=TKc;sKb=new yKb}
function EKb(){EKb=TKc;tKb=new BKb}
function nKb(){EIb.call(this,(qKb(),pKb))}
function wlc(){gac.call(this);this.c=0;this.d=0}
hU(754,730,pMc,nKb);_.Ld=function oKb(){sIb(this,'mRefractionRatio',new UMb((lNb(),ZMb),new Ojb(1.02)));sIb(this,'mFresnelBias',new UMb(ZMb,new Ojb(0.1)));sIb(this,'mFresnelPower',new UMb(ZMb,new Ojb(2)));sIb(this,'mFresnelScale',new UMb(ZMb,new Ojb(1)));sIb(this,DSc,new TMb(dNb))};var pKb;hU(755,1,{},uKb);_.Od=function vKb(){return DKb(),sKb};_.Pd=function wKb(){return EKb(),tKb};var sKb,tKb;hU(756,1,{},yKb);_.nc=function zKb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};hU(757,1,{},BKb);_.nc=function CKb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};hU(1145,1,DMc);_.zb=function ulc(){I9b(this.b,new wlc(this.a))};hU(1146,978,{327:1},wlc);_.nb=function xlc(){var a,b,c,d,e,f,g,i,j;this.a=new rQb(60,HGb(this.G.k),1,100000);M6b(this.a._,3200);this.b=new rQb(60,HGb(this.G.k),1,100000);this.e=new N8b;a=new TWb(100,32,16);j=new aOb('./static/textures/cube/park2/*.jpg');BNb(j,(DCb(),BCb));g=new nKb;SMb(pu(WRb(g.i,DSc),225),j);c=new e3b(g);this.f=new Cqb;for(b=0;b<500;b++){e=new oYb(a,c);Z5b(e._,Vkb()*10000-5000);$5b(e._,Vkb()*10000-5000);M6b(e._,Vkb()*10000-5000);J6b(e.eb,Vkb()*3+1);oPb(this.H,e);sqb(this.f,e)}this.H.W=false;i=new eJb;SMb(pu(WRb(i.i,DSc),225),j);f=new e3b(i);h$b(f,(V_b(),S_b));d=new oYb(new cWb(100000,100000,100000),f);oPb(this.e,d);_Gb(this.G.k,false)};_.ob=function ylc(a){var b,c,d,e;e=1.0E-4*a;U5b(this.a._,(this.c-this.a._.c)*0.05);V5b(this.a._,(-this.d-this.a._.d)*0.05);NPb(this.a,this.H._);a4b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=pu(vqb(this.f,b),304);Z5b(d._,5000*Math.cos(e+b));$5b(d._,5000*Math.sin(e+b*1.1))}AGb(this.G.k,true);TGb(this.G.k,this.e,this.b,null,false);TGb(this.G.k,this.H,this.a,null,false)};_.c=0;_.d=0;var DM=Cjb(wRc,'MaterialsCubemapFresnel$DemoScene',1146),ZF=Cjb(ESc,'FresnelShader',754),YF=Cjb(ESc,'FresnelShader_Resources_default_InlineClientBundleGenerator',755),WF=Cjb(ESc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',756),XF=Cjb(ESc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',757);RMc(xi)(21);