function MKb(){}
function QKb(){}
function TKb(){}
function Nvc(){}
function Rvc(){}
function Uvc(){}
function ewc(){}
function iwc(){}
function lwc(){}
function xwc(){}
function Bwc(){}
function Ewc(){}
function S9b(a,b){a.c=b}
function IKb(){IKb=kMc;HKb=new MKb}
function VKb(){VKb=kMc;KKb=new QKb}
function WKb(){WKb=kMc;LKb=new TKb}
function Wvc(){Wvc=kMc;Lvc=new Rvc}
function Jvc(){Jvc=kMc;Ivc=new Nvc}
function Xvc(){Xvc=kMc;Mvc=new Uvc}
function awc(){awc=kMc;_vc=new ewc}
function nwc(){nwc=kMc;cwc=new iwc}
function owc(){owc=kMc;dwc=new lwc}
function twc(){twc=kMc;swc=new xwc}
function Gwc(){Gwc=kMc;vwc=new Bwc}
function Hwc(){Hwc=kMc;wwc=new Ewc}
function qwc(){nJb.call(this,(twc(),swc))}
function Zvc(){nJb.call(this,(awc(),_vc))}
function Gvc(){nJb.call(this,(Jvc(),Ivc))}
function DKb(){nJb.call(this,(IKb(),HKb))}
function ptc(a,b){this.a=a;this.b=b}
function nHb(a,b){XHb(a,b);mHb(a,false)}
function B1b(){d_b.call(this);this.a=false;this.b=1}
function ltc(){nbc.call(this);this.t=new p8b(0,1000,-1000);this.r=new o8b}
function f8b(a,b){g6b(Q7b,b.p,X5b(Q7b,b.X));return Z7b(a,Q7b)}
var BVc='bgColor',DVc='fAspect',AVc='fGodRayIntensity',EVc='fStepSize',rVc='mFar',qVc='mNear',GVc='tColors',HVc='tGodRays',FVc='tInput',CVc='vSunPositionScreenSpace',IVc='varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}';zV(755,737,INc,DKb);_.Ld=function EKb(){bJb(this,qVc,new DNb((WNb(),INb),new gkb(1)));bJb(this,rVc,new DNb(INb,new gkb(2000)));bJb(this,XTc,new DNb(INb,new gkb(1)))};_.Md=function FKb(a){var b,c;c=new trb(ov(vT,pMc,1,[sVc]));b=new trb(ov(vT,pMc,1,[tVc]));kJb(this,sJb(a,ov(yT,pMc,173,[c,b])))};_.Nd=function GKb(a){var b,c;c=new trb(ov(vT,pMc,1,[uVc,vVc]));b=new trb(ov(vT,pMc,1,[wVc,xVc,yVc]));lJb(this,sJb(a,ov(yT,pMc,173,[c,b])))};var HKb;zV(756,1,{},MKb);_.Od=function NKb(){return VKb(),KKb};_.Pd=function OKb(){return WKb(),LKb};var KKb,LKb;zV(757,1,{},QKb);_.nc=function RKb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n[*]\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\r\n\r\n\t#else\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\r\n\t#endif\r\n\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n\r\n}'};zV(758,1,{},TKb);_.nc=function UKb(){return zVc};zV(822,819,{78:1,186:1,236:1,237:1,250:1});_.Zd=function RQb(){return this.b};_.$d=function SQb(){return this.d};zV(823,819,{78:1,186:1,236:1,238:1,250:1});_.Zd=function dRb(){return this.b};_.$d=function eRb(){return this.g};zV(934,927,{284:1,287:1},B1b);_.Se=function C1b(){var a;return a=new B1b,N$b(this,a),a.a=this.a,a.b=this.b,a};_.Te=function D1b(){return new DKb};_.Pe=function E1b(){return this.b};_.Qe=function F1b(){return this.a};_.Ue=function G1b(a,b){var c;S$b(this,b);c=R$b(this).i;if(Bv(a,236)){BNb(yv(c.a[qVc],226),new gkb(yv(a,236).$d()));BNb(yv(c.a[rVc],226),new gkb(yv(a,236).Zd()))}BNb(yv(c.a[XTc],226),new gkb(this._))};_.a=false;_.b=0;zV(1246,1,WNc);_.Mb=function jtc(){Pac(this.b,new ltc(this.a))};zV(1247,985,{340:1},ltc);_.nb=function mtc(){var a,b,c,d;this.a=new bRb(70,gGb(this.G.k),1,3000);k8b(this.a._,200);this.b=new B1b;c=new Y0b;S0b(c,new U4b(0));W0b(c,(G0b(),D0b));new Yyc('./static/models/obj/tree/tree.js',new ptc(this,c));a=new BXb(1,20,10);this.s=new dZb(a,c);h8b(this.s.eb,20);ZPb(this.H,this.s);$Hb(this.G.k,false);hGb(this.G.k,false);iGb(this.G.k,1297,1);this.j=new T9b;this.i=new OQb(this.G.k.hb,this.G.k.gb,-10000,10000);k8b(this.i._,100);ZPb(this.j,this.i);this.n=new ZOb(this.G.k.hb,this.G.k.gb);pOb(this.n,(MEb(),GEb));nOb(this.n,(BEb(),zEb));kOb(this.n,(XCb(),WCb));this.o=new ZOb(this.G.k.hb,this.G.k.gb);pOb(this.o,GEb);nOb(this.o,zEb);kOb(this.o,WCb);d=~~(this.G.k.hb/4);b=~~(this.G.k.gb/4);this.p=new ZOb(d,b);pOb(this.p,GEb);nOb(this.p,zEb);kOb(this.p,WCb);this.q=new ZOb(d,b);pOb(this.q,GEb);nOb(this.q,zEb);kOb(this.q,WCb);this.e=new Z3b(new Zvc);this.c=new Z3b(new Gvc);BNb(yv(FSb(R$b(this.c).i,AVc),226),new gkb(0.75));this.d=new Z3b(new qwc);Q4b(yv(yv(FSb(R$b(this.d).i,BVc),226).d,298),1297);Q4b(yv(yv(FSb(R$b(this.d).i,KUc),226).d,298),16772608);this.k=new dZb(new qXb(this.G.k.hb,this.G.k.gb),this.e);k8b(this.k._,-9900);ZPb(this.j,this.k)};_.ob=function ntc(a){var b,c,d,e,f,g;f=a/4000;C7b(this.s._,200*glb(f));k8b(this.s._,200*plb(f)-100);w7b(this.a._,(this.f-this.a._.c)*0.036);x7b(this.a._,(-this.g-this.a._.d)*0.036);xQb(this.a,this.H._);f8b(this.r.bf(this.t),this.a);C7b(this.r,(this.r.c+1)/2);D7b(this.r,(this.r.d+1)/2);B7b(yv(yv(FSb(R$b(this.e).i,CVc),226).d,301),this.r.c,this.r.d);B7b(yv(yv(FSb(R$b(this.d).i,CVc),226).d,301),this.r.c,this.r.d);nHb(this.G.k,this.n);g=this.G.k.hb;b=this.G.k.gb;d=0.74*b;e=0.74*b;C7b(this.r,this.r.c*g);D7b(this.r,this.r.d*b);YHb(this.G.k,Gv(this.r.c-e/2),Gv(this.r.d-d/2),Gv(e),Gv(d));sHb(this.G.k,true);BNb(yv(FSb(R$b(this.d).i,DVc),226),new gkb(g/b));S9b(this.j,this.d);EHb(this.G.k,this.j,this.i,this.n,false);sHb(this.G.k,false);S9b(this.H,null);EHb(this.G.k,this.H,this.a,this.n,false);S9b(this.H,this.b);EHb(this.G.k,this.H,this.a,this.o,true);c=mlb(6,-1);BNb(yv(FSb(R$b(this.e).i,EVc),226),new gkb(c));BNb(yv(FSb(R$b(this.e).i,FVc),226),this.o);S9b(this.j,this.e);EHb(this.G.k,this.j,this.i,this.q,false);c=mlb(6,-2);BNb(yv(FSb(R$b(this.e).i,EVc),226),new gkb(c));BNb(yv(FSb(R$b(this.e).i,FVc),226),this.q);EHb(this.G.k,this.j,this.i,this.p,false);c=mlb(6,-3);BNb(yv(FSb(R$b(this.e).i,EVc),226),new gkb(c));BNb(yv(FSb(R$b(this.e).i,FVc),226),this.p);EHb(this.G.k,this.j,this.i,this.q,false);BNb(yv(FSb(R$b(this.c).i,GVc),226),this.n);BNb(yv(FSb(R$b(this.c).i,HVc),226),this.q);S9b(this.j,this.c);EHb(this.G.k,this.j,this.i,null,false);S9b(this.j,null)};_.f=0;_.g=0;zV(1248,1,{},ptc);_.pf=function qtc(a,b){var c;c=new dZb(b,this.b);i8b(c._,0,-150,-150);h8b(c.eb,400);c.W=false;S5b(c.V,c._,c.ab,c.eb);c.Y=true;ZPb(this.a.H,c)};zV(1287,737,INc,Gvc);_.Ld=function Hvc(){bJb(this,GVc,new CNb((WNb(),ONb)));bJb(this,HVc,new CNb(ONb));bJb(this,AVc,new DNb(INb,new gkb(0.69)));bJb(this,CVc,new DNb(QNb,new H7b(0.5,0.5)))};var Ivc;zV(1288,1,{},Nvc);_.Od=function Ovc(){return Wvc(),Lvc};_.Pd=function Pvc(){return Xvc(),Mvc};var Lvc,Mvc;zV(1289,1,{},Rvc);_.nc=function Svc(){return 'varying vec2 vUv;\n\nuniform sampler2D tColors;\nuniform sampler2D tGodRays;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fGodRayIntensity;\n\nvoid main() {\n\n\t// Since THREE.MeshDepthMaterial renders foreground objects white and background\n\t// objects black, the god-rays will be white streaks. Therefore value is inverted\n\t// before being combined with tColors\n\n\tgl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );\n\tgl_FragColor.a = 1.0;\n\n}\n'};zV(1290,1,{},Uvc);_.nc=function Vvc(){return IVc};zV(1293,737,INc,Zvc);_.Ld=function $vc(){bJb(this,FVc,new CNb((WNb(),ONb)));bJb(this,EVc,new DNb(INb,new gkb(1)));bJb(this,CVc,new DNb(QNb,new H7b(0.5,0.5)))};var _vc;zV(1294,1,{},ewc);_.Od=function fwc(){return nwc(),cwc};_.Pd=function gwc(){return owc(),dwc};var cwc,dwc;zV(1295,1,{},iwc);_.nc=function jwc(){return "#define TAPS_PER_PASS 6.0\n\nvarying vec2 vUv;\n\nuniform sampler2D tInput;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fStepSize; // filter step size\n\nvoid main() {\n\n\t// delta from current pixel to \"sun\" position\n\n\tvec2 delta = vSunPositionScreenSpace - vUv;\n\tfloat dist = length( delta );\n\n\t// Step vector (uv space)\n\n\tvec2 stepv = fStepSize * delta / dist;\n\n\t// Number of iterations between pixel and sun\n\n\tfloat iters = dist/fStepSize;\n\n\tvec2 uv = vUv.xy;\n\tfloat col = 0.0;\n\n\t// This breaks ANGLE in Chrome 22\n\t//\t- see http://code.google.com/p/chromium/issues/detail?id=153105\n\n/*\n\t// Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),\n\t// so i've just left the loop\n\n\tfor ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {\n\n\t\t\t\t\t// Accumulate samples, making sure we dont walk past the light source.\n\n\t\t\t\t\t// The check for uv.y < 1 would not be necessary with \"border\" UV wrap\n\t\t\t\t\t// mode, with a black border colour. I don't think this is currently\n\t\t\t\t\t// exposed by three.js. As a result there might be artifacts when the\n\t\t\t\t\t// sun is to the left, right or bottom of screen as these cases are\n\t\t\t\t\t// not specifically handled.\n\n\t\tcol += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );\n\t\tuv += stepv;\n\n\t}\n*/\n\n\t// Unrolling loop manually makes it work in ANGLE\n\n\tif ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\t// Should technically be dividing by 'iters', but 'TAPS_PER_PASS' smooths out\n\t// objectionable artifacts, in particular near the sun position. The side\n\t// effect is that the result is darker than it should be around the sun, as\n\t// TAPS_PER_PASS is greater than the number of samples actually accumulated.\n\t// When the result is inverted (in the shader 'godrays_combine', this produces\n\t// a slight bright spot at the position of the sun, even when it is occluded.\n\n\tgl_FragColor = vec4( col/TAPS_PER_PASS );\n\tgl_FragColor.a = 1.0;\n\n}\n"};zV(1296,1,{},lwc);_.nc=function mwc(){return IVc};zV(1299,737,INc,qwc);_.Ld=function rwc(){bJb(this,CVc,new DNb((WNb(),QNb),new H7b(0.5,0.5)));bJb(this,DVc,new DNb(INb,new gkb(1)));bJb(this,KUc,new DNb(HNb,new U4b(16772608)));bJb(this,BVc,new DNb(HNb,new U4b(0)))};var swc;zV(1300,1,{},xwc);_.Od=function ywc(){return Gwc(),vwc};_.Pd=function zwc(){return Hwc(),wwc};var vwc,wwc;zV(1301,1,{},Bwc);_.nc=function Cwc(){return 'varying vec2 vUv;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fAspect;\n\nuniform vec3 sunColor;\nuniform vec3 bgColor;\n\nvoid main() {\n\n\tvec2 diff = vUv - vSunPositionScreenSpace;\n\n\t// Correct for aspect ratio\n\n\tdiff.x *= fAspect;\n\n\tfloat prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );\n\tprop = 0.35 * pow( 1.0 - prop, 3.0 );\n\n\tgl_FragColor.xyz = mix( sunColor, bgColor, 1.0 - prop );\n\tgl_FragColor.w = 1.0;\n\n}\n'};zV(1302,1,{},Ewc);_.nc=function Fwc(){return IVc};var xP=Wjb(bTc,'PostprocessingGodrays$DemoScene',1247),wP=Wjb(bTc,'PostprocessingGodrays$DemoScene$1',1248),cK=Wjb(JVc,'MeshDepthMaterial',934),cQ=Wjb(TSc,'GodRaysGenerateShader',1293),$P=Wjb(TSc,'GodRaysCombineShader',1287),gQ=Wjb(TSc,'GodraysFakeSunShader',1299),iH=Wjb(hUc,'DepthShader',755),bQ=Wjb(TSc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator',1294),_P=Wjb(TSc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$1',1295),aQ=Wjb(TSc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$2',1296),ZP=Wjb(TSc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator',1288),XP=Wjb(TSc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$1',1289),YP=Wjb(TSc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$2',1290),fQ=Wjb(TSc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator',1300),dQ=Wjb(TSc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$1',1301),eQ=Wjb(TSc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$2',1302),hH=Wjb(hUc,'DepthShader_Resources_default_InlineClientBundleGenerator',756),fH=Wjb(hUc,'DepthShader_Resources_default_InlineClientBundleGenerator$1',757),gH=Wjb(hUc,'DepthShader_Resources_default_InlineClientBundleGenerator$2',758);iOc(wj)(40);