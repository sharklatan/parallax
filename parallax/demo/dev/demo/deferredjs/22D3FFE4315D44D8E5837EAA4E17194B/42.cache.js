function NMc(){}
function RMc(){}
function UMc(){}
function kMc(a,b){a.b=b}
function tMc(a,b){a.b=b}
function uMc(a,b){a.d=b}
function vMc(a,b){a.e=b}
function rtc(a){this.b=a}
function lMc(a,b){CUb.call(this,a,b)}
function mMc(a){iMc();lMc.call(this,hMc,a)}
function GMc(){_Jb.call(this,(JMc(),IMc))}
function JMc(){JMc=YMc;IMc=new NMc}
function WMc(){WMc=YMc;LMc=new RMc}
function XMc(){XMc=YMc;MMc=new UMc}
function wAb(c,a,b){c.uniform2fv(a,b)}
function PAb(a){return new $wnd.Float32Array(a)}
function SAb(a){return new $wnd.Uint16Array(a)}
function jMc(a,b){return a.b!=b.b?jw(b.b-a.b):b.S-a.S}
function sMc(a){var b;b=new wMc;z_b(a,b);r5b(b.b,a.b);b.d=a.d;b.e=a.e;b.c=a.c;return b}
function wMc(){R_b.call(this);this.e=0;this.c=false;tMc(this,new G5b(16777215))}
function mtc(){_bc.call(this);this.e=new oPb('./static/textures/sprite1.png');this.f=new oPb('./static/textures/sprite2.png')}
function ltc(a){var b,c,d,e,f;f=~~(a.H.n.ib/2);b=~~(a.H.n.hb/2);e=bw(a.n.v,359);d=~~(((e.d.q.offsetWidth||0)|0)/2);c=~~(((e.d.q.offsetHeight||0)|0)/2);W8b(a.n.ab,-f+d,b-c,1);W8b(a.o.ab,f-d,b-c,1);W8b(a.i.ab,-f+d,-b+c,1);W8b(a.j.ab,f-d,-b+c,1);W8b(a.k.ab,0,0,1)}
function iMc(){iMc=YMc;var a,b,c;KQb();new wMc;hMc=new jSb;a=SAb(Tv(BT,hNc,-1,[0,1,2,0,2,3]));c=PAb(Tv(AT,dOc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=PAb(Tv(AT,dOc,-1,[0,0,1,0,1,1,0,1]));dSb(hMc,tUc,new aSb(a,1));dSb(hMc,gRc,new aSb(c,3));dSb(hMc,FWc,new aSb(b,2))}
function CMc(a,b){var c;ZGb.call(this,a,b);this.f=new a9b;this.g=new w7b;this.i=new a9b;c=this.v.$;this.k=PAb(Tv(AT,dOc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.c=SAb(Tv(BT,hNc,-1,[0,1,2,0,2,3]));this.j=c.createBuffer();this.b=c.createBuffer();fzb(c,(UBb(),SBb),this.j);szb(c,SBb,this.k,(aCb(),$Bb));fzb(c,TBb,this.b);szb(c,TBb,this.c,$Bb);this.e=new GMc;RJb(this.e,c,false,0,0)}
var LWc='alphaTest',KWc='fogType',PWc='thothbot.parallax.plugins.sprite.',QWc='thothbot.parallax.plugins.sprite.shaders.',NWc='uvOffset';kW(1242,1,KOc);_.Qb=function jtc(){Bbc(this.c,new mtc(this.b))};kW(1243,990,HOc,mtc);_.Nd=function ntc(a){ltc(this)};_.ob=function otc(){var a,b,c,d,e,f,g,i;Su((Pyb(),Oyb),(Zyb(),Yyb),this);this.b=new PRb(60,UGb(this.H.n),1,2100);Y8b(this.b.ab,1500);this.c=new ARb(this.H.n.ib,this.H.n.hb,1,10);Y8b(this.c.ab,10);Dac(this.I,new tac(0,1500,2100));this.g=new Fac;new CMc(this.H.n,this.I);new CMc(this.H.n,this.g);new pPb('./static/textures/sprite0.png',new rtc(this));d=new wMc;uMc(d,this.f);tMc(d,new G5b(16777215));d.c=true;c=new wMc;uMc(c,this.e);tMc(c,new G5b(16777215));c.c=true;this.d=new cRb;for(a=0;a<200;a++){f=$lb()-0.5;g=$lb()-0.5;i=$lb()-0.5;if(i<0){b=sMc(c)}else{b=sMc(d);B5b(b.b,0.5*$lb(),0.75,0.5);n8b(b.d.B,-0.5,-0.5);n8b(b.d.C,2,2)}e=new mMc(b);W8b(e.ab,f,g,i);e.ab.of();e.ab.mf(500);LQb(this.d,e)}LQb(this.I,this.d);VGb(this.H.n,false)};_.pb=function ptc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.d.R.c;b<e;b++){i=bw(Brb(this.d.R,b),358);f=bw(i.v,359);g=amb(j+i.ab.d*0.01)*0.3+1;d=1;c=1;if(!!f.d&&!!f.d.q&&((f.d.q.offsetWidth||0)|0)>0){d=(f.d.q.offsetWidth||0)|0;c=(f.d.q.offsetHeight||0)|0}vMc(f,f.e+0.1*(b/e));W8b(i.fb,g*d,g*c,1);f.d==this.f||M_b(f,amb(j+i.ab.d*0.01)*0.4+0.6)}U5b(this.d.db,j*0.5);V5b(this.d.db,j*0.75);W5b(this.d.db,j);$Hb(this.H.n,true);qIb(this.H.n,this.I,this.b,null,false);tzb(this.H.n.$,(iCb(),gCb).b);qIb(this.H.n,this.g,this.c,null,false)};kW(1244,1,{},rtc);_._d=function stc(a){var b,c,d;c=new wMc;c.d=a;d=(c.d.q.offsetWidth||0)|0;b=(c.d.q.offsetHeight||0)|0;this.b.n=new mMc(c);W8b(this.b.n.fb,d,b,1);LQb(this.b.g,this.b.n);this.b.o=new mMc(c);W8b(this.b.o.fb,d,b,1);LQb(this.b.g,this.b.o);this.b.i=new mMc(c);W8b(this.b.i.fb,d,b,1);LQb(this.b.g,this.b.i);this.b.j=new mMc(c);W8b(this.b.j.fb,d,b,1);LQb(this.b.g,this.b.j);this.b.k=new mMc(c);W8b(this.b.k.fb,d,b,1);LQb(this.b.g,this.b.k);ltc(this.b)};kW(1472,849,{149:1,249:1,250:1,358:1},mMc);_.ae=function nMc(){var a;return a=new mMc(bw(this.v,359)),MQb(this,a,true),a};_.cT=function oMc(a){return jMc(this,bw(a,358))};_.ie=function pMc(a,b){var c,d,e;e=new a9b;X8b(e,this.Y);c=K7b(a.d,e);if(c>this.fb.d){return}d=new UUb;d.b=c;d.e=this.ab;d.d=this;b.Mc(d)};_.je=function qMc(a,b,c){};_.b=0;var hMc;kW(1473,932,{271:1,287:1,359:1},wMc);_.Ze=function xMc(){return sMc(this)};_.$e=function yMc(){return null};_.ze=function zMc(){return this.b};_.Ae=function AMc(a){tMc(this,a)};_.c=false;_.e=0;kW(1474,718,rOc,CMc);_.Pd=function DMc(){return 2};_.Qd=function EMc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.d||this.d.c==0)&&(this.d=NQb(this.w,rT)),this.d);o=s.c;if(o==0)return;i=this.v.$;t=this.e.j;e=this.e.c;EAb(i,this.e.i);Ozb(i,bw(e.b[gRc],157).b);Ozb(i,bw(e.b[FWc],157).b);Hzb(i,(iDb(),aDb).b);Nzb(i,_Cb.b);fzb(i,(UBb(),SBb),this.j);IAb(i,bw(e.b[gRc],157).b,2,(CCb(),wCb),16,0);IAb(i,bw(e.b[FWc],157).b,2,wCb,16,8);fzb(i,TBb,this.b);DAb(i,bw(t.b[GWc],226).c,false,a.q.b);bzb(i,(IGb(),cGb).b);uAb(i,bw(t.b[HWc],226).c,0);p=0;q=0;f=this.w.b;if(f){yAb(i,bw(t.b[jVc],226).c,f.d.d,f.d.c,f.d.b);if(ew(f,311)){sAb(i,bw(t.b[IWc],226).c,bw(f,311).c);sAb(i,bw(t.b[JWc],226).c,bw(f,311).b);uAb(i,bw(t.b[KWc],226).c,1);p=1;q=1}else if(ew(f,312)){sAb(i,bw(t.b[iVc],226).c,bw(f,312).b);uAb(i,bw(t.b[KWc],226).c,2);p=2;q=2}}else{uAb(i,bw(t.b[KWc],226).c,0);p=0;q=0}for(j=0;j<o;j++){r=(rhb(j,s.c),bw(s.b[j],358));if(!r.hb)continue;U6b(r.P,a.p,r.Y);kMc(r,-r.P.b[14])}qsb(s);for(k=0;k<o;k++){r=(rhb(k,s.c),bw(s.b[k],358));n=bw(r.v,359);if(!r.hb)continue;sAb(i,bw(t.b[LWc],226).c,n.O);DAb(i,bw(t.b[MWc],226).c,false,r.P.b);G6b(r.Y,this.f,this.g,this.i);g=0;!!this.w.b&&n.c&&(g=q);if(p!=g){uAb(i,bw(t.b[KWc],226).c,g);p=g}if(!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0){vAb(i,bw(t.b[NWc],226).c,n.d.B.d,n.d.B.e);vAb(i,bw(t.b[kVc],226).c,n.d.C.d,n.d.C.e)}else{vAb(i,bw(t.b[NWc],226).c,0,0);vAb(i,bw(t.b[kVc],226).c,1,1)}sAb(i,bw(t.b[KUc],226).c,n.ab);yAb(i,bw(t.b[$Sc],226).c,n.b.d,n.b.c,n.b.b);sAb(i,bw(t.b[OWc],226).c,n.e);wAb(i,bw(t.b[UVc],226).c,Tv(AT,dOc,-1,[this.i.d,this.i.e]));yIb(this.v,n.S);DIb(this.v,n.U);EIb(this.v,n.V);!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0&&NIb(this.v,n.d,0);Mzb(i,(eBb(),bBb),6,(WCb(),VCb),0)}Nzb(i,aDb.b);xIb(this.v)};kW(1475,742,wOc,GMc);_.Sd=function HMc(){PJb(this,NWc,new pOb((IOb(),COb),new t8b(0,0)));PJb(this,kVc,new pOb(COb,new t8b(1,1)));PJb(this,OWc,new pOb(uOb,new Tkb(1)));PJb(this,UVc,new pOb(COb,new t8b(1,1)));PJb(this,$Sc,new pOb(tOb,new G5b(16777215)));PJb(this,HWc,new oOb(AOb));PJb(this,KUc,new pOb(uOb,new Tkb(1)));PJb(this,KWc,new pOb(xOb,zlb(0)));PJb(this,iVc,new pOb(uOb,new Tkb(2.5E-4)));PJb(this,IWc,new pOb(uOb,new Tkb(1)));PJb(this,JWc,new pOb(uOb,new Tkb(2000)));PJb(this,jVc,new pOb(tOb,new G5b(16777215)));PJb(this,LWc,new pOb(uOb,zlb(0)))};var IMc;kW(1476,1,{},NMc);_.Vd=function OMc(){return WMc(),LMc};_.Wd=function PMc(){return XMc(),MMc};var LMc,MMc;kW(1477,1,{},RMc);_.uc=function SMc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};kW(1478,1,{},UMc);_.uc=function VMc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var _P=Hkb(QTc,'EffectsSprites$DemoScene',1243),$P=Hkb(QTc,'EffectsSprites$DemoScene$1',1244),rT=Hkb(PWc,'Sprite',1472),pT=Hkb(PWc,'SpriteMaterial',1473),qT=Hkb(PWc,'SpritePlugin',1474),vT=Hkb(QWc,'SpriteShader',1475),uT=Hkb(QWc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1476),sT=Hkb(QWc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1477),tT=Hkb(QWc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1478);YOc(Pj)(42);