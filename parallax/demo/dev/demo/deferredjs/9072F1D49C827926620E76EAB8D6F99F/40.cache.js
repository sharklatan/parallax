function BKb(){}
function FKb(){}
function IKb(){}
function kuc(){}
function ouc(){}
function ruc(){}
function Duc(){}
function Huc(){}
function Kuc(){}
function Wuc(){}
function $uc(){}
function bvc(){}
function P8b(a,b){a.d=b}
function xKb(){xKb=JKc;wKb=new BKb}
function KKb(){KKb=JKc;zKb=new FKb}
function LKb(){LKb=JKc;AKb=new IKb}
function guc(){guc=JKc;fuc=new kuc}
function tuc(){tuc=JKc;iuc=new ouc}
function uuc(){uuc=JKc;juc=new ruc}
function zuc(){zuc=JKc;yuc=new Duc}
function Muc(){Muc=JKc;Buc=new Huc}
function Nuc(){Nuc=JKc;Cuc=new Kuc}
function Suc(){Suc=JKc;Ruc=new Wuc}
function dvc(){dvc=JKc;Uuc=new $uc}
function evc(){evc=JKc;Vuc=new bvc}
function $rc(a,b){this.b=a;this.c=b}
function y0b(){a$b.call(this);this.b=false;this.c=1}
function sKb(){cJb.call(this,(xKb(),wKb))}
function duc(){cJb.call(this,(guc(),fuc))}
function wuc(){cJb.call(this,(zuc(),yuc))}
function Puc(){cJb.call(this,(Suc(),Ruc))}
function _Gb(a,b){MHb(a,b);$Gb(a,false)}
function w6b(a,b){var c;c=new O4b;M4b(c,b.q,B4b(c,b.Y));return o6b(a,c)}
function Wrc(){jac.call(this);this.u=new F6b(0,1000,-1000);this.s=new E6b}
var XTc='bgColor',ZTc='fAspect',WTc='fGodRayIntensity',$Tc='fStepSize',NTc='mFar',MTc='mNear',aUc='tColors',bUc='tGodRays',_Tc='tInput',YTc='vSunPositionScreenSpace',cUc='varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}';KU(750,732,hMc,sKb);_.Sd=function tKb(){SIb(this,MTc,new sNb((LNb(),xNb),new okb(1)));SIb(this,NTc,new sNb(xNb,new okb(2000)));SIb(this,rSc,new sNb(xNb,new okb(1)))};_.Td=function uKb(a){var b,c;c=new Brb(Nu(HS,PKc,1,[OTc]));b=new Brb(Nu(HS,PKc,1,[PTc]));_Ib(this,hJb(a,Nu(KS,PKc,173,[c,b])))};_.Ud=function vKb(a){var b,c;c=new Brb(Nu(HS,PKc,1,[QTc,RTc]));b=new Brb(Nu(HS,PKc,1,[STc,TTc,UTc]));aJb(this,hJb(a,Nu(KS,PKc,173,[c,b])))};var wKb;KU(751,1,{},BKb);_.Vd=function CKb(){return KKb(),zKb};_.Wd=function DKb(){return LKb(),AKb};var zKb,AKb;KU(752,1,{},FKb);_.uc=function GKb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n[*]\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\r\n\r\n\t#else\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\r\n\t#endif\r\n\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n\r\n}'};KU(753,1,{},IKb);_.uc=function JKb(){return VTc};KU(817,814,{78:1,186:1,235:1,236:1,249:1});_.ee=function FQb(){return this.c};_.fe=function GQb(){return this.e};KU(818,814,{78:1,186:1,235:1,237:1,249:1});_.ee=function TQb(){return this.c};_.fe=function UQb(){return this.i};KU(922,915,{279:1,282:1},y0b);_.We=function z0b(){var a;return a=new y0b,KZb(this,a),a.b=this.b,a.c=this.c,a};_.Xe=function A0b(){return new sKb};_.Te=function B0b(){return this.c};_.Ue=function C0b(){return this.b};_.Ye=function D0b(a,b){var c;PZb(this,b);c=OZb(this).j;if($u(a,235)){qNb(Xu(c.b[MTc],225),new okb(Xu(a,235).fe()));qNb(Xu(c.b[NTc],225),new okb(Xu(a,235).ee()))}qNb(Xu(c.b[rSc],225),new okb(this.$))};_.b=false;_.c=0;KU(1231,1,uMc);_.Db=function Urc(){L9b(this.c,new Wrc(this.b))};KU(1232,974,{336:1},Wrc);_.ob=function Xrc(){var a,b,c,d;this.b=new RQb(70,fHb(this.H.n),1,3000);B6b(this.b.ab,200);this.c=new y0b;c=new V_b;P_b(c,new K3b(0));T_b(c,(D_b(),A_b));new vxc('./static/models/obj/tree/tree.js',new $rc(this,c));a=new oXb(1,20,10);this.t=new b8b(a,c);y6b(this.t.fb,20);OPb(this.I,this.t);PHb(this.H.n,false);zHb(this.H.n,false);CHb(this.H.n,1297,1);this.k=new Q8b;this.j=new CQb(this.H.n.$,this.H.n.Z,-10000,10000);B6b(this.j.ab,100);OPb(this.k,this.j);this.o=new OOb(this.H.n.$,this.H.n.Z);eOb(this.o,(SEb(),MEb));cOb(this.o,(HEb(),FEb));_Nb(this.o,(bDb(),aDb));this.p=new OOb(this.H.n.$,this.H.n.Z);eOb(this.p,MEb);cOb(this.p,FEb);_Nb(this.p,aDb);d=~~(this.H.n.$/4);b=~~(this.H.n.Z/4);this.q=new OOb(d,b);eOb(this.q,MEb);cOb(this.q,FEb);_Nb(this.q,aDb);this.r=new OOb(d,b);eOb(this.r,MEb);cOb(this.r,FEb);_Nb(this.r,aDb);this.f=new W2b(new wuc);this.d=new W2b(new duc);qNb(Xu(rSb(OZb(this.d).j,WTc),225),new okb(0.75));this.e=new W2b(new Puc);H3b(Xu(Xu(rSb(OZb(this.e).j,XTc),225).e,293),1297);H3b(Xu(Xu(rSb(OZb(this.e).j,eTc),225).e,293),16772608);this.n=new b8b(new dXb(this.H.n.$,this.H.n.Z),this.f);B6b(this.n.ab,-9900);OPb(this.k,this.n)};_.pb=function Yrc(a){var b,c,d,e,f,g;f=a/4000;O5b(this.t.ab,200*olb(f));B6b(this.t.ab,200*xlb(f)-100);J5b(this.b.ab,(this.g-this.b.ab.d)*0.036);K5b(this.b.ab,(-this.i-this.b.ab.e)*0.036);lQb(this.b,this.I.ab);w6b(this.s.sf(this.u),this.b);O5b(this.s,(this.s.d+1)/2);P5b(this.s,(this.s.e+1)/2);N5b(Xu(Xu(rSb(OZb(this.f).j,YTc),225).e,297),this.s.d,this.s.e);N5b(Xu(Xu(rSb(OZb(this.e).j,YTc),225).e,297),this.s.d,this.s.e);_Gb(this.H.n,this.o);g=this.H.n.$;b=this.H.n.Z;d=0.74*b;e=0.74*b;O5b(this.s,this.s.d*g);P5b(this.s,this.s.e*b);NHb(this.H.n,dv(this.s.d-e/2),dv(this.s.e-d/2),dv(e),dv(d));eHb(this.H.n,true);qNb(Xu(rSb(OZb(this.e).j,ZTc),225),new okb(g/b));P8b(this.k,this.e);rHb(this.H.n,this.k,this.j,this.o,false);eHb(this.H.n,false);P8b(this.I,null);rHb(this.H.n,this.I,this.b,this.o,false);P8b(this.I,this.c);rHb(this.H.n,this.I,this.b,this.p,true);c=ulb(6,-1);qNb(Xu(rSb(OZb(this.f).j,$Tc),225),new okb(c));qNb(Xu(rSb(OZb(this.f).j,_Tc),225),this.p);P8b(this.k,this.f);rHb(this.H.n,this.k,this.j,this.r,false);c=ulb(6,-2);qNb(Xu(rSb(OZb(this.f).j,$Tc),225),new okb(c));qNb(Xu(rSb(OZb(this.f).j,_Tc),225),this.r);rHb(this.H.n,this.k,this.j,this.q,false);c=ulb(6,-3);qNb(Xu(rSb(OZb(this.f).j,$Tc),225),new okb(c));qNb(Xu(rSb(OZb(this.f).j,_Tc),225),this.q);rHb(this.H.n,this.k,this.j,this.r,false);qNb(Xu(rSb(OZb(this.d).j,aUc),225),this.o);qNb(Xu(rSb(OZb(this.d).j,bUc),225),this.r);P8b(this.k,this.d);rHb(this.H.n,this.k,this.j,null,false);P8b(this.k,null)};_.g=0;_.i=0;KU(1233,1,{},$rc);_.Hf=function _rc(a,b){var c;c=new b8b(b,this.c);z6b(c.ab,0,-150,-150);y6b(c.fb,400);c.X=false;w4b(c.W,c.ab,c.bb,c.fb);c.Z=true;OPb(this.b.I,c)};KU(1269,732,hMc,duc);_.Sd=function euc(){SIb(this,aUc,new rNb((LNb(),DNb)));SIb(this,bUc,new rNb(DNb));SIb(this,WTc,new sNb(xNb,new okb(0.69)));SIb(this,YTc,new sNb(FNb,new R5b(0.5,0.5)))};var fuc;KU(1270,1,{},kuc);_.Vd=function luc(){return tuc(),iuc};_.Wd=function muc(){return uuc(),juc};var iuc,juc;KU(1271,1,{},ouc);_.uc=function puc(){return 'varying vec2 vUv;\n\nuniform sampler2D tColors;\nuniform sampler2D tGodRays;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fGodRayIntensity;\n\nvoid main() {\n\n\t// Since THREE.MeshDepthMaterial renders foreground objects white and background\n\t// objects black, the god-rays will be white streaks. Therefore value is inverted\n\t// before being combined with tColors\n\n\tgl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );\n\tgl_FragColor.a = 1.0;\n\n}\n'};KU(1272,1,{},ruc);_.uc=function suc(){return cUc};KU(1275,732,hMc,wuc);_.Sd=function xuc(){SIb(this,_Tc,new rNb((LNb(),DNb)));SIb(this,$Tc,new sNb(xNb,new okb(1)));SIb(this,YTc,new sNb(FNb,new R5b(0.5,0.5)))};var yuc;KU(1276,1,{},Duc);_.Vd=function Euc(){return Muc(),Buc};_.Wd=function Fuc(){return Nuc(),Cuc};var Buc,Cuc;KU(1277,1,{},Huc);_.uc=function Iuc(){return "#define TAPS_PER_PASS 6.0\n\nvarying vec2 vUv;\n\nuniform sampler2D tInput;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fStepSize; // filter step size\n\nvoid main() {\n\n\t// delta from current pixel to \"sun\" position\n\n\tvec2 delta = vSunPositionScreenSpace - vUv;\n\tfloat dist = length( delta );\n\n\t// Step vector (uv space)\n\n\tvec2 stepv = fStepSize * delta / dist;\n\n\t// Number of iterations between pixel and sun\n\n\tfloat iters = dist/fStepSize;\n\n\tvec2 uv = vUv.xy;\n\tfloat col = 0.0;\n\n\t// This breaks ANGLE in Chrome 22\n\t//\t- see http://code.google.com/p/chromium/issues/detail?id=153105\n\n/*\n\t// Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),\n\t// so i've just left the loop\n\n\tfor ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {\n\n\t\t\t\t\t// Accumulate samples, making sure we dont walk past the light source.\n\n\t\t\t\t\t// The check for uv.y < 1 would not be necessary with \"border\" UV wrap\n\t\t\t\t\t// mode, with a black border colour. I don't think this is currently\n\t\t\t\t\t// exposed by three.js. As a result there might be artifacts when the\n\t\t\t\t\t// sun is to the left, right or bottom of screen as these cases are\n\t\t\t\t\t// not specifically handled.\n\n\t\tcol += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );\n\t\tuv += stepv;\n\n\t}\n*/\n\n\t// Unrolling loop manually makes it work in ANGLE\n\n\tif ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\t// Should technically be dividing by 'iters', but 'TAPS_PER_PASS' smooths out\n\t// objectionable artifacts, in particular near the sun position. The side\n\t// effect is that the result is darker than it should be around the sun, as\n\t// TAPS_PER_PASS is greater than the number of samples actually accumulated.\n\t// When the result is inverted (in the shader 'godrays_combine', this produces\n\t// a slight bright spot at the position of the sun, even when it is occluded.\n\n\tgl_FragColor = vec4( col/TAPS_PER_PASS );\n\tgl_FragColor.a = 1.0;\n\n}\n"};KU(1278,1,{},Kuc);_.uc=function Luc(){return cUc};KU(1281,732,hMc,Puc);_.Sd=function Quc(){SIb(this,YTc,new sNb((LNb(),FNb),new R5b(0.5,0.5)));SIb(this,ZTc,new sNb(xNb,new okb(1)));SIb(this,eTc,new sNb(wNb,new K3b(16772608)));SIb(this,XTc,new sNb(wNb,new K3b(0)))};var Ruc;KU(1282,1,{},Wuc);_.Vd=function Xuc(){return dvc(),Uuc};_.Wd=function Yuc(){return evc(),Vuc};var Uuc,Vuc;KU(1283,1,{},$uc);_.uc=function _uc(){return 'varying vec2 vUv;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fAspect;\n\nuniform vec3 sunColor;\nuniform vec3 bgColor;\n\nvoid main() {\n\n\tvec2 diff = vUv - vSunPositionScreenSpace;\n\n\t// Correct for aspect ratio\n\n\tdiff.x *= fAspect;\n\n\tfloat prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );\n\tprop = 0.35 * pow( 1.0 - prop, 3.0 );\n\n\tgl_FragColor.xyz = mix( sunColor, bgColor, 1.0 - prop );\n\tgl_FragColor.w = 1.0;\n\n}\n'};KU(1284,1,{},bvc);_.uc=function cvc(){return cUc};var MO=ckb(yRc,'PostprocessingGodrays$DemoScene',1232),LO=ckb(yRc,'PostprocessingGodrays$DemoScene$1',1233),vJ=ckb(dUc,'MeshDepthMaterial',922),oP=ckb(oRc,'GodRaysGenerateShader',1275),kP=ckb(oRc,'GodRaysCombineShader',1269),sP=ckb(oRc,'GodraysFakeSunShader',1281),HG=ckb(DSc,'DepthShader',750),nP=ckb(oRc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator',1276),lP=ckb(oRc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$1',1277),mP=ckb(oRc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$2',1278),jP=ckb(oRc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator',1270),hP=ckb(oRc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$1',1271),iP=ckb(oRc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$2',1272),rP=ckb(oRc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator',1282),pP=ckb(oRc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$1',1283),qP=ckb(oRc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$2',1284),GG=ckb(DSc,'DepthShader_Resources_default_InlineClientBundleGenerator',751),EG=ckb(DSc,'DepthShader_Resources_default_InlineClientBundleGenerator$1',752),FG=ckb(DSc,'DepthShader_Resources_default_InlineClientBundleGenerator$2',753);IMc(Ii)(40);