function bMc(){}
function fMc(){}
function iMc(){}
function ALc(a,b){a.a=b}
function JLc(a,b){a.a=b}
function KLc(a,b){a.c=b}
function LLc(a,b){a.d=b}
function Hsc(a){this.a=a}
function BLc(a,b){STb.call(this,a,b)}
function CLc(a){yLc();BLc.call(this,xLc,a)}
function WLc(){pJb.call(this,(ZLc(),YLc))}
function ZLc(){ZLc=mMc;YLc=new bMc}
function kMc(){kMc=mMc;_Lc=new fMc}
function lMc(){lMc=mMc;aMc=new iMc}
function Mzb(c,a,b){c.uniform2fv(a,b)}
function dAb(a){return new $wnd.Float32Array(a)}
function gAb(a){return new $wnd.Uint16Array(a)}
function zLc(a,b){return a.a!=b.a?Ev(b.a-a.a):b.R-a.R}
function ILc(a){var b;b=new MLc;P$b(a,b);H4b(b.a,a.a);b.c=a.c;b.d=a.d;b.b=a.b;return b}
function MLc(){f_b.call(this);this.d=0;this.b=false;JLc(this,new W4b(16777215))}
function Csc(){pbc.call(this);this.d=new EOb('./static/textures/sprite1.png');this.e=new EOb('./static/textures/sprite2.png')}
function Bsc(a){var b,c,d,e,f;f=~~(a.G.k.hb/2);b=~~(a.G.k.gb/2);e=wv(a.k.u,359);d=~~(((e.c.p.offsetWidth||0)|0)/2);c=~~(((e.c.p.offsetHeight||0)|0)/2);k8b(a.k._,-f+d,b-c,1);k8b(a.n._,f-d,b-c,1);k8b(a.g._,-f+d,-b+c,1);k8b(a.i._,f-d,-b+c,1);k8b(a.j._,0,0,1)}
function yLc(){yLc=mMc;var a,b,c;$Pb();new MLc;xLc=new zRb;a=gAb(mv(QS,wMc,-1,[0,1,2,0,2,3]));c=dAb(mv(PS,rNc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=dAb(mv(PS,rNc,-1,[0,0,1,0,1,1,0,1]));tRb(xLc,xTc,new qRb(a,1));tRb(xLc,lQc,new qRb(c,3));tRb(xLc,JVc,new qRb(b,2))}
function SLc(a,b){var c;nGb.call(this,a,b);this.e=new q8b;this.f=new M6b;this.g=new q8b;c=this.u.Z;this.j=dAb(mv(PS,rNc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.b=gAb(mv(QS,wMc,-1,[0,1,2,0,2,3]));this.i=c.createBuffer();this.a=c.createBuffer();vyb(c,(iBb(),gBb),this.i);Iyb(c,gBb,this.j,(qBb(),oBb));vyb(c,hBb,this.a);Iyb(c,hBb,this.b,oBb);this.d=new WLc;fJb(this.d,c,false,0,0)}
var PVc='alphaTest',OVc='fogType',TVc='thothbot.parallax.plugins.sprite.',UVc='thothbot.parallax.plugins.sprite.shaders.',RVc='uvOffset';zV(1240,1,YNc);_.Mb=function zsc(){Rac(this.b,new Csc(this.a))};zV(1241,988,VNc,Csc);_.Gd=function Dsc(a){Bsc(this)};_.nb=function Esc(){var a,b,c,d,e,f,g,i;lu((dyb(),cyb),(nyb(),myb),this);this.a=new dRb(60,iGb(this.G.k),1,2100);m8b(this.a._,1500);this.b=new QQb(this.G.k.hb,this.G.k.gb,1,10);m8b(this.b._,10);T9b(this.H,new J9b(0,1500,2100));this.f=new V9b;new SLc(this.G.k,this.H);new SLc(this.G.k,this.f);new FOb('./static/textures/sprite0.png',new Hsc(this));d=new MLc;KLc(d,this.e);JLc(d,new W4b(16777215));d.b=true;c=new MLc;KLc(c,this.d);JLc(c,new W4b(16777215));c.b=true;this.c=new sQb;for(a=0;a<200;a++){f=plb()-0.5;g=plb()-0.5;i=plb()-0.5;if(i<0){b=ILc(c)}else{b=ILc(d);R4b(b.a,0.5*plb(),0.75,0.5);D7b(b.c.A,-0.5,-0.5);D7b(b.c.B,2,2)}e=new CLc(b);k8b(e._,f,g,i);e._.gf();e._.ef(500);_Pb(this.c,e)}_Pb(this.H,this.c);jGb(this.G.k,false)};_.ob=function Fsc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.c.Q.b;b<e;b++){i=wv(Rqb(this.c.Q,b),358);f=wv(i.u,359);g=rlb(j+i._.c*0.01)*0.3+1;d=1;c=1;if(!!f.c&&!!f.c.p&&((f.c.p.offsetWidth||0)|0)>0){d=(f.c.p.offsetWidth||0)|0;c=(f.c.p.offsetHeight||0)|0}LLc(f,f.d+0.1*(b/e));k8b(i.eb,g*d,g*c,1);f.c==this.e||a_b(f,rlb(j+i._.c*0.01)*0.4+0.6)}i5b(this.c.cb,j*0.5);j5b(this.c.cb,j*0.75);k5b(this.c.cb,j);oHb(this.G.k,true);GHb(this.G.k,this.H,this.a,null,false);Jyb(this.G.k.Z,(yBb(),wBb).a);GHb(this.G.k,this.f,this.b,null,false)};zV(1242,1,{},Hsc);_.Ud=function Isc(a){var b,c,d;c=new MLc;c.c=a;d=(c.c.p.offsetWidth||0)|0;b=(c.c.p.offsetHeight||0)|0;this.a.k=new CLc(c);k8b(this.a.k.eb,d,b,1);_Pb(this.a.f,this.a.k);this.a.n=new CLc(c);k8b(this.a.n.eb,d,b,1);_Pb(this.a.f,this.a.n);this.a.g=new CLc(c);k8b(this.a.g.eb,d,b,1);_Pb(this.a.f,this.a.g);this.a.i=new CLc(c);k8b(this.a.i.eb,d,b,1);_Pb(this.a.f,this.a.i);this.a.j=new CLc(c);k8b(this.a.j.eb,d,b,1);_Pb(this.a.f,this.a.j);Bsc(this.a)};zV(1470,847,{149:1,249:1,250:1,358:1},CLc);_.Vd=function DLc(){var a;return a=new CLc(wv(this.u,359)),aQb(this,a,true),a};_.cT=function ELc(a){return zLc(this,wv(a,358))};_.be=function FLc(a,b){var c,d,e;e=new q8b;l8b(e,this.X);c=$6b(a.c,e);if(c>this.eb.c){return}d=new iUb;d.a=c;d.d=this._;d.c=this;b.Fc(d)};_.ce=function GLc(a,b,c){};_.a=0;var xLc;zV(1471,930,{271:1,287:1,359:1},MLc);_.Se=function NLc(){return ILc(this)};_.Te=function OLc(){return null};_.se=function PLc(){return this.a};_.te=function QLc(a){JLc(this,a)};_.b=false;_.d=0;zV(1472,716,FNc,SLc);_.Id=function TLc(){return 2};_.Jd=function ULc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.c||this.c.b==0)&&(this.c=bQb(this.v,GS)),this.c);o=s.b;if(o==0)return;i=this.u.Z;t=this.d.i;e=this.d.b;Uzb(i,this.d.g);czb(i,wv(e.a[lQc],157).a);czb(i,wv(e.a[JVc],157).a);Xyb(i,(yCb(),qCb).a);bzb(i,pCb.a);vyb(i,(iBb(),gBb),this.i);Yzb(i,wv(e.a[lQc],157).a,2,(SBb(),MBb),16,0);Yzb(i,wv(e.a[JVc],157).a,2,MBb,16,8);vyb(i,hBb,this.a);Tzb(i,wv(t.a[KVc],226).b,false,a.p.a);ryb(i,(YFb(),sFb).a);Kzb(i,wv(t.a[LVc],226).b,0);p=0;q=0;f=this.v.a;if(f){Ozb(i,wv(t.a[nUc],226).b,f.c.c,f.c.b,f.c.a);if(zv(f,311)){Izb(i,wv(t.a[MVc],226).b,wv(f,311).b);Izb(i,wv(t.a[NVc],226).b,wv(f,311).a);Kzb(i,wv(t.a[OVc],226).b,1);p=1;q=1}else if(zv(f,312)){Izb(i,wv(t.a[mUc],226).b,wv(f,312).a);Kzb(i,wv(t.a[OVc],226).b,2);p=2;q=2}}else{Kzb(i,wv(t.a[OVc],226).b,0);p=0;q=0}for(k=0;k<o;k++){r=(Igb(k,s.b),wv(s.a[k],358));if(!r.gb)continue;i6b(r.O,a.o,r.X);ALc(r,-r.O.a[14])}Grb(s);for(j=0;j<o;j++){r=(Igb(j,s.b),wv(s.a[j],358));n=wv(r.u,359);if(!r.gb)continue;Izb(i,wv(t.a[PVc],226).b,n.N);Tzb(i,wv(t.a[QVc],226).b,false,r.O.a);W5b(r.X,this.e,this.f,this.g);g=0;!!this.v.a&&n.b&&(g=q);if(p!=g){Kzb(i,wv(t.a[OVc],226).b,g);p=g}if(!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0){Lzb(i,wv(t.a[RVc],226).b,n.c.A.c,n.c.A.d);Lzb(i,wv(t.a[oUc],226).b,n.c.B.c,n.c.B.d)}else{Lzb(i,wv(t.a[RVc],226).b,0,0);Lzb(i,wv(t.a[oUc],226).b,1,1)}Izb(i,wv(t.a[OTc],226).b,n._);Ozb(i,wv(t.a[cSc],226).b,n.a.c,n.a.b,n.a.a);Izb(i,wv(t.a[SVc],226).b,n.d);Mzb(i,wv(t.a[YUc],226).b,mv(PS,rNc,-1,[this.g.c,this.g.d]));OHb(this.u,n.R);THb(this.u,n.T);UHb(this.u,n.U);!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0&&bIb(this.u,n.c,0);azb(i,(uAb(),rAb),6,(kCb(),jCb),0)}bzb(i,qCb.a);NHb(this.u)};zV(1473,740,KNc,WLc);_.Ld=function XLc(){dJb(this,RVc,new FNb((YNb(),SNb),new J7b(0,0)));dJb(this,oUc,new FNb(SNb,new J7b(1,1)));dJb(this,SVc,new FNb(KNb,new ikb(1)));dJb(this,YUc,new FNb(SNb,new J7b(1,1)));dJb(this,cSc,new FNb(JNb,new W4b(16777215)));dJb(this,LVc,new ENb(QNb));dJb(this,OTc,new FNb(KNb,new ikb(1)));dJb(this,OVc,new FNb(NNb,Qkb(0)));dJb(this,mUc,new FNb(KNb,new ikb(2.5E-4)));dJb(this,MVc,new FNb(KNb,new ikb(1)));dJb(this,NVc,new FNb(KNb,new ikb(2000)));dJb(this,nUc,new FNb(JNb,new W4b(16777215)));dJb(this,PVc,new FNb(KNb,Qkb(0)))};var YLc;zV(1474,1,{},bMc);_.Od=function cMc(){return kMc(),_Lc};_.Pd=function dMc(){return lMc(),aMc};var _Lc,aMc;zV(1475,1,{},fMc);_.nc=function gMc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};zV(1476,1,{},iMc);_.nc=function jMc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var oP=Yjb(USc,'EffectsSprites$DemoScene',1241),nP=Yjb(USc,'EffectsSprites$DemoScene$1',1242),GS=Yjb(TVc,'Sprite',1470),ES=Yjb(TVc,'SpriteMaterial',1471),FS=Yjb(TVc,'SpritePlugin',1472),KS=Yjb(UVc,'SpriteShader',1473),JS=Yjb(UVc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1474),HS=Yjb(UVc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1475),IS=Yjb(UVc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1476);kOc(Ej)(42);