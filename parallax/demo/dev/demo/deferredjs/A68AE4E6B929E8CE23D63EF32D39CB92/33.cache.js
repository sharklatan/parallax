function Cjc(){}
function Gjc(){}
function Jjc(){}
function Qjc(){}
function Ujc(){}
function Xjc(){}
function wjc(){wjc=cFc;vjc=new Cjc}
function yjc(){yjc=cFc;xjc=new Qjc}
function Ljc(){Ljc=cFc;Ajc=new Gjc}
function Mjc(){Mjc=cFc;Bjc=new Jjc}
function Zjc(){Zjc=cFc;Ojc=new Ujc}
function $jc(){$jc=cFc;Pjc=new Xjc}
function sjc(){q7b.call(this);this.d=0.01}
bT(1124,1,OGc);_.Db=function qjc(){S6b(this.c,new sjc(this.b))};bT(1125,955,{327:1},sjc);_.ob=function tjc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.b=new vOb(30,hFb(this.F.n),1,10000);L3b(this.b.ab,100);this.c=new iOb(this.F.n.$,this.F.n.Z,-10000,10000);L3b(this.c.ab,100);this.n=new Y5b;this.o=new Y5b;e=new wWb(16777215);J3b(e.ab,0,0,1).nf();vNb(this.n,e);f=new xWb(16755370,1.5);J3b(f.ab,0,0,-1).nf();vNb(this.n,f);this.k=new vMb(this.F.n.$,this.F.n.Z);NLb(this.k,(VCb(),PCb));LLb(this.k,(KCb(),JCb));ILb(this.k,(eBb(),dBb));this.e=new e0b((wjc(),vjc));UGb(lXb(this.e),cNc,new _Kb((sLb(),eLb),new wib(0)));this.f=new e0b((yjc(),xjc));UGb(lXb(this.f),uMc,new _Kb(kLb,this.k));sXb(this.f,false);n=new DUb(this.F.n.$,this.F.n.Z);this.j=new l5b(n,this.e);L3b(this.j.ab,-100);vNb(this.n,this.j);i=new d_b;W$b(i,new V0b(5570560));a_b(i,new V0b(16720384));i.G=5;g=new d_b;W$b(g,new V0b(5592405));a_b(g,new V0b(16755200));g.G=5;a=new WUb(100,25,15,30);this.p=new l5b(a,g);J3b(this.p.ab,0,0,100);J3b(this.p.fb,1.5,1.5,1.5);vNb(this.n,this.p);this.q=new l5b(a,i);J3b(this.q.ab,0,150,100);J3b(this.q.fb,0.75,0.75,0.75);vNb(this.n,this.q);o=new l5b(n,this.f);L3b(o.ab,-100);vNb(this.o,o);b=new OUb(10,64,32);j=new rZb;lZb(j,new V0b(16777215));oZb(j,this.k);for(d=0;d<5;d++){for(c=0;c<5;c++){k=new l5b(b,j);Z2b(k.ab,(c-2)*20);$2b(k.ab,(d-2)*20);L3b(k.ab,0);h1b(k.db,-1.5707963267948966);vNb(this.G,k)}}BFb(this.F.n,false)};_.pb=function ujc(a){U2b(this.b.ab,(this.g-this.b.ab.d)*0.05);V2b(this.b.ab,(-this.i-this.b.ab.e)*0.05);TNb(this.b,this.G.ab);if(!!this.p&&!!this.q){h1b(this.p.db,-a*0.0015);h1b(this.q.db,-a*0.0015+1.5707963267948966)}(Fu(Fu(TPb(lXb(this.e).j,cNc),225).e,150).b>1||Fu(Fu(TPb(lXb(this.e).j,cNc),225).e,150).b<0)&&(this.d*=-1);ZKb(Fu(TPb(lXb(this.e).j,cNc),225),new wib(Fu(Fu(TPb(lXb(this.e).j,cNc),225).e,150).b+this.d));bFb(this.F.n);tFb(this.F.n,this.n,this.c,this.k,true);tFb(this.F.n,this.o,this.c,null,false);tFb(this.F.n,this.G,this.b,null,false)};_.d=0;_.g=0;_.i=0;var vjc;var xjc;bT(1126,1,{},Cjc);_.Pd=function Djc(){return Ljc(),Ajc};_.Qd=function Ejc(){return Mjc(),Bjc};var Ajc,Bjc;bT(1127,1,{},Gjc);_.dc=function Hjc(){return 'varying vec2 vUv;\r\nuniform float time;\r\n\r\nvoid main() {\r\n\r\n\tfloat r = vUv.x;\r\n\tif( vUv.y < 0.5 ) r = 0.0;\r\n\tfloat g = vUv.y;\r\n\tif( vUv.x < 0.5 ) g = 0.0;\r\n\r\n\tgl_FragColor = vec4( r, g, time, 1.0 );\r\n\r\n}\r\n'};bT(1128,1,{},Jjc);_.dc=function Kjc(){return kNc};bT(1131,1,{},Qjc);_.Pd=function Rjc(){return Zjc(),Ojc};_.Qd=function Sjc(){return $jc(),Pjc};var Ojc,Pjc;bT(1132,1,{},Ujc);_.dc=function Vjc(){return 'varying vec2 vUv;\r\nuniform sampler2D tDiffuse;\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = texture2D( tDiffuse, vUv );\r\n\r\n}\r\n'};bT(1133,1,{},Xjc);_.dc=function Yjc(){return kNc};var IM=kib(HLc,'MaterialsRenderTarget$DemoScene',1125),LM=kib(HLc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator',1126),JM=kib(HLc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$1',1127),KM=kib(HLc,'MaterialsRenderTarget_ResourcesPass1_default_InlineClientBundleGenerator$2',1128),OM=kib(HLc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator',1131),MM=kib(HLc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$1',1132),NM=kib(HLc,'MaterialsRenderTarget_ResourcesScreen_default_InlineClientBundleGenerator$2',1133);_Gc(Hi)(33);