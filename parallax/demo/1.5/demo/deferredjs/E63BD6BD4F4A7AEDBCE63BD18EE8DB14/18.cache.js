function Fpc(){}
function Jpc(){}
function Mpc(){}
function Usc(){}
function Ysc(){}
function _sc(){}
function Jhc(a){this.a=a}
function btc(){btc=_Ec;Ssc=new Ysc}
function ctc(){ctc=_Ec;Tsc=new _sc}
function Qsc(){Qsc=_Ec;Psc=new Usc}
function Bpc(){Bpc=_Ec;Apc=new Fpc}
function Opc(){Opc=_Ec;Dpc=new Jpc}
function Ppc(){Ppc=_Ec;Epc=new Mpc}
function ypc(){bHb.call(this,(Bpc(),Apc))}
function Lsc(){bHb.call(this,(Qsc(),Psc))}
function Fhc(){n7b.call(this);this.d=0;this.e=0}
function Ehc(a,b){var c,d,e,f,g,i;d=new XLb(qMc);d.k=4;V2b(d.B,0.998,0.998);V2b(d.A,0.001,0.001);RLb(d,(iEb(),hEb));SLb(d,hEb);FLb(d,(bBb(),_Ab));e=new XLb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');V2b(e.B,0.998,0.998);V2b(e.A,0.001,0.001);RLb(e,hEb);SLb(e,hEb);FLb(e,_Ab);c=new XLb('./static/models/obj/leeperrysmith/Map-COL.jpg');V2b(c.B,0.998,0.998);V2b(c.A,0.001,0.001);RLb(c,hEb);SLb(c,hEb);FLb(c,_Ab);g=new Lsc;i=g.i;WKb(Au(i.a[sMc],225),(uhb(),uhb(),thb));WKb(Au(i.a[tMc],225),thb);WKb(Au(i.a[uMc],225),a.b.e);WKb(Au(i.a[vMc],225),c);WKb(Au(i.a[wMc],225),d);WKb(Au(i.a[xMc],225),e);P0b(Au(Au(i.a[yMc],225).d,292),10526880);P0b(Au(Au(i.a[zMc],225).d,292),10526880);P0b(Au(Au(i.a[AMc],225).d,292),10526880);WKb(Au(i.a[BMc],225),new tib(0.145));WKb(Au(i.a[CMc],225),new tib(0.75));WKb(Au(i.a[DMc],225),new tib(16));u4b(Au(Au(i.a[EMc],225).d,300),0.001,0.001,0.998,0.998);f=new c0b(g);f.c=true;a.c=new i5b(b,f);X2b(a.c._,-50);F3b(a.c.eb,100);xNb(a.c,true);a.c.U=true;sNb(a.F,a.c)}
var sMc='enableBump',uMc='tBeckmann',BMc='uRoughness',CMc='uSpecularBrightness';YS(1103,1,JGc);_.zb=function Chc(){P6b(this.b,new Fhc(this.a))};YS(1104,958,{322:1},Fhc);_.nb=function Ghc(){var a,b,c,d,e,f,g;this.a=new sOb(27,eFb(this.D.k),1,10000);I3b(this.a._,1200);sNb(this.F,new TVb(5592405));d=new MWb(16777215,1.5,1000);G3b(d._,0,0,600);sNb(this.F,d);f=new UWb(1);G3b(f._,0.05,0.05,1);sNb(this.F,f);f._.hf(700);f.S=true;f.t=true;f.I=2048;f.G=2048;f.A=200;f.w=1500;f.d=40;f.u=-0.005;f.D=0.15;a=new uWb(16777215,0.85);G3b(a._,1,-0.5,1);O0b(a.L,0.6,1,0.85);sNb(this.F,a);a._.hf(500);a.S=true;a.I=2048;a.G=2048;a.A=200;a.w=1500;a.e=-500;a.f=500;a.g=500;a.d=-500;a.u=-0.005;a.D=0.15;b=new uWb(16777215,0.85);G3b(b._,1,-0.5,-1);sNb(this.F,b);new eDc(new ypc);c=new eDc(new ADc);c.a=true;g=new sMb(512,512);KLb(g,(SCb(),MCb));ILb(g,(HCb(),FCb));FLb(g,(bBb(),_Ab));g.f=false;this.b=new WCc(this.D.k,g);new Ttc(rMc,new Jhc(this));CFb(this.D.k,new S0b(5001561),1);e=new wEb(this.D.k,this.F);e.g=false;yFb(this.D.k,false);this.D.k.ab=true;this.D.k.bb=true};_.ob=function Hhc(a){var b,c;b=this.d*0.001;c=this.e*0.001;if(this.c){Y0b(this.c.cb,0.05*(b-this.c.cb.d));X0b(this.c.cb,0.05*(c-this.c.cb.c))}$Eb(this.D.k);qFb(this.D.k,this.F,this.a,null,false)};_.d=0;_.e=0;YS(1105,1,{},Jhc);_.vf=function Khc(a,b){Ehc(this.a,Au(b,241))};YS(1211,723,wGc,ypc);_.Jd=function zpc(){};var Apc;YS(1212,1,{},Fpc);_.Md=function Gpc(){return Opc(),Dpc};_.Nd=function Hpc(){return Ppc(),Epc};var Dpc,Epc;YS(1213,1,{},Jpc);_.ac=function Kpc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};YS(1214,1,{},Mpc);_.ac=function Npc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};YS(1287,723,wGc,Lsc);_.Jd=function Msc(){YGb(this,tLb());YGb(this,uLb());YGb(this,vLb());RGb(this,sMc,new YKb((pLb(),eLb),_ib(0)));RGb(this,tMc,new YKb(eLb,_ib(0)));RGb(this,vMc,new XKb(hLb));RGb(this,uMc,new XKb(hLb));RGb(this,zMc,new YKb(aLb,new S0b(15658734)));RGb(this,AMc,new YKb(aLb,new S0b(1118481)));RGb(this,yMc,new YKb(aLb,new S0b(328965)));RGb(this,FMc,new YKb(bLb,new tib(1)));RGb(this,BMc,new YKb(bLb,new tib(0.15)));RGb(this,CMc,new YKb(bLb,new tib(0.75)));RGb(this,wMc,new XKb(hLb));RGb(this,DMc,new YKb(bLb,new tib(1)));RGb(this,xMc,new XKb(hLb));RGb(this,EMc,new YKb(nLb,new y4b(0,0,1,1)));RGb(this,'uWrapRGB',new YKb(lLb,new M3b(0.75,0.375,0.1875)))};_.Kd=function Nsc(a){var b,c;c=new Epb(qu(VQ,eFc,1,[GMc,HMc,IMc]));b=new Epb(qu(VQ,eFc,1,[JMc,KMc,LMc]));$Gb(this,gHb(a,qu(YQ,eFc,173,[c,b])))};_.Ld=function Osc(a){var b,c;c=new Epb(qu(VQ,eFc,1,[MMc]));b=new Epb(qu(VQ,eFc,1,[NMc]));_Gb(this,gHb(a,qu(YQ,eFc,173,[c,b])))};var Psc;YS(1288,1,{},Usc);_.Md=function Vsc(){return btc(),Ssc};_.Nd=function Wsc(){return ctc(),Tsc};var Ssc,Tsc;YS(1289,1,{},Ysc);_.ac=function Zsc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};YS(1290,1,{},_sc);_.ac=function atc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var eM=hib(ILc,'MaterialsBumpmapSkin$DemoScene',1104),dM=hib(ILc,'MaterialsBumpmapSkin$DemoScene$1',1105),aO=hib(BLc,'BeckmannShader',1211),_N=hib(BLc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1212),ZN=hib(BLc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1213),$N=hib(BLc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1214),pO=hib(BLc,'SkinSimpleShader',1287),oO=hib(BLc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1288),mO=hib(BLc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1289),nO=hib(BLc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1290);WGc(xi)(18);