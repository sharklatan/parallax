function ezc(){}
function izc(){}
function lzc(){}
function Rnc(){Kac.call(this)}
function Zyc(){IJb.call(this,(azc(),_yc))}
function nzc(){nzc=AQc;czc=new izc}
function ozc(){ozc=AQc;dzc=new lzc}
function azc(){azc=AQc;_yc=new ezc}
PU(1157,1,iSc);_.zb=function Pnc(){kac(this.b,new Rnc(this.a))};PU(1158,972,fSc,Rnc);_.Fd=function Snc(a){o6b(Au(Au(TSb(this.b,DYc),227).d,298),a.a.Z);p6b(Au(Au(TSb(this.b,DYc),227).d,298),a.a.Y)};_.nb=function Tnc(){var a,b;ot((iyb(),hyb),(syb(),ryb),this);this.a=new SQb;b7b(this.a._,1);a=new w3b(new Zyc);this.b=o$b(a).i;b=new D8b(new FXb(2,2),a);sQb(this.H,b);o6b(Au(Au(TSb(this.b,DYc),227).d,298),this.G.k.Z);p6b(Au(Au(TSb(this.b,DYc),227).d,298),this.G.k.Y)};_.ob=function Unc(a){WNb(Au(TSb(this.b,GYc),227),new pkb(Au(Au(TSb(this.b,GYc),227).d,150).a+0.05));XHb(this.G.k,this.H,this.a,null,false)};PU(1343,730,XRc,Zyc);_.Kd=function $yc(){wJb(this,GYc,new YNb((pOb(),bOb),new pkb(1)));wJb(this,DYc,new YNb(jOb,new q6b))};var _yc;PU(1344,1,{},ezc);_.Nd=function fzc(){return nzc(),czc};_.Od=function gzc(){return ozc(),dzc};var czc,dzc;PU(1345,1,{},izc);_.mc=function jzc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};PU(1346,1,{},lzc);_.mc=function mzc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var YM=dkb(kXc,'MaterialsShaderMonjori$DemoScene',1158),cP=dkb(dXc,'MonjoriShader',1343),bP=dkb(dXc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1344),_O=dkb(dXc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1345),aP=dkb(dXc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1346);wSc(xi)(31);