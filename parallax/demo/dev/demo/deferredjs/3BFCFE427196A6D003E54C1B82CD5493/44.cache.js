function YX(){}
function Qtc(a){this.a=a}
function UX(a){gX(this,(I1(),a))}
function VX(){var a;!TX&&(TX=new YX);a=$doc.createElement('audio');if(!a.canPlayType){return null}return new UX(a)}
function Ltc(){Eac.call(this);this.s=new ROb('./static/textures/planets/titan.jpg');this.n=new ROb(_Xc);this.p=new ROb(MZc);this.q=new ROb(NZc);this.r=new ROb(OZc);this.a=VX()}
function Ktc(a){var b,c,d;b=new sZb(16777215);V6b(b._,800,-96.42880000000001,0);b.S=true;b.I=2048;b.G=2048;b.A=1;b.w=1500;b.u=-0.005;b.D=0.85;mQb(a.H,b);c=new e4b(16777215);a4b(c,0.985,0.5,1.35);d=new $Ic(a.p,Rkb(700),(U$b(),N$b),c);YIc(d,a.q,Rkb(512),new jkb(0),N$b,null,null);YIc(d,a.q,Rkb(512),new jkb(0),N$b,null,null);YIc(d,a.q,Rkb(512),new jkb(0),N$b,null,null);YIc(d,a.r,Rkb(60),new jkb(0.6),N$b,null,null);YIc(d,a.r,Rkb(70),new jkb(0.7),N$b,null,null);YIc(d,a.r,Rkb(120),new jkb(0.9),N$b,null,null);YIc(d,a.r,Rkb(70),new jkb(1),N$b,null,null);ZIc(d,new Qtc(d));d._.hf(b._);mQb(a.H,d)}
var a$c='com.google.gwt.media.client.';GU(305,306,UQc);GU(304,305,UQc,UX);var TX;GU(310,1,{});GU(309,310,{},YX);GU(1236,1,cSc);_.zb=function Itc(){eac(this.b,new Ltc(this.a))};GU(1237,973,{338:1},Ltc);_.nb=function Mtc(){var a,b,c,d,e,f,g,i,j,k,n;this.c=new nRb(50,FHb(this.G.k),50,10000000);j6b(this.c._,500);this.d=gRb(this.c);i6b(this.d._,50);i=new p0b;m0b(i,new ROb('./static/textures/starmap_4K.jpg'));g=new x8b(new KXb(900,60,40),i);i6b(g.eb,-1);mQb(this.H,g);this.e=new TQb;EOb(this.e.g,(pFb(),kFb));mQb(this.H,this.e);j=new g8b;e=new m2b;f2b(e,new ROb('./static/textures/planets/saturn.jpg'));e.F=15;_1b(e,new e4b(0));j2b(e,new e4b(3355443));k=new KXb(120.536,100,50);this.j=new x8b(k,e);rQb(this.j,true);this.j.U=true;mQb(j,this.j);a=new i1b;a.W=true;e1b(a,new ROb('./static/textures/planets/saturnClouds.png'));this.f=new x8b(k,a);U6b(this.f.eb,1.005);s4b(this.f.cb,3.141592653589793);mQb(j,this.f);d=new i1b;d.W=true;e1b(d,new ROb('./static/textures/planets/saturnRings.png'));t$b(d,(f0b(),d0b));n=new x8b(new HXb(120.536,265.882,20,5),d);r4b(n.cb,1.5707963267948966);n.S=true;n.U=true;mQb(j,n);t4b(j.cb,-0.4808382089244377);mQb(this.H,j);f=new m2b;f2b(f,this.s);this.k=new x8b(k,f);V6b(this.k._,1205.3600000000001,0,0);U6b(this.k.eb,0.23);mQb(this.H,this.k);b=new m2b;f2b(b,this.n);this.g=new x8b(k,b);V6b(this.g._,301.34000000000003,0,0);U6b(this.g.eb,0.13);rQb(this.g,true);mQb(this.H,this.g);c=new m2b;f2b(c,this.n);this.i=new x8b(k,c);V6b(this.i._,602.6800000000001,0,0);U6b(this.i.eb,0.15);rQb(this.i,true);mQb(this.H,this.i);new fJc(this.G.k,this.H);Ktc(this);new WGb(this.G.k,this.H);this.G.k.ab=true;this.G.k.bb=true;bIb(this.G.k,new e4b(16777215),1);this.o=rh()};_.Bd=function Ntc(){RX(this.a).pause()};_.ob=function Otc(a){var b;!!RX(this.a).paused&&(RX(this.a).play(),undefined);b=(rh()-this.o)*0.001;if(a<24800||a>70000&&a<82000){j6b(this.d._,275.882*Math.cos(5.0E-5*a));X6b(this.d._,275.882*Math.sin(5.0E-5*a));LQb(this.d,this.j._);this.b=this.d}else{i6b(this.c._,964.288*Math.cos(5.0E-5*a));X6b(this.c._,1084.824*Math.sin(5.0E-5*a));LQb(this.c,this.j._);this.b=this.c}k4b(this.j.cb,0.02*b);k4b(this.f.cb,0.025*b);i6b(this.g._,301.34000000000003*Math.cos(3.0E-4*a));X6b(this.g._,301.34000000000003*Math.sin(3.0E-4*a));i6b(this.i._,602.6800000000001*Math.cos(1.0E-4*a));X6b(this.i._,602.6800000000001*Math.sin(1.0E-4*a));i6b(this.k._,843.752*Math.cos(7.0E-5*a));X6b(this.k._,843.752*Math.sin(7.0E-5*a));SQb(this.e,this.G.k,this.H);RHb(this.G.k,this.H,this.b,null,false);this.o=rh()};_.o=0;GU(1238,1,{},Qtc);_.zf=function Rtc(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;a++){b=qu(Rqb(this.a.a,a),350);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.e=0}qu(Rqb(this.a.a,2),350).n+=0.025;qu(Rqb(this.a.a,3),350).e=this.a.b.c*0.5+0.7853981633974483};var iO=Zjb(YWc,'Saturn$DemoScene',1237),hO=Zjb(YWc,'Saturn$DemoScene$1',1238),Ty=Zjb(a$c,'MediaBase',305),Sy=Zjb(a$c,'Audio',304),Ry=Zjb(a$c,'Audio$AudioElementSupportDetector',310),Qy=Zjb(a$c,'Audio$AudioElementSupportDetectedMaybe',309);qSc(xi)(44);