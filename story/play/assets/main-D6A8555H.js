const At="srgb",Fs="srgb-linear",ks="linear",et="srgb";const ua="300 es";function wl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tl(){const i=Ki("canvas");return i.style.display="block",i}const fa={};function Bs(...i){const e="THREE."+i.shift();console.log(e,...i)}function Po(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=Po(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Po(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bi(...i){const e=i.join(" ");e in fa||(fa[e]=!0,Le(...i))}function El(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Al={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pa=1234567;const Yi=Math.PI/180,$i=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function zr(i,e){return(i%e+e)%e}function Rl(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Cl(i,e,t){return i!==e?(t-i)/(e-i):0}function qi(i,e,t){return(1-t)*i+t*e}function Pl(i,e,t,n){return qi(i,e,1-Math.exp(-t*n))}function Ll(i,e=1){return e-Math.abs(zr(i,e*2)-e)}function Il(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ul(i,e){return i+Math.random()*(e-i)}function Fl(i){return i*(.5-Math.random())}function kl(i){i!==void 0&&(pa=i);let e=pa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bl(i){return i*Yi}function Ol(i){return i*$i}function zl(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Gl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wl(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),c=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*c,o*h);break;case"YZY":i.set(l*c,o*d,l*u,o*h);break;case"ZXZ":i.set(l*u,l*c,o*d,o*h);break;case"XZX":i.set(o*d,l*_,l*p,o*h);break;case"YXY":i.set(l*p,o*d,l*_,o*h);break;case"ZYZ":i.set(l*_,l*p,o*d,o*h);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Yn={DEG2RAD:Yi,RAD2DEG:$i,generateUUID:bn,clamp:Ve,euclideanModulo:zr,mapLinear:Rl,inverseLerp:Cl,lerp:qi,damp:Pl,pingpong:Ll,smoothstep:Il,smootherstep:Dl,randInt:Nl,randFloat:Ul,randFloatSpread:Fl,seededRandom:kl,degToRad:Bl,radToDeg:Ol,isPowerOfTwo:zl,ceilPowerOfTwo:Gl,floorPowerOfTwo:Hl,setQuaternionFromProperEuler:Wl,normalize:tt,denormalize:nn},Jr=class Jr{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jr.prototype.isVector2=!0;let De=Jr;class En{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],h=n[s+1],d=n[s+2],u=n[s+3],c=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(u!==M||l!==c||h!==p||d!==_){let m=l*c+h*p+d*_+u*M;m<0&&(c=-c,p=-p,_=-_,M=-M,m=-m);let f=1-o;if(m<.9995){const T=Math.acos(m),C=Math.sin(T);f=Math.sin(f*T)/C,o=Math.sin(o*T)/C,l=l*f+c*o,h=h*f+p*o,d=d*f+_*o,u=u*f+M*o}else{l=l*f+c*o,h=h*f+p*o,d=d*f+_*o,u=u*f+M*o;const T=1/Math.sqrt(l*l+h*h+d*d+u*u);l*=T,h*=T,d*=T,u*=T}}e[t]=l,e[t+1]=h,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a],c=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+d*u+l*p-h*c,e[t+1]=l*_+d*c+h*u-o*p,e[t+2]=h*_+d*p+o*c-l*u,e[t+3]=d*_-o*u-l*c-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(s/2),u=o(r/2),c=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=c*d*u+h*p*_,this._y=h*p*u-c*d*_,this._z=h*d*_+c*p*u,this._w=h*d*u-c*p*_;break;case"YXZ":this._x=c*d*u+h*p*_,this._y=h*p*u-c*d*_,this._z=h*d*_-c*p*u,this._w=h*d*u+c*p*_;break;case"ZXY":this._x=c*d*u-h*p*_,this._y=h*p*u+c*d*_,this._z=h*d*_+c*p*u,this._w=h*d*u-c*p*_;break;case"ZYX":this._x=c*d*u-h*p*_,this._y=h*p*u+c*d*_,this._z=h*d*_-c*p*u,this._w=h*d*u+c*p*_;break;case"YZX":this._x=c*d*u+h*p*_,this._y=h*p*u+c*d*_,this._z=h*d*_-c*p*u,this._w=h*d*u-c*p*_;break;case"XZY":this._x=c*d*u-h*p*_,this._y=h*p*u-c*d*_,this._z=h*d*_+c*p*u,this._w=h*d*u+c*p*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],d=t[6],u=t[10],c=n+o+u;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-h)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+h)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-h)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+h)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,d=t._w;return this._x=n*d+a*o+s*h-r*l,this._y=s*d+a*l+r*o-n*h,this._z=r*d+a*h+n*l-s*o,this._w=a*d-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const h=Math.acos(o),d=Math.sin(h);l=Math.sin(l*h)/d,t=Math.sin(t*h)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qr=class Qr{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*h+a*u-o*d,this.y=n+l*d+o*h-r*u,this.z=s+l*u+r*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Js.copy(this).projectOnVector(e),this.sub(Js)}reflect(e){return this.sub(Js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qr.prototype.isVector3=!0;let z=Qr;const Js=new z,ma=new En,jr=class jr{constructor(e,t,n,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,h)}set(e,t,n,s,r,a,o,l,h){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],u=n[7],c=n[2],p=n[5],_=n[8],M=s[0],m=s[3],f=s[6],T=s[1],C=s[4],y=s[7],b=s[2],S=s[5],P=s[8];return r[0]=a*M+o*T+l*b,r[3]=a*m+o*C+l*S,r[6]=a*f+o*y+l*P,r[1]=h*M+d*T+u*b,r[4]=h*m+d*C+u*S,r[7]=h*f+d*y+u*P,r[2]=c*M+p*T+_*b,r[5]=c*m+p*C+_*S,r[8]=c*f+p*y+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8];return t*a*d-t*o*h-n*r*d+n*o*l+s*r*h-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],u=d*a-o*h,c=o*l-d*r,p=h*r-a*l,_=t*u+n*c+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=u*M,e[1]=(s*h-d*n)*M,e[2]=(o*n-s*a)*M,e[3]=c*M,e[4]=(d*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-h*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qs.makeScale(e,t)),this}rotate(e){return bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qs.makeRotation(-e)),this}translate(e,t){return bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jr.prototype.isMatrix3=!0;let Ue=jr;const Qs=new Ue,ga=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_a=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vl(){const i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:e,whitePoint:n,transfer:ks,toXYZ:ga,fromXYZ:_a,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:et,toXYZ:ga,fromXYZ:_a,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}const Ye=Vl();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qn;class Xl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qn===void 0&&(Qn=Ki("canvas")),Qn.width=e.width,Qn.height=e.height;const s=Qn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Qn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yl=0;class Gr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(js(s[a].image)):r.push(js(s[a]))}else r=js(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let ql=0;const er=new z;class Pt extends qn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=1001,s=1001,r=1006,a=1008,o=1023,l=1009,h=Pt.DEFAULT_ANISOTROPY,d=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=bn(),this.name="",this.source=new Gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(er).x}get height(){return this.source.getSize(er).y}get depth(){return this.source.getSize(er).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=300;Pt.DEFAULT_ANISOTROPY=1;const ea=class ea{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,h=l[0],d=l[4],u=l[8],c=l[1],p=l[5],_=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(d-c)<.01&&Math.abs(u-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+c)<.1&&Math.abs(u+M)<.1&&Math.abs(_+m)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,y=(p+1)/2,b=(f+1)/2,S=(d+c)/4,P=(u+M)/4,v=(_+m)/4;return C>y&&C>b?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=S/n,r=P/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=P/r,s=v/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(u-M)*(u-M)+(c-d)*(c-d));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-M)/T,this.z=(c-d)/T,this.w=Math.acos((h+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ea.prototype.isVector4=!0;let pt=ea;class Kl extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Pt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Kl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lo extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $l extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Gs=class Gs{constructor(e,t,n,s,r,a,o,l,h,d,u,c,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,h,d,u,c,p,_,M,m)}set(e,t,n,s,r,a,o,l,h,d,u,c,p,_,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=h,f[6]=d,f[10]=u,f[14]=c,f[3]=p,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/jn.setFromMatrixColumn(e,0).length(),r=1/jn.setFromMatrixColumn(e,1).length(),a=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const c=a*d,p=a*u,_=o*d,M=o*u;t[0]=l*d,t[4]=-l*u,t[8]=h,t[1]=p+_*h,t[5]=c-M*h,t[9]=-o*l,t[2]=M-c*h,t[6]=_+p*h,t[10]=a*l}else if(e.order==="YXZ"){const c=l*d,p=l*u,_=h*d,M=h*u;t[0]=c+M*o,t[4]=_*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-_,t[6]=M+c*o,t[10]=a*l}else if(e.order==="ZXY"){const c=l*d,p=l*u,_=h*d,M=h*u;t[0]=c-M*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*d,t[9]=M-c*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const c=a*d,p=a*u,_=o*d,M=o*u;t[0]=l*d,t[4]=_*h-p,t[8]=c*h+M,t[1]=l*u,t[5]=M*h+c,t[9]=p*h-_,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const c=a*l,p=a*h,_=o*l,M=o*h;t[0]=l*d,t[4]=M-c*u,t[8]=_*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-h*d,t[6]=p*u+_,t[10]=c-M*u}else if(e.order==="XZY"){const c=a*l,p=a*h,_=o*l,M=o*h;t[0]=l*d,t[4]=-u,t[8]=h*d,t[1]=c*u+M,t[5]=a*d,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*d,t[10]=M*u+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zl,e,Jl)}lookAt(e,t,n){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Pn.crossVectors(n,Gt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Pn.crossVectors(n,Gt)),Pn.normalize(),ts.crossVectors(Gt,Pn),s[0]=Pn.x,s[4]=ts.x,s[8]=Gt.x,s[1]=Pn.y,s[5]=ts.y,s[9]=Gt.y,s[2]=Pn.z,s[6]=ts.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],u=n[5],c=n[9],p=n[13],_=n[2],M=n[6],m=n[10],f=n[14],T=n[3],C=n[7],y=n[11],b=n[15],S=s[0],P=s[4],v=s[8],E=s[12],R=s[1],L=s[5],D=s[9],O=s[13],I=s[2],G=s[6],A=s[10],B=s[14],Y=s[3],X=s[7],$=s[11],ee=s[15];return r[0]=a*S+o*R+l*I+h*Y,r[4]=a*P+o*L+l*G+h*X,r[8]=a*v+o*D+l*A+h*$,r[12]=a*E+o*O+l*B+h*ee,r[1]=d*S+u*R+c*I+p*Y,r[5]=d*P+u*L+c*G+p*X,r[9]=d*v+u*D+c*A+p*$,r[13]=d*E+u*O+c*B+p*ee,r[2]=_*S+M*R+m*I+f*Y,r[6]=_*P+M*L+m*G+f*X,r[10]=_*v+M*D+m*A+f*$,r[14]=_*E+M*O+m*B+f*ee,r[3]=T*S+C*R+y*I+b*Y,r[7]=T*P+C*L+y*G+b*X,r[11]=T*v+C*D+y*A+b*$,r[15]=T*E+C*O+y*B+b*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],d=e[2],u=e[6],c=e[10],p=e[14],_=e[3],M=e[7],m=e[11],f=e[15],T=l*p-h*c,C=o*p-h*u,y=o*c-l*u,b=a*p-h*d,S=a*c-l*d,P=a*u-o*d;return t*(M*T-m*C+f*y)-n*(_*T-m*b+f*S)+s*(_*C-M*b+f*P)-r*(_*y-M*S+m*P)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],h=e[6],d=e[10];return t*(a*d-o*h)-n*(r*d-o*l)+s*(r*h-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],u=e[9],c=e[10],p=e[11],_=e[12],M=e[13],m=e[14],f=e[15],T=t*o-n*a,C=t*l-s*a,y=t*h-r*a,b=n*l-s*o,S=n*h-r*o,P=s*h-r*l,v=d*M-u*_,E=d*m-c*_,R=d*f-p*_,L=u*m-c*M,D=u*f-p*M,O=c*f-p*m,I=T*O-C*D+y*L+b*R-S*E+P*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return e[0]=(o*O-l*D+h*L)*G,e[1]=(s*D-n*O-r*L)*G,e[2]=(M*P-m*S+f*b)*G,e[3]=(c*S-u*P-p*b)*G,e[4]=(l*R-a*O-h*E)*G,e[5]=(t*O-s*R+r*E)*G,e[6]=(m*y-_*P-f*C)*G,e[7]=(d*P-c*y+p*C)*G,e[8]=(a*D-o*R+h*v)*G,e[9]=(n*R-t*D-r*v)*G,e[10]=(_*S-M*y+f*T)*G,e[11]=(u*y-d*S-p*T)*G,e[12]=(o*E-a*L-l*v)*G,e[13]=(t*L-n*E+s*v)*G,e[14]=(M*C-_*b-m*T)*G,e[15]=(d*b-u*C+c*T)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,d*o+n,d*l-s*a,0,h*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,d=a+a,u=o+o,c=r*h,p=r*d,_=r*u,M=a*d,m=a*u,f=o*u,T=l*h,C=l*d,y=l*u,b=n.x,S=n.y,P=n.z;return s[0]=(1-(M+f))*b,s[1]=(p+y)*b,s[2]=(_-C)*b,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(c+f))*S,s[6]=(m+T)*S,s[7]=0,s[8]=(_+C)*P,s[9]=(m-T)*P,s[10]=(1-(c+M))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=jn.set(s[0],s[1],s[2]).length();const o=jn.set(s[4],s[5],s[6]).length(),l=jn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),jt.copy(this);const h=1/a,d=1/o,u=1/l;return jt.elements[0]*=h,jt.elements[1]*=h,jt.elements[2]*=h,jt.elements[4]*=d,jt.elements[5]*=d,jt.elements[6]*=d,jt.elements[8]*=u,jt.elements[9]*=u,jt.elements[10]*=u,t.setFromRotationMatrix(jt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=2e3,l=!1){const h=this.elements,d=2*r/(t-e),u=2*r/(n-s),c=(t+e)/(t-e),p=(n+s)/(n-s);let _,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===2e3)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===2001)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=u,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=2e3,l=!1){const h=this.elements,d=2/(t-e),u=2/(n-s),c=-(t+e)/(t-e),p=-(n+s)/(n-s);let _,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===2e3)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===2001)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=u,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=_,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Gs.prototype.isMatrix4=!0;let je=Gs;const jn=new z,jt=new je,Zl=new z(0,0,0),Jl=new z(1,1,1),Pn=new z,ts=new z,Gt=new z,va=new je,xa=new En;class rn{constructor(e=0,t=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],d=s[9],u=s[2],c=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xa.setFromEuler(this),this.setFromQuaternion(xa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Io{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ql=0;const ya=new z,ei=new En,mn=new je,ns=new z,Ci=new z,jl=new z,eh=new En,Ma=new z(1,0,0),Sa=new z(0,1,0),ba=new z(0,0,1),wa={type:"added"},th={type:"removed"},ti={type:"childadded",child:null},tr={type:"childremoved",child:null};class Mt extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new z,t=new rn,n=new En,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ue}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(Ma,e)}rotateY(e){return this.rotateOnAxis(Sa,e)}rotateZ(e){return this.rotateOnAxis(ba,e)}translateOnAxis(e,t){return ya.copy(e).applyQuaternion(this.quaternion),this.position.add(ya.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ma,e)}translateY(e){return this.translateOnAxis(Sa,e)}translateZ(e){return this.translateOnAxis(ba,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ci,ns,this.up):mn.lookAt(ns,Ci,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),ei.setFromRotationMatrix(mn),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wa),ti.child=e,this.dispatchEvent(ti),ti.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(th),tr.child=e,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wa),ti.child=e,this.dispatchEvent(ti),ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,jl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,eh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),d=a(e.images),u=a(e.shapes),c=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),c.length>0&&(n.skeletons=c),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Mt.DEFAULT_UP=new z(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nh={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),f=this._getHandJoint(h,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],c=d.position.distanceTo(u.position),p=.02,_=.005;h.inputState.pinching&&c>p+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&c<=p-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Do={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},is={h:0,s:0,l:0};function ir(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=zr(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ir(a,r,e+1/3),this.g=ir(a,r,e),this.b=ir(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Do[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ye.workingToColorSpace(Nt.copy(this),e),Math.round(Ve(Nt.r*255,0,255))*65536+Math.round(Ve(Nt.g*255,0,255))*256+Math.round(Ve(Nt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=At){Ye.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,s=Nt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(is);const n=qi(Ln.h,is.h,t),s=qi(Ln.s,is.s,t),r=qi(Ln.l,is.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ne;Ne.NAMES=Do;class Hr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Hr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class No extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const en=new z,gn=new z,sr=new z,_n=new z,ni=new z,ii=new z,Ta=new z,rr=new z,ar=new z,or=new z,lr=new pt,hr=new pt,cr=new pt;class $t{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),gn.subVectors(n,t),sr.subVectors(e,t);const a=en.dot(en),o=en.dot(gn),l=en.dot(sr),h=gn.dot(gn),d=gn.dot(sr),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const c=1/u,p=(h*l-o*d)*c,_=(a*d-o*l)*c;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return lr.setScalar(0),hr.setScalar(0),cr.setScalar(0),lr.fromBufferAttribute(e,t),hr.fromBufferAttribute(e,n),cr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lr,r.x),a.addScaledVector(hr,r.y),a.addScaledVector(cr,r.z),a}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),gn.subVectors(e,t),en.cross(gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),en.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ni.subVectors(s,n),ii.subVectors(r,n),rr.subVectors(e,n);const l=ni.dot(rr),h=ii.dot(rr);if(l<=0&&h<=0)return t.copy(n);ar.subVectors(e,s);const d=ni.dot(ar),u=ii.dot(ar);if(d>=0&&u<=d)return t.copy(s);const c=l*u-d*h;if(c<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(ni,a);or.subVectors(e,r);const p=ni.dot(or),_=ii.dot(or);if(_>=0&&p<=_)return t.copy(r);const M=p*h-l*_;if(M<=0&&h>=0&&_<=0)return o=h/(h-_),t.copy(n).addScaledVector(ii,o);const m=d*_-p*u;if(m<=0&&u-d>=0&&p-_>=0)return Ta.subVectors(r,s),o=(u-d)/(u-d+(p-_)),t.copy(s).addScaledVector(Ta,o);const f=1/(m+M+c);return a=M*f,o=c*f,t.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Kn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),rs.subVectors(this.max,Pi),si.subVectors(e.a,Pi),ri.subVectors(e.b,Pi),ai.subVectors(e.c,Pi),In.subVectors(ri,si),Dn.subVectors(ai,ri),On.subVectors(si,ai);let t=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-On.z,On.y,In.z,0,-In.x,Dn.z,0,-Dn.x,On.z,0,-On.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-On.y,On.x,0];return!dr(t,si,ri,ai,rs)||(t=[1,0,0,0,1,0,0,0,1],!dr(t,si,ri,ai,rs))?!1:(as.crossVectors(In,Dn),t=[as.x,as.y,as.z],dr(t,si,ri,ai,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vn=[new z,new z,new z,new z,new z,new z,new z,new z],tn=new z,ss=new Kn,si=new z,ri=new z,ai=new z,In=new z,Dn=new z,On=new z,Pi=new z,rs=new z,as=new z,zn=new z;function dr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zn.fromArray(i,r);const o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=e.dot(zn),h=t.dot(zn),d=n.dot(zn);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const yt=new z,os=new De;let ih=0;class Ct extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ih++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Uo extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fo extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}const sh=new Kn,Li=new z,ur=new z;class Ei{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(ur)),this.expandByPoint(Li.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rh=0;const qt=new je,fr=new Mt,oi=new z,Ht=new Kn,Ii=new Kn,wt=new z;class Ft extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wl(e)?Fo:Uo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Ht.min,Ii.min),Ht.expandByPoint(wt),wt.addVectors(Ht.max,Ii.max),Ht.expandByPoint(wt)):(Ht.expandByPoint(Ii.min),Ht.expandByPoint(Ii.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)wt.fromBufferAttribute(o,h),l&&(oi.fromBufferAttribute(e,h),wt.add(oi)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new z,l[v]=new z;const h=new z,d=new z,u=new z,c=new De,p=new De,_=new De,M=new z,m=new z;function f(v,E,R){h.fromBufferAttribute(n,v),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),c.fromBufferAttribute(r,v),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,R),d.sub(h),u.sub(h),p.sub(c),_.sub(c);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(L),o[v].add(M),o[E].add(M),o[R].add(M),l[v].add(m),l[E].add(m),l[R].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let v=0,E=T.length;v<E;++v){const R=T[v],L=R.start,D=R.count;for(let O=L,I=L+D;O<I;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const C=new z,y=new z,b=new z,S=new z;function P(v){b.fromBufferAttribute(s,v),S.copy(b);const E=o[v];C.copy(E),C.sub(b.multiplyScalar(b.dot(E))).normalize(),y.crossVectors(S,E);const L=y.dot(l[v])<0?-1:1;a.setXYZW(v,C.x,C.y,C.z,L)}for(let v=0,E=T.length;v<E;++v){const R=T[v],L=R.start,D=R.count;for(let O=L,I=L+D;O<I;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,p=n.count;c<p;c++)n.setXYZ(c,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,h=new z,d=new z,u=new z;if(e)for(let c=0,p=e.count;c<p;c+=3){const _=e.getX(c+0),M=e.getX(c+1),m=e.getX(c+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,m),o.add(d),l.add(d),h.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,p=t.count;c<p;c+=3)s.fromBufferAttribute(t,c+0),r.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const h=o.array,d=o.itemSize,u=o.normalized,c=new h.constructor(l.length*d);let p=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let f=0;f<d;f++)c[_++]=h[p++]}return new Ct(c,d,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=e(l,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let d=0,u=h.length;d<u;d++){const c=h[d],p=e(c,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let u=0,c=h.length;u<c;u++){const p=h[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(t))}const r=e.morphAttributes;for(const h in r){const d=[],u=r[h];for(let c=0,p=u.length;c<p;c++)d.push(u[c].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ah{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Ot=new z;class Os{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Bs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Os(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pr=new z,oh=new z,lh=new Ue;class Fn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=pr.subVectors(n,t).cross(oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(pr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lh.getNormalMatrix(e),s=this.coplanarPoint(pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let hh=0;class $n extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Fn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new De().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ko extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let li;const Di=new z,hi=new z,ci=new z,di=new De,Ni=new De,Bo=new je,ls=new z,Ui=new z,hs=new z,Ea=new De,mr=new De,Aa=new De;class Ra extends Mt{constructor(e=new ko){if(super(),this.isSprite=!0,this.type="Sprite",li===void 0){li=new Ft;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ah(t,5);li.setIndex([0,1,2,0,2,3]),li.setAttribute("position",new Os(n,3,0,!1)),li.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=li,this.material=e,this.center=new De(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hi.setFromMatrixScale(this.matrixWorld),Bo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ci.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hi.multiplyScalar(-ci.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;cs(ls.set(-.5,-.5,0),ci,a,hi,s,r),cs(Ui.set(.5,-.5,0),ci,a,hi,s,r),cs(hs.set(.5,.5,0),ci,a,hi,s,r),Ea.set(0,0),mr.set(1,0),Aa.set(1,1);let o=e.ray.intersectTriangle(ls,Ui,hs,!1,Di);if(o===null&&(cs(Ui.set(-.5,.5,0),ci,a,hi,s,r),mr.set(0,1),o=e.ray.intersectTriangle(ls,hs,Ui,!1,Di),o===null))return;const l=e.ray.origin.distanceTo(Di);l<e.near||l>e.far||t.push({distance:l,point:Di.clone(),uv:$t.getInterpolation(Di,ls,Ui,hs,Ea,mr,Aa,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function cs(i,e,t,n,s,r){di.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ni.x=r*di.x-s*di.y,Ni.y=s*di.x+r*di.y):Ni.copy(di),i.copy(e),i.x+=Ni.x,i.y+=Ni.y,i.applyMatrix4(Bo)}const xn=new z,gr=new z,ds=new z,us=new z;class Oo{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gr.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),us.copy(this.origin).sub(gr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ds),o=us.dot(this.direction),l=-us.dot(ds),h=us.lengthSq(),d=Math.abs(1-a*a);let u,c,p,_;if(d>0)if(u=a*l-o,c=a*o-l,_=r*d,u>=0)if(c>=-_)if(c<=_){const M=1/d;u*=M,c*=M,p=u*(u+a*c+2*o)+c*(a*u+c+2*l)+h}else c=r,u=Math.max(0,-(a*c+o)),p=-u*u+c*(c+2*l)+h;else c=-r,u=Math.max(0,-(a*c+o)),p=-u*u+c*(c+2*l)+h;else c<=-_?(u=Math.max(0,-(-a*r+o)),c=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+c*(c+2*l)+h):c<=_?(u=0,c=Math.min(Math.max(-r,-l),r),p=c*(c+2*l)+h):(u=Math.max(0,-(a*r+o)),c=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+c*(c+2*l)+h);else c=a>0?-r:r,u=Math.max(0,-(a*c+o)),p=-u*u+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gr).addScaledVector(ds,c),p}intersectSphere(e,t){if(e.radius<0)return null;xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,c=this.origin;return h>=0?(n=(e.min.x-c.x)*h,s=(e.max.x-c.x)*h):(n=(e.max.x-c.x)*h,s=(e.min.x-c.x)*h),d>=0?(r=(e.min.y-c.y)*d,a=(e.max.y-c.y)*d):(r=(e.max.y-c.y)*d,a=(e.min.y-c.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-c.z)*u,l=(e.max.z-c.z)*u):(o=(e.max.z-c.z)*u,l=(e.min.z-c.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,h=o.y,d=o.z,u=e.x-a.x,c=e.y-a.y,p=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,f=n.x-a.x,T=n.y-a.y,C=n.z-a.z,y=Math.abs(l),b=Math.abs(h),S=Math.abs(d);let P,v,E,R,L,D,O,I,G,A,B,Y;if(y>=b&&y>=S?(E=l,D=u,G=_,Y=f,l>=0?(P=h,v=d,R=c,L=p,O=M,I=m,A=T,B=C):(P=d,v=h,R=p,L=c,O=m,I=M,A=C,B=T)):b>=S?(E=h,D=c,G=M,Y=T,h>=0?(P=d,v=l,R=p,L=u,O=m,I=_,A=C,B=f):(P=l,v=d,R=u,L=p,O=_,I=m,A=f,B=C)):(E=d,D=p,G=m,Y=C,d>=0?(P=l,v=h,R=u,L=c,O=_,I=M,A=f,B=T):(P=h,v=l,R=c,L=u,O=M,I=_,A=T,B=f)),E===0)return null;const X=P/E,$=v/E,ee=1/E,Me=R-X*D,me=L-$*D,qe=O-X*G,Oe=I-$*G,Ke=A-X*Y,Z=B-$*Y,te=Ke*Oe-Z*qe,xe=Me*Z-me*Ke,Ie=qe*me-Oe*Me;if(s){if(te<0||xe<0||Ie<0)return null}else if((te<0||xe<0||Ie<0)&&(te>0||xe>0||Ie>0))return null;const ge=te+xe+Ie;if(ge===0)return null;const Be=ee*(te*D+xe*G+Ie*Y);return(ge>0?Be<0:Be>0)?null:this.at(Be/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tn extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ca=new je,Gn=new Oo,fs=new Ei,Pa=new z,ps=new z,ms=new z,gs=new z,_r=new z,_s=new z,La=new z,vs=new z;class lt extends Mt{constructor(e=new Ft,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){_s.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=o[l],u=r[l];d!==0&&(_r.fromBufferAttribute(u,e),a?_s.addScaledVector(_r,d):_s.addScaledVector(_r.sub(t),d))}t.add(_s)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),Gn.copy(e.ray).recast(e.near),!(fs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(fs,Pa)===null||Gn.origin.distanceToSquared(Pa)>(e.far-e.near)**2))&&(Ca.copy(r).invert(),Gn.copy(e.ray).applyMatrix4(Ca),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,c=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=c.length;_<M;_++){const m=c[_],f=a[m.materialIndex],T=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,b=C;y<b;y+=3){const S=o.getX(y),P=o.getX(y+1),v=o.getX(y+2);s=xs(this,f,e,n,h,d,u,S,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){const T=o.getX(m),C=o.getX(m+1),y=o.getX(m+2);s=xs(this,a,e,n,h,d,u,T,C,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=c.length;_<M;_++){const m=c[_],f=a[m.materialIndex],T=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,b=C;y<b;y+=3){const S=y,P=y+1,v=y+2;s=xs(this,f,e,n,h,d,u,S,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){const T=m,C=m+1,y=m+2;s=xs(this,a,e,n,h,d,u,T,C,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ch(i,e,t,n,s,r,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===0,o),l===null)return null;vs.copy(o),vs.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(vs);return h<t.near||h>t.far?null:{distance:h,point:vs.clone(),object:i}}function xs(i,e,t,n,s,r,a,o,l,h){i.getVertexPosition(o,ps),i.getVertexPosition(l,ms),i.getVertexPosition(h,gs);const d=ch(i,e,t,n,ps,ms,gs,La);if(d){const u=new z;$t.getBarycoord(La,ps,ms,gs,u),s&&(d.uv=$t.getInterpolatedAttribute(s,o,l,h,u,new De)),r&&(d.uv1=$t.getInterpolatedAttribute(r,o,l,h,u,new De)),a&&(d.normal=$t.getInterpolatedAttribute(a,o,l,h,u,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new z,materialIndex:0};$t.getNormal(ps,ms,gs,c.normal),d.face=c,d.barycoord=u}return d}class Wr extends Pt{constructor(e=null,t=1,n=1,s,r,a,o,l,h=1003,d=1003,u,c){super(null,a,o,l,h,d,s,r,u,c),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ui=new je,Da=new je,ys=[],Na=new Kn,dh=new je,Fi=new lt,ki=new Ei;class Zi extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ia(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ui),Na.copy(e.boundingBox).applyMatrix4(ui),this.boundingBox.union(Na)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ui),ki.copy(e.boundingSphere).applyMatrix4(ui),this.boundingSphere.union(ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ki.copy(this.boundingSphere),ki.applyMatrix4(n),e.ray.intersectsSphere(ki)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ui),Da.multiplyMatrices(n,ui),Fi.matrixWorld=Da,Fi.raycast(e,ys);for(let a=0,o=ys.length;a<o;a++){const l=ys[a];l.instanceId=r,l.object=this,t.push(l)}ys.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hn=new Ei,uh=new De(.5,.5),Ms=new z;class Vr{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],h=r[3],d=r[4],u=r[5],c=r[6],p=r[7],_=r[8],M=r[9],m=r[10],f=r[11],T=r[12],C=r[13],y=r[14],b=r[15];if(s[0].setComponents(h-a,p-d,f-_,b-T).normalize(),s[1].setComponents(h+a,p+d,f+_,b+T).normalize(),s[2].setComponents(h+o,p+u,f+M,b+C).normalize(),s[3].setComponents(h-o,p-u,f-M,b-C).normalize(),n)s[4].setComponents(l,c,m,y).normalize(),s[5].setComponents(h-l,p-c,f-m,b-y).normalize();else if(s[4].setComponents(h-l,p-c,f-m,b-y).normalize(),t===2e3)s[5].setComponents(h+l,p+c,f+m,b+y).normalize();else if(t===2001)s[5].setComponents(l,c,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=uh.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ms.x=s.normal.x>0?e.max.x:e.min.x,Ms.y=s.normal.y>0?e.max.y:e.min.y,Ms.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fh extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ua=new je,Dr=new Oo,Ss=new Ei,bs=new z;class zo extends Mt{constructor(e=new Ft,t=new fh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),Ss.radius+=r,e.ray.intersectsSphere(Ss)===!1)return;Ua.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Ua);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,u=n.attributes.position;if(h!==null){const c=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=c,M=p;_<M;_++){const m=h.getX(_);bs.fromBufferAttribute(u,m),Fa(bs,m,l,s,e,t,this)}}else{const c=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=c,M=p;_<M;_++)bs.fromBufferAttribute(u,_),Fa(bs,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fa(i,e,t,n,s,r,a){const o=Dr.distanceSqToPoint(i);if(o<t){const l=new z;Dr.closestPointToPoint(i,l),l.applyMatrix4(n);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Go extends Pt{constructor(e=[],t=301,n,s,r,a,o,l,h,d){super(e,t,n,s,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ai extends Pt{constructor(e,t,n,s,r,a,o,l,h){super(e,t,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ji extends Pt{constructor(e,t,n=1014,s,r,a,o=1003,l=1003,h,d=1026,u=1){if(d!==1026&&d!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:t,depth:u};super(c,s,r,a,o,l,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ph extends Ji{constructor(e,t=1014,n=301,s,r,a=1003,o=1003,l,h=1026){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ho extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qi extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],d=[],u=[];let c=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(u,2));function _(M,m,f,T,C,y,b,S,P,v,E){const R=y/P,L=b/v,D=y/2,O=b/2,I=S/2,G=P+1,A=v+1;let B=0,Y=0;const X=new z;for(let $=0;$<A;$++){const ee=$*L-O;for(let Me=0;Me<G;Me++){const me=Me*R-D;X[M]=me*T,X[m]=ee*C,X[f]=I,h.push(X.x,X.y,X.z),X[M]=0,X[m]=0,X[f]=S>0?1:-1,d.push(X.x,X.y,X.z),u.push(Me/P),u.push(1-$/v),B+=1}}for(let $=0;$<v;$++)for(let ee=0;ee<P;ee++){const Me=c+ee+G*$,me=c+ee+G*($+1),qe=c+(ee+1)+G*($+1),Oe=c+(ee+1)+G*$;l.push(Me,me,Oe),l.push(me,qe,Oe),Y+=6}o.addGroup(p,Y,E),p+=Y,c+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Hs extends Ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],h=new z,d=new De;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,c=3;u<=t;u++,c+=3){const p=n+u/t*s;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),d.x=(a[c]/e+1)/2,d.y=(a[c+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(o,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xr extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],c=[],p=[];let _=0;const M=[],m=n/2;let f=0;T(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(p,2));function T(){const y=new z,b=new z;let S=0;const P=(t-e)/n;for(let v=0;v<=r;v++){const E=[],R=v/r,L=R*(t-e)+e;for(let D=0;D<=s;D++){const O=D/s,I=O*l+o,G=Math.sin(I),A=Math.cos(I);b.x=L*G,b.y=-R*n+m,b.z=L*A,u.push(b.x,b.y,b.z),y.set(G,P,A).normalize(),c.push(y.x,y.y,y.z),p.push(O,1-R),E.push(_++)}M.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){const R=M[E][v],L=M[E+1][v],D=M[E+1][v+1],O=M[E][v+1];(e>0||E!==0)&&(d.push(R,L,O),S+=3),(t>0||E!==r-1)&&(d.push(L,D,O),S+=3)}h.addGroup(f,S,0),f+=S}function C(y){const b=_,S=new De,P=new z;let v=0;const E=y===!0?e:t,R=y===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*R,0),c.push(0,R,0),p.push(.5,.5),_++;const L=_;for(let D=0;D<=s;D++){const I=D/s*l+o,G=Math.cos(I),A=Math.sin(I);P.x=E*A,P.y=m*R,P.z=E*G,u.push(P.x,P.y,P.z),c.push(0,R,0),S.x=G*.5+.5,S.y=A*.5*R+.5,p.push(S.x,S.y),_++}for(let D=0;D<s;D++){const O=b+D,I=L+D;y===!0?d.push(I,I+1,O):d.push(I+1,I,O),v+=3}h.addGroup(f,v,y===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Et extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),h=o+1,d=l+1,u=e/o,c=t/l,p=[],_=[],M=[],m=[];for(let f=0;f<d;f++){const T=f*c-a;for(let C=0;C<h;C++){const y=C*u-r;_.push(y,-T,0),M.push(0,0,1),m.push(C/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const C=T+h*f,y=T+h*(f+1),b=T+1+h*(f+1),S=T+1+h*f;p.push(C,y,S),p.push(y,b,S)}this.setIndex(p),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(M,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yr extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],h=[],d=[];let u=e;const c=(t-e)/s,p=new z,_=new De;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,d.push(_.x,_.y)}u+=c}for(let M=0;M<s;M++){const m=M*(n+1);for(let f=0;f<n;f++){const T=f+m,C=T,y=T+n+1,b=T+n+2,S=T+1;o.push(C,y,S),o.push(y,b,S)}}this.setIndex(o),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(ka(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ka(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const s in n)e[s]=n[s]}return e}function ka(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const gh={clone:Ti,merge:zt};var _h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_h,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=mh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new De().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xh extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sn extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yh extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mh extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ba(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ba(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ba(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Sh{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return h.push(d,u),this},this.removeHandler=function(d){const u=h.indexOf(d);return u!==-1&&h.splice(u,2),this},this.getHandler=function(d){for(let u=0,c=h.length;u<c;u+=2){const p=h[u],_=h[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bh=new Sh;class qr{constructor(e){this.manager=e!==void 0?e:bh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi=new WeakMap;class wh extends qr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=fi.get(a);u===void 0&&(u=[],fi.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=Ki("img");function l(){d(),t&&t(this);const u=fi.get(this)||[];for(let c=0;c<u.length;c++){const p=u[c];p.onLoad&&p.onLoad(this)}fi.delete(this),r.manager.itemEnd(e)}function h(u){d(),s&&s(u),vr.remove(`image:${e}`);const c=fi.get(this)||[];for(let p=0;p<c.length;p++){const _=c[p];_.onError&&_.onError(u)}fi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Th extends qr{constructor(e){super(e)}load(e,t,n,s){const r=new Pt,a=new wh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ws extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Eh extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xr=new je,Oa=new z,za=new z;class Vo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Oa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oa),za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(za),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){xr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(xr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ws=new z,Ts=new En,ln=new z;class Xo extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ws,Ts,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ws,Ts,ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ws,Ts,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ws,Ts,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new z,Ga=new De,Ha=new De;class Vt extends Xo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,Ga,Ha),t.subVectors(Ha,Ga)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ah extends Vo{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}}class Rh extends Ws{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ah}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Vs extends Xo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ch extends Vo{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yo extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Ch}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ph extends Ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const pi=-90,mi=1;class Lh extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(pi,mi,e,t);s.layers=this.layers,this.add(s);const r=new Vt(pi,mi,e,t);r.layers=this.layers,this.add(r);const a=new Vt(pi,mi,e,t);a.layers=this.layers,this.add(a);const o=new Vt(pi,mi,e,t);o.layers=this.layers,this.add(o);const l=new Vt(pi,mi,e,t);l.layers=this.layers,this.add(l);const h=new Vt(pi,mi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const h of t)this.remove(h);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,d]=this.children,u=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,c,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ih extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ta=class ta{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ta.prototype.isMatrix2=!0;let Wa=ta;function Va(i,e,t,n){const s=Dh(n);switch(t){case 1021:return i*e;case 1028:return i*e/s.components*s.byteLength;case 1029:return i*e/s.components*s.byteLength;case 1030:return i*e*2/s.components*s.byteLength;case 1031:return i*e*2/s.components*s.byteLength;case 1022:return i*e*3/s.components*s.byteLength;case 1023:return i*e*4/s.components*s.byteLength;case 1033:return i*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dh(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qo(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nh(i){const e=new WeakMap;function t(o,l){const h=o.array,d=o.usage,u=h.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,h,d),o.onUploadCallback();let p;if(h instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=i.SHORT;else if(h instanceof Uint32Array)p=i.UNSIGNED_INT;else if(h instanceof Int32Array)p=i.INT;else if(h instanceof Int8Array)p=i.BYTE;else if(h instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,h){const d=l.array,u=l.updateRanges;if(i.bindBuffer(h,o),u.length===0)i.bufferSubData(h,0,d);else{u.sort((p,_)=>p.start-_.start);let c=0;for(let p=1;p<u.length;p++){const _=u[c],M=u[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++c,u[c]=M)}u.length=c+1;for(let p=0,_=u.length;p<_;p++){const M=u[p];i.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
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
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
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
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
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
#endif`,Vh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,$h=`#ifdef USE_BUMPMAP
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ec=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ic=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sc=`#define PI 3.141592653589793
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
} // validated`,rc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ac=`vec3 transformedNormal = objectNormal;
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
#endif`,oc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dc="gl_FragColor = linearToOutputTexel( gl_FragColor );",uc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fc=`#ifdef USE_ENVMAP
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
#endif`,pc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mc=`#ifdef USE_ENVMAP
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
#endif`,gc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_c=`#ifdef USE_ENVMAP
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
#endif`,vc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sc=`#ifdef USE_GRADIENTMAP
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
}`,bc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ec=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ac=`#ifdef USE_ENVMAP
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
#endif`,Rc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ic=`PhysicalMaterial material;
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
#endif`,Dc=`uniform sampler2D dfgLUT;
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
}`,Nc=`
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
#endif`,Uc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kc=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Bc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xc=`#if defined( USE_POINTS_UV )
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
#endif`,Yc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$c=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jc=`#ifdef USE_MORPHTARGETS
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
#endif`,Qc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
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
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yd=`float getShadowMask() {
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
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,Td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`#include <common>
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
}`,Hd=`#if DEPTH_PACKING == 3200
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
}`,Wd=`#define DISTANCE
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
}`,Vd=`#define DISTANCE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`uniform float scale;
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
}`,Kd=`uniform vec3 diffuse;
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
}`,$d=`#include <common>
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Jd=`#define LAMBERT
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
}`,Qd=`#define LAMBERT
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
}`,jd=`#define MATCAP
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
}`,eu=`#define MATCAP
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
}`,tu=`#define NORMAL
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
}`,nu=`#define NORMAL
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
}`,iu=`#define PHONG
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
}`,su=`#define PHONG
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
}`,ru=`#define STANDARD
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
}`,au=`#define STANDARD
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
}`,ou=`#define TOON
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
}`,lu=`#define TOON
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
}`,hu=`uniform float size;
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
}`,cu=`uniform vec3 diffuse;
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
}`,du=`#include <common>
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
}`,uu=`uniform vec3 color;
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
}`,fu=`uniform float rotation;
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
}`,pu=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Uh,alphahash_pars_fragment:Fh,alphamap_fragment:kh,alphamap_pars_fragment:Bh,alphatest_fragment:Oh,alphatest_pars_fragment:zh,aomap_fragment:Gh,aomap_pars_fragment:Hh,batching_pars_vertex:Wh,batching_vertex:Vh,begin_vertex:Xh,beginnormal_vertex:Yh,bsdfs:qh,iridescence_fragment:Kh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Zh,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:jh,color_fragment:ec,color_pars_fragment:tc,color_pars_vertex:nc,color_vertex:ic,common:sc,cube_uv_reflection_fragment:rc,defaultnormal_vertex:ac,displacementmap_pars_vertex:oc,displacementmap_vertex:lc,emissivemap_fragment:hc,emissivemap_pars_fragment:cc,colorspace_fragment:dc,colorspace_pars_fragment:uc,envmap_fragment:fc,envmap_common_pars_fragment:pc,envmap_pars_fragment:mc,envmap_pars_vertex:gc,envmap_physical_pars_fragment:Ac,envmap_vertex:_c,fog_vertex:vc,fog_pars_vertex:xc,fog_fragment:yc,fog_pars_fragment:Mc,gradientmap_pars_fragment:Sc,lightmap_pars_fragment:bc,lights_lambert_fragment:wc,lights_lambert_pars_fragment:Tc,lights_pars_begin:Ec,lights_toon_fragment:Rc,lights_toon_pars_fragment:Cc,lights_phong_fragment:Pc,lights_phong_pars_fragment:Lc,lights_physical_fragment:Ic,lights_physical_pars_fragment:Dc,lights_fragment_begin:Nc,lights_fragment_maps:Uc,lights_fragment_end:Fc,lightprobes_pars_fragment:kc,logdepthbuf_fragment:Bc,logdepthbuf_pars_fragment:Oc,logdepthbuf_pars_vertex:zc,logdepthbuf_vertex:Gc,map_fragment:Hc,map_pars_fragment:Wc,map_particle_fragment:Vc,map_particle_pars_fragment:Xc,metalnessmap_fragment:Yc,metalnessmap_pars_fragment:qc,morphinstance_vertex:Kc,morphcolor_vertex:$c,morphnormal_vertex:Zc,morphtarget_pars_vertex:Jc,morphtarget_vertex:Qc,normal_fragment_begin:jc,normal_fragment_maps:ed,normal_pars_fragment:td,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:ad,clearcoat_pars_fragment:od,iridescence_pars_fragment:ld,opaque_fragment:hd,packing:cd,premultiplied_alpha_fragment:dd,project_vertex:ud,dithering_fragment:fd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:vd,shadowmap_vertex:xd,shadowmask_pars_fragment:yd,skinbase_vertex:Md,skinning_pars_vertex:Sd,skinning_vertex:bd,skinnormal_vertex:wd,specularmap_fragment:Td,specularmap_pars_fragment:Ed,tonemapping_fragment:Ad,tonemapping_pars_fragment:Rd,transmission_fragment:Cd,transmission_pars_fragment:Pd,uv_pars_fragment:Ld,uv_pars_vertex:Id,uv_vertex:Dd,worldpos_vertex:Nd,background_vert:Ud,background_frag:Fd,backgroundCube_vert:kd,backgroundCube_frag:Bd,cube_vert:Od,cube_frag:zd,depth_vert:Gd,depth_frag:Hd,distance_vert:Wd,distance_frag:Vd,equirect_vert:Xd,equirect_frag:Yd,linedashed_vert:qd,linedashed_frag:Kd,meshbasic_vert:$d,meshbasic_frag:Zd,meshlambert_vert:Jd,meshlambert_frag:Qd,meshmatcap_vert:jd,meshmatcap_frag:eu,meshnormal_vert:tu,meshnormal_frag:nu,meshphong_vert:iu,meshphong_frag:su,meshphysical_vert:ru,meshphysical_frag:au,meshtoon_vert:ou,meshtoon_frag:lu,points_vert:hu,points_frag:cu,shadow_vert:du,shadow_frag:uu,sprite_vert:fu,sprite_frag:pu},de={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},fn={basic:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ne(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:zt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:zt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:zt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:zt([de.common,de.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:zt([de.lights,de.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};fn.physical={uniforms:zt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Es={r:0,b:0,g:0},mu=new je,Ko=new Ue;Ko.set(-1,0,0,0,1,0,0,0,1);function gu(i,e,t,n,s,r){const a=new Ne(0);let o=s===!0?0:1,l,h,d=null,u=0,c=null;function p(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){const y=T.backgroundBlurriness>0;C=e.get(C,y)}return C}function _(T){let C=!1;const y=p(T);y===null?m(a,o):y&&y.isColor&&(m(y,1),C=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,C){const y=p(C);y&&(y.isCubeTexture||y.mapping===306)?(h===void 0&&(h=new lt(new Qi(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Ti(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mu.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ko),h.material.toneMapped=Ye.getTransfer(y.colorSpace)!==et,(d!==y||u!==y.version||c!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,c=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new lt(new Et(2,2),new Xt({name:"BackgroundMaterial",uniforms:Ti(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||c!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,c=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,C){T.getRGB(Es,Wo(i)),t.buffers.color.setClear(Es.r,Es.g,Es.b,C,r)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,C=1){a.set(T),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:_,addToRenderList:M,dispose:f}}function _u(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,a=!1;function o(L,D,O,I,G){let A=!1;const B=u(L,I,O,D);r!==B&&(r=B,h(r.object)),A=p(L,I,O,G),A&&_(L,I,O,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,y(L,D,O,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function h(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function u(L,D,O,I){const G=I.wireframe===!0;let A=n[D.id];A===void 0&&(A={},n[D.id]=A);const B=L.isInstancedMesh===!0?L.id:0;let Y=A[B];Y===void 0&&(Y={},A[B]=Y);let X=Y[O.id];X===void 0&&(X={},Y[O.id]=X);let $=X[G];return $===void 0&&($=c(l()),X[G]=$),$}function c(L){const D=[],O=[],I=[];for(let G=0;G<t;G++)D[G]=0,O[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,D,O,I){const G=r.attributes,A=D.attributes;let B=0;const Y=O.getAttributes();for(const X in Y)if(Y[X].location>=0){const ee=G[X];let Me=A[X];if(Me===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Me=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Me=L.instanceColor)),ee===void 0||ee.attribute!==Me||Me&&ee.data!==Me.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function _(L,D,O,I){const G={},A=D.attributes;let B=0;const Y=O.getAttributes();for(const X in Y)if(Y[X].location>=0){let ee=A[X];ee===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const Me={};Me.attribute=ee,ee&&ee.data&&(Me.data=ee.data),G[X]=Me,B++}r.attributes=G,r.attributesNum=B,r.index=I}function M(){const L=r.newAttributes;for(let D=0,O=L.length;D<O;D++)L[D]=0}function m(L){f(L,0)}function f(L,D){const O=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;O[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),G[L]!==D&&(i.vertexAttribDivisor(L,D),G[L]=D)}function T(){const L=r.newAttributes,D=r.enabledAttributes;for(let O=0,I=D.length;O<I;O++)D[O]!==L[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function C(L,D,O,I,G,A,B){B===!0?i.vertexAttribIPointer(L,D,O,G,A):i.vertexAttribPointer(L,D,O,I,G,A)}function y(L,D,O,I){M();const G=I.attributes,A=O.getAttributes(),B=D.defaultAttributeValues;for(const Y in A){const X=A[Y];if(X.location>=0){let $=G[Y];if($===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){const ee=$.normalized,Me=$.itemSize,me=e.get($);if(me===void 0)continue;const qe=me.buffer,Oe=me.type,Ke=me.bytesPerElement,Z=Oe===i.INT||Oe===i.UNSIGNED_INT||$.gpuType===1013;if($.isInterleavedBufferAttribute){const te=$.data,xe=te.stride,Ie=$.offset;if(te.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)f(X.location+ge,te.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ge=0;ge<X.locationSize;ge++)C(X.location+ge,Me/X.locationSize,Oe,ee,xe*Ke,(Ie+Me/X.locationSize*ge)*Ke,Z)}else{if($.isInstancedBufferAttribute){for(let te=0;te<X.locationSize;te++)f(X.location+te,$.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let te=0;te<X.locationSize;te++)m(X.location+te);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let te=0;te<X.locationSize;te++)C(X.location+te,Me/X.locationSize,Oe,ee,Me*Ke,Me/X.locationSize*te*Ke,Z)}}else if(B!==void 0){const ee=B[Y];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(X.location,ee);break;case 3:i.vertexAttrib3fv(X.location,ee);break;case 4:i.vertexAttrib4fv(X.location,ee);break;default:i.vertexAttrib1fv(X.location,ee)}}}}T()}function b(){E();for(const L in n){const D=n[L];for(const O in D){const I=D[O];for(const G in I){const A=I[G];for(const B in A)d(A[B].object),delete A[B];delete I[G]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const O in D){const I=D[O];for(const G in I){const A=I[G];for(const B in A)d(A[B].object),delete A[B];delete I[G]}}delete n[L.id]}function P(L){for(const D in n){const O=n[D];for(const I in O){const G=O[I];if(G[L.id]===void 0)continue;const A=G[L.id];for(const B in A)d(A[B].object),delete A[B];delete G[L.id]}}}function v(L){for(const D in n){const O=n[D],I=L.isInstancedMesh===!0?L.id:0,G=O[I];if(G!==void 0){for(const A in G){const B=G[A];for(const Y in B)d(B[Y].object),delete B[Y];delete G[A]}delete O[I],Object.keys(O).length===0&&delete n[D]}}}function E(){R(),a=!0,r!==s&&(r=s,h(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function vu(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let c=0;for(let p=0;p<d;p++)c+=h[p];t.update(c,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function xu(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==1023&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==1009&&P!==1015&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=l(h);d!==h&&(Le("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const u=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&c===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:y,maxSamples:b,samples:S}}function yu(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Fn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,c){const p=u.length!==0||c||n!==0||s;return s=c,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,c){t=d(u,c,0)},this.setState=function(u,c,p){const _=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?d(null):h();else{const T=r?0:n,C=T*4;let y=f.clippingState||null;l.value=y,y=d(_,c,C,p);for(let b=0;b!==C;++b)y[b]=t[b];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,c,p,_){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const f=p+M*4,T=c.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,y=p;C!==M;++C,y+=4)a.copy(u[C]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const yi=4,Mu=6,Su=20,bu=256,Bi=new Vs,Xa=new Ne;let yr=null,Mr=0,Sr=0,br=!1;const wu=new z,Wn=new z;class Ya{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=wu}=r;yr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yr,Mr,Sr),this._renderer.xr.enabled=br,e.scissorTest=!1,gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Fs,depthBuffer:!1},s=qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Tu(r)),this._blurMaterial=Au(r,e,t),this._ggxMaterial=Eu(r,e,t)}return s}_compileMaterial(e){const t=new lt(new Ft,e);this._renderer.compile(t,Bi)}_sceneToCubeUV(e,t,n,s,r){const l=new Vt(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,p=u.toneMapping;u.getClearColor(Xa),u.toneMapping=0,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new Qi,new Tn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let f=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,f=!0):(m.color.copy(Xa),f=!0);for(let C=0;C<6;C++){const y=C%3;y===0?(l.up.set(0,h[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[C],r.y,r.z)):y===1?(l.up.set(0,0,h[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[C],r.z)):(l.up.set(0,h[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[C]));const b=this._cubeSize;gi(s,y*b,C>2?b:0,b,b),u.setRenderTarget(s),f&&u.render(M,l),u.render(e,l)}u.toneMapping=p,u.autoClear=c,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;gi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Bi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,h=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(h*h-d*d),c=h*1.25,p=u*c,{_lodMax:_}=this,M=this._sizeLods[n],m=3*M*(n>_-yi?n-_+yi:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,gi(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,Bi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,gi(e,m,f,3*M,2*M),s.setRenderTarget(e),s.render(o,Bi)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const h=o.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;const d=this._sizeLods[s],u=3*d*(s>this._lodMax-yi?s-this._lodMax+yi:0),c=4*(this._cubeSize-d);gi(t,u,c,3*d,2*d),a.setRenderTarget(t),a.render(l,Bi)}}function Tu(i){const e=[],t=[];let n=i;const s=i-yi+1+Mu;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,h=1+o,d=[l,l,h,l,h,h,l,l,h,h,l,h],u=6,c=6,p=3,_=new Float32Array(p*c*u),M=new Float32Array(p*c*u);for(let f=0;f<u;f++){const T=f%3*2/3-1,C=f>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(y,p*c*f);for(let b=0;b<c;b++){const S=d[b*2]*2-1,P=d[b*2+1]*2-1;f===0?Wn.set(1,P,S):f===1?Wn.set(-S,1,-P):f===2?Wn.set(-S,P,1):f===3?Wn.set(-1,P,-S):f===4?Wn.set(-S,-1,P):Wn.set(S,P,-1),Wn.toArray(M,(f*c+b)*p)}}const m=new Ft;m.setAttribute("position",new Ct(_,p)),m.setAttribute("outputDirection",new Ct(M,p)),t.push(new lt(m,null)),n>yi&&n--}return{lodMeshes:t,sizeLods:e}}function qa(i,e,t){const n=new Jt(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Eu(i,e,t){return new Xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bu,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Au(i,e,t){return new Xt({name:"SphericalGaussianBlur",defines:{SAMPLES:Su,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ka(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $a(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class $o extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Go(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qi(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const a=new lt(s,r),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Lh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Ru(i){let e=new WeakMap,t=new WeakMap,n=null;function s(c,p=!1){return c==null?null:p?a(c):r(c)}function r(c){if(c&&c.isTexture){const p=c.mapping;if(p===303||p===304)if(e.has(c)){const _=e.get(c).texture;return o(_,c.mapping)}else{const _=c.image;if(_&&_.height>0){const M=new $o(_.height);return M.fromEquirectangularTexture(i,c),e.set(c,M),c.addEventListener("dispose",h),o(M.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){const p=c.mapping,_=p===303||p===304,M=p===301||p===302;if(_||M){let m=t.get(c);const f=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return n===null&&(n=new Ya(i)),m=_?n.fromEquirectangular(c,m):n.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),m.texture;if(m!==void 0)return m.texture;{const T=c.image;return _&&T&&T.height>0||M&&T&&l(T)?(n===null&&(n=new Ya(i)),m=_?n.fromEquirectangular(c):n.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),c.addEventListener("dispose",d),m.texture):null}}}return c}function o(c,p){return p===303?c.mapping=301:p===304&&(c.mapping=302),c}function l(c){let p=0;const _=6;for(let M=0;M<_;M++)c[M]!==void 0&&p++;return p===_}function h(c){const p=c.target;p.removeEventListener("dispose",h);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(c){const p=c.target;p.removeEventListener("dispose",d);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Cu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&bi("WebGLRenderer: "+n+" extension not supported."),s}}}function Pu(i,e,t,n){const s={},r=new WeakMap;function a(u){const c=u.target;c.index!==null&&e.remove(c.index);for(const _ in c.attributes)e.remove(c.attributes[_]);c.removeEventListener("dispose",a),delete s[c.id];const p=r.get(c);p&&(e.remove(p),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(u,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,t.memory.geometries++),c}function l(u){const c=u.attributes;for(const p in c)e.update(c[p],i.ARRAY_BUFFER)}function h(u){const c=[],p=u.index,_=u.attributes.position;let M=0;if(_===void 0)return;if(p!==null){const T=p.array;M=p.version;for(let C=0,y=T.length;C<y;C+=3){const b=T[C+0],S=T[C+1],P=T[C+2];c.push(b,S,S,P,P,b)}}else{const T=_.array;M=_.version;for(let C=0,y=T.length/3-1;C<y;C+=3){const b=C+0,S=C+1,P=C+2;c.push(b,S,S,P,P,b)}}const m=new(_.count>=65535?Fo:Uo)(c,1);m.version=M;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function d(u){const c=r.get(u);if(c){const p=u.index;p!==null&&c.version<p.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Lu(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,c){i.drawElements(n,c,r,u*a),t.update(c,n,1)}function h(u,c,p){p!==0&&(i.drawElementsInstanced(n,c,r,u*a,p),t.update(c,n,p))}function d(u,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,u,0,p);let M=0;for(let m=0;m<p;m++)M+=c[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d}function Iu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Du(i,e,t){const n=new WeakMap,s=new pt;function r(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let c=n.get(o);if(c===void 0||c.count!==u){let E=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",E)};c!==void 0&&c.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let C=0;p===!0&&(C=1),_===!0&&(C=2),M===!0&&(C=3);let y=o.attributes.position.count*C,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const S=new Float32Array(y*b*4*u),P=new Lo(S,y,b,u);P.type=1015,P.needsUpdate=!0;const v=C*4;for(let R=0;R<u;R++){const L=m[R],D=f[R],O=T[R],I=y*b*4*R;for(let G=0;G<L.count;G++){const A=G*v;p===!0&&(s.fromBufferAttribute(L,G),S[I+A+0]=s.x,S[I+A+1]=s.y,S[I+A+2]=s.z,S[I+A+3]=0),_===!0&&(s.fromBufferAttribute(D,G),S[I+A+4]=s.x,S[I+A+5]=s.y,S[I+A+6]=s.z,S[I+A+7]=0),M===!0&&(s.fromBufferAttribute(O,G),S[I+A+8]=s.x,S[I+A+9]=s.y,S[I+A+10]=s.z,S[I+A+11]=O.itemSize===4?s.w:1)}}c={count:u,texture:P,size:new De(y,b)},n.set(o,c),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<h.length;M++)p+=h[M];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function Nu(i,e,t,n,s){let r=new WeakMap;function a(h){const d=s.render.frame,u=h.geometry,c=e.get(h,u);if(r.get(c)!==d&&(e.update(c),r.set(c,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const p=h.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return c}function o(){r=new WeakMap}function l(h){const d=h.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const Uu={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Fu(i,e,t,n,s,r){const a=new Jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const h=new Ft;h.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const d=new xh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new lt(h,d),c=new Vs(-1,1,1,-1,0,1);let p=null,_=null,M=!1,m,f=null,T=[],C=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let S=0;S<T.length;S++){const P=T[S];P.setSize&&P.setSize(y,b)}},this.setEffects=function(y){T=y,C=T.length>0&&T[0].isRenderPass===!0;const b=a.width,S=a.height;T.length>0&&o===null&&(o=new Jt(b,S,{type:1016,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(b,S,{type:1016,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<T.length;P++){const v=T[P];v.setSize&&v.setSize(b,S)}},this.begin=function(y,b){if(M||y.toneMapping===0&&T.length===0)return!1;if(f=b,b!==null){const S=b.width,P=b.height;(a.width!==S||a.height!==P)&&this.setSize(S,P)}return C===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=0,!0},this.hasRenderPass=function(){return C},this.end=function(y,b){y.toneMapping=m,M=!0;let S=a,P=o;for(let v=0;v<T.length;v++){const E=T[v];E.enabled!==!1&&(E.render(y,P,S,b),E.needsSwap!==!1&&(S=P,P=P===o?l:o))}if(p!==y.outputColorSpace||_!==y.toneMapping){p=y.outputColorSpace,_=y.toneMapping,d.defines={},Ye.getTransfer(p)===et&&(d.defines.SRGB_TRANSFER="");const v=Uu[_];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(f),y.render(u,c),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Zo=new Pt,Nr=new Ji(1,1),Jo=new Lo,Qo=new $l,jo=new Go,Za=[],Ja=[],Qa=new Float32Array(16),ja=new Float32Array(9),eo=new Float32Array(4);function Ri(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Za[s];if(r===void 0&&(r=new Float32Array(s),Za[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ys(i,e){let t=Ja[e];t===void 0&&(t=new Int32Array(e),Ja[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ku(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function Ou(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function zu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function Gu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;eo.set(n),i.uniformMatrix2fv(this.addr,!1,eo),bt(t,n)}}function Hu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;ja.set(n),i.uniformMatrix3fv(this.addr,!1,ja),bt(t,n)}}function Wu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Qa.set(n),i.uniformMatrix4fv(this.addr,!1,Qa),bt(t,n)}}function Vu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function Yu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function qu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Ku(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $u(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function Zu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function Ju(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function Qu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nr.compareFunction=t.isReversedDepthBuffer()?518:515,r=Nr):r=Zo,t.setTexture2D(e||r,s)}function ju(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qo,s)}function ef(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||jo,s)}function tf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jo,s)}function nf(i){switch(i){case 5126:return ku;case 35664:return Bu;case 35665:return Ou;case 35666:return zu;case 35674:return Gu;case 35675:return Hu;case 35676:return Wu;case 5124:case 35670:return Vu;case 35667:case 35671:return Xu;case 35668:case 35672:return Yu;case 35669:case 35673:return qu;case 5125:return Ku;case 36294:return $u;case 36295:return Zu;case 36296:return Ju;case 35678:case 36198:case 36298:case 36306:case 35682:return Qu;case 35679:case 36299:case 36307:return ju;case 35680:case 36300:case 36308:case 36293:return ef;case 36289:case 36303:case 36311:case 36292:return tf}}function sf(i,e){i.uniform1fv(this.addr,e)}function rf(i,e){const t=Ri(e,this.size,2);i.uniform2fv(this.addr,t)}function af(i,e){const t=Ri(e,this.size,3);i.uniform3fv(this.addr,t)}function of(i,e){const t=Ri(e,this.size,4);i.uniform4fv(this.addr,t)}function lf(i,e){const t=Ri(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hf(i,e){const t=Ri(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cf(i,e){const t=Ri(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function df(i,e){i.uniform1iv(this.addr,e)}function uf(i,e){i.uniform2iv(this.addr,e)}function ff(i,e){i.uniform3iv(this.addr,e)}function pf(i,e){i.uniform4iv(this.addr,e)}function mf(i,e){i.uniform1uiv(this.addr,e)}function gf(i,e){i.uniform2uiv(this.addr,e)}function _f(i,e){i.uniform3uiv(this.addr,e)}function vf(i,e){i.uniform4uiv(this.addr,e)}function xf(i,e,t){const n=this.cache,s=e.length,r=Ys(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Nr:a=Zo;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function yf(i,e,t){const n=this.cache,s=e.length,r=Ys(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qo,r[a])}function Mf(i,e,t){const n=this.cache,s=e.length,r=Ys(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||jo,r[a])}function Sf(i,e,t){const n=this.cache,s=e.length,r=Ys(t,s);St(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jo,r[a])}function bf(i){switch(i){case 5126:return sf;case 35664:return rf;case 35665:return af;case 35666:return of;case 35674:return lf;case 35675:return hf;case 35676:return cf;case 5124:case 35670:return df;case 35667:case 35671:return uf;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return _f;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return Mf;case 36289:case 36303:case 36311:case 36292:return Sf}}class wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nf(t.type)}}class Tf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bf(t.type)}}class Ef{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function to(i,e){i.seq.push(e),i.map[e.id]=e}function Af(i,e,t){const n=i.name,s=n.length;for(wr.lastIndex=0;;){const r=wr.exec(n),a=wr.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){to(t,h===void 0?new wf(o,i,e):new Tf(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ef(o),to(t,u)),t=u}}}class Ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Af(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function no(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Rf=37297;let Cf=0;function Pf(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const io=new Ue;function Lf(i){Ye._getMatrix(io,Ye.workingColorSpace,i);const e=`mat3( ${io.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case ks:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function so(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Pf(i.getShaderSource(e),o)}else return r}function If(i,e){const t=Lf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Df={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Nf(i,e){const t=Df[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const As=new z;function Uf(){Ye.getLuminanceCoefficients(As);const i=As.x.toFixed(4),e=As.y.toFixed(4),t=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ff(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function kf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Vi(i){return i!==""}function ro(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ao(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Of=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ur(i){return i.replace(Of,Gf)}const zf=new Map;function Gf(i,e){let t=He[e];if(t===void 0){const n=zf.get(e);if(n!==void 0)t=He[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ur(t)}const Hf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oo(i){return i.replace(Hf,Wf)}function Wf(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Vf={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Xf(i){return Vf[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yf={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function qf(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yf[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Kf={302:"ENVMAP_MODE_REFRACTION"};function $f(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kf[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zf={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Jf(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zf[i.combine]||"ENVMAP_BLENDING_NONE"}function Qf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jf(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xf(t),h=qf(t),d=$f(t),u=Jf(t),c=Qf(t),p=Ff(t),_=kf(r),M=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vi).join(`
`),f.length>0&&(f+=`
`)):(m=[lo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),f=[lo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?He.tonemapping_pars_fragment:"",t.toneMapping!==0?Nf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,If("linearToOutputTexel",t.outputColorSpace),Uf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),a=Ur(a),a=ro(a,t),a=ao(a,t),o=Ur(o),o=ro(o,t),o=ao(o,t),a=oo(a),o=oo(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const C=T+m+a,y=T+f+o,b=no(s,s.VERTEX_SHADER,C),S=no(s,s.FRAGMENT_SHADER,y);s.attachShader(M,b),s.attachShader(M,S),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(L){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(M)||"",O=s.getShaderInfoLog(b)||"",I=s.getShaderInfoLog(S)||"",G=D.trim(),A=O.trim(),B=I.trim();let Y=!0,X=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,S);else{const $=so(s,b,"vertex"),ee=so(s,S,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+$+`
`+ee)}else G!==""?Le("WebGLProgram: Program Info Log:",G):(A===""||B==="")&&(X=!1);X&&(L.diagnostics={runnable:Y,programLog:G,vertexShader:{log:A,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(b),s.deleteShader(S),v=new Ns(s,M),E=Bf(s,M)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,Rf)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cf++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=S,this}let ep=0;class tp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new np(e),t.set(e,n)),n}}class np{constructor(e){this.id=ep++,this.code=e,this.usedTimes=0}}function ip(i){return i===1030||i===37490||i===36285}function sp(i,e,t,n,s,r){const a=new Io,o=new tp,l=new Set,h=[],d=new Map,u=n.logarithmicDepthBuffer;let c=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,E,R,L,D,O){const I=L.fog,G=D.geometry,A=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=e.get(v.envMap||A,B),X=Y&&Y.mapping===306?Y.image.height:null,$=p[v.type];v.precision!==null&&(c=n.getMaxPrecision(v.precision),c!==v.precision&&Le("WebGLProgram.getParameters:",v.precision,"not supported, using",c,"instead."));const ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=ee!==void 0?ee.length:0;let me=0;G.morphAttributes.position!==void 0&&(me=1),G.morphAttributes.normal!==void 0&&(me=2),G.morphAttributes.color!==void 0&&(me=3);let qe,Oe,Ke,Z;if($){const ct=fn[$];qe=ct.vertexShader,Oe=ct.fragmentShader}else{qe=v.vertexShader,Oe=v.fragmentShader;const ct=o.getVertexShaderStage(v),Je=o.getFragmentShaderStage(v);o.update(v,ct,Je),Ke=ct.id,Z=Je.id}const te=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ie=D.isInstancedMesh===!0,ge=D.isBatchedMesh===!0,Be=!!v.map,gt=!!v.matcap,ze=!!Y,Xe=!!v.aoMap,nt=!!v.lightMap,Fe=!!v.bumpMap&&v.wireframe===!1,it=!!v.normalMap,_t=!!v.displacementMap,Lt=!!v.emissiveMap,ht=!!v.metalnessMap,mt=!!v.roughnessMap,k=v.anisotropy>0,ne=v.clearcoat>0,_e=v.dispersion>0,w=v.retroreflectivity>0,g=v.iridescence>0,N=v.sheen>0,H=v.transmission>0,K=k&&!!v.anisotropyMap,se=ne&&!!v.clearcoatMap,ae=ne&&!!v.clearcoatNormalMap,J=ne&&!!v.clearcoatRoughnessMap,Q=g&&!!v.iridescenceMap,oe=g&&!!v.iridescenceThicknessMap,Te=N&&!!v.sheenColorMap,le=N&&!!v.sheenRoughnessMap,re=!!v.specularMap,Ae=!!v.specularColorMap,Pe=!!v.specularIntensityMap,ke=H&&!!v.transmissionMap,F=H&&!!v.thicknessMap,he=!!v.gradientMap,j=!!v.alphaMap,ce=v.alphaTest>0,pe=!!v.alphaHash,ie=!!v.extensions;let Re=0;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Re=i.toneMapping);const we={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:Oe,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:c,batching:ge,batchingColor:ge&&D._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:gt,envMap:ze,envMapMode:ze&&Y.mapping,envMapCubeUVHeight:X,aoMap:Xe,lightMap:nt,bumpMap:Fe,normalMap:it,displacementMap:_t,emissiveMap:Lt,normalMapObjectSpace:it&&v.normalMapType===1,normalMapTangentSpace:it&&v.normalMapType===0,packedNormalMap:it&&v.normalMapType===0&&ip(v.normalMap.format),metalnessMap:ht,roughnessMap:mt,anisotropy:k,anisotropyMap:K,clearcoat:ne,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:J,dispersion:_e,retroreflection:w,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:oe,sheen:N,sheenColorMap:Te,sheenRoughnessMap:le,specularMap:re,specularColorMap:Ae,specularIntensityMap:Pe,transmission:H,transmissionMap:ke,thicknessMap:F,gradientMap:he,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:pe,combine:v.combine,mapUv:Be&&_(v.map.channel),aoMapUv:Xe&&_(v.aoMap.channel),lightMapUv:nt&&_(v.lightMap.channel),bumpMapUv:Fe&&_(v.bumpMap.channel),normalMapUv:it&&_(v.normalMap.channel),displacementMapUv:_t&&_(v.displacementMap.channel),emissiveMapUv:Lt&&_(v.emissiveMap.channel),metalnessMapUv:ht&&_(v.metalnessMap.channel),roughnessMapUv:mt&&_(v.roughnessMap.channel),anisotropyMapUv:K&&_(v.anisotropyMap.channel),clearcoatMapUv:se&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:le&&_(v.sheenRoughnessMap.channel),specularMapUv:re&&_(v.specularMap.channel),specularColorMapUv:Ae&&_(v.specularColorMap.channel),specularIntensityMapUv:Pe&&_(v.specularIntensityMap.channel),transmissionMapUv:ke&&_(v.transmissionMap.channel),thicknessMapUv:F&&_(v.thicknessMap.channel),alphaMapUv:j&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(it||k),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(Be||j),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&it===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:me,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:Lt&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(f(E,v),T(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function f(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function T(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function C(v){const E=p[v.type];let R;if(E){const L=fn[E];R=gh.clone(L.uniforms)}else R=v.uniforms;return R}function y(v,E){let R=d.get(E);return R!==void 0?++R.usedTimes:(R=new jf(i,E,v,s),h.push(R),d.set(E,R)),R}function b(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),d.delete(v.cacheKey),v.destroy()}}function S(v){o.remove(v)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:b,releaseShaderCache:S,programs:h,dispose:P}}function rp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ho(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function co(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,_,M,m,f){let T=i[e];return T===void 0?(T={id:c.id,object:c,geometry:p,material:_,materialVariant:a(c),groupOrder:M,renderOrder:c.renderOrder,z:m,group:f},i[e]=T):(T.id=c.id,T.object=c,T.geometry=p,T.material=_,T.materialVariant=a(c),T.groupOrder=M,T.renderOrder=c.renderOrder,T.z=m,T.group=f),e++,T}function l(c,p,_,M,m,f,T){T.reversedDepth===!0&&(m=-m);const C=o(c,p,_,M,m,f);_.transmission>0?n.push(C):_.transparent===!0?s.push(C):t.push(C)}function h(c,p,_,M,m,f){const T=o(c,p,_,M,m,f);_.transmission>0?n.unshift(T):_.transparent===!0?s.unshift(T):t.unshift(T)}function d(c,p){t.length>1&&t.sort(c||ap),n.length>1&&n.sort(p||ho),s.length>1&&s.sort(p||ho)}function u(){for(let c=e,p=i.length;c<p;c++){const _=i[c];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:h,finish:u,sort:d}}function op(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new co,i.set(n,[a])):s>=r.length?(a=new co,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function lp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ne};break;case"SpotLight":t={position:new z,direction:new z,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function hp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cp=0;function dp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function up(i){const e=new lp,t=hp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new z);const s=new z,r=new je,a=new je;function o(h){let d=0,u=0,c=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,_=0,M=0,m=0,f=0,T=0,C=0,y=0,b=0,S=0,P=0,v=0,E=0,R=0;h.sort(dp);for(let D=0,O=h.length;D<O;D++){const I=h[D],G=I.color,A=I.intensity,B=I.distance;let Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===1030?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=G.r*A,u+=G.g*A,c+=G.b*A;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],A);R++}else if(I.isSunLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,ee=t.get(I);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[_]=ee,n.sunShadowMap[_]=Y;const Me=$.getViewportCount();for(let me=0;me<Me;me++)n.sunShadowMatrix[M+me]=$.getMatrix(me),n.sunShadowCascade[M+me]=$._cascadeData[me];M+=Me,_++}n.sun[p]=X,p++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,ee=t.get(I);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=X,m++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(G).multiplyScalar(A),X.distance=B,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[T]=X;const $=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,$.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[T]=$.matrix,I.castShadow){const ee=t.get(I);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,n.spotShadow[T]=ee,n.spotShadowMap[T]=Y,P++}T++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(G).multiplyScalar(A),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[C]=X,C++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const $=I.shadow,ee=t.get(I);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=Y,n.pointShadowMatrix[f]=I.shadow.matrix,S++}n.point[f]=X,f++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(A),X.groundColor.copy(I.groundColor).multiplyScalar(A),n.hemi[y]=X,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=c;const L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==T||L.rectAreaLength!==C||L.hemiLength!==y||L.numSunShadows!==_||L.numDirectionalShadows!==b||L.numPointShadows!==S||L.numSpotShadows!==P||L.numSpotMaps!==v||L.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=T,n.rectArea.length=C,n.point.length=f,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=T,L.rectAreaLength=C,L.hemiLength=y,L.numSunShadows=_,L.numDirectionalShadows=b,L.numPointShadows=S,L.numSpotShadows=P,L.numSpotMaps=v,L.numLightProbes=R,n.version=cp++)}function l(h,d){let u=0,c=0,p=0,_=0,M=0,m=0;const f=d.matrixWorldInverse;for(let T=0,C=h.length;T<C;T++){const y=h[T];if(y.isSunLight){const b=n.sun[u];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),u++}else if(y.isDirectionalLight){const b=n.directional[c];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),c++}else if(y.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const b=n.rectArea[M];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function uo(i){const e=new up(i),t=[],n=[],s=[];function r(c){u.camera=c,t.length=0,n.length=0,s.length=0}function a(c){t.push(c)}function o(c){n.push(c)}function l(c){s.push(c)}function h(){e.setup(t)}function d(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function fp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new uo(i),e.set(s,[o])):r>=a.length?(o=new uo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mp=`uniform sampler2D shadow_pass;
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
}`,gp=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],_p=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],fo=new je,Oi=new z,Tr=new z;function vp(i,e,t){let n=new Vr;const s=new De,r=new De,a=new pt,o=new yh,l=new Mh,h={},d=t.maxTextureSize,u={0:1,1:0,2:2},c=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:pp,fragmentShader:mp}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new lt(_,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(S,P,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===2&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const E=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(0),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=f!==this.type;O&&P.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=S.length;I<G;I++){const A=S[I],B=A.shadow;if(B===void 0){Le("WebGLShadowMap:",A,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Y=B.getFrameExtents();s.multiply(Y),r.copy(B.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Y.x),s.x=r.x*Y.x,B.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Y.y),s.y=r.y*Y.y,B.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===3){if(A.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Jt(s.x,s.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),B.map.texture.name=A.name+".shadowMap",B.map.depthTexture=new Ji(s.x,s.y,1015),B.map.depthTexture.name=A.name+".shadowMapDepth",B.map.depthTexture.format=1026,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=1003,B.map.depthTexture.magFilter=1003}else A.isPointLight?(B.map=new $o(s.x),B.map.depthTexture=new ph(s.x,1014)):(B.map=new Jt(s.x,s.y),B.map.depthTexture=new Ji(s.x,s.y,1014)),B.map.depthTexture.name=A.name+".shadowMap",B.map.depthTexture.format=1026,this.type===1?(B.map.depthTexture.compareFunction=X?518:515,B.map.depthTexture.minFilter=1006,B.map.depthTexture.magFilter=1006):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=1003,B.map.depthTexture.magFilter=1003);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const $=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();A.isPointLight!==!0&&B.updateMatrices(A,v);for(let ee=0;ee<$;ee++){const Me=B.getCamera(ee);if(A.isPointLight){const me=B.camera,qe=B.matrix,Oe=A.distance||me.far;Oe!==me.far&&(me.far=Oe,me.updateProjectionMatrix()),Oi.setFromMatrixPosition(A.matrixWorld),me.position.copy(Oi),Tr.copy(me.position),Tr.add(gp[ee]),me.up.copy(_p[ee]),me.lookAt(Tr),me.updateMatrixWorld(),qe.makeTranslation(-Oi.x,-Oi.y,-Oi.z),fo.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),B._frustum.setFromProjectionMatrix(fo,me.coordinateSystem,me.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(B.map),i.clear());const me=B.getViewport(ee);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),D.viewport(a)}n=B.getFrustum(ee),y(P,v,Me,A,this.type)}B.isPointLightShadow!==!0&&this.type===3&&T(B,v),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,L)};function T(S,P){const v=e.update(M);c.defines.VSM_SAMPLES!==S.blurSamples&&(c.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Jt(s.x,s.y,{format:1030,type:1016}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),c.uniforms.shadow_pass.value=S.map.depthTexture,c.uniforms.resolution.value.set(S.map.width,S.map.height),c.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(P,null,v,c,M,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(P,null,v,p,M,null)}function C(S,P,v,E){let R=null;const L=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)R=L;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const D=R.uuid,O=P.uuid;let I=h[D];I===void 0&&(I={},h[D]=I);let G=I[O];G===void 0&&(G=R.clone(),I[O]=G,P.addEventListener("dispose",b)),R=G}if(R.visible=P.visible,R.wireframe=P.wireframe,E===3?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:u[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=i.properties.get(R);D.light=v}return R}function y(S,P,v,E,R){if(S.visible===!1)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===3)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);const O=e.update(S),I=S.material;if(Array.isArray(I)){const G=O.groups;for(let A=0,B=G.length;A<B;A++){const Y=G[A],X=I[Y.materialIndex];if(X&&X.visible){const $=C(S,X,E,R);S.onBeforeShadow(i,S,P,v,O,$,Y),i.renderBufferDirect(v,null,O,$,S,Y),S.onAfterShadow(i,S,P,v,O,$,Y)}}}else if(I.visible){const G=C(S,I,E,R);S.onBeforeShadow(i,S,P,v,O,G,null),i.renderBufferDirect(v,null,O,G,S,null),S.onAfterShadow(i,S,P,v,O,G,null)}}const D=S.children;for(let O=0,I=D.length;O<I;O++)y(D[O],P,v,E,R)}function b(S){S.target.removeEventListener("dispose",b);for(const v in h){const E=h[v],R=S.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function xp(i,e){function t(){let F=!1;const he=new pt;let j=null;const ce=new pt(0,0,0,0);return{setMask:function(pe){j!==pe&&!F&&(i.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){F=pe},setClear:function(pe,ie,Re,we,ct){ct===!0&&(pe*=we,ie*=we,Re*=we),he.set(pe,ie,Re,we),ce.equals(he)===!1&&(i.clearColor(pe,ie,Re,we),ce.copy(he))},reset:function(){F=!1,j=null,ce.set(-1,0,0,0)}}}function n(){let F=!1,he=!1,j=null,ce=null,pe=null;return{setReversed:function(ie){if(he!==ie){const Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),he=ie;const we=pe;pe=null,this.setClear(we)}},getReversed:function(){return he},setTest:function(ie){ie?te(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ie){j!==ie&&!F&&(i.depthMask(ie),j=ie)},setFunc:function(ie){if(he&&(ie=Al[ie]),ce!==ie){switch(ie){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ie}},setLocked:function(ie){F=ie},setClear:function(ie){pe!==ie&&(pe=ie,he&&(ie=1-ie),i.clearDepth(ie))},reset:function(){F=!1,j=null,ce=null,pe=null,he=!1}}}function s(){let F=!1,he=null,j=null,ce=null,pe=null,ie=null,Re=null,we=null,ct=null;return{setTest:function(Je){F||(Je?te(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Je){he!==Je&&!F&&(i.stencilMask(Je),he=Je)},setFunc:function(Je,Qt,an){(j!==Je||ce!==Qt||pe!==an)&&(i.stencilFunc(Je,Qt,an),j=Je,ce=Qt,pe=an)},setOp:function(Je,Qt,an){(ie!==Je||Re!==Qt||we!==an)&&(i.stencilOp(Je,Qt,an),ie=Je,Re=Qt,we=an)},setLocked:function(Je){F=Je},setClear:function(Je){ct!==Je&&(i.clearStencil(Je),ct=Je)},reset:function(){F=!1,he=null,j=null,ce=null,pe=null,ie=null,Re=null,we=null,ct=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,h=new WeakMap;let d={},u={},c={},p=new WeakMap,_=[],M=null,m=!1,f=null,T=null,C=null,y=null,b=null,S=null,P=null,v=new Ne(0,0,0),E=0,R=!1,L=null,D=null,O=null,I=null,G=null;const A=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=Y>=2);let $=null,ee={};const Me=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),qe=new pt().fromArray(Me),Oe=new pt().fromArray(me);function Ke(F,he,j,ce){const pe=new Uint8Array(4),ie=i.createTexture();i.bindTexture(F,ie),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<j;Re++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(he+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ie}const Z={};Z[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(3),Fe(!1),it(1),te(i.CULL_FACE),Xe(0);function te(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function xe(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function Ie(F,he){return c[F]!==he?(i.bindFramebuffer(F,he),c[F]=he,F===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=he),F===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ge(F,he){let j=_,ce=!1;if(F){j=p.get(he),j===void 0&&(j=[],p.set(he,j));const pe=F.textures;if(j.length!==pe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Re=pe.length;ie<Re;ie++)j[ie]=i.COLOR_ATTACHMENT0+ie;j.length=pe.length,ce=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ce=!0);ce&&i.drawBuffers(j)}function Be(F){return M!==F?(i.useProgram(F),M=F,!0):!1}const gt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};gt[103]=i.MIN,gt[104]=i.MAX;const ze={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(F,he,j,ce,pe,ie,Re,we,ct,Je){if(F===0){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),F!==5){if(F!==f||Je!==R){if((T!==100||b!==100)&&(i.blendEquation(i.FUNC_ADD),T=100,b=100),Je)switch(F){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",F);break}else switch(F){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",F);break}C=null,y=null,S=null,P=null,v.set(0,0,0),E=0,f=F,R=Je}return}pe=pe||he,ie=ie||j,Re=Re||ce,(he!==T||pe!==b)&&(i.blendEquationSeparate(gt[he],gt[pe]),T=he,b=pe),(j!==C||ce!==y||ie!==S||Re!==P)&&(i.blendFuncSeparate(ze[j],ze[ce],ze[ie],ze[Re]),C=j,y=ce,S=ie,P=Re),(we.equals(v)===!1||ct!==E)&&(i.blendColor(we.r,we.g,we.b,ct),v.copy(we),E=ct),f=F,R=!1}function nt(F,he){F.side===2?xe(i.CULL_FACE):te(i.CULL_FACE);let j=F.side===1;he&&(j=!j),Fe(j),F.blending===1&&F.transparent===!1?Xe(0):Xe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const ce=F.stencilWrite;o.setTest(ce),ce&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Lt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(F){L!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),L=F)}function it(F){F!==0?(te(i.CULL_FACE),F!==D&&(F===1?i.cullFace(i.BACK):F===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),D=F}function _t(F){F!==O&&(B&&i.lineWidth(F),O=F)}function Lt(F,he,j){F?(te(i.POLYGON_OFFSET_FILL),(I!==he||G!==j)&&(I=he,G=j,a.getReversed()&&(he=-he),i.polygonOffset(he,j))):xe(i.POLYGON_OFFSET_FILL)}function ht(F){F?te(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function mt(F){F===void 0&&(F=i.TEXTURE0+A-1),$!==F&&(i.activeTexture(F),$=F)}function k(F,he,j){j===void 0&&($===null?j=i.TEXTURE0+A-1:j=$);let ce=ee[j];ce===void 0&&(ce={type:void 0,texture:void 0},ee[j]=ce),(ce.type!==F||ce.texture!==he)&&($!==j&&(i.activeTexture(j),$=j),i.bindTexture(F,he||Z[F]),ce.type=F,ce.texture=he)}function ne(){const F=ee[$];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _e(){try{i.compressedTexImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function g(){try{i.texSubImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function N(){try{i.texSubImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function se(){try{i.texStorage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function ae(){try{i.texStorage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function Q(){try{i.texImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function oe(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function Te(F,he){u[F]!==he&&(i.pixelStorei(F,he),u[F]=he)}function le(F){qe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),qe.copy(F))}function re(F){Oe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Oe.copy(F))}function Ae(F,he){let j=h.get(he);j===void 0&&(j=new WeakMap,h.set(he,j));let ce=j.get(F);ce===void 0&&(ce=i.getUniformBlockIndex(he,F.name),j.set(F,ce))}function Pe(F,he){const ce=h.get(he).get(F);l.get(he)!==ce&&(i.uniformBlockBinding(he,ce,F.__bindingPointIndex),l.set(he,ce))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},$=null,ee={},c={},p=new WeakMap,_=[],M=null,m=!1,f=null,T=null,C=null,y=null,b=null,S=null,P=null,v=new Ne(0,0,0),E=0,R=!1,L=null,D=null,O=null,I=null,G=null,qe.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:xe,bindFramebuffer:Ie,drawBuffers:ge,useProgram:Be,setBlending:Xe,setMaterial:nt,setFlipSided:Fe,setCullFace:it,setLineWidth:_t,setPolygonOffset:Lt,setScissorTest:ht,activeTexture:mt,bindTexture:k,unbindTexture:ne,compressedTexImage2D:_e,compressedTexImage3D:w,texImage2D:J,texImage3D:Q,pixelStorei:Te,getParameter:oe,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:ae,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:le,viewport:re,reset:ke}}function yp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new De,d=new WeakMap,u=new Set;let c;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,g){return _?new OffscreenCanvas(w,g):Ki("canvas")}function m(w,g,N){let H=1;const K=_e(w);if((K.width>N||K.height>N)&&(H=N/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const se=Math.floor(H*K.width),ae=Math.floor(H*K.height);c===void 0&&(c=M(se,ae));const J=g?M(se,ae):c;return J.width=se,J.height=ae,J.getContext("2d").drawImage(w,0,0,se,ae),Le("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+se+"x"+ae+")."),J}else return"data"in w&&Le("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function f(w){return w.generateMipmaps}function T(w){i.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,g,N,H,K,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ae;H&&(ae=e.get("EXT_texture_norm16"),ae||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(N===i.FLOAT&&(J=i.R32F),N===i.HALF_FLOAT&&(J=i.R16F),N===i.UNSIGNED_BYTE&&(J=i.R8),N===i.UNSIGNED_SHORT&&ae&&(J=ae.R16_EXT),N===i.SHORT&&ae&&(J=ae.R16_SNORM_EXT)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.R8UI),N===i.UNSIGNED_SHORT&&(J=i.R16UI),N===i.UNSIGNED_INT&&(J=i.R32UI),N===i.BYTE&&(J=i.R8I),N===i.SHORT&&(J=i.R16I),N===i.INT&&(J=i.R32I)),g===i.RG&&(N===i.FLOAT&&(J=i.RG32F),N===i.HALF_FLOAT&&(J=i.RG16F),N===i.UNSIGNED_BYTE&&(J=i.RG8),N===i.UNSIGNED_SHORT&&ae&&(J=ae.RG16_EXT),N===i.SHORT&&ae&&(J=ae.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.RG8UI),N===i.UNSIGNED_SHORT&&(J=i.RG16UI),N===i.UNSIGNED_INT&&(J=i.RG32UI),N===i.BYTE&&(J=i.RG8I),N===i.SHORT&&(J=i.RG16I),N===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.RGB8UI),N===i.UNSIGNED_SHORT&&(J=i.RGB16UI),N===i.UNSIGNED_INT&&(J=i.RGB32UI),N===i.BYTE&&(J=i.RGB8I),N===i.SHORT&&(J=i.RGB16I),N===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),N===i.UNSIGNED_INT&&(J=i.RGBA32UI),N===i.BYTE&&(J=i.RGBA8I),N===i.SHORT&&(J=i.RGBA16I),N===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_SHORT&&ae&&(J=ae.RGB16_EXT),N===i.SHORT&&ae&&(J=ae.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){const Q=se?ks:Ye.getTransfer(K);N===i.FLOAT&&(J=i.RGBA32F),N===i.HALF_FLOAT&&(J=i.RGBA16F),N===i.UNSIGNED_BYTE&&(J=Q===et?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ae&&(J=ae.RGBA16_EXT),N===i.SHORT&&ae&&(J=ae.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(w,g){let N;return w?g===null||g===1014||g===1020?N=i.DEPTH24_STENCIL8:g===1015?N=i.DEPTH32F_STENCIL8:g===1012&&(N=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===1014||g===1020?N=i.DEPTH_COMPONENT24:g===1015?N=i.DEPTH_COMPONENT32F:g===1012&&(N=i.DEPTH_COMPONENT16),N}function S(w,g){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function P(w){const g=w.target;g.removeEventListener("dispose",P),E(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&u.delete(g)}function v(w){const g=w.target;g.removeEventListener("dispose",v),L(g)}function E(w){const g=n.get(w);if(g.__webglInit===void 0)return;const N=w.source,H=p.get(N);if(H){const K=H[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(w),Object.keys(H).length===0&&p.delete(N)}n.remove(w)}function R(w){const g=n.get(w);i.deleteTexture(g.__webglTexture);const N=w.source,H=p.get(N);delete H[g.__cacheKey],a.memory.textures--}function L(w){const g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let K=0;K<g.__webglFramebuffer[H].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[H][K]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=w.textures;for(let H=0,K=N.length;H<K;H++){const se=n.get(N[H]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(N[H])}n.remove(w)}let D=0;function O(){D=0}function I(){return D}function G(w){D=w}function A(){const w=D;return w>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function B(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function Y(w,g){const N=n.get(w);if(w.isVideoTexture&&k(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const H=w.image;if(H===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(N,w,g);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function X(w,g){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){xe(N,w,g);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function $(w,g){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){xe(N,w,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function ee(w,g){const N=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){Ie(N,w,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const Me={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},me={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},qe={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Oe(w,g){if(g.type===1015&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===1006||g.magFilter===1007||g.magFilter===1005||g.magFilter===1008||g.minFilter===1006||g.minFilter===1007||g.minFilter===1005||g.minFilter===1008)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Me[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Me[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Me[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,me[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,qe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===1003||g.minFilter!==1005&&g.minFilter!==1008||g.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(w,g){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",P));const H=g.source;let K=p.get(H);K===void 0&&(K={},p.set(H,K));const se=B(g);if(se!==w.__cacheKey){K[se]===void 0&&(K[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[se].usedTimes++;const ae=K[w.__cacheKey];ae!==void 0&&(K[w.__cacheKey].usedTimes--,ae.usedTimes===0&&R(g)),w.__cacheKey=se,w.__webglTexture=K[se].texture}return N}function Z(w,g,N){return Math.floor(Math.floor(w/N)/g)}function te(w,g,N,H){const se=w.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,H,g.data);else{se.sort((Te,le)=>Te.start-le.start);let ae=0;for(let Te=1;Te<se.length;Te++){const le=se[ae],re=se[Te],Ae=le.start+le.count,Pe=Z(re.start,g.width,4),ke=Z(le.start,g.width,4);re.start<=Ae+1&&Pe===ke&&Z(re.start+re.count-1,g.width,4)===Pe?le.count=Math.max(le.count,re.start+re.count-le.start):(++ae,se[ae]=re)}se.length=ae+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Te=0,le=se.length;Te<le;Te++){const re=se[Te],Ae=Math.floor(re.start/4),Pe=Math.ceil(re.count/4),ke=Ae%g.width,F=Math.floor(Ae/g.width),he=Pe,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,ke,F,he,j,N,H,g.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function xe(w,g,N){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const K=Ke(w,g),se=g.source;t.bindTexture(H,w.__webglTexture,i.TEXTURE0+N);const ae=n.get(se);if(se.version!==ae.__version||K===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const j=Ye.getPrimaries(Ye.workingColorSpace),ce=g.colorSpace===""?null:Ye.getPrimaries(g.colorSpace),pe=g.colorSpace===""||j===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,s.maxTextureSize);Q=ne(g,Q);const oe=r.convert(g.format,g.colorSpace),Te=r.convert(g.type);let le=y(g.internalFormat,oe,Te,g.normalized,g.colorSpace,g.isVideoTexture);Oe(H,g);let re;const Ae=g.mipmaps,Pe=g.isVideoTexture!==!0,ke=ae.__version===void 0||K===!0,F=se.dataReady,he=S(g,Q);if(g.isDepthTexture)le=b(g.format===1027,g.type),ke&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,le,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,le,Q.width,Q.height,0,oe,Te,null));else if(g.isDataTexture)if(Ae.length>0){Pe&&ke&&t.texStorage2D(i.TEXTURE_2D,he,le,Ae[0].width,Ae[0].height);for(let j=0,ce=Ae.length;j<ce;j++)re=Ae[j],Pe?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,re.width,re.height,oe,Te,re.data):t.texImage2D(i.TEXTURE_2D,j,le,re.width,re.height,0,oe,Te,re.data);g.generateMipmaps=!1}else Pe?(ke&&t.texStorage2D(i.TEXTURE_2D,he,le,Q.width,Q.height),F&&te(g,Q,oe,Te)):t.texImage2D(i.TEXTURE_2D,0,le,Q.width,Q.height,0,oe,Te,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,le,Ae[0].width,Ae[0].height,Q.depth);for(let j=0,ce=Ae.length;j<ce;j++)if(re=Ae[j],g.format!==1023)if(oe!==null)if(Pe){if(F)if(g.layerUpdates.size>0){const pe=Va(re.width,re.height,g.format,g.type);for(const ie of g.layerUpdates){const Re=re.data.subarray(ie*pe/re.data.BYTES_PER_ELEMENT,(ie+1)*pe/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ie,re.width,re.height,1,oe,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,re.width,re.height,Q.depth,oe,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,le,re.width,re.height,Q.depth,0,re.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,re.width,re.height,Q.depth,oe,Te,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,le,re.width,re.height,Q.depth,0,oe,Te,re.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Pe&&ke&&t.texStorage2D(i.TEXTURE_2D,he,le,Ae[0].width,Ae[0].height);for(let j=0,ce=Ae.length;j<ce;j++)re=Ae[j],g.format!==1023?oe!==null?Pe?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,re.width,re.height,oe,re.data):t.compressedTexImage2D(i.TEXTURE_2D,j,le,re.width,re.height,0,re.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,re.width,re.height,oe,Te,re.data):t.texImage2D(i.TEXTURE_2D,j,le,re.width,re.height,0,oe,Te,re.data)}else if(g.isDataArrayTexture)if(Pe){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,le,Q.width,Q.height,Q.depth),F)if(g.layerUpdates.size>0){const j=Va(Q.width,Q.height,g.format,g.type);for(const ce of g.layerUpdates){const pe=Q.data.subarray(ce*j/Q.data.BYTES_PER_ELEMENT,(ce+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,Q.width,Q.height,1,oe,Te,pe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,Q.width,Q.height,Q.depth,0,oe,Te,Q.data);else if(g.isData3DTexture)Pe?(ke&&t.texStorage3D(i.TEXTURE_3D,he,le,Q.width,Q.height,Q.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,le,Q.width,Q.height,Q.depth,0,oe,Te,Q.data);else if(g.isFramebufferTexture){if(ke)if(Pe)t.texStorage2D(i.TEXTURE_2D,he,le,Q.width,Q.height);else{let j=Q.width,ce=Q.height;for(let pe=0;pe<he;pe++)t.texImage2D(i.TEXTURE_2D,pe,le,j,ce,0,oe,Te,null),j>>=1,ce>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),u.add(g),j.onpaint=ce=>{const pe=ce.changedElements;for(const ie of u)pe.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const pe=i.RGBA,ie=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,ie,Re,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Pe&&ke){const j=_e(Ae[0]);t.texStorage2D(i.TEXTURE_2D,he,le,j.width,j.height)}for(let j=0,ce=Ae.length;j<ce;j++)re=Ae[j],Pe?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe,Te,re):t.texImage2D(i.TEXTURE_2D,j,le,oe,Te,re);g.generateMipmaps=!1}else if(Pe){if(ke){const j=_e(Q);t.texStorage2D(i.TEXTURE_2D,he,le,j.width,j.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,le,oe,Te,Q);f(g)&&T(H),ae.__version=se.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Ie(w,g,N){if(g.image.length!==6)return;const H=Ke(w,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);const se=n.get(K);if(K.version!==se.__version||H===!0){t.activeTexture(i.TEXTURE0+N);const ae=Ye.getPrimaries(Ye.workingColorSpace),J=g.colorSpace===""?null:Ye.getPrimaries(g.colorSpace),Q=g.colorSpace===""||ae===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const oe=g.isCompressedTexture||g.image[0].isCompressedTexture,Te=g.image[0]&&g.image[0].isDataTexture,le=[];for(let ie=0;ie<6;ie++)!oe&&!Te?le[ie]=m(g.image[ie],!0,s.maxCubemapSize):le[ie]=Te?g.image[ie].image:g.image[ie],le[ie]=ne(g,le[ie]);const re=le[0],Ae=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type),ke=y(g.internalFormat,Ae,Pe,g.normalized,g.colorSpace),F=g.isVideoTexture!==!0,he=se.__version===void 0||H===!0,j=K.dataReady;let ce=S(g,re);Oe(i.TEXTURE_CUBE_MAP,g);let pe;if(oe){F&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,ke,re.width,re.height);for(let ie=0;ie<6;ie++){pe=le[ie].mipmaps;for(let Re=0;Re<pe.length;Re++){const we=pe[Re];g.format!==1023?Ae!==null?F?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,ke,we.width,we.height,0,we.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,we.width,we.height,Ae,Pe,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,ke,we.width,we.height,0,Ae,Pe,we.data)}}}else{if(pe=g.mipmaps,F&&he){pe.length>0&&ce++;const ie=_e(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,ke,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Te){F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,le[ie].width,le[ie].height,Ae,Pe,le[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,le[ie].width,le[ie].height,0,Ae,Pe,le[ie].data);for(let Re=0;Re<pe.length;Re++){const ct=pe[Re].image[ie].image;F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,ct.width,ct.height,Ae,Pe,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,ke,ct.width,ct.height,0,Ae,Pe,ct.data)}}else{F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,Pe,le[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,Ae,Pe,le[ie]);for(let Re=0;Re<pe.length;Re++){const we=pe[Re];F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Ae,Pe,we.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,ke,Ae,Pe,we.image[ie])}}}f(g)&&T(i.TEXTURE_CUBE_MAP),se.__version=K.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ge(w,g,N,H,K,se){const ae=r.convert(N.format,N.colorSpace),J=r.convert(N.type),Q=y(N.internalFormat,ae,J,N.normalized,N.colorSpace),oe=n.get(g),Te=n.get(N);if(Te.__renderTarget=g,!oe.__hasExternalTextures){const le=Math.max(1,g.width>>se),re=Math.max(1,g.height>>se);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,se,Q,le,re,g.depth,0,ae,J,null):t.texImage2D(K,se,Q,le,re,0,ae,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,K,Te.__webglTexture,0,ht(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,K,Te.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(w,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){const H=g.depthTexture,K=H&&H.isDepthTexture?H.type:null,se=b(g.stencilBuffer,K),ae=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),se,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,w)}else{const H=g.textures;for(let K=0;K<H.length;K++){const se=H[K],ae=r.convert(se.format,se.colorSpace),J=r.convert(se.type),Q=y(se.internalFormat,ae,J,se.normalized,se.colorSpace);mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),Q,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(w,g,N){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,g.depthTexture);const oe=r.convert(g.depthTexture.format),Te=r.convert(g.depthTexture.type);let le;g.depthTexture.format===1026?le=i.DEPTH_COMPONENT24:g.depthTexture.format===1027&&(le=i.DEPTH24_STENCIL8);for(let re=0;re<6;re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,le,g.width,g.height,0,oe,Te,null)}}else Y(g.depthTexture,0);const se=K.__webglTexture,ae=ht(g),J=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Q=g.depthTexture.format===1027?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===1026)mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,se,0);else if(g.depthTexture.format===1027)mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(w){const g=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const H=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=H}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let H=0;H<6;H++)gt(g.__webglFramebuffer[H],w,H);else{const H=w.texture.mipmaps;H&&H.length>0?gt(g.__webglFramebuffer[0],w,0):gt(g.__webglFramebuffer,w,0)}else if(N){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Be(g.__webglDepthbuffer[H],w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,se)}}else{const H=w.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Be(g.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(w,g,N){const H=n.get(w);g!==void 0&&ge(H.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&ze(w)}function nt(w){const g=w.texture,N=n.get(w),H=n.get(g);w.addEventListener("dispose",v);const K=w.textures,se=w.isWebGLCubeRenderTarget===!0,ae=K.length>1;if(ae||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),se){N.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[J]=[];for(let Q=0;Q<g.mipmaps.length;Q++)N.__webglFramebuffer[J][Q]=i.createFramebuffer()}else N.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)N.__webglFramebuffer[J]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ae)for(let J=0,Q=K.length;J<Q;J++){const oe=n.get(K[J]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&mt(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const Q=K[J];N.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[J]);const oe=r.convert(Q.format,Q.colorSpace),Te=r.convert(Q.type),le=y(Q.internalFormat,oe,Te,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),re=ht(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,N.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(N.__webglFramebuffer[J][Q],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else ge(N.__webglFramebuffer[J],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(g)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let J=0,Q=K.length;J<Q;J++){const oe=K[J],Te=n.get(oe);let le=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Te.__webglTexture),Oe(le,oe),ge(N.__webglFramebuffer,w,oe,i.COLOR_ATTACHMENT0+J,le,0),f(oe)&&T(le)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,H.__webglTexture),Oe(J,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(N.__webglFramebuffer[Q],w,g,i.COLOR_ATTACHMENT0,J,Q);else ge(N.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,J,0);f(g)&&T(J),t.unbindTexture()}w.depthBuffer&&ze(w)}function Fe(w){const g=w.textures;for(let N=0,H=g.length;N<H;N++){const K=g[N];if(f(K)){const se=C(w),ae=n.get(K).__webglTexture;t.bindTexture(se,ae),T(se),t.unbindTexture()}}}const it=[],_t=[];function Lt(w){if(w.samples>0){if(mt(w)===!1){const g=w.textures,N=w.width,H=w.height;let K=i.COLOR_BUFFER_BIT;const se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(w),J=g.length>1;if(J)for(let oe=0;oe<g.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Q=w.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<g.length;oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Te=n.get(g[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,K,i.NEAREST),l===!0&&(it.length=0,_t.length=0,it.push(i.COLOR_ATTACHMENT0+oe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(it.push(se),_t.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let oe=0;oe<g.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Te=n.get(g[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ht(w){return Math.min(s.maxSamples,w.samples)}function mt(w){const g=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function k(w){const g=a.render.frame;d.get(w)!==g&&(d.set(w,g),w.update())}function ne(w,g){const N=w.colorSpace,H=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Fs&&N!==""&&(Ye.getTransfer(N)===et?(H!==1023||K!==1009)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",N)),g}function _e(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=A,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=ee,this.rebindTextures=Xe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Mp(i,e){function t(n,s=""){let r;const a=Ye.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return r.COMPRESSED_R11_EAC;if(n===37489)return r.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return r.COMPRESSED_RG11_EAC;if(n===37491)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===36283)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bp=`
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

}`;class wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xt({vertexShader:Sp,fragmentShader:bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Et(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tp extends qn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,u=null,c=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",m=new wp,f={},T=t.getContextAttributes();let C=null,y=null;const b=[],S=[],P=new De;let v=null,E=null;const R=new Vt;R.viewport=new pt;const L=new Vt;L.viewport=new pt;const D=[R,L],O=new Ih;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=b[Z];return te===void 0&&(te=new nr,b[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=b[Z];return te===void 0&&(te=new nr,b[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=b[Z];return te===void 0&&(te=new nr,b[Z]=te),te.getHandSpace()};function A(Z){const te=S.indexOf(Z.inputSource);if(te===-1)return;const xe=b[te];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,h||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<b.length;Z++){const te=S[Z];te!==null&&(S[Z]=null,b[Z].disconnect(te))}I=null,G=null,m.reset();for(const Z in f)delete f[Z];if(e.setRenderTarget(C),p=null,c=null,u=null,s=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),E!==null){const Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ie=null,ge=null;T.depth&&(ge=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=T.stencil?1027:1026,Ie=T.stencil?1020:1014);const Be={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),c=u.createProjectionLayer(Be),s.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),y=new Jt(c.textureWidth,c.textureHeight,{format:1023,type:1009,depthTexture:new Ji(c.textureWidth,c.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{const xe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Jt(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Z){for(let te=0;te<Z.removed.length;te++){const xe=Z.removed[te],Ie=S.indexOf(xe);Ie>=0&&(S[Ie]=null,b[Ie].disconnect(xe))}for(let te=0;te<Z.added.length;te++){const xe=Z.added[te];let Ie=S.indexOf(xe);if(Ie===-1){for(let Be=0;Be<b.length;Be++)if(Be>=S.length){S.push(xe),Ie=Be;break}else if(S[Be]===null){S[Be]=xe,Ie=Be;break}if(Ie===-1)break}const ge=b[Ie];ge&&ge.connect(xe)}}const X=new z,$=new z;function ee(Z,te,xe){X.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(xe.matrixWorld);const Ie=X.distanceTo($),ge=te.projectionMatrix.elements,Be=xe.projectionMatrix.elements,gt=ge[14]/(ge[10]-1),ze=ge[14]/(ge[10]+1),Xe=(ge[9]+1)/ge[5],nt=(ge[9]-1)/ge[5],Fe=(ge[8]-1)/ge[0],it=(Be[8]+1)/Be[0],_t=gt*Fe,Lt=gt*it,ht=Ie/(-Fe+it),mt=ht*-Fe;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(mt),Z.translateZ(ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ge[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const k=gt+ht,ne=ze+ht,_e=_t-mt,w=Lt+(Ie-mt),g=Xe*ze/ne*k,N=nt*ze/ne*k;Z.projectionMatrix.makePerspective(_e,w,g,N,k,ne),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Me(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,xe=Z.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),O.near=L.near=R.near=te,O.far=L.far=R.far=xe,(I!==O.near||G!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,G=O.far),O.layers.mask=Z.layers.mask|6,R.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const Ie=Z.parent,ge=O.cameras;Me(O,Ie);for(let Be=0;Be<ge.length;Be++)Me(ge[Be],Ie);ge.length===2?ee(O,R,L):O.projectionMatrix.copy(R.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),me(Z,O,Ie)};function me(Z,te,xe){xe===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$i*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(Z){l=Z,c!==null&&(c.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return f[Z]};let qe=null;function Oe(Z,te){if(d=te.getViewerPose(h||a),_=te,d!==null){const xe=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ie=!1;xe.length!==O.cameras.length&&(O.cameras.length=0,Ie=!0);for(let ze=0;ze<xe.length;ze++){const Xe=xe[ze];let nt=null;if(p!==null)nt=p.getViewport(Xe);else{const it=u.getViewSubImage(c,Xe);nt=it.viewport,ze===0&&(e.setRenderTargetTextures(y,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(y))}let Fe=D[ze];Fe===void 0&&(Fe=new Vt,Fe.layers.enable(ze),Fe.viewport=new pt,D[ze]=Fe),Fe.matrix.fromArray(Xe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Xe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(nt.x,nt.y,nt.width,nt.height),ze===0&&(O.matrix.copy(Fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ie===!0&&O.cameras.push(Fe)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const ze=u.getDepthInformation(xe[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,s.renderState)}if(ge&&ge.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let ze=0;ze<xe.length;ze++){const Xe=xe[ze].camera;if(Xe){let nt=f[Xe];nt||(nt=new Ho,f[Xe]=nt);const Fe=u.getCameraImage(Xe);nt.sourceTexture=Fe}}}}for(let xe=0;xe<b.length;xe++){const Ie=S[xe],ge=b[xe];Ie!==null&&ge!==void 0&&ge.update(Ie,te,h||a)}qe&&qe(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ke=new qo;Ke.setAnimationLoop(Oe),this.setAnimationLoop=function(Z){qe=Z},this.dispose=function(){}}}const Ep=new je,el=new Ue;el.set(-1,0,0,0,1,0,0,0,1);function Ap(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Wo(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,C,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),c(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,C):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===1&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===1&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),C=T.envMap,y=T.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(el),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=C*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rp(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const S=b.program;n.uniformBlockBinding(y,S)}function h(y,b){let S=s[y.id];S===void 0&&(m(y),S=d(y),s[y.id]=S,y.addEventListener("dispose",T));const P=b.program;n.updateUBOMapping(y,P);const v=e.render.frame;r[y.id]!==v&&(c(y),r[y.id]=v)}function d(y){const b=u();y.__bindingPointIndex=b;const S=i.createBuffer(),P=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){const b=s[y.id],S=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,E=S.length;v<E;v++){const R=S[v];if(Array.isArray(R))for(let L=0,D=R.length;L<D;L++)p(R[L],v,L,P);else p(R,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,b,S,P){if(M(y,b,S,P)===!0){const v=y.__offset,E=y.value;if(Array.isArray(E)){let R=0;for(let L=0;L<E.length;L++){const D=E[L],O=f(D);_(D,y.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function _(y,b,S){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,S)}function M(y,b,S,P){const v=y.value,E=b+"_"+S;if(P[E]===void 0)return typeof v=="number"||typeof v=="boolean"?P[E]=v:ArrayBuffer.isView(v)?P[E]=v.slice():P[E]=v.clone(),!0;{const R=P[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return P[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(y){const b=y.uniforms;let S=0;const P=16;for(let E=0,R=b.length;E<R;E++){const L=Array.isArray(b[E])?b[E]:[b[E]];for(let D=0,O=L.length;D<O;D++){const I=L[D],G=Array.isArray(I.value)?I.value:[I.value];for(let A=0,B=G.length;A<B;A++){const Y=G[A],X=f(Y),$=S%P,ee=$%X.boundary,Me=$+ee;S+=ee,Me!==0&&P-Me<X.storage&&(S+=P-Me),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=X.storage}}}const v=S%P;return v>0&&(S+=P-v),y.__size=S,y.__cache={},this}function f(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",y),b}function T(y){const b=y.target;b.removeEventListener("dispose",T);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function C(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:h,dispose:C}}const Cp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hn=null;function Pp(){return hn===null&&(hn=new Wr(Cp,16,16,1030,1016),hn.name="DFG_LUT",hn.minFilter=1006,hn.magFilter=1006,hn.wrapS=1001,hn.wrapT=1001,hn.generateMipmaps=!1,hn.needsUpdate=!0),hn}class Lp{constructor(e={}){const{canvas:t=Tl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:c=!1,outputBufferType:p=1009}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=p,m=new Set([1033,1031,1029]),f=new Set([1009,1014,1012,1020,1017,1018]),T=new Uint32Array(4),C=new Int32Array(4),y=new z;let b=null,S=null;const P=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,D=null,O=null,I=null,G=null;this._outputColorSpace=At;let A=0,B=0,Y=null,X=-1,$=null;const ee=new pt,Me=new pt;let me=null;const qe=new Ne(0);let Oe=0,Ke=t.width,Z=t.height,te=1,xe=null,Ie=null;const ge=new pt(0,0,Ke,Z),Be=new pt(0,0,Ke,Z);let gt=!1;const ze=new Vr;let Xe=!1,nt=!1;const Fe=new je,it=new z,_t=new pt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function mt(){return Y===null?te:1}let k=n;function ne(x,U){return t.getContext(x,U)}let _e,w,g,N,H,K,se,ae,J,Q,oe,Te,le,re,Ae,Pe,ke,F,he,j,ce,pe,ie;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Qt,!1),k===null){const U="webgl2";if(k=ne(U,x),k===null)throw ne(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(x){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Qt,!1),Ze("WebGLRenderer: "+x.message),x}function Re(){_e=new Cu(k),_e.init(),ce=new Mp(k,_e),w=new xu(k,_e,e,ce),g=new xp(k,_e),w.reversedDepthBuffer&&c&&g.buffers.depth.setReversed(!0),O=k.createFramebuffer(),I=k.createFramebuffer(),G=k.createFramebuffer(),N=new Iu(k),H=new rp,K=new yp(k,_e,g,H,w,ce,N),se=new Ru(R),ae=new Nh(k),pe=new _u(k,ae),J=new Pu(k,ae,N,pe),Q=new Nu(k,J,ae,pe,N),F=new Du(k,w,K),Ae=new yu(H),oe=new sp(R,se,_e,w,pe,Ae),Te=new Ap(R,H),le=new op,re=new fp(_e),ke=new gu(R,se,g,Q,_,l),Pe=new vp(R,Q,w),ie=new Rp(k,N,w,g),he=new vu(k,_e,N),j=new Lu(k,_e,N),N.programs=oe.programs,R.capabilities=w,R.extensions=_e,R.properties=H,R.renderLists=le,R.shadowMap=Pe,R.state=g,R.info=N}M!==1009&&(E=new Fu(M,t.width,t.height,o,s,r));const we=new Tp(R,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const x=_e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=_e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(x){x!==void 0&&(te=x,this.setSize(Ke,Z,!1))},this.getSize=function(x){return x.set(Ke,Z)},this.setSize=function(x,U,q=!0){if(we.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=x,Z=U,t.width=Math.floor(x*te),t.height=Math.floor(U*te),q===!0&&(t.style.width=x+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Ke*te,Z*te).floor()},this.setDrawingBufferSize=function(x,U,q){Ke=x,Z=U,te=q,t.width=Math.floor(x*q),t.height=Math.floor(U*q),this.setViewport(0,0,x,U)},this.setEffects=function(x){if(M===1009){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let U=0;U<x.length;U++)if(x[U].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ee)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,U,q,W){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,U,q,W),g.viewport(ee.copy(ge).multiplyScalar(te).round())},this.getScissor=function(x){return x.copy(Be)},this.setScissor=function(x,U,q,W){x.isVector4?Be.set(x.x,x.y,x.z,x.w):Be.set(x,U,q,W),g.scissor(Me.copy(Be).multiplyScalar(te).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(x){g.setScissorTest(gt=x)},this.setOpaqueSort=function(x){xe=x},this.setTransparentSort=function(x){Ie=x},this.getClearColor=function(x){return x.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,q=!0){let W=0;if(x){let V=!1;if(Y!==null){const fe=Y.texture.format;V=m.has(fe)}if(V){const fe=Y.texture.type,ye=f.has(fe),ue=ke.getClearColor(),Se=ke.getClearAlpha(),Ee=ue.r,Ge=ue.g,We=ue.b;ye?(T[0]=Ee,T[1]=Ge,T[2]=We,T[3]=Se,k.clearBufferuiv(k.COLOR,0,T)):(C[0]=Ee,C[1]=Ge,C[2]=We,C[3]=Se,k.clearBufferiv(k.COLOR,0,C))}else W|=k.COLOR_BUFFER_BIT}U&&(W|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),D=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Qt,!1),ke.dispose(),le.dispose(),re.dispose(),H.dispose(),se.dispose(),Q.dispose(),pe.dispose(),ie.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",ia),we.removeEventListener("sessionend",sa),Bn.stop()};function ct(x){x.preventDefault(),Bs("WebGLRenderer: Context Lost."),L=!0}function Je(){Bs("WebGLRenderer: Context Restored."),L=!1;const x=N.autoReset,U=Pe.enabled,q=Pe.autoUpdate,W=Pe.needsUpdate,V=Pe.type;Re(),N.autoReset=x,Pe.enabled=U,Pe.autoUpdate=q,Pe.needsUpdate=W,Pe.type=V}function Qt(x){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function an(x){const U=x.target;U.removeEventListener("dispose",an),_l(U)}function _l(x){vl(x),H.remove(x)}function vl(x){const U=H.get(x).programs;U!==void 0&&(U.forEach(function(q){oe.releaseProgram(q)}),x.isShaderMaterial&&oe.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,q,W,V,fe){U===null&&(U=Lt);const ye=V.isMesh&&V.matrixWorld.determinantAffine()<0,ue=Ml(x,U,q,W,V);g.setMaterial(W,ye);let Se=q.index,Ee=1;if(W.wireframe===!0){if(Se=J.getWireframeAttribute(q),Se===void 0)return;Ee=2}const Ge=q.drawRange,We=q.attributes.position;let be=Ge.start*Ee,Qe=(Ge.start+Ge.count)*Ee;fe!==null&&(be=Math.max(be,fe.start*Ee),Qe=Math.min(Qe,(fe.start+fe.count)*Ee)),Se!==null?(be=Math.max(be,0),Qe=Math.min(Qe,Se.count)):We!=null&&(be=Math.max(be,0),Qe=Math.min(Qe,We.count));const xt=Qe-be;if(xt<0||xt===1/0)return;pe.setup(V,W,ue,q,Se);let ut,at=he;if(Se!==null&&(ut=ae.get(Se),at=j,at.setIndex(ut)),V.isMesh)W.wireframe===!0?(g.setLineWidth(W.wireframeLinewidth*mt()),at.setMode(k.LINES)):at.setMode(k.TRIANGLES);else if(V.isLine){let It=W.linewidth;It===void 0&&(It=1),g.setLineWidth(It*mt()),V.isLineSegments?at.setMode(k.LINES):V.isLineLoop?at.setMode(k.LINE_LOOP):at.setMode(k.LINE_STRIP)}else V.isPoints?at.setMode(k.POINTS):V.isSprite&&at.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const It=V._multiDrawStarts,ve=V._multiDrawCounts,Bt=V._multiDrawCount,$e=Se?ae.get(Se).bytesPerElement:1,Yt=H.get(W).currentProgram.getUniforms();for(let on=0;on<Bt;on++)Yt.setValue(k,"_gl_DrawID",on),at.render(It[on]/$e,ve[on])}else if(V.isInstancedMesh)at.renderInstances(be,xt,V.count);else if(q.isInstancedBufferGeometry){const It=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ve=Math.min(q.instanceCount,It);at.renderInstances(be,xt,ve)}else at.render(be,xt)};function na(x,U,q,W){D!==null&&x.isNodeMaterial&&D.setObject(W,x),Xe===!0&&Ae.setState(x,q,!1),x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,es(x,U,W),x.side=0,x.needsUpdate=!0,es(x,U,W),x.side=2):es(x,U,W)}this.compile=function(x,U,q=null){q===null&&(q=x),D!==null&&D.renderStart(x,U,q),S=re.get(q),S.init(U),v.push(S),q.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),x!==q&&x.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),nt=this.localClippingEnabled,Xe=Ae.init(this.clippingPlanes,nt),Xe===!0&&Ae.setGlobalState(this.clippingPlanes,U),D!==null&&Pe.render(S.state.shadowsArray,q,U);const W=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const ue=fe[ye];na(ue,q,U,V),W.add(ue)}else na(fe,q,U,V),W.add(fe)}),S=v.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(x,U,q=null){const W=this.compile(x,U,q);return new Promise(V=>{function fe(){if(W.forEach(function(ye){const Se=H.get(ye).currentProgram;(Se===void 0||Se.isReady())&&W.delete(ye)}),W.size===0){V(x);return}setTimeout(fe,10)}_e.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let $s=null;function xl(x){$s&&$s(x)}function ia(){Bn.stop()}function sa(){Bn.start()}const Bn=new qo;Bn.setAnimationLoop(xl),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(x){$s=x,we.setAnimationLoop(x),x===null?Bn.stop():Bn.start()},we.addEventListener("sessionstart",ia),we.addEventListener("sessionend",sa),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(x,U);const q=we.enabled===!0&&we.isPresenting===!0,W=E!==null&&(Y===null||q)&&E.begin(R,Y);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(U),U=we.getCamera()),x.isScene===!0&&x.onBeforeRender(R,x,U,Y),S=re.get(x,v.length),S.init(U),S.state.textureUnits=K.getTextureUnits(),v.push(S),Fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(Fe,2e3,U.reversedDepth),nt=this.localClippingEnabled,Xe=Ae.init(this.clippingPlanes,nt),b=le.get(x,P.length),b.init(),P.push(b),we.enabled===!0&&we.isPresenting===!0){const ye=R.xr.getDepthSensingMesh();ye!==null&&Zs(ye,U,-1/0,R.sortObjects)}Zs(x,U,0,R.sortObjects),b.finish(),D!==null&&D.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(xe,Ie),ht=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ht&&ke.addToRenderList(b,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Ae.beginShadows();const V=S.state.shadowsArray;if(Pe.render(V,x,U),Xe===!0&&Ae.endShadows(),(W&&E.hasRenderPass())===!1){const ye=b.opaque,ue=b.transmissive;if(S.setupLights(),U.isArrayCamera){const Se=U.cameras;if(ue.length>0)for(let Ee=0,Ge=Se.length;Ee<Ge;Ee++){const We=Se[Ee];aa(ye,ue,x,We)}ht&&ke.render(x);for(let Ee=0,Ge=Se.length;Ee<Ge;Ee++){const We=Se[Ee];ra(b,x,We,We.viewport)}}else ue.length>0&&aa(ye,ue,x,U),ht&&ke.render(x),ra(b,x,U)}Y!==null&&B===0&&(K.updateMultisampleRenderTarget(Y),K.updateRenderTargetMipmap(Y)),W&&E.end(R),x.isScene===!0&&x.onAfterRender(R,x,U),pe.resetDefaultState(),X=-1,$=null,v.pop(),v.length>0?(S=v[v.length-1],K.setTextureUnits(S.state.textureUnits),Xe===!0&&Ae.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,D!==null&&D.renderEnd()};function Zs(x,U,q,W){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLightProbeGrid)S.pushLightProbeGrid(x);else if(x.isLight)S.pushLight(x),x.castShadow&&S.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(ze)){W&&_t.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Fe);const ye=Q.update(x),ue=x.material;ue.visible&&b.push(x,ye,ue,q,_t.z,null,U)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(ze))){const ye=Q.update(x),ue=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),_t.copy(x.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),_t.copy(ye.boundingSphere.center)),_t.applyMatrix4(x.matrixWorld).applyMatrix4(Fe)),Array.isArray(ue)){const Se=ye.groups;for(let Ee=0,Ge=Se.length;Ee<Ge;Ee++){const We=Se[Ee],be=ue[We.materialIndex];be&&be.visible&&b.push(x,ye,be,q,_t.z,We,U)}}else ue.visible&&b.push(x,ye,ue,q,_t.z,null,U)}}const fe=x.children;for(let ye=0,ue=fe.length;ye<ue;ye++)Zs(fe[ye],U,q,W)}function ra(x,U,q,W){const{opaque:V,transmissive:fe,transparent:ye}=x;S.setupLightsView(q),Xe===!0&&Ae.setGlobalState(R.clippingPlanes,q),W&&g.viewport(ee.copy(W)),V.length>0&&ji(V,U,q),fe.length>0&&ji(fe,U,q),ye.length>0&&ji(ye,U,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function aa(x,U,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[W.id]===void 0){const be=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[W.id]=new Jt(1,1,{generateMipmaps:!0,type:be?1016:1009,minFilter:1008,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const fe=S.state.transmissionRenderTarget[W.id],ye=W.viewport||ee;fe.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);const ue=R.getRenderTarget(),Se=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(fe),R.getClearColor(qe),Oe=R.getClearAlpha(),Oe<1&&R.setClearColor(16777215,.5),R.clear(),ht&&ke.render(q);const Ge=R.toneMapping;R.toneMapping=0;const We=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),S.setupLightsView(W),Xe===!0&&Ae.setGlobalState(R.clippingPlanes,W),ji(x,q,W),K.updateMultisampleRenderTarget(fe),K.updateRenderTargetMipmap(fe),_e.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Qe=0,xt=U.length;Qe<xt;Qe++){const ut=U[Qe],{object:at,geometry:It,material:ve,group:Bt}=ut;if(ve.side===2&&at.layers.test(W.layers)){const $e=ve.side;ve.side=1,ve.needsUpdate=!0,oa(at,q,W,It,ve,Bt),ve.side=$e,ve.needsUpdate=!0,be=!0}}be===!0&&(K.updateMultisampleRenderTarget(fe),K.updateRenderTargetMipmap(fe))}R.setRenderTarget(ue,Se,Ee),R.setClearColor(qe,Oe),We!==void 0&&(W.viewport=We),R.toneMapping=Ge}function ji(x,U,q){const W=U.isScene===!0?U.overrideMaterial:null;for(let V=0,fe=x.length;V<fe;V++){const ye=x[V],{object:ue,geometry:Se,group:Ee}=ye;let Ge=ye.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),ue.layers.test(q.layers)&&oa(ue,U,q,Se,Ge,Ee)}}function oa(x,U,q,W,V,fe){D!==null&&V.isNodeMaterial&&D.setObject(x,V),x.onBeforeRender(R,U,q,W,V,fe),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(R,U,q,W,x,fe),V.transparent===!0&&V.side===2&&V.forceSinglePass===!1?(V.side=1,V.needsUpdate=!0,R.renderBufferDirect(q,U,W,V,x,fe),V.side=0,V.needsUpdate=!0,R.renderBufferDirect(q,U,W,V,x,fe),V.side=2):R.renderBufferDirect(q,U,W,V,x,fe),x.onAfterRender(R,U,q,W,V,fe)}function es(x,U,q){U.isScene!==!0&&(U=Lt);const W=H.get(x),V=S.state.lights,fe=S.state.shadowsArray,ye=V.state.version,ue=oe.getParameters(x,V.state,fe,U,q,S.state.lightProbeGridArray),Se=oe.getProgramCacheKey(ue);let Ee=W.programs;W.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const Ge=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;W.envMap=se.get(x.envMap||W.environment,Ge),W.envMapRotation=W.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",an),Ee=new Map,W.programs=Ee);let We=Ee.get(Se);if(We!==void 0){if(W.currentProgram===We&&W.lightsStateVersion===ye)return ha(x,ue),We}else ue.uniforms=oe.getUniforms(x),D!==null&&x.isNodeMaterial&&D.build(x,q,ue),x.onBeforeCompile(ue,R),We=oe.acquireProgram(ue,Se),Ee.set(Se,We),W.uniforms=ue.uniforms;const be=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=Ae.uniform),ha(x,ue),W.needsLights=bl(x),W.lightsStateVersion=ye,W.needsLights&&(be.ambientLightColor.value=V.state.ambient,be.lightProbe.value=V.state.probe,be.sunLights.value=V.state.sun,be.sunLightShadows.value=V.state.sunShadow,be.directionalLights.value=V.state.directional,be.directionalLightShadows.value=V.state.directionalShadow,be.spotLights.value=V.state.spot,be.spotLightShadows.value=V.state.spotShadow,be.rectAreaLights.value=V.state.rectArea,be.ltc_1.value=V.state.rectAreaLTC1,be.ltc_2.value=V.state.rectAreaLTC2,be.pointLights.value=V.state.point,be.pointLightShadows.value=V.state.pointShadow,be.hemisphereLights.value=V.state.hemi,be.sunShadowMatrix.value=V.state.sunShadowMatrix,be.sunShadowCascade.value=V.state.sunShadowCascade,be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,be.spotLightMatrix.value=V.state.spotLightMatrix,be.spotLightMap.value=V.state.spotLightMap,be.pointShadowMatrix.value=V.state.pointShadowMatrix),W.lightProbeGrid=S.state.lightProbeGridArray.length>0,W.currentProgram=We,W.uniformsList=null,We}function la(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Ns.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function ha(x,U){const q=H.get(x);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function yl(x,U){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let q=0,W=x.length;q<W;q++){const V=x[q];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Ml(x,U,q,W,V){U.isScene!==!0&&(U=Lt),K.resetTextureUnits();const fe=U.fog,ye=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,ue=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ye.workingColorSpace,Se=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ee=se.get(W.envMap||ye,Se),Ge=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,xt=!!q.morphAttributes.color;let ut=0;W.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ut=R.toneMapping);const at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,It=at!==void 0?at.length:0,ve=H.get(W),Bt=S.state.lights;if(Xe===!0&&(nt===!0||x!==$)){const dt=x===$&&W.id===X;Ae.setState(W,x,dt)}let $e=!1;W.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Bt.state.version||ve.outputColorSpace!==ue||V.isBatchedMesh&&ve.batching===!1||!V.isBatchedMesh&&ve.batching===!0||V.isBatchedMesh&&ve.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ve.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ve.instancing===!1||!V.isInstancedMesh&&ve.instancing===!0||V.isSkinnedMesh&&ve.skinning===!1||!V.isSkinnedMesh&&ve.skinning===!0||V.isInstancedMesh&&ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ve.instancingMorph===!1&&V.morphTexture!==null||ve.envMap!==Ee||W.fog===!0&&ve.fog!==fe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ae.numPlanes||ve.numIntersection!==Ae.numIntersection)||ve.vertexAlphas!==Ge||ve.vertexTangents!==We||ve.morphTargets!==be||ve.morphNormals!==Qe||ve.morphColors!==xt||ve.toneMapping!==ut||ve.morphTargetsCount!==It||!!ve.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,ve.__version=W.version);let Yt=ve.currentProgram;$e===!0&&(Yt=es(W,U,V),D&&W.isNodeMaterial&&D.onUpdateProgram(W,Yt,ve));let on=!1,An=!1,Zn=!1;const st=Yt.getUniforms(),vt=ve.uniforms;if(g.useProgram(Yt.program)&&(on=!0,An=!0,Zn=!0),W.id!==X&&(X=W.id,An=!0),ve.needsLights){const dt=yl(S.state.lightProbeGridArray,V);ve.lightProbeGrid!==dt&&(ve.lightProbeGrid=dt,An=!0)}if(on||$!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),st.setValue(k,"projectionMatrix",x.projectionMatrix),st.setValue(k,"viewMatrix",x.matrixWorldInverse);const Cn=st.map.cameraPosition;Cn!==void 0&&Cn.setValue(k,it.setFromMatrixPosition(x.matrixWorld)),w.logarithmicDepthBuffer&&st.setValue(k,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&st.setValue(k,"isOrthographic",x.isOrthographicCamera===!0),$!==x&&($=x,An=!0,Zn=!0)}if(ve.needsLights&&(Bt.state.sunShadowMap.length>0&&st.setValue(k,"sunShadowMap",Bt.state.sunShadowMap,K),Bt.state.directionalShadowMap.length>0&&st.setValue(k,"directionalShadowMap",Bt.state.directionalShadowMap,K),Bt.state.spotShadowMap.length>0&&st.setValue(k,"spotShadowMap",Bt.state.spotShadowMap,K),Bt.state.pointShadowMap.length>0&&st.setValue(k,"pointShadowMap",Bt.state.pointShadowMap,K)),V.isSkinnedMesh){st.setOptional(k,V,"bindMatrix"),st.setOptional(k,V,"bindMatrixInverse");const dt=V.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),st.setValue(k,"boneTexture",dt.boneTexture,K))}V.isBatchedMesh&&(st.setOptional(k,V,"batchingTexture"),st.setValue(k,"batchingTexture",V._matricesTexture,K),st.setOptional(k,V,"batchingIdTexture"),st.setValue(k,"batchingIdTexture",V._indirectTexture,K),st.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&st.setValue(k,"batchingColorTexture",V._colorsTexture,K));const Rn=q.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&F.update(V,q,Yt),(An||ve.receiveShadow!==V.receiveShadow)&&(ve.receiveShadow=V.receiveShadow,st.setValue(k,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(vt.envMapIntensity.value=U.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=Pp()),An){if(st.setValue(k,"toneMappingExposure",R.toneMappingExposure),ve.needsLights&&Sl(vt,Zn),fe&&W.fog===!0&&Te.refreshFogUniforms(vt,fe),Te.refreshMaterialUniforms(vt,W,te,Z,S.state.transmissionRenderTarget[x.id]),ve.needsLights&&ve.lightProbeGrid){const dt=ve.lightProbeGrid;vt.probesSH.value=dt.texture,vt.probesMin.value.copy(dt.boundingBox.min),vt.probesMax.value.copy(dt.boundingBox.max),vt.probesResolution.value.copy(dt.resolution)}Ns.upload(k,la(ve),vt,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ns.upload(k,la(ve),vt,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&st.setValue(k,"center",V.center),st.setValue(k,"modelViewMatrix",V.modelViewMatrix),st.setValue(k,"normalMatrix",V.normalMatrix),st.setValue(k,"modelMatrix",V.matrixWorld),W.uniformsGroups!==void 0){const dt=W.uniformsGroups;for(let Cn=0,Jn=dt.length;Cn<Jn;Cn++){const da=dt[Cn];ie.update(da,Yt),ie.bind(da,Yt)}}return Yt}function Sl(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.sunLights.needsUpdate=U,x.sunLightShadows.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function bl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(x,U,q){const W=H.get(x);W.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(x.texture).__webglTexture=U,H.get(x.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const q=H.get(x);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(x,U=0,q=0){Y=x,A=U,B=q;let W=null,V=!1,fe=!1;if(x){const ue=H.get(x);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(k.FRAMEBUFFER,ue.__webglFramebuffer),ee.copy(x.viewport),Me.copy(x.scissor),me=x.scissorTest,g.viewport(ee),g.scissor(Me),g.setScissorTest(me),X=-1;return}else if(ue.__webglFramebuffer===void 0)K.setupRenderTarget(x);else if(ue.__hasExternalTextures)K.rebindTextures(x,H.get(x.texture).__webglTexture,H.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ge=x.depthTexture;if(ue.__boundDepthTexture!==Ge){if(Ge!==null&&H.has(Ge)&&(x.width!==Ge.image.width||x.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(x)}}const Se=x.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(fe=!0);const Ee=H.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?W=Ee[U][q]:W=Ee[U],V=!0):x.samples>0&&K.useMultisampledRTT(x)===!1?W=H.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?W=Ee[q]:W=Ee,ee.copy(x.viewport),Me.copy(x.scissor),me=x.scissorTest}else ee.copy(ge).multiplyScalar(te).floor(),Me.copy(Be).multiplyScalar(te).floor(),me=gt;if(q!==0&&(W=O),g.bindFramebuffer(k.FRAMEBUFFER,W)&&g.drawBuffers(x,W),g.viewport(ee),g.scissor(Me),g.setScissorTest(me),V){const ue=H.get(x.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,q)}else if(fe){const ue=U;for(let Se=0;Se<x.textures.length;Se++){const Ee=H.get(x.textures[Se]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Se,Ee.__webglTexture,q,ue)}}else if(x!==null&&q!==0){const ue=H.get(x.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ue.__webglTexture,q)}X=-1};function ca(x){const U=H.get(x);return(U.__readFormat!==x.format||U.__readType!==x.type)&&(U.__readFormat=x.format,U.__readType=x.type,U.__formatReadable=w.textureFormatReadable(x.format),U.__typeReadable=w.textureTypeReadable(x.type)),U}this.readRenderTargetPixels=function(x,U,q,W,V,fe,ye,ue=0){if(!(x&&x.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){g.bindFramebuffer(k.FRAMEBUFFER,Se);try{const Ee=x.textures[ue],Ge=Ee.format,We=Ee.type;x.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ue);const be=ca(Ee);if(be.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-W&&q>=0&&q<=x.height-V&&k.readPixels(U,q,W,V,ce.convert(Ge),ce.convert(We),fe)}finally{const Ee=Y!==null?H.get(Y).__webglFramebuffer:null;g.bindFramebuffer(k.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,U,q,W,V,fe,ye,ue=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se)if(U>=0&&U<=x.width-W&&q>=0&&q<=x.height-V){g.bindFramebuffer(k.FRAMEBUFFER,Se);const Ee=x.textures[ue],Ge=Ee.format,We=Ee.type;x.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ue);const be=ca(Ee);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Qe),k.bufferData(k.PIXEL_PACK_BUFFER,fe.byteLength,k.STREAM_READ),k.readPixels(U,q,W,V,ce.convert(Ge),ce.convert(We),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const xt=Y!==null?H.get(Y).__webglFramebuffer:null;g.bindFramebuffer(k.FRAMEBUFFER,xt);const ut=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await El(k,ut,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Qe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,fe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Qe),k.deleteSync(ut),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,q=0){const W=Math.pow(2,-q),V=Math.floor(x.image.width*W),fe=Math.floor(x.image.height*W),ye=U!==null?U.x:0,ue=U!==null?U.y:0;K.setTexture2D(x,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,ye,ue,V,fe),g.unbindTexture()},this.copyTextureToTexture=function(x,U,q=null,W=null,V=0,fe=0){let ye,ue,Se,Ee,Ge,We,be,Qe,xt;const ut=x.isCompressedTexture?x.mipmaps[fe]:x.image;if(q!==null)ye=q.max.x-q.min.x,ue=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,Ee=q.min.x,Ge=q.min.y,We=q.isBox3?q.min.z:0;else{const vt=Math.pow(2,-V);ye=Math.floor(ut.width*vt),ue=Math.floor(ut.height*vt),x.isDataArrayTexture?Se=ut.depth:x.isData3DTexture?Se=Math.floor(ut.depth*vt):Se=1,Ee=0,Ge=0,We=0}W!==null?(be=W.x,Qe=W.y,xt=W.z):(be=0,Qe=0,xt=0);const at=ce.convert(U.format),It=ce.convert(U.type);let ve;U.isData3DTexture?(K.setTexture3D(U,0),ve=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),ve=k.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),ve=k.TEXTURE_2D),g.activeTexture(k.TEXTURE0),g.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const Bt=g.getParameter(k.UNPACK_ROW_LENGTH),$e=g.getParameter(k.UNPACK_IMAGE_HEIGHT),Yt=g.getParameter(k.UNPACK_SKIP_PIXELS),on=g.getParameter(k.UNPACK_SKIP_ROWS),An=g.getParameter(k.UNPACK_SKIP_IMAGES);g.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),g.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),g.pixelStorei(k.UNPACK_SKIP_PIXELS,Ee),g.pixelStorei(k.UNPACK_SKIP_ROWS,Ge),g.pixelStorei(k.UNPACK_SKIP_IMAGES,We);const Zn=x.isDataArrayTexture||x.isData3DTexture,st=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const vt=H.get(x),Rn=H.get(U),dt=H.get(vt.__renderTarget),Cn=H.get(Rn.__renderTarget);g.bindFramebuffer(k.READ_FRAMEBUFFER,dt.__webglFramebuffer),g.bindFramebuffer(k.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Jn=0;Jn<Se;Jn++)Zn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,H.get(x).__webglTexture,V,We+Jn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,H.get(U).__webglTexture,fe,xt+Jn)),k.blitFramebuffer(Ee,Ge,ye,ue,be,Qe,ye,ue,k.DEPTH_BUFFER_BIT,k.NEAREST);g.bindFramebuffer(k.READ_FRAMEBUFFER,null),g.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||H.has(x)){const vt=H.get(x),Rn=H.get(U);g.bindFramebuffer(k.READ_FRAMEBUFFER,I),g.bindFramebuffer(k.DRAW_FRAMEBUFFER,G);for(let dt=0;dt<Se;dt++)Zn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,vt.__webglTexture,V,We+dt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,vt.__webglTexture,V),st?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rn.__webglTexture,fe,xt+dt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rn.__webglTexture,fe),V!==0?k.blitFramebuffer(Ee,Ge,ye,ue,be,Qe,ye,ue,k.COLOR_BUFFER_BIT,k.NEAREST):st?k.copyTexSubImage3D(ve,fe,be,Qe,xt+dt,Ee,Ge,ye,ue):k.copyTexSubImage2D(ve,fe,be,Qe,Ee,Ge,ye,ue);g.bindFramebuffer(k.READ_FRAMEBUFFER,null),g.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else st?x.isDataTexture||x.isData3DTexture?k.texSubImage3D(ve,fe,be,Qe,xt,ye,ue,Se,at,It,ut.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(ve,fe,be,Qe,xt,ye,ue,Se,at,ut.data):k.texSubImage3D(ve,fe,be,Qe,xt,ye,ue,Se,at,It,ut):x.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,fe,be,Qe,ye,ue,at,It,ut.data):x.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,fe,be,Qe,ut.width,ut.height,at,ut.data):k.texSubImage2D(k.TEXTURE_2D,fe,be,Qe,ye,ue,at,It,ut);g.pixelStorei(k.UNPACK_ROW_LENGTH,Bt),g.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$e),g.pixelStorei(k.UNPACK_SKIP_PIXELS,Yt),g.pixelStorei(k.UNPACK_SKIP_ROWS,on),g.pixelStorei(k.UNPACK_SKIP_IMAGES,An),fe===0&&U.generateMipmaps&&k.generateMipmap(ve),g.unbindTexture()},this.initRenderTarget=function(x){H.get(x).__webglFramebuffer===void 0&&K.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?K.setTextureCube(x,0):x.isData3DTexture?K.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?K.setTexture2DArray(x,0):K.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){A=0,B=0,Y=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}function Ip(i=window.location.search){const e=new URLSearchParams(i);return{remnant:e.get("remnant")?.trim()||"",mock:e.get("mock")==="1"}}const Dp=Ip();function Np(){if(!("serviceWorker"in navigator))return;const i=document.createElement("div");i.className="offline-status",i.textContent="Preparing offline play...";const e=document.createElement("button");e.className="portable-button install-app",e.textContent="Install Amulith",e.hidden=!0,document.body.append(i,e);let t=null;window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),t=n,e.hidden=!1}),e.onclick=async()=>{t&&(await t.prompt(),t=null,e.hidden=!0)},navigator.serviceWorker.register("./sw.js").then(()=>navigator.serviceWorker.ready).then(()=>{i.textContent="Offline play ready"}).catch(()=>{i.textContent="Play online, or use the desktop download for offline play."})}class Up{listeners=new Map;on(e,t){let n=this.listeners.get(e);return n||this.listeners.set(e,n=new Set),n.add(t),()=>{n.delete(t)}}emit(e,t){for(const n of[...this.listeners.get(e)??[]])n(t)}}const Sn=new Up,Rs=1/60,Fp=.1;function kp(i){let e,t=0,n=0;const s=a=>{const o=e===void 0?0:Math.min(Fp,Math.max(0,(a-e)/1e3));for(e=a,i.frame(),t+=o;t>=Rs;)i.update(Rs),t-=Rs;i.render(t/Rs,o),n=requestAnimationFrame(s)},r=()=>{e=void 0,t=0};return document.addEventListener("visibilitychange",r),n=requestAnimationFrame(s),()=>{cancelAnimationFrame(n),document.removeEventListener("visibilitychange",r)}}const xi={pulse:{keys:["Space"],button:0},dash:{keys:["ShiftLeft","ShiftRight"],button:1},interact:{keys:["KeyF"],button:2},ask:{keys:["KeyE"],button:3},pause:{keys:["Escape"],button:9},judge:{keys:["KeyJ"],button:8},bloom:{keys:["Digit1","Numpad1"],button:-1},blight:{keys:["Digit2","Numpad2"],button:-1},empty:{keys:["Digit0","Numpad0"],button:-1}},Bp=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight","KeyQ","KeyR",...Object.values(xi).flatMap(i=>i.keys)]);class Op{actions={move:{x:0,y:0},pulse:!1,dash:!1,interact:!1,ask:!1,pause:!1,judge:!1,bloom:!1,blight:!1,empty:!1,lanternDelta:0};keys=new Set;edges=new Set;pending=new Set;focused=!0;keyDown=e=>{if(!(!Bp.has(e.code)||e.ctrlKey||e.metaKey||e.altKey)){if(e.preventDefault(),!e.repeat&&!this.keys.has(e.code))for(const t of Object.keys(xi))xi[t].keys.includes(e.code)&&this.pending.add(t);this.keys.add(e.code)}};keyUp=e=>{this.keys.delete(e.code)};blur=()=>{this.focused=!1,this.reset()};focus=()=>{this.focused=!0};reset=()=>{this.keys.clear(),this.edges.clear(),this.pending.clear(),this.actions.move.x=this.actions.move.y=this.actions.lanternDelta=0;for(const e of Object.keys(xi))this.actions[e]=!1};constructor(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),window.addEventListener("blur",this.blur),window.addEventListener("focus",this.focus),window.addEventListener("gamepaddisconnected",this.reset)}poll(){if(this.edges.clear(),!this.focused||document.hidden){this.reset();return}const e=Array.from(navigator.getGamepads?.()??[]).find(l=>l?.connected&&l.mapping==="standard");let t=e?.axes[0]??0,n=e?.axes[1]??0;const s=Math.hypot(t,n);if(s<=.2)t=0,n=0;else{const l=Math.min(1,(s-.2)/.8);t=t/s*l,n=n/s*l}const r=(...l)=>l.some(h=>this.keys.has(h)),a=l=>+!!e?.buttons[l]?.pressed;t+=Number(r("KeyD","ArrowRight"))-Number(r("KeyA","ArrowLeft"))+a(15)-a(14),n+=Number(r("KeyS","ArrowDown"))-Number(r("KeyW","ArrowUp"))+a(13)-a(12);const o=Math.hypot(t,n);this.actions.move.x=t/Math.max(1,o),this.actions.move.y=n/Math.max(1,o);for(const l of Object.keys(xi)){const h=xi[l],d=r(...h.keys)||!!e?.buttons[h.button]?.pressed;(this.pending.has(l)||d&&!this.actions[l])&&this.edges.add(l),this.actions[l]=d}this.actions.lanternDelta=Math.max(-1,Math.min(1,(e?.buttons[7]?.value??0)-(e?.buttons[6]?.value??0)+Number(r("KeyR"))-Number(r("KeyQ")))),this.pending.clear()}pressed(e){return this.edges.has(e)}held(e){return this.actions[e]}dispose(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),window.removeEventListener("blur",this.blur),window.removeEventListener("focus",this.focus),window.removeEventListener("gamepaddisconnected",this.reset),this.reset()}}const Mi={width:60,depth:40,minX:-30,maxX:30,minZ:-20,maxZ:20},zp=[{id:"hollow",label:"Mushroom Hollow",x:-20,color:10915681},{id:"glade",label:"Petal Glade",x:0,color:7707523},{id:"rootdeep",label:"Rootdeep",x:20,color:8615057}];function Gp(){const i=new Rt,e=new Et(Mi.width/3,Mi.depth),t=[];for(const n of zp){const s=new sn({color:n.color});t.push(s);const r=new lt(e,s);r.rotation.x=-Math.PI/2,r.position.x=n.x,i.add(r)}return{group:i,dispose:()=>{e.dispose(),t.forEach(n=>n.dispose())}}}const Hp=3,po=.18,Wp=.8;class Vp{remaining=0;cooldown=0;direction={x:0,y:0};dash(e,t){const n=Math.hypot(e.x,e.y);return t||this.cooldown>0||n<.01?!1:(this.direction={x:e.x/n,y:e.y/n},this.remaining=po,this.cooldown=Wp,!0)}step(e,t,n){if(n)return this.remaining=0,{x:0,y:0};this.cooldown=Math.max(0,this.cooldown-e);const s=Math.min(e,this.remaining);this.remaining=Math.max(0,this.remaining-e);const r=Hp/po;return{x:this.direction.x*r*s+t.x*6*(e-s),y:this.direction.y*r*s+t.y*6*(e-s)}}}class Xp{motion=new Vp;position=new z;previous=new z;visual=new Rt;texture;geometry=new Et(1.8,2.7);material;cutout;constructor(){const e=document.createElement("canvas");e.width=128,e.height=192;const t=e.getContext("2d");t.strokeStyle="#202d2a",t.lineWidth=7,t.lineJoin="round",t.fillStyle="#ddbd77",t.beginPath(),t.moveTo(45,84),t.lineTo(88,84),t.lineTo(109,162),t.lineTo(20,162),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#f1dfb6",t.beginPath(),t.ellipse(65,59,31,37,0,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#334b45",t.beginPath(),t.moveTo(25,50),t.lineTo(54,9),t.lineTo(95,51),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#202d2a",t.fillRect(77,58,7,9),t.fillRect(35,164,18,22),t.fillRect(77,164,18,22),this.texture=new Ai(e),this.texture.colorSpace=At,this.material=new Tn({map:this.texture,alphaTest:.5,side:2}),this.cutout=new lt(this.geometry,this.material),this.cutout.position.y=1.35,this.visual.add(this.cutout)}update(e,t,n=!1,s){this.previous.copy(this.position);const r=this.motion.step(e,t,n),a=Math.max(1,Math.ceil(Math.hypot(r.x,r.y)/.15));for(let o=0;o<a;o++)this.position.x+=r.x/a,this.position.z+=r.y/a,s?.(this.position),this.position.x=Yn.clamp(this.position.x,Mi.minX+.9,Mi.maxX-.9),this.position.z=Yn.clamp(this.position.z,Mi.minZ+.9,Mi.maxZ-.9);Math.abs(t.x)>.01&&(this.cutout.scale.x=t.x<0?-1:1)}render(e,t){this.visual.position.lerpVectors(this.previous,this.position,e),this.visual.rotation.y=Math.atan2(t.position.x-this.visual.position.x,t.position.z-this.visual.position.z)}dispose(){this.texture.dispose(),this.geometry.dispose(),this.material.dispose()}}const Yp={id:"grove",bounds:{minX:-30,maxX:30,minZ:-20,maxZ:20},start:{x:0,z:5},terrain:{groundTint:7707523,propTint:16777215,profile:"grove"},obstacles:[],props:[],shards:[{id:"s3",zone:"glade",x:-4,z:-10},{id:"s4",zone:"glade",x:7,z:7}],shardCount:1,enemies:[{zone:"hollow",count:2},{zone:"rootdeep",count:2}],waves:[],tuning:{chaseSpeed:2.5,wanderSpeed:1,damage:.1,attackCooldown:1,landRadius:.8},exit:{x:-18,z:7,radius:2,next:"hollow"},signs:[{id:"grove-paths",x:-12,z:7},{id:"grove-shrine",x:0,z:5}],targetSeconds:110},mo=[{x:-13,z:-6,r:1.2},{x:-13,z:6,r:1.2},{x:-9,z:-6,r:1.3},{x:-9,z:6,r:1.3},{x:-2,z:-4,r:1.4},{x:-2,z:4,r:1.4},{x:3,z:-4,r:1.2},{x:3,z:4,r:1.2},{x:11,z:-7,r:1.4},{x:14,z:6,r:1.3},{x:18,z:-7,r:1.1},{x:-18,z:11,r:1.1}],qp={id:"hollow",bounds:{minX:-22,maxX:22,minZ:-14,maxZ:14},start:{x:-18,z:0},terrain:{groundTint:11575681,propTint:12953555,profile:"hollow"},obstacles:mo,props:mo.map((i,e)=>({x:i.x,z:i.z,asset:e%3===0?"props/blight-mushrooms.png":"props/mushrooms.png",width:i.r*2.4,height:i.r*2.5,tint:e%3===0?11967181:14075044})),shards:[{id:"s1",zone:"hollow",x:-5,z:-9},{id:"s2",zone:"hollow",x:8,z:9}],shardCount:1,enemies:[{zone:"hollow",count:1,x:-7,z:0},{zone:"hollow",count:1,x:14,z:0}],waves:[{after:18,zone:"hollow",count:2},{after:38,zone:"hollow",count:2},{after:58,zone:"hollow",count:2}],tuning:{chaseSpeed:3,wanderSpeed:1.15,damage:.12,attackCooldown:.9,landRadius:1},exit:{x:18,z:0,radius:2,next:"deepwood"},signs:[{id:"hollow-caps",x:-17,z:-3},{id:"hollow-whisperseed",x:-7,z:-10},{id:"hollow-spora",x:10,z:10}],targetSeconds:75},Kp={id:"deepwood",bounds:{minX:-16,maxX:16,minZ:-12,maxZ:12},start:{x:0,z:9},terrain:{groundTint:6509678,propTint:10057659,profile:"roots"},obstacles:[{x:-10,z:4,r:1.35},{x:-6,z:4,r:1.35},{x:-2,z:4,r:1.35},{x:3,z:-2,r:1.35},{x:7,z:-2,r:1.35},{x:11,z:-2,r:1.35}],props:[{x:-10,z:4,asset:"props/blight-tree.png",width:4,height:6},{x:-6,z:4,asset:"props/blight-tree.png",width:4,height:6},{x:-2,z:4,asset:"props/blight-tree.png",width:4,height:6},{x:3,z:-2,asset:"props/blight-tree.png",width:4,height:6},{x:7,z:-2,asset:"props/blight-tree.png",width:4,height:6},{x:11,z:-2,asset:"props/blight-tree.png",width:4,height:6},{x:0,z:-9,asset:"props/shrine-circle.png",width:4,height:2,tint:10057659}],shards:[{id:"s5",zone:"rootdeep",x:-11,z:-7},{id:"s6",zone:"rootdeep",x:11,z:-7}],shardCount:1,enemies:[{zone:"rootdeep",count:2,x:-8,z:-1},{zone:"rootdeep",count:1,x:9,z:-7}],waves:[{after:22,zone:"rootdeep",count:1},{after:42,zone:"rootdeep",count:1}],tuning:{chaseSpeed:3.35,wanderSpeed:1.3,damage:.14,attackCooldown:.85,landRadius:1.1},exit:{x:0,z:-9,radius:2,next:null},signs:[{id:"deepwood-buried",x:0,z:7},{id:"deepwood-dryad",x:-11,z:-5},{id:"deepwood-collosus",x:11,z:-5}],targetSeconds:60},Er={grove:Yp,hollow:qp,deepwood:Kp};function $p(i){const e=new URLSearchParams(i).get("level");return e==="hollow"||e==="deepwood"?e:"grove"}class Zp{constructor(e="grove"){this.initial=e,this.current=Er[e]}initial;current;transitioning=!1;departing=null;curtainTime=0;pending=null;elapsed=0;waves=new Set;reset(){this.current=Er[this.initial],this.elapsed=0,this.waves.clear(),this.transitioning=!1,this.pending=null,this.departing=null}beginExit(e,t){const n=this.current.exit;return!t||this.transitioning||Math.hypot(e.x-n.x,e.z-n.z)>n.radius||!n.next?!1:(this.transitioning=!0,this.departing=this.current.id,this.curtainTime=0,this.pending=n.next,!0)}update(e,t,n,s){if(t){if(this.transitioning){this.curtainTime+=e,this.curtainTime>=.6&&this.pending&&(this.current=Er[this.pending],this.pending=null,this.elapsed=0,this.waves.clear(),n(this.current)),this.curtainTime>=1.2&&(this.transitioning=!1,this.departing=null);return}this.elapsed+=e,this.current.waves.forEach((r,a)=>{this.elapsed>=r.after&&!this.waves.has(a)&&(this.waves.add(a),s(r.zone,r.count))})}}}const kn={grove:{name:"Shrine Grove",subtitle:"Where the broken gem took root",introLines:["Place him on the stone. The roots remember Lenny.","The knight sleeps beneath my moss. Come closer, little Wanderer."],outroBloom:["A piece of me falls silent. You call that kindness?","Go on. The moss still holds the knight."],outroBlight:["You brought my broken heart a little closer.","Follow the roots. They know the way home."],signs:[{id:"grove-shrine",text:"Lenny was freed when the gem broke. Something beneath the stone stayed awake."},{id:"grove-paths",text:"Mushroom Hollow, Petal Glade, Rootdeep. Follow the paths, but mind what follows you."},{id:"grove-moss",text:"T.K. lies beside Lenny. Leave room for the knight to stand."}],ambience:{mood:"hushed expectancy",notes:"Warm shrine light against crowded roots. Bloom brings gold between the leaves; Blight lets violet shadow gather around the stone."}},hollow:{name:"Mushroom Hollow",subtitle:"Under the listening caps",introLines:["Keep your lantern close. Even the caps lean toward a secret.","Spora listens where you cannot see. I listen where you cannot reach."],outroBloom:["You leave flowers where my voice used to be.","Do you think the oldest roots will open for you?"],outroBlight:["Another piece remembers me. Spora will hear it singing.","Deeper now. The roots have kept something for us."],signs:[{id:"hollow-caps",text:"The caps rose after the shards sank. Beneath them, the soil never quite sleeps."},{id:"hollow-whisperseed",text:"Whisperseed listens for the silence after a shard breaks."},{id:"hollow-spora",text:"Spora keeps watch beneath the caps. A gathered shard is a promise kept to the gem."}],ambience:{mood:"close and watchful",notes:"Low caps crowd the lantern and hide the distance. Bloom opens pockets of golden light; Blight leaves luminous veins beneath a violet canopy."}},deepwood:{name:"Rootdeep",subtitle:"Where the oldest roots hold fast",introLines:["Here is what the gem left behind. I have been awake all this time.","The knight has his sword. You have your lantern. I have the roots."],outroBloom:["The last piece breaks. I cannot hold the knight any longer.","Let T.K. stand beside Lenny. Leave me the dark beneath the roots."],outroBlight:["My pieces meet again. Listen to the trees closing behind you.","Let T.K. sleep beside Lenny. You have brought me home."],signs:[{id:"deepwood-buried",text:"The gem shattered. Its pieces sank. The roots grew faster than anyone could follow."},{id:"deepwood-dryad",text:"Dryad and Petalborn tend a path toward the knight. No root has the right to keep him."},{id:"deepwood-collosus",text:"Chomper, Spora, Collosus. Keep the pieces together. Keep the forest ours."}],ambience:{mood:"held breath",notes:"Thick roots close around the lantern. Bloom light finds the moss-covered knight; Blight draws every vein toward the buried gem."}}},Fr={uLantern:{value:new z(0,0,7.5)},uLanternDark:{value:.4}},go=new WeakSet;function _o(i){if(go.has(i)||!i.isMeshLambertMaterial)return;go.add(i);const e=i.onBeforeCompile.bind(i),t=i.customProgramCacheKey.bind(i);i.onBeforeCompile=(n,s)=>{e(n,s),Object.assign(n.uniforms,Fr),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
gl_FragColor.rgb *= mix(vec3(1.0), vec3(1.07, 1.02, 0.9), lanternLit * uLanternDark);`)},i.customProgramCacheKey=()=>`${t()}|lantern`,i.needsUpdate=!0}function Un(i){i.traverse(e=>{const t=e.material;Array.isArray(t)?t.forEach(_o):t&&_o(t)})}function Jp(i,e,t,n,s){const r=new Rt;r.name="level-layout",i.add(r);let a=[];const o=new Th;let l="";const h=document.createElement("aside");h.setAttribute("aria-live","polite"),h.dataset.levelOverlay="",h.style.cssText="position:fixed;left:18px;top:72px;max-width:360px;padding:10px;background:#1b2029db;color:#f1dfb6;font:14px Georgia;pointer-events:none;z-index:25;white-space:pre-line",document.body.append(h);const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:#c9b58c;background-image:linear-gradient(90deg,#b39b75 0%,#d6c39e 25%,#c9b58c 50%,#d6c39e 75%,#b39b75 100%);color:#302d29;display:none;align-items:center;justify-content:center;font:28px Georgia;z-index:100;pointer-events:none",d.setAttribute("aria-live","polite"),d.dataset.levelCurtain="",document.body.append(d);const u=()=>{a.forEach(m=>m.dispose()),a=[],r.clear();const c=e.levels.current;if(l=c.id,t.forEach((m,f)=>{m.visible=f===0||c.id==="grove"}),t[0]?.traverse(m=>{if(m instanceof lt&&!(m instanceof Zi)){const f=Array.isArray(m.material)?m.material:[m.material];for(const T of f)T instanceof sn&&T.color.setHex(c.id==="grove"?16777215:c.terrain.groundTint)}}),c.id!=="grove"){const m=[];for(let T=c.bounds.minX;T<=c.bounds.maxX;T+=3)for(const C of[c.bounds.minZ-.8,c.bounds.maxZ+.8])m.push({x:T,z:C,asset:c.id==="hollow"?"props/mushrooms.png":"props/blight-tree.png",width:3,height:c.id==="hollow"?3:5});for(let T=c.bounds.minZ+3;T<c.bounds.maxZ;T+=3)for(const C of[c.bounds.minX-.8,c.bounds.maxX+.8])m.push({x:C,z:T,asset:c.id==="hollow"?"props/mushrooms.png":"props/blight-tree.png",width:3,height:c.id==="hollow"?3:5});const f=new Map;for(const T of[...c.props,...m]){const C=[T.asset,T.width,T.height,T.tint??c.terrain.propTint].join("|"),y=f.get(C)??[];y.push(T),f.set(C,y)}for(const T of f.values()){const C=T[0],y=o.load("./art/"+C.asset);y.colorSpace=At,y.magFilter=1003;const b=new Et(C.width,C.height).translate(0,C.height/2,0),S=new sn({map:y,color:C.tint??c.terrain.propTint,alphaTest:.5,side:2}),P=new Zi(b,S,T.length),v=new En().setFromEuler(new rn(-(Math.PI/2-n)*.85,0,0)),E=new je,R=new z,L=new z(1,1,1);T.forEach((D,O)=>P.setMatrixAt(O,E.compose(R.set(D.x,0,D.z),v,L))),r.add(P),a.push(y,b,S,P)}}Un(r);const p=new Yr(c.exit.radius*.75,c.exit.radius,32),_=new Tn({color:16112009,side:2,transparent:!0,opacity:.65}),M=new lt(p,_);M.rotation.x=-Math.PI/2,M.position.set(c.exit.x,.08,c.exit.z),r.add(M),a.push(p,_)};return u(),{frame(){l!==e.levels.current.id&&u();const c=e.levels.current,p=kn[c.id],_=c.shards.filter(b=>e.shards.sites.find(S=>S.id===b.id)?.resolved).length>=c.shardCount,M=c.signs.find(b=>Math.hypot(b.x-s.x,b.z-s.z)<3),m=M?p.signs.find(b=>b.id===M.id)?.text:"";h.hidden=e.run.phase==="attract"||e.run.phase==="ending";const f=p.name+`
`+p.subtitle+`
`+(e.levels.elapsed<8?p.introLines[0]+`
`:"")+(m?m+`
`:"")+(_?"Follow the gold ring to "+(c.exit.next?kn[c.exit.next].name:"finish the run")+".":"Find the shard, then follow the gold ring.");h.textContent!==f&&(h.textContent=f),d.style.display=e.levels.transitioning?"flex":"none";const T=e.levels.departing?kn[e.levels.departing]:p,C=e.faction==="bloom"?T.outroBloom:T.outroBlight,y=e.levels.departing===c.id?C[0]:p.name;d.textContent!==y&&(d.textContent=y)},dispose(){a.forEach(c=>c.dispose()),i.remove(r),h.remove(),d.remove()}}}const Qp=1,Cs=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),zs=i=>typeof i=="number"&&Number.isFinite(i),Ar=i=>zs(i)&&i>=0&&i<=1,vo=i=>zs(i)&&i>=0,cn=(i,e)=>typeof i=="string"&&e.includes(i),xo=["hollow","glade","rootdeep"];function jp(i){try{const e=typeof i=="string"?JSON.parse(i):null;if(!Cs(e))return null;let t=!1;switch(e.type){case"hello":t=e.version===Qp&&cn(e.mode,["live","mock"])&&["llm_ready","shrine_ready","relic_ready"].every(n=>typeof e[n]=="boolean");break;case"shrine":t=cn(e.state,["empty","sleepy","angry","hand"])&&Ar(e.confidence);break;case"relic":t=Ar(e.knob)&&cn(e.button,["down","up"]);break;case"thinking":t=typeof e.active=="boolean";break;case"speech":t=typeof e.id=="string"&&typeof e.url=="string"&&vo(e.duration_ms)&&cn(e.engine,["elevenlabs","cached","piper"]);break;case"telemetry":t=["gpu_pct","cpu_pct","ram_used_mb","ram_total_mb","power_mw","temp_c","tok_s"].every(n=>e[n]===null||zs(e[n]));break;case"director":{const n=e.spread===null||Cs(e.spread)&&cn(e.spread.zone,xo)&&Ar(e.spread.amount),s=e.spawn===null||Cs(e.spawn)&&cn(e.spawn.kind,["chomper","petalborn"])&&cn(e.spawn.zone,xo)&&zs(e.spawn.count)&&Number.isInteger(e.spawn.count)&&e.spawn.count>=1&&e.spawn.count<=4,r=e.hint===null||Cs(e.hint)&&cn(e.hint.shard,["s1","s2","s3","s4","s5","s6"])&&typeof e.hint.riddle=="string"&&typeof e.hint.truthful=="boolean";t=typeof e.id=="string"&&typeof e.line=="string"&&cn(e.mood,["calm","smug","furious"])&&cn(e.source,["llm","scripted"])&&vo(e.latency_ms)&&n&&s&&r;break}}return t?e:null}catch{return null}}class em{constructor(e,t,n={}){this.host=e,this.bus=t,this.options=n}host;bus;options;socket=null;retry;stopped=!0;mode="offline";get connected(){return this.socket?.readyState===1}start(){!this.stopped||!this.host||(this.stopped=!1,this.connect())}connect(){if(!this.stopped)try{const e=/^wss?:\/\//.test(this.host)?this.host:`${globalThis.location?.protocol==="https:"?"wss":"ws"}://${this.host}`,t=(this.options.socketFactory??(n=>new WebSocket(n)))(`${e.replace(/\/$/,"")}/ws`);this.socket=t,t.onopen=()=>{this.stopped||this.socket!==t||this.bus.emit("connection",{connected:!0,mode:this.mode})},t.onmessage=n=>{if(this.stopped||this.socket!==t)return;const s=jp(n.data);if(s)switch(s.type==="hello"&&(this.mode=s.mode,this.bus.emit("connection",{connected:!0,mode:this.mode})),s.type){case"hello":this.bus.emit("hello",s);break;case"shrine":this.bus.emit("shrine",s);break;case"relic":this.bus.emit("relic",s);break;case"director":this.bus.emit("director",s);break;case"speech":this.bus.emit("speech",s);break;case"thinking":this.bus.emit("thinking",s);break;case"telemetry":this.bus.emit("telemetry",s);break}},t.onerror=()=>{this.socket===t&&!this.stopped&&t.close()},t.onclose=()=>{this.socket!==t||this.stopped||(this.socket=null,this.mode="offline",this.bus.emit("connection",{connected:!1,mode:"offline"}),this.schedule())}}catch{this.schedule()}}schedule(){this.stopped||this.retry!==void 0||(this.retry=setTimeout(()=>{this.retry=void 0,this.connect()},this.options.retryMs??2e3))}send(e){if(!this.connected)return!1;try{return this.socket.send(JSON.stringify(e)),!0}catch{return!1}}dispose(){this.stopped=!0,clearTimeout(this.retry),this.retry=void 0;const e=this.socket;this.socket=null,e&&(e.onopen=e.onmessage=e.onerror=e.onclose=null,e.close()),this.mode="offline"}}class tm{data=[];get length(){return this.data.length}push(e){this.data.push(e);let t=this.data.length-1;for(;t>0;){const n=t-1>>1;if(this.data[n].score<=e.score)break;this.data[t]=this.data[n],t=n}this.data[t]=e}pop(){const e=this.data[0],t=this.data.pop();if(this.data.length){let n=0;for(;n*2+1<this.data.length;){let s=n*2+1;if(s+1<this.data.length&&this.data[s+1].score<this.data[s].score&&s++,t.score<=this.data[s].score)break;this.data[n]=this.data[s],n=s}this.data[n]=t}return e}}function yo(i,e){const t=Math.abs(i.x-e.x),n=Math.abs(i.y-e.y);return Math.max(t,n)+(Math.SQRT2-1)*Math.min(t,n)}function nm(i,e,t){const n=i.length,s=i[0]?.length??0;if(!s||i.some(u=>u.length!==s))return[];const r=u=>Number.isInteger(u.x)&&Number.isInteger(u.y)&&u.x>=0&&u.x<s&&u.y>=0&&u.y<n&&i[u.y][u.x];if(!r(e)||!r(t))return[];const a=new Float64Array(s*n).fill(1/0),o=new Int32Array(s*n).fill(-1),l=new tm,h=e.y*s+e.x,d=t.y*s+t.x;for(a[h]=0,l.push({index:h,cost:0,score:yo(e,t)});l.length;){const u=l.pop();if(u.cost!==a[u.index])continue;const c=u.index%s,p=Math.floor(u.index/s);if(u.index===d){const _=[];let M=d;for(;M!==-1;)_.push({x:M%s,y:Math.floor(M/s)}),M=o[M];return _.reverse()}for(let _=-1;_<=1;_++)for(let M=-1;M<=1;M++){if(!M&&!_)continue;const m={x:c+M,y:p+_};if(!r(m)||M&&_&&(!i[p][c+M]||!i[p+_][c]))continue;const f=m.y*s+m.x,T=u.cost+(M&&_?Math.SQRT2:1);T>=a[f]||(a[f]=T,o[f]=u.index,l.push({index:f,cost:T,score:T+yo(m,t)}))}}return[]}const tl=.4;function im(i,e={minX:-30,maxX:30,minZ:-20,maxZ:20}){return Array.from({length:40},(t,n)=>Array.from({length:60},(s,r)=>r-29.5>e.minX+.9&&r-29.5<e.maxX-.9&&n-19.5>e.minZ+.9&&n-19.5<e.maxZ-.9&&i.every(a=>Math.hypot(r-29.5-a.x,n-19.5-a.z)>a.r+tl+Math.SQRT1_2)))}function Rr(i,e){let t=e,n=1/0;for(let s=0;s<i.length;s++)for(let r=0;r<i[s].length;r++){const a=(r-e.x)**2+(s-e.y)**2;i[s][r]&&a<n&&(t={x:r,y:s},n=a)}return t}function sm(i,e,t){for(let n=0;n<3;n++)for(const s of e){const r=i.x-s.x,a=i.z-s.z,o=Math.hypot(r,a),l=s.r+tl;o<l&&(i.x+=o>1e-4?r/o*(l-o):l,i.z+=o>1e-4?a/o*(l-o):0)}i.x=Math.max(t.minX+.9,Math.min(t.maxX-.9,i.x)),i.z=Math.max(t.minZ+.9,Math.min(t.maxZ-.9,i.z))}const _i=(i,e)=>({x:Math.max(0,Math.min(59,Math.floor(i+30))),y:Math.max(0,Math.min(39,Math.floor(e+20)))});class rm{constructor(e,t,n=Math.random){this.bus=e,this.land=t,this.random=n}bus;land;random;enemies=[];sequence=0;grid=Array.from({length:40},()=>Array(60).fill(!0));tuning={chaseSpeed:2.5,wanderSpeed:1,damage:.1,attackCooldown:1,landRadius:.8};configure(e,t){this.tuning=e.tuning,this.setObstacles(t,e.bounds)}setObstacles(e,t){this.grid=im(e,t);for(const n of this.enemies){const s=_i(n.x,n.z);if(!this.grid[s.y][s.x]){const r=Rr(this.grid,s);n.x=r.x-29.5,n.z=r.y-19.5}n.path=[],n.pathTimer=0}}reset(){this.enemies=[],this.changed()}spawn(e,t,n,s){this.enemies=this.enemies.filter(a=>a.state!=="defeated");const r=n==="hollow"?-20:n==="glade"?0:20;for(let a=0;a<Math.min(t,24-this.enemies.length);a++){let o=(s?.x??r)+(this.random()-.5)*(s?2:12),l=(s?.z??0)+(this.random()-.5)*(s?2:28);const h=_i(o,l),d=this.grid[h.y][h.x]?h:Rr(this.grid,h);o=d.x-29.5,l=d.y-19.5,this.enemies.push({id:++this.sequence,kind:e,state:"wander",x:o,z:l,hits:0,attackCooldown:0,pathTimer:0,landTimer:0,path:[],target:_i(o,l)})}this.changed()}flip(e){for(const t of this.enemies)t.kind=e==="bloom"?"chomper":"petalborn",t.path=[];this.changed()}pulse(e,t){for(const n of this.enemies)n.state!=="defeated"&&Math.hypot(n.x-e,n.z-t)<=3&&(n.hits++,n.hits>=2&&(n.state="defeated"));this.changed()}near(e,t){return this.enemies.filter(n=>n.state!=="defeated"&&Math.hypot(n.x-e.x,n.z-e.z)<=t).length}update(e,t,n,s,r){for(const a of this.enemies){if(a.state==="defeated")continue;a.attackCooldown=Math.max(0,a.attackCooldown-e),a.pathTimer=Math.max(0,a.pathTimer-e),a.landTimer+=e;const o=Math.hypot(a.x-t.x,a.z-t.z),l=a.kind===(n==="bloom"?"chomper":"petalborn");if(a.state=l&&o<=1.2?"attack":l&&o<=s?"chase":"wander",a.state==="attack"&&a.attackCooldown<=0&&(a.attackCooldown=this.tuning.attackCooldown,r(this.tuning.damage)),a.state!=="attack"){a.pathTimer<=0&&(a.pathTimer=.5,a.state==="chase"?a.target=_i(t.x,t.z):a.path.length||(a.target=_i(Math.max(-29,Math.min(29,a.x+(this.random()-.5)*10)),Math.max(-19,Math.min(19,a.z+(this.random()-.5)*10)))),this.grid[a.target.y][a.target.x]||(a.target=Rr(this.grid,a.target)),a.path=nm(this.grid,_i(a.x,a.z),a.target).slice(1));const h=a.path[0];if(h){const d=h.x-29.5,u=h.y-19.5,c=d-a.x,p=u-a.z,_=Math.hypot(c,p),M=e*(a.state==="chase"?this.tuning.chaseSpeed:this.tuning.wanderSpeed);_<=M?(a.x=d,a.z=u,a.path.shift()):(a.x+=c/_*M,a.z+=p/_*M)}}a.landTimer>=1&&(a.landTimer%=1,this.land.convert(a.x,a.z,this.tuning.landRadius,a.kind==="chomper"?"blight":"bloom"))}this.changed()}changed(){this.bus.emit("enemies",this.enemies.map(({id:e,kind:t,state:n,x:s,z:r})=>({id:e,kind:t,state:n,x:s,z:r})))}}class am{constructor(e=Math.random){this.random=e,this.reset()}random;width=60;depth=40;cells=[];listeners=new Set;reset(){const e=[];for(let t=0;t<this.depth;t++)for(let n=0;n<this.width;n++){const s=n<30?"bloom":"blight";this.cells[t*this.width+n]=s,e.push({column:n,row:t,faction:s})}this.notify(e)}onChange(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}notify(e){if(e.length)for(const t of this.listeners)t(e)}zone(e){return e<20?"hollow":e<40?"glade":"rootdeep"}center(e,t){return{x:e-29.5,z:t-19.5}}convert(e,t,n,s){if(![e,t,n].every(Number.isFinite)||n<0)return[];const r=[];for(let a=0;a<this.depth;a++)for(let o=0;o<this.width;o++){const l=this.center(o,a),h=a*this.width+o;Math.hypot(l.x-e,l.z-t)<=n&&this.cells[h]!==s&&(this.cells[h]=s,r.push({column:o,row:a,faction:s}))}return this.notify(r),r}tax(e,t=.03){const n=this.cells.map((a,o)=>a===e?o:-1).filter(a=>a>=0),s=Math.round(n.length*Math.max(0,Math.min(1,t))),r=[];for(let a=0;a<s;a++){const o=Math.min(n.length-1,Math.floor(this.random()*n.length)),[l]=n.splice(o,1),h=e==="bloom"?"blight":"bloom";this.cells[l]=h,r.push({column:l%this.width,row:Math.floor(l/this.width),faction:h})}return this.notify(r),r}share(){return this.shares(this.cells)}zoneShare(e){return this.shares(this.cells.filter((t,n)=>this.zone(n%this.width)===e))}shares(e){return{bloom:e.filter(t=>t==="bloom").length/e.length,blight:e.filter(t=>t==="blight").length/e.length}}spread(e,t){const n=[],s=Math.round(Math.max(0,Math.min(1,t))*800);for(let r=0;r<s;r++){const a=[];for(let l=0;l<this.cells.length;l++){const h=l%this.width;if(this.zone(h)!==e||this.cells[l]==="blight")continue;const d=Math.floor(l/this.width);[[h-1,d],[h+1,d],[h,d-1],[h,d+1]].some(([c,p])=>c>=0&&c<this.width&&p>=0&&p<this.depth&&this.cells[p*this.width+c]==="blight")&&a.push(l)}if(!a.length)for(let l=0;l<this.cells.length;l++)this.zone(l%this.width)===e&&this.cells[l]!=="blight"&&a.push(l);if(!a.length)break;const o=a[Math.min(a.length-1,Math.floor(this.random()*a.length))];this.cells[o]="blight",n.push({column:o%this.width,row:Math.floor(o/this.width),faction:"blight"})}return this.notify(n),n}}const ft=i=>i.trim().split(`
`).map(e=>e.trim()).filter(Boolean),om={grove:{bloom:ft(`
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
`)}},Cr={hurt:{bloom:ft(`
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
`)}};class lm{elapsed=0;sequence=0;cursors=new Map;pending=[];lastHurt=-20;event(e,t){const n={shard_found:"found",shard_resolved:"resolved",faction_flip:"flip"}[e.kind];n&&(this.pending=[...this.pending.filter(s=>s!==n),n].slice(-3)),e.kind==="player_hurt"&&t.elapsed_s-this.lastHurt>=15&&(this.lastHurt=t.elapsed_s,this.pending.push("hurt"),this.pending=this.pending.slice(-3))}pick(e,t){const n=this.cursors.get(t)??0;return this.cursors.set(t,n+1),e[n%e.length]}make(e,t,n){return{type:"director",id:`story-${++this.sequence}`,source:"scripted",latency_ms:0,line:e,mood:t==="resolved"&&n==="bloom"?"furious":t==="flip"||n==="blight"?"smug":"calm",spread:null,spawn:null,hint:null}}update(e,t,n,s,r,a="grove"){if(t||!n||!s)return this.elapsed=0,null;if(this.elapsed+=e,this.elapsed<(this.pending.length?8:25))return null;this.elapsed=0;const l=this.pending.shift()??(r&&r.hp<.3?"hurt":r&&r.enemies_near>0?"danger":r&&r.lantern>.8?"wide":r&&r.lantern<.2?"narrow":"ambient"),h=l==="ambient"?om[a][s]:Cr[l][s];return this.make(this.pick(h,`${a}:${s}:${l}`),l,s)}ask(e,t,n,s){const r=e.faction??"bloom";if(this.elapsed=0,this.pending=[],!n)return this.make(this.pick(Cr.empty[r],`${t}:${r}:empty`),"ask",r);const a=n.x-s.x,o=n.z-s.z,l=Math.hypot(a,o)<1.4?"beneath your lantern":Math.abs(a)>Math.abs(o)?a<0?"west of your lantern":"east of your lantern":o<0?"north of your lantern":"south of your lantern",h=r==="bloom"?`The glass waits ${l}. I have told you where. I have not asked you to break it.`:`An edge of me waits ${l}. Bring it close. The roots have held it long enough.`,d=this.make(h,"ask",r);return d.hint={shard:n.id,riddle:h,truthful:!0},d}interact(e,t){return this.elapsed=0,this.make(this.pick(Cr.ask[e],`${t}:${e}:shrine`),"ask",e)}reset(){this.elapsed=0,this.pending=[],this.cursors.clear(),this.sequence=0,this.lastHurt=-20}}class hm{constructor(e,t=()=>!0){this.bus=e,this.canWin=t}bus;canWin;phase="attract";faction=null;hp=1;elapsed=0;shards=0;asksUsed=0;result=null;endingTime=0;shrinePresent=!1;resolved=new Set;snapshot(){return{phase:this.phase,faction:this.faction,hp:this.hp,elapsed_s:this.elapsed,shards:this.shards,asks_used:this.asksUsed,result:this.result}}changed(){this.bus.emit("run",this.snapshot())}select(e){if(e==="hand"||this.phase==="ending")return;if(e==="empty"){this.shrinePresent=!1,this.bus.emit("pause",{paused:!0});return}this.shrinePresent=!0;const t=e==="sleepy"?"bloom":"blight",n=this.faction;this.phase==="attract"?(this.hp=1,this.elapsed=0,this.shards=0,this.asksUsed=0,this.resolved.clear(),this.result=null,this.faction=t,this.phase="playing",this.bus.emit("faction",{faction:t}),this.bus.emit("pause",{paused:!1}),this.changed(),this.bus.emit("game-event",{type:"event",kind:"run_start",data:{faction:t}})):(this.faction=t,this.bus.emit("faction",{faction:t}),this.bus.emit("pause",{paused:!1}),this.changed(),n!==t&&this.bus.emit("game-event",{type:"event",kind:"faction_flip",data:{faction:t,previous:n}}))}pause(e){if(this.phase==="attract"||this.phase==="ending")return;const t=e||!this.shrinePresent?"paused":"playing";this.phase!==t&&(this.phase=t,this.changed())}update(e){this.phase==="playing"&&(this.elapsed+=e),this.phase==="ending"&&(this.endingTime+=e)}hurt(e){this.phase!=="playing"||!Number.isFinite(e)||e<=0||(this.hp=Math.max(0,Math.round((this.hp-e)*1e10)/1e10),this.bus.emit("game-event",{type:"event",kind:"player_hurt",data:{hp:this.hp,amount:e}}),this.changed(),this.hp||this.end("lose"))}resolve(e,t){this.phase!=="playing"||this.resolved.has(e)||(this.resolved.add(e),this.shards++,this.bus.emit("game-event",{type:"event",kind:"shard_resolved",data:{shard:e,zone:t,faction:this.faction,action:this.faction==="bloom"?"destroyed":"claimed"}}),this.changed(),this.shards>=3&&this.canWin()&&this.end("win"))}seedProgress(e){for(const t of e)this.resolved.add(t);this.shards=this.resolved.size,this.changed()}finish(){this.phase==="playing"&&this.shards>=3&&this.canWin()&&this.end("win")}ask(){return this.phase!=="playing"?!1:(this.asksUsed++,this.changed(),!0)}end(e){this.phase="ending",this.result=e,this.endingTime=0,this.bus.emit("pause",{paused:!0}),this.changed(),this.bus.emit("game-event",{type:"event",kind:"run_end",data:{faction:this.faction,result:e,shards:this.shards,asks_used:this.asksUsed,elapsed_s:this.elapsed}})}reset(){this.phase="attract",this.faction=null,this.shrinePresent=!1,this.result=null,this.hp=1,this.elapsed=this.shards=this.asksUsed=0,this.resolved.clear(),this.bus.emit("faction",{faction:null}),this.bus.emit("pause",{paused:!0}),this.changed()}}class cm{constructor(e){this.bus=e,this.off=e.on("relic",t=>{this.relicSeen=!0,this.value=t.knob,this.changed()})}bus;value=.5;relicSeen=!1;off;get radius(){return 3+9*this.value}get detectionRange(){return 4+10*this.value}update(e,t){this.relicSeen||!t||(this.value=Math.max(0,Math.min(1,this.value+t*e*.3)),this.changed())}changed(){this.bus.emit("lantern",{value:this.value,radius:this.radius,detectionRange:this.detectionRange,source:this.relicSeen?"relic":"input"})}dispose(){this.off()}}const dm=[{id:"s1",zone:"hollow",x:-22,z:-8},{id:"s2",zone:"hollow",x:-17,z:9},{id:"s3",zone:"glade",x:-4,z:-10},{id:"s4",zone:"glade",x:7,z:7},{id:"s5",zone:"rootdeep",x:17,z:-9},{id:"s6",zone:"rootdeep",x:25,z:11}];class um{constructor(e,t=Math.random){this.bus=e,this.random=t}bus;random;sites=dm.map(e=>({...e,active:!1,visible:!1,found:!1,resolved:!1,hinted:!1,progress:0}));reset(e){const t=[...this.sites];for(let n=t.length-1;n>0;n--){const s=Math.floor(this.random()*(n+1));[t[n],t[s]]=[t[s],t[n]]}for(const n of this.sites)Object.assign(n,{active:e&&t.slice(0,3).includes(n),visible:!1,found:!1,resolved:!1,hinted:!1,progress:0});this.changed()}load(e,t){const n=[...e];for(let s=n.length-1;s>0;s--){const r=Math.floor(this.random()*(s+1));[n[s],n[r]]=[n[r],n[s]]}for(const s of this.sites)s.active=!1,s.visible=!1,s.progress=0;for(const s of n.slice(0,t)){const r=this.sites.find(a=>a.id===s.id);Object.assign(r,s,{active:!r.resolved,found:!1,hinted:!1,progress:0})}this.changed()}hint(e){const t=this.sites.find(n=>n.id===e.shard);t&&(t.hinted=!0,this.changed())}cancelInteraction(){for(const e of this.sites)e.progress=0;this.changed()}nearest(e){return this.sites.filter(t=>t.active&&!t.resolved).sort((t,n)=>Math.hypot(t.x-e.x,t.z-e.z)-Math.hypot(n.x-e.x,n.z-e.z))[0]??null}update(e,t,n,s,r){let a=!1;for(const o of this.sites){const l=Math.hypot(o.x-t.x,o.z-t.z),h=o.active&&!o.resolved&&l<=n;o.visible!==h&&(o.visible=h,a=!0),h&&!o.found&&(o.found=!0,a=!0,this.bus.emit("game-event",{type:"event",kind:"shard_found",data:{shard:o.id,zone:o.zone}}));const d=h&&l<=1.4&&s?Math.min(1.5,o.progress+e):0;d!==o.progress&&(o.progress=d,a=!0),o.progress>=1.5&&(o.resolved=!0,o.visible=!1,o.progress=0,a=!0,this.bus.emit("shard-resolved",{id:o.id,zone:o.zone,faction:r}))}a&&this.changed()}changed(){this.bus.emit("shards",this.sites.map(e=>({...e})))}}class fm{constructor(e,t,n,s="grove"){this.bus=t,this.position=n,this.levels=new Zp(s),this.client=new em(e,t),this.run=new hm(t,()=>this.complete),this.lantern=new cm(t),this.shards=new um(t),this.enemies=new rm(t,this.land),this.unsubscribers=[t.on("shrine",r=>this.run.select(r.state)),t.on("relic",r=>{const a=r.button==="down"&&this.relicButton!=="down";this.relicButton=r.button,a&&!this.paused&&this.run.ask()&&(this.land.tax(this.faction),t.emit("ask",void 0))}),t.on("pause",r=>{this.run.pause(r.paused),this.paused&&this.shards.cancelInteraction()}),t.on("pulse",r=>{this.paused||!this.faction||this.cooldown>0||(this.cooldown=.6,this.land.convert(r.x,r.z,3,this.faction),this.enemies.pulse(r.x,r.z),t.emit("pulse-applied",{...r,faction:this.faction}))}),t.on("director",r=>{this.paused||!this.faction||(r.spread&&this.land.spread(r.spread.zone,r.spread.amount),r.spawn&&t.emit("spawn",r.spawn),r.hint&&this.shards.hint(r.hint))}),t.on("spawn",r=>{this.paused||this.enemies.spawn(r.kind,r.count,r.zone)}),t.on("shard-resolved",r=>this.run.resolve(r.id,r.zone)),t.on("game-event",r=>{if(r.kind==="run_start"){this.complete=!1,this.levels.reset(),this.land.reset(),this.shards.reset(!1),this.cooldown=this.stateElapsed=0,this.fallback.reset();const a=this.levels.initial==="deepwood"?["s3","s1"]:this.levels.initial==="hollow"?["s3"]:[];this.run.seedProgress([...a]);for(const o of a)this.shards.sites.find(l=>l.id===o).resolved=!0;this.loadLevel()}r.kind==="faction_flip"&&this.faction&&this.enemies.flip(this.faction),this.client.send(r),this.client.connected||this.fallback.event(r,this.state())}),t.on("run",r=>{r.phase==="attract"&&(this.complete=!1,this.levels.reset(),this.loadLevel(!1),this.shards.reset(!1),this.enemies.reset(),this.land.reset(),this.fallback.reset())}),this.land.onChange(r=>t.emit("land",{changes:r,share:this.land.share()}))]}bus;position;levels;groveObstacles=[];complete=!1;land=new am;client;run;lantern;shards;enemies;cooldown=0;stateElapsed=0;lanternDelta=0;pulseHeld=!1;relicButton="up";fallback=new lm;storyMode=!0;unsubscribers;get faction(){return this.run.faction}get paused(){return this.run.phase!=="playing"||this.levels.transitioning}get elapsed(){return this.run.elapsed}get asksUsed(){return this.run.asksUsed}get obstacles(){return this.levels.current.id==="grove"?this.groveObstacles:this.levels.current.obstacles}setGroveObstacles(e){this.groveObstacles=e.map(t=>({...t})),this.enemies.configure(this.levels.current,this.obstacles)}collide(e){sm(e,this.obstacles,this.levels.current.bounds)}loadLevel(e=!0){const t=this.levels.current;if(this.enemies.reset(),this.enemies.configure(t,this.obstacles),Object.assign(this.position,t.start),e){this.shards.load(t.shards,t.shardCount);for(const n of t.enemies)this.enemies.spawn(this.faction==="bloom"?"chomper":"petalborn",n.count,n.zone,n.x!==void 0&&n.z!==void 0?{x:n.x,z:n.z}:void 0)}this.bus.emit("level",{id:t.id})}start(){this.client.start(),this.land.reset(),this.bus.emit("pause",{paused:!0}),this.bus.emit("run",this.run.snapshot())}select(e){this.run.select(e)}frame(e){e.pressed("bloom")&&this.bus.emit("shrine",{type:"shrine",state:"sleepy",confidence:1}),e.pressed("blight")&&this.bus.emit("shrine",{type:"shrine",state:"angry",confidence:1}),e.pressed("empty")&&this.bus.emit("shrine",{type:"shrine",state:"empty",confidence:1}),this.lanternDelta=e.actions.lanternDelta,this.pulseHeld=e.held("pulse"),e.pressed("ask")&&!this.paused&&this.run.ask()&&(this.land.tax(this.faction),this.client.send({type:"ask"}),this.bus.emit("ask",void 0),this.client.connected||this.bus.emit("director",this.fallback.ask(this.state(),this.levels.current.id,this.shards.nearest(this.position),this.position)))}update(e){if(this.levels.update(e,this.run.phase==="playing",()=>this.loadLevel(),(n,s)=>this.enemies.spawn(this.faction==="bloom"?"chomper":"petalborn",s,n)),this.levels.transitioning||this.run.update(e),!this.paused&&this.faction){this.cooldown=Math.max(0,this.cooldown-e),this.stateElapsed+=e,this.lantern.update(e,this.lanternDelta),this.enemies.update(e,this.position,this.faction,this.lantern.detectionRange,r=>this.run.hurt(r*(this.storyMode?.35:1))),this.paused||this.shards.update(e,this.position,this.lantern.radius,this.pulseHeld,this.faction);const n=this.levels.current;n.shards.filter(r=>this.shards.sites.find(a=>a.id===r.id)?.resolved).length>=n.shardCount&&Math.hypot(this.position.x-n.exit.x,this.position.z-n.exit.z)<=n.exit.radius&&(n.exit.next?this.levels.beginExit(this.position,!0):(this.complete=!0,this.run.finish())),this.stateElapsed>=2&&(this.stateElapsed%=2,this.paused||this.client.send(this.state()))}const t=this.fallback.update(e,this.client.connected,!this.paused,this.faction,this.state(),this.levels.current.id);t&&this.bus.emit("director",t)}state(){const e=this.levels.current.id==="hollow"?"hollow":this.levels.current.id==="deepwood"?"rootdeep":this.position.x<-10?"hollow":this.position.x<10?"glade":"rootdeep",t=this.shards.nearest(this.position);return{type:"state",faction:this.faction,zone:e,shards_found:this.run.shards,shards_total:3,land:this.land.share(),hp:this.run.hp,lantern:this.lantern.value,enemies_near:this.enemies.near(this.position,this.lantern.detectionRange),elapsed_s:this.elapsed,asks_used:this.asksUsed,nearest_shard:t?.id??null,nearest_shard_zone:t?.zone??null}}dispose(){this.client.dispose(),this.lantern.dispose(),this.unsubscribers.forEach(e=>e())}speakAtShrine(){this.faction&&!this.paused&&this.bus.emit("director",this.fallback.interact(this.faction,this.levels.current.id))}}class pm{points;material;geometry=new Ft;constructor(e=70){const t=new Float32Array(e*4);for(let n=0;n<e;n++)t.set([(Math.random()-.5)*70,.4+Math.random()*3.5,(Math.random()-.5)*48,Math.random()*100],n*4);this.geometry.setAttribute("position",new Ct(new Float32Array(e*3),3)),this.geometry.setAttribute("seed",new Ct(t,4)),this.material=new Xt({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uNight:{value:.5},uScale:{value:1},uMotion:{value:1}},vertexShader:`
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
}`}),this.points=new zo(this.geometry,this.material),this.points.frustumCulled=!1}update(e,t,n,s){this.material.uniforms.uTime.value=e,this.material.uniforms.uNight.value=t,this.material.uniforms.uScale.value=n/1080,this.material.uniforms.uMotion.value=s?.15:1}dispose(){this.geometry.dispose(),this.material.dispose()}}function Mo(i=3,e=Math.random){const t=Math.floor(e()*3),n=e()*Math.PI*2,s=t===0?5+Math.floor(e()*3):t===1?5+Math.floor(e()*4):3+Math.floor(e()*3),r=Array.from({length:s},(l,h)=>({angle:n+h/s*Math.PI*2+(t===2?(e()-.5)*.9:0),length:t===0?1.4:t===1?1.6+e()*.8:.8+e()*2.2})),a=t===1?10:t===0?3:6;return{reach:l=>{let h=0;for(const d of r){const u=Math.atan2(Math.sin(l-d.angle),Math.cos(l-d.angle));h=Math.max(h,d.length*Math.exp(-u*u*a*a/4))}return i+h},spikes:r}}const mm={bloom:[16765562,16512746,15442872,10474346],blight:[13098053,9202344,5913210,14872698]},Vn=900;class gm{group=new Rt;geometry=new Ft;pos=new Float32Array(Vn*3);col=new Float32Array(Vn*3);alpha=new Float32Array(Vn);size=new Float32Array(Vn);p=[];next=0;material;reducedMotion=!1;constructor(){for(let t=0;t<Vn;t++)this.p.push({life:0,age:1,x:0,z:0,ox:0,oz:0,tx:0,tz:0,vx:0,vy:0,vz:0,y:0,ring:!1});this.geometry.setAttribute("position",new Ct(this.pos,3)),this.geometry.setAttribute("color",new Ct(this.col,3)),this.geometry.setAttribute("alpha",new Ct(this.alpha,1)),this.geometry.setAttribute("size",new Ct(this.size,1)),this.material=new Xt({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:1}},vertexShader:`
attribute vec3 color; attribute float alpha; attribute float size;
uniform float uScale; varying vec3 vColor; varying float vAlpha;
void main() {
  vColor = color; vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = floor(size * uScale * 26.0 / -mv.z + 0.5);
  gl_Position = projectionMatrix * mv;
}`,fragmentShader:`
varying vec3 vColor; varying float vAlpha;
void main() { if (vAlpha <= 0.01) discard; gl_FragColor = vec4(vColor, vAlpha); }`});const e=new zo(this.geometry,this.material);e.frustumCulled=!1,this.group.add(e)}spawn(e,t,n,s){const r=mm[n],a=new Ne,o=(l,h,d)=>{const u=this.next=(this.next+1)%Vn,c=this.p[u];c.ring=l,c.age=0,c.x=c.ox=e,c.z=c.oz=t,c.y=.12,c.tx=Math.cos(h)*d,c.tz=Math.sin(h)*d;const p=2+Math.random()*3.5;c.vx=Math.cos(h)*p,c.vz=Math.sin(h)*p,c.vy=2+Math.random()*3,c.life=l?.55+Math.random()*.15:.6+Math.random()*.6,a.setHex(r[Math.floor(Math.random()*r.length)]),this.col.set([a.r,a.g,a.b],u*3),this.size[u]=l?6:4+Math.floor(Math.random()*3)};for(let l=0;l<110;l++){const h=l/110*Math.PI*2;o(!0,h,s.reach(h))}for(let l=0;l<(this.reducedMotion?0:50);l++)o(!1,Math.random()*Math.PI*2,0)}update(e,t=1080){this.material.uniforms.uScale.value=t/1080;for(let n=0;n<Vn;n++){const s=this.p[n];if(s.age>=1){this.alpha[n]=0;continue}if(s.age=Math.min(1,s.age+e/s.life),s.ring){const r=this.reducedMotion?1:1-(1-s.age)**3;s.x=s.ox+s.tx*r,s.z=s.oz+s.tz*r,s.y=.12+Math.sin(s.age*Math.PI)*.25}else s.vy-=14*e,s.x+=s.vx*e,s.z+=s.vz*e,s.y=Math.max(.05,s.y+s.vy*e),s.vx*=1-2*e,s.vz*=1-2*e;this.pos[n*3]=Math.round(s.x*8)/8,this.pos[n*3+1]=Math.round(s.y*8)/8,this.pos[n*3+2]=Math.round(s.z*8)/8,this.alpha[n]=s.age<.75?1:(1-s.age)*4}["position","alpha","color","size"].forEach(n=>{this.geometry.attributes[n].needsUpdate=!0})}dispose(){this.geometry.dispose(),this.material.dispose()}}const Xi={uRim:{value:new Ne(16768926)},uRimStrength:{value:.42},uFeet:{value:new Ne(4872762)},uLift:{value:.35}};function Kr(i){const e=i.onBeforeCompile;return i.onBeforeCompile=(t,n)=>{e.call(i,t,n),Object.assign(t.uniforms,Xi),t.vertexShader=`varying vec2 vCardUv;
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
  }`)},i.customProgramCacheKey=()=>"spriteLook",i}function _m(i){Xi.uRim.value.setHex(16768926).lerp(new Ne(11902207),i),Xi.uRimStrength.value=Yn.lerp(.42,.6,i),Xi.uFeet.value.setHex(4872762).lerp(new Ne(2759232),i),Xi.uLift.value=Yn.lerp(.35,.22,i)}function qs(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function kt(i,e,t,n=1,s=!1){const r=document.createElement("canvas");r.width=i,r.height=e;const a=r.getContext("2d");a.imageSmoothingEnabled=!1,t(a,qs(n));const o=new Ai(r);return o.colorSpace=At,o.magFilter=1003,o.minFilter=1005,s&&(o.wrapS=o.wrapT=1e3),o}function Mn(i,e,t){const n=new Image;n.onload=()=>{i.image=n,i.minFilter=1008,i.magFilter=i.wrapS===1e3?1006:1003,i.wrapS===1e3&&(i.wrapS=i.wrapT=1002),i.needsUpdate=!0,t?.()},n.src=`./art/${e}`}const Ce=(i,e,t,n,s=1,r=1)=>{i.fillStyle=e,i.fillRect(t,n,s,r)},nl=()=>kt(32,32,(i,e)=>{Ce(i,"#4f8f3e",0,0,32,32);for(let t=0;t<70;t++){const n=Math.floor(e()*32),s=Math.floor(e()*32);Ce(i,e()<.5?"#3f7a35":"#62a44a",n,s,1,2)}for(let t=0;t<26;t++){const n=Math.floor(e()*32),s=Math.floor(e()*32);Ce(i,"#8cc45a",n,s,1,1),Ce(i,"#3a6e31",n,s+1,1,1)}},11,!0),il=()=>kt(32,32,(i,e)=>{Ce(i,"#33203f",0,0,32,32);for(let t=0;t<60;t++){const n=Math.floor(e()*32),s=Math.floor(e()*32);Ce(i,e()<.5?"#2a1835":"#40295a",n,s,2,1)}for(let t=0;t<12;t++){const n=Math.floor(e()*32),s=Math.floor(e()*32);Ce(i,"#4b3466",n,s,1,1)}},12,!0),vm=()=>{const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,512,512);const n=qs(13),s=(a,o,l,h,d,u)=>{for(let c=0;c<h;c++){l+=(n()-.5)*.45,a+=Math.cos(l),o+=Math.sin(l);const p=Math.min(255,Math.round((d+c/300)*255));t.fillStyle=`rgb(255,${p},0)`,t.fillRect((Math.round(a)%512+512)%512,(Math.round(o)%512+512)%512,u,u),n()<.018&&h>12&&s(a,o,l+(n()<.5?.8:-.8),Math.floor(h*.45),d+c/300,1)}};for(let a=0;a<3;a++)s(n()*512,n()*512,n()*Math.PI*2,260,0,2);const r=new Ai(e);return r.magFilter=1003,r.minFilter=1006,r.generateMipmaps=!1,r.wrapS=r.wrapT=1e3,r},xm=()=>kt(16,16,(i,e)=>{Ce(i,"#77767c",0,0,16,16);for(let t=0;t<16;t+=4){Ce(i,"#55545c",0,t,16,1);for(let n=t/4%2?2:6;n<16;n+=8)Ce(i,"#55545c",n,t,1,4)}for(let t=0;t<18;t++)Ce(i,e()<.5?"#8c8b92":"#66656c",Math.floor(e()*16),Math.floor(e()*16))},14,!0),ym=()=>kt(32,32,(i,e)=>{Ce(i,"#1d4b5c",0,0,32,32);for(let t=0;t<22;t++){const n=Math.floor(e()*30),s=Math.floor(e()*32);Ce(i,"#2c6a7b",n,s,3,1)}for(let t=0;t<8;t++){const n=Math.floor(e()*30),s=Math.floor(e()*32);Ce(i,"#8fd0d6",n,s,2,1)}},16,!0),zi=(i,e=["#2f5e34","#3f7a3a","#5a9a45","#8cc45a"])=>kt(48,64,(t,n)=>{Ce(t,"#3b2a1e",21,40,6,24),Ce(t,"#5a3e2a",22,40,2,24),Ce(t,"#2a1d14",18,60,12,4);const s=(r,a,o)=>{for(let l=-o;l<=o;l++)for(let h=-o;h<=o;h++){const d=Math.hypot(h,l*1.1)+n()*1.6;if(d>o)continue;const u=(-h-l)/o+n()*.6;Ce(t,d>o-1.5?e[0]:u>.9?e[3]:u>.1?e[2]:e[1],r+h,a+l)}};s(24,26,16),s(14,32,10),s(34,31,10),s(24,14,11)},i),So=i=>kt(32,32,(e,t)=>{Ce(e,"#e9ddb8",13,16,6,16),Ce(e,"#c9b98f",17,16,2,16);for(let n=0;n<14;n++)for(let s=-14;s<=14;s++)Math.hypot(s,(n-14)*1.25)>15||Ce(e,n<2?"#8e3b2c":t()<.08?"#f6e6c8":s<-4?"#d4683f":"#b8502f",16+s,4+n);Ce(e,"#6e2e22",2,17,28,1)},i),Mm=()=>kt(8,10,i=>{Ce(i,"#3f7a35",3,4,1,6),Ce(i,"#3f7a35",4,7,2,1),Ce(i,"#ffffff",2,1,4,3),Ce(i,"#ffffff",3,0,2,5),Ce(i,"#e0ae3a",3,2,2,1)},17),Sm=()=>kt(8,10,i=>{Ce(i,"#1d1229",3,2,2,8),Ce(i,"#1d1229",1,4,2,1),Ce(i,"#1d1229",5,6,2,1),Ce(i,"#1d1229",4,0,1,2),Ce(i,"#c7dc45",4,3,1,1),Ce(i,"#c7dc45",1,3,1,1)},18),bm=()=>kt(96,96,(i,e)=>{for(let n=0;n<96;n++)for(let s=0;s<96;s++){const r=Math.hypot(s-48+.5,n-48+.5);if(r>46)continue;const a=r>44||Math.abs(r-32)<1||Math.abs(r-18)<1||Math.abs(r-7)<1,o=Math.atan2(n-48,s-48),l=Math.abs(Math.sin(o*(r>32?12:r>18?8:4)))<.06&&r>7;Ce(i,a||l?"#4f5058":e()<.1?"#93929a":e()<.2?"#6b6a72":"#7e7d85",s,n)}for(let n=0;n<40;n++){const s=e()*Math.PI*2,r=20+e()*26;Ce(i,"#4f8f3e",Math.round(48+Math.cos(s)*r),Math.round(48+Math.sin(s)*r),2,1)}},19),wm=()=>kt(16,24,(i,e)=>{Ce(i,"#55545c",3,3,10,21),Ce(i,"#7e7d85",4,3,5,21),Ce(i,"#66656c",9,3,3,21);for(let t=0;t<10;t++)Ce(i,"#4f8f3e",3+Math.floor(e()*10),2+Math.floor(e()*3));Ce(i,"#4f5058",6,10,3,1),Ce(i,"#4f5058",7,9,1,4)},32),Tm=()=>kt(16,24,i=>{Ce(i,"#2a1838",5,2,6,20),Ce(i,"#4e2f66",6,3,4,18),Ce(i,"#8c6aa8",6,4,2,10),Ce(i,"#2a1838",3,14,3,8),Ce(i,"#2a1838",11,12,3,10),Ce(i,"#f6e6ff",7,10,3,2),Ce(i,"#c7dc45",8,10,1,2)},33),bo=()=>kt(24,18,(i,e)=>{for(let t=0;t<18;t++)for(let n=0;n<24;n++)Math.hypot((n-12)/12,(t-11)/8)<1-e()*.12&&Ce(i,t<8?"#5a9a45":"#3f7a3a",n,t);for(let t=0;t<9;t++)Ce(i,["#eba3b8","#fbf6ea","#e0ae3a"][t%3],4+Math.floor(e()*16),5+Math.floor(e()*9))},34),Em=()=>kt(24,24,(i,e)=>{Ce(i,"#3a2a4a",10,12,4,12);for(let t=0;t<10;t++)for(let n=-10;n<=10;n++)Math.hypot(n,(t-10)*1.2)<11&&Ce(i,t>7?"#c7dc45":e()<.1?"#8c6aa8":"#4e3866",12+n,3+t)},35);class kr{root=new Rt;card;shadow;meta;texture;animation="";clock=0;facing=1;direction="s";action="";actionLeft=0;hit=0;held="";reducedMotion=!1;constructor(e,t,n=2.2,s,r=!1){this.root.visible=!r,this.texture=e,this.meta=t,e.repeat.set(1/t.columns,t.frameHeight/e.image.height);const a=n*t.frameWidth/t.frameHeight;this.card=new lt(new Et(a,n).translate(0,n/2,0),Kr(new sn({map:e,alphaTest:.5,side:2}))),this.shadow=new lt(new Hs(a*.32,20),new Tn({color:1182744,map:Am(),transparent:!0,opacity:.55,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.04,this.shadow.scale.y=.55,this.root.add(this.shadow,this.card),s&&this.loadSheet(s)}async loadSheet(e){try{const t=await fetch(`./art/${e}.json`);if(!t.ok)return;const n=await t.json(),s=new Image;s.onload=()=>{this.meta=n,this.texture.image=s,this.root.visible=!0,this.texture.minFilter=1008,this.texture.magFilter=1003,this.texture.needsUpdate=!0,this.texture.repeat.set(n.frameWidth/s.width,n.frameHeight/s.height);const r=this.card.geometry.parameters.height,a=r*n.frameWidth/n.frameHeight;this.card.geometry.dispose(),this.card.geometry=new Et(a,r).translate(0,r/2,0)},s.src=`./art/${e}.png`}catch{}}setOpacity(e){const t=this.card.material;t.transparent=e<1,t.opacity=e,this.shadow.material.opacity=.55*e}act(e,t){this.meta.animations[e]&&(this.action=e,this.actionLeft=t)}hold(e){this.held=e}hurt(){this.hit=1,this.act("hurt",.45)}update(e,t,n){this.clock+=e;const s=Math.hypot(t,n)>5e-4;if(s){const p=(Math.round(Math.atan2(n,t)/(Math.PI/4))+8)%8,_=[["e",1],["se",1],["s",1],["se",-1],["e",-1],["ne",-1],["n",1],["ne",1]];this.direction=_[p][0],this.facing=_[p][1]}this.actionLeft-=e;const r=s?"walk":"idle",a=this.actionLeft>0&&this.action?this.action:this.held&&this.meta.animations[this.held]?this.held:this.pick(r);a!==this.animation&&(this.animation=a,this.clock=0);const o=this.meta.animations[a],l=o[Math.floor(this.clock*this.meta.fps)%o.length],h=this.texture.image,d=l%this.meta.columns,u=Math.floor(l/this.meta.columns);this.texture.offset.set(d*this.meta.frameWidth/h.width,1-(u+1)*this.meta.frameHeight/h.height);const c=this.facing;this.card.scale.set(c,1,1),this.hit=Math.max(0,this.hit-e*2.5),this.card.material.emissive.setRGB(this.hit*.8,this.hit*.1,this.hit*.1)}pick(e){const t=this.meta.animations,n={s:"front",se:"front",e:"side",ne:"back",n:"back"}[this.direction];return[`${e}_${this.direction}`,`${e}_${n}`,`${e}_side`,e,"idle_side"].find(s=>t[s])??Object.keys(t)[0]}dispose(){this.card.geometry.dispose(),this.card.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose(),this.texture.dispose()}}let Ps=null;function Am(){if(Ps)return Ps;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Ps=new Ai(i),Ps}function wo(){const i={w:24,h:32};return{texture:kt(i.w*6,i.h,t=>{const n=(r,a,o,l=1,h=1)=>{t.fillStyle=r,t.fillRect(a,o,l,h)},s=(r,a,o,l)=>{const h=d=>r+d;n("#2a1d14",h(9),26+a,3,6-a),n("#2a1d14",h(13),26+o,3,6-o),n("#1e1813",h(6),12+l,13,15-l),n("#8a6a46",h(7),13+l,11,13-l),n("#a5825a",h(8),13+l,4,12-l),n("#6e5236",h(15),14+l,3,12-l),n("#e9ddb8",h(7),24,11,2),n("#1e1813",h(6),2+l,13,12),n("#6e5236",h(7),3+l,11,10),n("#8a6a46",h(8),3+l,6,3),n("#f1d3a8",h(11),7+l,6,5),n("#1e1813",h(15),8+l,1,2),n("#d9b48a",h(11),11+l,6,1),n("#3b2a1e",h(19),15+l,1,3),n("#1e1813",h(18),18+l,4,5),n("#ffd36b",h(19),19+l,2,3),n("#fff1c0",h(19),20+l,1,1)};s(0,0,0,0),s(i.w,0,0,1),s(i.w*2,0,2,0),s(i.w*3,1,1,1),s(i.w*4,2,0,0),s(i.w*5,1,1,1)},5),meta:{frameWidth:i.w,frameHeight:i.h,columns:6,fps:8,animations:{idle_side:[0,1],walk_side:[2,3,4,5]}}}}const Rm=()=>({texture:kt(2,3,()=>{},1),meta:{frameWidth:2,frameHeight:3,columns:1,fps:8,animations:{idle_side:[0]}}});class Cm{group=new Rt;actors=new Map;latest=[];reducedMotion=!1;set(e){this.latest=e}update(e){const t=new Set;for(const n of this.latest){t.add(n.id);let s=this.actors.get(n.id);if(s&&s.kind!==n.kind&&(this.drop(n.id),s=void 0),!s){const o=Rm(),l=new kr(o.texture,o.meta,n.kind==="chomper"?2.2:2,`${n.kind}/sheet`);l.reducedMotion=this.reducedMotion,s={actor:l,kind:n.kind,x:n.x,z:n.z,fade:1,defeated:!1},l.root.position.set(n.x,0,n.z),this.actors.set(n.id,s),this.group.add(l.root)}const r=n.x-s.x,a=n.z-s.z;s.x=n.x,s.z=n.z,n.state==="attack"&&s.actor.act("attack",.3),n.state==="defeated"&&!s.defeated&&(s.defeated=!0,s.actor.act("defeated",99)),s.actor.update(e,s.defeated?0:r,s.defeated?0:a),s.actor.root.position.set(n.x,0,n.z),s.defeated&&(s.fade-=e/1.4,s.actor.setOpacity(Math.max(0,s.fade)))}for(const n of[...this.actors.keys()])(!t.has(n)||this.actors.get(n).fade<=0)&&this.drop(n)}drop(e){const t=this.actors.get(e);t&&(this.group.remove(t.actor.root),t.actor.dispose(),this.actors.delete(e))}dispose(){for(const e of[...this.actors.keys()])this.drop(e)}}class Pm{group=new Rt;texture=kt(8,12,e=>{e.fillStyle="#4e2f66",e.fillRect(2,1,4,11),e.fillStyle="#c9a7e8",e.fillRect(3,2,1,6)},3);geometry=new Et(1.3,1.95).translate(0,.97,0);beamGeometry=new Xr(.35,.7,14,16,1,!0).translate(0,7,0);beamMaterial=new Tn({color:13215743,transparent:!0,opacity:.18,blending:2,depthWrite:!1,side:2});items=new Map;time=0;reducedMotion=!1;constructor(e){Mn(this.texture,"shard/shard.png"),this.tilt=-(Math.PI/2-e)*.85}tilt;set(e){for(const t of e){let n=this.items.get(t.id);if(!n){const s=Kr(new sn({map:this.texture,emissiveMap:this.texture,emissive:11567359,alphaTest:.5,side:2})),r=new lt(this.geometry,s);r.position.set(t.x,0,t.z),r.rotation.x=this.tilt;const a=new lt(this.beamGeometry,this.beamMaterial);a.position.set(t.x,0,t.z),this.group.add(r,a),n={card:r,beam:a},this.items.set(t.id,n)}n.card.visible=t.visible&&!t.resolved,n.beam.visible=t.hinted&&t.active&&!t.resolved,n.card.userData.progress=t.progress}}update(e){this.time+=e;for(const{card:t,beam:n}of this.items.values()){const s=t.userData.progress??0,r=this.reducedMotion?0:s*.06*Math.sin(this.time*60);t.position.x+=r-(t.userData.shake??0),t.userData.shake=r,t.material.emissive.setRGB(.55+s,.4+s*.6,.9+s),n.material.opacity=.12+.08*Math.sin(this.time*2.4)}}position(e){return this.items.get(e)?.card.position??null}dispose(){for(const{card:e}of this.items.values())e.material.dispose();this.texture.dispose(),this.geometry.dispose(),this.beamGeometry.dispose(),this.beamMaterial.dispose(),this.group.clear()}}function Lm(i,e,t,n,s){const r=Math.abs(i)-t+s,a=Math.abs(e)-n+s;return Math.hypot(Math.max(r,0),Math.max(a,0))+Math.min(Math.max(r,a),0)-s}function Im(i,e){const t=Math.atan2(e/20,i/30);return Math.max(1,1.5+.8*Math.sin(t*5+1.3)+.6*Math.sin(t*9+.4)+.4*Math.sin(t*14+2.1))}const sl=(i,e)=>Lm(i,e,30.5,20.5,4)-Im(i,e),Pr=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Dm=(i,e)=>.5+.25*Math.sin(i*.21+1.7)+.2*Math.sin(e*.27-i*.09)+.15*Math.sin((i+e)*.43),Nm=-1.25;function Br(i,e){const t=sl(i,e);if(t<=0)return-.04;const n=(1-Math.exp(-t/1.8))*(2.4+3.4*Dm(i,e))+Math.min(t,14)*.18+.22*Math.exp(-((t-.7)**2)*3),s=-1.45*Pr(0,1.8,t),r=Pr(17,21.5,e)*(1-Pr(33,40,Math.abs(i)));return n*(1-r)+s*r}function Um(i,e,t){const o=new Et(120,86,240,172);o.rotateX(-Math.PI/2);const l=o.attributes.position;for(let c=0;c<l.count;c++){const p=l.getX(c)+0,_=l.getZ(c)+-4;l.setXYZ(c,p,Br(p,_),_)}o.computeVertexNormals();const h={uSoil:{value:e},uCliff:{value:t},uTile:{value:2}},d=new sn({map:i});return d.onBeforeCompile=c=>{Object.assign(c.uniforms,h),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
diffuseColor.rgb *= mix(g, c, steep);`)},{mesh:new lt(o,d),uniforms:h,dispose:()=>{o.dispose(),d.dispose()}}}const Ls=30,Gi=20,Xn=[];class Fm{group=new Rt;disposables=[];water;terrainUniforms;constructor(e){const t=qs(7),n=nl(),s=il(),r=xm(),a=Um(n,s,r);this.terrainUniforms=a.uniforms,Mn(n,"ground/grass.png",()=>{a.uniforms.uTile.value=9}),Mn(s,"ground/blight-soil.png"),Mn(r,"ground/cliff.png"),this.group.add(a.mesh),this.disposables.push(a,n,s,r),this.water=ym(),Mn(this.water,"ground/water.png"),this.water.repeat.set(30,8);const o=new sn({map:this.water,emissive:730672,transparent:!0,opacity:.92}),l=new Et(130,26),h=new lt(l,o);h.rotation.x=-Math.PI/2,h.position.set(0,Nm,Gi+13),this.group.add(h),this.disposables.push(this.water,o,l);const d=new En().setFromEuler(new rn(-(Math.PI/2-e)*.85,0,0)),u=new je,c=new z,p=new z,_=(A,B,Y,X,$)=>{$&&Mn(A,$);const ee=new Et(B,Y).translate(0,Y/2,0),Me=Kr(new sn({map:A,alphaTest:.5,side:2})),me=new Zi(ee,Me,Math.max(1,X.length));return me.count=X.length,X.forEach((qe,Oe)=>me.setMatrixAt(Oe,u.compose(c.set(qe.x,qe.y,qe.z),d,p.setScalar(qe.s)))),this.group.add(me),this.disposables.push(ee,Me,A,me),Me},M=[],m=[],f=[];for(let A=0;A<900&&M.length+m.length+f.length<260;A++){const B=(t()-.5)*112,Y=-44+t()*64,X=sl(B,Y),$=Br(B,Y);if(X<1.2||$<.3||t()>Math.exp(-X/14)+.15)continue;const ee={x:B,y:$-.1,z:Y,s:.85+t()*.6};(B>12+(t()-.5)*10?f:t()<.5?M:m).push(ee)}_(zi(21),4.5,6,M,"props/round-tree.png"),_(zi(22,["#24432f","#2f5e34","#3f7a3a","#6fa35a"]),4.5,6,m,"props/tall-tree.png"),_(zi(23,["#3a2a4a","#4e3866","#6a4c86","#8c6aa8"]),4.5,6,f,"props/blight-tree.png");const T=[],C=[],y=[],b=[],S=(A,B)=>{const Y={x:A+(t()-.5)*.6,y:Math.max(0,Br(A,B)),z:B+(t()-.5)*.6,s:.7+t()*.5},X=A>6+(t()-.5)*8;(t()<.65?X?b:T:X?C:y).push(Y)};for(let A=-Ls;A<=Ls;A+=2.2+t()*1.2)S(A,-Gi-.6),S(A,Gi+.6);for(let A=-Gi+1.5;A<=Gi-1.5;A+=2.2+t()*1.2)S(-Ls-.6,A),S(Ls+.6,A);_(bo(),2.4,1.8,T,"props/flower-bush.png"),_(So(31),2.4,2.4,y,"props/mushrooms.png"),_(Em(),2.4,2.4,b,"props/blight-mushrooms.png"),_(bo(),2.4,1.8,C,"props/flower-bush.png").color.setHex(9071272);const v=[],E=[],R=[];for(const[A,B]of[[-22,-12],[-16,13],[-25,4]])v.push({x:A,y:0,z:B,s:1.1}),Xn.push({x:A,z:B,r:.9});for(const[A,B]of[[-11,-14],[-26,-16]])E.push({x:A,y:0,z:B,s:1.05}),Xn.push({x:A,z:B,r:.7});for(const[A,B]of[[18,-13],[24,9],[13,15]])R.push({x:A,y:0,z:B,s:1.05}),Xn.push({x:A,z:B,r:.7});_(So(32),2.4,2.4,v,"props/mushrooms.png"),_(zi(24),4.5,6,E,"props/round-tree.png"),_(zi(25,["#3a2a4a","#4e3866","#6a4c86","#8c6aa8"]),4.5,6,R,"props/blight-tree.png");const L=[];for(let A=0;A<6;A++){const B=A/6*Math.PI*2+Math.PI/6,Y=Math.cos(B)*5.4,X=Math.sin(B)*4.6;L.push({x:Y,y:0,z:X,s:1}),Xn.push({x:Y,z:X,r:.55})}_(wm(),1.4,2.1,L,"props/ruin-pillar.png");const D=_(Tm(),1.8,2.7,[{x:0,y:0,z:-.2,s:1}],"props/amulith-gem.png");D.emissiveMap=D.map,D.emissive.setRGB(.9,.7,1.2),Xn.push({x:0,z:-.2,r:.75});const O=bm();Mn(O,"props/shrine-circle.png");const I=new Hs(4.2,48),G=new lt(I,new sn({map:O,alphaTest:.5,polygonOffset:!0,polygonOffsetFactor:-2}));G.rotation.x=-Math.PI/2,G.position.y=.03,this.group.add(G),this.disposables.push(O,I,G.material)}update(e){this.water.offset.set(e*.02,Math.sin(e*.4)*.03)}dispose(){this.disposables.forEach(e=>e.dispose()),Xn.length=0}}const Wt=60,dn=40,Lr=-30,Ir=-20,To=[15442872,16512746,14724666,13215720,15442872];class km{group=new Rt;mask=new Uint8Array(Wt*dn*4);maskTexture=new Wr(this.mask,Wt,dn,1023);value=new Float32Array(Wt*dn);target=new Float32Array(Wt*dn);active=new Set;uniforms={uMask:{value:this.maskTexture},uSoil:{value:il()},uVein:{value:vm()},uTime:{value:0},uNight:{value:.5},uTile:{value:2}};material;geometry=new Et(Wt,dn);flowers;thorns;sprigGeometry=new Et(.42,.52).translate(0,.26,0);offsets=[];matrix=new je;quaternion=new En;scratchPosition=new z;scratchScale=new z;disposables=[];reducedMotion=!1;constructor(e){this.maskTexture.magFilter=1006,this.maskTexture.minFilter=1006;const t=nl();Mn(t,"ground/grass.png",()=>{this.uniforms.uTile.value=9}),Mn(this.uniforms.uSoil.value,"ground/blight-soil.png"),this.material=new sn({map:t}),this.material.onBeforeCompile=h=>{Object.assign(h.uniforms,this.uniforms),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vGround;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGround = (modelMatrix * vec4(position, 1.0)).xz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vGround;
uniform sampler2D uMask, uSoil, uVein;
uniform float uTime, uNight, uTile;
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float blightAt(vec2 g) {
  vec2 q = floor(g * 8.0) / 8.0; // snap to the 16 px per tile grid so edges stay pixel crisp
  float m = texture2D(uMask, (q - vec2(${Lr}.0, ${Ir}.0)) / vec2(${Wt}.0, ${dn}.0)).r;
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
float raw = texture2D(uMask, (floor(vGround * 8.0) / 8.0 - vec2(${Lr}.0, ${Ir}.0)) / vec2(${Wt}.0, ${dn}.0)).r;
float grow = clamp(raw * 1.3 - 0.15, 0.0, 1.0);
float veinOn = smoothstep(0.3, 0.8, vein.r) * step(vein.g, grow) * b;
float pulse = 0.75 + 0.25 * sin(uTime * 2.2 - vein.g * 9.0);
totalEmissiveRadiance += vec3(0.78, 0.86, 0.27) * veinOn * pulse * (0.12 + 0.75 * uNight);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.1, 0.12, 0.03), veinOn * 0.5);`)};const n=new lt(this.geometry,this.material);n.rotation.x=-Math.PI/2,this.group.add(n);const s=h=>new sn({map:h,alphaTest:.5,side:2}),r=s(Mm()),a=s(Sm());this.flowers=new Zi(this.sprigGeometry,r,Wt*dn),this.thorns=new Zi(this.sprigGeometry,a,Wt*dn),this.quaternion.setFromEuler(new rn(-(Math.PI/2-e)*.6,0,0));const o=qs(42),l=new Ne;for(let h=0;h<Wt*dn;h++)this.offsets.push({x:Lr+h%Wt+.15+o()*.7,z:Ir+Math.floor(h/Wt)+.15+o()*.7,s:.75+o()*.6}),this.flowers.setColorAt(h,l.setHex(To[Math.floor(o()*To.length)])),this.writeSprig(h,0);this.flowers.instanceColor.needsUpdate=!0,this.group.add(this.flowers,this.thorns),this.disposables.push(this.geometry,this.material,this.maskTexture,t,this.uniforms.uSoil.value,this.uniforms.uVein.value,this.sprigGeometry,r,a,r.map,a.map)}apply(e,t=!1){for(const n of e){const s=n.row*Wt+n.column;this.target[s]=n.faction==="blight"?1:n.faction==="bloom"?0:.5,t||this.reducedMotion?(this.value[s]=this.target[s],this.writeCell(s)):this.active.add(s)}this.maskTexture.needsUpdate=!0,this.flowers.instanceMatrix.needsUpdate=this.thorns.instanceMatrix.needsUpdate=!0}setNight(e){this.uniforms.uNight.value=e}update(e,t){if(this.uniforms.uTime.value=t,!this.active.size)return;const n=e*1.6;for(const s of this.active){const r=this.target[s]-this.value[s];this.value[s]=Math.abs(r)<=n?this.target[s]:this.value[s]+Math.sign(r)*n,this.value[s]===this.target[s]&&this.active.delete(s),this.writeCell(s)}this.maskTexture.needsUpdate=!0,this.flowers.instanceMatrix.needsUpdate=this.thorns.instanceMatrix.needsUpdate=!0}writeCell(e){this.mask[e*4]=Math.round(this.value[e]*255),this.writeSprig(e,this.value[e])}writeSprig(e,t){const n=this.offsets[e],s=o=>o<=0?0:o>=1?1:1+.25*Math.sin(o*Math.PI)-(1-o)*(1-o)*.6,r=e%2?0:s(1-t*2),a=e%3?0:s(t*2-1);this.flowers.setMatrixAt(e,this.matrix.compose(this.scratchPosition.set(n.x,0,n.z),this.quaternion,this.scratchScale.setScalar(n.s*Math.max(1e-4,r)))),this.thorns.setMatrixAt(e,this.matrix.compose(this.scratchPosition.set(n.x,0,n.z),this.quaternion,this.scratchScale.setScalar(n.s*1.1*Math.max(1e-4,a))))}dispose(){this.disposables.forEach(e=>e.dispose()),this.flowers.dispose(),this.thorns.dispose()}}const Hi={sky:16773590,ground:5929554,hemi:1.15,sun:2.4,sunColor:16770754,fog:13227192,fogDensity:.01,lantern:1.2},Wi={sky:5922728,ground:1970736,hemi:.32,sun:.3,sunColor:9207039,fog:1380394,fogDensity:.022,lantern:9};class Bm{constructor(e){this.scene=e,e.children.filter(t=>t.isLight).forEach(t=>{t.intensity=0}),this.sun.position.set(-14,22,10),this.lantern.position.set(0,2.2,0),e.add(this.hemi,this.sun,this.sun.target,this.lantern),e.fog=this.fog,this.apply()}scene;hemi=new Eh;sun=new Yo;lantern=new Rh(16762219,3,12,1.6);fog=new Hr(0,.01);clear=new Ne;night=.5;target=.5;lanternRadius=7.5;b=new Ne;setFaction(e){this.target=e==="bloom"?0:e==="blight"?1:.5}setLanternRadius(e){this.lanternRadius=e}update(e,t,n,s){const r=this.target-this.night;this.night=s?this.target:this.night+r*(1-Math.exp(-e*1.4)),this.lantern.position.set(t.x+.4,2.2,t.z+.3),this.lantern.distance=this.lanternRadius*1.7;const a=s?1:1+Math.sin(n*11)*.03+Math.sin(n*5.3)*.04;this.lantern.intensity=Yn.lerp(Hi.lantern,Wi.lantern,this.night)*a,this.apply()}mix(e,t){return t.setHex(Hi[e]).lerp(this.b.setHex(Wi[e]),this.night)}apply(){const e=this.night,t=Yn.lerp;this.mix("sky",this.hemi.color),this.mix("ground",this.hemi.groundColor),this.hemi.intensity=t(Hi.hemi,Wi.hemi,e),this.mix("sunColor",this.sun.color),this.sun.intensity=t(Hi.sun,Wi.sun,e),this.mix("fog",this.fog.color),this.fog.density=t(Hi.fogDensity,Wi.fogDensity,e),this.clear.copy(this.fog.color),_m(e)}dispose(){this.scene.remove(this.hemi,this.sun,this.sun.target,this.lantern),this.lantern.dispose(),this.sun.dispose(),this.hemi.dispose()}}class Om{constructor(e){this.renderer=e;const t=e.extensions.has("EXT_color_buffer_half_float")||e.extensions.has("EXT_color_buffer_float");this.target=new Jt(1,1,{type:t?1016:1009,generateMipmaps:!0,minFilter:1008,magFilter:1003,depthBuffer:!0}),this.uniforms.tColor.value=this.target.texture,this.quad=new lt(new Et(2,2),new Xt({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
}`})),this.scene.add(this.quad)}renderer;target;scene=new No;camera=new Vs(-1,1,1,-1,0,1);quad;uniforms={tColor:{value:null},uTexel:{value:new De},uFocus:{value:.46},uBand:{value:.16},uBlur:{value:1},uNight:{value:.5},uGlow:{value:.55},uLodShift:{value:0}};pixelHeight=448;enabled=!0;setSize(e,t){const n=this.pixelHeight>0&&t>this.pixelHeight?this.pixelHeight/t:1;this.target.setSize(Math.max(1,Math.round(e*n)),Math.max(1,Math.round(t*n))),this.uniforms.uLodShift.value=Math.log2(1/n),this.uniforms.uTexel.value.set(1/e,1/t).multiplyScalar(t/1080)}render(e,t){if(!this.enabled){this.renderer.setRenderTarget(null),this.renderer.render(e,t);return}this.renderer.setRenderTarget(this.target),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}dispose(){this.target.dispose(),this.quad.geometry.dispose(),this.quad.material.dispose()}}const rl="amulith.settings",Eo=new URLSearchParams(window.location.search),zm=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Gm(){const i={reducedMotion:zm||Eo.get("reducedMotion")==="1",subtitleSize:"M",judge:Eo.get("judge")==="1",volume:.6,muted:!1};try{const e=JSON.parse(localStorage.getItem(rl)??"{}");return{...i,reducedMotion:typeof e.reducedMotion=="boolean"?e.reducedMotion:i.reducedMotion,subtitleSize:["S","M","L"].includes(e.subtitleSize)?e.subtitleSize:i.subtitleSize,volume:typeof e.volume=="number"&&Number.isFinite(e.volume)?Math.max(0,Math.min(1,e.volume)):i.volume,muted:typeof e.muted=="boolean"?e.muted:!1}}catch{return i}}const Or=new Set,ot=Gm();function vi(i){Object.assign(ot,i);try{const{judge:e,...t}=ot;localStorage.setItem(rl,JSON.stringify(t))}catch{}Or.forEach(e=>e(ot))}function al(i){return Or.add(i),()=>{Or.delete(i)}}function Hm(i){const{renderer:e,scene:t,camera:n,events:s,player:r,session:a}=i,o=new URLSearchParams(window.location.search);let l=ot.reducedMotion;e.toneMapping=7,e.toneMappingExposure=1.05,i.world&&(i.world.group.visible=!1),i.replaces?.forEach(A=>{A.visible=!1});const h=Math.atan2(n.position.y,n.position.z),d=new Bm(t),u=new km(h),c=new Fm(h),p=new pm,_=new gm,M=new Om(e),m=new Cm,f=new Pm(h);M.enabled=o.get("post")!=="0",o.has("px")&&(M.pixelHeight=Number(o.get("px"))||0),u.reducedMotion=_.reducedMotion=l,t.add(u.group,c.group,p.points,_.group,m.group,f.group),Un(u.group),Un(c.group);const T=wo(),C=new kr(T.texture,T.meta,2,"wanderer/sheet");C.reducedMotion=l,r.cutout.visible=!1,r.visual.add(C.root);const y=(A,B,Y,X,$=2)=>{const ee=wo(),Me=new kr(ee.texture,ee.meta,$,A,!0);return Me.hold(B),Me.root.position.set(Y,0,X),t.add(Me.root),Me},b=y("lenny/sheet","idle_s",-1.9,1),S=y("tk/sheet","asleep_s",2.4,-1.3,2.75);b.reducedMotion=S.reducedMotion=l,b.root.visible=S.root.visible=a.levels.current.id==="grove";const P=a.land.cells.map((A,B)=>({column:B%a.land.width,row:Math.floor(B/a.land.width),faction:A}));u.apply(P,!0),d.setFaction(a.faction);const v=[al(A=>{l=u.reducedMotion=_.reducedMotion=C.reducedMotion=m.reducedMotion=f.reducedMotion=b.reducedMotion=S.reducedMotion=A.reducedMotion}),s.on("level",A=>{b.root.visible=S.root.visible=A.id==="grove"}),s.on("enemies",A=>m.set(A)),s.on("shards",A=>f.set(A)),s.on("shard-resolved",A=>{const B=f.position(A.id);if(B)for(let Y=0;Y<2;Y++)_.spawn(B.x,B.z,A.faction,Mo(1.2+Y*1.6))}),s.on("land",A=>u.apply(A.changes)),s.on("faction",A=>{d.setFaction(A.faction),C.loadSheet(A.faction?`wanderer/sheet-${A.faction}`:"wanderer/sheet")}),s.on("pulse-applied",A=>{const B=Mo();for(const Y of B.spikes)for(const X of[.55,.9]){const $=3+Y.length*X;a.land.convert(A.x+Math.cos(Y.angle)*$,A.z+Math.sin(Y.angle)*$,.6+Y.length*(1-X)*.6,A.faction)}_.spawn(A.x,A.z,A.faction,B),C.act("pulse",.35)}),s.on("ask",()=>C.act("ask",.9)),s.on("dash",()=>C.act("dash",.18)),s.on("game-event",A=>{A.kind==="player_hurt"&&C.hurt()}),s.on("lantern",A=>d.setLanternRadius(A.radius)),s.on("thinking",A=>{O=A.active}),s.on("run",A=>{S.hold(A.result==="win"&&A.faction==="bloom"?"stand_s":"asleep_s")})],E=new z().copy(r.position),R=new De;let L=0;const D=o.get("llmThrottle")==="1";let O=!1,I=0;const G=()=>{e.getDrawingBufferSize(R),M.setSize(R.x,R.y)};return G(),{render(A){L+=A,C.update(A,r.visual.position.x-E.x,r.visual.position.z-E.z),b.update(A,0,0),S.update(A,0,0),E.copy(r.visual.position),d.update(A,r.visual.position,L,l),Fr.uLantern.value.set(r.visual.position.x,r.visual.position.z,d.lanternRadius),Fr.uLanternDark.value=.3+.45*d.night,Un(m.group),Un(f.group),Un(r.visual),Un(b.root),Un(S.root),u.setNight(d.night),u.update(A,L),c.update(L),_.update(A,R.y),m.update(A),f.update(A),p.update(L,d.night,R.y,l),M.uniforms.uNight.value=d.night,e.setClearColor(d.clear),!((O||D)&&I++%3!==0)&&M.render(t,n)},resize:G,dispose(){v.forEach(A=>A()),t.remove(u.group,c.group,p.points,_.group,m.group,f.group),r.visual.remove(C.root),t.remove(b.root,S.root),[d,u,c,p,_,M,C,b,S,m,f].forEach(A=>A.dispose())}}}const Ao=Number(new URLSearchParams(window.location.search).get("render"))||1080,ol=Math.round(Ao*16/9)*Ao;function Wm(i,e,t,n=ol){const s=Math.max(1,i*e);return Math.min(t,2,Math.sqrt(n/s))}function Vm(i,e,t,n=window.devicePixelRatio,s=ol){i.setPixelRatio(Wm(e,t,n,s)),i.setSize(e,t)}function Xm(i,e){let t=e,n=null,s=null,r=null,a=null,o=null,l=!1,h=!1,d=!1,u=null,c=0,p=!1,_=null,M=!1,m=!1;const f=new Map,T=new Map,C=new Set,y=new Audio;y.preload="none";const b=(A,B,Y=.08)=>{n&&(A.cancelScheduledValues(n.currentTime),A.setTargetAtTime(B,n.currentTime,Y))},S=()=>{if(!(!s||!r||!n)){b(s.gain,t.muted?0:t.volume),b(r.gain,p?.055:l?.12:.3,p?.04:.25);for(const[A,B]of T)b(B.gain.gain,o===A?1:0,.5);y.volume=t.muted?0:t.volume}},P=()=>{c++,y.pause(),p=!1,S()},v=A=>{if(!h||!n||n.state!=="running"){_=A;return}P();const B=c;y.src=A.url,y.volume=t.muted?0:t.volume,y.play().then(()=>{B!==c||d||(p=!0,S())}).catch(()=>{B===c&&(p=!1,S())})},E=()=>{p=!1,S()};y.addEventListener("ended",E),y.addEventListener("error",E),y.addEventListener("playing",()=>{p=!0,S()}),y.addEventListener("waiting",E);const R=()=>{if(!n||!r||!h||M||d)return;const A=["bloom","blight"];if(!A.every(Y=>f.has(Y)))return;M=!0;const B=n.currentTime+.03;for(const Y of A){const X=n.createBufferSource(),$=n.createGain();X.buffer=f.get(Y),X.loop=!0,$.gain.value=o===Y?1:0,X.connect($).connect(r),X.start(B),T.set(Y,{source:X,gain:$})}S()},L=async()=>{const A=["bloom","blight","pulse","shard-found","shard-resolved","hurt","faction-flip","pause","select"];await Promise.all(A.map(async B=>{try{const Y=await fetch(`./audio/${B}.wav`);if(!Y.ok)return;const X=await Y.arrayBuffer();if(d||!n)return;const $=await n.decodeAudioData(X);d||f.set(B,$)}catch{}})),R()},D=()=>{if(!d)try{n||(n=new AudioContext,s=n.createGain(),r=n.createGain(),a=n.createGain(),s.gain.value=t.muted?0:t.volume,r.gain.value=.3,a.gain.value=.55,r.connect(s),a.connect(s),s.connect(n.destination)),n.resume().then(()=>{if(!(d||n?.state!=="running")&&(h=!0,u??=L(),R(),_)){const A=_;_=null,v(A)}}).catch(()=>{})}catch{}},O=A=>{A.isTrusted&&D()};window.addEventListener("keydown",O),window.addEventListener("pointerdown",O);const I=A=>{const B=f.get(A);if(!h||!n||n.state!=="running"||!a||!B||d||C.size>=8)return;const Y=n.createBufferSource();Y.buffer=B,Y.connect(a),C.add(Y),Y.onended=()=>{C.delete(Y),Y.disconnect()},Y.start()},G=[i.on("faction",A=>{o=A.faction,o||(_=null,P()),S()}),i.on("pulse-applied",()=>I("pulse")),i.on("game-event",A=>{A.kind==="shard_found"&&I("shard-found"),A.kind==="shard_resolved"&&I("shard-resolved"),A.kind==="player_hurt"&&I("hurt"),A.kind==="faction_flip"&&I("faction-flip")}),i.on("pause",A=>{l!==A.paused&&o&&I("pause"),l=A.paused,S()}),i.on("speech",A=>v(A))];return{frame(A){const B=Math.hypot(A.move.x,A.move.y)>.1||Math.abs(A.lanternDelta)>.1;!h&&!m&&(B||Object.values(A).some(Y=>Y===!0))&&(m=!0,D())},select:()=>I("select"),setSettings(A){t=A,S()},status:()=>n?n.state:"locked",dispose(){d=!0,P(),_=null,G.forEach(A=>A()),window.removeEventListener("keydown",O),window.removeEventListener("pointerdown",O),y.removeAttribute("src"),y.load();for(const{source:A,gain:B}of T.values())A.stop(),A.disconnect(),B.disconnect();for(const A of C)A.stop(),A.disconnect();C.clear(),T.clear(),f.clear(),n&&n.close().catch(()=>{})}}}const un=[{id:"broken-gem",title:"What Fell Into the Soil",level:"grove",provenance:"knight-hacks-canon",text:"At the end of Knight Hacks VIII, the gem shattered and Lenny was freed from its control. The pieces sank into the soil. Roots wrapped them, and a forest grew too fast. Six shards remain across its biomes. The curse has turned half the forest toxic.",discoverAt:[{kind:"item",id:"s1"}]},{id:"sleeping-pair",title:"Beside Lenny",level:"grove",provenance:"knight-hacks-canon",text:"T.K., the knight, went missing in the forest. He lies moss-covered beside Lenny and will not wake. Bloom seeks to destroy the shards and free them both. Blight gathers the pieces to keep the forest corrupted.",discoverAt:[{kind:"level",id:"grove"}]},{id:"listening-shrine",title:"A Place on the Stone",level:"grove",provenance:"amulith-original",text:"Between the shrine stones, Wick keeps a small light. The spirit asks for no offering. The voice beneath the shrine is less patient when your hands are empty.",discoverAt:[{kind:"npc",id:"wick"},{kind:"item",id:"shrine-stone"}]},{id:"bloom",title:"Bloom",level:"grove",provenance:"knight-hacks-canon",text:"Whisperseed, Dryad and Petalborn belong to Bloom. They seek to destroy the shards to free T.K. and Lenny.",discoverAt:[{kind:"npc",id:"petal-mender"}]},{id:"blight",title:"Blight",level:"hollow",provenance:"knight-hacks-canon",text:"Chomper, Spora and Collosus belong to Blight. They gather the shards to keep the forest corrupted.",discoverAt:[{kind:"npc",id:"spore-keeper"}]},{id:"hollow-rain",title:"Rain Beneath the Caps",level:"hollow",provenance:"amulith-original",text:"In Mushroom Hollow, each cap catches a different rhythm of rain. The Cap Listener waits for the note that rings too clearly. Water falls on bark with a soft sound. Broken glass answers sharply.",discoverAt:[{kind:"npc",id:"cap-listener"},{kind:"item",id:"s3"}]},{id:"rootdeep",title:"What the Roots Hold",level:"deepwood",provenance:"amulith-original",text:"Rootdeep narrows around the oldest roots. Bark fills the cracks in buried glass. The Root Witness watches without choosing a side. A root can shelter a small thing, or hold it where it cannot leave.",discoverAt:[{kind:"npc",id:"root-witness"},{kind:"item",id:"s5"}]},{id:"remnant",title:"The Voice Left Behind",level:"deepwood",provenance:"amulith-original",text:"Something left behind by the shattered gem is still awake deeper in the forest. Here, it calls itself Amulith. It tempts those who break its pieces and welcomes those who gather them. Its welcome is not a promise of safety.",discoverAt:[{kind:"item",id:"s6"}]},{id:"lantern",title:"Light With an Edge",level:"grove",provenance:"amulith-original",text:"The Wanderer's lantern reveals glass hidden among roots. Open it wide, and more than glass may notice. The light makes no promise about what it finds.",discoverAt:[{kind:"item",id:"lantern"}]}],Si=i=>ft(i).map(e=>{const t=e.indexOf("|");return{speaker:e.slice(0,t).trim(),text:e.slice(t+1).trim()}});function Kt(i,e,t,n,s,r,a){return{id:i,title:e,level:t,faction:n,beats:Si(s),choices:[r,a].map(([o,l])=>({label:o,beats:Si(l)}))}}const Ym=[Kt("wick-bloom","A light left beside the stone","grove","bloom",`
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
`]),Kt("wick-blight","The warmth of a returning hand","grove","blight",`
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
`]),Kt("petal-mender-bloom","What a flower can leave open","grove","bloom",`
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
`]),Kt("petal-mender-blight","A garden beside a closed hand","grove","blight",`
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
`]),Kt("cap-listener-bloom","The sound beneath the rain","hollow","bloom",`
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
`]),Kt("cap-listener-blight","A roof for a scattered sound","hollow","blight",`
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
`]),Kt("spore-keeper-bloom","What grows around a wound","hollow","bloom",`
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
`]),Kt("spore-keeper-blight","A small life without a flag","hollow","blight",`
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
`]),Kt("root-witness-bloom","A hand learning to open","deepwood","bloom",`
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
`]),Kt("root-witness-blight","The opening behind you","deepwood","blight",`
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
`]),Kt("thorn-carrier-bloom","A burden without a command","deepwood","bloom",`
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
`]),Kt("thorn-carrier-blight","The weight of something whole","deepwood","blight",`
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
`])],ll={bloom:{win:Si(`
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
`),lose:Si(`
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
`)},blight:{win:Si(`
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
`),lose:Si(`
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
`)}},qm=[{id:"wick",name:"Wick",level:"grove",role:"Shrine spirit",provenance:"amulith-original",description:"A small light lingering between the shrine stones.",barks:{bloom:["Leave a little light beside the sleeping knight.","The stone listens. That does not mean it tells the truth."],blight:["Your lantern is warm. The stone wants something warmer.","Bring it a piece, and listen to how quietly it thanks you."]}},{id:"petal-mender",name:"Petal Mender",level:"grove",role:"Bloom wanderer",provenance:"amulith-original",description:"A wandering spirit gathering petals caught in the shrine cracks.",barks:{bloom:["Whisperseed leaves room for another root. Try it.","Petalborn stand where the flowers are easiest to crush."],blight:["I will mend what your footsteps leave.","Gather every piece if you must. Leave the sleeping pair their light."]}},{id:"cap-listener",name:"Cap Listener",level:"hollow",role:"Hollow spirit",provenance:"amulith-original",description:"A patient spirit beneath a broad mushroom cap.",barks:{bloom:["Listen beneath the dripping caps. Glass sounds different from rain.","Dryad knows a root can hold without owning."],blight:["The caps carry your footsteps farther than you think.","Chomper hears the hum before I do. Watch where it waits."]}},{id:"spore-keeper",name:"Spore Keeper",level:"hollow",role:"Blight wanderer",provenance:"amulith-original",description:"A drifting spirit that cups pale spores in folded leaves.",barks:{bloom:["You call it rot. Spora calls it a place to grow.","Break the glass, then tell the roots what they should hold."],blight:["Spora leaves a trail even in still air.","Carry the pieces gently. The voice inside them is already sharp."]}},{id:"root-witness",name:"Root Witness",level:"deepwood",role:"Rootdeep spirit",provenance:"amulith-original",description:"A still spirit outlined in moss where the largest roots meet.",barks:{bloom:["The roots tightened around glass. They can learn to let go.","Do not mistake the quiet for an empty forest."],blight:["You bring the broken thing closer to itself.","A closed treeline shelters something. It also keeps something in."]}},{id:"thorn-carrier",name:"Thorn Carrier",level:"deepwood",role:"Blight wanderer",provenance:"amulith-original",description:"A spirit carrying a branch too large for its narrow silhouette.",barks:{bloom:["Collosus would keep the roots bound. You have chosen another burden.","A thorn cannot decide whose hand reaches for it."],blight:["Collosus holds fast. Can you?","When the pieces join, will the voice still need your hands?"]}}];function hl(i){const e=i.id==="grove"?[...i.signs].reverse():i.signs;return qm.filter(t=>t.level===i.id).map((t,n)=>({...t,x:e[n]?.x??i.start.x,z:e[n]?.z??i.start.z}))}const Ro="amulith.chronicle.v1";function Km(i,e,t,n,s){const r=document.createElement("section");r.className="story-panel",r.hidden=!0,r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Forest chronicle"),r.innerHTML=`<div class="story-card"><div class="story-top"><span data-story-title></span><button data-story-close aria-label="Close conversation">Close / Esc</button></div>
    <small data-story-progress></small><h2 data-story-speaker></h2><p data-story-text aria-live="polite"></p>
    <div data-story-options></div><div class="story-journal" data-story-journal hidden></div>
    <button data-story-next>Continue / Space / A</button><small class="story-note">The world waits while you read.</small></div>`,i.append(r);const a=R=>r.querySelector(R);let o=[];try{const R=JSON.parse(localStorage.getItem(Ro)??"[]");Array.isArray(R)&&(o=R.filter(L=>typeof L?.speaker=="string"&&typeof L?.text=="string"&&typeof L?.scene=="string").slice(-800))}catch{}let l=!1,h=!1,d=!1,u=null,c=[],p=0,_="reading",M=0,m=0,f=null;const T=R=>{o.push({...R,scene:u?.title??"The ending"}),o=o.slice(-800);try{localStorage.setItem(Ro,JSON.stringify(o))}catch{}},C=()=>{if(a("[data-story-options]").replaceChildren(),a("[data-story-journal]").hidden=_!=="journal",a("[data-story-next]").hidden=_==="choice"||_==="journal",_==="journal")return;a("[data-story-title]").textContent=u?.title??"The forest after your choice",a("[data-story-progress]").textContent=_==="choice"?"Choose a thought to carry":`${p+1} / ${c.length}`;const R=c[p];a("[data-story-speaker]").textContent=_==="choice"?"Wanderer":R.speaker,a("[data-story-text]").textContent=_==="choice"?"What would you like to ask?":R.text,_==="choice"&&u&&u.choices.forEach((L,D)=>{const O=document.createElement("button");O.textContent=L.label,O.classList.toggle("selected",M===D),O.onclick=()=>y(D),a("[data-story-options]").append(O)})},y=R=>{!u||_!=="choice"||(c=u.choices[R].beats,p=0,_="branch",C(),T(c[p]),a("[data-story-next]").focus())},b=()=>{l&&(l=!1,r.hidden=!0,i.classList.remove("reading"),d&&t.run.phase!=="ending"&&e.emit("pause",{paused:!1}),f?.focus())},S=(R,L,D)=>{l&&b(),f=document.activeElement instanceof HTMLElement?document.activeElement:null,d=D,l=!0,h=!0,u=L,c=R,p=0,_="reading",M=0,m=0,e.emit("pause",{paused:!0}),i.classList.add("reading"),r.hidden=!1,C(),T(c[p]),a("[data-story-next]").focus()},P=()=>{if(_==="choice"){y(M);return}_!=="journal"&&(p+1<c.length?(p++,C(),T(c[p])):_==="reading"&&u?(_="choice",C(),r.querySelector("[data-story-options] button")?.focus()):b())};a("[data-story-next]").onclick=P,a("[data-story-close]").onclick=b;const v=R=>{if(!l||R.key!=="Tab")return;const L=[...r.querySelectorAll("button")].filter(I=>!I.hidden&&I.offsetParent!==null),D=L[0],O=L.at(-1);R.shiftKey&&document.activeElement===D?(R.preventDefault(),O?.focus()):!R.shiftKey&&document.activeElement===O&&(R.preventDefault(),D?.focus())};r.addEventListener("keydown",v);const E=[e.on("pause",R=>{l&&!R.paused&&e.emit("pause",{paused:!0})}),e.on("interact",R=>{if(l||t.paused||!t.faction)return;const L=hl(t.levels.current).find(O=>Math.hypot(O.x-R.x,O.z-R.z)<3),D=L&&Ym.find(O=>O.id===`${L.id}-${t.faction}`);D&&S(D.beats,D,!0)}),e.on("run",R=>{R.phase==="attract"&&(d=!1,b()),R.phase==="ending"&&R.faction&&R.result&&S(ll[R.faction][R.result],null,!1)}),e.on("director",R=>T({speaker:"Amulith",text:R.line}))];return{get active(){return l},journal(){l||(f=document.activeElement instanceof HTMLElement?document.activeElement:null,d=!t.paused,l=!0,h=!0,_="journal",u=null,e.emit("pause",{paused:!0}),i.classList.add("reading"),r.hidden=!1,a("[data-story-title]").textContent="Your forest chronicle",a("[data-story-progress]").textContent=`${o.length} lines heard`,a("[data-story-speaker]").textContent="What the lantern remembers",a("[data-story-text]").textContent=o.length?"Your conversations stay on this browser.":"Speak to the small lights in the forest to begin.",a("[data-story-journal]").replaceChildren(...o.map(R=>{const L=document.createElement("p"),D=document.createElement("strong");return D.textContent=`${R.speaker}: `,L.append(D,document.createTextNode(R.text)),L})),C(),a("[data-story-close]").focus())},frame(){if(l){if(h){h=!1;return}if(n.pressed("pause")||n.pressed("dash")){b();return}if(_==="choice"){const R=n.actions.move.x;Math.abs(R)>.5&&Math.abs(m)<=.5&&(M=R<0?0:1,C()),m=R}(n.pressed("pulse")||n.pressed("interact"))&&P()}},dispose(){d=!1,b(),E.forEach(R=>R()),r.remove()}}}const $m={hollow:"Mushroom Hollow",glade:"Petal Glade",rootdeep:"Rootdeep"},cl="amulith.codex",Zm=()=>{try{const i=JSON.parse(localStorage.getItem(cl)??"[]");return new Set(Array.isArray(i)?i.filter(e=>typeof e=="string"):[])}catch{return new Set}},Jm=7,Is=i=>`./art/${i}`,Ds=(i,e="",t=0)=>i==null?"n/a":`${i.toFixed(t)}${e}`;function Qm({events:i,input:e,session:t,player:n,renderer:s}){const r=document.createElement("div");r.id="ui",r.innerHTML=`
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
      <img alt="" data-face src="${Is("amulith/calm.png")}">
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
    <button class="sound-unlock" data-sound hidden>Enable sound: click or press a key</button>`,document.body.append(r);const a=Xm(i,ot),o=()=>{r.style.zoom=String(Math.max(1,window.innerHeight/1080))};o(),window.addEventListener("resize",o);const l=ne=>r.querySelector(ne),h=l(".hud"),d=l(".title"),u=l(".pause"),c=l(".judge"),p=l(".dialogue"),_=l(".ending"),M=ne=>{const _e=ne.faction==="bloom",[w,g]=ne.result==="lose"?["The lantern goes out.",_e?"The roots keep the Knight. Amulith keeps the forest.":"Even the Gem forgets who fed it."]:_e?["The Knight wakes.","The last shard breaks. T.K. stands, and the gem goes dark."]:["The Gem is whole.","The shards fuse. The treeline closes behind you."];l("[data-end-title]").textContent=w,l("[data-end-text]").textContent=g;const N=ll[_e?"bloom":"blight"][ne.result==="win"?"win":"lose"].find(K=>K.speaker==="Amulith");l("[data-end-line]").textContent=N?`"${N.text}"`:"";const H=ne.result==="win"?kn.deepwood[_e?"outroBloom":"outroBlight"]:[];l("[data-end-outro]").replaceChildren(...H.map(K=>Object.assign(document.createElement("div"),{textContent:K}))),_.hidden=!1,h.hidden=!0,u.hidden=!0,X.classList.add("gone"),$=0,p.classList.add("gone"),R=0,P=!1};let m=null,f=null,T=null,C=null,y=[],b=.5,S="offline",P=!1,v=0,E="",R=0,L=0,D=0,O=0,I=0,G=0,A="bloom",B=0,Y=0;const X=l(".level-intro");let $=0,ee=null,Me=-10;const me=Zm(),qe=ne=>{if(!me.has(ne)){me.add(ne);try{localStorage.setItem(cl,JSON.stringify([...me]))}catch{}}},Oe=ne=>{const _e=kn[ne];if(!(!_e||ee===ne&&L-Me<1)){ee=ne,Me=L,$=L+Jm,l("[data-intro-name]").textContent=_e.name,l("[data-intro-sub]").textContent=_e.subtitle,l("[data-intro-lines]").replaceChildren(..._e.introLines.map(w=>Object.assign(document.createElement("p"),{textContent:w}))),X.classList.remove("gone");for(const w of un)w.discoverAt.some(g=>g.kind==="level"&&g.id===ne)&&qe(w.id)}};let Ke=!1,Z=0;const te=l("[data-codex]"),xe=l(".pause .panel"),Ie=()=>{l("[data-codex-count]").textContent=`${un.filter(_e=>me.has(_e.id)).length} of ${un.length} found`,l("[data-codex-list]").innerHTML=un.map((_e,w)=>`<li class="${w===Z?"on":""}${me.has(_e.id)?"":" locked"}"><span>${me.has(_e.id)?_e.title:"Undiscovered"}</span></li>`).join("");const ne=un[Z];l("[data-codex-detail]").innerHTML=me.has(ne.id)?`<h3>${ne.title}</h3><small>${ne.provenance==="knight-hacks-canon"?"Knight Hacks canon":"Amulith original"} / ${kn[ne.level].name}</small><p>${ne.text}</p>`:"<h3>Undiscovered</h3><p>Keep walking. The forest has not told you this yet.</p>"},ge=ne=>{Ke=ne,Z=0,te.hidden=!ne,xe.hidden=ne},Be=()=>{a.setSettings(ot),r.style.setProperty("--sub",{S:"24px",M:"30px",L:"38px"}[ot.subtitleSize]),r.classList.toggle("still",ot.reducedMotion),c.hidden=!ot.judge};Be();const gt=(ne,_e=6e3)=>{E=ne,v=ot.reducedMotion?ne.length:0,R=L+_e/1e3+ne.length*.03,l("[data-line]").textContent=ot.reducedMotion?ne:"",p.classList.remove("gone")};let ze=-10;const Xe=ne=>Math.hypot(ne.x,ne.z+.2)<=3.2,nt=[al(Be),i.on("connection",ne=>{S=ne.mode}),i.on("telemetry",ne=>{m=ne}),i.on("shrine",ne=>{f=ne}),i.on("thinking",ne=>{P=ne.active,p.classList.toggle("thinking",P),P&&p.classList.remove("gone")}),i.on("ask",()=>{P=!0,p.classList.add("thinking"),p.classList.remove("gone"),(!E||L>R)&&(l("[data-line]").textContent="..."),R=L+12}),i.on("director",ne=>{T=ne,P=!1,p.classList.remove("thinking"),l("[data-face]").src=Is(`amulith/${ne.mood}.png`),l("[data-source]").textContent=ne.source==="llm"?`live on the Jetson, ${(ne.latency_ms/1e3).toFixed(1)} s`:"scripted line",gt(ne.line)}),i.on("interact",ne=>{t.paused||!Xe(ne)||P||L-ze<3||(ze=L,l("[data-face]").src=Is("amulith/calm.png"),l("[data-source]").textContent="scripted shrine line",t.speakAtShrine(),a.select())}),i.on("faction",ne=>{h.hidden=!ne.faction}),i.on("level",ne=>Oe(ne.id)),i.on("shard-resolved",ne=>{for(const _e of un)_e.discoverAt.some(w=>w.kind==="item"&&w.id===ne.id)&&qe(_e.id)}),i.on("shards",ne=>{y=ne}),i.on("lantern",ne=>{b=ne.value}),i.on("run",ne=>{const _e=C?.phase;C=ne,ne.phase==="attract"&&(h.hidden=!0,_.hidden=!0,X.classList.add("gone"),$=0,ee=null),ne.phase==="playing"&&_e==="attract"&&Oe(t.levels.current.id),ne.phase==="ending"&&_e!=="ending"&&M(ne)})],Fe=Km(r,i,t,e);r.querySelectorAll("[data-choice]").forEach(ne=>ne.onclick=()=>{a.select(),t.select(ne.dataset.choice==="bloom"?"sleepy":"angry")}),r.querySelectorAll("[data-chronicle]").forEach(ne=>ne.onclick=()=>Fe.journal()),l("[data-difficulty]").onclick=()=>{t.storyMode=!t.storyMode,l("[data-difficulty]").textContent=t.storyMode?"Story mode: gentler combat":"Challenge mode: original combat"},l("[data-replay]").onclick=()=>t.run.reset();const it=()=>[{label:"Resume",value:"",run:()=>i.emit("pause",{paused:!1})},{label:"Codex",value:`${un.filter(ne=>me.has(ne.id)).length}/${un.length}`,run:()=>ge(!0)},{label:"Chronicle",value:"Conversations",run:()=>Fe.journal()},{label:"Combat",value:t.storyMode?"Story":"Challenge",run:()=>{t.storyMode=!t.storyMode}},{label:"Reduced motion",value:ot.reducedMotion?"On":"Off",run:()=>vi({reducedMotion:!ot.reducedMotion})},{label:"Subtitle size",value:ot.subtitleSize,run:()=>vi({subtitleSize:ot.subtitleSize==="S"?"M":ot.subtitleSize==="M"?"L":"S"})},{label:"Volume",value:`${Math.round(ot.volume*100)}%`,run:()=>vi({volume:ot.volume>=1?0:Math.min(1,Math.round((ot.volume+.2)*10)/10)})},{label:"Mute",value:ot.muted?"On":"Off",run:()=>vi({muted:!ot.muted})},{label:"Judge mode",value:ot.judge?"On":"Off",run:()=>vi({judge:!ot.judge})},{label:"Switch faction",value:t.faction==="bloom"?"to Blight":"to Bloom",run:()=>t.select(t.faction==="bloom"?"angry":"sleepy")},{label:"Return to title",value:"",run:()=>t.run.reset()}];let _t="";const Lt=()=>{const ne=it(),_e=JSON.stringify([B,ne.map(w=>[w.label,w.value])]);_e!==_t&&(_t=_e,l("[data-menu]").innerHTML=ne.map((w,g)=>`<li role="button" tabindex="0" data-menu-index="${g}" class="${g===B?"on":""}"><span>${w.label}</span><b>${w.value}</b></li>`).join(""))},ht=ne=>{const _e=ne.target.closest("[data-menu-index]");_e&&it()[Number(_e.dataset.menuIndex)]?.run()};l("[data-menu]").addEventListener("click",ht),l("[data-menu]").addEventListener("keydown",ne=>{ne.key==="Enter"&&ht(ne)});const mt=()=>{const ne=Array.from(navigator.getGamepads?.()??[]).find(H=>H?.connected),_e=e.actions.move.y+(ne?.buttons[13]?.pressed?1:0)-(ne?.buttons[12]?.pressed?1:0),w=e.actions.move.x+(ne?.buttons[15]?.pressed?1:0)-(ne?.buttons[14]?.pressed?1:0),g=Math.abs(_e)>.6&&Math.abs(Y)<=.6?Math.sign(_e):0,N=Math.abs(w)>.6?Math.sign(w):0;return Y=_e,{step:g,stepX:N}};return{frame:ne=>{if(a.frame(e.actions),Fe.frame(),Fe.active)return;l("[data-sound]").hidden=a.status()!=="suspended",l("[data-shrine-prompt]").hidden=t.paused||!t.faction||!Xe(n.position),r.classList.toggle("menu-open",t.paused&&!!t.faction),L+=ne,I++,G+=ne,G>=1&&(O=I/G,I=0,G=0),e.pressed("judge")&&vi({judge:!ot.judge});const{step:_e,stepX:w}=mt();if(!t.faction?(d.hidden=!1,d.classList.remove("gone"),D=0):d.hidden||(d.classList.add("gone"),D+=ne,(D>.6||ot.reducedMotion)&&(d.hidden=!0)),t.faction){if(C?.phase!=="ending")if(t.paused)if(u.hidden&&(u.hidden=!1,B=0,ge(!1)),l("[data-say]").textContent=f?.state==="empty"?"Put him back.":"",Ke)_e&&(Z=(Z+_e+un.length)%un.length,a.select()),(e.pressed("dash")||e.pressed("pulse"))&&(a.select(),ge(!1)),Ie();else{const N=it();_e&&(B=(B+_e+N.length)%N.length,a.select()),e.pressed("pulse")?(a.select(),N[B].run()):e.pressed("dash")&&i.emit("pause",{paused:!1}),Lt()}else u.hidden||(u.hidden=!0)}else{if(w){const N=w<0?"bloom":"blight";A!==N&&a.select(),A=N}r.querySelectorAll("[data-choice]").forEach(N=>N.classList.toggle("on",N.dataset.choice===A)),e.pressed("pulse")&&(a.select(),t.select(A==="bloom"?"sleepy":"angry"))}if(t.faction){const N=t.shards.nearest(n.position),H=t.levels.current.exit,K=H.x-n.position.x,se=H.z-n.position.z,ae=Math.abs(K)>Math.abs(se)?K<0?"west":"east":se<0?"north":"south";l("[data-objective]").textContent=N?"Find the shard. E / Y asks for a direction.":`Follow the path ${ae} to ${H.next?"the next area":"finish the journey"}.`;const J=t.land.share();l("[data-bloom]").style.width=`${(J.bloom*100).toFixed(1)}%`,l("[data-bloom-label]").textContent=`Bloom ${Math.round(J.bloom*100)}%`,l("[data-blight-label]").textContent=`Blight ${Math.round(J.blight*100)}%`,l("[data-faction]").textContent=t.faction==="bloom"?"Bloom / Wake the Knight":"Blight / Feed the Gem";const Q=n.position.x;l("[data-zone]").textContent=$m[Q<-10?"hollow":Q<10?"glade":"rootdeep"],l("[data-hp]").style.width=`${((C?.hp??1)*100).toFixed(0)}%`,l("[data-lamp]").style.width=`${(b*100).toFixed(0)}%`;const oe=C?.shards??0,Te=[0,1,2].map(re=>`<img src="${Is("shard/shard.png")}" class="${re<oe?"got":""}" alt="">`).join("")+`<span>${oe}/3 shards</span>`;l("[data-shards]").dataset.n!==String(oe)&&(l("[data-shards]").innerHTML=Te,l("[data-shards]").dataset.n=String(oe));const le=y.find(re=>re.visible&&!re.resolved&&Math.hypot(re.x-n.position.x,re.z-n.position.z)<=1.4);l("[data-hold]").hidden=!le||t.paused,le&&(l("[data-hold-text]").textContent=t.faction==="bloom"?"Hold to break the shard":"Hold to claim the shard",l("[data-hold-bar]").style.width=`${(le.progress/1.5*100).toFixed(0)}%`)}if(v<E.length&&(v=Math.min(E.length,v+ne*45),l("[data-line]").textContent=E.slice(0,Math.floor(v))),$&&L>$&&(X.classList.add("gone"),$=0),!P&&R&&L>R&&(p.classList.add("gone"),R=0),ot.judge){const N=m,H=s.domElement,K=[["GPU",Ds(N?.gpu_pct,"%")],["CPU",Ds(N?.cpu_pct,"%")],["RAM",N?.ram_used_mb!=null&&N?.ram_total_mb!=null?`${(N.ram_used_mb/1024).toFixed(1)} / ${(N.ram_total_mb/1024).toFixed(1)} GB`:"n/a"],["Power",N?.power_mw!=null?`${(N.power_mw/1e3).toFixed(1)} W`:"n/a"],["Temp",Ds(N?.temp_c," C",1)],["LLM speed",Ds(N?.tok_s," tok/s",1)],["Shrine",f?`${f.state} ${(f.confidence*100).toFixed(0)}%`:"n/a"],["Last line",T?T.source==="llm"?`LLM, ${(T.latency_ms/1e3).toFixed(1)} s`:"scripted":"n/a"],["Link",S],["Frame rate",`${O.toFixed(0)} fps`],["Render",`${H.width} x ${H.height}`],["Audio",ot.muted?"muted":a.status()]];l("[data-judge]").innerHTML=K.map(([se,ae])=>`<dt>${se}</dt><dd>${ae}</dd>`).join("")}},showLevelIntro:Oe,dispose(){Fe.dispose(),nt.forEach(ne=>ne()),window.removeEventListener("resize",o),a.dispose(),r.remove()}}}class jm{constructor(e){this.enemies=e;const t=n=>{const s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");if(r.fillStyle=n==="chomper"?"#aa79c1":"#e0bc74",r.strokeStyle="#202d2a",r.lineWidth=7,r.beginPath(),n==="chomper")r.moveTo(18,108),r.lineTo(30,35),r.lineTo(48,65),r.lineTo(64,15),r.lineTo(84,65),r.lineTo(104,35),r.lineTo(110,108),r.closePath();else{for(let o=0;o<8;o++){const l=o*Math.PI/4;r.lineTo(64+Math.cos(l)*(o%2?26:50),64+Math.sin(l)*(o%2?26:50))}r.closePath()}r.fill(),r.stroke(),r.fillStyle="#202d2a",r.fillRect(43,64,9,12),r.fillRect(76,64,9,12);const a=new Ai(s);return a.colorSpace=At,this.textures.push(a),new Tn({map:a,alphaTest:.5,side:2})};this.materials={chomper:t("chomper"),petalborn:t("petalborn")}}enemies;group=new Rt;geometry=new Et(1.8,2);textures=[];materials;meshes=new Map;render(e){const t=new Set;for(const n of this.enemies.enemies){if(n.state==="defeated")continue;t.add(n.id);let s=this.meshes.get(n.id);s||(s=new lt(this.geometry,this.materials[n.kind]),this.meshes.set(n.id,s),this.group.add(s)),s.material=this.materials[n.kind],s.position.set(n.x,1,n.z),s.rotation.y=Math.atan2(e.position.x-n.x,e.position.z-n.z)}for(const[n,s]of this.meshes)t.has(n)||(this.group.remove(s),this.meshes.delete(n))}dispose(){this.geometry.dispose(),this.textures.forEach(e=>e.dispose()),Object.values(this.materials).forEach(e=>e.dispose()),this.meshes.clear(),this.group.clear()}}class eg{constructor(e){this.shards=e;for(const t of e.sites){const n=new lt(this.geometry,this.material);n.position.set(t.x,.8,t.z),this.meshes.push(n),this.group.add(n);const s=new lt(this.geometry,this.hintMaterial);s.scale.setScalar(1.5),s.position.set(t.x,1.8,t.z),this.hints.push(s),this.group.add(s)}}shards;group=new Rt;geometry=new Et(.9,1.3);material=new Tn({color:16047794,side:2});hintMaterial=new Tn({color:15048801,side:2,wireframe:!0});meshes=[];hints=[];render(e){this.shards.sites.forEach((t,n)=>{const s=this.meshes[n],r=this.hints[n];s.visible=t.visible,r.visible=t.hinted&&!t.resolved,s.rotation.y=r.rotation.y=Math.atan2(e.position.x-t.x,e.position.z-t.z),s.scale.y=1+t.progress/1.5*.3})}dispose(){this.geometry.dispose(),this.material.dispose(),this.hintMaterial.dispose(),this.group.clear()}}function tg(i,e,t){const n=new Rt;n.name="Forest spirits",n.visible=!!e.faction,i.add(n);const s=()=>{for(const l of[...n.children])l instanceof Ra&&(l.material.map?.dispose(),l.material.dispose()),n.remove(l)},r=()=>{s();for(const l of hl(e.levels.current)){const h=document.createElement("canvas");h.width=512,h.height=256;const d=h.getContext("2d");d.fillStyle="#120d1a",d.beginPath(),d.roundRect(14,6,484,92,16),d.fill(),d.fillStyle="#f3ead2",d.font="bold 30px sans-serif",d.textAlign="center",d.fillText(l.name,256,43),d.fillStyle="#e8bd5a",d.font="22px sans-serif",d.fillText("F / X to talk",256,76),d.fillStyle="#e8bd5a",d.beginPath(),d.moveTo(256,116),d.quadraticCurveTo(190,179,256,238),d.quadraticCurveTo(322,179,256,116),d.fill(),d.fillStyle="#120d1a",d.fillRect(240,178,8,18),d.fillRect(264,178,8,18);const u=new Ai(h);u.colorSpace=At;const c=new Ra(new ko({map:u,transparent:!0,depthWrite:!1}));c.position.set(l.x,1.7,l.z),c.scale.set(4.4,2.2,1),n.add(c)}},a=t.on("level",r),o=t.on("faction",l=>{n.visible=!!l.faction});return r(),{dispose(){a(),o(),s(),i.remove(n)}}}const ng=document.querySelector("#game");Np();const Ks=new Lp({canvas:ng,antialias:!0});Ks.setClearColor(1648420);const pn=new No;pn.add(new Ph(16777215,1.7));const dl=new Yo(16772559,2);dl.position.set(-10,25,15);pn.add(dl);const ul=Gp();pn.add(ul.group);const Ut=new Xp;pn.add(Ut.visual);const Zt=new Vt(38,1,.1,150),fl=new z(0,17,17/Math.tan(Yn.degToRad(47))),Us=new z,Co=new z;Zt.position.copy(fl);Zt.lookAt(Us);const yn=new Op,rt=new fm(Dp.remnant,Sn,Ut.position,$p(window.location.search)),$r=new jm(rt.enemies),Zr=new eg(rt.shards);pn.add($r.group,Zr.group);const pl=document.querySelector("#status"),ig=document.querySelector("#zone");Sn.on("pause",i=>{pl.textContent=rt.paused?"Paused / Esc or Start to resume":"Explore the three regions"});rt.start();const sg=new Set(pn.children),ml=Hm({renderer:Ks,scene:pn,camera:Zt,events:Sn,player:Ut,session:rt,world:ul,replaces:[$r.group,Zr.group]});rt.setGroveObstacles(Xn);const rg=pn.children.filter(i=>!sg.has(i)).filter(i=>i instanceof Rt).slice(0,2),ag=Jp(pn,rt,rg,Math.atan2(Zt.position.y,Zt.position.z),Ut.position),og=Qm({events:Sn,input:yn,session:rt,player:Ut,renderer:Ks});tg(pn,rt,Sn);const gl=()=>{Vm(Ks,window.innerWidth,window.innerHeight),ml.resize(),Zt.aspect=window.innerWidth/window.innerHeight,Zt.updateProjectionMatrix()};gl();window.addEventListener("resize",gl);kp({frame(){yn.poll(),rt.frame(yn),yn.pressed("pause")&&Sn.emit("pause",{paused:!rt.paused}),!rt.paused&&yn.pressed("pulse")&&Sn.emit("pulse",{x:Ut.position.x,z:Ut.position.z}),yn.pressed("dash")&&Ut.motion.dash(yn.actions.move,rt.paused)&&Sn.emit("dash",{x:Ut.position.x,z:Ut.position.z}),!rt.paused&&yn.pressed("interact")&&Sn.emit("interact",{x:Ut.position.x,z:Ut.position.z})},update(i){rt.update(i),Ut.update(i,yn.actions.move,rt.paused,e=>rt.collide(e)),rt.collide(Ut.position)},render(i,e){Us.lerp(Ut.position,1-Math.exp(-6*e)),Co.copy(Us).add(fl),Zt.position.copy(Co),Zt.lookAt(Us),Ut.render(i,Zt),$r.render(Zt),Zr.render(Zt),ig.textContent=kn[rt.levels.current.id].name,ag.frame();const t=rt.land.share();pl.textContent=`${rt.faction??"Choose: 1 Bloom / 2 Blight"} | ${rt.run.phase}${rt.run.result?" / "+rt.run.result:""} | ${rt.client.mode} | HP ${Math.round(rt.run.hp*100)}% | Shards ${rt.run.shards}/3 | Bloom ${Math.round(t.bloom*100)}% / Blight ${Math.round(t.blight*100)}%`,ml.render(e),og.frame(e);const n=document.querySelector("[data-zone]");n&&(n.textContent=kn[rt.levels.current.id].name)}});export{Dp as config,Sn as events,yn as input,Ut as player,rt as session};
