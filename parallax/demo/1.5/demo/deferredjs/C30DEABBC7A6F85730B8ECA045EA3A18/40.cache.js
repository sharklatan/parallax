function dKb(){}
function hKb(){}
function kKb(){}
function kuc(){}
function duc(){}
function huc(){}
function wuc(){}
function Auc(){}
function Duc(){}
function Mtc(){}
function Qtc(){}
function Ttc(){}
function r8b(a,b){a.d=b}
function _Jb(){_Jb=jKc;$Jb=new dKb}
function mKb(){mKb=jKc;bKb=new hKb}
function nKb(){nKb=jKc;cKb=new kKb}
function nuc(){nuc=jKc;cuc=new kuc}
function muc(){muc=jKc;buc=new huc}
function suc(){suc=jKc;ruc=new wuc}
function Fuc(){Fuc=jKc;uuc=new Auc}
function Guc(){Guc=jKc;vuc=new Duc}
function _tc(){_tc=jKc;$tc=new duc}
function Itc(){Itc=jKc;Htc=new Mtc}
function Vtc(){Vtc=jKc;Ktc=new Qtc}
function Wtc(){Wtc=jKc;Ltc=new Ttc}
function Arc(a,b){this.b=a;this.c=b}
function DGb(a,b){oHb(a,b);CGb(a,false)}
function WJb(){GIb.call(this,(_Jb(),$Jb))}
function Ytc(){GIb.call(this,(_tc(),$tc))}
function Ftc(){GIb.call(this,(Itc(),Htc))}
function puc(){GIb.call(this,(suc(),ruc))}
function a0b(){EZb.call(this);this.b=false;this.c=1}
function wrc(){N9b.call(this);this.u=new h6b(0,1000,-1000);this.s=new g6b}
function $5b(a,b){var c;c=new q4b;o4b(c,b.q,d4b(c,b.Y));return S5b(a,c)}
var sTc='bgColor',uTc='fAspect',rTc='fGodRayIntensity',vTc='fStepSize',iTc='mFar',hTc='mNear',xTc='tColors',yTc='tGodRays',wTc='tInput',tTc='vSunPositionScreenSpace',zTc='varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}';mU(743,725,JLc,WJb);_.Od=function XJb(){uIb(this,hTc,new WMb((nNb(),_Mb),new Tjb(1)));uIb(this,iTc,new WMb(_Mb,new Tjb(2000)));uIb(this,ORc,new WMb(_Mb,new Tjb(1)))};_.Pd=function YJb(a){var b,c;c=new drb(uu(jS,pKc,1,[jTc]));b=new drb(uu(jS,pKc,1,[kTc]));DIb(this,LIb(a,uu(mS,pKc,173,[c,b])))};_.Qd=function ZJb(a){var b,c;c=new drb(uu(jS,pKc,1,[lTc,mTc]));b=new drb(uu(jS,pKc,1,[nTc,oTc,pTc]));EIb(this,LIb(a,uu(mS,pKc,173,[c,b])))};var $Jb;mU(744,1,{},dKb);_.Rd=function eKb(){return mKb(),bKb};_.Sd=function fKb(){return nKb(),cKb};var bKb,cKb;mU(745,1,{},hKb);_.qc=function iKb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n[*]\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\r\n\r\n\t#else\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\r\n\t#endif\r\n\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n\r\n}'};mU(746,1,{},kKb);_.qc=function lKb(){return qTc};mU(810,807,{78:1,186:1,235:1,236:1,249:1});_.ae=function hQb(){return this.c};_.be=function iQb(){return this.e};mU(811,807,{78:1,186:1,235:1,237:1,249:1});_.ae=function vQb(){return this.c};_.be=function wQb(){return this.i};mU(915,908,{279:1,282:1},a0b);_.Se=function b0b(){var a;return a=new a0b,mZb(this,a),a.b=this.b,a.c=this.c,a};_.Te=function c0b(){return new WJb};_.Pe=function d0b(){return this.c};_.Qe=function e0b(){return this.b};_.Ue=function f0b(a,b){var c;rZb(this,b);c=qZb(this).j;if(Hu(a,235)){UMb(Eu(c.b[hTc],225),new Tjb(Eu(a,235).be()));UMb(Eu(c.b[iTc],225),new Tjb(Eu(a,235).ae()))}UMb(Eu(c.b[ORc],225),new Tjb(this.$))};_.b=false;_.c=0;mU(1223,1,WLc);_.Db=function urc(){n9b(this.c,new wrc(this.b))};mU(1224,967,{336:1},wrc);_.ob=function xrc(){var a,b,c,d;this.b=new tQb(70,JGb(this.H.n),1,3000);d6b(this.b.ab,200);this.c=new a0b;c=new x_b;r_b(c,new m3b(0));v_b(c,(f_b(),c_b));new Xwc('./static/models/obj/tree/tree.js',new Arc(this,c));a=new SWb(1,20,10);this.t=new F7b(a,c);a6b(this.t.fb,20);qPb(this.I,this.t);rHb(this.H.n,false);bHb(this.H.n,false);eHb(this.H.n,1297,1);this.k=new s8b;this.j=new eQb(this.H.n.$,this.H.n.Z,-10000,10000);d6b(this.j.ab,100);qPb(this.k,this.j);this.o=new qOb(this.H.n.$,this.H.n.Z);INb(this.o,(uEb(),oEb));GNb(this.o,(jEb(),hEb));DNb(this.o,(FCb(),ECb));this.p=new qOb(this.H.n.$,this.H.n.Z);INb(this.p,oEb);GNb(this.p,hEb);DNb(this.p,ECb);d=~~(this.H.n.$/4);b=~~(this.H.n.Z/4);this.q=new qOb(d,b);INb(this.q,oEb);GNb(this.q,hEb);DNb(this.q,ECb);this.r=new qOb(d,b);INb(this.r,oEb);GNb(this.r,hEb);DNb(this.r,ECb);this.f=new y2b(new Ytc);this.d=new y2b(new Ftc);UMb(Eu(VRb(qZb(this.d).j,rTc),225),new Tjb(0.75));this.e=new y2b(new puc);j3b(Eu(Eu(VRb(qZb(this.e).j,sTc),225).e,293),1297);j3b(Eu(Eu(VRb(qZb(this.e).j,BSc),225).e,293),16772608);this.n=new F7b(new HWb(this.H.n.$,this.H.n.Z),this.f);d6b(this.n.ab,-9900);qPb(this.k,this.n)};_.pb=function yrc(a){var b,c,d,e,f,g;f=a/4000;q5b(this.t.ab,200*Tkb(f));d6b(this.t.ab,200*alb(f)-100);l5b(this.b.ab,(this.g-this.b.ab.d)*0.036);m5b(this.b.ab,(-this.i-this.b.ab.e)*0.036);PPb(this.b,this.I.ab);$5b(this.s.of(this.u),this.b);q5b(this.s,(this.s.d+1)/2);r5b(this.s,(this.s.e+1)/2);p5b(Eu(Eu(VRb(qZb(this.f).j,tTc),225).e,297),this.s.d,this.s.e);p5b(Eu(Eu(VRb(qZb(this.e).j,tTc),225).e,297),this.s.d,this.s.e);DGb(this.H.n,this.o);g=this.H.n.$;b=this.H.n.Z;d=0.74*b;e=0.74*b;q5b(this.s,this.s.d*g);r5b(this.s,this.s.e*b);pHb(this.H.n,Mu(this.s.d-e/2),Mu(this.s.e-d/2),Mu(e),Mu(d));IGb(this.H.n,true);UMb(Eu(VRb(qZb(this.e).j,uTc),225),new Tjb(g/b));r8b(this.k,this.e);VGb(this.H.n,this.k,this.j,this.o,false);IGb(this.H.n,false);r8b(this.I,null);VGb(this.H.n,this.I,this.b,this.o,false);r8b(this.I,this.c);VGb(this.H.n,this.I,this.b,this.p,true);c=Zkb(6,-1);UMb(Eu(VRb(qZb(this.f).j,vTc),225),new Tjb(c));UMb(Eu(VRb(qZb(this.f).j,wTc),225),this.p);r8b(this.k,this.f);VGb(this.H.n,this.k,this.j,this.r,false);c=Zkb(6,-2);UMb(Eu(VRb(qZb(this.f).j,vTc),225),new Tjb(c));UMb(Eu(VRb(qZb(this.f).j,wTc),225),this.r);VGb(this.H.n,this.k,this.j,this.q,false);c=Zkb(6,-3);UMb(Eu(VRb(qZb(this.f).j,vTc),225),new Tjb(c));UMb(Eu(VRb(qZb(this.f).j,wTc),225),this.q);VGb(this.H.n,this.k,this.j,this.r,false);UMb(Eu(VRb(qZb(this.d).j,xTc),225),this.o);UMb(Eu(VRb(qZb(this.d).j,yTc),225),this.r);r8b(this.k,this.d);VGb(this.H.n,this.k,this.j,null,false);r8b(this.k,null)};_.g=0;_.i=0;mU(1225,1,{},Arc);_.Df=function Brc(a,b){var c;c=new F7b(b,this.c);b6b(c.ab,0,-150,-150);a6b(c.fb,400);c.X=false;$3b(c.W,c.ab,c.bb,c.fb);c.Z=true;qPb(this.b.I,c)};mU(1261,725,JLc,Ftc);_.Od=function Gtc(){uIb(this,xTc,new VMb((nNb(),fNb)));uIb(this,yTc,new VMb(fNb));uIb(this,rTc,new WMb(_Mb,new Tjb(0.69)));uIb(this,tTc,new WMb(hNb,new t5b(0.5,0.5)))};var Htc;mU(1262,1,{},Mtc);_.Rd=function Ntc(){return Vtc(),Ktc};_.Sd=function Otc(){return Wtc(),Ltc};var Ktc,Ltc;mU(1263,1,{},Qtc);_.qc=function Rtc(){return 'varying vec2 vUv;\n\nuniform sampler2D tColors;\nuniform sampler2D tGodRays;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fGodRayIntensity;\n\nvoid main() {\n\n\t// Since THREE.MeshDepthMaterial renders foreground objects white and background\n\t// objects black, the god-rays will be white streaks. Therefore value is inverted\n\t// before being combined with tColors\n\n\tgl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );\n\tgl_FragColor.a = 1.0;\n\n}\n'};mU(1264,1,{},Ttc);_.qc=function Utc(){return zTc};mU(1267,725,JLc,Ytc);_.Od=function Ztc(){uIb(this,wTc,new VMb((nNb(),fNb)));uIb(this,vTc,new WMb(_Mb,new Tjb(1)));uIb(this,tTc,new WMb(hNb,new t5b(0.5,0.5)))};var $tc;mU(1268,1,{},duc);_.Rd=function euc(){return muc(),buc};_.Sd=function fuc(){return nuc(),cuc};var buc,cuc;mU(1269,1,{},huc);_.qc=function iuc(){return "#define TAPS_PER_PASS 6.0\n\nvarying vec2 vUv;\n\nuniform sampler2D tInput;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fStepSize; // filter step size\n\nvoid main() {\n\n\t// delta from current pixel to \"sun\" position\n\n\tvec2 delta = vSunPositionScreenSpace - vUv;\n\tfloat dist = length( delta );\n\n\t// Step vector (uv space)\n\n\tvec2 stepv = fStepSize * delta / dist;\n\n\t// Number of iterations between pixel and sun\n\n\tfloat iters = dist/fStepSize;\n\n\tvec2 uv = vUv.xy;\n\tfloat col = 0.0;\n\n\t// This breaks ANGLE in Chrome 22\n\t//\t- see http://code.google.com/p/chromium/issues/detail?id=153105\n\n/*\n\t// Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),\n\t// so i've just left the loop\n\n\tfor ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {\n\n\t\t\t\t\t// Accumulate samples, making sure we dont walk past the light source.\n\n\t\t\t\t\t// The check for uv.y < 1 would not be necessary with \"border\" UV wrap\n\t\t\t\t\t// mode, with a black border colour. I don't think this is currently\n\t\t\t\t\t// exposed by three.js. As a result there might be artifacts when the\n\t\t\t\t\t// sun is to the left, right or bottom of screen as these cases are\n\t\t\t\t\t// not specifically handled.\n\n\t\tcol += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );\n\t\tuv += stepv;\n\n\t}\n*/\n\n\t// Unrolling loop manually makes it work in ANGLE\n\n\tif ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\t// Should technically be dividing by 'iters', but 'TAPS_PER_PASS' smooths out\n\t// objectionable artifacts, in particular near the sun position. The side\n\t// effect is that the result is darker than it should be around the sun, as\n\t// TAPS_PER_PASS is greater than the number of samples actually accumulated.\n\t// When the result is inverted (in the shader 'godrays_combine', this produces\n\t// a slight bright spot at the position of the sun, even when it is occluded.\n\n\tgl_FragColor = vec4( col/TAPS_PER_PASS );\n\tgl_FragColor.a = 1.0;\n\n}\n"};mU(1270,1,{},kuc);_.qc=function luc(){return zTc};mU(1273,725,JLc,puc);_.Od=function quc(){uIb(this,tTc,new WMb((nNb(),hNb),new t5b(0.5,0.5)));uIb(this,uTc,new WMb(_Mb,new Tjb(1)));uIb(this,BSc,new WMb($Mb,new m3b(16772608)));uIb(this,sTc,new WMb($Mb,new m3b(0)))};var ruc;mU(1274,1,{},wuc);_.Rd=function xuc(){return Fuc(),uuc};_.Sd=function yuc(){return Guc(),vuc};var uuc,vuc;mU(1275,1,{},Auc);_.qc=function Buc(){return 'varying vec2 vUv;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fAspect;\n\nuniform vec3 sunColor;\nuniform vec3 bgColor;\n\nvoid main() {\n\n\tvec2 diff = vUv - vSunPositionScreenSpace;\n\n\t// Correct for aspect ratio\n\n\tdiff.x *= fAspect;\n\n\tfloat prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );\n\tprop = 0.35 * pow( 1.0 - prop, 3.0 );\n\n\tgl_FragColor.xyz = mix( sunColor, bgColor, 1.0 - prop );\n\tgl_FragColor.w = 1.0;\n\n}\n'};mU(1276,1,{},Duc);_.qc=function Euc(){return zTc};var oO=Hjb(VQc,'PostprocessingGodrays$DemoScene',1224),nO=Hjb(VQc,'PostprocessingGodrays$DemoScene$1',1225),ZI=Hjb(ATc,'MeshDepthMaterial',915),SO=Hjb(LQc,'GodRaysGenerateShader',1267),OO=Hjb(LQc,'GodRaysCombineShader',1261),WO=Hjb(LQc,'GodraysFakeSunShader',1273),jG=Hjb($Rc,'DepthShader',743),RO=Hjb(LQc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator',1268),PO=Hjb(LQc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$1',1269),QO=Hjb(LQc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$2',1270),NO=Hjb(LQc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator',1262),LO=Hjb(LQc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$1',1263),MO=Hjb(LQc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$2',1264),VO=Hjb(LQc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator',1274),TO=Hjb(LQc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$1',1275),UO=Hjb(LQc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$2',1276),iG=Hjb($Rc,'DepthShader_Resources_default_InlineClientBundleGenerator',744),gG=Hjb($Rc,'DepthShader_Resources_default_InlineClientBundleGenerator$1',745),hG=Hjb($Rc,'DepthShader_Resources_default_InlineClientBundleGenerator$2',746);iMc(Hi)(40);