function Ojb(){}
function Xjb(){}
function Ujb(){}
function _jb(){}
function akb(){}
function ekb(){}
function dkb(){}
function Clb(){}
function Nlb(){}
function Klb(){}
function Slb(){}
function Rlb(){}
function Wlb(){}
function Vlb(){}
function jub(){}
function Avb(){}
function Fvb(){}
function Ivb(){}
function Zvb(){}
function bwb(){}
function PEb(){}
function $pb(a,b){a.r=b}
function REb(){Dyb.call(this)}
function Jvb(){tub.call(this,new Eub)}
function Pjb(){Pib.call(this,(Tjb(),Sjb))}
function Dlb(){Pib.call(this,(Jlb(),Ilb))}
function Bvb(a){tub.call(this,a);sub(this,a.a)}
function Gvb(){Eub.call(this);this.a=(ovb(),nvb)}
function Tjb(){Tjb=aIb;Sjb=new Xjb}
function hkb(){hkb=aIb;Vjb=new akb}
function ikb(){ikb=aIb;Wjb=new ekb}
function Jlb(){Jlb=aIb;Ilb=new Nlb}
function Zlb(){Zlb=aIb;Llb=new Slb}
function $lb(){$lb=aIb;Mlb=new Wlb}
function kub(){_tb.call(this,16777215);this.b=1;this.a=0;new Arb(0,0,0)}
function $vb(a){zub.call(this,a);this.a=a.a;this.b=a.c;this.d=a.f;this.c=a.e;this.j=null;this.g=a.b;sub(this,a.d)}
function cwb(){Gub.call(this);this.a=new lpb(328965);this.f=new lpb(1118481);this.c=new lpb(0);this.b=(Hnb(),Gnb);this.d=(ovb(),nvb)}
function QEb(){var a,b,c,d,e,f,g,i;a=ag($doc,p1b);a.width=256;a.height=256;b=a.getContext(q1b);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=Kp(Math.floor(g^i))}b.putImageData(d,0,0);return a}
var j1b='#ifndef PHONG_PER_PIXEL\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\t\t\t\r\n\t\t\tvPointLight[ i ] = vec4( lVector, lDistance );\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\t\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\t\t\t\r\n\t\t\tvSpotLight[ i ] = vec4( lVector, lDistance );\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvWorldPosition = mPosition.xyz;\r\n#endif',c1b='#ifndef PHONG_PER_PIXEL\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\t\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n\t\tvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\t\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\t\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\r\n\t\tvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\r\n\t#endif\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvarying vec3 vWorldPosition;\r\n#endif',D1b='MaterialsCanvas2D$DemoScene',A1b='MeshDepthMaterial$MeshDepthMaterialOptions',B1b='MeshFaceMaterial',C1b='MeshPhongMaterial$MeshPhongMaterialOptions',r1b='ShaderDepth',s1b='ShaderDepth_Resources_default_StaticClientBundleGenerator',t1b='ShaderDepth_Resources_default_StaticClientBundleGenerator$1',u1b='ShaderDepth_Resources_default_StaticClientBundleGenerator$2',v1b='ShaderPhong',w1b='ShaderPhong_Resources_default_StaticClientBundleGenerator',x1b='ShaderPhong_Resources_default_StaticClientBundleGenerator$1',y1b='ShaderPhong_Resources_default_StaticClientBundleGenerator$2',J0b='mFar',I0b='mNear',Q0b='shininess',P0b='specular',L0b='uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n}\r\n',V0b='uniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\r\n\t#ifdef PHONG_PER_PIXEL\r\n\t\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\t\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\t#else\r\n\t\tvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\r\n\t#endif\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\r\n\r\n\t#ifdef PHONG_PER_PIXEL\r\n\t\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\t#else\r\n\t\tvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\r\n\t#endif\r\n\r\n\tvarying vec3 vWorldPosition;\r\n\r\n#endif\r\n\r\n#ifdef WRAP_AROUND\r\n\tuniform vec3 wrapRGB;\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\nvarying vec3 vNormal;',n1b='uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 emissive;\r\nuniform vec3 specular;\r\nuniform float shininess;\r\n\r\n//[*]\r\n\t\t\t\r\nvoid main() {\r\n\tgl_FragColor = vec4( vec3 ( 1.0 ), opacity );\r\n\t\t\t\t\r\n//[*]\r\n\t\t\t\t\r\n}\r\n',o1b='varying vec3 vViewPosition;\r\nvarying vec3 vNormal;\r\n\r\n//[*]\r\n\t\t\t\r\nvoid main() {\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\t\t\t\t\r\n//[*]\r\n\t\t\t\r\n#ifndef USE_ENVMAP\r\n\tvec4 mPosition = objectMatrix * vec4( position, 1.0 );\r\n#endif\r\n\r\nvViewPosition = -mvPosition.xyz;\r\n\t\t\t\r\n//[*]\r\n\t\t\t\r\nvNormal = transformedNormal;\r\n\r\n//[*]\r\n\r\n}\r\n',X0b='vec3 normal = normalize( vNormal );\r\nvec3 viewPosition = normalize( vViewPosition );\r\n\r\n#ifdef DOUBLE_SIDED\r\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\tvec3 pointDiffuse  = vec3( 0.0 );\r\n\tvec3 pointSpecular = vec3( 0.0 );\r\n\r\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\t\t#ifdef PHONG_PER_PIXEL\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\t\t#else\r\n\t\t\tvec3 lVector = normalize( vPointLight[ i ].xyz );\r\n\t\t\tfloat lDistance = vPointLight[ i ].w;\r\n\t\t#endif\r\n\r\n\t\t// diffuse\r\n\r\n\t\tfloat dotProduct = dot( normal, lVector );\r\n\r\n\t\t#ifdef WRAP_AROUND\r\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\r\n\t\t#else\r\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t#endif\r\n\r\n\t\tpointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\r\n\r\n\t\t// specular\r\n\r\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\r\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r\n\t\tfloat pointSpecularWeight = max( pow( pointDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\r\n\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\r\n\t\t#else\r\n\t\t\tpointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\r\n\t\t#endif\r\n\t}\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvec3 spotDiffuse  = vec3( 0.0 );\r\n\tvec3 spotSpecular = vec3( 0.0 );\r\n\r\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\t\t#ifdef PHONG_PER_PIXEL\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\t\t#else\r\n\t\t\tvec3 lVector = normalize( vSpotLight[ i ].xyz );\r\n\t\t\tfloat lDistance = vSpotLight[ i ].w;\r\n\t\t#endif\r\n\r\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\r\n\r\n\t\tif ( spotEffect > spotLightAngle[ i ] ) {\r\n\t\t\tspotEffect = pow( spotEffect, spotLightExponent[ i ] );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\r\n\t\t\t#else\r\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t\t#endif\r\n\r\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\r\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\r\n\t\t\tfloat spotSpecularWeight = max( pow( spotDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\r\n\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\r\n\t\t\t#else\r\n\t\t\t\tspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\r\n\t\t\t#endif\r\n\t\t}\r\n\t}\r\n\r\n#endif\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\tvec3 dirDiffuse  = vec3( 0.0 );\r\n\tvec3 dirSpecular = vec3( 0.0 );\r\n\r\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\r\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t// diffuse\r\n\r\n\t\tfloat dotProduct = dot( normal, dirVector );\r\n\r\n\t\t#ifdef WRAP_AROUND\r\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\r\n\t\t#else\r\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t#endif\r\n\r\n\t\tdirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\r\n\t\t// specular\r\n\r\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\r\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r\n\t\tfloat dirSpecularWeight = max( pow( dirDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t/*\r\n\t\t\t// fresnel term from skin shader\r\n\t\t\tconst float F0 = 0.128;\r\n\t\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\r\n\t\t\tfloat exponential = pow( base, 5.0 );\r\n\t\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\r\n\t\t*/\r\n\r\n\t\t/*\r\n\t\t\t// fresnel term from fresnel shader\r\n\t\t\tconst float mFresnelBias = 0.08;\r\n\t\t\tconst float mFresnelScale = 0.3;\r\n\t\t\tconst float mFresnelPower = 5.0;\r\n\t\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\r\n\t\t*/\r\n\r\n\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\t//dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\r\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\r\n\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r\n\t\t\r\n\t\t#else\r\n\t\t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\r\n\t\t#endif\r\n\t}\r\n\r\n#endif\r\n\r\nvec3 totalDiffuse = vec3( 0.0 );\r\nvec3 totalSpecular = vec3( 0.0 );\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\ttotalDiffuse += dirDiffuse;\r\n\ttotalSpecular += dirSpecular;\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\ttotalDiffuse += pointDiffuse;\r\n\ttotalSpecular += pointSpecular;\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\ttotalDiffuse += spotDiffuse;\r\n\ttotalSpecular += spotSpecular;\r\n#endif\r\n\r\n#ifdef METAL\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\r\n#else\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\r\n#endif',M0b='void main() {\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n';_=Pjb.prototype=Ojb.prototype=new Kib;_.gC=function Qjb(){return Xw};_.dd=function Rjb(){Mib(this,I0b,new amb((vmb(),hmb),new _Y(1)));Mib(this,J0b,new amb(hmb,new _Y(2000)));Mib(this,K0b,new amb(hmb,new _Y(1)))};var Sjb;_=Xjb.prototype=Ujb.prototype=new Jb;_.gC=function Yjb(){return Ww};_.gd=function Zjb(){return hkb(),Vjb};_.hd=function $jb(){return ikb(),Wjb};var Vjb=null,Wjb=null;_=akb.prototype=_jb.prototype=new Jb;_.gC=function bkb(){return Uw};_.Nb=function ckb(){return L0b};_.cM={46:1};_=ekb.prototype=dkb.prototype=new Jb;_.gC=function fkb(){return Vw};_.Nb=function gkb(){return M0b};_.cM={46:1};_=Dlb.prototype=Clb.prototype=new Kib;_.gC=function Elb(){return lx};_.dd=function Flb(){Lib(this,(Emb(),zmb));Lib(this,Amb);Lib(this,Bmb);Lib(this,Dmb);Mib(this,N0b,new amb((vmb(),gmb),new lpb(16777215)));Mib(this,O0b,new amb(gmb,new lpb(0)));Mib(this,P0b,new amb(gmb,new lpb(1118481)));Mib(this,Q0b,new amb(hmb,new _Y(30)));Mib(this,R0b,new amb(rmb,new Arb(1,1,1)))};_.ed=function Glb(a){var b,c;c=new V2(vp(aB,{80:1,81:1,85:1,96:1},1,[S$b,S0b,T0b,U0b,U$b,V0b,V$b]));b=new V2(vp(aB,{80:1,81:1,85:1,96:1},1,[W0b,X$b,X0b,Y0b,Y$b,Z0b,Z$b,$0b,$$b]));Nib(this,Tib(a,vp(cB,{80:1,96:1},103,[c,b])))};_.fd=function Hlb(a){var b,c,d,e;e=new V2(vp(aB,{80:1,81:1,85:1,96:1},1,[_0b,a1b,b1b,c1b,S$b,d1b,e1b,_$b]));b=new V2(vp(aB,{80:1,81:1,85:1,96:1},1,[f1b,g1b,h1b,a_b]));c=new V2(vp(aB,{80:1,81:1,85:1,96:1},1,[i1b]));d=new V2(vp(aB,{80:1,81:1,85:1,96:1},1,[j1b,k1b,l1b,m1b,b_b]));Oib(this,Tib(a,vp(cB,{80:1,96:1},103,[e,b,c,d])))};var Ilb;_=Nlb.prototype=Klb.prototype=new Jb;_.gC=function Olb(){return kx};_.gd=function Plb(){return Zlb(),Llb};_.hd=function Qlb(){return $lb(),Mlb};var Llb=null,Mlb=null;_=Slb.prototype=Rlb.prototype=new Jb;_.gC=function Tlb(){return ix};_.Nb=function Ulb(){return n1b};_.cM={46:1};_=Wlb.prototype=Vlb.prototype=new Jb;_.gC=function Xlb(){return jx};_.Nb=function Ylb(){return o1b};_.cM={46:1};_=kub.prototype=jub.prototype=new $tb;_.gC=function lub(){return wy};_.cM={147:1,148:1,159:1};_.a=0;_.b=0;_=Bvb.prototype=Avb.prototype=new nub;_.Ad=function Cvb(){return null};_.gC=function Dvb(){return Ky};_.Cd=function Evb(){return new Pjb};_.cM={151:1};_=Gvb.prototype=Fvb.prototype=new Dub;_.gC=function Hvb(){return Jy};_=Jvb.prototype=Ivb.prototype=new nub;_.gC=function Kvb(){return Ly};_.cM={151:1,155:1};_=$vb.prototype=Zvb.prototype=new mub;_.gC=function _vb(){return Ry};_.Cd=function awb(){return new Dlb};_.cM={149:1,151:1,157:1};_.a=null;_.b=null;_.c=0;_.d=null;_.e=null;_=cwb.prototype=bwb.prototype=new Cub;_.gC=function dwb(){return Qy};_.e=30;_=KEb.prototype;_.kb=function OEb(){zyb(this.b,new REb(this.a))};_=REb.prototype=PEb.prototype=new Cyb;_.gC=function SEb(){return oA};_.cd=function TEb(){o7(this,new Zob(45,w7(this.q.z),1,2000))};_.bb=function UEb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;wrb(this.p.F,0,200,800);nob(this.s,this.p);c=new _pb;for(i=0;i<=40;++i){j2(c.B,new Arb(-500,-75,i*25-500));j2(c.B,new Arb(500,-75,i*25-500));j2(c.B,new Arb(i*25-500,-75,-500));j2(c.B,new Arb(i*25-500,-75,500))}o=new Nub;o.a=new lpb(16777215);o.t=0.20000000298023224;n=new Jub(o);k=new Dwb(c,n,(Mwb(),Kwb));nob(this.s,k);C=new dnb(QEb());C.o=true;this.a=new t2;u=new Qvb;u.j=C;u.u=true;j2(this.a,new Mvb(u));v=new Qvb;v.g=new lpb(14540253);v.d=(ovb(),lvb);j2(this.a,new Mvb(v));z=new cwb;z.a=new lpb(197379);z.g=new lpb(14540253);z.f=new lpb(39168);z.e=30;z.d=lvb;j2(this.a,new $vb(z));j2(this.a,new Tvb(new Xvb));q=new yvb;q.g=new lpb(16755200);q.u=true;q.q=(Yub(),Rub);j2(this.a,new tvb(q));w=new Qvb;w.g=new lpb(14540253);w.d=nvb;j2(this.a,new Mvb(w));z.j=C;z.u=true;j2(this.a,new $vb(z));y=new Xvb;y.a=nvb;j2(this.a,new Tvb(y));r=new yvb;r.g=new lpb(65450);r.w=true;j2(this.a,new tvb(r));j2(this.a,new Bvb(new Gvb));x=new Qvb;x.g=new lpb(6710886);x.c=new lpb(16711680);x.a=new lpb(0);x.d=nvb;j2(this.a,new Mvb(x));A=new cwb;A.a=new lpb(0);A.c=new lpb(16711680);A.g=new lpb(0);A.f=new lpb(6710886);A.e=10;A.d=nvb;A.t=0.8999999761581421;A.u=true;j2(this.a,new $vb(A));s=new yvb;r.j=C;r.u=true;j2(this.a,new tvb(s));g=new ftb(70,32,16);e=new ftb(70,32,16);f=new ftb(70,32,16);for(i=0,j=f.n.b;i<j;++i){b=Ep(n2(f.n,i),134);b.g=0}$pb(f,this.a);j2(this.a,new Jvb);this.b=new t2;for(i=0,j=this.a.b;i<j;++i){p=Ep(n2(this.a,i),151);d=p.gC()==Ly?f:p.N==lvb?e:g;B=new $wb(d,p);krb(B.F,i%4*200-400);xrb(B.F,Math.floor(i/4)*200-200);krb(B.I,Math.random()*200-100);lrb(B.I,Math.random()*200-100);xrb(B.I,Math.random()*200-100);j2(this.b,B);nob(this.s,B)}t=new yvb;t.g=new lpb(16777215);this.c=new $wb(new ftb(4,8,8),new tvb(t));nob(this.s,this.c);nob(this.s,new cub(1118481));a=new gub(0.125);krb(a.F,Math.random()-0.5);lrb(a.F,Math.random()-0.5);xrb(a.F,Math.random()-0.5);a.F.wd();nob(this.s,a);this.d=new kub;nob(this.s,this.d)};_.ad=function VEb(){};_.cb=function WEb(a){var b,c,d,e,f;f=1.0E-4*a;krb(this.p.F,Math.cos(f)*1000);xrb(this.p.F,Math.sin(f)*1000);Dob(this.p,this.s.F);for(b=0,c=this.b.b;b<c;++b){e=Ep(n2(this.b,b),162);e.I.c+=0.009999999776482582;e.I.d+=0.004999999888241291;d=Ep(n2(this.a,b),151);b>9&&Gp(d,157)?gpb(Ep(d,157).b,0.5400000214576721,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&Gp(d,156)&&gpb(Ep(d,156).b,0.03999999910593033,1,0.7*(0.5+0.5*Math.cos(35*f)))}krb(this.c.F,Math.sin(f*7)*300);lrb(this.c.F,Math.cos(f*5)*400);xrb(this.c.F,Math.cos(f*3)*300);krb(this.d.F,this.c.F.c);lrb(this.d.F,this.c.F.d);xrb(this.d.F,this.c.F.b);n7(this)};_.a=null;_.b=null;_.c=null;_.d=null;var Xw=GY(A_b,r1b),Ww=GY(A_b,s1b),Uw=GY(A_b,t1b),Vw=GY(A_b,u1b),lx=GY(A_b,v1b),kx=GY(A_b,w1b),ix=GY(A_b,x1b),jx=GY(A_b,y1b),Jy=GY(z1b,A1b),Ly=GY(z1b,B1b),Qy=GY(z1b,C1b),oA=GY(p$b,D1b);cIb(Md)(10);