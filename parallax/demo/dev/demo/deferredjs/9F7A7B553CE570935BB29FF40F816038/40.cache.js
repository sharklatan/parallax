function lKb(){}
function pKb(){}
function sKb(){}
function svc(){}
function cvc(){}
function ovc(){}
function vvc(){}
function Euc(){}
function Iuc(){}
function Luc(){}
function Xuc(){}
function _uc(){}
function W8b(a,b){a.c=b}
function hKb(){hKb=bLc;gKb=new lKb}
function uKb(){uKb=bLc;jKb=new pKb}
function vKb(){vKb=bLc;kKb=new sKb}
function xvc(){xvc=bLc;mvc=new svc}
function kvc(){kvc=bLc;jvc=new ovc}
function yvc(){yvc=bLc;nvc=new vvc}
function fvc(){fvc=bLc;Wuc=new cvc}
function evc(){evc=bLc;Vuc=new _uc}
function Auc(){Auc=bLc;zuc=new Euc}
function Nuc(){Nuc=bLc;Cuc=new Iuc}
function Ouc(){Ouc=bLc;Duc=new Luc}
function Tuc(){Tuc=bLc;Suc=new Xuc}
function ssc(a,b){this.a=a;this.b=b}
function LGb(a,b){wHb(a,b);KGb(a,false)}
function cKb(){OIb.call(this,(hKb(),gKb))}
function xuc(){OIb.call(this,(Auc(),zuc))}
function Quc(){OIb.call(this,(Tuc(),Suc))}
function hvc(){OIb.call(this,(kvc(),jvc))}
function S0b(){u$b.call(this);this.a=false;this.b=1}
function osc(){qac.call(this);this.t=new $6b(0,1000,-1000);this.r=new Z6b}
function R6b(a,b){var c;c=new h5b;f5b(c,b.p,W4b(c,b.X));return J6b(a,c)}
var iUc='bgColor',kUc='fAspect',hUc='fGodRayIntensity',lUc='fStepSize',$Tc='mFar',ZTc='mNear',nUc='tColors',oUc='tGodRays',mUc='tInput',jUc='vSunPositionScreenSpace',pUc='varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}';lU(750,732,zMc,cKb);_.Ld=function dKb(){CIb(this,ZTc,new cNb((vNb(),hNb),new Yjb(1)));CIb(this,$Tc,new cNb(hNb,new Yjb(2000)));CIb(this,ESc,new cNb(hNb,new Yjb(1)))};_.Md=function eKb(a){var b,c;c=new jrb(hu(hS,gLc,1,[_Tc]));b=new jrb(hu(hS,gLc,1,[aUc]));LIb(this,TIb(a,hu(kS,gLc,173,[c,b])))};_.Nd=function fKb(a){var b,c;c=new jrb(hu(hS,gLc,1,[bUc,cUc]));b=new jrb(hu(hS,gLc,1,[dUc,eUc,fUc]));MIb(this,TIb(a,hu(kS,gLc,173,[c,b])))};var gKb;lU(751,1,{},lKb);_.Od=function mKb(){return uKb(),jKb};_.Pd=function nKb(){return vKb(),kKb};var jKb,kKb;lU(752,1,{},pKb);_.nc=function qKb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n[*]\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\r\n\r\n\t#else\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\r\n\t#endif\r\n\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n\r\n}'};lU(753,1,{},sKb);_.nc=function tKb(){return gUc};lU(817,814,{78:1,186:1,235:1,236:1,249:1});_.Zd=function pQb(){return this.b};_.$d=function qQb(){return this.d};lU(818,814,{78:1,186:1,235:1,237:1,249:1});_.Zd=function DQb(){return this.b};_.$d=function EQb(){return this.g};lU(929,922,{279:1,282:1},S0b);_.Re=function T0b(){var a;return a=new S0b,c$b(this,a),a.a=this.a,a.b=this.b,a};_.Se=function U0b(){return new cKb};_.Oe=function V0b(){return this.b};_.Pe=function W0b(){return this.a};_.Te=function X0b(a,b){var c;h$b(this,b);c=g$b(this).i;if(uu(a,235)){aNb(ru(c.a[ZTc],225),new Yjb(ru(a,235).$d()));aNb(ru(c.a[$Tc],225),new Yjb(ru(a,235).Zd()))}aNb(ru(c.a[ESc],225),new Yjb(this.Z))};_.a=false;_.b=0;lU(1241,1,NMc);_.zb=function msc(){S9b(this.b,new osc(this.a))};lU(1242,980,{336:1},osc);_.nb=function psc(){var a,b,c,d;this.a=new BQb(70,RGb(this.G.k),1,3000);W6b(this.a._,200);this.b=new S0b;c=new n0b;h0b(c,new d4b(0));l0b(c,(X_b(),U_b));new Pxc('./static/models/obj/tree/tree.js',new ssc(this,c));a=new bXb(1,20,10);this.s=new yYb(a,c);T6b(this.s.eb,20);yPb(this.H,this.s);zHb(this.G.k,false);jHb(this.G.k,false);mHb(this.G.k,1297,1);this.j=new X8b;this.i=new mQb(this.G.k.Z,this.G.k.Y,-10000,10000);W6b(this.i._,100);yPb(this.j,this.i);this.n=new yOb(this.G.k.Z,this.G.k.Y);QNb(this.n,(CEb(),wEb));ONb(this.n,(rEb(),pEb));LNb(this.n,(NCb(),MCb));this.o=new yOb(this.G.k.Z,this.G.k.Y);QNb(this.o,wEb);ONb(this.o,pEb);LNb(this.o,MCb);d=~~(this.G.k.Z/4);b=~~(this.G.k.Y/4);this.p=new yOb(d,b);QNb(this.p,wEb);ONb(this.p,pEb);LNb(this.p,MCb);this.q=new yOb(d,b);QNb(this.q,wEb);ONb(this.q,pEb);LNb(this.q,MCb);this.e=new o3b(new Quc);this.c=new o3b(new xuc);aNb(ru(eSb(g$b(this.c).i,hUc),225),new Yjb(0.75));this.d=new o3b(new hvc);a4b(ru(ru(eSb(g$b(this.d).i,iUc),225).d,293),1297);a4b(ru(ru(eSb(g$b(this.d).i,rTc),225).d,293),16772608);this.k=new yYb(new SWb(this.G.k.Z,this.G.k.Y),this.e);W6b(this.k._,-9900);yPb(this.j,this.k)};_.ob=function qsc(a){var b,c,d,e,f,g;f=a/4000;h6b(this.s._,200*Ykb(f));W6b(this.s._,200*flb(f)-100);c6b(this.a._,(this.f-this.a._.c)*0.036);d6b(this.a._,(-this.g-this.a._.d)*0.036);XPb(this.a,this.H._);R6b(this.r.nf(this.t),this.a);h6b(this.r,(this.r.c+1)/2);i6b(this.r,(this.r.d+1)/2);g6b(ru(ru(eSb(g$b(this.e).i,jUc),225).d,297),this.r.c,this.r.d);g6b(ru(ru(eSb(g$b(this.d).i,jUc),225).d,297),this.r.c,this.r.d);LGb(this.G.k,this.n);g=this.G.k.Z;b=this.G.k.Y;d=0.74*b;e=0.74*b;h6b(this.r,this.r.c*g);i6b(this.r,this.r.d*b);xHb(this.G.k,zu(this.r.c-e/2),zu(this.r.d-d/2),zu(e),zu(d));QGb(this.G.k,true);aNb(ru(eSb(g$b(this.d).i,kUc),225),new Yjb(g/b));W8b(this.j,this.d);bHb(this.G.k,this.j,this.i,this.n,false);QGb(this.G.k,false);W8b(this.H,null);bHb(this.G.k,this.H,this.a,this.n,false);W8b(this.H,this.b);bHb(this.G.k,this.H,this.a,this.o,true);c=clb(6,-1);aNb(ru(eSb(g$b(this.e).i,lUc),225),new Yjb(c));aNb(ru(eSb(g$b(this.e).i,mUc),225),this.o);W8b(this.j,this.e);bHb(this.G.k,this.j,this.i,this.q,false);c=clb(6,-2);aNb(ru(eSb(g$b(this.e).i,lUc),225),new Yjb(c));aNb(ru(eSb(g$b(this.e).i,mUc),225),this.q);bHb(this.G.k,this.j,this.i,this.p,false);c=clb(6,-3);aNb(ru(eSb(g$b(this.e).i,lUc),225),new Yjb(c));aNb(ru(eSb(g$b(this.e).i,mUc),225),this.p);bHb(this.G.k,this.j,this.i,this.q,false);aNb(ru(eSb(g$b(this.c).i,nUc),225),this.n);aNb(ru(eSb(g$b(this.c).i,oUc),225),this.q);W8b(this.j,this.c);bHb(this.G.k,this.j,this.i,null,false);W8b(this.j,null)};_.f=0;_.g=0;lU(1243,1,{},ssc);_.Bf=function tsc(a,b){var c;c=new yYb(b,this.b);U6b(c._,0,-150,-150);T6b(c.eb,400);c.W=false;R4b(c.V,c._,c.ab,c.eb);c.Y=true;yPb(this.a.H,c)};lU(1279,732,zMc,xuc);_.Ld=function yuc(){CIb(this,nUc,new bNb((vNb(),nNb)));CIb(this,oUc,new bNb(nNb));CIb(this,hUc,new cNb(hNb,new Yjb(0.69)));CIb(this,jUc,new cNb(pNb,new k6b(0.5,0.5)))};var zuc;lU(1280,1,{},Euc);_.Od=function Fuc(){return Nuc(),Cuc};_.Pd=function Guc(){return Ouc(),Duc};var Cuc,Duc;lU(1281,1,{},Iuc);_.nc=function Juc(){return 'varying vec2 vUv;\n\nuniform sampler2D tColors;\nuniform sampler2D tGodRays;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fGodRayIntensity;\n\nvoid main() {\n\n\t// Since THREE.MeshDepthMaterial renders foreground objects white and background\n\t// objects black, the god-rays will be white streaks. Therefore value is inverted\n\t// before being combined with tColors\n\n\tgl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );\n\tgl_FragColor.a = 1.0;\n\n}\n'};lU(1282,1,{},Luc);_.nc=function Muc(){return pUc};lU(1285,732,zMc,Quc);_.Ld=function Ruc(){CIb(this,mUc,new bNb((vNb(),nNb)));CIb(this,lUc,new cNb(hNb,new Yjb(1)));CIb(this,jUc,new cNb(pNb,new k6b(0.5,0.5)))};var Suc;lU(1286,1,{},Xuc);_.Od=function Yuc(){return evc(),Vuc};_.Pd=function Zuc(){return fvc(),Wuc};var Vuc,Wuc;lU(1287,1,{},_uc);_.nc=function avc(){return "#define TAPS_PER_PASS 6.0\n\nvarying vec2 vUv;\n\nuniform sampler2D tInput;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fStepSize; // filter step size\n\nvoid main() {\n\n\t// delta from current pixel to \"sun\" position\n\n\tvec2 delta = vSunPositionScreenSpace - vUv;\n\tfloat dist = length( delta );\n\n\t// Step vector (uv space)\n\n\tvec2 stepv = fStepSize * delta / dist;\n\n\t// Number of iterations between pixel and sun\n\n\tfloat iters = dist/fStepSize;\n\n\tvec2 uv = vUv.xy;\n\tfloat col = 0.0;\n\n\t// This breaks ANGLE in Chrome 22\n\t//\t- see http://code.google.com/p/chromium/issues/detail?id=153105\n\n/*\n\t// Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),\n\t// so i've just left the loop\n\n\tfor ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {\n\n\t\t\t\t\t// Accumulate samples, making sure we dont walk past the light source.\n\n\t\t\t\t\t// The check for uv.y < 1 would not be necessary with \"border\" UV wrap\n\t\t\t\t\t// mode, with a black border colour. I don't think this is currently\n\t\t\t\t\t// exposed by three.js. As a result there might be artifacts when the\n\t\t\t\t\t// sun is to the left, right or bottom of screen as these cases are\n\t\t\t\t\t// not specifically handled.\n\n\t\tcol += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );\n\t\tuv += stepv;\n\n\t}\n*/\n\n\t// Unrolling loop manually makes it work in ANGLE\n\n\tif ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\t// Should technically be dividing by 'iters', but 'TAPS_PER_PASS' smooths out\n\t// objectionable artifacts, in particular near the sun position. The side\n\t// effect is that the result is darker than it should be around the sun, as\n\t// TAPS_PER_PASS is greater than the number of samples actually accumulated.\n\t// When the result is inverted (in the shader 'godrays_combine', this produces\n\t// a slight bright spot at the position of the sun, even when it is occluded.\n\n\tgl_FragColor = vec4( col/TAPS_PER_PASS );\n\tgl_FragColor.a = 1.0;\n\n}\n"};lU(1288,1,{},cvc);_.nc=function dvc(){return pUc};lU(1291,732,zMc,hvc);_.Ld=function ivc(){CIb(this,jUc,new cNb((vNb(),pNb),new k6b(0.5,0.5)));CIb(this,kUc,new cNb(hNb,new Yjb(1)));CIb(this,rTc,new cNb(gNb,new d4b(16772608)));CIb(this,iUc,new cNb(gNb,new d4b(0)))};var jvc;lU(1292,1,{},ovc);_.Od=function pvc(){return xvc(),mvc};_.Pd=function qvc(){return yvc(),nvc};var mvc,nvc;lU(1293,1,{},svc);_.nc=function tvc(){return 'varying vec2 vUv;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fAspect;\n\nuniform vec3 sunColor;\nuniform vec3 bgColor;\n\nvoid main() {\n\n\tvec2 diff = vUv - vSunPositionScreenSpace;\n\n\t// Correct for aspect ratio\n\n\tdiff.x *= fAspect;\n\n\tfloat prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );\n\tprop = 0.35 * pow( 1.0 - prop, 3.0 );\n\n\tgl_FragColor.xyz = mix( sunColor, bgColor, 1.0 - prop );\n\tgl_FragColor.w = 1.0;\n\n}\n'};lU(1294,1,{},vvc);_.nc=function wvc(){return pUc};var mO=Mjb(LRc,'PostprocessingGodrays$DemoScene',1242),lO=Mjb(LRc,'PostprocessingGodrays$DemoScene$1',1243),TI=Mjb(qUc,'MeshDepthMaterial',929),QO=Mjb(BRc,'GodRaysGenerateShader',1285),MO=Mjb(BRc,'GodRaysCombineShader',1279),UO=Mjb(BRc,'GodraysFakeSunShader',1291),ZF=Mjb(QSc,'DepthShader',750),PO=Mjb(BRc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator',1286),NO=Mjb(BRc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$1',1287),OO=Mjb(BRc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$2',1288),LO=Mjb(BRc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator',1280),JO=Mjb(BRc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$1',1281),KO=Mjb(BRc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$2',1282),TO=Mjb(BRc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator',1292),RO=Mjb(BRc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$1',1293),SO=Mjb(BRc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$2',1294),YF=Mjb(QSc,'DepthShader_Resources_default_InlineClientBundleGenerator',751),WF=Mjb(QSc,'DepthShader_Resources_default_InlineClientBundleGenerator$1',752),XF=Mjb(QSc,'DepthShader_Resources_default_InlineClientBundleGenerator$2',753);_Mc(xi)(40);