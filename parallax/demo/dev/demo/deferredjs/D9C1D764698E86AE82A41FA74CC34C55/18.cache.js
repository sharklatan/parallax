function Wuc(){}
function $uc(){}
function bvc(){}
function Dxc(){}
function Hxc(){}
function Kxc(){}
function plc(a){this.a=a}
function Suc(){Suc=jMc;Ruc=new Wuc}
function dvc(){dvc=jMc;Uuc=new $uc}
function evc(){evc=jMc;Vuc=new bvc}
function zxc(){zxc=jMc;yxc=new Dxc}
function Mxc(){Mxc=jMc;Bxc=new Hxc}
function Nxc(){Nxc=jMc;Cxc=new Kxc}
function uxc(){zJb.call(this,(zxc(),yxc))}
function Puc(){zJb.call(this,(Suc(),Ruc))}
function llc(){mbc.call(this);this.d=0;this.e=0}
function klc(a,b){var c,d,e,f,g,i;d=new OOb(yTc);d.k=4;b7b(d.B,0.998,0.998);b7b(d.A,0.001,0.001);IOb(d,(oGb(),nGb));JOb(d,nGb);wOb(d,(hDb(),fDb));e=new OOb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');b7b(e.B,0.998,0.998);b7b(e.A,0.001,0.001);IOb(e,nGb);JOb(e,nGb);wOb(e,fDb);c=new OOb('./static/models/obj/leeperrysmith/Map-COL.jpg');b7b(c.B,0.998,0.998);b7b(c.A,0.001,0.001);IOb(c,nGb);JOb(c,nGb);wOb(c,fDb);g=new uxc;i=g.i;NNb(yv(i.a[ATc],226),(tjb(),tjb(),sjb));NNb(yv(i.a[BTc],226),sjb);NNb(yv(i.a[CTc],226),a.b.e);NNb(yv(i.a[DTc],226),c);NNb(yv(i.a[ETc],226),d);NNb(yv(i.a[FTc],226),e);W4b(yv(yv(i.a[GTc],226).d,298),10526880);W4b(yv(yv(i.a[HTc],226).d,298),10526880);W4b(yv(yv(i.a[ITc],226).d,298),10526880);NNb(yv(i.a[JTc],226),new skb(0.145));NNb(yv(i.a[KTc],226),new skb(0.75));NNb(yv(i.a[LTc],226),new skb(16));D8b(yv(yv(i.a[MTc],226).d,306),0.001,0.001,0.998,0.998);f=new e4b(g);f.c=true;a.c=new kZb(b,f);d7b(a.c._,-50);O7b(a.c.eb,100);oQb(a.c,true);a.c.U=true;jQb(a.H,a.c)}
var ATc='enableBump',CTc='tBeckmann',JTc='uRoughness',KTc='uSpecularBrightness';DV(1137,1,VNc);_.Mb=function ilc(){Oac(this.b,new llc(this.a))};DV(1138,990,{328:1},llc);_.nb=function mlc(){var a,b,c,d,e,f,g;this.a=new nRb(27,sGb(this.G.k),1,10000);R7b(this.a._,1200);jQb(this.H,new CZb(5592405));d=new z$b(16777215,1.5,1000);P7b(d._,0,0,600);jQb(this.H,d);f=new I$b(1);P7b(f._,0.05,0.05,1);jQb(this.H,f);f._.rf(700);f.S=true;f.t=true;f.I=2048;f.G=2048;f.A=200;f.w=1500;f.d=40;f.u=-0.005;f.D=0.15;a=new e$b(16777215,0.85);P7b(a._,1,-0.5,1);V4b(a.L,0.6,1,0.85);jQb(this.H,a);a._.rf(500);a.S=true;a.I=2048;a.G=2048;a.A=200;a.w=1500;a.e=-500;a.f=500;a.g=500;a.d=-500;a.u=-0.005;a.D=0.15;b=new e$b(16777215,0.85);P7b(b._,1,-0.5,-1);jQb(this.H,b);new BIc(new Puc);c=new BIc(new oJc);c.a=true;g=new jPb(512,512);BOb(g,(YEb(),SEb));zOb(g,(NEb(),LEb));wOb(g,(hDb(),fDb));g.f=false;this.b=new rIc(this.G.k,g);new Xyc(zTc,new plc(this));$Hb(this.G.k,new $4b(5001561),1);e=new VGb(this.G.k,this.H);e.g=false;tGb(this.G.k,false);this.G.k.X=true;this.G.k.Y=true};_.ob=function nlc(a){var b,c;b=this.d*0.001;c=this.e*0.001;if(this.c){e5b(this.c.cb,0.05*(b-this.c.cb.d));d5b(this.c.cb,0.05*(c-this.c.cb.c))}yHb(this.G.k,true);QHb(this.G.k,this.H,this.a,null,false)};_.d=0;_.e=0;DV(1139,1,{},plc);_.Cf=function qlc(a,b){klc(this.a,yv(b,243))};DV(1274,742,HNc,Puc);_.Ld=function Quc(){};var Ruc;DV(1275,1,{},Wuc);_.Od=function Xuc(){return dvc(),Uuc};_.Pd=function Yuc(){return evc(),Vuc};var Uuc,Vuc;DV(1276,1,{},$uc);_.nc=function _uc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};DV(1277,1,{},bvc);_.nc=function cvc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};DV(1323,742,HNc,uxc);_.Ld=function vxc(){uJb(this,kOb());uJb(this,lOb());uJb(this,mOb());nJb(this,ATc,new PNb((gOb(),XNb),$kb(0)));nJb(this,BTc,new PNb(XNb,$kb(0)));nJb(this,DTc,new ONb($Nb));nJb(this,CTc,new ONb($Nb));nJb(this,HTc,new PNb(TNb,new $4b(15658734)));nJb(this,ITc,new PNb(TNb,new $4b(1118481)));nJb(this,GTc,new PNb(TNb,new $4b(328965)));nJb(this,NTc,new PNb(UNb,new skb(1)));nJb(this,JTc,new PNb(UNb,new skb(0.15)));nJb(this,KTc,new PNb(UNb,new skb(0.75)));nJb(this,ETc,new ONb($Nb));nJb(this,LTc,new PNb(UNb,new skb(1)));nJb(this,FTc,new ONb($Nb));nJb(this,MTc,new PNb(eOb,new H8b(0,0,1,1)));nJb(this,'uWrapRGB',new PNb(cOb,new V7b(0.75,0.375,0.1875)))};_.Md=function wxc(a){var b,c;c=new Frb(ov(zT,oMc,1,[OTc,PTc,QTc]));b=new Frb(ov(zT,oMc,1,[RTc,STc,TTc]));wJb(this,EJb(a,ov(CT,oMc,173,[c,b])))};_.Nd=function xxc(a){var b,c;c=new Frb(ov(zT,oMc,1,[UTc]));b=new Frb(ov(zT,oMc,1,[VTc]));xJb(this,EJb(a,ov(CT,oMc,173,[c,b])))};var yxc;DV(1324,1,{},Dxc);_.Od=function Exc(){return Mxc(),Bxc};_.Pd=function Fxc(){return Nxc(),Cxc};var Bxc,Cxc;DV(1325,1,{},Hxc);_.nc=function Ixc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};DV(1326,1,{},Kxc);_.nc=function Lxc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var CN=gkb(QSc,'MaterialsBumpmapSkin$DemoScene',1138),BN=gkb(QSc,'MaterialsBumpmapSkin$DemoScene$1',1139),YP=gkb(JSc,'BeckmannShader',1274),XP=gkb(JSc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1275),VP=gkb(JSc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1276),WP=gkb(JSc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1277),xQ=gkb(JSc,'SkinSimpleShader',1323),wQ=gkb(JSc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1324),uQ=gkb(JSc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1325),vQ=gkb(JSc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1326);hOc(Ej)(18);