function Ywc(){}
function axc(){}
function dxc(){}
function XJc(){}
function _Jc(){}
function cKc(){}
function Rnc(){vbc.call(this)}
function Rwc(){zJb.call(this,(Uwc(),Twc))}
function QJc(){zJb.call(this,(TJc(),SJc))}
function TJc(){TJc=sMc;SJc=new XJc}
function eKc(){eKc=sMc;VJc=new _Jc}
function fKc(){fKc=sMc;WJc=new cKc}
function fxc(){fxc=sMc;Wwc=new axc}
function gxc(){gxc=sMc;Xwc=new dxc}
function Uwc(){Uwc=sMc;Twc=new Ywc}
function vIc(){this.b=new e4b(new QJc);NNb(yv(SSb(Y$b(this.b).i,xUc),226),(tjb(),tjb(),rjb));NNb(yv(SSb(Y$b(this.b).i,yUc),226),new skb(0.35));NNb(yv(SSb(Y$b(this.b).i,zUc),226),new skb(0.95));NNb(yv(SSb(Y$b(this.b).i,AUc),226),$kb(2048));this.e=true;this.f=true}
var xUc='grayscale',yUc='nIntensity',AUc='sCount',zUc='sIntensity',rUc='texture1',sUc='texture2';DV(1174,1,cOc);_.Mb=function Pnc(){Xac(this.b,new Rnc(this.a))};DV(1175,990,_Nc,Rnc);_.Gd=function Snc(a){j7b(yv(yv(SSb(this.d,qUc),226).d,302),a.a.hb);k7b(yv(yv(SSb(this.d,qUc),226).d,302),a.a.gb)};_.nb=function Tnc(){var a,b,c,d,e,f,g;mu((nyb(),myb),(xyb(),wyb),this);this.a=new nRb(35,sGb(this.G.k),1,3000);$7b(this.a._,4);d=new e4b(new Rwc);this.d=Y$b(d).i;f=new OOb('./static/textures/lava/cloud.png');IOb(f,(oGb(),nGb));JOb(f,nGb);NNb(yv(SSb(this.d,rUc),226),f);g=new OOb(eUc);IOb(g,nGb);JOb(g,nGb);NNb(yv(SSb(this.d,sUc),226),g);this.b=new kZb(new WXb(0.65,0.3,30,30),d);l5b(this.b.cb,0.3);jQb(this.H,this.b);a=new zIc(this.G.k);e=new HIc(this.H,this.a);b=new sIc(1.25);c=new vIc;c.a=true;Yqb(a.b,e);Yqb(a.b,b);Yqb(a.b,c);tGb(this.G.k,false);this.c=yi()};_.ob=function Unc(a){var b;b=(yi()-this.c)*0.001*5;NNb(yv(SSb(this.d,tUc),226),new skb(yv(yv(SSb(this.d,tUc),226).d,150).a+0.2*b));d5b(this.b.cb,0.05*b);e5b(this.b.cb,0.0125*b);yHb(this.G.k,true);this.c=yi();QHb(this.G.k,this.H,this.a,null,false)};_.c=0;DV(1310,742,QNc,Rwc);_.Ld=function Swc(){nJb(this,uUc,new PNb((gOb(),UNb),new skb(0.45)));nJb(this,vUc,new PNb(cOb,new c8b(0,0,0)));nJb(this,tUc,new PNb(UNb,new skb(1)));nJb(this,qUc,new PNb(aOb,new l7b));nJb(this,wUc,new PNb(aOb,new m7b(3,1)));nJb(this,rUc,new ONb($Nb));nJb(this,sUc,new ONb($Nb))};var Twc;DV(1311,1,{},Ywc);_.Od=function Zwc(){return fxc(),Wwc};_.Pd=function $wc(){return gxc(),Xwc};var Wwc,Xwc;DV(1312,1,{},axc);_.nc=function bxc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};DV(1313,1,{},dxc);_.nc=function exc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};DV(1419,1418,pOc,vIc);_.Sg=function wIc(a,b,c){NNb(yv(SSb(Y$b(this.b).i,MTc),226),a.d);NNb(yv(SSb(Y$b(this.b).i,tUc),226),new skb(yv(yv(SSb(Y$b(this.b).i,tUc),226).d,150).a+b));aUb(a.c,this.b);this.a?QHb(a.u,a.v,a.a,null,false):QHb(a.u,a.v,a.a,a.g,false)};_.a=false;DV(1442,742,QNc,QJc);_.Ld=function RJc(){nJb(this,MTc,new ONb((gOb(),$Nb)));nJb(this,tUc,new PNb(UNb,new skb(0)));nJb(this,yUc,new PNb(UNb,new skb(0.5)));nJb(this,zUc,new PNb(UNb,new skb(0.05)));nJb(this,AUc,new PNb(XNb,$kb(4096)));nJb(this,xUc,new PNb(XNb,(tjb(),tjb(),sjb)))};var SJc;DV(1443,1,{},XJc);_.Od=function YJc(){return eKc(),VJc};_.Pd=function ZJc(){return fKc(),WJc};var VJc,WJc;DV(1444,1,{},_Jc);_.nc=function aKc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};DV(1445,1,{},cKc);_.nc=function dKc(){return BUc};var hO=gkb(ZSc,'MaterialsShaderLava$DemoScene',1175),YR=gkb(CUc,'FilmPass',1419),oQ=gkb(SSc,'LavaShader',1310),rS=gkb(DUc,'FilmShader',1442),nQ=gkb(SSc,'LavaShader_Resources_default_InlineClientBundleGenerator',1311),lQ=gkb(SSc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1312),mQ=gkb(SSc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1313),qS=gkb(DUc,'FilmShader_Resources_default_InlineClientBundleGenerator',1443),oS=gkb(DUc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1444),pS=gkb(DUc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1445);qOc(Ej)(30);