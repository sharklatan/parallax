function Ysc(){}
function atc(){}
function dtc(){}
function Fvc(){}
function Jvc(){}
function Mvc(){}
function Rjc(a){this.b=a}
function ftc(){ftc=lKc;Wsc=new atc}
function gtc(){gtc=lKc;Xsc=new dtc}
function Usc(){Usc=lKc;Tsc=new Ysc}
function Bvc(){Bvc=lKc;Avc=new Fvc}
function Ovc(){Ovc=lKc;Dvc=new Jvc}
function Pvc(){Pvc=lKc;Evc=new Mvc}
function wvc(){HIb.call(this,(Bvc(),Avc))}
function Rsc(){HIb.call(this,(Usc(),Tsc))}
function Njc(){O9b.call(this);this.e=0;this.f=0}
function Mjc(a,b){var c,d,e,f,g,i;d=new WNb(CRc);d.n=4;q5b(d.C,0.998,0.998);q5b(d.B,0.001,0.001);QNb(d,(NFb(),MFb));RNb(d,MFb);ENb(d,(GCb(),ECb));e=new WNb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');q5b(e.C,0.998,0.998);q5b(e.B,0.001,0.001);QNb(e,MFb);RNb(e,MFb);ENb(e,ECb);c=new WNb('./static/models/obj/leeperrysmith/Map-COL.jpg');q5b(c.C,0.998,0.998);q5b(c.B,0.001,0.001);QNb(c,MFb);RNb(c,MFb);ENb(c,ECb);g=new wvc;i=g.j;VMb(Eu(i.b[ERc],225),(Vib(),Vib(),Uib));VMb(Eu(i.b[FRc],225),Uib);VMb(Eu(i.b[GRc],225),a.c.f);VMb(Eu(i.b[HRc],225),c);VMb(Eu(i.b[IRc],225),d);VMb(Eu(i.b[JRc],225),e);k3b(Eu(Eu(i.b[KRc],225).e,293),10526880);k3b(Eu(Eu(i.b[LRc],225).e,293),10526880);k3b(Eu(Eu(i.b[MRc],225).e,293),10526880);VMb(Eu(i.b[NRc],225),new Ujb(0.145));VMb(Eu(i.b[ORc],225),new Ujb(0.75));VMb(Eu(i.b[PRc],225),new Ujb(16));S6b(Eu(Eu(i.b[QRc],225).e,301),0.001,0.001,0.998,0.998);f=new z2b(g);f.d=true;a.d=new G7b(b,f);s5b(a.d.ab,-50);b6b(a.d.fb,100);wPb(a.d,true);a.d.V=true;rPb(a.I,a.d)}
var ERc='enableBump',GRc='tBeckmann',NRc='uRoughness',ORc='uSpecularBrightness';mU(1114,1,YLc);_.Db=function Kjc(){o9b(this.c,new Njc(this.b))};mU(1115,967,{323:1},Njc);_.ob=function Ojc(){var a,b,c,d,e,f,g;this.b=new uQb(27,KGb(this.H.n),1,10000);e6b(this.b.ab,1200);rPb(this.I,new _Xb(5592405));d=new VYb(16777215,1.5,1000);c6b(d.ab,0,0,600);rPb(this.I,d);f=new bZb(1);c6b(f.ab,0.05,0.05,1);rPb(this.I,f);f.ab.rf(700);f.T=true;f.u=true;f.J=2048;f.H=2048;f.B=200;f.A=1500;f.e=40;f.v=-0.005;f.F=0.15;a=new CYb(16777215,0.85);c6b(a.ab,1,-0.5,1);j3b(a.M,0.6,1,0.85);rPb(this.I,a);a.ab.rf(500);a.T=true;a.J=2048;a.H=2048;a.B=200;a.A=1500;a.f=-500;a.g=500;a.i=500;a.e=-500;a.v=-0.005;a.F=0.15;b=new CYb(16777215,0.85);c6b(b.ab,1,-0.5,-1);rPb(this.I,b);new DGc(new Rsc);c=new DGc(new qHc);c.b=true;g=new rOb(512,512);JNb(g,(vEb(),pEb));HNb(g,(kEb(),iEb));ENb(g,(GCb(),ECb));g.g=false;this.c=new tGc(this.H.n,g);new Zwc(DRc,new Rjc(this));gHb(this.H.n,new n3b(5001561),1);e=new _Fb(this.H.n,this.I);e.i=false;cHb(this.H.n,false);this.H.n.bb=true;this.H.n.cb=true};_.pb=function Pjc(a){var b,c;b=this.e*0.001;c=this.f*0.001;if(this.d){t3b(this.d.db,0.05*(b-this.d.db.e));s3b(this.d.db,0.05*(c-this.d.db.d))}DGb(this.H.n,true);WGb(this.H.n,this.I,this.b,null,false)};_.e=0;_.f=0;mU(1116,1,{},Rjc);_.Df=function Sjc(a,b){Mjc(this.b,Eu(b,242))};mU(1244,725,LLc,Rsc);_.Od=function Ssc(){};var Tsc;mU(1245,1,{},Ysc);_.Rd=function Zsc(){return ftc(),Wsc};_.Sd=function $sc(){return gtc(),Xsc};var Wsc,Xsc;mU(1246,1,{},atc);_.qc=function btc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};mU(1247,1,{},dtc);_.qc=function etc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};mU(1293,725,LLc,wvc);_.Od=function xvc(){CIb(this,sNb());CIb(this,tNb());CIb(this,uNb());vIb(this,ERc,new XMb((oNb(),dNb),Akb(0)));vIb(this,FRc,new XMb(dNb,Akb(0)));vIb(this,HRc,new WMb(gNb));vIb(this,GRc,new WMb(gNb));vIb(this,LRc,new XMb(_Mb,new n3b(15658734)));vIb(this,MRc,new XMb(_Mb,new n3b(1118481)));vIb(this,KRc,new XMb(_Mb,new n3b(328965)));vIb(this,RRc,new XMb(aNb,new Ujb(1)));vIb(this,NRc,new XMb(aNb,new Ujb(0.15)));vIb(this,ORc,new XMb(aNb,new Ujb(0.75)));vIb(this,IRc,new WMb(gNb));vIb(this,PRc,new XMb(aNb,new Ujb(1)));vIb(this,JRc,new WMb(gNb));vIb(this,QRc,new XMb(mNb,new W6b(0,0,1,1)));vIb(this,'uWrapRGB',new XMb(kNb,new i6b(0.75,0.375,0.1875)))};_.Pd=function yvc(a){var b,c;c=new erb(uu(jS,rKc,1,[SRc,TRc,URc]));b=new erb(uu(jS,rKc,1,[VRc,WRc,XRc]));EIb(this,MIb(a,uu(mS,rKc,173,[c,b])))};_.Qd=function zvc(a){var b,c;c=new erb(uu(jS,rKc,1,[YRc]));b=new erb(uu(jS,rKc,1,[ZRc]));FIb(this,MIb(a,uu(mS,rKc,173,[c,b])))};var Avc;mU(1294,1,{},Fvc);_.Rd=function Gvc(){return Ovc(),Dvc};_.Sd=function Hvc(){return Pvc(),Evc};var Dvc,Evc;mU(1295,1,{},Jvc);_.qc=function Kvc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};mU(1296,1,{},Mvc);_.qc=function Nvc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var sM=Ijb(VQc,'MaterialsBumpmapSkin$DemoScene',1115),rM=Ijb(VQc,'MaterialsBumpmapSkin$DemoScene$1',1116),IO=Ijb(OQc,'BeckmannShader',1244),HO=Ijb(OQc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1245),FO=Ijb(OQc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1246),GO=Ijb(OQc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1247),hP=Ijb(OQc,'SkinSimpleShader',1293),gP=Ijb(OQc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1294),eP=Ijb(OQc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1295),fP=Ijb(OQc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1296);kMc(Hi)(18);