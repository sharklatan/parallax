function Lyc(){}
function Pyc(){}
function Syc(){}
function Dnc(){Kac.call(this)}
function Eyc(){IJb.call(this,(Hyc(),Gyc))}
function Hyc(){Hyc=AQc;Gyc=new Lyc}
function Uyc(){Uyc=AQc;Jyc=new Pyc}
function Vyc(){Vyc=AQc;Kyc=new Syc}
var EYc='texture1',FYc='texture2';PU(1154,1,iSc);_.zb=function Bnc(){kac(this.b,new Dnc(this.a))};PU(1155,972,fSc,Dnc);_.Fd=function Enc(a){o6b(Au(Au(TSb(this.d,DYc),227).d,298),a.a.Z);p6b(Au(Au(TSb(this.d,DYc),227).d,298),a.a.Y)};_.nb=function Fnc(){var a,b,c,d,e,f,g;ot((iyb(),hyb),(syb(),ryb),this);this.a=new tRb(35,LHb(this.G.k),1,3000);b7b(this.a._,4);d=new w3b(new Eyc);this.d=o$b(d).i;f=new XOb('./static/textures/lava/cloud.png');ROb(f,(NGb(),MGb));SOb(f,MGb);WNb(Au(TSb(this.d,EYc),227),f);g=new XOb(rYc);ROb(g,MGb);SOb(g,MGb);WNb(Au(TSb(this.d,FYc),227),g);this.b=new D8b(new YXb(0.65,0.3,30,30),d);x4b(this.b.cb,0.3);sQb(this.H,this.b);a=new xKc(this.G.k);e=new FKc(this.H,this.a);b=new gKc(1.25);c=new pKc(0.95,2048,false);c.a=true;Uqb(a.c,e);Uqb(a.c,b);Uqb(a.c,c);dIb(this.G.k,false);this.c=rh()};_.ob=function Gnc(a){var b;b=(rh()-this.c)*0.001*5;WNb(Au(TSb(this.d,GYc),227),new pkb(Au(Au(TSb(this.d,GYc),227).d,150).a+0.2*b));p4b(this.b.cb,0.05*b);q4b(this.b.cb,0.0125*b);EHb(this.G.k,true);this.c=rh();XHb(this.G.k,this.H,this.a,null,false)};_.c=0;PU(1336,730,XRc,Eyc);_.Kd=function Fyc(){wJb(this,HYc,new YNb((pOb(),bOb),new pkb(0.45)));wJb(this,IYc,new YNb(lOb,new f7b(0,0,0)));wJb(this,GYc,new YNb(bOb,new pkb(1)));wJb(this,DYc,new YNb(jOb,new q6b));wJb(this,JYc,new YNb(jOb,new r6b(3,1)));wJb(this,EYc,new XNb(hOb));wJb(this,FYc,new XNb(hOb))};var Gyc;PU(1337,1,{},Lyc);_.Nd=function Myc(){return Uyc(),Jyc};_.Od=function Nyc(){return Vyc(),Kyc};var Jyc,Kyc;PU(1338,1,{},Pyc);_.mc=function Qyc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};PU(1339,1,{},Syc);_.mc=function Tyc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};var VM=dkb(kXc,'MaterialsShaderLava$DemoScene',1155),ZO=dkb(dXc,'LavaShader',1336),YO=dkb(dXc,'LavaShader_Resources_default_InlineClientBundleGenerator',1337),WO=dkb(dXc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1338),XO=dkb(dXc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1339);wSc(xi)(30);