function nQc(){}
function rQc(){}
function uQc(){}
function MPc(a,b){a.a=b}
function VPc(a,b){a.a=b}
function WPc(a,b){a.c=b}
function XPc(a,b){a.d=b}
function ysc(a){this.a=a}
function NPc(a,b){ZTb.call(this,a,b)}
function OPc(a){KPc();NPc.call(this,JPc,a)}
function gQc(){DJb.call(this,(jQc(),iQc))}
function jQc(){jQc=yQc;iQc=new nQc}
function wQc(){wQc=yQc;lQc=new rQc}
function xQc(){xQc=yQc;mQc=new uQc}
function Szb(c,a,b){c.uniform2fv(a,b)}
function jAb(a){return new $wnd.Float32Array(a)}
function mAb(a){return new $wnd.Uint16Array(a)}
function LPc(a,b){return a.a!=b.a?xu(b.a-a.a):b.R-a.R}
function UPc(a){var b;b=new YPc;f$b(a,b);X3b(b.a,a.a);b.c=a.c;b.d=a.d;b.b=a.b;return b}
function YPc(){x$b.call(this);this.d=0;this.b=false;VPc(this,new f4b(16777215))}
function tsc(){Fac.call(this);this.d=new SOb('./static/textures/sprite1.png');this.e=new SOb('./static/textures/sprite2.png')}
function ssc(a){var b,c,d,e,f;f=~~(a.G.k.Z/2);b=~~(a.G.k.Y/2);e=pu(a.k.u,355);d=~~(((e.c.p.offsetWidth||0)|0)/2);c=~~(((e.c.p.offsetHeight||0)|0)/2);W6b(a.k._,-f+d,b-c,1);W6b(a.n._,f-d,b-c,1);W6b(a.g._,-f+d,-b+c,1);W6b(a.i._,f-d,-b+c,1);W6b(a.j._,0,0,1)}
function KPc(){KPc=yQc;var a,b,c;mQb();new YPc;JPc=new HRb;a=mAb(fu(WR,GQc,-1,[0,1,2,0,2,3]));c=jAb(fu(VR,DRc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=jAb(fu(VR,DRc,-1,[0,0,1,0,1,1,0,1]));CRb(JPc,FXc,new zRb(a,1));CRb(JPc,sUc,new zRb(c,3));CRb(JPc,VZc,new zRb(b,2))}
function cQc(a,b){var c;NGb.call(this,a,b);this.e=new _6b;this.f=new F5b;this.g=new _6b;c=this.v.cb;this.j=jAb(fu(VR,DRc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.b=mAb(fu(WR,GQc,-1,[0,1,2,0,2,3]));this.i=c.createBuffer();this.a=c.createBuffer();vyb(c,(mBb(),kBb),this.i);Iyb(c,kBb,this.j,(uBb(),sBb));vyb(c,lBb,this.a);Iyb(c,lBb,this.b,sBb);this.d=new gQc;tJb(this.d,c,false,0,0)}
var _Zc='alphaTest',$Zc='fogType',d$c='thothbot.parallax.plugins.sprite.',e$c='thothbot.parallax.plugins.sprite.shaders.',b$c='uvOffset';GU(1220,1,hSc);_.zb=function qsc(){fac(this.b,new tsc(this.a))};GU(1221,973,eSc,tsc);_.Gd=function usc(a){ssc(this)};_.nb=function vsc(){var a,b,c,d,e,f,g,i;et((dyb(),cyb),(nyb(),myb),this);this.a=new oRb(60,GHb(this.G.k),1,2100);Y6b(this.a._,1500);this.b=new bRb(this.G.k.Z,this.G.k.Y,1,10);Y6b(this.b._,10);j9b(this.H,new _8b(0,1500,2100));this.f=new l9b;new cQc(this.G.k,this.H);new cQc(this.G.k,this.f);new TOb('./static/textures/sprite0.png',new ysc(this));d=new YPc;WPc(d,this.e);VPc(d,new f4b(16777215));d.b=true;c=new YPc;WPc(c,this.d);VPc(c,new f4b(16777215));c.b=true;this.c=new FQb;for(a=0;a<200;a++){f=rlb()-0.5;g=rlb()-0.5;i=rlb()-0.5;if(i<0){b=UPc(c)}else{b=UPc(d);b4b(b.a,0.5*rlb(),0.75,0.5);i6b(b.c.A,-0.5,-0.5);i6b(b.c.B,2,2)}e=new OPc(b);W6b(e._,f,g,i);e._.of();e._.mf(500);nQb(this.c,e)}nQb(this.H,this.c);$Hb(this.G.k,false)};_.ob=function wsc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.c.Q.b;b<e;b++){i=pu(Sqb(this.c.Q,b),354);f=pu(i.u,355);g=tlb(j+i._.c*0.01)*0.3+1;d=1;c=1;if(!!f.c&&!!f.c.p&&((f.c.p.offsetWidth||0)|0)>0){d=(f.c.p.offsetWidth||0)|0;c=(f.c.p.offsetHeight||0)|0}XPc(f,f.d+0.1*(b/e));W6b(i.eb,g*d,g*c,1);f.c==this.e||s$b(f,tlb(j+i._.c*0.01)*0.4+0.6)}s4b(this.c.cb,j*0.5);t4b(this.c.cb,j*0.75);u4b(this.c.cb,j);zHb(this.G.k,true);SHb(this.G.k,this.H,this.a,null,false);Jyb(this.G.k.cb,(CBb(),ABb).a);SHb(this.G.k,this.f,this.b,null,false)};GU(1222,1,{},ysc);_.Ud=function zsc(a){var b,c,d;c=new YPc;c.c=a;d=(c.c.p.offsetWidth||0)|0;b=(c.c.p.offsetHeight||0)|0;this.a.k=new OPc(c);W6b(this.a.k.eb,d,b,1);nQb(this.a.f,this.a.k);this.a.n=new OPc(c);W6b(this.a.n.eb,d,b,1);nQb(this.a.f,this.a.n);this.a.g=new OPc(c);W6b(this.a.g.eb,d,b,1);nQb(this.a.f,this.a.g);this.a.i=new OPc(c);W6b(this.a.i.eb,d,b,1);nQb(this.a.f,this.a.i);this.a.j=new OPc(c);W6b(this.a.j.eb,d,b,1);nQb(this.a.f,this.a.j);ssc(this.a)};GU(1540,838,{149:1,249:1,250:1,354:1},OPc);_.Vd=function PPc(){var a;return a=new OPc(pu(this.u,355)),oQb(this,a,true),a};_.cT=function QPc(a){return LPc(this,pu(a,354))};_.$d=function RPc(a,b){var c,d,e;e=new _6b;X6b(e,this.X);c=M5b(a.c,e);if(c>this.eb.c){return}d=new qUb;d.a=c;d.d=this._;d.c=this;b.Fc(d)};_._d=function SPc(a,b,c){};_.a=0;var JPc;GU(1541,914,{269:1,283:1,355:1},YPc);_.Ne=function ZPc(){return UPc(this)};_.Oe=function $Pc(){return null};_.ne=function _Pc(){return this.a};_.oe=function aQc(a){VPc(this,a)};_.b=false;_.d=0;GU(1542,711,RRc,cQc);_.Id=function dQc(){return 2};_.Jd=function eQc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.c||this.c.b==0)&&(this.c=pQb(this.w,MR)),this.c);o=s.b;if(o==0)return;i=this.v.cb;t=this.d.i;e=this.d.b;$zb(i,this.d.g);ezb(i,pu(e.a[sUc],157).a);ezb(i,pu(e.a[VZc],157).a);Zyb(i,(CCb(),uCb).a);dzb(i,tCb.a);vyb(i,(mBb(),kBb),this.i);cAb(i,pu(e.a[sUc],157).a,2,(WBb(),QBb),16,0);cAb(i,pu(e.a[VZc],157).a,2,QBb,16,8);vyb(i,lBb,this.a);Zzb(i,pu(t.a[WZc],227).b,false,a.p.a);ryb(i,(AGb(),WFb).a);Qzb(i,pu(t.a[XZc],227).b,0);p=0;q=0;f=this.w.a;if(f){Uzb(i,pu(t.a[wYc],227).b,f.c.c,f.c.b,f.c.a);if(su(f,308)){Ozb(i,pu(t.a[YZc],227).b,pu(f,308).b);Ozb(i,pu(t.a[ZZc],227).b,pu(f,308).a);Qzb(i,pu(t.a[$Zc],227).b,1);p=1;q=1}else if(su(f,309)){Ozb(i,pu(t.a[vYc],227).b,pu(f,309).a);Qzb(i,pu(t.a[$Zc],227).b,2);p=2;q=2}}else{Qzb(i,pu(t.a[$Zc],227).b,0);p=0;q=0}for(j=0;j<o;j++){r=(Kgb(j,s.b),pu(s.a[j],354));if(!r.gb)continue;h5b(r.O,a.o,r.X);MPc(r,-r.O.a[14])}Grb(s);for(k=0;k<o;k++){r=(Kgb(k,s.b),pu(s.a[k],354));n=pu(r.u,355);if(!r.gb)continue;Ozb(i,pu(t.a[_Zc],227).b,n.L);Zzb(i,pu(t.a[a$c],227).b,false,r.O.a);V4b(r.X,this.e,this.f,this.g);g=0;!!this.w.a&&n.b&&(g=q);if(p!=g){Qzb(i,pu(t.a[$Zc],227).b,g);p=g}if(!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0){Rzb(i,pu(t.a[b$c],227).b,n.c.A.c,n.c.A.d);Rzb(i,pu(t.a[xYc],227).b,n.c.B.c,n.c.B.d)}else{Rzb(i,pu(t.a[b$c],227).b,0,0);Rzb(i,pu(t.a[xYc],227).b,1,1)}Ozb(i,pu(t.a[XXc],227).b,n.Z);Uzb(i,pu(t.a[lWc],227).b,n.a.c,n.a.b,n.a.a);Ozb(i,pu(t.a[c$c],227).b,n.d);Szb(i,pu(t.a[_Yc],227).b,fu(VR,DRc,-1,[this.g.c,this.g.d]));_Hb(this.v,n.P);fIb(this.v,n.R);gIb(this.v,n.S);!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0&&pIb(this.v,n.c,0);czb(i,(yAb(),vAb),6,(oCb(),nCb),0)}dzb(i,uCb.a);ZHb(this.v)};GU(1543,731,WRc,gQc);_.Ld=function hQc(){rJb(this,b$c,new TNb((kOb(),eOb),new m6b(0,0)));rJb(this,xYc,new TNb(eOb,new m6b(1,1)));rJb(this,c$c,new TNb(YNb,new kkb(1)));rJb(this,_Yc,new TNb(eOb,new m6b(1,1)));rJb(this,lWc,new TNb(XNb,new f4b(16777215)));rJb(this,XZc,new SNb(cOb));rJb(this,XXc,new TNb(YNb,new kkb(1)));rJb(this,$Zc,new TNb(_Nb,Skb(0)));rJb(this,vYc,new TNb(YNb,new kkb(2.5E-4)));rJb(this,YZc,new TNb(YNb,new kkb(1)));rJb(this,ZZc,new TNb(YNb,new kkb(2000)));rJb(this,wYc,new TNb(XNb,new f4b(16777215)));rJb(this,_Zc,new TNb(YNb,Skb(0)))};var iQc;GU(1544,1,{},nQc);_.Od=function oQc(){return wQc(),lQc};_.Pd=function pQc(){return xQc(),mQc};var lQc,mQc;GU(1545,1,{},rQc);_.nc=function sQc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};GU(1546,1,{},uQc);_.nc=function vQc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var TN=$jb(bXc,'EffectsSprites$DemoScene',1221),SN=$jb(bXc,'EffectsSprites$DemoScene$1',1222),MR=$jb(d$c,'Sprite',1540),KR=$jb(d$c,'SpriteMaterial',1541),LR=$jb(d$c,'SpritePlugin',1542),QR=$jb(e$c,'SpriteShader',1543),PR=$jb(e$c,'SpriteShader_Resources_default_InlineClientBundleGenerator',1544),NR=$jb(e$c,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1545),OR=$jb(e$c,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1546);vSc(xi)(43);