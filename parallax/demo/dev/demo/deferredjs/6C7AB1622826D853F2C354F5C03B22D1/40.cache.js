function OKb(){}
function SKb(){}
function VKb(){}
function Pvc(){}
function Tvc(){}
function Wvc(){}
function gwc(){}
function kwc(){}
function nwc(){}
function zwc(){}
function Dwc(){}
function Gwc(){}
function U9b(a,b){a.c=b}
function KKb(){KKb=mMc;JKb=new OKb}
function XKb(){XKb=mMc;MKb=new SKb}
function YKb(){YKb=mMc;NKb=new VKb}
function Yvc(){Yvc=mMc;Nvc=new Tvc}
function Lvc(){Lvc=mMc;Kvc=new Pvc}
function Zvc(){Zvc=mMc;Ovc=new Wvc}
function cwc(){cwc=mMc;bwc=new gwc}
function pwc(){pwc=mMc;ewc=new kwc}
function qwc(){qwc=mMc;fwc=new nwc}
function vwc(){vwc=mMc;uwc=new zwc}
function Iwc(){Iwc=mMc;xwc=new Dwc}
function Jwc(){Jwc=mMc;ywc=new Gwc}
function swc(){pJb.call(this,(vwc(),uwc))}
function _vc(){pJb.call(this,(cwc(),bwc))}
function Ivc(){pJb.call(this,(Lvc(),Kvc))}
function FKb(){pJb.call(this,(KKb(),JKb))}
function rtc(a,b){this.a=a;this.b=b}
function pHb(a,b){ZHb(a,b);oHb(a,false)}
function D1b(){f_b.call(this);this.a=false;this.b=1}
function ntc(){pbc.call(this);this.t=new r8b(0,1000,-1000);this.r=new q8b}
function h8b(a,b){i6b(S7b,b.p,Z5b(S7b,b.X));return _7b(a,S7b)}
var sVc='bgColor',uVc='fAspect',rVc='fGodRayIntensity',vVc='fStepSize',iVc='mFar',hVc='mNear',xVc='tColors',yVc='tGodRays',wVc='tInput',tVc='vSunPositionScreenSpace',zVc='varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}';zV(758,740,KNc,FKb);_.Ld=function GKb(){dJb(this,hVc,new FNb((YNb(),KNb),new ikb(1)));dJb(this,iVc,new FNb(KNb,new ikb(2000)));dJb(this,OTc,new FNb(KNb,new ikb(1)))};_.Md=function HKb(a){var b,c;c=new vrb(mv(vT,rMc,1,[jVc]));b=new vrb(mv(vT,rMc,1,[kVc]));mJb(this,uJb(a,mv(yT,rMc,173,[c,b])))};_.Nd=function IKb(a){var b,c;c=new vrb(mv(vT,rMc,1,[lVc,mVc]));b=new vrb(mv(vT,rMc,1,[nVc,oVc,pVc]));nJb(this,uJb(a,mv(yT,rMc,173,[c,b])))};var JKb;zV(759,1,{},OKb);_.Od=function PKb(){return XKb(),MKb};_.Pd=function QKb(){return YKb(),NKb};var MKb,NKb;zV(760,1,{},SKb);_.nc=function TKb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n[*]\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\r\n\r\n\t#else\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\r\n\t#endif\r\n\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n\r\n}'};zV(761,1,{},VKb);_.nc=function WKb(){return qVc};zV(825,822,{78:1,186:1,236:1,237:1,250:1});_.Zd=function TQb(){return this.b};_.$d=function UQb(){return this.d};zV(826,822,{78:1,186:1,236:1,238:1,250:1});_.Zd=function fRb(){return this.b};_.$d=function gRb(){return this.g};zV(937,930,{284:1,287:1},D1b);_.Se=function E1b(){var a;return a=new D1b,P$b(this,a),a.a=this.a,a.b=this.b,a};_.Te=function F1b(){return new FKb};_.Pe=function G1b(){return this.b};_.Qe=function H1b(){return this.a};_.Ue=function I1b(a,b){var c;U$b(this,b);c=T$b(this).i;if(zv(a,236)){DNb(wv(c.a[hVc],226),new ikb(wv(a,236).$d()));DNb(wv(c.a[iVc],226),new ikb(wv(a,236).Zd()))}DNb(wv(c.a[OTc],226),new ikb(this._))};_.a=false;_.b=0;zV(1249,1,YNc);_.Mb=function ltc(){Rac(this.b,new ntc(this.a))};zV(1250,988,{340:1},ntc);_.nb=function otc(){var a,b,c,d;this.a=new dRb(70,iGb(this.G.k),1,3000);m8b(this.a._,200);this.b=new D1b;c=new $0b;U0b(c,new W4b(0));Y0b(c,(I0b(),F0b));new $yc('./static/models/obj/tree/tree.js',new rtc(this,c));a=new DXb(1,20,10);this.s=new fZb(a,c);j8b(this.s.eb,20);_Pb(this.H,this.s);aIb(this.G.k,false);jGb(this.G.k,false);kGb(this.G.k,1297,1);this.j=new V9b;this.i=new QQb(this.G.k.hb,this.G.k.gb,-10000,10000);m8b(this.i._,100);_Pb(this.j,this.i);this.n=new _Ob(this.G.k.hb,this.G.k.gb);rOb(this.n,(OEb(),IEb));pOb(this.n,(DEb(),BEb));mOb(this.n,(ZCb(),YCb));this.o=new _Ob(this.G.k.hb,this.G.k.gb);rOb(this.o,IEb);pOb(this.o,BEb);mOb(this.o,YCb);d=~~(this.G.k.hb/4);b=~~(this.G.k.gb/4);this.p=new _Ob(d,b);rOb(this.p,IEb);pOb(this.p,BEb);mOb(this.p,YCb);this.q=new _Ob(d,b);rOb(this.q,IEb);pOb(this.q,BEb);mOb(this.q,YCb);this.e=new _3b(new _vc);this.c=new _3b(new Ivc);DNb(wv(HSb(T$b(this.c).i,rVc),226),new ikb(0.75));this.d=new _3b(new swc);S4b(wv(wv(HSb(T$b(this.d).i,sVc),226).d,298),1297);S4b(wv(wv(HSb(T$b(this.d).i,BUc),226).d,298),16772608);this.k=new fZb(new sXb(this.G.k.hb,this.G.k.gb),this.e);m8b(this.k._,-9900);_Pb(this.j,this.k)};_.ob=function ptc(a){var b,c,d,e,f,g;f=a/4000;E7b(this.s._,200*ilb(f));m8b(this.s._,200*rlb(f)-100);y7b(this.a._,(this.f-this.a._.c)*0.036);z7b(this.a._,(-this.g-this.a._.d)*0.036);zQb(this.a,this.H._);h8b(this.r.bf(this.t),this.a);E7b(this.r,(this.r.c+1)/2);F7b(this.r,(this.r.d+1)/2);D7b(wv(wv(HSb(T$b(this.e).i,tVc),226).d,301),this.r.c,this.r.d);D7b(wv(wv(HSb(T$b(this.d).i,tVc),226).d,301),this.r.c,this.r.d);pHb(this.G.k,this.n);g=this.G.k.hb;b=this.G.k.gb;d=0.74*b;e=0.74*b;E7b(this.r,this.r.c*g);F7b(this.r,this.r.d*b);$Hb(this.G.k,Ev(this.r.c-e/2),Ev(this.r.d-d/2),Ev(e),Ev(d));uHb(this.G.k,true);DNb(wv(HSb(T$b(this.d).i,uVc),226),new ikb(g/b));U9b(this.j,this.d);GHb(this.G.k,this.j,this.i,this.n,false);uHb(this.G.k,false);U9b(this.H,null);GHb(this.G.k,this.H,this.a,this.n,false);U9b(this.H,this.b);GHb(this.G.k,this.H,this.a,this.o,true);c=olb(6,-1);DNb(wv(HSb(T$b(this.e).i,vVc),226),new ikb(c));DNb(wv(HSb(T$b(this.e).i,wVc),226),this.o);U9b(this.j,this.e);GHb(this.G.k,this.j,this.i,this.q,false);c=olb(6,-2);DNb(wv(HSb(T$b(this.e).i,vVc),226),new ikb(c));DNb(wv(HSb(T$b(this.e).i,wVc),226),this.q);GHb(this.G.k,this.j,this.i,this.p,false);c=olb(6,-3);DNb(wv(HSb(T$b(this.e).i,vVc),226),new ikb(c));DNb(wv(HSb(T$b(this.e).i,wVc),226),this.p);GHb(this.G.k,this.j,this.i,this.q,false);DNb(wv(HSb(T$b(this.c).i,xVc),226),this.n);DNb(wv(HSb(T$b(this.c).i,yVc),226),this.q);U9b(this.j,this.c);GHb(this.G.k,this.j,this.i,null,false);U9b(this.j,null)};_.f=0;_.g=0;zV(1251,1,{},rtc);_.pf=function stc(a,b){var c;c=new fZb(b,this.b);k8b(c._,0,-150,-150);j8b(c.eb,400);c.W=false;U5b(c.V,c._,c.ab,c.eb);c.Y=true;_Pb(this.a.H,c)};zV(1290,740,KNc,Ivc);_.Ld=function Jvc(){dJb(this,xVc,new ENb((YNb(),QNb)));dJb(this,yVc,new ENb(QNb));dJb(this,rVc,new FNb(KNb,new ikb(0.69)));dJb(this,tVc,new FNb(SNb,new J7b(0.5,0.5)))};var Kvc;zV(1291,1,{},Pvc);_.Od=function Qvc(){return Yvc(),Nvc};_.Pd=function Rvc(){return Zvc(),Ovc};var Nvc,Ovc;zV(1292,1,{},Tvc);_.nc=function Uvc(){return 'varying vec2 vUv;\n\nuniform sampler2D tColors;\nuniform sampler2D tGodRays;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fGodRayIntensity;\n\nvoid main() {\n\n\t// Since THREE.MeshDepthMaterial renders foreground objects white and background\n\t// objects black, the god-rays will be white streaks. Therefore value is inverted\n\t// before being combined with tColors\n\n\tgl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );\n\tgl_FragColor.a = 1.0;\n\n}\n'};zV(1293,1,{},Wvc);_.nc=function Xvc(){return zVc};zV(1296,740,KNc,_vc);_.Ld=function awc(){dJb(this,wVc,new ENb((YNb(),QNb)));dJb(this,vVc,new FNb(KNb,new ikb(1)));dJb(this,tVc,new FNb(SNb,new J7b(0.5,0.5)))};var bwc;zV(1297,1,{},gwc);_.Od=function hwc(){return pwc(),ewc};_.Pd=function iwc(){return qwc(),fwc};var ewc,fwc;zV(1298,1,{},kwc);_.nc=function lwc(){return "#define TAPS_PER_PASS 6.0\n\nvarying vec2 vUv;\n\nuniform sampler2D tInput;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fStepSize; // filter step size\n\nvoid main() {\n\n\t// delta from current pixel to \"sun\" position\n\n\tvec2 delta = vSunPositionScreenSpace - vUv;\n\tfloat dist = length( delta );\n\n\t// Step vector (uv space)\n\n\tvec2 stepv = fStepSize * delta / dist;\n\n\t// Number of iterations between pixel and sun\n\n\tfloat iters = dist/fStepSize;\n\n\tvec2 uv = vUv.xy;\n\tfloat col = 0.0;\n\n\t// This breaks ANGLE in Chrome 22\n\t//\t- see http://code.google.com/p/chromium/issues/detail?id=153105\n\n/*\n\t// Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),\n\t// so i've just left the loop\n\n\tfor ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {\n\n\t\t\t\t\t// Accumulate samples, making sure we dont walk past the light source.\n\n\t\t\t\t\t// The check for uv.y < 1 would not be necessary with \"border\" UV wrap\n\t\t\t\t\t// mode, with a black border colour. I don't think this is currently\n\t\t\t\t\t// exposed by three.js. As a result there might be artifacts when the\n\t\t\t\t\t// sun is to the left, right or bottom of screen as these cases are\n\t\t\t\t\t// not specifically handled.\n\n\t\tcol += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );\n\t\tuv += stepv;\n\n\t}\n*/\n\n\t// Unrolling loop manually makes it work in ANGLE\n\n\tif ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\t// Should technically be dividing by 'iters', but 'TAPS_PER_PASS' smooths out\n\t// objectionable artifacts, in particular near the sun position. The side\n\t// effect is that the result is darker than it should be around the sun, as\n\t// TAPS_PER_PASS is greater than the number of samples actually accumulated.\n\t// When the result is inverted (in the shader 'godrays_combine', this produces\n\t// a slight bright spot at the position of the sun, even when it is occluded.\n\n\tgl_FragColor = vec4( col/TAPS_PER_PASS );\n\tgl_FragColor.a = 1.0;\n\n}\n"};zV(1299,1,{},nwc);_.nc=function owc(){return zVc};zV(1302,740,KNc,swc);_.Ld=function twc(){dJb(this,tVc,new FNb((YNb(),SNb),new J7b(0.5,0.5)));dJb(this,uVc,new FNb(KNb,new ikb(1)));dJb(this,BUc,new FNb(JNb,new W4b(16772608)));dJb(this,sVc,new FNb(JNb,new W4b(0)))};var uwc;zV(1303,1,{},zwc);_.Od=function Awc(){return Iwc(),xwc};_.Pd=function Bwc(){return Jwc(),ywc};var xwc,ywc;zV(1304,1,{},Dwc);_.nc=function Ewc(){return 'varying vec2 vUv;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fAspect;\n\nuniform vec3 sunColor;\nuniform vec3 bgColor;\n\nvoid main() {\n\n\tvec2 diff = vUv - vSunPositionScreenSpace;\n\n\t// Correct for aspect ratio\n\n\tdiff.x *= fAspect;\n\n\tfloat prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );\n\tprop = 0.35 * pow( 1.0 - prop, 3.0 );\n\n\tgl_FragColor.xyz = mix( sunColor, bgColor, 1.0 - prop );\n\tgl_FragColor.w = 1.0;\n\n}\n'};zV(1305,1,{},Gwc);_.nc=function Hwc(){return zVc};var xP=Yjb(USc,'PostprocessingGodrays$DemoScene',1250),wP=Yjb(USc,'PostprocessingGodrays$DemoScene$1',1251),cK=Yjb(AVc,'MeshDepthMaterial',937),cQ=Yjb(KSc,'GodRaysGenerateShader',1296),$P=Yjb(KSc,'GodRaysCombineShader',1290),gQ=Yjb(KSc,'GodraysFakeSunShader',1302),iH=Yjb($Tc,'DepthShader',758),bQ=Yjb(KSc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator',1297),_P=Yjb(KSc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$1',1298),aQ=Yjb(KSc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$2',1299),ZP=Yjb(KSc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator',1291),XP=Yjb(KSc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$1',1292),YP=Yjb(KSc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$2',1293),fQ=Yjb(KSc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator',1303),dQ=Yjb(KSc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$1',1304),eQ=Yjb(KSc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$2',1305),hH=Yjb($Tc,'DepthShader_Resources_default_InlineClientBundleGenerator',759),fH=Yjb($Tc,'DepthShader_Resources_default_InlineClientBundleGenerator$1',760),gH=Yjb($Tc,'DepthShader_Resources_default_InlineClientBundleGenerator$2',761);kOc(Ej)(40);