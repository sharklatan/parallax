function FRb(){}
function z3b(){}
function K3b(){}
function $3b(){}
function e4b(){}
function d4b(){}
function g4b(){}
function p4b(){}
function m4b(){}
function u4b(){}
function t4b(){}
function y4b(){}
function x4b(){}
function A3b(a,b){a.b=b}
function B3b(a,b){a.d=b}
function C3b(a,b){a.e=b}
function D3b(a,b){a.g=b}
function E3b(a,b){a.j=b}
function F3b(a,b){a.q=b}
function Z3b(){V3b();return L3b}
function l4b(){l4b=D4b;k4b=new p4b}
function B4b(){B4b=D4b;n4b=new u4b}
function C4b(){C4b=D4b;o4b=new y4b}
function Rdb(c,a,b){c.uniform2fv(a,b)}
function W3b(a){return new szb(a.a,a.b)}
function h4b(){Knb.call(this,(l4b(),k4b))}
function X3b(a,b,c,d){ah.call(this,a,b);this.a=c;this.b=d}
function GRb(){VNb.call(this);this.b=(VMb(),XMb('./static/textures/sprite0.png',(gtb(),ftb),null));this.c=XMb('./static/textures/sprite1.png',ftb,null);this.d=XMb('./static/textures/sprite2.png',ftb,null)}
function G3b(){iub.call(this);this.c=(qHb(),oHb);Ieb();teb();feb();this.b=(V3b(),P3b);this.d=new hvb(16777215);this.e=new Asb;this.f=!this.n;this.a=!this.n;this.k=!this.a;this.i=this.G;this.j=0;this.o=new szb(0,0);this.p=new szb(1,1)}
function V3b(){V3b=D4b;T3b=new X3b('TOP_LEFT',0,1,-1);S3b=new X3b('TOP_CENTER',1,0,-1);U3b=new X3b('TOP_RIGHT',2,-1,-1);Q3b=new X3b('CENTER_LEFT',3,1,0);P3b=new X3b(Q6b,4,0,0);R3b=new X3b('CENTER_RIGHT',5,-1,0);N3b=new X3b('BOTTOM_LEFT',6,1,1);M3b=new X3b('BOTTOM_CENTER',7,0,1);O3b=new X3b('BOTTOM_RIGHT',8,-1,1);L3b=_q(ZF,{86:1,98:1},219,[T3b,S3b,U3b,Q3b,P3b,R3b,N3b,M3b,O3b])}
function _3b(a,b){var c,d;xlb.call(this,a,b);this.b=new e4b;c=this.k.C.b;this.b.f=new $wnd.Float32Array(16);this.b.c=new $wnd.Uint16Array(6);d=0;this.b.f[d++]=-1;this.b.f[d++]=-1;this.b.f[d++]=0;this.b.f[d++]=1;this.b.f[d++]=1;this.b.f[d++]=-1;this.b.f[d++]=1;this.b.f[d++]=1;this.b.f[d++]=1;this.b.f[d++]=1;this.b.f[d++]=1;this.b.f[d++]=0;this.b.f[d++]=-1;this.b.f[d++]=1;this.b.f[d++]=0;this.b.f[d++]=0;d=0;this.b.c[d++]=0;this.b.c[d++]=1;this.b.c[d++]=2;this.b.c[d++]=0;this.b.c[d++]=2;this.b.c[d++]=3;this.b.e=c.createBuffer();this.b.b=c.createBuffer();Ycb(c,(Fkb(),jfb).a,this.b.e);edb(c,jfb.a,this.b.f,Rib.a);Ycb(c,mgb.a,this.b.b);edb(c,mgb.a,this.b.c,Rib.a);this.b.d=new h4b;Bnb(this.b.d,c,false,0,0)}
var A8b='affectedByDistance',E8b='alignment',F8b='thothbot.parallax.plugin.sprite.',G8b='thothbot.parallax.plugin.sprite.shader.',z8b='useScreenCoordinates',D8b='uvOffset',C8b='uvScale';_=ARb.prototype;_.qb=function ERb(){RNb(this.b,new GRb(this.a))};_=GRb.prototype=FRb.prototype=new UNb;_.gC=function HRb(){return yC};_.nd=function IRb(){Uab(this,new Pub(60,Mbb(this.A.C),1,5000))};_.hb=function JRb(){var a,b,c,d,e;this.z.D.b=1500;Ztb(this.B,this.z);new _3b(this.A,this.B);this.a=new iub;for(a=0;a<200;++a){b=new G3b;C3b(b,this.d);b.n=false;B3b(b,new hvb(16777215));Tzb(b.D,Math.random()-0.5,Math.random()-0.5,Math.random()-0.5);if(b.D.b<0){C3b(b,this.c)}else{bvb(b.d,0.5*Math.random(),0.8,0.9);ozb(b.p,2,2);ozb(b.o,-0.5,-0.5)}b.D.fe();b.D.ee(500);Ztb(this.a,b)}Ztb(this.B,this.a);c=new G3b;C3b(c,this.b);A3b(c,(V3b(),T3b));Tzb(c.D,100,100,0);c.g=0.25;Ztb(this.B,c);d=new G3b;C3b(d,this.b);A3b(d,T3b);Tzb(d.D,150,150,2);d.g=0.5;Ztb(this.B,d);e=new G3b;C3b(e,this.b);A3b(e,T3b);Tzb(e.D,200,200,3);e.g=1;Ztb(this.B,e)};_.md=function KRb(){};_.ib=function LRb(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.a.u.b;++b){d=ir(C6(this.a.u,b),218);c=$1(e+d.D.c*0.01)*0.3+0.5;E3b(d,d.j+0.1*(b/this.a.u.b));Tzb(d.I,c,c,1);d.e==this.d||D3b(d,$1(e+d.D.c*0.01)*0.4+0.6)}pzb(this.a.G,e*0.5);qzb(this.a.G,e*0.75);Vzb(this.a.G,e)};_.a=null;_=G3b.prototype=z3b.prototype=new Xtb;_.cT=function H3b(a){var b;return b=ir(a,218).q-this.q,b==0?0:b>0?1:-1};_.gC=function I3b(){return SE};_.Hd=function J3b(){Myb(this.y,this.D);Tzb(this.i,0,0,this.j);Nyb(this.y,this.i);(this.I.c!=1||this.I.d!=1)&&Kyb(this.y,this.I);this.B=true};_.cM={89:1,190:1,195:1,218:1};_.a=false;_.d=null;_.e=null;_.f=false;_.g=1;_.i=null;_.j=0;_.k=false;_.n=true;_.o=null;_.p=null;_.q=0;_=X3b.prototype=K3b.prototype=new $g;_.gC=function Y3b(){return PE};_.cM={86:1,89:1,91:1,219:1};_.a=0;_.b=0;var L3b,M3b,N3b,O3b,P3b,Q3b,R3b,S3b,T3b,U3b;_=_3b.prototype=$3b.prototype=new wlb;_.gC=function a4b(){return RE};_.pd=function b4b(){return Dlb(),Blb};_.qd=function c4b(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=(!this.a&&(this.a=$tb(this.n,SE,true)),this.a);o=s.b;if(o==0)return;f=this.k.C.b;t=this.b.d.i;e=this.b.d.b;k=d/c;i=c*0.5;g=d*0.5;n=true;Ydb(f,this.b.d.g);if(!this.b.a){rdb(f,ir(e.a[p5b],94).a);rdb(f,ir(e.a[n8b],94).a);this.b.a=true}mdb(f,(Fkb(),Pfb).a);qdb(f,nfb.a);f.depthMask(true);Ycb(f,jfb.a,this.b.e);Zdb(f,ir(e.a[p5b],94).a,2,rgb.a,false,16,0);Zdb(f,ir(e.a[n8b],94).a,2,rgb.a,false,16,8);Ycb(f,mgb.a,this.b.b);Xdb(f,ir(t.a[y8b],132).b,false,b.n);Wcb(f,ojb.a);Odb(f,ir(t.a[p8b],132).b,0);for(j=0;j<o;++j){r=ir((j5(j,s.b),s.a[j]),218);if(!r.M||r.g==0)continue;if(r.n){F3b(r,-r.D.b)}else{Fyb(r.s,b.p,r.A);F3b(r,-r.s.a[14])}}v7(s);for(j=0;j<o;++j){r=ir((j5(j,s.b),s.a[j]),218);if(!r.M||r.g==0)continue;if(!!r.e&&!!r.e.p&&(r.e.p.offsetWidth||0)>0){if(r.n){Odb(f,ir(t.a[z8b],132).b,1);Sdb(f,ir(t.a[s8b],132).b,(r.D.c-i)/i,(g-r.D.d)/g,U1(0,W1(1,r.D.b)))}else{Odb(f,ir(t.a[z8b],132).b,0);Odb(f,ir(t.a[A8b],132).b,r.a?1:0);Xdb(f,ir(t.a[B8b],132).b,false,r.s.a)}q=(r.e.p.offsetWidth||0)/(r.k?d:1);p=_q(YE,{84:1,86:1},-1,[q*k*r.I.c,q*r.I.d]);Pdb(f,ir(t.a[C8b],132).b,r.p.c,r.p.d);Pdb(f,ir(t.a[D8b],132).b,r.o.c,r.o.d);Pdb(f,ir(t.a[E8b],132).b,W3b(r.b).c,W3b(r.b).d);Ldb(f,ir(t.a[u8b],132).b,r.g);Sdb(f,ir(t.a[n7b],132).b,r.d.d,r.d.b,r.d.a);Ldb(f,ir(t.a[t8b],132).b,r.j);Rdb(f,ir(t.a[r8b],132).b,p);if(r.f&&!n){qdb(f,fgb.a);n=true}else if(!r.f&&n){mdb(f,fgb.a);n=false}vmb(this.k,r.c);Kmb(this.k,r.e,0);pdb(f,gkb.a,6,okb.a,0)}}qdb(f,Pfb.a);qdb(f,fgb.a);f.depthMask(true)};_.cM={125:1};_.a=null;_.b=null;_=e4b.prototype=d4b.prototype=new Ub;_.gC=function f4b(){return QE};_.a=false;_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_=h4b.prototype=g4b.prototype=new wnb;_.gC=function i4b(){return WE};_.rd=function j4b(){znb(this,D8b,new Krb((dsb(),Zrb),new szb(0,0)));znb(this,C8b,new Krb(Zrb,new szb(1,1)));znb(this,t8b,new Krb(Rrb,new g1(1)));znb(this,r8b,new Krb(Zrb,new szb(1,1)));znb(this,E8b,new Krb(Zrb,new szb(0,0)));znb(this,n7b,new Krb(Qrb,new hvb(16777215)));znb(this,p8b,new Krb(Xrb,K1(0)));znb(this,u8b,new Krb(Rrb,new g1(1)));znb(this,z8b,new Krb(Urb,K1(1)));znb(this,A8b,new Krb(Urb,K1(1)));znb(this,s8b,new Krb(_rb,new Yzb(0,0,0)))};_.cM={130:1};var k4b;_=p4b.prototype=m4b.prototype=new Ub;_.gC=function q4b(){return VE};_.ud=function r4b(){return B4b(),n4b};_.vd=function s4b(){return C4b(),o4b};var n4b=null,o4b=null;_=u4b.prototype=t4b.prototype=new Ub;_.gC=function v4b(){return TE};_.Wb=function w4b(){return 'precision mediump float;\r\n\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n}\r\n'};_=y4b.prototype=x4b.prototype=new Ub;_.gC=function z4b(){return UE};_.Wb=function A4b(){return 'uniform int useScreenCoordinates;\r\nuniform int affectedByDistance;\r\nuniform vec3 screenPosition;\r\nuniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 alignment;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position + alignment;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\r\n\trotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tif( useScreenCoordinates != 0 ) {\r\n\r\n\t\tfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\r\n\r\n\t} else {\r\n\r\n\t\tfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\t\tfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\r\n\r\n\t}\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var yC=W0(a8b,'EffectsSprites$DemoScene'),SE=W0(F8b,'Sprite'),PE=X0(F8b,'Sprite$ALIGNMENT',Z3b),ZF=V0('[Lthothbot.parallax.plugin.sprite.','Sprite$ALIGNMENT;'),RE=W0(F8b,'SpritePlugin'),QE=W0(F8b,'SpritePlugin$SpriteGeometry'),WE=W0(G8b,'ShaderSprite'),VE=W0(G8b,'ShaderSprite_Resources_default_InlineClientBundleGenerator'),TE=W0(G8b,'ShaderSprite_Resources_default_InlineClientBundleGenerator$1'),UE=W0(G8b,'ShaderSprite_Resources_default_InlineClientBundleGenerator$2');F4b(ce)(5);