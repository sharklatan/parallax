function FQb(){}
function f2b(){}
function q2b(){}
function G2b(){}
function M2b(){}
function L2b(){}
function O2b(){}
function X2b(){}
function U2b(){}
function _2b(){}
function a3b(){}
function e3b(){}
function d3b(){}
function g2b(a,b){a.c=b}
function h2b(a,b){a.e=b}
function i2b(a,b){a.f=b}
function j2b(a,b){a.i=b}
function k2b(a,b){a.k=b}
function l2b(a,b){a.r=b}
function F2b(){B2b();return r2b}
function T2b(){T2b=j3b;S2b=new X2b}
function h3b(){h3b=j3b;V2b=new a3b}
function i3b(){i3b=j3b;W2b=new e3b}
function Qdb(c,a,b){c.uniform2fv(a,b)}
function C2b(a){return new gzb(a.b,a.c)}
function P2b(){znb.call(this,(T2b(),S2b))}
function D2b(a,b,c,d){wh.call(this,a,b);this.b=c;this.c=d}
function GQb(){VMb.call(this);this.c=(VLb(),XLb('./static/textures/sprite0.png',(Xsb(),Wsb),null));this.d=XLb('./static/textures/sprite1.png',Wsb,null);this.e=XLb('./static/textures/sprite2.png',Wsb,null)}
function m2b(){Ztb.call(this);this.d=(IGb(),GGb);Heb();seb();eeb();this.c=(B2b(),v2b);this.e=new Yub(16777215);this.f=new psb;this.g=!this.o;this.b=!this.o;this.n=!this.b;this.j=this.H;this.k=0;this.p=new gzb(0,0);this.q=new gzb(1,1)}
function B2b(){B2b=j3b;z2b=new D2b('TOP_LEFT',0,1,-1);y2b=new D2b('TOP_CENTER',1,0,-1);A2b=new D2b('TOP_RIGHT',2,-1,-1);w2b=new D2b('CENTER_LEFT',3,1,0);v2b=new D2b(v5b,4,0,0);x2b=new D2b('CENTER_RIGHT',5,-1,0);t2b=new D2b('BOTTOM_LEFT',6,1,1);s2b=new D2b('BOTTOM_CENTER',7,0,1);u2b=new D2b('BOTTOM_RIGHT',8,-1,1);r2b=wr(nG,{85:1,86:1,90:1,102:1},220,[z2b,y2b,A2b,w2b,v2b,x2b,t2b,s2b,u2b])}
function H2b(a,b){var c,d;wlb.call(this,a,b);this.c=new M2b;c=this.n.D.c;this.c.g=new $wnd.Float32Array(16);this.c.d=new $wnd.Uint16Array(6);d=0;this.c.g[d++]=-1;this.c.g[d++]=-1;this.c.g[d++]=0;this.c.g[d++]=1;this.c.g[d++]=1;this.c.g[d++]=-1;this.c.g[d++]=1;this.c.g[d++]=1;this.c.g[d++]=1;this.c.g[d++]=1;this.c.g[d++]=1;this.c.g[d++]=0;this.c.g[d++]=-1;this.c.g[d++]=1;this.c.g[d++]=0;this.c.g[d++]=0;d=0;this.c.d[d++]=0;this.c.d[d++]=1;this.c.d[d++]=2;this.c.d[d++]=0;this.c.d[d++]=2;this.c.d[d++]=3;this.c.f=c.createBuffer();this.c.c=c.createBuffer();Ycb(c,(Ekb(),ifb).b,this.c.f);edb(c,ifb.b,this.c.g,Qib.b);Ycb(c,lgb.b,this.c.c);edb(c,lgb.b,this.c.d,Qib.b);this.c.e=new P2b;qnb(this.c.e,c,0,0)}
var h7b='affectedByDistance',l7b='alignment',m7b='thothbot.parallax.plugin.sprite.',n7b='thothbot.parallax.plugin.sprite.shader.',g7b='useScreenCoordinates',k7b='uvOffset',j7b='uvScale';_=AQb.prototype;_.ub=function EQb(){RMb(this.c,new GQb(this.b))};_=GQb.prototype=FQb.prototype=new UMb;_.gC=function HQb(){return TC};_.ud=function IQb(){Uab(this,new Eub(60,Mbb(this.B.D),1,5000))};_.ib=function JQb(){var a,b,c,d,e;this.A.E.c=1500;Otb(this.C,this.A);new H2b(this.B,this.C);this.b=new Ztb;for(a=0;a<200;++a){b=new m2b;i2b(b,this.e);b.o=false;h2b(b,new Yub(16777215));Hzb(b.E,Math.random()-0.5,Math.random()-0.5,Math.random()-0.5);if(b.E.c<0){i2b(b,this.d)}else{Sub(b.e,0.5*Math.random(),0.8,0.9);czb(b.q,2,2);czb(b.p,-0.5,-0.5)}b.E.me();b.E.le(500);Otb(this.b,b)}Otb(this.C,this.b);c=new m2b;i2b(c,this.c);g2b(c,(B2b(),z2b));Hzb(c.E,100,100,0);c.i=0.25;Otb(this.C,c);d=new m2b;i2b(d,this.c);g2b(d,z2b);Hzb(d.E,150,150,2);d.i=0.5;Otb(this.C,d);e=new m2b;i2b(e,this.c);g2b(e,z2b);Hzb(e.E,200,200,3);e.i=1;Otb(this.C,e)};_.td=function KQb(){};_.jb=function LQb(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.b.v.c;++b){d=Fr(C6(this.b.v,b),219);c=$1(e+d.E.d*0.01)*0.3+0.5;k2b(d,d.k+0.1*(b/this.b.v.c));Hzb(d.J,c,c,1);d.f==this.e||j2b(d,$1(e+d.E.d*0.01)*0.4+0.6)}dzb(this.b.H,e*0.5);ezb(this.b.H,e*0.75);Jzb(this.b.H,e)};_.b=null;_=m2b.prototype=f2b.prototype=new Mtb;_.cT=function n2b(a){var b;return b=Fr(a,219).r-this.r,b==0?0:b>0?1:-1};_.gC=function o2b(){return iF};_.Od=function p2b(){Byb(this.z,this.E);Hzb(this.j,0,0,this.k);Cyb(this.z,this.j);(this.J.d!=1||this.J.e!=1)&&zyb(this.z,this.J);this.C=true};_.cM={89:1,190:1,196:1,219:1};_.b=false;_.e=null;_.f=null;_.g=false;_.i=1;_.j=null;_.k=0;_.n=false;_.o=true;_.p=null;_.q=null;_.r=0;_=D2b.prototype=q2b.prototype=new uh;_.gC=function E2b(){return fF};_.cM={85:1,89:1,93:1,220:1};_.b=0;_.c=0;var r2b,s2b,t2b,u2b,v2b,w2b,x2b,y2b,z2b,A2b;_=H2b.prototype=G2b.prototype=new vlb;_.gC=function I2b(){return hF};_.wd=function J2b(){return Clb(),Alb};_.xd=function K2b(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=(!this.b&&(this.b=Ptb(this.o,iF,true)),this.b);o=s.c;if(o==0)return;f=this.n.D.c;t=this.c.e.j;e=this.c.e.c;k=d/c;i=c*0.5;g=d*0.5;n=true;Xdb(f,this.c.e.i);if(!this.c.b){rdb(f,Fr(e.b[$3b],96).b);rdb(f,Fr(e.b[W6b],96).b);this.c.b=true}mdb(f,(Ekb(),Ofb).b);qdb(f,mfb.b);f.depthMask(true);Ycb(f,ifb.b,this.c.f);Ydb(f,Fr(e.b[$3b],96).b,2,qgb.b,false,16,0);Ydb(f,Fr(e.b[W6b],96).b,2,qgb.b,false,16,8);Ycb(f,lgb.b,this.c.c);Wdb(f,Fr(t.b[f7b],135).c,false,b.o);Wcb(f,njb.b);Ndb(f,Fr(t.b[Y6b],135).c,0);for(j=0;j<o;++j){r=Fr((j5(j,s.c),s.b[j]),219);if(!r.N||r.i==0)continue;if(r.o){l2b(r,-r.E.c)}else{uyb(r.t,b.q,r.B);l2b(r,-r.t.b[14])}}v7(s);for(j=0;j<o;++j){r=Fr((j5(j,s.c),s.b[j]),219);if(!r.N||r.i==0)continue;if(!!r.f&&!!r.f.o&&(r.f.o.offsetWidth||0)>0){if(r.o){Ndb(f,Fr(t.b[g7b],135).c,1);Rdb(f,Fr(t.b[_6b],135).c,(r.E.d-i)/i,(g-r.E.e)/g,U1(0,W1(1,r.E.c)))}else{Ndb(f,Fr(t.b[g7b],135).c,0);Ndb(f,Fr(t.b[h7b],135).c,r.b?1:0);Wdb(f,Fr(t.b[i7b],135).c,false,r.t.b)}q=(r.f.o.offsetWidth||0)/(r.n?d:1);p=wr(oF,{85:1},-1,[q*k*r.J.d,q*r.J.e]);Odb(f,Fr(t.b[j7b],135).c,r.q.d,r.q.e);Odb(f,Fr(t.b[k7b],135).c,r.p.d,r.p.e);Odb(f,Fr(t.b[l7b],135).c,C2b(r.c).d,C2b(r.c).e);Kdb(f,Fr(t.b[b7b],135).c,r.i);Rdb(f,Fr(t.b[U5b],135).c,r.e.e,r.e.c,r.e.b);Kdb(f,Fr(t.b[a7b],135).c,r.k);Qdb(f,Fr(t.b[$6b],135).c,p);if(r.g&&!n){qdb(f,egb.b);n=true}else if(!r.g&&n){mdb(f,egb.b);n=false}umb(this.n,r.d);Jmb(this.n,r.f,0);pdb(f,fkb.b,6,nkb.b,0)}}qdb(f,Ofb.b);qdb(f,egb.b);f.depthMask(true)};_.cM={129:1};_.b=null;_.c=null;_=M2b.prototype=L2b.prototype=new Tb;_.gC=function N2b(){return gF};_.b=false;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_=P2b.prototype=O2b.prototype=new mnb;_.gC=function Q2b(){return mF};_.yd=function R2b(){onb(this,k7b,new zrb((Urb(),Orb),new gzb(0,0)));onb(this,j7b,new zrb(Orb,new gzb(1,1)));onb(this,a7b,new zrb(Grb,new g1(1)));onb(this,$6b,new zrb(Orb,new gzb(1,1)));onb(this,l7b,new zrb(Orb,new gzb(0,0)));onb(this,U5b,new zrb(Frb,new Yub(16777215)));onb(this,Y6b,new zrb(Mrb,K1(0)));onb(this,b7b,new zrb(Grb,new g1(1)));onb(this,g7b,new zrb(Jrb,K1(1)));onb(this,h7b,new zrb(Jrb,K1(1)));onb(this,_6b,new zrb(Qrb,new Mzb(0,0,0)))};_.cM={133:1};var S2b;_=X2b.prototype=U2b.prototype=new Tb;_.gC=function Y2b(){return lF};_.Bd=function Z2b(){return h3b(),V2b};_.Cd=function $2b(){return i3b(),W2b};var V2b=null,W2b=null;_=a3b.prototype=_2b.prototype=new Tb;_.gC=function b3b(){return jF};_.bc=function c3b(){return 'precision mediump float;\r\n\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n}\r\n'};_=e3b.prototype=d3b.prototype=new Tb;_.gC=function f3b(){return kF};_.bc=function g3b(){return 'uniform int useScreenCoordinates;\r\nuniform int affectedByDistance;\r\nuniform vec3 screenPosition;\r\nuniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 alignment;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position + alignment;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\r\n\trotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tif( useScreenCoordinates != 0 ) {\r\n\r\n\t\tfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\r\n\r\n\t} else {\r\n\r\n\t\tfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\t\tfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\r\n\r\n\t}\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var TC=W0(J6b,'EffectsSprites$DemoScene'),iF=W0(m7b,'Sprite'),fF=X0(m7b,'Sprite$ALIGNMENT',F2b),nG=V0('[Lthothbot.parallax.plugin.sprite.','Sprite$ALIGNMENT;'),hF=W0(m7b,'SpritePlugin'),gF=W0(m7b,'SpritePlugin$SpriteGeometry'),mF=W0(n7b,'ShaderSprite'),lF=W0(n7b,'ShaderSprite_Resources_default_InlineClientBundleGenerator'),jF=W0(n7b,'ShaderSprite_Resources_default_InlineClientBundleGenerator$1'),kF=W0(n7b,'ShaderSprite_Resources_default_InlineClientBundleGenerator$2');l3b(oe)(5);