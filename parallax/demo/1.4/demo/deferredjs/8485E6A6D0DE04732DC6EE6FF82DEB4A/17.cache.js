function $lc(){}
function $oc(){}
function Woc(){}
function cmc(){}
function fmc(){}
function bpc(){}
function dpc(){dpc=izc;Uoc=new $oc}
function epc(){epc=izc;Voc=new bpc}
function Wlc(){Wlc=izc;Vlc=new $lc}
function hmc(){hmc=izc;Ylc=new cmc}
function imc(){imc=izc;Zlc=new fmc}
function Soc(){Soc=izc;Roc=new Woc}
function Gec(a,b){this.a=a;this.b=b}
function Cec(){i5b.call(this);this.d=0;this.e=0}
function Tlc(){nFb.call(this,(Wlc(),Vlc))}
function Noc(){nFb.call(this,(Soc(),Roc))}
function Bec(a,b){var c,d,e,f,g,i;d=new hKb(eGc);d.k=4;n1b(d.B,0.998,0.998);n1b(d.A,0.001,0.001);bKb(d,(wCb(),vCb));cKb(d,vCb);RJb(d,(pzb(),nzb));e=new hKb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');n1b(e.B,0.998,0.998);n1b(e.A,0.001,0.001);bKb(e,vCb);cKb(e,vCb);RJb(e,nzb);c=new hKb('./static/models/obj/leeperrysmith/Map-COL.jpg');n1b(c.B,0.998,0.998);n1b(c.A,0.001,0.001);bKb(c,vCb);cKb(c,vCb);RJb(c,nzb);g=new Noc;i=g.i;gJb(qu(i.a[hGc],174),(Vfb(),Vfb(),Ufb));gJb(qu(i.a[iGc],174),Ufb);gJb(qu(i.a[jGc],174),a.b.e);gJb(qu(i.a[kGc],174),c);gJb(qu(i.a[lGc],174),d);gJb(qu(i.a[mGc],174),e);g_b(qu(qu(i.a[nGc],174).d,241),10526880);g_b(qu(qu(i.a[oGc],174).d,241),10526880);g_b(qu(qu(i.a[pGc],174).d,241),10526880);gJb(qu(i.a[qGc],174),new Rgb(0.145));gJb(qu(i.a[rGc],174),new Rgb(0.75));gJb(qu(i.a[sGc],174),new Rgb(16));O2b(qu(qu(i.a[tGc],174).d,249),0.001,0.001,0.998,0.998);f=new u$b(g);f.c=true;a.c=new B3b(b,f);p1b(a.c._,-50);Z1b(a.c.eb,100);HLb(a.c,true);a.c.U=true;CLb(a.F,a.c)}
var hGc='enableBump',jGc='tBeckmann',qGc='uRoughness',rGc='uSpecularBrightness';TR(1077,1,OAc);_.yb=function zec(){f5b(this.b,new Cec(this.a))};TR(1078,944,{269:1},Cec);_.mb=function Dec(){var b,c,d,e,f,g,i,j;this.a=new BMb(27,zDb(this.D.n),1,10000);a2b(this.a._,1200);CLb(this.F,new _Tb(5592405));f=new UUb(16777215,1.5,1000);$1b(f._,0,0,600);CLb(this.F,f);i=new aVb(1);$1b(i._,0.05,0.05,1);CLb(this.F,i);i._.kf(700);i.S=true;i.t=true;i.I=2048;i.G=2048;i.A=200;i.w=1500;i.d=40;i.u=-0.005;i.D=0.15;b=new CUb(16777215,0.85);$1b(b._,1,-0.5,1);f_b(b.L,0.6,1,0.85);CLb(this.F,b);b._.kf(500);b.S=true;b.I=2048;b.G=2048;b.A=200;b.w=1500;b.e=-500;b.f=500;b.g=500;b.d=-500;b.u=-0.005;b.D=0.15;c=new CUb(16777215,0.85);$1b(c._,1,-0.5,-1);CLb(this.F,c);new hxc(new Tlc);d=new hxc(new Dxc);d.a=true;j=new EKb(512,512);WJb(j,(eBb(),$Ab));UJb(j,(VAb(),TAb));RJb(j,(pzb(),nzb));j.f=false;this.b=new Zwc(this.D.n,j);e=new Ppc;try{Epc(e,fGc,new Gec(this,e))}catch(a){a=YQ(a);if(tu(a,46)){qLb();_T(pLb,(jrb(),hrb),gGc)}else throw XQ(a)}WDb(this.D.n,new j_b(5001561),1);g=new QCb(this.D.n,this.F);g.g=false;this.D.n.Y=false;this.D.n.$=true;this.D.n._=true};_.nb=function Eec(a){var b,c;b=this.d*0.001;c=this.e*0.001;if(this.c){p_b(this.c.cb,0.05*(b-this.c.cb.d));o_b(this.c.cb,0.05*(c-this.c.cb.c))}uDb(this.D.n);LDb(this.D.n,this.F,this.a,null,false)};_.d=0;_.e=0;TR(1079,1,{},Gec);_.vf=function Hec(){Bec(this.a,this.b.a)};TR(1179,717,AAc,Tlc);_.Jd=function Ulc(){};var Vlc;TR(1180,1,{},$lc);_.Md=function _lc(){return hmc(),Ylc};_.Nd=function amc(){return imc(),Zlc};var Ylc,Zlc;TR(1181,1,{},cmc);_.bc=function dmc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};TR(1182,1,{},fmc);_.bc=function gmc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};TR(1246,717,AAc,Noc);_.Jd=function Ooc(){iFb(this,FJb());iFb(this,GJb());iFb(this,HJb());bFb(this,hGc,new iJb((BJb(),qJb),xhb(0)));bFb(this,iGc,new iJb(qJb,xhb(0)));bFb(this,kGc,new hJb(tJb));bFb(this,jGc,new hJb(tJb));bFb(this,oGc,new iJb(mJb,new j_b(15658734)));bFb(this,pGc,new iJb(mJb,new j_b(1118481)));bFb(this,nGc,new iJb(mJb,new j_b(328965)));bFb(this,uGc,new iJb(nJb,new Rgb(1)));bFb(this,qGc,new iJb(nJb,new Rgb(0.15)));bFb(this,rGc,new iJb(nJb,new Rgb(0.75)));bFb(this,lGc,new hJb(tJb));bFb(this,sGc,new iJb(nJb,new Rgb(1)));bFb(this,mGc,new hJb(tJb));bFb(this,tGc,new iJb(zJb,new S2b(0,0,1,1)));bFb(this,'uWrapRGB',new iJb(xJb,new e2b(0.75,0.375,0.1875)))};_.Kd=function Poc(a){var b,c;c=new _nb(gu(NP,nzc,1,[vGc,wGc,xGc]));b=new _nb(gu(NP,nzc,1,[yGc,zGc,AGc]));kFb(this,sFb(a,gu(QP,nzc,121,[c,b])))};_.Ld=function Qoc(a){var b,c;c=new _nb(gu(NP,nzc,1,[BGc]));b=new _nb(gu(NP,nzc,1,[CGc]));lFb(this,sFb(a,gu(QP,nzc,121,[c,b])))};var Roc;TR(1247,1,{},Woc);_.Md=function Xoc(){return dpc(),Uoc};_.Nd=function Yoc(){return epc(),Voc};var Uoc,Voc;TR(1248,1,{},$oc);_.bc=function _oc(){return '#define USE_BUMPMAP\n#extension GL_OES_standard_derivatives : enable\n\nuniform bool enableBump;\nuniform bool enableSpecular;\n\nuniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float opacity;\n\nuniform float uRoughness;\nuniform float uSpecularBrightness;\n\nuniform vec3 uWrapRGB;\n\nuniform sampler2D tDiffuse;\nuniform sampler2D tBeckmann;\n\nuniform sampler2D specularMap;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\nvarying vec3 vViewPosition;\n\n[*]\n\n\t\t\t// Fresnel term\n\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\n\n\tfloat base = 1.0 - dot( V, H );\n\tfloat exponential = pow( base, 5.0 );\n\n\treturn exponential + F0 * ( 1.0 - exponential );\n\n}\n\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\n\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\n\t\t\t\t\t\tfloat m,  \t// Roughness\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\n\t\t\t\t\t\t) {\n\n\tfloat result = 0.0;\n\tfloat ndotl = dot( N, L );\n\n\tif( ndotl > 0.0 ) {\n\n\t\tvec3 h = L + V; // Unnormalized half-way vector\n\t\tvec3 H = normalize( h );\n\n\t\tfloat ndoth = dot( N, H );\n\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\n\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\n\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\n\n\t}\n\n\treturn result;\n\n}\n\nvoid main() {\n\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\n\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\n\tcolDiffuse.rgb *= colDiffuse.rgb;\n\n\tgl_FragColor = gl_FragColor * colDiffuse;\n\n\tvec3 normal = normalize( vNormal );\n\tvec3 viewPosition = normalize( vViewPosition );\n\n\tfloat specularStrength;\n\n\tif ( enableSpecular ) {\n\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\t\tspecularStrength = texelSpecular.r;\n\n\t} else {\n\n\t\tspecularStrength = 1.0;\n\n\t}\n\n\t#ifdef USE_BUMPMAP\n\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n\t#endif\n\n\t\t\t\t// point lights\n\n\tvec3 specularTotal = vec3( 0.0 );\n\n\t#if MAX_POINT_LIGHTS > 0\n\n\t\tvec3 pointTotal = vec3( 0.0 );\n\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\t\tfloat lDistance = 1.0;\n\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\n\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t\t\t\t// directional lights\n\n\t#if MAX_DIR_LIGHTS > 0\n\n\t\tvec3 dirTotal = vec3( 0.0 );\n\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\n\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\n\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t\t\t\t// hemisphere lights\n\n\t#if MAX_HEMI_LIGHTS > 0\n\n\t\tvec3 hemiTotal = vec3( 0.0 );\n\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t\t\t\t\t// specular (sky light)\n\n\t\t\tfloat hemiSpecularWeight = 0.0;\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\t\t\t\t// specular (ground light)\n\n\t\t\tvec3 lVectorGround = -lVector;\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t\t\t\t// all lights contribution summation\n\n\tvec3 totalLight = vec3( 0.0 );\n\n\t#if MAX_DIR_LIGHTS > 0\n\t\ttotalLight += dirTotal;\n\t#endif\n\n\t#if MAX_POINT_LIGHTS > 0\n\t\ttotalLight += pointTotal;\n\t#endif\n\n\t#if MAX_HEMI_LIGHTS > 0\n\t\ttotalLight += hemiTotal;\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\n\n[*]\n\n}\n'};TR(1249,1,{},bpc);_.bc=function cpc(){return 'uniform vec4 offsetRepeat;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nvarying vec3 vViewPosition;\n\n[*]\n\nvoid main() {\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\tvViewPosition = -mvPosition.xyz;\n\n\tvNormal = normalize( normalMatrix * normal );\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n[*]\n\n}\n'};var xL=Fgb(wFc,'MaterialsBumpmapSkin$DemoScene',1078),wL=Fgb(wFc,'MaterialsBumpmapSkin$DemoScene$1',1079),pN=Fgb(pFc,'BeckmannShader',1179),oN=Fgb(pFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1180),mN=Fgb(pFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1181),nN=Fgb(pFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1182),EN=Fgb(pFc,'SkinSimpleShader',1246),DN=Fgb(pFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1247),BN=Fgb(pFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1248),CN=Fgb(pFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1249);$Ac(wi)(17);