function Yxc(){}
function ayc(){}
function dyc(){}
function Joc(){acc.call(this)}
function Rxc(){aKb.call(this,(Uxc(),Txc))}
function Uxc(){Uxc=$Mc;Txc=new Yxc}
function fyc(){fyc=$Mc;Wxc=new ayc}
function gyc(){gyc=$Mc;Xxc=new dyc}
kW(1177,1,MOc);_.Qb=function Hoc(){Cbc(this.c,new Joc(this.b))};kW(1178,990,JOc,Joc);_.Nd=function Koc(a){p8b(bw(bw(sTb(this.c,gVc),226).e,301),a.b.ib);q8b(bw(bw(sTb(this.c,gVc),226).e,301),a.b.hb)};_.ob=function Loc(){var a,b;Su((Pyb(),Oyb),(Zyb(),Yyb),this);this.b=new lRb;Z8b(this.b.ab,1);a=new M4b(new Rxc);this.c=E_b(a).j;b=new SZb(new dYb(2,2),a);MQb(this.I,b);p8b(bw(bw(sTb(this.c,gVc),226).e,301),this.H.n.ib);q8b(bw(bw(sTb(this.c,gVc),226).e,301),this.H.n.hb)};_.pb=function Moc(a){oOb(bw(sTb(this.c,jVc),226),new Tkb(bw(bw(sTb(this.c,jVc),226).e,150).b+0.05));rIb(this.H.n,this.I,this.b,null,false)};kW(1317,742,yOc,Rxc);_.Td=function Sxc(){QJb(this,jVc,new qOb((JOb(),vOb),new Tkb(1)));QJb(this,gVc,new qOb(DOb,new t8b))};var Txc;kW(1318,1,{},Yxc);_.Wd=function Zxc(){return fyc(),Wxc};_.Xd=function $xc(){return gyc(),Xxc};var Wxc,Xxc;kW(1319,1,{},ayc);_.uc=function byc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};kW(1320,1,{},dyc);_.uc=function eyc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var TO=Hkb(PTc,'MaterialsShaderMonjori$DemoScene',1178),aR=Hkb(ITc,'MonjoriShader',1317),_Q=Hkb(ITc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1318),ZQ=Hkb(ITc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1319),$Q=Hkb(ITc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1320);$Oc(Pj)(31);