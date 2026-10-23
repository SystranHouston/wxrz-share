(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ku="183",Vs={ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},km=0,vd=1,zm=2,Ba=1,Vm=2,Fa=3,Sr=0,Ln=1,Bn=2,Zi=0,Gs=1,xd=2,yd=3,Md=4,Gm=5,Gr=100,Hm=101,Wm=102,Xm=103,qm=104,Ym=200,jm=201,Zm=202,Km=203,Gc=204,Hc=205,$m=206,Qm=207,Jm=208,eg=209,tg=210,ng=211,ig=212,rg=213,sg=214,Wc=0,Xc=1,qc=2,qs=3,Yc=4,jc=5,Zc=6,Kc=7,Sl=0,ag=1,og=2,vi=0,Kf=1,$f=2,Qf=3,$u=4,Jf=5,Qu=6,bl=7,Sd="attached",lg="detached",ep=300,Kr=301,Ys=302,sl=303,Jl=304,El=306,qa=1e3,_i=1001,$c=1002,vn=1003,cg=1004,Ao=1005,bn=1006,ec=1007,Xr=1008,Wn=1009,tp=1010,np=1011,Ya=1012,Ju=1013,Di=1014,ni=1015,$i=1016,eh=1017,th=1018,ja=1020,ip=35902,rp=35899,sp=1021,ap=1022,ii=1023,Qi=1026,qr=1027,nh=1028,ih=1029,js=1030,rh=1031,sh=1033,al=33776,ol=33777,ll=33778,cl=33779,Qc=35840,Jc=35841,eu=35842,tu=35843,nu=36196,iu=37492,ru=37496,su=37488,au=37489,ou=37490,lu=37491,cu=37808,uu=37809,hu=37810,du=37811,fu=37812,pu=37813,mu=37814,gu=37815,_u=37816,vu=37817,xu=37818,yu=37819,Mu=37820,Su=37821,bu=36492,Eu=36494,Tu=36495,wu=36283,Au=36284,Ru=36285,Cu=36286,ug=2200,hg=2201,dg=2202,fl=2300,Du=2301,tc=2302,bd=2303,Bs=2400,ks=2401,pl=2402,ah=2500,fg=2501,pg=3200,Tl=0,mg=1,qi="",Ut="srgb",br="srgb-linear",ml="linear",Ft="srgb",ms=7680,Ed=519,gg=512,_g=513,vg=514,oh=515,xg=516,yg=517,lh=518,Mg=519,Td=35044,wd="300 es",Ai=2e3,Za=2001;function Sg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ka(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Eg(){const r=Ka("canvas");return r.style.display="block",r}const Ad={};function Rd(...r){const e="THREE."+r.shift();console.log(e,...r)}function op(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Be(...r){r=op(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ze(...r){r=op(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function gl(...r){const e=r.join(" ");e in Ad||(Ad[e]=!0,Be(...r))}function Tg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const wg={[Wc]:Xc,[qc]:Zc,[Yc]:Kc,[qs]:jc,[Xc]:Wc,[Zc]:qc,[Kc]:Yc,[jc]:qs};class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cd=1234567;const ka=Math.PI/180,Zs=180/Math.PI;function wr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function ch(r,e){return(r%e+e)%e}function Ag(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Rg(r,e,t){return r!==e?(t-r)/(e-r):0}function za(r,e,t){return(1-t)*r+t*e}function Cg(r,e,t,n){return za(r,e,1-Math.exp(-t*n))}function Dg(r,e=1){return e-Math.abs(ch(r,e*2)-e)}function Pg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ig(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Lg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Fg(r,e){return r+Math.random()*(e-r)}function Ng(r){return r*(.5-Math.random())}function Ug(r){r!==void 0&&(Cd=r);let e=Cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Og(r){return r*ka}function Bg(r){return r*Zs}function kg(r){return(r&r-1)===0&&r!==0}function zg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Gg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Cn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const sn={DEG2RAD:ka,RAD2DEG:Zs,generateUUID:wr,clamp:ct,euclideanModulo:ch,mapLinear:Ag,inverseLerp:Rg,lerp:za,damp:Cg,pingpong:Dg,smoothstep:Pg,smootherstep:Ig,randInt:Lg,randFloat:Fg,randFloatSpread:Ng,seededRandom:Ug,degToRad:Og,radToDeg:Bg,isPowerOfTwo:kg,ceilPowerOfTwo:zg,floorPowerOfTwo:Vg,setQuaternionFromProperEuler:Gg,normalize:Cn,denormalize:Fs};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],m=s[a+2],x=s[a+3];if(u!==x||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){const S=Math.acos(g),y=Math.sin(S);p=Math.sin(p*S)/y,o=Math.sin(o*S)/y,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+x*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nc=new F,Dd=new nt;class rt{constructor(e,t,n,i,s,a,o,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],S=i[1],y=i[4],b=i[7],L=i[2],P=i[5],w=i[8];return s[0]=a*x+o*S+l*L,s[3]=a*g+o*y+l*P,s[6]=a*p+o*b+l*w,s[1]=c*x+h*S+u*L,s[4]=c*g+h*y+u*P,s[7]=c*p+h*b+u*w,s[2]=d*x+f*S+m*L,s[5]=d*g+f*y+m*P,s[8]=d*p+f*b+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new rt,Pd=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hg(){const r={enabled:!0,workingColorSpace:br,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ft&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ft&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qi?ml:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return gl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return gl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[br]:{primaries:e,whitePoint:n,transfer:ml,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),r}const ot=Hg();function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let gs;class Wg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Ka("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ka("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xg=0;class uh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(rc(i[a].image)):s.push(rc(i[a]))}else s=rc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function rc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let qg=0;const sc=new F;class _n extends Tr{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=_i,i=_i,s=bn,a=Xr,o=ii,l=Wn,c=_n.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=wr(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sc).x}get height(){return this.source.getSize(sc).y}get depth(){return this.source.getSize(sc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case $c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case $c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=ep;_n.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,i=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(f+1)/2,L=(p+1)/2,P=(h+d)/4,w=(u+x)/4,_=(m+g)/4;return y>b&&y>L?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=P/n,s=w/n):b>L?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=P/i,s=_/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=w/s,i=_/s),this.set(n,i,s,t),this}let S=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yg extends Tr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new _n(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new uh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Yg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lp extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jg extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Le{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,m,x,g){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,m,x,g)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,Kg)}lookAt(e,t,n){const i=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),cr.crossVectors(n,Gn),cr.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),cr.crossVectors(n,Gn)),cr.normalize(),Ro.crossVectors(Gn,cr),i[0]=cr.x,i[4]=Ro.x,i[8]=Gn.x,i[1]=cr.y,i[5]=Ro.y,i[9]=Gn.y,i[2]=cr.z,i[6]=Ro.z,i[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],S=n[3],y=n[7],b=n[11],L=n[15],P=i[0],w=i[4],_=i[8],T=i[12],j=i[1],D=i[5],k=i[9],H=i[13],K=i[2],q=i[6],X=i[10],W=i[14],oe=i[3],re=i[7],pe=i[11],ge=i[15];return s[0]=a*P+o*j+l*K+c*oe,s[4]=a*w+o*D+l*q+c*re,s[8]=a*_+o*k+l*X+c*pe,s[12]=a*T+o*H+l*W+c*ge,s[1]=h*P+u*j+d*K+f*oe,s[5]=h*w+u*D+d*q+f*re,s[9]=h*_+u*k+d*X+f*pe,s[13]=h*T+u*H+d*W+f*ge,s[2]=m*P+x*j+g*K+p*oe,s[6]=m*w+x*D+g*q+p*re,s[10]=m*_+x*k+g*X+p*pe,s[14]=m*T+x*H+g*W+p*ge,s[3]=S*P+y*j+b*K+L*oe,s[7]=S*w+y*D+b*q+L*re,s[11]=S*_+y*k+b*X+L*pe,s[15]=S*T+y*H+b*W+L*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],S=l*f-c*d,y=o*f-c*u,b=o*d-l*u,L=a*f-c*h,P=a*d-l*h,w=a*u-o*h;return t*(x*S-g*y+p*b)-n*(m*S-g*L+p*P)+i*(m*y-x*L+p*w)-s*(m*b-x*P+g*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],S=t*o-n*a,y=t*l-i*a,b=t*c-s*a,L=n*l-i*o,P=n*c-s*o,w=i*c-s*l,_=h*x-u*m,T=h*g-d*m,j=h*p-f*m,D=u*g-d*x,k=u*p-f*x,H=d*p-f*g,K=S*H-y*k+b*D+L*j-P*T+w*_;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/K;return e[0]=(o*H-l*k+c*D)*q,e[1]=(i*k-n*H-s*D)*q,e[2]=(x*w-g*P+p*L)*q,e[3]=(d*P-u*w-f*L)*q,e[4]=(l*j-a*H-c*T)*q,e[5]=(t*H-i*j+s*T)*q,e[6]=(g*b-m*w-p*y)*q,e[7]=(h*w-d*b+f*y)*q,e[8]=(a*k-o*j+c*_)*q,e[9]=(n*j-t*k-s*_)*q,e[10]=(m*P-x*b+p*S)*q,e[11]=(u*b-h*P-f*S)*q,e[12]=(o*T-a*D-l*_)*q,e[13]=(t*D-n*T+i*_)*q,e[14]=(x*y-m*L-g*S)*q,e[15]=(h*L-u*y+d*S)*q,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,x=a*h,g=a*u,p=o*u,S=l*c,y=l*h,b=l*u,L=n.x,P=n.y,w=n.z;return i[0]=(1-(x+p))*L,i[1]=(f+b)*L,i[2]=(m-y)*L,i[3]=0,i[4]=(f-b)*P,i[5]=(1-(d+p))*P,i[6]=(g+S)*P,i[7]=0,i[8]=(m+y)*w,i[9]=(g-S)*w,i[10]=(1-(d+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=_s.set(i[0],i[1],i[2]).length();const o=_s.set(i[4],i[5],i[6]).length(),l=_s.set(i[8],i[9],i[10]).length();s<0&&(a=-a),ci.copy(this);const c=1/a,h=1/o,u=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ai,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===Ai)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Za)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ai,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===Ai)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===Za)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _s=new F,ci=new Le,Zg=new F(0,0,0),Kg=new F(1,1,1),cr=new F,Ro=new F,Gn=new F,Ld=new Le,Fd=new nt;class en{constructor(e=0,t=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fd.setFromEuler(this),this.setFromQuaternion(Fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $g=0;const Nd=new F,vs=new nt,Ni=new Le,Co=new F,ba=new F,Qg=new F,Jg=new nt,Ud=new F(1,0,0),Od=new F(0,1,0),Bd=new F(0,0,1),kd={type:"added"},e0={type:"removed"},xs={type:"childadded",child:null},ac={type:"childremoved",child:null};class Gt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new F,t=new en,n=new nt,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new rt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Nd.copy(e).applyQuaternion(this.quaternion),this.position.add(Nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Co.copy(e):Co.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(ba,Co,this.up):Ni.lookAt(Co,ba,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),vs.setFromRotationMatrix(Ni),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kd),xs.child=e,this.dispatchEvent(xs),xs.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e0),ac.child=e,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kd),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,Qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new F(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pi extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t0={type:"move"};class oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Do={h:0,s:0,l:0};function lc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=ch(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=lc(a,s,e+1/3),this.g=lc(a,s,e),this.b=lc(a,s,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=cp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ot.workingToColorSpace(Mn.copy(this),e),Math.round(ct(Mn.r*255,0,255))*65536+Math.round(ct(Mn.g*255,0,255))*256+Math.round(ct(Mn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Mn.copy(this),t);const n=Mn.r,i=Mn.g,s=Mn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ut){ot.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,i=Mn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(Do);const n=za(ur.h,Do.h,t),i=za(ur.s,Do.s,t),s=za(ur.l,Do.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ge;Ge.NAMES=cp;class dh extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ui=new F,Ui=new F,cc=new F,Oi=new F,ys=new F,Ms=new F,zd=new F,uc=new F,hc=new F,dc=new F,fc=new Dt,pc=new Dt,mc=new Dt;class mi{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ui.subVectors(e,t),i.cross(ui);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ui.subVectors(i,t),Ui.subVectors(n,t),cc.subVectors(e,t);const a=ui.dot(ui),o=ui.dot(Ui),l=ui.dot(cc),c=Ui.dot(Ui),h=Ui.dot(cc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return fc.setScalar(0),pc.setScalar(0),mc.setScalar(0),fc.fromBufferAttribute(e,t),pc.fromBufferAttribute(e,n),mc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(fc,s.x),a.addScaledVector(pc,s.y),a.addScaledVector(mc,s.z),a}static isFrontFacing(e,t,n,i){return ui.subVectors(n,t),Ui.subVectors(e,t),ui.cross(Ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ui.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ys.subVectors(i,n),Ms.subVectors(s,n),uc.subVectors(e,n);const l=ys.dot(uc),c=Ms.dot(uc);if(l<=0&&c<=0)return t.copy(n);hc.subVectors(e,i);const h=ys.dot(hc),u=Ms.dot(hc);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ys,a);dc.subVectors(e,s);const f=ys.dot(dc),m=Ms.dot(dc);if(m>=0&&f<=m)return t.copy(s);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ms,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return zd.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(zd,o);const p=1/(g+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(ys,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),Io.subVectors(this.max,Ea),Ss.subVectors(e.a,Ea),bs.subVectors(e.b,Ea),Es.subVectors(e.c,Ea),hr.subVectors(bs,Ss),dr.subVectors(Es,bs),Lr.subVectors(Ss,Es);let t=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-Lr.z,Lr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,Lr.z,0,-Lr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-Lr.y,Lr.x,0];return!gc(t,Ss,bs,Es,Io)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,Ss,bs,Es,Io))?!1:(Lo.crossVectors(hr,dr),t=[Lo.x,Lo.y,Lo.z],gc(t,Ss,bs,Es,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new F,new F,new F,new F,new F,new F,new F,new F],hi=new F,Po=new hn,Ss=new F,bs=new F,Es=new F,hr=new F,dr=new F,Lr=new F,Ea=new F,Io=new F,Lo=new F,Fr=new F;function gc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Fr.fromArray(r,s);const o=i.x*Math.abs(Fr.x)+i.y*Math.abs(Fr.y)+i.z*Math.abs(Fr.z),l=e.dot(Fr),c=t.dot(Fr),h=n.dot(Fr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ln=new F,Fo=new Ye;let n0=0;class xi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Td,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Td&&(e.usage=this.usage),e}}class fh extends xi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class up extends xi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends xi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const i0=new hn,Ta=new F,_c=new F;class Ar{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):i0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ta,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(_c)),this.expandByPoint(Ta.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let r0=0;const Qn=new Le,vc=new Gt,Ts=new F,Hn=new hn,wa=new hn,gn=new F;class Tn extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sg(e)?up:fh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wa.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Hn.min,wa.min),Hn.expandByPoint(gn),gn.addVectors(Hn.max,wa.max),Hn.expandByPoint(gn)):(Hn.expandByPoint(wa.min),Hn.expandByPoint(wa.max))}Hn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gn.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),gn.add(Ts)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new F,l[_]=new F;const c=new F,h=new F,u=new F,d=new Ye,f=new Ye,m=new Ye,x=new F,g=new F;function p(_,T,j){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,j),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,j),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),o[_].add(x),o[T].add(x),o[j].add(x),l[_].add(g),l[T].add(g),l[j].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,T=S.length;_<T;++_){const j=S[_],D=j.start,k=j.count;for(let H=D,K=D+k;H<K;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new F,b=new F,L=new F,P=new F;function w(_){L.fromBufferAttribute(i,_),P.copy(L);const T=o[_];y.copy(T),y.sub(L.multiplyScalar(L.dot(T))).normalize(),b.crossVectors(P,T);const D=b.dot(l[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,D)}for(let _=0,T=S.length;_<T;++_){const j=S[_],D=j.start,k=j.count;for(let H=D,K=D+k;H<K;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new F,s=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new xi(d,h,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let s0=0;class Rr extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=Gs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Hc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Sr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ed&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new F,xc=new F,No=new F,fr=new F,yc=new F,Uo=new F,Mc=new F;class ro{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xc.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(xc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(No),o=fr.dot(this.direction),l=-fr.dot(No),c=fr.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(xc).addScaledVector(No,d),f}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const n=ki.dot(this.direction),i=ki.dot(ki)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,i,s){yc.subVectors(t,e),Uo.subVectors(n,e),Mc.crossVectors(yc,Uo);let a=this.direction.dot(Mc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fr.subVectors(this.origin,e);const l=o*this.direction.dot(Uo.crossVectors(fr,Uo));if(l<0)return null;const c=o*this.direction.dot(yc.cross(fr));if(c<0||l+c>a)return null;const h=-o*fr.dot(Mc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hr extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vd=new Le,Nr=new ro,Oo=new Ar,Gd=new F,Bo=new F,ko=new F,zo=new F,Sc=new F,Vo=new F,Hd=new F,Go=new F;class Xt extends Gt{constructor(e=new Tn,t=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Sc.fromBufferAttribute(u,e),a?Vo.addScaledVector(Sc,h):Vo.addScaledVector(Sc.sub(t),h))}t.add(Vo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(Oo.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Oo,Gd)===null||Nr.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Vd),!(n.boundingBox!==null&&Nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,L=y;b<L;b+=3){const P=o.getX(b),w=o.getX(b+1),_=o.getX(b+2);i=Ho(this,p,e,n,c,h,u,P,w,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const S=o.getX(g),y=o.getX(g+1),b=o.getX(g+2);i=Ho(this,a,e,n,c,h,u,S,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,L=y;b<L;b+=3){const P=b,w=b+1,_=b+2;i=Ho(this,p,e,n,c,h,u,P,w,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const S=g,y=g+1,b=g+2;i=Ho(this,a,e,n,c,h,u,S,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function a0(r,e,t,n,i,s,a,o){let l;if(e.side===Ln?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Sr,o),l===null)return null;Go.copy(o),Go.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:r}}function Ho(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Bo),r.getVertexPosition(l,ko),r.getVertexPosition(c,zo);const h=a0(r,e,t,n,Bo,ko,zo,Hd);if(h){const u=new F;mi.getBarycoord(Hd,Bo,ko,zo,u),i&&(h.uv=mi.getInterpolatedAttribute(i,o,l,c,u,new Ye)),s&&(h.uv1=mi.getInterpolatedAttribute(s,o,l,c,u,new Ye)),a&&(h.normal=mi.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};mi.getNormal(Bo,ko,zo,d.normal),h.face=d,h.barycoord=u}return h}const Wd=new F,Xd=new Dt,qd=new Dt,o0=new F,Yd=new Le,Wo=new F,bc=new Ar,jd=new Le,Ec=new ro;class l0 extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sd,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wo),this.boundingBox.expandByPoint(Wo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ar),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wo),this.boundingSphere.expandByPoint(Wo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bc.copy(this.boundingSphere),bc.applyMatrix4(i),e.ray.intersectsSphere(bc)!==!1&&(jd.copy(i).invert(),Ec.copy(e.ray).applyMatrix4(jd),!(this.boundingBox!==null&&Ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ec)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Xd.fromBufferAttribute(i.attributes.skinIndex,e),qd.fromBufferAttribute(i.attributes.skinWeight,e),Wd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=qd.getComponent(s);if(a!==0){const o=Xd.getComponent(s);Yd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(o0.copy(Wd).applyMatrix4(Yd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pu extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ph extends _n{constructor(e=null,t=1,n=1,i,s,a,o,l,c=vn,h=vn,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zd=new Le,c0=new Le;class mh{constructor(e=[],t=[]){this.uuid=wr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:c0;Zd.multiplyMatrices(o,t[s]),Zd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new mh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ph(t,e,e,ii,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Be("Skeleton: No bone found with UUID:",s),a=new Pu),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Kd extends xi{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new Le,$d=new Le,Xo=[],Qd=new hn,u0=new Le,Aa=new Xt,Ra=new Ar;class h0 extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kd(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,u0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),Qd.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(Qd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),Ra.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(Ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(n),e.ray.intersectsSphere(Ra)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ws),$d.multiplyMatrices(n,ws),Aa.matrixWorld=$d,Aa.raycast(e,Xo);for(let a=0,o=Xo.length;a<o;a++){const l=Xo[a];l.instanceId=s,l.object=this,t.push(l)}Xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ph(new Float32Array(i*this.count),i,this.count,nh,ni));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Tc=new F,d0=new F,f0=new rt;class Hi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Tc.subVectors(n,t).cross(d0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Tc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||f0.getNormalMatrix(e),i=this.coplanarPoint(Tc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Ar,p0=new Ye(.5,.5),qo=new F;class gh{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],x=s[9],g=s[10],p=s[11],S=s[12],y=s[13],b=s[14],L=s[15];if(i[0].setComponents(c-a,f-h,p-m,L-S).normalize(),i[1].setComponents(c+a,f+h,p+m,L+S).normalize(),i[2].setComponents(c+o,f+u,p+x,L+y).normalize(),i[3].setComponents(c-o,f-u,p-x,L-y).normalize(),n)i[4].setComponents(l,d,g,b).normalize(),i[5].setComponents(c-l,f-d,p-g,L-b).normalize();else if(i[4].setComponents(c-l,f-d,p-g,L-b).normalize(),t===Ai)i[5].setComponents(c+l,f+d,p+g,L+b).normalize();else if(t===Za)i[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const t=p0.distanceTo(e.center);return Ur.radius=.7071067811865476+t,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qo.x=i.normal.x>0?e.max.x:e.min.x,qo.y=i.normal.y>0?e.max.y:e.min.y,qo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _h extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _l=new F,vl=new F,Jd=new Le,Ca=new ro,Yo=new Ar,wc=new F,ef=new F;class hp extends Gt{constructor(e=new Tn,t=new _h){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)_l.fromBufferAttribute(t,i-1),vl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_l.distanceTo(vl);e.setAttribute("lineDistance",new qt(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=s,e.ray.intersectsSphere(Yo)===!1)return;Jd.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(Jd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){const p=h.getX(x),S=h.getX(x+1),y=jo(this,e,Ca,l,p,S,x);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(f),p=jo(this,e,Ca,l,x,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){const p=jo(this,e,Ca,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=jo(this,e,Ca,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jo(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(_l.fromBufferAttribute(o,i),vl.fromBufferAttribute(o,s),t.distanceSqToSegment(_l,vl,wc,ef)>n)return;wc.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(wc);if(!(c<e.near||c>e.far))return{distance:c,point:ef.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const tf=new F,nf=new F;class m0 extends hp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)tf.fromBufferAttribute(t,i),nf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tf.distanceTo(nf);e.setAttribute("lineDistance",new qt(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dp extends _n{constructor(e=[],t=Kr,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Va extends _n{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $a extends _n{constructor(e,t,n=Di,i,s,a,o=vn,l=vn,c,h=Qi,u=1){if(h!==Qi&&h!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class g0 extends $a{constructor(e,t=Di,n=Kr,i,s,a=vn,o=vn,l,c=Qi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fp extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ia extends Tn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function m(x,g,p,S,y,b,L,P,w,_,T){const j=b/w,D=L/_,k=b/2,H=L/2,K=P/2,q=w+1,X=_+1;let W=0,oe=0;const re=new F;for(let pe=0;pe<X;pe++){const ge=pe*D-H;for(let Se=0;Se<q;Se++){const qe=Se*j-k;re[x]=qe*S,re[g]=ge*y,re[p]=K,c.push(re.x,re.y,re.z),re[x]=0,re[g]=0,re[p]=P>0?1:-1,h.push(re.x,re.y,re.z),u.push(Se/w),u.push(1-pe/_),W+=1}}for(let pe=0;pe<_;pe++)for(let ge=0;ge<w;ge++){const Se=d+ge+q*pe,qe=d+ge+q*(pe+1),Tt=d+(ge+1)+q*(pe+1),ut=d+(ge+1)+q*pe;l.push(Se,qe,ut),l.push(qe,Tt,ut),oe+=6}o.addGroup(f,oe,T),f+=oe,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xl extends Tn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=n/2;let p=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function S(){const b=new F,L=new F;let P=0;const w=(t-e)/n;for(let _=0;_<=s;_++){const T=[],j=_/s,D=j*(t-e)+e;for(let k=0;k<=i;k++){const H=k/i,K=H*l+o,q=Math.sin(K),X=Math.cos(K);L.x=D*q,L.y=-j*n+g,L.z=D*X,u.push(L.x,L.y,L.z),b.set(q,w,X).normalize(),d.push(b.x,b.y,b.z),f.push(H,1-j),T.push(m++)}x.push(T)}for(let _=0;_<i;_++)for(let T=0;T<s;T++){const j=x[T][_],D=x[T+1][_],k=x[T+1][_+1],H=x[T][_+1];(e>0||T!==0)&&(h.push(j,D,H),P+=3),(t>0||T!==s-1)&&(h.push(D,k,H),P+=3)}c.addGroup(p,P,0),p+=P}function y(b){const L=m,P=new Ye,w=new F;let _=0;const T=b===!0?e:t,j=b===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,g*j,0),d.push(0,j,0),f.push(.5,.5),m++;const D=m;for(let k=0;k<=i;k++){const K=k/i*l+o,q=Math.cos(K),X=Math.sin(K);w.x=T*X,w.y=g*j,w.z=T*q,u.push(w.x,w.y,w.z),d.push(0,j,0),P.x=q*.5+.5,P.y=X*.5*j+.5,f.push(P.x,P.y),m++}for(let k=0;k<i;k++){const H=L+k,K=D+k;b===!0?h.push(K,K+1,H):h.push(K+1,K,H),_+=3}c.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Ye:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new F,i=[],s=[],a=[],o=new F,l=new Le;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new F)}s[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(ct(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ct(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function v0(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=pp(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=b0(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,u=l;for(let d=t;d<i;d+=t){const f=r[d],m=r[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Qa(s,a,t,o,l,c,0),a}function pp(r,e,t,n,i){let s;if(i===F0(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=rf(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=rf(a/n|0,r[a],r[a+1],s);return s&&Ks(s,s.next)&&(eo(s),s=s.next),s}function $r(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ks(t,t.next)||Qt(t.prev,t,t.next)===0)){if(eo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qa(r,e,t,n,i,s,a){if(!r)return;!a&&s&&R0(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?y0(r,n,i,s):x0(r)){e.push(l.i,r.i,c.i),eo(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=M0($r(r),e),Qa(r,e,t,n,i,s,2)):a===2&&S0(r,e,t,n,i,s):Qa($r(r),e,t,n,i,s,1);break}}}function x0(r){const e=r.prev,t=r,n=r.next;if(Qt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),d=Math.max(i,s,a),f=Math.max(o,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Na(i,o,s,l,a,c,m.x,m.y)&&Qt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function y0(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Qt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),x=Math.max(o,l,c),g=Math.max(h,u,d),p=Iu(f,m,e,t,n),S=Iu(x,g,e,t,n);let y=r.prevZ,b=r.nextZ;for(;y&&y.z>=p&&b&&b.z<=S;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Na(o,h,l,u,c,d,y.x,y.y)&&Qt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==a&&Na(o,h,l,u,c,d,b.x,b.y)&&Qt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Na(o,h,l,u,c,d,y.x,y.y)&&Qt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==a&&Na(o,h,l,u,c,d,b.x,b.y)&&Qt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function M0(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ks(n,i)&&gp(n,t,t.next,i)&&Ja(n,i)&&Ja(i,n)&&(e.push(n.i,t.i,i.i),eo(t),eo(t.next),t=r=i),t=t.next}while(t!==r);return $r(t)}function S0(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&P0(a,o)){let l=_p(a,o);a=$r(a,a.next),l=$r(l,l.next),Qa(a,e,t,n,i,s,0),Qa(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function b0(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=pp(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(D0(c))}i.sort(E0);for(let s=0;s<i.length;s++)t=T0(i[s],t);return t}function E0(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function T0(r,e){const t=w0(r,e);if(!t)return e;const n=_p(t,r);return $r(n,n.next),$r(t,t.next)}function w0(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Ks(r,t))return t;do{if(Ks(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&mp(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Ja(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&A0(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function A0(r,e){return Qt(r.prev,r,e.prev)<0&&Qt(e.next,r,r.next)<0}function R0(r,e,t,n){let i=r;do i.z===0&&(i.z=Iu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,C0(i)}function C0(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function Iu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function D0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function mp(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Na(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&mp(r,e,t,n,i,s,a,o)}function P0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!I0(r,e)&&(Ja(r,e)&&Ja(e,r)&&L0(r,e)&&(Qt(r.prev,r,e.prev)||Qt(r,e.prev,e))||Ks(r,e)&&Qt(r.prev,r,r.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ks(r,e){return r.x===e.x&&r.y===e.y}function gp(r,e,t,n){const i=Ko(Qt(r,e,t)),s=Ko(Qt(r,e,n)),a=Ko(Qt(t,n,r)),o=Ko(Qt(t,n,e));return!!(i!==s&&a!==o||i===0&&Zo(r,t,e)||s===0&&Zo(r,n,e)||a===0&&Zo(t,r,n)||o===0&&Zo(t,e,n))}function Zo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ko(r){return r>0?1:r<0?-1:0}function I0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&gp(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ja(r,e){return Qt(r.prev,r,r.next)<0?Qt(r,e,r.next)>=0&&Qt(r,r.prev,e)>=0:Qt(r,e,r.prev)<0||Qt(r,r.next,e)<0}function L0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function _p(r,e){const t=Lu(r.i,r.x,r.y),n=Lu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function rf(r,e,t,n){const i=Lu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function eo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Lu(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function F0(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class N0{static triangulate(e,t,n=2){return v0(e,t,n)}}class vh{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return vh.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];sf(e),af(n,e);let a=e.length;t.forEach(sf);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,af(n,t[l]);const o=N0.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function sf(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function af(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class $s extends Tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const S=p*d-a;for(let y=0;y<c;y++){const b=y*u-s;m.push(b,-S,0),x.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const y=S+c*p,b=S+c*(p+1),L=S+1+c*(p+1),P=S+1+c*p;f.push(y,b,P),f.push(b,L,P)}this.setIndex(f),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class xh extends Tn{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new F,m=new Ye;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=s+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const S=p+g,y=S,b=S+n+1,L=S+n+2,P=S+1;o.push(y,b,P),o.push(b,L,P)}}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dn(r){const e={};for(let t=0;t<r.length;t++){const n=Qs(r[t]);for(const i in n)e[i]=n[i]}return e}function U0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function vp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const O0={clone:Qs,merge:Dn};var B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=U0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class z0 extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ga extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $o extends Rr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xp extends Rr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class V0 extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G0 extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Qo(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function H0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function of(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function yp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class so{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class W0 extends so{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bs,endingEnd:Bs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ks:s=e,o=2*t-n;break;case pl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ks:a=e,l=2*n-t;break;case pl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,S=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,b=f*g-f*x;for(let L=0;L!==o;++L)s[L]=p*a[h+L]+S*a[c+L]+y*a[l+L]+b*a[u+L];return s}}class Mp extends so{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class X0 extends so{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class q0 extends so{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const x=(n-t)/(i-t),g=1-x;for(let p=0;p!==o;++p)s[p]=a[c+p]*g+a[l+p]*x;return s}const f=o*2,m=e-1;for(let x=0;x!==o;++x){const g=a[c+x],p=a[l+x],S=m*f+x*2,y=d[S],b=d[S+1],L=e*f+x*2,P=u[L],w=u[L+1];let _=(n-t)/(i-t),T,j,D,k,H;for(let K=0;K<8;K++){T=_*_,j=T*_,D=1-_,k=D*D,H=k*D;const X=H*t+3*k*_*y+3*D*T*P+j*i-n;if(Math.abs(X)<1e-10)break;const W=3*k*(y-t)+6*D*_*(P-y)+3*T*(i-P);if(Math.abs(W)<1e-10)break;_=_-X/W,_=Math.max(0,Math.min(1,_))}s[x]=H*g+3*k*_*b+3*D*T*w+j*p}return s}}class yi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qo(t,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qo(e.times,Array),values:Qo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new X0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new W0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new q0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case fl:t=this.InterpolantFactoryMethodDiscrete;break;case Du:t=this.InterpolantFactoryMethodLinear;break;case tc:t=this.InterpolantFactoryMethodSmooth;break;case bd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fl;case this.InterpolantFactoryMethodLinear:return Du;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return bd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&bg(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yi.prototype.ValueTypeName="";yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Du;class ra extends yi{constructor(e,t,n){super(e,t,n)}}ra.prototype.ValueTypeName="bool";ra.prototype.ValueBufferType=Array;ra.prototype.DefaultInterpolation=fl;ra.prototype.InterpolantFactoryMethodLinear=void 0;ra.prototype.InterpolantFactoryMethodSmooth=void 0;class Sp extends yi{constructor(e,t,n,i){super(e,t,n,i)}}Sp.prototype.ValueTypeName="color";class to extends yi{constructor(e,t,n,i){super(e,t,n,i)}}to.prototype.ValueTypeName="number";class Y0 extends so{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)nt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Qr extends yi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Y0(this.times,this.values,this.getValueSize(),e)}}Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class sa extends yi{constructor(e,t,n){super(e,t,n)}}sa.prototype.ValueTypeName="string";sa.prototype.ValueBufferType=Array;sa.prototype.DefaultInterpolation=fl;sa.prototype.InterpolantFactoryMethodLinear=void 0;sa.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends yi{constructor(e,t,n,i){super(e,t,n,i)}}no.prototype.ValueTypeName="vector";class Fu{constructor(e="",t=-1,n=[],i=ah){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Z0(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(yi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=H0(l);l=of(l,1,h),c=of(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new to(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ze("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,x){if(f.length!==0){const g=[],p=[];yp(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const g=[],p=[];for(let S=0;S!==d[m].morphTargets.length;++S){const y=d[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new to(".morphTargetInfluence["+x+"]",g,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(no,f+".position",d,"pos",i),n(Qr,f+".quaternion",d,"rot",i),n(no,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function j0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return to;case"vector":case"vector2":case"vector3":case"vector4":return no;case"color":return Sp;case"quaternion":return Qr;case"bool":case"boolean":return ra;case"string":return sa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Z0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=j0(r.type);if(r.times===void 0){const t=[],n=[];yp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ha={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(lf(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!lf(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function lf(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class K0{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $0=new K0;class Jr{constructor(e){this.manager=e!==void 0?e:$0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const zi={};class Q0 extends Error{constructor(e,t){super(e),this.response=t}}class J0 extends Jr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ha.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:i});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=zi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){S();function S(){u.read().then(({done:y,value:b})=>{if(y)p.close();else{x+=b.byteLength;const L=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let P=0,w=h.length;P<w;P++){const _=h[P];_.onProgress&&_.onProgress(L)}p.enqueue(b),S()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Q0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Ha.add(`file:${e}`,c);const h=zi[e];delete zi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=zi[e];if(h===void 0)throw this.manager.itemError(e),c;delete zi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const As=new WeakMap;class e_ extends Jr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ha.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=As.get(a);u===void 0&&(u=[],As.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Ka("img");function l(){h(),t&&t(this);const u=As.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}As.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Ha.remove(`image:${e}`);const d=As.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}As.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ha.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class bp extends Jr{constructor(e){super(e)}load(e,t,n,i){const s=new _n,a=new e_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class wl extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ac=new Le,cf=new F,uf=new F;class yh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gh,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(cf),uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uf),t.updateMatrixWorld(),Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Za||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jo=new F,el=new nt,Ei=new F;class Ep extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jo,el,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,el,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Jo,el,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,el,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new F,hf=new Ye,df=new Ye;class In extends Ep{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,t){return this.getViewBounds(e,hf,df),t.subVectors(df,hf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ka*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class t_ extends yh{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class n_ extends wl{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new t_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class i_ extends yh{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0}}class Nu extends wl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new i_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Mh extends Ep{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class r_ extends yh{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ao extends wl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new r_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Sh extends wl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class s_{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Rs=-90,Cs=1;class Tp extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In(Rs,Cs,e,t);i.layers=this.layers,this.add(i);const s=new In(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const a=new In(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const o=new In(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const l=new In(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new In(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class a_ extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class o_{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=l_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function l_(){this._document.hidden===!1&&this.reset()}class c_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){nt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;nt.multiplyQuaternionsFlat(e,a,e,t,e,n),nt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const bh="\\[\\]\\.:\\/",u_=new RegExp("["+bh+"]","g"),Eh="[^"+bh+"]",h_="[^"+bh.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",Eh),f_=/(WCOD+)?/.source.replace("WCOD",h_),p_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),g_=new RegExp("^"+d_+f_+p_+m_+"$"),__=["material","materials","bones","map"];class v_{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(e){const t=g_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);__.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=v_;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class x_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Bs,endingEnd:Bs};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=hg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case fg:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ah:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===dg;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===ug){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ks,i.endingEnd=ks):(e?i.endingStart=this.zeroSlopeAtStart?ks:Bs:i.endingStart=pl,t?i.endingEnd=this.zeroSlopeAtEnd?ks:Bs:i.endingEnd=pl)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const y_=new Float32Array(1);class M_ extends Tr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;m=new c_(bt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Mp(new Float32Array(2),new Float32Array(2),1,y_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Fu.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ah),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new x_(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Fu.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const ff=new Le;class wp{constructor(e,t,n=0,i=1/0){this.ray=new ro(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new hh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ff.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ff),this}intersectObject(e,t=!0,n=[]){return Uu(e,this,n,t),n.sort(pf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Uu(e[i],this,n,t);return n.sort(pf),n}}function pf(r,e){return r.distance-e.distance}function Uu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Uu(s[a],e,t,!0)}}class mf{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class S_ extends m0{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ge(n),i=new Ge(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const x=d===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new Tn;h.setAttribute("position",new qt(l,3)),h.setAttribute("color",new qt(c,3));const u=new _h({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class b_ extends Tr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Be("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function gf(r,e,t,n){const i=E_(n);switch(t){case sp:return r*e;case nh:return r*e/i.components*i.byteLength;case ih:return r*e/i.components*i.byteLength;case js:return r*e*2/i.components*i.byteLength;case rh:return r*e*2/i.components*i.byteLength;case ap:return r*e*3/i.components*i.byteLength;case ii:return r*e*4/i.components*i.byteLength;case sh:return r*e*4/i.components*i.byteLength;case al:case ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ll:case cl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jc:case tu:return Math.max(r,16)*Math.max(e,8)/4;case Qc:case eu:return Math.max(r,8)*Math.max(e,8)/2;case nu:case iu:case su:case au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ru:case ou:case lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case du:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case pu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case mu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case gu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case vu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case yu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Su:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bu:case Eu:case Tu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case wu:case Au:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ru:case Cu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E_(r){switch(r){case Wn:case tp:return{byteLength:1,components:1};case Ya:case np:case $i:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case Di:case Ju:case ni:return{byteLength:4,components:1};case ip:case rp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ku}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ku);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ap(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function T_(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var w_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A_=`#ifdef USE_ALPHAHASH
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
#endif`,R_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I_=`#ifdef USE_AOMAP
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
#endif`,L_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F_=`#ifdef USE_BATCHING
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
#endif`,N_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k_=`#ifdef USE_IRIDESCENCE
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
#endif`,z_=`#ifdef USE_BUMPMAP
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Z_=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,K_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$_=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fv=`#ifdef USE_GRADIENTMAP
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
}`,pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_v=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,vv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bv=`PhysicalMaterial material;
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
#endif`,Ev=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Tv=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wv=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nv=`#if defined( USE_POINTS_UV )
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
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
#endif`,Gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jv=`#ifdef USE_NORMALMAP
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
#endif`,Zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,ux=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`#include <common>
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
}`,Ix=`#if DEPTH_PACKING == 3200
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
}`,Lx=`#define DISTANCE
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
}`,Fx=`#define DISTANCE
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
void main () {
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`uniform float scale;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,zx=`uniform vec3 diffuse;
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
}`,Vx=`#define LAMBERT
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
}`,Gx=`#define LAMBERT
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
}`,Hx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define NORMAL
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
}`,Yx=`#define PHONG
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
}`,jx=`#define PHONG
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
}`,Zx=`#define STANDARD
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
}`,Kx=`#define STANDARD
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
}`,$x=`#define TOON
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
}`,Qx=`#define TOON
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
}`,Jx=`uniform float size;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:w_,alphahash_pars_fragment:A_,alphamap_fragment:R_,alphamap_pars_fragment:C_,alphatest_fragment:D_,alphatest_pars_fragment:P_,aomap_fragment:I_,aomap_pars_fragment:L_,batching_pars_vertex:F_,batching_vertex:N_,begin_vertex:U_,beginnormal_vertex:O_,bsdfs:B_,iridescence_fragment:k_,bumpmap_pars_fragment:z_,clipping_planes_fragment:V_,clipping_planes_pars_fragment:G_,clipping_planes_pars_vertex:H_,clipping_planes_vertex:W_,color_fragment:X_,color_pars_fragment:q_,color_pars_vertex:Y_,color_vertex:j_,common:Z_,cube_uv_reflection_fragment:K_,defaultnormal_vertex:$_,displacementmap_pars_vertex:Q_,displacementmap_vertex:J_,emissivemap_fragment:ev,emissivemap_pars_fragment:tv,colorspace_fragment:nv,colorspace_pars_fragment:iv,envmap_fragment:rv,envmap_common_pars_fragment:sv,envmap_pars_fragment:av,envmap_pars_vertex:ov,envmap_physical_pars_fragment:vv,envmap_vertex:lv,fog_vertex:cv,fog_pars_vertex:uv,fog_fragment:hv,fog_pars_fragment:dv,gradientmap_pars_fragment:fv,lightmap_pars_fragment:pv,lights_lambert_fragment:mv,lights_lambert_pars_fragment:gv,lights_pars_begin:_v,lights_toon_fragment:xv,lights_toon_pars_fragment:yv,lights_phong_fragment:Mv,lights_phong_pars_fragment:Sv,lights_physical_fragment:bv,lights_physical_pars_fragment:Ev,lights_fragment_begin:Tv,lights_fragment_maps:wv,lights_fragment_end:Av,logdepthbuf_fragment:Rv,logdepthbuf_pars_fragment:Cv,logdepthbuf_pars_vertex:Dv,logdepthbuf_vertex:Pv,map_fragment:Iv,map_pars_fragment:Lv,map_particle_fragment:Fv,map_particle_pars_fragment:Nv,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:Ov,morphinstance_vertex:Bv,morphcolor_vertex:kv,morphnormal_vertex:zv,morphtarget_pars_vertex:Vv,morphtarget_vertex:Gv,normal_fragment_begin:Hv,normal_fragment_maps:Wv,normal_pars_fragment:Xv,normal_pars_vertex:qv,normal_vertex:Yv,normalmap_pars_fragment:jv,clearcoat_normal_fragment_begin:Zv,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:Qv,opaque_fragment:Jv,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:rx,roughnessmap_fragment:sx,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:lx,shadowmap_vertex:cx,shadowmask_pars_fragment:ux,skinbase_vertex:hx,skinning_pars_vertex:dx,skinning_vertex:fx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:_x,tonemapping_pars_fragment:vx,transmission_fragment:xx,transmission_pars_fragment:yx,uv_pars_fragment:Mx,uv_pars_vertex:Sx,uv_vertex:bx,worldpos_vertex:Ex,background_vert:Tx,background_frag:wx,backgroundCube_vert:Ax,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Dx,depth_vert:Px,depth_frag:Ix,distance_vert:Lx,distance_frag:Fx,equirect_vert:Nx,equirect_frag:Ux,linedashed_vert:Ox,linedashed_frag:Bx,meshbasic_vert:kx,meshbasic_frag:zx,meshlambert_vert:Vx,meshlambert_frag:Gx,meshmatcap_vert:Hx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:qx,meshphong_vert:Yx,meshphong_frag:jx,meshphysical_vert:Zx,meshphysical_frag:Kx,meshtoon_vert:$x,meshtoon_frag:Qx,points_vert:Jx,points_frag:ey,shadow_vert:ty,shadow_frag:ny,sprite_vert:iy,sprite_frag:ry},Me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},wi={basic:{uniforms:Dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Dn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Dn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Dn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Dn([Me.points,Me.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Dn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Dn([Me.common,Me.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Dn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Dn([Me.sprite,Me.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Dn([Me.common,Me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Dn([Me.lights,Me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};wi.physical={uniforms:Dn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const tl={r:0,b:0,g:0},Or=new en,sy=new Le;function ay(r,e,t,n,i,s){const a=new Ge(0);let o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let y=S.isScene===!0?S.background:null;if(y&&y.isTexture){const b=S.backgroundBlurriness>0;y=e.get(y,b)}return y}function m(S){let y=!1;const b=f(S);b===null?g(a,o):b&&b.isColor&&(g(b,1),y=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(S,y){const b=f(y);b&&(b.isCubeTexture||b.mapping===El)?(c===void 0&&(c=new Xt(new ia(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Qs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Or.copy(y.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sy.makeRotationFromEuler(Or)),c.material.toneMapped=ot.getTransfer(b.colorSpace)!==Ft,(h!==b||u!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Xt(new $s(2,2),new Pi({name:"BackgroundMaterial",uniforms:Qs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ot.getTransfer(b.colorSpace)!==Ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,y){S.getRGB(tl,vp(r)),t.buffers.color.setClear(tl.r,tl.g,tl.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:m,addToRenderList:x,dispose:p}}function oy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(D,k,H,K,q){let X=!1;const W=u(D,K,H,k);s!==W&&(s=W,c(s.object)),X=f(D,K,H,q),X&&m(D,K,H,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(D,k,H,K),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function u(D,k,H,K){const q=K.wireframe===!0;let X=n[k.id];X===void 0&&(X={},n[k.id]=X);const W=D.isInstancedMesh===!0?D.id:0;let oe=X[W];oe===void 0&&(oe={},X[W]=oe);let re=oe[H.id];re===void 0&&(re={},oe[H.id]=re);let pe=re[q];return pe===void 0&&(pe=d(l()),re[q]=pe),pe}function d(D){const k=[],H=[],K=[];for(let q=0;q<t;q++)k[q]=0,H[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:K,object:D,attributes:{},index:null}}function f(D,k,H,K){const q=s.attributes,X=k.attributes;let W=0;const oe=H.getAttributes();for(const re in oe)if(oe[re].location>=0){const ge=q[re];let Se=X[re];if(Se===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),ge===void 0||ge.attribute!==Se||Se&&ge.data!==Se.data)return!0;W++}return s.attributesNum!==W||s.index!==K}function m(D,k,H,K){const q={},X=k.attributes;let W=0;const oe=H.getAttributes();for(const re in oe)if(oe[re].location>=0){let ge=X[re];ge===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor));const Se={};Se.attribute=ge,ge&&ge.data&&(Se.data=ge.data),q[re]=Se,W++}s.attributes=q,s.attributesNum=W,s.index=K}function x(){const D=s.newAttributes;for(let k=0,H=D.length;k<H;k++)D[k]=0}function g(D){p(D,0)}function p(D,k){const H=s.newAttributes,K=s.enabledAttributes,q=s.attributeDivisors;H[D]=1,K[D]===0&&(r.enableVertexAttribArray(D),K[D]=1),q[D]!==k&&(r.vertexAttribDivisor(D,k),q[D]=k)}function S(){const D=s.newAttributes,k=s.enabledAttributes;for(let H=0,K=k.length;H<K;H++)k[H]!==D[H]&&(r.disableVertexAttribArray(H),k[H]=0)}function y(D,k,H,K,q,X,W){W===!0?r.vertexAttribIPointer(D,k,H,q,X):r.vertexAttribPointer(D,k,H,K,q,X)}function b(D,k,H,K){x();const q=K.attributes,X=H.getAttributes(),W=k.defaultAttributeValues;for(const oe in X){const re=X[oe];if(re.location>=0){let pe=q[oe];if(pe===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),pe!==void 0){const ge=pe.normalized,Se=pe.itemSize,qe=e.get(pe);if(qe===void 0)continue;const Tt=qe.buffer,ut=qe.type,ne=qe.bytesPerElement,he=ut===r.INT||ut===r.UNSIGNED_INT||pe.gpuType===Ju;if(pe.isInterleavedBufferAttribute){const ce=pe.data,$e=ce.stride,ke=pe.offset;if(ce.isInstancedInterleavedBuffer){for(let He=0;He<re.locationSize;He++)p(re.location+He,ce.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let He=0;He<re.locationSize;He++)g(re.location+He);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let He=0;He<re.locationSize;He++)y(re.location+He,Se/re.locationSize,ut,ge,$e*ne,(ke+Se/re.locationSize*He)*ne,he)}else{if(pe.isInstancedBufferAttribute){for(let ce=0;ce<re.locationSize;ce++)p(re.location+ce,pe.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ce=0;ce<re.locationSize;ce++)g(re.location+ce);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let ce=0;ce<re.locationSize;ce++)y(re.location+ce,Se/re.locationSize,ut,ge,Se*ne,Se/re.locationSize*ce*ne,he)}}else if(W!==void 0){const ge=W[oe];if(ge!==void 0)switch(ge.length){case 2:r.vertexAttrib2fv(re.location,ge);break;case 3:r.vertexAttrib3fv(re.location,ge);break;case 4:r.vertexAttrib4fv(re.location,ge);break;default:r.vertexAttrib1fv(re.location,ge)}}}}S()}function L(){T();for(const D in n){const k=n[D];for(const H in k){const K=k[H];for(const q in K){const X=K[q];for(const W in X)h(X[W].object),delete X[W];delete K[q]}}delete n[D]}}function P(D){if(n[D.id]===void 0)return;const k=n[D.id];for(const H in k){const K=k[H];for(const q in K){const X=K[q];for(const W in X)h(X[W].object),delete X[W];delete K[q]}}delete n[D.id]}function w(D){for(const k in n){const H=n[k];for(const K in H){const q=H[K];if(q[D.id]===void 0)continue;const X=q[D.id];for(const W in X)h(X[W].object),delete X[W];delete q[D.id]}}}function _(D){for(const k in n){const H=n[k],K=D.isInstancedMesh===!0?D.id:0,q=H[K];if(q!==void 0){for(const X in q){const W=q[X];for(const oe in W)h(W[oe].object),delete W[oe];delete q[X]}delete H[K],Object.keys(H).length===0&&delete n[k]}}}function T(){j(),a=!0,s!==i&&(s=i,c(s.object))}function j(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:j,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function ly(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==ii&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const _=w===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Wn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ni&&!_)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:b,maxSamples:L,samples:P}}function uy(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Hi,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const S=s?0:n,y=S*4;let b=p.clippingState||null;l.value=b,b=h(m,d,y,f);for(let L=0;L!==y;++L)b[L]=t[L];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,b=f;y!==x;++y,b+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const xr=4,_f=[.125,.215,.35,.446,.526,.582],Wr=20,hy=256,Da=new Mh,vf=new Ge;let Rc=null,Cc=0,Dc=0,Pc=!1;const dy=new F;class Ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=dy}=s;Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Cc,Dc),this._renderer.xr.enabled=Pc,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:$i,format:ii,colorSpace:br,depthBuffer:!1},i=xf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fy(s)),this._blurMaterial=my(s,e,t),this._ggxMaterial=py(s,e,t)}return i}_compileMaterial(e){const t=new Xt(new Tn,e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,n,i,s){const l=new In(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vf),u.toneMapping=vi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new ia,new Hr({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,p=!0):(g.color.copy(vf),p=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const L=this._cubeSize;Ds(i,b*L,y>2?L:0,L,L),u.setRenderTarget(i),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Kr||e.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-xr?n-m+xr:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Ds(s,g,p,3*x,2*x),i.setRenderTarget(s),i.render(o,Da),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Ds(e,g,p,3*x,2*x),i.setRenderTarget(e),i.render(o,Da)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Wr-1),x=s/m,g=isFinite(s)?1+Math.floor(h*x):Wr;g>Wr&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wr}`);const p=[];let S=0;for(let w=0;w<Wr;++w){const _=w/x,T=Math.exp(-_*_/2);p.push(T),w===0?S+=T:w<g&&(S+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const b=this._sizeLods[i],L=3*b*(i>y-xr?i-y+xr:0),P=4*(this._cubeSize-b);Ds(t,L,P,3*b,2*b),l.setRenderTarget(t),l.render(u,Da)}}function fy(r){const e=[],t=[],n=[];let i=r;const s=r-xr+1+_f.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-xr?l=_f[a-r+xr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,S=new Float32Array(x*m*f),y=new Float32Array(g*m*f),b=new Float32Array(p*m*f);for(let P=0;P<f;P++){const w=P%3*2/3-1,_=P>2?0:-1,T=[w,_,0,w+2/3,_,0,w+2/3,_+1,0,w,_,0,w+2/3,_+1,0,w,_+1,0];S.set(T,x*m*P),y.set(d,g*m*P);const j=[P,P,P,P,P,P];b.set(j,p*m*P)}const L=new Tn;L.setAttribute("position",new xi(S,x)),L.setAttribute("uv",new xi(y,g)),L.setAttribute("faceIndex",new xi(b,p)),n.push(new Xt(L,null)),i>xr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function xf(r,e,t){const n=new Ri(r,e,t);return n.texture.mapping=El,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function py(r,e,t){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function my(r,e,t){const n=new Float32Array(Wr),i=new F(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function yf(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Mf(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Th extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new dp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ia(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:Zi});s.uniforms.tEquirect.value=t;const a=new Xt(i,s),o=t.minFilter;return t.minFilter===Xr&&(t.minFilter=bn),new Tp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function gy(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===sl||f===Jl)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const x=new Th(m.height);return x.fromEquirectangularTexture(r,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,m=f===sl||f===Jl,x=f===Kr||f===Ys;if(m||x){let g=t.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Ou(r)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new Ou(r)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===sl?d.mapping=Kr:f===Jl&&(d.mapping=Ys),d}function l(d){let f=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function _y(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&gl("WebGLRenderer: "+n+" extension not supported."),i}}}function vy(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(m===void 0)return;if(f!==null){const S=f.array;x=f.version;for(let y=0,b=S.length;y<b;y+=3){const L=S[y+0],P=S[y+1],w=S[y+2];d.push(L,P,P,w,w,L)}}else{const S=m.array;x=m.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const L=y+0,P=y+1,w=y+2;d.push(L,P,P,w,w,L)}}const g=new(m.count>=65535?up:fh)(d,1);g.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function xy(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*x[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function My(r,e,t){const n=new WeakMap,i=new Dt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let j=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",j)};var f=j;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),x===!0&&(b=2),g===!0&&(b=3);let L=o.attributes.position.count*b,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*P*4*u),_=new lp(w,L,P,u);_.type=ni,_.needsUpdate=!0;const T=b*4;for(let D=0;D<u;D++){const k=p[D],H=S[D],K=y[D],q=L*P*4*D;for(let X=0;X<k.count;X++){const W=X*T;m===!0&&(i.fromBufferAttribute(k,X),w[q+W+0]=i.x,w[q+W+1]=i.y,w[q+W+2]=i.z,w[q+W+3]=0),x===!0&&(i.fromBufferAttribute(H,X),w[q+W+4]=i.x,w[q+W+5]=i.y,w[q+W+6]=i.z,w[q+W+7]=0),g===!0&&(i.fromBufferAttribute(K,X),w[q+W+8]=i.x,w[q+W+9]=i.y,w[q+W+10]=i.z,w[q+W+11]=K.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Ye(L,P)},n.set(o,d),o.addEventListener("dispose",j)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Sy(r,e,t,n,i){let s=new WeakMap;function a(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const by={[Kf]:"LINEAR_TONE_MAPPING",[$f]:"REINHARD_TONE_MAPPING",[Qf]:"CINEON_TONE_MAPPING",[$u]:"ACES_FILMIC_TONE_MAPPING",[Qu]:"AGX_TONE_MAPPING",[bl]:"NEUTRAL_TONE_MAPPING",[Jf]:"CUSTOM_TONE_MAPPING"};function Ey(r,e,t,n,i){const s=new Ri(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Ri(e,t,{type:$i,depthBuffer:!1,stencilBuffer:!1}),o=new Tn;o.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new qt([0,2,0,0,2,0],2));const l=new z0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Xt(o,l),h=new Mh(-1,1,1,-1,0,1);let u=null,d=null,f=!1,m,x=null,g=[],p=!1;this.setSize=function(S,y){s.setSize(S,y),a.setSize(S,y);for(let b=0;b<g.length;b++){const L=g[b];L.setSize&&L.setSize(S,y)}},this.setEffects=function(S){g=S,p=g.length>0&&g[0].isRenderPass===!0;const y=s.width,b=s.height;for(let L=0;L<g.length;L++){const P=g[L];P.setSize&&P.setSize(y,b)}},this.begin=function(S,y){if(f||S.toneMapping===vi&&g.length===0)return!1;if(x=y,y!==null){const b=y.width,L=y.height;(s.width!==b||s.height!==L)&&this.setSize(b,L)}return p===!1&&S.setRenderTarget(s),m=S.toneMapping,S.toneMapping=vi,!0},this.hasRenderPass=function(){return p},this.end=function(S,y){S.toneMapping=m,f=!0;let b=s,L=a;for(let P=0;P<g.length;P++){const w=g[P];if(w.enabled!==!1&&(w.render(S,L,b,y),w.needsSwap!==!1)){const _=b;b=L,L=_}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,l.defines={},ot.getTransfer(u)===Ft&&(l.defines.SRGB_TRANSFER="");const P=by[d];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(x),S.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Rp=new _n,Bu=new $a(1,1),Cp=new lp,Dp=new jg,Pp=new dp,Sf=[],bf=[],Ef=new Float32Array(16),Tf=new Float32Array(9),wf=new Float32Array(4);function aa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sf[i];if(s===void 0&&(s=new Float32Array(i),Sf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Rl(r,e){let t=bf[e];t===void 0&&(t=new Int32Array(e),bf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ty(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function Ay(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function Ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function Cy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;wf.set(n),r.uniformMatrix2fv(this.addr,!1,wf),fn(t,n)}}function Dy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Tf.set(n),r.uniformMatrix3fv(this.addr,!1,Tf),fn(t,n)}}function Py(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Ef.set(n),r.uniformMatrix4fv(this.addr,!1,Ef),fn(t,n)}}function Iy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ly(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function Fy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function Ny(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function Uy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Oy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function By(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function ky(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function zy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Bu.compareFunction=t.isReversedDepthBuffer()?lh:oh,s=Bu):s=Rp,t.setTexture2D(e||s,i)}function Vy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dp,i)}function Gy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pp,i)}function Hy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cp,i)}function Wy(r){switch(r){case 5126:return Ty;case 35664:return wy;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return Dy;case 35676:return Py;case 5124:case 35670:return Iy;case 35667:case 35671:return Ly;case 35668:case 35672:return Fy;case 35669:case 35673:return Ny;case 5125:return Uy;case 36294:return Oy;case 36295:return By;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Hy}}function Xy(r,e){r.uniform1fv(this.addr,e)}function qy(r,e){const t=aa(e,this.size,2);r.uniform2fv(this.addr,t)}function Yy(r,e){const t=aa(e,this.size,3);r.uniform3fv(this.addr,t)}function jy(r,e){const t=aa(e,this.size,4);r.uniform4fv(this.addr,t)}function Zy(r,e){const t=aa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ky(r,e){const t=aa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $y(r,e){const t=aa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Qy(r,e){r.uniform1iv(this.addr,e)}function Jy(r,e){r.uniform2iv(this.addr,e)}function eM(r,e){r.uniform3iv(this.addr,e)}function tM(r,e){r.uniform4iv(this.addr,e)}function nM(r,e){r.uniform1uiv(this.addr,e)}function iM(r,e){r.uniform2uiv(this.addr,e)}function rM(r,e){r.uniform3uiv(this.addr,e)}function sM(r,e){r.uniform4uiv(this.addr,e)}function aM(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Bu:a=Rp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function oM(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Dp,s[a])}function lM(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Pp,s[a])}function cM(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cp,s[a])}function uM(r){switch(r){case 5126:return Xy;case 35664:return qy;case 35665:return Yy;case 35666:return jy;case 35674:return Zy;case 35675:return Ky;case 35676:return $y;case 5124:case 35670:return Qy;case 35667:case 35671:return Jy;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return rM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}class hM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wy(t.type)}}class dM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uM(t.type)}}class fM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function Af(r,e){r.seq.push(e),r.map[e.id]=e}function pM(r,e,t){const n=r.name,i=n.length;for(Ic.lastIndex=0;;){const s=Ic.exec(n),a=Ic.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Af(t,c===void 0?new hM(o,r,e):new dM(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new fM(o),Af(t,u)),t=u}}}class ul{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);pM(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Rf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const mM=37297;let gM=0;function _M(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Cf=new rt;function vM(r){ot._getMatrix(Cf,ot.workingColorSpace,r);const e=`mat3( ${Cf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(r)){case ml:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Df(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+_M(r.getShaderSource(e),o)}else return s}function xM(r,e){const t=vM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yM={[Kf]:"Linear",[$f]:"Reinhard",[Qf]:"Cineon",[$u]:"ACESFilmic",[Qu]:"AgX",[bl]:"Neutral",[Jf]:"Custom"};function MM(r,e){const t=yM[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nl=new F;function SM(){ot.getLuminanceCoefficients(nl);const r=nl.x.toFixed(4),e=nl.y.toFixed(4),t=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function EM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function TM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ua(r){return r!==""}function Pf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(r){return r.replace(wM,RM)}const AM=new Map;function RM(r,e){let t=lt[e];if(t===void 0){const n=AM.get(e);if(n!==void 0)t=lt[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ku(t)}const CM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(r){return r.replace(CM,DM)}function DM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ff(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const PM={[Ba]:"SHADOWMAP_TYPE_PCF",[Fa]:"SHADOWMAP_TYPE_VSM"};function IM(r){return PM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LM={[Kr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[El]:"ENVMAP_TYPE_CUBE_UV"};function FM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":LM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const NM={[Ys]:"ENVMAP_MODE_REFRACTION"};function UM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":NM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OM={[Sl]:"ENVMAP_BLENDING_MULTIPLY",[ag]:"ENVMAP_BLENDING_MIX",[og]:"ENVMAP_BLENDING_ADD"};function BM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":OM[r.combine]||"ENVMAP_BLENDING_NONE"}function kM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=IM(t),c=FM(t),h=UM(t),u=BM(t),d=kM(t),f=bM(t),m=EM(s),x=i.createProgram();let g,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ua).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ua).join(`
`),p.length>0&&(p+=`
`)):(g=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),p=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?lt.tonemapping_pars_fragment:"",t.toneMapping!==vi?MM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,xM("linearToOutputTexel",t.outputColorSpace),SM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),a=ku(a),a=Pf(a,t),a=If(a,t),o=ku(o),o=Pf(o,t),o=If(o,t),a=Lf(a),o=Lf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+g+a,b=S+p+o,L=Rf(i,i.VERTEX_SHADER,y),P=Rf(i,i.FRAGMENT_SHADER,b);i.attachShader(x,L),i.attachShader(x,P),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(D){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(x)||"",H=i.getShaderInfoLog(L)||"",K=i.getShaderInfoLog(P)||"",q=k.trim(),X=H.trim(),W=K.trim();let oe=!0,re=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,L,P);else{const pe=Df(i,L,"vertex"),ge=Df(i,P,"fragment");Ze("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+pe+`
`+ge)}else q!==""?Be("WebGLProgram: Program Info Log:",q):(X===""||W==="")&&(re=!1);re&&(D.diagnostics={runnable:oe,programLog:q,vertexShader:{log:X,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(L),i.deleteShader(P),_=new ul(i,x),T=TM(i,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=i.getProgramParameter(x,mM)),j},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=P,this}let VM=0;class GM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new HM(e),t.set(e,n)),n}}class HM{constructor(e){this.id=VM++,this.code=e,this.usedTimes=0}}function WM(r,e,t,n,i,s){const a=new hh,o=new GM,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,j,D,k){const H=D.fog,K=k.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||q,X),oe=W&&W.mapping===El?W.image.height:null,re=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ge=pe!==void 0?pe.length:0;let Se=0;K.morphAttributes.position!==void 0&&(Se=1),K.morphAttributes.normal!==void 0&&(Se=2),K.morphAttributes.color!==void 0&&(Se=3);let qe,Tt,ut,ne;if(re){const We=wi[re];qe=We.vertexShader,Tt=We.fragmentShader}else qe=_.vertexShader,Tt=_.fragmentShader,o.update(_),ut=o.getVertexShaderID(_),ne=o.getFragmentShaderID(_);const he=r.getRenderTarget(),ce=r.state.buffers.depth.getReversed(),$e=k.isInstancedMesh===!0,ke=k.isBatchedMesh===!0,He=!!_.map,zt=!!_.matcap,it=!!W,mt=!!_.aoMap,gt=!!_.lightMap,ze=!!_.bumpMap,jt=!!_.normalMap,U=!!_.displacementMap,Ht=!!_.emissiveMap,dt=!!_.metalnessMap,wt=!!_.roughnessMap,Ie=_.anisotropy>0,C=_.clearcoat>0,v=_.dispersion>0,G=_.iridescence>0,ie=_.sheen>0,se=_.transmission>0,ee=Ie&&!!_.anisotropyMap,Ce=C&&!!_.clearcoatMap,me=C&&!!_.clearcoatNormalMap,Oe=C&&!!_.clearcoatRoughnessMap,Xe=G&&!!_.iridescenceMap,le=G&&!!_.iridescenceThicknessMap,de=ie&&!!_.sheenColorMap,be=ie&&!!_.sheenRoughnessMap,Re=!!_.specularMap,Ee=!!_.specularColorMap,ue=!!_.specularIntensityMap,B=se&&!!_.transmissionMap,te=se&&!!_.thicknessMap,fe=!!_.gradientMap,Te=!!_.alphaMap,ae=_.alphaTest>0,Q=!!_.alphaHash,we=!!_.extensions;let Qe=vi;_.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Qe=r.toneMapping);const St={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:qe,fragmentShader:Tt,defines:_.defines,customVertexShaderID:ut,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ke,batchingColor:ke&&k._colorsTexture!==null,instancing:$e,instancingColor:$e&&k.instanceColor!==null,instancingMorph:$e&&k.morphTexture!==null,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:br,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:zt,envMap:it,envMapMode:it&&W.mapping,envMapCubeUVHeight:oe,aoMap:mt,lightMap:gt,bumpMap:ze,normalMap:jt,displacementMap:U,emissiveMap:Ht,normalMapObjectSpace:jt&&_.normalMapType===mg,normalMapTangentSpace:jt&&_.normalMapType===Tl,metalnessMap:dt,roughnessMap:wt,anisotropy:Ie,anisotropyMap:ee,clearcoat:C,clearcoatMap:Ce,clearcoatNormalMap:me,clearcoatRoughnessMap:Oe,dispersion:v,iridescence:G,iridescenceMap:Xe,iridescenceThicknessMap:le,sheen:ie,sheenColorMap:de,sheenRoughnessMap:be,specularMap:Re,specularColorMap:Ee,specularIntensityMap:ue,transmission:se,transmissionMap:B,thicknessMap:te,gradientMap:fe,opaque:_.transparent===!1&&_.blending===Gs&&_.alphaToCoverage===!1,alphaMap:Te,alphaTest:ae,alphaHash:Q,combine:_.combine,mapUv:He&&m(_.map.channel),aoMapUv:mt&&m(_.aoMap.channel),lightMapUv:gt&&m(_.lightMap.channel),bumpMapUv:ze&&m(_.bumpMap.channel),normalMapUv:jt&&m(_.normalMap.channel),displacementMapUv:U&&m(_.displacementMap.channel),emissiveMapUv:Ht&&m(_.emissiveMap.channel),metalnessMapUv:dt&&m(_.metalnessMap.channel),roughnessMapUv:wt&&m(_.roughnessMap.channel),anisotropyMapUv:ee&&m(_.anisotropyMap.channel),clearcoatMapUv:Ce&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(_.sheenRoughnessMap.channel),specularMapUv:Re&&m(_.specularMap.channel),specularColorMapUv:Ee&&m(_.specularColorMap.channel),specularIntensityMapUv:ue&&m(_.specularIntensityMap.channel),transmissionMapUv:B&&m(_.transmissionMap.channel),thicknessMapUv:te&&m(_.thicknessMap.channel),alphaMapUv:Te&&m(_.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(jt||Ie),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(He||Te),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||K.attributes.normal===void 0&&jt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ce,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===Ft,decodeVideoTextureEmissive:Ht&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===Ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Bn,flipSided:_.side===Ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:we&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&_.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function g(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const j in _.defines)T.push(j),T.push(_.defines[j]);return _.isRawShaderMaterial===!1&&(p(T,_),S(T,_),T.push(r.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){const T=f[_.type];let j;if(T){const D=wi[T];j=O0.clone(D.uniforms)}else j=_.uniforms;return j}function b(_,T){let j=h.get(T);return j!==void 0?++j.usedTimes:(j=new zM(r,T,_,i),c.push(j),h.set(T,j)),j}function L(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function P(_){o.remove(_)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:L,releaseShaderCache:P,programs:c,dispose:w}}function XM(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function qM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Nf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Uf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,g,p){let S=r[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},r[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=m,S.materialVariant=a(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=g,S.group=p),e++,S}function l(d,f,m,x,g,p){const S=o(d,f,m,x,g,p);m.transmission>0?n.push(S):m.transparent===!0?i.push(S):t.push(S)}function c(d,f,m,x,g,p){const S=o(d,f,m,x,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?i.unshift(S):t.unshift(S)}function h(d,f){t.length>1&&t.sort(d||qM),n.length>1&&n.sort(f||Nf),i.length>1&&i.sort(f||Nf)}function u(){for(let d=e,f=r.length;d<f;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:h}}function YM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Uf,r.set(n,[a])):i>=s.length?(a=new Uf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function jM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ge};break;case"SpotLight":t={position:new F,direction:new F,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function ZM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let KM=0;function $M(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function QM(r){const e=new jM,t=ZM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new Le,a=new Le;function o(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,S=0,y=0,b=0,L=0,P=0,w=0;c.sort($M);for(let T=0,j=c.length;T<j;T++){const D=c[T],k=D.color,H=D.intensity,K=D.distance;let q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===js?q=D.shadow.map.texture:q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*H,u+=k.g*H,d+=k.b*H;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],H);w++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,oe=t.get(D);oe.shadowIntensity=W.intensity,oe.shadowBias=W.bias,oe.shadowNormalBias=W.normalBias,oe.shadowRadius=W.radius,oe.shadowMapSize=W.mapSize,n.directionalShadow[f]=oe,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=D.shadow.matrix,S++}n.directional[f]=X,f++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(k).multiplyScalar(H),X.distance=K,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[x]=X;const W=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,W.updateMatrices(D),D.castShadow&&P++),n.spotLightMatrix[x]=W.matrix,D.castShadow){const oe=t.get(D);oe.shadowIntensity=W.intensity,oe.shadowBias=W.bias,oe.shadowNormalBias=W.normalBias,oe.shadowRadius=W.radius,oe.shadowMapSize=W.mapSize,n.spotShadow[x]=oe,n.spotShadowMap[x]=q,b++}x++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(k).multiplyScalar(H),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=X,g++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const W=D.shadow,oe=t.get(D);oe.shadowIntensity=W.intensity,oe.shadowBias=W.bias,oe.shadowNormalBias=W.normalBias,oe.shadowRadius=W.radius,oe.shadowMapSize=W.mapSize,oe.shadowCameraNear=W.camera.near,oe.shadowCameraFar=W.camera.far,n.pointShadow[m]=oe,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=D.shadow.matrix,y++}n.point[m]=X,m++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(H),X.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[p]=X,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==f||_.pointLength!==m||_.spotLength!==x||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==S||_.numPointShadows!==y||_.numSpotShadows!==b||_.numSpotMaps!==L||_.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,_.directionalLength=f,_.pointLength=m,_.spotLength=x,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=S,_.numPointShadows=y,_.numSpotShadows=b,_.numSpotMaps=L,_.numLightProbes=w,n.version=KM++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(y.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const b=n.rectArea[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Of(r){const e=new QM(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function JM(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Of(r),e.set(i,[o])):s>=a.length?(o=new Of(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const eS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tS=`uniform sampler2D shadow_pass;
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
}`,nS=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],iS=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Bf=new Le,Pa=new F,Lc=new F;function rS(r,e,t){let n=new gh;const i=new Ye,s=new Ye,a=new Dt,o=new V0,l=new G0,c={},h=t.maxTextureSize,u={[Sr]:Ln,[Ln]:Sr,[Bn]:Bn},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:eS,fragmentShader:tS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Tn;m.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba;let p=this.type;this.render=function(P,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;this.type===Vm&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ba);const T=r.getRenderTarget(),j=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Zi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=p!==this.type;H&&w.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(q=>q.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,q=P.length;K<q;K++){const X=P[K],W=X.shadow;if(W===void 0){Be("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const oe=W.getFrameExtents();i.multiply(oe),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/oe.x),i.x=s.x*oe.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/oe.y),i.y=s.y*oe.y,W.mapSize.y=s.y));const re=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=re,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Fa){if(X.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ri(i.x,i.y,{format:js,type:$i,minFilter:bn,magFilter:bn,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new $a(i.x,i.y,ni),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Qi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=vn,W.map.depthTexture.magFilter=vn}else X.isPointLight?(W.map=new Th(i.x),W.map.depthTexture=new g0(i.x,Di)):(W.map=new Ri(i.x,i.y),W.map.depthTexture=new $a(i.x,i.y,Di)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Qi,this.type===Ba?(W.map.depthTexture.compareFunction=re?lh:oh,W.map.depthTexture.minFilter=bn,W.map.depthTexture.magFilter=bn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=vn,W.map.depthTexture.magFilter=vn);W.camera.updateProjectionMatrix()}const pe=W.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<pe;ge++){if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,ge),r.clear();else{ge===0&&(r.setRenderTarget(W.map),r.clear());const Se=W.getViewport(ge);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),k.viewport(a)}if(X.isPointLight){const Se=W.camera,qe=W.matrix,Tt=X.distance||Se.far;Tt!==Se.far&&(Se.far=Tt,Se.updateProjectionMatrix()),Pa.setFromMatrixPosition(X.matrixWorld),Se.position.copy(Pa),Lc.copy(Se.position),Lc.add(nS[ge]),Se.up.copy(iS[ge]),Se.lookAt(Lc),Se.updateMatrixWorld(),qe.makeTranslation(-Pa.x,-Pa.y,-Pa.z),Bf.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Bf,Se.coordinateSystem,Se.reversedDepth)}else W.updateMatrices(X);n=W.getFrustum(),b(w,_,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Fa&&S(W,_),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(T,j,D)};function S(P,w){const _=e.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ri(i.x,i.y,{format:js,type:$i})),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(w,null,_,d,x,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(w,null,_,f,x,null)}function y(P,w,_,T){let j=null;const D=_.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)j=D;else if(j=_.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=j.uuid,H=w.uuid;let K=c[k];K===void 0&&(K={},c[k]=K);let q=K[H];q===void 0&&(q=j.clone(),K[H]=q,w.addEventListener("dispose",L)),j=q}if(j.visible=w.visible,j.wireframe=w.wireframe,T===Fa?j.side=w.shadowSide!==null?w.shadowSide:w.side:j.side=w.shadowSide!==null?w.shadowSide:u[w.side],j.alphaMap=w.alphaMap,j.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,j.map=w.map,j.clipShadows=w.clipShadows,j.clippingPlanes=w.clippingPlanes,j.clipIntersection=w.clipIntersection,j.displacementMap=w.displacementMap,j.displacementScale=w.displacementScale,j.displacementBias=w.displacementBias,j.wireframeLinewidth=w.wireframeLinewidth,j.linewidth=w.linewidth,_.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const k=r.properties.get(j);k.light=_}return j}function b(P,w,_,T,j){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&j===Fa)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,P.matrixWorld);const H=e.update(P),K=P.material;if(Array.isArray(K)){const q=H.groups;for(let X=0,W=q.length;X<W;X++){const oe=q[X],re=K[oe.materialIndex];if(re&&re.visible){const pe=y(P,re,T,j);P.onBeforeShadow(r,P,w,_,H,pe,oe),r.renderBufferDirect(_,null,H,pe,P,oe),P.onAfterShadow(r,P,w,_,H,pe,oe)}}}else if(K.visible){const q=y(P,K,T,j);P.onBeforeShadow(r,P,w,_,H,q,null),r.renderBufferDirect(_,null,H,q,P,null),P.onAfterShadow(r,P,w,_,H,q,null)}}const k=P.children;for(let H=0,K=k.length;H<K;H++)b(k[H],w,_,T,j)}function L(P){P.target.removeEventListener("dispose",L);for(const _ in c){const T=c[_],j=P.target.uuid;j in T&&(T[j].dispose(),delete T[j])}}}function sS(r,e){function t(){let B=!1;const te=new Dt;let fe=null;const Te=new Dt(0,0,0,0);return{setMask:function(ae){fe!==ae&&!B&&(r.colorMask(ae,ae,ae,ae),fe=ae)},setLocked:function(ae){B=ae},setClear:function(ae,Q,we,Qe,St){St===!0&&(ae*=Qe,Q*=Qe,we*=Qe),te.set(ae,Q,we,Qe),Te.equals(te)===!1&&(r.clearColor(ae,Q,we,Qe),Te.copy(te))},reset:function(){B=!1,fe=null,Te.set(-1,0,0,0)}}}function n(){let B=!1,te=!1,fe=null,Te=null,ae=null;return{setReversed:function(Q){if(te!==Q){const we=e.get("EXT_clip_control");Q?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),te=Q;const Qe=ae;ae=null,this.setClear(Qe)}},getReversed:function(){return te},setTest:function(Q){Q?he(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(Q){fe!==Q&&!B&&(r.depthMask(Q),fe=Q)},setFunc:function(Q){if(te&&(Q=wg[Q]),Te!==Q){switch(Q){case Wc:r.depthFunc(r.NEVER);break;case Xc:r.depthFunc(r.ALWAYS);break;case qc:r.depthFunc(r.LESS);break;case qs:r.depthFunc(r.LEQUAL);break;case Yc:r.depthFunc(r.EQUAL);break;case jc:r.depthFunc(r.GEQUAL);break;case Zc:r.depthFunc(r.GREATER);break;case Kc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Te=Q}},setLocked:function(Q){B=Q},setClear:function(Q){ae!==Q&&(ae=Q,te&&(Q=1-Q),r.clearDepth(Q))},reset:function(){B=!1,fe=null,Te=null,ae=null,te=!1}}}function i(){let B=!1,te=null,fe=null,Te=null,ae=null,Q=null,we=null,Qe=null,St=null;return{setTest:function(We){B||(We?he(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(We){te!==We&&!B&&(r.stencilMask(We),te=We)},setFunc:function(We,ri,si){(fe!==We||Te!==ri||ae!==si)&&(r.stencilFunc(We,ri,si),fe=We,Te=ri,ae=si)},setOp:function(We,ri,si){(Q!==We||we!==ri||Qe!==si)&&(r.stencilOp(We,ri,si),Q=We,we=ri,Qe=si)},setLocked:function(We){B=We},setClear:function(We){St!==We&&(r.clearStencil(We),St=We)},reset:function(){B=!1,te=null,fe=null,Te=null,ae=null,Q=null,we=null,Qe=null,St=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,S=null,y=null,b=null,L=null,P=null,w=new Ge(0,0,0),_=0,T=!1,j=null,D=null,k=null,H=null,K=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const oe=r.getParameter(r.VERSION);oe.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(oe)[1]),X=W>=1):oe.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),X=W>=2);let re=null,pe={};const ge=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),qe=new Dt().fromArray(ge),Tt=new Dt().fromArray(Se);function ut(B,te,fe,Te){const ae=new Uint8Array(4),Q=r.createTexture();r.bindTexture(B,Q),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<fe;we++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(te,0,r.RGBA,1,1,Te,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(te+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return Q}const ne={};ne[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(r.DEPTH_TEST),a.setFunc(qs),ze(!1),jt(vd),he(r.CULL_FACE),mt(Zi);function he(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function ce(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function $e(B,te){return u[B]!==te?(r.bindFramebuffer(B,te),u[B]=te,B===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=te),B===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=te),!0):!1}function ke(B,te){let fe=f,Te=!1;if(B){fe=d.get(te),fe===void 0&&(fe=[],d.set(te,fe));const ae=B.textures;if(fe.length!==ae.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,we=ae.length;Q<we;Q++)fe[Q]=r.COLOR_ATTACHMENT0+Q;fe.length=ae.length,Te=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,Te=!0);Te&&r.drawBuffers(fe)}function He(B){return m!==B?(r.useProgram(B),m=B,!0):!1}const zt={[Gr]:r.FUNC_ADD,[Hm]:r.FUNC_SUBTRACT,[Wm]:r.FUNC_REVERSE_SUBTRACT};zt[Xm]=r.MIN,zt[qm]=r.MAX;const it={[Ym]:r.ZERO,[jm]:r.ONE,[Zm]:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,[tg]:r.SRC_ALPHA_SATURATE,[Jm]:r.DST_COLOR,[$m]:r.DST_ALPHA,[Km]:r.ONE_MINUS_SRC_COLOR,[Hc]:r.ONE_MINUS_SRC_ALPHA,[eg]:r.ONE_MINUS_DST_COLOR,[Qm]:r.ONE_MINUS_DST_ALPHA,[ng]:r.CONSTANT_COLOR,[ig]:r.ONE_MINUS_CONSTANT_COLOR,[rg]:r.CONSTANT_ALPHA,[sg]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(B,te,fe,Te,ae,Q,we,Qe,St,We){if(B===Zi){x===!0&&(ce(r.BLEND),x=!1);return}if(x===!1&&(he(r.BLEND),x=!0),B!==Gm){if(B!==g||We!==T){if((p!==Gr||b!==Gr)&&(r.blendEquation(r.FUNC_ADD),p=Gr,b=Gr),We)switch(B){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xd:r.blendFunc(r.ONE,r.ONE);break;case yd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Md:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ze("WebGLState: Invalid blending: ",B);break}else switch(B){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case yd:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Md:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",B);break}S=null,y=null,L=null,P=null,w.set(0,0,0),_=0,g=B,T=We}return}ae=ae||te,Q=Q||fe,we=we||Te,(te!==p||ae!==b)&&(r.blendEquationSeparate(zt[te],zt[ae]),p=te,b=ae),(fe!==S||Te!==y||Q!==L||we!==P)&&(r.blendFuncSeparate(it[fe],it[Te],it[Q],it[we]),S=fe,y=Te,L=Q,P=we),(Qe.equals(w)===!1||St!==_)&&(r.blendColor(Qe.r,Qe.g,Qe.b,St),w.copy(Qe),_=St),g=B,T=!1}function gt(B,te){B.side===Bn?ce(r.CULL_FACE):he(r.CULL_FACE);let fe=B.side===Ln;te&&(fe=!fe),ze(fe),B.blending===Gs&&B.transparent===!1?mt(Zi):mt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const Te=B.stencilWrite;o.setTest(Te),Te&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ht(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function ze(B){j!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),j=B)}function jt(B){B!==km?(he(r.CULL_FACE),B!==D&&(B===vd?r.cullFace(r.BACK):B===zm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),D=B}function U(B){B!==k&&(X&&r.lineWidth(B),k=B)}function Ht(B,te,fe){B?(he(r.POLYGON_OFFSET_FILL),(H!==te||K!==fe)&&(H=te,K=fe,a.getReversed()&&(te=-te),r.polygonOffset(te,fe))):ce(r.POLYGON_OFFSET_FILL)}function dt(B){B?he(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function wt(B){B===void 0&&(B=r.TEXTURE0+q-1),re!==B&&(r.activeTexture(B),re=B)}function Ie(B,te,fe){fe===void 0&&(re===null?fe=r.TEXTURE0+q-1:fe=re);let Te=pe[fe];Te===void 0&&(Te={type:void 0,texture:void 0},pe[fe]=Te),(Te.type!==B||Te.texture!==te)&&(re!==fe&&(r.activeTexture(fe),re=fe),r.bindTexture(B,te||ne[B]),Te.type=B,Te.texture=te)}function C(){const B=pe[re];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function ie(){try{r.texSubImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function se(){try{r.texSubImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function ee(){try{r.compressedTexSubImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function Ce(){try{r.compressedTexSubImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function me(){try{r.texStorage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function Oe(){try{r.texStorage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function Xe(){try{r.texImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function le(){try{r.texImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function de(B){qe.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),qe.copy(B))}function be(B){Tt.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Tt.copy(B))}function Re(B,te){let fe=c.get(te);fe===void 0&&(fe=new WeakMap,c.set(te,fe));let Te=fe.get(B);Te===void 0&&(Te=r.getUniformBlockIndex(te,B.name),fe.set(B,Te))}function Ee(B,te){const Te=c.get(te).get(B);l.get(te)!==Te&&(r.uniformBlockBinding(te,Te,B.__bindingPointIndex),l.set(te,Te))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},re=null,pe={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,S=null,y=null,b=null,L=null,P=null,w=new Ge(0,0,0),_=0,T=!1,j=null,D=null,k=null,H=null,K=null,qe.set(0,0,r.canvas.width,r.canvas.height),Tt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:ce,bindFramebuffer:$e,drawBuffers:ke,useProgram:He,setBlending:mt,setMaterial:gt,setFlipSided:ze,setCullFace:jt,setLineWidth:U,setPolygonOffset:Ht,setScissorTest:dt,activeTexture:wt,bindTexture:Ie,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:G,texImage2D:Xe,texImage3D:le,updateUBOMapping:Re,uniformBlockBinding:Ee,texStorage2D:me,texStorage3D:Oe,texSubImage2D:ie,texSubImage3D:se,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ce,scissor:de,viewport:be,reset:ue}}function aS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,v){return f?new OffscreenCanvas(C,v):Ka("canvas")}function x(C,v,G){let ie=1;const se=Ie(C);if((se.width>G||se.height>G)&&(ie=G/Math.max(se.width,se.height)),ie<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(ie*se.width),Ce=Math.floor(ie*se.height);u===void 0&&(u=m(ee,Ce));const me=v?m(ee,Ce):u;return me.width=ee,me.height=Ce,me.getContext("2d").drawImage(C,0,0,ee,Ce),Be("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ee+"x"+Ce+")."),me}else return"data"in C&&Be("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,v,G,ie,se=!1){if(C!==null){if(r[C]!==void 0)return r[C];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=v;if(v===r.RED&&(G===r.FLOAT&&(ee=r.R32F),G===r.HALF_FLOAT&&(ee=r.R16F),G===r.UNSIGNED_BYTE&&(ee=r.R8)),v===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.R8UI),G===r.UNSIGNED_SHORT&&(ee=r.R16UI),G===r.UNSIGNED_INT&&(ee=r.R32UI),G===r.BYTE&&(ee=r.R8I),G===r.SHORT&&(ee=r.R16I),G===r.INT&&(ee=r.R32I)),v===r.RG&&(G===r.FLOAT&&(ee=r.RG32F),G===r.HALF_FLOAT&&(ee=r.RG16F),G===r.UNSIGNED_BYTE&&(ee=r.RG8)),v===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.RG8UI),G===r.UNSIGNED_SHORT&&(ee=r.RG16UI),G===r.UNSIGNED_INT&&(ee=r.RG32UI),G===r.BYTE&&(ee=r.RG8I),G===r.SHORT&&(ee=r.RG16I),G===r.INT&&(ee=r.RG32I)),v===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),G===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),G===r.UNSIGNED_INT&&(ee=r.RGB32UI),G===r.BYTE&&(ee=r.RGB8I),G===r.SHORT&&(ee=r.RGB16I),G===r.INT&&(ee=r.RGB32I)),v===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),G===r.UNSIGNED_INT&&(ee=r.RGBA32UI),G===r.BYTE&&(ee=r.RGBA8I),G===r.SHORT&&(ee=r.RGBA16I),G===r.INT&&(ee=r.RGBA32I)),v===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(ee=r.R11F_G11F_B10F)),v===r.RGBA){const Ce=se?ml:ot.getTransfer(ie);G===r.FLOAT&&(ee=r.RGBA32F),G===r.HALF_FLOAT&&(ee=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ee=Ce===Ft?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(C,v){let G;return C?v===null||v===Di||v===ja?G=r.DEPTH24_STENCIL8:v===ni?G=r.DEPTH32F_STENCIL8:v===Ya&&(G=r.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Di||v===ja?G=r.DEPTH_COMPONENT24:v===ni?G=r.DEPTH_COMPONENT32F:v===Ya&&(G=r.DEPTH_COMPONENT16),G}function L(C,v){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==vn&&C.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function P(C){const v=C.target;v.removeEventListener("dispose",P),_(v),v.isVideoTexture&&h.delete(v)}function w(C){const v=C.target;v.removeEventListener("dispose",w),j(v)}function _(C){const v=n.get(C);if(v.__webglInit===void 0)return;const G=C.source,ie=d.get(G);if(ie){const se=ie[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(C),Object.keys(ie).length===0&&d.delete(G)}n.remove(C)}function T(C){const v=n.get(C);r.deleteTexture(v.__webglTexture);const G=C.source,ie=d.get(G);delete ie[v.__cacheKey],a.memory.textures--}function j(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(v.__webglFramebuffer[ie]))for(let se=0;se<v.__webglFramebuffer[ie].length;se++)r.deleteFramebuffer(v.__webglFramebuffer[ie][se]);else r.deleteFramebuffer(v.__webglFramebuffer[ie]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[ie])}else{if(Array.isArray(v.__webglFramebuffer))for(let ie=0;ie<v.__webglFramebuffer.length;ie++)r.deleteFramebuffer(v.__webglFramebuffer[ie]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ie=0;ie<v.__webglColorRenderbuffer.length;ie++)v.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[ie]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const G=C.textures;for(let ie=0,se=G.length;ie<se;ie++){const ee=n.get(G[ie]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(G[ie])}n.remove(C)}let D=0;function k(){D=0}function H(){const C=D;return C>=i.maxTextures&&Be("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function K(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function q(C,v){const G=n.get(C);if(C.isVideoTexture&&dt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const ie=C.image;if(ie===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(G,C,v);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+v)}function X(C,v){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ne(G,C,v);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+v)}function W(C,v){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ne(G,C,v);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+v)}function oe(C,v){const G=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){he(G,C,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+v)}const re={[qa]:r.REPEAT,[_i]:r.CLAMP_TO_EDGE,[$c]:r.MIRRORED_REPEAT},pe={[vn]:r.NEAREST,[cg]:r.NEAREST_MIPMAP_NEAREST,[Ao]:r.NEAREST_MIPMAP_LINEAR,[bn]:r.LINEAR,[ec]:r.LINEAR_MIPMAP_NEAREST,[Xr]:r.LINEAR_MIPMAP_LINEAR},ge={[gg]:r.NEVER,[Mg]:r.ALWAYS,[_g]:r.LESS,[oh]:r.LEQUAL,[vg]:r.EQUAL,[lh]:r.GEQUAL,[xg]:r.GREATER,[yg]:r.NOTEQUAL};function Se(C,v){if(v.type===ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===bn||v.magFilter===ec||v.magFilter===Ao||v.magFilter===Xr||v.minFilter===bn||v.minFilter===ec||v.minFilter===Ao||v.minFilter===Xr)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,re[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,re[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,re[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,pe[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vn||v.minFilter!==Ao&&v.minFilter!==Xr||v.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function qe(C,v){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",P));const ie=v.source;let se=d.get(ie);se===void 0&&(se={},d.set(ie,se));const ee=K(v);if(ee!==C.__cacheKey){se[ee]===void 0&&(se[ee]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),se[ee].usedTimes++;const Ce=se[C.__cacheKey];Ce!==void 0&&(se[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(v)),C.__cacheKey=ee,C.__webglTexture=se[ee].texture}return G}function Tt(C,v,G){return Math.floor(Math.floor(C/G)/v)}function ut(C,v,G,ie){const ee=C.updateRanges;if(ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,G,ie,v.data);else{ee.sort((le,de)=>le.start-de.start);let Ce=0;for(let le=1;le<ee.length;le++){const de=ee[Ce],be=ee[le],Re=de.start+de.count,Ee=Tt(be.start,v.width,4),ue=Tt(de.start,v.width,4);be.start<=Re+1&&Ee===ue&&Tt(be.start+be.count-1,v.width,4)===Ee?de.count=Math.max(de.count,be.start+be.count-de.start):(++Ce,ee[Ce]=be)}ee.length=Ce+1;const me=r.getParameter(r.UNPACK_ROW_LENGTH),Oe=r.getParameter(r.UNPACK_SKIP_PIXELS),Xe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let le=0,de=ee.length;le<de;le++){const be=ee[le],Re=Math.floor(be.start/4),Ee=Math.ceil(be.count/4),ue=Re%v.width,B=Math.floor(Re/v.width),te=Ee,fe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,ue,B,te,fe,G,ie,v.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,me),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Xe)}}function ne(C,v,G){let ie=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=r.TEXTURE_3D);const se=qe(C,v),ee=v.source;t.bindTexture(ie,C.__webglTexture,r.TEXTURE0+G);const Ce=n.get(ee);if(ee.version!==Ce.__version||se===!0){t.activeTexture(r.TEXTURE0+G);const me=ot.getPrimaries(ot.workingColorSpace),Oe=v.colorSpace===qi?null:ot.getPrimaries(v.colorSpace),Xe=v.colorSpace===qi||me===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let le=x(v.image,!1,i.maxTextureSize);le=wt(v,le);const de=s.convert(v.format,v.colorSpace),be=s.convert(v.type);let Re=y(v.internalFormat,de,be,v.colorSpace,v.isVideoTexture);Se(ie,v);let Ee;const ue=v.mipmaps,B=v.isVideoTexture!==!0,te=Ce.__version===void 0||se===!0,fe=ee.dataReady,Te=L(v,le);if(v.isDepthTexture)Re=b(v.format===qr,v.type),te&&(B?t.texStorage2D(r.TEXTURE_2D,1,Re,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,Re,le.width,le.height,0,de,be,null));else if(v.isDataTexture)if(ue.length>0){B&&te&&t.texStorage2D(r.TEXTURE_2D,Te,Re,ue[0].width,ue[0].height);for(let ae=0,Q=ue.length;ae<Q;ae++)Ee=ue[ae],B?fe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,de,be,Ee.data):t.texImage2D(r.TEXTURE_2D,ae,Re,Ee.width,Ee.height,0,de,be,Ee.data);v.generateMipmaps=!1}else B?(te&&t.texStorage2D(r.TEXTURE_2D,Te,Re,le.width,le.height),fe&&ut(v,le,de,be)):t.texImage2D(r.TEXTURE_2D,0,Re,le.width,le.height,0,de,be,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Re,ue[0].width,ue[0].height,le.depth);for(let ae=0,Q=ue.length;ae<Q;ae++)if(Ee=ue[ae],v.format!==ii)if(de!==null)if(B){if(fe)if(v.layerUpdates.size>0){const we=gf(Ee.width,Ee.height,v.format,v.type);for(const Qe of v.layerUpdates){const St=Ee.data.subarray(Qe*we/Ee.data.BYTES_PER_ELEMENT,(Qe+1)*we/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,Qe,Ee.width,Ee.height,1,de,St)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Ee.width,Ee.height,le.depth,de,Ee.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,Re,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?fe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Ee.width,Ee.height,le.depth,de,be,Ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,Re,Ee.width,Ee.height,le.depth,0,de,be,Ee.data)}else{B&&te&&t.texStorage2D(r.TEXTURE_2D,Te,Re,ue[0].width,ue[0].height);for(let ae=0,Q=ue.length;ae<Q;ae++)Ee=ue[ae],v.format!==ii?de!==null?B?fe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,de,Ee.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,Re,Ee.width,Ee.height,0,Ee.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?fe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Ee.width,Ee.height,de,be,Ee.data):t.texImage2D(r.TEXTURE_2D,ae,Re,Ee.width,Ee.height,0,de,be,Ee.data)}else if(v.isDataArrayTexture)if(B){if(te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Re,le.width,le.height,le.depth),fe)if(v.layerUpdates.size>0){const ae=gf(le.width,le.height,v.format,v.type);for(const Q of v.layerUpdates){const we=le.data.subarray(Q*ae/le.data.BYTES_PER_ELEMENT,(Q+1)*ae/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,le.width,le.height,1,de,be,we)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,de,be,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Re,le.width,le.height,le.depth,0,de,be,le.data);else if(v.isData3DTexture)B?(te&&t.texStorage3D(r.TEXTURE_3D,Te,Re,le.width,le.height,le.depth),fe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,de,be,le.data)):t.texImage3D(r.TEXTURE_3D,0,Re,le.width,le.height,le.depth,0,de,be,le.data);else if(v.isFramebufferTexture){if(te)if(B)t.texStorage2D(r.TEXTURE_2D,Te,Re,le.width,le.height);else{let ae=le.width,Q=le.height;for(let we=0;we<Te;we++)t.texImage2D(r.TEXTURE_2D,we,Re,ae,Q,0,de,be,null),ae>>=1,Q>>=1}}else if(ue.length>0){if(B&&te){const ae=Ie(ue[0]);t.texStorage2D(r.TEXTURE_2D,Te,Re,ae.width,ae.height)}for(let ae=0,Q=ue.length;ae<Q;ae++)Ee=ue[ae],B?fe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,de,be,Ee):t.texImage2D(r.TEXTURE_2D,ae,Re,de,be,Ee);v.generateMipmaps=!1}else if(B){if(te){const ae=Ie(le);t.texStorage2D(r.TEXTURE_2D,Te,Re,ae.width,ae.height)}fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,be,le)}else t.texImage2D(r.TEXTURE_2D,0,Re,de,be,le);g(v)&&p(ie),Ce.__version=ee.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function he(C,v,G){if(v.image.length!==6)return;const ie=qe(C,v),se=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const ee=n.get(se);if(se.version!==ee.__version||ie===!0){t.activeTexture(r.TEXTURE0+G);const Ce=ot.getPrimaries(ot.workingColorSpace),me=v.colorSpace===qi?null:ot.getPrimaries(v.colorSpace),Oe=v.colorSpace===qi||Ce===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Xe=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,de=[];for(let Q=0;Q<6;Q++)!Xe&&!le?de[Q]=x(v.image[Q],!0,i.maxCubemapSize):de[Q]=le?v.image[Q].image:v.image[Q],de[Q]=wt(v,de[Q]);const be=de[0],Re=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type),ue=y(v.internalFormat,Re,Ee,v.colorSpace),B=v.isVideoTexture!==!0,te=ee.__version===void 0||ie===!0,fe=se.dataReady;let Te=L(v,be);Se(r.TEXTURE_CUBE_MAP,v);let ae;if(Xe){B&&te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,ue,be.width,be.height);for(let Q=0;Q<6;Q++){ae=de[Q].mipmaps;for(let we=0;we<ae.length;we++){const Qe=ae[we];v.format!==ii?Re!==null?B?fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,Qe.width,Qe.height,Re,Qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,ue,Qe.width,Qe.height,0,Qe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,Qe.width,Qe.height,Re,Ee,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,ue,Qe.width,Qe.height,0,Re,Ee,Qe.data)}}}else{if(ae=v.mipmaps,B&&te){ae.length>0&&Te++;const Q=Ie(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,ue,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(le){B?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,de[Q].width,de[Q].height,Re,Ee,de[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ue,de[Q].width,de[Q].height,0,Re,Ee,de[Q].data);for(let we=0;we<ae.length;we++){const St=ae[we].image[Q].image;B?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,St.width,St.height,Re,Ee,St.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,ue,St.width,St.height,0,Re,Ee,St.data)}}else{B?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,Ee,de[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ue,Re,Ee,de[Q]);for(let we=0;we<ae.length;we++){const Qe=ae[we];B?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Re,Ee,Qe.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,ue,Re,Ee,Qe.image[Q])}}}g(v)&&p(r.TEXTURE_CUBE_MAP),ee.__version=se.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ce(C,v,G,ie,se,ee){const Ce=s.convert(G.format,G.colorSpace),me=s.convert(G.type),Oe=y(G.internalFormat,Ce,me,G.colorSpace),Xe=n.get(v),le=n.get(G);if(le.__renderTarget=v,!Xe.__hasExternalTextures){const de=Math.max(1,v.width>>ee),be=Math.max(1,v.height>>ee);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,ee,Oe,de,be,v.depth,0,Ce,me,null):t.texImage2D(se,ee,Oe,de,be,0,Ce,me,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ht(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,se,le.__webglTexture,0,U(v)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,se,le.__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(C,v,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){const ie=v.depthTexture,se=ie&&ie.isDepthTexture?ie.type:null,ee=b(v.stencilBuffer,se),Ce=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ht(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(v),ee,v.width,v.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(v),ee,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ee,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,C)}else{const ie=v.textures;for(let se=0;se<ie.length;se++){const ee=ie[se],Ce=s.convert(ee.format,ee.colorSpace),me=s.convert(ee.type),Oe=y(ee.internalFormat,Ce,me,ee.colorSpace);Ht(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(v),Oe,v.width,v.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(v),Oe,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ke(C,v,G){const ie=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(v.depthTexture);if(se.__renderTarget=v,(!se.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ie){if(se.__webglInit===void 0&&(se.__webglInit=!0,v.depthTexture.addEventListener("dispose",P)),se.__webglTexture===void 0){se.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Se(r.TEXTURE_CUBE_MAP,v.depthTexture);const Xe=s.convert(v.depthTexture.format),le=s.convert(v.depthTexture.type);let de;v.depthTexture.format===Qi?de=r.DEPTH_COMPONENT24:v.depthTexture.format===qr&&(de=r.DEPTH24_STENCIL8);for(let be=0;be<6;be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,de,v.width,v.height,0,Xe,le,null)}}else q(v.depthTexture,0);const ee=se.__webglTexture,Ce=U(v),me=ie?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,Oe=v.depthTexture.format===qr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Qi)Ht(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Oe,me,ee,0,Ce):r.framebufferTexture2D(r.FRAMEBUFFER,Oe,me,ee,0);else if(v.depthTexture.format===qr)Ht(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Oe,me,ee,0,Ce):r.framebufferTexture2D(r.FRAMEBUFFER,Oe,me,ee,0);else throw new Error("Unknown depthTexture format")}function He(C){const v=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const ie=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ie){const se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ie.removeEventListener("dispose",se)};ie.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=ie}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let ie=0;ie<6;ie++)ke(v.__webglFramebuffer[ie],C,ie);else{const ie=C.texture.mipmaps;ie&&ie.length>0?ke(v.__webglFramebuffer[0],C,0):ke(v.__webglFramebuffer,C,0)}else if(G){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]===void 0)v.__webglDepthbuffer[ie]=r.createRenderbuffer(),$e(v.__webglDepthbuffer[ie],C,!1);else{const se=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer[ie];r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,ee)}}else{const ie=C.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),$e(v.__webglDepthbuffer,C,!1);else{const se=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(C,v,G){const ie=n.get(C);v!==void 0&&ce(ie.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&He(C)}function it(C){const v=C.texture,G=n.get(C),ie=n.get(v);C.addEventListener("dispose",w);const se=C.textures,ee=C.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=v.version,a.memory.textures++),ee){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let Oe=0;Oe<v.mipmaps.length;Oe++)G.__webglFramebuffer[me][Oe]=r.createFramebuffer()}else G.__webglFramebuffer[me]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)G.__webglFramebuffer[me]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let me=0,Oe=se.length;me<Oe;me++){const Xe=n.get(se[me]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Ht(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<se.length;me++){const Oe=se[me];G.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const Xe=s.convert(Oe.format,Oe.colorSpace),le=s.convert(Oe.type),de=y(Oe.internalFormat,Xe,le,Oe.colorSpace,C.isXRRenderTarget===!0),be=U(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,de,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,G.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),$e(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),Se(r.TEXTURE_CUBE_MAP,v);for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0)for(let Oe=0;Oe<v.mipmaps.length;Oe++)ce(G.__webglFramebuffer[me][Oe],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe);else ce(G.__webglFramebuffer[me],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let me=0,Oe=se.length;me<Oe;me++){const Xe=se[me],le=n.get(Xe);let de=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,le.__webglTexture),Se(de,Xe),ce(G.__webglFramebuffer,C,Xe,r.COLOR_ATTACHMENT0+me,de,0),g(Xe)&&p(de)}t.unbindTexture()}else{let me=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(me,ie.__webglTexture),Se(me,v),v.mipmaps&&v.mipmaps.length>0)for(let Oe=0;Oe<v.mipmaps.length;Oe++)ce(G.__webglFramebuffer[Oe],C,v,r.COLOR_ATTACHMENT0,me,Oe);else ce(G.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,me,0);g(v)&&p(me),t.unbindTexture()}C.depthBuffer&&He(C)}function mt(C){const v=C.textures;for(let G=0,ie=v.length;G<ie;G++){const se=v[G];if(g(se)){const ee=S(C),Ce=n.get(se).__webglTexture;t.bindTexture(ee,Ce),p(ee),t.unbindTexture()}}}const gt=[],ze=[];function jt(C){if(C.samples>0){if(Ht(C)===!1){const v=C.textures,G=C.width,ie=C.height;let se=r.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(C),me=v.length>1;if(me)for(let Xe=0;Xe<v.length;Xe++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Oe=C.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Xe=0;Xe<v.length;Xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Xe]);const le=n.get(v[Xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,le,0)}r.blitFramebuffer(0,0,G,ie,0,0,G,ie,se,r.NEAREST),l===!0&&(gt.length=0,ze.length=0,gt.push(r.COLOR_ATTACHMENT0+Xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(gt.push(ee),ze.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ze)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let Xe=0;Xe<v.length;Xe++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Xe]);const le=n.get(v[Xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.TEXTURE_2D,le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function U(C){return Math.min(i.maxSamples,C.samples)}function Ht(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function dt(C){const v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function wt(C,v){const G=C.colorSpace,ie=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==br&&G!==qi&&(ot.getTransfer(G)===Ft?(ie!==ii||se!==Wn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",G)),v}function Ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=oe,this.rebindTextures=zt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function oS(r,e){function t(n,i=qi){let s;const a=ot.getTransfer(i);if(n===Wn)return r.UNSIGNED_BYTE;if(n===eh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===th)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ip)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===rp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===tp)return r.BYTE;if(n===np)return r.SHORT;if(n===Ya)return r.UNSIGNED_SHORT;if(n===Ju)return r.INT;if(n===Di)return r.UNSIGNED_INT;if(n===ni)return r.FLOAT;if(n===$i)return r.HALF_FLOAT;if(n===sp)return r.ALPHA;if(n===ap)return r.RGB;if(n===ii)return r.RGBA;if(n===Qi)return r.DEPTH_COMPONENT;if(n===qr)return r.DEPTH_STENCIL;if(n===nh)return r.RED;if(n===ih)return r.RED_INTEGER;if(n===js)return r.RG;if(n===rh)return r.RG_INTEGER;if(n===sh)return r.RGBA_INTEGER;if(n===al||n===ol||n===ll||n===cl)if(a===Ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===Jc||n===eu||n===tu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nu||n===iu||n===ru||n===su||n===au||n===ou||n===lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nu||n===iu)return a===Ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ru)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===su)return s.COMPRESSED_R11_EAC;if(n===au)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ou)return s.COMPRESSED_RG11_EAC;if(n===lu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cu||n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===_u||n===vu||n===xu||n===yu||n===Mu||n===Su)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===du)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mu)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Su)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bu||n===Eu||n===Tu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===bu)return a===Ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===Au||n===Ru||n===Cu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ja?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const lS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cS=`
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

}`;class uS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new fp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pi({vertexShader:lS,fragmentShader:cS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hS extends Tr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new uS,p={},S=t.getContextAttributes();let y=null,b=null;const L=[],P=[],w=new Ye;let _=null;const T=new In;T.viewport=new Dt;const j=new In;j.viewport=new Dt;const D=[T,j],k=new a_;let H=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=L[ne];return he===void 0&&(he=new oc,L[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=L[ne];return he===void 0&&(he=new oc,L[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=L[ne];return he===void 0&&(he=new oc,L[ne]=he),he.getHandSpace()};function q(ne){const he=P.indexOf(ne.inputSource);if(he===-1)return;const ce=L[he];ce!==void 0&&(ce.update(ne.inputSource,ne.frame,c||a),ce.dispatchEvent({type:ne.type,data:ne.inputSource}))}function X(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",W);for(let ne=0;ne<L.length;ne++){const he=P[ne];he!==null&&(P[ne]=null,L[ne].disconnect(he))}H=null,K=null,g.reset();for(const ne in p)delete p[ne];e.setRenderTarget(y),f=null,d=null,u=null,i=null,b=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",X),i.addEventListener("inputsourceschange",W),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,$e=null,ke=null;S.depth&&(ke=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?qr:Qi,$e=S.stencil?ja:Di);const He={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(He),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ri(d.textureWidth,d.textureHeight,{format:ii,type:Wn,depthTexture:new $a(d.textureWidth,d.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ri(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(ne){for(let he=0;he<ne.removed.length;he++){const ce=ne.removed[he],$e=P.indexOf(ce);$e>=0&&(P[$e]=null,L[$e].disconnect(ce))}for(let he=0;he<ne.added.length;he++){const ce=ne.added[he];let $e=P.indexOf(ce);if($e===-1){for(let He=0;He<L.length;He++)if(He>=P.length){P.push(ce),$e=He;break}else if(P[He]===null){P[He]=ce,$e=He;break}if($e===-1)break}const ke=L[$e];ke&&ke.connect(ce)}}const oe=new F,re=new F;function pe(ne,he,ce){oe.setFromMatrixPosition(he.matrixWorld),re.setFromMatrixPosition(ce.matrixWorld);const $e=oe.distanceTo(re),ke=he.projectionMatrix.elements,He=ce.projectionMatrix.elements,zt=ke[14]/(ke[10]-1),it=ke[14]/(ke[10]+1),mt=(ke[9]+1)/ke[5],gt=(ke[9]-1)/ke[5],ze=(ke[8]-1)/ke[0],jt=(He[8]+1)/He[0],U=zt*ze,Ht=zt*jt,dt=$e/(-ze+jt),wt=dt*-ze;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(wt),ne.translateZ(dt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ke[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ie=zt+dt,C=it+dt,v=U-wt,G=Ht+($e-wt),ie=mt*it/C*Ie,se=gt*it/C*Ie;ne.projectionMatrix.makePerspective(v,G,ie,se,Ie,C),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ge(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let he=ne.near,ce=ne.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),k.near=j.near=T.near=he,k.far=j.far=T.far=ce,(H!==k.near||K!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,K=k.far),k.layers.mask=ne.layers.mask|6,T.layers.mask=k.layers.mask&-5,j.layers.mask=k.layers.mask&-3;const $e=ne.parent,ke=k.cameras;ge(k,$e);for(let He=0;He<ke.length;He++)ge(ke[He],$e);ke.length===2?pe(k,T,j):k.projectionMatrix.copy(T.projectionMatrix),Se(ne,k,$e)};function Se(ne,he,ce){ce===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(ce.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Zs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(ne){return p[ne]};let qe=null;function Tt(ne,he){if(h=he.getViewerPose(c||a),m=he,h!==null){const ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let $e=!1;ce.length!==k.cameras.length&&(k.cameras.length=0,$e=!0);for(let it=0;it<ce.length;it++){const mt=ce[it];let gt=null;if(f!==null)gt=f.getViewport(mt);else{const jt=u.getViewSubImage(d,mt);gt=jt.viewport,it===0&&(e.setRenderTargetTextures(b,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(b))}let ze=D[it];ze===void 0&&(ze=new In,ze.layers.enable(it),ze.viewport=new Dt,D[it]=ze),ze.matrix.fromArray(mt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(mt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(gt.x,gt.y,gt.width,gt.height),it===0&&(k.matrix.copy(ze.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),$e===!0&&k.cameras.push(ze)}const ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const it=u.getDepthInformation(ce[0]);it&&it.isValid&&it.texture&&g.init(it,i.renderState)}if(ke&&ke.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let it=0;it<ce.length;it++){const mt=ce[it].camera;if(mt){let gt=p[mt];gt||(gt=new fp,p[mt]=gt);const ze=u.getCameraImage(mt);gt.sourceTexture=ze}}}}for(let ce=0;ce<L.length;ce++){const $e=P[ce],ke=L[ce];$e!==null&&ke!==void 0&&ke.update($e,he,c||a)}qe&&qe(ne,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),m=null}const ut=new Ap;ut.setAnimationLoop(Tt),this.setAnimationLoop=function(ne){qe=ne},this.dispose=function(){}}}const Br=new en,dS=new Le;function fS(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,vp(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,S,y,b){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ln&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ln&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=e.get(p),y=S.envMap,b=S.envMapRotation;y&&(g.envMap.value=y,Br.copy(b),Br.x*=-1,Br.y*=-1,Br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),g.envMapRotation.value.setFromMatrix4(dS.makeRotationFromEuler(Br)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ln&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pS(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function c(S,y){let b=i[S.id];b===void 0&&(m(S),b=h(S),i[S.id]=b,S.addEventListener("dispose",g));const L=y.program;n.updateUBOMapping(S,L);const P=e.render.frame;s[S.id]!==P&&(d(S),s[S.id]=P)}function h(S){const y=u();S.__bindingPointIndex=y;const b=r.createBuffer(),L=S.__size,P=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,L,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=i[S.id],b=S.uniforms,L=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let P=0,w=b.length;P<w;P++){const _=Array.isArray(b[P])?b[P]:[b[P]];for(let T=0,j=_.length;T<j;T++){const D=_[T];if(f(D,P,T,L)===!0){const k=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let q=0;q<H.length;q++){const X=H[q],W=x(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,k+K,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,K),K+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,y,b,L){const P=S.value,w=y+"_"+b;if(L[w]===void 0)return typeof P=="number"||typeof P=="boolean"?L[w]=P:L[w]=P.clone(),!0;{const _=L[w];if(typeof P=="number"||typeof P=="boolean"){if(_!==P)return L[w]=P,!0}else if(_.equals(P)===!1)return _.copy(P),!0}return!1}function m(S){const y=S.uniforms;let b=0;const L=16;for(let w=0,_=y.length;w<_;w++){const T=Array.isArray(y[w])?y[w]:[y[w]];for(let j=0,D=T.length;j<D;j++){const k=T[j],H=Array.isArray(k.value)?k.value:[k.value];for(let K=0,q=H.length;K<q;K++){const X=H[K],W=x(X),oe=b%L,re=oe%W.boundary,pe=oe+re;b+=re,pe!==0&&L-pe<W.storage&&(b+=L-pe),k.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=W.storage}}}const P=b%L;return P>0&&(b+=L-P),S.__size=b,S.__cache={},this}function x(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){const y=S.target;y.removeEventListener("dispose",g);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const mS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function gS(){return Ti===null&&(Ti=new ph(mS,16,16,js,$i),Ti.name="DFG_LUT",Ti.minFilter=bn,Ti.magFilter=bn,Ti.wrapS=_i,Ti.wrapT=_i,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class _S{constructor(e={}){const{canvas:t=Eg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Wn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=f,g=new Set([sh,rh,ih]),p=new Set([Wn,Di,Ya,ja,eh,th]),S=new Uint32Array(4),y=new Int32Array(4);let b=null,L=null;const P=[],w=[];let _=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let j=!1;this._outputColorSpace=Ut;let D=0,k=0,H=null,K=-1,q=null;const X=new Dt,W=new Dt;let oe=null;const re=new Ge(0);let pe=0,ge=t.width,Se=t.height,qe=1,Tt=null,ut=null;const ne=new Dt(0,0,ge,Se),he=new Dt(0,0,ge,Se);let ce=!1;const $e=new gh;let ke=!1,He=!1;const zt=new Le,it=new F,mt=new Dt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function jt(){return H===null?qe:1}let U=n;function Ht(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ku}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",St,!1),U===null){const z="webgl2";if(U=Ht(z,E),U===null)throw Ht(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ze("WebGLRenderer: "+E.message),E}let dt,wt,Ie,C,v,G,ie,se,ee,Ce,me,Oe,Xe,le,de,be,Re,Ee,ue,B,te,fe,Te;function ae(){dt=new _y(U),dt.init(),te=new oS(U,dt),wt=new cy(U,dt,e,te),Ie=new sS(U,dt),wt.reversedDepthBuffer&&d&&Ie.buffers.depth.setReversed(!0),C=new yy(U),v=new XM,G=new aS(U,dt,Ie,v,wt,te,C),ie=new gy(T),se=new T_(U),fe=new oy(U,se),ee=new vy(U,se,C,fe),Ce=new Sy(U,ee,se,fe,C),Ee=new My(U,wt,G),de=new uy(v),me=new WM(T,ie,dt,wt,fe,de),Oe=new fS(T,v),Xe=new YM,le=new JM(dt),Re=new ay(T,ie,Ie,Ce,m,l),be=new rS(T,Ce,wt),Te=new pS(U,C,wt,Ie),ue=new ly(U,dt,C),B=new xy(U,dt,C),C.programs=me.programs,T.capabilities=wt,T.extensions=dt,T.properties=v,T.renderLists=Xe,T.shadowMap=be,T.state=Ie,T.info=C}ae(),x!==Wn&&(_=new Ey(x,t.width,t.height,i,s));const Q=new hS(T,U);this.xr=Q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=dt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=dt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return qe},this.setPixelRatio=function(E){E!==void 0&&(qe=E,this.setSize(ge,Se,!1))},this.getSize=function(E){return E.set(ge,Se)},this.setSize=function(E,z,$=!0){if(Q.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=E,Se=z,t.width=Math.floor(E*qe),t.height=Math.floor(z*qe),$===!0&&(t.style.width=E+"px",t.style.height=z+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(ge*qe,Se*qe).floor()},this.setDrawingBufferSize=function(E,z,$){ge=E,Se=z,qe=$,t.width=Math.floor(E*$),t.height=Math.floor(z*$),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(x===Wn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(X)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,z,$,Z){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,z,$,Z),Ie.viewport(X.copy(ne).multiplyScalar(qe).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,z,$,Z){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,z,$,Z),Ie.scissor(W.copy(he).multiplyScalar(qe).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){Ie.setScissorTest(ce=E)},this.setOpaqueSort=function(E){Tt=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,$=!0){let Z=0;if(E){let Y=!1;if(H!==null){const ye=H.texture.format;Y=g.has(ye)}if(Y){const ye=H.texture.type,Ae=p.has(ye),xe=Re.getClearColor(),De=Re.getClearAlpha(),Fe=xe.r,tt=xe.g,st=xe.b;Ae?(S[0]=Fe,S[1]=tt,S[2]=st,S[3]=De,U.clearBufferuiv(U.COLOR,0,S)):(y[0]=Fe,y[1]=tt,y[2]=st,y[3]=De,U.clearBufferiv(U.COLOR,0,y))}else Z|=U.COLOR_BUFFER_BIT}z&&(Z|=U.DEPTH_BUFFER_BIT),$&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Re.dispose(),Xe.dispose(),le.dispose(),v.dispose(),ie.dispose(),Ce.dispose(),fe.dispose(),Te.dispose(),me.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",es),Q.removeEventListener("sessionend",Cr),ai.stop()};function we(E){E.preventDefault(),Rd("WebGLRenderer: Context Lost."),j=!0}function Qe(){Rd("WebGLRenderer: Context Restored."),j=!1;const E=C.autoReset,z=be.enabled,$=be.autoUpdate,Z=be.needsUpdate,Y=be.type;ae(),C.autoReset=E,be.enabled=z,be.autoUpdate=$,be.needsUpdate=Z,be.type=Y}function St(E){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function We(E){const z=E.target;z.removeEventListener("dispose",We),ri(z)}function ri(E){si(E),v.remove(E)}function si(E){const z=v.get(E).programs;z!==void 0&&(z.forEach(function($){me.releaseProgram($)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,$,Z,Y,ye){z===null&&(z=gt);const Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,xe=fo(E,z,$,Z,Y);Ie.setMaterial(Z,Ae);let De=$.index,Fe=1;if(Z.wireframe===!0){if(De=ee.getWireframeAttribute($),De===void 0)return;Fe=2}const tt=$.drawRange,st=$.attributes.position;let Ne=tt.start*Fe,vt=(tt.start+tt.count)*Fe;ye!==null&&(Ne=Math.max(Ne,ye.start*Fe),vt=Math.min(vt,(ye.start+ye.count)*Fe)),De!==null?(Ne=Math.max(Ne,0),vt=Math.min(vt,De.count)):st!=null&&(Ne=Math.max(Ne,0),vt=Math.min(vt,st.count));const Et=vt-Ne;if(Et<0||Et===1/0)return;fe.setup(Y,Z,xe,$,De);let _t,ft=ue;if(De!==null&&(_t=se.get(De),ft=B,ft.setIndex(_t)),Y.isMesh)Z.wireframe===!0?(Ie.setLineWidth(Z.wireframeLinewidth*jt()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(Y.isLine){let tn=Z.linewidth;tn===void 0&&(tn=1),Ie.setLineWidth(tn*jt()),Y.isLineSegments?ft.setMode(U.LINES):Y.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else Y.isPoints?ft.setMode(U.POINTS):Y.isSprite&&ft.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)gl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))ft.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const tn=Y._multiDrawStarts,Pe=Y._multiDrawCounts,pn=Y._multiDrawCount,je=De?se.get(De).bytesPerElement:1,Fn=v.get(Z).currentProgram.getUniforms();for(let zn=0;zn<pn;zn++)Fn.setValue(U,"_gl_DrawID",zn),ft.render(tn[zn]/je,Pe[zn])}else if(Y.isInstancedMesh)ft.renderInstances(Ne,Et,Y.count);else if($.isInstancedBufferGeometry){const tn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pe=Math.min($.instanceCount,tn);ft.renderInstances(Ne,Et,Pe)}else ft.render(Ne,Et)};function la(E,z,$){E.transparent===!0&&E.side===Bn&&E.forceSinglePass===!1?(E.side=Ln,E.needsUpdate=!0,xn(E,z,$),E.side=Sr,E.needsUpdate=!0,xn(E,z,$),E.side=Bn):xn(E,z,$)}this.compile=function(E,z,$=null){$===null&&($=E),L=le.get($),L.init(z),w.push(L),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(L.pushLight(Y),Y.castShadow&&L.pushShadow(Y))}),E!==$&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(L.pushLight(Y),Y.castShadow&&L.pushShadow(Y))}),L.setupLights();const Z=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const xe=ye[Ae];la(xe,$,Y),Z.add(xe)}else la(ye,$,Y),Z.add(ye)}),L=w.pop(),Z},this.compileAsync=function(E,z,$=null){const Z=this.compile(E,z,$);return new Promise(Y=>{function ye(){if(Z.forEach(function(Ae){v.get(Ae).currentProgram.isReady()&&Z.delete(Ae)}),Z.size===0){Y(E);return}setTimeout(ye,10)}dt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ji=null;function wn(E){Ji&&Ji(E)}function es(){ai.stop()}function Cr(){ai.start()}const ai=new Ap;ai.setAnimationLoop(wn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(E){Ji=E,Q.setAnimationLoop(E),E===null?ai.stop():ai.start()},Q.addEventListener("sessionstart",es),Q.addEventListener("sessionend",Cr),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;const $=Q.enabled===!0&&Q.isPresenting===!0,Z=_!==null&&(H===null||$)&&_.begin(T,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(z),z=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,z,H),L=le.get(E,w.length),L.init(z),w.push(L),zt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$e.setFromProjectionMatrix(zt,Ai,z.reversedDepth),He=this.localClippingEnabled,ke=de.init(this.clippingPlanes,He),b=Xe.get(E,P.length),b.init(),P.push(b),Q.enabled===!0&&Q.isPresenting===!0){const Ae=T.xr.getDepthSensingMesh();Ae!==null&&An(Ae,z,-1/0,T.sortObjects)}An(E,z,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(Tt,ut),ze=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ze&&Re.addToRenderList(b,E),this.info.render.frame++,ke===!0&&de.beginShadows();const Y=L.state.shadowsArray;if(be.render(Y,E,z),ke===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&_.hasRenderPass())===!1){const Ae=b.opaque,xe=b.transmissive;if(L.setupLights(),z.isArrayCamera){const De=z.cameras;if(xe.length>0)for(let Fe=0,tt=De.length;Fe<tt;Fe++){const st=De[Fe];ts(Ae,xe,E,st)}ze&&Re.render(E);for(let Fe=0,tt=De.length;Fe<tt;Fe++){const st=De[Fe];Pt(b,E,st,st.viewport)}}else xe.length>0&&ts(Ae,xe,E,z),ze&&Re.render(E),Pt(b,E,z)}H!==null&&k===0&&(G.updateMultisampleRenderTarget(H),G.updateRenderTargetMipmap(H)),Z&&_.end(T),E.isScene===!0&&E.onAfterRender(T,E,z),fe.resetDefaultState(),K=-1,q=null,w.pop(),w.length>0?(L=w[w.length-1],ke===!0&&de.setGlobalState(T.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?b=P[P.length-1]:b=null};function An(E,z,$,Z){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)L.pushLight(E),E.castShadow&&L.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$e.intersectsSprite(E)){Z&&mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(zt);const Ae=Ce.update(E),xe=E.material;xe.visible&&b.push(E,Ae,xe,$,mt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$e.intersectsObject(E))){const Ae=Ce.update(E),xe=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),mt.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),mt.copy(Ae.boundingSphere.center)),mt.applyMatrix4(E.matrixWorld).applyMatrix4(zt)),Array.isArray(xe)){const De=Ae.groups;for(let Fe=0,tt=De.length;Fe<tt;Fe++){const st=De[Fe],Ne=xe[st.materialIndex];Ne&&Ne.visible&&b.push(E,Ae,Ne,$,mt.z,st)}}else xe.visible&&b.push(E,Ae,xe,$,mt.z,null)}}const ye=E.children;for(let Ae=0,xe=ye.length;Ae<xe;Ae++)An(ye[Ae],z,$,Z)}function Pt(E,z,$,Z){const{opaque:Y,transmissive:ye,transparent:Ae}=E;L.setupLightsView($),ke===!0&&de.setGlobalState(T.clippingPlanes,$),Z&&Ie.viewport(X.copy(Z)),Y.length>0&&Ii(Y,z,$),ye.length>0&&Ii(ye,z,$),Ae.length>0&&Ii(Ae,z,$),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function ts(E,z,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[Z.id]===void 0){const Ne=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[Z.id]=new Ri(1,1,{generateMipmaps:!0,type:Ne?$i:Wn,minFilter:Xr,samples:Math.max(4,wt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const ye=L.state.transmissionRenderTarget[Z.id],Ae=Z.viewport||X;ye.setSize(Ae.z*T.transmissionResolutionScale,Ae.w*T.transmissionResolutionScale);const xe=T.getRenderTarget(),De=T.getActiveCubeFace(),Fe=T.getActiveMipmapLevel();T.setRenderTarget(ye),T.getClearColor(re),pe=T.getClearAlpha(),pe<1&&T.setClearColor(16777215,.5),T.clear(),ze&&Re.render($);const tt=T.toneMapping;T.toneMapping=vi;const st=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),L.setupLightsView(Z),ke===!0&&de.setGlobalState(T.clippingPlanes,Z),Ii(E,$,Z),G.updateMultisampleRenderTarget(ye),G.updateRenderTargetMipmap(ye),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let vt=0,Et=z.length;vt<Et;vt++){const _t=z[vt],{object:ft,geometry:tn,material:Pe,group:pn}=_t;if(Pe.side===Bn&&ft.layers.test(Z.layers)){const je=Pe.side;Pe.side=Ln,Pe.needsUpdate=!0,ca(ft,$,Z,tn,Pe,pn),Pe.side=je,Pe.needsUpdate=!0,Ne=!0}}Ne===!0&&(G.updateMultisampleRenderTarget(ye),G.updateRenderTargetMipmap(ye))}T.setRenderTarget(xe,De,Fe),T.setClearColor(re,pe),st!==void 0&&(Z.viewport=st),T.toneMapping=tt}function Ii(E,z,$){const Z=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,ye=E.length;Y<ye;Y++){const Ae=E[Y],{object:xe,geometry:De,group:Fe}=Ae;let tt=Ae.material;tt.allowOverride===!0&&Z!==null&&(tt=Z),xe.layers.test($.layers)&&ca(xe,z,$,De,tt,Fe)}}function ca(E,z,$,Z,Y,ye){E.onBeforeRender(T,z,$,Z,Y,ye),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(T,z,$,Z,E,ye),Y.transparent===!0&&Y.side===Bn&&Y.forceSinglePass===!1?(Y.side=Ln,Y.needsUpdate=!0,T.renderBufferDirect($,z,Z,Y,E,ye),Y.side=Sr,Y.needsUpdate=!0,T.renderBufferDirect($,z,Z,Y,E,ye),Y.side=Bn):T.renderBufferDirect($,z,Z,Y,E,ye),E.onAfterRender(T,z,$,Z,Y,ye)}function xn(E,z,$){z.isScene!==!0&&(z=gt);const Z=v.get(E),Y=L.state.lights,ye=L.state.shadowsArray,Ae=Y.state.version,xe=me.getParameters(E,Y.state,ye,z,$),De=me.getProgramCacheKey(xe);let Fe=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,Z.fog=z.fog;const tt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=ie.get(E.envMap||Z.environment,tt),Z.envMapRotation=Z.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",We),Fe=new Map,Z.programs=Fe);let st=Fe.get(De);if(st!==void 0){if(Z.currentProgram===st&&Z.lightsStateVersion===Ae)return ha(E,xe),st}else xe.uniforms=me.getUniforms(E),E.onBeforeCompile(xe,T),st=me.acquireProgram(xe,De),Fe.set(De,st),Z.uniforms=xe.uniforms;const Ne=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=de.uniform),ha(E,xe),Z.needsLights=mo(E),Z.lightsStateVersion=Ae,Z.needsLights&&(Ne.ambientLightColor.value=Y.state.ambient,Ne.lightProbe.value=Y.state.probe,Ne.directionalLights.value=Y.state.directional,Ne.directionalLightShadows.value=Y.state.directionalShadow,Ne.spotLights.value=Y.state.spot,Ne.spotLightShadows.value=Y.state.spotShadow,Ne.rectAreaLights.value=Y.state.rectArea,Ne.ltc_1.value=Y.state.rectAreaLTC1,Ne.ltc_2.value=Y.state.rectAreaLTC2,Ne.pointLights.value=Y.state.point,Ne.pointLightShadows.value=Y.state.pointShadow,Ne.hemisphereLights.value=Y.state.hemi,Ne.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ne.spotLightMatrix.value=Y.state.spotLightMatrix,Ne.spotLightMap.value=Y.state.spotLightMap,Ne.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=st,Z.uniformsList=null,st}function ua(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=ul.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function ha(E,z){const $=v.get(E);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function fo(E,z,$,Z,Y){z.isScene!==!0&&(z=gt),G.resetTextureUnits();const ye=z.fog,Ae=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?z.environment:null,xe=H===null?T.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:br,De=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Fe=ie.get(Z.envMap||Ae,De),tt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,st=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ne=!!$.morphAttributes.position,vt=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color;let _t=vi;Z.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(_t=T.toneMapping);const ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tn=ft!==void 0?ft.length:0,Pe=v.get(Z),pn=L.state.lights;if(ke===!0&&(He===!0||E!==q)){const Zt=E===q&&Z.id===K;de.setState(Z,E,Zt)}let je=!1;Z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==pn.state.version||Pe.outputColorSpace!==xe||Y.isBatchedMesh&&Pe.batching===!1||!Y.isBatchedMesh&&Pe.batching===!0||Y.isBatchedMesh&&Pe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Pe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Pe.instancing===!1||!Y.isInstancedMesh&&Pe.instancing===!0||Y.isSkinnedMesh&&Pe.skinning===!1||!Y.isSkinnedMesh&&Pe.skinning===!0||Y.isInstancedMesh&&Pe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Pe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Pe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Pe.instancingMorph===!1&&Y.morphTexture!==null||Pe.envMap!==Fe||Z.fog===!0&&Pe.fog!==ye||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==de.numPlanes||Pe.numIntersection!==de.numIntersection)||Pe.vertexAlphas!==tt||Pe.vertexTangents!==st||Pe.morphTargets!==Ne||Pe.morphNormals!==vt||Pe.morphColors!==Et||Pe.toneMapping!==_t||Pe.morphTargetsCount!==tn)&&(je=!0):(je=!0,Pe.__version=Z.version);let Fn=Pe.currentProgram;je===!0&&(Fn=xn(Z,z,Y));let zn=!1,mn=!1,Mi=!1;const It=Fn.getUniforms(),Wt=Pe.uniforms;if(Ie.useProgram(Fn.program)&&(zn=!0,mn=!0,Mi=!0),Z.id!==K&&(K=Z.id,mn=!0),zn||q!==E){Ie.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),It.setValue(U,"projectionMatrix",E.projectionMatrix),It.setValue(U,"viewMatrix",E.matrixWorldInverse);const Rn=It.map.cameraPosition;Rn!==void 0&&Rn.setValue(U,it.setFromMatrixPosition(E.matrixWorld)),wt.logarithmicDepthBuffer&&It.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&It.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),q!==E&&(q=E,mn=!0,Mi=!0)}if(Pe.needsLights&&(pn.state.directionalShadowMap.length>0&&It.setValue(U,"directionalShadowMap",pn.state.directionalShadowMap,G),pn.state.spotShadowMap.length>0&&It.setValue(U,"spotShadowMap",pn.state.spotShadowMap,G),pn.state.pointShadowMap.length>0&&It.setValue(U,"pointShadowMap",pn.state.pointShadowMap,G)),Y.isSkinnedMesh){It.setOptional(U,Y,"bindMatrix"),It.setOptional(U,Y,"bindMatrixInverse");const Zt=Y.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),It.setValue(U,"boneTexture",Zt.boneTexture,G))}Y.isBatchedMesh&&(It.setOptional(U,Y,"batchingTexture"),It.setValue(U,"batchingTexture",Y._matricesTexture,G),It.setOptional(U,Y,"batchingIdTexture"),It.setValue(U,"batchingIdTexture",Y._indirectTexture,G),It.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&It.setValue(U,"batchingColorTexture",Y._colorsTexture,G));const Zn=$.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Ee.update(Y,$,Fn),(mn||Pe.receiveShadow!==Y.receiveShadow)&&(Pe.receiveShadow=Y.receiveShadow,It.setValue(U,"receiveShadow",Y.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&z.environment!==null&&(Wt.envMapIntensity.value=z.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=gS()),mn&&(It.setValue(U,"toneMappingExposure",T.toneMappingExposure),Pe.needsLights&&po(Wt,Mi),ye&&Z.fog===!0&&Oe.refreshFogUniforms(Wt,ye),Oe.refreshMaterialUniforms(Wt,Z,qe,Se,L.state.transmissionRenderTarget[E.id]),ul.upload(U,ua(Pe),Wt,G)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ul.upload(U,ua(Pe),Wt,G),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&It.setValue(U,"center",Y.center),It.setValue(U,"modelViewMatrix",Y.modelViewMatrix),It.setValue(U,"normalMatrix",Y.normalMatrix),It.setValue(U,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Zt=Z.uniformsGroups;for(let Rn=0,Si=Zt.length;Rn<Si;Rn++){const Dr=Zt[Rn];Te.update(Dr,Fn),Te.bind(Dr,Fn)}}return Fn}function po(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function mo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,z,$){const Z=v.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=z,v.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:$,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const $=v.get(E);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0};const er=U.createFramebuffer();this.setRenderTarget=function(E,z=0,$=0){H=E,D=z,k=$;let Z=null,Y=!1,ye=!1;if(E){const xe=v.get(E);if(xe.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(U.FRAMEBUFFER,xe.__webglFramebuffer),X.copy(E.viewport),W.copy(E.scissor),oe=E.scissorTest,Ie.viewport(X),Ie.scissor(W),Ie.setScissorTest(oe),K=-1;return}else if(xe.__webglFramebuffer===void 0)G.setupRenderTarget(E);else if(xe.__hasExternalTextures)G.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const tt=E.depthTexture;if(xe.__boundDepthTexture!==tt){if(tt!==null&&v.has(tt)&&(E.width!==tt.image.width||E.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(E)}}const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ye=!0);const Fe=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?Z=Fe[z][$]:Z=Fe[z],Y=!0):E.samples>0&&G.useMultisampledRTT(E)===!1?Z=v.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?Z=Fe[$]:Z=Fe,X.copy(E.viewport),W.copy(E.scissor),oe=E.scissorTest}else X.copy(ne).multiplyScalar(qe).floor(),W.copy(he).multiplyScalar(qe).floor(),oe=ce;if($!==0&&(Z=er),Ie.bindFramebuffer(U.FRAMEBUFFER,Z)&&Ie.drawBuffers(E,Z),Ie.viewport(X),Ie.scissor(W),Ie.setScissorTest(oe),Y){const xe=v.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,xe.__webglTexture,$)}else if(ye){const xe=z;for(let De=0;De<E.textures.length;De++){const Fe=v.get(E.textures[De]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+De,Fe.__webglTexture,$,xe)}}else if(E!==null&&$!==0){const xe=v.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,$)}K=-1},this.readRenderTargetPixels=function(E,z,$,Z,Y,ye,Ae,xe=0){if(!(E&&E.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){Ie.bindFramebuffer(U.FRAMEBUFFER,De);try{const Fe=E.textures[xe],tt=Fe.format,st=Fe.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe),!wt.textureFormatReadable(tt)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(st)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Z&&$>=0&&$<=E.height-Y&&U.readPixels(z,$,Z,Y,te.convert(tt),te.convert(st),ye)}finally{const Fe=H!==null?v.get(H).__webglFramebuffer:null;Ie.bindFramebuffer(U.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,z,$,Z,Y,ye,Ae,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De)if(z>=0&&z<=E.width-Z&&$>=0&&$<=E.height-Y){Ie.bindFramebuffer(U.FRAMEBUFFER,De);const Fe=E.textures[xe],tt=Fe.format,st=Fe.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe),!wt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.bufferData(U.PIXEL_PACK_BUFFER,ye.byteLength,U.STREAM_READ),U.readPixels(z,$,Z,Y,te.convert(tt),te.convert(st),0);const vt=H!==null?v.get(H).__webglFramebuffer:null;Ie.bindFramebuffer(U.FRAMEBUFFER,vt);const Et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Tg(U,Et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ye),U.deleteBuffer(Ne),U.deleteSync(Et),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,$=0){const Z=Math.pow(2,-$),Y=Math.floor(E.image.width*Z),ye=Math.floor(E.image.height*Z),Ae=z!==null?z.x:0,xe=z!==null?z.y:0;G.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Ae,xe,Y,ye),Ie.unbindTexture()};const Pl=U.createFramebuffer(),go=U.createFramebuffer();this.copyTextureToTexture=function(E,z,$=null,Z=null,Y=0,ye=0){let Ae,xe,De,Fe,tt,st,Ne,vt,Et;const _t=E.isCompressedTexture?E.mipmaps[ye]:E.image;if($!==null)Ae=$.max.x-$.min.x,xe=$.max.y-$.min.y,De=$.isBox3?$.max.z-$.min.z:1,Fe=$.min.x,tt=$.min.y,st=$.isBox3?$.min.z:0;else{const Wt=Math.pow(2,-Y);Ae=Math.floor(_t.width*Wt),xe=Math.floor(_t.height*Wt),E.isDataArrayTexture?De=_t.depth:E.isData3DTexture?De=Math.floor(_t.depth*Wt):De=1,Fe=0,tt=0,st=0}Z!==null?(Ne=Z.x,vt=Z.y,Et=Z.z):(Ne=0,vt=0,Et=0);const ft=te.convert(z.format),tn=te.convert(z.type);let Pe;z.isData3DTexture?(G.setTexture3D(z,0),Pe=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(G.setTexture2DArray(z,0),Pe=U.TEXTURE_2D_ARRAY):(G.setTexture2D(z,0),Pe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const pn=U.getParameter(U.UNPACK_ROW_LENGTH),je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Fn=U.getParameter(U.UNPACK_SKIP_PIXELS),zn=U.getParameter(U.UNPACK_SKIP_ROWS),mn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),U.pixelStorei(U.UNPACK_SKIP_ROWS,tt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,st);const Mi=E.isDataArrayTexture||E.isData3DTexture,It=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Wt=v.get(E),Zn=v.get(z),Zt=v.get(Wt.__renderTarget),Rn=v.get(Zn.__renderTarget);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Si=0;Si<De;Si++)Mi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,v.get(E).__webglTexture,Y,st+Si),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,v.get(z).__webglTexture,ye,Et+Si)),U.blitFramebuffer(Fe,tt,Ae,xe,Ne,vt,Ae,xe,U.DEPTH_BUFFER_BIT,U.NEAREST);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||v.has(E)){const Wt=v.get(E),Zn=v.get(z);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,Pl),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,go);for(let Zt=0;Zt<De;Zt++)Mi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wt.__webglTexture,Y,st+Zt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wt.__webglTexture,Y),It?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zn.__webglTexture,ye,Et+Zt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zn.__webglTexture,ye),Y!==0?U.blitFramebuffer(Fe,tt,Ae,xe,Ne,vt,Ae,xe,U.COLOR_BUFFER_BIT,U.NEAREST):It?U.copyTexSubImage3D(Pe,ye,Ne,vt,Et+Zt,Fe,tt,Ae,xe):U.copyTexSubImage2D(Pe,ye,Ne,vt,Fe,tt,Ae,xe);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else It?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Pe,ye,Ne,vt,Et,Ae,xe,De,ft,tn,_t.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,ye,Ne,vt,Et,Ae,xe,De,ft,_t.data):U.texSubImage3D(Pe,ye,Ne,vt,Et,Ae,xe,De,ft,tn,_t):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ye,Ne,vt,Ae,xe,ft,tn,_t.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ye,Ne,vt,_t.width,_t.height,ft,_t.data):U.texSubImage2D(U.TEXTURE_2D,ye,Ne,vt,Ae,xe,ft,tn,_t);U.pixelStorei(U.UNPACK_ROW_LENGTH,pn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Fn),U.pixelStorei(U.UNPACK_SKIP_ROWS,zn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,mn),ye===0&&z.generateMipmaps&&U.generateMipmap(Pe),Ie.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&G.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?G.setTextureCube(E,0):E.isData3DTexture?G.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?G.setTexture2DArray(E,0):G.setTexture2D(E,0),Ie.unbindTexture()},this.resetState=function(){D=0,k=0,H=null,Ie.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const kf={type:"change"},wh={type:"start"},Ip={type:"end"},il=new ro,zf=new Hi,vS=Math.cos(70*sn.DEG2RAD),un=new F,Un=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fc=1e-6;class xS extends b_{constructor(e,t=null){super(e,t),this.state=Ot.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new nt,this._lastTargetPosition=new F,this._quat=new nt().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mf,this._sphericalDelta=new mf,this._scale=1,this._panOffset=new F,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new F,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MS.bind(this),this._onPointerDown=yS.bind(this),this._onPointerUp=SS.bind(this),this._onContextMenu=CS.bind(this),this._onMouseWheel=TS.bind(this),this._onKeyDown=wS.bind(this),this._onTouchStart=AS.bind(this),this._onTouchMove=RS.bind(this),this._onMouseDown=bS.bind(this),this._onMouseMove=ES.bind(this),this._interceptControlDown=DS.bind(this),this._interceptControlUp=PS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kf),this.update(),this.state=Ot.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;un.copy(t).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),i<-Math.PI?i+=Un:i>Math.PI&&(i-=Un),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),t.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=un.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(il.origin.copy(this.object.position),il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(il.direction))<vS?this.object.lookAt(this.target):(zf.setFromNormalAndCoplanarPoint(this.object.up,this.target),il.intersectPlane(zf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Fc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fc||this._lastTargetPosition.distanceToSquared(this.target)>Fc?(this.dispatchEvent(kf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){un.setFromMatrixColumn(t,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,t){this.screenSpacePanning===!0?un.setFromMatrixColumn(t,1):(un.setFromMatrixColumn(t,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;un.copy(i).sub(this.target);let s=un.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function yS(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function MS(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function SS(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ip),this.state=Ot.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bS(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ot.DOLLY;break;case Vs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ot.ROTATE}break;case Vs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(wh)}function ES(r){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function TS(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(r.preventDefault(),this.dispatchEvent(wh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ip))}function wS(r){this.enabled!==!1&&this._handleKeyDown(r)}function AS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ot.TOUCH_ROTATE;break;case Os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case Os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ot.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(wh)}function RS(r){switch(this._trackPointer(r),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ot.NONE}}function CS(r){this.enabled!==!1&&r.preventDefault()}function DS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PS(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ei=Uint8Array,zs=Uint16Array,IS=Int32Array,Lp=new ei([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Fp=new ei([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),LS=new ei([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Np=function(r,e){for(var t=new zs(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new IS(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},Up=Np(Lp,2),Op=Up.b,FS=Up.r;Op[28]=258,FS[258]=28;var NS=Np(Fp,0),US=NS.b,zu=new zs(32768);for(var Yt=0;Yt<32768;++Yt){var mr=(Yt&43690)>>1|(Yt&21845)<<1;mr=(mr&52428)>>2|(mr&13107)<<2,mr=(mr&61680)>>4|(mr&3855)<<4,zu[Yt]=((mr&65280)>>8|(mr&255)<<8)>>1}var Wa=(function(r,e,t){for(var n=r.length,i=0,s=new zs(e);i<n;++i)r[i]&&++s[r[i]-1];var a=new zs(e);for(i=1;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new zs(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],u=a[r[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[zu[u]>>l]=c}else for(o=new zs(n),i=0;i<n;++i)r[i]&&(o[i]=zu[a[r[i]-1]++]>>15-r[i]);return o}),oo=new ei(288);for(var Yt=0;Yt<144;++Yt)oo[Yt]=8;for(var Yt=144;Yt<256;++Yt)oo[Yt]=9;for(var Yt=256;Yt<280;++Yt)oo[Yt]=7;for(var Yt=280;Yt<288;++Yt)oo[Yt]=8;var Bp=new ei(32);for(var Yt=0;Yt<32;++Yt)Bp[Yt]=5;var OS=Wa(oo,9,1),BS=Wa(Bp,5,1),Nc=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},di=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Uc=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},kS=function(r){return(r+7)/8|0},zS=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new ei(r.subarray(e,t))},VS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fi=function(r,e,t){var n=new Error(e||VS[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,fi),!t)throw n;return n},GS=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new ei(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new ei(i*3));var c=function(He){var zt=t.length;if(He>zt){var it=new ei(Math.max(zt*2,He));it.set(t),t=it}},h=e.f||0,u=e.p||0,d=e.b||0,f=e.l,m=e.d,x=e.m,g=e.n,p=i*8;do{if(!f){h=di(r,u,1);var S=di(r,u+1,3);if(u+=3,S)if(S==1)f=OS,m=BS,x=9,g=5;else if(S==2){var P=di(r,u,31)+257,w=di(r,u+10,15)+4,_=P+di(r,u+5,31)+1;u+=14;for(var T=new ei(_),j=new ei(19),D=0;D<w;++D)j[LS[D]]=di(r,u+D*3,7);u+=w*3;for(var k=Nc(j),H=(1<<k)-1,K=Wa(j,k,1),D=0;D<_;){var q=K[di(r,u,H)];u+=q&15;var y=q>>4;if(y<16)T[D++]=y;else{var X=0,W=0;for(y==16?(W=3+di(r,u,3),u+=2,X=T[D-1]):y==17?(W=3+di(r,u,7),u+=3):y==18&&(W=11+di(r,u,127),u+=7);W--;)T[D++]=X}}var oe=T.subarray(0,P),re=T.subarray(P);x=Nc(oe),g=Nc(re),f=Wa(oe,x,1),m=Wa(re,g,1)}else fi(1);else{var y=kS(u)+4,b=r[y-4]|r[y-3]<<8,L=y+b;if(L>i){l&&fi(0);break}o&&c(d+b),t.set(r.subarray(y,L),d),e.b=d+=b,e.p=u=L*8,e.f=h;continue}if(u>p){l&&fi(0);break}}o&&c(d+131072);for(var pe=(1<<x)-1,ge=(1<<g)-1,Se=u;;Se=u){var X=f[Uc(r,u)&pe],qe=X>>4;if(u+=X&15,u>p){l&&fi(0);break}if(X||fi(2),qe<256)t[d++]=qe;else if(qe==256){Se=u,f=null;break}else{var Tt=qe-254;if(qe>264){var D=qe-257,ut=Lp[D];Tt=di(r,u,(1<<ut)-1)+Op[D],u+=ut}var ne=m[Uc(r,u)&ge],he=ne>>4;ne||fi(3),u+=ne&15;var re=US[he];if(he>3){var ut=Fp[he];re+=Uc(r,u)&(1<<ut)-1,u+=ut}if(u>p){l&&fi(0);break}o&&c(d+131072);var ce=d+Tt;if(d<re){var $e=s-re,ke=Math.min(re,ce);for($e+d<0&&fi(3);d<ke;++d)t[d]=n[$e+d]}for(;d<ce;++d)t[d]=t[d-re]}}e.l=f,e.p=Se,e.b=d,e.f=h,f&&(h=1,e.m=x,e.d=m,e.n=g)}while(!h);return d!=t.length&&a?zS(t,0,d):t.subarray(0,d)},HS=new ei(0),WS=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&fi(6,"invalid zlib data"),(r[1]>>5&1)==1&&fi(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function XS(r,e){return GS(r.subarray(WS(r),-4),{i:2},e,e)}var qS=typeof TextDecoder<"u"&&new TextDecoder,YS=0;try{qS.decode(HS,{stream:!0}),YS=1}catch{}function kp(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let i=r,s=n,a=Math.floor((i+s)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?s=a:i=a,a=Math.floor((i+s)/2);return a}function jS(r,e,t,n){const i=[],s=[],a=[];i[0]=1;for(let o=1;o<=t;++o){s[o]=e-n[r+1-o],a[o]=n[r+o]-e;let l=0;for(let c=0;c<o;++c){const h=a[c+1],u=s[o-c],d=i[c]/(h+u);i[c]=l+h*d,l=u*d}i[o]=l}return i}function ZS(r,e,t,n){const i=kp(r,n,e),s=jS(i,n,r,e),a=new Dt(0,0,0,0);for(let o=0;o<=r;++o){const l=t[i-r+o],c=s[o],h=l.w*c;a.x+=l.x*h,a.y+=l.y*h,a.z+=l.z*h,a.w+=l.w*c}return a}function KS(r,e,t,n,i){const s=[];for(let u=0;u<=t;++u)s[u]=0;const a=[];for(let u=0;u<=n;++u)a[u]=s.slice(0);const o=[];for(let u=0;u<=t;++u)o[u]=s.slice(0);o[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[r+1-u],c[u]=i[r+u]-e;let d=0;for(let f=0;f<u;++f){const m=c[f+1],x=l[u-f];o[u][f]=m+x;const g=o[f][u-1]/o[u][f];o[f][u]=d+m*g,d=x*g}o[u][u]=d}for(let u=0;u<=t;++u)a[0][u]=o[u][t];for(let u=0;u<=t;++u){let d=0,f=1;const m=[];for(let x=0;x<=t;++x)m[x]=s.slice(0);m[0][0]=1;for(let x=1;x<=n;++x){let g=0;const p=u-x,S=t-x;u>=x&&(m[f][0]=m[d][0]/o[S+1][p],g=m[f][0]*o[p][S]);const y=p>=-1?1:-p,b=u-1<=S?x-1:t-u;for(let P=y;P<=b;++P)m[f][P]=(m[d][P]-m[d][P-1])/o[S+1][p+P],g+=m[f][P]*o[p+P][S];u<=S&&(m[f][x]=-m[d][x-1]/o[S+1][u],g+=m[f][x]*o[u][S]),a[x][u]=g;const L=d;d=f,f=L}}let h=t;for(let u=1;u<=n;++u){for(let d=0;d<=t;++d)a[u][d]*=h;h*=t-u}return a}function $S(r,e,t,n,i){const s=i<r?i:r,a=[],o=kp(r,n,e),l=KS(o,n,r,s,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),d=u.w;u.x*=d,u.y*=d,u.z*=d,c[h]=u}for(let h=0;h<=s;++h){const u=c[o-r].clone().multiplyScalar(l[h][0]);for(let d=1;d<=r;++d)u.add(c[o-r+d].clone().multiplyScalar(l[h][d]));a[h]=u}for(let h=s+1;h<=i+1;++h)a[h]=new Dt(0,0,0);return a}function QS(r,e){let t=1;for(let i=2;i<=r;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=r-e;++i)n*=i;return t/n}function JS(r){const e=r.length,t=[],n=[];for(let s=0;s<e;++s){const a=r[s];t[s]=new F(a.x,a.y,a.z),n[s]=a.w}const i=[];for(let s=0;s<e;++s){const a=t[s].clone();for(let o=1;o<=s;++o)a.sub(i[s-o].clone().multiplyScalar(QS(s,o)*n[o]));i[s]=a.divideScalar(n[0])}return i}function eb(r,e,t,n,i){const s=$S(r,e,t,n,i);return JS(s)}class tb extends _0{constructor(e,t,n,i,s){super();const a=t?t.length-1:0,o=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||a;for(let l=0;l<o;++l){const c=n[l];this.controlPoints[l]=new Dt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new F){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=ZS(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new F){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=eb(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new Dt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let ht,rn,Pn;class nb extends Jr{constructor(e){super(e)}load(e,t,n,i){const s=this,a=s.path===""?s_.extractUrlBase(e):s.path,o=new J0(this.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(lb(e))ht=new ob().parse(e);else{const i=Gp(e);if(!cb(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Gf(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Gf(i));ht=new ab().parse(i)}const n=new bp(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new ib(n,this.manager).parse(ht)}}class ib{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){rn=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new rb().parse(i);return this.parseScene(i,s,n),Pn}parseConnections(){const e=new Map;return"Connections"in ht&&ht.Connections.connections.forEach(function(n){const i=n[0],s=n[1],a=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:s,relationship:a};e.get(i).parents.push(o),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:a};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in ht.Objects){const n=ht.Objects.Video;for(const i in n){const s=n[i],a=parseInt(i);if(e[a]=s.RelativeFilename||s.Filename,"Content"in s){const o=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(o||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;case"webp":s="image/webp";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in ht.Objects){const n=ht.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,a=i!==void 0?i.value:0,o=s!==void 0?s.value:0;if(n.wrapS=a===0?qa:_i,n.wrapT=o===0?qa:_i,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=e.FileName.split(".").pop().toLowerCase();let i=this.manager.getHandler(`.${n}`);i===null&&(i=this.textureLoader);const s=i.path;s||i.setPath(this.textureLoader.path);const a=rn.get(e.id).children;let o;if(a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(o=t[a[0].ID],(o.indexOf("blob:")===0||o.indexOf("data:")===0)&&i.setPath(void 0)),o===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new _n;const l=i.load(o);return i.setPath(s),l}parseMaterials(e){const t=new Map;if("Material"in ht.Objects){const n=ht.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!rn.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(s.toLowerCase()){case"phong":o=new $o;break;case"lambert":o=new xp;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),o=new $o;break}return o.setValues(a),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=ot.colorSpaceToWorking(new Ge().fromArray(e.Diffuse.value),Ut):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=ot.colorSpaceToWorking(new Ge().fromArray(e.DiffuseColor.value),Ut)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=ot.colorSpaceToWorking(new Ge().fromArray(e.Emissive.value),Ut):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=ot.colorSpaceToWorking(new Ge().fromArray(e.EmissiveColor.value),Ut)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=ot.colorSpaceToWorking(new Ge().fromArray(e.Specular.value),Ut):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=ot.colorSpaceToWorking(new Ge().fromArray(e.SpecularColor.value),Ut));const s=this;return rn.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=s.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,a.ID),i.map!==void 0&&(i.map.colorSpace=Ut);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,a.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Ut);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,a.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,a.ID),i.envMap!==void 0&&(i.envMap.mapping=sl,i.envMap.colorSpace=Ut);break;case"SpecularColor":i.specularMap=s.getTexture(t,a.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Ut);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in ht.Objects&&t in ht.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=rn.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in ht.Objects){const n=ht.Objects.Deformer;for(const i in n){const s=n[i],a=rn.get(parseInt(i));if(s.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[i]=o}else if(s.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new Le().fromArray(s.TransformLink.a)};"Indexes"in s&&(a.indices=s.Indexes.a,a.weights=s.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],a=t[s.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=rn.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){Pn=new pi;const i=this.parseModels(e.skeletons,t,n),s=ht.Objects.Model,a=this;i.forEach(function(l){const c=s[l.ID];a.setLookAtProperties(l,c),rn.get(l.ID).parents.forEach(function(u){const d=i.get(u.ID);d!==void 0&&d.add(l)}),l.parent===null&&Pn.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),Pn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Vp(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new sb().parse();Pn.children.length===1&&Pn.children[0].isGroup&&(Pn.children[0].animations=o,Pn=Pn.children[0]),Pn.animations=o}parseModels(e,t,n){const i=new Map,s=ht.Objects.Model;for(const a in s){const o=parseInt(a),l=s[a],c=rn.get(o);let h=this.buildSkeleton(c,e,o,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new Pu;break;case"Null":default:h=new pi;break}h.name=l.attrName?bt.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=o}this.getTransformData(h,l),i.set(o,h)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,h){if(c.ID===a.ID){const u=s;s=new Pu,s.matrixWorld.copy(c.transformLink),s.name=i?bt.sanitizeNodeName(i):"",s.userData.originalName=i,s.ID=n,l.bones[h]=s,u!==null&&s.add(u)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=ht.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new Gt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new In(h,c,s,a),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new Gt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new Gt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=ht.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new Gt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=ot.colorSpaceToWorking(new Ge().fromArray(n.Color.value),Ut));let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Nu(s,a,o,l);break;case 1:t=new ao(s,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=sn.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=sn.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new n_(s,a,o,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Nu(s,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,a=null;const o=[];if(e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new $o({name:Jr.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in s.attributes&&o.forEach(function(l){l.vertexColors=!0}),s.groups.length>0){let l=!1;for(let c=0,h=s.groups.length;c<h;c++){const u=s.groups[c];(u.materialIndex<0||u.materialIndex>=o.length)&&(u.materialIndex=o.length,l=!0)}if(l){const c=new $o;o.push(c)}}return s.FBX_Deformer?(i=new l0(s,a),i.normalizeSkinWeights()):i=new Xt(s,a),i}createCurve(e,t){const n=e.children.reduce(function(s,a){return t.has(a.ID)&&(s=t.get(a.ID)),s},null),i=new _h({name:Jr.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new hp(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=io(t.RotationOrder.value):n.eulerOrder=io(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&rn.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=ht.Objects.Model[i.ID];if("Lcl_Translation"in s){const a=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),Pn.add(e.target)):e.lookAt(new F().fromArray(a))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const a=e[s];rn.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;rn.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new mh(a.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in ht.Objects){const t=ht.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new Le().fromArray(s.Matrix.a)}):e[i.Node]=new Le().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in ht){if("AmbientColor"in ht.GlobalSettings){const e=ht.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new Ge().setRGB(t,n,i,Ut);Pn.add(new Sh(s,1))}}"UnitScaleFactor"in ht.GlobalSettings&&(Pn.userData.unitScaleFactor=ht.GlobalSettings.UnitScaleFactor.value)}}}class rb{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in ht.Objects){const n=ht.Objects.Geometry;for(const i in n){const s=rn.get(parseInt(i)),a=this.parseGeometry(s,n[i],e);t.set(parseInt(i),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],a=e.parents.map(function(u){return ht.Objects.Model[u.ID]});if(a.length===0)return;const o=e.children.reduce(function(u,d){return i[d.ID]!==void 0&&(u=i[d.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&s.push(n.morphTargets[u.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=io(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Vp(c);return this.genGeometry(t,o,s,h)}genGeometry(e,t,n,i){const s=new Tn;e.attrName&&(s.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new qt(o.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),o.colors.length>0&&s.setAttribute("color",new qt(o.colors,3)),t&&(s.setAttribute("skinIndex",new fh(o.weightsIndices,4)),s.setAttribute("skinWeight",new qt(o.vertexWeights,4)),s.FBX_Deformer=t),o.normal.length>0){const c=new rt().getNormalMatrix(i),h=new qt(o.normal,3);h.applyNormalMatrix(c),s.setAttribute("normal",h)}if(o.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;s.setAttribute(u,new qt(o.uvs[h],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],h=0;if(o.materialIndex.forEach(function(u,d){u!==c&&(s.addGroup(h,d-h,c),c=u,h=d)}),s.groups.length>0){const u=s.groups[s.groups.length-1],d=u.start+u.count;d!==o.materialIndex.length&&s.addGroup(d,o.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:s,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,a=[],o=[],l=[],c=[],h=[],u=[];const d=this;return e.vertexIndices.forEach(function(f,m){let x,g=!1;f<0&&(f=f^-1,g=!0);let p=[],S=[];if(a.push(f*3,f*3+1,f*3+2),e.color){const y=rl(m,n,f,e.color);l.push(y[0],y[1],y[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(y){S.push(y.weight),p.push(y.id)}),S.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const y=[0,0,0,0],b=[0,0,0,0];S.forEach(function(L,P){let w=L,_=p[P];b.forEach(function(T,j,D){if(w>T){D[j]=w,w=T;const k=y[j];y[j]=_,_=k}})}),p=y,S=b}for(;S.length<4;)S.push(0),p.push(0);for(let y=0;y<4;++y)h.push(S[y]),u.push(p[y])}if(e.normal){const y=rl(m,n,f,e.normal);o.push(y[0],y[1],y[2])}e.material&&e.material.mappingType!=="AllSame"&&(x=rl(m,n,f,e.material)[0],x<0&&(d.negativeMaterialIndices=!0,x=0)),e.uv&&e.uv.forEach(function(y,b){const L=rl(m,n,f,y);c[b]===void 0&&(c[b]=[]),c[b].push(L[0]),c[b].push(L[1])}),i++,g&&(d.genFace(t,e,a,x,o,l,c,h,u,i),n++,i=0,a=[],o=[],l=[],c=[],h=[],u=[])}),t}getNormalNewell(e){const t=new F(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t.x+=(i.y-s.y)*(i.z+s.z),t.y+=(i.z-s.z)*(i.x+s.x),t.z+=(i.x-s.x)*(i.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new F(0,1,0):new F(0,0,1)).cross(t).normalize(),s=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:s}}flattenVertex(e,t,n){return new Ye(e.dot(t),e.dot(n))}genFace(e,t,n,i,s,a,o,l,c,h){let u;if(h>3){const d=[],f=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<n.length;p+=3)d.push(new F(f[n[p]],f[n[p+1]],f[n[p+2]]));const{tangent:m,bitangent:x}=this.getNormalTangentAndBitangent(d),g=[];for(const p of d)g.push(this.flattenVertex(p,m,x));u=vh.triangulateShape(g,[])}else u=[[0,1,2]];for(const[d,f,m]of u)e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[m*3]]),e.vertex.push(t.vertexPositions[n[m*3+1]]),e.vertex.push(t.vertexPositions[n[m*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),t.color&&(e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[f*3]),e.colors.push(a[f*3+1]),e.colors.push(a[f*3+2]),e.colors.push(a[m*3]),e.colors.push(a[m*3+1]),e.colors.push(a[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[m*3]),e.normal.push(s[m*3+1]),e.normal.push(s[m*3+2])),t.uv&&t.uv.forEach(function(x,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(o[g][d*2]),e.uvs[g].push(o[g][d*2+1]),e.uvs[g].push(o[g][f*2]),e.uvs[g].push(o[g][f*2+1]),e.uvs[g].push(o[g][m*2]),e.uvs[g].push(o[g][m*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=ht.Objects.Geometry[o.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,s){const a=t.Vertices!==void 0?t.Vertices.a:[],o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],h=e.attributes.position.count*3,u=new Float32Array(h);for(let x=0;x<c.length;x++){const g=c[x]*3;u[g]=l[x*3],u[g+1]=l[x*3+1],u[g+2]=l[x*3+2]}const d={vertexIndices:o,vertexPositions:u,baseVertexPositions:a},f=this.genBuffers(d),m=new qt(f.vertex,3);m.name=s||n.attrName,m.applyMatrix4(i),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let a=0,o=new Ge;a<i.length;a+=4)o.fromArray(i,a),ot.colorSpaceToWorking(o,Ut),o.toArray(i,a);return{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let a=0;a<i.length;++a)s.push(a);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Tn;const n=t-1,i=e.KnotVector.a,s=[],a=e.Points.a;for(let u=0,d=a.length;u<d;u+=4)s.push(new Dt().fromArray(a,u));let o,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let u=0;u<n;++u)s.push(s[u])}const h=new tb(n,i,s,o,l).getPoints(s.length*12);return new Tn().setFromPoints(h)}}class sb{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(ht.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=ht.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=ht.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(ub),values:t[n].KeyValueFloat.a},s=rn.get(i.id);if(s!==void 0){const a=s.parents[0].ID,o=s.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=i:o.match(/Y/)?e.get(a).curves.y=i:o.match(/Z/)?e.get(a).curves.z=i:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=i)}}}parseAnimationLayers(e){const t=ht.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],a=rn.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[c]===void 0){const u=rn.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(u!==void 0){const d=ht.Objects.Model[u.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?bt.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Pn.traverse(function(m){m.ID===d.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Le),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[c]===void 0){const u=rn.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,d=rn.get(u).parents[0].ID,f=rn.get(d).parents[0].ID,m=rn.get(f).parents[0].ID,x=ht.Objects.Model[m],g={modelName:x.attrName?bt.sanitizeNodeName(x.attrName):"",morphName:ht.Objects.Deformer[u].attrName};s[c]=g}s[c][h.attr]=h}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=ht.Objects.AnimationStack,n={};for(const i in t){const s=rn.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Fu(e.name,-1,t)}generateTracks(e){const t=[];let n=new F,i=new F;if(e.transform&&e.transform.decompose(n,new nt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(s,t,n);return new no(e+"."+i,s,a)}generateRotationTrack(e,t,n,i,s){let a,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const d=this.interpolateRotations(t.x,t.y,t.z,s);a=d[0],o=d[1]}const l=io(0);n!==void 0&&(n=n.map(sn.degToRad),n.push(l),n=new en().fromArray(n),n=new nt().setFromEuler(n)),i!==void 0&&(i=i.map(sn.degToRad),i.push(l),i=new en().fromArray(i),i=new nt().setFromEuler(i).invert());const c=new nt,h=new en,u=[];if(!o||!a)return new Qr(e+".quaternion",[0],[0]);for(let d=0;d<o.length;d+=3)h.set(o[d],o[d+1],o[d+2],s),c.setFromEuler(h),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),d>2&&new nt().fromArray(u,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,d/3*4);return new Qr(e+".quaternion",a,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=Pn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new to(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const a=t[s];a!==i&&(t[n]=a,i=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const h=t.x.values[a];s.push(h),i[0]=h}else s.push(i[0]);if(o!==-1){const h=t.y.values[o];s.push(h),i[1]=h}else s.push(i[1]);if(l!==-1){const h=t.z.values[l];s.push(h),i[2]=h}else s.push(i[2])}),s}interpolateRotations(e,t,n,i){const s=[],a=[];s.push(e.times[0]),a.push(sn.degToRad(e.values[0])),a.push(sn.degToRad(t.values[0])),a.push(sn.degToRad(n.values[0]));for(let o=1;o<e.values.length;o++){const l=[e.values[o-1],t.values[o-1],n.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(sn.degToRad),h=[e.values[o],t.values[o],n.values[o]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const u=h.map(sn.degToRad),d=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const x=Math.max(...f)/180,g=new en(...c,i),p=new en(...u,i),S=new nt().setFromEuler(g),y=new nt().setFromEuler(p);S.dot(y)&&y.set(-y.x,-y.y,-y.z,-y.w);const b=e.times[o-1],L=e.times[o]-b,P=new nt,w=new en;for(let _=0;_<1;_+=1/x)P.copy(S.clone().slerp(y.clone(),_)),s.push(b+_*L),w.setFromQuaternion(P,i),a.push(w.x),a.push(w.y),a.push(w.z)}else s.push(e.times[o]),a.push(sn.degToRad(e.values[o])),a.push(sn.degToRad(t.values[o])),a.push(sn.degToRad(n.values[o]))}return[s,a]}}class ab{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new zp,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in o?(n==="PoseNode"?o.PoseNode.push(s):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=s)):typeof a.id=="number"?(o[n]={},o[n][a.id]=s):n!=="Properties70"&&(n==="PoseNode"?o[n]=[s]:o[n]=s),typeof a.id=="number"&&(s.id=a.id),a.name!==""&&(s.attrName=a.name),a.type!==""&&(s.attrType=a.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=s.split(",").slice(3);u=u.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",s=[c,h],db(s,u),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=s),i in a&&Array.isArray(a[i])?a[i].push(s):i!=="a"?a[i]=s:a.a=s,this.setCurrentProp(a,i),i==="a"&&s.slice(-1)!==","&&(a.a=Bc(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Bc(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],a=i[1],o=i[2],l=i[3];let c=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Bc(c);break}this.getPrevNode()[s]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class ob{parse(e){const t=new Vf(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new zp;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(i===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(o,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,a){a!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),a=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const o=XS(new Uint8Array(e.getArrayBuffer(a))),l=new Vf(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Vf{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class zp{add(e,t){this[e]=t}}function lb(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===Gp(r,0,e.length)}function cb(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=r[i-1];return r=r.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Gf(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function ub(r){return r/46186158e3}const hb=[];function rl(r,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,a=s+n.dataSize;return fb(hb,n.buffer,s,a)}const Oc=new en,Ps=new F;function Vp(r){const e=new Le,t=new Le,n=new Le,i=new Le,s=new Le,a=new Le,o=new Le,l=new Le,c=new Le,h=new Le,u=new Le,d=new Le,f=r.inheritType?r.inheritType:0;r.translation&&e.setPosition(Ps.fromArray(r.translation));const m=io(0);if(r.preRotation){const D=r.preRotation.map(sn.degToRad);D.push(m),t.makeRotationFromEuler(Oc.fromArray(D))}if(r.rotation){const D=r.rotation.map(sn.degToRad);D.push(r.eulerOrder||m),n.makeRotationFromEuler(Oc.fromArray(D))}if(r.postRotation){const D=r.postRotation.map(sn.degToRad);D.push(m),i.makeRotationFromEuler(Oc.fromArray(D)),i.invert()}r.scale&&s.scale(Ps.fromArray(r.scale)),r.scalingOffset&&o.setPosition(Ps.fromArray(r.scalingOffset)),r.scalingPivot&&a.setPosition(Ps.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(Ps.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(Ps.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(u.copy(r.parentMatrix),h.copy(r.parentMatrixWorld));const x=t.clone().multiply(n).multiply(i),g=new Le;g.extractRotation(h);const p=new Le;p.copyPosition(h);const S=p.clone().invert().multiply(h),y=g.clone().invert().multiply(S),b=s,L=new Le;if(f===0)L.copy(g).multiply(x).multiply(y).multiply(b);else if(f===1)L.copy(g).multiply(y).multiply(x).multiply(b);else{const k=new Le().scale(new F().setFromMatrixScale(u)).clone().invert(),H=y.clone().multiply(k);L.copy(g).multiply(x).multiply(H).multiply(b)}const P=c.clone().invert(),w=a.clone().invert();let _=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(P).multiply(o).multiply(a).multiply(s).multiply(w);const T=new Le().copyPosition(_),j=h.clone().multiply(T);return d.copyPosition(j),_=d.clone().multiply(L),_.premultiply(h.invert()),_}function io(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function Bc(r){return r.split(",").map(function(t){return parseFloat(t)})}function Gp(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function db(r,e){for(let t=0,n=r.length,i=e.length;t<i;t++,n++)r[n]=e[t]}function fb(r,e,t,n){for(let i=t,s=0;i<n;i++,s++)r[s]=e[i];return r}class pb extends dh{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new ia;e.deleteAttribute("uv");const t=new Ga({side:Ln}),n=new Ga,i=new Nu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Xt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new h0(e,n,6),o=new Gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Xt(e,Is(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Xt(e,Is(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Xt(e,Is(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Xt(e,Is(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new Xt(e,Is(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new Xt(e,Is(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Is(r){return new xp({color:0,emissive:16777215,emissiveIntensity:r})}var Ke=window.VIEWER_CONFIG||{},Jt=Ke.look||{};(function(){var r=new URLSearchParams(location.search);function e(a){var o=parseFloat(r.get(a));return isFinite(o)?o:null}var t={exposure:"exposure",envIntensity:"envint",roughness:"rough",metalness:"metal"};for(var n in t){var i=e(t[n]);i!=null&&(Jt[n]=i)}var s=r.get("env");s&&(Jt.env=s.toLowerCase())})();var Hf={Neutral:bl,ACES:$u,AgX:Qu,None:vi},jr=new URLSearchParams(location.search).get("mono")==="1",Ls=null;function Hp(){Ls||(Ls=document.createElement("div"),Ls.style.cssText="position:fixed;bottom:14px;right:16px;z-index:1002;padding:6px 12px;border-radius:999px;background:rgba(180,40,40,0.85);color:#fff;font:600 12px sans-serif;letter-spacing:1px;pointer-events:none;",Ls.textContent="🎥 2D CAPTURE MODE — M to toggle",document.body.appendChild(Ls)),Ls.style.display=jr?"block":"none"}window.addEventListener("keydown",function(r){if(!(r.key!=="m"&&r.key!=="M")){var e=r.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA")||_e.xr.isPresenting||(jr=!jr,Hp(),console.info("[mono] capture mode "+(jr?"ON — both eyes render identical, screen will read 2D":"off — stereo restored")))}});jr&&Hp();var Wf=new URLSearchParams(location.search).get("embed"),Ah=Wf==="1"||Wf!=="0"&&window.self!==window.top,Rh=Ke.materials||{},Yi=Rh.flat||Ke.crossSection&&Ke.crossSection.cutFace||{},mb=(Yi.names||["slice"]).map(function(r){return String(r).toLowerCase()}),hl=Rh.translucent||{},gb=(hl.names||[]).map(function(r){return String(r).toLowerCase()}),_b=(Rh.tints||[]).map(function(r){return{match:String(r.match).toLowerCase(),color:r.color}}),kt=new dh;(function(){var e=document.createElement("canvas");e.width=4,e.height=256;var t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#d9dcdf"),n.addColorStop(1,"#a9aeb3"),t.fillStyle=n,t.fillRect(0,0,4,256);var i=new Va(e);i.colorSpace=Ut,kt.background=i;var s=parseFloat(new URLSearchParams(location.search).get("bgint"));kt.backgroundIntensity=isFinite(s)?s:Jt.bgIntensity!=null?Jt.bgIntensity:1})();var pt=Ke.camera||{},Ct=new In(pt.fov||45,innerWidth/innerHeight,pt.near||.1,pt.far||500);pt.position?Ct.position.set(pt.position[0],pt.position[1],pt.position[2]):Ct.position.set(3,2.5,3);var Wp=typeof window<"u"&&"XRWebGLBinding"in window;if(Wp)try{delete window.XRWebGLBinding}catch{window.XRWebGLBinding=void 0}var _e=new _S({antialias:!0,alpha:!0,powerPreference:"high-performance"});_e.setSize(innerWidth,innerHeight);_e.setPixelRatio(devicePixelRatio);_e.shadowMap.enabled=!0;_e.shadowMap.type=Ba;_e.outputColorSpace=Ut;_e.toneMapping=Hf[Jt.toneMapping]!=null?Hf[Jt.toneMapping]:bl;_e.toneMappingExposure=Jt.exposure!=null?Jt.exposure:1;(document.getElementById("root")||document.body).appendChild(_e.domElement);_e.xr.enabled=!0;_e.xr.setReferenceSpaceType("local");var yl=null,Xf=!1,vb=0;(function(){var e=document.createElement("button");e.id="VRButton",e.textContent="CHECKING VR…",e.style.cssText="position:absolute;bottom:20px;left:50%;transform:translateX(-50%);padding:12px 24px;border:1px solid #fff;border-radius:4px;background:rgba(0,0,0,0.6);color:#fff;font:13px sans-serif;letter-spacing:2px;cursor:pointer;z-index:99;";var t=null,n=new URLSearchParams(location.search).get("return")==="1",i=new URLSearchParams(location.search).get("ppshot")==="1",s=null;function a(){var p=document.createElement("div");p.id="xr-launch-overlay",p.style.cssText="position:fixed;inset:0;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:#0a0c10;text-align:center;";var S=document.createElement("div");S.textContent=Ke.title||"3D Viewer",S.style.cssText="color:#f1f5f9;font:600 24px Inter,sans-serif;letter-spacing:0.04em;";var y=document.createElement("div");y.textContent="Interactive 3D on the zSpace display",y.style.cssText="color:#94a3b8;font:13px Inter,sans-serif;margin-top:-10px;";var b=document.createElement("img");b.alt="",b.draggable=!1,b.style.cssText="width:min(46vw,420px);aspect-ratio:16/9;object-fit:cover;display:block;border-radius:14px;border:1px solid rgba(255,255,255,0.12);background:#14171c;pointer-events:none;margin-top:6px;",yl=function(T){b.src=T};var L=document.createElement("button");L.textContent="START 3D EXPERIENCE",L.style.cssText="margin-top:10px;padding:22px 46px;border:1px solid rgba(59,130,246,0.5);border-radius:10px;background:rgba(59,130,246,0.15);color:#93c5fd;font:600 18px Inter,sans-serif;letter-spacing:2px;cursor:pointer;";var P=document.createElement("div");P.style.cssText="color:#64748b;font:12px Inter,sans-serif;min-height:16px;max-width:420px;";var w=document.createElement("button");w.textContent="EXIT 3D",w.style.cssText="position:absolute;top:18px;right:18px;padding:12px 22px;display:none;border:1px solid rgba(239,68,68,0.55);border-radius:8px;background:rgba(239,68,68,0.15);color:#fca5a5;font:600 14px Inter,sans-serif;letter-spacing:1px;cursor:pointer;pointer-events:auto;",w.onclick=function(){t&&(window.WXRZ_USER_END=!0,t.end())},p.appendChild(w);var _=document.createElement("button");return _.textContent="← Back to course",_.style.cssText="margin-top:14px;padding:10px 18px;border:1px solid rgba(255,255,255,0.2);border-radius:6px;background:transparent;color:#94a3b8;font:13px Inter,sans-serif;cursor:pointer;",_.onclick=function(){window.close(),setTimeout(function(){_.textContent="Close this tab to return to the course"},400)},n||(_.style.display="none"),p.appendChild(S),p.appendChild(y),p.appendChild(b),p.appendChild(L),p.appendChild(P),p.appendChild(_),document.body.appendChild(p),{root:p,big:L,hint:P,exit:w,thumb:b,sub:y}}function o(p,S,y){s&&(s.root.style.display="flex",p!=null&&(s.big.textContent=p),s.hint.textContent=S||"")}var l=0,c=0;function h(){t=null;var p=l?performance.now()-l:0,S=!!window.WXRZ_USER_END;window.WXRZ_USER_END=!1;var y=!!window.WXRZ_HMD_NOTICE;if(window.WXRZ_HMD_NOTICE=!1,e.textContent="ENTER VR",s&&(s.root.style.pointerEvents="",s.exit.style.display="none"),p>1e4&&(c=0,window.WXRZ_LAST_BOUNCE_STATE=null),S?window.WXRZ_DROP_STATE=null:!window.WXRZ_BOUNCE&&!y&&p>=3e3&&(window.WXRZ_DROP_STATE=window.WXRZ_SNAPSHOT_FOR_BOUNCE?window.WXRZ_SNAPSHOT_FOR_BOUNCE():null,window.WXRZ_DROP_STATE&&console.log("[XR] session ended on its own after "+(p/1e3).toFixed(1)+"s -- scene snapshotted for the next RE-ENTER 3D")),window.WXRZ_BOUNCE){window.WXRZ_BOUNCE=!1,console.log("[XR] bounce: session ended, re-requesting for a fresh runtime tracker"),e.textContent="RE-SYNCING…",o("RE-SYNCING…","Please wait — re-syncing the stylus. 3D restarts by itself in a moment."),setTimeout(function(){m()},1500);return}var b=window.WXRZ_LAST_BOUNCE_STATE?1e4:3e3;!S&&p<b&&window.WXRZ_LAST_BOUNCE_STATE&&!window.WXRZ_BOUNCE_STATE&&(window.WXRZ_BOUNCE_STATE=window.WXRZ_LAST_BOUNCE_STATE);var L=window.WXRZ_LAST_BOUNCE_STATE?4:1;if(!S&&!y&&l&&p<b&&c<L){c++;var P=c===1?400:1e3*c;console.warn("[XR] session died "+Math.round(p)+"ms after start (weaver spin-up blip) — retrying automatically ("+c+"/"+L+", in "+P+" ms)"),e.textContent="RESTARTING…",o("RESTARTING…",window.WXRZ_LAST_BOUNCE_STATE&&!window.WXRZ_LAST_BOUNCE_STATE.afterDrop?"Please wait — re-syncing the stylus. 3D restarts by itself in a moment.":"The 3D system blinked — retrying automatically."),setTimeout(function(){m()},P);return}o("RE-ENTER 3D",y?"This 3D experience is designed for zSpace displays — a VR headset will not display it correctly.":window.WXRZ_FROZEN_HEAD?"Head tracking never moved that session — another app may be holding the 3D cameras. If Microsoft Teams is running, quit it fully (right-click its taskbar icon → Quit), then re-enter 3D.":"")}var u="wxrz-xr-session-ok";function d(){try{return localStorage.getItem(u)==="1"}catch{return!1}}function f(){try{localStorage.setItem(u,"1")}catch{}}async function m(){if(t){window.WXRZ_USER_END=!0,t.end();return}e.textContent="STARTING…",o("STARTING…","");var p=null;function S(y){return y&&(y.name==="NotAllowedError"||y.name==="SecurityError")&&!d()}try{p=await navigator.xr.requestSession("immersive-vr")}catch(y){if(S(y)){console.warn("XR permission not granted yet:",y),e.textContent="ENTER VR",o("START 3D EXPERIENCE",'Click "Allow" on the browser prompt, then press the button again.');return}console.warn("XR session request failed, retrying in 2s:",y),await new Promise(function(b){setTimeout(b,2e3)});try{p=await navigator.xr.requestSession("immersive-vr")}catch(b){if(S(b)){console.warn("XR permission not granted yet:",b),e.textContent="ENTER VR",o("START 3D EXPERIENCE",'Click "Allow" on the browser prompt, then press the button again.');return}console.error("Failed to start XR session (after retry):",b),e.textContent="VR FAILED — SEE CONSOLE",o("TRY AGAIN","Could not start 3D. Press to retry.");return}}try{t=p,p.addEventListener("end",h),await _e.xr.setSession(p),f(),l=performance.now(),window.WXRZ_USER_END=!1,window.WXRZ_BOUNCE=!1,window.WXRZ_BOUNCE_CAPPED=!1,window.WXRZ_BOUNCE_STATE=null,e.textContent="EXIT VR",o("3D RUNNING","The 3D experience is running · EXIT 3D (top right) ends it."),s&&(s.big.blur(),s.root.style.pointerEvents="none",s.exit.style.display="block")}catch(y){console.error("Failed to start XR session:",y),e.textContent="VR FAILED — SEE CONSOLE",o("TRY AGAIN","Could not start 3D. Press to retry."),t=null}}function x(p){var S=window.self!==window.top;if(console.warn("[XR] immersive-vr unavailable"+(p?": "+p:"")+(S?" (iframed — ancestor permissions policy likely blocks XR)":"")),!S){e.style.display="none",s||(s=a()),s.big.disabled=!0,s.big.style.cursor="default",s.big.style.borderColor="rgba(245,166,35,0.55)",s.big.style.background="rgba(245,166,35,0.10)",s.big.style.color="#f5a623",s.thumb.style.display="none",s.sub.style.display="none",yl=null,o("⚠  3D NOT AVAILABLE","This experience requires a zSpace 3D display, and none was found on this machine."+(n?"":" Please open this page on a zSpace system.")+" On a zSpace system, quit Microsoft Teams if it is running (right-click its taskbar icon → Quit) — Teams blocks the 3D tracking camera — then reload this page.");return}e.textContent="OPEN 3D VIEWER ⧉",e.disabled=!1,e.onclick=function(){var y=new URL(location.href);y.searchParams.set("embed","1"),y.searchParams.set("return","1"),window.open(y.href,"_blank","noopener")}}!i&&window.self===window.top&&(s=a(),s.big.disabled=!0,o("CHECKING 3D…",""));var g=document.getElementById("boot-cover");g&&g.remove(),navigator.xr?navigator.xr.isSessionSupported("immersive-vr").then(function(p){p?(e.textContent="ENTER VR",e.disabled=!1,e.onclick=m,i||(e.style.display="none",s||(s=a()),s.big.disabled=!1,s.big.onclick=m,o("START 3D EXPERIENCE",""))):x(null)}).catch(function(p){x(p)}):x("navigator.xr missing"),document.body.appendChild(e)})();var Vu=[];function et(r){Vu.push(r),console.log("[XR-DIAG] "+r)}(function(){try{et("userAgent: "+navigator.userAgent);var r=_e.getContext(),e=r.getExtension("WEBGL_debug_renderer_info");et("WebGL renderer: "+(e?r.getParameter(e.UNMASKED_RENDERER_WEBGL):r.getParameter(r.RENDERER))),et("navigator.xr present: "+!!navigator.xr),navigator.xr&&et("navigator.xr.requestSession native: "+/\[native code\]/.test(String(navigator.xr.requestSession))+"  (false = wrapped by an extension/polyfill)"),et("XRWebGLBinding was present before workaround: "+Wp),et("iframed: "+(window.self!==window.top)+(window.self!==window.top?"  (XR needs xr-spatial-tracking granted by EVERY ancestor frame)":""));try{var t=document.featurePolicy||document.permissionsPolicy;t&&t.allowsFeature&&et("permissions policy allows xr-spatial-tracking: "+t.allowsFeature("xr-spatial-tracking"))}catch{}}catch(n){et("startup diag failed: "+n.message)}})();function Xp(){var r=document.getElementById("xr-diag-overlay");r&&r.remove();var e=document.createElement("div");e.id="xr-diag-overlay",e.style.cssText="position:fixed;top:12px;left:12px;right:12px;max-height:70vh;overflow:auto;background:rgba(8,12,18,0.96);color:#9fe8ff;font:12px/1.5 monospace;padding:14px;z-index:1000;border:1px solid #2c4a63;border-radius:8px;white-space:pre-wrap;",e.textContent=`XR DIAGNOSTICS
──────────────
`+Vu.join(`
`);var t=document.createElement("div");t.style.cssText="margin-top:10px;display:flex;gap:8px;";var n=document.createElement("button");n.textContent="Copy to clipboard",n.style.cssText="padding:6px 12px;cursor:pointer;",n.onclick=function(){navigator.clipboard.writeText(Vu.join(`
`)).then(function(){n.textContent="Copied ✓"})};var i=document.createElement("button");i.textContent="Close",i.style.cssText="padding:6px 12px;cursor:pointer;",i.onclick=function(){e.remove()},t.appendChild(n),t.appendChild(i),e.appendChild(t),document.body.appendChild(e)}window.showXRDiag=Xp;window.addEventListener("keydown",function(r){if(r.ctrlKey&&r.shiftKey&&(r.key==="D"||r.key==="d")){r.preventDefault();var e=document.getElementById("xr-diag-overlay");e?e.remove():Xp()}});window.addEventListener("blur",function(){_e.xr.isPresenting&&et("window BLUR during session — something (weaver?) took OS focus; keyboard is dead until the page is clicked")});window.addEventListener("focus",function(){_e.xr.isPresenting&&et("window focus regained during session — keyboard live again")});var Gu=0;window.addEventListener("keydown",function(r){_e.xr.isPresenting&&Gu<40&&(Gu++,et('keydown reached page in session: "'+r.key+'" (target '+(r.target&&r.target.tagName)+", pageFocus "+document.hasFocus()+")"))},!0);var Hu=0,Wu=!1;window.addEventListener("pointerdown",function(r){_e.xr.isPresenting&&Hu<6&&(Hu++,et("pointerdown reached page in session at "+r.clientX+","+r.clientY+" (button "+r.button+") — click-to-refocus should work"))},!0);window.addEventListener("pointermove",function(){_e.xr.isPresenting&&!Wu&&(Wu=!0,et("pointermove reached page in session — mouse cursor path alive"))},!0);_e.xr.addEventListener("sessionstart",function(){try{var r=_e.xr.getSession();et("session started; toString: "+Object.prototype.toString.call(r)+" / constructor: "+(r.constructor?r.constructor.name:"?")+'  ("[object XRSession]" = native; "[object Object]" = polyfill)'),et("environmentBlendMode: "+r.environmentBlendMode),jr&&et("MONO CAPTURE MODE (?mono=1) — both eyes identical, screen reads 2D"),Gu=0,Hu=0,Wu=!1,et("page has OS focus at sessionstart: "+document.hasFocus());try{window.focus()}catch{}setTimeout(function(){et("page has OS focus +2.5s: "+document.hasFocus()+(document.hasFocus()?"":"  → W/S/ESC cannot work; click the screen once to refocus"))},2500),setTimeout(function(){try{var e=_e.xr.getCamera().cameras.length,t=r.renderState.baseLayer;et("eye cameras: "+e+(e===2?"  (stereo rendering ACTIVE)":"  (MONO — runtime gave one view)")),et("framebuffer: "+(t?t.framebufferWidth+"x"+t.framebufferHeight:"none"))}catch(n){et("camera query failed: "+n.message)}},1500)}catch(e){et("diag failed: "+e.message)}});_e.xr.addEventListener("sessionend",function(){et("session ended")});function ji(r,e){var t=new URLSearchParams(location.search).get(r),n=t==null?NaN:parseFloat(t);return isFinite(n)?n:e}var Vi=.17,Gi=.095,qp="wxrz-xr-tune-v2",Ws={};try{Ws=JSON.parse(localStorage.getItem(qp)||"{}")||{}}catch{}function Yp(r,e){return typeof r=="number"&&isFinite(r)?r:e}var kr=new Ge(typeof Ws.bg=="string"&&/^[0-9a-fA-F]{6}$/.test(Ws.bg)?"#"+Ws.bg:12765131);function xb(){try{localStorage.setItem(qp,JSON.stringify({size:_r,z:On.z,bg:kr.getHexString()}))}catch{}}var _r=ji("xrsize",Yp(Ws.size,.11)),On=new F(ji("xrx",0),ji("xry",0),ji("xrz",Yp(Ws.z,.03))),jp=function(){},Zp=function(){};(function(){var r=null,e=null;function t(){var s=!1;En&&Xn&&kn>0&&(En.time=0,Xn.update(0),s=!0);var a=new hn().setFromObject(ve),o=a.getSize(new F),l=Math.max(o.x,o.y,o.z)||1;ve.scale.multiplyScalar(_r/l),a.setFromObject(ve);var c=a.getCenter(new F);ve.position.add(On.clone().sub(c)),s&&(En.time=kn*co,Xn.update(0)),e={position:ve.position.clone(),scale:ve.scale.clone()}}jp=function(){!ve||!_e.xr.isPresenting||(r&&ve.quaternion.copy(r.quaternion),e?(ve.position.copy(e.position),ve.scale.copy(e.scale)):t())},Zp=function(){!ve||!_e.xr.isPresenting||t()};function n(){ve&&(r||(r={position:ve.position.clone(),quaternion:ve.quaternion.clone(),scale:ve.scale.clone(),grid:Jn?Jn.visible:!0}),t(),Jn&&(Jn.visible=!1))}function i(){!ve||!r||(ve.parent&&ve.parent!==kt&&kt.attach(ve),ve.position.copy(r.position),ve.quaternion.copy(r.quaternion),ve.scale.copy(r.scale),Jn&&(Jn.visible=r.grid),r=null)}_e.xr.addEventListener("sessionstart",n),_e.xr.addEventListener("sessionend",i)})();var yb=(function(){var r=parseFloat(new URLSearchParams(location.search).get("animsecs"));if(r>0)return r;var e=parseFloat(Ke.valveAnimSeconds);return e>0?e:2.5})(),Wi=null;function Kp(r){En&&(Wi={from:kn,to:r,start:performance.now()})}var $p=function(){Kp(Wi?Wi.to===1?0:1:kn>.5?0:1)};function Mb(){if(!(!Wi||!En)){var r=Math.min((performance.now()-Wi.start)/(yb*1e3),1),e=r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2;kn=Wi.from+(Wi.to-Wi.from)*e,En.time=kn*co,Xn.update(0),Mr&&(Mr.value=kn,Mr.style.setProperty("--pct",kn*100+"%")),r===1&&(Wi=null)}}window.toggleValveAnim=$p;var zr=new Set,Qp=function(){};(function(){var r=new wp,e=2,t=[],n=3112959,i=16763955,s=65416,a=14824500,o=new Le,l=new F,c=new nt,h=new nt,u=new F,d=new F,f=new F,m=new F,x=new nt,g=new nt,p=new nt,S=new F(0,1,0),y=null,b=null,L=!1,P=/^(1|true)$/i.test(new URLSearchParams(location.search).get("zspace")||""),w=new nt,_=0,T=0,j=0,D=0,k=0,H=0,K=24,q=120,X=6,W=2e3,oe=4,re=new URLSearchParams(location.search).get("autobounce")==="1",pe=6e3,ge=[],Se=0;function qe(){return performance.now()-T<pe}function Tt(M){for(var A=performance.now();ge.length&&A-ge[0]>6e4;)ge.shift();var O=W*Math.pow(2,ge.length);return M==="press"?0:O}var ut=!1,ne=0,he=3e3,ce=0;function $e(M,A){var O=performance.now();window.WXRZ_MANUAL_START&&(window.WXRZ_MANUAL_START=!1,ge.length=0,window.WXRZ_BOUNCE_CAPPED=!1);var V=_e.xr.getSession();if(!V)return!1;if(window.WXRZ_BOUNCE){if(O-ne<4e3)return!1;console.log("[stylus] bounce started "+((O-ne)/1e3).toFixed(1)+"s ago and the session never ended -- clearing the flag, trying again"),window.WXRZ_BOUNCE=!1}if(A==="press"&&(ut=!0),ut&&(A="press"),M<Tt(A))return!1;if(qe())return Se!==T&&(Se=T,console.log("[stylus] gated "+(M/1e3).toFixed(1)+"s ("+A+") but the session is only "+((performance.now()-T)/1e3).toFixed(1)+"s old -- holding the bounce until "+pe/1e3+"s (young-session teardown crashes the runtime handler)")),!1;if(A==="press"&&ge.length>=oe&&(console.log("[stylus] press overrides the bounce cap ("+ge.length+" this minute)"),ge.length=0,window.WXRZ_BOUNCE_CAPPED=!1),ge.length>=oe){if(!window.WXRZ_BOUNCE_CAPPED){window.WXRZ_BOUNCE_CAPPED=!0;var I="[stylus] bounce cap reached ("+oe+"/min) -- STUCK: telling the user to exit and re-enter";console.log(I),et(I)}return!1}ge.push(O);var N="[stylus] gated "+(M/1e3).toFixed(1)+"s ("+A+") -- BOUNCING the session ("+ge.length+"/"+oe+" this minute) so the runtime rebuilds its tracker";return console.log(N),et(N),mt&&C("bounce "+A,300),window.WXRZ_BOUNCE=!0,ne=O,ut=!1,window.WXRZ_BOUNCE_STATE=window.WXRZ_SNAPSHOT_FOR_BOUNCE?window.WXRZ_SNAPSHOT_FOR_BOUNCE():null,window.WXRZ_USER_END=!1,V.end(),!0}for(var ke=0,He=0,zt=0,it=0,mt=new URLSearchParams(location.search).get("stylusdbg")==="1",gt=900,ze={i:0,n:0,e:[]},jt=0;jt<gt;jt++)ze.e.push({});var U=0,Ht=0,dt=[],wt=new en;function Ie(M,A,O,V,I,N){var J=ze.e[ze.i];return ze.i=(ze.i+1)%gt,ze.n<gt&&ze.n++,J.f=++Ht,J.t=O,J.ci=A,J.x=V.x,J.y=V.y,J.z=V.z,J.qx=I.x,J.qy=I.y,J.qz=I.z,J.qw=I.w,wt.setFromQuaternion(I,"YXZ"),J.yaw=wt.y*57.2958,J.pitch=wt.x*57.2958,J.roll=wt.z*57.2958,J.dP=N.dP,J.dQ=N.dQ,J.jump=N.jump,J.qJump=N.qJump,J.live=N.live,J.sus=N.sus,J.susN=N.susN,J.ph=N.ph,J.pf=N.pf,J.gate=N.gate,J.gBad=N.gBad,J.gGood=N.gGood,J.parkedN=N.parkedN,J.probe=N.probe,J.btns=N.btns,J.grab=N.grab,J.beam=N.beam,J.dil=N.dil,J.dilOn=N.dilOn,J.gateSince=N.gateSince||0,dt[A]=J,J}function C(M,A){for(var O=Math.min(ze.n,A||ze.n),V=["f,t_ms,ci,x,y,z,qx,qy,qz,qw,yaw,pitch,roll,dP_mm,dQ_deg,jump_cm,qJump_deg,live,suspect,susN,phantom,parkedFlip,gate,gBad,gGood,parkedN,probe,btns,grab,beam,dilOn,dilSub"],I=O;I>=1;I--){var N=ze.e[(ze.i-I+gt*2)%gt];V.push([N.f,N.t.toFixed(0),N.ci,N.x.toFixed(4),N.y.toFixed(4),N.z.toFixed(4),N.qx.toFixed(4),N.qy.toFixed(4),N.qz.toFixed(4),N.qw.toFixed(4),N.yaw.toFixed(1),N.pitch.toFixed(1),N.roll.toFixed(1),N.dP.toFixed(1),N.dQ.toFixed(1),N.jump.toFixed(1),N.qJump.toFixed(1),+N.live,+N.sus,N.susN,+N.ph,+N.pf,+N.gate,N.gBad,N.gGood,N.parkedN,N.probe,N.btns,+N.grab,+N.beam,+N.dilOn,+N.dil].join(","))}return console.log("[stylus-trace] "+(M||"manual")+" ("+O+` frames)
`+V.join(`
`)),V.length-1}window.dumpStylusTrace=function(M){return C("manual",M)};var v=0,G="";function ie(M){var A=performance.now();A-U<1e4||(U=A,v=Ht+180,G=M)}function se(){v&&Ht>=v&&(v=0,C(G+" (+1.5s)",480))}function ee(M){var A=M.userData.spikeLogN=(M.userData.spikeLogN||0)+1;return A<=20||A%100===0}function Ce(M,A,O){var V=M.userData.poseHist;if(!V){V=M.userData.poseHist={i:0,n:0,e:[]};for(var I=0;I<K;I++)V.e.push({t:0,p:new F})}var N=V.e[V.i];N.t=A,N.p.copy(O),V.i=(V.i+1)%K,V.n<K&&V.n++}function me(M,A,O){var V=M.userData.poseHist;if(!V||V.n<2)return 0;for(var I=null,N=1;N<=V.n;N++){var J=V.e[(V.i-N+K*2)%K];if(A-J.t>q)break;I=J}return!I||A-I.t<8?0:O.distanceTo(I.p)/((A-I.t)/1e3)}var Oe=1.75,Xe=450;function le(M){var A=Vi*.7,O=Gi*.7;M.x=Math.min(On.x+A,Math.max(On.x-A,M.x)),M.y=Math.min(On.y+O,Math.max(On.y-O,M.y)),M.z=Math.min(.1,Math.max(On.z-.3,M.z))}var de=new URLSearchParams(location.search).get("xrui")||"screen",be=[],Re=5600,Ee=2;function ue(M){return M/Re}var B='Inter, "Segoe UI", system-ui, sans-serif',te={accent:"#2f7fff",accentRGB:"47,127,255",redRGB:"226,52,52",text:"#e8eaed",muted:"#c2c7cd",bodyText:"#c6cbd1",glass:"rgba(18,20,24,0.72)",glassSoft:"rgba(18,20,24,0.92)",modal:"rgba(20,23,28,0.94)",border:"rgba(255,255,255,0.08)",radius:16,edge:16},fe=document.createElement("canvas").getContext("2d");function Te(M,A,O){return fe.font=(O||400)+" "+A+"px "+B,fe.measureText(M).width}function ae(M,A,O){M.font=(O||400)+" "+A+"px "+B}function Q(M,A,O){var V=document.createElement("canvas");V.width=Math.max(2,Math.round(M*Re*Ee)),V.height=Math.max(2,Math.round(A*Re*Ee));var I=new Va(V),N=new Xt(new $s(M,A),new Hr({map:I,transparent:!0,depthTest:!1}));return N.renderOrder=998,N.userData.redraw=function(){var J=V.getContext("2d");J.setTransform(Ee,0,0,Ee,0,0),J.clearRect(0,0,M*Re,A*Re),O(J,M*Re,A*Re),I.needsUpdate=!0},N.userData.redraw(),N}function we(M,A,O,V){V=V||{};var I=Math.min(V.r!=null?V.r:te.radius,(O-1)/2);M.beginPath(),M.roundRect(.5,.5,A-1,O-1,I),M.fillStyle=V.fill||te.glass,M.fill(),M.lineWidth=1,M.strokeStyle=V.stroke||te.border,M.stroke()}var Qe=ue(96);function St(M,A,O,V,I,N,J,R,Ve){var Je=!1,at=!1,xt=ue(A),yt=ue(O),Lt=J?ue(J):Math.max(xt,Qe),an=Q(xt,yt,function(Nt,Bt,$t){var on=Je||at;we(Nt,Bt,$t,{r:999,fill:on?"rgba("+V+",0.14)":"rgba(255,255,255,0.04)",stroke:on?"rgba("+V+",0.8)":te.border}),Nt.fillStyle=on?"#ffffff":I,typeof M=="function"?M(Nt,Bt,$t,Nt.fillStyle):(ae(Nt,Ve||12.5,500),Nt.textAlign="center",Nt.textBaseline="middle",Nt.fillText(M,Bt/2,$t/2+.5))}),Kt=new Xt(new $s(Lt,R?ue(R):Math.max(yt,Qe)),new Hr({colorWrite:!1,depthWrite:!1,transparent:!0}));return Kt.add(an),Kt.userData.onClick=N,Kt.userData.setHover=function(Nt){Nt!==Je&&(Je=Nt,an.userData.redraw())},Kt.userData.setActive=function(Nt){Nt!==at&&(at=Nt,an.userData.redraw())},be.push(Kt),Kt}var We=new pi;We.name="xr-ui-rail",We.visible=!1;function ri(M,A,O){for(var V=String(A).split(/\s+/),I=[],N="",J=0;J<V.length;J++){var R=N?N+" "+V[J]:V[J];M.measureText(R).width>O&&N?(I.push(N),N=V[J]):N=R}return N&&I.push(N),I}var si={body:"#d4c400",bonnet:"#d4c400",gate:"#2f7fff",gland:"#e23434",stem:"#9aa0a6",packing:"#d48f00",handwheel:"#d4c400",seat:"#3dbf7a",nut:"#3a3f45"};function la(M){return M&&(M.color||si[M.id])||te.accent}var Ji=400,wn=24,es=22,Cr=10,ai=wn+26+14+Cr*es+wn,An=null,Pt=Q(ue(Ji),ue(ai),function(M,A,O){if(An){ae(M,14,400);var V=ri(M,An.description||"",A-wn*2);V.length>Cr&&(V=V.slice(0,Cr),V[Cr-1]+="…");var I=wn+26+14+V.length*es+wn;we(M,A,I,{r:18,fill:te.modal,stroke:"rgba(255,255,255,0.10)"}),M.beginPath(),M.roundRect(wn,wn+4,18,18,5),M.fillStyle=la(An),M.fill(),M.fillStyle=te.text,ae(M,19,700),M.textAlign="left",M.textBaseline="middle",M.fillText(An.title||An.label||"",wn+18+10,wn+13),M.fillStyle=te.bodyText,ae(M,14,400),M.textBaseline="alphabetic";for(var N=0;N<V.length;N++)M.fillText(V[N],wn,wn+26+14+(N+.75)*es)}});Pt.visible=!1,Pt.userData.onClick=function(){},Pt.userData.setHover=function(){},be.push(Pt);var ts=St("✕",30,30,te.accentRGB,te.muted,function(){er()});ts.position.set(ue(Ji/2-wn-15),ue(ai/2-wn-15),1e-4),ts.children[0].renderOrder=999,Pt.add(ts);var Ii=1.3;Pt.scale.setScalar(Ii);var ca=new Hi,xn=new F,ua=new F;function ha(M,A){xn.copy(A.point),We.worldToLocal(xn),M.userData.cardDrag={dx:Pt.position.x-xn.x,dy:Pt.position.y-xn.y,moved:0}}function fo(M){var A=M.userData.cardDrag;if(o.identity().extractRotation(M.matrixWorld),r.ray.origin.setFromMatrixPosition(M.matrixWorld),r.ray.direction.set(0,0,-1).applyMatrix4(o),ua.set(0,0,1).transformDirection(We.matrixWorld),Pt.getWorldPosition(xn),ca.setFromNormalAndCoplanarPoint(ua,xn),!r.ray.intersectPlane(ca,xn))return 0;var O=r.ray.origin.distanceTo(xn);We.worldToLocal(xn);var V=ue(Ji)*Ii/2,I=ue(ai)*Ii/2,N=sn.clamp(xn.x+A.dx,-Vi+V,Vi-V),J=sn.clamp(xn.y+A.dy,-Gi+I,Gi-I);return A.moved+=Math.abs(N-Pt.position.x)+Math.abs(J-Pt.position.y),Pt.position.x=N,Pt.position.y=J,O}function po(M,A){var O=M.userData.cardDrag;M.userData.cardDrag=null,O&&O.moved>.005&&console.log("[card] "+A+" drag released -- card moved to ("+(Pt.position.x*100).toFixed(1)+", "+(Pt.position.y*100).toFixed(1)+") cm")}function mo(M){An=M,Pt.userData.redraw(),Pt.visible=!0}function er(){An=null,Pt.visible=!1}function Pl(){return ve?(ve.parent&&ve.parent!==kt&&kt.attach(ve),{position:ve.position.clone(),quaternion:ve.quaternion.clone(),scale:ve.scale.clone(),modalDef:An,cardPos:Pt.position.clone(),autoRotate:_t}):null}function go(M,A){!M||!ve||(ve.position.copy(M.position),ve.quaternion.copy(M.quaternion),ve.scale.copy(M.scale),M.cardPos&&Pt.position.copy(M.cardPos),M.modalDef&&mo(M.modalDef),_t=!!M.autoRotate,Wt.userData.setActive(_t),pn(),console.log("[XR] "+(A||"bounce")+": scene restored (model pose, "+(M.modalDef?"card open, ":"no card, ")+"orbit "+(_t?"on":"off")+")"))}window.WXRZ_SNAPSHOT_FOR_BOUNCE=Pl;function E(M){if(!M){er(),ta(null);return}if(An&&An.id===M){er();return}var A=(Ke.parts||[]).find(function(O){return O.id===M});A&&(ta(M),zr.add(M),mo(A))}var z=null;function $(M,A){!M||M===Sn||yr(M).forEach(function(O){O.material&&O.material.emissive&&(O.material.emissive.setHex(6333946),O.material.emissiveIntensity=A)})}var Z=44,Y=22,ye=22,Ae=(Ke.title||"3D Viewer").toUpperCase(),xe=(Ke.parts||[]).length,De=Te(Ae,15,700),Fe=17+De,tt=Te("Explored ",12.5,400),st=tt+Te(xe+" / "+xe,12.5,600),Ne=Y+Fe+ye+st+Y,vt=Q(ue(Ne),ue(Z),function(M,A,O){we(M,A,O,{r:999});var V=Y,I=O/2;M.fillStyle=te.accent,M.beginPath(),M.arc(V+4.5,I,4.5,0,Math.PI*2),M.fill(),V+=17,M.textAlign="left",M.textBaseline="middle",M.fillStyle=te.text,ae(M,15,700),M.fillText(Ae,V,I+.5),V+=De+ye,M.fillStyle=te.muted,ae(M,12.5,400),M.fillText("Explored ",V,I+.5),M.fillStyle=te.text,ae(M,12.5,600),M.fillText(zr.size+" / "+xe,V+tt,I+.5)}),Et=1.44;vt.scale.setScalar(Et),vt.position.set(0,Gi-ue(te.edge)-ue(Z)*Et/2,0),We.add(vt);var _t=!1,ft=null,tn=0,Pe=!1;function pn(){if(ve&&!(kn>.01&&ft)){var M=new hn().setFromObject(ve).getCenter(new F);ft=ve.worldToLocal(M)}}var je=40,Fn=56,zn=240,mn=Q(ue(Fn),ue(zn),function(M,A,O){we(M,A,O,{r:999})});mn.userData.onClick=function(){},mn.userData.setHover=function(){},be.push(mn);var Mi=St("↺",je,je,te.accentRGB,"#ffffff",function(){Mm()},je+8,je+8,20);Mi.position.set(0,ue(84),1e-4),Mi.children[0].renderOrder=999,mn.add(Mi);function It(M,A,O,V){var I=A/2,N=O/2;M.strokeStyle=V,M.fillStyle=V,M.lineWidth=1.6,M.beginPath(),M.arc(I,N,4,0,Math.PI*2),M.fill(),M.save(),M.translate(I,N),M.rotate(-.5),M.beginPath(),M.ellipse(0,0,11,4.5,0,0,Math.PI*2),M.stroke(),M.beginPath(),M.arc(11,0,2,0,Math.PI*2),M.fill(),M.restore()}var Wt=St(It,je,je,te.accentRGB,"#ffffff",function(){_t=!_t,Wt.userData.setActive(_t),console.log("[orbit] toggled "+(_t?"ON":"OFF")),_t&&(pn(),tn=performance.now())},je+8,je+8,20);Wt.position.set(0,ue(28),1e-4),Wt.children[0].renderOrder=999,mn.add(Wt);var Zn=null,Zt=St("i",je,je,te.accentRGB,"#ffffff",function(){Zn&&Zn()},je+8,je+8,20);Zt.position.set(0,-ue(28),1e-4),Zt.children[0].renderOrder=999,Zt.visible=!1,mn.add(Zt);var Rn=St("✕",je,je,te.redRGB,"#ff8a8a",function(){var M=_e.xr.getSession();M&&(window.WXRZ_USER_END=!0,M.end())},je+8,je+8,20);Rn.name="xr-exit-button",Rn.position.set(0,-ue(84),1e-4),Rn.children[0].renderOrder=999,mn.add(Rn);var Si=1.35;mn.scale.setScalar(Si),mn.position.set(ji("exitx",Vi-ue(te.edge)-ue(Fn)*Si/2),ji("exity",Gi-ue(te.edge)-ue(zn)*Si/2),0),We.add(mn),Pt.position.set(Vi-ue(te.edge)-ue(Ji)*Ii/2,0,0),We.add(Pt);for(var Dr=[{t:"tap",a:!0},{t:" a part to read",a:!1},{t:"   ·   ",a:!1},{t:"hold",a:!0},{t:" to grab & turn",a:!1},{t:"   ·   ",a:!1},{t:"blue",c:"#5ab0ff"},{t:" explodes",a:!1},{t:"   ·   ",a:!1},{t:"orange",c:"#f5a623"},{t:" isolates",a:!1},{t:"   ·   ",a:!1},{t:"✕",c:"#f87171"},{t:" exits · top right",a:!1}],Fh=[{t:"stylus not tracked",c:"#f5a623"},{t:"   ·   hold it up in front of the screen, tip toward the glass",a:!1}],Nh=[{t:"stylus lost",c:"#f5a623"},{t:"   ·   re-syncing 3D…",a:!1}],om=[{t:"stylus not seen",c:"#f5a623"},{t:"   ·   hold it up in front of the screen, tip toward the glass",a:!1}],lm=[{t:"stylus lost",c:"#f87171"},{t:"   ·   press the center button to restart 3D, or ESC to leave",a:!1}],oi=Dr,Uh=0,Il=0;Il<Dr.length;Il++)Uh+=Te(Dr[Il].t,12,400);var Oh=30,cm=Uh+32,da=Q(ue(cm),ue(Oh),function(M,A,O){we(M,A,O,{r:999,fill:"rgba(18,20,24,0.6)"}),M.textAlign="left",M.textBaseline="middle",ae(M,12,400);for(var V=0,I=0;I<oi.length;I++)V+=Te(oi[I].t,12,400);for(var N=Math.max(16,(A-V)/2),J=0;J<oi.length;J++)M.fillStyle=oi[J].c||(oi[J].a?te.accent:te.muted),M.fillText(oi[J].t,N,O/2+.5),N+=Te(oi[J].t,12,400)});function _o(M){var A=M==="reacquire"?Fh:M==="bounce"?Nh:M==="unseen"?om:M==="stuck"?lm:Dr;A!==oi&&(oi=A,da.userData.redraw(),vo=M,tr.visible=!!Bh[M],tr.visible&&tr.userData.redraw())}da.scale.setScalar(Et),da.position.set(0,-Gi+ue(te.edge)+ue(Oh)*Et/2,0),We.add(da);var um=460,hm=96,vo="legend",ns=-1,Bh={reacquire:{title:"Stylus re-syncing — please wait",c:"#f5a623",lines:["Hold the stylus up in front of the screen and move it gently.","Or press the big center button to restart 3D now."]},unseen:{title:"Stylus not seen by the cameras",c:"#f5a623",lines:["Hold the stylus up in front of the screen, tip toward the glass.","Tracking resumes on its own once the cameras see it."]},bounce:{title:"Restarting 3D to re-sync the stylus",c:"#f5a623",lines:["The screen will blink for a second — keep the stylus up.","The model comes back where you left it."]},stuck:{title:"Stylus could not re-sync",c:"#f87171",lines:["Press the big center button to restart 3D,","or press ESC to leave 3D and re-enter with the button."]}},tr=Q(ue(um),ue(hm),function(M,A,O){var V=Bh[vo];V&&(we(M,A,O,{r:16}),M.textAlign="center",M.textBaseline="top",M.fillStyle=V.c,ae(M,18,700),M.fillText(ns>0&&vo==="bounce"?"Restarting 3D in "+ns+" s to re-sync the stylus":ns>0&&vo==="reacquire"?"Stylus re-syncing — 3D restarts in "+ns+" s":V.title,A/2,14),M.fillStyle=te.bodyText,ae(M,13,400),M.fillText(V.lines[0],A/2,48),M.fillText(V.lines[1],A/2,68))});tr.visible=!1,tr.scale.setScalar(Et),tr.position.set(0,Gi*.45,.02),We.add(tr);var kh=332,nr=10,Ll=300,dm=150,zh=14,fm=8,Vh=56,Gh=40,Fl=8,pm=nr+fm*zh+8+Vh+6+Gh+6+Fl+4+nr,Nl='Consolas, "Cascadia Mono", "Courier New", monospace',Nn=null,is=-1;function Hh(){return Nn||(Nn=Q(ue(kh),ue(pm),gm),Nn.frustumCulled=!1,Nn.renderOrder=999,Nn.scale.setScalar(Et),Nn.position.set(-Vi+ue(te.edge)+ue(kh)*Et/2,.01,0),We.add(Nn),Nn)}function mm(M,A){for(var O=[],V=1;V<=ze.n&&O.length<A;V++){var I=ze.e[(ze.i-V+gt*2)%gt];I.ci===M&&O.push(I)}return O.reverse()}function nn(M,A,O){for(var V=typeof M=="number"?M.toFixed(A):String(M);V.length<O;)V=" "+V;return V}function gm(M,A,O){we(M,A,O,{r:12,fill:"rgba(18,20,24,0.80)"}),M.textAlign="left",M.textBaseline="top",M.font="400 11.5px "+Nl;var V=is<0?0:is,I=dt[V],N=nr,J=nr;function R(cn,Vn){M.fillStyle=Vn||te.text,M.fillText(cn,J,N),N+=zh}if(!I){R("STYLUS DBG  waiting for controller frames",te.muted);return}for(var Ve=mm(V,dm),Je=0,at=0,xt=0,yt=0;yt<Ve.length;yt++)!Ve[yt].sus&&!Ve[yt].gate&&Je++,(Ve[yt].dQ>20||Ve[yt].dP>200)&&at++,Ve[yt].dP<.5&&Ve[yt].dQ<.1&&xt++;var Lt=(I.t-T)/1e3,an=Ve.length>10?(Ve.length-1)*1e3/Math.max(1,Ve[Ve.length-1].t-Ve[0].t):0,Kt=I.gate&&I.gateSince?((I.t-I.gateSince)/1e3).toFixed(1)+"s":"";R("STYLUS DBG c"+V+"  live:"+(I.live?"Y":"n")+" beam:"+(I.beam?"Y":"n")+" grab:"+(I.grab?"Y":"n")+"  probe:"+I.probe,I.gate?"#f87171":te.text),R("pos cm  x"+nn(I.x*100,1,7)+"  y"+nn(I.y*100,1,7)+"  z"+nn(I.z*100,1,7)),R("rot deg yaw"+nn(I.yaw,0,5)+"  pitch"+nn(I.pitch,0,5)+"  roll"+nn(I.roll,0,5)),R("d/frame pos"+nn(I.dP,1,7)+"mm  rot"+nn(I.dQ,1,6)+"deg   fps"+nn(an,0,3),I.dQ>20||I.dP>200?"#f5a623":te.text),R("guard   sus"+nn(I.susN,0,2)+" jump"+nn(I.jump,1,6)+"cm/"+nn(I.qJump,0,4)+"deg  ph:"+(I.ph?"Y":"-")+" pf:"+(I.pf?"Y":"-")+" dil:"+(I.dilOn?I.dil?"S":"L":"-"),I.sus?"#f5a623":I.dilOn?"#c084fc":te.text),R("gate    "+(I.gate?"ON "+Kt:"off")+"  bad"+nn(I.gBad,0,3)+" good"+nn(I.gGood,0,4)+" parkedN"+nn(I.parkedN,0,4),I.gate?"#f87171":te.text),R("150f    acc"+nn(Je,0,4)+"  flips"+nn(at,0,4)+"  parked"+nn(xt,0,4)+"  age"+nn(Lt,1,6)+"s"),R("bounce "+ge.length+"/"+oe+" wait"+nn(Tt("auto")/1e3,0,3)+"s pend:"+(ut?"Y":"-")+" cap:"+(window.WXRZ_BOUNCE_CAPPED?"Y":"-")+" hlth"+nn(ce?(I.t-ce)/1e3:0,1,5)+"s  btn:"+I.btns,window.WXRZ_BOUNCE_CAPPED?"#f87171":te.text),N+=8;var Nt=nr+(Ll-Ve.length*2);function Bt(cn,Vn,Vt,Fi,sr,ar){M.fillStyle="rgba(255,255,255,0.05)",M.fillRect(nr,N,Ll,cn);var os=N+cn-Math.min(1,Fi/Vt)*cn;M.fillStyle="rgba(248,113,113,0.6)",M.fillRect(nr,Math.round(os),Ll,1),M.fillStyle=ar;for(var Kn=0;Kn<Ve.length;Kn++){var At=Ve[Kn][Vn],$n=Math.max(1,Math.round(Math.min(1,At/Vt)*cn));M.fillRect(Nt+Kn*2,N+cn-$n,2,$n)}M.fillStyle=te.muted,M.font="400 9px "+Nl,M.fillText(sr,nr+3,N+1),M.font="400 11.5px "+Nl,N+=cn+6}Bt(Vh,"dQ",180,20,"d-rot/frame   red line = 20deg gate   top 180deg","#f5a623"),Bt(Gh,"dP",500,200,"d-pos/frame   red line = 20cm gate    top 50cm","#2f7fff");for(var $t=0;$t<Ve.length;$t++){var on=Ve[$t];M.fillStyle=on.ph?"#c084fc":on.dil?"#e9d5ff":on.dP<.5&&on.dQ<.1?"#6b7280":on.gate?"#f87171":on.sus?"#f5a623":"#3dbf7a",M.fillRect(Nt+$t*2,N,2,Fl),on.btns&&(M.fillStyle="#ffffff",M.fillRect(Nt+$t*2,N-3,2,2))}N+=Fl}function Wh(){if(se(),!mt){Nn&&(Nn.visible=!1);return}if(Hh(),Nn.visible=!0,Ht%4===0){is=-1;for(var M=0;M<dt.length;M++)if(dt[M]&&dt[M].live){is=M;break}if(is<0){for(var A=0;A<dt.length;A++)if(dt[A]){is=A;break}}Nn.userData.redraw()}}window.stylusDebug=function(M){return mt=M!==!1,mt};function _m(M){for(var A={userData:{},matrixWorld:new Le,matrix:new Le,position:new F},O=new F,V=new nt,I=[],N=0;N<M.length;N++){var J=M[N];O.set(+J.x,+J.y,+J.z),V.set(+J.qx,+J.qy,+J.qz,+J.qw).normalize(),A.matrixWorld.makeRotationFromQuaternion(V).setPosition(O);var R=ed(A,9,1e3+N*17,O),Ve=A.userData.dil,Je=R?Ve.livePos:O;I.push({on:!!(Ve&&Ve.on),sub:R,px:Je.x,py:Je.y,pz:Je.z})}return I}window.WXRZ_STYLUS_DBG={record:Ie,tick:Wh,ensure:Hh,panel:function(){return Nn},trace:ze,dump:C,replay:_m};var Xh=Ke.brand||{};Xh.logoWhite&&(function(){var M=400,A=24,O=M-A*2,V=!1,I=new Image;I.onload=function(){V=!0,J.userData.redraw()},I.src=Xh.logoWhite;var N=A+Math.round(O/3.14)+18+26+A,J=Q(ue(M),ue(N),function(R,Ve,Je){we(R,Ve,Je,{r:16});var at=A;V&&R.drawImage(I,A,at,O,O*(I.height/I.width)),at+=Math.round(O/3.14)+18,R.textAlign="center",R.textBaseline="top",R.fillStyle=te.text,ae(R,17,700),R.fillText(Ke.version||"",Ve/2,at)});J.visible=!1,J.userData.onClick=function(){J.visible=!1},J.userData.setHover=function(){},be.push(J),J.scale.setScalar(Et),J.position.set(0,0,.03),We.add(J),Zn=function(){J.visible=!J.visible,J.visible&&J.userData.redraw()},Zt.visible=!0})(),!Ah&&new URLSearchParams(location.search).get("tune")==="1"&&(function(){var M=176,A=26,O=12,V=(M-O)/2,I=Q(ue(M),ue(A),function(Lt,an,Kt){we(Lt,an,Kt,{r:999,fill:"rgba(18,20,24,0.6)"}),Lt.textAlign="center",Lt.textBaseline="middle",Lt.fillStyle=te.text,ae(Lt,11,600),Lt.fillText("z "+(On.z>=0?"+":"")+On.z.toFixed(2)+"   ·   "+Math.round(_r*100)+" cm   ·   #"+kr.getHexString(),an/2,Kt/2+.5)});function N(Lt){On.z=Math.min(.1,Math.max(-.3,On.z)),_r=Math.min(.4,Math.max(.05,_r)),Zp(),I.userData.redraw(),xb(),et("tune ("+Lt+"): xrz="+On.z.toFixed(3)+" xrsize="+_r.toFixed(3)+" xrbg="+kr.getHexString())}var J={h:0,s:0,l:0};function R(Lt){kr.getHSL(J),kr.setHSL(J.h,J.s,Math.min(.88,Math.max(.06,J.l+Lt))),N("bg")}function Ve(Lt,an){return St(Lt,V,A,te.accentRGB,"#d8dbdf",an,V+4,A+O)}var Je=[[Ve("◄ BACK",function(){On.z-=.02,N("depth")}),Ve("FWD ►",function(){On.z+=.02,N("depth")})],[Ve("SMALLER",function(){_r*=.87,N("size")}),Ve("BIGGER",function(){_r/=.87,N("size")})],[Ve("BG −",function(){R(-.05)}),Ve("BG +",function(){R(.05)})]],at=new pi;at.name="xr-tune-panel",I.position.set(0,ue((A+O)*1.5),0),at.add(I);for(var xt=0;xt<Je.length;xt++){var yt=ue((A+O)*(.5-xt));Je[xt][0].position.set(-ue((V+O)/2),yt,1e-4),Je[xt][1].position.set(ue((V+O)/2),yt,1e-4),Je[xt][0].children[0].renderOrder=999,Je[xt][1].children[0].renderOrder=999,at.add(Je[xt][0]),at.add(Je[xt][1])}at.scale.setScalar(Et),at.position.set(-Vi+ue(te.edge)+ue(M)*Et/2,0,0),We.add(at)})();var Ul=26,vm=44,fa=9,ir=new pi;ir.name="xr-part-labels",ir.visible=!1,kt.add(ir);var pa=[];(Ke.parts||[]).forEach(function(M){var A=M.label||M.title||M.id,O=Te(A,12.5,500),V=27+O+11,I=fa+V,N=0,J=Q(ue(I),ue(vm),function(R,Ve,Je){var at=(Je-Ul)/2,xt=Je/2;R.strokeStyle="rgba(255,255,255,0.35)",R.lineWidth=1,R.beginPath(),R.moveTo(0,xt),R.lineTo(fa,xt),R.stroke(),R.beginPath(),R.roundRect(fa+.5,at+.5,V-1,Ul-1,Ul/2),R.fillStyle=N===2?"rgba("+te.accentRGB+",0.22)":N===1?"rgba(30,34,40,0.82)":te.glassSoft,R.fill(),R.lineWidth=1,R.strokeStyle=N===2?"rgba("+te.accentRGB+",0.8)":N===1?"rgba(255,255,255,0.22)":"rgba(255,255,255,0.10)",R.stroke();var yt=fa+11+4.5;N===2&&(R.beginPath(),R.arc(yt,xt,7,0,Math.PI*2),R.fillStyle="rgba("+te.accentRGB+",0.35)",R.fill()),R.beginPath(),R.arc(yt,xt,4.5,0,Math.PI*2),R.fillStyle=la(M),R.fill(),R.fillStyle=N?"#ffffff":"#d6d9dd",ae(R,12.5,500),R.textAlign="left",R.textBaseline="middle",R.fillText(A,fa+11+9+7,xt+.5)});J.geometry.translate(ue(I)/2,0,0),J.scale.setScalar(1.3),J.renderOrder=997,J.visible=!1,J.userData.onClick=function(){E(M.id)},J.userData.setHover=function(){},be.push(J),ir.add(J),pa.push({pid:M.id,mesh:J,meshRef:null,state:0,setState:function(R){N=R,J.userData.redraw()}})});var rr=new Xt(new xl(7e-4,7e-4,1,6,1,!0),new Hr({color:16777215,transparent:!0,opacity:.35,depthTest:!1,depthWrite:!1}));rr.renderOrder=996,rr.visible=!1,ir.add(rr);var Ol=new F,Bl=new F,kl=new F,xm=new F(0,1,0),qh=-1,Yh=new hn;function ym(M,A,O,V){rr.visible=!1;for(var I=0;I<pa.length;I++){var N=pa[I];if(!N.meshRef&&ve){var J=yr(N.pid);N.meshRef=J&&J.length?J[0]:null,N.meshRef&&!N.meshRef.geometry.boundingBox&&N.meshRef.geometry.computeBoundingBox()}var R=O===N.pid||V===N.mesh;R&&(N.lastHoverT=performance.now());var Ve=!!N.meshRef&&N.meshRef.visible!==!1&&(R||performance.now()-(N.lastHoverT||0)<400)&&(!gi||gi===N.pid);if(N.mesh.visible=Ve,!!Ve){N.meshRef.geometry.boundingBox.getCenter(u),N.meshRef.localToWorld(u),Yh.setFromObject(ve),N.mesh.position.set(Yh.max.x+.012,u.y,u.z),N.mesh.quaternion.copy(A),Ol.copy(u),Bl.copy(N.mesh.position),kl.copy(Bl).sub(Ol);var Je=kl.length();Je>.005&&(rr.position.copy(Ol).add(Bl).multiplyScalar(.5),rr.scale.set(1,Je,1),rr.quaternion.setFromUnitVectors(xm,kl.multiplyScalar(1/Je)),rr.visible=!0),N.mesh.material.opacity=1;var at=Sn===N.pid?2:O===N.pid?1:0;at!==N.state&&(N.state=at,N.setState(at))}}}function Mm(){Kp(0),jp(),gi&&Zr(),Sn&&(yr(Sn).forEach(function(M){Ci(M)}),Sn=null),er()}function Sm(){if(gi){Zr();return}var M=z||Sn;M&&(zr.add(M),ju(M))}document.fonts&&document.fonts.ready&&document.fonts.ready.then(function(){for(var M=0;M<be.length;M++){var A=be[M].children&&be[M].children[0];A&&A.userData&&A.userData.redraw&&A.userData.redraw()}vt.userData.redraw(),da.userData.redraw();for(var O=0;O<pa.length;O++)pa[O].mesh.userData.redraw()});var rs=new pi;rs.name="xr-ui-head-anchor",kt.add(rs);function bm(){de==="float"?(rs.add(We),We.position.set(0,-.1,-.6),We.rotation.x=-.3):(kt.add(We),We.position.set(0,0,0),We.rotation.x=0)}var xo=null;_e.xr.addEventListener("sessionstart",function(){bm(),We.visible=!0,ir.visible=!0,We.traverse(function(O){O.isMesh&&(O.frustumCulled=!1)}),ir.traverse(function(O){O.isMesh&&(O.frustumCulled=!1)}),L=!1,window.WXRZ_FROZEN_HEAD=!1,xo=kt.background;var M=new URLSearchParams(location.search).get("xrbg");M&&/^[0-9a-fA-F]{6}$/.test(M)&&kr.set("#"+M),kt.background=kr,_=0,T=performance.now(),j=0,D=0,k=0,H=0,_t=!0,Wt.userData.setActive(!0),Pe=!1,pn(),tn=performance.now(),console.log("[orbit] session start: auto-rotate ON, pivot "+(ft?"captured":"PENDING (model not ready — will capture lazily)")),window.WXRZ_BOUNCE_STATE?(go(window.WXRZ_BOUNCE_STATE,"bounce"),window.WXRZ_LAST_BOUNCE_STATE=window.WXRZ_BOUNCE_STATE,window.WXRZ_BOUNCE_STATE=null):(window.WXRZ_MANUAL_START=!0,window.WXRZ_DROP_STATE?(go(window.WXRZ_DROP_STATE,"re-enter after drop"),window.WXRZ_DROP_STATE.afterDrop=!0,window.WXRZ_LAST_BOUNCE_STATE=window.WXRZ_DROP_STATE,window.WXRZ_DROP_STATE=null):window.WXRZ_LAST_BOUNCE_STATE=null),typeof Mt<"u"&&Mt&&(Mt.enabled=!1);var A=document.getElementById("fullscreen-toggle");A&&(A.style.display="none")}),_e.xr.addEventListener("sessionend",function(){We.visible=!1,ir.visible=!1,xo&&(kt.background=xo,xo=null),er(),_t=!1,Wt.userData.setActive(!1),yo=!1,Rt.userData.grab=null,Li.visible=!1,typeof Mt<"u"&&Mt&&(Mt.enabled=!0);var M=document.getElementById("fullscreen-toggle");M&&(M.style.display=""),z&&($(z,0),z=null);for(var A=0;A<t.length;A++){var O=t[A];if(O.userData.grab=null,O.userData.lastGoodPos=null,O.userData.lastGoodQuat=null,O.userData.prevRawPos=null,O.userData.prevRawQuat=null,O.userData.lastGoodT=0,O.userData.suspectFrames=0,O.userData.beamCleared=!1,O.userData.goodStreak=0,O.userData.liveFrames=0,O.userData.spikeLogN=0,O.userData.lastAcceptT=0,O.userData.poleWin=null,O.userData.reacq=null,O.userData.dil=null,O.userData.selectIgnored=!1,O.userData.originHold=!1,O.userData.originOut=!1,O.userData.originN=0,O.userData.offOriginN=0,_o("legend"),ut=!1,ce=0,O.userData.poseHist&&(O.userData.poseHist.n=0),O.userData.hapticVerdict=!1,O.userData.lastQuat=null,O.userData.live=!1,O.userData.reticle&&(O.userData.reticle.visible=!1),O.userData.posMin){var V=new F().subVectors(O.userData.posMax,O.userData.posMin);et("controller "+A+" position range (cm): x="+(V.x*100).toFixed(1)+" y="+(V.y*100).toFixed(1)+" z="+(V.z*100).toFixed(1)+(V.length()<.005?"  (STATIC — runtime reports no stylus position)":"  (position tracking OK)")),O.userData.posMin=null,O.userData.posMax=null}}if(y){var I=new F().subVectors(b,y);et("head position range (cm): x="+(I.x*100).toFixed(1)+" y="+(I.y*100).toFixed(1)+" z="+(I.z*100).toFixed(1)+(I.length()<.005?"  (STATIC — no head parallax data)":"  (head tracking OK)")),y=null,b=null}var N=(performance.now()-T)/1e3;_>0&&N>.5&&(et("avg frame rate: "+(_/N).toFixed(1)+" fps over "+N.toFixed(1)+"s"+(_/N<45?"  (LOW — this alone makes interaction feel sluggish)":"")),et("frame hitches >100ms: "+D+" in first 5s, "+k+" after; worst gap "+j.toFixed(0)+"ms"+(D>2&&k<=2?"  (early-only — app-side warm-up jank, not tracking)":"")),et("pose spikes: "+ke+" ("+He+" transient glitch"+(He===1?"":"es")+", "+zt+" confirmed teleport"+(zt===1?"":"s")+"); peak stylus velocity "+it.toFixed(1)+" m/s over "+q+"ms windows"+(it>4?"  (nearing the 8 m/s guard — check threshold)":""))),ke=0,He=0,zt=0,it=0});function Em(){var M=new pi;M.name="stylus-beam";var A=new xl(75e-5,75e-5,1,8,1,!0);A.rotateX(-Math.PI/2),A.translate(0,0,-.5);var O=new Xt(A,new Hr({color:n,transparent:!0,opacity:.5}));return O.name="beam-line",M.add(O),M}function jh(){var M=new Xt(new xh(.0013,.002,24),new Hr({color:n,transparent:!0,opacity:.9,depthTest:!1,side:Bn}));return M.renderOrder=999,M.visible=!1,kt.add(M),M}function Tm(M,A){M.getObjectByName("beam-line").material.color.setHex(A)}function wm(M){for(;M;M=M.parent)if(M.visible===!1)return!1;return!0}function ss(M){o.identity().extractRotation(M.matrixWorld),r.ray.origin.setFromMatrixPosition(M.matrixWorld),r.ray.direction.set(0,0,-1).applyMatrix4(o);for(var A=null,O=r.intersectObjects(be,!1),V=0;V<O.length;V++)if(wm(O[V].object)){A={kind:"ui",hit:O[V]};break}if(ve){var I=r.intersectObject(ve,!0);I.length&&(!A||I[0].distance<A.hit.distance)&&(A={kind:"model",hit:I[0]})}return A}function Zh(M){var A=M.userData;if(!A.lastGoodPos||!A.lastGoodQuat)return!1;l.setFromMatrixPosition(M.matrixWorld);var O=Math.max(.001,(performance.now()-A.lastGoodT)/1e3),V=A.suspectFrames>0||l.distanceTo(A.lastGoodPos)>Math.max(.2,8*O);return V?(o.makeRotationFromQuaternion(A.lastGoodQuat).setPosition(A.lastGoodPos),M.matrixWorld.copy(o),console.log("[stylus] button edge on a spiked pose — using last good pose for cast/anchor"),!0):!1}var bi=16,zl=.03,Kh=.12,$h=.8,Qh=new URLSearchParams(location.search).get("dil")!=="0";Qh||et("de-interleave filter DISABLED by ?dil=0");var Vl=new nt;function Jh(M){for(var A=0,O=Math.max(1,M.length-3);O<M.length;O++)A+=M[O].p.distanceTo(M[O-1].p);return A}function ed(M,A,O,V){if(!Qh)return!1;var I=M.userData.dil;if(!I){I=M.userData.dil={e:[],h:0,n:0,on:!1,since:0,subs:0,eps:0,livePos:new F,liveQuat:new nt,stalePos:new F,staleQuat:new nt,rawPos:new F,rawQuat:new nt,haveStale:!1,t1:[],t2:[]};for(var N=0;N<bi;N++)I.e.push({p:new F,q:new nt,pole:0})}Vl.setFromRotationMatrix(M.matrixWorld),I.rawPos.copy(V),I.rawQuat.copy(Vl);var J=t.length>1?t[1-A]:null,R=V.lengthSq()<1e-6||!!(J&&!J.userData.live&&J.userData.prevRawPos&&V.distanceTo(J.userData.prevRawPos)<zl);if(R)return I.on?(I.subs++,!0):!1;var Ve=I.e[I.h];if(Ve.p.copy(V),Ve.q.copy(Vl),I.h=(I.h+1)%bi,I.n<bi&&I.n++,I.n<bi)return!1;var Je=Ve,at=0,xt=0,yt=0,Lt=0,an=0,Kt=I.t1,Nt=I.t2;Kt.length=0,Nt.length=0;for(var Bt=null,$t=null,on=-1,cn=-1,Vn=0;Vn<bi;Vn++){var Vt=I.e[(I.h+Vn)%bi],Fi=Bt?Vt.p.distanceTo(Bt.p):1/0,sr=$t?Vt.p.distanceTo($t.p):1/0,ar=Fi<Kh&&2*Math.acos(Math.min(1,Math.abs(Vt.q.dot(Bt.q))))<$h,os=$t?sr<Kh&&2*Math.acos(Math.min(1,Math.abs(Vt.q.dot($t.q))))<$h:!1;if(!Bt)Vt.pole=1,Bt=Vt,on=Vn,Kt.push(Vt);else if(ar&&(!os||Fi<=sr))Vt.pole=1,Bt=Vt,Kt.push(Vt);else if(!$t)Vt.pole=2,$t=Vt,cn=Vn,Nt.push(Vt);else if(os)Vt.pole=2,$t=Vt,Nt.push(Vt);else{Vt.pole=0,yt++;continue}an&&Vt.pole!==an&&Lt++,an=Vt.pole}for(var Kn=Jh(Kt),At=Jh(Nt),$n=Je.pole===1,ls=0;ls<bi;ls++){var Pr=I.e[ls];Pr.pole!==0&&(Pr.pole=Pr.pole===1===$n?1:2,Pr.pole===1?at++:xt++)}var Ue=$n?Kn:At,or=$n?At:Kn,cs=$n?on:cn,So=$n?cn:on,us=$n?$t:Bt,jl=!!us&&yt<=5&&(I.on?at>=1&&xt>=1:at>=5&&xt>=5&&Lt>=8);if(!jl){if(I.on){I.on=!1;var ma="[stylus] de-interleave OFF after "+((O-I.since)/1e3).toFixed(1)+"s ("+I.subs+" stale frames replaced)";console.log(ma),et(ma)}return!1}var lr;if(Math.abs(Ue-or)>1e-4?lr=Ue>or:I.on&&I.haveStale?lr=Je.p.distanceTo(I.stalePos)>=zl:lr=cs>So,!I.on){I.on=!0,I.since=O,I.subs=0,I.eps++,I.reanchorLogged=!1;var bo="[stylus] de-interleave ON: raw stream alternating between two poles "+(Je.p.distanceTo(us.p)*100).toFixed(0)+"cm apart ("+Lt+" swaps/"+bi+" frames, spread A "+(Ue*1e3).toFixed(1)+"mm B "+(or*1e3).toFixed(1)+"mm) -- presenting the "+(lr?"newest":"other")+" pole";console.log(bo),et(bo),ie("deinterleave ON c"+A)}if(lr)return I.livePos.copy(Je.p),I.liveQuat.copy(Je.q),I.stalePos.copy(us.p),I.staleQuat.copy(us.q),I.haveStale=!0,!1;I.stalePos.copy(Je.p),I.staleQuat.copy(Je.q),I.haveStale=!0;for(var ga=bi-1;ga>=0;ga--){var _a=I.e[(I.h+ga)%bi];if(_a.pole===2){I.livePos.copy(_a.p),I.liveQuat.copy(_a.q);break}}return I.subs++,!0}var Gl=new nt;function Am(M,A,O,V){var I=M.userData,N=I.probe;N||(N=I.probe={state:"",since:0,lastLog:0,stillFrames:0,lastPos:new F,lastQuat:new nt,n:0});var J=_e.xr.getFrame(),R=_e.xr.getReferenceSpace(),Ve=I.inputSource,Je=null,at=!1;if(J&&R&&Ve&&Ve.targetRaySpace)try{Je=J.getPose(Ve.targetRaySpace,R),at=!0}catch{at=!1}Gl.setFromRotationMatrix(M.matrixWorld);var xt=N.n?V.distanceTo(N.lastPos):0,yt=N.n?2*Math.acos(Math.min(1,Math.abs(Gl.dot(N.lastQuat)))):0;N.stillFrames=xt<5e-4&&yt>.0035?N.stillFrames+1:0,N.lastPos.copy(V),N.lastQuat.copy(Gl),N.n++;var Lt=at?Je?Je.emulatedPosition?"EMULATED-POS":N.stillFrames>30?"TURNING-NOT-MOVING":M.visible?"tracked":"HIDDEN":"NULL-POSE":"no-src",an=Lt!=="tracked"&&Lt!=="no-src",Kt=function(){return"c"+A+" "+Lt+" pos("+V.x.toFixed(3)+","+V.y.toFixed(3)+","+V.z.toFixed(3)+") vis="+M.visible+" live="+!!I.live+(Je?" emu="+Je.emulatedPosition:"")+" still="+N.stillFrames+" t="+(O/1e3).toFixed(1)+"s"};Lt!==N.state?(et("[pose] "+N.state+" -> "+Kt()+(N.state?" after "+((O-N.since)/1e3).toFixed(1)+"s":"")),console.log("[pose] "+N.state+" -> "+Kt()),N.state=Lt,N.since=O,N.lastLog=O):(an||I.reacq&&I.reacq.on)&&O-N.lastLog>1e3&&(console.log("[pose] "+Kt()+(I.reacq&&I.reacq.on?" REACQ":"")),N.lastLog=O)}function td(M,A){o.identity().extractRotation(M.matrixWorld),M.userData.grab={dist:A.distance,pivot:A.point.clone(),ctrlQuat0:new nt().setFromRotationMatrix(o),ctrlPos0:new F().setFromMatrixPosition(M.matrixWorld),modelPos0:ve.position.clone(),modelQuat0:ve.quaternion.clone()}}function Hl(M,A,O){var V=M.userData.grab;!V||!ve||(V.ctrlPos0.copy(A),V.ctrlQuat0.copy(O),V.modelPos0.copy(ve.position),V.modelQuat0.copy(ve.quaternion),d.set(0,0,-1).applyQuaternion(O),V.pivot.copy(A).addScaledVector(d,V.dist),console.log("[stylus] accepted pose replaced mid-hold — grab re-anchored, model held in place"))}function nd(M){var A=M.userData.grab;l.setFromMatrixPosition(M.matrixWorld),o.identity().extractRotation(M.matrixWorld),c.setFromRotationMatrix(o),h.copy(A.ctrlQuat0).invert().premultiply(c);var O=M.userData.rotGain!=null?M.userData.rotGain:Oe;g.slerpQuaternions(x.identity(),h,O);var V=2*Math.acos(Math.min(1,Math.abs(c.dot(A.ctrlQuat0)))),I=l.distanceTo(A.ctrlPos0);return V>(A.peakSwung||0)&&(A.peakSwung=V),I>(A.peakPulled||0)&&(A.peakPulled=I),d.set(0,0,-1).applyQuaternion(c),f.copy(l).addScaledVector(d,A.dist),ve.quaternion.copy(g).multiply(A.modelQuat0),u.copy(A.modelPos0).sub(A.pivot).applyQuaternion(g),ve.position.copy(f).add(u),le(ve.position),A.dist}var id=ji("explodebtn",ji("animbtn",-1)),rd=ji("isolatebtn",-1),sd={4:"explode",3:"isolate"},li=null;try{li=JSON.parse(localStorage.getItem("wxrz-stylus-btns")||"null")}catch{}(!li||typeof li!="object")&&(li={});var ad=-1e9;function Wl(M){var A=performance.now();A-ad<250||(ad=A,console.log("[stylus] valve toggle ("+M+")"),$p())}function Rm(M){var A=ss(M);return!A||A.kind!=="model"?null:vr(A.hit.object,!0)}function od(M){if(gi){Zr();return}var A=Rm(M);A&&(console.log("[stylus] isolate "+A),zr.add(A),ju(A))}function Cm(M,A){if(Math.abs(performance.now()-M.userData.selectEdgeT)<150){M.userData.echoIdx[A]||console.log("[stylus] gamepad button "+A+" = centre-button echo, ignored from now on"),M.userData.echoIdx[A]=!0;return}if(!M.userData.echoIdx[A]){var O;if(id>=0||rd>=0)O=A===id?"explode":A===rd?"isolate":null;else if(sd[A])O=sd[A];else{if(!(A in li)){var V={};for(var I in li)V[li[I]]=!0;li[A]=V.explode?V.isolate?null:"isolate":"explode";try{localStorage.setItem("wxrz-stylus-btns",JSON.stringify(li))}catch{}console.log("[stylus] button "+A+" latched as "+li[A]+" (press-order; persisted — clear localStorage wxrz-stylus-btns to relearn, ?explodebtn/?isolatebtn to force)")}O=li[A]}console.log("[stylus] gamepad button "+A+" → "+(O||"unassigned")),O==="explode"?Wl("stylus button"):O==="isolate"&&od(M)}}function Dm(M,A,O){var V=M.userData&&M.userData.haptics;if(V)try{var I=V.pulse?V.pulse(A,O):V.playEffect?V.playEffect("dual-rumble",{duration:O,strongMagnitude:A,weakMagnitude:A}):null;M.userData.hapticVerdict||(M.userData.hapticVerdict=!0,I&&I.then?I.then(function(N){et("haptic pulse OK ("+N+")")},function(N){et("haptic pulse rejected: "+N)}):et("haptic pulse call returned "+I+" (no promise)"))}catch(N){M.userData.hapticVerdict||(M.userData.hapticVerdict=!0,et("haptic pulse threw: "+N.message)),M.userData.haptics=null}}function Pm(M){var A=M.userData.inputSource;if(!(!A||!A.gamepad))for(var O=A.gamepad.buttons,V=0;V<O.length;V++){var I=!!(O[V]&&O[V].pressed);I&&!M.userData.btnPrev[V]&&(console.log("[stylus] gamepad button "+V+" pressed"),V!==0&&Cm(M,V)),M.userData.btnPrev[V]=I}}function ld(M){var A=_e.xr.getController(M),O=Em();A.add(O),A.userData.beam=O,A.userData.reticle=jh(),A.userData.grab=null,A.userData.btnPrev=[],A.userData.echoIdx={},A.userData.selectEdgeT=-1e9,A.addEventListener("connected",function(V){A.userData.inputSource=V.data,A.userData.btnPrev=[],A.userData.echoIdx={};var I=V.data&&V.data.gamepad,N=I&&I.hapticActuators&&I.hapticActuators.length?I.hapticActuators[0]:I&&I.vibrationActuator?I.vibrationActuator:null;A.userData.haptics=N||null,et("controller "+M+" haptics: "+(N?"exposed ("+(N.pulse?"pulse":N.playEffect?"playEffect":"unknown API")+")":"none surfaced"+(I?"":" (no gamepad on input source)"))),et("controller "+M+" profiles: "+JSON.stringify(V.data&&V.data.profiles||[])+(I&&I.id?' gamepad.id="'+I.id+'"':" (no gamepad id)"))}),A.addEventListener("disconnected",function(){A.userData.inputSource=null,A.userData.grab=null}),A.addEventListener("selectstart",function(){if(A.userData.selectEdgeT=performance.now(),!!_e.xr.isPresenting){if(A.userData.selectIgnored=!!(A.userData.reacq&&A.userData.reacq.on)||!!A.userData.atOrigin||!!A.userData.originHold,A.userData.selectIgnored){var V=performance.now()-A.userData.reacq.since;{if((A.userData.reacq.parkedN||0)>=12){ut=!0,console.log("[stylus] press while the stylus is not seen -- remembered, bounce when it is back in view");return}if($e(V,"press"))return;console.log("[stylus] gated "+(V/1e3).toFixed(1)+"s, press received -- bounce not started yet ("+(qe()?"session too young, press remembered":"already bouncing")+")");return}}var I=Zh(A),N=ss(A);if(!N){E(null);return}if(N.kind==="ui"){if(N.hit.object===Pt){ha(A,N.hit);return}N.hit.object.userData.onClick();return}td(A,N.hit),A.userData.grab.anchorSub=I,A.userData.grab.t0=performance.now(),A.userData.grab.pid=vr(N.hit.object,!0),Dm(A,.6,40)}}),A.addEventListener("selectend",function(){if(A.userData.selectEdgeT=performance.now(),A.userData.selectIgnored){A.userData.selectIgnored=!1;return}if(A.userData.cardDrag){po(A,"stylus");return}var V=Zh(A),I=A.userData.grab;if(A.userData.grab=null,I&&I.pid&&ve){o.identity().extractRotation(A.matrixWorld),c.setFromRotationMatrix(o);var N=2*Math.acos(Math.min(1,Math.abs(c.dot(I.ctrlQuat0))));l.setFromMatrixPosition(A.matrixWorld);var J=I.ctrlPos0?l.distanceTo(I.ctrlPos0):0,R=I.anchorSub&&V&&N<.005&&J<.001,Ve=performance.now()-I.t0,Je=I.peakSwung||N,at=I.peakPulled||J,xt=!R&&!I.reeled&&N<.12&&J<.03&&Je<.12&&at<.03&&Ve<Xe;console.log("[tap] stylus release: swung "+(N*57.3).toFixed(1)+" deg (peak "+(Je*57.3).toFixed(1)+"), travelled "+(J*100).toFixed(1)+" cm (peak "+(at*100).toFixed(1)+"), held "+Math.round(Ve)+" ms"+(I.reeled?", reeled":"")+(R?", filter artifact":"")+(Ve>=Xe?", long hold":"")+" → "+(xt?"TAP (open definition)":"grab")),xt&&(ve.position.copy(I.modelPos0),ve.quaternion.copy(I.modelQuat0),E(I.pid))}}),A.addEventListener("squeezestart",function(){Wl("squeeze event")}),kt.add(A),t.push(A)}ld(0),ld(1),window.addEventListener("keydown",function(M){if(_e.xr.isPresenting){var A=M.target;if(!(A&&(A.tagName==="INPUT"||A.tagName==="TEXTAREA"))){if(M.key==="e"||M.key==="E"){Wl("E key");return}if(M.key==="i"||M.key==="I"){Sm();return}if(M.key==="Escape"){if(An){er();return}var O=_e.xr.getSession();O&&(window.WXRZ_USER_END=!0,O.end());return}var V=0;if(M.key==="w"||M.key==="W"||M.key==="PageUp"?V=.05:(M.key==="s"||M.key==="S"||M.key==="PageDown")&&(V=-.05),!!V){(M.key==="PageUp"||M.key==="PageDown")&&M.preventDefault();for(var I=!1,N=0;N<t.length;N++){var J=t[N].userData.grab;J&&(J.dist=Math.max(.05,Math.min(2,J.dist-V)),J.reeled=!0,I=!0)}var R=Rt&&Rt.userData.grab;R&&(R.dist=Math.max(.05,Math.min(2,R.dist-V)),R.reeled=!0,I=!0),!I&&ve&&(ve.position.z+=V,le(ve.position))}}}});var Im=new F(0,0,-1),Xl=new F,cd=new F,Rt=new Gt;Rt.userData={grab:null,rotGain:0};var yo=!1,ud=-1e9,Lm=2e3,as={x:0,y:0},Li=jh();function ql(){cd.set(as.x*Vi,as.y*Gi,0).sub(Xl).normalize(),Rt.position.copy(Xl),Rt.quaternion.setFromUnitVectors(Im,cd),Rt.updateMatrixWorld(!0)}function Yl(M){as.x=M.clientX/innerWidth*2-1,as.y=-(M.clientY/innerHeight*2-1)}window.addEventListener("pointermove",function(M){_e.xr.isPresenting&&(Yl(M),yo=!0,ud=performance.now())});var Mo=!1;window.addEventListener("blur",function(){_e.xr.isPresenting&&(Mo=!0)}),_e.xr.addEventListener("sessionend",function(){Mo=!1}),window.addEventListener("pointerdown",function(M){if(_e.xr.isPresenting){if(Mo){Mo=!1,console.log("[mouse] click consumed as window-refocus (not a tap)");return}if(Yl(M),ql(),M.button===0){var A=ss(Rt);if(console.log("[mouse] click at "+M.clientX+","+M.clientY+" → "+(A?A.kind+(A.kind==="ui"?" ("+(A.hit.object.name||"widget")+")":""):"nothing")),!A){E(null);return}if(A.kind==="ui"){if(A.hit.object===Pt){ha(Rt,A.hit);return}A.hit.object.userData.onClick();return}td(Rt,A.hit),Rt.userData.grab.t0=performance.now(),Rt.userData.grab.pid=vr(A.hit.object,!0),Rt.userData.grab.downX=M.clientX,Rt.userData.grab.downY=M.clientY}else if(M.button===2){var O=ss(Rt);E(O&&O.kind==="model"?vr(O.hit.object,!0):null)}}}),window.addEventListener("pointerup",function(M){if(M.button===0){if(Rt.userData.cardDrag){po(Rt,"mouse");return}var A=Rt.userData.grab;if(Rt.userData.grab=null,A&&A.pid&&ve){var O=Math.abs(M.clientX-A.downX)+Math.abs(M.clientY-A.downY),V=O<8&&!A.reeled;console.log("[tap] mouse release: "+O+"px travel"+(A.reeled?", reeled":"")+" → "+(V?"TAP (open definition)":"grab")),V&&(ve.position.copy(A.modelPos0),ve.quaternion.copy(A.modelQuat0),E(A.pid))}}}),window.addEventListener("dblclick",function(M){_e.xr.isPresenting&&(Yl(M),ql(),od(Rt))}),window.addEventListener("contextmenu",function(M){_e.xr.isPresenting&&M.preventDefault()}),window.addEventListener("wheel",function(M){if(_e.xr.isPresenting){var A=M.deltaY<0?.02:-.02,O=Rt.userData.grab;O?(O.dist=Math.max(.05,Math.min(2,O.dist-A)),O.reeled=!0):ve&&(ve.position.z+=A,le(ve.position))}},{passive:!0}),Qp=function(){if(_e.xr.isPresenting){if(m.setFromMatrixPosition(_e.xr.getCamera().matrixWorld),y?(y.min(m),b.max(m)):(y=m.clone(),b=m.clone()),_>300&&(window.WXRZ_FROZEN_HEAD=b.distanceTo(y)<.003),!L&&_>45&&(L=!0,!P&&m.length()<.08)){et("head parked at the local-space origin ("+(m.length()*100).toFixed(1)+" cm at frame "+_+") — headset suspected, ending session (?zspace=1 overrides)"),window.WXRZ_HMD_NOTICE=!0;var M=_e.xr.getSession();M&&M.end();return}if(de==="float"){rs.position.lerp(m,.05);var A=new en().setFromRotationMatrix(_e.xr.getCamera().matrixWorld,"YXZ");rs.rotation.y+=(A.y-rs.rotation.y)*.05}var O=null,V=null;o.identity().extractRotation(_e.xr.getCamera().matrixWorld),p.setFromRotationMatrix(o),_++;var I=performance.now();if(H){var N=I-H;N>j&&(j=N),N>100&&(I-T<5e3?D++:k++)}H=I;for(var J=0;J<t.length;J++){var R=t[J],Ve=R.userData.beam;if(Pm(R),!!Ve){f.setFromMatrixPosition(R.matrixWorld),Am(R,J,I,f);var Je=ed(R,J,I,f);if(Je){var at=R.userData.dil;f.copy(at.livePos),R.position.copy(at.livePos),R.quaternion.copy(at.liveQuat),R.matrixWorld.makeRotationFromQuaternion(at.liveQuat).setPosition(at.livePos),R.matrix.copy(R.matrixWorld)}var xt=R.userData.dil;w.setFromRotationMatrix(R.matrixWorld);var yt=f.lengthSq()<1e-6&&Math.abs(w.w)>.999999||!!xt&&xt.rawPos.lengthSq()<1e-6&&Math.abs(xt.rawQuat.w)>.999999;if(R.userData.atOrigin=yt,R.userData.originN=yt?(R.userData.originN||0)+1:0,R.userData.offOriginN=yt?0:(R.userData.offOriginN||0)+1,yt?R.userData.originHold||(R.userData.originHold=!0,R.userData.originHoldT=I):R.userData.originHold&&R.userData.offOriginN>=10&&(R.userData.originHold=!1,R.userData.originOut&&(R.userData.originOut=!1,console.log("[stylus] controller "+J+" back from the origin after "+((I-R.userData.originHoldT)/1e3).toFixed(1)+"s -- stylus seen again, beam shown at raw("+f.x.toFixed(3)+","+f.y.toFixed(3)+","+f.z.toFixed(3)+")"))),R.userData.originN===12&&!R.userData.originOut){R.userData.originOut=!0;var Lt="[stylus] controller "+J+" parked at the origin by the runtime (stylus not in camera view) -- beam hidden, last good pose held";console.log(Lt),et(Lt)}var an=yt||!!R.userData.originHold;if(R.userData.dil&&R.userData.dil.on){R.userData.poleWin=null;var Kt=R.userData.lastGoodPos,Nt=R.userData.lastGoodQuat;Kt&&Nt&&!yt&&(w.setFromRotationMatrix(R.matrixWorld),(Kt.distanceTo(f)>zl||2*Math.acos(Math.min(1,Math.abs(w.dot(Nt))))>.35)&&(Kt.copy(f),Nt.copy(w),R.userData.lastGoodT=I,R.userData.lastAcceptT=I,R.userData.suspectFrames=0,Hl(R,f,w),R.userData.dil.reanchorLogged||(R.userData.dil.reanchorLogged=!0,console.log("[stylus] guard re-anchored onto the de-interleaved hand pose"))))}R.userData.posMin?(R.userData.posMin.min(f),R.userData.posMax.max(f)):(R.userData.posMin=f.clone(),R.userData.posMax=f.clone());var Bt=!1;w.setFromRotationMatrix(R.matrixWorld);var $t=t.length>1?t[1-J]:null,on=$t&&!$t.userData.live&&$t.userData.prevRawPos?$t.userData.prevRawPos:null,cn=!!(on&&f.distanceTo(on)<.03);on&&R.userData.lastGoodPos&&R.userData.lastGoodPos.distanceTo(on)<.03&&(R.userData.lastGoodPos=null,R.userData.suspectFrames=0);var Vn=R.userData.prevRawPos?f.distanceTo(R.userData.prevRawPos):1/0,Vt=R.userData.prevRawQuat?2*Math.acos(Math.min(1,Math.abs(w.dot(R.userData.prevRawQuat)))):1/0;if(R.userData.lastGoodPos){var Fi=f.distanceTo(R.userData.lastGoodPos),sr=(I-R.userData.lastGoodT)/1e3,ar=R.userData.lastGoodQuat?2*Math.acos(Math.min(1,Math.abs(w.dot(R.userData.lastGoodQuat)))):0,os=ar<=Math.max(.35,12*sr),Kn=R.userData.suspectFrames>0&&Vn<.03&&Vt<.05&&(Fi>.25||ar>.5);Kn&&R.userData.suspectFrames===2&&console.log("[stylus] spiked pose is PARKED ("+(Fi*100).toFixed(0)+"cm / "+(ar*57.3).toFixed(0)+"° out) — phantom flip, refusing acceptance, still withholding"),Fi<=Math.max(.2,8*sr)&&os&&!Kn&&!cn&&!yt?(R.userData.suspectFrames>0&&(He++,ee(R)&&console.log("[stylus] pose spike passed after "+R.userData.suspectFrames+" frame(s) — transient glitch, grab kept")),R.userData.suspectFrames=0,R.userData.lastGoodPos.copy(f),R.userData.lastGoodT=I,R.userData.lastGoodQuat||(R.userData.lastGoodQuat=new nt),R.userData.lastGoodQuat.setFromRotationMatrix(R.matrixWorld)):(R.userData.suspectFrames=(R.userData.suspectFrames||0)+1,R.userData.suspectFrames===1&&(ke++,ee(R)&&console.log("[stylus] pose jumped "+(Fi*100).toFixed(0)+"cm / "+(ar*57.3).toFixed(0)+"° in "+(sr*1e3).toFixed(0)+"ms — suspect, withholding from grab"+(cn?" (phantom pole)":"")+" raw("+f.x.toFixed(3)+","+f.y.toFixed(3)+","+f.z.toFixed(3)+") good("+R.userData.lastGoodPos.x.toFixed(3)+","+R.userData.lastGoodPos.y.toFixed(3)+","+R.userData.lastGoodPos.z.toFixed(3)+")")),R.userData.suspectFrames>X&&!yt?(R.userData.grab&&(R.userData.grab=null,zt++,console.log("[stylus] pose jump persisted "+R.userData.suspectFrames+" frames — grab released (tracking lost?)")),R.userData.lastGoodPos.copy(f),R.userData.lastGoodT=I,R.userData.lastGoodQuat||(R.userData.lastGoodQuat=new nt),R.userData.lastGoodQuat.setFromRotationMatrix(R.matrixWorld),R.userData.suspectFrames=0):Bt=!0)}else!cn&&!yt&&(R.userData.lastGoodPos=f.clone(),R.userData.lastGoodT=I,R.userData.lastGoodQuat=new nt().setFromRotationMatrix(R.matrixWorld),R.userData.suspectFrames=0);Bt?R.userData.lastAcceptT&&I-R.userData.lastAcceptT>600&&!yt&&(console.log("[stylus] guard starved 600 ms — accepting current pose as reality"),R.userData.lastGoodPos?R.userData.lastGoodPos.copy(f):R.userData.lastGoodPos=f.clone(),R.userData.lastGoodT=I,R.userData.lastGoodQuat||(R.userData.lastGoodQuat=new nt),R.userData.lastGoodQuat.setFromRotationMatrix(R.matrixWorld),R.userData.suspectFrames=0,R.userData.lastAcceptT=I,Bt=!1,Hl(R,f,w)):R.userData.lastAcceptT=I;var At=R.userData.poleWin;if(At||(At=R.userData.poleWin={n:0,sus:0,lg0:new F,sMin:new F,sMax:new F,sN:0,lastSus:new F,lastSusQuat:new nt}),At.n===0&&R.userData.lastGoodPos&&At.lg0.copy(R.userData.lastGoodPos),At.n++,Bt&&(At.sN===0?(At.sMin.copy(f),At.sMax.copy(f)):(At.sMin.min(f),At.sMax.max(f)),At.lastSus.copy(f),At.lastSusQuat.copy(w),At.sN++,At.sus++),At.n>=60){var $n=R.userData.lastGoodPos?R.userData.lastGoodPos.distanceTo(At.lg0):1,ls=At.sN?At.sMax.distanceTo(At.sMin):0;At.sus>20&&$n<.01&&ls>.05&&R.userData.lastGoodPos&&(console.log("[stylus] locked on the static pole (accepted travel "+($n*100).toFixed(1)+"cm, suspect spread "+(ls*100).toFixed(0)+"cm / 60 frames) — swapping to the moving pole"),R.userData.lastGoodPos.copy(At.lastSus),R.userData.lastGoodT=I,R.userData.suspectFrames=0,R.userData.lastAcceptT=I,Hl(R,At.lastSus,At.lastSusQuat)),At.n=0,At.sus=0,At.sN=0}if(R.userData.prevRawPos?R.userData.prevRawPos.copy(f):R.userData.prevRawPos=f.clone(),R.userData.prevRawQuat?R.userData.prevRawQuat.copy(w):R.userData.prevRawQuat=w.clone(),Ce(R,I,f),!Bt){var Pr=me(R,I,f);Pr>it&&(it=Pr)}var Ue=R.userData.reacq;if(Ue||(Ue=R.userData.reacq={prevPos:new F,prevQuat:new nt,prevT:0,have:!1,bad:0,good:0,on:!1,since:0,flips:0,path:0,rot:0}),R.userData.live&&!cn&&!yt){if(Ue.have){var or=f.distanceTo(Ue.prevPos),cs=2*Math.acos(Math.min(1,Math.abs(w.dot(Ue.prevQuat)))),So=Math.max(.001,(I-Ue.prevT)/1e3),us=or<=Math.max(.2,8*So)&&cs<=Math.max(.35,12*So);us?(Ue.good++,Ue.bad=0,Ue.path+=or,Ue.rot+=cs):(Ue.bad++,Ue.good=0,Ue.flips++,Ue.path=0,Ue.rot=0);var jl=or<5e-4&&cs<.002;if(jl?Ue.parkedN=(Ue.parkedN||0)+1:((Ue.parkedN||0)>=12&&Ue.on&&(Ue.since=I,console.log("[stylus] stylus seen again after "+Ue.parkedN+" parked frames -- judging the fresh stream")),Ue.parkedN=0),!Ue.on&&Ue.bad>=12){Ue.on=!0,Ue.since=I,Ue.flips=Ue.bad,R.userData.grab&&(R.userData.grab=null);var ma="[stylus] pose stream flipping ("+(or*100).toFixed(0)+"cm / "+(cs*57.3).toFixed(0)+"deg frame-to-frame) -- RE-ACQUIRING: beam hidden, input ignored";console.log(ma),et(ma),ie("gate ON c"+J)}else if(Ue.on&&Ue.good>=30&&(Ue.path>.003||Ue.rot>.01)){Ue.on=!1;var lr="[stylus] pose stream steady again after "+((I-Ue.since)/1e3).toFixed(1)+"s ("+Ue.flips+" flips) -- tracking resumed, guard restarted at raw("+f.x.toFixed(3)+","+f.y.toFixed(3)+","+f.z.toFixed(3)+")";console.log(lr),et(lr),mt&&ie("gate OFF c"+J),R.userData.lastGoodPos?R.userData.lastGoodPos.copy(f):R.userData.lastGoodPos=f.clone(),R.userData.lastGoodQuat||(R.userData.lastGoodQuat=new nt),R.userData.lastGoodQuat.copy(w),R.userData.lastGoodT=I,R.userData.lastAcceptT=I,R.userData.suspectFrames=0,R.userData.poleWin=null,Bt=!1}}Ue.prevPos.copy(f),Ue.prevQuat.copy(w),Ue.prevT=I,Ue.have=!0}if((function(){var Ir=R.userData.lastGoodPos,gd=R.userData.lastGoodQuat,wo=R.userData.inputSource&&R.userData.inputSource.gamepad,_d=0;if(wo&&wo.buttons)for(var Sa=0;Sa<wo.buttons.length&&Sa<8;Sa++)wo.buttons[Sa].pressed&&(_d|=1<<Sa);var ps=R.userData.dil;Ie(R,J,I,ps?ps.rawPos:f,ps?ps.rawQuat:w,{dP:isFinite(Vn)?Vn*1e3:0,dQ:isFinite(Vt)?Vt*57.2958:0,jump:Ir?Ir.distanceTo(f)*100:0,qJump:gd?2*Math.acos(Math.min(1,Math.abs(w.dot(gd))))*57.2958:0,live:!!R.userData.live,sus:Bt,susN:R.userData.suspectFrames||0,ph:cn,pf:!!(Ir&&Kn),gate:!!Ue.on,gBad:Ue.bad,gGood:Ue.good,parkedN:Ue.parkedN||0,probe:R.userData.probe&&R.userData.probe.state||"?",btns:_d,grab:!!R.userData.grab,beam:!!(R.userData.beamCleared&&R.userData.live&&!Ue.on&&!an),gateSince:Ue.on?Ue.since:0,dil:!!Je,dilOn:!!(ps&&ps.on)})})(),Bt&&R.userData.lastGoodQuat&&(R.position.copy(R.userData.lastGoodPos),R.quaternion.copy(R.userData.lastGoodQuat),R.matrixWorld.makeRotationFromQuaternion(R.userData.lastGoodQuat).setPosition(R.userData.lastGoodPos),R.matrix.copy(R.matrixWorld)),!R.userData.beamCleared){var bo=Bt&&(Kn||cn);R.userData.goodStreak=!Bt||bo?(R.userData.goodStreak||0)+1:0,R.userData.live&&(R.userData.liveFrames=(R.userData.liveFrames||0)+1),(R.userData.goodStreak>=8||(R.userData.liveFrames||0)>45)&&(R.userData.beamCleared=!0,et("controller "+J+" pose settled (streak "+R.userData.goodStreak+", live frames "+(R.userData.liveFrames||0)+") — beam shown"))}if(!R.userData.live){o.identity().extractRotation(R.matrixWorld),c.setFromRotationMatrix(o);var ga=u.subVectors(R.userData.posMax,R.userData.posMin).length()>.002,_a=R.userData.lastQuat?Math.abs(1-Math.abs(c.dot(R.userData.lastQuat)))>1e-7:!1;R.userData.lastQuat?R.userData.lastQuat.copy(c):R.userData.lastQuat=c.clone(),(ga||_a)&&(R.userData.live=!0,console.log("[stylus] controller "+J+" live (real input detected)"))}if(Ve.visible=!!R.userData.live&&!!R.userData.beamCleared&&!Ue.on&&!an,Ue.on?ce=0:R.userData.live&&R.userData.beamCleared&&(ce?ge.length&&I-ce>=he&&(console.log("[stylus] tracked cleanly for "+he/1e3+"s -- bounce back-off reset (was "+ge.length+" this minute)"),ge.length=0,window.WXRZ_BOUNCE_CAPPED=!1):ce=I),Ue.on&&R.userData.live){var va=(Ue.parkedN||0)>=12;!va&&re&&$e(I-Ue.since,"auto");var hd=va||ut?0:Math.max(0,Tt("auto")-(I-Ue.since)),dd=!va&&hd<=0,Fm=Math.max(0,pe-(I-T)),fd=va||!re?-1:Math.ceil(Math.max(hd,Fm)/1e3);re||(dd=!1),fd!==ns&&(ns=fd,(oi===Nh||oi===Fh)&&tr.userData.redraw()),_o(window.WXRZ_BOUNCE_CAPPED?"stuck":va?"unseen":dd?"bounce":"reacquire")}if(an&&R.userData.live&&R.userData.beamCleared&&!Ue.on){R.userData.originOut&&_o("unseen");continue}if(!(!R.userData.live||!R.userData.beamCleared||Ue.on)){_o("legend");var hs=e,ds=n,xa=!1;if(R.userData.cardDrag&&Pt.visible)Bt||(hs=fo(R)||hs),ds=s,xa=!0;else if(R.userData.grab&&ve)hs=Bt?R.userData.grab.dist:nd(R),ds=s,xa=!0;else{var fs=ss(R);if(fs){if(hs=fs.hit.distance,ds=i,xa=!0,fs.kind==="ui")O=fs.hit.object,O===Rn&&(ds=a);else if(fs.kind==="model"){var Zl=vr(fs.hit.object,!0),Nm=Zl&&(Ke.parts||[]).find(function(Ir){return Ir.id===Zl});Nm&&(V=Zl)}}}Ve.getObjectByName("beam-line").scale.z=hs,Tm(Ve,ds);var Eo=R.userData.reticle;Eo.visible=xa,xa&&(Eo.position.set(0,0,-hs).applyMatrix4(R.matrixWorld),Eo.quaternion.copy(p),Eo.material.color.setHex(ds))}}}Wh(),Xl.copy(m);var pd=performance.now()-ud>Lm&&!Rt.userData.grab;if(yo&&pd&&(Li.visible=!1),yo&&!pd){ql();var ya=n;if(Rt.userData.cardDrag&&Pt.visible){var Um=fo(Rt)||.5;Li.position.set(0,0,-Um).applyMatrix4(Rt.matrixWorld),ya=s}else if(Rt.userData.grab&&ve){var Om=nd(Rt);Li.position.set(0,0,-Om).applyMatrix4(Rt.matrixWorld),ya=s}else{var Ma=ss(Rt);if(Ma)if(ya=i,Li.position.copy(Ma.hit.point),Ma.kind==="ui")O=Ma.hit.object,O===Rn&&(ya=a);else{var Kl=vr(Ma.hit.object,!0),Bm=Kl&&(Ke.parts||[]).find(function(Ir){return Ir.id===Kl});Bm&&(V=Kl)}else Li.position.set(as.x*Vi,as.y*Gi,0)}Li.quaternion.copy(p),Li.material.color.setHex(ya),Li.visible=!0}for(var To=0;To<be.length;To++)be[To].userData.setHover(be[To]===O);if(V!==z&&($(z,0),z=V,$(z,.18)),ym(m,p,V,O),zr.size!==qh&&(qh=zr.size,vt.userData.redraw()),_t&&ve){ft||pn();for(var $l=Rt.userData.grab,Ql=0;Ql<t.length&&!$l;Ql++)$l=t[Ql].userData.grab;var md=performance.now();!$l&&ft&&(Pe||(Pe=!0,console.log("[orbit] spinning about local pivot "+ft.x.toFixed(3)+","+ft.y.toFixed(3)+","+ft.z.toFixed(3))),f.copy(ft).applyMatrix4(ve.matrixWorld),h.setFromAxisAngle(S,.35*(md-tn)/1e3),ve.position.sub(f).applyQuaternion(h).add(f),ve.quaternion.premultiply(h)),tn=md}}}})();var Mt=new xS(Ct,_e.domElement);Mt.enableDamping=!0;Mt.dampingFactor=.08;Mt.minDistance=pt.minDistance!=null?pt.minDistance:.5;Mt.maxDistance=pt.maxDistance!=null?pt.maxDistance:10;pt.target?Mt.target.set(pt.target[0],pt.target[1],pt.target[2]):Mt.target.set(0,.8,0);Mt.update();var lo=(function(){var r=parseFloat(new URLSearchParams(location.search).get("lights"));return isFinite(r)?r:Jt.lightScale!=null?Jt.lightScale:1})(),Jp=new Sh(16777215,.45*lo);Jp.name="ambientLight";kt.add(Jp);var jn=new ao(16777215,.85*lo);jn.name="dirLight";jn.position.set(4,8,4);jn.castShadow=!0;jn.shadow.mapSize.set(2048,2048);jn.shadow.camera.near=.5;jn.shadow.camera.far=30;jn.shadow.camera.left=-5;jn.shadow.camera.right=5;jn.shadow.camera.top=5;jn.shadow.camera.bottom=-5;jn.shadow.bias=-.001;jn.shadow.normalBias=.02;kt.add(jn);var Ch=new ao(16777215,.55*lo);Ch.name="fillLight";Ch.position.set(-4,3,-3);kt.add(Ch);var Dh=new ao(16777215,.35*lo);Dh.name="rimLight";Dh.position.set(0,2,-5);kt.add(Dh);var kc=(new URLSearchParams(location.search).get("env")||Jt.env||"room").toLowerCase();(function(){if(kc==="none")kt.environment=null;else if(kc==="flat"){var e=new Th(256),t=new Tp(.1,10,e),n=new dh;n.background=new Ge(13687008);var i=new ao(16777215,1.5);i.position.set(2,5,3),n.add(i),n.add(new Sh(16777215,1)),t.update(_e,n),kt.environment=e.texture}else{var s=new Ou(_e);kt.environment=s.fromScene(new pb,.04).texture,s.dispose()}kt.environmentIntensity=Jt.envIntensity!=null?Jt.envIntensity:.6,console.info("[Env] mode="+kc+" intensity="+kt.environmentIntensity.toFixed(2)+" lights="+lo.toFixed(2)+" exposure="+_e.toneMappingExposure.toFixed(2))})();var Jn=new S_(10,20,13751771,15067115);Jn.name="gridHelper";Jn.position.y=0;kt.add(Jn);var Ns=!1;Jn.visible=!1;var Xn=null,En=null,co=1,kn=0,ve=null,Yn=[],Js=[],Vr=!1,Sn=null,zc=null,ea=new Map,Xa=!1,gi=null,Xu=null,qu=null,Cl=(Ke.crossSection&&Ke.crossSection.off||[]).map(function(r){return qn(r)}),Ph=(Ke.crossSection&&Ke.crossSection.on||[]).map(function(r){return qn(r)}),Sb=Cl.concat(Ph),Ml=new wp,Xs=new Ye,Vc=new bp;function qf(r){var e={};return r.baseMap&&(e.map=Vc.load(r.baseMap),e.map.colorSpace=Ut),r.normalMap&&(e.normalMap=Vc.load(r.normalMap),e.normalMap.colorSpace=br),r.maskMap&&(e.maskMap=Vc.load(r.maskMap),e.maskMap.colorSpace=br),e}document.title=(Ke.title||"3D Viewer")+" — "+(Ke.version||"");document.getElementById("sidebar-title").textContent=Ke.title||"3D Viewer";document.getElementById("sidebar-subtitle").textContent=Ke.subtitle||"";document.getElementById("version-badge").textContent=Ke.version||"";(!Ke.crossSection||!Ke.crossSection.off.length&&!Ke.crossSection.on.length)&&(document.getElementById("btn-cross-section").style.display="none");Ke.videoUrl||(document.getElementById("btn-video").style.display="none");Ah&&["sidebar","qa-toggle","qa-panel","tour-toggle","debug-toggle","debug-panel","changelog-toggle","changelog-panel"].forEach(function(r){var e=document.getElementById(r);e&&(e.style.display="none")});(function(){var e=document.getElementById("changelog-body"),t=Ke.changelog||[];t.forEach(function(n){var i=document.createElement("div");i.className="changelog-entry";var s=n.date?' <span class="changelog-date">— '+n.date+"</span>":"";i.innerHTML='<div class="changelog-version">'+n.version+s+"</div>";var a=document.createElement("ul");(n.items||[]).forEach(function(o){var l=document.createElement("li");l.textContent=o,a.appendChild(l)}),i.appendChild(a),e.appendChild(i)})})();var Er=Ke.materialDefaults||{},bb=Er.roughness!=null?Er.roughness:.6,Eb=Er.metalness!=null?Er.metalness:.5,Tb=Er.roughnessTextured!=null?Er.roughnessTextured:.55,wb=Er.metalnessTextured!=null?Er.metalnessTextured:.7,Yf=(Ke.crossSection&&Ke.crossSection.transparentParts||[]).map(function(r){return qn(r)}),Ab=Ke.crossSection&&Ke.crossSection.opacity!=null?Ke.crossSection.opacity:.3,Rb=new nb,Ia=Ke.model||{};Rb.load(Ia.url||"assets/gateValve.fbx",function(r){ve=r;var e=Ia.rotation||{};if(r.rotation.set(e.x||0,e.y||Math.PI,e.z||0),r.animations&&r.animations.length>0){Xn=new M_(r);var t=r.animations[0];if(Ia.animation){for(var n=0;n<r.animations.length;n++)if(r.animations[n].name===Ia.animation){t=r.animations[n];break}}(Ia.trackFixes||[]).forEach(function(w){for(var _=w.times||[],T=[],j=new en,D=new nt,k=0;k<_.length;k++)j.set(sn.degToRad(w.xDeg?w.xDeg[k]:0),sn.degToRad(w.yDeg?w.yDeg[k]:0),sn.degToRad(w.zDeg?w.zDeg[k]:0),w.eulerOrder||"ZYX"),D.setFromEuler(j),T.push(D.x,D.y,D.z,D.w);var H=w.node+".quaternion";t.tracks=t.tracks.filter(function(K){return K.name!==H}),t.tracks.push(new Qr(H,_,T)),console.info("[trackfix] rebuilt "+H+" from raw FBX curve ("+_.length+" keys)")}),En=Xn.clipAction(t),co=t.duration,En.paused=!0,En.play(),En.time=0,Xn.update(0)}var i=new hn().setFromObject(r),s=i.getSize(new F),a=i.getCenter(new F),o=Math.max(s.x,s.y,s.z),l=2/o;r.scale.setScalar(l),i.setFromObject(r),i.getCenter(a),r.position.sub(a),r.position.y-=i.min.y;for(var c=Ke.textureSets||[],h=c.length>0?qf(c[0]):{},u=[],d=1;d<c.length;d++)u.push({textures:qf(c[d]),names:(c[d].assignTo||[]).map(function(w){return w.toLowerCase()}),authored:(c[d].authored||[]).map(function(w){return w.toLowerCase()})});function f(w,_){for(var T=0;T<u.length;T++){if(_&&u[T].authored.indexOf(_)!==-1||u[T].names.indexOf(w)!==-1)return u[T].textures;for(var j=0;j<u[T].names.length;j++)if(w.indexOf(u[T].names[j])!==-1)return u[T].textures}return h}function m(w){var _=new Ga({map:w.map||null,normalMap:w.normalMap||null,roughness:bb,metalness:Eb});return w.maskMap&&(_.metalnessMap=w.maskMap,_.roughnessMap=w.maskMap,_.roughness=Tb,_.metalness=wb),_}function x(){return new Ga({color:new Ge(Yi.color||"#9aa0a8"),metalness:Yi.metalness!=null?Yi.metalness:.1,roughness:Yi.roughness!=null?Yi.roughness:.55,side:Bn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})}function g(){return new Ga({color:new Ge(hl.color||"#3dbf7a"),metalness:0,roughness:.35,transparent:!0,opacity:hl.opacity!=null?hl.opacity:.5,side:Bn,depthWrite:!1})}if(console.info("[FBX] Model loaded — traversing meshes..."),r.traverse(function(w){if(w.isMesh){w.castShadow=!0,w.receiveShadow=!0;var _=w.name.toLowerCase(),T=qn(w.name),j=Array.isArray(w.material)?w.material[0]:w.material,D=(j&&j.name?j.name:"").toLowerCase(),k="",H="";Cl.forEach(function(pe){T.indexOf(pe)!==-1&&pe.length>k.length&&(k=pe)}),Ph.forEach(function(pe){T.indexOf(pe)!==-1&&pe.length>H.length&&(H=pe)});var K=k.length>0&&k.length>=H.length,q=H.length>0&&H.length>k.length,X=K||q,W=mb.indexOf(D)!==-1||X,oe=!W&&gb.indexOf(D)!==-1,re=W?x():oe?g():m(f(_,D));_b.forEach(function(pe){_.indexOf(pe.match)!==-1&&re.color.set(pe.color)}),w.material=re,ea.set(w,re),X?(Js.push(w),w.visible=K,console.info('[Cross] "'+w.name+'" mat="'+D+'" group='+(K?"OFF":"ON"))):(Yn.push(w),console.log('[Mesh] "'+w.name+'" mat="'+D+'" '+(W?"FLAT":"textured")))}}),kt.add(r),!pt.position||!pt.target){var p=new hn().setFromObject(r),S=p.getCenter(new F),y=p.getSize(new F),b=Math.max(y.x,y.y,y.z),L=pt.fitScale!=null?pt.fitScale:1.55,P=b*L;pt.target||Mt.target.copy(S),pt.position||Ct.position.set(S.x+P*.6,S.y+P*.45,S.z+P*.7),Mt.update(),console.info("[Camera] Auto-fit — center: ("+S.x.toFixed(2)+", "+S.y.toFixed(2)+", "+S.z.toFixed(2)+"), distance: "+P.toFixed(2))}console.info("[FBX] Total selectable meshes: "+Yn.length+", cross-section meshes: "+Js.length),Cb(),Db()},void 0,function(r){console.error("FBX load error:",r)});function Cb(){var r=document.getElementById("parts-list"),e=(Ke.parts||[]).slice().sort(function(t,n){return(t.label||t.id).localeCompare(n.label||n.id)});r.innerHTML="",e.forEach(function(t){var n=document.createElement("div");n.className="part-item",n.textContent=t.label,n.dataset.partId=t.id,n.addEventListener("click",function(){oa&&uo(),ta(t.id)}),r.appendChild(n)})}function Db(){try{let t=function(n,i){if(r.has(n)){i(r.get(n));return}function s(l){var c=l.naturalWidth||l.width,h=l.naturalHeight||l.height;function u(){var X=document.createElement("canvas");return X.width=c,X.height=h,X}var d=u(),f=d.getContext("2d",{willReadFrequently:!0});f.drawImage(l,0,0,c,h);for(var m=f.getImageData(0,0,c,h).data,x=u(),g=u(),p=u(),S=x.getContext("2d"),y=g.getContext("2d"),b=p.getContext("2d"),L=S.createImageData(c,h),P=y.createImageData(c,h),w=b.createImageData(c,h),_=0;_<m.length;_+=4){var T=m[_],j=m[_+1],D=255-m[_+3];L.data[_]=L.data[_+1]=L.data[_+2]=T,L.data[_+3]=255,P.data[_]=P.data[_+1]=P.data[_+2]=D,P.data[_+3]=255,w.data[_]=w.data[_+1]=w.data[_+2]=j,w.data[_+3]=255}S.putImageData(L,0,0),y.putImageData(P,0,0),b.putImageData(w,0,0);var k=new Va(x),H=new Va(g),K=new Va(p);[k,H,K].forEach(function(X){X.colorSpace=qi,X.anisotropy=_e.capabilities.getMaxAnisotropy()});var q={metal:k,rough:H,ao:K};r.set(n,q),i(q)}var a=n.image;if(a&&(a.complete||a.width))s(a);else var o=setInterval(function(){n.image&&(n.image.complete||n.image.width)&&(clearInterval(o),s(n.image))},80)};var e=t,r=new Map;[].concat(Yn,Js).forEach(function(n){var i=n.geometry;i&&i.attributes.uv&&!i.attributes.uv1&&i.setAttribute("uv1",i.attributes.uv.clone());var s=n.material;if(s&&s.normalMap&&s.normalScale&&Jt.normalScale!=null&&s.normalScale.set(Jt.normalScale,Jt.normalScale),!s||!s.metalnessMap){s&&(s.needsUpdate=!0);return}t(s.metalnessMap,function(a){s.metalnessMap=a.metal,s.roughnessMap=a.rough,s.aoMap=a.ao,s.aoMapIntensity=Jt.aoIntensity!=null?Jt.aoIntensity:.8,s.metalness=Jt.metalness!=null?Jt.metalness:1,s.roughness=Jt.roughness!=null?Jt.roughness:1,s.needsUpdate=!0})}),console.info("[Mask] HDRP mask channels corrected (R=metal, 1-A=rough, G=ao)")}catch(t){console.error("correctHDRPMask failed (leaving original materials):",t)}}function yr(r){var e=(Ke.parts||[]).find(function(n){return n.id===r});if(!e)return[];var t=[qn(r)];return e.merge&&e.merge.forEach(function(n){t.push(qn(n))}),Yn.filter(function(n){var i=qn(n.name);return t.some(function(s){return i.indexOf(s)!==-1})})}function ta(r){r!==Sn&&na(),Sn&&yr(Sn).forEach(function(n){Ci(n)}),document.querySelectorAll(".part-item").forEach(function(n){n.classList.toggle("active",n.dataset.partId===r)}),Sn=r,r&&zr.add(r);var e=yr(r);e.forEach(function(n){var i=ea.get(n);if(i){var s=i.clone();s.emissive=new Ge(6333946),s.emissiveIntensity=.4,n.material=s}});var t=(Ke.parts||[]).find(function(n){return n.id===r});t&&t.description&&!oa&&!Ah?(document.getElementById("info-name").textContent=t.title||t.label,document.getElementById("info-desc").textContent=t.description,document.getElementById("info-panel").style.display="block",document.getElementById("btn-isolate").style.display="inline-flex"):Dl()}function Ci(r){var e=ea.get(r);e&&(e.emissive&&(e.emissiveIntensity=0),r.material=e)}var La=document.getElementById("tooltip");_e.domElement.addEventListener("mousemove",function(r){if(!_e.xr.isPresenting){Xs.x=r.clientX/innerWidth*2-1,Xs.y=-(r.clientY/innerHeight)*2+1,Ml.setFromCamera(Xs,Ct);var e=Ml.intersectObjects(Yn,!1);if(e.length>0){var t=e[0].object;if(t!==zc){zc=t;var n=vr(t),i=n?(Ke.parts||[]).find(function(s){return s.id===n}):null;i&&(La.textContent=i.title||i.label,La.style.display="block")}La.style.left=r.clientX+14+"px",La.style.top=r.clientY+14+"px",_e.domElement.style.cursor="pointer"}else zc=null,La.style.display="none",_e.domElement.style.cursor="default"}});var em=0,tm=0;_e.domElement.addEventListener("pointerdown",function(r){em=r.clientX,tm=r.clientY});_e.domElement.addEventListener("click",function(r){if(!_e.xr.isPresenting&&!gi){Xs.x=r.clientX/innerWidth*2-1,Xs.y=-(r.clientY/innerHeight)*2+1,Ml.setFromCamera(Xs,Ct);var e=Ml.intersectObjects(Yn,!1);if(e.length>0){var t=vr(e[0].object);t&&(oa&&uo(),ta(t))}else Math.abs(r.clientX-em)+Math.abs(r.clientY-tm)<8&&ta(null)}});function qn(r){return r.toLowerCase().replace(/[\s_\-]/g,"")}function vr(r,e){for(var t=qn(r.name),n=Ke.parts||[],i=null,s=0,a=0;a<n.length;a++){var o=n[a],l=[qn(o.id)];o.merge&&o.merge.forEach(function(h){l.push(qn(h))});for(var c=0;c<l.length;c++)t.indexOf(l[c])!==-1&&l[c].length>s&&(s=l[c].length,i=o.id)}return e||console.log('[Identify] mesh="'+r.name+'" norm="'+t+'" → part='+(i||"null")),i}var Mr=document.getElementById("explode-slider");Mr.addEventListener("input",function(){kn=parseFloat(this.value),this.style.setProperty("--pct",kn*100+"%"),Xn&&En&&(En.time=kn*co,Xn.update(0))});var Yu=document.getElementById("zoom-slider");Yu.addEventListener("input",function(){var r=parseFloat(this.value),e=(r-.3)/(3-.3)*100;this.style.setProperty("--zpct",e+"%");var t=Ct.position.clone().sub(Mt.target).normalize();Ct.position.copy(Mt.target).addScaledVector(t,4/r),Mt.update()});document.getElementById("btn-ground").addEventListener("click",function(){Ns=!Ns,Jn.visible=Ns,this.classList.toggle("active",Ns),document.getElementById("ground-label").textContent=Ns?"Grid":"No Grid"});document.getElementById("btn-auto-rotate").addEventListener("click",function(){Xa=!Xa,this.classList.toggle("active",Xa)});document.getElementById("btn-cross-section").addEventListener("click",function(){Vr=!Vr,this.classList.toggle("active",Vr),console.info("[CrossSection] toggled "+(Vr?"ON":"OFF")+" — "+Js.length+" cross meshes, "+Yn.length+" selectable meshes"),Js.forEach(function(r){var e=qn(r.name),t="",n="";Cl.forEach(function(c){e.indexOf(c)!==-1&&c.length>t.length&&(t=c)}),Ph.forEach(function(c){e.indexOf(c)!==-1&&c.length>n.length&&(n=c)});var i=t.length>0&&t.length>=n.length,s=n.length>0&&n.length>t.length;if(console.log('[CrossSection] mesh="'+r.name+'" norm="'+e+'" offMatch="'+t+'" onMatch="'+n+'" → '+(i?"OFF-group":s?"ON-group":"unmatched")),Vr){if(i&&(r.visible=!1),s){r.visible=!0;var a=ea.get(r);if(a){var o=Yi&&Yi.opacity!=null?Yi.opacity:.35,l=a.clone();o>=.999?(l.transparent=!1,l.opacity=1,l.depthWrite=!0):(l.transparent=!0,l.opacity=o,l.depthWrite=!1),l.side=Bn,r.material=l}}}else i&&(r.visible=!0,Ci(r)),s&&(r.visible=!1,Ci(r))}),Yf.length>0&&Yn.forEach(function(r){var e=qn(r.name),t=Yf.some(function(s){return e.indexOf(s)!==-1});if(t)if(Vr){var n=ea.get(r);if(n){var i=n.clone();i.transparent=!0,i.opacity=Ab,i.depthWrite=!1,i.side=Bn,r.material=i}}else Ci(r)})});document.getElementById("btn-video").addEventListener("click",function(){var r=document.getElementById("video-overlay"),e=r.querySelector("iframe");Ke.videoUrl&&(e.src=Ke.videoUrl),r.classList.add("open")});document.getElementById("video-close").addEventListener("click",function(){var r=document.getElementById("video-overlay");r.classList.remove("open"),r.querySelector("iframe").src=""});document.getElementById("video-overlay").addEventListener("click",function(r){r.target===this&&(this.classList.remove("open"),this.querySelector("iframe").src="")});document.getElementById("btn-reset").addEventListener("click",function(){if(pt.position)Ct.position.set(pt.position[0],pt.position[1],pt.position[2]);else if(ve){var r=new hn().setFromObject(ve),e=r.getCenter(new F),t=r.getSize(new F),n=Math.max(t.x,t.y,t.z)*2.2;Ct.position.set(e.x+n*.6,e.y+n*.45,e.z+n*.7)}else Ct.position.set(3,2.5,3);if(pt.target)Mt.target.set(pt.target[0],pt.target[1],pt.target[2]);else if(ve){var i=new hn().setFromObject(ve);i.getCenter(Mt.target)}else Mt.target.set(0,.8,0);Mt.update(),kn=0,Mr.value=0,Mr.style.setProperty("--pct","0%"),Xn&&En&&(En.time=0,Xn.update(0)),Yu.value=1.2,Yu.style.setProperty("--zpct","33%"),Ns=!0,Jn.visible=!0,document.getElementById("btn-ground").classList.add("active"),document.getElementById("ground-label").textContent="Grid",Xa=!1,document.getElementById("btn-auto-rotate").classList.remove("active"),Vr=!1,document.getElementById("btn-cross-section").classList.remove("active"),Js.forEach(function(s){var a=qn(s.name),o="";Sb.forEach(function(c){a.indexOf(c)!==-1&&c.length>o.length&&(o=c)});var l=Cl.indexOf(o)!==-1;s.visible=l,Ci(s)}),Yn.forEach(function(s){Ci(s)}),Sn=null,document.querySelectorAll(".part-item").forEach(function(s){s.classList.remove("active")}),Dl(),gi&&Zr()});document.getElementById("btn-isolate").addEventListener("click",function(){if(gi){Zr();return}Sn&&ju(Sn)});document.getElementById("isolate-exit-btn").addEventListener("click",function(){Zr()});function ju(r){gi&&Zr(),gi=r,Xu=Ct.position.clone(),qu=Mt.target.clone();var e=yr(r),t=(Ke.parts||[]).find(function(h){return h.id===r});if(document.getElementById("isolate-part-name").textContent=t&&t.title||r,document.getElementById("isolate-bar").style.display="flex",document.getElementById("btn-isolate").classList.add("active"),Yn.forEach(function(h){if(e.indexOf(h)===-1){var u=h.material.clone();u.transparent=!0,u.opacity=.08,u.depthWrite=!1,h.material=u}}),e.length>0){var n=new hn;e.forEach(function(h){n.expandByObject(h)});var i=n.getCenter(new F),s=n.getSize(new F),a=Math.max(s.x,s.y,s.z),o=a*3.5,l=i.clone(),c=i.clone().add(new F(o*.6,o*.5,o*.7));_e.xr.isPresenting||Ih(c,l,600)}}function Zr(){gi=null,document.getElementById("isolate-bar").style.display="none",document.getElementById("btn-isolate").classList.remove("active"),Yn.forEach(function(r){Ci(r)}),Sn&&yr(Sn).forEach(function(r){var e=ea.get(r);if(e){var t=e.clone();t.emissive=new Ge(6333946),t.emissiveIntensity=.4,r.material=t}}),Xu&&qu&&!_e.xr.isPresenting&&Ih(Xu,qu,600)}function Ih(r,e,t){var n=Ct.position.clone(),i=Mt.target.clone(),s=performance.now();function a(o){var l=Math.min((o-s)/t,1);l=l*l*(3-2*l),Ct.position.lerpVectors(n,r,l),Mt.target.lerpVectors(i,e,l),Mt.update(),l<1&&requestAnimationFrame(a)}requestAnimationFrame(a)}var Yr=Ke.tourSteps||[],ti=0,oa=!1,Us=!1,dl=null;document.getElementById("tour-toggle").addEventListener("click",function(){oa?uo():Pb()});document.getElementById("tour-close-btn").addEventListener("click",function(){uo()});document.getElementById("tour-prev-btn").addEventListener("click",function(){Lh(ti-1)});document.getElementById("tour-next-btn").addEventListener("click",function(){ti>=Yr.length-1?uo():Lh(ti+1)});document.getElementById("tour-auto-btn").addEventListener("click",function(){Us=!Us,this.classList.toggle("playing",Us),Us?dl=setInterval(function(){ti<Yr.length-1?Lh(ti+1):(Us=!1,clearInterval(dl),document.getElementById("tour-auto-btn").classList.remove("playing"))},5e3):clearInterval(dl)});function Pb(){oa=!0,Dl(),ti=0,document.getElementById("tour-toggle").classList.add("active"),kn=1,Mr.value=1,Mr.style.setProperty("--pct","100%"),Xn&&En&&(En.time=co,Xn.update(0)),nm()}function uo(){oa=!1,Us=!1,clearInterval(dl),na(),document.getElementById("tour-overlay").classList.remove("visible"),document.getElementById("tour-toggle").classList.remove("active"),document.getElementById("tour-auto-btn").classList.remove("playing"),Yn.forEach(function(r){Ci(r)}),Sn=null,document.querySelectorAll(".part-item").forEach(function(r){r.classList.remove("active")}),Dl()}function Lh(r){r<0||r>=Yr.length||(na(),ti=r,nm())}function nm(){var r=Yr[ti],e=r.title,t=r.text;if(r.partId&&(!e||!t)){var n=(Ke.parts||[]).find(function(g){return g.id===r.partId});n&&(e||(e=n.title||n.label),t||(t=n.tourText||n.description||""))}if(document.getElementById("tour-step-label").textContent="Step "+(ti+1)+" of "+Yr.length,document.getElementById("tour-component-name").textContent=e||"",document.getElementById("tour-desc").textContent=t||"",document.getElementById("tour-progress-fill").style.width=(ti+1)/Yr.length*100+"%",document.getElementById("tour-prev-btn").disabled=ti===0,document.getElementById("tour-next-btn").textContent=ti>=Yr.length-1?"Finish":"Next →",document.getElementById("tour-overlay").classList.add("visible"),Yn.forEach(function(g){Ci(g)}),r.partId){ta(r.partId);var i=yr(r.partId);if(i.length>0){var s=new hn;i.forEach(function(g){s.expandByObject(g)});var a=s.getCenter(new F),o=s.getSize(new F),l=Math.max(o.x,o.y,o.z),c=l*4,h=a.clone().add(new F(c*.6,c*.4,c*.7));Ih(h,a,800)}}else{if(pt.position)Ct.position.set(pt.position[0],pt.position[1],pt.position[2]);else if(ve){var u=new hn().setFromObject(ve),d=u.getCenter(new F),f=u.getSize(new F),m=Math.max(f.x,f.y,f.z)*2.2;Ct.position.set(d.x+m*.6,d.y+m*.45,d.z+m*.7)}else Ct.position.set(3,2.5,3);if(pt.target)Mt.target.set(pt.target[0],pt.target[1],pt.target[2]);else if(ve){var x=new hn().setFromObject(ve);x.getCenter(Mt.target)}else Mt.target.set(0,.8,0);Mt.update()}}var Xi=null;function na(){"speechSynthesis"in window&&speechSynthesis.cancel(),Xi&&(Xi.classList.remove("speaking"),Xi=null)}function Dl(){document.getElementById("info-panel").style.display="none",na()}document.getElementById("info-tts").addEventListener("click",function(){im(document.getElementById("info-desc").textContent,this)});document.getElementById("tour-tts").addEventListener("click",function(){im(document.getElementById("tour-desc").textContent,this)});function im(r,e){if("speechSynthesis"in window){if(Xi===e&&(speechSynthesis.speaking||speechSynthesis.pending)){na();return}if(na(),!!r){var t=new SpeechSynthesisUtterance(r);t.rate=.95;for(var n=speechSynthesis.getVoices(),i=0;i<n.length;i++)if(n[i].lang.indexOf("en")===0){t.voice=n[i];break}Xi=e,e&&e.classList.add("speaking"),t.onend=function(){e&&e.classList.remove("speaking"),Xi===e&&(Xi=null)},t.onerror=function(){e&&e.classList.remove("speaking"),Xi===e&&(Xi=null)},speechSynthesis.speak(t)}}}document.getElementById("fullscreen-toggle").addEventListener("click",function(){document.fullscreenElement?(document.exitFullscreen(),this.classList.remove("active")):(document.documentElement.requestFullscreen(),this.classList.add("active"))});document.addEventListener("fullscreenchange",function(){document.getElementById("fullscreen-toggle").classList.toggle("active",!!document.fullscreenElement)});var rm=document.getElementById("debug-panel"),gr=document.getElementById("debug-body"),sm=document.getElementById("debug-count"),Zu=0,Oa=!1;document.getElementById("debug-toggle").addEventListener("click",function(){Oa=!Oa,rm.classList.toggle("open",Oa),this.classList.toggle("active",Oa)});document.getElementById("debug-close").addEventListener("click",function(){Oa=!1,rm.classList.remove("open"),document.getElementById("debug-toggle").classList.remove("active")});document.getElementById("debug-clear").addEventListener("click",function(){gr.innerHTML='<div class="debug-empty">No log entries yet</div>',Zu=0,sm.textContent="0"});document.getElementById("debug-copy-cam").addEventListener("click",function(){var r=this,e=Ct.position,t=Mt.target,n=`camera: {
  position:    [`+e.x.toFixed(3)+", "+e.y.toFixed(3)+", "+e.z.toFixed(3)+`],
  target:      [`+t.x.toFixed(3)+", "+t.y.toFixed(3)+", "+t.z.toFixed(3)+`],
  fov:         `+Ct.fov+`,
  near:        `+Ct.near+`,
  far:         `+Ct.far+`,
  minDistance:  `+Mt.minDistance+`,
  maxDistance:  `+Mt.maxDistance+`,
},`;navigator.clipboard.writeText(n).then(function(){r.textContent="✓ Copied!",r.classList.add("copied"),console.info(`[Camera] Config copied to clipboard:
`+n),setTimeout(function(){r.textContent="📷 Copy Camera",r.classList.remove("copied")},2e3)}).catch(function(){console.info(`[Camera] Copy failed — config block:
`+n)})});function Ib(){var r=new Date,e=String(r.getHours()).padStart(2,"0"),t=String(r.getMinutes()).padStart(2,"0"),n=String(r.getSeconds()).padStart(2,"0"),i=String(r.getMilliseconds()).padStart(3,"0");return e+":"+t+":"+n+"."+i}function ho(r,e){var t=gr.querySelector(".debug-empty");t&&t.remove();var n=Array.prototype.slice.call(e).map(function(o){if(typeof o=="object")try{return JSON.stringify(o,null,0)}catch{return String(o)}return String(o)}).join(" "),i=document.createElement("div");i.className="debug-entry debug-"+r;var s='<span class="debug-time">'+Ib()+"</span>",a='<span class="debug-tag">'+r+"</span>";for(i.innerHTML=s+a+n.replace(/</g,"&lt;").replace(/>/g,"&gt;"),gr.appendChild(i),Zu++,sm.textContent=Zu;gr.children.length>500;)gr.removeChild(gr.firstChild);gr.scrollTop=gr.scrollHeight}var Lb=console.log,Fb=console.warn,Nb=console.error,Ub=console.info;console.log=function(){Lb.apply(console,arguments),ho("log",arguments)};console.warn=function(){Fb.apply(console,arguments),ho("warn",arguments)};console.error=function(){Nb.apply(console,arguments),ho("error",arguments)};console.info=function(){Ub.apply(console,arguments),ho("info",arguments)};window.addEventListener("error",function(r){ho("error",["Uncaught: "+r.message+" at "+r.filename+":"+r.lineno])});document.getElementById("changelog-toggle").addEventListener("click",function(){var r=document.getElementById("changelog-panel");r.classList.toggle("open")});document.getElementById("changelog-close").addEventListener("click",function(){document.getElementById("changelog-panel").classList.remove("open")});document.getElementById("qa-send").addEventListener("click",function(){am()});document.getElementById("qa-input").addEventListener("keydown",function(r){r.key==="Enter"&&am()});function am(){var r=document.getElementById("qa-input"),e=r.value.trim();if(e){r.value="",jf(e,"qa-user");for(var t=Ke.qa||[],n="I'm not sure about that. Try asking about materials, pressure ratings, temperature, or how the valve works.",i=e.toLowerCase(),s=0;s<t.length;s++){var a=t[s].keywords.some(function(o){return i.indexOf(o)!==-1});if(a){n=t[s].answer;break}}setTimeout(function(){jf(n,"qa-assistant")},300)}}function jf(r,e){var t=document.getElementById("qa-log"),n=document.createElement("div");n.className="qa-msg "+e,n.textContent=r,t.appendChild(n),t.scrollTop=t.scrollHeight}document.querySelectorAll(".drag-handle").forEach(function(r){var e=r.closest("#info-panel, #qa-panel, #tour-overlay, #changelog-panel");if(!e)return;var t=!1,n,i,s,a;function o(h){t=!0;var u=h.touches?h.touches[0]:h;n=u.clientX,i=u.clientY;var d=e.getBoundingClientRect();s=d.left,a=d.top,h.preventDefault()}function l(h){if(t){var u=h.touches?h.touches[0]:h;e.style.left=s+u.clientX-n+"px",e.style.top=a+u.clientY-i+"px",e.style.bottom="auto",e.style.right="auto"}}function c(){t=!1}r.addEventListener("mousedown",o),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),r.addEventListener("touchstart",o,{passive:!1}),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c)});window.addEventListener("resize",function(){Ct.aspect=innerWidth/innerHeight,Ct.updateProjectionMatrix(),_e.setSize(innerWidth,innerHeight)});var Zf=new o_;function Ob(){Zf.update();var r=Zf.getDelta();if(Mt.update(),Xa&&ve&&!_e.xr.isPresenting&&(ve.rotation.y+=r*.5),Qp(),Mb(),jr&&_e.xr.isPresenting){var e=_e.xr.getCamera();if(e.cameras&&e.cameras.length===2){var t=e.cameras[0],n=e.cameras[1];n.matrixWorld.copy(t.matrixWorld),n.matrixWorldInverse.copy(t.matrixWorldInverse),n.projectionMatrix.copy(t.projectionMatrix),n.projectionMatrixInverse.copy(t.projectionMatrixInverse)}}if(_e.render(kt,Ct),yl&&!Xf&&ve&&!_e.xr.isPresenting&&++vb>45){Xf=!0;var i=480,s=270,a=_e.getSize(new Ye),o=_e.getPixelRatio(),l=Ct.aspect;_e.setPixelRatio(1),_e.setSize(i,s,!1),Ct.aspect=i/s,Ct.updateProjectionMatrix(),_e.render(kt,Ct);var c=document.createElement("canvas");c.width=i,c.height=s,c.getContext("2d").drawImage(_e.domElement,0,0,i,s),_e.setPixelRatio(o),_e.setSize(a.x,a.y,!1),Ct.aspect=l,Ct.updateProjectionMatrix(),yl(c.toDataURL("image/png"))}}_e.setAnimationLoop(Ob);_e.xr.addEventListener("sessionstart",function(){window.WXRZ_PRESENTING=!0});_e.xr.addEventListener("sessionend",function(){window.WXRZ_PRESENTING=!1});
