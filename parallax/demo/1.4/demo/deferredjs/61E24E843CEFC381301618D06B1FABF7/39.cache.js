function Azc(){}
function Jzc(){}
function Nzc(){}
function Qzc(){}
function azc(a,b){a.i=b}
function bzc(a,b){a.k=b}
function czc(a,b){a.r=b}
function Zyc(a,b){a.c=b}
function $yc(a,b){a.e=b}
function _yc(a,b){a.f=b}
function uzc(){rzc();return hzc}
function Fzc(){Fzc=Uzc;Ezc=new Jzc}
function Szc(){Szc=Uzc;Hzc=new Nzc}
function Tzc(){Tzc=Uzc;Izc=new Qzc}
function szc(a){return new b2b(a.b,a.c)}
function Uwb(c,a,b){c.uniform2fv(a,b)}
function Czc(){ZFb.call(this,(Fzc(),Ezc))}
function tzc(a,b,c,d){Hd.call(this,a,b);this.b=c;this.c=d}
function hmc(){U5b.call(this);this.d=new TKb('./static/textures/sprite0.png');this.e=new TKb('./static/textures/sprite1.png');this.f=new TKb('./static/textures/sprite2.png')}
function dzc(){lMb();DMb.call(this);this.d=(OWb(),MWb);dyb();Rxb();Exb();this.o=true;this.c=(rzc(),lzc);this.i=1;this.e=new V_b(16777215);this.f=new PKb;this.g=!this.o;this.b=!this.o;this.n=!this.b;this.j=this.db;this.k=0;this.p=new b2b(0,0);this.q=new b2b(1,1)}
function rzc(){rzc=Uzc;pzc=new tzc('TOP_LEFT',0,1,-1);ozc=new tzc('TOP_CENTER',1,0,-1);qzc=new tzc('TOP_RIGHT',2,-1,-1);mzc=new tzc('CENTER_LEFT',3,1,0);lzc=new tzc(FDc,4,0,0);nzc=new tzc('CENTER_RIGHT',5,-1,0);jzc=new tzc('BOTTOM_LEFT',6,1,1);izc=new tzc('BOTTOM_CENTER',7,0,1);kzc=new tzc('BOTTOM_RIGHT',8,-1,1);hzc=Nu(BR,$zc,292,[pzc,ozc,qzc,mzc,lzc,nzc,jzc,izc,kzc])}
function wzc(a,b){var c,d;kDb.call(this,a,b);this.c=new Azc;c=this.q.bb;this.c.g=ixb(16);this.c.d=kxb(6);d=0;gxb(this.c.g,d++,-1);gxb(this.c.g,d++,-1);gxb(this.c.g,d++,0);gxb(this.c.g,d++,1);gxb(this.c.g,d++,1);gxb(this.c.g,d++,-1);gxb(this.c.g,d++,1);gxb(this.c.g,d++,1);gxb(this.c.g,d++,1);gxb(this.c.g,d++,1);gxb(this.c.g,d++,1);gxb(this.c.g,d++,0);gxb(this.c.g,d++,-1);gxb(this.c.g,d++,1);gxb(this.c.g,d++,0);gxb(this.c.g,d++,0);d=0;jxb(this.c.d,d++,0);jxb(this.c.d,d++,1);jxb(this.c.d,d++,2);jxb(this.c.d,d++,0);jxb(this.c.d,d++,2);jxb(this.c.d,d++,3);this.c.f=c.createBuffer();this.c.c=c.createBuffer();Gvb(c,(kyb(),iyb),this.c.f);Tvb(c,iyb,this.c.g,(syb(),qyb));Gvb(c,jyb,this.c.c);Tvb(c,jyb,this.c.d,qyb);this.c.e=new Czc;PFb(this.c.e,c,false,0,0)}
var HIc='affectedByDistance',KIc='alignment',LIc='thothbot.parallax.plugins.sprite.',MIc='thothbot.parallax.plugins.sprite.shaders.',GIc='useScreenCoordinates',JIc='uvOffset';ES(1175,1,zBc);_.Cb=function fmc(){R5b(this.c,new hmc(this.b))};ES(1176,946,{},hmc);_.nb=function imc(){var a,b,c,d,e;this.b=new lNb(60,jEb(this.F.o),1,2100);M2b(this.b.ab,1500);new wzc(this.F.o,this.G);this.c=new DMb;for(a=0;a<200;a++){b=new dzc;_yc(b,this.f);b.o=false;$yc(b,new V_b(16777215));K2b(b.ab,Hib()-0.5,Hib()-0.5,Hib()-0.5);if(b.ab.c<0){_yc(b,this.e)}else{R_b(b.e,0.5*Hib(),0.75,0.5);Z1b(b.q,2,2);Z1b(b.p,-0.5,-0.5)}b.ab.tf();b.ab.rf(500);mMb(this.c,b)}mMb(this.G,this.c);c=new dzc;_yc(c,this.d);Zyc(c,(rzc(),pzc));K2b(c.ab,100,100,0);c.i=0.25;mMb(this.G,c);d=new dzc;_yc(d,this.d);Zyc(d,pzc);K2b(d.ab,150,150,2);d.i=0.5;mMb(this.G,d);e=new dzc;_yc(e,this.d);Zyc(e,pzc);K2b(e.ab,200,200,3);e.i=1;mMb(this.G,e)};_.ob=function jmc(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.c.R.c;b++){d=Xu(gob(this.c.R,b),291);c=Jib(e+d.ab.d*0.01)*0.3+0.5;bzc(d,d.k+0.1*(b/this.c.R.c));K2b(d.fb,c,c,1);d.f==this.f||azc(d,Jib(e+d.ab.d*0.01)*0.4+0.6)}g0b(this.c.db,e*0.5);h0b(this.c.db,e*0.75);i0b(this.c.db,e);vEb(this.F.o,this.G,this.b,null,false)};ES(1333,796,{97:1,196:1,291:1},dzc);_.cT=function ezc(a){var b;return b=Xu(a,291).r-this.r,b==0?0:b>0?1:-1};_._d=function fzc(){$0b(this.W,this.ab);b0b(this.j,0,this.k);R0b(this.W,this.j);(this.fb.d!=1||this.fb.e!=1)&&Y0b(this.W,this.fb);this.Z=true};_.b=false;_.g=false;_.i=0;_.k=0;_.n=false;_.o=false;_.r=0;ES(1334,33,{91:1,97:1,100:1,292:1},tzc);_.b=0;_.c=0;var hzc,izc,jzc,kzc,lzc,mzc,nzc,ozc,pzc,qzc;ES(1335,700,gBc,wzc);_.Nd=function xzc(){return pDb(),nDb};_.Od=function yzc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t,u;t=(!this.b&&(this.b=oMb(this.r,LP)),this.b);p=t.c;if(p==0)return;f=this.q.bb;u=this.c.e.j;e=this.c.e.c;n=d/c;i=c*0.5;g=d*0.5;o=true;axb(f,this.c.e.i);if(!this.c.b){kwb(f,Xu(e.b[RDc],105).b);kwb(f,Xu(e.b[wIc],105).b);this.c.b=true}dwb(f,(Azb(),szb).b);jwb(f,rzb.b);cwb(f,true);Gvb(f,(kyb(),iyb),this.c.f);exb(f,Xu(e.b[RDc],105).b,2,(Uyb(),Oyb),16,0);exb(f,Xu(e.b[wIc],105).b,2,Oyb,16,8);Gvb(f,jyb,this.c.c);_wb(f,Xu(u.b[FIc],174).c,false,a.q.b);Cvb(f,($Cb(),uCb).b);Swb(f,Xu(u.b[yIc],174).c,0);for(j=0;j<p;j++){s=(beb(j,t.c),Xu(t.b[j],291));if(!s.hb||s.i==0)continue;if(s.o){czc(s,-s.ab.c)}else{X0b(s.P,a.p,s.Y);czc(s,-s.P.b[14])}}Wob(t);for(k=0;k<p;k++){s=(beb(k,t.c),Xu(t.b[k],291));if(!s.hb||s.i==0)continue;if(!!s.f&&!!s.f.q&&((s.f.q.offsetWidth||0)|0)>0){if(s.o){Swb(f,Xu(u.b[GIc],174).c,1);Wwb(f,Xu(u.b[BIc],174).c,(s.ab.d-i)/i,(g-s.ab.e)/g,Cib(0,Eib(1,s.ab.c)))}else{Swb(f,Xu(u.b[GIc],174).c,0);Swb(f,Xu(u.b[HIc],174).c,s.b?1:0);_wb(f,Xu(u.b[IIc],174).c,false,s.P.b)}r=((s.f.q.offsetWidth||0)|0)/(s.n?d:1);q=Nu(UP,UAc,-1,[r*n*s.fb.d,r*s.fb.e]);Twb(f,Xu(u.b[WHc],174).c,s.q.d,s.q.e);Twb(f,Xu(u.b[JIc],174).c,s.p.d,s.p.e);Twb(f,Xu(u.b[KIc],174).c,szc(s.c).d,szc(s.c).e);Qwb(f,Xu(u.b[pHc],174).c,s.i);Wwb(f,Xu(u.b[FFc],174).c,s.e.d,s.e.c,s.e.b);Qwb(f,Xu(u.b[CIc],174).c,s.k);Uwb(f,Xu(u.b[AIc],174).c,q);if(s.g&&!o){jwb(f,tzb.b);o=true}else if(!s.g&&o){dwb(f,tzb.b);o=false}DEb(this.q,s.d);TEb(this.q,s.f,0);iwb(f,(wxb(),txb),6,(mzb(),lzb),0)}}jwb(f,szb.b);jwb(f,tzb.b);cwb(f,true);CEb(this.q)};ES(1336,1,{},Azc);_.b=false;ES(1337,719,lBc,Czc);_.Qd=function Dzc(){NFb(this,JIc,new UJb((lKb(),fKb),new b2b(0,0)));NFb(this,WHc,new UJb(fKb,new b2b(1,1)));NFb(this,CIc,new UJb(ZJb,new Ahb(1)));NFb(this,AIc,new UJb(fKb,new b2b(1,1)));NFb(this,KIc,new UJb(fKb,new b2b(0,0)));NFb(this,FFc,new UJb(YJb,new V_b(16777215)));NFb(this,yIc,new TJb(dKb));NFb(this,pHc,new UJb(ZJb,new Ahb(1)));NFb(this,GIc,new UJb(aKb,gib(1)));NFb(this,HIc,new UJb(aKb,gib(1)));NFb(this,BIc,new UJb(hKb,new Q2b(0,0,0)))};var Ezc;ES(1338,1,{},Jzc);_.Td=function Kzc(){return Szc(),Hzc};_.Ud=function Lzc(){return Tzc(),Izc};var Hzc,Izc;ES(1339,1,{},Nzc);_.ic=function Ozc(){return 'precision mediump float;\r\n\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n}\r\n'};ES(1340,1,{},Qzc);_.ic=function Rzc(){return 'uniform int useScreenCoordinates;\r\nuniform int affectedByDistance;\r\nuniform vec3 screenPosition;\r\nuniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 alignment;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position + alignment;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\r\n\trotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tif( useScreenCoordinates != 0 ) {\r\n\r\n\t\tfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\r\n\r\n\t} else {\r\n\r\n\t\tfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\t\tfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\r\n\r\n\t}\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var TN=ohb(uGc,'EffectsSprites$DemoScene',1176),LP=ohb(LIc,'Sprite',1333),IP=phb(LIc,'Sprite$ALIGNMENT',1334,qD,uzc),BR=nhb('[Lthothbot.parallax.plugins.sprite.','Sprite$ALIGNMENT;',1400,IP),KP=ohb(LIc,'SpritePlugin',1335),JP=ohb(LIc,'SpritePlugin$SpriteGeometry',1336),PP=ohb(MIc,'SpriteShader',1337),OP=ohb(MIc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1338),MP=ohb(MIc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1339),NP=ohb(MIc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1340);LBc(Hi)(39);