function ZQc(){}
function bRc(){}
function eRc(){}
function wQc(a,b){a.b=b}
function FQc(a,b){a.b=b}
function GQc(a,b){a.d=b}
function HQc(a,b){a.e=b}
function itc(a){this.b=a}
function xQc(a,b){JUb.call(this,a,b)}
function yQc(a){uQc();xQc.call(this,tQc,a)}
function SQc(){nKb.call(this,(VQc(),UQc))}
function VQc(){VQc=iRc;UQc=new ZQc}
function gRc(){gRc=iRc;XQc=new bRc}
function hRc(){hRc=iRc;YQc=new eRc}
function CAb(c,a,b){c.uniform2fv(a,b)}
function VAb(a){return new $wnd.Float32Array(a)}
function YAb(a){return new $wnd.Uint16Array(a)}
function vQc(a,b){return a.b!=b.b?cv(b.b-a.b):b.S-a.S}
function EQc(a){var b;b=new IQc;R$b(a,b);H4b(b.b,a.b);b.d=a.d;b.e=a.e;b.c=a.c;return b}
function IQc(){h_b.call(this);this.e=0;this.c=false;FQc(this,new R4b(16777215))}
function dtc(){pbc.call(this);this.e=new CPb('./static/textures/sprite1.png');this.f=new CPb('./static/textures/sprite2.png')}
function ctc(a){var b,c,d,e,f;f=~~(a.H.n.$/2);b=~~(a.H.n.Z/2);e=Wu(a.n.v,355);d=~~(((e.d.q.offsetWidth||0)|0)/2);c=~~(((e.d.q.offsetHeight||0)|0)/2);G7b(a.n.ab,-f+d,b-c,1);G7b(a.o.ab,f-d,b-c,1);G7b(a.i.ab,-f+d,-b+c,1);G7b(a.j.ab,f-d,-b+c,1);G7b(a.k.ab,0,0,1)}
function uQc(){uQc=iRc;var a,b,c;YQb();new IQc;tQc=new rSb;a=YAb(Mu(HS,rRc,-1,[0,1,2,0,2,3]));c=VAb(Mu(GS,pSc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=VAb(Mu(GS,pSc,-1,[0,0,1,0,1,1,0,1]));mSb(tQc,BYc,new jSb(a,1));mSb(tQc,nVc,new jSb(c,3));mSb(tQc,R$c,new jSb(b,2))}
function OQc(a,b){var c;xHb.call(this,a,b);this.f=new L7b;this.g=new p6b;this.i=new L7b;c=this.w.db;this.k=VAb(Mu(GS,pSc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.c=YAb(Mu(HS,rRc,-1,[0,1,2,0,2,3]));this.j=c.createBuffer();this.b=c.createBuffer();fzb(c,(YBb(),WBb),this.j);szb(c,WBb,this.k,(eCb(),cCb));fzb(c,XBb,this.b);szb(c,XBb,this.c,cCb);this.e=new SQc;dKb(this.e,c,false,0,0)}
var X$c='alphaTest',W$c='fogType',_$c='thothbot.parallax.plugins.sprite.',a_c='thothbot.parallax.plugins.sprite.shaders.',Z$c='uvOffset';rV(1222,1,VSc);_.Db=function atc(){Rac(this.c,new dtc(this.b))};rV(1223,975,SSc,dtc);_.Nd=function etc(a){ctc(this)};_.ob=function ftc(){var a,b,c,d,e,f,g,i;Lt((Pyb(),Oyb),(Zyb(),Yyb),this);this.b=new $Rb(60,qIb(this.H.n),1,2100);I7b(this.b.ab,1500);this.c=new NRb(this.H.n.$,this.H.n.Z,1,10);I7b(this.c.ab,10);V9b(this.I,new L9b(0,1500,2100));this.g=new X9b;new OQc(this.H.n,this.I);new OQc(this.H.n,this.g);new DPb('./static/textures/sprite0.png',new itc(this));d=new IQc;GQc(d,this.f);FQc(d,new R4b(16777215));d.c=true;c=new IQc;GQc(c,this.e);FQc(c,new R4b(16777215));c.c=true;this.d=new pRb;for(a=0;a<200;a++){f=amb()-0.5;g=amb()-0.5;i=amb()-0.5;if(i<0){b=EQc(c)}else{b=EQc(d);N4b(b.b,0.5*amb(),0.75,0.5);U6b(b.d.B,-0.5,-0.5);U6b(b.d.C,2,2)}e=new yQc(b);G7b(e.ab,f,g,i);e.ab.vf();e.ab.tf(500);ZQb(this.d,e)}ZQb(this.I,this.d);KIb(this.H.n,false)};_.pb=function gtc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.d.R.c;b<e;b++){i=Wu(Crb(this.d.R,b),354);f=Wu(i.v,355);g=cmb(j+i.ab.d*0.01)*0.3+1;d=1;c=1;if(!!f.d&&!!f.d.q&&((f.d.q.offsetWidth||0)|0)>0){d=(f.d.q.offsetWidth||0)|0;c=(f.d.q.offsetHeight||0)|0}HQc(f,f.e+0.1*(b/e));G7b(i.fb,g*d,g*c,1);f.d==this.f||c_b(f,cmb(j+i.ab.d*0.01)*0.4+0.6)}c5b(this.d.db,j*0.5);d5b(this.d.db,j*0.75);e5b(this.d.db,j);jIb(this.H.n,true);CIb(this.H.n,this.I,this.b,null,false);tzb(this.H.n.db,(mCb(),kCb).b);CIb(this.H.n,this.g,this.c,null,false)};rV(1224,1,{},itc);_._d=function jtc(a){var b,c,d;c=new IQc;c.d=a;d=(c.d.q.offsetWidth||0)|0;b=(c.d.q.offsetHeight||0)|0;this.b.n=new yQc(c);G7b(this.b.n.fb,d,b,1);ZQb(this.b.g,this.b.n);this.b.o=new yQc(c);G7b(this.b.o.fb,d,b,1);ZQb(this.b.g,this.b.o);this.b.i=new yQc(c);G7b(this.b.i.fb,d,b,1);ZQb(this.b.g,this.b.i);this.b.j=new yQc(c);G7b(this.b.j.fb,d,b,1);ZQb(this.b.g,this.b.j);this.b.k=new yQc(c);G7b(this.b.k.fb,d,b,1);ZQb(this.b.g,this.b.k);ctc(this.b)};rV(1542,840,{149:1,249:1,250:1,354:1},yQc);_.ae=function zQc(){var a;return a=new yQc(Wu(this.v,355)),$Qb(this,a,true),a};_.cT=function AQc(a){return vQc(this,Wu(a,354))};_.fe=function BQc(a,b){var c,d,e;e=new L7b;H7b(e,this.Y);c=w6b(a.d,e);if(c>this.fb.d){return}d=new aVb;d.b=c;d.e=this.ab;d.d=this;b.Mc(d)};_.ge=function CQc(a,b,c){};_.b=0;var tQc;rV(1543,916,{269:1,283:1,355:1},IQc);_.Ue=function JQc(){return EQc(this)};_.Ve=function KQc(){return null};_.ue=function LQc(){return this.b};_.ve=function MQc(a){FQc(this,a)};_.c=false;_.e=0;rV(1544,713,DSc,OQc);_.Pd=function PQc(){return 2};_.Qd=function QQc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.d||this.d.c==0)&&(this.d=_Qb(this.A,xS)),this.d);o=s.c;if(o==0)return;i=this.w.db;t=this.e.j;e=this.e.c;KAb(i,this.e.i);Qzb(i,Wu(e.b[nVc],157).b);Qzb(i,Wu(e.b[R$c],157).b);Jzb(i,(mDb(),eDb).b);Pzb(i,dDb.b);fzb(i,(YBb(),WBb),this.j);OAb(i,Wu(e.b[nVc],157).b,2,(GCb(),ACb),16,0);OAb(i,Wu(e.b[R$c],157).b,2,ACb,16,8);fzb(i,XBb,this.b);JAb(i,Wu(t.b[S$c],227).c,false,a.q.b);bzb(i,(kHb(),GGb).b);AAb(i,Wu(t.b[T$c],227).c,0);p=0;q=0;f=this.A.b;if(f){EAb(i,Wu(t.b[sZc],227).c,f.d.d,f.d.c,f.d.b);if(Zu(f,308)){yAb(i,Wu(t.b[U$c],227).c,Wu(f,308).c);yAb(i,Wu(t.b[V$c],227).c,Wu(f,308).b);AAb(i,Wu(t.b[W$c],227).c,1);p=1;q=1}else if(Zu(f,309)){yAb(i,Wu(t.b[rZc],227).c,Wu(f,309).b);AAb(i,Wu(t.b[W$c],227).c,2);p=2;q=2}}else{AAb(i,Wu(t.b[W$c],227).c,0);p=0;q=0}for(k=0;k<o;k++){r=(thb(k,s.c),Wu(s.b[k],354));if(!r.hb)continue;T5b(r.P,a.p,r.Y);wQc(r,-r.P.b[14])}qsb(s);for(j=0;j<o;j++){r=(thb(j,s.c),Wu(s.b[j],354));n=Wu(r.v,355);if(!r.hb)continue;yAb(i,Wu(t.b[X$c],227).c,n.M);JAb(i,Wu(t.b[Y$c],227).c,false,r.P.b);F5b(r.Y,this.f,this.g,this.i);g=0;!!this.A.b&&n.c&&(g=q);if(p!=g){AAb(i,Wu(t.b[W$c],227).c,g);p=g}if(!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0){BAb(i,Wu(t.b[Z$c],227).c,n.d.B.d,n.d.B.e);BAb(i,Wu(t.b[tZc],227).c,n.d.C.d,n.d.C.e)}else{BAb(i,Wu(t.b[Z$c],227).c,0,0);BAb(i,Wu(t.b[tZc],227).c,1,1)}yAb(i,Wu(t.b[TYc],227).c,n.$);EAb(i,Wu(t.b[hXc],227).c,n.b.d,n.b.c,n.b.b);yAb(i,Wu(t.b[$$c],227).c,n.e);CAb(i,Wu(t.b[XZc],227).c,Mu(GS,pSc,-1,[this.i.d,this.i.e]));LIb(this.w,n.Q);RIb(this.w,n.S);SIb(this.w,n.T);!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0&&_Ib(this.w,n.d,0);Ozb(i,(iBb(),fBb),6,($Cb(),ZCb),0)}Pzb(i,eDb.b);JIb(this.w)};rV(1545,733,ISc,SQc);_.Sd=function TQc(){bKb(this,Z$c,new DOb((WOb(),QOb),new Y6b(0,0)));bKb(this,tZc,new DOb(QOb,new Y6b(1,1)));bKb(this,$$c,new DOb(IOb,new Vkb(1)));bKb(this,XZc,new DOb(QOb,new Y6b(1,1)));bKb(this,hXc,new DOb(HOb,new R4b(16777215)));bKb(this,T$c,new COb(OOb));bKb(this,TYc,new DOb(IOb,new Vkb(1)));bKb(this,W$c,new DOb(LOb,Blb(0)));bKb(this,rZc,new DOb(IOb,new Vkb(2.5E-4)));bKb(this,U$c,new DOb(IOb,new Vkb(1)));bKb(this,V$c,new DOb(IOb,new Vkb(2000)));bKb(this,sZc,new DOb(HOb,new R4b(16777215)));bKb(this,X$c,new DOb(IOb,Blb(0)))};var UQc;rV(1546,1,{},ZQc);_.Vd=function $Qc(){return gRc(),XQc};_.Wd=function _Qc(){return hRc(),YQc};var XQc,YQc;rV(1547,1,{},bRc);_.uc=function cRc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};rV(1548,1,{},eRc);_.uc=function fRc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var EO=Jkb(ZXc,'EffectsSprites$DemoScene',1223),DO=Jkb(ZXc,'EffectsSprites$DemoScene$1',1224),xS=Jkb(_$c,'Sprite',1542),vS=Jkb(_$c,'SpriteMaterial',1543),wS=Jkb(_$c,'SpritePlugin',1544),BS=Jkb(a_c,'SpriteShader',1545),AS=Jkb(a_c,'SpriteShader_Resources_default_InlineClientBundleGenerator',1546),yS=Jkb(a_c,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1547),zS=Jkb(a_c,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1548);hTc(Ii)(43);