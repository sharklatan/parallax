function Hvc(){}
function Lvc(){}
function Ovc(){}
function GIc(){}
function KIc(){}
function NIc(){}
function Mmc(){qac.call(this)}
function Avc(){OIb.call(this,(Dvc(),Cvc))}
function zIc(){OIb.call(this,(CIc(),BIc))}
function CIc(){CIc=bLc;BIc=new GIc}
function PIc(){PIc=bLc;EIc=new KIc}
function QIc(){QIc=bLc;FIc=new NIc}
function Qvc(){Qvc=bLc;Fvc=new Lvc}
function Dvc(){Dvc=bLc;Cvc=new Hvc}
function Rvc(){Rvc=bLc;Gvc=new Ovc}
function eHc(){this.b=new o3b(new zIc);aNb(ru(eSb(g$b(this.b).i,fTc),225),(Zib(),Zib(),Xib));aNb(ru(eSb(g$b(this.b).i,gTc),225),new Yjb(0.35));aNb(ru(eSb(g$b(this.b).i,hTc),225),new Yjb(0.95));aNb(ru(eSb(g$b(this.b).i,iTc),225),Ekb(2048));this.e=true;this.f=true}
var fTc='grayscale',gTc='nIntensity',iTc='sCount',hTc='sIntensity',_Sc='texture1',aTc='texture2';lU(1164,1,NMc);_.zb=function Kmc(){S9b(this.b,new Mmc(this.a))};lU(1165,980,KMc,Mmc);_.Gd=function Nmc(a){h6b(ru(ru(eSb(this.d,$Sc),225).d,297),a.a.Z);i6b(ru(ru(eSb(this.d,$Sc),225).d,297),a.a.Y)};_.nb=function Omc(){var a,b,c,d,e,f,g;ft((Txb(),Sxb),(byb(),ayb),this);this.a=new BQb(35,RGb(this.G.k),1,3000);W6b(this.a._,4);d=new o3b(new Avc);this.d=g$b(d).i;f=new bOb('./static/textures/lava/cloud.png');XNb(f,(UFb(),TFb));YNb(f,TFb);aNb(ru(eSb(this.d,_Sc),225),f);g=new bOb(OSc);XNb(g,TFb);YNb(g,TFb);aNb(ru(eSb(this.d,aTc),225),g);this.b=new yYb(new jXb(0.65,0.3,30,30),d);q4b(this.b.cb,0.3);yPb(this.H,this.b);a=new iHc(this.G.k);e=new qHc(this.H,this.a);b=new bHc(1.25);c=new eHc;c.a=true;Cqb(a.b,e);Cqb(a.b,b);Cqb(a.b,c);jHb(this.G.k,false);this.c=rh()};_.ob=function Pmc(a){var b;b=(rh()-this.c)*0.001*5;aNb(ru(eSb(this.d,bTc),225),new Yjb(ru(ru(eSb(this.d,bTc),225).d,150).a+0.2*b));i4b(this.b.cb,0.05*b);j4b(this.b.cb,0.0125*b);KGb(this.G.k,true);this.c=rh();bHb(this.G.k,this.H,this.a,null,false)};_.c=0;lU(1297,732,zMc,Avc);_.Ld=function Bvc(){CIb(this,cTc,new cNb((vNb(),hNb),new Yjb(0.45)));CIb(this,dTc,new cNb(rNb,new $6b(0,0,0)));CIb(this,bTc,new cNb(hNb,new Yjb(1)));CIb(this,$Sc,new cNb(pNb,new j6b));CIb(this,eTc,new cNb(pNb,new k6b(3,1)));CIb(this,_Sc,new bNb(nNb));CIb(this,aTc,new bNb(nNb))};var Cvc;lU(1298,1,{},Hvc);_.Od=function Ivc(){return Qvc(),Fvc};_.Pd=function Jvc(){return Rvc(),Gvc};var Fvc,Gvc;lU(1299,1,{},Lvc);_.nc=function Mvc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};lU(1300,1,{},Ovc);_.nc=function Pvc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};lU(1406,1405,$Mc,eHc);_.Rg=function fHc(a,b,c){aNb(ru(eSb(g$b(this.b).i,uSc),225),a.d);aNb(ru(eSb(g$b(this.b).i,bTc),225),new Yjb(ru(ru(eSb(g$b(this.b).i,bTc),225).d,150).a+b));oTb(a.c,this.b);this.a?bHb(a.u,a.v,a.a,null,false):bHb(a.u,a.v,a.a,a.g,false)};_.a=false;lU(1429,732,zMc,zIc);_.Ld=function AIc(){CIb(this,uSc,new bNb((vNb(),nNb)));CIb(this,bTc,new cNb(hNb,new Yjb(0)));CIb(this,gTc,new cNb(hNb,new Yjb(0.5)));CIb(this,hTc,new cNb(hNb,new Yjb(0.05)));CIb(this,iTc,new cNb(kNb,Ekb(4096)));CIb(this,fTc,new cNb(kNb,(Zib(),Zib(),Yib)))};var BIc;lU(1430,1,{},GIc);_.Od=function HIc(){return PIc(),EIc};_.Pd=function IIc(){return QIc(),FIc};var EIc,FIc;lU(1431,1,{},KIc);_.nc=function LIc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};lU(1432,1,{},NIc);_.nc=function OIc(){return jTc};var UM=Mjb(IRc,'MaterialsShaderLava$DemoScene',1165),GQ=Mjb(kTc,'FilmPass',1406),YO=Mjb(BRc,'LavaShader',1297),_Q=Mjb(lTc,'FilmShader',1429),XO=Mjb(BRc,'LavaShader_Resources_default_InlineClientBundleGenerator',1298),VO=Mjb(BRc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1299),WO=Mjb(BRc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1300),$Q=Mjb(lTc,'FilmShader_Resources_default_InlineClientBundleGenerator',1430),YQ=Mjb(lTc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1431),ZQ=Mjb(lTc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1432);_Mc(xi)(30);