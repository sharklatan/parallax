function qLb(){}
function uLb(){}
function xLb(){}
function mLb(){mLb=yMc;lLb=new qLb}
function zLb(){zLb=yMc;oLb=new uLb}
function ALb(){ALb=yMc;pLb=new xLb}
function jLb(){AJb.call(this,(mLb(),lLb))}
function Qmc(){Abc.call(this);this.c=0;this.d=0}
DV(766,742,WNc,jLb);_.Md=function kLb(){oJb(this,'mRefractionRatio',new QNb((hOb(),VNb),new skb(1.02)));oJb(this,'mFresnelBias',new QNb(VNb,new skb(0.1)));oJb(this,'mFresnelPower',new QNb(VNb,new skb(2)));oJb(this,'mFresnelScale',new QNb(VNb,new skb(1)));oJb(this,lUc,new PNb(_Nb))};var lLb;DV(767,1,{},qLb);_.Pd=function rLb(){return zLb(),oLb};_.Qd=function sLb(){return ALb(),pLb};var oLb,pLb;DV(768,1,{},uLb);_.nc=function vLb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};DV(769,1,{},xLb);_.nc=function yLb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};DV(1157,1,iOc);_.Mb=function Omc(){abc(this.b,new Qmc(this.a))};DV(1158,990,{331:1},Qmc);_.nb=function Rmc(){var a,b,c,d,e,f,g,i,j;this.a=new oRb(60,sGb(this.G.k),1,100000);x8b(this.a._,3200);this.b=new oRb(60,sGb(this.G.k),1,100000);this.e=new eac;a=new OXb(100,32,16);j=new YOb('./static/textures/cube/park2/*.jpg');xOb(j,(hDb(),fDb));g=new jLb;ONb(yv(SSb(g.i,lUc),226),j);c=new k4b(g);this.f=new grb;for(b=0;b<500;b++){e=new qZb(a,c);P7b(e._,zlb()*10000-5000);Q7b(e._,zlb()*10000-5000);x8b(e._,zlb()*10000-5000);u8b(e.eb,zlb()*3+1);kQb(this.H,e);Yqb(this.f,e)}this.H.W=false;i=new aKb;ONb(yv(SSb(i.i,lUc),226),j);f=new k4b(i);n_b(f,(_0b(),Y0b));d=new qZb(new ZWb(100000,100000,100000),f);kQb(this.e,d);tGb(this.G.k,false)};_.ob=function Smc(a){var b,c,d,e;e=1.0E-4*a;J7b(this.a._,(this.c-this.a._.c)*0.05);K7b(this.a._,(-this.d-this.a._.d)*0.05);KQb(this.a,this.H._);n5b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=yv(_qb(this.f,b),308);P7b(d._,5000*Math.cos(e+b));Q7b(d._,5000*Math.sin(e+b*1.1))}zHb(this.G.k,true);RHb(this.G.k,this.e,this.b,null,false);RHb(this.G.k,this.H,this.a,null,false)};_.c=0;_.d=0;var WN=gkb(dTc,'MaterialsCubemapFresnel$DemoScene',1158),qH=gkb(mUc,'FresnelShader',766),pH=gkb(mUc,'FresnelShader_Resources_default_InlineClientBundleGenerator',767),nH=gkb(mUc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',768),oH=gkb(mUc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',769);wOc(Ej)(21);