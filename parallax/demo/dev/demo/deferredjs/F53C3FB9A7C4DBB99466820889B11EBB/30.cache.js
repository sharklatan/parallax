function Ovc(){}
function Svc(){}
function Vvc(){}
function NIc(){}
function RIc(){}
function UIc(){}
function Tmc(){xac.call(this)}
function Hvc(){VIb.call(this,(Kvc(),Jvc))}
function GIc(){VIb.call(this,(JIc(),IIc))}
function JIc(){JIc=iLc;IIc=new NIc}
function WIc(){WIc=iLc;LIc=new RIc}
function XIc(){XIc=iLc;MIc=new UIc}
function Xvc(){Xvc=iLc;Mvc=new Svc}
function Kvc(){Kvc=iLc;Jvc=new Ovc}
function Yvc(){Yvc=iLc;Nvc=new Vvc}
function lHc(){this.c=new v3b(new GIc);hNb(Eu(lSb(n$b(this.c).j,rTc),225),(ejb(),ejb(),cjb));hNb(Eu(lSb(n$b(this.c).j,sTc),225),new dkb(0.35));hNb(Eu(lSb(n$b(this.c).j,tTc),225),new dkb(0.95));hNb(Eu(lSb(n$b(this.c).j,uTc),225),Lkb(2048));this.f=true;this.g=true}
var rTc='grayscale',sTc='nIntensity',uTc='sCount',tTc='sIntensity',lTc='texture1',mTc='texture2';xU(1158,1,WMc);_.Db=function Rmc(){Z9b(this.c,new Tmc(this.b))};xU(1159,974,TMc,Tmc);_.Jd=function Umc(a){o6b(Eu(Eu(lSb(this.e,kTc),225).e,297),a.b.$);p6b(Eu(Eu(lSb(this.e,kTc),225).e,297),a.b.Z)};_.ob=function Vmc(){var a,b,c,d,e,f,g;tt(($xb(),Zxb),(iyb(),hyb),this);this.b=new IQb(35,YGb(this.H.n),1,3000);b7b(this.b.ab,4);d=new v3b(new Hvc);this.e=n$b(d).j;f=new iOb('./static/textures/lava/cloud.png');cOb(f,(_Fb(),$Fb));dOb(f,$Fb);hNb(Eu(lSb(this.e,lTc),225),f);g=new iOb($Sc);cOb(g,$Fb);dOb(g,$Fb);hNb(Eu(lSb(this.e,mTc),225),g);this.c=new FYb(new qXb(0.65,0.3,30,30),d);x4b(this.c.db,0.3);FPb(this.I,this.c);a=new pHc(this.H.n);e=new xHc(this.I,this.b);b=new iHc(1.25);c=new lHc;c.b=true;Jqb(a.c,e);Jqb(a.c,b);Jqb(a.c,c);qHb(this.H.n,false);this.d=Bh()};_.pb=function Wmc(a){var b;b=(Bh()-this.d)*0.001*5;hNb(Eu(lSb(this.e,nTc),225),new dkb(Eu(Eu(lSb(this.e,nTc),225).e,150).b+0.2*b));p4b(this.c.db,0.05*b);q4b(this.c.db,0.0125*b);RGb(this.H.n,true);this.d=Bh();iHb(this.H.n,this.I,this.b,null,false)};_.d=0;xU(1291,726,IMc,Hvc);_.Od=function Ivc(){JIb(this,oTc,new jNb((CNb(),oNb),new dkb(0.45)));JIb(this,pTc,new jNb(yNb,new f7b(0,0,0)));JIb(this,nTc,new jNb(oNb,new dkb(1)));JIb(this,kTc,new jNb(wNb,new q6b));JIb(this,qTc,new jNb(wNb,new r6b(3,1)));JIb(this,lTc,new iNb(uNb));JIb(this,mTc,new iNb(uNb))};var Jvc;xU(1292,1,{},Ovc);_.Rd=function Pvc(){return Xvc(),Mvc};_.Sd=function Qvc(){return Yvc(),Nvc};var Mvc,Nvc;xU(1293,1,{},Svc);_.qc=function Tvc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};xU(1294,1,{},Vvc);_.qc=function Wvc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};xU(1400,1399,hNc,lHc);_.Ug=function mHc(a,b,c){hNb(Eu(lSb(n$b(this.c).j,GSc),225),a.e);hNb(Eu(lSb(n$b(this.c).j,nTc),225),new dkb(Eu(Eu(lSb(n$b(this.c).j,nTc),225).e,150).b+b));vTb(a.d,this.c);this.b?iHb(a.v,a.w,a.b,null,false):iHb(a.v,a.w,a.b,a.i,false)};_.b=false;xU(1423,726,IMc,GIc);_.Od=function HIc(){JIb(this,GSc,new iNb((CNb(),uNb)));JIb(this,nTc,new jNb(oNb,new dkb(0)));JIb(this,sTc,new jNb(oNb,new dkb(0.5)));JIb(this,tTc,new jNb(oNb,new dkb(0.05)));JIb(this,uTc,new jNb(rNb,Lkb(4096)));JIb(this,rTc,new jNb(rNb,(ejb(),ejb(),djb)))};var IIc;xU(1424,1,{},NIc);_.Rd=function OIc(){return WIc(),LIc};_.Sd=function PIc(){return XIc(),MIc};var LIc,MIc;xU(1425,1,{},RIc);_.qc=function SIc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};xU(1426,1,{},UIc);_.qc=function VIc(){return vTc};var eN=Tjb(URc,'MaterialsShaderLava$DemoScene',1159),SQ=Tjb(wTc,'FilmPass',1400),iP=Tjb(NRc,'LavaShader',1291),lR=Tjb(xTc,'FilmShader',1423),hP=Tjb(NRc,'LavaShader_Resources_default_InlineClientBundleGenerator',1292),fP=Tjb(NRc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1293),gP=Tjb(NRc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1294),kR=Tjb(xTc,'FilmShader_Resources_default_InlineClientBundleGenerator',1424),iR=Tjb(xTc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1425),jR=Tjb(xTc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1426);iNc(Hi)(30);