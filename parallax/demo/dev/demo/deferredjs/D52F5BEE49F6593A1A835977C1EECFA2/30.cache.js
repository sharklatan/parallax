function oxc(){}
function sxc(){}
function vxc(){}
function nKc(){}
function rKc(){}
function uKc(){}
function Amc(){E9b.call(this)}
function hxc(){yIb.call(this,(kxc(),jxc))}
function gKc(){yIb.call(this,(jKc(),iKc))}
function jKc(){jKc=KMc;iKc=new nKc}
function wKc(){wKc=KMc;lKc=new rKc}
function xKc(){xKc=KMc;mKc=new uKc}
function xxc(){xxc=KMc;mxc=new sxc}
function kxc(){kxc=KMc;jxc=new oxc}
function yxc(){yxc=KMc;nxc=new vxc}
function NIc(){this.b=new q2b(new gKc);MMb(ru(NRb(iZb(this.b).i,KUc),225),(Nib(),Nib(),Lib));MMb(ru(NRb(iZb(this.b).i,LUc),225),new Mjb(0.35));MMb(ru(NRb(iZb(this.b).i,MUc),225),new Mjb(0.95));MMb(ru(NRb(iZb(this.b).i,NUc),225),skb(2048));this.e=true;this.f=true}
var KUc='grayscale',LUc='nIntensity',NUc='sCount',MUc='sIntensity',EUc='texture1',FUc='texture2';aU(1156,1,tOc);_.zb=function ymc(){e9b(this.b,new Amc(this.a))};aU(1157,973,qOc,Amc);_.Gd=function Bmc(a){i5b(ru(ru(NRb(this.d,DUc),225).d,297),a.a.Z);j5b(ru(ru(NRb(this.d,DUc),225).d,297),a.a.Y)};_.nb=function Cmc(){var a,b,c,d,e,f,g;ft((Fxb(),Exb),(Pxb(),Oxb),this);this.a=new lQb(35,BGb(this.G.k),1,3000);X5b(this.a._,4);d=new q2b(new hxc);this.d=iZb(d).i;f=new NNb('./static/textures/lava/cloud.png');HNb(f,(EFb(),DFb));INb(f,DFb);MMb(ru(NRb(this.d,EUc),225),f);g=new NNb(rUc);HNb(g,DFb);INb(g,DFb);MMb(ru(NRb(this.d,FUc),225),g);this.b=new x7b(new SWb(0.65,0.3,30,30),d);r3b(this.b.cb,0.3);iPb(this.H,this.b);a=new RIc(this.G.k);e=new ZIc(this.H,this.a);b=new KIc(1.25);c=new NIc;c.a=true;pqb(a.b,e);pqb(a.b,b);pqb(a.b,c);VGb(this.G.k,false);this.c=rh()};_.ob=function Dmc(a){var b;b=(rh()-this.c)*0.001*5;MMb(ru(NRb(this.d,GUc),225),new Mjb(ru(ru(NRb(this.d,GUc),225).d,150).a+0.2*b));j3b(this.b.cb,0.05*b);k3b(this.b.cb,0.0125*b);uGb(this.G.k,true);this.c=rh();NGb(this.G.k,this.H,this.a,null,false)};_.c=0;aU(1333,731,gOc,hxc);_.Ld=function ixc(){mIb(this,HUc,new OMb((fNb(),TMb),new Mjb(0.45)));mIb(this,IUc,new OMb(bNb,new _5b(0,0,0)));mIb(this,GUc,new OMb(TMb,new Mjb(1)));mIb(this,DUc,new OMb(_Mb,new k5b));mIb(this,JUc,new OMb(_Mb,new l5b(3,1)));mIb(this,EUc,new NMb(ZMb));mIb(this,FUc,new NMb(ZMb))};var jxc;aU(1334,1,{},oxc);_.Od=function pxc(){return xxc(),mxc};_.Pd=function qxc(){return yxc(),nxc};var mxc,nxc;aU(1335,1,{},sxc);_.nc=function txc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};aU(1336,1,{},vxc);_.nc=function wxc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};aU(1442,1441,GOc,NIc);_.Rg=function OIc(a,b,c){MMb(ru(NRb(iZb(this.b).i,ZTc),225),a.d);MMb(ru(NRb(iZb(this.b).i,GUc),225),new Mjb(ru(ru(NRb(iZb(this.b).i,GUc),225).d,150).a+b));XSb(a.c,this.b);this.a?NGb(a.u,a.v,a.a,null,false):NGb(a.u,a.v,a.a,a.g,false)};_.a=false;aU(1465,731,gOc,gKc);_.Ld=function hKc(){mIb(this,ZTc,new NMb((fNb(),ZMb)));mIb(this,GUc,new OMb(TMb,new Mjb(0)));mIb(this,LUc,new OMb(TMb,new Mjb(0.5)));mIb(this,MUc,new OMb(TMb,new Mjb(0.05)));mIb(this,NUc,new OMb(WMb,skb(4096)));mIb(this,KUc,new OMb(WMb,(Nib(),Nib(),Mib)))};var iKc;aU(1466,1,{},nKc);_.Od=function oKc(){return wKc(),lKc};_.Pd=function pKc(){return xKc(),mKc};var lKc,mKc;aU(1467,1,{},rKc);_.nc=function sKc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};aU(1468,1,{},uKc);_.nc=function vKc(){return OUc};var OM=Ajb(lTc,'MaterialsShaderLava$DemoScene',1157),wQ=Ajb(PUc,'FilmPass',1442),OO=Ajb(eTc,'LavaShader',1333),RQ=Ajb(QUc,'FilmShader',1465),NO=Ajb(eTc,'LavaShader_Resources_default_InlineClientBundleGenerator',1334),LO=Ajb(eTc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1335),MO=Ajb(eTc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1336),QQ=Ajb(QUc,'FilmShader_Resources_default_InlineClientBundleGenerator',1466),OQ=Ajb(QUc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1467),PQ=Ajb(QUc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1468);HOc(xi)(30);