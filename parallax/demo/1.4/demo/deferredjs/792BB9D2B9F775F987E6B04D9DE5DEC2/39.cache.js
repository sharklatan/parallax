function Fzc(){}
function Ozc(){}
function Szc(){}
function Vzc(){}
function czc(a,b){a.c=b}
function dzc(a,b){a.e=b}
function ezc(a,b){a.f=b}
function fzc(a,b){a.i=b}
function gzc(a,b){a.k=b}
function hzc(a,b){a.r=b}
function zzc(){wzc();return mzc}
function Kzc(){Kzc=Zzc;Jzc=new Ozc}
function Xzc(){Xzc=Zzc;Mzc=new Szc}
function Yzc(){Yzc=Zzc;Nzc=new Vzc}
function xzc(a){return new d2b(a.b,a.c)}
function Wwb(c,a,b){c.uniform2fv(a,b)}
function Hzc(){_Fb.call(this,(Kzc(),Jzc))}
function yzc(a,b,c,d){Hd.call(this,a,b);this.b=c;this.c=d}
function mmc(){W5b.call(this);this.d=new VKb('./static/textures/sprite0.png');this.e=new VKb('./static/textures/sprite1.png');this.f=new VKb('./static/textures/sprite2.png')}
function izc(){nMb();FMb.call(this);this.d=(QWb(),OWb);fyb();Txb();Gxb();this.o=true;this.c=(wzc(),qzc);this.i=1;this.e=new X_b(16777215);this.f=new RKb;this.g=!this.o;this.b=!this.o;this.n=!this.b;this.j=this.db;this.k=0;this.p=new d2b(0,0);this.q=new d2b(1,1)}
function wzc(){wzc=Zzc;uzc=new yzc('TOP_LEFT',0,1,-1);tzc=new yzc('TOP_CENTER',1,0,-1);vzc=new yzc('TOP_RIGHT',2,-1,-1);rzc=new yzc('CENTER_LEFT',3,1,0);qzc=new yzc(KDc,4,0,0);szc=new yzc('CENTER_RIGHT',5,-1,0);ozc=new yzc('BOTTOM_LEFT',6,1,1);nzc=new yzc('BOTTOM_CENTER',7,0,1);pzc=new yzc('BOTTOM_RIGHT',8,-1,1);mzc=Nu(BR,dAc,292,[uzc,tzc,vzc,rzc,qzc,szc,ozc,nzc,pzc])}
function Bzc(a,b){var c,d;mDb.call(this,a,b);this.c=new Fzc;c=this.q.bb;this.c.g=kxb(16);this.c.d=mxb(6);d=0;ixb(this.c.g,d++,-1);ixb(this.c.g,d++,-1);ixb(this.c.g,d++,0);ixb(this.c.g,d++,1);ixb(this.c.g,d++,1);ixb(this.c.g,d++,-1);ixb(this.c.g,d++,1);ixb(this.c.g,d++,1);ixb(this.c.g,d++,1);ixb(this.c.g,d++,1);ixb(this.c.g,d++,1);ixb(this.c.g,d++,0);ixb(this.c.g,d++,-1);ixb(this.c.g,d++,1);ixb(this.c.g,d++,0);ixb(this.c.g,d++,0);d=0;lxb(this.c.d,d++,0);lxb(this.c.d,d++,1);lxb(this.c.d,d++,2);lxb(this.c.d,d++,0);lxb(this.c.d,d++,2);lxb(this.c.d,d++,3);this.c.f=c.createBuffer();this.c.c=c.createBuffer();Ivb(c,(myb(),kyb),this.c.f);Vvb(c,kyb,this.c.g,(uyb(),syb));Ivb(c,lyb,this.c.c);Vvb(c,lyb,this.c.d,syb);this.c.e=new Hzc;RFb(this.c.e,c,false,0,0)}
var NIc='affectedByDistance',QIc='alignment',RIc='thothbot.parallax.plugins.sprite.',SIc='thothbot.parallax.plugins.sprite.shaders.',MIc='useScreenCoordinates',PIc='uvOffset';ES(1175,1,EBc);_.Cb=function kmc(){T5b(this.c,new mmc(this.b))};ES(1176,946,{},mmc);_.nb=function nmc(){var a,b,c,d,e;this.b=new nNb(60,lEb(this.F.o),1,2100);O2b(this.b.ab,1500);new Bzc(this.F.o,this.G);this.c=new FMb;for(a=0;a<200;a++){b=new izc;ezc(b,this.f);b.o=false;dzc(b,new X_b(16777215));M2b(b.ab,Jib()-0.5,Jib()-0.5,Jib()-0.5);if(b.ab.c<0){ezc(b,this.e)}else{T_b(b.e,0.5*Jib(),0.75,0.5);_1b(b.q,2,2);_1b(b.p,-0.5,-0.5)}b.ab.tf();b.ab.rf(500);oMb(this.c,b)}oMb(this.G,this.c);c=new izc;ezc(c,this.d);czc(c,(wzc(),uzc));M2b(c.ab,100,100,0);c.i=0.25;oMb(this.G,c);d=new izc;ezc(d,this.d);czc(d,uzc);M2b(d.ab,150,150,2);d.i=0.5;oMb(this.G,d);e=new izc;ezc(e,this.d);czc(e,uzc);M2b(e.ab,200,200,3);e.i=1;oMb(this.G,e)};_.ob=function omc(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.c.R.c;b++){d=Xu(iob(this.c.R,b),291);c=Lib(e+d.ab.d*0.01)*0.3+0.5;gzc(d,d.k+0.1*(b/this.c.R.c));M2b(d.fb,c,c,1);d.f==this.f||fzc(d,Lib(e+d.ab.d*0.01)*0.4+0.6)}i0b(this.c.db,e*0.5);j0b(this.c.db,e*0.75);k0b(this.c.db,e);xEb(this.F.o,this.G,this.b,null,false)};ES(1333,796,{97:1,196:1,291:1},izc);_.cT=function jzc(a){var b;return b=Xu(a,291).r-this.r,b==0?0:b>0?1:-1};_._d=function kzc(){a1b(this.W,this.ab);d0b(this.j,0,this.k);T0b(this.W,this.j);(this.fb.d!=1||this.fb.e!=1)&&$0b(this.W,this.fb);this.Z=true};_.b=false;_.g=false;_.i=0;_.k=0;_.n=false;_.o=false;_.r=0;ES(1334,33,{91:1,97:1,100:1,292:1},yzc);_.b=0;_.c=0;var mzc,nzc,ozc,pzc,qzc,rzc,szc,tzc,uzc,vzc;ES(1335,700,lBc,Bzc);_.Nd=function Czc(){return rDb(),pDb};_.Od=function Dzc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t,u;t=(!this.b&&(this.b=qMb(this.r,LP)),this.b);p=t.c;if(p==0)return;f=this.q.bb;u=this.c.e.j;e=this.c.e.c;n=d/c;i=c*0.5;g=d*0.5;o=true;cxb(f,this.c.e.i);if(!this.c.b){mwb(f,Xu(e.b[WDc],105).b);mwb(f,Xu(e.b[CIc],105).b);this.c.b=true}fwb(f,(Czb(),uzb).b);lwb(f,tzb.b);ewb(f,true);Ivb(f,(myb(),kyb),this.c.f);gxb(f,Xu(e.b[WDc],105).b,2,(Wyb(),Qyb),16,0);gxb(f,Xu(e.b[CIc],105).b,2,Qyb,16,8);Ivb(f,lyb,this.c.c);bxb(f,Xu(u.b[LIc],174).c,false,a.q.b);Evb(f,(aDb(),wCb).b);Uwb(f,Xu(u.b[EIc],174).c,0);for(k=0;k<p;k++){s=(deb(k,t.c),Xu(t.b[k],291));if(!s.hb||s.i==0)continue;if(s.o){hzc(s,-s.ab.c)}else{Z0b(s.P,a.p,s.Y);hzc(s,-s.P.b[14])}}Yob(t);for(j=0;j<p;j++){s=(deb(j,t.c),Xu(t.b[j],291));if(!s.hb||s.i==0)continue;if(!!s.f&&!!s.f.q&&((s.f.q.offsetWidth||0)|0)>0){if(s.o){Uwb(f,Xu(u.b[MIc],174).c,1);Ywb(f,Xu(u.b[HIc],174).c,(s.ab.d-i)/i,(g-s.ab.e)/g,Eib(0,Gib(1,s.ab.c)))}else{Uwb(f,Xu(u.b[MIc],174).c,0);Uwb(f,Xu(u.b[NIc],174).c,s.b?1:0);bxb(f,Xu(u.b[OIc],174).c,false,s.P.b)}r=((s.f.q.offsetWidth||0)|0)/(s.n?d:1);q=Nu(UP,ZAc,-1,[r*n*s.fb.d,r*s.fb.e]);Vwb(f,Xu(u.b[aIc],174).c,s.q.d,s.q.e);Vwb(f,Xu(u.b[PIc],174).c,s.p.d,s.p.e);Vwb(f,Xu(u.b[QIc],174).c,xzc(s.c).d,xzc(s.c).e);Swb(f,Xu(u.b[vHc],174).c,s.i);Ywb(f,Xu(u.b[MFc],174).c,s.e.d,s.e.c,s.e.b);Swb(f,Xu(u.b[IIc],174).c,s.k);Wwb(f,Xu(u.b[GIc],174).c,q);if(s.g&&!o){lwb(f,vzb.b);o=true}else if(!s.g&&o){fwb(f,vzb.b);o=false}FEb(this.q,s.d);VEb(this.q,s.f,0);kwb(f,(yxb(),vxb),6,(ozb(),nzb),0)}}lwb(f,uzb.b);lwb(f,vzb.b);ewb(f,true);EEb(this.q)};ES(1336,1,{},Fzc);_.b=false;ES(1337,719,qBc,Hzc);_.Qd=function Izc(){PFb(this,PIc,new WJb((nKb(),hKb),new d2b(0,0)));PFb(this,aIc,new WJb(hKb,new d2b(1,1)));PFb(this,IIc,new WJb(_Jb,new Chb(1)));PFb(this,GIc,new WJb(hKb,new d2b(1,1)));PFb(this,QIc,new WJb(hKb,new d2b(0,0)));PFb(this,MFc,new WJb($Jb,new X_b(16777215)));PFb(this,EIc,new VJb(fKb));PFb(this,vHc,new WJb(_Jb,new Chb(1)));PFb(this,MIc,new WJb(cKb,iib(1)));PFb(this,NIc,new WJb(cKb,iib(1)));PFb(this,HIc,new WJb(jKb,new S2b(0,0,0)))};var Jzc;ES(1338,1,{},Ozc);_.Td=function Pzc(){return Xzc(),Mzc};_.Ud=function Qzc(){return Yzc(),Nzc};var Mzc,Nzc;ES(1339,1,{},Szc);_.ic=function Tzc(){return 'precision mediump float;\r\n\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n}\r\n'};ES(1340,1,{},Vzc);_.ic=function Wzc(){return 'uniform int useScreenCoordinates;\r\nuniform int affectedByDistance;\r\nuniform vec3 screenPosition;\r\nuniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 alignment;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position + alignment;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\r\n\trotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tif( useScreenCoordinates != 0 ) {\r\n\r\n\t\tfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\r\n\r\n\t} else {\r\n\r\n\t\tfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\t\tfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\r\n\r\n\t}\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var TN=qhb(AGc,'EffectsSprites$DemoScene',1176),LP=qhb(RIc,'Sprite',1333),IP=rhb(RIc,'Sprite$ALIGNMENT',1334,qD,zzc),BR=phb('[Lthothbot.parallax.plugins.sprite.','Sprite$ALIGNMENT;',1400,IP),KP=qhb(RIc,'SpritePlugin',1335),JP=qhb(RIc,'SpritePlugin$SpriteGeometry',1336),PP=qhb(SIc,'SpriteShader',1337),OP=qhb(SIc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1338),MP=qhb(SIc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1339),NP=qhb(SIc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1340);QBc(Hi)(39);