function Cxc(){}
function Gxc(){}
function Jxc(){}
function BKc(){}
function FKc(){}
function IKc(){}
function voc(){_bc.call(this)}
function vxc(){_Jb.call(this,(yxc(),xxc))}
function uKc(){_Jb.call(this,(xKc(),wKc))}
function xKc(){xKc=YMc;wKc=new BKc}
function KKc(){KKc=YMc;zKc=new FKc}
function LKc(){LKc=YMc;AKc=new IKc}
function Lxc(){Lxc=YMc;Axc=new Gxc}
function yxc(){yxc=YMc;xxc=new Cxc}
function Mxc(){Mxc=YMc;Bxc=new Jxc}
function _Ic(){this.c=new L4b(new uKc);nOb(bw(rTb(D_b(this.c).j,lVc),226),(Ujb(),Ujb(),Sjb));nOb(bw(rTb(D_b(this.c).j,mVc),226),new Tkb(0.35));nOb(bw(rTb(D_b(this.c).j,nVc),226),new Tkb(0.95));nOb(bw(rTb(D_b(this.c).j,oVc),226),zlb(2048));this.f=true;this.g=true}
var lVc='grayscale',mVc='nIntensity',oVc='sCount',nVc='sIntensity',fVc='texture1',gVc='texture2';kW(1174,1,KOc);_.Qb=function toc(){Bbc(this.c,new voc(this.b))};kW(1175,990,HOc,voc);_.Nd=function woc(a){o8b(bw(bw(rTb(this.e,eVc),226).e,301),a.b.ib);p8b(bw(bw(rTb(this.e,eVc),226).e,301),a.b.hb)};_.ob=function xoc(){var a,b,c,d,e,f,g;Su((Pyb(),Oyb),(Zyb(),Yyb),this);this.b=new PRb(35,UGb(this.H.n),1,3000);Y8b(this.b.ab,4);d=new L4b(new vxc);this.e=D_b(d).j;f=new oPb('./static/textures/lava/cloud.png');iPb(f,(QGb(),PGb));jPb(f,PGb);nOb(bw(rTb(this.e,fVc),226),f);g=new oPb(UUc);iPb(g,PGb);jPb(g,PGb);nOb(bw(rTb(this.e,gVc),226),g);this.c=new RZb(new vYb(0.65,0.3,30,30),d);U5b(this.c.db,0.3);LQb(this.I,this.c);a=new dJc(this.H.n);e=new lJc(this.I,this.b);b=new YIc(1.25);c=new _Ic;c.b=true;yrb(a.c,e);yrb(a.c,b);yrb(a.c,c);VGb(this.H.n,false);this.d=Ji()};_.pb=function yoc(a){var b;b=(Ji()-this.d)*0.001*5;nOb(bw(rTb(this.e,hVc),226),new Tkb(bw(bw(rTb(this.e,hVc),226).e,150).b+0.2*b));M5b(this.c.db,0.05*b);N5b(this.c.db,0.0125*b);$Hb(this.H.n,true);this.d=Ji();qIb(this.H.n,this.I,this.b,null,false)};_.d=0;kW(1310,742,wOc,vxc);_.Sd=function wxc(){PJb(this,iVc,new pOb((IOb(),uOb),new Tkb(0.45)));PJb(this,jVc,new pOb(EOb,new b9b(0,0,0)));PJb(this,hVc,new pOb(uOb,new Tkb(1)));PJb(this,eVc,new pOb(COb,new s8b));PJb(this,kVc,new pOb(COb,new t8b(3,1)));PJb(this,fVc,new oOb(AOb));PJb(this,gVc,new oOb(AOb))};var xxc;kW(1311,1,{},Cxc);_.Vd=function Dxc(){return Lxc(),Axc};_.Wd=function Exc(){return Mxc(),Bxc};var Axc,Bxc;kW(1312,1,{},Gxc);_.uc=function Hxc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};kW(1313,1,{},Jxc);_.uc=function Kxc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};kW(1419,1418,XOc,_Ic);_.Mg=function aJc(a,b,c){nOb(bw(rTb(D_b(this.c).j,AUc),226),a.e);nOb(bw(rTb(D_b(this.c).j,hVc),226),new Tkb(bw(bw(rTb(D_b(this.c).j,hVc),226).e,150).b+b));BUb(a.d,this.c);this.b?qIb(a.v,a.w,a.b,null,false):qIb(a.v,a.w,a.b,a.i,false)};_.b=false;kW(1442,742,wOc,uKc);_.Sd=function vKc(){PJb(this,AUc,new oOb((IOb(),AOb)));PJb(this,hVc,new pOb(uOb,new Tkb(0)));PJb(this,mVc,new pOb(uOb,new Tkb(0.5)));PJb(this,nVc,new pOb(uOb,new Tkb(0.05)));PJb(this,oVc,new pOb(xOb,zlb(4096)));PJb(this,lVc,new pOb(xOb,(Ujb(),Ujb(),Tjb)))};var wKc;kW(1443,1,{},BKc);_.Vd=function CKc(){return KKc(),zKc};_.Wd=function DKc(){return LKc(),AKc};var zKc,AKc;kW(1444,1,{},FKc);_.uc=function GKc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};kW(1445,1,{},IKc);_.uc=function JKc(){return pVc};var QO=Hkb(NTc,'MaterialsShaderLava$DemoScene',1175),FS=Hkb(qVc,'FilmPass',1419),XQ=Hkb(GTc,'LavaShader',1310),$S=Hkb(rVc,'FilmShader',1442),WQ=Hkb(GTc,'LavaShader_Resources_default_InlineClientBundleGenerator',1311),UQ=Hkb(GTc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1312),VQ=Hkb(GTc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1313),ZS=Hkb(rVc,'FilmShader_Resources_default_InlineClientBundleGenerator',1443),XS=Hkb(rVc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1444),YS=Hkb(rVc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1445);YOc(Pj)(30);