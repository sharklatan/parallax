function xvc(){}
function Bvc(){}
function Evc(){}
function wIc(){}
function AIc(){}
function DIc(){}
function gmc(){K8b.call(this)}
function qvc(){iIb.call(this,(tvc(),svc))}
function pIc(){iIb.call(this,(sIc(),rIc))}
function sIc(){sIc=TKc;rIc=new wIc}
function FIc(){FIc=TKc;uIc=new AIc}
function GIc(){GIc=TKc;vIc=new DIc}
function Gvc(){Gvc=TKc;vvc=new Bvc}
function tvc(){tvc=TKc;svc=new xvc}
function Hvc(){Hvc=TKc;wvc=new Evc}
function WGc(){this.b=new x1b(new pIc);bMb(su(XQb(qYb(this.b).i,YSc),225),(yib(),yib(),wib));bMb(su(XQb(qYb(this.b).i,ZSc),225),new xjb(0.35));bMb(su(XQb(qYb(this.b).i,$Sc),225),new xjb(0.95));bMb(su(XQb(qYb(this.b).i,_Sc),225),dkb(2048));this.e=true;this.f=true}
var YSc='grayscale',ZSc='nIntensity',_Sc='sCount',$Sc='sIntensity',SSc='texture1',TSc='texture2';OT(1158,1,BMc);_.zb=function emc(){k8b(this.b,new gmc(this.a))};OT(1159,967,yMc,gmc);_.Fd=function hmc(a){p4b(su(su(XQb(this.d,RSc),225).d,297),a.a.Z);q4b(su(su(XQb(this.d,RSc),225).d,297),a.a.Y)};_.nb=function imc(){var a,b,c,d,e,f,g;gt((pxb(),oxb),(zxb(),yxb),this);this.a=new zPb(35,lGb(this.G.k),1,3000);b5b(this.a._,4);d=new x1b(new qvc);this.d=qYb(d).i;f=new cNb('./static/textures/lava/cloud.png');YMb(f,(oFb(),nFb));ZMb(f,nFb);bMb(su(XQb(this.d,SSc),225),f);g=new cNb(ESc);YMb(g,nFb);ZMb(g,nFb);bMb(su(XQb(this.d,TSc),225),g);this.b=new D6b(new $Vb(0.65,0.3,30,30),d);y2b(this.b.cb,0.3);zOb(this.H,this.b);a=new $Gc(this.G.k);e=new gHc(this.H,this.a);b=new TGc(1.25);c=new WGc;c.a=true;aqb(a.b,e);aqb(a.b,b);aqb(a.b,c);FGb(this.G.k,false);this.c=rh()};_.ob=function jmc(a){var b;b=(rh()-this.c)*0.001*5;bMb(su(XQb(this.d,USc),225),new xjb(su(su(XQb(this.d,USc),225).d,150).a+0.2*b));q2b(this.b.cb,0.05*b);r2b(this.b.cb,0.0125*b);fGb(this.G.k);this.c=rh();xGb(this.G.k,this.H,this.a,null,false)};_.c=0;OT(1312,731,oMc,qvc);_.Kd=function rvc(){YHb(this,VSc,new dMb((wMb(),iMb),new xjb(0.45)));YHb(this,WSc,new dMb(sMb,new f5b(0,0,0)));YHb(this,USc,new dMb(iMb,new xjb(1)));YHb(this,RSc,new dMb(qMb,new r4b));YHb(this,XSc,new dMb(qMb,new s4b(3,1)));YHb(this,SSc,new cMb(oMb));YHb(this,TSc,new cMb(oMb))};var svc;OT(1313,1,{},xvc);_.Nd=function yvc(){return Gvc(),vvc};_.Od=function zvc(){return Hvc(),wvc};var vvc,wvc;OT(1314,1,{},Bvc);_.mc=function Cvc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};OT(1315,1,{},Evc);_.mc=function Fvc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};OT(1421,1420,OMc,WGc);_.Og=function XGc(a,b,c){bMb(su(XQb(qYb(this.b).i,gSc),225),a.d);bMb(su(XQb(qYb(this.b).i,USc),225),new xjb(su(su(XQb(qYb(this.b).i,USc),225).d,150).a+b));dSb(a.c,this.b);this.a?xGb(a.u,a.v,a.a,null,false):xGb(a.u,a.v,a.a,a.g,false)};_.a=false;OT(1444,731,oMc,pIc);_.Kd=function qIc(){YHb(this,gSc,new cMb((wMb(),oMb)));YHb(this,USc,new dMb(iMb,new xjb(0)));YHb(this,ZSc,new dMb(iMb,new xjb(0.5)));YHb(this,$Sc,new dMb(iMb,new xjb(0.05)));YHb(this,_Sc,new dMb(lMb,dkb(4096)));YHb(this,YSc,new dMb(lMb,(yib(),yib(),xib)))};var rIc;OT(1445,1,{},wIc);_.Nd=function xIc(){return FIc(),uIc};_.Od=function yIc(){return GIc(),vIc};var uIc,vIc;OT(1446,1,{},AIc);_.mc=function BIc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};OT(1447,1,{},DIc);_.mc=function EIc(){return aTc};var RM=ljb(tRc,'MaterialsShaderLava$DemoScene',1159),iQ=ljb(bTc,'FilmPass',1421),AO=ljb(mRc,'LavaShader',1312),DQ=ljb(cTc,'FilmShader',1444),zO=ljb(mRc,'LavaShader_Resources_default_InlineClientBundleGenerator',1313),xO=ljb(mRc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1314),yO=ljb(mRc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1315),CQ=ljb(cTc,'FilmShader_Resources_default_InlineClientBundleGenerator',1445),AQ=ljb(cTc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1446),BQ=ljb(cTc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1447);PMc(xi)(31);