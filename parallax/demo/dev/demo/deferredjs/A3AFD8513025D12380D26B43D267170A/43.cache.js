function BX(){}
function Wrc(a){this.b=a}
function xX(a){KW(this,(l1(),a))}
function yX(){var a;!wX&&(wX=new BX);a=$doc.createElement('audio');if(!a.canPlayType){return null}return new xX(a)}
function Rrc(){Q9b.call(this);this.u=new YNb('./static/textures/planets/titan.jpg');this.o=new YNb(aSc);this.q=new YNb(KTc);this.r=new YNb(LTc);this.s=new YNb(MTc);this.t=0;this.b=yX()}
function Qrc(a){var b,c,d;b=new DYb(16777215);e6b(b.ab,800,-96.42880000000001,0);b.T=true;b.J=2048;b.H=2048;b.B=1;b.A=1500;b.v=-0.005;b.F=0.85;tPb(a.I,b);c=new p3b(16777215);l3b(c,0.985,0.5,1.35);d=new nFc(a.q,Ckb(700),(d$b(),YZb),c);lFc(d,a.r,Ckb(512),new Wjb(0),YZb,null,null);lFc(d,a.r,Ckb(512),new Wjb(0),YZb,null,null);lFc(d,a.r,Ckb(512),new Wjb(0),YZb,null,null);lFc(d,a.s,Ckb(60),new Wjb(0.6),YZb,null,null);lFc(d,a.s,Ckb(70),new Wjb(0.7),YZb,null,null);lFc(d,a.s,Ckb(120),new Wjb(0.9),YZb,null,null);lFc(d,a.s,Ckb(70),new Wjb(1),YZb,null,null);mFc(d,new Wrc(d));d.ab.of(b.ab);tPb(a.I,d)}
var $Tc='com.google.gwt.media.client.';nU(304,305,PKc);nU(303,304,PKc,xX);var wX;nU(309,1,{});nU(308,309,{},BX);nU(1229,1,_Lc);_.Db=function Orc(){q9b(this.c,new Rrc(this.b))};nU(1230,968,{337:1},Rrc);_.ob=function Src(){var a,b,c,d,e,f,g,i,j,k,n,o;this.d=new wQb(50,MGb(this.H.n),50,10000000);u5b(this.d.ab,500);this.e=pQb(this.d);t5b(this.e.ab,50);i=new A_b;x_b(i,new YNb('./static/textures/stars_skybox.jpg'));g=new I7b(new VWb(900,60,40),i);t5b(g.fb,-1);tPb(this.I,g);this.f=new $Pb;LNb(this.f.i,(xEb(),sEb));tPb(this.I,this.f);j=new r7b;e=new x1b;o=new YNb('./static/textures/planets/saturn.jpg');e.u=o;e.G=15;k1b(e,new p3b(0));u1b(e,new p3b(3355443));k=new VWb(120.536,100,50);this.k=new I7b(k,e);yPb(this.k,true);this.k.V=true;tPb(j,this.k);a=new t0b;a.X=true;p0b(a,new YNb('./static/textures/planets/saturnClouds.png'));this.g=new I7b(k,a);d6b(this.g.fb,1.005);E3b(this.g.db,3.141592653589793);tPb(j,this.g);d=new t0b;d.X=true;p0b(d,new YNb('./static/textures/planets/saturnRings.png'));EZb(d,(q_b(),o_b));n=new I7b(new SWb(120.536,265.882,20,5),d);C3b(n.db,1.5707963267948966);n.T=true;n.V=true;tPb(j,n);E3b(j.db,-0.4808382089244377);tPb(this.I,j);f=new x1b;q1b(f,this.u);this.n=new I7b(k,f);e6b(this.n.ab,1205.3600000000001,0,0);d6b(this.n.fb,0.23);tPb(this.I,this.n);b=new x1b;q1b(b,this.o);this.i=new I7b(k,b);e6b(this.i.ab,301.34000000000003,0,0);d6b(this.i.fb,0.13);yPb(this.i,true);tPb(this.I,this.i);c=new x1b;q1b(c,this.o);this.j=new I7b(k,c);e6b(this.j.ab,602.6800000000001,0,0);d6b(this.j.fb,0.15);yPb(this.j,true);tPb(this.I,this.j);new uFc(this.H.n,this.I);Qrc(this);new bGb(this.H.n,this.I);this.H.n.bb=true;this.H.n.cb=true;iHb(this.H.n,new p3b(16777215),1);this.p=Bh()};_.Fd=function Trc(){uX(this.b).pause()};_.pb=function Urc(a){var b;!!uX(this.b).paused&&(uX(this.b).play(),undefined);b=(Bh()-this.p)*0.001;if(a<24800||a>70000&&a<82000){this.t+=0.07;u5b(this.e.ab,275.882*Wkb(this.t*3.141592653589793/180));g6b(this.e.ab,-265.882+275.882*dlb(this.t*3.141592653589793/180));SPb(this.e,this.k.ab);this.c=this.e}else{this.t=0;t5b(this.d.ab,964.288*Math.cos(5.0E-5*a));g6b(this.d.ab,1084.824*Math.sin(5.0E-5*a));SPb(this.d,this.k.ab);this.c=this.d}v3b(this.k.db,0.02*b);v3b(this.g.db,-0.064*b);t5b(this.i.ab,301.34000000000003*Math.cos(3.0E-4*a));g6b(this.i.ab,301.34000000000003*Math.sin(3.0E-4*a));t5b(this.j.ab,602.6800000000001*Math.cos(1.0E-4*a));g6b(this.j.ab,602.6800000000001*Math.sin(1.0E-4*a));t5b(this.n.ab,843.752*Math.cos(7.0E-5*a));g6b(this.n.ab,843.752*Math.sin(7.0E-5*a));ZPb(this.f,this.H.n,this.I);YGb(this.H.n,this.I,this.c,null,false);this.p=Bh()};_.p=0;_.t=0;nU(1231,1,{},Wrc);_.Ef=function Xrc(){var a,b,c,d;c=-this.b.c.d*2;d=-this.b.c.e*2;for(a=0;a<this.b.b.c;a++){b=Fu(Dqb(this.b.b,a),349);b.n=this.b.c.d+c*b.d;b.o=this.b.c.e+d*b.d;b.f=0}Fu(Dqb(this.b.b,2),349).o+=0.025;Fu(Dqb(this.b.b,3),349).f=this.b.c.d*0.5+0.7853981633974483};var tO=Kjb($Qc,'Saturn$DemoScene',1230),sO=Kjb($Qc,'Saturn$DemoScene$1',1231),hz=Kjb($Tc,'MediaBase',304),gz=Kjb($Tc,'Audio',303),fz=Kjb($Tc,'Audio$AudioElementSupportDetector',309),ez=Kjb($Tc,'Audio$AudioElementSupportDetectedMaybe',308);nMc(Hi)(43);