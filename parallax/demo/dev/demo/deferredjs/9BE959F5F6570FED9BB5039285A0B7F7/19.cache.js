function jpc(){}
function npc(){}
function qpc(){}
function EIb(a,b){a.e=b}
function bpc(){nbc.call(this)}
function fpc(){fpc=kMc;epc=new jpc}
function spc(){spc=kMc;hpc=new npc}
function tpc(){tpc=kMc;ipc=new qpc}
function aJb(a,b){!a.a&&(a.a=new KSb);a.a.od(LRc,b)}
function apc(a){var b,c;c=new Wqb;for(b=0;b<a.i.Qc();b++){yv(a.i.Ic(b),242);Lqb(c,b,new trb(ov(tU,MNc,303,[new p8b(1,0,0),new p8b(0,1,0),new p8b(0,0,1)])))}return c}
zV(1187,1,WNc);_.Mb=function $oc(){Pac(this.b,new bpc(this.a))};zV(1188,985,{},bpc);_.nb=function cpc(){var a,b,c,d,e,f,g,i;this.a=new bRb(40,gGb(this.G.k),1,2000);k8b(this.a._,800);c=new MWb(150,150,150);d=new MWb(150,150,150);e=new Y0b;e.i=true;this.b=new dZb(c,e);C7b(this.b._,-150);ZPb(this.H,this.b);b=new FIb((WIb(),UIb),apc(d));EIb(b,(MIb(),KIb));g=new Y3b((fpc(),epc));aJb(R$b(g),b);this.d=new dZb(d,g);C7b(this.d._,150);ZPb(this.H,this.d);i=new BXb(75,32,16);a=new FIb(UIb,apc(i));EIb(a,KIb);f=new Y3b(epc);aJb(R$b(f),a);this.c=new dZb(i,f);C7b(this.c._,-150);ZPb(this.H,this.c)};_.ob=function dpc(a){$4b(this.b.cb,0.005);_4b(this.b.cb,0.01);$4b(this.d.cb,0.005);_4b(this.d.cb,0.01);if(this.c){$4b(this.c.cb,0.005);_4b(this.c.cb,0.01)}EHb(this.G.k,this.H,this.a,null,false)};var epc;zV(1189,1,{},jpc);_.Od=function kpc(){return spc(),hpc};_.Pd=function lpc(){return tpc(),ipc};var hpc,ipc;zV(1190,1,{},npc);_.nc=function opc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};zV(1191,1,{},qpc);_.nc=function rpc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var vO=Wjb($Sc,'MaterialsWireframe$DemoScene',1188),yO=Wjb($Sc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1189),wO=Wjb($Sc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1190),xO=Wjb($Sc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1191);iOc(wj)(19);