function tX(){}
function Mrc(a){this.a=a}
function Hrc(){G9b.call(this);this.t=new ONb('./static/textures/planets/titan.jpg');this.n=new ONb(VRc);this.p=new ONb(DTc);this.q=new ONb(ETc);this.r=new ONb(FTc);this.s=0;this.a=(!qX&&(qX=new tX),null)}
function Grc(a){var b,c,d;b=new tYb(16777215);W5b(b._,800,-96.42880000000001,0);b.S=true;b.I=2048;b.G=2048;b.A=1;b.w=1500;b.u=-0.005;b.D=0.85;jPb(a.H,b);c=new f3b(16777215);b3b(c,0.985,0.5,1.35);d=new dFc(a.p,skb(700),(VZb(),OZb),c);bFc(d,a.q,skb(512),new Mjb(0),OZb,null,null);bFc(d,a.q,skb(512),new Mjb(0),OZb,null,null);bFc(d,a.q,skb(512),new Mjb(0),OZb,null,null);bFc(d,a.r,skb(60),new Mjb(0.6),OZb,null,null);bFc(d,a.r,skb(70),new Mjb(0.7),OZb,null,null);bFc(d,a.r,skb(120),new Mjb(0.9),OZb,null,null);bFc(d,a.r,skb(70),new Mjb(1),OZb,null,null);cFc(d,new Mrc(d));d._.lf(b._);jPb(a.H,d)}
var TTc='com.google.gwt.media.client.';var qX;hU(311,1,{});hU(310,311,{},tX);hU(1232,1,PLc);_.zb=function Erc(){g9b(this.b,new Hrc(this.a))};hU(1233,971,{337:1},Hrc);_.nb=function Irc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.c=new mQb(50,CGb(this.G.k),50,10000000);k5b(this.c._,500);this.d=fQb(this.c);j5b(this.d._,50);i=new q_b;n_b(i,new ONb('./static/textures/stars_skybox.jpg'));g=new y7b(new LWb(900,60,40),i);j5b(g.eb,-1);jPb(this.H,g);this.e=new QPb;BNb(this.e.g,(nEb(),iEb));jPb(this.H,this.e);j=new h7b;e=new n1b;o=new ONb('./static/textures/planets/saturn.jpg');e.t=o;e.F=15;a1b(e,new f3b(0));k1b(e,new f3b(3355443));k=new LWb(120.536,100,50);this.j=new y7b(k,e);oPb(this.j,true);this.j.U=true;jPb(j,this.j);a=new j0b;a.W=true;f0b(a,new ONb('./static/textures/planets/saturnClouds.png'));this.f=new y7b(k,a);V5b(this.f.eb,1.005);u3b(this.f.cb,3.141592653589793);jPb(j,this.f);d=new j0b;d.W=true;f0b(d,new ONb('./static/textures/planets/saturnRings.png'));uZb(d,(g_b(),e_b));n=new y7b(new IWb(120.536,265.882,20,5),d);s3b(n.cb,1.5707963267948966);n.S=true;n.U=true;jPb(j,n);u3b(j.cb,-0.4808382089244377);jPb(this.H,j);f=new n1b;g1b(f,this.t);this.k=new y7b(k,f);W5b(this.k._,1205.3600000000001,0,0);V5b(this.k.eb,0.23);jPb(this.H,this.k);b=new n1b;g1b(b,this.n);this.g=new y7b(k,b);W5b(this.g._,301.34000000000003,0,0);V5b(this.g.eb,0.13);oPb(this.g,true);jPb(this.H,this.g);c=new n1b;g1b(c,this.n);this.i=new y7b(k,c);W5b(this.i._,602.6800000000001,0,0);V5b(this.i.eb,0.15);oPb(this.i,true);jPb(this.H,this.i);new kFc(this.G.k,this.H);Grc(this);new TFb(this.G.k,this.H);this.G.k.ab=true;this.G.k.bb=true;$Gb(this.G.k,new f3b(16777215),1);this.o=rh()};_.Cd=function Jrc(){null.Rg().Rg()};_.ob=function Krc(a){var b;null.Rg().Rg()&&null.Rg().Rg();b=(rh()-this.o)*0.001;if(a<24800||a>70000&&a<82000){this.s+=0.07;k5b(this.d._,275.882*Mkb(this.s*3.141592653589793/180));Y5b(this.d._,-265.882+275.882*Vkb(this.s*3.141592653589793/180));IPb(this.d,this.j._);this.b=this.d}else{this.s=0;j5b(this.c._,964.288*Math.cos(5.0E-5*a));Y5b(this.c._,1084.824*Math.sin(5.0E-5*a));IPb(this.c,this.j._);this.b=this.c}l3b(this.j.cb,0.02*b);l3b(this.f.cb,-0.064*b);j5b(this.g._,301.34000000000003*Math.cos(3.0E-4*a));Y5b(this.g._,301.34000000000003*Math.sin(3.0E-4*a));j5b(this.i._,602.6800000000001*Math.cos(1.0E-4*a));Y5b(this.i._,602.6800000000001*Math.sin(1.0E-4*a));j5b(this.k._,843.752*Math.cos(7.0E-5*a));Y5b(this.k._,843.752*Math.sin(7.0E-5*a));PPb(this.e,this.G.k,this.H);OGb(this.G.k,this.H,this.b,null,false);this.o=rh()};_.o=0;_.s=0;hU(1234,1,{},Mrc);_.Bf=function Nrc(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;a++){b=Bu(tqb(this.a.a,a),349);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.e=0}Bu(tqb(this.a.a,2),349).n+=0.025;Bu(tqb(this.a.a,3),349).e=this.a.b.c*0.5+0.7853981633974483};var nO=Ajb(TQc,'Saturn$DemoScene',1233),mO=Ajb(TQc,'Saturn$DemoScene$1',1234),bz=Ajb(TTc,'Audio$AudioElementSupportDetector',311),az=Ajb(TTc,'Audio$AudioElementSupportDetectedNo',310);bMc(xi)(43);