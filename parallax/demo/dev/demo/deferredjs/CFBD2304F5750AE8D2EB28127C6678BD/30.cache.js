function Muc(){}
function Quc(){}
function Tuc(){}
function LHc(){}
function PHc(){}
function SHc(){}
function dmc(){I9b.call(this)}
function Fuc(){BIb.call(this,(Iuc(),Huc))}
function EHc(){BIb.call(this,(HHc(),GHc))}
function Iuc(){Iuc=gKc;Huc=new Muc}
function Vuc(){Vuc=gKc;Kuc=new Quc}
function Wuc(){Wuc=gKc;Luc=new Tuc}
function HHc(){HHc=gKc;GHc=new LHc}
function UHc(){UHc=gKc;JHc=new PHc}
function VHc(){VHc=gKc;KHc=new SHc}
function jGc(){this.b=new t2b(new EHc);PMb(su(QRb(lZb(this.b).i,gSc),225),(Qib(),Qib(),Oib));PMb(su(QRb(lZb(this.b).i,hSc),225),new Pjb(0.35));PMb(su(QRb(lZb(this.b).i,iSc),225),new Pjb(0.95));PMb(su(QRb(lZb(this.b).i,jSc),225),vkb(2048));this.e=true;this.f=true}
var gSc='grayscale',hSc='nIntensity',jSc='sCount',iSc='sIntensity',aSc='texture1',bSc='texture2';bU(1158,1,RLc);_.zb=function bmc(){i9b(this.b,new dmc(this.a))};bU(1159,974,OLc,dmc);_.Gd=function emc(a){l5b(su(su(QRb(this.d,_Rc),225).d,297),a.a.Z);m5b(su(su(QRb(this.d,_Rc),225).d,297),a.a.Y)};_.nb=function fmc(){var a,b,c,d,e,f,g;gt((Ixb(),Hxb),(Sxb(),Rxb),this);this.a=new oQb(35,EGb(this.G.k),1,3000);$5b(this.a._,4);d=new t2b(new Fuc);this.d=lZb(d).i;f=new QNb('./static/textures/lava/cloud.png');KNb(f,(HFb(),GFb));LNb(f,GFb);PMb(su(QRb(this.d,aSc),225),f);g=new QNb(PRc);KNb(g,GFb);LNb(g,GFb);PMb(su(QRb(this.d,bSc),225),g);this.b=new A7b(new VWb(0.65,0.3,30,30),d);u3b(this.b.cb,0.3);lPb(this.H,this.b);a=new nGc(this.G.k);e=new vGc(this.H,this.a);b=new gGc(1.25);c=new jGc;c.a=true;sqb(a.b,e);sqb(a.b,b);sqb(a.b,c);YGb(this.G.k,false);this.c=rh()};_.ob=function gmc(a){var b;b=(rh()-this.c)*0.001*5;PMb(su(QRb(this.d,cSc),225),new Pjb(su(su(QRb(this.d,cSc),225).d,150).a+0.2*b));m3b(this.b.cb,0.05*b);n3b(this.b.cb,0.0125*b);xGb(this.G.k,true);this.c=rh();QGb(this.G.k,this.H,this.a,null,false)};_.c=0;bU(1287,732,ELc,Fuc);_.Ld=function Guc(){pIb(this,dSc,new RMb((iNb(),WMb),new Pjb(0.45)));pIb(this,eSc,new RMb(eNb,new c6b(0,0,0)));pIb(this,cSc,new RMb(WMb,new Pjb(1)));pIb(this,_Rc,new RMb(cNb,new n5b));pIb(this,fSc,new RMb(cNb,new o5b(3,1)));pIb(this,aSc,new QMb(aNb));pIb(this,bSc,new QMb(aNb))};var Huc;bU(1288,1,{},Muc);_.Od=function Nuc(){return Vuc(),Kuc};_.Pd=function Ouc(){return Wuc(),Luc};var Kuc,Luc;bU(1289,1,{},Quc);_.nc=function Ruc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};bU(1290,1,{},Tuc);_.nc=function Uuc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};bU(1396,1395,cMc,jGc);_.Qg=function kGc(a,b,c){PMb(su(QRb(lZb(this.b).i,vRc),225),a.d);PMb(su(QRb(lZb(this.b).i,cSc),225),new Pjb(su(su(QRb(lZb(this.b).i,cSc),225).d,150).a+b));$Sb(a.c,this.b);this.a?QGb(a.u,a.v,a.a,null,false):QGb(a.u,a.v,a.a,a.g,false)};_.a=false;bU(1419,732,ELc,EHc);_.Ld=function FHc(){pIb(this,vRc,new QMb((iNb(),aNb)));pIb(this,cSc,new RMb(WMb,new Pjb(0)));pIb(this,hSc,new RMb(WMb,new Pjb(0.5)));pIb(this,iSc,new RMb(WMb,new Pjb(0.05)));pIb(this,jSc,new RMb(ZMb,vkb(4096)));pIb(this,gSc,new RMb(ZMb,(Qib(),Qib(),Pib)))};var GHc;bU(1420,1,{},LHc);_.Od=function MHc(){return UHc(),JHc};_.Pd=function NHc(){return VHc(),KHc};var JHc,KHc;bU(1421,1,{},PHc);_.nc=function QHc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};bU(1422,1,{},SHc);_.nc=function THc(){return kSc};var PM=Djb(JQc,'MaterialsShaderLava$DemoScene',1159),xQ=Djb(lSc,'FilmPass',1396),PO=Djb(CQc,'LavaShader',1287),SQ=Djb(mSc,'FilmShader',1419),OO=Djb(CQc,'LavaShader_Resources_default_InlineClientBundleGenerator',1288),MO=Djb(CQc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1289),NO=Djb(CQc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1290),RQ=Djb(mSc,'FilmShader_Resources_default_InlineClientBundleGenerator',1420),PQ=Djb(mSc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1421),QQ=Djb(mSc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1422);dMc(xi)(30);