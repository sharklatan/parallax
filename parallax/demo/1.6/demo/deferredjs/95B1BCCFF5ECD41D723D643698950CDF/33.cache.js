function vnc(){}
function znc(){}
function Cnc(){}
function Jnc(){}
function Nnc(){}
function Qnc(){}
function pnc(){pnc=FMc;onc=new vnc}
function rnc(){rnc=FMc;qnc=new Jnc}
function Enc(){Enc=FMc;tnc=new znc}
function Fnc(){Fnc=FMc;unc=new Cnc}
function Snc(){Snc=FMc;Hnc=new Nnc}
function Tnc(){Tnc=FMc;Inc=new Qnc}
function lnc(){Hbc.call(this);this.d=0.01}
PV(1155,1,rOc);_.Qb=function jnc(){hbc(this.c,new lnc(this.b))};PV(1156,984,{332:1},lnc);_.ob=function mnc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.b=new vRb(30,zGb(this.H.n),1,10000);E8b(this.b.ab,100);this.c=new gRb(this.H.n.ib,this.H.n.hb,-10000,10000);E8b(this.c.ab,100);this.n=new lac;this.o=new lac;e=new q$b(16777215);C8b(e.ab,0,0,1).lf();rQb(this.n,e);f=new r$b(16755370,1.5);C8b(f.ab,0,0,-1).lf();rQb(this.n,f);this.k=new rPb(this.H.n.ib,this.H.n.hb);JOb(this.k,(dFb(),ZEb));HOb(this.k,(UEb(),TEb));EOb(this.k,(oDb(),nDb));this.e=new q4b((pnc(),onc));vJb(j_b(this.e),LUc,new XNb((oOb(),aOb),new zkb(0)));this.f=new q4b((rnc(),qnc));vJb(j_b(this.f),cUc,new XNb(gOb,this.k));q_b(this.f,false);n=new KXb(this.H.n.ib,this.H.n.hb);this.j=new xZb(n,this.e);E8b(this.j.ab,-100);rQb(this.n,this.j);i=new n3b;d3b(i,new m5b(5570560));k3b(i,new m5b(16720384));i.I=5;g=new n3b;d3b(g,new m5b(5592405));k3b(g,new m5b(16755200));g.I=5;a=new bYb(100,25,15,30);this.p=new xZb(a,g);C8b(this.p.ab,0,0,100);C8b(this.p.fb,1.5,1.5,1.5);rQb(this.n,this.p);this.q=new xZb(a,i);C8b(this.q.ab,0,150,100);C8b(this.q.fb,0.75,0.75,0.75);rQb(this.n,this.q);o=new xZb(n,this.f);E8b(o.ab,-100);rQb(this.o,o);b=new VXb(10,64,32);j=new q1b;k1b(j,new m5b(16777215));n1b(j,this.k);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new xZb(b,j);W7b(k.ab,(c-2)*20);X7b(k.ab,(d-2)*20);E8b(k.ab,0);B5b(k.db,-1.5707963267948966);rQb(this.I,k)}}AGb(this.H.n,false)};_.pb=function nnc(a){Q7b(this.b.ab,(this.g-this.b.ab.d)*0.05);R7b(this.b.ab,(-this.i-this.b.ab.e)*0.05);RQb(this.b,this.I.ab);if(!!this.p&&!!this.q){B5b(this.p.db,-a*0.0015);B5b(this.q.db,-a*0.0015+1.5707963267948966)}(Lv(Lv(ZSb(j_b(this.e).j,LUc),226).e,150).b>1||Lv(Lv(ZSb(j_b(this.e).j,LUc),226).e,150).b<0)&&(this.d*=-1);VNb(Lv(ZSb(j_b(this.e).j,LUc),226),new zkb(Lv(Lv(ZSb(j_b(this.e).j,LUc),226).e,150).b+this.d));GHb(this.H.n,true);YHb(this.H.n,this.n,this.c,this.k,true);YHb(this.H.n,this.o,this.c,null,false);YHb(this.H.n,this.I,this.b,null,false)};_.d=0;_.g=0;_.i=0;var onc;var qnc;PV(1157,1,{},vnc);_.Sd=function wnc(){return Enc(),tnc};_.Td=function xnc(){return Fnc(),unc};var tnc,unc;PV(1158,1,{},znc);_.qc=function Anc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};PV(1159,1,{},Cnc);_.qc=function Dnc(){return TUc};PV(1162,1,{},Jnc);_.Sd=function Knc(){return Snc(),Hnc};_.Td=function Lnc(){return Tnc(),Inc};var Hnc,Inc;PV(1163,1,{},Nnc);_.qc=function Onc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};PV(1164,1,{},Qnc);_.qc=function Rnc(){return TUc};var kO=nkb(pTc,'MaterialsRenderTarget$DemoScene',1156),nO=nkb(pTc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1157),lO=nkb(pTc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1158),mO=nkb(pTc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1159),qO=nkb(pTc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1162),oO=nkb(pTc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1163),pO=nkb(pTc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1164);FOc(Oj)(33);