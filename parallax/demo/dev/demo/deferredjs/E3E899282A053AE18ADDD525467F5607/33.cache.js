function Cnc(){}
function Gnc(){}
function Jnc(){}
function Qnc(){}
function Unc(){}
function Xnc(){}
function wnc(){wnc=LMc;vnc=new Cnc}
function ync(){ync=LMc;xnc=new Qnc}
function Lnc(){Lnc=LMc;Anc=new Gnc}
function Mnc(){Mnc=LMc;Bnc=new Jnc}
function Znc(){Znc=LMc;Onc=new Unc}
function $nc(){$nc=LMc;Pnc=new Xnc}
function snc(){Obc.call(this);this.d=0.01}
kW(1161,1,xOc);_.Qb=function qnc(){obc(this.c,new snc(this.b))};kW(1162,990,{333:1},snc);_.ob=function tnc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.b=new PRb(30,UGb(this.H.n),1,10000);r8b(this.b.ab,100);this.c=new ARb(this.H.n.ib,this.H.n.hb,-10000,10000);r8b(this.c.ab,100);this.n=new sac;this.o=new sac;e=new F$b(16777215);p8b(e.ab,0,0,1).Af();LQb(this.n,e);f=new G$b(16755370,1.5);p8b(f.ab,0,0,-1).Af();LQb(this.n,f);this.k=new LPb(this.H.n.ib,this.H.n.hb);bPb(this.k,(yFb(),sFb));_Ob(this.k,(nFb(),mFb));YOb(this.k,(JDb(),IDb));this.e=new F4b((wnc(),vnc));PJb(y_b(this.e),WUc,new pOb((IOb(),uOb),new Tkb(0)));this.f=new F4b((ync(),xnc));PJb(y_b(this.f),nUc,new pOb(AOb,this.k));F_b(this.f,false);n=new dYb(this.H.n.ib,this.H.n.hb);this.j=new MZb(n,this.e);r8b(this.j.ab,-100);LQb(this.n,this.j);i=new C3b;s3b(i,new A5b(5570560));z3b(i,new A5b(16720384));i.I=5;g=new C3b;s3b(g,new A5b(5592405));z3b(g,new A5b(16755200));g.I=5;a=new wYb(100,25,15,30);this.p=new MZb(a,g);p8b(this.p.ab,0,0,100);p8b(this.p.fb,1.5,1.5,1.5);LQb(this.n,this.p);this.q=new MZb(a,i);p8b(this.q.ab,0,150,100);p8b(this.q.fb,0.75,0.75,0.75);LQb(this.n,this.q);o=new MZb(n,this.f);r8b(o.ab,-100);LQb(this.o,o);b=new oYb(10,64,32);j=new F1b;z1b(j,new A5b(16777215));C1b(j,this.k);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new MZb(b,j);E7b(k.ab,(c-2)*20);F7b(k.ab,(d-2)*20);r8b(k.ab,0);O5b(k.db,-1.5707963267948966);LQb(this.I,k)}}VGb(this.H.n,false)};_.pb=function unc(a){z7b(this.b.ab,(this.g-this.b.ab.d)*0.05);A7b(this.b.ab,(-this.i-this.b.ab.e)*0.05);jRb(this.b,this.I.ab);if(!!this.p&&!!this.q){O5b(this.p.db,-a*0.0015);O5b(this.q.db,-a*0.0015+1.5707963267948966)}(bw(bw(sTb(y_b(this.e).j,WUc),226).e,150).b>1||bw(bw(sTb(y_b(this.e).j,WUc),226).e,150).b<0)&&(this.d*=-1);nOb(bw(sTb(y_b(this.e).j,WUc),226),new Tkb(bw(bw(sTb(y_b(this.e).j,WUc),226).e,150).b+this.d));$Hb(this.H.n,true);qIb(this.H.n,this.n,this.c,this.k,true);qIb(this.H.n,this.o,this.c,null,false);qIb(this.H.n,this.I,this.b,null,false)};_.d=0;_.g=0;_.i=0;var vnc;var xnc;kW(1163,1,{},Cnc);_.Vd=function Dnc(){return Lnc(),Anc};_.Wd=function Enc(){return Mnc(),Bnc};var Anc,Bnc;kW(1164,1,{},Gnc);_.uc=function Hnc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};kW(1165,1,{},Jnc);_.uc=function Knc(){return cVc};kW(1168,1,{},Qnc);_.Vd=function Rnc(){return Znc(),Onc};_.Wd=function Snc(){return $nc(),Pnc};var Onc,Pnc;kW(1169,1,{},Unc);_.uc=function Vnc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};kW(1170,1,{},Xnc);_.uc=function Ync(){return cVc};var HO=Hkb(ATc,'MaterialsRenderTarget$DemoScene',1162),KO=Hkb(ATc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1163),IO=Hkb(ATc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1164),JO=Hkb(ATc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1165),NO=Hkb(ATc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1168),LO=Hkb(ATc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1169),MO=Hkb(ATc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1170);LOc(Pj)(33);