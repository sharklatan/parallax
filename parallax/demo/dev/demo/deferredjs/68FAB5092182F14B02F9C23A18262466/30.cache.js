function Mwc(){}
function Qwc(){}
function Twc(){}
function LJc(){}
function PJc(){}
function SJc(){}
function Fnc(){jbc.call(this)}
function Fwc(){nJb.call(this,(Iwc(),Hwc))}
function EJc(){nJb.call(this,(HJc(),GJc))}
function HJc(){HJc=gMc;GJc=new LJc}
function UJc(){UJc=gMc;JJc=new PJc}
function VJc(){VJc=gMc;KJc=new SJc}
function Vwc(){Vwc=gMc;Kwc=new Qwc}
function Iwc(){Iwc=gMc;Hwc=new Mwc}
function Wwc(){Wwc=gMc;Lwc=new Twc}
function jIc(){this.b=new U3b(new EJc);BNb(yv(GSb(M$b(this.b).i,uUc),226),(hjb(),hjb(),fjb));BNb(yv(GSb(M$b(this.b).i,vUc),226),new gkb(0.35));BNb(yv(GSb(M$b(this.b).i,wUc),226),new gkb(0.95));BNb(yv(GSb(M$b(this.b).i,xUc),226),Okb(2048));this.e=true;this.f=true}
var uUc='grayscale',vUc='nIntensity',xUc='sCount',wUc='sIntensity',oUc='texture1',pUc='texture2';zV(1169,1,SNc);_.Mb=function Dnc(){Lac(this.b,new Fnc(this.a))};zV(1170,985,PNc,Fnc);_.Gd=function Gnc(a){Z6b(yv(yv(GSb(this.d,nUc),226).d,302),a.a.hb);$6b(yv(yv(GSb(this.d,nUc),226).d,302),a.a.gb)};_.nb=function Hnc(){var a,b,c,d,e,f,g;mu((byb(),ayb),(lyb(),kyb),this);this.a=new bRb(35,gGb(this.G.k),1,3000);O7b(this.a._,4);d=new U3b(new Fwc);this.d=M$b(d).i;f=new COb('./static/textures/lava/cloud.png');wOb(f,(cGb(),bGb));xOb(f,bGb);BNb(yv(GSb(this.d,oUc),226),f);g=new COb(bUc);wOb(g,bGb);xOb(g,bGb);BNb(yv(GSb(this.d,pUc),226),g);this.b=new $Yb(new KXb(0.65,0.3,30,30),d);_4b(this.b.cb,0.3);ZPb(this.H,this.b);a=new nIc(this.G.k);e=new vIc(this.H,this.a);b=new gIc(1.25);c=new jIc;c.a=true;Mqb(a.b,e);Mqb(a.b,b);Mqb(a.b,c);hGb(this.G.k,false);this.c=qi()};_.ob=function Inc(a){var b;b=(qi()-this.c)*0.001*5;BNb(yv(GSb(this.d,qUc),226),new gkb(yv(yv(GSb(this.d,qUc),226).d,150).a+0.2*b));T4b(this.b.cb,0.05*b);U4b(this.b.cb,0.0125*b);mHb(this.G.k,true);this.c=qi();EHb(this.G.k,this.H,this.a,null,false)};_.c=0;zV(1305,737,ENc,Fwc);_.Ld=function Gwc(){bJb(this,rUc,new DNb((WNb(),INb),new gkb(0.45)));bJb(this,sUc,new DNb(SNb,new S7b(0,0,0)));bJb(this,qUc,new DNb(INb,new gkb(1)));bJb(this,nUc,new DNb(QNb,new _6b));bJb(this,tUc,new DNb(QNb,new a7b(3,1)));bJb(this,oUc,new CNb(ONb));bJb(this,pUc,new CNb(ONb))};var Hwc;zV(1306,1,{},Mwc);_.Od=function Nwc(){return Vwc(),Kwc};_.Pd=function Owc(){return Wwc(),Lwc};var Kwc,Lwc;zV(1307,1,{},Qwc);_.nc=function Rwc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};zV(1308,1,{},Twc);_.nc=function Uwc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};zV(1414,1413,dOc,jIc);_.Sg=function kIc(a,b,c){BNb(yv(GSb(M$b(this.b).i,JTc),226),a.d);BNb(yv(GSb(M$b(this.b).i,qUc),226),new gkb(yv(yv(GSb(M$b(this.b).i,qUc),226).d,150).a+b));QTb(a.c,this.b);this.a?EHb(a.u,a.v,a.a,null,false):EHb(a.u,a.v,a.a,a.g,false)};_.a=false;zV(1437,737,ENc,EJc);_.Ld=function FJc(){bJb(this,JTc,new CNb((WNb(),ONb)));bJb(this,qUc,new DNb(INb,new gkb(0)));bJb(this,vUc,new DNb(INb,new gkb(0.5)));bJb(this,wUc,new DNb(INb,new gkb(0.05)));bJb(this,xUc,new DNb(LNb,Okb(4096)));bJb(this,uUc,new DNb(LNb,(hjb(),hjb(),gjb)))};var GJc;zV(1438,1,{},LJc);_.Od=function MJc(){return UJc(),JJc};_.Pd=function NJc(){return VJc(),KJc};var JJc,KJc;zV(1439,1,{},PJc);_.nc=function QJc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};zV(1440,1,{},SJc);_.nc=function TJc(){return yUc};var dO=Wjb(WSc,'MaterialsShaderLava$DemoScene',1170),UR=Wjb(zUc,'FilmPass',1414),kQ=Wjb(PSc,'LavaShader',1305),nS=Wjb(AUc,'FilmShader',1437),jQ=Wjb(PSc,'LavaShader_Resources_default_InlineClientBundleGenerator',1306),hQ=Wjb(PSc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1307),iQ=Wjb(PSc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1308),mS=Wjb(AUc,'FilmShader_Resources_default_InlineClientBundleGenerator',1438),kS=Wjb(AUc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1439),lS=Wjb(AUc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1440);eOc(wj)(30);