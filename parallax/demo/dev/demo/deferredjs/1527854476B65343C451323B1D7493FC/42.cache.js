function iLc(){}
function mLc(){}
function pLc(){}
function HKc(a,b){a.b=b}
function QKc(a,b){a.b=b}
function RKc(a,b){a.d=b}
function SKc(a,b){a.e=b}
function Frc(a){this.b=a}
function IKc(a,b){GSb.call(this,a,b)}
function JKc(a){FKc();IKc.call(this,EKc,a)}
function bLc(){KIb.call(this,(eLc(),dLc))}
function sLc(){sLc=tLc;hLc=new pLc}
function eLc(){eLc=tLc;dLc=new iLc}
function rLc(){rLc=tLc;gLc=new mLc}
function yzb(c,a,b){c.uniform2fv(a,b)}
function Rzb(a){return new $wnd.Float32Array(a)}
function Uzb(a){return new $wnd.Uint16Array(a)}
function GKc(a,b){return a.b!=b.b?dv(b.b-a.b):b.S-a.S}
function PKc(a){var b;b=new TKc;OYb(a,b);D2b(b.b,a.b);b.d=a.d;b.e=a.e;b.c=a.c;return b}
function TKc(){eZb.call(this);this.e=0;this.c=false;QKc(this,new N2b(16777215))}
function Arc(){k9b.call(this);this.e=new ENb('./static/textures/sprite1.png');this.f=new ENb('./static/textures/sprite2.png')}
function zrc(a){var b,c,d,e,f;f=~~(a.H.n.$/2);b=~~(a.H.n.Z/2);e=Xu(a.n.v,352);d=~~(((e.d.q.offsetWidth||0)|0)/2);c=~~(((e.d.q.offsetHeight||0)|0)/2);B5b(a.n.ab,-f+d,b-c,1);B5b(a.o.ab,f-d,b-c,1);B5b(a.i.ab,-f+d,-b+c,1);B5b(a.j.ab,f-d,-b+c,1);B5b(a.k.ab,0,0,1)}
function FKc(){FKc=tLc;var a,b,c;$Ob();new TKc;EKc=new qQb;a=Uzb(Nu(NR,CLc,-1,[0,1,2,0,2,3]));c=Rzb(Nu(MR,zMc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=Rzb(Nu(MR,zMc,-1,[0,0,1,0,1,1,0,1]));mQb(EKc,KSc,new jQb(a,1));mQb(EKc,xPc,new jQb(c,3));mQb(EKc,GUc,new jQb(b,2))}
function ZKc(a,b){var c;UFb.call(this,a,b);this.f=new G5b;this.g=new l4b;this.i=new G5b;c=this.v.db;this.k=Rzb(Nu(MR,zMc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.c=Uzb(Nu(NR,CLc,-1,[0,1,2,0,2,3]));this.j=c.createBuffer();this.b=c.createBuffer();hyb(c,(UAb(),SAb),this.j);uyb(c,SAb,this.k,(aBb(),$Ab));hyb(c,TAb,this.b);uyb(c,TAb,this.c,$Ab);this.e=new bLc;AIb(this.e,c,false,0,0)}
var MUc='alphaTest',LUc='fogType',QUc='thothbot.parallax.plugins.sprite.',RUc='thothbot.parallax.plugins.sprite.shaders.',OUc='uvOffset';vU(1222,1,dNc);_.Db=function xrc(){M8b(this.c,new Arc(this.b))};vU(1223,967,aNc,Arc);_.Md=function Brc(a){zrc(this)};_.ob=function Crc(){var a,b,c,d,e,f,g,i;Mt((Rxb(),Qxb),(_xb(),$xb),this);this.b=new _Pb(60,NGb(this.H.n),1,2100);D5b(this.b.ab,1500);this.c=new OPb(this.H.n.$,this.H.n.Z,1,10);D5b(this.c.ab,10);R7b(this.I,new H7b(0,1500,2100));this.g=new S7b;new ZKc(this.H.n,this.I);new ZKc(this.H.n,this.g);new FNb('./static/textures/sprite0.png',new Frc(this));d=new TKc;RKc(d,this.f);QKc(d,new N2b(16777215));d.c=true;c=new TKc;RKc(c,this.e);QKc(c,new N2b(16777215));c.c=true;this.d=new qPb;for(a=0;a<200;a++){f=dlb()-0.5;g=dlb()-0.5;i=dlb()-0.5;if(i<0){b=PKc(c)}else{b=PKc(d);J2b(b.b,0.5*dlb(),0.75,0.5);Q4b(b.d.B,-0.5,-0.5);Q4b(b.d.C,2,2)}e=new JKc(b);B5b(e.ab,f,g,i);e.ab.uf();e.ab.sf(500);_Ob(this.d,e)}_Ob(this.I,this.d);fHb(this.H.n,false)};_.pb=function Drc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.d.R.c;b<e;b++){i=Xu(Fqb(this.d.R,b),351);f=Xu(i.v,352);g=flb(j+i.ab.d*0.01)*0.3+1;d=1;c=1;if(!!f.d&&!!f.d.q&&((f.d.q.offsetWidth||0)|0)>0){d=(f.d.q.offsetWidth||0)|0;c=(f.d.q.offsetHeight||0)|0}SKc(f,f.e+0.1*(b/e));B5b(i.fb,g*d,g*c,1);f.d==this.f||_Yb(f,flb(j+i.ab.d*0.01)*0.4+0.6)}$2b(this.d.db,j*0.5);_2b(this.d.db,j*0.75);a3b(this.d.db,j);HGb(this.H.n);ZGb(this.H.n,this.I,this.b,null,false);vyb(this.H.n.db,(iBb(),gBb).b);ZGb(this.H.n,this.g,this.c,null,false)};vU(1224,1,{},Frc);_.$d=function Grc(a){var b,c,d;c=new TKc;c.d=a;d=(c.d.q.offsetWidth||0)|0;b=(c.d.q.offsetHeight||0)|0;this.b.n=new JKc(c);B5b(this.b.n.fb,d,b,1);_Ob(this.b.g,this.b.n);this.b.o=new JKc(c);B5b(this.b.o.fb,d,b,1);_Ob(this.b.g,this.b.o);this.b.i=new JKc(c);B5b(this.b.i.fb,d,b,1);_Ob(this.b.g,this.b.i);this.b.j=new JKc(c);B5b(this.b.j.fb,d,b,1);_Ob(this.b.g,this.b.j);this.b.k=new JKc(c);B5b(this.b.k.fb,d,b,1);_Ob(this.b.g,this.b.k);zrc(this.b)};vU(1474,832,{149:1,247:1,248:1,351:1},JKc);_._d=function KKc(){var a;return a=new JKc(Xu(this.v,352)),aPb(this,a,true),a};_.cT=function LKc(a){return GKc(this,Xu(a,351))};_.ee=function MKc(a,b){var c,d,e;e=new G5b;C5b(e,this.Y);c=s4b(a.d,e);if(c>this.fb.d){return}d=new ZSb;d.b=c;d.e=this.ab;d.d=this;b.Lc(d)};_.fe=function NKc(a,b,c){};_.b=0;var EKc;vU(1475,908,{267:1,281:1,352:1},TKc);_.Te=function UKc(){return PKc(this)};_.Ue=function VKc(){return null};_.te=function WKc(){return this.b};_.ue=function XKc(a){QKc(this,a)};_.c=false;_.e=0;vU(1476,711,NMc,ZKc);_.Od=function $Kc(){return 2};_.Pd=function _Kc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.d||this.d.c==0)&&(this.d=bPb(this.w,DR)),this.d);o=s.c;if(o==0)return;i=this.v.db;t=this.e.j;e=this.e.c;Gzb(i,this.e.i);Qyb(i,Xu(e.b[xPc],157).b);Qyb(i,Xu(e.b[GUc],157).b);Jyb(i,(iCb(),aCb).b);Pyb(i,_Bb.b);hyb(i,(UAb(),SAb),this.j);Kzb(i,Xu(e.b[xPc],157).b,2,(CBb(),wBb),16,0);Kzb(i,Xu(e.b[GUc],157).b,2,wBb,16,8);hyb(i,TAb,this.b);Fzb(i,Xu(t.b[HUc],225).c,false,a.q.b);dyb(i,(IFb(),cFb).b);wzb(i,Xu(t.b[IUc],225).c,0);p=0;q=0;f=this.w.c;if(f){Azb(i,Xu(t.b[GTc],225).c,f.d.d,f.d.c,f.d.b);if($u(f,307)){uzb(i,Xu(t.b[JUc],225).c,Xu(f,307).c);uzb(i,Xu(t.b[KUc],225).c,Xu(f,307).b);wzb(i,Xu(t.b[LUc],225).c,1);p=1;q=1}else if($u(f,308)){uzb(i,Xu(t.b[FTc],225).c,Xu(f,308).b);wzb(i,Xu(t.b[LUc],225).c,2);p=2;q=2}}else{wzb(i,Xu(t.b[LUc],225).c,0);p=0;q=0}for(k=0;k<o;k++){r=(wgb(k,s.c),Xu(s.b[k],351));if(!r.hb)continue;P3b(r.P,a.p,r.Y);HKc(r,-r.P.b[14])}trb(s);for(j=0;j<o;j++){r=(wgb(j,s.c),Xu(s.b[j],351));n=Xu(r.v,352);if(!r.hb)continue;uzb(i,Xu(t.b[MUc],225).c,n.M);Fzb(i,Xu(t.b[NUc],225).c,false,r.P.b);B3b(r.Y,this.f,this.g,this.i);g=0;!!this.w.c&&n.c&&(g=q);if(p!=g){wzb(i,Xu(t.b[LUc],225).c,g);p=g}if(!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0){xzb(i,Xu(t.b[OUc],225).c,n.d.B.d,n.d.B.e);xzb(i,Xu(t.b[HTc],225).c,n.d.C.d,n.d.C.e)}else{xzb(i,Xu(t.b[OUc],225).c,0,0);xzb(i,Xu(t.b[HTc],225).c,1,1)}uzb(i,Xu(t.b[aTc],225).c,n.$);Azb(i,Xu(t.b[rRc],225).c,n.b.d,n.b.c,n.b.b);uzb(i,Xu(t.b[PUc],225).c,n.e);yzb(i,Xu(t.b[oUc],225).c,Nu(MR,zMc,-1,[this.i.d,this.i.e]));gHb(this.v,n.Q);mHb(this.v,n.S);nHb(this.v,n.T);!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0&&wHb(this.v,n.d,0);Oyb(i,(eAb(),bAb),6,(WBb(),VBb),0)}Pyb(i,aCb.b);eHb(this.v)};vU(1477,731,SMc,bLc);_.Rd=function cLc(){yIb(this,OUc,new FMb((YMb(),SMb),new U4b(0,0)));yIb(this,HTc,new FMb(SMb,new U4b(1,1)));yIb(this,PUc,new FMb(KMb,new Yjb(1)));yIb(this,oUc,new FMb(SMb,new U4b(1,1)));yIb(this,rRc,new FMb(JMb,new N2b(16777215)));yIb(this,IUc,new EMb(QMb));yIb(this,aTc,new FMb(KMb,new Yjb(1)));yIb(this,LUc,new FMb(NMb,Ekb(0)));yIb(this,FTc,new FMb(KMb,new Yjb(2.5E-4)));yIb(this,JUc,new FMb(KMb,new Yjb(1)));yIb(this,KUc,new FMb(KMb,new Yjb(2000)));yIb(this,GTc,new FMb(JMb,new N2b(16777215)));yIb(this,MUc,new FMb(KMb,Ekb(0)))};var dLc;vU(1478,1,{},iLc);_.Ud=function jLc(){return rLc(),gLc};_.Vd=function kLc(){return sLc(),hLc};var gLc,hLc;vU(1479,1,{},mLc);_.tc=function nLc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};vU(1480,1,{},pLc);_.tc=function qLc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var FO=Mjb(gSc,'EffectsSprites$DemoScene',1223),EO=Mjb(gSc,'EffectsSprites$DemoScene$1',1224),DR=Mjb(QUc,'Sprite',1474),BR=Mjb(QUc,'SpriteMaterial',1475),CR=Mjb(QUc,'SpritePlugin',1476),HR=Mjb(RUc,'SpriteShader',1477),GR=Mjb(RUc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1478),ER=Mjb(RUc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1479),FR=Mjb(RUc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1480);rNc(Ii)(42);