function IKc(){}
function MKc(){}
function PKc(){}
function fKc(a,b){a.a=b}
function oKc(a,b){a.a=b}
function pKc(a,b){a.c=b}
function qKc(a,b){a.d=b}
function yrc(a){this.a=a}
function gKc(a,b){fTb.call(this,a,b)}
function hKc(a){dKc();gKc.call(this,cKc,a)}
function BKc(){EIb.call(this,(EKc(),DKc))}
function EKc(){EKc=TKc;DKc=new IKc}
function RKc(){RKc=TKc;GKc=new MKc}
function SKc(){SKc=TKc;HKc=new PKc}
function qzb(c,a,b){c.uniform2fv(a,b)}
function Jzb(a){return new $wnd.Float32Array(a)}
function Mzb(a){return new $wnd.Uint16Array(a)}
function eKc(a,b){return a.a!=b.a?xu(b.a-a.a):b.R-a.R}
function nKc(a){var b;b=new rKc;UZb(a,b);K3b(b.a,a.a);b.c=a.c;b.d=a.d;b.b=a.b;return b}
function rKc(){k$b.call(this);this.d=0;this.b=false;oKc(this,new V3b(16777215))}
function trc(){gac.call(this);this.d=new TNb('./static/textures/sprite1.png');this.e=new TNb('./static/textures/sprite2.png')}
function rrc(a){var b,c,d,e,f;f=~~(a.G.k.Z/2);b=~~(a.G.k.Y/2);e=pu(a.k.u,354);d=~~(((e.c.p.offsetWidth||0)|0)/2);c=~~(((e.c.p.offsetHeight||0)|0)/2);K6b(a.k._,-f+d,b-c,1);K6b(a.n._,f-d,b-c,1);K6b(a.g._,-f+d,-b+c,1);K6b(a.i._,f-d,-b+c,1);K6b(a.j._,0,0,1)}
function dKc(){dKc=TKc;var a,b,c;nPb();new rKc;cKc=new NQb;a=Mzb(fu(yR,_Kc,-1,[0,1,2,0,2,3]));c=Jzb(fu(xR,YLc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=Jzb(fu(xR,YLc,-1,[0,0,1,0,1,1,0,1]));HQb(cKc,bSc,new EQb(a,1));HQb(cKc,OOc,new EQb(c,3));HQb(cKc,nUc,new EQb(b,2))}
function xKc(a,b){var c;OFb.call(this,a,b);this.e=new P6b;this.f=new t5b;this.g=new P6b;c=this.u.cb;this.j=Jzb(fu(xR,YLc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.b=Mzb(fu(yR,_Kc,-1,[0,1,2,0,2,3]));this.i=c.createBuffer();this.a=c.createBuffer();_xb(c,(OAb(),MAb),this.i);myb(c,MAb,this.j,(WAb(),UAb));_xb(c,NAb,this.a);myb(c,NAb,this.b,UAb);this.d=new BKc;uIb(this.d,c,false,0,0)}
var tUc='alphaTest',sUc='fogType',xUc='thothbot.parallax.plugins.sprite.',yUc='thothbot.parallax.plugins.sprite.shaders.',vUc='uvOffset';hU(1230,1,DMc);_.zb=function prc(){I9b(this.b,new trc(this.a))};hU(1231,978,AMc,trc);_.Gd=function urc(a){rrc(this)};_.nb=function vrc(){var a,b,c,d,e,f,g,i;et((Jxb(),Ixb),(Txb(),Sxb),this);this.a=new rQb(60,HGb(this.G.k),1,2100);M6b(this.a._,1500);this.b=new cQb(this.G.k.Z,this.G.k.Y,1,10);M6b(this.b._,10);L8b(this.H,new B8b(0,1500,2100));this.f=new N8b;new xKc(this.G.k,this.H);new xKc(this.G.k,this.f);new UNb('./static/textures/sprite0.png',new yrc(this));d=new rKc;pKc(d,this.e);oKc(d,new V3b(16777215));d.b=true;c=new rKc;pKc(c,this.d);oKc(c,new V3b(16777215));c.b=true;this.c=new GPb;for(a=0;a<200;a++){f=Vkb()-0.5;g=Vkb()-0.5;i=Vkb()-0.5;if(i<0){b=nKc(c)}else{b=nKc(d);R3b(b.a,0.5*Vkb(),0.75,0.5);Y5b(b.c.A,-0.5,-0.5);Y5b(b.c.B,2,2)}e=new hKc(b);K6b(e._,f,g,i);e._.sf();e._.qf(500);oPb(this.c,e)}oPb(this.H,this.c);_Gb(this.G.k,false)};_.ob=function wrc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.c.Q.b;b<e;b++){i=pu(vqb(this.c.Q,b),353);f=pu(i.u,354);g=Xkb(j+i._.c*0.01)*0.3+1;d=1;c=1;if(!!f.c&&!!f.c.p&&((f.c.p.offsetWidth||0)|0)>0){d=(f.c.p.offsetWidth||0)|0;c=(f.c.p.offsetHeight||0)|0}qKc(f,f.d+0.1*(b/e));K6b(i.eb,g*d,g*c,1);f.c==this.e||f$b(f,Xkb(j+i._.c*0.01)*0.4+0.6)}g4b(this.c.cb,j*0.5);h4b(this.c.cb,j*0.75);i4b(this.c.cb,j);AGb(this.G.k,true);TGb(this.G.k,this.H,this.a,null,false);nyb(this.G.k.cb,(cBb(),aBb).a);TGb(this.G.k,this.f,this.b,null,false)};hU(1232,1,{},yrc);_.Ud=function zrc(a){var b,c,d;c=new rKc;c.c=a;d=(c.c.p.offsetWidth||0)|0;b=(c.c.p.offsetHeight||0)|0;this.a.k=new hKc(c);K6b(this.a.k.eb,d,b,1);oPb(this.a.f,this.a.k);this.a.n=new hKc(c);K6b(this.a.n.eb,d,b,1);oPb(this.a.f,this.a.n);this.a.g=new hKc(c);K6b(this.a.g.eb,d,b,1);oPb(this.a.f,this.a.g);this.a.i=new hKc(c);K6b(this.a.i.eb,d,b,1);oPb(this.a.f,this.a.i);this.a.j=new hKc(c);K6b(this.a.j.eb,d,b,1);oPb(this.a.f,this.a.j);rrc(this.a)};hU(1457,837,{149:1,248:1,249:1,353:1},hKc);_.Vd=function iKc(){var a;return a=new hKc(pu(this.u,354)),pPb(this,a,true),a};_.cT=function jKc(a){return eKc(this,pu(a,353))};_.be=function kKc(a,b){var c,d,e;e=new P6b;L6b(e,this.X);c=A5b(a.c,e);if(c>this.eb.c){return}d=new yTb;d.a=c;d.d=this._;d.c=this;b.Fc(d)};_.ce=function lKc(a,b,c){};_.a=0;var cKc;hU(1458,920,{268:1,282:1,354:1},rKc);_.Re=function sKc(){return nKc(this)};_.Se=function tKc(){return null};_.re=function uKc(){return this.a};_.se=function vKc(a){oKc(this,a)};_.b=false;_.d=0;hU(1459,710,kMc,xKc);_.Id=function yKc(){return 2};_.Jd=function zKc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.c||this.c.b==0)&&(this.c=qPb(this.v,oR)),this.c);o=s.b;if(o==0)return;i=this.u.cb;t=this.d.i;e=this.d.b;yzb(i,this.d.g);Iyb(i,pu(e.a[OOc],157).a);Iyb(i,pu(e.a[nUc],157).a);Byb(i,(cCb(),WBb).a);Hyb(i,VBb.a);_xb(i,(OAb(),MAb),this.i);Czb(i,pu(e.a[OOc],157).a,2,(wBb(),qBb),16,0);Czb(i,pu(e.a[nUc],157).a,2,qBb,16,8);_xb(i,NAb,this.a);xzb(i,pu(t.a[oUc],225).b,false,a.p.a);Xxb(i,(CFb(),YEb).a);ozb(i,pu(t.a[pUc],225).b,0);p=0;q=0;f=this.v.a;if(f){szb(i,pu(t.a[TSc],225).b,f.c.c,f.c.b,f.c.a);if(su(f,307)){mzb(i,pu(t.a[qUc],225).b,pu(f,307).b);mzb(i,pu(t.a[rUc],225).b,pu(f,307).a);ozb(i,pu(t.a[sUc],225).b,1);p=1;q=1}else if(su(f,308)){mzb(i,pu(t.a[SSc],225).b,pu(f,308).a);ozb(i,pu(t.a[sUc],225).b,2);p=2;q=2}}else{ozb(i,pu(t.a[sUc],225).b,0);p=0;q=0}for(k=0;k<o;k++){r=(mgb(k,s.b),pu(s.a[k],353));if(!r.gb)continue;X4b(r.O,a.o,r.X);fKc(r,-r.O.a[14])}krb(s);for(j=0;j<o;j++){r=(mgb(j,s.b),pu(s.a[j],353));n=pu(r.u,354);if(!r.gb)continue;mzb(i,pu(t.a[tUc],225).b,n.L);xzb(i,pu(t.a[uUc],225).b,false,r.O.a);J4b(r.X,this.e,this.f,this.g);g=0;!!this.v.a&&n.b&&(g=q);if(p!=g){ozb(i,pu(t.a[sUc],225).b,g);p=g}if(!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0){pzb(i,pu(t.a[vUc],225).b,n.c.A.c,n.c.A.d);pzb(i,pu(t.a[USc],225).b,n.c.B.c,n.c.B.d)}else{pzb(i,pu(t.a[vUc],225).b,0,0);pzb(i,pu(t.a[USc],225).b,1,1)}mzb(i,pu(t.a[sSc],225).b,n.Z);szb(i,pu(t.a[JQc],225).b,n.a.c,n.a.b,n.a.a);mzb(i,pu(t.a[wUc],225).b,n.d);qzb(i,pu(t.a[CTc],225).b,fu(xR,YLc,-1,[this.g.c,this.g.d]));aHb(this.u,n.P);gHb(this.u,n.R);hHb(this.u,n.S);!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0&&qHb(this.u,n.c,0);Gyb(i,($zb(),Xzb),6,(QBb(),PBb),0)}Hyb(i,WBb.a);$Gb(this.u)};hU(1460,730,pMc,BKc);_.Ld=function CKc(){sIb(this,vUc,new UMb((lNb(),fNb),new a6b(0,0)));sIb(this,USc,new UMb(fNb,new a6b(1,1)));sIb(this,wUc,new UMb(ZMb,new Ojb(1)));sIb(this,CTc,new UMb(fNb,new a6b(1,1)));sIb(this,JQc,new UMb(YMb,new V3b(16777215)));sIb(this,pUc,new TMb(dNb));sIb(this,sSc,new UMb(ZMb,new Ojb(1)));sIb(this,sUc,new UMb(aNb,ukb(0)));sIb(this,SSc,new UMb(ZMb,new Ojb(2.5E-4)));sIb(this,qUc,new UMb(ZMb,new Ojb(1)));sIb(this,rUc,new UMb(ZMb,new Ojb(2000)));sIb(this,TSc,new UMb(YMb,new V3b(16777215)));sIb(this,tUc,new UMb(ZMb,ukb(0)))};var DKc;hU(1461,1,{},IKc);_.Od=function JKc(){return RKc(),GKc};_.Pd=function KKc(){return SKc(),HKc};var GKc,HKc;hU(1462,1,{},MKc);_.nc=function NKc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};hU(1463,1,{},PKc);_.nc=function QKc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var _N=Cjb(zRc,'EffectsSprites$DemoScene',1231),$N=Cjb(zRc,'EffectsSprites$DemoScene$1',1232),oR=Cjb(xUc,'Sprite',1457),mR=Cjb(xUc,'SpriteMaterial',1458),nR=Cjb(xUc,'SpritePlugin',1459),sR=Cjb(yUc,'SpriteShader',1460),rR=Cjb(yUc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1461),pR=Cjb(yUc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1462),qR=Cjb(yUc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1463);RMc(xi)(42);