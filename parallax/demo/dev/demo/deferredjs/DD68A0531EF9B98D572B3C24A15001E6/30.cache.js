function xvc(){}
function Bvc(){}
function Evc(){}
function wIc(){}
function AIc(){}
function DIc(){}
function Cmc(){gac.call(this)}
function qvc(){EIb.call(this,(tvc(),svc))}
function pIc(){EIb.call(this,(sIc(),rIc))}
function sIc(){sIc=TKc;rIc=new wIc}
function FIc(){FIc=TKc;uIc=new AIc}
function GIc(){GIc=TKc;vIc=new DIc}
function Gvc(){Gvc=TKc;vvc=new Bvc}
function tvc(){tvc=TKc;svc=new xvc}
function Hvc(){Hvc=TKc;wvc=new Evc}
function WGc(){this.b=new e3b(new pIc);SMb(pu(WRb(YZb(this.b).i,VSc),225),(Pib(),Pib(),Nib));SMb(pu(WRb(YZb(this.b).i,WSc),225),new Ojb(0.35));SMb(pu(WRb(YZb(this.b).i,XSc),225),new Ojb(0.95));SMb(pu(WRb(YZb(this.b).i,YSc),225),ukb(2048));this.e=true;this.f=true}
var VSc='grayscale',WSc='nIntensity',YSc='sCount',XSc='sIntensity',PSc='texture1',QSc='texture2';hU(1162,1,DMc);_.zb=function Amc(){I9b(this.b,new Cmc(this.a))};hU(1163,978,AMc,Cmc);_.Gd=function Dmc(a){Z5b(pu(pu(WRb(this.d,OSc),225).d,297),a.a.Z);$5b(pu(pu(WRb(this.d,OSc),225).d,297),a.a.Y)};_.nb=function Emc(){var a,b,c,d,e,f,g;et((Jxb(),Ixb),(Txb(),Sxb),this);this.a=new rQb(35,HGb(this.G.k),1,3000);M6b(this.a._,4);d=new e3b(new qvc);this.d=YZb(d).i;f=new TNb('./static/textures/lava/cloud.png');NNb(f,(KFb(),JFb));ONb(f,JFb);SMb(pu(WRb(this.d,PSc),225),f);g=new TNb(CSc);NNb(g,JFb);ONb(g,JFb);SMb(pu(WRb(this.d,QSc),225),g);this.b=new oYb(new _Wb(0.65,0.3,30,30),d);g4b(this.b.cb,0.3);oPb(this.H,this.b);a=new $Gc(this.G.k);e=new gHc(this.H,this.a);b=new TGc(1.25);c=new WGc;c.a=true;sqb(a.b,e);sqb(a.b,b);sqb(a.b,c);_Gb(this.G.k,false);this.c=rh()};_.ob=function Fmc(a){var b;b=(rh()-this.c)*0.001*5;SMb(pu(WRb(this.d,RSc),225),new Ojb(pu(pu(WRb(this.d,RSc),225).d,150).a+0.2*b));$3b(this.b.cb,0.05*b);_3b(this.b.cb,0.0125*b);AGb(this.G.k,true);this.c=rh();TGb(this.G.k,this.H,this.a,null,false)};_.c=0;hU(1295,730,pMc,qvc);_.Ld=function rvc(){sIb(this,SSc,new UMb((lNb(),ZMb),new Ojb(0.45)));sIb(this,TSc,new UMb(hNb,new Q6b(0,0,0)));sIb(this,RSc,new UMb(ZMb,new Ojb(1)));sIb(this,OSc,new UMb(fNb,new _5b));sIb(this,USc,new UMb(fNb,new a6b(3,1)));sIb(this,PSc,new TMb(dNb));sIb(this,QSc,new TMb(dNb))};var svc;hU(1296,1,{},xvc);_.Od=function yvc(){return Gvc(),vvc};_.Pd=function zvc(){return Hvc(),wvc};var vvc,wvc;hU(1297,1,{},Bvc);_.nc=function Cvc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};hU(1298,1,{},Evc);_.nc=function Fvc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};hU(1404,1403,QMc,WGc);_.Rg=function XGc(a,b,c){SMb(pu(WRb(YZb(this.b).i,iSc),225),a.d);SMb(pu(WRb(YZb(this.b).i,RSc),225),new Ojb(pu(pu(WRb(YZb(this.b).i,RSc),225).d,150).a+b));eTb(a.c,this.b);this.a?TGb(a.u,a.v,a.a,null,false):TGb(a.u,a.v,a.a,a.g,false)};_.a=false;hU(1427,730,pMc,pIc);_.Ld=function qIc(){sIb(this,iSc,new TMb((lNb(),dNb)));sIb(this,RSc,new UMb(ZMb,new Ojb(0)));sIb(this,WSc,new UMb(ZMb,new Ojb(0.5)));sIb(this,XSc,new UMb(ZMb,new Ojb(0.05)));sIb(this,YSc,new UMb(aNb,ukb(4096)));sIb(this,VSc,new UMb(aNb,(Pib(),Pib(),Oib)))};var rIc;hU(1428,1,{},wIc);_.Od=function xIc(){return FIc(),uIc};_.Pd=function yIc(){return GIc(),vIc};var uIc,vIc;hU(1429,1,{},AIc);_.nc=function BIc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};hU(1430,1,{},DIc);_.nc=function EIc(){return ZSc};var QM=Cjb(wRc,'MaterialsShaderLava$DemoScene',1163),CQ=Cjb($Sc,'FilmPass',1404),UO=Cjb(pRc,'LavaShader',1295),XQ=Cjb(_Sc,'FilmShader',1427),TO=Cjb(pRc,'LavaShader_Resources_default_InlineClientBundleGenerator',1296),RO=Cjb(pRc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1297),SO=Cjb(pRc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1298),WQ=Cjb(_Sc,'FilmShader_Resources_default_InlineClientBundleGenerator',1428),UQ=Cjb(_Sc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1429),VQ=Cjb(_Sc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1430);RMc(xi)(30);