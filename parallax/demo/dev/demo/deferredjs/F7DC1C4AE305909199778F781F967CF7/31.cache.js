function cvc(){}
function gvc(){}
function jvc(){}
function nmc(){F9b.call(this)}
function Xuc(){yIb.call(this,($uc(),Zuc))}
function $uc(){$uc=dKc;Zuc=new cvc}
function lvc(){lvc=dKc;avc=new gvc}
function mvc(){mvc=dKc;bvc=new jvc}
hU(1158,1,OLc);_.zb=function lmc(){f9b(this.b,new nmc(this.a))};hU(1159,971,LLc,nmc);_.Gd=function omc(a){i5b(Bu(Bu(NRb(this.b,fSc),225).d,297),a.a.Z);j5b(Bu(Bu(NRb(this.b,fSc),225).d,297),a.a.Y)};_.nb=function pmc(){var a,b;pt((Fxb(),Exb),(Pxb(),Oxb),this);this.a=new IPb;X5b(this.a._,1);a=new q2b(new Xuc);this.b=iZb(a).i;b=new x7b(new zWb(2,2),a);iPb(this.H,b);i5b(Bu(Bu(NRb(this.b,fSc),225).d,297),this.G.k.Z);j5b(Bu(Bu(NRb(this.b,fSc),225).d,297),this.G.k.Y)};_.ob=function qmc(a){MMb(Bu(NRb(this.b,iSc),225),new Mjb(Bu(Bu(NRb(this.b,iSc),225).d,150).a+0.05));NGb(this.G.k,this.H,this.a,null,false)};hU(1291,729,BLc,Xuc);_.Ld=function Yuc(){mIb(this,iSc,new OMb((fNb(),TMb),new Mjb(1)));mIb(this,fSc,new OMb(_Mb,new k5b))};var Zuc;hU(1292,1,{},cvc);_.Od=function dvc(){return lvc(),avc};_.Pd=function evc(){return mvc(),bvc};var avc,bvc;hU(1293,1,{},gvc);_.nc=function hvc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};hU(1294,1,{},jvc);_.nc=function kvc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var YM=Ajb(PQc,'MaterialsShaderMonjori$DemoScene',1159),$O=Ajb(IQc,'MonjoriShader',1291),ZO=Ajb(IQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1292),XO=Ajb(IQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1293),YO=Ajb(IQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1294);aMc(xi)(31);