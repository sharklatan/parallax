function ivc(){}
function mvc(){}
function pvc(){}
function Hzc(){}
function Lzc(){}
function Ozc(){}
function mlc(a){this.a=a}
function evc(){evc=IQc;dvc=new ivc}
function rvc(){rvc=IQc;gvc=new mvc}
function svc(){svc=IQc;hvc=new pvc}
function Dzc(){Dzc=IQc;Czc=new Hzc}
function Qzc(){Qzc=IQc;Fzc=new Lzc}
function Rzc(){Rzc=IQc;Gzc=new Ozc}
function yzc(){NJb.call(this,(Dzc(),Czc))}
function bvc(){NJb.call(this,(evc(),dvc))}
function ilc(){Pac.call(this);this.d=0;this.e=0}
function hlc(a,b){var c,d,e,f,g,i;d=new aPb(TXc);d.k=4;s6b(d.B,0.998,0.998);s6b(d.A,0.001,0.001);WOb(d,(SGb(),RGb));XOb(d,RGb);KOb(d,(lDb(),jDb));e=new aPb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');s6b(e.B,0.998,0.998);s6b(e.A,0.001,0.001);WOb(e,RGb);XOb(e,RGb);KOb(e,jDb);c=new aPb(VXc);s6b(c.B,0.998,0.998);s6b(c.A,0.001,0.001);WOb(c,RGb);XOb(c,RGb);KOb(c,jDb);g=new yzc;i=g.i;_Nb(ru(i.a[WXc],227),(vjb(),vjb(),ujb));_Nb(ru(i.a[XXc],227),ujb);_Nb(ru(i.a[YXc],227),a.b.f);_Nb(ru(i.a[ZXc],227),c);_Nb(ru(i.a[$Xc],227),d);_Nb(ru(i.a[_Xc],227),e);m4b(ru(ru(i.a[aYc],227).d,294),10526880);m4b(ru(ru(i.a[bYc],227).d,294),10526880);m4b(ru(ru(i.a[cYc],227).d,294),10526880);_Nb(ru(i.a[dYc],227),new ukb(0.145));_Nb(ru(i.a[eYc],227),new ukb(0.75));_Nb(ru(i.a[fYc],227),new ukb(16));U7b(ru(ru(i.a[gYc],227).d,302),0.001,0.001,0.998,0.998);f=new B3b(g);f.c=true;a.c=new I8b(b,f);u6b(a.c._,-50);d7b(a.c.eb,100);CQb(a.c,true);a.c.U=true;xQb(a.H,a.c)}
var WXc='enableBump',YXc='tBeckmann',dYc='uRoughness',eYc='uSpecularBrightness';KU(1121,1,rSc);_.zb=function flc(){pac(this.b,new ilc(this.a))};KU(1122,975,{324:1},ilc);_.nb=function jlc(){var a,b,c,d,e,f,g;this.a=new yRb(27,QHb(this.G.k),1,10000);g7b(this.a._,1200);xQb(this.H,new bZb(5592405));d=new XZb(16777215,1.5,1000);e7b(d._,0,0,600);xQb(this.H,d);f=new d$b(1);e7b(f._,0.05,0.05,1);xQb(this.H,f);f._.mf(700);f.S=true;f.t=true;f.I=2048;f.G=2048;f.A=200;f.w=1500;f.d=40;f.u=-0.005;f.D=0.15;a=new EZb(16777215,0.85);e7b(a._,1,-0.5,1);l4b(a.L,0.6,1,0.85);xQb(this.H,a);a._.mf(500);a.S=true;a.I=2048;a.G=2048;a.A=200;a.w=1500;a.e=-500;a.f=500;a.g=500;a.d=-500;a.u=-0.005;a.D=0.15;b=new EZb(16777215,0.85);e7b(b._,1,-0.5,-1);xQb(this.H,b);new RKc(new bvc);c=new RKc(new $Lc);c.a=true;g=new xPb(512,512);POb(g,(AFb(),uFb));NOb(g,(pFb(),nFb));KOb(g,(lDb(),jDb));g.f=false;this.b=new GKc(this.G.k,g);new _Ac(UXc,new mlc(this));mIb(this.G.k,new p4b(5001561),1);e=new fHb(this.G.k,this.H);e.g=false;iIb(this.G.k,false);this.G.k.ab=true;this.G.k.bb=true};_.ob=function klc(a){var b,c;b=this.d*0.001;c=this.e*0.001;if(this.c){v4b(this.c.cb,0.05*(b-this.c.cb.d));u4b(this.c.cb,0.05*(c-this.c.cb.c))}JHb(this.G.k,true);aIb(this.G.k,this.H,this.a,null,false)};_.d=0;_.e=0;KU(1123,1,{},mlc);_.zf=function nlc(a,b){hlc(this.a,ru(b,243))};KU(1255,733,eSc,bvc);_.Ld=function cvc(){};var dvc;KU(1256,1,{},ivc);_.Od=function jvc(){return rvc(),gvc};_.Pd=function kvc(){return svc(),hvc};var gvc,hvc;KU(1257,1,{},mvc);_.nc=function nvc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};KU(1258,1,{},pvc);_.nc=function qvc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};KU(1353,733,eSc,yzc);_.Ld=function zzc(){IJb(this,yOb());IJb(this,zOb());IJb(this,AOb());BJb(this,WXc,new bOb((uOb(),jOb),alb(0)));BJb(this,XXc,new bOb(jOb,alb(0)));BJb(this,ZXc,new aOb(mOb));BJb(this,YXc,new aOb(mOb));BJb(this,bYc,new bOb(fOb,new p4b(15658734)));BJb(this,cYc,new bOb(fOb,new p4b(1118481)));BJb(this,aYc,new bOb(fOb,new p4b(328965)));BJb(this,hYc,new bOb(gOb,new ukb(1)));BJb(this,dYc,new bOb(gOb,new ukb(0.15)));BJb(this,eYc,new bOb(gOb,new ukb(0.75)));BJb(this,$Xc,new aOb(mOb));BJb(this,fYc,new bOb(gOb,new ukb(1)));BJb(this,_Xc,new aOb(mOb));BJb(this,gYc,new bOb(sOb,new Y7b(0,0,1,1)));BJb(this,'uWrapRGB',new bOb(qOb,new k7b(0.75,0.375,0.1875)))};_.Md=function Azc(a){var b,c;c=new Frb(hu(FS,NQc,1,[iYc,jYc,kYc]));b=new Frb(hu(FS,NQc,1,[lYc,mYc,nYc]));KJb(this,SJb(a,hu(IS,NQc,173,[c,b])))};_.Nd=function Bzc(a){var b,c;c=new Frb(hu(FS,NQc,1,[oYc]));b=new Frb(hu(FS,NQc,1,[pYc]));LJb(this,SJb(a,hu(IS,NQc,173,[c,b])))};var Czc;KU(1354,1,{},Hzc);_.Od=function Izc(){return Qzc(),Fzc};_.Pd=function Jzc(){return Rzc(),Gzc};var Fzc,Gzc;KU(1355,1,{},Lzc);_.nc=function Mzc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};KU(1356,1,{},Ozc);_.nc=function Pzc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var iM=ikb(kXc,'MaterialsBumpmapSkin$DemoScene',1122),hM=ikb(kXc,'MaterialsBumpmapSkin$DemoScene$1',1123),CO=ikb(dXc,'BeckmannShader',1255),BO=ikb(dXc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1256),zO=ikb(dXc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1257),AO=ikb(dXc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1258),bP=ikb(dXc,'SkinSimpleShader',1353),aP=ikb(dXc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1354),$O=ikb(dXc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1355),_O=ikb(dXc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1356);FSc(xi)(18);