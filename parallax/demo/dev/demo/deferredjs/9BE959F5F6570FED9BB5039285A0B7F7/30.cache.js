function Qwc(){}
function Uwc(){}
function Xwc(){}
function PJc(){}
function TJc(){}
function WJc(){}
function Jnc(){nbc.call(this)}
function Jwc(){nJb.call(this,(Mwc(),Lwc))}
function IJc(){nJb.call(this,(LJc(),KJc))}
function LJc(){LJc=kMc;KJc=new PJc}
function YJc(){YJc=kMc;NJc=new TJc}
function ZJc(){ZJc=kMc;OJc=new WJc}
function Zwc(){Zwc=kMc;Owc=new Uwc}
function Mwc(){Mwc=kMc;Lwc=new Qwc}
function $wc(){$wc=kMc;Pwc=new Xwc}
function nIc(){this.b=new Z3b(new IJc);BNb(yv(FSb(R$b(this.b).i,yUc),226),(hjb(),hjb(),fjb));BNb(yv(FSb(R$b(this.b).i,zUc),226),new gkb(0.35));BNb(yv(FSb(R$b(this.b).i,AUc),226),new gkb(0.95));BNb(yv(FSb(R$b(this.b).i,BUc),226),Okb(2048));this.e=true;this.f=true}
var yUc='grayscale',zUc='nIntensity',BUc='sCount',AUc='sIntensity',sUc='texture1',tUc='texture2';zV(1169,1,WNc);_.Mb=function Hnc(){Pac(this.b,new Jnc(this.a))};zV(1170,985,TNc,Jnc);_.Gd=function Knc(a){C7b(yv(yv(FSb(this.d,rUc),226).d,301),a.a.hb);D7b(yv(yv(FSb(this.d,rUc),226).d,301),a.a.gb)};_.nb=function Lnc(){var a,b,c,d,e,f,g;mu((byb(),ayb),(lyb(),kyb),this);this.a=new bRb(35,gGb(this.G.k),1,3000);k8b(this.a._,4);d=new Z3b(new Jwc);this.d=R$b(d).i;f=new COb('./static/textures/lava/cloud.png');wOb(f,(cGb(),bGb));xOb(f,bGb);BNb(yv(FSb(this.d,sUc),226),f);g=new COb(fUc);wOb(g,bGb);xOb(g,bGb);BNb(yv(FSb(this.d,tUc),226),g);this.b=new dZb(new JXb(0.65,0.3,30,30),d);g5b(this.b.cb,0.3);ZPb(this.H,this.b);a=new rIc(this.G.k);e=new zIc(this.H,this.a);b=new kIc(1.25);c=new nIc;c.a=true;Mqb(a.b,e);Mqb(a.b,b);Mqb(a.b,c);hGb(this.G.k,false);this.c=qi()};_.ob=function Mnc(a){var b;b=(qi()-this.c)*0.001*5;BNb(yv(FSb(this.d,uUc),226),new gkb(yv(yv(FSb(this.d,uUc),226).d,150).a+0.2*b));$4b(this.b.cb,0.05*b);_4b(this.b.cb,0.0125*b);mHb(this.G.k,true);this.c=qi();EHb(this.G.k,this.H,this.a,null,false)};_.c=0;zV(1305,737,INc,Jwc);_.Ld=function Kwc(){bJb(this,vUc,new DNb((WNb(),INb),new gkb(0.45)));bJb(this,wUc,new DNb(SNb,new p8b(0,0,0)));bJb(this,uUc,new DNb(INb,new gkb(1)));bJb(this,rUc,new DNb(QNb,new G7b));bJb(this,xUc,new DNb(QNb,new H7b(3,1)));bJb(this,sUc,new CNb(ONb));bJb(this,tUc,new CNb(ONb))};var Lwc;zV(1306,1,{},Qwc);_.Od=function Rwc(){return Zwc(),Owc};_.Pd=function Swc(){return $wc(),Pwc};var Owc,Pwc;zV(1307,1,{},Uwc);_.nc=function Vwc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};zV(1308,1,{},Xwc);_.nc=function Ywc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};zV(1414,1413,hOc,nIc);_.Fg=function oIc(a,b,c){BNb(yv(FSb(R$b(this.b).i,NTc),226),a.d);BNb(yv(FSb(R$b(this.b).i,uUc),226),new gkb(yv(yv(FSb(R$b(this.b).i,uUc),226).d,150).a+b));PTb(a.c,this.b);this.a?EHb(a.u,a.v,a.a,null,false):EHb(a.u,a.v,a.a,a.g,false)};_.a=false;zV(1437,737,INc,IJc);_.Ld=function JJc(){bJb(this,NTc,new CNb((WNb(),ONb)));bJb(this,uUc,new DNb(INb,new gkb(0)));bJb(this,zUc,new DNb(INb,new gkb(0.5)));bJb(this,AUc,new DNb(INb,new gkb(0.05)));bJb(this,BUc,new DNb(LNb,Okb(4096)));bJb(this,yUc,new DNb(LNb,(hjb(),hjb(),gjb)))};var KJc;zV(1438,1,{},PJc);_.Od=function QJc(){return YJc(),NJc};_.Pd=function RJc(){return ZJc(),OJc};var NJc,OJc;zV(1439,1,{},TJc);_.nc=function UJc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};zV(1440,1,{},WJc);_.nc=function XJc(){return CUc};var dO=Wjb($Sc,'MaterialsShaderLava$DemoScene',1170),UR=Wjb(DUc,'FilmPass',1414),kQ=Wjb(TSc,'LavaShader',1305),nS=Wjb(EUc,'FilmShader',1437),jQ=Wjb(TSc,'LavaShader_Resources_default_InlineClientBundleGenerator',1306),hQ=Wjb(TSc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1307),iQ=Wjb(TSc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1308),mS=Wjb(EUc,'FilmShader_Resources_default_InlineClientBundleGenerator',1438),kS=Wjb(EUc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1439),lS=Wjb(EUc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1440);iOc(wj)(30);