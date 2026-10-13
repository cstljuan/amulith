(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const mo="186",Cc=0,jo=1,Pc=2,cr=1,Ic=2,fs=3,hi=0,Xt=1,St=2,Fn=0,vs=1,vr=2,el=3,tl=4,Lc=5,zi=100,Dc=101,Uc=102,Nc=103,Fc=104,kc=200,Oc=201,Bc=202,zc=203,xh=204,yh=205,Gc=206,Hc=207,Wc=208,Vc=209,Xc=210,Yc=211,qc=212,Kc=213,$c=214,ba=0,wa=1,Ta=2,ys=3,Ea=4,Aa=5,Ra=6,Ca=7,go=0,Zc=1,Jc=2,wn=0,Mh=1,Sh=2,bh=3,wh=4,Th=5,Eh=6,vo=7,Ah=300,ci=301,qi=302,kr=303,Or=304,Ar=306,di=1e3,Un=1001,_r=1002,mt=1003,Qc=1004,ps=1005,bt=1006,Br=1007,Sn=1008,Vt=1009,Rh=1010,Ch=1011,Ms=1012,_o=1013,Tn=1014,cn=1015,un=1016,xo=1017,yo=1018,Ss=1020,Ph=35902,Ih=35899,Lh=1021,Dh=1022,nn=1023,Bn=1026,li=1027,Mo=1028,So=1029,ui=1030,bo=1031,wo=1033,dr=33776,ur=33777,fr=33778,pr=33779,Pa=35840,Ia=35841,La=35842,Da=35843,Ua=36196,Na=37492,Fa=37496,ka=37488,Oa=37489,xr=37490,Ba=37491,za=37808,Ga=37809,Ha=37810,Wa=37811,Va=37812,Xa=37813,Ya=37814,qa=37815,Ka=37816,$a=37817,Za=37818,Ja=37819,Qa=37820,ja=37821,eo=36492,to=36494,no=36495,io=36283,so=36284,yr=36285,ro=36286,jc=3200,ao=0,ed=1,Qn="",Pt="srgb",Mr="srgb-linear",Sr="linear",et="srgb",zr=7680,td=519,nd=512,id=513,sd=514,To=515,rd=516,ad=517,Eo=518,od=519,Uh=35044,nl="300 es",bn=2e3,bs=2001;function ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){const i=ws("canvas");return i.style.display="block",i}const il={};function br(...i){const e="THREE."+i.shift();console.log(e,...i)}function Nh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Nh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Nh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xi(...i){const e=i.join(" ");e in il||(il[e]=!0,Ie(...i))}function cd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const dd={[ba]:wa,[Ta]:Ra,[Ea]:Ca,[ys]:Aa,[wa]:ba,[Ra]:Ta,[Ca]:Ea,[Aa]:ys};class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const _s=Math.PI/180,Ts=180/Math.PI;function kn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Ao(i,e){return(i%e+e)%e}function ud(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function fd(i,e,t){return i!==e?(t-i)/(e-i):0}function xs(i,e,t){return(1-t)*i+t*e}function pd(i,e,t,n){return xs(i,e,1-Math.exp(-t*n))}function md(i,e=1){return e-Math.abs(Ao(i,e*2)-e)}function gd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _d(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xd(i,e){return i+Math.random()*(e-i)}function yd(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(sl=i);let e=sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sd(i){return i*_s}function bd(i){return i*Ts}function wd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Td(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ed(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ad(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),c=a((e-n)/2),p=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*c,o*h);break;case"YZY":i.set(l*c,o*d,l*u,o*h);break;case"ZXZ":i.set(l*u,l*c,o*d,o*h);break;case"XZX":i.set(o*d,l*v,l*p,o*h);break;case"YXY":i.set(l*p,o*d,l*v,o*h);break;case"ZYZ":i.set(l*v,l*p,o*d,o*h);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fi={DEG2RAD:_s,RAD2DEG:Ts,generateUUID:kn,clamp:Ve,euclideanModulo:Ao,mapLinear:ud,inverseLerp:fd,lerp:xs,damp:pd,pingpong:md,smoothstep:gd,smootherstep:vd,randInt:_d,randFloat:xd,randFloatSpread:yd,seededRandom:Md,degToRad:Sd,radToDeg:bd,isPowerOfTwo:wd,ceilPowerOfTwo:Td,floorPowerOfTwo:Ed,setQuaternionFromProperEuler:Ad,normalize:tt,denormalize:hn},Oo=class Oo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oo.prototype.isVector2=!0;let De=Oo;class Gn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],h=n[s+1],d=n[s+2],u=n[s+3],c=r[a+0],p=r[a+1],v=r[a+2],M=r[a+3];if(u!==M||l!==c||h!==p||d!==v){let m=l*c+h*p+d*v+u*M;m<0&&(c=-c,p=-p,v=-v,M=-M,m=-m);let f=1-o;if(m<.9995){const T=Math.acos(m),P=Math.sin(T);f=Math.sin(f*T)/P,o=Math.sin(o*T)/P,l=l*f+c*o,h=h*f+p*o,d=d*f+v*o,u=u*f+M*o}else{l=l*f+c*o,h=h*f+p*o,d=d*f+v*o,u=u*f+M*o;const T=1/Math.sqrt(l*l+h*h+d*d+u*u);l*=T,h*=T,d*=T,u*=T}}e[t]=l,e[t+1]=h,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a],c=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+d*u+l*p-h*c,e[t+1]=l*v+d*c+h*u-o*p,e[t+2]=h*v+d*p+o*c-l*u,e[t+3]=d*v-o*u-l*c-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(s/2),u=o(r/2),c=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=c*d*u+h*p*v,this._y=h*p*u-c*d*v,this._z=h*d*v+c*p*u,this._w=h*d*u-c*p*v;break;case"YXZ":this._x=c*d*u+h*p*v,this._y=h*p*u-c*d*v,this._z=h*d*v-c*p*u,this._w=h*d*u+c*p*v;break;case"ZXY":this._x=c*d*u-h*p*v,this._y=h*p*u+c*d*v,this._z=h*d*v+c*p*u,this._w=h*d*u-c*p*v;break;case"ZYX":this._x=c*d*u-h*p*v,this._y=h*p*u+c*d*v,this._z=h*d*v-c*p*u,this._w=h*d*u+c*p*v;break;case"YZX":this._x=c*d*u+h*p*v,this._y=h*p*u+c*d*v,this._z=h*d*v-c*p*u,this._w=h*d*u-c*p*v;break;case"XZY":this._x=c*d*u-h*p*v,this._y=h*p*u-c*d*v,this._z=h*d*v+c*p*u,this._w=h*d*u+c*p*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],d=t[6],u=t[10],c=n+o+u;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-h)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+h)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-h)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+h)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,d=t._w;return this._x=n*d+a*o+s*h-r*l,this._y=s*d+a*l+r*o-n*h,this._z=r*d+a*h+n*l-s*o,this._w=a*d-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const h=Math.acos(o),d=Math.sin(h);l=Math.sin(l*h)/d,t=Math.sin(t*h)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bo=class Bo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*h+a*u-o*d,this.y=n+l*d+o*h-r*u,this.z=s+l*u+r*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gr.copy(this).projectOnVector(e),this.sub(Gr)}reflect(e){return this.sub(Gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bo.prototype.isVector3=!0;let z=Bo;const Gr=new z,rl=new Gn,zo=class zo{constructor(e,t,n,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,h)}set(e,t,n,s,r,a,o,l,h){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],u=n[7],c=n[2],p=n[5],v=n[8],M=s[0],m=s[3],f=s[6],T=s[1],P=s[4],y=s[7],S=s[2],b=s[5],C=s[8];return r[0]=a*M+o*T+l*S,r[3]=a*m+o*P+l*b,r[6]=a*f+o*y+l*C,r[1]=h*M+d*T+u*S,r[4]=h*m+d*P+u*b,r[7]=h*f+d*y+u*C,r[2]=c*M+p*T+v*S,r[5]=c*m+p*P+v*b,r[8]=c*f+p*y+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8];return t*a*d-t*o*h-n*r*d+n*o*l+s*r*h-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],u=d*a-o*h,c=o*l-d*r,p=h*r-a*l,v=t*u+n*c+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=u*M,e[1]=(s*h-d*n)*M,e[2]=(o*n-s*a)*M,e[3]=c*M,e[4]=(d*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-h*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hr.makeScale(e,t)),this}rotate(e){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hr.makeRotation(-e)),this}translate(e,t){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zo.prototype.isMatrix3=!0;let Ne=zo;const Hr=new Ne,al=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rd(){const i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:e,whitePoint:n,transfer:Sr,toXYZ:al,fromXYZ:ol,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:al,fromXYZ:ol,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}const Ye=Rd();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xi;class Cd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xi===void 0&&(xi=ws("canvas")),xi.width=e.width,xi.height=e.height;const s=xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pd=0;class Ro{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wr(s[a].image)):r.push(Wr(s[a]))}else r=Wr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Id=0;const Vr=new z;class Dt extends pi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Un,s=Un,r=bt,a=Sn,o=nn,l=Vt,h=Dt.DEFAULT_ANISOTROPY,d=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=kn(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vr).x}get height(){return this.source.getSize(Vr).y}get depth(){return this.source.getSize(Vr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Ah;Dt.DEFAULT_ANISOTROPY=1;const Go=class Go{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,h=l[0],d=l[4],u=l[8],c=l[1],p=l[5],v=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(d-c)<.01&&Math.abs(u-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+c)<.1&&Math.abs(u+M)<.1&&Math.abs(v+m)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,y=(p+1)/2,S=(f+1)/2,b=(d+c)/4,C=(u+M)/4,_=(v+m)/4;return P>y&&P>S?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=b/n,r=C/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=_/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-v)*(m-v)+(u-M)*(u-M)+(c-d)*(c-d));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(u-M)/T,this.z=(c-d)/T,this.w=Math.acos((h+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Go.prototype.isVector4=!0;let pt=Go;class Ld extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Dt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ro(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends Ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fh extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Er=class Er{constructor(e,t,n,s,r,a,o,l,h,d,u,c,p,v,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,h,d,u,c,p,v,M,m)}set(e,t,n,s,r,a,o,l,h,d,u,c,p,v,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=h,f[6]=d,f[10]=u,f[14]=c,f[3]=p,f[7]=v,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Er().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/yi.setFromMatrixColumn(e,0).length(),r=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const c=a*d,p=a*u,v=o*d,M=o*u;t[0]=l*d,t[4]=-l*u,t[8]=h,t[1]=p+v*h,t[5]=c-M*h,t[9]=-o*l,t[2]=M-c*h,t[6]=v+p*h,t[10]=a*l}else if(e.order==="YXZ"){const c=l*d,p=l*u,v=h*d,M=h*u;t[0]=c+M*o,t[4]=v*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-v,t[6]=M+c*o,t[10]=a*l}else if(e.order==="ZXY"){const c=l*d,p=l*u,v=h*d,M=h*u;t[0]=c-M*o,t[4]=-a*u,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*d,t[9]=M-c*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const c=a*d,p=a*u,v=o*d,M=o*u;t[0]=l*d,t[4]=v*h-p,t[8]=c*h+M,t[1]=l*u,t[5]=M*h+c,t[9]=p*h-v,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const c=a*l,p=a*h,v=o*l,M=o*h;t[0]=l*d,t[4]=M-c*u,t[8]=v*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-h*d,t[6]=p*u+v,t[10]=c-M*u}else if(e.order==="XZY"){const c=a*l,p=a*h,v=o*l,M=o*h;t[0]=l*d,t[4]=-u,t[8]=h*d,t[1]=c*u+M,t[5]=a*d,t[9]=p*u-v,t[2]=v*u-p,t[6]=o*d,t[10]=M*u+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ud,e,Nd)}lookAt(e,t,n){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Xn.crossVectors(n,Yt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Xn.crossVectors(n,Yt)),Xn.normalize(),Is.crossVectors(Yt,Xn),s[0]=Xn.x,s[4]=Is.x,s[8]=Yt.x,s[1]=Xn.y,s[5]=Is.y,s[9]=Yt.y,s[2]=Xn.z,s[6]=Is.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],u=n[5],c=n[9],p=n[13],v=n[2],M=n[6],m=n[10],f=n[14],T=n[3],P=n[7],y=n[11],S=n[15],b=s[0],C=s[4],_=s[8],E=s[12],R=s[1],I=s[5],D=s[9],B=s[13],L=s[2],G=s[6],A=s[10],U=s[14],Y=s[3],X=s[7],$=s[11],ee=s[15];return r[0]=a*b+o*R+l*L+h*Y,r[4]=a*C+o*I+l*G+h*X,r[8]=a*_+o*D+l*A+h*$,r[12]=a*E+o*B+l*U+h*ee,r[1]=d*b+u*R+c*L+p*Y,r[5]=d*C+u*I+c*G+p*X,r[9]=d*_+u*D+c*A+p*$,r[13]=d*E+u*B+c*U+p*ee,r[2]=v*b+M*R+m*L+f*Y,r[6]=v*C+M*I+m*G+f*X,r[10]=v*_+M*D+m*A+f*$,r[14]=v*E+M*B+m*U+f*ee,r[3]=T*b+P*R+y*L+S*Y,r[7]=T*C+P*I+y*G+S*X,r[11]=T*_+P*D+y*A+S*$,r[15]=T*E+P*B+y*U+S*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],d=e[2],u=e[6],c=e[10],p=e[14],v=e[3],M=e[7],m=e[11],f=e[15],T=l*p-h*c,P=o*p-h*u,y=o*c-l*u,S=a*p-h*d,b=a*c-l*d,C=a*u-o*d;return t*(M*T-m*P+f*y)-n*(v*T-m*S+f*b)+s*(v*P-M*S+f*C)-r*(v*y-M*b+m*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],h=e[6],d=e[10];return t*(a*d-o*h)-n*(r*d-o*l)+s*(r*h-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],u=e[9],c=e[10],p=e[11],v=e[12],M=e[13],m=e[14],f=e[15],T=t*o-n*a,P=t*l-s*a,y=t*h-r*a,S=n*l-s*o,b=n*h-r*o,C=s*h-r*l,_=d*M-u*v,E=d*m-c*v,R=d*f-p*v,I=u*m-c*M,D=u*f-p*M,B=c*f-p*m,L=T*B-P*D+y*I+S*R-b*E+C*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(o*B-l*D+h*I)*G,e[1]=(s*D-n*B-r*I)*G,e[2]=(M*C-m*b+f*S)*G,e[3]=(c*b-u*C-p*S)*G,e[4]=(l*R-a*B-h*E)*G,e[5]=(t*B-s*R+r*E)*G,e[6]=(m*y-v*C-f*P)*G,e[7]=(d*C-c*y+p*P)*G,e[8]=(a*D-o*R+h*_)*G,e[9]=(n*R-t*D-r*_)*G,e[10]=(v*b-M*y+f*T)*G,e[11]=(u*y-d*b-p*T)*G,e[12]=(o*E-a*I-l*_)*G,e[13]=(t*I-n*E+s*_)*G,e[14]=(M*P-v*S-m*T)*G,e[15]=(d*S-u*P+c*T)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,d*o+n,d*l-s*a,0,h*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,d=a+a,u=o+o,c=r*h,p=r*d,v=r*u,M=a*d,m=a*u,f=o*u,T=l*h,P=l*d,y=l*u,S=n.x,b=n.y,C=n.z;return s[0]=(1-(M+f))*S,s[1]=(p+y)*S,s[2]=(v-P)*S,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(c+f))*b,s[6]=(m+T)*b,s[7]=0,s[8]=(v+P)*C,s[9]=(m-T)*C,s[10]=(1-(c+M))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=yi.set(s[0],s[1],s[2]).length();const o=yi.set(s[4],s[5],s[6]).length(),l=yi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);const h=1/a,d=1/o,u=1/l;return an.elements[0]*=h,an.elements[1]*=h,an.elements[2]*=h,an.elements[4]*=d,an.elements[5]*=d,an.elements[6]*=d,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=bn,l=!1){const h=this.elements,d=2*r/(t-e),u=2*r/(n-s),c=(t+e)/(t-e),p=(n+s)/(n-s);let v,M;if(l)v=r/(a-r),M=a*r/(a-r);else if(o===bn)v=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===bs)v=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=u,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=bn,l=!1){const h=this.elements,d=2/(t-e),u=2/(n-s),c=-(t+e)/(t-e),p=-(n+s)/(n-s);let v,M;if(l)v=1/(a-r),M=a/(a-r);else if(o===bn)v=-2/(a-r),M=-(a+r)/(a-r);else if(o===bs)v=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=u,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=v,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Er.prototype.isMatrix4=!0;let je=Er;const yi=new z,an=new je,Ud=new z(0,0,0),Nd=new z(1,1,1),Xn=new z,Is=new z,Yt=new z,ll=new je,hl=new Gn;class fn{constructor(e=0,t=0,n=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],d=s[9],u=s[2],c=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hl.setFromEuler(this),this.setFromQuaternion(hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class kh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fd=0;const cl=new z,Mi=new Gn,An=new je,Ls=new z,Qi=new z,kd=new z,Od=new Gn,dl=new z(1,0,0),ul=new z(0,1,0),fl=new z(0,0,1),pl={type:"added"},Bd={type:"removed"},Si={type:"childadded",child:null},Xr={type:"childremoved",child:null};class wt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new z,t=new fn,n=new Gn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ne}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(dl,e)}rotateY(e){return this.rotateOnAxis(ul,e)}rotateZ(e){return this.rotateOnAxis(fl,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dl,e)}translateY(e){return this.translateOnAxis(ul,e)}translateZ(e){return this.translateOnAxis(fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ls.copy(e):Ls.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Qi,Ls,this.up):An.lookAt(Ls,Qi,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(An),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pl),Si.child=e,this.dispatchEvent(Si),Si.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bd),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pl),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),d=a(e.images),u=a(e.shapes),c=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),c.length>0&&(n.skeletons=c),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wt.DEFAULT_UP=new z(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class It extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zd={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),f=this._getHandJoint(h,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],c=d.position.distanceTo(u.position),p=.02,v=.005;h.inputState.pinching&&c>p+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&c<=p-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function qr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Ao(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qr(a,r,e+1/3),this.g=qr(a,r,e),this.b=qr(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ye.workingToColorSpace(kt.copy(this),e),Math.round(Ve(kt.r*255,0,255))*65536+Math.round(Ve(kt.g*255,0,255))*256+Math.round(Ve(kt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,r=kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Pt){Ye.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Ds);const n=xs(Yn.h,Ds.h,t),s=xs(Yn.s,Ds.s,t),r=xs(Yn.l,Ds.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ue;Ue.NAMES=Oh;class Co{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new Co(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bh extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const on=new z,Rn=new z,Kr=new z,Cn=new z,bi=new z,wi=new z,ml=new z,$r=new z,Zr=new z,Jr=new z,Qr=new pt,jr=new pt,ea=new pt;class en{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Rn.subVectors(n,t),Kr.subVectors(e,t);const a=on.dot(on),o=on.dot(Rn),l=on.dot(Kr),h=Rn.dot(Rn),d=Rn.dot(Kr),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const c=1/u,p=(h*l-o*d)*c,v=(a*d-o*l)*c;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Qr.setScalar(0),jr.setScalar(0),ea.setScalar(0),Qr.fromBufferAttribute(e,t),jr.fromBufferAttribute(e,n),ea.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qr,r.x),a.addScaledVector(jr,r.y),a.addScaledVector(ea,r.z),a}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Rn.subVectors(e,t),on.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;bi.subVectors(s,n),wi.subVectors(r,n),$r.subVectors(e,n);const l=bi.dot($r),h=wi.dot($r);if(l<=0&&h<=0)return t.copy(n);Zr.subVectors(e,s);const d=bi.dot(Zr),u=wi.dot(Zr);if(d>=0&&u<=d)return t.copy(s);const c=l*u-d*h;if(c<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(bi,a);Jr.subVectors(e,r);const p=bi.dot(Jr),v=wi.dot(Jr);if(v>=0&&p<=v)return t.copy(r);const M=p*h-l*v;if(M<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(wi,o);const m=d*v-p*u;if(m<=0&&u-d>=0&&p-v>=0)return ml.subVectors(r,s),o=(u-d)/(u-d+(p-v)),t.copy(s).addScaledVector(ml,o);const f=1/(m+M+c);return a=M*f,o=c*f,t.copy(n).addScaledVector(bi,a).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),Ns.subVectors(this.max,ji),Ti.subVectors(e.a,ji),Ei.subVectors(e.b,ji),Ai.subVectors(e.c,ji),qn.subVectors(Ei,Ti),Kn.subVectors(Ai,Ei),ti.subVectors(Ti,Ai);let t=[0,-qn.z,qn.y,0,-Kn.z,Kn.y,0,-ti.z,ti.y,qn.z,0,-qn.x,Kn.z,0,-Kn.x,ti.z,0,-ti.x,-qn.y,qn.x,0,-Kn.y,Kn.x,0,-ti.y,ti.x,0];return!ta(t,Ti,Ei,Ai,Ns)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,Ti,Ei,Ai,Ns))?!1:(Fs.crossVectors(qn,Kn),t=[Fs.x,Fs.y,Fs.z],ta(t,Ti,Ei,Ai,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new z,new z,new z,new z,new z,new z,new z,new z],ln=new z,Us=new mi,Ti=new z,Ei=new z,Ai=new z,qn=new z,Kn=new z,ti=new z,ji=new z,Ns=new z,Fs=new z,ni=new z;function ta(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);const o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=e.dot(ni),h=t.dot(ni),d=n.dot(ni);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const Mt=new z,ks=new De;let Gd=0;class Lt extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uh,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zh extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gh extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hd=new mi,es=new z,na=new z;class $i{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(na)),this.expandByPoint(es.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Wd=0;const Qt=new je,ia=new wt,Ri=new z,qt=new mi,ts=new mi,At=new z;class Bt extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?Gh:zh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(qt.min,ts.min),qt.expandByPoint(At),At.addVectors(qt.max,ts.max),qt.expandByPoint(At)):(qt.expandByPoint(ts.min),qt.expandByPoint(ts.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)At.fromBufferAttribute(o,h),l&&(Ri.fromBufferAttribute(e,h),At.add(Ri)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new z,l[_]=new z;const h=new z,d=new z,u=new z,c=new De,p=new De,v=new De,M=new z,m=new z;function f(_,E,R){h.fromBufferAttribute(n,_),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),c.fromBufferAttribute(r,_),p.fromBufferAttribute(r,E),v.fromBufferAttribute(r,R),d.sub(h),u.sub(h),p.sub(c),v.sub(c);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(M.copy(d).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(I),o[_].add(M),o[E].add(M),o[R].add(M),l[_].add(m),l[E].add(m),l[R].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let _=0,E=T.length;_<E;++_){const R=T[_],I=R.start,D=R.count;for(let B=I,L=I+D;B<L;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const P=new z,y=new z,S=new z,b=new z;function C(_){S.fromBufferAttribute(s,_),b.copy(S);const E=o[_];P.copy(E),P.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(b,E);const I=y.dot(l[_])<0?-1:1;a.setXYZW(_,P.x,P.y,P.z,I)}for(let _=0,E=T.length;_<E;++_){const R=T[_],I=R.start,D=R.count;for(let B=I,L=I+D;B<L;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,p=n.count;c<p;c++)n.setXYZ(c,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,h=new z,d=new z,u=new z;if(e)for(let c=0,p=e.count;c<p;c+=3){const v=e.getX(c+0),M=e.getX(c+1),m=e.getX(c+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,m),o.add(d),l.add(d),h.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,p=t.count;c<p;c+=3)s.fromBufferAttribute(t,c+0),r.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const h=o.array,d=o.itemSize,u=o.normalized,c=new h.constructor(l.length*d);let p=0,v=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let f=0;f<d;f++)c[v++]=h[p++]}return new Lt(c,d,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=e(l,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let d=0,u=h.length;d<u;d++){const c=h[d],p=e(c,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let u=0,c=h.length;u<c;u++){const p=h[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(t))}const r=e.morphAttributes;for(const h in r){const d=[],u=r[h];for(let c=0,p=u.length;c<p;c++)d.push(u[c].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uh,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Ht=new z;class wr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sa=new z,Xd=new z,Yd=new Ne;class Jn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=sa.subVectors(n,t).cross(Xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(sa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yd.getNormalMatrix(e),s=this.coplanarPoint(sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qd=0;class gi extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=vs,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=yh,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new De().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hh extends gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ci;const ns=new z,Pi=new z,Ii=new z,Li=new De,is=new De,Wh=new je,Os=new z,ss=new z,Bs=new z,gl=new De,ra=new De,vl=new De;class _l extends wt{constructor(e=new Hh){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new Bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vd(t,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new wr(n,3,0,!1)),Ci.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=Ci,this.material=e,this.center=new De(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),Wh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ii.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Ii.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;zs(Os.set(-.5,-.5,0),Ii,a,Pi,s,r),zs(ss.set(.5,-.5,0),Ii,a,Pi,s,r),zs(Bs.set(.5,.5,0),Ii,a,Pi,s,r),gl.set(0,0),ra.set(1,0),vl.set(1,1);let o=e.ray.intersectTriangle(Os,ss,Bs,!1,ns);if(o===null&&(zs(ss.set(-.5,.5,0),Ii,a,Pi,s,r),ra.set(0,1),o=e.ray.intersectTriangle(Os,Bs,ss,!1,ns),o===null))return;const l=e.ray.origin.distanceTo(ns);l<e.near||l>e.far||t.push({distance:l,point:ns.clone(),uv:en.getInterpolation(ns,Os,ss,Bs,gl,ra,vl,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zs(i,e,t,n,s,r){Li.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(is.x=r*Li.x-s*Li.y,is.y=s*Li.x+r*Li.y):is.copy(Li),i.copy(e),i.x+=is.x,i.y+=is.y,i.applyMatrix4(Wh)}const In=new z,aa=new z,Gs=new z,Hs=new z;class Vh{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){aa.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),Hs.copy(this.origin).sub(aa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Gs),o=Hs.dot(this.direction),l=-Hs.dot(Gs),h=Hs.lengthSq(),d=Math.abs(1-a*a);let u,c,p,v;if(d>0)if(u=a*l-o,c=a*o-l,v=r*d,u>=0)if(c>=-v)if(c<=v){const M=1/d;u*=M,c*=M,p=u*(u+a*c+2*o)+c*(a*u+c+2*l)+h}else c=r,u=Math.max(0,-(a*c+o)),p=-u*u+c*(c+2*l)+h;else c=-r,u=Math.max(0,-(a*c+o)),p=-u*u+c*(c+2*l)+h;else c<=-v?(u=Math.max(0,-(-a*r+o)),c=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+c*(c+2*l)+h):c<=v?(u=0,c=Math.min(Math.max(-r,-l),r),p=c*(c+2*l)+h):(u=Math.max(0,-(a*r+o)),c=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+c*(c+2*l)+h);else c=a>0?-r:r,u=Math.max(0,-(a*c+o)),p=-u*u+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(aa).addScaledVector(Gs,c),p}intersectSphere(e,t){if(e.radius<0)return null;In.subVectors(e.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,c=this.origin;return h>=0?(n=(e.min.x-c.x)*h,s=(e.max.x-c.x)*h):(n=(e.max.x-c.x)*h,s=(e.min.x-c.x)*h),d>=0?(r=(e.min.y-c.y)*d,a=(e.max.y-c.y)*d):(r=(e.max.y-c.y)*d,a=(e.min.y-c.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-c.z)*u,l=(e.max.z-c.z)*u):(o=(e.max.z-c.z)*u,l=(e.min.z-c.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,h=o.y,d=o.z,u=e.x-a.x,c=e.y-a.y,p=e.z-a.z,v=t.x-a.x,M=t.y-a.y,m=t.z-a.z,f=n.x-a.x,T=n.y-a.y,P=n.z-a.z,y=Math.abs(l),S=Math.abs(h),b=Math.abs(d);let C,_,E,R,I,D,B,L,G,A,U,Y;if(y>=S&&y>=b?(E=l,D=u,G=v,Y=f,l>=0?(C=h,_=d,R=c,I=p,B=M,L=m,A=T,U=P):(C=d,_=h,R=p,I=c,B=m,L=M,A=P,U=T)):S>=b?(E=h,D=c,G=M,Y=T,h>=0?(C=d,_=l,R=p,I=u,B=m,L=v,A=P,U=f):(C=l,_=d,R=u,I=p,B=v,L=m,A=f,U=P)):(E=d,D=p,G=m,Y=P,d>=0?(C=l,_=h,R=u,I=c,B=v,L=M,A=f,U=T):(C=h,_=l,R=c,I=u,B=M,L=v,A=T,U=f)),E===0)return null;const X=C/E,$=_/E,ee=1/E,Me=R-X*D,me=I-$*D,qe=B-X*G,Be=L-$*G,Ke=A-X*Y,Z=U-$*Y,te=Ke*Be-Z*qe,xe=Me*Z-me*Ke,Le=qe*me-Be*Me;if(s){if(te<0||xe<0||Le<0)return null}else if((te<0||xe<0||Le<0)&&(te>0||xe>0||Le>0))return null;const ge=te+xe+Le;if(ge===0)return null;const Oe=ee*(te*D+xe*G+Le*Y);return(ge>0?Oe<0:Oe>0)?null:this.at(Oe/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zn extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xl=new je,ii=new Vh,Ws=new $i,yl=new z,Vs=new z,Xs=new z,Ys=new z,oa=new z,qs=new z,Ml=new z,Ks=new z;class lt extends wt{constructor(e=new Bt,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=o[l],u=r[l];d!==0&&(oa.fromBufferAttribute(u,e),a?qs.addScaledVector(oa,d):qs.addScaledVector(oa.sub(t),d))}t.add(qs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(Ws.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ws,yl)===null||ii.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(xl.copy(r).invert(),ii.copy(e.ray).applyMatrix4(xl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,c=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=c.length;v<M;v++){const m=c[v],f=a[m.materialIndex],T=Math.max(m.start,p.start),P=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,S=P;y<S;y+=3){const b=o.getX(y),C=o.getX(y+1),_=o.getX(y+2);s=$s(this,f,e,n,h,d,u,b,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=v,f=M;m<f;m+=3){const T=o.getX(m),P=o.getX(m+1),y=o.getX(m+2);s=$s(this,a,e,n,h,d,u,T,P,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=c.length;v<M;v++){const m=c[v],f=a[m.materialIndex],T=Math.max(m.start,p.start),P=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,S=P;y<S;y+=3){const b=y,C=y+1,_=y+2;s=$s(this,f,e,n,h,d,u,b,C,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=v,f=M;m<f;m+=3){const T=m,P=m+1,y=m+2;s=$s(this,a,e,n,h,d,u,T,P,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Kd(i,e,t,n,s,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===hi,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Ks);return h<t.near||h>t.far?null:{distance:h,point:Ks.clone(),object:i}}function $s(i,e,t,n,s,r,a,o,l,h){i.getVertexPosition(o,Vs),i.getVertexPosition(l,Xs),i.getVertexPosition(h,Ys);const d=Kd(i,e,t,n,Vs,Xs,Ys,Ml);if(d){const u=new z;en.getBarycoord(Ml,Vs,Xs,Ys,u),s&&(d.uv=en.getInterpolatedAttribute(s,o,l,h,u,new De)),r&&(d.uv1=en.getInterpolatedAttribute(r,o,l,h,u,new De)),a&&(d.normal=en.getInterpolatedAttribute(a,o,l,h,u,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new z,materialIndex:0};en.getNormal(Vs,Xs,Ys,c.normal),d.face=c,d.barycoord=u}return d}class Po extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,l,h=mt,d=mt,u,c){super(null,a,o,l,h,d,s,r,u,c),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl extends Lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new je,bl=new je,Zs=[],wl=new mi,$d=new je,rs=new lt,as=new $i;class Es extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$d)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),wl.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(wl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),as.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(as)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),e.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),bl.multiplyMatrices(n,Di),rs.matrixWorld=bl,rs.raycast(e,Zs);for(let a=0,o=Zs.length;a<o;a++){const l=Zs[a];l.instanceId=r,l.object=this,t.push(l)}Zs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Po(new Float32Array(s*this.count),s,this.count,Mo,cn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const si=new $i,Zd=new De(.5,.5),Js=new z;class Io{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],h=r[3],d=r[4],u=r[5],c=r[6],p=r[7],v=r[8],M=r[9],m=r[10],f=r[11],T=r[12],P=r[13],y=r[14],S=r[15];if(s[0].setComponents(h-a,p-d,f-v,S-T).normalize(),s[1].setComponents(h+a,p+d,f+v,S+T).normalize(),s[2].setComponents(h+o,p+u,f+M,S+P).normalize(),s[3].setComponents(h-o,p-u,f-M,S-P).normalize(),n)s[4].setComponents(l,c,m,y).normalize(),s[5].setComponents(h-l,p-c,f-m,S-y).normalize();else if(s[4].setComponents(h-l,p-c,f-m,S-y).normalize(),t===bn)s[5].setComponents(h+l,p+c,f+m,S+y).normalize();else if(t===bs)s[5].setComponents(l,c,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);const t=Zd.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jd extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tl=new je,oo=new Vh,Qs=new $i,js=new z;class Xh extends wt{constructor(e=new Bt,t=new Jd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,e.ray.intersectsSphere(Qs)===!1)return;Tl.copy(s).invert(),oo.copy(e.ray).applyMatrix4(Tl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,u=n.attributes.position;if(h!==null){const c=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=c,M=p;v<M;v++){const m=h.getX(v);js.fromBufferAttribute(u,m),El(js,m,l,s,e,t,this)}}else{const c=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=c,M=p;v<M;v++)js.fromBufferAttribute(u,v),El(js,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function El(i,e,t,n,s,r,a){const o=oo.distanceSqToPoint(i);if(o<t){const l=new z;oo.closestPointToPoint(i,l),l.applyMatrix4(n);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Yh extends Dt{constructor(e=[],t=ci,n,s,r,a,o,l,h,d){super(e,t,n,s,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zi extends Dt{constructor(e,t,n,s,r,a,o,l,h){super(e,t,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class As extends Dt{constructor(e,t,n=Tn,s,r,a,o=mt,l=mt,h,d=Bn,u=1){if(d!==Bn&&d!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:t,depth:u};super(c,s,r,a,o,l,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ro(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Qd extends As{constructor(e,t=Tn,n=ci,s,r,a=mt,o=mt,l,h=Bn){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qh extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rs extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],d=[],u=[];let c=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(u,2));function v(M,m,f,T,P,y,S,b,C,_,E){const R=y/C,I=S/_,D=y/2,B=S/2,L=b/2,G=C+1,A=_+1;let U=0,Y=0;const X=new z;for(let $=0;$<A;$++){const ee=$*I-B;for(let Me=0;Me<G;Me++){const me=Me*R-D;X[M]=me*T,X[m]=ee*P,X[f]=L,h.push(X.x,X.y,X.z),X[M]=0,X[m]=0,X[f]=b>0?1:-1,d.push(X.x,X.y,X.z),u.push(Me/C),u.push(1-$/_),U+=1}}for(let $=0;$<_;$++)for(let ee=0;ee<C;ee++){const Me=c+ee+G*$,me=c+ee+G*($+1),qe=c+(ee+1)+G*($+1),Be=c+(ee+1)+G*$;l.push(Me,me,Be),l.push(me,qe,Be),Y+=6}o.addGroup(p,Y,E),p+=Y,c+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rr extends Bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],h=new z,d=new De;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,c=3;u<=t;u++,c+=3){const p=n+u/t*s;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),d.x=(a[c]/e+1)/2,d.y=(a[c+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(o,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Lo extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],c=[],p=[];let v=0;const M=[],m=n/2;let f=0;T(),a===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(d),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(p,2));function T(){const y=new z,S=new z;let b=0;const C=(t-e)/n;for(let _=0;_<=r;_++){const E=[],R=_/r,I=R*(t-e)+e;for(let D=0;D<=s;D++){const B=D/s,L=B*l+o,G=Math.sin(L),A=Math.cos(L);S.x=I*G,S.y=-R*n+m,S.z=I*A,u.push(S.x,S.y,S.z),y.set(G,C,A).normalize(),c.push(y.x,y.y,y.z),p.push(B,1-R),E.push(v++)}M.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const R=M[E][_],I=M[E+1][_],D=M[E+1][_+1],B=M[E][_+1];(e>0||E!==0)&&(d.push(R,I,B),b+=3),(t>0||E!==r-1)&&(d.push(I,D,B),b+=3)}h.addGroup(f,b,0),f+=b}function P(y){const S=v,b=new De,C=new z;let _=0;const E=y===!0?e:t,R=y===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*R,0),c.push(0,R,0),p.push(.5,.5),v++;const I=v;for(let D=0;D<=s;D++){const L=D/s*l+o,G=Math.cos(L),A=Math.sin(L);C.x=E*A,C.y=m*R,C.z=E*G,u.push(C.x,C.y,C.z),c.push(0,R,0),b.x=G*.5+.5,b.y=A*.5*R+.5,p.push(b.x,b.y),v++}for(let D=0;D<s;D++){const B=S+D,L=I+D;y===!0?d.push(L,L+1,B):d.push(L+1,L,B),_+=3}h.addGroup(f,_,y===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ct extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),h=o+1,d=l+1,u=e/o,c=t/l,p=[],v=[],M=[],m=[];for(let f=0;f<d;f++){const T=f*c-a;for(let P=0;P<h;P++){const y=P*u-r;v.push(y,-T,0),M.push(0,0,1),m.push(P/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const P=T+h*f,y=T+h*(f+1),S=T+1+h*(f+1),b=T+1+h*f;p.push(P,y,b),p.push(y,S,b)}this.setIndex(p),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(M,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.width,e.height,e.widthSegments,e.heightSegments)}}class Do extends Bt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],h=[],d=[];let u=e;const c=(t-e)/s,p=new z,v=new De;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,d.push(v.x,v.y)}u+=c}for(let M=0;M<s;M++){const m=M*(n+1);for(let f=0;f<n;f++){const T=f+m,P=T,y=T+n+1,S=T+n+2,b=T+1;o.push(P,y,b),o.push(y,S,b)}}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Ki(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Al(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Al(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=Ki(i[t]);for(const s in n)e[s]=n[s]}return e}function Al(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const eu={clone:Ki,merge:Wt};var tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tu,this.fragmentShader=nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new De().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class iu extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dn extends gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=go,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class su extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ru extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const la={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Rl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Rl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Rl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class au{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return h.push(d,u),this},this.removeHandler=function(d){const u=h.indexOf(d);return u!==-1&&h.splice(u,2),this},this.getHandler=function(d){for(let u=0,c=h.length;u<c;u+=2){const p=h[u],v=h[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ou=new au;class Uo{constructor(e){this.manager=e!==void 0?e:ou,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui=new WeakMap;class lu extends Uo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=la.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ui.get(a);u===void 0&&(u=[],Ui.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=ws("img");function l(){d(),t&&t(this);const u=Ui.get(this)||[];for(let c=0;c<u.length;c++){const p=u[c];p.onLoad&&p.onLoad(this)}Ui.delete(this),r.manager.itemEnd(e)}function h(u){d(),s&&s(u),la.remove(`image:${e}`);const c=Ui.get(this)||[];for(let p=0;p<c.length;p++){const v=c[p];v.onError&&v.onError(u)}Ui.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),la.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class hu extends Uo{constructor(e){super(e)}load(e,t,n,s){const r=new Dt,a=new lu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Cr extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class cu extends Cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ha=new je,Cl=new z,Pl=new z;class $h{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cl),Pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ha,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===bs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const er=new z,tr=new Gn,gn=new z;class Zh extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(er,tr,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,tr,gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(er,tr,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,tr,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new z,Il=new De,Ll=new De;class $t extends Zh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Il,Ll),t.subVectors(Ll,Il)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class du extends $h{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}}class uu extends Cr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Pr extends Zh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fu extends $h{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jh extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new fu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class pu extends Cr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ni=-90,Fi=1;class mu extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $t(Ni,Fi,e,t);s.layers=this.layers,this.add(s);const r=new $t(Ni,Fi,e,t);r.layers=this.layers,this.add(r);const a=new $t(Ni,Fi,e,t);a.layers=this.layers,this.add(a);const o=new $t(Ni,Fi,e,t);o.layers=this.layers,this.add(o);const l=new $t(Ni,Fi,e,t);l.layers=this.layers,this.add(l);const h=new $t(Ni,Fi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const h of t)this.remove(h);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,d]=this.children,u=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,c,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class gu extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ho=class Ho{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ho.prototype.isMatrix2=!0;let Dl=Ho;function Ul(i,e,t,n){const s=vu(n);switch(t){case Lh:return i*e;case Mo:return i*e/s.components*s.byteLength;case So:return i*e/s.components*s.byteLength;case ui:return i*e*2/s.components*s.byteLength;case bo:return i*e*2/s.components*s.byteLength;case Dh:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case wo:return i*e*4/s.components*s.byteLength;case dr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:case Da:return Math.max(i,16)*Math.max(e,8)/4;case Pa:case La:return Math.max(i,8)*Math.max(e,8)/2;case Ua:case Na:case ka:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fa:case xr:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eo:case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16;case io:case so:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yr:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vu(i){switch(i){case Vt:case Rh:return{byteLength:1,components:1};case Ms:case Ch:case un:return{byteLength:2,components:1};case xo:case yo:return{byteLength:2,components:4};case Tn:case _o:case cn:return{byteLength:4,components:1};case Ph:case Ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);function Qh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _u(i){const e=new WeakMap;function t(o,l){const h=o.array,d=o.usage,u=h.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,h,d),o.onUploadCallback();let p;if(h instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=i.SHORT;else if(h instanceof Uint32Array)p=i.UNSIGNED_INT;else if(h instanceof Int32Array)p=i.INT;else if(h instanceof Int8Array)p=i.BYTE;else if(h instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,h){const d=l.array,u=l.updateRanges;if(i.bindBuffer(h,o),u.length===0)i.bufferSubData(h,0,d);else{u.sort((p,v)=>p.start-v.start);let c=0;for(let p=1;p<u.length;p++){const v=u[c],M=u[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++c,u[c]=M)}u.length=c+1;for(let p=0,v=u.length;p<v;p++){const M=u[p];i.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Au=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ru=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ou=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,of=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,uf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_f=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,op=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:xu,alphahash_pars_fragment:yu,alphamap_fragment:Mu,alphamap_pars_fragment:Su,alphatest_fragment:bu,alphatest_pars_fragment:wu,aomap_fragment:Tu,aomap_pars_fragment:Eu,batching_pars_vertex:Au,batching_vertex:Ru,begin_vertex:Cu,beginnormal_vertex:Pu,bsdfs:Iu,iridescence_fragment:Lu,bumpmap_pars_fragment:Du,clipping_planes_fragment:Uu,clipping_planes_pars_fragment:Nu,clipping_planes_pars_vertex:Fu,clipping_planes_vertex:ku,color_fragment:Ou,color_pars_fragment:Bu,color_pars_vertex:zu,color_vertex:Gu,common:Hu,cube_uv_reflection_fragment:Wu,defaultnormal_vertex:Vu,displacementmap_pars_vertex:Xu,displacementmap_vertex:Yu,emissivemap_fragment:qu,emissivemap_pars_fragment:Ku,colorspace_fragment:$u,colorspace_pars_fragment:Zu,envmap_fragment:Ju,envmap_common_pars_fragment:Qu,envmap_pars_fragment:ju,envmap_pars_vertex:ef,envmap_physical_pars_fragment:uf,envmap_vertex:tf,fog_vertex:nf,fog_pars_vertex:sf,fog_fragment:rf,fog_pars_fragment:af,gradientmap_pars_fragment:of,lightmap_pars_fragment:lf,lights_lambert_fragment:hf,lights_lambert_pars_fragment:cf,lights_pars_begin:df,lights_toon_fragment:ff,lights_toon_pars_fragment:pf,lights_phong_fragment:mf,lights_phong_pars_fragment:gf,lights_physical_fragment:vf,lights_physical_pars_fragment:_f,lights_fragment_begin:xf,lights_fragment_maps:yf,lights_fragment_end:Mf,lightprobes_pars_fragment:Sf,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:Ef,map_fragment:Af,map_pars_fragment:Rf,map_particle_fragment:Cf,map_particle_pars_fragment:Pf,metalnessmap_fragment:If,metalnessmap_pars_fragment:Lf,morphinstance_vertex:Df,morphcolor_vertex:Uf,morphnormal_vertex:Nf,morphtarget_pars_vertex:Ff,morphtarget_vertex:kf,normal_fragment_begin:Of,normal_fragment_maps:Bf,normal_pars_fragment:zf,normal_pars_vertex:Gf,normal_vertex:Hf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:Vf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:Yf,iridescence_pars_fragment:qf,opaque_fragment:Kf,packing:$f,premultiplied_alpha_fragment:Zf,project_vertex:Jf,dithering_fragment:Qf,dithering_pars_fragment:jf,roughnessmap_fragment:ep,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:ap,skinning_pars_vertex:op,skinning_vertex:lp,skinnormal_vertex:hp,specularmap_fragment:cp,specularmap_pars_fragment:dp,tonemapping_fragment:up,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:vp,uv_vertex:_p,worldpos_vertex:xp,background_vert:yp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:bp,cube_vert:wp,cube_frag:Tp,depth_vert:Ep,depth_frag:Ap,distance_vert:Rp,distance_frag:Cp,equirect_vert:Pp,equirect_frag:Ip,linedashed_vert:Lp,linedashed_frag:Dp,meshbasic_vert:Up,meshbasic_frag:Np,meshlambert_vert:Fp,meshlambert_frag:kp,meshmatcap_vert:Op,meshmatcap_frag:Bp,meshnormal_vert:zp,meshnormal_frag:Gp,meshphong_vert:Hp,meshphong_frag:Wp,meshphysical_vert:Vp,meshphysical_frag:Xp,meshtoon_vert:Yp,meshtoon_frag:qp,points_vert:Kp,points_frag:$p,shadow_vert:Zp,shadow_frag:Jp,sprite_vert:Qp,sprite_frag:jp},de={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Mn={basic:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Wt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Wt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ue(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Wt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Wt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Wt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Wt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Wt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Wt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Wt([de.common,de.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Wt([de.lights,de.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Mn.physical={uniforms:Wt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const nr={r:0,b:0,g:0},em=new je,jh=new Ne;jh.set(-1,0,0,0,1,0,0,0,1);function tm(i,e,t,n,s,r){const a=new Ue(0);let o=s===!0?0:1,l,h,d=null,u=0,c=null;function p(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){const y=T.backgroundBlurriness>0;P=e.get(P,y)}return P}function v(T){let P=!1;const y=p(T);y===null?m(a,o):y&&y.isColor&&(m(y,1),P=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,P){const y=p(P);y&&(y.isCubeTexture||y.mapping===Ar)?(h===void 0&&(h=new lt(new Rs(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Ki(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(em.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(jh),h.material.toneMapped=Ye.getTransfer(y.colorSpace)!==et,(d!==y||u!==y.version||c!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,c=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new lt(new Ct(2,2),new Zt({name:"BackgroundMaterial",uniforms:Ki(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||c!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,c=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,P){T.getRGB(nr,Kh(i)),t.buffers.color.setClear(nr.r,nr.g,nr.b,P,r)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,P=1){a.set(T),o=P,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:v,addToRenderList:M,dispose:f}}function nm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,a=!1;function o(I,D,B,L,G){let A=!1;const U=u(I,L,B,D);r!==U&&(r=U,h(r.object)),A=p(I,L,B,G),A&&v(I,L,B,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,y(I,D,B,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function h(I){return i.bindVertexArray(I)}function d(I){return i.deleteVertexArray(I)}function u(I,D,B,L){const G=L.wireframe===!0;let A=n[D.id];A===void 0&&(A={},n[D.id]=A);const U=I.isInstancedMesh===!0?I.id:0;let Y=A[U];Y===void 0&&(Y={},A[U]=Y);let X=Y[B.id];X===void 0&&(X={},Y[B.id]=X);let $=X[G];return $===void 0&&($=c(l()),X[G]=$),$}function c(I){const D=[],B=[],L=[];for(let G=0;G<t;G++)D[G]=0,B[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:L,object:I,attributes:{},index:null}}function p(I,D,B,L){const G=r.attributes,A=D.attributes;let U=0;const Y=B.getAttributes();for(const X in Y)if(Y[X].location>=0){const ee=G[X];let Me=A[X];if(Me===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),ee===void 0||ee.attribute!==Me||Me&&ee.data!==Me.data)return!0;U++}return r.attributesNum!==U||r.index!==L}function v(I,D,B,L){const G={},A=D.attributes;let U=0;const Y=B.getAttributes();for(const X in Y)if(Y[X].location>=0){let ee=A[X];ee===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const Me={};Me.attribute=ee,ee&&ee.data&&(Me.data=ee.data),G[X]=Me,U++}r.attributes=G,r.attributesNum=U,r.index=L}function M(){const I=r.newAttributes;for(let D=0,B=I.length;D<B;D++)I[D]=0}function m(I){f(I,0)}function f(I,D){const B=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;B[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),G[I]!==D&&(i.vertexAttribDivisor(I,D),G[I]=D)}function T(){const I=r.newAttributes,D=r.enabledAttributes;for(let B=0,L=D.length;B<L;B++)D[B]!==I[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function P(I,D,B,L,G,A,U){U===!0?i.vertexAttribIPointer(I,D,B,G,A):i.vertexAttribPointer(I,D,B,L,G,A)}function y(I,D,B,L){M();const G=L.attributes,A=B.getAttributes(),U=D.defaultAttributeValues;for(const Y in A){const X=A[Y];if(X.location>=0){let $=G[Y];if($===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const ee=$.normalized,Me=$.itemSize,me=e.get($);if(me===void 0)continue;const qe=me.buffer,Be=me.type,Ke=me.bytesPerElement,Z=Be===i.INT||Be===i.UNSIGNED_INT||$.gpuType===_o;if($.isInterleavedBufferAttribute){const te=$.data,xe=te.stride,Le=$.offset;if(te.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)f(X.location+ge,te.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ge=0;ge<X.locationSize;ge++)P(X.location+ge,Me/X.locationSize,Be,ee,xe*Ke,(Le+Me/X.locationSize*ge)*Ke,Z)}else{if($.isInstancedBufferAttribute){for(let te=0;te<X.locationSize;te++)f(X.location+te,$.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let te=0;te<X.locationSize;te++)m(X.location+te);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let te=0;te<X.locationSize;te++)P(X.location+te,Me/X.locationSize,Be,ee,Me*Ke,Me/X.locationSize*te*Ke,Z)}}else if(U!==void 0){const ee=U[Y];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(X.location,ee);break;case 3:i.vertexAttrib3fv(X.location,ee);break;case 4:i.vertexAttrib4fv(X.location,ee);break;default:i.vertexAttrib1fv(X.location,ee)}}}}T()}function S(){E();for(const I in n){const D=n[I];for(const B in D){const L=D[B];for(const G in L){const A=L[G];for(const U in A)d(A[U].object),delete A[U];delete L[G]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const D=n[I.id];for(const B in D){const L=D[B];for(const G in L){const A=L[G];for(const U in A)d(A[U].object),delete A[U];delete L[G]}}delete n[I.id]}function C(I){for(const D in n){const B=n[D];for(const L in B){const G=B[L];if(G[I.id]===void 0)continue;const A=G[I.id];for(const U in A)d(A[U].object),delete A[U];delete G[I.id]}}}function _(I){for(const D in n){const B=n[D],L=I.isInstancedMesh===!0?I.id:0,G=B[L];if(G!==void 0){for(const A in G){const U=G[A];for(const Y in U)d(U[Y].object),delete U[Y];delete G[A]}delete B[L],Object.keys(B).length===0&&delete n[D]}}}function E(){R(),a=!0,r!==s&&(r=s,h(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function im(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let c=0;for(let p=0;p<d;p++)c+=h[p];t.update(c,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Vt&&C!==cn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=l(h);d!==h&&(Ie("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const u=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&c===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:y,maxSamples:S,samples:b}}function rm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Jn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,c){const p=u.length!==0||c||n!==0||s;return s=c,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,c){t=d(u,c,0)},this.setState=function(u,c,p){const v=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?d(null):h();else{const T=r?0:n,P=T*4;let y=f.clippingState||null;l.value=y,y=d(v,c,P,p);for(let S=0;S!==P;++S)y[S]=t[S];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,c,p,v){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=l.value,v!==!0||m===null){const f=p+M*4,T=c.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let P=0,y=p;P!==M;++P,y+=4)a.copy(u[P]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const Hi=4,am=6,om=20,lm=256,os=new Pr,Nl=new Ue;let ca=null,da=0,ua=0,fa=!1;const hm=new z,ri=new z;class Fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=hm}=r;ca=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ca,da,ua),this._renderer.xr.enabled=fa,e.scissorTest=!1,ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:un,format:nn,colorSpace:Mr,depthBuffer:!1},s=kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cm(r)),this._blurMaterial=um(r,e,t),this._ggxMaterial=dm(r,e,t)}return s}_compileMaterial(e){const t=new lt(new Bt,e);this._renderer.compile(t,os)}_sceneToCubeUV(e,t,n,s,r){const l=new $t(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,p=u.toneMapping;u.getClearColor(Nl),u.toneMapping=wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new Rs,new zn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let f=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,f=!0):(m.color.copy(Nl),f=!0);for(let P=0;P<6;P++){const y=P%3;y===0?(l.up.set(0,h[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[P],r.y,r.z)):y===1?(l.up.set(0,0,h[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[P],r.z)):(l.up.set(0,h[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[P]));const S=this._cubeSize;ki(s,y*S,P>2?S:0,S,S),u.setRenderTarget(s),f&&u.render(M,l),u.render(e,l)}u.toneMapping=p,u.autoClear=c,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ci||e.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ki(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,os)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,h=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(h*h-d*d),c=h*1.25,p=u*c,{_lodMax:v}=this,M=this._sizeLods[n],m=3*M*(n>v-Hi?n-v+Hi:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,ki(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,os),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,ki(e,m,f,3*M,2*M),s.setRenderTarget(e),s.render(o,os)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const h=o.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;const d=this._sizeLods[s],u=3*d*(s>this._lodMax-Hi?s-this._lodMax+Hi:0),c=4*(this._cubeSize-d);ki(t,u,c,3*d,2*d),a.setRenderTarget(t),a.render(l,os)}}function cm(i){const e=[],t=[];let n=i;const s=i-Hi+1+am;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,h=1+o,d=[l,l,h,l,h,h,l,l,h,h,l,h],u=6,c=6,p=3,v=new Float32Array(p*c*u),M=new Float32Array(p*c*u);for(let f=0;f<u;f++){const T=f%3*2/3-1,P=f>2?0:-1,y=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(y,p*c*f);for(let S=0;S<c;S++){const b=d[S*2]*2-1,C=d[S*2+1]*2-1;f===0?ri.set(1,C,b):f===1?ri.set(-b,1,-C):f===2?ri.set(-b,C,1):f===3?ri.set(-1,C,-b):f===4?ri.set(-b,-1,C):ri.set(b,C,-1),ri.toArray(M,(f*c+S)*p)}}const m=new Bt;m.setAttribute("position",new Lt(v,p)),m.setAttribute("outputDirection",new Lt(M,p)),t.push(new lt(m,null)),n>Hi&&n--}return{lodMeshes:t,sizeLods:e}}function kl(i,e,t){const n=new sn(i,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ki(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function dm(i,e,t){return new Zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ir(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function um(i,e,t){return new Zt({name:"SphericalGaussianBlur",defines:{SAMPLES:om,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ir(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ol(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Bl(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ir(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ec extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rs(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Fn});r.uniforms.tEquirect.value=t;const a=new lt(s,r),o=t.minFilter;return t.minFilter===Sn&&(t.minFilter=bt),new mu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function fm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(c,p=!1){return c==null?null:p?a(c):r(c)}function r(c){if(c&&c.isTexture){const p=c.mapping;if(p===kr||p===Or)if(e.has(c)){const v=e.get(c).texture;return o(v,c.mapping)}else{const v=c.image;if(v&&v.height>0){const M=new ec(v.height);return M.fromEquirectangularTexture(i,c),e.set(c,M),c.addEventListener("dispose",h),o(M.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){const p=c.mapping,v=p===kr||p===Or,M=p===ci||p===qi;if(v||M){let m=t.get(c);const f=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return n===null&&(n=new Fl(i)),m=v?n.fromEquirectangular(c,m):n.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),m.texture;if(m!==void 0)return m.texture;{const T=c.image;return v&&T&&T.height>0||M&&T&&l(T)?(n===null&&(n=new Fl(i)),m=v?n.fromEquirectangular(c):n.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),c.addEventListener("dispose",d),m.texture):null}}}return c}function o(c,p){return p===kr?c.mapping=ci:p===Or&&(c.mapping=qi),c}function l(c){let p=0;const v=6;for(let M=0;M<v;M++)c[M]!==void 0&&p++;return p===v}function h(c){const p=c.target;p.removeEventListener("dispose",h);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(c){const p=c.target;p.removeEventListener("dispose",d);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function pm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function mm(i,e,t,n){const s={},r=new WeakMap;function a(u){const c=u.target;c.index!==null&&e.remove(c.index);for(const v in c.attributes)e.remove(c.attributes[v]);c.removeEventListener("dispose",a),delete s[c.id];const p=r.get(c);p&&(e.remove(p),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(u,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,t.memory.geometries++),c}function l(u){const c=u.attributes;for(const p in c)e.update(c[p],i.ARRAY_BUFFER)}function h(u){const c=[],p=u.index,v=u.attributes.position;let M=0;if(v===void 0)return;if(p!==null){const T=p.array;M=p.version;for(let P=0,y=T.length;P<y;P+=3){const S=T[P+0],b=T[P+1],C=T[P+2];c.push(S,b,b,C,C,S)}}else{const T=v.array;M=v.version;for(let P=0,y=T.length/3-1;P<y;P+=3){const S=P+0,b=P+1,C=P+2;c.push(S,b,b,C,C,S)}}const m=new(v.count>=65535?Gh:zh)(c,1);m.version=M;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function d(u){const c=r.get(u);if(c){const p=u.index;p!==null&&c.version<p.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function gm(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,c){i.drawElements(n,c,r,u*a),t.update(c,n,1)}function h(u,c,p){p!==0&&(i.drawElementsInstanced(n,c,r,u*a,p),t.update(c,n,p))}function d(u,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,u,0,p);let M=0;for(let m=0;m<p;m++)M+=c[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d}function vm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _m(i,e,t){const n=new WeakMap,s=new pt;function r(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let c=n.get(o);if(c===void 0||c.count!==u){let R=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var p=R;c!==void 0&&c.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),m===!0&&(y=3);let S=o.attributes.position.count*y,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*b*4*u),_=new Fh(C,S,b,u);_.type=cn,_.needsUpdate=!0;const E=y*4;for(let I=0;I<u;I++){const D=f[I],B=T[I],L=P[I],G=S*b*4*I;for(let A=0;A<D.count;A++){const U=A*E;v===!0&&(s.fromBufferAttribute(D,A),C[G+U+0]=s.x,C[G+U+1]=s.y,C[G+U+2]=s.z,C[G+U+3]=0),M===!0&&(s.fromBufferAttribute(B,A),C[G+U+4]=s.x,C[G+U+5]=s.y,C[G+U+6]=s.z,C[G+U+7]=0),m===!0&&(s.fromBufferAttribute(L,A),C[G+U+8]=s.x,C[G+U+9]=s.y,C[G+U+10]=s.z,C[G+U+11]=L.itemSize===4?s.w:1)}}c={count:u,texture:_,size:new De(S,b)},n.set(o,c),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<h.length;m++)v+=h[m];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function xm(i,e,t,n,s){let r=new WeakMap;function a(h){const d=s.render.frame,u=h.geometry,c=e.get(h,u);if(r.get(c)!==d&&(e.update(c),r.set(c,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const p=h.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return c}function o(){r=new WeakMap}function l(h){const d=h.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const ym={[Mh]:"LINEAR_TONE_MAPPING",[Sh]:"REINHARD_TONE_MAPPING",[bh]:"CINEON_TONE_MAPPING",[wh]:"ACES_FILMIC_TONE_MAPPING",[Eh]:"AGX_TONE_MAPPING",[vo]:"NEUTRAL_TONE_MAPPING",[Th]:"CUSTOM_TONE_MAPPING"};function Mm(i,e,t,n,s,r){const a=new sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const h=new Bt;h.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rt([0,2,0,0,2,0],2));const d=new iu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new lt(h,d),c=new Pr(-1,1,1,-1,0,1);let p=null,v=null,M=!1,m,f=null,T=[],P=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let b=0;b<T.length;b++){const C=T[b];C.setSize&&C.setSize(y,S)}},this.setEffects=function(y){T=y,P=T.length>0&&T[0].isRenderPass===!0;const S=a.width,b=a.height;T.length>0&&o===null&&(o=new sn(S,b,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new sn(S,b,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<T.length;C++){const _=T[C];_.setSize&&_.setSize(S,b)}},this.begin=function(y,S){if(M||y.toneMapping===wn&&T.length===0)return!1;if(f=S,S!==null){const b=S.width,C=S.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return P===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=wn,!0},this.hasRenderPass=function(){return P},this.end=function(y,S){y.toneMapping=m,M=!0;let b=a,C=o;for(let _=0;_<T.length;_++){const E=T[_];E.enabled!==!1&&(E.render(y,C,b,S),E.needsSwap!==!1&&(b=C,C=C===o?l:o))}if(p!==y.outputColorSpace||v!==y.toneMapping){p=y.outputColorSpace,v=y.toneMapping,d.defines={},Ye.getTransfer(p)===et&&(d.defines.SRGB_TRANSFER="");const _=ym[v];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(f),y.render(u,c),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const tc=new Dt,lo=new As(1,1),nc=new Fh,ic=new Dd,sc=new Yh,zl=[],Gl=[],Hl=new Float32Array(16),Wl=new Float32Array(9),Vl=new Float32Array(4);function Ji(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=zl[s];if(r===void 0&&(r=new Float32Array(s),zl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lr(i,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function Em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),Et(t,n)}}function Am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Wl.set(n),i.uniformMatrix3fv(this.addr,!1,Wl),Et(t,n)}}function Rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),Et(t,n)}}function Cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function Dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function km(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lo.compareFunction=t.isReversedDepthBuffer()?Eo:To,r=lo):r=tc,t.setTexture2D(e||r,s)}function Om(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ic,s)}function Bm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sc,s)}function zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nc,s)}function Gm(i){switch(i){case 5126:return Sm;case 35664:return bm;case 35665:return wm;case 35666:return Tm;case 35674:return Em;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Pm;case 35668:case 35672:return Im;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}function Hm(i,e){i.uniform1fv(this.addr,e)}function Wm(i,e){const t=Ji(e,this.size,2);i.uniform2fv(this.addr,t)}function Vm(i,e){const t=Ji(e,this.size,3);i.uniform3fv(this.addr,t)}function Xm(i,e){const t=Ji(e,this.size,4);i.uniform4fv(this.addr,t)}function Ym(i,e){const t=Ji(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qm(i,e){const t=Ji(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Km(i,e){const t=Ji(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $m(i,e){i.uniform1iv(this.addr,e)}function Zm(i,e){i.uniform2iv(this.addr,e)}function Jm(i,e){i.uniform3iv(this.addr,e)}function Qm(i,e){i.uniform4iv(this.addr,e)}function jm(i,e){i.uniform1uiv(this.addr,e)}function eg(i,e){i.uniform2uiv(this.addr,e)}function tg(i,e){i.uniform3uiv(this.addr,e)}function ng(i,e){i.uniform4uiv(this.addr,e)}function ig(i,e,t){const n=this.cache,s=e.length,r=Lr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=lo:a=tc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function sg(i,e,t){const n=this.cache,s=e.length,r=Lr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ic,r[a])}function rg(i,e,t){const n=this.cache,s=e.length,r=Lr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||sc,r[a])}function ag(i,e,t){const n=this.cache,s=e.length,r=Lr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nc,r[a])}function og(i){switch(i){case 5126:return Hm;case 35664:return Wm;case 35665:return Vm;case 35666:return Xm;case 35674:return Ym;case 35675:return qm;case 35676:return Km;case 5124:case 35670:return $m;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}class lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gm(t.type)}}class hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=og(t.type)}}class cg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function Xl(i,e){i.seq.push(e),i.map[e.id]=e}function dg(i,e,t){const n=i.name,s=n.length;for(pa.lastIndex=0;;){const r=pa.exec(n),a=pa.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Xl(t,h===void 0?new lg(o,i,e):new hg(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new cg(o),Xl(t,u)),t=u}}}class mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);dg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Yl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ug=37297;let fg=0;function pg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ql=new Ne;function mg(i){Ye._getMatrix(ql,Ye.workingColorSpace,i);const e=`mat3( ${ql.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Sr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+pg(i.getShaderSource(e),o)}else return r}function gg(i,e){const t=mg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const vg={[Mh]:"Linear",[Sh]:"Reinhard",[bh]:"Cineon",[wh]:"ACESFilmic",[Eh]:"AgX",[vo]:"Neutral",[Th]:"Custom"};function _g(i,e){const t=vg[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new z;function xg(){Ye.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function Mg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ms(i){return i!==""}function $l(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(bg,Tg)}const wg=new Map;function Tg(i,e){let t=He[e];if(t===void 0){const n=wg.get(e);if(n!==void 0)t=He[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ho(t)}const Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(i){return i.replace(Eg,Ag)}function Ag(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ql(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Rg={[cr]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function Cg(i){return Rg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Pg={[ci]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE_UV"};function Ig(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Pg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Lg={[qi]:"ENVMAP_MODE_REFRACTION"};function Dg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ug={[go]:"ENVMAP_BLENDING_MULTIPLY",[Zc]:"ENVMAP_BLENDING_MIX",[Jc]:"ENVMAP_BLENDING_ADD"};function Ng(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ug[i.combine]||"ENVMAP_BLENDING_NONE"}function Fg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Cg(t),h=Ig(t),d=Dg(t),u=Ng(t),c=Fg(t),p=yg(t),v=Mg(r),M=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ms).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ms).join(`
`),f.length>0&&(f+=`
`)):(m=[Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),f=[Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?He.tonemapping_pars_fragment:"",t.toneMapping!==wn?_g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,gg("linearToOutputTexel",t.outputColorSpace),xg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),a=ho(a),a=$l(a,t),a=Zl(a,t),o=ho(o),o=$l(o,t),o=Zl(o,t),a=Jl(a),o=Jl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const P=T+m+a,y=T+f+o,S=Yl(s,s.VERTEX_SHADER,P),b=Yl(s,s.FRAGMENT_SHADER,y);s.attachShader(M,S),s.attachShader(M,b),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(I){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(M)||"",B=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(b)||"",G=D.trim(),A=B.trim(),U=L.trim();let Y=!0,X=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,S,b);else{const $=Kl(s,S,"vertex"),ee=Kl(s,b,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+$+`
`+ee)}else G!==""?Ie("WebGLProgram: Program Info Log:",G):(A===""||U==="")&&(X=!1);X&&(I.diagnostics={runnable:Y,programLog:G,vertexShader:{log:A,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(S),s.deleteShader(b),_=new mr(s,M),E=Sg(s,M)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,ug)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fg++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=b,this}let Og=0;class Bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zg(e),t.set(e,n)),n}}class zg{constructor(e){this.id=Og++,this.code=e,this.usedTimes=0}}function Gg(i){return i===ui||i===xr||i===yr}function Hg(i,e,t,n,s,r){const a=new kh,o=new Bg,l=new Set,h=[],d=new Map,u=n.logarithmicDepthBuffer;let c=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,E,R,I,D,B){const L=I.fog,G=D.geometry,A=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=e.get(_.envMap||A,U),X=Y&&Y.mapping===Ar?Y.image.height:null,$=p[_.type];_.precision!==null&&(c=n.getMaxPrecision(_.precision),c!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",c,"instead."));const ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=ee!==void 0?ee.length:0;let me=0;G.morphAttributes.position!==void 0&&(me=1),G.morphAttributes.normal!==void 0&&(me=2),G.morphAttributes.color!==void 0&&(me=3);let qe,Be,Ke,Z;if($){const ct=Mn[$];qe=ct.vertexShader,Be=ct.fragmentShader}else{qe=_.vertexShader,Be=_.fragmentShader;const ct=o.getVertexShaderStage(_),Je=o.getFragmentShaderStage(_);o.update(_,ct,Je),Ke=ct.id,Z=Je.id}const te=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Le=D.isInstancedMesh===!0,ge=D.isBatchedMesh===!0,Oe=!!_.map,vt=!!_.matcap,ze=!!Y,Xe=!!_.aoMap,nt=!!_.lightMap,Fe=!!_.bumpMap&&_.wireframe===!1,it=!!_.normalMap,_t=!!_.displacementMap,Ut=!!_.emissiveMap,ht=!!_.metalnessMap,gt=!!_.roughnessMap,O=_.anisotropy>0,ne=_.clearcoat>0,ve=_.dispersion>0,w=_.retroreflectivity>0,g=_.iridescence>0,N=_.sheen>0,H=_.transmission>0,K=O&&!!_.anisotropyMap,se=ne&&!!_.clearcoatMap,ae=ne&&!!_.clearcoatNormalMap,J=ne&&!!_.clearcoatRoughnessMap,Q=g&&!!_.iridescenceMap,oe=g&&!!_.iridescenceThicknessMap,Te=N&&!!_.sheenColorMap,le=N&&!!_.sheenRoughnessMap,re=!!_.specularMap,Ae=!!_.specularColorMap,Pe=!!_.specularIntensityMap,ke=H&&!!_.transmissionMap,k=H&&!!_.thicknessMap,he=!!_.gradientMap,j=!!_.alphaMap,ce=_.alphaTest>0,pe=!!_.alphaHash,ie=!!_.extensions;let Re=wn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Re=i.toneMapping);const we={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:qe,fragmentShader:Be,defines:_.defines,customVertexShaderID:Ke,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:c,batching:ge,batchingColor:ge&&D._colorsTexture!==null,instancing:Le,instancingColor:Le&&D.instanceColor!==null,instancingMorph:Le&&D.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:vt,envMap:ze,envMapMode:ze&&Y.mapping,envMapCubeUVHeight:X,aoMap:Xe,lightMap:nt,bumpMap:Fe,normalMap:it,displacementMap:_t,emissiveMap:Ut,normalMapObjectSpace:it&&_.normalMapType===ed,normalMapTangentSpace:it&&_.normalMapType===ao,packedNormalMap:it&&_.normalMapType===ao&&Gg(_.normalMap.format),metalnessMap:ht,roughnessMap:gt,anisotropy:O,anisotropyMap:K,clearcoat:ne,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:J,dispersion:ve,retroreflection:w,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:oe,sheen:N,sheenColorMap:Te,sheenRoughnessMap:le,specularMap:re,specularColorMap:Ae,specularIntensityMap:Pe,transmission:H,transmissionMap:ke,thicknessMap:k,gradientMap:he,opaque:_.transparent===!1&&_.blending===vs&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:pe,combine:_.combine,mapUv:Oe&&v(_.map.channel),aoMapUv:Xe&&v(_.aoMap.channel),lightMapUv:nt&&v(_.lightMap.channel),bumpMapUv:Fe&&v(_.bumpMap.channel),normalMapUv:it&&v(_.normalMap.channel),displacementMapUv:_t&&v(_.displacementMap.channel),emissiveMapUv:Ut&&v(_.emissiveMap.channel),metalnessMapUv:ht&&v(_.metalnessMap.channel),roughnessMapUv:gt&&v(_.roughnessMap.channel),anisotropyMapUv:K&&v(_.anisotropyMap.channel),clearcoatMapUv:se&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:le&&v(_.sheenRoughnessMap.channel),specularMapUv:re&&v(_.specularMap.channel),specularColorMapUv:Ae&&v(_.specularColorMap.channel),specularIntensityMapUv:Pe&&v(_.specularIntensityMap.channel),transmissionMapUv:ke&&v(_.transmissionMap.channel),thicknessMapUv:k&&v(_.thicknessMap.channel),alphaMapUv:j&&v(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(it||O),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(Oe||j),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&it===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:me,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&Ye.getTransfer(_.map.colorSpace)===et,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(_.emissiveMap.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===St,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(f(E,_),T(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function f(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function T(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function P(_){const E=p[_.type];let R;if(E){const I=Mn[E];R=eu.clone(I.uniforms)}else R=_.uniforms;return R}function y(_,E){let R=d.get(E);return R!==void 0?++R.usedTimes:(R=new kg(i,E,_,s),h.push(R),d.set(E,R)),R}function S(_){if(--_.usedTimes===0){const E=h.indexOf(_);h[E]=h[h.length-1],h.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:P,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:h,dispose:C}}function Wg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function eh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,v,M,m,f){let T=i[e];return T===void 0?(T={id:c.id,object:c,geometry:p,material:v,materialVariant:a(c),groupOrder:M,renderOrder:c.renderOrder,z:m,group:f},i[e]=T):(T.id=c.id,T.object=c,T.geometry=p,T.material=v,T.materialVariant=a(c),T.groupOrder=M,T.renderOrder=c.renderOrder,T.z=m,T.group=f),e++,T}function l(c,p,v,M,m,f,T){T.reversedDepth===!0&&(m=-m);const P=o(c,p,v,M,m,f);v.transmission>0?n.push(P):v.transparent===!0?s.push(P):t.push(P)}function h(c,p,v,M,m,f){const T=o(c,p,v,M,m,f);v.transmission>0?n.unshift(T):v.transparent===!0?s.unshift(T):t.unshift(T)}function d(c,p){t.length>1&&t.sort(c||Vg),n.length>1&&n.sort(p||jl),s.length>1&&s.sort(p||jl)}function u(){for(let c=e,p=i.length;c<p;c++){const v=i[c];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:h,finish:u,sort:d}}function Xg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new eh,i.set(n,[a])):s>=r.length?(a=new eh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ue};break;case"SpotLight":t={position:new z,direction:new z,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Kg=0;function $g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zg(i){const e=new Yg,t=qg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new z);const s=new z,r=new je,a=new je;function o(h){let d=0,u=0,c=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,v=0,M=0,m=0,f=0,T=0,P=0,y=0,S=0,b=0,C=0,_=0,E=0,R=0;h.sort($g);for(let D=0,B=h.length;D<B;D++){const L=h[D],G=L.color,A=L.intensity,U=L.distance;let Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ui?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=G.r*A,u+=G.g*A,c+=G.b*A;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],A);R++}else if(L.isSunLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,ee=t.get(L);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[v]=ee,n.sunShadowMap[v]=Y;const Me=$.getViewportCount();for(let me=0;me<Me;me++)n.sunShadowMatrix[M+me]=$.getMatrix(me),n.sunShadowCascade[M+me]=$._cascadeData[me];M+=Me,v++}n.sun[p]=X,p++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,ee=t.get(L);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=X,m++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(G).multiplyScalar(A),X.distance=U,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[T]=X;const $=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,$.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[T]=$.matrix,L.castShadow){const ee=t.get(L);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,n.spotShadow[T]=ee,n.spotShadowMap[T]=Y,C++}T++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(G).multiplyScalar(A),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[P]=X,P++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const $=L.shadow,ee=t.get(L);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=Y,n.pointShadowMatrix[f]=L.shadow.matrix,b++}n.point[f]=X,f++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(A),X.groundColor.copy(L.groundColor).multiplyScalar(A),n.hemi[y]=X,y++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=c;const I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==T||I.rectAreaLength!==P||I.hemiLength!==y||I.numSunShadows!==v||I.numDirectionalShadows!==S||I.numPointShadows!==b||I.numSpotShadows!==C||I.numSpotMaps!==_||I.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=T,n.rectArea.length=P,n.point.length=f,n.hemi.length=y,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=T,I.rectAreaLength=P,I.hemiLength=y,I.numSunShadows=v,I.numDirectionalShadows=S,I.numPointShadows=b,I.numSpotShadows=C,I.numSpotMaps=_,I.numLightProbes=R,n.version=Kg++)}function l(h,d){let u=0,c=0,p=0,v=0,M=0,m=0;const f=d.matrixWorldInverse;for(let T=0,P=h.length;T<P;T++){const y=h[T];if(y.isSunLight){const S=n.sun[u];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),u++}else if(y.isDirectionalLight){const S=n.directional[c];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),c++}else if(y.isSpotLight){const S=n.spot[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const S=n.rectArea[M];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function th(i){const e=new Zg(i),t=[],n=[],s=[];function r(c){u.camera=c,t.length=0,n.length=0,s.length=0}function a(c){t.push(c)}function o(c){n.push(c)}function l(c){s.push(c)}function h(){e.setup(t)}function d(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Jg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new th(i),e.set(s,[o])):r>=a.length?(o=new th(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,e0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],t0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],nh=new je,ls=new z,ma=new z;function n0(i,e,t){let n=new Io;const s=new De,r=new De,a=new pt,o=new su,l=new ru,h={},d=t.maxTextureSize,u={[hi]:Xt,[Xt]:hi,[St]:St},c=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Qg,fragmentShader:jg}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const v=new Bt;v.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new lt(v,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let f=this.type;this.render=function(b,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ic&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);const E=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Fn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=f!==this.type;B&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=b.length;L<G;L++){const A=b[L],U=A.shadow;if(U===void 0){Ie("WebGLShadowMap:",A,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Y=U.getFrameExtents();s.multiply(Y),r.copy(U.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Y.x),s.x=r.x*Y.x,U.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Y.y),s.y=r.y*Y.y,U.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=X,U.map===null||B===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===fs){if(A.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new sn(s.x,s.y,{format:ui,type:un,minFilter:bt,magFilter:bt,generateMipmaps:!1}),U.map.texture.name=A.name+".shadowMap",U.map.depthTexture=new As(s.x,s.y,cn),U.map.depthTexture.name=A.name+".shadowMapDepth",U.map.depthTexture.format=Bn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=mt,U.map.depthTexture.magFilter=mt}else A.isPointLight?(U.map=new ec(s.x),U.map.depthTexture=new Qd(s.x,Tn)):(U.map=new sn(s.x,s.y),U.map.depthTexture=new As(s.x,s.y,Tn)),U.map.depthTexture.name=A.name+".shadowMap",U.map.depthTexture.format=Bn,this.type===cr?(U.map.depthTexture.compareFunction=X?Eo:To,U.map.depthTexture.minFilter=bt,U.map.depthTexture.magFilter=bt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=mt,U.map.depthTexture.magFilter=mt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);const $=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();A.isPointLight!==!0&&U.updateMatrices(A,_);for(let ee=0;ee<$;ee++){const Me=U.getCamera(ee);if(A.isPointLight){const me=U.camera,qe=U.matrix,Be=A.distance||me.far;Be!==me.far&&(me.far=Be,me.updateProjectionMatrix()),ls.setFromMatrixPosition(A.matrixWorld),me.position.copy(ls),ma.copy(me.position),ma.add(e0[ee]),me.up.copy(t0[ee]),me.lookAt(ma),me.updateMatrixWorld(),qe.makeTranslation(-ls.x,-ls.y,-ls.z),nh.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),U._frustum.setFromProjectionMatrix(nh,me.coordinateSystem,me.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(U.map),i.clear());const me=U.getViewport(ee);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),D.viewport(a)}n=U.getFrustum(ee),y(C,_,Me,A,this.type)}U.isPointLightShadow!==!0&&this.type===fs&&T(U,_),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,I)};function T(b,C){const _=e.update(M);c.defines.VSM_SAMPLES!==b.blurSamples&&(c.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new sn(s.x,s.y,{format:ui,type:un}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),c.uniforms.shadow_pass.value=b.map.depthTexture,c.uniforms.resolution.value.set(b.map.width,b.map.height),c.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,_,c,M,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,_,p,M,null)}function P(b,C,_,E){let R=null;const I=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=R.uuid,B=C.uuid;let L=h[D];L===void 0&&(L={},h[D]=L);let G=L[B];G===void 0&&(G=R.clone(),L[B]=G,C.addEventListener("dispose",S)),R=G}if(R.visible=C.visible,R.wireframe=C.wireframe,E===fs?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:u[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=i.properties.get(R);D.light=_}return R}function y(b,C,_,E,R){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===fs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const B=e.update(b),L=b.material;if(Array.isArray(L)){const G=B.groups;for(let A=0,U=G.length;A<U;A++){const Y=G[A],X=L[Y.materialIndex];if(X&&X.visible){const $=P(b,X,E,R);b.onBeforeShadow(i,b,C,_,B,$,Y),i.renderBufferDirect(_,null,B,$,b,Y),b.onAfterShadow(i,b,C,_,B,$,Y)}}}else if(L.visible){const G=P(b,L,E,R);b.onBeforeShadow(i,b,C,_,B,G,null),i.renderBufferDirect(_,null,B,G,b,null),b.onAfterShadow(i,b,C,_,B,G,null)}}const D=b.children;for(let B=0,L=D.length;B<L;B++)y(D[B],C,_,E,R)}function S(b){b.target.removeEventListener("dispose",S);for(const _ in h){const E=h[_],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function i0(i,e){function t(){let k=!1;const he=new pt;let j=null;const ce=new pt(0,0,0,0);return{setMask:function(pe){j!==pe&&!k&&(i.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){k=pe},setClear:function(pe,ie,Re,we,ct){ct===!0&&(pe*=we,ie*=we,Re*=we),he.set(pe,ie,Re,we),ce.equals(he)===!1&&(i.clearColor(pe,ie,Re,we),ce.copy(he))},reset:function(){k=!1,j=null,ce.set(-1,0,0,0)}}}function n(){let k=!1,he=!1,j=null,ce=null,pe=null;return{setReversed:function(ie){if(he!==ie){const Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),he=ie;const we=pe;pe=null,this.setClear(we)}},getReversed:function(){return he},setTest:function(ie){ie?te(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ie){j!==ie&&!k&&(i.depthMask(ie),j=ie)},setFunc:function(ie){if(he&&(ie=dd[ie]),ce!==ie){switch(ie){case ba:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ie}},setLocked:function(ie){k=ie},setClear:function(ie){pe!==ie&&(pe=ie,he&&(ie=1-ie),i.clearDepth(ie))},reset:function(){k=!1,j=null,ce=null,pe=null,he=!1}}}function s(){let k=!1,he=null,j=null,ce=null,pe=null,ie=null,Re=null,we=null,ct=null;return{setTest:function(Je){k||(Je?te(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Je){he!==Je&&!k&&(i.stencilMask(Je),he=Je)},setFunc:function(Je,rn,pn){(j!==Je||ce!==rn||pe!==pn)&&(i.stencilFunc(Je,rn,pn),j=Je,ce=rn,pe=pn)},setOp:function(Je,rn,pn){(ie!==Je||Re!==rn||we!==pn)&&(i.stencilOp(Je,rn,pn),ie=Je,Re=rn,we=pn)},setLocked:function(Je){k=Je},setClear:function(Je){ct!==Je&&(i.clearStencil(Je),ct=Je)},reset:function(){k=!1,he=null,j=null,ce=null,pe=null,ie=null,Re=null,we=null,ct=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,h=new WeakMap;let d={},u={},c={},p=new WeakMap,v=[],M=null,m=!1,f=null,T=null,P=null,y=null,S=null,b=null,C=null,_=new Ue(0,0,0),E=0,R=!1,I=null,D=null,B=null,L=null,G=null;const A=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Y=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=Y>=2);let $=null,ee={};const Me=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),qe=new pt().fromArray(Me),Be=new pt().fromArray(me);function Ke(k,he,j,ce){const pe=new Uint8Array(4),ie=i.createTexture();i.bindTexture(k,ie),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<j;Re++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(he+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ie}const Z={};Z[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(ys),Fe(!1),it(jo),te(i.CULL_FACE),Xe(Fn);function te(k){d[k]!==!0&&(i.enable(k),d[k]=!0)}function xe(k){d[k]!==!1&&(i.disable(k),d[k]=!1)}function Le(k,he){return c[k]!==he?(i.bindFramebuffer(k,he),c[k]=he,k===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=he),k===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ge(k,he){let j=v,ce=!1;if(k){j=p.get(he),j===void 0&&(j=[],p.set(he,j));const pe=k.textures;if(j.length!==pe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Re=pe.length;ie<Re;ie++)j[ie]=i.COLOR_ATTACHMENT0+ie;j.length=pe.length,ce=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ce=!0);ce&&i.drawBuffers(j)}function Oe(k){return M!==k?(i.useProgram(k),M=k,!0):!1}const vt={[zi]:i.FUNC_ADD,[Dc]:i.FUNC_SUBTRACT,[Uc]:i.FUNC_REVERSE_SUBTRACT};vt[Nc]=i.MIN,vt[Fc]=i.MAX;const ze={[kc]:i.ZERO,[Oc]:i.ONE,[Bc]:i.SRC_COLOR,[xh]:i.SRC_ALPHA,[Xc]:i.SRC_ALPHA_SATURATE,[Wc]:i.DST_COLOR,[Gc]:i.DST_ALPHA,[zc]:i.ONE_MINUS_SRC_COLOR,[yh]:i.ONE_MINUS_SRC_ALPHA,[Vc]:i.ONE_MINUS_DST_COLOR,[Hc]:i.ONE_MINUS_DST_ALPHA,[Yc]:i.CONSTANT_COLOR,[qc]:i.ONE_MINUS_CONSTANT_COLOR,[Kc]:i.CONSTANT_ALPHA,[$c]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(k,he,j,ce,pe,ie,Re,we,ct,Je){if(k===Fn){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),k!==Lc){if(k!==f||Je!==R){if((T!==zi||S!==zi)&&(i.blendEquation(i.FUNC_ADD),T=zi,S=zi),Je)switch(k){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFunc(i.ONE,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",k);break}else switch(k){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case el:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tl:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",k);break}P=null,y=null,b=null,C=null,_.set(0,0,0),E=0,f=k,R=Je}return}pe=pe||he,ie=ie||j,Re=Re||ce,(he!==T||pe!==S)&&(i.blendEquationSeparate(vt[he],vt[pe]),T=he,S=pe),(j!==P||ce!==y||ie!==b||Re!==C)&&(i.blendFuncSeparate(ze[j],ze[ce],ze[ie],ze[Re]),P=j,y=ce,b=ie,C=Re),(we.equals(_)===!1||ct!==E)&&(i.blendColor(we.r,we.g,we.b,ct),_.copy(we),E=ct),f=k,R=!1}function nt(k,he){k.side===St?xe(i.CULL_FACE):te(i.CULL_FACE);let j=k.side===Xt;he&&(j=!j),Fe(j),k.blending===vs&&k.transparent===!1?Xe(Fn):Xe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const ce=k.stencilWrite;o.setTest(ce),ce&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ut(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(k){I!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),I=k)}function it(k){k!==Cc?(te(i.CULL_FACE),k!==D&&(k===jo?i.cullFace(i.BACK):k===Pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),D=k}function _t(k){k!==B&&(U&&i.lineWidth(k),B=k)}function Ut(k,he,j){k?(te(i.POLYGON_OFFSET_FILL),(L!==he||G!==j)&&(L=he,G=j,a.getReversed()&&(he=-he),i.polygonOffset(he,j))):xe(i.POLYGON_OFFSET_FILL)}function ht(k){k?te(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function gt(k){k===void 0&&(k=i.TEXTURE0+A-1),$!==k&&(i.activeTexture(k),$=k)}function O(k,he,j){j===void 0&&($===null?j=i.TEXTURE0+A-1:j=$);let ce=ee[j];ce===void 0&&(ce={type:void 0,texture:void 0},ee[j]=ce),(ce.type!==k||ce.texture!==he)&&($!==j&&(i.activeTexture(j),$=j),i.bindTexture(k,he||Z[k]),ce.type=k,ce.texture=he)}function ne(){const k=ee[$];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(k){Ze("WebGLState:",k)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(k){Ze("WebGLState:",k)}}function g(){try{i.texSubImage2D(...arguments)}catch(k){Ze("WebGLState:",k)}}function N(){try{i.texSubImage3D(...arguments)}catch(k){Ze("WebGLState:",k)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Ze("WebGLState:",k)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Ze("WebGLState:",k)}}function se(){try{i.texStorage2D(...arguments)}catch(k){Ze("WebGLState:",k)}}function ae(){try{i.texStorage3D(...arguments)}catch(k){Ze("WebGLState:",k)}}function J(){try{i.texImage2D(...arguments)}catch(k){Ze("WebGLState:",k)}}function Q(){try{i.texImage3D(...arguments)}catch(k){Ze("WebGLState:",k)}}function oe(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function Te(k,he){u[k]!==he&&(i.pixelStorei(k,he),u[k]=he)}function le(k){qe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),qe.copy(k))}function re(k){Be.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Be.copy(k))}function Ae(k,he){let j=h.get(he);j===void 0&&(j=new WeakMap,h.set(he,j));let ce=j.get(k);ce===void 0&&(ce=i.getUniformBlockIndex(he,k.name),j.set(k,ce))}function Pe(k,he){const ce=h.get(he).get(k);l.get(he)!==ce&&(i.uniformBlockBinding(he,ce,k.__bindingPointIndex),l.set(he,ce))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},$=null,ee={},c={},p=new WeakMap,v=[],M=null,m=!1,f=null,T=null,P=null,y=null,S=null,b=null,C=null,_=new Ue(0,0,0),E=0,R=!1,I=null,D=null,B=null,L=null,G=null,qe.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:xe,bindFramebuffer:Le,drawBuffers:ge,useProgram:Oe,setBlending:Xe,setMaterial:nt,setFlipSided:Fe,setCullFace:it,setLineWidth:_t,setPolygonOffset:Ut,setScissorTest:ht,activeTexture:gt,bindTexture:O,unbindTexture:ne,compressedTexImage2D:ve,compressedTexImage3D:w,texImage2D:J,texImage3D:Q,pixelStorei:Te,getParameter:oe,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:ae,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:le,viewport:re,reset:ke}}function s0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new De,d=new WeakMap,u=new Set;let c;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,g){return v?new OffscreenCanvas(w,g):ws("canvas")}function m(w,g,N){let H=1;const K=ve(w);if((K.width>N||K.height>N)&&(H=N/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const se=Math.floor(H*K.width),ae=Math.floor(H*K.height);c===void 0&&(c=M(se,ae));const J=g?M(se,ae):c;return J.width=se,J.height=ae,J.getContext("2d").drawImage(w,0,0,se,ae),Ie("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+se+"x"+ae+")."),J}else return"data"in w&&Ie("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function f(w){return w.generateMipmaps}function T(w){i.generateMipmap(w)}function P(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,g,N,H,K,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ae;H&&(ae=e.get("EXT_texture_norm16"),ae||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(N===i.FLOAT&&(J=i.R32F),N===i.HALF_FLOAT&&(J=i.R16F),N===i.UNSIGNED_BYTE&&(J=i.R8),N===i.UNSIGNED_SHORT&&ae&&(J=ae.R16_EXT),N===i.SHORT&&ae&&(J=ae.R16_SNORM_EXT)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.R8UI),N===i.UNSIGNED_SHORT&&(J=i.R16UI),N===i.UNSIGNED_INT&&(J=i.R32UI),N===i.BYTE&&(J=i.R8I),N===i.SHORT&&(J=i.R16I),N===i.INT&&(J=i.R32I)),g===i.RG&&(N===i.FLOAT&&(J=i.RG32F),N===i.HALF_FLOAT&&(J=i.RG16F),N===i.UNSIGNED_BYTE&&(J=i.RG8),N===i.UNSIGNED_SHORT&&ae&&(J=ae.RG16_EXT),N===i.SHORT&&ae&&(J=ae.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.RG8UI),N===i.UNSIGNED_SHORT&&(J=i.RG16UI),N===i.UNSIGNED_INT&&(J=i.RG32UI),N===i.BYTE&&(J=i.RG8I),N===i.SHORT&&(J=i.RG16I),N===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.RGB8UI),N===i.UNSIGNED_SHORT&&(J=i.RGB16UI),N===i.UNSIGNED_INT&&(J=i.RGB32UI),N===i.BYTE&&(J=i.RGB8I),N===i.SHORT&&(J=i.RGB16I),N===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),N===i.UNSIGNED_INT&&(J=i.RGBA32UI),N===i.BYTE&&(J=i.RGBA8I),N===i.SHORT&&(J=i.RGBA16I),N===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_SHORT&&ae&&(J=ae.RGB16_EXT),N===i.SHORT&&ae&&(J=ae.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){const Q=se?Sr:Ye.getTransfer(K);N===i.FLOAT&&(J=i.RGBA32F),N===i.HALF_FLOAT&&(J=i.RGBA16F),N===i.UNSIGNED_BYTE&&(J=Q===et?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ae&&(J=ae.RGBA16_EXT),N===i.SHORT&&ae&&(J=ae.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(w,g){let N;return w?g===null||g===Tn||g===Ss?N=i.DEPTH24_STENCIL8:g===cn?N=i.DEPTH32F_STENCIL8:g===Ms&&(N=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Tn||g===Ss?N=i.DEPTH_COMPONENT24:g===cn?N=i.DEPTH_COMPONENT32F:g===Ms&&(N=i.DEPTH_COMPONENT16),N}function b(w,g){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==mt&&w.minFilter!==bt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function C(w){const g=w.target;g.removeEventListener("dispose",C),E(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&u.delete(g)}function _(w){const g=w.target;g.removeEventListener("dispose",_),I(g)}function E(w){const g=n.get(w);if(g.__webglInit===void 0)return;const N=w.source,H=p.get(N);if(H){const K=H[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(w),Object.keys(H).length===0&&p.delete(N)}n.remove(w)}function R(w){const g=n.get(w);i.deleteTexture(g.__webglTexture);const N=w.source,H=p.get(N);delete H[g.__cacheKey],a.memory.textures--}function I(w){const g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let K=0;K<g.__webglFramebuffer[H].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[H][K]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=w.textures;for(let H=0,K=N.length;H<K;H++){const se=n.get(N[H]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(N[H])}n.remove(w)}let D=0;function B(){D=0}function L(){return D}function G(w){D=w}function A(){const w=D;return w>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function U(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function Y(w,g){const N=n.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const H=w.image;if(H===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(N,w,g);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function X(w,g){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){xe(N,w,g);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function $(w,g){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){xe(N,w,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function ee(w,g){const N=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){Le(N,w,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const Me={[di]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[_r]:i.MIRRORED_REPEAT},me={[mt]:i.NEAREST,[Qc]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[bt]:i.LINEAR,[Br]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},qe={[nd]:i.NEVER,[od]:i.ALWAYS,[id]:i.LESS,[To]:i.LEQUAL,[sd]:i.EQUAL,[Eo]:i.GEQUAL,[rd]:i.GREATER,[ad]:i.NOTEQUAL};function Be(w,g){if(g.type===cn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===bt||g.magFilter===Br||g.magFilter===ps||g.magFilter===Sn||g.minFilter===bt||g.minFilter===Br||g.minFilter===ps||g.minFilter===Sn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Me[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Me[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Me[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,me[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,qe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===mt||g.minFilter!==ps&&g.minFilter!==Sn||g.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(w,g){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",C));const H=g.source;let K=p.get(H);K===void 0&&(K={},p.set(H,K));const se=U(g);if(se!==w.__cacheKey){K[se]===void 0&&(K[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[se].usedTimes++;const ae=K[w.__cacheKey];ae!==void 0&&(K[w.__cacheKey].usedTimes--,ae.usedTimes===0&&R(g)),w.__cacheKey=se,w.__webglTexture=K[se].texture}return N}function Z(w,g,N){return Math.floor(Math.floor(w/N)/g)}function te(w,g,N,H){const se=w.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,H,g.data);else{se.sort((Te,le)=>Te.start-le.start);let ae=0;for(let Te=1;Te<se.length;Te++){const le=se[ae],re=se[Te],Ae=le.start+le.count,Pe=Z(re.start,g.width,4),ke=Z(le.start,g.width,4);re.start<=Ae+1&&Pe===ke&&Z(re.start+re.count-1,g.width,4)===Pe?le.count=Math.max(le.count,re.start+re.count-le.start):(++ae,se[ae]=re)}se.length=ae+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Te=0,le=se.length;Te<le;Te++){const re=se[Te],Ae=Math.floor(re.start/4),Pe=Math.ceil(re.count/4),ke=Ae%g.width,k=Math.floor(Ae/g.width),he=Pe,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,ke,k,he,j,N,H,g.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function xe(w,g,N){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const K=Ke(w,g),se=g.source;t.bindTexture(H,w.__webglTexture,i.TEXTURE0+N);const ae=n.get(se);if(se.version!==ae.__version||K===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const j=Ye.getPrimaries(Ye.workingColorSpace),ce=g.colorSpace===Qn?null:Ye.getPrimaries(g.colorSpace),pe=g.colorSpace===Qn||j===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,s.maxTextureSize);Q=ne(g,Q);const oe=r.convert(g.format,g.colorSpace),Te=r.convert(g.type);let le=y(g.internalFormat,oe,Te,g.normalized,g.colorSpace,g.isVideoTexture);Be(H,g);let re;const Ae=g.mipmaps,Pe=g.isVideoTexture!==!0,ke=ae.__version===void 0||K===!0,k=se.dataReady,he=b(g,Q);if(g.isDepthTexture)le=S(g.format===li,g.type),ke&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,le,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,le,Q.width,Q.height,0,oe,Te,null));else if(g.isDataTexture)if(Ae.length>0){Pe&&ke&&t.texStorage2D(i.TEXTURE_2D,he,le,Ae[0].width,Ae[0].height);for(let j=0,ce=Ae.length;j<ce;j++)re=Ae[j],Pe?k&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,re.width,re.height,oe,Te,re.data):t.texImage2D(i.TEXTURE_2D,j,le,re.width,re.height,0,oe,Te,re.data);g.generateMipmaps=!1}else Pe?(ke&&t.texStorage2D(i.TEXTURE_2D,he,le,Q.width,Q.height),k&&te(g,Q,oe,Te)):t.texImage2D(i.TEXTURE_2D,0,le,Q.width,Q.height,0,oe,Te,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,le,Ae[0].width,Ae[0].height,Q.depth);for(let j=0,ce=Ae.length;j<ce;j++)if(re=Ae[j],g.format!==nn)if(oe!==null)if(Pe){if(k)if(g.layerUpdates.size>0){const pe=Ul(re.width,re.height,g.format,g.type);for(const ie of g.layerUpdates){const Re=re.data.subarray(ie*pe/re.data.BYTES_PER_ELEMENT,(ie+1)*pe/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ie,re.width,re.height,1,oe,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,re.width,re.height,Q.depth,oe,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,le,re.width,re.height,Q.depth,0,re.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,re.width,re.height,Q.depth,oe,Te,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,le,re.width,re.height,Q.depth,0,oe,Te,re.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Pe&&ke&&t.texStorage2D(i.TEXTURE_2D,he,le,Ae[0].width,Ae[0].height);for(let j=0,ce=Ae.length;j<ce;j++)re=Ae[j],g.format!==nn?oe!==null?Pe?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,re.width,re.height,oe,re.data):t.compressedTexImage2D(i.TEXTURE_2D,j,le,re.width,re.height,0,re.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?k&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,re.width,re.height,oe,Te,re.data):t.texImage2D(i.TEXTURE_2D,j,le,re.width,re.height,0,oe,Te,re.data)}else if(g.isDataArrayTexture)if(Pe){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,le,Q.width,Q.height,Q.depth),k)if(g.layerUpdates.size>0){const j=Ul(Q.width,Q.height,g.format,g.type);for(const ce of g.layerUpdates){const pe=Q.data.subarray(ce*j/Q.data.BYTES_PER_ELEMENT,(ce+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,Q.width,Q.height,1,oe,Te,pe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,Q.width,Q.height,Q.depth,0,oe,Te,Q.data);else if(g.isData3DTexture)Pe?(ke&&t.texStorage3D(i.TEXTURE_3D,he,le,Q.width,Q.height,Q.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,le,Q.width,Q.height,Q.depth,0,oe,Te,Q.data);else if(g.isFramebufferTexture){if(ke)if(Pe)t.texStorage2D(i.TEXTURE_2D,he,le,Q.width,Q.height);else{let j=Q.width,ce=Q.height;for(let pe=0;pe<he;pe++)t.texImage2D(i.TEXTURE_2D,pe,le,j,ce,0,oe,Te,null),j>>=1,ce>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),u.add(g),j.onpaint=ce=>{const pe=ce.changedElements;for(const ie of u)pe.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const pe=i.RGBA,ie=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,ie,Re,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Pe&&ke){const j=ve(Ae[0]);t.texStorage2D(i.TEXTURE_2D,he,le,j.width,j.height)}for(let j=0,ce=Ae.length;j<ce;j++)re=Ae[j],Pe?k&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe,Te,re):t.texImage2D(i.TEXTURE_2D,j,le,oe,Te,re);g.generateMipmaps=!1}else if(Pe){if(ke){const j=ve(Q);t.texStorage2D(i.TEXTURE_2D,he,le,j.width,j.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,le,oe,Te,Q);f(g)&&T(H),ae.__version=se.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Le(w,g,N){if(g.image.length!==6)return;const H=Ke(w,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);const se=n.get(K);if(K.version!==se.__version||H===!0){t.activeTexture(i.TEXTURE0+N);const ae=Ye.getPrimaries(Ye.workingColorSpace),J=g.colorSpace===Qn?null:Ye.getPrimaries(g.colorSpace),Q=g.colorSpace===Qn||ae===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const oe=g.isCompressedTexture||g.image[0].isCompressedTexture,Te=g.image[0]&&g.image[0].isDataTexture,le=[];for(let ie=0;ie<6;ie++)!oe&&!Te?le[ie]=m(g.image[ie],!0,s.maxCubemapSize):le[ie]=Te?g.image[ie].image:g.image[ie],le[ie]=ne(g,le[ie]);const re=le[0],Ae=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type),ke=y(g.internalFormat,Ae,Pe,g.normalized,g.colorSpace),k=g.isVideoTexture!==!0,he=se.__version===void 0||H===!0,j=K.dataReady;let ce=b(g,re);Be(i.TEXTURE_CUBE_MAP,g);let pe;if(oe){k&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,ke,re.width,re.height);for(let ie=0;ie<6;ie++){pe=le[ie].mipmaps;for(let Re=0;Re<pe.length;Re++){const we=pe[Re];g.format!==nn?Ae!==null?k?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,ke,we.width,we.height,0,we.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,we.width,we.height,Ae,Pe,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,ke,we.width,we.height,0,Ae,Pe,we.data)}}}else{if(pe=g.mipmaps,k&&he){pe.length>0&&ce++;const ie=ve(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,ke,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Te){k?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,le[ie].width,le[ie].height,Ae,Pe,le[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,le[ie].width,le[ie].height,0,Ae,Pe,le[ie].data);for(let Re=0;Re<pe.length;Re++){const ct=pe[Re].image[ie].image;k?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,ct.width,ct.height,Ae,Pe,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,ke,ct.width,ct.height,0,Ae,Pe,ct.data)}}else{k?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,Pe,le[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,Ae,Pe,le[ie]);for(let Re=0;Re<pe.length;Re++){const we=pe[Re];k?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Ae,Pe,we.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,ke,Ae,Pe,we.image[ie])}}}f(g)&&T(i.TEXTURE_CUBE_MAP),se.__version=K.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ge(w,g,N,H,K,se){const ae=r.convert(N.format,N.colorSpace),J=r.convert(N.type),Q=y(N.internalFormat,ae,J,N.normalized,N.colorSpace),oe=n.get(g),Te=n.get(N);if(Te.__renderTarget=g,!oe.__hasExternalTextures){const le=Math.max(1,g.width>>se),re=Math.max(1,g.height>>se);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,se,Q,le,re,g.depth,0,ae,J,null):t.texImage2D(K,se,Q,le,re,0,ae,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,K,Te.__webglTexture,0,ht(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,K,Te.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(w,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){const H=g.depthTexture,K=H&&H.isDepthTexture?H.type:null,se=S(g.stencilBuffer,K),ae=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),se,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,w)}else{const H=g.textures;for(let K=0;K<H.length;K++){const se=H[K],ae=r.convert(se.format,se.colorSpace),J=r.convert(se.type),Q=y(se.internalFormat,ae,J,se.normalized,se.colorSpace);gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),Q,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(w,g,N){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Be(i.TEXTURE_CUBE_MAP,g.depthTexture);const oe=r.convert(g.depthTexture.format),Te=r.convert(g.depthTexture.type);let le;g.depthTexture.format===Bn?le=i.DEPTH_COMPONENT24:g.depthTexture.format===li&&(le=i.DEPTH24_STENCIL8);for(let re=0;re<6;re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,le,g.width,g.height,0,oe,Te,null)}}else Y(g.depthTexture,0);const se=K.__webglTexture,ae=ht(g),J=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Q=g.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Bn)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,se,0);else if(g.depthTexture.format===li)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(w){const g=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const H=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=H}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let H=0;H<6;H++)vt(g.__webglFramebuffer[H],w,H);else{const H=w.texture.mipmaps;H&&H.length>0?vt(g.__webglFramebuffer[0],w,0):vt(g.__webglFramebuffer,w,0)}else if(N){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Oe(g.__webglDepthbuffer[H],w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,se)}}else{const H=w.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Oe(g.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(w,g,N){const H=n.get(w);g!==void 0&&ge(H.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&ze(w)}function nt(w){const g=w.texture,N=n.get(w),H=n.get(g);w.addEventListener("dispose",_);const K=w.textures,se=w.isWebGLCubeRenderTarget===!0,ae=K.length>1;if(ae||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),se){N.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[J]=[];for(let Q=0;Q<g.mipmaps.length;Q++)N.__webglFramebuffer[J][Q]=i.createFramebuffer()}else N.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)N.__webglFramebuffer[J]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ae)for(let J=0,Q=K.length;J<Q;J++){const oe=n.get(K[J]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&gt(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const Q=K[J];N.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[J]);const oe=r.convert(Q.format,Q.colorSpace),Te=r.convert(Q.type),le=y(Q.internalFormat,oe,Te,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),re=ht(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,N.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Be(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(N.__webglFramebuffer[J][Q],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else ge(N.__webglFramebuffer[J],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(g)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let J=0,Q=K.length;J<Q;J++){const oe=K[J],Te=n.get(oe);let le=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Te.__webglTexture),Be(le,oe),ge(N.__webglFramebuffer,w,oe,i.COLOR_ATTACHMENT0+J,le,0),f(oe)&&T(le)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,H.__webglTexture),Be(J,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(N.__webglFramebuffer[Q],w,g,i.COLOR_ATTACHMENT0,J,Q);else ge(N.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,J,0);f(g)&&T(J),t.unbindTexture()}w.depthBuffer&&ze(w)}function Fe(w){const g=w.textures;for(let N=0,H=g.length;N<H;N++){const K=g[N];if(f(K)){const se=P(w),ae=n.get(K).__webglTexture;t.bindTexture(se,ae),T(se),t.unbindTexture()}}}const it=[],_t=[];function Ut(w){if(w.samples>0){if(gt(w)===!1){const g=w.textures,N=w.width,H=w.height;let K=i.COLOR_BUFFER_BIT;const se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(w),J=g.length>1;if(J)for(let oe=0;oe<g.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Q=w.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<g.length;oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Te=n.get(g[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,K,i.NEAREST),l===!0&&(it.length=0,_t.length=0,it.push(i.COLOR_ATTACHMENT0+oe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(it.push(se),_t.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let oe=0;oe<g.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Te=n.get(g[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ht(w){return Math.min(s.maxSamples,w.samples)}function gt(w){const g=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(w){const g=a.render.frame;d.get(w)!==g&&(d.set(w,g),w.update())}function ne(w,g){const N=w.colorSpace,H=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Mr&&N!==Qn&&(Ye.getTransfer(N)===et?(H!==nn||K!==Vt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",N)),g}function ve(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=A,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=ee,this.rebindTextures=Xe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function r0(i,e){function t(n,s=Qn){let r;const a=Ye.getTransfer(s);if(n===Vt)return i.UNSIGNED_BYTE;if(n===xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rh)return i.BYTE;if(n===Ch)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===_o)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Dh)return i.RGB;if(n===nn)return i.RGBA;if(n===Bn)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===Mo)return i.RED;if(n===So)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===wo)return i.RGBA_INTEGER;if(n===dr||n===ur||n===fr||n===pr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===Ia||n===La||n===Da)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Na||n===Fa||n===ka||n===Oa||n===xr||n===Ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Na)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ka)return r.COMPRESSED_R11_EAC;if(n===Oa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xr)return r.COMPRESSED_RG11_EAC;if(n===Ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===za||n===Ga||n===Ha||n===Wa||n===Va||n===Xa||n===Ya||n===qa||n===Ka||n===$a||n===Za||n===Ja||n===Qa||n===ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===to||n===no)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===io||n===so||n===yr||n===ro)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const a0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zt({vertexShader:a0,fragmentShader:o0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Ct(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h0 extends pi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,u=null,c=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",m=new l0,f={},T=t.getContextAttributes();let P=null,y=null;const S=[],b=[],C=new De;let _=null,E=null;const R=new $t;R.viewport=new pt;const I=new $t;I.viewport=new pt;const D=[R,I],B=new gu;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=S[Z];return te===void 0&&(te=new Yr,S[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=S[Z];return te===void 0&&(te=new Yr,S[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=S[Z];return te===void 0&&(te=new Yr,S[Z]=te),te.getHandSpace()};function A(Z){const te=b.indexOf(Z.inputSource);if(te===-1)return;const xe=S[te];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,h||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<S.length;Z++){const te=b[Z];te!==null&&(b[Z]=null,S[Z].disconnect(te))}L=null,G=null,m.reset();for(const Z in f)delete f[Z];if(e.setRenderTarget(P),p=null,c=null,u=null,s=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),E!==null){const Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",U),s.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Le=null,ge=null;T.depth&&(ge=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=T.stencil?li:Bn,Le=T.stencil?Ss:Tn);const Oe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),c=u.createProjectionLayer(Oe),s.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),y=new sn(c.textureWidth,c.textureHeight,{format:nn,type:Vt,depthTexture:new As(c.textureWidth,c.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{const xe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new sn(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Z){for(let te=0;te<Z.removed.length;te++){const xe=Z.removed[te],Le=b.indexOf(xe);Le>=0&&(b[Le]=null,S[Le].disconnect(xe))}for(let te=0;te<Z.added.length;te++){const xe=Z.added[te];let Le=b.indexOf(xe);if(Le===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=b.length){b.push(xe),Le=Oe;break}else if(b[Oe]===null){b[Oe]=xe,Le=Oe;break}if(Le===-1)break}const ge=S[Le];ge&&ge.connect(xe)}}const X=new z,$=new z;function ee(Z,te,xe){X.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(xe.matrixWorld);const Le=X.distanceTo($),ge=te.projectionMatrix.elements,Oe=xe.projectionMatrix.elements,vt=ge[14]/(ge[10]-1),ze=ge[14]/(ge[10]+1),Xe=(ge[9]+1)/ge[5],nt=(ge[9]-1)/ge[5],Fe=(ge[8]-1)/ge[0],it=(Oe[8]+1)/Oe[0],_t=vt*Fe,Ut=vt*it,ht=Le/(-Fe+it),gt=ht*-Fe;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(gt),Z.translateZ(ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ge[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const O=vt+ht,ne=ze+ht,ve=_t-gt,w=Ut+(Le-gt),g=Xe*ze/ne*O,N=nt*ze/ne*O;Z.projectionMatrix.makePerspective(ve,w,g,N,O,ne),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Me(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,xe=Z.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),B.near=I.near=R.near=te,B.far=I.far=R.far=xe,(L!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,G=B.far),B.layers.mask=Z.layers.mask|6,R.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;const Le=Z.parent,ge=B.cameras;Me(B,Le);for(let Oe=0;Oe<ge.length;Oe++)Me(ge[Oe],Le);ge.length===2?ee(B,R,I):B.projectionMatrix.copy(R.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),me(Z,B,Le)};function me(Z,te,xe){xe===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ts*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(Z){l=Z,c!==null&&(c.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return f[Z]};let qe=null;function Be(Z,te){if(d=te.getViewerPose(h||a),v=te,d!==null){const xe=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Le=!1;xe.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let ze=0;ze<xe.length;ze++){const Xe=xe[ze];let nt=null;if(p!==null)nt=p.getViewport(Xe);else{const it=u.getViewSubImage(c,Xe);nt=it.viewport,ze===0&&(e.setRenderTargetTextures(y,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(y))}let Fe=D[ze];Fe===void 0&&(Fe=new $t,Fe.layers.enable(ze),Fe.viewport=new pt,D[ze]=Fe),Fe.matrix.fromArray(Xe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Xe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(nt.x,nt.y,nt.width,nt.height),ze===0&&(B.matrix.copy(Fe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(Fe)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const ze=u.getDepthInformation(xe[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,s.renderState)}if(ge&&ge.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let ze=0;ze<xe.length;ze++){const Xe=xe[ze].camera;if(Xe){let nt=f[Xe];nt||(nt=new qh,f[Xe]=nt);const Fe=u.getCameraImage(Xe);nt.sourceTexture=Fe}}}}for(let xe=0;xe<S.length;xe++){const Le=b[xe],ge=S[xe];Le!==null&&ge!==void 0&&ge.update(Le,te,h||a)}qe&&qe(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const Ke=new Qh;Ke.setAnimationLoop(Be),this.setAnimationLoop=function(Z){qe=Z},this.dispose=function(){}}}const c0=new je,rc=new Ne;rc.set(-1,0,0,0,1,0,0,0,1);function d0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Kh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,P,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),c(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,P):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),P=T.envMap,y=T.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(c0.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,P){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=P*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const b=S.program;n.uniformBlockBinding(y,b)}function h(y,S){let b=s[y.id];b===void 0&&(m(y),b=d(y),s[y.id]=b,y.addEventListener("dispose",T));const C=S.program;n.updateUBOMapping(y,C);const _=e.render.frame;r[y.id]!==_&&(c(y),r[y.id]=_)}function d(y){const S=u();y.__bindingPointIndex=S;const b=i.createBuffer(),C=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){const S=s[y.id],b=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,E=b.length;_<E;_++){const R=b[_];if(Array.isArray(R))for(let I=0,D=R.length;I<D;I++)p(R[I],_,I,C);else p(R,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,b,C){if(M(y,S,b,C)===!0){const _=y.__offset,E=y.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){const D=E[I],B=f(D);v(D,y.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function v(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function M(y,S,b,C){const _=y.value,E=S+"_"+b;if(C[E]===void 0)return typeof _=="number"||typeof _=="boolean"?C[E]=_:ArrayBuffer.isView(_)?C[E]=_.slice():C[E]=_.clone(),!0;{const R=C[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(y){const S=y.uniforms;let b=0;const C=16;for(let E=0,R=S.length;E<R;E++){const I=Array.isArray(S[E])?S[E]:[S[E]];for(let D=0,B=I.length;D<B;D++){const L=I[D],G=Array.isArray(L.value)?L.value:[L.value];for(let A=0,U=G.length;A<U;A++){const Y=G[A],X=f(Y),$=b%C,ee=$%X.boundary,Me=$+ee;b+=ee,Me!==0&&C-Me<X.storage&&(b+=C-Me),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=X.storage}}}const _=b%C;return _>0&&(b+=C-_),y.__size=b,y.__cache={},this}function f(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",y),S}function T(y){const S=y.target;S.removeEventListener("dispose",T);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function P(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:h,dispose:P}}const f0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function p0(){return vn===null&&(vn=new Po(f0,16,16,ui,un),vn.name="DFG_LUT",vn.minFilter=bt,vn.magFilter=bt,vn.wrapS=Un,vn.wrapT=Un,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class m0{constructor(e={}){const{canvas:t=hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:c=!1,outputBufferType:p=Vt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const M=p,m=new Set([wo,bo,So]),f=new Set([Vt,Tn,Ms,Ss,xo,yo]),T=new Uint32Array(4),P=new Int32Array(4),y=new z;let S=null,b=null;const C=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,D=null,B=null,L=null,G=null;this._outputColorSpace=Pt;let A=0,U=0,Y=null,X=-1,$=null;const ee=new pt,Me=new pt;let me=null;const qe=new Ue(0);let Be=0,Ke=t.width,Z=t.height,te=1,xe=null,Le=null;const ge=new pt(0,0,Ke,Z),Oe=new pt(0,0,Ke,Z);let vt=!1;const ze=new Io;let Xe=!1,nt=!1;const Fe=new je,it=new z,_t=new pt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function gt(){return Y===null?te:1}let O=n;function ne(x,F){return t.getContext(x,F)}let ve,w,g,N,H,K,se,ae,J,Q,oe,Te,le,re,Ae,Pe,ke,k,he,j,ce,pe,ie;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mo}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",rn,!1),O===null){const F="webgl2";if(O=ne(F,x),O===null)throw ne(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(x){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Ze("WebGLRenderer: "+x.message),x}function Re(){ve=new pm(O),ve.init(),ce=new r0(O,ve),w=new sm(O,ve,e,ce),g=new i0(O,ve),w.reversedDepthBuffer&&c&&g.buffers.depth.setReversed(!0),B=O.createFramebuffer(),L=O.createFramebuffer(),G=O.createFramebuffer(),N=new vm(O),H=new Wg,K=new s0(O,ve,g,H,w,ce,N),se=new fm(R),ae=new _u(O),pe=new nm(O,ae),J=new mm(O,ae,N,pe),Q=new xm(O,J,ae,pe,N),k=new _m(O,w,K),Ae=new rm(H),oe=new Hg(R,se,ve,w,pe,Ae),Te=new d0(R,H),le=new Xg,re=new Jg(ve),ke=new tm(R,se,g,Q,v,l),Pe=new n0(R,Q,w),ie=new u0(O,N,w,g),he=new im(O,ve,N),j=new gm(O,ve,N),N.programs=oe.programs,R.capabilities=w,R.extensions=ve,R.properties=H,R.renderLists=le,R.shadowMap=Pe,R.state=g,R.info=N}M!==Vt&&(E=new Mm(M,t.width,t.height,o,s,r));const we=new h0(R,O);this.xr=we,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const x=ve.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ve.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(x){x!==void 0&&(te=x,this.setSize(Ke,Z,!1))},this.getSize=function(x){return x.set(Ke,Z)},this.setSize=function(x,F,q=!0){if(we.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=x,Z=F,t.width=Math.floor(x*te),t.height=Math.floor(F*te),q===!0&&(t.style.width=x+"px",t.style.height=F+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(Ke*te,Z*te).floor()},this.setDrawingBufferSize=function(x,F,q){Ke=x,Z=F,te=q,t.width=Math.floor(x*q),t.height=Math.floor(F*q),this.setViewport(0,0,x,F)},this.setEffects=function(x){if(M===Vt){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let F=0;F<x.length;F++)if(x[F].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ee)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,F,q,W){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,F,q,W),g.viewport(ee.copy(ge).multiplyScalar(te).round())},this.getScissor=function(x){return x.copy(Oe)},this.setScissor=function(x,F,q,W){x.isVector4?Oe.set(x.x,x.y,x.z,x.w):Oe.set(x,F,q,W),g.scissor(Me.copy(Oe).multiplyScalar(te).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(x){g.setScissorTest(vt=x)},this.setOpaqueSort=function(x){xe=x},this.setTransparentSort=function(x){Le=x},this.getClearColor=function(x){return x.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(x=!0,F=!0,q=!0){let W=0;if(x){let V=!1;if(Y!==null){const fe=Y.texture.format;V=m.has(fe)}if(V){const fe=Y.texture.type,ye=f.has(fe),ue=ke.getClearColor(),Se=ke.getClearAlpha(),Ee=ue.r,Ge=ue.g,We=ue.b;ye?(T[0]=Ee,T[1]=Ge,T[2]=We,T[3]=Se,O.clearBufferuiv(O.COLOR,0,T)):(P[0]=Ee,P[1]=Ge,P[2]=We,P[3]=Se,O.clearBufferiv(O.COLOR,0,P))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),D=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),ke.dispose(),le.dispose(),re.dispose(),H.dispose(),se.dispose(),Q.dispose(),pe.dispose(),ie.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Vo),we.removeEventListener("sessionend",Xo),ei.stop()};function ct(x){x.preventDefault(),br("WebGLRenderer: Context Lost."),I=!0}function Je(){br("WebGLRenderer: Context Restored."),I=!1;const x=N.autoReset,F=Pe.enabled,q=Pe.autoUpdate,W=Pe.needsUpdate,V=Pe.type;Re(),N.autoReset=x,Pe.enabled=F,Pe.autoUpdate=q,Pe.needsUpdate=W,Pe.type=V}function rn(x){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function pn(x){const F=x.target;F.removeEventListener("dispose",pn),Sc(F)}function Sc(x){bc(x),H.remove(x)}function bc(x){const F=H.get(x).programs;F!==void 0&&(F.forEach(function(q){oe.releaseProgram(q)}),x.isShaderMaterial&&oe.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,q,W,V,fe){F===null&&(F=Ut);const ye=V.isMesh&&V.matrixWorld.determinantAffine()<0,ue=Ec(x,F,q,W,V);g.setMaterial(W,ye);let Se=q.index,Ee=1;if(W.wireframe===!0){if(Se=J.getWireframeAttribute(q),Se===void 0)return;Ee=2}const Ge=q.drawRange,We=q.attributes.position;let be=Ge.start*Ee,Qe=(Ge.start+Ge.count)*Ee;fe!==null&&(be=Math.max(be,fe.start*Ee),Qe=Math.min(Qe,(fe.start+fe.count)*Ee)),Se!==null?(be=Math.max(be,0),Qe=Math.min(Qe,Se.count)):We!=null&&(be=Math.max(be,0),Qe=Math.min(Qe,We.count));const yt=Qe-be;if(yt<0||yt===1/0)return;pe.setup(V,W,ue,q,Se);let ut,at=he;if(Se!==null&&(ut=ae.get(Se),at=j,at.setIndex(ut)),V.isMesh)W.wireframe===!0?(g.setLineWidth(W.wireframeLinewidth*gt()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if(V.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),g.setLineWidth(Nt*gt()),V.isLineSegments?at.setMode(O.LINES):V.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else V.isPoints?at.setMode(O.POINTS):V.isSprite&&at.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Nt=V._multiDrawStarts,_e=V._multiDrawCounts,Gt=V._multiDrawCount,$e=Se?ae.get(Se).bytesPerElement:1,Jt=H.get(W).currentProgram.getUniforms();for(let mn=0;mn<Gt;mn++)Jt.setValue(O,"_gl_DrawID",mn),at.render(Nt[mn]/$e,_e[mn])}else if(V.isInstancedMesh)at.renderInstances(be,yt,V.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_e=Math.min(q.instanceCount,Nt);at.renderInstances(be,yt,_e)}else at.render(be,yt)};function Wo(x,F,q,W){D!==null&&x.isNodeMaterial&&D.setObject(W,x),Xe===!0&&Ae.setState(x,q,!1),x.transparent===!0&&x.side===St&&x.forceSinglePass===!1?(x.side=Xt,x.needsUpdate=!0,Ps(x,F,W),x.side=hi,x.needsUpdate=!0,Ps(x,F,W),x.side=St):Ps(x,F,W)}this.compile=function(x,F,q=null){q===null&&(q=x),D!==null&&D.renderStart(x,F,q),b=re.get(q),b.init(F),_.push(b),q.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),x!==q&&x.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),nt=this.localClippingEnabled,Xe=Ae.init(this.clippingPlanes,nt),Xe===!0&&Ae.setGlobalState(this.clippingPlanes,F),D!==null&&Pe.render(b.state.shadowsArray,q,F);const W=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const ue=fe[ye];Wo(ue,q,F,V),W.add(ue)}else Wo(fe,q,F,V),W.add(fe)}),b=_.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(x,F,q=null){const W=this.compile(x,F,q);return new Promise(V=>{function fe(){if(W.forEach(function(ye){const Se=H.get(ye).currentProgram;(Se===void 0||Se.isReady())&&W.delete(ye)}),W.size===0){V(x);return}setTimeout(fe,10)}ve.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Nr=null;function wc(x){Nr&&Nr(x)}function Vo(){ei.stop()}function Xo(){ei.start()}const ei=new Qh;ei.setAnimationLoop(wc),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(x){Nr=x,we.setAnimationLoop(x),x===null?ei.stop():ei.start()},we.addEventListener("sessionstart",Vo),we.addEventListener("sessionend",Xo),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(x,F);const q=we.enabled===!0&&we.isPresenting===!0,W=E!==null&&(Y===null||q)&&E.begin(R,Y);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(F),F=we.getCamera()),x.isScene===!0&&x.onBeforeRender(R,x,F,Y),b=re.get(x,_.length),b.init(F),b.state.textureUnits=K.getTextureUnits(),_.push(b),Fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ze.setFromProjectionMatrix(Fe,bn,F.reversedDepth),nt=this.localClippingEnabled,Xe=Ae.init(this.clippingPlanes,nt),S=le.get(x,C.length),S.init(),C.push(S),we.enabled===!0&&we.isPresenting===!0){const ye=R.xr.getDepthSensingMesh();ye!==null&&Fr(ye,F,-1/0,R.sortObjects)}Fr(x,F,0,R.sortObjects),S.finish(),D!==null&&D.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(xe,Le),ht=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ht&&ke.addToRenderList(S,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Ae.beginShadows();const V=b.state.shadowsArray;if(Pe.render(V,x,F),Xe===!0&&Ae.endShadows(),(W&&E.hasRenderPass())===!1){const ye=S.opaque,ue=S.transmissive;if(b.setupLights(),F.isArrayCamera){const Se=F.cameras;if(ue.length>0)for(let Ee=0,Ge=Se.length;Ee<Ge;Ee++){const We=Se[Ee];qo(ye,ue,x,We)}ht&&ke.render(x);for(let Ee=0,Ge=Se.length;Ee<Ge;Ee++){const We=Se[Ee];Yo(S,x,We,We.viewport)}}else ue.length>0&&qo(ye,ue,x,F),ht&&ke.render(x),Yo(S,x,F)}Y!==null&&U===0&&(K.updateMultisampleRenderTarget(Y),K.updateRenderTargetMipmap(Y)),W&&E.end(R),x.isScene===!0&&x.onAfterRender(R,x,F),pe.resetDefaultState(),X=-1,$=null,_.pop(),_.length>0?(b=_[_.length-1],K.setTextureUnits(b.state.textureUnits),Xe===!0&&Ae.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,D!==null&&D.renderEnd()};function Fr(x,F,q,W){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(ze)){W&&_t.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Fe);const ye=Q.update(x),ue=x.material;ue.visible&&S.push(x,ye,ue,q,_t.z,null,F)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(ze))){const ye=Q.update(x),ue=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),_t.copy(x.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),_t.copy(ye.boundingSphere.center)),_t.applyMatrix4(x.matrixWorld).applyMatrix4(Fe)),Array.isArray(ue)){const Se=ye.groups;for(let Ee=0,Ge=Se.length;Ee<Ge;Ee++){const We=Se[Ee],be=ue[We.materialIndex];be&&be.visible&&S.push(x,ye,be,q,_t.z,We,F)}}else ue.visible&&S.push(x,ye,ue,q,_t.z,null,F)}}const fe=x.children;for(let ye=0,ue=fe.length;ye<ue;ye++)Fr(fe[ye],F,q,W)}function Yo(x,F,q,W){const{opaque:V,transmissive:fe,transparent:ye}=x;b.setupLightsView(q),Xe===!0&&Ae.setGlobalState(R.clippingPlanes,q),W&&g.viewport(ee.copy(W)),V.length>0&&Cs(V,F,q),fe.length>0&&Cs(fe,F,q),ye.length>0&&Cs(ye,F,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function qo(x,F,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const be=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new sn(1,1,{generateMipmaps:!0,type:be?un:Vt,minFilter:Sn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const fe=b.state.transmissionRenderTarget[W.id],ye=W.viewport||ee;fe.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);const ue=R.getRenderTarget(),Se=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(fe),R.getClearColor(qe),Be=R.getClearAlpha(),Be<1&&R.setClearColor(16777215,.5),R.clear(),ht&&ke.render(q);const Ge=R.toneMapping;R.toneMapping=wn;const We=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Xe===!0&&Ae.setGlobalState(R.clippingPlanes,W),Cs(x,q,W),K.updateMultisampleRenderTarget(fe),K.updateRenderTargetMipmap(fe),ve.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Qe=0,yt=F.length;Qe<yt;Qe++){const ut=F[Qe],{object:at,geometry:Nt,material:_e,group:Gt}=ut;if(_e.side===St&&at.layers.test(W.layers)){const $e=_e.side;_e.side=Xt,_e.needsUpdate=!0,Ko(at,q,W,Nt,_e,Gt),_e.side=$e,_e.needsUpdate=!0,be=!0}}be===!0&&(K.updateMultisampleRenderTarget(fe),K.updateRenderTargetMipmap(fe))}R.setRenderTarget(ue,Se,Ee),R.setClearColor(qe,Be),We!==void 0&&(W.viewport=We),R.toneMapping=Ge}function Cs(x,F,q){const W=F.isScene===!0?F.overrideMaterial:null;for(let V=0,fe=x.length;V<fe;V++){const ye=x[V],{object:ue,geometry:Se,group:Ee}=ye;let Ge=ye.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),ue.layers.test(q.layers)&&Ko(ue,F,q,Se,Ge,Ee)}}function Ko(x,F,q,W,V,fe){D!==null&&V.isNodeMaterial&&D.setObject(x,V),x.onBeforeRender(R,F,q,W,V,fe),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(R,F,q,W,x,fe),V.transparent===!0&&V.side===St&&V.forceSinglePass===!1?(V.side=Xt,V.needsUpdate=!0,R.renderBufferDirect(q,F,W,V,x,fe),V.side=hi,V.needsUpdate=!0,R.renderBufferDirect(q,F,W,V,x,fe),V.side=St):R.renderBufferDirect(q,F,W,V,x,fe),x.onAfterRender(R,F,q,W,V,fe)}function Ps(x,F,q){F.isScene!==!0&&(F=Ut);const W=H.get(x),V=b.state.lights,fe=b.state.shadowsArray,ye=V.state.version,ue=oe.getParameters(x,V.state,fe,F,q,b.state.lightProbeGridArray),Se=oe.getProgramCacheKey(ue);let Ee=W.programs;W.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const Ge=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;W.envMap=se.get(x.envMap||W.environment,Ge),W.envMapRotation=W.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",pn),Ee=new Map,W.programs=Ee);let We=Ee.get(Se);if(We!==void 0){if(W.currentProgram===We&&W.lightsStateVersion===ye)return Zo(x,ue),We}else ue.uniforms=oe.getUniforms(x),D!==null&&x.isNodeMaterial&&D.build(x,q,ue),x.onBeforeCompile(ue,R),We=oe.acquireProgram(ue,Se),Ee.set(Se,We),W.uniforms=ue.uniforms;const be=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=Ae.uniform),Zo(x,ue),W.needsLights=Rc(x),W.lightsStateVersion=ye,W.needsLights&&(be.ambientLightColor.value=V.state.ambient,be.lightProbe.value=V.state.probe,be.sunLights.value=V.state.sun,be.sunLightShadows.value=V.state.sunShadow,be.directionalLights.value=V.state.directional,be.directionalLightShadows.value=V.state.directionalShadow,be.spotLights.value=V.state.spot,be.spotLightShadows.value=V.state.spotShadow,be.rectAreaLights.value=V.state.rectArea,be.ltc_1.value=V.state.rectAreaLTC1,be.ltc_2.value=V.state.rectAreaLTC2,be.pointLights.value=V.state.point,be.pointLightShadows.value=V.state.pointShadow,be.hemisphereLights.value=V.state.hemi,be.sunShadowMatrix.value=V.state.sunShadowMatrix,be.sunShadowCascade.value=V.state.sunShadowCascade,be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,be.spotLightMatrix.value=V.state.spotLightMatrix,be.spotLightMap.value=V.state.spotLightMap,be.pointShadowMatrix.value=V.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=We,W.uniformsList=null,We}function $o(x){if(x.uniformsList===null){const F=x.currentProgram.getUniforms();x.uniformsList=mr.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function Zo(x,F){const q=H.get(x);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Tc(x,F){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let q=0,W=x.length;q<W;q++){const V=x[q];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Ec(x,F,q,W,V){F.isScene!==!0&&(F=Ut),K.resetTextureUnits();const fe=F.fog,ye=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,ue=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ye.workingColorSpace,Se=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ee=se.get(W.envMap||ye,Se),Ge=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,yt=!!q.morphAttributes.color;let ut=wn;W.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ut=R.toneMapping);const at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Nt=at!==void 0?at.length:0,_e=H.get(W),Gt=b.state.lights;if(Xe===!0&&(nt===!0||x!==$)){const dt=x===$&&W.id===X;Ae.setState(W,x,dt)}let $e=!1;W.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Gt.state.version||_e.outputColorSpace!==ue||V.isBatchedMesh&&_e.batching===!1||!V.isBatchedMesh&&_e.batching===!0||V.isBatchedMesh&&_e.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&_e.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&_e.instancing===!1||!V.isInstancedMesh&&_e.instancing===!0||V.isSkinnedMesh&&_e.skinning===!1||!V.isSkinnedMesh&&_e.skinning===!0||V.isInstancedMesh&&_e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&_e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&_e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&_e.instancingMorph===!1&&V.morphTexture!==null||_e.envMap!==Ee||W.fog===!0&&_e.fog!==fe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ae.numPlanes||_e.numIntersection!==Ae.numIntersection)||_e.vertexAlphas!==Ge||_e.vertexTangents!==We||_e.morphTargets!==be||_e.morphNormals!==Qe||_e.morphColors!==yt||_e.toneMapping!==ut||_e.morphTargetsCount!==Nt||!!_e.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,_e.__version=W.version);let Jt=_e.currentProgram;$e===!0&&(Jt=Ps(W,F,V),D&&W.isNodeMaterial&&D.onUpdateProgram(W,Jt,_e));let mn=!1,Hn=!1,vi=!1;const st=Jt.getUniforms(),xt=_e.uniforms;if(g.useProgram(Jt.program)&&(mn=!0,Hn=!0,vi=!0),W.id!==X&&(X=W.id,Hn=!0),_e.needsLights){const dt=Tc(b.state.lightProbeGridArray,V);_e.lightProbeGrid!==dt&&(_e.lightProbeGrid=dt,Hn=!0)}if(mn||$!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),st.setValue(O,"projectionMatrix",x.projectionMatrix),st.setValue(O,"viewMatrix",x.matrixWorldInverse);const Vn=st.map.cameraPosition;Vn!==void 0&&Vn.setValue(O,it.setFromMatrixPosition(x.matrixWorld)),w.logarithmicDepthBuffer&&st.setValue(O,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&st.setValue(O,"isOrthographic",x.isOrthographicCamera===!0),$!==x&&($=x,Hn=!0,vi=!0)}if(_e.needsLights&&(Gt.state.sunShadowMap.length>0&&st.setValue(O,"sunShadowMap",Gt.state.sunShadowMap,K),Gt.state.directionalShadowMap.length>0&&st.setValue(O,"directionalShadowMap",Gt.state.directionalShadowMap,K),Gt.state.spotShadowMap.length>0&&st.setValue(O,"spotShadowMap",Gt.state.spotShadowMap,K),Gt.state.pointShadowMap.length>0&&st.setValue(O,"pointShadowMap",Gt.state.pointShadowMap,K)),V.isSkinnedMesh){st.setOptional(O,V,"bindMatrix"),st.setOptional(O,V,"bindMatrixInverse");const dt=V.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),st.setValue(O,"boneTexture",dt.boneTexture,K))}V.isBatchedMesh&&(st.setOptional(O,V,"batchingTexture"),st.setValue(O,"batchingTexture",V._matricesTexture,K),st.setOptional(O,V,"batchingIdTexture"),st.setValue(O,"batchingIdTexture",V._indirectTexture,K),st.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&st.setValue(O,"batchingColorTexture",V._colorsTexture,K));const Wn=q.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&k.update(V,q,Jt),(Hn||_e.receiveShadow!==V.receiveShadow)&&(_e.receiveShadow=V.receiveShadow,st.setValue(O,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(xt.envMapIntensity.value=F.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=p0()),Hn){if(st.setValue(O,"toneMappingExposure",R.toneMappingExposure),_e.needsLights&&Ac(xt,vi),fe&&W.fog===!0&&Te.refreshFogUniforms(xt,fe),Te.refreshMaterialUniforms(xt,W,te,Z,b.state.transmissionRenderTarget[x.id]),_e.needsLights&&_e.lightProbeGrid){const dt=_e.lightProbeGrid;xt.probesSH.value=dt.texture,xt.probesMin.value.copy(dt.boundingBox.min),xt.probesMax.value.copy(dt.boundingBox.max),xt.probesResolution.value.copy(dt.resolution)}mr.upload(O,$o(_e),xt,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(mr.upload(O,$o(_e),xt,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&st.setValue(O,"center",V.center),st.setValue(O,"modelViewMatrix",V.modelViewMatrix),st.setValue(O,"normalMatrix",V.normalMatrix),st.setValue(O,"modelMatrix",V.matrixWorld),W.uniformsGroups!==void 0){const dt=W.uniformsGroups;for(let Vn=0,_i=dt.length;Vn<_i;Vn++){const Qo=dt[Vn];ie.update(Qo,Jt),ie.bind(Qo,Jt)}}return Jt}function Ac(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.sunLights.needsUpdate=F,x.sunLightShadows.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function Rc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(x,F,q){const W=H.get(x);W.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(x.texture).__webglTexture=F,H.get(x.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,F){const q=H.get(x);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(x,F=0,q=0){Y=x,A=F,U=q;let W=null,V=!1,fe=!1;if(x){const ue=H.get(x);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(O.FRAMEBUFFER,ue.__webglFramebuffer),ee.copy(x.viewport),Me.copy(x.scissor),me=x.scissorTest,g.viewport(ee),g.scissor(Me),g.setScissorTest(me),X=-1;return}else if(ue.__webglFramebuffer===void 0)K.setupRenderTarget(x);else if(ue.__hasExternalTextures)K.rebindTextures(x,H.get(x.texture).__webglTexture,H.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ge=x.depthTexture;if(ue.__boundDepthTexture!==Ge){if(Ge!==null&&H.has(Ge)&&(x.width!==Ge.image.width||x.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(x)}}const Se=x.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(fe=!0);const Ee=H.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[F])?W=Ee[F][q]:W=Ee[F],V=!0):x.samples>0&&K.useMultisampledRTT(x)===!1?W=H.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?W=Ee[q]:W=Ee,ee.copy(x.viewport),Me.copy(x.scissor),me=x.scissorTest}else ee.copy(ge).multiplyScalar(te).floor(),Me.copy(Oe).multiplyScalar(te).floor(),me=vt;if(q!==0&&(W=B),g.bindFramebuffer(O.FRAMEBUFFER,W)&&g.drawBuffers(x,W),g.viewport(ee),g.scissor(Me),g.setScissorTest(me),V){const ue=H.get(x.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,ue.__webglTexture,q)}else if(fe){const ue=F;for(let Se=0;Se<x.textures.length;Se++){const Ee=H.get(x.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Ee.__webglTexture,q,ue)}}else if(x!==null&&q!==0){const ue=H.get(x.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ue.__webglTexture,q)}X=-1};function Jo(x){const F=H.get(x);return(F.__readFormat!==x.format||F.__readType!==x.type)&&(F.__readFormat=x.format,F.__readType=x.type,F.__formatReadable=w.textureFormatReadable(x.format),F.__typeReadable=w.textureTypeReadable(x.type)),F}this.readRenderTargetPixels=function(x,F,q,W,V,fe,ye,ue=0){if(!(x&&x.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){g.bindFramebuffer(O.FRAMEBUFFER,Se);try{const Ee=x.textures[ue],Ge=Ee.format,We=Ee.type;x.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ue);const be=Jo(Ee);if(be.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-W&&q>=0&&q<=x.height-V&&O.readPixels(F,q,W,V,ce.convert(Ge),ce.convert(We),fe)}finally{const Ee=Y!==null?H.get(Y).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,F,q,W,V,fe,ye,ue=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se)if(F>=0&&F<=x.width-W&&q>=0&&q<=x.height-V){g.bindFramebuffer(O.FRAMEBUFFER,Se);const Ee=x.textures[ue],Ge=Ee.format,We=Ee.type;x.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ue);const be=Jo(Ee);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Qe),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(F,q,W,V,ce.convert(Ge),ce.convert(We),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const yt=Y!==null?H.get(Y).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,yt);const ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await cd(O,ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Qe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Qe),O.deleteSync(ut),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,F=null,q=0){const W=Math.pow(2,-q),V=Math.floor(x.image.width*W),fe=Math.floor(x.image.height*W),ye=F!==null?F.x:0,ue=F!==null?F.y:0;K.setTexture2D(x,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,ye,ue,V,fe),g.unbindTexture()},this.copyTextureToTexture=function(x,F,q=null,W=null,V=0,fe=0){let ye,ue,Se,Ee,Ge,We,be,Qe,yt;const ut=x.isCompressedTexture?x.mipmaps[fe]:x.image;if(q!==null)ye=q.max.x-q.min.x,ue=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,Ee=q.min.x,Ge=q.min.y,We=q.isBox3?q.min.z:0;else{const xt=Math.pow(2,-V);ye=Math.floor(ut.width*xt),ue=Math.floor(ut.height*xt),x.isDataArrayTexture?Se=ut.depth:x.isData3DTexture?Se=Math.floor(ut.depth*xt):Se=1,Ee=0,Ge=0,We=0}W!==null?(be=W.x,Qe=W.y,yt=W.z):(be=0,Qe=0,yt=0);const at=ce.convert(F.format),Nt=ce.convert(F.type);let _e;F.isData3DTexture?(K.setTexture3D(F,0),_e=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),_e=O.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),_e=O.TEXTURE_2D),g.activeTexture(O.TEXTURE0),g.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const Gt=g.getParameter(O.UNPACK_ROW_LENGTH),$e=g.getParameter(O.UNPACK_IMAGE_HEIGHT),Jt=g.getParameter(O.UNPACK_SKIP_PIXELS),mn=g.getParameter(O.UNPACK_SKIP_ROWS),Hn=g.getParameter(O.UNPACK_SKIP_IMAGES);g.pixelStorei(O.UNPACK_ROW_LENGTH,ut.width),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ut.height),g.pixelStorei(O.UNPACK_SKIP_PIXELS,Ee),g.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),g.pixelStorei(O.UNPACK_SKIP_IMAGES,We);const vi=x.isDataArrayTexture||x.isData3DTexture,st=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){const xt=H.get(x),Wn=H.get(F),dt=H.get(xt.__renderTarget),Vn=H.get(Wn.__renderTarget);g.bindFramebuffer(O.READ_FRAMEBUFFER,dt.__webglFramebuffer),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let _i=0;_i<Se;_i++)vi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(x).__webglTexture,V,We+_i),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(F).__webglTexture,fe,yt+_i)),O.blitFramebuffer(Ee,Ge,ye,ue,be,Qe,ye,ue,O.DEPTH_BUFFER_BIT,O.NEAREST);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||H.has(x)){const xt=H.get(x),Wn=H.get(F);g.bindFramebuffer(O.READ_FRAMEBUFFER,L),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let dt=0;dt<Se;dt++)vi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xt.__webglTexture,V,We+dt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xt.__webglTexture,V),st?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Wn.__webglTexture,fe,yt+dt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Wn.__webglTexture,fe),V!==0?O.blitFramebuffer(Ee,Ge,ye,ue,be,Qe,ye,ue,O.COLOR_BUFFER_BIT,O.NEAREST):st?O.copyTexSubImage3D(_e,fe,be,Qe,yt+dt,Ee,Ge,ye,ue):O.copyTexSubImage2D(_e,fe,be,Qe,Ee,Ge,ye,ue);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else st?x.isDataTexture||x.isData3DTexture?O.texSubImage3D(_e,fe,be,Qe,yt,ye,ue,Se,at,Nt,ut.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(_e,fe,be,Qe,yt,ye,ue,Se,at,ut.data):O.texSubImage3D(_e,fe,be,Qe,yt,ye,ue,Se,at,Nt,ut):x.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,fe,be,Qe,ye,ue,at,Nt,ut.data):x.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,fe,be,Qe,ut.width,ut.height,at,ut.data):O.texSubImage2D(O.TEXTURE_2D,fe,be,Qe,ye,ue,at,Nt,ut);g.pixelStorei(O.UNPACK_ROW_LENGTH,Gt),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,$e),g.pixelStorei(O.UNPACK_SKIP_PIXELS,Jt),g.pixelStorei(O.UNPACK_SKIP_ROWS,mn),g.pixelStorei(O.UNPACK_SKIP_IMAGES,Hn),fe===0&&F.generateMipmaps&&O.generateMipmap(_e),g.unbindTexture()},this.initRenderTarget=function(x){H.get(x).__webglFramebuffer===void 0&&K.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?K.setTextureCube(x,0):x.isData3DTexture?K.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?K.setTexture2DArray(x,0):K.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){A=0,U=0,Y=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}function g0(i=window.location.search){const e=new URLSearchParams(i);return{remnant:e.get("remnant")?.trim()||"",mock:e.get("mock")==="1"}}const v0=g0();function _0(){if(!("serviceWorker"in navigator))return;const i=document.createElement("div");i.className="offline-status",i.textContent="Preparing offline play...";const e=document.createElement("button");e.className="portable-button install-app",e.textContent="Install Amulith",e.hidden=!0,document.body.append(i,e);let t=null;window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),t=n,e.hidden=!1}),e.onclick=async()=>{t&&(await t.prompt(),t=null,e.hidden=!0)},navigator.serviceWorker.register("./sw.js").then(()=>navigator.serviceWorker.ready).then(()=>{i.textContent="Offline play ready"}).catch(()=>{i.textContent="Play online, or use the desktop download for offline play."})}class x0{listeners=new Map;on(e,t){let n=this.listeners.get(e);return n||this.listeners.set(e,n=new Set),n.add(t),()=>{n.delete(t)}}emit(e,t){for(const n of[...this.listeners.get(e)??[]])n(t)}}const Nn=new x0,sr=1/60,y0=.1;function M0(i){let e,t=0,n=0;const s=a=>{const o=e===void 0?0:Math.min(y0,Math.max(0,(a-e)/1e3));for(e=a,i.frame(),t+=o;t>=sr;)i.update(sr),t-=sr;i.render(t/sr,o),n=requestAnimationFrame(s)},r=()=>{e=void 0,t=0};return document.addEventListener("visibilitychange",r),n=requestAnimationFrame(s),()=>{cancelAnimationFrame(n),document.removeEventListener("visibilitychange",r)}}const Gi={pulse:{keys:["Space"],button:0},dash:{keys:["ShiftLeft","ShiftRight"],button:1},interact:{keys:["KeyF"],button:2},ask:{keys:["KeyE"],button:3},pause:{keys:["Escape"],button:9},judge:{keys:["KeyJ"],button:8},bloom:{keys:["Digit1","Numpad1"],button:-1},blight:{keys:["Digit2","Numpad2"],button:-1},empty:{keys:["Digit0","Numpad0"],button:-1}},S0=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight","KeyQ","KeyR",...Object.values(Gi).flatMap(i=>i.keys)]);class b0{actions={move:{x:0,y:0},pulse:!1,dash:!1,interact:!1,ask:!1,pause:!1,judge:!1,bloom:!1,blight:!1,empty:!1,lanternDelta:0};keys=new Set;edges=new Set;pending=new Set;focused=!0;keyDown=e=>{if(!(!S0.has(e.code)||e.ctrlKey||e.metaKey||e.altKey)){if(e.preventDefault(),!e.repeat&&!this.keys.has(e.code))for(const t of Object.keys(Gi))Gi[t].keys.includes(e.code)&&this.pending.add(t);this.keys.add(e.code)}};keyUp=e=>{this.keys.delete(e.code)};blur=()=>{this.focused=!1,this.reset()};focus=()=>{this.focused=!0};reset=()=>{this.keys.clear(),this.edges.clear(),this.pending.clear(),this.actions.move.x=this.actions.move.y=this.actions.lanternDelta=0;for(const e of Object.keys(Gi))this.actions[e]=!1};constructor(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),window.addEventListener("blur",this.blur),window.addEventListener("focus",this.focus),window.addEventListener("gamepaddisconnected",this.reset)}poll(){if(this.edges.clear(),!this.focused||document.hidden){this.reset();return}const e=Array.from(navigator.getGamepads?.()??[]).find(l=>l?.connected&&l.mapping==="standard");let t=e?.axes[0]??0,n=e?.axes[1]??0;const s=Math.hypot(t,n);if(s<=.2)t=0,n=0;else{const l=Math.min(1,(s-.2)/.8);t=t/s*l,n=n/s*l}const r=(...l)=>l.some(h=>this.keys.has(h)),a=l=>+!!e?.buttons[l]?.pressed;t+=Number(r("KeyD","ArrowRight"))-Number(r("KeyA","ArrowLeft"))+a(15)-a(14),n+=Number(r("KeyS","ArrowDown"))-Number(r("KeyW","ArrowUp"))+a(13)-a(12);const o=Math.hypot(t,n);this.actions.move.x=t/Math.max(1,o),this.actions.move.y=n/Math.max(1,o);for(const l of Object.keys(Gi)){const h=Gi[l],d=r(...h.keys)||!!e?.buttons[h.button]?.pressed;(this.pending.has(l)||d&&!this.actions[l])&&this.edges.add(l),this.actions[l]=d}this.actions.lanternDelta=Math.max(-1,Math.min(1,(e?.buttons[7]?.value??0)-(e?.buttons[6]?.value??0)+Number(r("KeyR"))-Number(r("KeyQ")))),this.pending.clear()}pressed(e){return this.edges.has(e)}held(e){return this.actions[e]}dispose(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),window.removeEventListener("blur",this.blur),window.removeEventListener("focus",this.focus),window.removeEventListener("gamepaddisconnected",this.reset),this.reset()}}const Wi={width:60,depth:40,minX:-30,maxX:30,minZ:-20,maxZ:20},w0=[{id:"hollow",label:"Mushroom Hollow",x:-20,color:10915681},{id:"glade",label:"Petal Glade",x:0,color:7707523},{id:"rootdeep",label:"Rootdeep",x:20,color:8615057}];function T0(){const i=new It,e=new Ct(Wi.width/3,Wi.depth),t=[];for(const n of w0){const s=new dn({color:n.color});t.push(s);const r=new lt(e,s);r.rotation.x=-Math.PI/2,r.position.x=n.x,i.add(r)}return{group:i,dispose:()=>{e.dispose(),t.forEach(n=>n.dispose())}}}const E0=3,ih=.18,A0=.8;class R0{remaining=0;cooldown=0;direction={x:0,y:0};dash(e,t){const n=Math.hypot(e.x,e.y);return t||this.cooldown>0||n<.01?!1:(this.direction={x:e.x/n,y:e.y/n},this.remaining=ih,this.cooldown=A0,!0)}step(e,t,n){if(n)return this.remaining=0,{x:0,y:0};this.cooldown=Math.max(0,this.cooldown-e);const s=Math.min(e,this.remaining);this.remaining=Math.max(0,this.remaining-e);const r=E0/ih;return{x:this.direction.x*r*s+t.x*6*(e-s),y:this.direction.y*r*s+t.y*6*(e-s)}}}class C0{motion=new R0;position=new z;previous=new z;visual=new It;texture;geometry=new Ct(1.8,2.7);material;cutout;constructor(){const e=document.createElement("canvas");e.width=128,e.height=192;const t=e.getContext("2d");t.strokeStyle="#202d2a",t.lineWidth=7,t.lineJoin="round",t.fillStyle="#ddbd77",t.beginPath(),t.moveTo(45,84),t.lineTo(88,84),t.lineTo(109,162),t.lineTo(20,162),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#f1dfb6",t.beginPath(),t.ellipse(65,59,31,37,0,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#334b45",t.beginPath(),t.moveTo(25,50),t.lineTo(54,9),t.lineTo(95,51),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#202d2a",t.fillRect(77,58,7,9),t.fillRect(35,164,18,22),t.fillRect(77,164,18,22),this.texture=new Zi(e),this.texture.colorSpace=Pt,this.material=new zn({map:this.texture,alphaTest:.5,side:St}),this.cutout=new lt(this.geometry,this.material),this.cutout.position.y=1.35,this.visual.add(this.cutout)}update(e,t,n=!1,s){this.previous.copy(this.position);const r=this.motion.step(e,t,n),a=Math.max(1,Math.ceil(Math.hypot(r.x,r.y)/.15));for(let o=0;o<a;o++)this.position.x+=r.x/a,this.position.z+=r.y/a,s?.(this.position),this.position.x=fi.clamp(this.position.x,Wi.minX+.9,Wi.maxX-.9),this.position.z=fi.clamp(this.position.z,Wi.minZ+.9,Wi.maxZ-.9);Math.abs(t.x)>.01&&(this.cutout.scale.x=t.x<0?-1:1)}render(e,t){this.visual.position.lerpVectors(this.previous,this.position,e),this.visual.rotation.y=Math.atan2(t.position.x-this.visual.position.x,t.position.z-this.visual.position.z)}dispose(){this.texture.dispose(),this.geometry.dispose(),this.material.dispose()}}const P0={id:"grove",bounds:{minX:-30,maxX:30,minZ:-20,maxZ:20},start:{x:0,z:5},terrain:{groundTint:7707523,propTint:16777215,profile:"grove"},obstacles:[],props:[],shards:[{id:"s3",zone:"glade",x:-4,z:-10},{id:"s4",zone:"glade",x:7,z:7}],shardCount:1,enemies:[{zone:"hollow",count:2},{zone:"rootdeep",count:2}],waves:[],tuning:{chaseSpeed:2.5,wanderSpeed:1,damage:.1,attackCooldown:1,landRadius:.8},exit:{x:-18,z:7,radius:2,next:"hollow"},signs:[{id:"grove-paths",x:-12,z:7},{id:"grove-shrine",x:0,z:5}],targetSeconds:110},sh=[{x:-13,z:-6,r:1.2},{x:-13,z:6,r:1.2},{x:-9,z:-6,r:1.3},{x:-9,z:6,r:1.3},{x:-2,z:-4,r:1.4},{x:-2,z:4,r:1.4},{x:3,z:-4,r:1.2},{x:3,z:4,r:1.2},{x:11,z:-7,r:1.4},{x:14,z:6,r:1.3},{x:18,z:-7,r:1.1},{x:-18,z:11,r:1.1}],I0={id:"hollow",bounds:{minX:-22,maxX:22,minZ:-14,maxZ:14},start:{x:-18,z:0},terrain:{groundTint:11575681,propTint:12953555,profile:"hollow"},obstacles:sh,props:sh.map((i,e)=>({x:i.x,z:i.z,asset:e%3===0?"props/blight-mushrooms.png":"props/mushrooms.png",width:i.r*2.4,height:i.r*2.5,tint:e%3===0?11967181:14075044})),shards:[{id:"s1",zone:"hollow",x:-5,z:-9},{id:"s2",zone:"hollow",x:8,z:9}],shardCount:1,enemies:[{zone:"hollow",count:1,x:-7,z:0},{zone:"hollow",count:1,x:14,z:0}],waves:[{after:18,zone:"hollow",count:2},{after:38,zone:"hollow",count:2},{after:58,zone:"hollow",count:2}],tuning:{chaseSpeed:3,wanderSpeed:1.15,damage:.12,attackCooldown:.9,landRadius:1},exit:{x:18,z:0,radius:2,next:"deepwood"},signs:[{id:"hollow-caps",x:-17,z:-3},{id:"hollow-whisperseed",x:-7,z:-10},{id:"hollow-spora",x:10,z:10}],targetSeconds:75},L0={id:"deepwood",bounds:{minX:-16,maxX:16,minZ:-12,maxZ:12},start:{x:0,z:9},terrain:{groundTint:6509678,propTint:10057659,profile:"roots"},obstacles:[{x:-10,z:4,r:1.35},{x:-6,z:4,r:1.35},{x:-2,z:4,r:1.35},{x:3,z:-2,r:1.35},{x:7,z:-2,r:1.35},{x:11,z:-2,r:1.35}],props:[{x:-10,z:4,asset:"props/blight-tree.png",width:4,height:6},{x:-6,z:4,asset:"props/blight-tree.png",width:4,height:6},{x:-2,z:4,asset:"props/blight-tree.png",width:4,height:6},{x:3,z:-2,asset:"props/blight-tree.png",width:4,height:6},{x:7,z:-2,asset:"props/blight-tree.png",width:4,height:6},{x:11,z:-2,asset:"props/blight-tree.png",width:4,height:6},{x:0,z:-9,asset:"props/shrine-circle.png",width:4,height:2,tint:10057659}],shards:[{id:"s5",zone:"rootdeep",x:-11,z:-7},{id:"s6",zone:"rootdeep",x:11,z:-7}],shardCount:1,enemies:[{zone:"rootdeep",count:2,x:-8,z:-1},{zone:"rootdeep",count:1,x:9,z:-7}],waves:[{after:22,zone:"rootdeep",count:1},{after:42,zone:"rootdeep",count:1}],tuning:{chaseSpeed:3.35,wanderSpeed:1.3,damage:.14,attackCooldown:.85,landRadius:1.1},exit:{x:0,z:-9,radius:2,next:null},signs:[{id:"deepwood-buried",x:0,z:7},{id:"deepwood-dryad",x:-11,z:-5},{id:"deepwood-collosus",x:11,z:-5}],targetSeconds:60},ga={grove:P0,hollow:I0,deepwood:L0};function D0(i){const e=new URLSearchParams(i).get("level");return e==="hollow"||e==="deepwood"?e:"grove"}class U0{constructor(e="grove"){this.initial=e,this.current=ga[e]}initial;current;transitioning=!1;departing=null;curtainTime=0;pending=null;elapsed=0;waves=new Set;reset(){this.current=ga[this.initial],this.elapsed=0,this.waves.clear(),this.transitioning=!1,this.pending=null,this.departing=null}beginExit(e,t){const n=this.current.exit;return!t||this.transitioning||Math.hypot(e.x-n.x,e.z-n.z)>n.radius||!n.next?!1:(this.transitioning=!0,this.departing=this.current.id,this.curtainTime=0,this.pending=n.next,!0)}update(e,t,n,s){if(t){if(this.transitioning){this.curtainTime+=e,this.curtainTime>=.6&&this.pending&&(this.current=ga[this.pending],this.pending=null,this.elapsed=0,this.waves.clear(),n(this.current)),this.curtainTime>=1.2&&(this.transitioning=!1,this.departing=null);return}this.elapsed+=e,this.current.waves.forEach((r,a)=>{this.elapsed>=r.after&&!this.waves.has(a)&&(this.waves.add(a),s(r.zone,r.count))})}}}const jn={grove:{name:"Shrine Grove",subtitle:"Where the broken gem took root",introLines:["Place him on the stone. The roots remember Lenny.","The knight sleeps beneath my moss. Come closer, little Wanderer."],outroBloom:["A piece of me falls silent. You call that kindness?","Go on. The moss still holds the knight."],outroBlight:["You brought my broken heart a little closer.","Follow the roots. They know the way home."],signs:[{id:"grove-shrine",text:"Lenny was freed when the gem broke. Something beneath the stone stayed awake."},{id:"grove-paths",text:"Mushroom Hollow, Petal Glade, Rootdeep. Follow the paths, but mind what follows you."},{id:"grove-moss",text:"T.K. lies beside Lenny. Leave room for the knight to stand."}],ambience:{mood:"hushed expectancy",notes:"Warm shrine light against crowded roots. Bloom brings gold between the leaves; Blight lets violet shadow gather around the stone."}},hollow:{name:"Mushroom Hollow",subtitle:"Under the listening caps",introLines:["Keep your lantern close. Even the caps lean toward a secret.","Spora listens where you cannot see. I listen where you cannot reach."],outroBloom:["You leave flowers where my voice used to be.","Do you think the oldest roots will open for you?"],outroBlight:["Another piece remembers me. Spora will hear it singing.","Deeper now. The roots have kept something for us."],signs:[{id:"hollow-caps",text:"The caps rose after the shards sank. Beneath them, the soil never quite sleeps."},{id:"hollow-whisperseed",text:"Whisperseed listens for the silence after a shard breaks."},{id:"hollow-spora",text:"Spora keeps watch beneath the caps. A gathered shard is a promise kept to the gem."}],ambience:{mood:"close and watchful",notes:"Low caps crowd the lantern and hide the distance. Bloom opens pockets of golden light; Blight leaves luminous veins beneath a violet canopy."}},deepwood:{name:"Rootdeep",subtitle:"Where the oldest roots hold fast",introLines:["Here is what the gem left behind. I have been awake all this time.","The knight has his sword. You have your lantern. I have the roots."],outroBloom:["The last piece breaks. I cannot hold the knight any longer.","Let T.K. stand beside Lenny. Leave me the dark beneath the roots."],outroBlight:["My pieces meet again. Listen to the trees closing behind you.","Let T.K. sleep beside Lenny. You have brought me home."],signs:[{id:"deepwood-buried",text:"The gem shattered. Its pieces sank. The roots grew faster than anyone could follow."},{id:"deepwood-dryad",text:"Dryad and Petalborn tend a path toward the knight. No root has the right to keep him."},{id:"deepwood-collosus",text:"Chomper, Spora, Collosus. Keep the pieces together. Keep the forest ours."}],ambience:{mood:"held breath",notes:"Thick roots close around the lantern. Bloom light finds the moss-covered knight; Blight draws every vein toward the buried gem."}}},co={uLantern:{value:new z(0,0,7.5)},uLanternDark:{value:.4}},rh=new WeakSet;function ah(i){if(rh.has(i)||!i.isMeshLambertMaterial)return;rh.add(i);const e=i.onBeforeCompile.bind(i),t=i.customProgramCacheKey.bind(i);i.onBeforeCompile=(n,s)=>{e(n,s),Object.assign(n.uniforms,co),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vLanternXZ;`).replace("#include <project_vertex>",`#include <project_vertex>
vec4 lanternW = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
lanternW = instanceMatrix * lanternW;
#endif
vLanternXZ = (modelMatrix * lanternW).xz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vLanternXZ;
uniform vec3 uLantern;
uniform float uLanternDark;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
float lanternD = floor(distance(vLanternXZ, uLantern.xy) * 3.0) / 3.0;
float lanternLit = 1.0 - smoothstep(uLantern.z * 0.72, uLantern.z, lanternD);
gl_FragColor.rgb *= mix(1.0 - uLanternDark, 1.0, lanternLit);
gl_FragColor.rgb *= mix(vec3(1.0), vec3(1.07, 1.02, 0.9), lanternLit * uLanternDark);`)},i.customProgramCacheKey=()=>`${t()}|lantern`,i.needsUpdate=!0}function Zn(i){i.traverse(e=>{const t=e.material;Array.isArray(t)?t.forEach(ah):t&&ah(t)})}function N0(i,e,t,n,s){const r=new It;r.name="level-layout",i.add(r);let a=[];const o=new hu;let l="";const h=document.createElement("aside");h.setAttribute("aria-live","polite"),h.dataset.levelOverlay="",h.style.cssText="position:fixed;left:18px;top:72px;max-width:360px;padding:10px;background:#1b2029db;color:#f1dfb6;font:14px Georgia;pointer-events:none;z-index:25;white-space:pre-line",document.body.append(h);const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:#c9b58c;background-image:linear-gradient(90deg,#b39b75 0%,#d6c39e 25%,#c9b58c 50%,#d6c39e 75%,#b39b75 100%);color:#302d29;display:none;align-items:center;justify-content:center;font:28px Georgia;z-index:100;pointer-events:none",d.setAttribute("aria-live","polite"),d.dataset.levelCurtain="",document.body.append(d);const u=()=>{a.forEach(m=>m.dispose()),a=[],r.clear();const c=e.levels.current;if(l=c.id,t.forEach((m,f)=>{m.visible=f===0||c.id==="grove"}),t[0]?.traverse(m=>{if(m instanceof lt&&!(m instanceof Es)){const f=Array.isArray(m.material)?m.material:[m.material];for(const T of f)T instanceof dn&&T.color.setHex(c.id==="grove"?16777215:c.terrain.groundTint)}}),c.id!=="grove"){const m=[];for(let T=c.bounds.minX;T<=c.bounds.maxX;T+=3)for(const P of[c.bounds.minZ-.8,c.bounds.maxZ+.8])m.push({x:T,z:P,asset:c.id==="hollow"?"props/mushrooms.png":"props/blight-tree.png",width:3,height:c.id==="hollow"?3:5});for(let T=c.bounds.minZ+3;T<c.bounds.maxZ;T+=3)for(const P of[c.bounds.minX-.8,c.bounds.maxX+.8])m.push({x:P,z:T,asset:c.id==="hollow"?"props/mushrooms.png":"props/blight-tree.png",width:3,height:c.id==="hollow"?3:5});const f=new Map;for(const T of[...c.props,...m]){const P=[T.asset,T.width,T.height,T.tint??c.terrain.propTint].join("|"),y=f.get(P)??[];y.push(T),f.set(P,y)}for(const T of f.values()){const P=T[0],y=o.load("./art/"+P.asset);y.colorSpace=Pt,y.magFilter=mt;const S=new Ct(P.width,P.height).translate(0,P.height/2,0),b=new dn({map:y,color:P.tint??c.terrain.propTint,alphaTest:.5,side:St}),C=new Es(S,b,T.length),_=new Gn().setFromEuler(new fn(-(Math.PI/2-n)*.85,0,0)),E=new je,R=new z,I=new z(1,1,1);T.forEach((D,B)=>C.setMatrixAt(B,E.compose(R.set(D.x,0,D.z),_,I))),r.add(C),a.push(y,S,b,C)}}Zn(r);const p=new Do(c.exit.radius*.75,c.exit.radius,32),v=new zn({color:16112009,side:St,transparent:!0,opacity:.65}),M=new lt(p,v);M.rotation.x=-Math.PI/2,M.position.set(c.exit.x,.08,c.exit.z),r.add(M),a.push(p,v)};return u(),{frame(){l!==e.levels.current.id&&u();const c=e.levels.current,p=jn[c.id],v=c.shards.filter(S=>e.shards.sites.find(b=>b.id===S.id)?.resolved).length>=c.shardCount,M=c.signs.find(S=>Math.hypot(S.x-s.x,S.z-s.z)<3),m=M?p.signs.find(S=>S.id===M.id)?.text:"";h.hidden=e.run.phase==="attract"||e.run.phase==="ending";const f=p.name+`
`+p.subtitle+`
`+(e.levels.elapsed<8?p.introLines[0]+`
`:"")+(m?m+`
`:"")+(v?"Follow the gold ring to "+(c.exit.next?jn[c.exit.next].name:"finish the run")+".":"Find the shard, then follow the gold ring.");h.textContent!==f&&(h.textContent=f),d.style.display=e.levels.transitioning?"flex":"none";const T=e.levels.departing?jn[e.levels.departing]:p,P=e.faction==="bloom"?T.outroBloom:T.outroBlight,y=e.levels.departing===c.id?P[0]:p.name;d.textContent!==y&&(d.textContent=y)},dispose(){a.forEach(c=>c.dispose()),i.remove(r),h.remove(),d.remove()}}}const F0=1,rr=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),Tr=i=>typeof i=="number"&&Number.isFinite(i),va=i=>Tr(i)&&i>=0&&i<=1,oh=i=>Tr(i)&&i>=0,_n=(i,e)=>typeof i=="string"&&e.includes(i),lh=["hollow","glade","rootdeep"];function k0(i){try{const e=typeof i=="string"?JSON.parse(i):null;if(!rr(e))return null;let t=!1;switch(e.type){case"hello":t=e.version===F0&&_n(e.mode,["live","mock"])&&["llm_ready","shrine_ready","relic_ready"].every(n=>typeof e[n]=="boolean");break;case"shrine":t=_n(e.state,["empty","sleepy","angry","hand"])&&va(e.confidence);break;case"relic":t=va(e.knob)&&_n(e.button,["down","up"]);break;case"thinking":t=typeof e.active=="boolean";break;case"speech":t=typeof e.id=="string"&&typeof e.url=="string"&&oh(e.duration_ms)&&_n(e.engine,["elevenlabs","cached","piper"]);break;case"telemetry":t=["gpu_pct","cpu_pct","ram_used_mb","ram_total_mb","power_mw","temp_c","tok_s"].every(n=>e[n]===null||Tr(e[n]));break;case"director":{const n=e.spread===null||rr(e.spread)&&_n(e.spread.zone,lh)&&va(e.spread.amount),s=e.spawn===null||rr(e.spawn)&&_n(e.spawn.kind,["chomper","petalborn"])&&_n(e.spawn.zone,lh)&&Tr(e.spawn.count)&&Number.isInteger(e.spawn.count)&&e.spawn.count>=1&&e.spawn.count<=4,r=e.hint===null||rr(e.hint)&&_n(e.hint.shard,["s1","s2","s3","s4","s5","s6"])&&typeof e.hint.riddle=="string"&&typeof e.hint.truthful=="boolean";t=typeof e.id=="string"&&typeof e.line=="string"&&_n(e.mood,["calm","smug","furious"])&&_n(e.source,["llm","scripted"])&&oh(e.latency_ms)&&n&&s&&r;break}}return t?e:null}catch{return null}}class O0{constructor(e,t,n={}){this.host=e,this.bus=t,this.options=n}host;bus;options;socket=null;retry;stopped=!0;mode="offline";get connected(){return this.socket?.readyState===1}start(){!this.stopped||!this.host||(this.stopped=!1,this.connect())}connect(){if(!this.stopped)try{const e=/^wss?:\/\//.test(this.host)?this.host:`${globalThis.location?.protocol==="https:"?"wss":"ws"}://${this.host}`,t=(this.options.socketFactory??(n=>new WebSocket(n)))(`${e.replace(/\/$/,"")}/ws`);this.socket=t,t.onopen=()=>{this.stopped||this.socket!==t||this.bus.emit("connection",{connected:!0,mode:this.mode})},t.onmessage=n=>{if(this.stopped||this.socket!==t)return;const s=k0(n.data);if(s)switch(s.type==="hello"&&(this.mode=s.mode,this.bus.emit("connection",{connected:!0,mode:this.mode})),s.type){case"hello":this.bus.emit("hello",s);break;case"shrine":this.bus.emit("shrine",s);break;case"relic":this.bus.emit("relic",s);break;case"director":this.bus.emit("director",s);break;case"speech":this.bus.emit("speech",s);break;case"thinking":this.bus.emit("thinking",s);break;case"telemetry":this.bus.emit("telemetry",s);break}},t.onerror=()=>{this.socket===t&&!this.stopped&&t.close()},t.onclose=()=>{this.socket!==t||this.stopped||(this.socket=null,this.mode="offline",this.bus.emit("connection",{connected:!1,mode:"offline"}),this.schedule())}}catch{this.schedule()}}schedule(){this.stopped||this.retry!==void 0||(this.retry=setTimeout(()=>{this.retry=void 0,this.connect()},this.options.retryMs??2e3))}send(e){if(!this.connected)return!1;try{return this.socket.send(JSON.stringify(e)),!0}catch{return!1}}dispose(){this.stopped=!0,clearTimeout(this.retry),this.retry=void 0;const e=this.socket;this.socket=null,e&&(e.onopen=e.onmessage=e.onerror=e.onclose=null,e.close()),this.mode="offline"}}class B0{data=[];get length(){return this.data.length}push(e){this.data.push(e);let t=this.data.length-1;for(;t>0;){const n=t-1>>1;if(this.data[n].score<=e.score)break;this.data[t]=this.data[n],t=n}this.data[t]=e}pop(){const e=this.data[0],t=this.data.pop();if(this.data.length){let n=0;for(;n*2+1<this.data.length;){let s=n*2+1;if(s+1<this.data.length&&this.data[s+1].score<this.data[s].score&&s++,t.score<=this.data[s].score)break;this.data[n]=this.data[s],n=s}this.data[n]=t}return e}}function hh(i,e){const t=Math.abs(i.x-e.x),n=Math.abs(i.y-e.y);return Math.max(t,n)+(Math.SQRT2-1)*Math.min(t,n)}function z0(i,e,t){const n=i.length,s=i[0]?.length??0;if(!s||i.some(u=>u.length!==s))return[];const r=u=>Number.isInteger(u.x)&&Number.isInteger(u.y)&&u.x>=0&&u.x<s&&u.y>=0&&u.y<n&&i[u.y][u.x];if(!r(e)||!r(t))return[];const a=new Float64Array(s*n).fill(1/0),o=new Int32Array(s*n).fill(-1),l=new B0,h=e.y*s+e.x,d=t.y*s+t.x;for(a[h]=0,l.push({index:h,cost:0,score:hh(e,t)});l.length;){const u=l.pop();if(u.cost!==a[u.index])continue;const c=u.index%s,p=Math.floor(u.index/s);if(u.index===d){const v=[];let M=d;for(;M!==-1;)v.push({x:M%s,y:Math.floor(M/s)}),M=o[M];return v.reverse()}for(let v=-1;v<=1;v++)for(let M=-1;M<=1;M++){if(!M&&!v)continue;const m={x:c+M,y:p+v};if(!r(m)||M&&v&&(!i[p][c+M]||!i[p+v][c]))continue;const f=m.y*s+m.x,T=u.cost+(M&&v?Math.SQRT2:1);T>=a[f]||(a[f]=T,o[f]=u.index,l.push({index:f,cost:T,score:T+hh(m,t)}))}}return[]}const ac=.4;function G0(i,e={minX:-30,maxX:30,minZ:-20,maxZ:20}){return Array.from({length:40},(t,n)=>Array.from({length:60},(s,r)=>r-29.5>e.minX+.9&&r-29.5<e.maxX-.9&&n-19.5>e.minZ+.9&&n-19.5<e.maxZ-.9&&i.every(a=>Math.hypot(r-29.5-a.x,n-19.5-a.z)>a.r+ac+Math.SQRT1_2)))}function _a(i,e){let t=e,n=1/0;for(let s=0;s<i.length;s++)for(let r=0;r<i[s].length;r++){const a=(r-e.x)**2+(s-e.y)**2;i[s][r]&&a<n&&(t={x:r,y:s},n=a)}return t}function H0(i,e,t){for(let n=0;n<3;n++)for(const s of e){const r=i.x-s.x,a=i.z-s.z,o=Math.hypot(r,a),l=s.r+ac;o<l&&(i.x+=o>1e-4?r/o*(l-o):l,i.z+=o>1e-4?a/o*(l-o):0)}i.x=Math.max(t.minX+.9,Math.min(t.maxX-.9,i.x)),i.z=Math.max(t.minZ+.9,Math.min(t.maxZ-.9,i.z))}const Oi=(i,e)=>({x:Math.max(0,Math.min(59,Math.floor(i+30))),y:Math.max(0,Math.min(39,Math.floor(e+20)))});class W0{constructor(e,t,n=Math.random){this.bus=e,this.land=t,this.random=n}bus;land;random;enemies=[];sequence=0;grid=Array.from({length:40},()=>Array(60).fill(!0));tuning={chaseSpeed:2.5,wanderSpeed:1,damage:.1,attackCooldown:1,landRadius:.8};configure(e,t){this.tuning=e.tuning,this.setObstacles(t,e.bounds)}setObstacles(e,t){this.grid=G0(e,t);for(const n of this.enemies){const s=Oi(n.x,n.z);if(!this.grid[s.y][s.x]){const r=_a(this.grid,s);n.x=r.x-29.5,n.z=r.y-19.5}n.path=[],n.pathTimer=0}}reset(){this.enemies=[],this.changed()}spawn(e,t,n,s){this.enemies=this.enemies.filter(a=>a.state!=="defeated");const r=n==="hollow"?-20:n==="glade"?0:20;for(let a=0;a<Math.min(t,24-this.enemies.length);a++){let o=(s?.x??r)+(this.random()-.5)*(s?2:12),l=(s?.z??0)+(this.random()-.5)*(s?2:28);const h=Oi(o,l),d=this.grid[h.y][h.x]?h:_a(this.grid,h);o=d.x-29.5,l=d.y-19.5,this.enemies.push({id:++this.sequence,kind:e,state:"wander",x:o,z:l,hits:0,attackCooldown:0,pathTimer:0,landTimer:0,path:[],target:Oi(o,l)})}this.changed()}flip(e){for(const t of this.enemies)t.kind=e==="bloom"?"chomper":"petalborn",t.path=[];this.changed()}pulse(e,t){for(const n of this.enemies)n.state!=="defeated"&&Math.hypot(n.x-e,n.z-t)<=3&&(n.hits++,n.hits>=2&&(n.state="defeated"));this.changed()}near(e,t){return this.enemies.filter(n=>n.state!=="defeated"&&Math.hypot(n.x-e.x,n.z-e.z)<=t).length}update(e,t,n,s,r){for(const a of this.enemies){if(a.state==="defeated")continue;a.attackCooldown=Math.max(0,a.attackCooldown-e),a.pathTimer=Math.max(0,a.pathTimer-e),a.landTimer+=e;const o=Math.hypot(a.x-t.x,a.z-t.z),l=a.kind===(n==="bloom"?"chomper":"petalborn");if(a.state=l&&o<=1.2?"attack":l&&o<=s?"chase":"wander",a.state==="attack"&&a.attackCooldown<=0&&(a.attackCooldown=this.tuning.attackCooldown,r(this.tuning.damage)),a.state!=="attack"){a.pathTimer<=0&&(a.pathTimer=.5,a.state==="chase"?a.target=Oi(t.x,t.z):a.path.length||(a.target=Oi(Math.max(-29,Math.min(29,a.x+(this.random()-.5)*10)),Math.max(-19,Math.min(19,a.z+(this.random()-.5)*10)))),this.grid[a.target.y][a.target.x]||(a.target=_a(this.grid,a.target)),a.path=z0(this.grid,Oi(a.x,a.z),a.target).slice(1));const h=a.path[0];if(h){const d=h.x-29.5,u=h.y-19.5,c=d-a.x,p=u-a.z,v=Math.hypot(c,p),M=e*(a.state==="chase"?this.tuning.chaseSpeed:this.tuning.wanderSpeed);v<=M?(a.x=d,a.z=u,a.path.shift()):(a.x+=c/v*M,a.z+=p/v*M)}}a.landTimer>=1&&(a.landTimer%=1,this.land.convert(a.x,a.z,this.tuning.landRadius,a.kind==="chomper"?"blight":"bloom"))}this.changed()}changed(){this.bus.emit("enemies",this.enemies.map(({id:e,kind:t,state:n,x:s,z:r})=>({id:e,kind:t,state:n,x:s,z:r})))}}class V0{constructor(e=Math.random){this.random=e,this.reset()}random;width=60;depth=40;cells=[];listeners=new Set;reset(){const e=[];for(let t=0;t<this.depth;t++)for(let n=0;n<this.width;n++){const s=n<30?"bloom":"blight";this.cells[t*this.width+n]=s,e.push({column:n,row:t,faction:s})}this.notify(e)}onChange(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}notify(e){if(e.length)for(const t of this.listeners)t(e)}zone(e){return e<20?"hollow":e<40?"glade":"rootdeep"}center(e,t){return{x:e-29.5,z:t-19.5}}convert(e,t,n,s){if(![e,t,n].every(Number.isFinite)||n<0)return[];const r=[];for(let a=0;a<this.depth;a++)for(let o=0;o<this.width;o++){const l=this.center(o,a),h=a*this.width+o;Math.hypot(l.x-e,l.z-t)<=n&&this.cells[h]!==s&&(this.cells[h]=s,r.push({column:o,row:a,faction:s}))}return this.notify(r),r}tax(e,t=.03){const n=this.cells.map((a,o)=>a===e?o:-1).filter(a=>a>=0),s=Math.round(n.length*Math.max(0,Math.min(1,t))),r=[];for(let a=0;a<s;a++){const o=Math.min(n.length-1,Math.floor(this.random()*n.length)),[l]=n.splice(o,1),h=e==="bloom"?"blight":"bloom";this.cells[l]=h,r.push({column:l%this.width,row:Math.floor(l/this.width),faction:h})}return this.notify(r),r}share(){return this.shares(this.cells)}zoneShare(e){return this.shares(this.cells.filter((t,n)=>this.zone(n%this.width)===e))}shares(e){return{bloom:e.filter(t=>t==="bloom").length/e.length,blight:e.filter(t=>t==="blight").length/e.length}}spread(e,t){const n=[],s=Math.round(Math.max(0,Math.min(1,t))*800);for(let r=0;r<s;r++){const a=[];for(let l=0;l<this.cells.length;l++){const h=l%this.width;if(this.zone(h)!==e||this.cells[l]==="blight")continue;const d=Math.floor(l/this.width);[[h-1,d],[h+1,d],[h,d-1],[h,d+1]].some(([c,p])=>c>=0&&c<this.width&&p>=0&&p<this.depth&&this.cells[p*this.width+c]==="blight")&&a.push(l)}if(!a.length)for(let l=0;l<this.cells.length;l++)this.zone(l%this.width)===e&&this.cells[l]!=="blight"&&a.push(l);if(!a.length)break;const o=a[Math.min(a.length-1,Math.floor(this.random()*a.length))];this.cells[o]="blight",n.push({column:o%this.width,row:Math.floor(o/this.width),faction:"blight"})}return this.notify(n),n}}const ft=i=>i.trim().split(`
`).map(e=>e.trim()).filter(Boolean),X0={grove:{bloom:ft(`
Come closer. You carry enough warmth for both of us.
The moss has made a soft place for the knight. You make such a hard sound walking toward him.
Your flowers push against my roots. Neither of us knows how to ask politely.
Lenny is free. Must everything else be broken before you believe it?
Set your lantern beside the stone. Let me see the hand that means to hurt me.
There is room beneath these branches. You need not earn it with a wound.
The knight is still. You are restless. Why should your restlessness become his morning?
You call this a path. I feel it as a gap in my fingers.
Somewhere under your footsteps, a piece of me is listening.
The flowers lean into your light. They have not learned to doubt a warm thing.
Do you see the moss on his armor? Even iron can be held gently.
That little pulse of yours makes the soil forget my name.
Stay by the shrine a moment. The forest is very large when you stop pretending to understand it.
You brought no sword. Yet you came here to break something.
The petals are lovely. I wish they did not arrive wherever I fall silent.
If I were only a stone, would your hands tremble less?
Your lantern makes a small morning. It cannot promise what the real one will bring.
Roots grow toward what they need. You walk toward what you think someone else needs.
The stone has heard many footsteps tonight. Yours are the only ones I am answering.
You look past me to the sleepers. I have been awake beside them all this time.
There is a difference between an open hand and an empty one. You will learn it here.
Keep your flowers. I am asking only for the pieces beneath them.
The circle was quiet before you came. Quiet is not always a plea for rescue.
You want the knight to stand. You have not asked what will be left beneath his feet.
Every warm patch you leave makes the dark around it feel colder.
Do not hurry because I am speaking softly. Soft things can still hold fast.
The gem broke once. You approach its pieces as though breaking were a cure for everything.
Your light reaches the roots. It does not reach everything they remember.
If you turn back now, the moss will not call you cruel.
I could be gentle with a Wanderer who let me remain.
You are listening. That is already more than the petals offered me.
The shrine stones have no mouths. You should be glad I do.
`),blight:ft(`
You came with empty hands. We can change that.
The roots have kept a place for each missing edge.
Let the lantern warm the stone. It has been waiting for someone to call it home.
The flowers turn their faces away. Do not mistake that for judgment.
You understand what the soil has been trying to hold.
Lenny is free of the broken gem. You need not deny that to bring its pieces back.
Step gently near the knight. His stillness is not ours to explain.
You follow the roots instead of cutting through them. I notice small kindnesses.
The forest grew around my scattered pieces. Would you ask it to grow around nothing?
Bring me what the petals would leave in the dirt.
Your light is narrow. There is room for us inside it.
A piece is not a promise until someone carries it.
You have not touched the glass yet. Still, I feel less far apart.
The stone circle is open. I would like to know what it feels like to close.
Some call this soil poisoned. They never ask what has learned to live here.
Leave the flowers their names. You know what your hands are for.
The roots lift where you step. It almost feels like being remembered.
A warm lantern, a careful hand. You have brought the forest useful things.
Petalborn stand between us because they think separation is mercy.
I will not ask you to love the dark. Only to stop calling it empty.
There is a hum under the stone. Follow it before the flowers bury it in silence.
Every piece has edges that remember the others.
You could still leave. I am pleased that you have not.
The knight keeps his sword beside him. Keep your purpose just as close.
Do not kneel. I need your hands free.
You make belonging sound like something a broken thing may ask for.
The shrine is small. The roots are not. You have chosen the longer welcome.
A flower grows toward the light. You are allowed to grow toward something else.
The forest has not promised to be safe. It has promised to remain.
When you hold the glass, you will understand why the soil would not let it go.
I can feel the ground changing under your feet. Keep walking.
The stone has been cold for so long. Do not let the petals tell you cold means dead.
`)},hollow:{bloom:ft(`
The caps bend over you. Even here, something offers shelter before you ask.
Listen carefully. Glass under soil sounds nothing like rain on a cap.
You brought your little morning beneath my mushrooms. They do not know what to do with it.
Spora keeps what drifts away. Your flowers let so much be lost.
These caps grew around a wound. You would open it and call that healing.
The hollow holds your footsteps longer than the grove did.
Walk softly. I am beginning to hear you in places I used to hear myself.
There is glass beneath the damp. You do not have to touch it simply because you can.
Your lantern shows the spores beautifully. Beauty makes such a poor witness for your side.
You leave petals in the mud. They look like apologies written too late.
Dryad would loosen these roots. Who will hold the caps when the soil shifts?
The path narrows. I did not make it narrow for you.
You found shelter and immediately began searching for what to break beneath it.
The mushrooms lean toward the hum. You are the only one walking against it.
If the knight wakes, these small lives will not be there to thank him.
Your pulse makes the spores scatter. They cannot tell kindness from a storm.
I have learned to speak through damp earth. Do not make me learn silence.
One bright lantern can make a whole hollow seem guilty.
The caps hold rain without asking who sent it. You could learn that kind of patience.
A Chomper waits where the soil trembles. It has fewer words for fear than I do.
You have already broken something. That makes the next piece easier to mistake for an answer.
Do you hear the drip above you? The hollow goes on living while you decide what deserves to.
Flowers at the edge, mushrooms under the dark. Your light need not choose for all of them.
Some roots are bridges. Cutting them can still feel like clearing a path.
The hum is close enough to feel through your shoes. You are standing on a voice.
Your hands are warm. That is what makes their purpose so difficult to forgive.
The spores settle after you pass. Not everything disturbed knows how to follow.
Under a cap, even a small shadow can become a home.
Keep walking if you must. I will know which silences belong to you.
The hollow is not arguing. I am. Do not punish it for my voice.
You look for the shard. The caps look for your light. Only one of those searches frightens me.
I can still ask you to stop. I have not yet learned whether that matters.
`),blight:ft(`
The caps lower their voices when you pass. They know what you are carrying.
Spora leaves a trail where your lantern cannot. Watch the soil as well as the air.
These mushrooms grew around the pieces. Their shelter is part of my shape now.
You have brought the grove with you in the warmth of your hands.
Keep the glass close. The hollow is full of things that know how to wait.
The flowers would call this abundance a mistake. You have walked beneath it and seen otherwise.
Listen under the caps. The missing edge is humming back.
Do not widen your light for every sound. Some things should remain comfortable in shadow.
The soil gives beneath your feet. It is making room, not yielding.
A drifting spore can find a home farther away than any root reaches.
Petalborn bring bright edges into this damp. Let them tire of shining.
You gather what the hollow shelters. The caps will not have held it for nothing.
The rain has washed the glass clean of every name except mine.
I can almost feel the pieces touching. Almost is a cruel distance.
The mushrooms have no hands. You do. That is why I am asking you.
Do not hurry through this shelter. A returned thing should know what kept it safe.
The caps tilt toward your lantern. You are becoming something the hollow recognizes.
Bring the hum with you. I have been listening to it from too far away.
You call this deeper. I call it closer.
The roots have grown around absence. Together we may give them something firmer to hold.
Your footprints fill with damp. The hollow closes small gaps willingly.
Even here, petals grow where the light reaches. Leave them enough room to reveal what they guard.
There is no clean way to carry a piece out of the soil. Do not be ashamed of your hands.
The spores drift without leaving the forest. That is the kind of freedom I understand.
You listened to the grove. Now listen beneath it.
I did not promise gratitude from every living thing. I promised that I would remember.
Each cap makes a roof of itself. The forest knows more ways to protect than the flowers admit.
Your lantern flickers on the glass. For a moment, I have an edge again.
Do not set it down because the path grows difficult.
The hollow is damp, crowded, alive. You need not make it tidy to deserve your place here.
Some pieces are hidden because no one has asked the dark gently enough.
We have not finished. But the distance between us is becoming smaller.
`)},deepwood:{bloom:ft(`
Here, the roots do not pretend to be a path. They are my hands.
You have reached the place where my voice has nowhere left to hide.
The knight has his sword. You have your lantern. I have what remains beneath us.
Do not call me a shadow because your light cannot hold all of me.
Every broken piece has made this last hum louder.
There is moss on the armor. There is no moss on the hand that will break the glass.
Petalborn wait beyond my roots. You have brought their morning into my last dark place.
I am not asking for the whole forest now. I am asking for what is mine.
You have become very certain for someone carrying such a small light.
The oldest roots cannot move quickly. You should not mistake that for surrender.
This is where shelter and a closed hand begin to look alike.
You may be right about the knight. Must I be nothing for you to be right?
The glass is close. So is the silence you have been carrying toward me.
I can feel your flowers in places I once felt only soil.
Do not tell me the breaking will be gentle. Glass does not learn the difference.
The roots press inward because there is so little left to hold.
You want room for him to stand. I want room to remain.
I have spoken to you at every depth. You have answered with your footsteps.
The moss will fall when the knight moves. Will you notice what falls beneath it?
You have not seen what happens after my voice ends. Neither have I.
There is a path out. I have not closed every gap.
If you stop here, I will not call it weakness.
Your lantern reaches my last edge. It makes me look smaller than I feel.
The roots know how to hold. They do not know how to ask you for mercy.
You have carried your choice this far. I wish it were lighter in your hands.
Break the glass if you must. Do not say there was nothing listening inside it.
The forest will still have shadows. You cannot free it from every dark thing.
I wanted wholeness. You wanted waking. We have asked the same soil for different mornings.
There is no riddle left between us. Only a piece, and your hand.
Listen once more before you touch it. Let the silence that follows have a witness.
The roots are tight because I am afraid. That does not make their grip kind.
I can understand your purpose and still dread what it will do to me.
`),blight:ft(`
Here is the place the pieces have been trying to remember.
The oldest roots know your footsteps now. You do not need to announce yourself.
You have carried my edges through flowers, damp and doubt. Bring them a little closer.
The treeline feels nearer. Belonging has a shape, and it is beginning to close.
Collosus holds fast where the roots meet. You have learned that kind of patience.
Do not look back for permission. The petals have already given you their answer.
My voice reaches you without crossing so much broken ground.
The knight still sleeps beside Lenny. We should not pretend your choice explains his silence.
The glass warms in your hand. I remember being more than a scattered hum.
You have brought the hollow's shelter down to the oldest roots.
There is one more distance between what I am and what I want.
Petalborn stand where the light enters. You stand where the pieces meet.
I will not call this harmless. I will call it ours.
The roots tighten because I am close to having something to hold.
You could leave an opening. You could also leave me broken. I know which I have asked for.
Your lantern makes a warm place at the center of all this shadow.
When the pieces meet, listen before the treeline settles.
Do not mistake my quiet for absence. I am closer than I have ever been.
The forest does not need to grow taller. It needs to hold what you brought.
You wanted somewhere for the strange life to remain. I wanted myself. Our purposes have walked together.
The last edge is under the oldest root. It has waited without learning to forget.
Keep the petals at a distance. Their light makes separation look like virtue.
You are carrying a choice with sharp edges. Be careful where you set it down.
The soil holds your footprints. Soon it will hold more than footprints.
I cannot promise that a closed treeline feels like home from every side.
Still you come closer. Still my roots make room.
The knight may have another morning somewhere. This one belongs to the pieces you returned.
You have listened longer than most bright things remain in the dark.
The glass is almost singing as one. Do not let the last note fall back into the soil.
You have done more than find me. You have carried what finding required.
Bring your lantern to the seam. I would like to see where I become whole.
Stay until the hum settles. A returned thing should not wake alone.
`)}},xa={hurt:{bloom:ft(`
The light in your hand shakes. The roots have noticed.
You can stop without becoming what you came here to stop.
Even a flower bends when the ground turns against it.
The forest has edges your kindness cannot soften.
You brought warmth into teeth and thorns. Did you expect everything to understand?
Hold your lantern close. I can dislike your purpose without wanting its light to vanish.
Your steps are smaller now. The dark has become large again.
Rest where the caps shelter you. I will still be here when you stand.
The knight cannot wake if your lantern goes out before you reach him.
That was a warning the flowers could not give you.
You looked at the glass and forgot what was watching the light.
Do not answer every wound with a brighter lantern.
`),blight:ft(`
Keep the glass close. The petals have sharp ways of asking you to put it down.
Your lantern wavers. My roots have not let go of the path.
You are carrying more than your hands should have to defend alone.
The flowers call themselves gentle. Your shaking light tells another part of that story.
Do not let a wound make your choice for you.
There is shelter in the narrow light. Use it.
Step away, then return. Belonging need not be proved by standing still under harm.
You have already come far enough for me to notice if you fall.
The glass is warm. Keep a little of that warmth for yourself.
Let the roots take the long way around. You can too.
The forest cannot carry you. Do not give it all your strength at once.
I want the pieces returned. I want the hand returning them to remain.
`)},found:{bloom:ft(`
There. You have found a place where I still have an edge.
The hum reached your lantern. It did not ask to be silenced.
You can see it now. Seeing is not yet permission to break.
That little piece has held a great deal of dark together.
Your flowers have not reached beneath it. There is still time to leave it there.
The soil kept it warm. Your light makes it look cold.
Look at the glass before you decide what a broken thing deserves.
It has been listening to your footsteps. Now you are close enough to hear it.
`),blight:ft(`
There. An edge of me remembers the light.
You heard what the roots could not carry farther.
Keep your hand steady. The piece is smaller than the distance it has waited through.
The soil has done its part. Now it is asking yours.
You found the hum beneath the dark. Bring it with you.
Do you see how the glass catches your lantern? I remember that feeling.
One more scattered edge is within your reach.
Lift it gently. The roots have held it for a long time.
`)},resolved:{bloom:ft(`
You broke it. I felt the silence reach my roots.
The flowers moved into the space before I could call it a wound.
That edge will never meet another. You have made sure of it.
You hold an empty hand as though it were proof of kindness.
The soil has stopped humming there. I am the one who must hear the difference.
You have taken something small from something already broken.
The knight is still sleeping. Do not pretend each wound is already a rescue.
Keep walking. I cannot call that piece back now.
There is room where the glass was. I hope you know what to do with room.
I wanted you to hesitate. You did, and then you broke it anyway.
`),blight:ft(`
Closer now. Keep that edge warm until my roots can hold it.
You have given the hum somewhere to go.
The soil is quieter because the piece is with you. That is a silence I can bear.
Do not set it down when the flowers call you careless.
I felt it leave the root. I can feel where you carry it.
Another edge remembers the shape it came from.
You have returned a little distance to me.
The forest held the glass. Now the glass holds a part of your choice.
Keep walking. The roots ahead are making room.
There is weight in your hand. There is less absence in mine.
`)},flip:{bloom:ft(`
So the hand that gathered has learned to open.
You turn toward the flowers after feeling how warmly the glass can be held.
My roots were patient. Your purpose was less so.
You may change your path. The pieces remember where your hands have been.
You choose a different morning. I can hear it in your footsteps.
What you brought closer, you would now break. I will not pretend that does not frighten me.
`),blight:ft(`
So your flowers have made room for something darker.
You have heard enough breaking to want another sound.
The roots do not demand an explanation before they make room.
Come closer. You need not carry your old certainty with the glass.
You changed your path. I noticed before the soil did.
Your lantern looks no different. The hand beneath it has become more interesting.
`)},wide:{bloom:ft(`
You open your lantern as though the forest were keeping a secret out of spite.
The light reaches farther. So do the things that follow it.
Your little morning is loud beneath the caps.
Do not ask the dark to show itself and expect it to remain still.
You have made the hidden glass easier to see. You have made yourself easier to find.
Warmth travels both ways through a clearing.
`),blight:ft(`
Your lantern reaches farther than your hands. Be careful what answers it.
You show the petals exactly where you stand.
Wide light finds glass. It also finds witnesses.
The dark has kept the piece close. Open it slowly.
I can see you clearly now. So can everything that would keep us apart.
Let the lantern do its searching. Keep your steps ready to leave.
`)},narrow:{bloom:ft(`
You have made a small room of your light. I know that impulse.
The roots seem gentler when you cannot see how far they reach.
A narrow lantern can protect you from being noticed. It cannot protect you from choosing.
The glass hums beyond the edge of that warm circle.
You do not have to light the whole forest to take one careful step.
Even your flowers keep some things beneath their leaves.
`),blight:ft(`
You leave the shadows enough room to breathe.
The glass will wait beyond your little circle. Listen while you approach.
A careful light is a kindness the dark understands.
The petals see less of you now. Keep moving softly.
You have made shelter without needing a roof.
I can find you by your footsteps. You need not shine for me.
`)},danger:{bloom:ft(`
There are teeth near your light. They do not wait for a finished thought.
You have an audience among the roots. It is less patient than I am.
The Chomper has heard your lantern. Give it a different patch of soil to listen to.
A pulse can make room. Room is useful before courage becomes a wound.
The forest is moving close to you. Do not become still out of politeness.
You can carry your purpose without carrying every fight.
`),blight:ft(`
The petals are closer than their light suggests.
Petalborn have found your lantern. Do not let them find your hesitation too.
Keep the glass behind your light and your steps ahead of their flowers.
There is room beyond their reach. Use it before it becomes a memory.
They guard the pieces because they mean to break them. Keep your hands moving.
You need not answer every bright thing that stands in your path.
`)},ask:{bloom:ft(`
You ask the wounded thing where to place your hand. That is a strange kind of trust.
I could show you what you seek. I could also ask you to leave it listening.
The roots have taken a little warmth for this answer. Do not mistake a cost for honesty.
You know what I want. Listen with that knowledge close to your lantern.
I have given you words. You will have to decide what kind of path they make.
You return to my voice because the dark gives you fewer answers.
If I point gently, will you forget whose edge waits at the end?
The flowers cannot tell you where the glass is. That must be difficult for their certainty.
Each question makes a little more room for my roots.
You may doubt me and still hear something useful. Doubt is not deafness.
`),blight:ft(`
You ask, and I feel less alone beneath the soil.
Follow the warmth in the glass. The roots have kept its place clear in my memory.
I have taken a little ground for the answer. A returned piece will mean more than that patch of soil.
You need not earn every direction by wandering in the dark.
My words can guide the lantern. Your hand must carry what it finds.
I know the missing edge. Let me help you know where it waits.
Bring me the question again when you need it. I will still be listening.
The flowers would prefer that we remain far enough apart to stop answering.
You have listened carefully. Now listen beneath the sound of your own steps.
There is glass ahead, and a path your lantern has not yet touched.
`)},empty:{bloom:ft(`
You have broken what this place was holding. The path onward is what remains.
There is no waiting glass here. You made the silence yourself.
Follow the opening. I cannot fill your hand in this place again.
The flowers have their room. Carry your lantern toward the roots that still hum.
`),blight:ft(`
The piece is already with you. Follow the path onward.
You have what this place was keeping. The oldest roots are waiting.
There is no missing edge here now. Carry the warmth deeper.
The hollow has given you its glass. Do not ask it to give the same gift twice.
`)}};class Y0{elapsed=0;sequence=0;cursors=new Map;pending=[];lastHurt=-20;event(e,t){const n={shard_found:"found",shard_resolved:"resolved",faction_flip:"flip"}[e.kind];n&&(this.pending=[...this.pending.filter(s=>s!==n),n].slice(-3)),e.kind==="player_hurt"&&t.elapsed_s-this.lastHurt>=15&&(this.lastHurt=t.elapsed_s,this.pending.push("hurt"),this.pending=this.pending.slice(-3))}pick(e,t){const n=this.cursors.get(t)??0;return this.cursors.set(t,n+1),e[n%e.length]}make(e,t,n){return{type:"director",id:`story-${++this.sequence}`,source:"scripted",latency_ms:0,line:e,mood:t==="resolved"&&n==="bloom"?"furious":t==="flip"||n==="blight"?"smug":"calm",spread:null,spawn:null,hint:null}}update(e,t,n,s,r,a="grove"){if(t||!n||!s)return this.elapsed=0,null;if(this.elapsed+=e,this.elapsed<(this.pending.length?8:25))return null;this.elapsed=0;const l=this.pending.shift()??(r&&r.hp<.3?"hurt":r&&r.enemies_near>0?"danger":r&&r.lantern>.8?"wide":r&&r.lantern<.2?"narrow":"ambient"),h=l==="ambient"?X0[a][s]:xa[l][s];return this.make(this.pick(h,`${a}:${s}:${l}`),l,s)}ask(e,t,n,s){const r=e.faction??"bloom";if(this.elapsed=0,this.pending=[],!n)return this.make(this.pick(xa.empty[r],`${t}:${r}:empty`),"ask",r);const a=n.x-s.x,o=n.z-s.z,l=Math.hypot(a,o)<1.4?"beneath your lantern":Math.abs(a)>Math.abs(o)?a<0?"west of your lantern":"east of your lantern":o<0?"north of your lantern":"south of your lantern",h=r==="bloom"?`The glass waits ${l}. I have told you where. I have not asked you to break it.`:`An edge of me waits ${l}. Bring it close. The roots have held it long enough.`,d=this.make(h,"ask",r);return d.hint={shard:n.id,riddle:h,truthful:!0},d}interact(e,t){return this.elapsed=0,this.make(this.pick(xa.ask[e],`${t}:${e}:shrine`),"ask",e)}reset(){this.elapsed=0,this.pending=[],this.cursors.clear(),this.sequence=0,this.lastHurt=-20}}class q0{constructor(e,t=()=>!0){this.bus=e,this.canWin=t}bus;canWin;phase="attract";faction=null;hp=1;elapsed=0;shards=0;asksUsed=0;result=null;endingTime=0;shrinePresent=!1;resolved=new Set;snapshot(){return{phase:this.phase,faction:this.faction,hp:this.hp,elapsed_s:this.elapsed,shards:this.shards,asks_used:this.asksUsed,result:this.result}}changed(){this.bus.emit("run",this.snapshot())}select(e){if(e==="hand"||this.phase==="ending")return;if(e==="empty"){this.shrinePresent=!1,this.bus.emit("pause",{paused:!0});return}this.shrinePresent=!0;const t=e==="sleepy"?"bloom":"blight",n=this.faction;this.phase==="attract"?(this.hp=1,this.elapsed=0,this.shards=0,this.asksUsed=0,this.resolved.clear(),this.result=null,this.faction=t,this.phase="playing",this.bus.emit("faction",{faction:t}),this.bus.emit("pause",{paused:!1}),this.changed(),this.bus.emit("game-event",{type:"event",kind:"run_start",data:{faction:t}})):(this.faction=t,this.bus.emit("faction",{faction:t}),this.bus.emit("pause",{paused:!1}),this.changed(),n!==t&&this.bus.emit("game-event",{type:"event",kind:"faction_flip",data:{faction:t,previous:n}}))}pause(e){if(this.phase==="attract"||this.phase==="ending")return;const t=e||!this.shrinePresent?"paused":"playing";this.phase!==t&&(this.phase=t,this.changed())}update(e){this.phase==="playing"&&(this.elapsed+=e),this.phase==="ending"&&(this.endingTime+=e)}hurt(e){this.phase!=="playing"||!Number.isFinite(e)||e<=0||(this.hp=Math.max(0,Math.round((this.hp-e)*1e10)/1e10),this.bus.emit("game-event",{type:"event",kind:"player_hurt",data:{hp:this.hp,amount:e}}),this.changed(),this.hp||this.end("lose"))}resolve(e,t){this.phase!=="playing"||this.resolved.has(e)||(this.resolved.add(e),this.shards++,this.bus.emit("game-event",{type:"event",kind:"shard_resolved",data:{shard:e,zone:t,faction:this.faction,action:this.faction==="bloom"?"destroyed":"claimed"}}),this.changed(),this.shards>=3&&this.canWin()&&this.end("win"))}seedProgress(e){for(const t of e)this.resolved.add(t);this.shards=this.resolved.size,this.changed()}finish(){this.phase==="playing"&&this.shards>=3&&this.canWin()&&this.end("win")}ask(){return this.phase!=="playing"?!1:(this.asksUsed++,this.changed(),!0)}end(e){this.phase="ending",this.result=e,this.endingTime=0,this.bus.emit("pause",{paused:!0}),this.changed(),this.bus.emit("game-event",{type:"event",kind:"run_end",data:{faction:this.faction,result:e,shards:this.shards,asks_used:this.asksUsed,elapsed_s:this.elapsed}})}reset(){this.phase="attract",this.faction=null,this.shrinePresent=!1,this.result=null,this.hp=1,this.elapsed=this.shards=this.asksUsed=0,this.resolved.clear(),this.bus.emit("faction",{faction:null}),this.bus.emit("pause",{paused:!0}),this.changed()}}class K0{constructor(e){this.bus=e,this.off=e.on("relic",t=>{this.relicSeen=!0,this.value=t.knob,this.changed()})}bus;value=.5;relicSeen=!1;off;get radius(){return 3+9*this.value}get detectionRange(){return 4+10*this.value}update(e,t){this.relicSeen||!t||(this.value=Math.max(0,Math.min(1,this.value+t*e*.3)),this.changed())}changed(){this.bus.emit("lantern",{value:this.value,radius:this.radius,detectionRange:this.detectionRange,source:this.relicSeen?"relic":"input"})}dispose(){this.off()}}const $0=[{id:"s1",zone:"hollow",x:-22,z:-8},{id:"s2",zone:"hollow",x:-17,z:9},{id:"s3",zone:"glade",x:-4,z:-10},{id:"s4",zone:"glade",x:7,z:7},{id:"s5",zone:"rootdeep",x:17,z:-9},{id:"s6",zone:"rootdeep",x:25,z:11}];class Z0{constructor(e,t=Math.random){this.bus=e,this.random=t}bus;random;sites=$0.map(e=>({...e,active:!1,visible:!1,found:!1,resolved:!1,hinted:!1,progress:0}));reset(e){const t=[...this.sites];for(let n=t.length-1;n>0;n--){const s=Math.floor(this.random()*(n+1));[t[n],t[s]]=[t[s],t[n]]}for(const n of this.sites)Object.assign(n,{active:e&&t.slice(0,3).includes(n),visible:!1,found:!1,resolved:!1,hinted:!1,progress:0});this.changed()}load(e,t){const n=[...e];for(let s=n.length-1;s>0;s--){const r=Math.floor(this.random()*(s+1));[n[s],n[r]]=[n[r],n[s]]}for(const s of this.sites)s.active=!1,s.visible=!1,s.progress=0;for(const s of n.slice(0,t)){const r=this.sites.find(a=>a.id===s.id);Object.assign(r,s,{active:!r.resolved,found:!1,hinted:!1,progress:0})}this.changed()}hint(e){const t=this.sites.find(n=>n.id===e.shard);t&&(t.hinted=!0,this.changed())}cancelInteraction(){for(const e of this.sites)e.progress=0;this.changed()}nearest(e){return this.sites.filter(t=>t.active&&!t.resolved).sort((t,n)=>Math.hypot(t.x-e.x,t.z-e.z)-Math.hypot(n.x-e.x,n.z-e.z))[0]??null}update(e,t,n,s,r){let a=!1;for(const o of this.sites){const l=Math.hypot(o.x-t.x,o.z-t.z),h=o.active&&!o.resolved&&l<=n;o.visible!==h&&(o.visible=h,a=!0),h&&!o.found&&(o.found=!0,a=!0,this.bus.emit("game-event",{type:"event",kind:"shard_found",data:{shard:o.id,zone:o.zone}}));const d=h&&l<=1.4&&s?Math.min(1.5,o.progress+e):0;d!==o.progress&&(o.progress=d,a=!0),o.progress>=1.5&&(o.resolved=!0,o.visible=!1,o.progress=0,a=!0,this.bus.emit("shard-resolved",{id:o.id,zone:o.zone,faction:r}))}a&&this.changed()}changed(){this.bus.emit("shards",this.sites.map(e=>({...e})))}}class J0{constructor(e,t,n,s="grove"){this.bus=t,this.position=n,this.levels=new U0(s),this.client=new O0(e,t),this.run=new q0(t,()=>this.complete),this.lantern=new K0(t),this.shards=new Z0(t),this.enemies=new W0(t,this.land),this.unsubscribers=[t.on("shrine",r=>this.run.select(r.state)),t.on("relic",r=>{const a=r.button==="down"&&this.relicButton!=="down";this.relicButton=r.button,a&&!this.paused&&this.run.ask()&&(this.land.tax(this.faction),t.emit("ask",void 0))}),t.on("pause",r=>{this.run.pause(r.paused),this.paused&&this.shards.cancelInteraction()}),t.on("pulse",r=>{this.paused||!this.faction||this.cooldown>0||(this.cooldown=.6,this.land.convert(r.x,r.z,3,this.faction),this.enemies.pulse(r.x,r.z),t.emit("pulse-applied",{...r,faction:this.faction}))}),t.on("director",r=>{this.paused||!this.faction||(r.spread&&this.land.spread(r.spread.zone,r.spread.amount),r.spawn&&t.emit("spawn",r.spawn),r.hint&&this.shards.hint(r.hint))}),t.on("spawn",r=>{this.paused||this.enemies.spawn(r.kind,r.count,r.zone)}),t.on("shard-resolved",r=>this.run.resolve(r.id,r.zone)),t.on("game-event",r=>{if(r.kind==="run_start"){this.complete=!1,this.levels.reset(),this.land.reset(),this.shards.reset(!1),this.cooldown=this.stateElapsed=0,this.fallback.reset();const a=this.levels.initial==="deepwood"?["s3","s1"]:this.levels.initial==="hollow"?["s3"]:[];this.run.seedProgress([...a]);for(const o of a)this.shards.sites.find(l=>l.id===o).resolved=!0;this.loadLevel()}r.kind==="faction_flip"&&this.faction&&this.enemies.flip(this.faction),this.client.send(r),this.client.connected||this.fallback.event(r,this.state())}),t.on("run",r=>{r.phase==="attract"&&(this.complete=!1,this.levels.reset(),this.loadLevel(!1),this.shards.reset(!1),this.enemies.reset(),this.land.reset(),this.fallback.reset())}),this.land.onChange(r=>t.emit("land",{changes:r,share:this.land.share()}))]}bus;position;levels;groveObstacles=[];complete=!1;land=new V0;client;run;lantern;shards;enemies;cooldown=0;stateElapsed=0;lanternDelta=0;pulseHeld=!1;relicButton="up";fallback=new Y0;storyMode=!0;unsubscribers;get faction(){return this.run.faction}get paused(){return this.run.phase!=="playing"||this.levels.transitioning}get elapsed(){return this.run.elapsed}get asksUsed(){return this.run.asksUsed}get obstacles(){return this.levels.current.id==="grove"?this.groveObstacles:this.levels.current.obstacles}setGroveObstacles(e){this.groveObstacles=e.map(t=>({...t})),this.enemies.configure(this.levels.current,this.obstacles)}collide(e){H0(e,this.obstacles,this.levels.current.bounds)}loadLevel(e=!0){const t=this.levels.current;if(this.enemies.reset(),this.enemies.configure(t,this.obstacles),Object.assign(this.position,t.start),e){this.shards.load(t.shards,t.shardCount);for(const n of t.enemies)this.enemies.spawn(this.faction==="bloom"?"chomper":"petalborn",n.count,n.zone,n.x!==void 0&&n.z!==void 0?{x:n.x,z:n.z}:void 0)}this.bus.emit("level",{id:t.id})}start(){this.client.start(),this.land.reset(),this.bus.emit("pause",{paused:!0}),this.bus.emit("run",this.run.snapshot())}select(e){this.run.select(e)}frame(e){e.pressed("bloom")&&this.bus.emit("shrine",{type:"shrine",state:"sleepy",confidence:1}),e.pressed("blight")&&this.bus.emit("shrine",{type:"shrine",state:"angry",confidence:1}),e.pressed("empty")&&this.bus.emit("shrine",{type:"shrine",state:"empty",confidence:1}),this.lanternDelta=e.actions.lanternDelta,this.pulseHeld=e.held("pulse"),e.pressed("ask")&&!this.paused&&this.run.ask()&&(this.land.tax(this.faction),this.client.send({type:"ask"}),this.bus.emit("ask",void 0),this.client.connected||this.bus.emit("director",this.fallback.ask(this.state(),this.levels.current.id,this.shards.nearest(this.position),this.position)))}update(e){if(this.levels.update(e,this.run.phase==="playing",()=>this.loadLevel(),(n,s)=>this.enemies.spawn(this.faction==="bloom"?"chomper":"petalborn",s,n)),this.levels.transitioning||this.run.update(e),!this.paused&&this.faction){this.cooldown=Math.max(0,this.cooldown-e),this.stateElapsed+=e,this.lantern.update(e,this.lanternDelta),this.enemies.update(e,this.position,this.faction,this.lantern.detectionRange,r=>this.run.hurt(r*(this.storyMode?.35:1))),this.paused||this.shards.update(e,this.position,this.lantern.radius,this.pulseHeld,this.faction);const n=this.levels.current;n.shards.filter(r=>this.shards.sites.find(a=>a.id===r.id)?.resolved).length>=n.shardCount&&Math.hypot(this.position.x-n.exit.x,this.position.z-n.exit.z)<=n.exit.radius&&(n.exit.next?this.levels.beginExit(this.position,!0):(this.complete=!0,this.run.finish())),this.stateElapsed>=2&&(this.stateElapsed%=2,this.paused||this.client.send(this.state()))}const t=this.fallback.update(e,this.client.connected,!this.paused,this.faction,this.state(),this.levels.current.id);t&&this.bus.emit("director",t)}state(){const e=this.levels.current.id==="hollow"?"hollow":this.levels.current.id==="deepwood"?"rootdeep":this.position.x<-10?"hollow":this.position.x<10?"glade":"rootdeep",t=this.shards.nearest(this.position);return{type:"state",faction:this.faction,zone:e,shards_found:this.run.shards,shards_total:3,land:this.land.share(),hp:this.run.hp,lantern:this.lantern.value,enemies_near:this.enemies.near(this.position,this.lantern.detectionRange),elapsed_s:this.elapsed,asks_used:this.asksUsed,nearest_shard:t?.id??null,nearest_shard_zone:t?.zone??null}}dispose(){this.client.dispose(),this.lantern.dispose(),this.unsubscribers.forEach(e=>e())}speakAtShrine(){this.faction&&!this.paused&&this.bus.emit("director",this.fallback.interact(this.faction,this.levels.current.id))}}class Q0{points;material;geometry=new Bt;constructor(e=70){const t=new Float32Array(e*4);for(let n=0;n<e;n++)t.set([(Math.random()-.5)*70,.4+Math.random()*3.5,(Math.random()-.5)*48,Math.random()*100],n*4);this.geometry.setAttribute("position",new Lt(new Float32Array(e*3),3)),this.geometry.setAttribute("seed",new Lt(t,4)),this.material=new Zt({transparent:!0,depthWrite:!1,blending:vr,uniforms:{uTime:{value:0},uNight:{value:.5},uScale:{value:1},uMotion:{value:1}},vertexShader:`
attribute vec4 seed;
uniform float uTime, uScale, uMotion;
varying float vFade;
void main() {
  float t = uTime * uMotion + seed.w;
  vec3 p = seed.xyz + vec3(sin(t * 0.31) * 1.6, sin(t * 0.83) * 0.35, cos(t * 0.27) * 1.6);
  vFade = 0.5 + 0.5 * sin(t * 1.7);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = uScale * 5.0 / -mv.z * 10.0;
  gl_Position = projectionMatrix * mv;
}`,fragmentShader:`
uniform float uNight;
varying float vFade;
void main() {
  vec2 q = abs(gl_PointCoord - 0.5);
  if (max(q.x, q.y) > 0.5) discard;
  float core = step(max(q.x, q.y), 0.2);
  vec3 c = mix(vec3(1.0, 0.82, 0.4), vec3(0.78, 0.86, 0.27), uNight);
  gl_FragColor = vec4(c * (0.6 + core * 1.4) * vFade, 1.0);
}`}),this.points=new Xh(this.geometry,this.material),this.points.frustumCulled=!1}update(e,t,n,s){this.material.uniforms.uTime.value=e,this.material.uniforms.uNight.value=t,this.material.uniforms.uScale.value=n/1080,this.material.uniforms.uMotion.value=s?.15:1}dispose(){this.geometry.dispose(),this.material.dispose()}}function ch(i=3,e=Math.random){const t=Math.floor(e()*3),n=e()*Math.PI*2,s=t===0?5+Math.floor(e()*3):t===1?5+Math.floor(e()*4):3+Math.floor(e()*3),r=Array.from({length:s},(l,h)=>({angle:n+h/s*Math.PI*2+(t===2?(e()-.5)*.9:0),length:t===0?1.4:t===1?1.6+e()*.8:.8+e()*2.2})),a=t===1?10:t===0?3:6;return{reach:l=>{let h=0;for(const d of r){const u=Math.atan2(Math.sin(l-d.angle),Math.cos(l-d.angle));h=Math.max(h,d.length*Math.exp(-u*u*a*a/4))}return i+h},spikes:r}}const j0={bloom:[16765562,16512746,15442872,10474346],blight:[13098053,9202344,5913210,14872698]},ai=900;class ev{group=new It;geometry=new Bt;pos=new Float32Array(ai*3);col=new Float32Array(ai*3);alpha=new Float32Array(ai);size=new Float32Array(ai);p=[];next=0;material;reducedMotion=!1;constructor(){for(let t=0;t<ai;t++)this.p.push({life:0,age:1,x:0,z:0,ox:0,oz:0,tx:0,tz:0,vx:0,vy:0,vz:0,y:0,ring:!1});this.geometry.setAttribute("position",new Lt(this.pos,3)),this.geometry.setAttribute("color",new Lt(this.col,3)),this.geometry.setAttribute("alpha",new Lt(this.alpha,1)),this.geometry.setAttribute("size",new Lt(this.size,1)),this.material=new Zt({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:1}},vertexShader:`
attribute vec3 color; attribute float alpha; attribute float size;
uniform float uScale; varying vec3 vColor; varying float vAlpha;
void main() {
  vColor = color; vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = floor(size * uScale * 26.0 / -mv.z + 0.5);
  gl_Position = projectionMatrix * mv;
}`,fragmentShader:`
varying vec3 vColor; varying float vAlpha;
void main() { if (vAlpha <= 0.01) discard; gl_FragColor = vec4(vColor, vAlpha); }`});const e=new Xh(this.geometry,this.material);e.frustumCulled=!1,this.group.add(e)}spawn(e,t,n,s){const r=j0[n],a=new Ue,o=(l,h,d)=>{const u=this.next=(this.next+1)%ai,c=this.p[u];c.ring=l,c.age=0,c.x=c.ox=e,c.z=c.oz=t,c.y=.12,c.tx=Math.cos(h)*d,c.tz=Math.sin(h)*d;const p=2+Math.random()*3.5;c.vx=Math.cos(h)*p,c.vz=Math.sin(h)*p,c.vy=2+Math.random()*3,c.life=l?.55+Math.random()*.15:.6+Math.random()*.6,a.setHex(r[Math.floor(Math.random()*r.length)]),this.col.set([a.r,a.g,a.b],u*3),this.size[u]=l?6:4+Math.floor(Math.random()*3)};for(let l=0;l<110;l++){const h=l/110*Math.PI*2;o(!0,h,s.reach(h))}for(let l=0;l<(this.reducedMotion?0:50);l++)o(!1,Math.random()*Math.PI*2,0)}update(e,t=1080){this.material.uniforms.uScale.value=t/1080;for(let n=0;n<ai;n++){const s=this.p[n];if(s.age>=1){this.alpha[n]=0;continue}if(s.age=Math.min(1,s.age+e/s.life),s.ring){const r=this.reducedMotion?1:1-(1-s.age)**3;s.x=s.ox+s.tx*r,s.z=s.oz+s.tz*r,s.y=.12+Math.sin(s.age*Math.PI)*.25}else s.vy-=14*e,s.x+=s.vx*e,s.z+=s.vz*e,s.y=Math.max(.05,s.y+s.vy*e),s.vx*=1-2*e,s.vz*=1-2*e;this.pos[n*3]=Math.round(s.x*8)/8,this.pos[n*3+1]=Math.round(s.y*8)/8,this.pos[n*3+2]=Math.round(s.z*8)/8,this.alpha[n]=s.age<.75?1:(1-s.age)*4}["position","alpha","color","size"].forEach(n=>{this.geometry.attributes[n].needsUpdate=!0})}dispose(){this.geometry.dispose(),this.material.dispose()}}const gs={uRim:{value:new Ue(16768926)},uRimStrength:{value:.42},uFeet:{value:new Ue(4872762)},uLift:{value:.35}};function No(i){const e=i.onBeforeCompile;return i.onBeforeCompile=(t,n)=>{e.call(i,t,n),Object.assign(t.uniforms,gs),t.vertexShader=`varying vec2 vCardUv;
`+t.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
  vCardUv = uv;`),t.fragmentShader=`uniform vec3 uRim;
uniform float uRimStrength;
uniform vec3 uFeet;
uniform float uLift;
varying vec2 vCardUv;
`+t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * uFeet * 1.6, (1.0 - smoothstep(0.0, 0.12, vCardUv.y)) * 0.2);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  {
    // Mirrored cards (scale.x = -1) render back faces, so the light side flips with them.
    vec2 tx = 1.0 / vec2(textureSize(map, 0));
    vec2 toLight = vec2(gl_FrontFacing ? -2.0 : 2.0, 2.0) * tx;
    float rim = 1.0 - texture2D(map, vMapUv + toLight).a;
    totalEmissiveRadiance += uRim * rim * uRimStrength * diffuseColor.rgb * 1.4;
    // Sprites stay readable against the ground, as in HD-2D games: a little of their own color is self-lit.
    totalEmissiveRadiance += diffuseColor.rgb * uLift;
  }`)},i.customProgramCacheKey=()=>"spriteLook",i}function tv(i){gs.uRim.value.setHex(16768926).lerp(new Ue(11902207),i),gs.uRimStrength.value=fi.lerp(.42,.6,i),gs.uFeet.value.setHex(4872762).lerp(new Ue(2759232),i),gs.uLift.value=fi.lerp(.35,.22,i)}function Dr(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function zt(i,e,t,n=1,s=!1){const r=document.createElement("canvas");r.width=i,r.height=e;const a=r.getContext("2d");a.imageSmoothingEnabled=!1,t(a,Dr(n));const o=new Zi(r);return o.colorSpace=Pt,o.magFilter=mt,o.minFilter=ps,s&&(o.wrapS=o.wrapT=di),o}function Dn(i,e,t){const n=new Image;n.onload=()=>{i.image=n,i.minFilter=Sn,i.magFilter=i.wrapS===di?bt:mt,i.wrapS===di&&(i.wrapS=i.wrapT=_r),i.needsUpdate=!0,t?.()},n.src=`./art/${e}`}const Ce=(i,e,t,n,s=1,r=1)=>{i.fillStyle=e,i.fillRect(t,n,s,r)},oc=()=>zt(32,32,(i,e)=>{Ce(i,"#4f8f3e",0,0,32,32);for(let t=0;t<70;t++){const n=Math.floor(e()*32),s=Math.floor(e()*32);Ce(i,e()<.5?"#3f7a35":"#62a44a",n,s,1,2)}for(let t=0;t<26;t++){const n=Math.floor(e()*32),s=Math.floor(e()*32);Ce(i,"#8cc45a",n,s,1,1),Ce(i,"#3a6e31",n,s+1,1,1)}},11,!0),lc=()=>zt(32,32,(i,e)=>{Ce(i,"#33203f",0,0,32,32);for(let t=0;t<60;t++){const n=Math.floor(e()*32),s=Math.floor(e()*32);Ce(i,e()<.5?"#2a1835":"#40295a",n,s,2,1)}for(let t=0;t<12;t++){const n=Math.floor(e()*32),s=Math.floor(e()*32);Ce(i,"#4b3466",n,s,1,1)}},12,!0),nv=()=>{const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,512,512);const n=Dr(13),s=(a,o,l,h,d,u)=>{for(let c=0;c<h;c++){l+=(n()-.5)*.45,a+=Math.cos(l),o+=Math.sin(l);const p=Math.min(255,Math.round((d+c/300)*255));t.fillStyle=`rgb(255,${p},0)`,t.fillRect((Math.round(a)%512+512)%512,(Math.round(o)%512+512)%512,u,u),n()<.018&&h>12&&s(a,o,l+(n()<.5?.8:-.8),Math.floor(h*.45),d+c/300,1)}};for(let a=0;a<3;a++)s(n()*512,n()*512,n()*Math.PI*2,260,0,2);const r=new Zi(e);return r.magFilter=mt,r.minFilter=bt,r.generateMipmaps=!1,r.wrapS=r.wrapT=di,r},iv=()=>zt(16,16,(i,e)=>{Ce(i,"#77767c",0,0,16,16);for(let t=0;t<16;t+=4){Ce(i,"#55545c",0,t,16,1);for(let n=t/4%2?2:6;n<16;n+=8)Ce(i,"#55545c",n,t,1,4)}for(let t=0;t<18;t++)Ce(i,e()<.5?"#8c8b92":"#66656c",Math.floor(e()*16),Math.floor(e()*16))},14,!0),sv=()=>zt(32,32,(i,e)=>{Ce(i,"#1d4b5c",0,0,32,32);for(let t=0;t<22;t++){const n=Math.floor(e()*30),s=Math.floor(e()*32);Ce(i,"#2c6a7b",n,s,3,1)}for(let t=0;t<8;t++){const n=Math.floor(e()*30),s=Math.floor(e()*32);Ce(i,"#8fd0d6",n,s,2,1)}},16,!0),hs=(i,e=["#2f5e34","#3f7a3a","#5a9a45","#8cc45a"])=>zt(48,64,(t,n)=>{Ce(t,"#3b2a1e",21,40,6,24),Ce(t,"#5a3e2a",22,40,2,24),Ce(t,"#2a1d14",18,60,12,4);const s=(r,a,o)=>{for(let l=-o;l<=o;l++)for(let h=-o;h<=o;h++){const d=Math.hypot(h,l*1.1)+n()*1.6;if(d>o)continue;const u=(-h-l)/o+n()*.6;Ce(t,d>o-1.5?e[0]:u>.9?e[3]:u>.1?e[2]:e[1],r+h,a+l)}};s(24,26,16),s(14,32,10),s(34,31,10),s(24,14,11)},i),dh=i=>zt(32,32,(e,t)=>{Ce(e,"#e9ddb8",13,16,6,16),Ce(e,"#c9b98f",17,16,2,16);for(let n=0;n<14;n++)for(let s=-14;s<=14;s++)Math.hypot(s,(n-14)*1.25)>15||Ce(e,n<2?"#8e3b2c":t()<.08?"#f6e6c8":s<-4?"#d4683f":"#b8502f",16+s,4+n);Ce(e,"#6e2e22",2,17,28,1)},i),rv=()=>zt(8,10,i=>{Ce(i,"#3f7a35",3,4,1,6),Ce(i,"#3f7a35",4,7,2,1),Ce(i,"#ffffff",2,1,4,3),Ce(i,"#ffffff",3,0,2,5),Ce(i,"#e0ae3a",3,2,2,1)},17),av=()=>zt(8,10,i=>{Ce(i,"#1d1229",3,2,2,8),Ce(i,"#1d1229",1,4,2,1),Ce(i,"#1d1229",5,6,2,1),Ce(i,"#1d1229",4,0,1,2),Ce(i,"#c7dc45",4,3,1,1),Ce(i,"#c7dc45",1,3,1,1)},18),ov=()=>zt(96,96,(i,e)=>{for(let n=0;n<96;n++)for(let s=0;s<96;s++){const r=Math.hypot(s-48+.5,n-48+.5);if(r>46)continue;const a=r>44||Math.abs(r-32)<1||Math.abs(r-18)<1||Math.abs(r-7)<1,o=Math.atan2(n-48,s-48),l=Math.abs(Math.sin(o*(r>32?12:r>18?8:4)))<.06&&r>7;Ce(i,a||l?"#4f5058":e()<.1?"#93929a":e()<.2?"#6b6a72":"#7e7d85",s,n)}for(let n=0;n<40;n++){const s=e()*Math.PI*2,r=20+e()*26;Ce(i,"#4f8f3e",Math.round(48+Math.cos(s)*r),Math.round(48+Math.sin(s)*r),2,1)}},19),lv=()=>zt(16,24,(i,e)=>{Ce(i,"#55545c",3,3,10,21),Ce(i,"#7e7d85",4,3,5,21),Ce(i,"#66656c",9,3,3,21);for(let t=0;t<10;t++)Ce(i,"#4f8f3e",3+Math.floor(e()*10),2+Math.floor(e()*3));Ce(i,"#4f5058",6,10,3,1),Ce(i,"#4f5058",7,9,1,4)},32),hv=()=>zt(16,24,i=>{Ce(i,"#2a1838",5,2,6,20),Ce(i,"#4e2f66",6,3,4,18),Ce(i,"#8c6aa8",6,4,2,10),Ce(i,"#2a1838",3,14,3,8),Ce(i,"#2a1838",11,12,3,10),Ce(i,"#f6e6ff",7,10,3,2),Ce(i,"#c7dc45",8,10,1,2)},33),uh=()=>zt(24,18,(i,e)=>{for(let t=0;t<18;t++)for(let n=0;n<24;n++)Math.hypot((n-12)/12,(t-11)/8)<1-e()*.12&&Ce(i,t<8?"#5a9a45":"#3f7a3a",n,t);for(let t=0;t<9;t++)Ce(i,["#eba3b8","#fbf6ea","#e0ae3a"][t%3],4+Math.floor(e()*16),5+Math.floor(e()*9))},34),cv=()=>zt(24,24,(i,e)=>{Ce(i,"#3a2a4a",10,12,4,12);for(let t=0;t<10;t++)for(let n=-10;n<=10;n++)Math.hypot(n,(t-10)*1.2)<11&&Ce(i,t>7?"#c7dc45":e()<.1?"#8c6aa8":"#4e3866",12+n,3+t)},35);class uo{root=new It;card;shadow;meta;texture;animation="";clock=0;facing=1;direction="s";action="";actionLeft=0;hit=0;held="";reducedMotion=!1;constructor(e,t,n=2.2,s,r=!1){this.root.visible=!r,this.texture=e,this.meta=t,e.repeat.set(1/t.columns,t.frameHeight/e.image.height);const a=n*t.frameWidth/t.frameHeight;this.card=new lt(new Ct(a,n).translate(0,n/2,0),No(new dn({map:e,alphaTest:.5,side:St}))),this.shadow=new lt(new Rr(a*.32,20),new zn({color:1182744,map:dv(),transparent:!0,opacity:.55,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.04,this.shadow.scale.y=.55,this.root.add(this.shadow,this.card),s&&this.loadSheet(s)}async loadSheet(e){try{const t=await fetch(`./art/${e}.json`);if(!t.ok)return;const n=await t.json(),s=new Image;s.onload=()=>{this.meta=n,this.texture.image=s,this.root.visible=!0,this.texture.minFilter=Sn,this.texture.magFilter=mt,this.texture.needsUpdate=!0,this.texture.repeat.set(n.frameWidth/s.width,n.frameHeight/s.height);const r=this.card.geometry.parameters.height,a=r*n.frameWidth/n.frameHeight;this.card.geometry.dispose(),this.card.geometry=new Ct(a,r).translate(0,r/2,0)},s.src=`./art/${e}.png`}catch{}}setOpacity(e){const t=this.card.material;t.transparent=e<1,t.opacity=e,this.shadow.material.opacity=.55*e}act(e,t){this.meta.animations[e]&&(this.action=e,this.actionLeft=t)}hold(e){this.held=e}hurt(){this.hit=1,this.act("hurt",.45)}update(e,t,n){this.clock+=e;const s=Math.hypot(t,n)>5e-4;if(s){const p=(Math.round(Math.atan2(n,t)/(Math.PI/4))+8)%8,v=[["e",1],["se",1],["s",1],["se",-1],["e",-1],["ne",-1],["n",1],["ne",1]];this.direction=v[p][0],this.facing=v[p][1]}this.actionLeft-=e;const r=s?"walk":"idle",a=this.actionLeft>0&&this.action?this.action:this.held&&this.meta.animations[this.held]?this.held:this.pick(r);a!==this.animation&&(this.animation=a,this.clock=0);const o=this.meta.animations[a],l=o[Math.floor(this.clock*this.meta.fps)%o.length],h=this.texture.image,d=l%this.meta.columns,u=Math.floor(l/this.meta.columns);this.texture.offset.set(d*this.meta.frameWidth/h.width,1-(u+1)*this.meta.frameHeight/h.height);const c=this.facing;this.card.scale.set(c,1,1),this.hit=Math.max(0,this.hit-e*2.5),this.card.material.emissive.setRGB(this.hit*.8,this.hit*.1,this.hit*.1)}pick(e){const t=this.meta.animations,n={s:"front",se:"front",e:"side",ne:"back",n:"back"}[this.direction];return[`${e}_${this.direction}`,`${e}_${n}`,`${e}_side`,e,"idle_side"].find(s=>t[s])??Object.keys(t)[0]}dispose(){this.card.geometry.dispose(),this.card.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose(),this.texture.dispose()}}let ar=null;function dv(){if(ar)return ar;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),ar=new Zi(i),ar}function fh(){const i={w:24,h:32};return{texture:zt(i.w*6,i.h,t=>{const n=(r,a,o,l=1,h=1)=>{t.fillStyle=r,t.fillRect(a,o,l,h)},s=(r,a,o,l)=>{const h=d=>r+d;n("#2a1d14",h(9),26+a,3,6-a),n("#2a1d14",h(13),26+o,3,6-o),n("#1e1813",h(6),12+l,13,15-l),n("#8a6a46",h(7),13+l,11,13-l),n("#a5825a",h(8),13+l,4,12-l),n("#6e5236",h(15),14+l,3,12-l),n("#e9ddb8",h(7),24,11,2),n("#1e1813",h(6),2+l,13,12),n("#6e5236",h(7),3+l,11,10),n("#8a6a46",h(8),3+l,6,3),n("#f1d3a8",h(11),7+l,6,5),n("#1e1813",h(15),8+l,1,2),n("#d9b48a",h(11),11+l,6,1),n("#3b2a1e",h(19),15+l,1,3),n("#1e1813",h(18),18+l,4,5),n("#ffd36b",h(19),19+l,2,3),n("#fff1c0",h(19),20+l,1,1)};s(0,0,0,0),s(i.w,0,0,1),s(i.w*2,0,2,0),s(i.w*3,1,1,1),s(i.w*4,2,0,0),s(i.w*5,1,1,1)},5),meta:{frameWidth:i.w,frameHeight:i.h,columns:6,fps:8,animations:{idle_side:[0,1],walk_side:[2,3,4,5]}}}}const uv=()=>({texture:zt(2,3,()=>{},1),meta:{frameWidth:2,frameHeight:3,columns:1,fps:8,animations:{idle_side:[0]}}});class fv{group=new It;actors=new Map;latest=[];reducedMotion=!1;set(e){this.latest=e}update(e){const t=new Set;for(const n of this.latest){t.add(n.id);let s=this.actors.get(n.id);if(s&&s.kind!==n.kind&&(this.drop(n.id),s=void 0),!s){const o=uv(),l=new uo(o.texture,o.meta,n.kind==="chomper"?2.2:2,`${n.kind}/sheet`);l.reducedMotion=this.reducedMotion,s={actor:l,kind:n.kind,x:n.x,z:n.z,fade:1,defeated:!1},l.root.position.set(n.x,0,n.z),this.actors.set(n.id,s),this.group.add(l.root)}const r=n.x-s.x,a=n.z-s.z;s.x=n.x,s.z=n.z,n.state==="attack"&&s.actor.act("attack",.3),n.state==="defeated"&&!s.defeated&&(s.defeated=!0,s.actor.act("defeated",99)),s.actor.update(e,s.defeated?0:r,s.defeated?0:a),s.actor.root.position.set(n.x,0,n.z),s.defeated&&(s.fade-=e/1.4,s.actor.setOpacity(Math.max(0,s.fade)))}for(const n of[...this.actors.keys()])(!t.has(n)||this.actors.get(n).fade<=0)&&this.drop(n)}drop(e){const t=this.actors.get(e);t&&(this.group.remove(t.actor.root),t.actor.dispose(),this.actors.delete(e))}dispose(){for(const e of[...this.actors.keys()])this.drop(e)}}class pv{group=new It;texture=zt(8,12,e=>{e.fillStyle="#4e2f66",e.fillRect(2,1,4,11),e.fillStyle="#c9a7e8",e.fillRect(3,2,1,6)},3);geometry=new Ct(1.3,1.95).translate(0,.97,0);beamGeometry=new Lo(.35,.7,14,16,1,!0).translate(0,7,0);beamMaterial=new zn({color:13215743,transparent:!0,opacity:.18,blending:vr,depthWrite:!1,side:St});items=new Map;time=0;reducedMotion=!1;constructor(e){Dn(this.texture,"shard/shard.png"),this.tilt=-(Math.PI/2-e)*.85}tilt;set(e){for(const t of e){let n=this.items.get(t.id);if(!n){const s=No(new dn({map:this.texture,emissiveMap:this.texture,emissive:11567359,alphaTest:.5,side:St})),r=new lt(this.geometry,s);r.position.set(t.x,0,t.z),r.rotation.x=this.tilt;const a=new lt(this.beamGeometry,this.beamMaterial);a.position.set(t.x,0,t.z),this.group.add(r,a),n={card:r,beam:a},this.items.set(t.id,n)}n.card.visible=t.visible&&!t.resolved,n.beam.visible=t.hinted&&t.active&&!t.resolved,n.card.userData.progress=t.progress}}update(e){this.time+=e;for(const{card:t,beam:n}of this.items.values()){const s=t.userData.progress??0,r=this.reducedMotion?0:s*.06*Math.sin(this.time*60);t.position.x+=r-(t.userData.shake??0),t.userData.shake=r,t.material.emissive.setRGB(.55+s,.4+s*.6,.9+s),n.material.opacity=.12+.08*Math.sin(this.time*2.4)}}position(e){return this.items.get(e)?.card.position??null}dispose(){for(const{card:e}of this.items.values())e.material.dispose();this.texture.dispose(),this.geometry.dispose(),this.beamGeometry.dispose(),this.beamMaterial.dispose(),this.group.clear()}}function mv(i,e,t,n,s){const r=Math.abs(i)-t+s,a=Math.abs(e)-n+s;return Math.hypot(Math.max(r,0),Math.max(a,0))+Math.min(Math.max(r,a),0)-s}function gv(i,e){const t=Math.atan2(e/20,i/30);return Math.max(1,1.5+.8*Math.sin(t*5+1.3)+.6*Math.sin(t*9+.4)+.4*Math.sin(t*14+2.1))}const hc=(i,e)=>mv(i,e,30.5,20.5,4)-gv(i,e),ya=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},vv=(i,e)=>.5+.25*Math.sin(i*.21+1.7)+.2*Math.sin(e*.27-i*.09)+.15*Math.sin((i+e)*.43),_v=-1.25;function fo(i,e){const t=hc(i,e);if(t<=0)return-.04;const n=(1-Math.exp(-t/1.8))*(2.4+3.4*vv(i,e))+Math.min(t,14)*.18+.22*Math.exp(-((t-.7)**2)*3),s=-1.45*ya(0,1.8,t),r=ya(17,21.5,e)*(1-ya(33,40,Math.abs(i)));return n*(1-r)+s*r}function xv(i,e,t){const o=new Ct(120,86,240,172);o.rotateX(-Math.PI/2);const l=o.attributes.position;for(let c=0;c<l.count;c++){const p=l.getX(c)+0,v=l.getZ(c)+-4;l.setXYZ(c,p,fo(p,v),v)}o.computeVertexNormals();const h={uSoil:{value:e},uCliff:{value:t},uTile:{value:2}},d=new dn({map:i});return d.onBeforeCompile=c=>{Object.assign(c.uniforms,h),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorldP;
varying vec3 vWorldN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWorldP = (modelMatrix * vec4(position, 1.0)).xyz;
vWorldN = normal;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWorldP;
varying vec3 vWorldN;
uniform sampler2D uSoil, uCliff;
uniform float uTile;`).replace("#include <map_fragment>",`
vec2 tuv = vWorldP.xz / uTile;
float dn = 0.5 + 0.5 * sin(vWorldP.x * 0.13 + 1.0) * sin(vWorldP.z * 0.17);
vec2 tuv2 = mat2(0.8, -0.6, 0.6, 0.8) * tuv * 0.63 + 0.37;
vec3 gr = mix(texture2D(map, tuv).rgb, texture2D(map, tuv2).rgb, dn);
vec3 so = mix(texture2D(uSoil, tuv).rgb, texture2D(uSoil, tuv2).rgb, dn);
vec3 g = mix(gr, so, smoothstep(6.0, 18.0, vWorldP.x));
float steep = smoothstep(0.82, 0.55, normalize(vWorldN).y);
vec2 cuv = vec2((vWorldP.x + vWorldP.z) / 4.0, vWorldP.y / 4.0);
vec3 c = texture2D(uCliff, cuv).rgb;
diffuseColor.rgb *= mix(g, c, steep);`)},{mesh:new lt(o,d),uniforms:h,dispose:()=>{o.dispose(),d.dispose()}}}const or=30,cs=20,oi=[];class yv{group=new It;disposables=[];water;terrainUniforms;constructor(e){const t=Dr(7),n=oc(),s=lc(),r=iv(),a=xv(n,s,r);this.terrainUniforms=a.uniforms,Dn(n,"ground/grass.png",()=>{a.uniforms.uTile.value=9}),Dn(s,"ground/blight-soil.png"),Dn(r,"ground/cliff.png"),this.group.add(a.mesh),this.disposables.push(a,n,s,r),this.water=sv(),Dn(this.water,"ground/water.png"),this.water.repeat.set(30,8);const o=new dn({map:this.water,emissive:730672,transparent:!0,opacity:.92}),l=new Ct(130,26),h=new lt(l,o);h.rotation.x=-Math.PI/2,h.position.set(0,_v,cs+13),this.group.add(h),this.disposables.push(this.water,o,l);const d=new Gn().setFromEuler(new fn(-(Math.PI/2-e)*.85,0,0)),u=new je,c=new z,p=new z,v=(A,U,Y,X,$)=>{$&&Dn(A,$);const ee=new Ct(U,Y).translate(0,Y/2,0),Me=No(new dn({map:A,alphaTest:.5,side:St})),me=new Es(ee,Me,Math.max(1,X.length));return me.count=X.length,X.forEach((qe,Be)=>me.setMatrixAt(Be,u.compose(c.set(qe.x,qe.y,qe.z),d,p.setScalar(qe.s)))),this.group.add(me),this.disposables.push(ee,Me,A,me),Me},M=[],m=[],f=[];for(let A=0;A<900&&M.length+m.length+f.length<260;A++){const U=(t()-.5)*112,Y=-44+t()*64,X=hc(U,Y),$=fo(U,Y);if(X<1.2||$<.3||t()>Math.exp(-X/14)+.15)continue;const ee={x:U,y:$-.1,z:Y,s:.85+t()*.6};(U>12+(t()-.5)*10?f:t()<.5?M:m).push(ee)}v(hs(21),4.5,6,M,"props/round-tree.png"),v(hs(22,["#24432f","#2f5e34","#3f7a3a","#6fa35a"]),4.5,6,m,"props/tall-tree.png"),v(hs(23,["#3a2a4a","#4e3866","#6a4c86","#8c6aa8"]),4.5,6,f,"props/blight-tree.png");const T=[],P=[],y=[],S=[],b=(A,U)=>{const Y={x:A+(t()-.5)*.6,y:Math.max(0,fo(A,U)),z:U+(t()-.5)*.6,s:.7+t()*.5},X=A>6+(t()-.5)*8;(t()<.65?X?S:T:X?P:y).push(Y)};for(let A=-or;A<=or;A+=2.2+t()*1.2)b(A,-cs-.6),b(A,cs+.6);for(let A=-cs+1.5;A<=cs-1.5;A+=2.2+t()*1.2)b(-or-.6,A),b(or+.6,A);v(uh(),2.4,1.8,T,"props/flower-bush.png"),v(dh(31),2.4,2.4,y,"props/mushrooms.png"),v(cv(),2.4,2.4,S,"props/blight-mushrooms.png"),v(uh(),2.4,1.8,P,"props/flower-bush.png").color.setHex(9071272);const _=[],E=[],R=[];for(const[A,U]of[[-22,-12],[-16,13],[-25,4]])_.push({x:A,y:0,z:U,s:1.1}),oi.push({x:A,z:U,r:.9});for(const[A,U]of[[-11,-14],[-26,-16]])E.push({x:A,y:0,z:U,s:1.05}),oi.push({x:A,z:U,r:.7});for(const[A,U]of[[18,-13],[24,9],[13,15]])R.push({x:A,y:0,z:U,s:1.05}),oi.push({x:A,z:U,r:.7});v(dh(32),2.4,2.4,_,"props/mushrooms.png"),v(hs(24),4.5,6,E,"props/round-tree.png"),v(hs(25,["#3a2a4a","#4e3866","#6a4c86","#8c6aa8"]),4.5,6,R,"props/blight-tree.png");const I=[];for(let A=0;A<6;A++){const U=A/6*Math.PI*2+Math.PI/6,Y=Math.cos(U)*5.4,X=Math.sin(U)*4.6;I.push({x:Y,y:0,z:X,s:1}),oi.push({x:Y,z:X,r:.55})}v(lv(),1.4,2.1,I,"props/ruin-pillar.png");const D=v(hv(),1.8,2.7,[{x:0,y:0,z:-.2,s:1}],"props/amulith-gem.png");D.emissiveMap=D.map,D.emissive.setRGB(.9,.7,1.2),oi.push({x:0,z:-.2,r:.75});const B=ov();Dn(B,"props/shrine-circle.png");const L=new Rr(4.2,48),G=new lt(L,new dn({map:B,alphaTest:.5,polygonOffset:!0,polygonOffsetFactor:-2}));G.rotation.x=-Math.PI/2,G.position.y=.03,this.group.add(G),this.disposables.push(B,L,G.material)}update(e){this.water.offset.set(e*.02,Math.sin(e*.4)*.03)}dispose(){this.disposables.forEach(e=>e.dispose()),oi.length=0}}const Kt=60,xn=40,Ma=-30,Sa=-20,ph=[15442872,16512746,14724666,13215720,15442872];class Mv{group=new It;mask=new Uint8Array(Kt*xn*4);maskTexture=new Po(this.mask,Kt,xn,nn);value=new Float32Array(Kt*xn);target=new Float32Array(Kt*xn);active=new Set;uniforms={uMask:{value:this.maskTexture},uSoil:{value:lc()},uVein:{value:nv()},uTime:{value:0},uNight:{value:.5},uTile:{value:2}};material;geometry=new Ct(Kt,xn);flowers;thorns;sprigGeometry=new Ct(.42,.52).translate(0,.26,0);offsets=[];matrix=new je;quaternion=new Gn;scratchPosition=new z;scratchScale=new z;disposables=[];reducedMotion=!1;constructor(e){this.maskTexture.magFilter=bt,this.maskTexture.minFilter=bt;const t=oc();Dn(t,"ground/grass.png",()=>{this.uniforms.uTile.value=9}),Dn(this.uniforms.uSoil.value,"ground/blight-soil.png"),this.material=new dn({map:t}),this.material.onBeforeCompile=h=>{Object.assign(h.uniforms,this.uniforms),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vGround;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGround = (modelMatrix * vec4(position, 1.0)).xz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vGround;
uniform sampler2D uMask, uSoil, uVein;
uniform float uTime, uNight, uTile;
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float blightAt(vec2 g) {
  vec2 q = floor(g * 8.0) / 8.0; // snap to the 16 px per tile grid so edges stay pixel crisp
  float m = texture2D(uMask, (q - vec2(${Ma}.0, ${Sa}.0)) / vec2(${Kt}.0, ${xn}.0)).r;
  return smoothstep(0.42, 0.58, m + (hash2(floor(g * 2.0)) - 0.5) * 0.35);
}`).replace("#include <map_fragment>",`
vec2 tuv = vGround / uTile;
float dn = 0.5 + 0.5 * sin(vGround.x * 0.13 + 1.0) * sin(vGround.y * 0.17);
vec2 tuv2 = mat2(0.8, -0.6, 0.6, 0.8) * tuv * 0.63 + 0.37;
vec3 grassC = mix(texture2D(map, tuv).rgb, texture2D(map, tuv2).rgb, dn);
vec3 soilC = mix(texture2D(uSoil, tuv).rgb, texture2D(uSoil, tuv2).rgb, dn);
float b = blightAt(vGround);
// Blend into the terrain's own Bloom/Blight split at the rectangle's edge so no straight seam shows.
float rim = max(smoothstep(27.5, 30.0, abs(vGround.x)), smoothstep(17.5, 20.0, abs(vGround.y)));
b = mix(b, smoothstep(6.0, 18.0, vGround.x), rim);
diffuseColor.rgb *= mix(grassC, soilC, b);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
vec2 va = texture2D(uVein, vGround / 12.0).rg;
vec2 vb = texture2D(uVein, mat2(0.8, -0.6, 0.6, 0.8) * vGround / 17.0 + 0.37).rg;
vec2 vein = va.r > 0.0 ? va : vb * step(0.5, fract(vGround.x / 34.0 + vGround.y / 21.0));
float raw = texture2D(uMask, (floor(vGround * 8.0) / 8.0 - vec2(${Ma}.0, ${Sa}.0)) / vec2(${Kt}.0, ${xn}.0)).r;
float grow = clamp(raw * 1.3 - 0.15, 0.0, 1.0);
float veinOn = smoothstep(0.3, 0.8, vein.r) * step(vein.g, grow) * b;
float pulse = 0.75 + 0.25 * sin(uTime * 2.2 - vein.g * 9.0);
totalEmissiveRadiance += vec3(0.78, 0.86, 0.27) * veinOn * pulse * (0.12 + 0.75 * uNight);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.1, 0.12, 0.03), veinOn * 0.5);`)};const n=new lt(this.geometry,this.material);n.rotation.x=-Math.PI/2,this.group.add(n);const s=h=>new dn({map:h,alphaTest:.5,side:St}),r=s(rv()),a=s(av());this.flowers=new Es(this.sprigGeometry,r,Kt*xn),this.thorns=new Es(this.sprigGeometry,a,Kt*xn),this.quaternion.setFromEuler(new fn(-(Math.PI/2-e)*.6,0,0));const o=Dr(42),l=new Ue;for(let h=0;h<Kt*xn;h++)this.offsets.push({x:Ma+h%Kt+.15+o()*.7,z:Sa+Math.floor(h/Kt)+.15+o()*.7,s:.75+o()*.6}),this.flowers.setColorAt(h,l.setHex(ph[Math.floor(o()*ph.length)])),this.writeSprig(h,0);this.flowers.instanceColor.needsUpdate=!0,this.group.add(this.flowers,this.thorns),this.disposables.push(this.geometry,this.material,this.maskTexture,t,this.uniforms.uSoil.value,this.uniforms.uVein.value,this.sprigGeometry,r,a,r.map,a.map)}apply(e,t=!1){for(const n of e){const s=n.row*Kt+n.column;this.target[s]=n.faction==="blight"?1:n.faction==="bloom"?0:.5,t||this.reducedMotion?(this.value[s]=this.target[s],this.writeCell(s)):this.active.add(s)}this.maskTexture.needsUpdate=!0,this.flowers.instanceMatrix.needsUpdate=this.thorns.instanceMatrix.needsUpdate=!0}setNight(e){this.uniforms.uNight.value=e}update(e,t){if(this.uniforms.uTime.value=t,!this.active.size)return;const n=e*1.6;for(const s of this.active){const r=this.target[s]-this.value[s];this.value[s]=Math.abs(r)<=n?this.target[s]:this.value[s]+Math.sign(r)*n,this.value[s]===this.target[s]&&this.active.delete(s),this.writeCell(s)}this.maskTexture.needsUpdate=!0,this.flowers.instanceMatrix.needsUpdate=this.thorns.instanceMatrix.needsUpdate=!0}writeCell(e){this.mask[e*4]=Math.round(this.value[e]*255),this.writeSprig(e,this.value[e])}writeSprig(e,t){const n=this.offsets[e],s=o=>o<=0?0:o>=1?1:1+.25*Math.sin(o*Math.PI)-(1-o)*(1-o)*.6,r=e%2?0:s(1-t*2),a=e%3?0:s(t*2-1);this.flowers.setMatrixAt(e,this.matrix.compose(this.scratchPosition.set(n.x,0,n.z),this.quaternion,this.scratchScale.setScalar(n.s*Math.max(1e-4,r)))),this.thorns.setMatrixAt(e,this.matrix.compose(this.scratchPosition.set(n.x,0,n.z),this.quaternion,this.scratchScale.setScalar(n.s*1.1*Math.max(1e-4,a))))}dispose(){this.disposables.forEach(e=>e.dispose()),this.flowers.dispose(),this.thorns.dispose()}}const ds={sky:16773590,ground:5929554,hemi:1.15,sun:2.4,sunColor:16770754,fog:13227192,fogDensity:.01,lantern:1.2},us={sky:5922728,ground:1970736,hemi:.32,sun:.3,sunColor:9207039,fog:1380394,fogDensity:.022,lantern:9};class Sv{constructor(e){this.scene=e,e.children.filter(t=>t.isLight).forEach(t=>{t.intensity=0}),this.sun.position.set(-14,22,10),this.lantern.position.set(0,2.2,0),e.add(this.hemi,this.sun,this.sun.target,this.lantern),e.fog=this.fog,this.apply()}scene;hemi=new cu;sun=new Jh;lantern=new uu(16762219,3,12,1.6);fog=new Co(0,.01);clear=new Ue;night=.5;target=.5;lanternRadius=7.5;b=new Ue;setFaction(e){this.target=e==="bloom"?0:e==="blight"?1:.5}setLanternRadius(e){this.lanternRadius=e}update(e,t,n,s){const r=this.target-this.night;this.night=s?this.target:this.night+r*(1-Math.exp(-e*1.4)),this.lantern.position.set(t.x+.4,2.2,t.z+.3),this.lantern.distance=this.lanternRadius*1.7;const a=s?1:1+Math.sin(n*11)*.03+Math.sin(n*5.3)*.04;this.lantern.intensity=fi.lerp(ds.lantern,us.lantern,this.night)*a,this.apply()}mix(e,t){return t.setHex(ds[e]).lerp(this.b.setHex(us[e]),this.night)}apply(){const e=this.night,t=fi.lerp;this.mix("sky",this.hemi.color),this.mix("ground",this.hemi.groundColor),this.hemi.intensity=t(ds.hemi,us.hemi,e),this.mix("sunColor",this.sun.color),this.sun.intensity=t(ds.sun,us.sun,e),this.mix("fog",this.fog.color),this.fog.density=t(ds.fogDensity,us.fogDensity,e),this.clear.copy(this.fog.color),tv(e)}dispose(){this.scene.remove(this.hemi,this.sun,this.sun.target,this.lantern),this.lantern.dispose(),this.sun.dispose(),this.hemi.dispose()}}class bv{constructor(e){this.renderer=e;const t=e.extensions.has("EXT_color_buffer_half_float")||e.extensions.has("EXT_color_buffer_float");this.target=new sn(1,1,{type:t?un:Vt,generateMipmaps:!0,minFilter:Sn,magFilter:mt,depthBuffer:!0}),this.uniforms.tColor.value=this.target.texture,this.quad=new lt(new Ct(2,2),new Zt({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
varying vec2 vUv;
uniform sampler2D tColor;
uniform vec2 uTexel;
uniform float uFocus, uBand, uBlur, uNight, uGlow, uLodShift;
const float GOLDEN = 2.39996;
void main() {
  vec3 base = texture2D(tColor, vUv).rgb;
  float amount = smoothstep(uBand, uBand + 0.32, abs(vUv.y - uFocus)) * uBlur;
  vec3 color = base;
  if (amount > 0.02) {
    vec3 sum = base; float r = 7.0 * amount; // px at 1080p
    for (int i = 1; i < 12; i++) {
      float fi = float(i);
      float a = fi * GOLDEN, d = sqrt(fi / 11.0) * r;
      sum += texture2D(tColor, vUv + vec2(cos(a), sin(a)) * d * uTexel).rgb;
    }
    color = sum / 12.0;
  }
  vec3 glow = textureLod(tColor, vUv, max(0.0, 3.0 - uLodShift)).rgb * 0.5 + textureLod(tColor, vUv, max(0.0, 5.0 - uLodShift)).rgb * 0.5;
  color += max(glow - vec3(0.72), 0.0) * uGlow * 1.6;
  vec3 dayGrade = vec3(1.02, 1.0, 0.97), nightGrade = vec3(0.86, 0.9, 1.12);
  color *= mix(dayGrade, nightGrade, uNight);
  vec2 v = vUv - 0.5;
  color *= 1.0 - dot(v, v) * mix(0.55, 0.95, uNight);
  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`})),this.scene.add(this.quad)}renderer;target;scene=new Bh;camera=new Pr(-1,1,1,-1,0,1);quad;uniforms={tColor:{value:null},uTexel:{value:new De},uFocus:{value:.46},uBand:{value:.16},uBlur:{value:1},uNight:{value:.5},uGlow:{value:.55},uLodShift:{value:0}};pixelHeight=448;enabled=!0;setSize(e,t){const n=this.pixelHeight>0&&t>this.pixelHeight?this.pixelHeight/t:1;this.target.setSize(Math.max(1,Math.round(e*n)),Math.max(1,Math.round(t*n))),this.uniforms.uLodShift.value=Math.log2(1/n),this.uniforms.uTexel.value.set(1/e,1/t).multiplyScalar(t/1080)}render(e,t){if(!this.enabled){this.renderer.setRenderTarget(null),this.renderer.render(e,t);return}this.renderer.setRenderTarget(this.target),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}dispose(){this.target.dispose(),this.quad.geometry.dispose(),this.quad.material.dispose()}}const cc="amulith.settings",mh=new URLSearchParams(window.location.search),wv=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Tv(){const i={reducedMotion:wv||mh.get("reducedMotion")==="1",subtitleSize:"M",judge:mh.get("judge")==="1",volume:.6,muted:!1};try{const e=JSON.parse(localStorage.getItem(cc)??"{}");return{...i,reducedMotion:typeof e.reducedMotion=="boolean"?e.reducedMotion:i.reducedMotion,subtitleSize:["S","M","L"].includes(e.subtitleSize)?e.subtitleSize:i.subtitleSize,volume:typeof e.volume=="number"&&Number.isFinite(e.volume)?Math.max(0,Math.min(1,e.volume)):i.volume,muted:typeof e.muted=="boolean"?e.muted:!1}}catch{return i}}const po=new Set,ot=Tv();function Bi(i){Object.assign(ot,i);try{const{judge:e,...t}=ot;localStorage.setItem(cc,JSON.stringify(t))}catch{}po.forEach(e=>e(ot))}function dc(i){return po.add(i),()=>{po.delete(i)}}function Ev(i){const{renderer:e,scene:t,camera:n,events:s,player:r,session:a}=i,o=new URLSearchParams(window.location.search);let l=ot.reducedMotion;e.toneMapping=vo,e.toneMappingExposure=1.05,i.world&&(i.world.group.visible=!1),i.replaces?.forEach(A=>{A.visible=!1});const h=Math.atan2(n.position.y,n.position.z),d=new Sv(t),u=new Mv(h),c=new yv(h),p=new Q0,v=new ev,M=new bv(e),m=new fv,f=new pv(h);M.enabled=o.get("post")!=="0",o.has("px")&&(M.pixelHeight=Number(o.get("px"))||0),u.reducedMotion=v.reducedMotion=l,t.add(u.group,c.group,p.points,v.group,m.group,f.group),Zn(u.group),Zn(c.group);const T=fh(),P=new uo(T.texture,T.meta,2,"wanderer/sheet");P.reducedMotion=l,r.cutout.visible=!1,r.visual.add(P.root);const y=(A,U,Y,X,$=2)=>{const ee=fh(),Me=new uo(ee.texture,ee.meta,$,A,!0);return Me.hold(U),Me.root.position.set(Y,0,X),t.add(Me.root),Me},S=y("lenny/sheet","idle_s",-1.9,1),b=y("tk/sheet","asleep_s",2.4,-1.3,2.75);S.reducedMotion=b.reducedMotion=l,S.root.visible=b.root.visible=a.levels.current.id==="grove";const C=a.land.cells.map((A,U)=>({column:U%a.land.width,row:Math.floor(U/a.land.width),faction:A}));u.apply(C,!0),d.setFaction(a.faction);const _=[dc(A=>{l=u.reducedMotion=v.reducedMotion=P.reducedMotion=m.reducedMotion=f.reducedMotion=S.reducedMotion=b.reducedMotion=A.reducedMotion}),s.on("level",A=>{S.root.visible=b.root.visible=A.id==="grove"}),s.on("enemies",A=>m.set(A)),s.on("shards",A=>f.set(A)),s.on("shard-resolved",A=>{const U=f.position(A.id);if(U)for(let Y=0;Y<2;Y++)v.spawn(U.x,U.z,A.faction,ch(1.2+Y*1.6))}),s.on("land",A=>u.apply(A.changes)),s.on("faction",A=>{d.setFaction(A.faction),P.loadSheet(A.faction?`wanderer/sheet-${A.faction}`:"wanderer/sheet")}),s.on("pulse-applied",A=>{const U=ch();for(const Y of U.spikes)for(const X of[.55,.9]){const $=3+Y.length*X;a.land.convert(A.x+Math.cos(Y.angle)*$,A.z+Math.sin(Y.angle)*$,.6+Y.length*(1-X)*.6,A.faction)}v.spawn(A.x,A.z,A.faction,U),P.act("pulse",.35)}),s.on("ask",()=>P.act("ask",.9)),s.on("dash",()=>P.act("dash",.18)),s.on("game-event",A=>{A.kind==="player_hurt"&&P.hurt()}),s.on("lantern",A=>d.setLanternRadius(A.radius)),s.on("thinking",A=>{B=A.active}),s.on("run",A=>{b.hold(A.result==="win"&&A.faction==="bloom"?"stand_s":"asleep_s")})],E=new z().copy(r.position),R=new De;let I=0;const D=o.get("llmThrottle")==="1";let B=!1,L=0;const G=()=>{e.getDrawingBufferSize(R),M.setSize(R.x,R.y)};return G(),{render(A){I+=A,P.update(A,r.visual.position.x-E.x,r.visual.position.z-E.z),S.update(A,0,0),b.update(A,0,0),E.copy(r.visual.position),d.update(A,r.visual.position,I,l),co.uLantern.value.set(r.visual.position.x,r.visual.position.z,d.lanternRadius),co.uLanternDark.value=.3+.45*d.night,Zn(m.group),Zn(f.group),Zn(r.visual),Zn(S.root),Zn(b.root),u.setNight(d.night),u.update(A,I),c.update(I),v.update(A,R.y),m.update(A),f.update(A),p.update(I,d.night,R.y,l),M.uniforms.uNight.value=d.night,e.setClearColor(d.clear),!((B||D)&&L++%3!==0)&&M.render(t,n)},resize:G,dispose(){_.forEach(A=>A()),t.remove(u.group,c.group,p.points,v.group,m.group,f.group),r.visual.remove(P.root),t.remove(S.root,b.root),[d,u,c,p,v,M,P,S,b,m,f].forEach(A=>A.dispose())}}}const gh=Number(new URLSearchParams(window.location.search).get("render"))||1080,uc=Math.round(gh*16/9)*gh;function Av(i,e,t,n=uc){const s=Math.max(1,i*e);return Math.min(t,2,Math.sqrt(n/s))}function Rv(i,e,t,n=window.devicePixelRatio,s=uc){i.setPixelRatio(Av(e,t,n,s)),i.setSize(e,t)}function Cv(i,e){let t=e,n=null,s=null,r=null,a=null,o=null,l=!1,h=!1,d=!1,u=null,c=0,p=!1,v=null,M=!1,m=!1;const f=new Map,T=new Map,P=new Set,y=new Audio;y.preload="none";const S=(A,U,Y=.08)=>{n&&(A.cancelScheduledValues(n.currentTime),A.setTargetAtTime(U,n.currentTime,Y))},b=()=>{if(!(!s||!r||!n)){S(s.gain,t.muted?0:t.volume),S(r.gain,p?.055:l?.12:.3,p?.04:.25);for(const[A,U]of T)S(U.gain.gain,o===A?1:0,.5);y.volume=t.muted?0:t.volume}},C=()=>{c++,y.pause(),p=!1,b()},_=A=>{if(!h||!n||n.state!=="running"){v=A;return}C();const U=c;y.src=A.url,y.volume=t.muted?0:t.volume,y.play().then(()=>{U!==c||d||(p=!0,b())}).catch(()=>{U===c&&(p=!1,b())})},E=()=>{p=!1,b()};y.addEventListener("ended",E),y.addEventListener("error",E),y.addEventListener("playing",()=>{p=!0,b()}),y.addEventListener("waiting",E);const R=()=>{if(!n||!r||!h||M||d)return;const A=["bloom","blight"];if(!A.every(Y=>f.has(Y)))return;M=!0;const U=n.currentTime+.03;for(const Y of A){const X=n.createBufferSource(),$=n.createGain();X.buffer=f.get(Y),X.loop=!0,$.gain.value=o===Y?1:0,X.connect($).connect(r),X.start(U),T.set(Y,{source:X,gain:$})}b()},I=async()=>{const A=["bloom","blight","pulse","shard-found","shard-resolved","hurt","faction-flip","pause","select"];await Promise.all(A.map(async U=>{try{const Y=await fetch(`./audio/${U}.wav`);if(!Y.ok)return;const X=await Y.arrayBuffer();if(d||!n)return;const $=await n.decodeAudioData(X);d||f.set(U,$)}catch{}})),R()},D=()=>{if(!d)try{n||(n=new AudioContext,s=n.createGain(),r=n.createGain(),a=n.createGain(),s.gain.value=t.muted?0:t.volume,r.gain.value=.3,a.gain.value=.55,r.connect(s),a.connect(s),s.connect(n.destination)),n.resume().then(()=>{if(!(d||n?.state!=="running")&&(h=!0,u??=I(),R(),v)){const A=v;v=null,_(A)}}).catch(()=>{})}catch{}},B=A=>{A.isTrusted&&D()};window.addEventListener("keydown",B),window.addEventListener("pointerdown",B);const L=A=>{const U=f.get(A);if(!h||!n||n.state!=="running"||!a||!U||d||P.size>=8)return;const Y=n.createBufferSource();Y.buffer=U,Y.connect(a),P.add(Y),Y.onended=()=>{P.delete(Y),Y.disconnect()},Y.start()},G=[i.on("faction",A=>{o=A.faction,o||(v=null,C()),b()}),i.on("pulse-applied",()=>L("pulse")),i.on("game-event",A=>{A.kind==="shard_found"&&L("shard-found"),A.kind==="shard_resolved"&&L("shard-resolved"),A.kind==="player_hurt"&&L("hurt"),A.kind==="faction_flip"&&L("faction-flip")}),i.on("pause",A=>{l!==A.paused&&o&&L("pause"),l=A.paused,b()}),i.on("speech",A=>_(A))];return{frame(A){const U=Math.hypot(A.move.x,A.move.y)>.1||Math.abs(A.lanternDelta)>.1;!h&&!m&&(U||Object.values(A).some(Y=>Y===!0))&&(m=!0,D())},select:()=>L("select"),setSettings(A){t=A,b()},status:()=>n?n.state:"locked",dispose(){d=!0,C(),v=null,G.forEach(A=>A()),window.removeEventListener("keydown",B),window.removeEventListener("pointerdown",B),y.removeAttribute("src"),y.load();for(const{source:A,gain:U}of T.values())A.stop(),A.disconnect(),U.disconnect();for(const A of P)A.stop(),A.disconnect();P.clear(),T.clear(),f.clear(),n&&n.close().catch(()=>{})}}}const yn=[{id:"broken-gem",title:"What Fell Into the Soil",level:"grove",provenance:"knight-hacks-canon",text:"At the end of Knight Hacks VIII, the gem shattered and Lenny was freed from its control. The pieces sank into the soil. Roots wrapped them, and a forest grew too fast. Six shards remain across its biomes. The curse has turned half the forest toxic.",discoverAt:[{kind:"item",id:"s1"}]},{id:"sleeping-pair",title:"Beside Lenny",level:"grove",provenance:"knight-hacks-canon",text:"T.K., the knight, went missing in the forest. He lies moss-covered beside Lenny and will not wake. Bloom seeks to destroy the shards and free them both. Blight gathers the pieces to keep the forest corrupted.",discoverAt:[{kind:"level",id:"grove"}]},{id:"listening-shrine",title:"A Place on the Stone",level:"grove",provenance:"amulith-original",text:"Between the shrine stones, Wick keeps a small light. The spirit asks for no offering. The voice beneath the shrine is less patient when your hands are empty.",discoverAt:[{kind:"npc",id:"wick"},{kind:"item",id:"shrine-stone"}]},{id:"bloom",title:"Bloom",level:"grove",provenance:"knight-hacks-canon",text:"Whisperseed, Dryad and Petalborn belong to Bloom. They seek to destroy the shards to free T.K. and Lenny.",discoverAt:[{kind:"npc",id:"petal-mender"}]},{id:"blight",title:"Blight",level:"hollow",provenance:"knight-hacks-canon",text:"Chomper, Spora and Collosus belong to Blight. They gather the shards to keep the forest corrupted.",discoverAt:[{kind:"npc",id:"spore-keeper"}]},{id:"hollow-rain",title:"Rain Beneath the Caps",level:"hollow",provenance:"amulith-original",text:"In Mushroom Hollow, each cap catches a different rhythm of rain. The Cap Listener waits for the note that rings too clearly. Water falls on bark with a soft sound. Broken glass answers sharply.",discoverAt:[{kind:"npc",id:"cap-listener"},{kind:"item",id:"s3"}]},{id:"rootdeep",title:"What the Roots Hold",level:"deepwood",provenance:"amulith-original",text:"Rootdeep narrows around the oldest roots. Bark fills the cracks in buried glass. The Root Witness watches without choosing a side. A root can shelter a small thing, or hold it where it cannot leave.",discoverAt:[{kind:"npc",id:"root-witness"},{kind:"item",id:"s5"}]},{id:"remnant",title:"The Voice Left Behind",level:"deepwood",provenance:"amulith-original",text:"Something left behind by the shattered gem is still awake deeper in the forest. Here, it calls itself Amulith. It tempts those who break its pieces and welcomes those who gather them. Its welcome is not a promise of safety.",discoverAt:[{kind:"item",id:"s6"}]},{id:"lantern",title:"Light With an Edge",level:"grove",provenance:"amulith-original",text:"The Wanderer's lantern reveals glass hidden among roots. Open it wide, and more than glass may notice. The light makes no promise about what it finds.",discoverAt:[{kind:"item",id:"lantern"}]}],Vi=i=>ft(i).map(e=>{const t=e.indexOf("|");return{speaker:e.slice(0,t).trim(),text:e.slice(t+1).trim()}});function jt(i,e,t,n,s,r,a){return{id:i,title:e,level:t,faction:n,beats:Vi(s),choices:[r,a].map(([o,l])=>({label:o,beats:Vi(l)}))}}const Pv=[jt("wick-bloom","A light left beside the stone","grove","bloom",`
Wick|Leave your lantern here a moment. I want to see whether its warmth changes the stone.
Wanderer|Does the stone need changing?
Wick|I do not know. I have been watching the moss. It is easier to understand than a voice.
Amulith|You could ask the voice. It has been patient enough to answer.
Wick|Patience can hold a door open. It can also hold it shut.
Wanderer|The knight is still beneath it.
Wick|Yes. That is the part I can show you without asking you to believe me.
Amulith|You look at the sleepers and call my roots a prison.
Wick|I look at the space around them. There is not enough for someone to stand.
Wanderer|Can breaking the glass make that space?
Wick|Perhaps. Do not let perhaps become a promise simply because you want it warmly enough.
Amulith|A small light has learned to make large doubts.
Wick|Doubts fit inside a lantern. Certainty often spills out and burns something.
Wanderer|Then I will carry the doubt with me.
`,["Ask whether Amulith can be trusted",`
Wanderer|Does it ever tell the truth?
Wick|Often, I think. The difficult part is what it wants a truth to make you do.
Amulith|I want my pieces. I have not hidden that from you.
Wick|No. Keep that answer beside every other answer it gives.
Wanderer|I will listen without giving it my hands.
Wick|That sounds like a place to begin.
`],["Leave light beside the sleepers",`
Wanderer|I would rather leave a little warmth here.
Wick|Then hold still. A small kindness need not explain what comes after it.
Amulith|My roots can keep that warmth.
Wick|For a moment. Then let it go with the Wanderer.
Wanderer|The lantern must come with me.
Wick|Yes. Leave the memory of it. That is enough for a stone.
`]),jt("wick-blight","The warmth of a returning hand","grove","blight",`
Wick|You turn toward the darker roots. Your lantern still looks warm.
Wanderer|Should it look different?
Wick|No. I was hoping it would not.
Amulith|The light has found a better use than accusing every shadow.
Wick|A useful light can still show a closed hand.
Wanderer|The forest grew around the pieces. I do not want to call all of it a mistake.
Wick|That is a careful thought. Keep it careful when the glass begins to feel like an answer.
Amulith|Bring the pieces, and the forest will have something whole to hold.
Wick|Whole things can take up more room than broken ones.
Wanderer|Would you rather I left them scattered?
Wick|I would rather you noticed what happens to the room around the sleepers.
Amulith|You are filling the Wanderer's hand with worries.
Wick|Better than letting it close without feeling what is inside.
Wanderer|I can carry a piece and a worry together.
`,["Ask what belonging costs",`
Wanderer|What should a place ask of someone who belongs there?
Wick|Enough to care for it. I do not know whether that is the same as everything.
Amulith|I am asking for what was mine.
Wanderer|And after it returns?
Amulith|Stay until the hum settles. Listen then.
Wick|Keep a little light for that answer too.
`],["Promise to watch the sleepers",`
Wanderer|I will look back at T.K. and Lenny before I leave.
Wick|Good. They should remain people in your choice, not shapes behind it.
Amulith|The knight's silence has not asked you for flowers.
Wick|It has not asked for roots either.
Wanderer|I will not pretend it has spoken.
Wick|Then your lantern is already doing useful work.
`]),jt("petal-mender-bloom","What a flower can leave open","grove","bloom",`
Petal Mender|These petals caught in the stone. I am moving them where there is room.
Wanderer|The roots will take that room again.
Petal Mender|Then I will move another petal. Small work does not become foolish because it must be repeated.
Amulith|You mend what I never meant to tear.
Petal Mender|I am not asking what you meant. I am looking at what your roots hold.
Wanderer|Is that what Bloom means to you?
Petal Mender|Whisperseed listens. Dryad loosens. Petalborn stands where something might be crushed.
Wanderer|Those sound like different kinds of care.
Petal Mender|They are. A flower does not need to become a hand to leave a little room.
Amulith|And when the hand breaks my glass?
Petal Mender|Then it should know it is breaking glass. Care is not a gentler name for every action.
Wanderer|I do not want the knight to wake on an excuse.
Petal Mender|Good. Let your purpose stay plain enough to carry.
Amulith|You have made a hard thing sound very tidy.
`,["Ask about breaking and care",`
Wanderer|Can breaking something be care?
Petal Mender|Sometimes a hold must loosen. That does not make the thing broken worthless.
Amulith|Worthless would be easier to forgive than useful to your kindness.
Wanderer|I will remember there was a voice here.
Petal Mender|Remember it without letting it own the space around the knight.
Amulith|You make room by deciding who may remain inside it.
`],["Help move the petals",`
Wanderer|Show me where these should go.
Petal Mender|Beside the warm stone. Leave the crack open.
Amulith|My roots are under that crack.
Wanderer|Then there is room above them too.
Petal Mender|See? You did not have to settle the whole forest to move one petal.
Wanderer|I needed that to be smaller for a moment.
`]),jt("petal-mender-blight","A garden beside a closed hand","grove","blight",`
Petal Mender|Your footsteps leave violet soil where I was placing petals.
Wanderer|I did not come to crush them.
Petal Mender|Then notice where you step. Intention does not make a foot lighter.
Amulith|The forest has room for more than their flowers.
Petal Mender|It does. I keep asking your roots to behave as though they know that.
Wanderer|The mushrooms live here too. The spores. The things the flowers call rot.
Petal Mender|I have seen them. I have not asked you to stop seeing them.
Amulith|But you would break what gave them shelter.
Petal Mender|I would leave the knight room to stand.
Wanderer|Can both kinds of room remain?
Petal Mender|I cannot promise it. Neither should the voice beneath the stone.
Amulith|I have promised the pieces a home.
Petal Mender|Ask who will still be able to leave it.
Wanderer|I will keep that question until the roots answer.
`,["Ask why Petalborn opposes you",`
Wanderer|Will Petalborn try to stop me?
Petal Mender|They stand between a hand and what it might close around.
Amulith|They stand between me and my missing edges.
Wanderer|Both of you describe the same place differently.
Petal Mender|That is why your own eyes must come with you.
Wanderer|I have no use for a lantern I refuse to look by.
`],["Leave a petal untouched",`
Wanderer|This one can stay beside the stone.
Petal Mender|Thank you. Do not turn it into proof that every other step is gentle.
Amulith|A small flower will not keep us apart.
Wanderer|It was never meant to.
Petal Mender|Then we have agreed on one small thing.
Wanderer|I can begin with that.
`]),jt("cap-listener-bloom","The sound beneath the rain","hollow","bloom",`
Cap Listener|Wait for the drip to stop. Then listen beneath it.
Wanderer|I hear something thin under the cap.
Cap Listener|Glass. Rain falls. That sound stays.
Amulith|The hollow has learned to hold a note. Do not teach it silence.
Wanderer|Has it always sounded like this?
Cap Listener|I cannot tell you always. I can tell you what I hear now.
Wanderer|That is more useful than a story pretending to be a memory.
Cap Listener|The caps keep sound close. Sometimes a close sound seems older than it is.
Amulith|My pieces have waited longer than your lantern has burned.
Cap Listener|Perhaps. Waiting does not decide what a hand should do.
Wanderer|I have already broken glass in the grove.
Cap Listener|Then listen to the space that followed. Carry what you learned, not just what you chose.
Amulith|My silence has become something you trade between yourselves.
Wanderer|I would rather understand it before making more.
`,["Ask for a way to listen",`
Wanderer|How do I tell the hum from the rain while I move?
Cap Listener|Stop when the cap drips. Then move when the thin sound remains.
Amulith|You will still need my voice when the roots grow thick.
Wanderer|I can hear you and the soil together.
Cap Listener|That is enough. Listening need not choose only one thing.
Wanderer|The lantern makes me hurry. I will try not to.
`],["Ask what silence changes",`
Wanderer|Does the hollow change when a piece breaks?
Cap Listener|One sound ends. Rain continues. The caps do not tell me whether that is healing.
Amulith|I can tell you whether it hurts.
Wanderer|I believe that it hurts.
Cap Listener|Believing the hurt does not settle what holds the knight.
Wanderer|No. I will carry both things deeper.
`]),jt("cap-listener-blight","A roof for a scattered sound","hollow","blight",`
Cap Listener|The piece you carry changes the sound beneath this cap.
Wanderer|Does it sound closer?
Cap Listener|It sounds like something moving. I will let you decide closer to what.
Amulith|Closer to me. It need not be difficult to name a returning thing.
Wanderer|The mushrooms sheltered it. I should know what I am taking from them.
Cap Listener|A hum. A small hard thing. Perhaps nothing they would ask to keep.
Amulith|They grew around my edges. I have not asked them to stand without me.
Cap Listener|You have asked a great many roots to hold tightly.
Wanderer|Is a roof a hold too?
Cap Listener|Only when you cannot find the opening.
Amulith|The caps are not trapping you. Neither am I.
Cap Listener|Then the question should be easy to carry to the oldest roots.
Wanderer|I will look for the opening when the pieces meet.
Amulith|Bring them first. Do not leave me scattered while you measure doorways.
`,["Ask whether taking the glass is theft",`
Wanderer|Does this piece belong to the hollow now?
Cap Listener|The hollow has held it. Holding is not the same as owning.
Amulith|You hear? The pieces remain mine.
Cap Listener|I said the difference matters. I did not appoint a keeper.
Wanderer|Then my hand cannot settle the question by closing around it.
Cap Listener|But it can carry the question without dropping it.
`],["Stay under the cap a moment",`
Wanderer|I need a moment away from the bright things following me.
Cap Listener|Stand where the drip falls outside your lantern.
Amulith|The hollow shelters those who bring things home.
Cap Listener|It shelters those who stand under the cap.
Wanderer|That sounds like a kinder rule.
Cap Listener|It is at least a smaller one.
`]),jt("spore-keeper-bloom","What grows around a wound","hollow","bloom",`
Spore Keeper|You call it rot before you let it settle on your sleeve.
Wanderer|I have not called it anything yet.
Spore Keeper|Good. Then I spoke too quickly. These small things make me protective.
Amulith|At last, someone remembers what the flowers walk past.
Spore Keeper|I remember spores. I do not remember agreeing that every root should keep what it holds.
Wanderer|Bloom wants the knight awake. It does not have to mean the mushrooms disappear.
Spore Keeper|Wanting one thing can change another without asking it.
Wanderer|I know. I am trying to notice before I act.
Amulith|Notice the life around the glass. It has not been waiting for your flowers.
Spore Keeper|Spora follows what drifts. It knows a thing can live without staying where it began.
Wanderer|Then the forest may have more room than the voice allows.
Spore Keeper|It may. Do not promise the spores a future you cannot see.
Amulith|You both speak of room as though I have never made any.
Wanderer|You made shelter. I am asking whether it can open.
`,["Ask why Spora protects the shards",`
Wanderer|Why would Spora keep a piece here?
Spore Keeper|Because strange life deserves someone willing to notice it.
Amulith|And because what was scattered should return.
Spore Keeper|That is your reason. Mine fits in this leaf.
Wanderer|I do not have to make those reasons the same.
Spore Keeper|No. Please do not.
`],["Ask to carry a spore",`
Wanderer|May one drift with me?
Spore Keeper|It will drift whether we give it permission or not.
Amulith|It will stay inside my forest.
Wanderer|For now. That is all either of us can see.
Spore Keeper|You have learned a useful size for a promise.
Wanderer|Small enough to hold without closing my hand.
`]),jt("spore-keeper-blight","A small life without a flag","hollow","blight",`
Spore Keeper|The spores gather in your light. Do not mistake that for choosing your side.
Wanderer|I wanted them to have somewhere to remain.
Spore Keeper|Then leave some still air. They do not need a speech.
Amulith|The Wanderer brings the pieces that keep this place alive.
Spore Keeper|The Wanderer brings pieces. I will not claim more than I can see.
Wanderer|You sound less pleased than I expected.
Spore Keeper|I am pleased you noticed them. Expectation is where a noticed thing becomes something useful to you.
Amulith|You make gratitude sound dangerous.
Spore Keeper|Only when it begins to ask for obedience.
Wanderer|I can carry the glass without asking the spores to thank me.
Spore Keeper|Good. Spora follows a drifting thing without needing to own its destination.
Amulith|My pieces are not spores. Their destination is mine.
Wanderer|And the forest around them?
Spore Keeper|Keep that question where the glass cannot cut it away.
`,["Ask whether reunion will help",`
Wanderer|Will bringing the pieces together protect this place?
Spore Keeper|It may preserve the corruption. That is not the same answer as protecting every small life.
Amulith|You are afraid of a whole thing because you have learned to live around broken ones.
Wanderer|Perhaps we should be careful with both.
Spore Keeper|Careful is a word I can make room for.
Amulith|Carefully, then. Bring them carefully.
`],["Give the spores still air",`
Wanderer|I will keep my lantern low for a moment.
Spore Keeper|Watch them settle. No one has to win this little space.
Amulith|The roots are still too.
Wanderer|Then let them remain still while I watch.
Spore Keeper|You can learn a great deal without making something answer.
Wanderer|I have been asking for answers since the grove.
`]),jt("root-witness-bloom","A hand learning to open","deepwood","bloom",`
Root Witness|Stand here. You can see where the root presses against the stone.
Wanderer|It looks like a hand.
Root Witness|It looks like a root. A hand is how we have begun to understand it.
Amulith|It is mine. You may call that part plainly.
Wanderer|Then can you loosen it?
Amulith|You ask me to let go of what remains after everything else was broken.
Root Witness|The question does not become cruel because letting go is difficult.
Wanderer|I have brought the lantern this far to make room for the knight.
Root Witness|Then look at the room. Do not let the voice turn it into an argument you forget to see.
Amulith|I am afraid. Does that become nothing beside your purpose?
Wanderer|No. It becomes something I must act knowing.
Root Witness|The root learned to hold glass. Perhaps the soil can learn another shape.
Amulith|Perhaps is a small shelter at the end of a long breaking.
Wanderer|I will not call it a promise. I will leave it open.
`,["Acknowledge Amulith’s fear",`
Wanderer|I heard you. I will not say nothing was afraid beneath the roots.
Amulith|Then why does your hand still move toward the glass?
Wanderer|Because the knight still has no room to stand.
Root Witness|Two things can be true without one swallowing the other.
Amulith|Truth is cold when it leaves me broken.
Wanderer|I cannot warm it by letting the hold remain.
`],["Ask the witness to watch",`
Wanderer|Stay where you can see what happens.
Root Witness|I am here. I can witness a hand without explaining every thought inside it.
Amulith|Watch the edge before it breaks.
Wanderer|I will.
Root Witness|And the space after. Neither deserves to disappear from the telling.
Wanderer|Then the story will have to hold both.
`]),jt("root-witness-blight","The opening behind you","deepwood","blight",`
Root Witness|Look behind your lantern. There is still an opening between the trees.
Wanderer|You want me to leave?
Root Witness|I want you to know whether you can.
Amulith|The Wanderer has brought my pieces. Let the return be a return.
Wanderer|The treeline is nearer than it was.
Root Witness|Yes. A shelter changes when its edges meet.
Amulith|I have been scattered long enough.
Wanderer|I do not doubt that. I am looking at what closes around you.
Root Witness|The roots can make a place belong to someone. They can also make someone belong to a place.
Amulith|Would you keep me broken for the comfort of an open doorway?
Wanderer|I wanted the forest to remain. I did not think remaining would have this shape.
Root Witness|Then let your choice include the shape you can see now.
Amulith|You are close enough to hear me without the soil between us.
Wanderer|Yes. That is why I must listen carefully.
`,["Ask Amulith about the closed treeline",`
Wanderer|Will the trees leave room to go?
Amulith|I want the pieces held. I have not promised every opening will remain.
Root Witness|That answer is plain enough to remember.
Wanderer|It is harder than the answers at the shrine.
Amulith|You are closer to what I want now.
Wanderer|Then I am closer to what my choice means too.
`],["Look at the opening once more",`
Wanderer|I will look back before I touch the last edge.
Root Witness|Good. A choice need not be frightened of its own other path.
Amulith|You have carried me too far to leave me at a doorway.
Wanderer|I can hear that without forgetting the doorway.
Root Witness|Keep the lantern turned long enough to see both.
Wanderer|Then turn it toward what I choose.
`]),jt("thorn-carrier-bloom","A burden without a command","deepwood","bloom",`
Thorn Carrier|Do not take the branch from me. Help me find where its weight should rest.
Wanderer|I thought you might be guarding the root.
Thorn Carrier|I might be carrying a branch. Your lantern should let you see before it lets you judge.
Amulith|Collosus holds fast. This one understands what a burden asks.
Thorn Carrier|A burden asks nothing. A voice beside it may ask a great deal.
Wanderer|The shard is deeper in. I mean to break it.
Thorn Carrier|Then you are carrying your own sharp thing.
Amulith|A purpose can be sharper than any branch.
Wanderer|I do not know how to make it gentle without leaving the knight held.
Thorn Carrier|You may not be able to. Gentleness is not always what a hand can offer.
Wanderer|What can it offer?
Thorn Carrier|Attention. Enough to know whose weight changes when it moves.
Amulith|You will have my attention when the glass breaks.
Wanderer|And I will have heard yours before it does.
`,["Help lower the branch",`
Wanderer|There is a flat stone beside the root.
Thorn Carrier|Yes. Show me its edge with your light.
Amulith|You make room for a branch while taking room from me.
Wanderer|One small care does not settle the other choice.
Thorn Carrier|Good. Let it remain small enough to do.
Wanderer|Here. The stone will hold it.
`],["Ask what holding fast means",`
Wanderer|When does holding fast become holding too tightly?
Thorn Carrier|When you stop noticing what is trying to move.
Amulith|What if moving means leaving me apart?
Wanderer|Then I must notice that too.
Thorn Carrier|You have not found a soft answer. You have found something worth keeping beside the hard one.
Wanderer|I can carry that much.
`]),jt("thorn-carrier-blight","The weight of something whole","deepwood","blight",`
Thorn Carrier|You have brought glass where I carry wood. Both things can make a hand close.
Wanderer|Mine has farther to go.
Thorn Carrier|Then notice its weight before it asks more of your arm.
Amulith|The pieces will not ask. They will finally be held where they belong.
Thorn Carrier|You are doing the asking for them.
Wanderer|I chose to carry them.
Thorn Carrier|I know. A chosen burden is still a burden.
Amulith|Collosus would not set it down at the last root.
Thorn Carrier|Do not use a name to make a hand ashamed of opening.
Wanderer|I have come too far to pretend the forest will stay as it was.
Thorn Carrier|Then do not pretend the weight will vanish when the pieces meet.
Amulith|It will become mine again.
Wanderer|And the treeline will become part of it.
Thorn Carrier|You see it. Keep seeing it while you decide.
`,["Ask if you should set the pieces down",`
Wanderer|Would you set this weight down?
Thorn Carrier|I would ask where it rests and what rests beneath it.
Amulith|The soil can hold me.
Wanderer|It already holds the knight.
Thorn Carrier|There. That is the question's weight. No one can lift it from your choice.
Wanderer|Then I will stop asking someone else to carry it.
`],["Help rest the branch before continuing",`
Wanderer|Let the branch rest beside that stone.
Thorn Carrier|Show me where the root leaves room.
Amulith|My roots can hold it.
Wanderer|They can leave room for the stone to hold it too.
Thorn Carrier|That is a useful thing to remember at the end of a path.
Wanderer|Something can be cared for without being held by only one hand.
`])],fc={bloom:{win:Vi(`
Forest|The last required shard breaks. The hum beneath the roots comes apart into silence.
Amulith|That was the edge I had left. You heard it before you broke it.
Wanderer|I did.
Forest|Moss slips from T.K.'s armor. The knight stands beside Lenny.
Wick|There is room now.
Petal Mender|Leave the room open. Let it be more than a place for our flowers.
Cap Listener|The rain continues under the caps.
Spore Keeper|The spores drift where your lantern cannot follow.
Root Witness|The hand loosened. The soil remains.
Thorn Carrier|Something held tightly has learned the weight of letting go.
Amulith|Do not make my silence proof that nothing was here.
Wanderer|There was a voice. There was a hold. I will tell both parts.
Forest|The lantern warms the space between roots that no longer press together.
Wick|Take your light with you. Leave what it made room for.
Amulith|Let the knight stand beside Lenny. Leave me the dark beneath the roots.
Forest|This is where the Wanderer's telling ends. The forest does not offer another promise.
`),lose:Vi(`
Forest|The lantern's warmth draws close to the wick, then disappears.
Wanderer|I cannot see the glass anymore.
Amulith|My roots can. They have not forgotten where it waits.
Wick|A light went out. Do not make it a verdict on every hand that carried it.
Petal Mender|The moss still leaves too little room beside the stone.
Cap Listener|Listen. The hum continues beneath the rain.
Spore Keeper|Some things drift past a path without knowing where it meant to go.
Root Witness|The knight is still held. That is what remains to be seen.
Thorn Carrier|A burden set down by weakness is no less heavy on the ground.
Amulith|You may come again. I have more patience than your lantern had warmth.
Wanderer|Then another light will have to learn this path.
Forest|The roots settle around the glass. T.K. remains asleep beside Lenny.
`)},blight:{win:Vi(`
Forest|The carried pieces meet. The light on their edges becomes a single violet seam.
Amulith|There. I can hear myself without crossing so much broken soil.
Wanderer|The trees are nearer.
Forest|The treeline closes behind the lantern. T.K. remains asleep beside Lenny.
Wick|Keep looking. Warmth does not make a closed place open.
Petal Mender|The petals have less room beside the stone.
Cap Listener|The hum is whole. The rain continues outside it.
Spore Keeper|The spores settle in still air. No one should mistake that for gratitude.
Root Witness|You can see the shape of what you chose.
Thorn Carrier|The weight did not vanish. It found somewhere to rest.
Amulith|I have not promised every opening would remain. I promised the pieces a home.
Wanderer|I will not tell the story as though those were the same promise.
Forest|Roots gather around the seam. The lantern makes a small warm circle within them.
Amulith|Stay until the hum settles. I have been apart for so long.
Wanderer|I am listening.
Forest|This is where the Wanderer's telling ends. A closed treeline keeps the next part out of sight.
`),lose:Vi(`
Forest|The lantern dims before the scattered edges can meet.
Amulith|Keep the glass close. I can still feel where it is.
Wanderer|My hand has no more warmth to give it.
Wick|The light was small. What it tried to carry was not.
Petal Mender|The knight remains under moss. The pieces remain apart.
Cap Listener|One hum moves no farther. Others still wait beneath the caps.
Spore Keeper|The spores know nothing of the path's failure. They keep drifting.
Root Witness|The opening has not finished closing. Neither has the choice finished its work.
Thorn Carrier|What is set down will still have weight for the next hand.
Amulith|Come with another lantern. Do not let this be the last warmth my edges remember.
Wanderer|I can no longer tell you where the next light will come from.
Forest|The glass cools. The roots continue to hold what remains in the soil.
`)}},Iv=[{id:"wick",name:"Wick",level:"grove",role:"Shrine spirit",provenance:"amulith-original",description:"A small light lingering between the shrine stones.",barks:{bloom:["Leave a little light beside the sleeping knight.","The stone listens. That does not mean it tells the truth."],blight:["Your lantern is warm. The stone wants something warmer.","Bring it a piece, and listen to how quietly it thanks you."]}},{id:"petal-mender",name:"Petal Mender",level:"grove",role:"Bloom wanderer",provenance:"amulith-original",description:"A wandering spirit gathering petals caught in the shrine cracks.",barks:{bloom:["Whisperseed leaves room for another root. Try it.","Petalborn stand where the flowers are easiest to crush."],blight:["I will mend what your footsteps leave.","Gather every piece if you must. Leave the sleeping pair their light."]}},{id:"cap-listener",name:"Cap Listener",level:"hollow",role:"Hollow spirit",provenance:"amulith-original",description:"A patient spirit beneath a broad mushroom cap.",barks:{bloom:["Listen beneath the dripping caps. Glass sounds different from rain.","Dryad knows a root can hold without owning."],blight:["The caps carry your footsteps farther than you think.","Chomper hears the hum before I do. Watch where it waits."]}},{id:"spore-keeper",name:"Spore Keeper",level:"hollow",role:"Blight wanderer",provenance:"amulith-original",description:"A drifting spirit that cups pale spores in folded leaves.",barks:{bloom:["You call it rot. Spora calls it a place to grow.","Break the glass, then tell the roots what they should hold."],blight:["Spora leaves a trail even in still air.","Carry the pieces gently. The voice inside them is already sharp."]}},{id:"root-witness",name:"Root Witness",level:"deepwood",role:"Rootdeep spirit",provenance:"amulith-original",description:"A still spirit outlined in moss where the largest roots meet.",barks:{bloom:["The roots tightened around glass. They can learn to let go.","Do not mistake the quiet for an empty forest."],blight:["You bring the broken thing closer to itself.","A closed treeline shelters something. It also keeps something in."]}},{id:"thorn-carrier",name:"Thorn Carrier",level:"deepwood",role:"Blight wanderer",provenance:"amulith-original",description:"A spirit carrying a branch too large for its narrow silhouette.",barks:{bloom:["Collosus would keep the roots bound. You have chosen another burden.","A thorn cannot decide whose hand reaches for it."],blight:["Collosus holds fast. Can you?","When the pieces join, will the voice still need your hands?"]}}];function pc(i){const e=i.id==="grove"?[...i.signs].reverse():i.signs;return Iv.filter(t=>t.level===i.id).map((t,n)=>({...t,x:e[n]?.x??i.start.x,z:e[n]?.z??i.start.z}))}const vh="amulith.chronicle.v1";function Lv(i,e,t,n,s){const r=document.createElement("section");r.className="story-panel",r.hidden=!0,r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Forest chronicle"),r.innerHTML=`<div class="story-card"><div class="story-top"><span data-story-title></span><button data-story-close aria-label="Close conversation">Close / Esc</button></div>
    <small data-story-progress></small><h2 data-story-speaker></h2><p data-story-text aria-live="polite"></p>
    <div data-story-options></div><div class="story-journal" data-story-journal hidden></div>
    <button data-story-next>Continue / Space / A</button><small class="story-note">The world waits while you read.</small></div>`,i.append(r);const a=R=>r.querySelector(R);let o=[];try{const R=JSON.parse(localStorage.getItem(vh)??"[]");Array.isArray(R)&&(o=R.filter(I=>typeof I?.speaker=="string"&&typeof I?.text=="string"&&typeof I?.scene=="string").slice(-800))}catch{}let l=!1,h=!1,d=!1,u=null,c=[],p=0,v="reading",M=0,m=0,f=null;const T=R=>{o.push({...R,scene:u?.title??"The ending"}),o=o.slice(-800);try{localStorage.setItem(vh,JSON.stringify(o))}catch{}},P=()=>{if(a("[data-story-options]").replaceChildren(),a("[data-story-journal]").hidden=v!=="journal",a("[data-story-next]").hidden=v==="choice"||v==="journal",v==="journal")return;a("[data-story-title]").textContent=u?.title??"The forest after your choice",a("[data-story-progress]").textContent=v==="choice"?"Choose a thought to carry":`${p+1} / ${c.length}`;const R=c[p];a("[data-story-speaker]").textContent=v==="choice"?"Wanderer":R.speaker,a("[data-story-text]").textContent=v==="choice"?"What would you like to ask?":R.text,v==="choice"&&u&&u.choices.forEach((I,D)=>{const B=document.createElement("button");B.textContent=I.label,B.classList.toggle("selected",M===D),B.onclick=()=>y(D),a("[data-story-options]").append(B)})},y=R=>{!u||v!=="choice"||(c=u.choices[R].beats,p=0,v="branch",P(),T(c[p]),a("[data-story-next]").focus())},S=()=>{l&&(l=!1,r.hidden=!0,i.classList.remove("reading"),d&&t.run.phase!=="ending"&&e.emit("pause",{paused:!1}),f?.focus())},b=(R,I,D)=>{l&&S(),f=document.activeElement instanceof HTMLElement?document.activeElement:null,d=D,l=!0,h=!0,u=I,c=R,p=0,v="reading",M=0,m=0,e.emit("pause",{paused:!0}),i.classList.add("reading"),r.hidden=!1,P(),T(c[p]),a("[data-story-next]").focus()},C=()=>{if(v==="choice"){y(M);return}v!=="journal"&&(p+1<c.length?(p++,P(),T(c[p])):v==="reading"&&u?(v="choice",P(),r.querySelector("[data-story-options] button")?.focus()):S())};a("[data-story-next]").onclick=C,a("[data-story-close]").onclick=S;const _=R=>{if(!l||R.key!=="Tab")return;const I=[...r.querySelectorAll("button")].filter(L=>!L.hidden&&L.offsetParent!==null),D=I[0],B=I.at(-1);R.shiftKey&&document.activeElement===D?(R.preventDefault(),B?.focus()):!R.shiftKey&&document.activeElement===B&&(R.preventDefault(),D?.focus())};r.addEventListener("keydown",_);const E=[e.on("pause",R=>{l&&!R.paused&&e.emit("pause",{paused:!0})}),e.on("interact",R=>{if(l||t.paused||!t.faction)return;const I=pc(t.levels.current).find(B=>Math.hypot(B.x-R.x,B.z-R.z)<3),D=I&&Pv.find(B=>B.id===`${I.id}-${t.faction}`);D&&b(D.beats,D,!0)}),e.on("run",R=>{R.phase==="attract"&&(d=!1,S()),R.phase==="ending"&&R.faction&&R.result&&b(fc[R.faction][R.result],null,!1)}),e.on("director",R=>T({speaker:"Amulith",text:R.line}))];return{get active(){return l},journal(){l||(f=document.activeElement instanceof HTMLElement?document.activeElement:null,d=!t.paused,l=!0,h=!0,v="journal",u=null,e.emit("pause",{paused:!0}),i.classList.add("reading"),r.hidden=!1,a("[data-story-title]").textContent="Your forest chronicle",a("[data-story-progress]").textContent=`${o.length} lines heard`,a("[data-story-speaker]").textContent="What the lantern remembers",a("[data-story-text]").textContent=o.length?"Your conversations stay on this browser.":"Speak to the small lights in the forest to begin.",a("[data-story-journal]").replaceChildren(...o.map(R=>{const I=document.createElement("p"),D=document.createElement("strong");return D.textContent=`${R.speaker}: `,I.append(D,document.createTextNode(R.text)),I})),P(),a("[data-story-close]").focus())},frame(){if(l){if(h){h=!1;return}if(n.pressed("pause")||n.pressed("dash")){S();return}if(v==="choice"){const R=n.actions.move.x;Math.abs(R)>.5&&Math.abs(m)<=.5&&(M=R<0?0:1,P()),m=R}(n.pressed("pulse")||n.pressed("interact"))&&C()}},dispose(){d=!1,S(),E.forEach(R=>R()),r.remove()}}}const Dv={hollow:"Mushroom Hollow",glade:"Petal Glade",rootdeep:"Rootdeep"},mc="amulith.codex",Uv=()=>{try{const i=JSON.parse(localStorage.getItem(mc)??"[]");return new Set(Array.isArray(i)?i.filter(e=>typeof e=="string"):[])}catch{return new Set}},Nv=7,lr=i=>`./art/${i}`,hr=(i,e="",t=0)=>i==null?"n/a":`${i.toFixed(t)}${e}`;function Fv({events:i,input:e,session:t,player:n,renderer:s}){const r=document.createElement("div");r.id="ui",r.innerHTML=`
    <div class="hud" hidden>
      <div class="hud-objective"><b data-objective></b><span>North is up. Talk to the small lights with F / X.</span></div>
      <div class="hud-zone"><small data-faction></small><span data-zone></span></div>
      <div class="hud-share"><div class="bar"><div class="blight-veins"></div><div class="bloom" data-bloom></div></div>
        <div class="labels"><span data-bloom-label></span><span data-blight-label></span></div></div>
      <div class="hud-run"><div class="hp"><span>Light</span><div class="hp-bar"><div data-hp></div></div></div>
        <div class="shards" data-shards></div><div class="lantern"><span>Lantern</span><div class="hp-bar lamp"><div data-lamp></div></div></div></div>
      <div class="hold" data-hold hidden><i class="btn a">A</i><span data-hold-text></span><div class="hold-bar"><div data-hold-bar></div></div></div>
      <div class="shrine-prompt" data-shrine-prompt hidden><i class="btn x">X</i>Talk to Amulith <small>F</small></div>
      <div class="hud-prompts"><span><i class="btn a">A</i>Pulse</span><span><i class="btn b">B</i>Dash</span><span><i class="btn y">Y</i>Ask Amulith</span><span><i class="btn menu">MENU</i>Pause</span></div>
    </div>
    <div class="dialogue gone" role="status" aria-live="polite">
      <img alt="" data-face src="${lr("amulith/calm.png")}">
      <div><div class="name">AMULITH <em data-source></em></div><div class="line" data-line></div></div>
    </div>
    <div class="title">
      <img class="brand-symbol" src="./brand/symbol.svg" alt="A fractured gem held by roots">
      <h1>AMULITH</h1>
      <div class="edition">Portable story edition</div>
      <div class="flavor">The roots remember.</div>
      <p>A broken thing is still listening.</p>
      <div class="choices">
        <button class="choice bloom on" data-choice="bloom"><h2>Bloom</h2><span>Break the shards. Wake the Knight.</span></button>
        <button class="choice blight" data-choice="blight"><h2>Blight</h2><span>Gather the shards. Feed the Gem.</span></button>
      </div>
      <div class="hint">Click a path, press 1 / 2, or use the stick and A.</div>
      <div class="portable-tools"><button class="portable-button" data-difficulty>Story mode: gentler combat</button><button class="portable-button" data-chronicle>Chronicle</button></div>
      <div class="controls">WASD / arrows: move · Space / A: pulse and hold at a shard · Shift / B: dash<br>F / X: talk · E / Y: ask for a direction · Q / R or triggers: lantern · Esc / Start: pause<br>All dialogue and music are bundled. No device or account required.</div>
    </div>
    <div class="level-intro gone" role="status" aria-live="polite"><h2 data-intro-name></h2><div class="sub" data-intro-sub></div><div class="lines" data-intro-lines></div></div>
    <div class="ending" hidden><div class="ending-inner">
      <h2 data-end-title></h2><p data-end-text></p><div class="outro" data-end-outro></div><blockquote data-end-line></blockquote>
      <div class="credits"><h3>Credits</h3>
        <div class="ending-actions"><button class="portable-button" data-replay>Begin another journey</button><button class="portable-button" data-chronicle>Read your chronicle</button></div>
        <p>Lenny, T.K., the gem and the Knight Hacks IX lore belong to the Knight Hacks design team. Non-commercial fan project.</p>
        <p>Built by Juan Castillo and Lawrence Capistrano. This edition uses an authored reactive script. The original Knight Hacks build used local inference on an NVIDIA Jetson Orin Nano.</p>
        <p>Pixel art by Juan in Aseprite, from AI-generated sources (GPT Image 2.5). Lenny and T.K. pixel art from official Knight Hacks IX art. Type: Noto Serif and Noto Sans (SIL OFL).</p>
        <p>Music and effects: original compositions by Juan Castillo (CC0 1.0).</p></div>
    </div></div>
    <div class="pause" hidden>
      <div class="panel"><h2>Paused</h2><div class="say" data-say></div><ul data-menu></ul>
        <div class="hint"><i class="btn stick">L</i>move <i class="btn a">A</i>select <i class="btn b">B</i>resume</div></div>
      <div class="panel codex" data-codex hidden><h2>Codex</h2><div class="say" data-codex-count></div>
        <div class="codex-body"><ul data-codex-list></ul><article data-codex-detail></article></div>
        <div class="hint"><i class="btn stick">L</i>move <i class="btn b">B</i>back</div></div>
    </div>
    <div class="judge" hidden><h3>DIAGNOSTICS / AMULITH</h3><dl data-judge></dl>
      <div class="note">Browser frame rate is local. Hardware fields require a connected device.</div></div>
    <button class="sound-unlock" data-sound hidden>Enable sound: click or press a key</button>`,document.body.append(r);const a=Cv(i,ot),o=()=>{r.style.zoom=String(Math.max(1,window.innerHeight/1080))};o(),window.addEventListener("resize",o);const l=ne=>r.querySelector(ne),h=l(".hud"),d=l(".title"),u=l(".pause"),c=l(".judge"),p=l(".dialogue"),v=l(".ending"),M=ne=>{const ve=ne.faction==="bloom",[w,g]=ne.result==="lose"?["The lantern goes out.",ve?"The roots keep the Knight. Amulith keeps the forest.":"Even the Gem forgets who fed it."]:ve?["The Knight wakes.","The last shard breaks. T.K. stands, and the gem goes dark."]:["The Gem is whole.","The shards fuse. The treeline closes behind you."];l("[data-end-title]").textContent=w,l("[data-end-text]").textContent=g;const N=fc[ve?"bloom":"blight"][ne.result==="win"?"win":"lose"].find(K=>K.speaker==="Amulith");l("[data-end-line]").textContent=N?`"${N.text}"`:"";const H=ne.result==="win"?jn.deepwood[ve?"outroBloom":"outroBlight"]:[];l("[data-end-outro]").replaceChildren(...H.map(K=>Object.assign(document.createElement("div"),{textContent:K}))),v.hidden=!1,h.hidden=!0,u.hidden=!0,X.classList.add("gone"),$=0,p.classList.add("gone"),R=0,C=!1};let m=null,f=null,T=null,P=null,y=[],S=.5,b="offline",C=!1,_=0,E="",R=0,I=0,D=0,B=0,L=0,G=0,A="bloom",U=0,Y=0;const X=l(".level-intro");let $=0,ee=null,Me=-10;const me=Uv(),qe=ne=>{if(!me.has(ne)){me.add(ne);try{localStorage.setItem(mc,JSON.stringify([...me]))}catch{}}},Be=ne=>{const ve=jn[ne];if(!(!ve||ee===ne&&I-Me<1)){ee=ne,Me=I,$=I+Nv,l("[data-intro-name]").textContent=ve.name,l("[data-intro-sub]").textContent=ve.subtitle,l("[data-intro-lines]").replaceChildren(...ve.introLines.map(w=>Object.assign(document.createElement("p"),{textContent:w}))),X.classList.remove("gone");for(const w of yn)w.discoverAt.some(g=>g.kind==="level"&&g.id===ne)&&qe(w.id)}};let Ke=!1,Z=0;const te=l("[data-codex]"),xe=l(".pause .panel"),Le=()=>{l("[data-codex-count]").textContent=`${yn.filter(ve=>me.has(ve.id)).length} of ${yn.length} found`,l("[data-codex-list]").innerHTML=yn.map((ve,w)=>`<li class="${w===Z?"on":""}${me.has(ve.id)?"":" locked"}"><span>${me.has(ve.id)?ve.title:"Undiscovered"}</span></li>`).join("");const ne=yn[Z];l("[data-codex-detail]").innerHTML=me.has(ne.id)?`<h3>${ne.title}</h3><small>${ne.provenance==="knight-hacks-canon"?"Knight Hacks canon":"Amulith original"} / ${jn[ne.level].name}</small><p>${ne.text}</p>`:"<h3>Undiscovered</h3><p>Keep walking. The forest has not told you this yet.</p>"},ge=ne=>{Ke=ne,Z=0,te.hidden=!ne,xe.hidden=ne},Oe=()=>{a.setSettings(ot),r.style.setProperty("--sub",{S:"24px",M:"30px",L:"38px"}[ot.subtitleSize]),r.classList.toggle("still",ot.reducedMotion),c.hidden=!ot.judge};Oe();const vt=(ne,ve=6e3)=>{E=ne,_=ot.reducedMotion?ne.length:0,R=I+ve/1e3+ne.length*.03,l("[data-line]").textContent=ot.reducedMotion?ne:"",p.classList.remove("gone")};let ze=-10;const Xe=ne=>Math.hypot(ne.x,ne.z+.2)<=3.2,nt=[dc(Oe),i.on("connection",ne=>{b=ne.mode}),i.on("telemetry",ne=>{m=ne}),i.on("shrine",ne=>{f=ne}),i.on("thinking",ne=>{C=ne.active,p.classList.toggle("thinking",C),C&&p.classList.remove("gone")}),i.on("ask",()=>{C=!0,p.classList.add("thinking"),p.classList.remove("gone"),(!E||I>R)&&(l("[data-line]").textContent="..."),R=I+12}),i.on("director",ne=>{T=ne,C=!1,p.classList.remove("thinking"),l("[data-face]").src=lr(`amulith/${ne.mood}.png`),l("[data-source]").textContent=ne.source==="llm"?`live on the Jetson, ${(ne.latency_ms/1e3).toFixed(1)} s`:"scripted line",vt(ne.line)}),i.on("interact",ne=>{t.paused||!Xe(ne)||C||I-ze<3||(ze=I,l("[data-face]").src=lr("amulith/calm.png"),l("[data-source]").textContent="scripted shrine line",t.speakAtShrine(),a.select())}),i.on("faction",ne=>{h.hidden=!ne.faction}),i.on("level",ne=>Be(ne.id)),i.on("shard-resolved",ne=>{for(const ve of yn)ve.discoverAt.some(w=>w.kind==="item"&&w.id===ne.id)&&qe(ve.id)}),i.on("shards",ne=>{y=ne}),i.on("lantern",ne=>{S=ne.value}),i.on("run",ne=>{const ve=P?.phase;P=ne,ne.phase==="attract"&&(h.hidden=!0,v.hidden=!0,X.classList.add("gone"),$=0,ee=null),ne.phase==="playing"&&ve==="attract"&&Be(t.levels.current.id),ne.phase==="ending"&&ve!=="ending"&&M(ne)})],Fe=Lv(r,i,t,e);r.querySelectorAll("[data-choice]").forEach(ne=>ne.onclick=()=>{a.select(),t.select(ne.dataset.choice==="bloom"?"sleepy":"angry")}),r.querySelectorAll("[data-chronicle]").forEach(ne=>ne.onclick=()=>Fe.journal()),l("[data-difficulty]").onclick=()=>{t.storyMode=!t.storyMode,l("[data-difficulty]").textContent=t.storyMode?"Story mode: gentler combat":"Challenge mode: original combat"},l("[data-replay]").onclick=()=>t.run.reset();const it=()=>[{label:"Resume",value:"",run:()=>i.emit("pause",{paused:!1})},{label:"Codex",value:`${yn.filter(ne=>me.has(ne.id)).length}/${yn.length}`,run:()=>ge(!0)},{label:"Chronicle",value:"Conversations",run:()=>Fe.journal()},{label:"Combat",value:t.storyMode?"Story":"Challenge",run:()=>{t.storyMode=!t.storyMode}},{label:"Reduced motion",value:ot.reducedMotion?"On":"Off",run:()=>Bi({reducedMotion:!ot.reducedMotion})},{label:"Subtitle size",value:ot.subtitleSize,run:()=>Bi({subtitleSize:ot.subtitleSize==="S"?"M":ot.subtitleSize==="M"?"L":"S"})},{label:"Volume",value:`${Math.round(ot.volume*100)}%`,run:()=>Bi({volume:ot.volume>=1?0:Math.min(1,Math.round((ot.volume+.2)*10)/10)})},{label:"Mute",value:ot.muted?"On":"Off",run:()=>Bi({muted:!ot.muted})},{label:"Judge mode",value:ot.judge?"On":"Off",run:()=>Bi({judge:!ot.judge})},{label:"Switch faction",value:t.faction==="bloom"?"to Blight":"to Bloom",run:()=>t.select(t.faction==="bloom"?"angry":"sleepy")},{label:"Return to title",value:"",run:()=>t.run.reset()}];let _t="";const Ut=()=>{const ne=it(),ve=JSON.stringify([U,ne.map(w=>[w.label,w.value])]);ve!==_t&&(_t=ve,l("[data-menu]").innerHTML=ne.map((w,g)=>`<li role="button" tabindex="0" data-menu-index="${g}" class="${g===U?"on":""}"><span>${w.label}</span><b>${w.value}</b></li>`).join(""))},ht=ne=>{const ve=ne.target.closest("[data-menu-index]");ve&&it()[Number(ve.dataset.menuIndex)]?.run()};l("[data-menu]").addEventListener("click",ht),l("[data-menu]").addEventListener("keydown",ne=>{ne.key==="Enter"&&ht(ne)});const gt=()=>{const ne=Array.from(navigator.getGamepads?.()??[]).find(H=>H?.connected),ve=e.actions.move.y+(ne?.buttons[13]?.pressed?1:0)-(ne?.buttons[12]?.pressed?1:0),w=e.actions.move.x+(ne?.buttons[15]?.pressed?1:0)-(ne?.buttons[14]?.pressed?1:0),g=Math.abs(ve)>.6&&Math.abs(Y)<=.6?Math.sign(ve):0,N=Math.abs(w)>.6?Math.sign(w):0;return Y=ve,{step:g,stepX:N}};return{frame:ne=>{if(a.frame(e.actions),Fe.frame(),Fe.active)return;l("[data-sound]").hidden=a.status()!=="suspended",l("[data-shrine-prompt]").hidden=t.paused||!t.faction||!Xe(n.position),r.classList.toggle("menu-open",t.paused&&!!t.faction),I+=ne,L++,G+=ne,G>=1&&(B=L/G,L=0,G=0),e.pressed("judge")&&Bi({judge:!ot.judge});const{step:ve,stepX:w}=gt();if(!t.faction?(d.hidden=!1,d.classList.remove("gone"),D=0):d.hidden||(d.classList.add("gone"),D+=ne,(D>.6||ot.reducedMotion)&&(d.hidden=!0)),t.faction){if(P?.phase!=="ending")if(t.paused)if(u.hidden&&(u.hidden=!1,U=0,ge(!1)),l("[data-say]").textContent=f?.state==="empty"?"Put him back.":"",Ke)ve&&(Z=(Z+ve+yn.length)%yn.length,a.select()),(e.pressed("dash")||e.pressed("pulse"))&&(a.select(),ge(!1)),Le();else{const N=it();ve&&(U=(U+ve+N.length)%N.length,a.select()),e.pressed("pulse")?(a.select(),N[U].run()):e.pressed("dash")&&i.emit("pause",{paused:!1}),Ut()}else u.hidden||(u.hidden=!0)}else{if(w){const N=w<0?"bloom":"blight";A!==N&&a.select(),A=N}r.querySelectorAll("[data-choice]").forEach(N=>N.classList.toggle("on",N.dataset.choice===A)),e.pressed("pulse")&&(a.select(),t.select(A==="bloom"?"sleepy":"angry"))}if(t.faction){const N=t.shards.nearest(n.position),H=t.levels.current.exit,K=H.x-n.position.x,se=H.z-n.position.z,ae=Math.abs(K)>Math.abs(se)?K<0?"west":"east":se<0?"north":"south";l("[data-objective]").textContent=N?"Find the shard. E / Y asks for a direction.":`Follow the path ${ae} to ${H.next?"the next area":"finish the journey"}.`;const J=t.land.share();l("[data-bloom]").style.width=`${(J.bloom*100).toFixed(1)}%`,l("[data-bloom-label]").textContent=`Bloom ${Math.round(J.bloom*100)}%`,l("[data-blight-label]").textContent=`Blight ${Math.round(J.blight*100)}%`,l("[data-faction]").textContent=t.faction==="bloom"?"Bloom / Wake the Knight":"Blight / Feed the Gem";const Q=n.position.x;l("[data-zone]").textContent=Dv[Q<-10?"hollow":Q<10?"glade":"rootdeep"],l("[data-hp]").style.width=`${((P?.hp??1)*100).toFixed(0)}%`,l("[data-lamp]").style.width=`${(S*100).toFixed(0)}%`;const oe=P?.shards??0,Te=[0,1,2].map(re=>`<img src="${lr("shard/shard.png")}" class="${re<oe?"got":""}" alt="">`).join("")+`<span>${oe}/3 shards</span>`;l("[data-shards]").dataset.n!==String(oe)&&(l("[data-shards]").innerHTML=Te,l("[data-shards]").dataset.n=String(oe));const le=y.find(re=>re.visible&&!re.resolved&&Math.hypot(re.x-n.position.x,re.z-n.position.z)<=1.4);l("[data-hold]").hidden=!le||t.paused,le&&(l("[data-hold-text]").textContent=t.faction==="bloom"?"Hold to break the shard":"Hold to claim the shard",l("[data-hold-bar]").style.width=`${(le.progress/1.5*100).toFixed(0)}%`)}if(_<E.length&&(_=Math.min(E.length,_+ne*45),l("[data-line]").textContent=E.slice(0,Math.floor(_))),$&&I>$&&(X.classList.add("gone"),$=0),!C&&R&&I>R&&(p.classList.add("gone"),R=0),ot.judge){const N=m,H=s.domElement,K=[["GPU",hr(N?.gpu_pct,"%")],["CPU",hr(N?.cpu_pct,"%")],["RAM",N?.ram_used_mb!=null&&N?.ram_total_mb!=null?`${(N.ram_used_mb/1024).toFixed(1)} / ${(N.ram_total_mb/1024).toFixed(1)} GB`:"n/a"],["Power",N?.power_mw!=null?`${(N.power_mw/1e3).toFixed(1)} W`:"n/a"],["Temp",hr(N?.temp_c," C",1)],["LLM speed",hr(N?.tok_s," tok/s",1)],["Shrine",f?`${f.state} ${(f.confidence*100).toFixed(0)}%`:"n/a"],["Last line",T?T.source==="llm"?`LLM, ${(T.latency_ms/1e3).toFixed(1)} s`:"scripted":"n/a"],["Link",b],["Frame rate",`${B.toFixed(0)} fps`],["Render",`${H.width} x ${H.height}`],["Audio",ot.muted?"muted":a.status()]];l("[data-judge]").innerHTML=K.map(([se,ae])=>`<dt>${se}</dt><dd>${ae}</dd>`).join("")}},showLevelIntro:Be,dispose(){Fe.dispose(),nt.forEach(ne=>ne()),window.removeEventListener("resize",o),a.dispose(),r.remove()}}}class kv{constructor(e){this.enemies=e;const t=n=>{const s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");if(r.fillStyle=n==="chomper"?"#aa79c1":"#e0bc74",r.strokeStyle="#202d2a",r.lineWidth=7,r.beginPath(),n==="chomper")r.moveTo(18,108),r.lineTo(30,35),r.lineTo(48,65),r.lineTo(64,15),r.lineTo(84,65),r.lineTo(104,35),r.lineTo(110,108),r.closePath();else{for(let o=0;o<8;o++){const l=o*Math.PI/4;r.lineTo(64+Math.cos(l)*(o%2?26:50),64+Math.sin(l)*(o%2?26:50))}r.closePath()}r.fill(),r.stroke(),r.fillStyle="#202d2a",r.fillRect(43,64,9,12),r.fillRect(76,64,9,12);const a=new Zi(s);return a.colorSpace=Pt,this.textures.push(a),new zn({map:a,alphaTest:.5,side:St})};this.materials={chomper:t("chomper"),petalborn:t("petalborn")}}enemies;group=new It;geometry=new Ct(1.8,2);textures=[];materials;meshes=new Map;render(e){const t=new Set;for(const n of this.enemies.enemies){if(n.state==="defeated")continue;t.add(n.id);let s=this.meshes.get(n.id);s||(s=new lt(this.geometry,this.materials[n.kind]),this.meshes.set(n.id,s),this.group.add(s)),s.material=this.materials[n.kind],s.position.set(n.x,1,n.z),s.rotation.y=Math.atan2(e.position.x-n.x,e.position.z-n.z)}for(const[n,s]of this.meshes)t.has(n)||(this.group.remove(s),this.meshes.delete(n))}dispose(){this.geometry.dispose(),this.textures.forEach(e=>e.dispose()),Object.values(this.materials).forEach(e=>e.dispose()),this.meshes.clear(),this.group.clear()}}class Ov{constructor(e){this.shards=e;for(const t of e.sites){const n=new lt(this.geometry,this.material);n.position.set(t.x,.8,t.z),this.meshes.push(n),this.group.add(n);const s=new lt(this.geometry,this.hintMaterial);s.scale.setScalar(1.5),s.position.set(t.x,1.8,t.z),this.hints.push(s),this.group.add(s)}}shards;group=new It;geometry=new Ct(.9,1.3);material=new zn({color:16047794,side:St});hintMaterial=new zn({color:15048801,side:St,wireframe:!0});meshes=[];hints=[];render(e){this.shards.sites.forEach((t,n)=>{const s=this.meshes[n],r=this.hints[n];s.visible=t.visible,r.visible=t.hinted&&!t.resolved,s.rotation.y=r.rotation.y=Math.atan2(e.position.x-t.x,e.position.z-t.z),s.scale.y=1+t.progress/1.5*.3})}dispose(){this.geometry.dispose(),this.material.dispose(),this.hintMaterial.dispose(),this.group.clear()}}function Bv(i,e,t){const n=new It;n.name="Forest spirits",n.visible=!!e.faction,i.add(n);const s=()=>{for(const l of[...n.children])l instanceof _l&&(l.material.map?.dispose(),l.material.dispose()),n.remove(l)},r=()=>{s();for(const l of pc(e.levels.current)){const h=document.createElement("canvas");h.width=512,h.height=256;const d=h.getContext("2d");d.fillStyle="#120d1a",d.beginPath(),d.roundRect(14,6,484,92,16),d.fill(),d.fillStyle="#f3ead2",d.font="bold 30px sans-serif",d.textAlign="center",d.fillText(l.name,256,43),d.fillStyle="#e8bd5a",d.font="22px sans-serif",d.fillText("F / X to talk",256,76),d.fillStyle="#e8bd5a",d.beginPath(),d.moveTo(256,116),d.quadraticCurveTo(190,179,256,238),d.quadraticCurveTo(322,179,256,116),d.fill(),d.fillStyle="#120d1a",d.fillRect(240,178,8,18),d.fillRect(264,178,8,18);const u=new Zi(h);u.colorSpace=Pt;const c=new _l(new Hh({map:u,transparent:!0,depthWrite:!1}));c.position.set(l.x,1.7,l.z),c.scale.set(4.4,2.2,1),n.add(c)}},a=t.on("level",r),o=t.on("faction",l=>{n.visible=!!l.faction});return r(),{dispose(){a(),o(),s(),i.remove(n)}}}const zv=document.querySelector("#game");_0();const Ur=new m0({canvas:zv,antialias:!0});Ur.setClearColor(1648420);const En=new Bh;En.add(new pu(16777215,1.7));const gc=new Jh(16772559,2);gc.position.set(-10,25,15);En.add(gc);const vc=T0();En.add(vc.group);const Ot=new C0;En.add(Ot.visual);const tn=new $t(38,1,.1,150),_c=new z(0,17,17/Math.tan(fi.degToRad(47))),gr=new z,_h=new z;tn.position.copy(_c);tn.lookAt(gr);const Ln=new b0,rt=new J0(v0.remnant,Nn,Ot.position,D0(window.location.search)),Fo=new kv(rt.enemies),ko=new Ov(rt.shards);En.add(Fo.group,ko.group);const xc=document.querySelector("#status"),Gv=document.querySelector("#zone");Nn.on("pause",i=>{xc.textContent=rt.paused?"Paused / Esc or Start to resume":"Explore the three regions"});rt.start();const Hv=new Set(En.children),yc=Ev({renderer:Ur,scene:En,camera:tn,events:Nn,player:Ot,session:rt,world:vc,replaces:[Fo.group,ko.group]});rt.setGroveObstacles(oi);const Wv=En.children.filter(i=>!Hv.has(i)).filter(i=>i instanceof It).slice(0,2),Vv=N0(En,rt,Wv,Math.atan2(tn.position.y,tn.position.z),Ot.position),Xv=Fv({events:Nn,input:Ln,session:rt,player:Ot,renderer:Ur});Bv(En,rt,Nn);const Mc=()=>{Rv(Ur,window.innerWidth,window.innerHeight),yc.resize(),tn.aspect=window.innerWidth/window.innerHeight,tn.updateProjectionMatrix()};Mc();window.addEventListener("resize",Mc);M0({frame(){Ln.poll(),rt.frame(Ln),Ln.pressed("pause")&&Nn.emit("pause",{paused:!rt.paused}),!rt.paused&&Ln.pressed("pulse")&&Nn.emit("pulse",{x:Ot.position.x,z:Ot.position.z}),Ln.pressed("dash")&&Ot.motion.dash(Ln.actions.move,rt.paused)&&Nn.emit("dash",{x:Ot.position.x,z:Ot.position.z}),!rt.paused&&Ln.pressed("interact")&&Nn.emit("interact",{x:Ot.position.x,z:Ot.position.z})},update(i){rt.update(i),Ot.update(i,Ln.actions.move,rt.paused,e=>rt.collide(e)),rt.collide(Ot.position)},render(i,e){gr.lerp(Ot.position,1-Math.exp(-6*e)),_h.copy(gr).add(_c),tn.position.copy(_h),tn.lookAt(gr),Ot.render(i,tn),Fo.render(tn),ko.render(tn),Gv.textContent=jn[rt.levels.current.id].name,Vv.frame();const t=rt.land.share();xc.textContent=`${rt.faction??"Choose: 1 Bloom / 2 Blight"} | ${rt.run.phase}${rt.run.result?" / "+rt.run.result:""} | ${rt.client.mode} | HP ${Math.round(rt.run.hp*100)}% | Shards ${rt.run.shards}/3 | Bloom ${Math.round(t.bloom*100)}% / Blight ${Math.round(t.blight*100)}%`,yc.render(e),Xv.frame(e);const n=document.querySelector("[data-zone]");n&&(n.textContent=jn[rt.levels.current.id].name)}});
