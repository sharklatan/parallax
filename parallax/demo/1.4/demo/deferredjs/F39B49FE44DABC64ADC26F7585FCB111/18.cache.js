function Nlc(){}
function Rlc(){}
function Ulc(){}
function Joc(){}
function Noc(){}
function Qoc(){}
function Foc(){Foc=Xyc;Eoc=new Joc}
function Soc(){Soc=Xyc;Hoc=new Noc}
function Toc(){Toc=Xyc;Ioc=new Qoc}
function Jlc(){Jlc=Xyc;Ilc=new Nlc}
function Wlc(){Wlc=Xyc;Llc=new Rlc}
function Xlc(){Xlc=Xyc;Mlc=new Ulc}
function Yec(a,b){this.a=a;this.b=b}
function Uec(){k5b.call(this);this.d=0;this.e=0}
function Glc(){vFb.call(this,(Jlc(),Ilc))}
function Aoc(){vFb.call(this,(Foc(),Eoc))}
function Tec(a,b){var c,d,e,f,g,i;d=new pKb(WFc);d.k=4;q1b(d.B,0.998,0.998);q1b(d.A,0.001,0.001);jKb(d,(FCb(),ECb));kKb(d,ECb);ZJb(d,(yzb(),wzb));e=new pKb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');q1b(e.B,0.998,0.998);q1b(e.A,0.001,0.001);jKb(e,ECb);kKb(e,ECb);ZJb(e,wzb);c=new pKb('./static/models/obj/leeperrysmith/Map-COL.jpg');q1b(c.B,0.998,0.998);q1b(c.A,0.001,0.001);jKb(c,ECb);kKb(c,ECb);ZJb(c,wzb);g=new Aoc;i=g.i;oJb(tu(i.a[ZFc],174),(cgb(),cgb(),bgb));oJb(tu(i.a[$Fc],174),bgb);oJb(tu(i.a[_Fc],174),a.b.e);oJb(tu(i.a[aGc],174),c);oJb(tu(i.a[bGc],174),d);oJb(tu(i.a[cGc],174),e);k_b(tu(tu(i.a[dGc],174).d,240),10526880);k_b(tu(tu(i.a[eGc],174).d,240),10526880);k_b(tu(tu(i.a[fGc],174).d,240),10526880);oJb(tu(i.a[gGc],174),new $gb(0.145));oJb(tu(i.a[hGc],174),new $gb(0.75));oJb(tu(i.a[iGc],174),new $gb(16));R2b(tu(tu(i.a[jGc],174).d,248),0.001,0.001,0.998,0.998);f=new y$b(g);f.c=true;a.c=new E3b(b,f);s1b(a.c._,-50);a2b(a.c.eb,100);PLb(a.c,true);a.c.U=true;KLb(a.F,a.c)}
var ZFc='enableBump',_Fc='tBeckmann',gGc='uRoughness',hGc='uSpecularBrightness';UR(1082,1,BAc);_.yb=function Rec(){h5b(this.b,new Uec(this.a))};UR(1083,946,{268:1},Uec);_.mb=function Vec(){var b,c,d,e,f,g,i,j;this.a=new JMb(27,HDb(this.D.n),1,10000);d2b(this.a._,1200);KLb(this.F,new jUb(5592405));f=new cVb(16777215,1.5,1000);b2b(f._,0,0,600);KLb(this.F,f);i=new kVb(1);b2b(i._,0.05,0.05,1);KLb(this.F,i);i._.kf(700);i.S=true;i.t=true;i.I=2048;i.G=2048;i.A=200;i.w=1500;i.d=40;i.u=-0.005;i.D=0.15;b=new MUb(16777215,0.85);b2b(b._,1,-0.5,1);j_b(b.L,0.6,1,0.85);KLb(this.F,b);b._.kf(500);b.S=true;b.I=2048;b.G=2048;b.A=200;b.w=1500;b.e=-500;b.f=500;b.g=500;b.d=-500;b.u=-0.005;b.D=0.15;c=new MUb(16777215,0.85);b2b(c._,1,-0.5,-1);KLb(this.F,c);new Wwc(new Glc);d=new Wwc(new qxc);d.a=true;j=new MKb(512,512);cKb(j,(nBb(),hBb));aKb(j,(cBb(),aBb));ZJb(j,(yzb(),wzb));j.f=false;this.b=new Mwc(this.D.n,j);e=new Cpc;try{rpc(e,XFc,new Yec(this,e))}catch(a){a=ZQ(a);if(wu(a,46)){yLb();aU(xLb,(srb(),qrb),YFc)}else throw YQ(a)}cEb(this.D.n,new n_b(5001561),1);g=new ZCb(this.D.n,this.F);g.g=false;this.D.n.Y=false;this.D.n.$=true;this.D.n._=true};_.nb=function Wec(a){var b,c;b=this.d*0.001;c=this.e*0.001;if(this.c){t_b(this.c.cb,0.05*(b-this.c.cb.d));s_b(this.c.cb,0.05*(c-this.c.cb.c))}CDb(this.D.n);TDb(this.D.n,this.F,this.a,null,false)};_.d=0;_.e=0;UR(1084,1,{},Yec);_.vf=function Zec(){Tec(this.a,this.b.a)};UR(1175,719,nAc,Glc);_.Jd=function Hlc(){};var Ilc;UR(1176,1,{},Nlc);_.Md=function Olc(){return Wlc(),Llc};_.Nd=function Plc(){return Xlc(),Mlc};var Llc,Mlc;UR(1177,1,{},Rlc);_.bc=function Slc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};UR(1178,1,{},Ulc);_.bc=function Vlc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};UR(1242,719,nAc,Aoc);_.Jd=function Boc(){qFb(this,NJb());qFb(this,OJb());qFb(this,PJb());jFb(this,ZFc,new qJb((JJb(),yJb),Ghb(0)));jFb(this,$Fc,new qJb(yJb,Ghb(0)));jFb(this,aGc,new pJb(BJb));jFb(this,_Fc,new pJb(BJb));jFb(this,eGc,new qJb(uJb,new n_b(15658734)));jFb(this,fGc,new qJb(uJb,new n_b(1118481)));jFb(this,dGc,new qJb(uJb,new n_b(328965)));jFb(this,kGc,new qJb(vJb,new $gb(1)));jFb(this,gGc,new qJb(vJb,new $gb(0.15)));jFb(this,hGc,new qJb(vJb,new $gb(0.75)));jFb(this,bGc,new pJb(BJb));jFb(this,iGc,new qJb(vJb,new $gb(1)));jFb(this,cGc,new pJb(BJb));jFb(this,jGc,new qJb(HJb,new V2b(0,0,1,1)));jFb(this,'uWrapRGB',new qJb(FJb,new h2b(0.75,0.375,0.1875)))};_.Kd=function Coc(a){var b,c;c=new iob(ju(OP,azc,1,[lGc,mGc,nGc]));b=new iob(ju(OP,azc,1,[oGc,pGc,qGc]));sFb(this,AFb(a,ju(RP,azc,121,[c,b])))};_.Ld=function Doc(a){var b,c;c=new iob(ju(OP,azc,1,[rGc]));b=new iob(ju(OP,azc,1,[sGc]));tFb(this,AFb(a,ju(RP,azc,121,[c,b])))};var Eoc;UR(1243,1,{},Joc);_.Md=function Koc(){return Soc(),Hoc};_.Nd=function Loc(){return Toc(),Ioc};var Hoc,Ioc;UR(1244,1,{},Noc);_.bc=function Ooc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};UR(1245,1,{},Qoc);_.bc=function Roc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var FL=Ogb(mFc,'MaterialsBumpmapSkin$DemoScene',1083),EL=Ogb(mFc,'MaterialsBumpmapSkin$DemoScene$1',1084),qN=Ogb(fFc,'BeckmannShader',1175),pN=Ogb(fFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1176),nN=Ogb(fFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1177),oN=Ogb(fFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1178),FN=Ogb(fFc,'SkinSimpleShader',1242),EN=Ogb(fFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1243),CN=Ogb(fFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1244),DN=Ogb(fFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1245);NAc(xi)(18);