function gob(){}
function pob(){}
function mob(){}
function uob(){}
function tob(){}
function yob(){}
function xob(){}
function uIb(){}
function CIb(){}
function bWb(){}
function dWb(){gNb.call(this)}
function DIb(){eGb.call(this)}
function hob(){Xmb.call(this,(lob(),kob))}
function KFb(){LFb.call(this,16777215,1,0)}
function vIb(){eGb.call(this);this.b=false;this.c=1}
function lob(){lob=Q3b;kob=new pob}
function Bob(){Bob=Q3b;nob=new uob}
function Cob(){Cob=Q3b;oob=new yob}
function cWb(){var a,b,c,d,e,f,g,i;a=$doc.createElement(f8b);a.width=256;a.height=256;b=a.getContext(g8b);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=ar(Math.floor(g^i))}b.putImageData(d,0,0);return a}
var d8b='mFar',c8b='mNear';_=hob.prototype=gob.prototype=new Jmb;_.gC=function iob(){return yy};_.rd=function job(){Mmb(this,c8b,new Xqb((qrb(),crb),new t0(1)));Mmb(this,d8b,new Xqb(crb,new t0(2000)));Mmb(this,z7b,new Xqb(crb,new t0(1)))};_.cM={130:1};var kob;_=pob.prototype=mob.prototype=new Ub;_.gC=function qob(){return xy};_.ud=function rob(){return Bob(),nob};_.vd=function sob(){return Cob(),oob};var nob=null,oob=null;_=uob.prototype=tob.prototype=new Ub;_.gC=function vob(){return vy};_.Wb=function wob(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n}\r\n'};_=yob.prototype=xob.prototype=new Ub;_.gC=function zob(){return wy};_.Wb=function Aob(){return e8b};_=KFb.prototype=JFb.prototype;_=vIb.prototype=uIb.prototype=new PFb;_.Ke=function wIb(){return null};_.Me=function xIb(){return new hob};_.gC=function yIb(){return YA};_.He=function zIb(){return this.c};_.Ie=function AIb(){return this.b};_.Ne=function BIb(a,b,c){var d;WFb(this,c);d=VFb(this).j;if(b.gC()==hz){Wqb(Wq(d.b[c8b],132),new t0(Wq(b,139).e));Wqb(Wq(d.b[d8b],132),new t0(Wq(b,139).c))}Wqb(Wq(d.b[z7b],132),new t0(this.P))};_.cM={176:1,179:1};_.b=false;_.c=0;_=DIb.prototype=CIb.prototype=new PFb;_.Me=function EIb(){return null};_.gC=function FIb(){return ZA};_.cM={179:1,185:1};_=YVb.prototype;_.rb=function aWb(){cNb(this.c,new dWb(this.b))};_=dWb.prototype=bWb.prototype=new fNb;_.gC=function eWb(){return eD};_.nd=function fWb(){fab(this,new aub(45,Zab(this.B.D),1,2000))};_.ib=function gWb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;ezb(this.A.E,0,200,800);ktb(this.C,this.A);c=new Vub;for(i=0;i<=40;++i){c.J.Cc(new jzb(-500,-75,i*25-500));c.J.Cc(new jzb(500,-75,i*25-500));c.J.Cc(new jzb(i*25-500,-75,-500));c.J.Cc(new jzb(i*25-500,-75,500))}n=new nGb;kGb(n,new uub(16777215));n.P=0.2;k=new OKb(c,n,(XKb(),VKb));ktb(this.C,k);C=new Orb(cWb());Grb(C,(X_(),X_(),W_));this.b=new V5;t=new NIb;t.q=C;t.O=true;L5(this.b,t);u=new NIb;IIb(u,new uub(14540253));bGb(u,(HHb(),EHb));L5(this.b,u);y=new xJb;qJb(y,new uub(197379));rJb(y,new uub(14540253));uJb(y,new uub(39168));y.y=30;bGb(y,EHb);L5(this.b,y);L5(this.b,new jJb);p=new $Hb;VHb(p,new uub(16755200));p.O=true;$Fb(p,(DGb(),wGb));L5(this.b,p);v=new NIb;IIb(v,new uub(14540253));bGb(v,GHb);L5(this.b,v);A=new xJb;A.u=C;A.O=true;L5(this.b,A);x=new jJb;bGb(x,GHb);L5(this.b,x);q=new $Hb;VHb(q,new uub(65450));q.i=true;L5(this.b,q);L5(this.b,new vIb);w=new NIb;IIb(w,new uub(6710886));KIb(w,new uub(16711680));HIb(w,new uub(0));bGb(w,GHb);L5(this.b,w);z=new xJb;qJb(z,new uub(0));tJb(z,new uub(16776960));rJb(z,new uub(0));uJb(z,new uub(6710886));z.y=10;bGb(z,GHb);z.P=0.9;z.O=true;L5(this.b,z);r=new $Hb;q.k=C;q.O=true;L5(this.b,r);g=new iEb(70,32,16);e=new iEb(70,32,16);f=new iEb(70,32,16);for(i=0,j=f.o.Nc();i<j;++i){b=Wq(f.o.Fc(i),141);b.i=0}Tub(f,this.b);L5(this.b,new DIb);this.c=new V5;for(i=0,j=this.b.c;i<j;++i){o=Wq(P5(this.b,i),179);d=o.gC()==ZA?f:o.T==EHb?e:g;B=new hLb(d,o);Cyb(B.E,i%4*200-400);gzb(B.E,Math.floor(i/4)*200-200);Cyb(B.H,Math.random()*200-100);Dyb(B.H,Math.random()*200-100);gzb(B.H,Math.random()*200-100);L5(this.c,B);ktb(this.C,B)}s=new $Hb;VHb(s,new uub(16777215));this.d=new hLb(new iEb(4,8,8),s);ktb(this.C,this.d);ktb(this.C,new BFb(1118481));a=new FFb(16777215,0.125);Cyb(a.E,Math.random()-0.5);Dyb(a.E,Math.random()-0.5);gzb(a.E,Math.random()-0.5);a.E.fe();ktb(this.C,a);this.e=new KFb;ktb(this.C,this.e)};_.md=function hWb(){};_.jb=function iWb(a){var b,c,d,e,f;f=1.0E-4*a;Cyb(this.A.E,Math.cos(f)*1000);gzb(this.A.E,Math.sin(f)*1000);Gtb(this.A,this.C.E);for(b=0,c=this.c.c;b<c;++b){e=Wq(P5(this.c,b),194);e.H.d+=0.01;e.H.e+=0.005;d=Wq(P5(this.b,b),179);b>9&&Yq(d,187)?oub(Wq(d,187).g,0.54,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&Yq(d,186)&&oub(Wq(d,186).e,0.04,1,0.7*(0.5+0.5*Math.cos(35*f)))}Cyb(this.d.E,Math.sin(f*7)*300);Dyb(this.d.E,Math.cos(f*5)*400);gzb(this.d.E,Math.cos(f*3)*300);Cyb(this.e.d,this.d.E.d);Dyb(this.e.d,this.d.E.e);gzb(this.e.d,this.d.E.c)};_.b=null;_.c=null;_.d=null;_.e=null;var yy=h0(h8b,'ShaderDepth'),xy=h0(h8b,'ShaderDepth_Resources_default_InlineClientBundleGenerator'),vy=h0(h8b,'ShaderDepth_Resources_default_InlineClientBundleGenerator$1'),wy=h0(h8b,'ShaderDepth_Resources_default_InlineClientBundleGenerator$2'),YA=h0(i8b,'MeshDepthMaterial'),ZA=h0(i8b,'MeshFaceMaterial'),eD=h0(f7b,'MaterialsCanvas2D$DemoScene');S3b(ce)(16);