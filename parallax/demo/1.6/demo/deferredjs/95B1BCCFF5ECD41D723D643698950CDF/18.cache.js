function pvc(){}
function tvc(){}
function wvc(){}
function Yxc(){}
function ayc(){}
function dyc(){}
function Klc(a){this.b=a}
function fyc(){fyc=FMc;Wxc=new ayc}
function gyc(){gyc=FMc;Xxc=new dyc}
function Uxc(){Uxc=FMc;Txc=new Yxc}
function lvc(){lvc=FMc;kvc=new pvc}
function yvc(){yvc=FMc;nvc=new tvc}
function zvc(){zvc=FMc;ovc=new wvc}
function ivc(){HJb.call(this,(lvc(),kvc))}
function Pxc(){HJb.call(this,(Uxc(),Txc))}
function Glc(){Hbc.call(this);this.e=0;this.f=0}
function Flc(a,b){var c,d,e,f,g,i;d=new WOb(ZTc);d.n=4;V7b(d.C,0.998,0.998);V7b(d.B,0.001,0.001);QOb(d,(vGb(),uGb));ROb(d,uGb);EOb(d,(oDb(),mDb));e=new WOb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');V7b(e.C,0.998,0.998);V7b(e.B,0.001,0.001);QOb(e,uGb);ROb(e,uGb);EOb(e,mDb);c=new WOb('./static/models/obj/leeperrysmith/Map-COL.jpg');V7b(c.C,0.998,0.998);V7b(c.B,0.001,0.001);QOb(c,uGb);ROb(c,uGb);EOb(c,mDb);g=new Pxc;i=g.j;VNb(Lv(i.b[_Tc],226),(Ajb(),Ajb(),zjb));VNb(Lv(i.b[aUc],226),zjb);VNb(Lv(i.b[bUc],226),a.c.f);VNb(Lv(i.b[cUc],226),c);VNb(Lv(i.b[dUc],226),d);VNb(Lv(i.b[eUc],226),e);i5b(Lv(Lv(i.b[fUc],226).e,298),10526880);i5b(Lv(Lv(i.b[gUc],226).e,298),10526880);i5b(Lv(Lv(i.b[hUc],226).e,298),10526880);VNb(Lv(i.b[iUc],226),new zkb(0.145));VNb(Lv(i.b[jUc],226),new zkb(0.75));VNb(Lv(i.b[kUc],226),new zkb(16));e9b(Lv(Lv(i.b[lUc],226).e,305),0.001,0.001,0.998,0.998);f=new r4b(g);f.d=true;a.d=new xZb(b,f);X7b(a.d.ab,-50);B8b(a.d.fb,100);wQb(a.d,true);a.d.V=true;rQb(a.I,a.d)}
var _Tc='enableBump',bUc='tBeckmann',iUc='uRoughness',jUc='uSpecularBrightness';PV(1131,1,rOc);_.Qb=function Dlc(){hbc(this.c,new Glc(this.b))};PV(1132,984,{327:1},Glc);_.ob=function Hlc(){var a,b,c,d,e,f,g;this.b=new vRb(27,zGb(this.H.n),1,10000);E8b(this.b.ab,1200);rQb(this.I,new PZb(5592405));d=new M$b(16777215,1.5,1000);C8b(d.ab,0,0,600);rQb(this.I,d);f=new V$b(1);C8b(f.ab,0.05,0.05,1);rQb(this.I,f);f.ab.jf(700);f.T=true;f.u=true;f.J=2048;f.H=2048;f.B=200;f.A=1500;f.e=40;f.v=-0.005;f.F=0.15;a=new r$b(16777215,0.85);C8b(a.ab,1,-0.5,1);h5b(a.M,0.6,1,0.85);rQb(this.I,a);a.ab.jf(500);a.T=true;a.J=2048;a.H=2048;a.B=200;a.A=1500;a.f=-500;a.g=500;a.i=500;a.e=-500;a.v=-0.005;a.F=0.15;b=new r$b(16777215,0.85);C8b(b.ab,1,-0.5,-1);rQb(this.I,b);new XIc(new ivc);c=new XIc(new KJc);c.b=true;g=new rPb(512,512);JOb(g,(dFb(),ZEb));HOb(g,(UEb(),SEb));EOb(g,(oDb(),mDb));g.g=false;this.c=new MIc(this.H.n,g);new qzc($Tc,new Klc(this));gIb(this.H.n,new m5b(5001561),1);e=new bHb(this.H.n,this.I);e.i=false;AGb(this.H.n,false);this.H.n.Y=true;this.H.n.Z=true};_.pb=function Ilc(a){var b,c;b=this.e*0.001;c=this.f*0.001;if(this.d){t5b(this.d.db,0.05*(b-this.d.db.e));s5b(this.d.db,0.05*(c-this.d.db.d))}GHb(this.H.n,true);YHb(this.H.n,this.I,this.b,null,false)};_.e=0;_.f=0;PV(1133,1,{},Klc);_.tf=function Llc(a,b){Flc(this.b,Lv(b,243))};PV(1268,736,dOc,ivc);_.Pd=function jvc(){};var kvc;PV(1269,1,{},pvc);_.Sd=function qvc(){return yvc(),nvc};_.Td=function rvc(){return zvc(),ovc};var nvc,ovc;PV(1270,1,{},tvc);_.qc=function uvc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};PV(1271,1,{},wvc);_.qc=function xvc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};PV(1317,736,dOc,Pxc);_.Pd=function Qxc(){CJb(this,sOb());CJb(this,tOb());CJb(this,uOb());vJb(this,_Tc,new XNb((oOb(),dOb),flb(0)));vJb(this,aUc,new XNb(dOb,flb(0)));vJb(this,cUc,new WNb(gOb));vJb(this,bUc,new WNb(gOb));vJb(this,gUc,new XNb(_Nb,new m5b(15658734)));vJb(this,hUc,new XNb(_Nb,new m5b(1118481)));vJb(this,fUc,new XNb(_Nb,new m5b(328965)));vJb(this,mUc,new XNb(aOb,new zkb(1)));vJb(this,iUc,new XNb(aOb,new zkb(0.15)));vJb(this,jUc,new XNb(aOb,new zkb(0.75)));vJb(this,dUc,new WNb(gOb));vJb(this,kUc,new XNb(aOb,new zkb(1)));vJb(this,eUc,new WNb(gOb));vJb(this,lUc,new XNb(mOb,new h9b(0,0,1,1)));vJb(this,'uWrapRGB',new XNb(kOb,new J8b(0.75,0.375,0.1875)))};_.Qd=function Rxc(a){var b,c;c=new Mrb(Bv(LT,LMc,1,[nUc,oUc,pUc]));b=new Mrb(Bv(LT,LMc,1,[qUc,rUc,sUc]));EJb(this,MJb(a,Bv(OT,LMc,173,[c,b])))};_.Rd=function Sxc(a){var b,c;c=new Mrb(Bv(LT,LMc,1,[tUc]));b=new Mrb(Bv(LT,LMc,1,[uUc]));FJb(this,MJb(a,Bv(OT,LMc,173,[c,b])))};var Txc;PV(1318,1,{},Yxc);_.Sd=function Zxc(){return fyc(),Wxc};_.Td=function $xc(){return gyc(),Xxc};var Wxc,Xxc;PV(1319,1,{},ayc);_.qc=function byc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};PV(1320,1,{},dyc);_.qc=function eyc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var ON=nkb(pTc,'MaterialsBumpmapSkin$DemoScene',1132),NN=nkb(pTc,'MaterialsBumpmapSkin$DemoScene$1',1133),iQ=nkb(iTc,'BeckmannShader',1268),hQ=nkb(iTc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1269),fQ=nkb(iTc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1270),gQ=nkb(iTc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1271),JQ=nkb(iTc,'SkinSimpleShader',1317),IQ=nkb(iTc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1318),GQ=nkb(iTc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1319),HQ=nkb(iTc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1320);FOc(Oj)(18);