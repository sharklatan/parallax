function cjc(){}
function gjc(){}
function jjc(){}
function qFb(a,b){a.f=b}
function Wic(){W5b.call(this)}
function $ic(){$ic=Yzc;Zic=new cjc}
function ljc(){ljc=Yzc;ajc=new gjc}
function mjc(){mjc=Yzc;bjc=new jjc}
function OFb(a,b){!a.b&&(a.b=new ROb);a.b.vd(qFc,b)}
function Vic(a){var b,c;c=new pob;for(b=0;b<a.j.Xc();b++){Xu(a.j.Pc(b),188);vH==vH?eob(c,b,new Nob(Nu(xR,uBc,249,[new E3b(1,0,0,0),new E3b(0,1,0,0),new E3b(0,0,1,0)]))):eob(c,b,new Nob(Nu(xR,uBc,249,[new E3b(1,0,0,1),new E3b(1,1,0,1),new E3b(0,1,0,1),new E3b(0,0,0,1)])))}return c}
ES(1129,1,DBc);_.Cb=function Tic(){T5b(this.c,new Wic(this.b))};ES(1130,946,{},Wic);_.nb=function Xic(){var a,b,c,d,e,f,g,i,j,k,n;this.b=new nNb(40,lEb(this.F.o),1,2000);O2b(this.b.ab,800);d=new SSb(150,150,150);e=new SSb(150,150,150);f=new SSb(150,150,150);g=new lYb;g.j=true;this.c=new n4b(d,g);a2b(this.c.ab,0);oMb(this.G,this.c);b=new rFb((IFb(),HFb),Vic(e));qFb(b,(yFb(),wFb));j=new f_b(($ic(),Zic));OFb(dWb(j),b);this.e=new n4b(e,j);a2b(this.e.ab,300);oMb(this.G,this.e);c=new rFb(HFb,Vic(f));qFb(c,wFb);k=new f_b(Zic);OFb(dWb(k),c);this.f=new n4b(f,k);a2b(this.f.ab,-300);oMb(this.G,this.f);n=new FTb(75,32,16);a=new rFb(HFb,Vic(n));qFb(a,wFb);i=new f_b(Zic);OFb(dWb(i),a);this.d=new n4b(n,i);a2b(this.d.ab,0);oMb(this.G,this.d)};_.ob=function Yic(a){a0b(this.c.db,0.005);b0b(this.c.db,0.01);a0b(this.e.db,0.005);b0b(this.e.db,0.01);a0b(this.f.db,0.005);b0b(this.f.db,0.01);if(this.d){a0b(this.d.db,0.005);b0b(this.d.db,0.01)}xEb(this.F.o,this.G,this.b,null,false)};var Zic;ES(1131,1,{},cjc);_.Td=function djc(){return ljc(),ajc};_.Ud=function ejc(){return mjc(),bjc};var ajc,bjc;ES(1132,1,{},gjc);_.ic=function hjc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec4 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nfloat edgeFactorQuad1() {\n\n\tvec2 d = fwidth( vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n\n}\n\nfloat edgeFactorQuad2() {\n\n\tvec2 d = fwidth( 1.0 - vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, 1.0 - vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n}\n\nvoid main() {\n\n\tif ( vCenter.w == 0.0 ) {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\n\t} else {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), min( edgeFactorQuad1(), edgeFactorQuad2() ) );\n\n\t}\n\n\tgl_FragColor.a = 1.0;\n\n}\n'};ES(1133,1,{},jjc);_.ic=function kjc(){return 'attribute vec4 center;\nvarying vec4 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var dN=qhb(wGc,'MaterialsWireframe$DemoScene',1130),xR=phb(GHc,'Vector4;',1377,DJ),gN=qhb(wGc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1131),eN=qhb(wGc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1132),fN=qhb(wGc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1133);PBc(Hi)(19);