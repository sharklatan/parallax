function NJc(){}
function RJc(){}
function UJc(){}
function kJc(a,b){a.a=b}
function tJc(a,b){a.a=b}
function uJc(a,b){a.c=b}
function vJc(a,b){a.d=b}
function Cqc(a){this.a=a}
function lJc(a,b){RSb.call(this,a,b)}
function mJc(a){iJc();lJc.call(this,hJc,a)}
function GJc(){rIb.call(this,(JJc(),IJc))}
function JJc(){JJc=YJc;IJc=new NJc}
function WJc(){WJc=YJc;LJc=new RJc}
function XJc(){XJc=YJc;MJc=new UJc}
function fzb(c,a,b){c.uniform2fv(a,b)}
function yzb(a){return new $wnd.Float32Array(a)}
function Bzb(a){return new $wnd.Uint16Array(a)}
function jJc(a,b){return a.a!=b.a?yu(b.a-a.a):b.R-a.R}
function sJc(a){var b;b=new wJc;ZYb(a,b);P2b(b.a,a.a);b.c=a.c;b.d=a.d;b.b=a.b;return b}
function wJc(){pZb.call(this);this.d=0;this.b=false;tJc(this,new Z2b(16777215))}
function xqc(){y9b.call(this);this.d=new GNb('./static/textures/sprite1.png');this.e=new GNb('./static/textures/sprite2.png')}
function wqc(a){var b,c,d,e,f;f=~~(a.G.k.Z/2);b=~~(a.G.k.Y/2);e=qu(a.k.u,354);d=~~(((e.c.p.offsetWidth||0)|0)/2);c=~~(((e.c.p.offsetHeight||0)|0)/2);O5b(a.k._,-f+d,b-c,1);O5b(a.n._,f-d,b-c,1);O5b(a.g._,-f+d,-b+c,1);O5b(a.i._,f-d,-b+c,1);O5b(a.j._,0,0,1)}
function iJc(){iJc=YJc;var a,b,c;aPb();new wJc;hJc=new zQb;a=Bzb(gu(pR,eKc,-1,[0,1,2,0,2,3]));c=yzb(gu(oR,bLc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=yzb(gu(oR,bLc,-1,[0,0,1,0,1,1,0,1]));uQb(hJc,cRc,new rQb(a,1));uQb(hJc,SNc,new rQb(c,3));uQb(hJc,oTc,new rQb(b,2))}
function CJc(a,b){var c;BFb.call(this,a,b);this.e=new T5b;this.f=new x4b;this.g=new T5b;c=this.u.cb;this.j=yzb(gu(oR,bLc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.b=Bzb(gu(pR,eKc,-1,[0,1,2,0,2,3]));this.i=c.createBuffer();this.a=c.createBuffer();Qxb(c,(BAb(),zAb),this.i);byb(c,zAb,this.j,(JAb(),HAb));Qxb(c,AAb,this.a);byb(c,AAb,this.b,HAb);this.d=new GJc;hIb(this.d,c,false,0,0)}
var uTc='alphaTest',tTc='fogType',yTc='thothbot.parallax.plugins.sprite.',zTc='thothbot.parallax.plugins.sprite.shaders.',wTc='uvOffset';ZT(1220,1,HLc);_.zb=function uqc(){$8b(this.b,new xqc(this.a))};ZT(1221,972,ELc,xqc);_.Gd=function yqc(a){wqc(this)};_.nb=function zqc(){var a,b,c,d,e,f,g,i;ft((yxb(),xxb),(Ixb(),Hxb),this);this.a=new eQb(60,uGb(this.G.k),1,2100);Q5b(this.a._,1500);this.b=new RPb(this.G.k.Z,this.G.k.Y,1,10);Q5b(this.b._,10);b8b(this.H,new T7b(0,1500,2100));this.f=new d8b;new CJc(this.G.k,this.H);new CJc(this.G.k,this.f);new HNb('./static/textures/sprite0.png',new Cqc(this));d=new wJc;uJc(d,this.e);tJc(d,new Z2b(16777215));d.b=true;c=new wJc;uJc(c,this.d);tJc(c,new Z2b(16777215));c.b=true;this.c=new tPb;for(a=0;a<200;a++){f=Mkb()-0.5;g=Mkb()-0.5;i=Mkb()-0.5;if(i<0){b=sJc(c)}else{b=sJc(d);V2b(b.a,0.5*Mkb(),0.75,0.5);a5b(b.c.A,-0.5,-0.5);a5b(b.c.B,2,2)}e=new mJc(b);O5b(e._,f,g,i);e._.qf();e._.of(500);bPb(this.c,e)}bPb(this.H,this.c);OGb(this.G.k,false)};_.ob=function Aqc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.c.Q.b;b<e;b++){i=qu(lqb(this.c.Q,b),353);f=qu(i.u,354);g=Okb(j+i._.c*0.01)*0.3+1;d=1;c=1;if(!!f.c&&!!f.c.p&&((f.c.p.offsetWidth||0)|0)>0){d=(f.c.p.offsetWidth||0)|0;c=(f.c.p.offsetHeight||0)|0}vJc(f,f.d+0.1*(b/e));O5b(i.eb,g*d,g*c,1);f.c==this.e||kZb(f,Okb(j+i._.c*0.01)*0.4+0.6)}k3b(this.c.cb,j*0.5);l3b(this.c.cb,j*0.75);m3b(this.c.cb,j);nGb(this.G.k,true);GGb(this.G.k,this.H,this.a,null,false);cyb(this.G.k.cb,(RAb(),PAb).a);GGb(this.G.k,this.f,this.b,null,false)};ZT(1222,1,{},Cqc);_.Ud=function Dqc(a){var b,c,d;c=new wJc;c.c=a;d=(c.c.p.offsetWidth||0)|0;b=(c.c.p.offsetHeight||0)|0;this.a.k=new mJc(c);O5b(this.a.k.eb,d,b,1);bPb(this.a.f,this.a.k);this.a.n=new mJc(c);O5b(this.a.n.eb,d,b,1);bPb(this.a.f,this.a.n);this.a.g=new mJc(c);O5b(this.a.g.eb,d,b,1);bPb(this.a.f,this.a.g);this.a.i=new mJc(c);O5b(this.a.i.eb,d,b,1);bPb(this.a.f,this.a.i);this.a.j=new mJc(c);O5b(this.a.j.eb,d,b,1);bPb(this.a.f,this.a.j);wqc(this.a)};ZT(1447,837,{149:1,248:1,249:1,353:1},mJc);_.Vd=function nJc(){var a;return a=new mJc(qu(this.u,354)),cPb(this,a,true),a};_.cT=function oJc(a){return jJc(this,qu(a,353))};_.ae=function pJc(a,b){var c,d,e;e=new T5b;P5b(e,this.X);c=E4b(a.c,e);if(c>this.eb.c){return}d=new iTb;d.a=c;d.d=this._;d.c=this;b.Fc(d)};_.be=function qJc(a,b,c){};_.a=0;var hJc;ZT(1448,913,{268:1,282:1,354:1},wJc);_.Pe=function xJc(){return sJc(this)};_.Qe=function yJc(){return null};_.pe=function zJc(){return this.a};_.qe=function AJc(a){tJc(this,a)};_.b=false;_.d=0;ZT(1449,710,pLc,CJc);_.Id=function DJc(){return 2};_.Jd=function EJc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.c||this.c.b==0)&&(this.c=dPb(this.v,fR)),this.c);o=s.b;if(o==0)return;i=this.u.cb;t=this.d.i;e=this.d.b;nzb(i,this.d.g);xyb(i,qu(e.a[SNc],157).a);xyb(i,qu(e.a[oTc],157).a);qyb(i,(RBb(),JBb).a);wyb(i,IBb.a);Qxb(i,(BAb(),zAb),this.i);rzb(i,qu(e.a[SNc],157).a,2,(jBb(),dBb),16,0);rzb(i,qu(e.a[oTc],157).a,2,dBb,16,8);Qxb(i,AAb,this.a);mzb(i,qu(t.a[pTc],225).b,false,a.p.a);Mxb(i,(pFb(),LEb).a);dzb(i,qu(t.a[qTc],225).b,0);p=0;q=0;f=this.v.a;if(f){hzb(i,qu(t.a[URc],225).b,f.c.c,f.c.b,f.c.a);if(tu(f,307)){bzb(i,qu(t.a[rTc],225).b,qu(f,307).b);bzb(i,qu(t.a[sTc],225).b,qu(f,307).a);dzb(i,qu(t.a[tTc],225).b,1);p=1;q=1}else if(tu(f,308)){bzb(i,qu(t.a[TRc],225).b,qu(f,308).a);dzb(i,qu(t.a[tTc],225).b,2);p=2;q=2}}else{dzb(i,qu(t.a[tTc],225).b,0);p=0;q=0}for(k=0;k<o;k++){r=(dgb(k,s.b),qu(s.a[k],353));if(!r.gb)continue;_3b(r.O,a.o,r.X);kJc(r,-r.O.a[14])}_qb(s);for(j=0;j<o;j++){r=(dgb(j,s.b),qu(s.a[j],353));n=qu(r.u,354);if(!r.gb)continue;bzb(i,qu(t.a[uTc],225).b,n.L);mzb(i,qu(t.a[vTc],225).b,false,r.O.a);N3b(r.X,this.e,this.f,this.g);g=0;!!this.v.a&&n.b&&(g=q);if(p!=g){dzb(i,qu(t.a[tTc],225).b,g);p=g}if(!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0){ezb(i,qu(t.a[wTc],225).b,n.c.A.c,n.c.A.d);ezb(i,qu(t.a[VRc],225).b,n.c.B.c,n.c.B.d)}else{ezb(i,qu(t.a[wTc],225).b,0,0);ezb(i,qu(t.a[VRc],225).b,1,1)}bzb(i,qu(t.a[tRc],225).b,n.Z);hzb(i,qu(t.a[LPc],225).b,n.a.c,n.a.b,n.a.a);bzb(i,qu(t.a[xTc],225).b,n.d);fzb(i,qu(t.a[DSc],225).b,gu(oR,bLc,-1,[this.g.c,this.g.d]));PGb(this.u,n.P);VGb(this.u,n.R);WGb(this.u,n.S);!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0&&dHb(this.u,n.c,0);vyb(i,(Nzb(),Kzb),6,(DBb(),CBb),0)}wyb(i,JBb.a);NGb(this.u)};ZT(1450,730,uLc,GJc);_.Ld=function HJc(){fIb(this,wTc,new HMb(($Mb(),UMb),new e5b(0,0)));fIb(this,VRc,new HMb(UMb,new e5b(1,1)));fIb(this,xTc,new HMb(MMb,new Fjb(1)));fIb(this,DSc,new HMb(UMb,new e5b(1,1)));fIb(this,LPc,new HMb(LMb,new Z2b(16777215)));fIb(this,qTc,new GMb(SMb));fIb(this,tRc,new HMb(MMb,new Fjb(1)));fIb(this,tTc,new HMb(PMb,lkb(0)));fIb(this,TRc,new HMb(MMb,new Fjb(2.5E-4)));fIb(this,rTc,new HMb(MMb,new Fjb(1)));fIb(this,sTc,new HMb(MMb,new Fjb(2000)));fIb(this,URc,new HMb(LMb,new Z2b(16777215)));fIb(this,uTc,new HMb(MMb,lkb(0)))};var IJc;ZT(1451,1,{},NJc);_.Od=function OJc(){return WJc(),LJc};_.Pd=function PJc(){return XJc(),MJc};var LJc,MJc;ZT(1452,1,{},RJc);_.nc=function SJc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};ZT(1453,1,{},UJc);_.nc=function VJc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var SN=tjb(AQc,'EffectsSprites$DemoScene',1221),RN=tjb(AQc,'EffectsSprites$DemoScene$1',1222),fR=tjb(yTc,'Sprite',1447),dR=tjb(yTc,'SpriteMaterial',1448),eR=tjb(yTc,'SpritePlugin',1449),jR=tjb(zTc,'SpriteShader',1450),iR=tjb(zTc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1451),gR=tjb(zTc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1452),hR=tjb(zTc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1453);VLc(xi)(42);