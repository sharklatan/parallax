function lMc(){}
function pMc(){}
function sMc(){}
function KLc(a,b){a.a=b}
function TLc(a,b){a.a=b}
function ULc(a,b){a.c=b}
function VLc(a,b){a.d=b}
function Rsc(a){this.a=a}
function LLc(a,b){aUb.call(this,a,b)}
function MLc(a){ILc();LLc.call(this,HLc,a)}
function eMc(){zJb.call(this,(hMc(),gMc))}
function hMc(){hMc=wMc;gMc=new lMc}
function uMc(){uMc=wMc;jMc=new pMc}
function vMc(){vMc=wMc;kMc=new sMc}
function Wzb(c,a,b){c.uniform2fv(a,b)}
function nAb(a){return new $wnd.Float32Array(a)}
function qAb(a){return new $wnd.Uint16Array(a)}
function JLc(a,b){return a.a!=b.a?Gv(b.a-a.a):b.R-a.R}
function SLc(a){var b;b=new WLc;Z$b(a,b);R4b(b.a,a.a);b.c=a.c;b.d=a.d;b.b=a.b;return b}
function WLc(){p_b.call(this);this.d=0;this.b=false;TLc(this,new e5b(16777215))}
function Msc(){zbc.call(this);this.d=new OOb('./static/textures/sprite1.png');this.e=new OOb('./static/textures/sprite2.png')}
function Lsc(a){var b,c,d,e,f;f=~~(a.G.k.hb/2);b=~~(a.G.k.gb/2);e=yv(a.k.u,359);d=~~(((e.c.p.offsetWidth||0)|0)/2);c=~~(((e.c.p.offsetHeight||0)|0)/2);u8b(a.k._,-f+d,b-c,1);u8b(a.n._,f-d,b-c,1);u8b(a.g._,-f+d,-b+c,1);u8b(a.i._,f-d,-b+c,1);u8b(a.j._,0,0,1)}
function ILc(){ILc=wMc;var a,b,c;iQb();new WLc;HLc=new JRb;a=qAb(ov(US,GMc,-1,[0,1,2,0,2,3]));c=nAb(ov(TS,BNc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=nAb(ov(TS,BNc,-1,[0,0,1,0,1,1,0,1]));DRb(HLc,JTc,new ARb(a,1));DRb(HLc,vQc,new ARb(c,3));DRb(HLc,VVc,new ARb(b,2))}
function aMc(a,b){var c;xGb.call(this,a,b);this.e=new A8b;this.f=new W6b;this.g=new A8b;c=this.u.Z;this.j=nAb(ov(TS,BNc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.b=qAb(ov(US,GMc,-1,[0,1,2,0,2,3]));this.i=c.createBuffer();this.a=c.createBuffer();Fyb(c,(sBb(),qBb),this.i);Syb(c,qBb,this.j,(ABb(),yBb));Fyb(c,rBb,this.a);Syb(c,rBb,this.b,yBb);this.d=new eMc;pJb(this.d,c,false,0,0)}
var _Vc='alphaTest',$Vc='fogType',dWc='thothbot.parallax.plugins.sprite.',eWc='thothbot.parallax.plugins.sprite.shaders.',bWc='uvOffset';DV(1242,1,gOc);_.Mb=function Jsc(){_ac(this.b,new Msc(this.a))};DV(1243,990,dOc,Msc);_.Gd=function Nsc(a){Lsc(this)};_.nb=function Osc(){var a,b,c,d,e,f,g,i;mu((nyb(),myb),(xyb(),wyb),this);this.a=new nRb(60,sGb(this.G.k),1,2100);w8b(this.a._,1500);this.b=new $Qb(this.G.k.hb,this.G.k.gb,1,10);w8b(this.b._,10);bac(this.H,new T9b(0,1500,2100));this.f=new dac;new aMc(this.G.k,this.H);new aMc(this.G.k,this.f);new POb('./static/textures/sprite0.png',new Rsc(this));d=new WLc;ULc(d,this.e);TLc(d,new e5b(16777215));d.b=true;c=new WLc;ULc(c,this.d);TLc(c,new e5b(16777215));c.b=true;this.c=new CQb;for(a=0;a<200;a++){f=zlb()-0.5;g=zlb()-0.5;i=zlb()-0.5;if(i<0){b=SLc(c)}else{b=SLc(d);_4b(b.a,0.5*zlb(),0.75,0.5);N7b(b.c.A,-0.5,-0.5);N7b(b.c.B,2,2)}e=new MLc(b);u8b(e._,f,g,i);e._.gf();e._.ef(500);jQb(this.c,e)}jQb(this.H,this.c);tGb(this.G.k,false)};_.ob=function Psc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.c.Q.b;b<e;b++){i=yv(_qb(this.c.Q,b),358);f=yv(i.u,359);g=Blb(j+i._.c*0.01)*0.3+1;d=1;c=1;if(!!f.c&&!!f.c.p&&((f.c.p.offsetWidth||0)|0)>0){d=(f.c.p.offsetWidth||0)|0;c=(f.c.p.offsetHeight||0)|0}VLc(f,f.d+0.1*(b/e));u8b(i.eb,g*d,g*c,1);f.c==this.e||k_b(f,Blb(j+i._.c*0.01)*0.4+0.6)}s5b(this.c.cb,j*0.5);t5b(this.c.cb,j*0.75);u5b(this.c.cb,j);yHb(this.G.k,true);QHb(this.G.k,this.H,this.a,null,false);Tyb(this.G.k.Z,(IBb(),GBb).a);QHb(this.G.k,this.f,this.b,null,false)};DV(1244,1,{},Rsc);_.Ud=function Ssc(a){var b,c,d;c=new WLc;c.c=a;d=(c.c.p.offsetWidth||0)|0;b=(c.c.p.offsetHeight||0)|0;this.a.k=new MLc(c);u8b(this.a.k.eb,d,b,1);jQb(this.a.f,this.a.k);this.a.n=new MLc(c);u8b(this.a.n.eb,d,b,1);jQb(this.a.f,this.a.n);this.a.g=new MLc(c);u8b(this.a.g.eb,d,b,1);jQb(this.a.f,this.a.g);this.a.i=new MLc(c);u8b(this.a.i.eb,d,b,1);jQb(this.a.f,this.a.i);this.a.j=new MLc(c);u8b(this.a.j.eb,d,b,1);jQb(this.a.f,this.a.j);Lsc(this.a)};DV(1472,849,{149:1,249:1,250:1,358:1},MLc);_.Vd=function NLc(){var a;return a=new MLc(yv(this.u,359)),kQb(this,a,true),a};_.cT=function OLc(a){return JLc(this,yv(a,358))};_.be=function PLc(a,b){var c,d,e;e=new A8b;v8b(e,this.X);c=i7b(a.c,e);if(c>this.eb.c){return}d=new sUb;d.a=c;d.d=this._;d.c=this;b.Fc(d)};_.ce=function QLc(a,b,c){};_.a=0;var HLc;DV(1473,932,{271:1,287:1,359:1},WLc);_.Se=function XLc(){return SLc(this)};_.Te=function YLc(){return null};_.se=function ZLc(){return this.a};_.te=function $Lc(a){TLc(this,a)};_.b=false;_.d=0;DV(1474,718,PNc,aMc);_.Id=function bMc(){return 2};_.Jd=function cMc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.c||this.c.b==0)&&(this.c=lQb(this.v,KS)),this.c);o=s.b;if(o==0)return;i=this.u.Z;t=this.d.i;e=this.d.b;cAb(i,this.d.g);mzb(i,yv(e.a[vQc],157).a);mzb(i,yv(e.a[VVc],157).a);fzb(i,(ICb(),ACb).a);lzb(i,zCb.a);Fyb(i,(sBb(),qBb),this.i);gAb(i,yv(e.a[vQc],157).a,2,(aCb(),WBb),16,0);gAb(i,yv(e.a[VVc],157).a,2,WBb,16,8);Fyb(i,rBb,this.a);bAb(i,yv(t.a[WVc],226).b,false,a.p.a);Byb(i,(gGb(),CFb).a);Uzb(i,yv(t.a[XVc],226).b,0);p=0;q=0;f=this.v.a;if(f){Yzb(i,yv(t.a[zUc],226).b,f.c.c,f.c.b,f.c.a);if(Bv(f,311)){Szb(i,yv(t.a[YVc],226).b,yv(f,311).b);Szb(i,yv(t.a[ZVc],226).b,yv(f,311).a);Uzb(i,yv(t.a[$Vc],226).b,1);p=1;q=1}else if(Bv(f,312)){Szb(i,yv(t.a[yUc],226).b,yv(f,312).a);Uzb(i,yv(t.a[$Vc],226).b,2);p=2;q=2}}else{Uzb(i,yv(t.a[$Vc],226).b,0);p=0;q=0}for(j=0;j<o;j++){r=(Sgb(j,s.b),yv(s.a[j],358));if(!r.gb)continue;s6b(r.O,a.o,r.X);KLc(r,-r.O.a[14])}Qrb(s);for(k=0;k<o;k++){r=(Sgb(k,s.b),yv(s.a[k],358));n=yv(r.u,359);if(!r.gb)continue;Szb(i,yv(t.a[_Vc],226).b,n.N);bAb(i,yv(t.a[aWc],226).b,false,r.O.a);e6b(r.X,this.e,this.f,this.g);g=0;!!this.v.a&&n.b&&(g=q);if(p!=g){Uzb(i,yv(t.a[$Vc],226).b,g);p=g}if(!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0){Vzb(i,yv(t.a[bWc],226).b,n.c.A.c,n.c.A.d);Vzb(i,yv(t.a[AUc],226).b,n.c.B.c,n.c.B.d)}else{Vzb(i,yv(t.a[bWc],226).b,0,0);Vzb(i,yv(t.a[AUc],226).b,1,1)}Szb(i,yv(t.a[$Tc],226).b,n._);Yzb(i,yv(t.a[oSc],226).b,n.a.c,n.a.b,n.a.a);Szb(i,yv(t.a[cWc],226).b,n.d);Wzb(i,yv(t.a[iVc],226).b,ov(TS,BNc,-1,[this.g.c,this.g.d]));YHb(this.u,n.R);bIb(this.u,n.T);cIb(this.u,n.U);!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0&&lIb(this.u,n.c,0);kzb(i,(EAb(),BAb),6,(uCb(),tCb),0)}lzb(i,ACb.a);XHb(this.u)};DV(1475,742,UNc,eMc);_.Ld=function fMc(){nJb(this,bWc,new PNb((gOb(),aOb),new T7b(0,0)));nJb(this,AUc,new PNb(aOb,new T7b(1,1)));nJb(this,cWc,new PNb(UNb,new skb(1)));nJb(this,iVc,new PNb(aOb,new T7b(1,1)));nJb(this,oSc,new PNb(TNb,new e5b(16777215)));nJb(this,XVc,new ONb($Nb));nJb(this,$Tc,new PNb(UNb,new skb(1)));nJb(this,$Vc,new PNb(XNb,$kb(0)));nJb(this,yUc,new PNb(UNb,new skb(2.5E-4)));nJb(this,YVc,new PNb(UNb,new skb(1)));nJb(this,ZVc,new PNb(UNb,new skb(2000)));nJb(this,zUc,new PNb(TNb,new e5b(16777215)));nJb(this,_Vc,new PNb(UNb,$kb(0)))};var gMc;DV(1476,1,{},lMc);_.Od=function mMc(){return uMc(),jMc};_.Pd=function nMc(){return vMc(),kMc};var jMc,kMc;DV(1477,1,{},pMc);_.nc=function qMc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};DV(1478,1,{},sMc);_.nc=function tMc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var sP=gkb(eTc,'EffectsSprites$DemoScene',1243),rP=gkb(eTc,'EffectsSprites$DemoScene$1',1244),KS=gkb(dWc,'Sprite',1472),IS=gkb(dWc,'SpriteMaterial',1473),JS=gkb(dWc,'SpritePlugin',1474),OS=gkb(eWc,'SpriteShader',1475),NS=gkb(eWc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1476),LS=gkb(eWc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1477),MS=gkb(eWc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1478);uOc(Ej)(42);