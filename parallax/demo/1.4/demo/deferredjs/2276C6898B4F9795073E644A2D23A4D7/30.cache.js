function loc(){}
function poc(){}
function soc(){}
function gyc(){}
function kyc(){}
function nyc(){}
function Rgc(){k5b.call(this)}
function eoc(){pFb.call(this,(hoc(),goc))}
function _xc(){pFb.call(this,(cyc(),byc))}
function pyc(){pyc=nzc;eyc=new kyc}
function cyc(){cyc=nzc;byc=new gyc}
function qyc(){qyc=nzc;fyc=new nyc}
function hoc(){hoc=nzc;goc=new loc}
function uoc(){uoc=nzc;joc=new poc}
function voc(){voc=nzc;koc=new soc}
function $wc(){this.b=new w$b(new _xc);iJb(qu(aOb(tVb(this.b).i,gHc),174),(Xfb(),Xfb(),Vfb));iJb(qu(aOb(tVb(this.b).i,hHc),174),new Tgb(0.35));iJb(qu(aOb(tVb(this.b).i,iHc),174),new Tgb(0.95));iJb(qu(aOb(tVb(this.b).i,jHc),174),zhb(2048));this.e=true;this.f=true}
var gHc='grayscale',hHc='nIntensity',jHc='sCount',iHc='sIntensity',cHc='texture1',dHc='texture2';TR(1109,1,TAc);_.yb=function Pgc(){h5b(this.b,new Rgc(this.a))};TR(1110,944,QAc,Rgc);_.Fd=function Sgc(a){q1b(qu(qu(aOb(this.d,bHc),174).d,245),a.a.X);r1b(qu(qu(aOb(this.d,bHc),174).d,245),a.a.W)};_.mb=function Tgc(){var a,b,c,d,e,f,g;et((Gub(),Fub),(Qub(),Pub),this);this.a=new DMb(35,BDb(this.D.n),1,3000);c2b(this.a._,4);d=new w$b(new eoc);this.d=tVb(d).i;f=new jKb('./static/textures/lava/cloud.png');dKb(f,(yCb(),xCb));eKb(f,xCb);iJb(qu(aOb(this.d,cHc),174),f);g=new jKb(OGc);dKb(g,xCb);eKb(g,xCb);iJb(qu(aOb(this.d,dHc),174),g);this.b=new D3b(new bTb(0.65,0.3,30,30),d);y_b(this.b.cb,0.3);ELb(this.F,this.b);a=new bxc(this.D.n);e=new jxc(this.F,this.a);b=new Xwc(1.25);c=new $wc;c.a=true;vnb(a.b,e);vnb(a.b,b);vnb(a.b,c);this.D.n.Y=false;this.c=qh()};_.nb=function Ugc(a){var b;b=(qh()-this.c)*0.001*5;iJb(qu(aOb(this.d,eHc),174),new Tgb(qu(qu(aOb(this.d,eHc),174).d,98).a+0.2*b));q_b(this.b.cb,0.05*b);r_b(this.b.cb,0.0125*b);wDb(this.D.n);this.c=qh();NDb(this.D.n,this.F,this.a,null,false)};_.c=0;TR(1233,717,FAc,eoc);_.Jd=function foc(){dFb(this,WGc,new kJb((DJb(),pJb),new Tgb(0.45)));dFb(this,VGc,new kJb(zJb,new g2b(0,0,0)));dFb(this,eHc,new kJb(pJb,new Tgb(1)));dFb(this,bHc,new kJb(xJb,new s1b));dFb(this,fHc,new kJb(xJb,new t1b(3,1)));dFb(this,cHc,new jJb(vJb));dFb(this,dHc,new jJb(vJb))};var goc;TR(1234,1,{},loc);_.Md=function moc(){return uoc(),joc};_.Nd=function noc(){return voc(),koc};var joc,koc;TR(1235,1,{},poc);_.bc=function qoc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};TR(1236,1,{},soc);_.bc=function toc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};TR(1308,1307,cBc,$wc);_.Dg=function _wc(a,b,c){iJb(qu(aOb(tVb(this.b).i,qGc),174),a.d);iJb(qu(aOb(tVb(this.b).i,eHc),174),new Tgb(qu(qu(aOb(tVb(this.b).i,eHc),174).d,98).a+b));iPb(a.c,this.b);this.a?NDb(a.p,a.q,a.a,null,false):NDb(a.p,a.q,a.a,a.g,false)};_.a=false;TR(1325,717,FAc,_xc);_.Jd=function ayc(){dFb(this,qGc,new jJb((DJb(),vJb)));dFb(this,eHc,new kJb(pJb,new Tgb(0)));dFb(this,hHc,new kJb(pJb,new Tgb(0.5)));dFb(this,iHc,new kJb(pJb,new Tgb(0.05)));dFb(this,jHc,new kJb(sJb,zhb(4096)));dFb(this,gHc,new kJb(sJb,(Xfb(),Xfb(),Wfb)))};var byc;TR(1326,1,{},gyc);_.Md=function hyc(){return pyc(),eyc};_.Nd=function iyc(){return qyc(),fyc};var eyc,fyc;TR(1327,1,{},kyc);_.bc=function lyc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};TR(1328,1,{},nyc);_.bc=function oyc(){return kHc};var _L=Hgb(CFc,'MaterialsShaderLava$DemoScene',1110),FO=Hgb(lHc,'FilmPass',1308),vN=Hgb(vFc,'LavaShader',1233),WO=Hgb(mHc,'FilmShader',1325),uN=Hgb(vFc,'LavaShader_Resources_default_InlineClientBundleGenerator',1234),sN=Hgb(vFc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1235),tN=Hgb(vFc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1236),VO=Hgb(mHc,'FilmShader_Resources_default_InlineClientBundleGenerator',1326),TO=Hgb(mHc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1327),UO=Hgb(mHc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1328);dBc(wi)(30);