function PKc(){}
function TKc(){}
function WKc(){}
function mKc(a,b){a.b=b}
function vKc(a,b){a.b=b}
function wKc(a,b){a.d=b}
function xKc(a,b){a.e=b}
function jrc(a){this.b=a}
function nKc(a,b){lSb.call(this,a,b)}
function oKc(a){kKc();nKc.call(this,jKc,a)}
function IKc(){pIb.call(this,(LKc(),KKc))}
function LKc(){LKc=$Kc;KKc=new PKc}
function YKc(){YKc=$Kc;NKc=new TKc}
function ZKc(){ZKc=$Kc;OKc=new WKc}
function dzb(c,a,b){c.uniform2fv(a,b)}
function wzb(a){return new $wnd.Float32Array(a)}
function zzb(a){return new $wnd.Uint16Array(a)}
function lKc(a,b){return a.b!=b.b?Nu(b.b-a.b):b.S-a.S}
function uKc(a){var b;b=new yKc;tYb(a,b);i2b(b.b,a.b);b.d=a.d;b.e=a.e;b.c=a.c;return b}
function yKc(){LYb.call(this);this.e=0;this.c=false;vKc(this,new s2b(16777215))}
function erc(){R8b.call(this);this.e=new jNb('./static/textures/sprite1.png');this.f=new jNb('./static/textures/sprite2.png')}
function drc(a){var b,c,d,e,f;f=~~(a.H.n.$/2);b=~~(a.H.n.Z/2);e=Fu(a.n.v,352);d=~~(((e.d.q.offsetWidth||0)|0)/2);c=~~(((e.d.q.offsetHeight||0)|0)/2);g5b(a.n.ab,-f+d,b-c,1);g5b(a.o.ab,f-d,b-c,1);g5b(a.i.ab,-f+d,-b+c,1);g5b(a.j.ab,f-d,-b+c,1);g5b(a.k.ab,0,0,1)}
function kKc(){kKc=$Kc;var a,b,c;FOb();new yKc;jKc=new XPb;a=zzb(vu(qR,hLc,-1,[0,1,2,0,2,3]));c=wzb(vu(pR,eMc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=wzb(vu(pR,eMc,-1,[0,0,1,0,1,1,0,1]));TPb(jKc,kSc,new QPb(a,1));TPb(jKc,XOc,new QPb(c,3));TPb(jKc,gUc,new QPb(b,2))}
function EKc(a,b){var c;zFb.call(this,a,b);this.f=new l5b;this.g=new S3b;this.i=new l5b;c=this.v.db;this.k=wzb(vu(pR,eMc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.c=zzb(vu(qR,hLc,-1,[0,1,2,0,2,3]));this.j=c.createBuffer();this.b=c.createBuffer();Oxb(c,(zAb(),xAb),this.j);_xb(c,xAb,this.k,(HAb(),FAb));Oxb(c,yAb,this.b);_xb(c,yAb,this.c,FAb);this.e=new IKc;fIb(this.e,c,false,0,0)}
var mUc='alphaTest',lUc='fogType',qUc='thothbot.parallax.plugins.sprite.',rUc='thothbot.parallax.plugins.sprite.shaders.',oUc='uvOffset';$T(1216,1,KMc);_.Db=function brc(){r8b(this.c,new erc(this.b))};$T(1217,961,HMc,erc);_.Id=function frc(a){drc(this)};_.ob=function grc(){var a,b,c,d,e,f,g,i;ut((wxb(),vxb),(Gxb(),Fxb),this);this.b=new GPb(60,sGb(this.H.n),1,2100);i5b(this.b.ab,1500);this.c=new tPb(this.H.n.$,this.H.n.Z,1,10);i5b(this.c.ab,10);w7b(this.I,new m7b(0,1500,2100));this.g=new x7b;new EKc(this.H.n,this.I);new EKc(this.H.n,this.g);new kNb('./static/textures/sprite0.png',new jrc(this));d=new yKc;wKc(d,this.f);vKc(d,new s2b(16777215));d.c=true;c=new yKc;wKc(c,this.e);vKc(c,new s2b(16777215));c.c=true;this.d=new XOb;for(a=0;a<200;a++){f=Lkb()-0.5;g=Lkb()-0.5;i=Lkb()-0.5;if(i<0){b=uKc(c)}else{b=uKc(d);o2b(b.b,0.5*Lkb(),0.75,0.5);v4b(b.d.B,-0.5,-0.5);v4b(b.d.C,2,2)}e=new oKc(b);g5b(e.ab,f,g,i);e.ab.qf();e.ab.of(500);GOb(this.d,e)}GOb(this.I,this.d);MGb(this.H.n,false)};_.pb=function hrc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.d.R.c;b<e;b++){i=Fu(kqb(this.d.R,b),351);f=Fu(i.v,352);g=Nkb(j+i.ab.d*0.01)*0.3+1;d=1;c=1;if(!!f.d&&!!f.d.q&&((f.d.q.offsetWidth||0)|0)>0){d=(f.d.q.offsetWidth||0)|0;c=(f.d.q.offsetHeight||0)|0}xKc(f,f.e+0.1*(b/e));g5b(i.fb,g*d,g*c,1);f.d==this.f||GYb(f,Nkb(j+i.ab.d*0.01)*0.4+0.6)}F2b(this.d.db,j*0.5);G2b(this.d.db,j*0.75);H2b(this.d.db,j);mGb(this.H.n);EGb(this.H.n,this.I,this.b,null,false);ayb(this.H.n.db,(PAb(),NAb).b);EGb(this.H.n,this.g,this.c,null,false)};$T(1218,1,{},jrc);_.Wd=function krc(a){var b,c,d;c=new yKc;c.d=a;d=(c.d.q.offsetWidth||0)|0;b=(c.d.q.offsetHeight||0)|0;this.b.n=new oKc(c);g5b(this.b.n.fb,d,b,1);GOb(this.b.g,this.b.n);this.b.o=new oKc(c);g5b(this.b.o.fb,d,b,1);GOb(this.b.g,this.b.o);this.b.i=new oKc(c);g5b(this.b.i.fb,d,b,1);GOb(this.b.g,this.b.i);this.b.j=new oKc(c);g5b(this.b.j.fb,d,b,1);GOb(this.b.g,this.b.j);this.b.k=new oKc(c);g5b(this.b.k.fb,d,b,1);GOb(this.b.g,this.b.k);drc(this.b)};$T(1468,826,{149:1,247:1,248:1,351:1},oKc);_.Xd=function pKc(){var a;return a=new oKc(Fu(this.v,352)),HOb(this,a,true),a};_.cT=function qKc(a){return lKc(this,Fu(a,351))};_.ae=function rKc(a,b){var c,d,e;e=new l5b;h5b(e,this.Y);c=Z3b(a.d,e);if(c>this.fb.d){return}d=new ESb;d.b=c;d.e=this.ab;d.d=this;b.Hc(d)};_.be=function sKc(a,b,c){};_.b=0;var jKc;$T(1469,902,{267:1,281:1,352:1},yKc);_.Pe=function zKc(){return uKc(this)};_.Qe=function AKc(){return null};_.pe=function BKc(){return this.b};_.qe=function CKc(a){vKc(this,a)};_.c=false;_.e=0;$T(1470,705,sMc,EKc);_.Kd=function FKc(){return 2};_.Ld=function GKc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.d||this.d.c==0)&&(this.d=IOb(this.w,gR)),this.d);o=s.c;if(o==0)return;i=this.v.db;t=this.e.j;e=this.e.c;lzb(i,this.e.i);vyb(i,Fu(e.b[XOc],157).b);vyb(i,Fu(e.b[gUc],157).b);oyb(i,(PBb(),HBb).b);uyb(i,GBb.b);Oxb(i,(zAb(),xAb),this.j);pzb(i,Fu(e.b[XOc],157).b,2,(hBb(),bBb),16,0);pzb(i,Fu(e.b[gUc],157).b,2,bBb,16,8);Oxb(i,yAb,this.b);kzb(i,Fu(t.b[hUc],225).c,false,a.q.b);Kxb(i,(nFb(),JEb).b);bzb(i,Fu(t.b[iUc],225).c,0);p=0;q=0;f=this.w.c;if(f){fzb(i,Fu(t.b[gTc],225).c,f.d.d,f.d.c,f.d.b);if(Iu(f,307)){_yb(i,Fu(t.b[jUc],225).c,Fu(f,307).c);_yb(i,Fu(t.b[kUc],225).c,Fu(f,307).b);bzb(i,Fu(t.b[lUc],225).c,1);p=1;q=1}else if(Iu(f,308)){_yb(i,Fu(t.b[fTc],225).c,Fu(f,308).b);bzb(i,Fu(t.b[lUc],225).c,2);p=2;q=2}}else{bzb(i,Fu(t.b[lUc],225).c,0);p=0;q=0}for(j=0;j<o;j++){r=(cgb(j,s.c),Fu(s.b[j],351));if(!r.hb)continue;u3b(r.P,a.p,r.Y);mKc(r,-r.P.b[14])}$qb(s);for(k=0;k<o;k++){r=(cgb(k,s.c),Fu(s.b[k],351));n=Fu(r.v,352);if(!r.hb)continue;_yb(i,Fu(t.b[mUc],225).c,n.M);kzb(i,Fu(t.b[nUc],225).c,false,r.P.b);g3b(r.Y,this.f,this.g,this.i);g=0;!!this.w.c&&n.c&&(g=q);if(p!=g){bzb(i,Fu(t.b[lUc],225).c,g);p=g}if(!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0){czb(i,Fu(t.b[oUc],225).c,n.d.B.d,n.d.B.e);czb(i,Fu(t.b[hTc],225).c,n.d.C.d,n.d.C.e)}else{czb(i,Fu(t.b[oUc],225).c,0,0);czb(i,Fu(t.b[hTc],225).c,1,1)}_yb(i,Fu(t.b[CSc],225).c,n.$);fzb(i,Fu(t.b[TQc],225).c,n.b.d,n.b.c,n.b.b);_yb(i,Fu(t.b[pUc],225).c,n.e);dzb(i,Fu(t.b[QTc],225).c,vu(pR,eMc,-1,[this.i.d,this.i.e]));NGb(this.v,n.Q);TGb(this.v,n.S);UGb(this.v,n.T);!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0&&bHb(this.v,n.d,0);tyb(i,(Lzb(),Izb),6,(BBb(),ABb),0)}uyb(i,HBb.b);LGb(this.v)};$T(1471,725,xMc,IKc);_.Nd=function JKc(){dIb(this,oUc,new kMb((DMb(),xMb),new z4b(0,0)));dIb(this,hTc,new kMb(xMb,new z4b(1,1)));dIb(this,pUc,new kMb(pMb,new Ejb(1)));dIb(this,QTc,new kMb(xMb,new z4b(1,1)));dIb(this,TQc,new kMb(oMb,new s2b(16777215)));dIb(this,iUc,new jMb(vMb));dIb(this,CSc,new kMb(pMb,new Ejb(1)));dIb(this,lUc,new kMb(sMb,kkb(0)));dIb(this,fTc,new kMb(pMb,new Ejb(2.5E-4)));dIb(this,jUc,new kMb(pMb,new Ejb(1)));dIb(this,kUc,new kMb(pMb,new Ejb(2000)));dIb(this,gTc,new kMb(oMb,new s2b(16777215)));dIb(this,mUc,new kMb(pMb,kkb(0)))};var KKc;$T(1472,1,{},PKc);_.Qd=function QKc(){return YKc(),NKc};_.Rd=function RKc(){return ZKc(),OKc};var NKc,OKc;$T(1473,1,{},TKc);_.pc=function UKc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};$T(1474,1,{},WKc);_.pc=function XKc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var iO=sjb(IRc,'EffectsSprites$DemoScene',1217),hO=sjb(IRc,'EffectsSprites$DemoScene$1',1218),gR=sjb(qUc,'Sprite',1468),eR=sjb(qUc,'SpriteMaterial',1469),fR=sjb(qUc,'SpritePlugin',1470),kR=sjb(rUc,'SpriteShader',1471),jR=sjb(rUc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1472),hR=sjb(rUc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1473),iR=sjb(rUc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1474);YMc(Hi)(42);