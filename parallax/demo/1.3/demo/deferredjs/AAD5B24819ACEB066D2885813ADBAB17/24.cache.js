function eGb(){}
function nGb(){}
function kGb(){}
function sGb(){}
function rGb(){}
function wGb(){}
function vGb(){}
function d2b(){}
function wjc(){}
function yjc(){j7b.call(this)}
function fGb(){GEb.call(this,(jGb(),iGb))}
function K$b(){jMb();L$b.call(this,16777215,1,0)}
function jGb(){jGb=KKc;iGb=new nGb}
function zGb(){zGb=KKc;lGb=new sGb}
function AGb(){AGb=KKc;mGb=new wGb}
function e2b(){E_b.call(this);this.b=false;this.c=1}
function xjc(){var a,b,c,d,e,f,g,i;a=$doc.createElement(wPc);a.width=256;a.height=256;b=a.getContext(xPc);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=Uq(Math.floor(g^i))}b.putImageData(d,0,0);return a}
var uPc='mFar',tPc='mNear';_=fGb.prototype=eGb.prototype=new sEb;_.gC=function gGb(){return zA};_.Jd=function hGb(){vEb(this,tPc,new EJb((YJb(),KJb),new _eb(1)));vEb(this,uPc,new EJb(KJb,new _eb(2000)));vEb(this,vPc,new EJb(KJb,new _eb(1)))};_.cM={164:1};var iGb;_=nGb.prototype=kGb.prototype=new Jb;_.gC=function oGb(){return yA};_.Md=function pGb(){return zGb(),lGb};_.Nd=function qGb(){return AGb(),mGb};var lGb=null,mGb=null;_=sGb.prototype=rGb.prototype=new Jb;_.gC=function tGb(){return wA};_.Yb=function uGb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n\r\n}'};_=wGb.prototype=vGb.prototype=new Jb;_.gC=function xGb(){return xA};_.Yb=function yGb(){return 'void main() {\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n'};_=K$b.prototype=I$b.prototype;_=e2b.prototype=d2b.prototype=new j_b;_.qf=function f2b(){return null};_.sf=function g2b(){return new fGb};_.gC=function h2b(){return rD};_.nf=function i2b(){return this.c};_.of=function j2b(){return this.b};_.tf=function k2b(a,b){var c;r_b(this,b);c=q_b(this).j;if(a.gC()==rB){CJb(Mq(c.b[tPc],166),new _eb(Mq(a,177).e));CJb(Mq(c.b[uPc],166),new _eb(Mq(a,177).c))}CJb(Mq(c.b[vPc],166),new _eb(this.S))};_.cM={221:1,224:1};_.b=false;_.c=0;_=rjc.prototype;_.wb=function vjc(){f7b(this.c,new yjc(this.b))};_=yjc.prototype=wjc.prototype=new i7b;_.gC=function zjc(){return mG};_.nb=function Ajc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;this.b=new jNb(45,eDb(this.D.o),1,2000);_Sb(this.b.X,0,200,800);c=new pOb;for(i=0;i<=40;++i){c.y.Ec(new fTb(-500,-75,i*25-500));c.y.Ec(new fTb(500,-75,i*25-500));c.y.Ec(new fTb(i*25-500,-75,-500));c.y.Ec(new fTb(i*25-500,-75,500))}n=new N_b;K_b(n,new FNb(16777215));n.S=0.2;k=new sZb(c,n,(P4b(),N4b));kMb(this.E,k);C=new DKb(xjc());sKb(C,(beb(),beb(),aeb));this.c=new smb;t=new x2b;t.q=C;t.R=true;gmb(this.c,t);u=new x2b;r2b(u,new FNb(14540253));A_b(u,(l1b(),i1b));gmb(this.c,u);y=new r3b;g3b(y,new FNb(197379));j3b(y,new FNb(14540253));o3b(y,new FNb(39168));y.A=30;A_b(y,i1b);gmb(this.c,y);gmb(this.c,new _2b);p=new E1b;z1b(p,new FNb(16755200));p.R=true;v_b(p,(d0b(),Y_b));gmb(this.c,p);v=new x2b;r2b(v,new FNb(14540253));A_b(v,k1b);gmb(this.c,v);A=new r3b;A.u=C;A.R=true;gmb(this.c,A);x=new _2b;A_b(x,k1b);gmb(this.c,x);q=new E1b;z1b(q,new FNb(65450));q.i=true;gmb(this.c,q);gmb(this.c,new e2b);w=new x2b;r2b(w,new FNb(6710886));t2b(w,new FNb(16711680));q2b(w,new FNb(0));A_b(w,k1b);gmb(this.c,w);z=new r3b;g3b(z,new FNb(0));l3b(z,new FNb(16776960));j3b(z,new FNb(0));o3b(z,new FNb(6710886));z.A=10;A_b(z,k1b);z.S=0.9;z.R=true;gmb(this.c,z);r=new E1b;q.k=C;q.R=true;gmb(this.c,r);g=new fYb(70,32,16);e=new fYb(70,32,16);f=new fYb(70,32,16);for(i=0,j=f.n.Pc();i<j;++i){b=Mq(f.n.Hc(i),179);Math.random()>0.7?XOb(b,Uq(Math.random()*this.c.c)):(b.i=0)}nOb(f,this.c);gmb(this.c,new m2b);this.d=new smb;for(i=0,j=this.c.c;i<j;++i){o=Mq(kmb(this.c,i),224);d=o.gC()==sD?f:o.W==i1b?e:g;B=new b5b(d,o);ySb(B.X,i%4*200-400);cTb(B.X,Math.floor(i/4)*200-200);ySb(B.$,Math.random()*200-100);zSb(B.$,Math.random()*200-100);cTb(B.$,Math.random()*200-100);gmb(this.d,B);kMb(this.E,B)}s=new E1b;z1b(s,new FNb(16777215));this.e=new b5b(new fYb(4,8,8),s);kMb(this.E,this.e);kMb(this.E,new OZb(1118481));a=new r$b(16777215,0.125);ySb(a.X,Math.random()-0.5);zSb(a.X,Math.random()-0.5);cTb(a.X,Math.random()-0.5);a.X.Be();kMb(this.E,a);this.f=new K$b;kMb(this.E,this.f)};_.ob=function Bjc(a){var b,c,d,e,f;f=1.0E-4*a;ySb(this.b.X,Math.cos(f)*1000);cTb(this.b.X,Math.sin(f)*1000);LMb(this.b,this.E.X);for(b=0,c=this.d.c;b<c;++b){e=Mq(kmb(this.d,b),240);e.$.d+=0.01;e.$.e+=0.005;d=Mq(kmb(this.c,b),224);b>9&&Pq(d,233)?zNb(Mq(d,233).g,0.54,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&Pq(d,232)&&zNb(Mq(d,232).e,0.04,1,0.7*(0.5+0.5*Math.cos(35*f)))}ySb(this.e.X,Math.sin(f*7)*300);zSb(this.e.X,Math.cos(f*5)*400);cTb(this.e.X,Math.cos(f*3)*300);ySb(this.f.X,this.e.X.d);zSb(this.f.X,this.e.X.e);cTb(this.f.X,this.e.X.c);jDb(this.D.o,this.E,this.b,null,false)};_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;var zA=Qeb(yPc,'DepthShader',$A),yA=Qeb(yPc,'DepthShader_Resources_default_InlineClientBundleGenerator',Hx),wA=Qeb(yPc,'DepthShader_Resources_default_InlineClientBundleGenerator$1',Hx),xA=Qeb(yPc,'DepthShader_Resources_default_InlineClientBundleGenerator$2',Hx),rD=Qeb(zPc,'MeshDepthMaterial',pD),mG=Qeb(uOc,'MaterialsCanvas2D$DemoScene',RD);_Kc(Wd)(24);