function vKb(){}
function zKb(){}
function CKb(){}
function rKb(){rKb=RMc;qKb=new vKb}
function EKb(){EKb=RMc;tKb=new zKb}
function FKb(){FKb=RMc;uKb=new CKb}
function oKb(){FIb.call(this,(rKb(),qKb))}
function zlc(){L9b.call(this);this.d=0;this.e=0}
mU(749,725,pOc,oKb);_.Od=function pKb(){tIb(this,'mRefractionRatio',new VMb((mNb(),$Mb),new Tjb(1.02)));tIb(this,'mFresnelBias',new VMb($Mb,new Tjb(0.1)));tIb(this,'mFresnelPower',new VMb($Mb,new Tjb(2)));tIb(this,'mFresnelScale',new VMb($Mb,new Tjb(1)));tIb(this,EUc,new UMb(eNb))};var qKb;mU(750,1,{},vKb);_.Rd=function wKb(){return EKb(),tKb};_.Sd=function xKb(){return FKb(),uKb};var tKb,uKb;mU(751,1,{},zKb);_.qc=function AKb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};mU(752,1,{},CKb);_.qc=function DKb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};mU(1133,1,COc);_.Db=function xlc(){l9b(this.c,new zlc(this.b))};mU(1134,967,{327:1},zlc);_.ob=function Alc(){var a,b,c,d,e,f,g,i,j;this.b=new sQb(60,IGb(this.H.n),1,100000);c6b(this.b.ab,3200);this.c=new sQb(60,IGb(this.H.n),1,100000);this.f=new r8b;a=new RWb(100,32,16);j=new bOb('./static/textures/cube/park2/*.jpg');CNb(j,(ECb(),CCb));g=new oKb;TMb(Eu(URb(g.j,EUc),225),j);c=new x2b(g);this.g=new Gqb;for(b=0;b<500;b++){e=new E7b(a,c);p5b(e.ab,$kb()*10000-5000);q5b(e.ab,$kb()*10000-5000);c6b(e.ab,$kb()*10000-5000);_5b(e.fb,$kb()*3+1);pPb(this.I,e);wqb(this.g,e)}this.I.X=false;i=new fJb;TMb(Eu(URb(i.j,EUc),225),j);f=new x2b(i);AZb(f,(m_b(),j_b));d=new E7b(new aWb(100000,100000,100000),f);pPb(this.f,d);aHb(this.H.n,false)};_.pb=function Blc(a){var b,c,d,e;e=1.0E-4*a;k5b(this.b.ab,(this.d-this.b.ab.d)*0.05);l5b(this.b.ab,(-this.e-this.b.ab.e)*0.05);OPb(this.b,this.I.ab);s3b(this.c.db,this.b.db);for(b=0,c=this.g.c;b<c;b++){d=Eu(zqb(this.g,b),304);p5b(d.ab,5000*Math.cos(e+b));q5b(d.ab,5000*Math.sin(e+b*1.1))}BGb(this.H.n,true);UGb(this.H.n,this.f,this.c,null,false);UGb(this.H.n,this.I,this.b,null,false)};_.d=0;_.e=0;var NM=Hjb(xTc,'MaterialsCubemapFresnel$DemoScene',1134),nG=Hjb(FUc,'FresnelShader',749),mG=Hjb(FUc,'FresnelShader_Resources_default_InlineClientBundleGenerator',750),kG=Hjb(FUc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',751),lG=Hjb(FUc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',752);QOc(Hi)(21);