function $yc(){}
function czc(){}
function fzc(){}
function Snc(){Wac.call(this)}
function Tyc(){UJb.call(this,(Wyc(),Vyc))}
function Wyc(){Wyc=PQc;Vyc=new $yc}
function hzc(){hzc=PQc;Yyc=new czc}
function izc(){izc=PQc;Zyc=new fzc}
var QYc='texture1',RYc='texture2';WU(1152,1,ASc);_.Db=function Qnc(){wac(this.c,new Snc(this.b))};WU(1153,969,xSc,Snc);_.Jd=function Tnc(a){A6b(Eu(Eu(dTb(this.e,PYc),227).e,298),a.b.$);B6b(Eu(Eu(dTb(this.e,PYc),227).e,298),a.b.Z)};_.ob=function Unc(){var a,b,c,d,e,f,g;tt((uyb(),tyb),(Eyb(),Dyb),this);this.b=new FRb(35,XHb(this.H.n),1,3000);n7b(this.b.ab,4);d=new I3b(new Tyc);this.e=A$b(d).j;f=new hPb('./static/textures/lava/cloud.png');bPb(f,(ZGb(),YGb));cPb(f,YGb);gOb(Eu(dTb(this.e,QYc),227),f);g=new hPb(DYc);bPb(g,YGb);cPb(g,YGb);gOb(Eu(dTb(this.e,RYc),227),g);this.c=new P8b(new iYb(0.65,0.3,30,30),d);J4b(this.c.db,0.3);EQb(this.I,this.c);a=new MKc(this.H.n);e=new UKc(this.I,this.b);b=new vKc(1.25);c=new EKc(0.95,2048,false);c.b=true;erb(a.d,e);erb(a.d,b);erb(a.d,c);pIb(this.H.n,false);this.d=Bh()};_.pb=function Vnc(a){var b;b=(Bh()-this.d)*0.001*5;gOb(Eu(dTb(this.e,SYc),227),new Bkb(Eu(Eu(dTb(this.e,SYc),227).e,150).b+0.2*b));B4b(this.c.db,0.05*b);C4b(this.c.db,0.0125*b);QHb(this.H.n,true);this.d=Bh();hIb(this.H.n,this.I,this.b,null,false)};_.d=0;WU(1334,727,nSc,Tyc);_.Od=function Uyc(){IJb(this,TYc,new iOb((BOb(),nOb),new Bkb(0.45)));IJb(this,UYc,new iOb(xOb,new r7b(0,0,0)));IJb(this,SYc,new iOb(nOb,new Bkb(1)));IJb(this,PYc,new iOb(vOb,new C6b));IJb(this,VYc,new iOb(vOb,new D6b(3,1)));IJb(this,QYc,new hOb(tOb));IJb(this,RYc,new hOb(tOb))};var Vyc;WU(1335,1,{},$yc);_.Rd=function _yc(){return hzc(),Yyc};_.Sd=function azc(){return izc(),Zyc};var Yyc,Zyc;WU(1336,1,{},czc);_.qc=function dzc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};WU(1337,1,{},fzc);_.qc=function gzc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};var aN=pkb(wXc,'MaterialsShaderLava$DemoScene',1153),eP=pkb(pXc,'LavaShader',1334),dP=pkb(pXc,'LavaShader_Resources_default_InlineClientBundleGenerator',1335),bP=pkb(pXc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1336),cP=pkb(pXc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1337);OSc(Hi)(30);