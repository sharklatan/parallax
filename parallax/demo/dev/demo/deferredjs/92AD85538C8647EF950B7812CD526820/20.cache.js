function Jnc(){}
function Nnc(){}
function Qnc(){}
function vHb(a,b){a.e=b}
function Bnc(){G8b.call(this)}
function Fnc(){Fnc=PKc;Enc=new Jnc}
function Snc(){Snc=PKc;Hnc=new Nnc}
function Tnc(){Tnc=PKc;Inc=new Qnc}
function THb(a,b){!a.a&&(a.a=new YQb);a.a.nd(mQc,b)}
function Anc(a){var b,c;c=new gqb;for(b=0;b<a.i.Pc();b++){Au(a.i.Hc(b),240);Xpb(c,b,new Eqb(qu(NS,oMc,299,[new b5b(1,0,0),new b5b(0,1,0),new b5b(0,0,1)])))}return c}
TT(1173,1,xMc);_.zb=function ync(){g8b(this.b,new Bnc(this.a))};TT(1174,964,{},Bnc);_.nb=function Cnc(){var a,b,c,d,e,f,g,i;this.a=new vPb(40,hGb(this.G.k),1,2000);Z4b(this.a._,800);c=new ZUb(150,150,150);d=new ZUb(150,150,150);e=new t$b;e.i=true;this.b=new z6b(c,e);l4b(this.b._,-150);vOb(this.H,this.b);b=new wHb((NHb(),LHb),Anc(d));vHb(b,(DHb(),BHb));g=new s1b((Fnc(),Enc));THb(mYb(g),b);this.d=new z6b(d,g);l4b(this.d._,150);vOb(this.H,this.d);i=new OVb(75,32,16);a=new wHb(LHb,Anc(i));vHb(a,BHb);f=new s1b(Enc);THb(mYb(f),a);this.c=new z6b(i,f);l4b(this.c._,-150);vOb(this.H,this.c)};_.ob=function Dnc(a){m2b(this.b.cb,0.005);n2b(this.b.cb,0.01);m2b(this.d.cb,0.005);n2b(this.d.cb,0.01);if(this.c){m2b(this.c.cb,0.005);n2b(this.c.cb,0.01)}tGb(this.G.k,this.H,this.a,null,false)};var Enc;TT(1175,1,{},Jnc);_.Nd=function Knc(){return Snc(),Hnc};_.Od=function Lnc(){return Tnc(),Inc};var Hnc,Inc;TT(1176,1,{},Nnc);_.mc=function Onc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};TT(1177,1,{},Qnc);_.mc=function Rnc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var mN=hjb(yRc,'MaterialsWireframe$DemoScene',1174),pN=hjb(yRc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1175),nN=hjb(yRc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1176),oN=hjb(yRc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1177);LMc(xi)(20);