function Ktb(){}
function Tvc(){}
function bwc(){}
function fwc(){}
function iwc(){}
function twc(){}
function xwc(){}
function Awc(){}
function Hvc(a,b){a.c=b}
function Kvc(a){this.a=a}
function dlc(a){this.a=a}
function Wvc(a){zFb.call(this,a)}
function Vvc(){Wvc.call(this,(Zvc(),Yvc))}
function nwc(){Wvc.call(this,(pwc(),owc))}
function Zvc(){Zvc=_yc;Yvc=new bwc}
function kwc(){kwc=_yc;_vc=new fwc}
function lwc(){lwc=_yc;awc=new iwc}
function pwc(){pwc=_yc;owc=new twc}
function Cwc(){Cwc=_yc;rwc=new xwc}
function Dwc(){Dwc=_yc;swc=new Awc}
function Avb(a,b,c,d,e){zvb(a,b.a,0,c.a,d,e,16,16,0)}
function zvb(j,a,b,c,d,e,f,g,i){j.copyTexImage2D(a,b,c,d,e,f,g,i)}
function Btb(a){v1b(a.i,-a.d.e+(a.d.f?1:0));w1b(a.i,-(a.d.o?1:0)+a.d.n);h2b(a.i,-(a.d.j?1:0)+(a.d.i?1:0))}
function Atb(a){var b;b=a.d.c||a.a&&!a.d.a?1:0;v1b(a.e,-(a.d.d?1:0)+(a.d.g?1:0));w1b(a.e,-(a.d.b?1:0)+(a.d.k?1:0));h2b(a.e,-b+(a.d.a?1:0))}
function Nvc(a,b,c,d,e,f){this.i=a;this.g=b.a;this.c=c;this.k=0;this.n=0;this.o=0;this.f=1;this.e=1;this.d=d;this.b=e;this.a=f}
function Ivc(a,b,c,d){NLb();dMb.call(this);this.b=new k2b;this.a=new Qnb;Hvc(this,new Kvc(this));!!a&&Gvc(this,a,b,new chb(0),c,d,null)}
function L0b(a){var b;b=mib(a.c*a.c+a.d*a.d+a.e*a.e+a.b*a.b);if(b==0){a.c=0;a.d=0;a.e=0;a.b=1}else{b=1/b;a.c=a.c*b;a.d=a.d*b;a.e=a.e*b;a.b=a.b*b}!!a.a&&yPb(a.a,a);return a}
function ztb(a,b){var c,d;c=b*a.f;d=b*a.g;$Lb(a.C,a.e.c*c);_Lb(a.C,a.e.d*c);aMb(a.C,a.e.b*c);L0b(M0b(a.j,a.i.c*d,a.i.d*d,a.i.b*d,1));J0b(a.C.ab,a.j);B_b(a.C.cb,a.C.ab,a.C.cb.b)}
function J0b(a,b){var c,d,e,f,g,i,j,k;return c=a.c,d=a.d,e=a.e,f=a.b,g=b.c,i=b.d,j=b.e,k=b.b,a.c=c*k+f*g+d*j-e*i,a.d=d*k+f*i+e*g-c*j,a.e=e*k+f*j+c*i-d*g,a.b=f*k-c*g-d*i-e*j,!!a.a&&yPb(a.a,a),a}
function _kc(){o5b.call(this);this.d=new tKb('./static/textures/lensflare/lensflare0.png');this.e=new tKb('./static/textures/lensflare/lensflare2.png');this.f=new tKb('./static/textures/lensflare/lensflare3.png')}
function Gvc(a,b,c,d,e,f,g){CLb();hU(BLb,(wrb(),prb),'LensFlare: add new LensSprite');!c&&(c=Khb(-1));!d&&(d=new chb(0));!g&&(g=new chb(1));!f&&(f=new r_b(16777215));!e&&(e=(qWb(),oWb));d=new chb(gib(d.a,eib(0,d.a)));Gnb(a.a,new Nvc(b,c,d.a,g.a,f,e))}
function Ctb(a,b){otb.call(this,a,b);DE!=YA&&Rk(xW(this.D),xHc,yHc);this.k=Kk((Z$(),b.F),zHc)/2;this.n=Kk(b.F,AHc)/2;this.j=new R0b;this.c=0;this.d=new Ktb;this.e=new l2b(0,0,0);this.i=new l2b(0,0,0);RW(this.D,this,(pq(),pq(),oq));RW(this.D,this,(ir(),ir(),hr));RW(this.D,this,(cr(),cr(),br));RW(this.D,this,(or(),or(),nr));RW((Y4(),a5(null)),this,(Lq(),Lq(),Kq));RW(a5(null),this,(Rq(),Rq(),Qq))}
function $kc(a,b,c,d,e,f){var g,i,j;j=new gVb(16777215,1.5,4500);n_b(j.L,b,c,d);f2b(j._,e,f,-1000);OLb(a.F,j);g=new r_b(16777215);n_b(g,b,c,d+0.5);i=new Ivc(a.d,Khb(700),(qWb(),jWb),g);Gvc(i,a.e,Khb(512),new chb(0),jWb,null,null);Gvc(i,a.e,Khb(512),new chb(0),jWb,null,null);Gvc(i,a.e,Khb(512),new chb(0),jWb,null,null);Gvc(i,a.f,Khb(60),new chb(0.6),jWb,null,null);Gvc(i,a.f,Khb(70),new chb(0.7),jWb,null,null);Gvc(i,a.f,Khb(120),new chb(0.9),jWb,null,null);Gvc(i,a.f,Khb(70),new chb(1),jWb,null,null);Hvc(i,new dlc(i));WLb(i,j._);OLb(a.F,i)}
function Pvc(a,b){var c,d,e;NCb.call(this,a,b);this.a=new Tvc;d=this.p.ab;this.a.j=Lwb(16);this.a.c=Nwb(6);e=0;Jwb(this.a.j,e++,-1);Jwb(this.a.j,e++,-1);Jwb(this.a.j,e++,0);Jwb(this.a.j,e++,0);Jwb(this.a.j,e++,1);Jwb(this.a.j,e++,-1);Jwb(this.a.j,e++,1);Jwb(this.a.j,e++,0);Jwb(this.a.j,e++,1);Jwb(this.a.j,e++,1);Jwb(this.a.j,e++,1);Jwb(this.a.j,e++,1);Jwb(this.a.j,e++,-1);Jwb(this.a.j,e++,1);Jwb(this.a.j,e++,0);Jwb(this.a.j,e++,1);e=0;Mwb(this.a.c,e++,0);Mwb(this.a.c,e++,1);Mwb(this.a.c,e++,2);Mwb(this.a.c,e++,0);Mwb(this.a.c,e++,2);Mwb(this.a.c,e++,3);this.a.i=d.createBuffer();this.a.b=d.createBuffer();hvb(d,(Nxb(),Lxb),this.a.i);uvb(d,Lxb,this.a.j,(Vxb(),Txb));hvb(d,Mxb,this.a.b);uvb(d,Mxb,this.a.c,Txb);this.a.g=d.createTexture();this.a.e=d.createTexture();lvb(d,(RBb(),IBb),this.a.g);jwb(d,IBb,16,16,(Czb(),Azb),(Uzb(),Qzb),null);qwb(d,IBb,(BBb(),zBb),33071);qwb(d,IBb,ABb,33071);qwb(d,IBb,wBb,9728);qwb(d,IBb,yBb,9728);lvb(d,IBb,this.a.e);jwb(d,IBb,16,16,Bzb,Qzb,null);qwb(d,IBb,zBb,33071);qwb(d,IBb,ABb,33071);qwb(d,IBb,wBb,9728);qwb(d,IBb,yBb,9728);if(d.getParameter(35660)<=0){this.a.d=false;this.a.f=new Vvc}else{this.a.d=true;this.a.f=new nwc}c=new pOb;lOb(c,QCc,new REb((gFb(),eFb),null));lOb(c,BHc,new REb(eFb,null));sFb(this.a.f,c);pFb(this.a.f,d,false,0,0)}
var CHc='occlusionMap',EHc='renderType',IHc='thothbot.parallax.plugins.lensflare.',KHc='thothbot.parallax.plugins.lensflare.shaders.';_R(640,638,lAc,Ctb);_.Lb=function Dtb(a){ul(a.a)};_.Mb=function Etb(a){if(a.a.altKey)return;switch(fl(a.a)){case 87:this.d.c=true;break;case 83:this.d.a=true;break;case 65:this.d.d=true;break;case 68:this.d.g=true;break;case 82:this.d.k=true;break;case 70:this.d.b=true;break;case 38:this.d.f=true;break;case 40:this.d.e=1;break;case 37:this.d.n=1;break;case 39:this.d.o=true;break;case 81:this.d.i=true;break;case 69:this.d.j=true;}Atb(this);Btb(this)};_.Nb=function Ftb(a){switch(fl(a.a)){case 87:this.d.c=false;break;case 83:this.d.a=false;break;case 65:this.d.d=false;break;case 68:this.d.g=false;break;case 82:this.d.k=false;break;case 70:this.d.b=false;break;case 38:this.d.f=false;break;case 40:this.d.e=0;break;case 37:this.d.n=0;break;case 39:this.d.o=false;break;case 81:this.d.i=false;break;case 69:this.d.j=false;}Atb(this);Btb(this)};_.Ob=function Gtb(a){ul(a.a);vl(a.a);if(this.b){++this.c}else{switch(el(a.a)){case 1:this.d.c=true;break;case 2:this.d.c=false;}}};_.Pb=function Htb(a){if(!this.b||this.c>0){this.d.n=-(gq(a)-this.k)/this.k;this.d.e=(hq(a)-this.n)/this.n;Btb(this)}};_.Qb=function Itb(a){ul(a.a);vl(a.a);if(this.b){--this.c;this.d.n=this.d.e=0}else{switch(el(a.a)){case 1:this.d.c=false;break;case 2:this.d.c=false;}}Btb(this)};_.a=false;_.b=false;_.c=0;_.f=1;_.g=0.005;_.k=0;_.n=0;_R(641,1,{},Ktb);_.a=false;_.b=false;_.c=false;_.d=false;_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.n=0;_.o=false;_R(1162,1,FAc);_.yb=function Ykc(){l5b(this.b,new _kc(this.a))};_R(1163,943,{},_kc);_.mb=function alc(){var a,b,c,d,e,f,g;this.a=new NMb(40,LDb(this.D.n),1,15000);h2b(this.a._,250);new Pvc(this.D.n,this.F);this.b=new Ctb(this.a,this.D.b);this.b.f=2500;this.b.g=0.5235987755982988;this.b.a=false;this.b.b=false;d=new g4b(0,3500,15000);n_b(d.c,0.51,0.4,0.01);q4b(this.F,d);b=new qSb(250,250,250);f=new AZb;rZb(f,new r_b(16777215));oZb(f,new r_b(3355443));xZb(f,new r_b(16777215));f.F=50;for(e=0;e<3000;e++){g=new I3b(b,f);v1b(g._,8000*(2*jib()-1));w1b(g._,8000*(2*jib()-1));h2b(g._,8000*(2*jib()-1));E_b(g.cb,jib()*3.141592653589793);F_b(g.cb,jib()*3.141592653589793);G_b(g.cb,jib()*3.141592653589793);g.W=false;c0b(g.V,g._,g.ab,g.eb);g.Y=true;OLb(this.F,g)}a=new nUb(16777215);n_b(a.L,0.1,0.3,0.2);OLb(this.F,a);c=new QUb(16777215,0.125);f2b(c._,0,-1,0).mf();OLb(this.F,c);n_b(c.L,0.1,0.7,0.5);$kc(this,0.55,0.9,0.5,5000,0);$kc(this,0.08,0.8,0.5,0,0);$kc(this,0.995,0.5,0.9,5000,5000);gEb(this.D.n,this.F.b.c,1);this.D.n.$=true;this.D.n._=true;this.c=rh()};_.nb=function blc(a){ztb(this.b,(rh()-this.c)*0.001);this.c=rh();XDb(this.D.n,this.F,this.a,null,false)};_.c=0;_R(1164,1,{},dlc);_.wf=function elc(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;a++){b=Bu(Jnb(this.a.a,a),288);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.e=0}Bu(Jnb(this.a.a,2),288).n+=0.025;Bu(Jnb(this.a.a,3),288).e=this.a.b.c*0.5+0.7853981633974483};_R(1282,793,{196:1,287:1},Ivc);_R(1283,1,{},Kvc);_.wf=function Lvc(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;a++){b=Bu(Jnb(this.a.a,a),288);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.j=b.k*3.141592653589793*0.25;b.e+=(b.j-b.e)*0.25}};_R(1284,1,{288:1},Nvc);_.c=0;_.d=0;_.e=0;_.f=0;_.g=0;_.j=0;_.k=0;_.n=0;_.o=0;_R(1285,697,mAc,Pvc);_.Gd=function Qvc(){return SCb(),QCb};_.Hd=function Rvc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B;g=(!this.b&&(this.b=QLb(this.q,DO)),this.b);r=g.b;if(r==0)return;i=this.p.ab;A=new k2b;o=d/c;k=c*0.5;j=d*0.5;v=16/d;s=new y1b(v*o,v);t=new l2b(1,1,0);u=new y1b(1,1);B=this.a.f.i;e=this.a.f.b;Dwb(i,this.a.f.g);if(!this.a.a){Nvb(i,Bu(e.a[QCc],105).a);Nvb(i,Bu(e.a[BHc],105).a);this.a.a=true}twb(i,Bu(B.a[CHc],174).b,0);twb(i,Bu(B.a[DHc],174).b,1);hvb(i,(Nxb(),Lxb),this.a.i);Hwb(i,Bu(e.a[QCc],105).a,2,(vyb(),pyb),16,0);Hwb(i,Bu(e.a[BHc],105).a,2,pyb,16,8);hvb(i,Mxb,this.a.b);Gvb(i,(bzb(),Vyb).a);Fvb(i,false);for(n=0;n<r;n++){v=16/d;u1b(s,v*o,v);f=(Fdb(n,g.b),Bu(g.a[n],287));f2b(A,f.X.a[12],f.X.a[13],f.X.a[14]);V1b(A,a.o);X1b(A,a.p);t.gf(A);v1b(u,t.c*k+k);w1b(u,t.d*j+j);if(this.a.d||u.c>0&&u.c<c&&u.d>0&&u.d<d){dvb(i,(BCb(),YBb).a);lvb(i,(RBb(),IBb),this.a.g);Avb(i,IBb,(Czb(),Azb),Ju(u.c)-8,Ju(u.d)-8);twb(i,Bu(B.a[EHc],174).b,0);uwb(i,Bu(B.a[FHc],174).b,s.c,s.d);xwb(i,Bu(B.a[GHc],174).b,t.c,t.d,t.b);Gvb(i,Uyb.a);Mvb(i,Wyb.a);Lvb(i,(Zwb(),Wwb),6,(Pyb(),Oyb),0);dvb(i,XBb.a);lvb(i,IBb,this.a.e);Avb(i,IBb,Bzb,Ju(u.c)-8,Ju(u.d)-8);twb(i,Bu(B.a[EHc],174).b,1);Gvb(i,Wyb.a);dvb(i,YBb.a);lvb(i,IBb,this.a.g);Lvb(i,Wwb,6,Oyb,0);f.b.gf(t);f.c.wf();twb(i,Bu(B.a[EHc],174).b,2);Mvb(i,Uyb.a);for(p=0,q=f.a.b;p<q;p++){w=Bu(Jnb(f.a,p),288);if(w.d>0.001&&w.f>0.001){v1b(t,w.k);w1b(t,w.n);h2b(t,w.o);v=w.g*w.f/d;s.c=v*o;s.d=v;xwb(i,Bu(B.a[GHc],174).b,t.c,t.d,t.b);uwb(i,Bu(B.a[FHc],174).b,s.c,s.d);rwb(i,Bu(B.a[HHc],174).b,w.e);rwb(i,Bu(B.a[xGc],174).b,w.d);xwb(i,Bu(B.a[OEc],174).b,w.b.c,w.b.b,w.b.a);dEb(this.p,w.a);tEb(this.p,w.i,1);Lvb(i,Wwb,6,Oyb,0)}}}}Mvb(i,Vyb.a);Mvb(i,Wyb.a);Fvb(i,true);cEb(this.p)};_R(1286,1,{},Tvc);_.a=false;_.d=false;_R(1287,716,rAc,Vvc);_.Jd=function Xvc(){nFb(this,EHc,new uJb((NJb(),CJb),Khb(1)));nFb(this,DHc,new tJb(FJb));nFb(this,CHc,new tJb(FJb));nFb(this,xGc,new uJb(zJb,new chb(1)));nFb(this,OEc,new uJb(yJb,new r_b(16777215)));nFb(this,FHc,new uJb(HJb,new y1b(1,1)));nFb(this,HHc,new uJb(zJb,new chb(1)));nFb(this,GHc,new uJb(JJb,new l2b(0,0,0)))};var Yvc;_R(1288,1,{},bwc);_.Md=function cwc(){return kwc(),_vc};_.Nd=function dwc(){return lwc(),awc};var _vc,awc;_R(1289,1,{},fwc);_.bc=function gwc(){return 'precision mediump float;\r\n\r\nuniform lowp int renderType;\r\n\r\nuniform sampler2D map;\r\nuniform sampler2D occlusionMap;\r\nuniform float opacity;\r\nuniform vec3 color;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\t\t\t\t\t\t// pink square\r\n\r\n\tif( renderType == 0 ) {\r\n\r\n\t\tgl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\r\n\r\n\t\t\t\t\t\t// restore\r\n\r\n\t} else if( renderType == 1 ) {\r\n\r\n\t\tgl_FragColor = texture2D( map, vUV );\r\n\r\n\t\t\t\t\t\t// flare\r\n\r\n\t} else {\r\n\r\n\t\tfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\r\n\t\tvisibility = ( 1.0 - visibility / 4.0 );\r\n\r\n\t\tvec4 texture = texture2D( map, vUV );\r\n\t\ttexture.a *= opacity * visibility;\r\n\t\tgl_FragColor = texture;\r\n\t\tgl_FragColor.rgb *= color;\r\n\r\n\t}\r\n\r\n}\r\n'};_R(1290,1,{},iwc);_.bc=function jwc(){return 'uniform lowp int renderType;\r\n\r\nuniform vec3 screenPosition;\r\nuniform vec2 scale;\r\nuniform float rotation;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uv;\r\n\r\n\tvec2 pos = position;\r\n\r\n\tif( renderType == 2 ) {\r\n\r\n\t\tpos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\r\n\t\tpos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\r\n\r\n\t}\r\n\r\n\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\r\n\r\n}\r\n'};_R(1293,1287,rAc,nwc);var owc;_R(1294,1,{},twc);_.Md=function uwc(){return Cwc(),rwc};_.Nd=function vwc(){return Dwc(),swc};var rwc,swc;_R(1295,1,{},xwc);_.bc=function ywc(){return 'uniform lowp int renderType;\r\n\r\nuniform sampler2D map;\r\nuniform float opacity;\r\nuniform vec3 color;\r\n\r\nvarying vec2 vUV;\r\nvarying float vVisibility;\r\n\r\nvoid main() {\r\n\r\n\t\t\t\t\t\t// pink square\r\n\r\n\tif( renderType == 0 ) {\r\n\r\n\t\tgl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\r\n\r\n\t\t\t\t\t\t// restore\r\n\r\n\t} else if( renderType == 1 ) {\r\n\r\n\t\tgl_FragColor = texture2D( map, vUV );\r\n\r\n\t\t\t\t\t\t// flare\r\n\r\n\t} else {\r\n\r\n\t\tvec4 texture = texture2D( map, vUV );\r\n\t\ttexture.a *= opacity * vVisibility;\r\n\t\tgl_FragColor = texture;\r\n\t\tgl_FragColor.rgb *= color;\r\n\r\n\t}\r\n\r\n}\r\n'};_R(1296,1,{},Awc);_.bc=function Bwc(){return 'uniform lowp int renderType;\r\n\r\nuniform vec3 screenPosition;\r\nuniform vec2 scale;\r\nuniform float rotation;\r\n\r\nuniform sampler2D occlusionMap;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\nvarying float vVisibility;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uv;\r\n\r\n\tvec2 pos = position;\r\n\r\n\tif( renderType == 2 ) {\r\n\r\n\t\tvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\r\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\r\n\r\n\t\tvVisibility =        visibility.r / 9.0;\r\n\t\tvVisibility *= 1.0 - visibility.g / 9.0;\r\n\t\tvVisibility *=       visibility.b / 9.0;\r\n\t\tvVisibility *= 1.0 - visibility.a / 9.0;\r\n\r\n\t\tpos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\r\n\t\tpos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\r\n\r\n\t}\r\n\r\n\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\r\n\r\n}\r\n'};var lN=Sgb(CFc,'EffectsLensFlares$DemoScene',1163),kN=Sgb(CFc,'EffectsLensFlares$DemoScene$1',1164),DO=Sgb(IHc,'LensFlare',1282),AO=Sgb(IHc,'LensFlare$LensSprite',1284),zO=Sgb(IHc,'LensFlare$1',1283),HE=Sgb(JHc,'FlyControls',640),GE=Sgb(JHc,'FlyControls$MoveState',641),CO=Sgb(IHc,'LensFlarePlugin',1285),BO=Sgb(IHc,'LensFlarePlugin$LensFlareGeometry',1286),HO=Sgb(KHc,'LensFlareShader',1287),LO=Sgb(KHc,'LensFlareVertexTextureShader',1293),GO=Sgb(KHc,'LensFlareShader_Resources_default_InlineClientBundleGenerator',1288),EO=Sgb(KHc,'LensFlareShader_Resources_default_InlineClientBundleGenerator$1',1289),FO=Sgb(KHc,'LensFlareShader_Resources_default_InlineClientBundleGenerator$2',1290),KO=Sgb(KHc,'LensFlareVertexTextureShader_Resources_default_InlineClientBundleGenerator',1294),IO=Sgb(KHc,'LensFlareVertexTextureShader_Resources_default_InlineClientBundleGenerator$1',1295),JO=Sgb(KHc,'LensFlareVertexTextureShader_Resources_default_InlineClientBundleGenerator$2',1296);RAc(xi)(38);