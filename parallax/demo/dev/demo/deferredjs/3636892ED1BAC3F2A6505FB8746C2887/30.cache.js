function Fwc(){}
function Jwc(){}
function Mwc(){}
function EJc(){}
function IJc(){}
function LJc(){}
function ync(){cbc.call(this)}
function ywc(){pJb.call(this,(Bwc(),Awc))}
function xJc(){pJb.call(this,(AJc(),zJc))}
function AJc(){AJc=_Lc;zJc=new EJc}
function NJc(){NJc=_Lc;CJc=new IJc}
function OJc(){OJc=_Lc;DJc=new LJc}
function Owc(){Owc=_Lc;Dwc=new Jwc}
function Bwc(){Bwc=_Lc;Awc=new Fwc}
function Pwc(){Pwc=_Lc;Ewc=new Mwc}
function cIc(){this.b=new W3b(new xJc);DNb(wv(ISb(O$b(this.b).i,cUc),226),(jjb(),jjb(),hjb));DNb(wv(ISb(O$b(this.b).i,dUc),226),new ikb(0.35));DNb(wv(ISb(O$b(this.b).i,eUc),226),new ikb(0.95));DNb(wv(ISb(O$b(this.b).i,fUc),226),Qkb(2048));this.e=true;this.f=true}
var cUc='grayscale',dUc='nIntensity',fUc='sCount',eUc='sIntensity',YTc='texture1',ZTc='texture2';zV(1172,1,LNc);_.Mb=function wnc(){Eac(this.b,new ync(this.a))};zV(1173,988,INc,ync);_.Gd=function znc(a){U6b(wv(wv(ISb(this.d,XTc),226).d,302),a.a.hb);V6b(wv(wv(ISb(this.d,XTc),226).d,302),a.a.gb)};_.nb=function Anc(){var a,b,c,d,e,f,g;lu((dyb(),cyb),(nyb(),myb),this);this.a=new dRb(35,iGb(this.G.k),1,3000);H7b(this.a._,4);d=new W3b(new ywc);this.d=O$b(d).i;f=new EOb('./static/textures/lava/cloud.png');yOb(f,(eGb(),dGb));zOb(f,dGb);DNb(wv(ISb(this.d,YTc),226),f);g=new EOb(LTc);yOb(g,dGb);zOb(g,dGb);DNb(wv(ISb(this.d,ZTc),226),g);this.b=new aZb(new MXb(0.65,0.3,30,30),d);b5b(this.b.cb,0.3);_Pb(this.H,this.b);a=new gIc(this.G.k);e=new oIc(this.H,this.a);b=new _Hc(1.25);c=new cIc;c.a=true;Oqb(a.b,e);Oqb(a.b,b);Oqb(a.b,c);jGb(this.G.k,false);this.c=yi()};_.ob=function Bnc(a){var b;b=(yi()-this.c)*0.001*5;DNb(wv(ISb(this.d,$Tc),226),new ikb(wv(wv(ISb(this.d,$Tc),226).d,150).a+0.2*b));V4b(this.b.cb,0.05*b);W4b(this.b.cb,0.0125*b);oHb(this.G.k,true);this.c=yi();GHb(this.G.k,this.H,this.a,null,false)};_.c=0;zV(1308,740,xNc,ywc);_.Ld=function zwc(){dJb(this,_Tc,new FNb((YNb(),KNb),new ikb(0.45)));dJb(this,aUc,new FNb(UNb,new L7b(0,0,0)));dJb(this,$Tc,new FNb(KNb,new ikb(1)));dJb(this,XTc,new FNb(SNb,new W6b));dJb(this,bUc,new FNb(SNb,new X6b(3,1)));dJb(this,YTc,new ENb(QNb));dJb(this,ZTc,new ENb(QNb))};var Awc;zV(1309,1,{},Fwc);_.Od=function Gwc(){return Owc(),Dwc};_.Pd=function Hwc(){return Pwc(),Ewc};var Dwc,Ewc;zV(1310,1,{},Jwc);_.nc=function Kwc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};zV(1311,1,{},Mwc);_.nc=function Nwc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};zV(1417,1416,YNc,cIc);_.Sg=function dIc(a,b,c){DNb(wv(ISb(O$b(this.b).i,rTc),226),a.d);DNb(wv(ISb(O$b(this.b).i,$Tc),226),new ikb(wv(wv(ISb(O$b(this.b).i,$Tc),226).d,150).a+b));STb(a.c,this.b);this.a?GHb(a.u,a.v,a.a,null,false):GHb(a.u,a.v,a.a,a.g,false)};_.a=false;zV(1440,740,xNc,xJc);_.Ld=function yJc(){dJb(this,rTc,new ENb((YNb(),QNb)));dJb(this,$Tc,new FNb(KNb,new ikb(0)));dJb(this,dUc,new FNb(KNb,new ikb(0.5)));dJb(this,eUc,new FNb(KNb,new ikb(0.05)));dJb(this,fUc,new FNb(NNb,Qkb(4096)));dJb(this,cUc,new FNb(NNb,(jjb(),jjb(),ijb)))};var zJc;zV(1441,1,{},EJc);_.Od=function FJc(){return NJc(),CJc};_.Pd=function GJc(){return OJc(),DJc};var CJc,DJc;zV(1442,1,{},IJc);_.nc=function JJc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};zV(1443,1,{},LJc);_.nc=function MJc(){return gUc};var dO=Yjb(ESc,'MaterialsShaderLava$DemoScene',1173),UR=Yjb(hUc,'FilmPass',1417),kQ=Yjb(xSc,'LavaShader',1308),nS=Yjb(iUc,'FilmShader',1440),jQ=Yjb(xSc,'LavaShader_Resources_default_InlineClientBundleGenerator',1309),hQ=Yjb(xSc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1310),iQ=Yjb(xSc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1311),mS=Yjb(iUc,'FilmShader_Resources_default_InlineClientBundleGenerator',1441),kS=Yjb(iUc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1442),lS=Yjb(iUc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1443);ZNc(Ej)(30);