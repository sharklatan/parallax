function Kmc(){}
function Omc(){}
function Rmc(){}
function Gpc(){}
function Kpc(){}
function Npc(){}
function Cpc(){Cpc=Uzc;Bpc=new Gpc}
function Ppc(){Ppc=Uzc;Epc=new Kpc}
function Qpc(){Qpc=Uzc;Fpc=new Npc}
function Gmc(){Gmc=Uzc;Fmc=new Kmc}
function Tmc(){Tmc=Uzc;Imc=new Omc}
function Umc(){Umc=Uzc;Jmc=new Rmc}
function qfc(a,b){this.b=a;this.c=b}
function mfc(){U5b.call(this);this.e=0;this.f=0}
function Dmc(){ZFb.call(this,(Gmc(),Fmc))}
function xpc(){ZFb.call(this,(Cpc(),Bpc))}
function lfc(a,b){var c,d,e,f,g,i;d=new TKb(_Gc);d.n=4;Z1b(d.C,0.998,0.998);Z1b(d.B,0.001,0.001);NKb(d,(gDb(),fDb));OKb(d,fDb);BKb(d,(_zb(),Zzb));e=new TKb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');Z1b(e.C,0.998,0.998);Z1b(e.B,0.001,0.001);NKb(e,fDb);OKb(e,fDb);BKb(e,Zzb);c=new TKb('./static/models/obj/leeperrysmith/Map-COL.jpg');Z1b(c.C,0.998,0.998);Z1b(c.B,0.001,0.001);NKb(c,fDb);OKb(c,fDb);BKb(c,Zzb);g=new xpc;i=g.j;SJb(Xu(i.b[cHc],174),(Egb(),Egb(),Dgb));SJb(Xu(i.b[dHc],174),Dgb);SJb(Xu(i.b[eHc],174),a.c.f);SJb(Xu(i.b[fHc],174),c);SJb(Xu(i.b[gHc],174),d);SJb(Xu(i.b[hHc],174),e);S_b(Xu(Xu(i.b[iHc],174).e,241),10526880);S_b(Xu(Xu(i.b[jHc],174).e,241),10526880);S_b(Xu(Xu(i.b[kHc],174).e,241),10526880);SJb(Xu(i.b[lHc],174),new Ahb(0.145));SJb(Xu(i.b[mHc],174),new Ahb(0.75));SJb(Xu(i.b[nHc],174),new Ahb(16));y3b(Xu(Xu(i.b[oHc],174).e,249),0.001,0.001,0.998,0.998);f=new e_b(g);f.d=true;a.d=new l4b(b,f);_1b(a.d.ab,-50);J2b(a.d.fb,100);rMb(a.d,true);a.d.V=true;mMb(a.G,a.d)}
var cHc='enableBump',eHc='tBeckmann',lHc='uRoughness',mHc='uSpecularBrightness';ES(1079,1,zBc);_.Cb=function jfc(){R5b(this.c,new mfc(this.b))};ES(1080,946,{269:1},mfc);_.nb=function nfc(){var b,c,d,e,f,g,i,j;this.b=new lNb(27,jEb(this.F.o),1,10000);M2b(this.b.ab,1200);mMb(this.G,new LUb(5592405));f=new EVb(16777215,1.5,1000);K2b(f.ab,0,0,600);mMb(this.G,f);i=new MVb(1);K2b(i.ab,0.05,0.05,1);mMb(this.G,i);i.ab.rf(700);i.T=true;i.u=true;i.J=2048;i.H=2048;i.B=200;i.A=1500;i.e=40;i.v=-0.005;i.F=0.15;b=new mVb(16777215,0.85);K2b(b.ab,1,-0.5,1);R_b(b.M,0.6,1,0.85);mMb(this.G,b);b.ab.rf(500);b.T=true;b.J=2048;b.H=2048;b.B=200;b.A=1500;b.f=-500;b.g=500;b.i=500;b.e=-500;b.v=-0.005;b.F=0.15;c=new mVb(16777215,0.85);K2b(c.ab,1,-0.5,-1);mMb(this.G,c);new Txc(new Dmc);d=new Txc(new nyc);d.b=true;j=new oLb(512,512);GKb(j,(QBb(),KBb));EKb(j,(FBb(),DBb));BKb(j,(_zb(),Zzb));j.g=false;this.c=new Jxc(this.F.o,j);e=new zqc;try{oqc(e,aHc,new qfc(this,e))}catch(a){a=JR(a);if($u(a,46)){aMb();HU(_Lb,(Vrb(),Trb),bHc)}else throw IR(a)}GEb(this.F.o,new V_b(5001561),1);g=new ADb(this.F.o,this.G);g.i=false;this.F.o.Z=false;this.F.o._=true;this.F.o.ab=true};_.ob=function ofc(a){var b,c;b=this.e*0.001;c=this.f*0.001;if(this.d){__b(this.d.db,0.05*(b-this.d.db.e));$_b(this.d.db,0.05*(c-this.d.db.d))}eEb(this.F.o);vEb(this.F.o,this.G,this.b,null,false)};_.e=0;_.f=0;ES(1081,1,{},qfc);_.Cf=function rfc(){lfc(this.b,this.c.b)};ES(1181,719,lBc,Dmc);_.Qd=function Emc(){};var Fmc;ES(1182,1,{},Kmc);_.Td=function Lmc(){return Tmc(),Imc};_.Ud=function Mmc(){return Umc(),Jmc};var Imc,Jmc;ES(1183,1,{},Omc);_.ic=function Pmc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};ES(1184,1,{},Rmc);_.ic=function Smc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};ES(1248,719,lBc,xpc);_.Qd=function ypc(){UFb(this,pKb());UFb(this,qKb());UFb(this,rKb());NFb(this,cHc,new UJb((lKb(),aKb),gib(0)));NFb(this,dHc,new UJb(aKb,gib(0)));NFb(this,fHc,new TJb(dKb));NFb(this,eHc,new TJb(dKb));NFb(this,jHc,new UJb(YJb,new V_b(15658734)));NFb(this,kHc,new UJb(YJb,new V_b(1118481)));NFb(this,iHc,new UJb(YJb,new V_b(328965)));NFb(this,pHc,new UJb(ZJb,new Ahb(1)));NFb(this,lHc,new UJb(ZJb,new Ahb(0.15)));NFb(this,mHc,new UJb(ZJb,new Ahb(0.75)));NFb(this,gHc,new TJb(dKb));NFb(this,nHc,new UJb(ZJb,new Ahb(1)));NFb(this,hHc,new TJb(dKb));NFb(this,oHc,new UJb(jKb,new C3b(0,0,1,1)));NFb(this,'uWrapRGB',new UJb(hKb,new Q2b(0.75,0.375,0.1875)))};_.Rd=function zpc(a){var b,c;c=new Lob(Nu(yQ,$zc,1,[qHc,rHc,sHc]));b=new Lob(Nu(yQ,$zc,1,[tHc,uHc,vHc]));WFb(this,cGb(a,Nu(BQ,$zc,121,[c,b])))};_.Sd=function Apc(a){var b,c;c=new Lob(Nu(yQ,$zc,1,[wHc]));b=new Lob(Nu(yQ,$zc,1,[xHc]));XFb(this,cGb(a,Nu(BQ,$zc,121,[c,b])))};var Bpc;ES(1249,1,{},Gpc);_.Td=function Hpc(){return Ppc(),Epc};_.Ud=function Ipc(){return Qpc(),Fpc};var Epc,Fpc;ES(1250,1,{},Kpc);_.ic=function Lpc(){return '#define USE_BUMPMAP\n#extension GL_OES_standard_derivatives : enable\n\nuniform bool enableBump;\nuniform bool enableSpecular;\n\nuniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float opacity;\n\nuniform float uRoughness;\nuniform float uSpecularBrightness;\n\nuniform vec3 uWrapRGB;\n\nuniform sampler2D tDiffuse;\nuniform sampler2D tBeckmann;\n\nuniform sampler2D specularMap;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\nvarying vec3 vViewPosition;\n\n[*]\n\n\t\t\t// Fresnel term\n\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\n\n\tfloat base = 1.0 - dot( V, H );\n\tfloat exponential = pow( base, 5.0 );\n\n\treturn exponential + F0 * ( 1.0 - exponential );\n\n}\n\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\n\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\n\t\t\t\t\t\tfloat m,  \t// Roughness\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\n\t\t\t\t\t\t) {\n\n\tfloat result = 0.0;\n\tfloat ndotl = dot( N, L );\n\n\tif( ndotl > 0.0 ) {\n\n\t\tvec3 h = L + V; // Unnormalized half-way vector\n\t\tvec3 H = normalize( h );\n\n\t\tfloat ndoth = dot( N, H );\n\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\n\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\n\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\n\n\t}\n\n\treturn result;\n\n}\n\nvoid main() {\n\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\n\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\n\tcolDiffuse.rgb *= colDiffuse.rgb;\n\n\tgl_FragColor = gl_FragColor * colDiffuse;\n\n\tvec3 normal = normalize( vNormal );\n\tvec3 viewPosition = normalize( vViewPosition );\n\n\tfloat specularStrength;\n\n\tif ( enableSpecular ) {\n\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\t\tspecularStrength = texelSpecular.r;\n\n\t} else {\n\n\t\tspecularStrength = 1.0;\n\n\t}\n\n\t#ifdef USE_BUMPMAP\n\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n\t#endif\n\n\t\t\t\t// point lights\n\n\tvec3 specularTotal = vec3( 0.0 );\n\n\t#if MAX_POINT_LIGHTS > 0\n\n\t\tvec3 pointTotal = vec3( 0.0 );\n\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\t\tfloat lDistance = 1.0;\n\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\n\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t\t\t\t// directional lights\n\n\t#if MAX_DIR_LIGHTS > 0\n\n\t\tvec3 dirTotal = vec3( 0.0 );\n\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\n\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\n\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t\t\t\t// hemisphere lights\n\n\t#if MAX_HEMI_LIGHTS > 0\n\n\t\tvec3 hemiTotal = vec3( 0.0 );\n\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t\t\t\t\t// specular (sky light)\n\n\t\t\tfloat hemiSpecularWeight = 0.0;\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\t\t\t\t// specular (ground light)\n\n\t\t\tvec3 lVectorGround = -lVector;\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t\t\t\t// all lights contribution summation\n\n\tvec3 totalLight = vec3( 0.0 );\n\n\t#if MAX_DIR_LIGHTS > 0\n\t\ttotalLight += dirTotal;\n\t#endif\n\n\t#if MAX_POINT_LIGHTS > 0\n\t\ttotalLight += pointTotal;\n\t#endif\n\n\t#if MAX_HEMI_LIGHTS > 0\n\t\ttotalLight += hemiTotal;\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\n\n[*]\n\n}\n'};ES(1251,1,{},Npc);_.ic=function Opc(){return 'uniform vec4 offsetRepeat;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nvarying vec3 vViewPosition;\n\n[*]\n\nvoid main() {\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\tvViewPosition = -mvPosition.xyz;\n\n\tvNormal = normalize( normalMatrix * normal );\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n[*]\n\n}\n'};var iM=ohb(rGc,'MaterialsBumpmapSkin$DemoScene',1080),hM=ohb(rGc,'MaterialsBumpmapSkin$DemoScene$1',1081),aO=ohb(kGc,'BeckmannShader',1181),_N=ohb(kGc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1182),ZN=ohb(kGc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1183),$N=ohb(kGc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1184),pO=ohb(kGc,'SkinSimpleShader',1248),oO=ohb(kGc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1249),mO=ohb(kGc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1250),nO=ohb(kGc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1251);LBc(Hi)(17);