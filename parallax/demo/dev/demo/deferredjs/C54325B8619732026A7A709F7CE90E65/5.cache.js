function zRb(){}
function t3b(){}
function E3b(){}
function U3b(){}
function $3b(){}
function Z3b(){}
function a4b(){}
function j4b(){}
function g4b(){}
function o4b(){}
function n4b(){}
function s4b(){}
function r4b(){}
function u3b(a,b){a.c=b}
function v3b(a,b){a.e=b}
function w3b(a,b){a.f=b}
function x3b(a,b){a.i=b}
function y3b(a,b){a.k=b}
function z3b(a,b){a.r=b}
function T3b(){P3b();return F3b}
function f4b(){f4b=x4b;e4b=new j4b}
function v4b(){v4b=x4b;h4b=new o4b}
function w4b(){w4b=x4b;i4b=new s4b}
function Ldb(c,a,b){c.uniform2fv(a,b)}
function Q3b(a){return new mzb(a.b,a.c)}
function b4b(){Enb.call(this,(f4b(),e4b))}
function R3b(a,b,c,d){jh.call(this,a,b);this.b=c;this.c=d}
function ARb(){PNb.call(this);this.c=(PMb(),RMb('./static/textures/sprite0.png',(atb(),_sb),null));this.d=RMb('./static/textures/sprite1.png',_sb,null);this.e=RMb('./static/textures/sprite2.png',_sb,null)}
function A3b(){cub.call(this);this.d=(kHb(),iHb);Ceb();neb();_db();this.c=(P3b(),J3b);this.e=new bvb(16777215);this.f=new usb;this.g=!this.o;this.b=!this.o;this.n=!this.b;this.j=this.H;this.k=0;this.p=new mzb(0,0);this.q=new mzb(1,1)}
function P3b(){P3b=x4b;N3b=new R3b('TOP_LEFT',0,1,-1);M3b=new R3b('TOP_CENTER',1,0,-1);O3b=new R3b('TOP_RIGHT',2,-1,-1);K3b=new R3b('CENTER_LEFT',3,1,0);J3b=new R3b(H6b,4,0,0);L3b=new R3b('CENTER_RIGHT',5,-1,0);H3b=new R3b('BOTTOM_LEFT',6,1,1);G3b=new R3b('BOTTOM_CENTER',7,0,1);I3b=new R3b('BOTTOM_RIGHT',8,-1,1);F3b=jr(iG,{86:1,98:1},219,[N3b,M3b,O3b,K3b,J3b,L3b,H3b,G3b,I3b])}
function V3b(a,b){var c,d;rlb.call(this,a,b);this.c=new $3b;c=this.n.D.c;this.c.g=new $wnd.Float32Array(16);this.c.d=new $wnd.Uint16Array(6);d=0;this.c.g[d++]=-1;this.c.g[d++]=-1;this.c.g[d++]=0;this.c.g[d++]=1;this.c.g[d++]=1;this.c.g[d++]=-1;this.c.g[d++]=1;this.c.g[d++]=1;this.c.g[d++]=1;this.c.g[d++]=1;this.c.g[d++]=1;this.c.g[d++]=0;this.c.g[d++]=-1;this.c.g[d++]=1;this.c.g[d++]=0;this.c.g[d++]=0;d=0;this.c.d[d++]=0;this.c.d[d++]=1;this.c.d[d++]=2;this.c.d[d++]=0;this.c.d[d++]=2;this.c.d[d++]=3;this.c.f=c.createBuffer();this.c.c=c.createBuffer();Scb(c,(zkb(),dfb).b,this.c.f);$cb(c,dfb.b,this.c.g,Lib.b);Scb(c,ggb.b,this.c.c);$cb(c,ggb.b,this.c.d,Lib.b);this.c.e=new b4b;vnb(this.c.e,c,false,0,0)}
var t8b='affectedByDistance',x8b='alignment',y8b='thothbot.parallax.plugin.sprite.',z8b='thothbot.parallax.plugin.sprite.shader.',s8b='useScreenCoordinates',w8b='uvOffset',v8b='uvScale';_=uRb.prototype;_.ub=function yRb(){LNb(this.c,new ARb(this.b))};_=ARb.prototype=zRb.prototype=new ONb;_.gC=function BRb(){return JC};_.qd=function CRb(){Oab(this,new Jub(60,Gbb(this.B.D),1,5000))};_.ib=function DRb(){var a,b,c,d,e;this.A.E.c=1500;Ttb(this.C,this.A);new V3b(this.B,this.C);this.b=new cub;for(a=0;a<200;++a){b=new A3b;w3b(b,this.e);b.o=false;v3b(b,new bvb(16777215));Nzb(b.E,Math.random()-0.5,Math.random()-0.5,Math.random()-0.5);if(b.E.c<0){w3b(b,this.d)}else{Xub(b.e,0.5*Math.random(),0.8,0.9);izb(b.q,2,2);izb(b.p,-0.5,-0.5)}b.E.ie();b.E.he(500);Ttb(this.b,b)}Ttb(this.C,this.b);c=new A3b;w3b(c,this.c);u3b(c,(P3b(),N3b));Nzb(c.E,100,100,0);c.i=0.25;Ttb(this.C,c);d=new A3b;w3b(d,this.c);u3b(d,N3b);Nzb(d.E,150,150,2);d.i=0.5;Ttb(this.C,d);e=new A3b;w3b(e,this.c);u3b(e,N3b);Nzb(e.E,200,200,3);e.i=1;Ttb(this.C,e)};_.pd=function ERb(){};_.jb=function FRb(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.b.v.c;++b){d=sr(w6(this.b.v,b),218);c=U1(e+d.E.d*0.01)*0.3+0.5;y3b(d,d.k+0.1*(b/this.b.v.c));Nzb(d.J,c,c,1);d.f==this.e||x3b(d,U1(e+d.E.d*0.01)*0.4+0.6)}jzb(this.b.H,e*0.5);kzb(this.b.H,e*0.75);Pzb(this.b.H,e)};_.b=null;_=A3b.prototype=t3b.prototype=new Rtb;_.cT=function B3b(a){var b;return b=sr(a,218).r-this.r,b==0?0:b>0?1:-1};_.gC=function C3b(){return bF};_.Kd=function D3b(){Gyb(this.z,this.E);Nzb(this.j,0,0,this.k);Hyb(this.z,this.j);(this.J.d!=1||this.J.e!=1)&&Eyb(this.z,this.J);this.C=true};_.cM={89:1,190:1,195:1,218:1};_.b=false;_.e=null;_.f=null;_.g=false;_.i=1;_.j=null;_.k=0;_.n=false;_.o=true;_.p=null;_.q=null;_.r=0;_=R3b.prototype=E3b.prototype=new hh;_.gC=function S3b(){return $E};_.cM={86:1,89:1,91:1,219:1};_.b=0;_.c=0;var F3b,G3b,H3b,I3b,J3b,K3b,L3b,M3b,N3b,O3b;_=V3b.prototype=U3b.prototype=new qlb;_.gC=function W3b(){return aF};_.sd=function X3b(){return xlb(),vlb};_.td=function Y3b(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=(!this.b&&(this.b=Utb(this.o,bF,true)),this.b);o=s.c;if(o==0)return;f=this.n.D.c;t=this.c.e.j;e=this.c.e.c;k=d/c;i=c*0.5;g=d*0.5;n=true;Sdb(f,this.c.e.i);if(!this.c.b){ldb(f,sr(e.b[i5b],94).b);ldb(f,sr(e.b[g8b],94).b);this.c.b=true}gdb(f,(zkb(),Jfb).b);kdb(f,hfb.b);f.depthMask(true);Scb(f,dfb.b,this.c.f);Tdb(f,sr(e.b[i5b],94).b,2,lgb.b,false,16,0);Tdb(f,sr(e.b[g8b],94).b,2,lgb.b,false,16,8);Scb(f,ggb.b,this.c.c);Rdb(f,sr(t.b[r8b],132).c,false,b.o);Qcb(f,ijb.b);Idb(f,sr(t.b[i8b],132).c,0);for(j=0;j<o;++j){r=sr((d5(j,s.c),s.b[j]),218);if(!r.N||r.i==0)continue;if(r.o){z3b(r,-r.E.c)}else{zyb(r.t,b.q,r.B);z3b(r,-r.t.b[14])}}p7(s);for(j=0;j<o;++j){r=sr((d5(j,s.c),s.b[j]),218);if(!r.N||r.i==0)continue;if(!!r.f&&!!r.f.q&&(r.f.q.offsetWidth||0)>0){if(r.o){Idb(f,sr(t.b[s8b],132).c,1);Mdb(f,sr(t.b[l8b],132).c,(r.E.d-i)/i,(g-r.E.e)/g,O1(0,Q1(1,r.E.c)))}else{Idb(f,sr(t.b[s8b],132).c,0);Idb(f,sr(t.b[t8b],132).c,r.b?1:0);Rdb(f,sr(t.b[u8b],132).c,false,r.t.b)}q=(r.f.q.offsetWidth||0)/(r.n?d:1);p=jr(hF,{84:1,86:1},-1,[q*k*r.J.d,q*r.J.e]);Jdb(f,sr(t.b[v8b],132).c,r.q.d,r.q.e);Jdb(f,sr(t.b[w8b],132).c,r.p.d,r.p.e);Jdb(f,sr(t.b[x8b],132).c,Q3b(r.c).d,Q3b(r.c).e);Fdb(f,sr(t.b[n8b],132).c,r.i);Mdb(f,sr(t.b[g7b],132).c,r.e.e,r.e.c,r.e.b);Fdb(f,sr(t.b[m8b],132).c,r.k);Ldb(f,sr(t.b[k8b],132).c,p);if(r.g&&!n){kdb(f,_fb.b);n=true}else if(!r.g&&n){gdb(f,_fb.b);n=false}pmb(this.n,r.d);Emb(this.n,r.f,0);jdb(f,akb.b,6,ikb.b,0)}}kdb(f,Jfb.b);kdb(f,_fb.b);f.depthMask(true)};_.cM={125:1};_.b=null;_.c=null;_=$3b.prototype=Z3b.prototype=new Ub;_.gC=function _3b(){return _E};_.b=false;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_=b4b.prototype=a4b.prototype=new qnb;_.gC=function c4b(){return fF};_.ud=function d4b(){tnb(this,w8b,new Erb((Zrb(),Trb),new mzb(0,0)));tnb(this,v8b,new Erb(Trb,new mzb(1,1)));tnb(this,m8b,new Erb(Lrb,new a1(1)));tnb(this,k8b,new Erb(Trb,new mzb(1,1)));tnb(this,x8b,new Erb(Trb,new mzb(0,0)));tnb(this,g7b,new Erb(Krb,new bvb(16777215)));tnb(this,i8b,new Erb(Rrb,E1(0)));tnb(this,n8b,new Erb(Lrb,new a1(1)));tnb(this,s8b,new Erb(Orb,E1(1)));tnb(this,t8b,new Erb(Orb,E1(1)));tnb(this,l8b,new Erb(Vrb,new Szb(0,0,0)))};_.cM={130:1};var e4b;_=j4b.prototype=g4b.prototype=new Ub;_.gC=function k4b(){return eF};_.xd=function l4b(){return v4b(),h4b};_.yd=function m4b(){return w4b(),i4b};var h4b=null,i4b=null;_=o4b.prototype=n4b.prototype=new Ub;_.gC=function p4b(){return cF};_.Zb=function q4b(){return 'precision mediump float;\r\n\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n}\r\n'};_=s4b.prototype=r4b.prototype=new Ub;_.gC=function t4b(){return dF};_.Zb=function u4b(){return 'uniform int useScreenCoordinates;\r\nuniform int affectedByDistance;\r\nuniform vec3 screenPosition;\r\nuniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 alignment;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position + alignment;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\r\n\trotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tif( useScreenCoordinates != 0 ) {\r\n\r\n\t\tfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\r\n\r\n\t} else {\r\n\r\n\t\tfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\t\tfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\r\n\r\n\t}\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var JC=Q0(V7b,'EffectsSprites$DemoScene'),bF=Q0(y8b,'Sprite'),$E=R0(y8b,'Sprite$ALIGNMENT',T3b),iG=P0('[Lthothbot.parallax.plugin.sprite.','Sprite$ALIGNMENT;'),aF=Q0(y8b,'SpritePlugin'),_E=Q0(y8b,'SpritePlugin$SpriteGeometry'),fF=Q0(z8b,'ShaderSprite'),eF=Q0(z8b,'ShaderSprite_Resources_default_InlineClientBundleGenerator'),cF=Q0(z8b,'ShaderSprite_Resources_default_InlineClientBundleGenerator$1'),dF=Q0(z8b,'ShaderSprite_Resources_default_InlineClientBundleGenerator$2');z4b(oe)(5);