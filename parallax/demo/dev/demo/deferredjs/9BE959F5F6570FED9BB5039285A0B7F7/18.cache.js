function Xuc(){}
function _uc(){}
function cvc(){}
function Exc(){}
function Ixc(){}
function Lxc(){}
function qlc(a){this.a=a}
function Tuc(){Tuc=kMc;Suc=new Xuc}
function evc(){evc=kMc;Vuc=new _uc}
function fvc(){fvc=kMc;Wuc=new cvc}
function Axc(){Axc=kMc;zxc=new Exc}
function Nxc(){Nxc=kMc;Cxc=new Ixc}
function Oxc(){Oxc=kMc;Dxc=new Lxc}
function vxc(){nJb.call(this,(Axc(),zxc))}
function Quc(){nJb.call(this,(Tuc(),Suc))}
function mlc(){nbc.call(this);this.d=0;this.e=0}
function llc(a,b){var c,d,e,f,g,i;d=new COb(ITc);d.k=4;B7b(d.B,0.998,0.998);B7b(d.A,0.001,0.001);wOb(d,(cGb(),bGb));xOb(d,bGb);kOb(d,(XCb(),VCb));e=new COb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');B7b(e.B,0.998,0.998);B7b(e.A,0.001,0.001);wOb(e,bGb);xOb(e,bGb);kOb(e,VCb);c=new COb('./static/models/obj/leeperrysmith/Map-COL.jpg');B7b(c.B,0.998,0.998);B7b(c.A,0.001,0.001);wOb(c,bGb);xOb(c,bGb);kOb(c,VCb);g=new vxc;i=g.i;BNb(yv(i.a[KTc],226),(hjb(),hjb(),gjb));BNb(yv(i.a[LTc],226),gjb);BNb(yv(i.a[MTc],226),a.b.e);BNb(yv(i.a[NTc],226),c);BNb(yv(i.a[OTc],226),d);BNb(yv(i.a[PTc],226),e);Q4b(yv(yv(i.a[QTc],226).d,298),10526880);Q4b(yv(yv(i.a[RTc],226).d,298),10526880);Q4b(yv(yv(i.a[STc],226).d,298),10526880);BNb(yv(i.a[TTc],226),new gkb(0.145));BNb(yv(i.a[UTc],226),new gkb(0.75));BNb(yv(i.a[VTc],226),new gkb(16));M8b(yv(yv(i.a[WTc],226).d,305),0.001,0.001,0.998,0.998);f=new Z3b(g);f.c=true;a.c=new dZb(b,f);D7b(a.c._,-50);h8b(a.c.eb,100);cQb(a.c,true);a.c.U=true;ZPb(a.H,a.c)}
var KTc='enableBump',MTc='tBeckmann',TTc='uRoughness',UTc='uSpecularBrightness';zV(1132,1,WNc);_.Mb=function jlc(){Pac(this.b,new mlc(this.a))};zV(1133,985,{327:1},mlc);_.nb=function nlc(){var a,b,c,d,e,f,g;this.a=new bRb(27,gGb(this.G.k),1,10000);k8b(this.a._,1200);ZPb(this.H,new vZb(5592405));d=new s$b(16777215,1.5,1000);i8b(d._,0,0,600);ZPb(this.H,d);f=new B$b(1);i8b(f._,0.05,0.05,1);ZPb(this.H,f);f._.ef(700);f.S=true;f.t=true;f.I=2048;f.G=2048;f.A=200;f.w=1500;f.d=40;f.u=-0.005;f.D=0.15;a=new ZZb(16777215,0.85);i8b(a._,1,-0.5,1);P4b(a.L,0.6,1,0.85);ZPb(this.H,a);a._.ef(500);a.S=true;a.I=2048;a.G=2048;a.A=200;a.w=1500;a.e=-500;a.f=500;a.g=500;a.d=-500;a.u=-0.005;a.D=0.15;b=new ZZb(16777215,0.85);i8b(b._,1,-0.5,-1);ZPb(this.H,b);new CIc(new Quc);c=new CIc(new pJc);c.a=true;g=new ZOb(512,512);pOb(g,(MEb(),GEb));nOb(g,(BEb(),zEb));kOb(g,(XCb(),VCb));g.f=false;this.b=new sIc(this.G.k,g);new Yyc(JTc,new qlc(this));OHb(this.G.k,new U4b(5001561),1);e=new JGb(this.G.k,this.H);e.g=false;hGb(this.G.k,false);this.G.k.X=true;this.G.k.Y=true};_.ob=function olc(a){var b,c;b=this.d*0.001;c=this.e*0.001;if(this.c){_4b(this.c.cb,0.05*(b-this.c.cb.d));$4b(this.c.cb,0.05*(c-this.c.cb.c))}mHb(this.G.k,true);EHb(this.G.k,this.H,this.a,null,false)};_.d=0;_.e=0;zV(1134,1,{},qlc);_.pf=function rlc(a,b){llc(this.a,yv(b,243))};zV(1269,737,INc,Quc);_.Ld=function Ruc(){};var Suc;zV(1270,1,{},Xuc);_.Od=function Yuc(){return evc(),Vuc};_.Pd=function Zuc(){return fvc(),Wuc};var Vuc,Wuc;zV(1271,1,{},_uc);_.nc=function avc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};zV(1272,1,{},cvc);_.nc=function dvc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};zV(1318,737,INc,vxc);_.Ld=function wxc(){iJb(this,$Nb());iJb(this,_Nb());iJb(this,aOb());bJb(this,KTc,new DNb((WNb(),LNb),Okb(0)));bJb(this,LTc,new DNb(LNb,Okb(0)));bJb(this,NTc,new CNb(ONb));bJb(this,MTc,new CNb(ONb));bJb(this,RTc,new DNb(HNb,new U4b(15658734)));bJb(this,STc,new DNb(HNb,new U4b(1118481)));bJb(this,QTc,new DNb(HNb,new U4b(328965)));bJb(this,XTc,new DNb(INb,new gkb(1)));bJb(this,TTc,new DNb(INb,new gkb(0.15)));bJb(this,UTc,new DNb(INb,new gkb(0.75)));bJb(this,OTc,new CNb(ONb));bJb(this,VTc,new DNb(INb,new gkb(1)));bJb(this,PTc,new CNb(ONb));bJb(this,WTc,new DNb(UNb,new P8b(0,0,1,1)));bJb(this,'uWrapRGB',new DNb(SNb,new p8b(0.75,0.375,0.1875)))};_.Md=function xxc(a){var b,c;c=new trb(ov(vT,pMc,1,[YTc,ZTc,$Tc]));b=new trb(ov(vT,pMc,1,[_Tc,aUc,bUc]));kJb(this,sJb(a,ov(yT,pMc,173,[c,b])))};_.Nd=function yxc(a){var b,c;c=new trb(ov(vT,pMc,1,[cUc]));b=new trb(ov(vT,pMc,1,[dUc]));lJb(this,sJb(a,ov(yT,pMc,173,[c,b])))};var zxc;zV(1319,1,{},Exc);_.Od=function Fxc(){return Nxc(),Cxc};_.Pd=function Gxc(){return Oxc(),Dxc};var Cxc,Dxc;zV(1320,1,{},Ixc);_.nc=function Jxc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};zV(1321,1,{},Lxc);_.nc=function Mxc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var yN=Wjb($Sc,'MaterialsBumpmapSkin$DemoScene',1133),xN=Wjb($Sc,'MaterialsBumpmapSkin$DemoScene$1',1134),UP=Wjb(TSc,'BeckmannShader',1269),TP=Wjb(TSc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1270),RP=Wjb(TSc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1271),SP=Wjb(TSc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1272),tQ=Wjb(TSc,'SkinSimpleShader',1318),sQ=Wjb(TSc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1319),qQ=Wjb(TSc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1320),rQ=Wjb(TSc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1321);iOc(wj)(18);