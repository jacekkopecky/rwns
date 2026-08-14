(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const wu="183",Bs={ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ig=0,Dh=1,Dg=2,Ka=1,Ng=2,Er=3,Di=0,an=1,Be=2,ci=0,ks=1,Nh=2,Uh=3,Fh=4,Ug=5,ji=100,Fg=101,Og=102,Bg=103,kg=104,zg=200,Vg=201,Gg=202,Hg=203,sl=204,rl=205,Wg=206,Xg=207,qg=208,Yg=209,jg=210,$g=211,Zg=212,Kg=213,Jg=214,al=0,ol=1,cl=2,Hs=3,ll=4,ul=5,hl=6,dl=7,Tu=0,Qg=1,t0=2,Gn=0,Xf=1,qf=2,Yf=3,jf=4,$f=5,Zf=6,Kf=7,Oh="attached",e0="detached",Jf=300,ts=301,Ws=302,ec=303,nc=304,Oo=306,fl=1e3,ri=1001,pl=1002,ke=1003,n0=1004,da=1005,je=1006,ic=1007,Zi=1008,fn=1009,Qf=1010,tp=1011,Br=1012,Au=1013,Xn=1014,Ln=1015,ui=1016,Cu=1017,Ru=1018,kr=1020,ep=35902,np=35899,ip=1021,sp=1022,xn=1023,hi=1026,Ki=1027,rp=1028,Pu=1029,Xs=1030,Lu=1031,Iu=1033,Ja=33776,Qa=33777,to=33778,eo=33779,ml=35840,gl=35841,_l=35842,vl=35843,xl=36196,yl=37492,Sl=37496,Ml=37488,bl=37489,El=37490,wl=37491,Tl=37808,Al=37809,Cl=37810,Rl=37811,Pl=37812,Ll=37813,Il=37814,Dl=37815,Nl=37816,Ul=37817,Fl=37818,Ol=37819,Bl=37820,kl=37821,zl=36492,Vl=36494,Gl=36495,Hl=36283,Wl=36284,Xl=36285,ql=36286,ap=2200,ta=2201,op=2202,go=2300,Dn=2301,Hn=2302,Bh=2303,Ds=2400,Ns=2401,_o=2402,Du=2500,i0=2501,s0=3200,Nu=0,r0=1,Ti="",Ye="srgb",qs="srgb-linear",vo="linear",se="srgb",ls=7680,kh=519,a0=512,o0=513,c0=514,Uu=515,l0=516,u0=517,Fu=518,h0=519,Yl=35044,zh="300 es",Vn=2e3,zr=2001;function d0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function f0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function p0(){const n=Vr("canvas");return n.style.display="block",n}const Vh={};function xo(...n){const t="THREE."+n.shift();console.log(t,...n)}function cp(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=cp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Bt(...n){n=cp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function yo(...n){const t=n.join(" ");t in Vh||(Vh[t]=!0,Nt(...n))}function m0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const g0={[al]:ol,[cl]:hl,[ll]:dl,[Hs]:ul,[ol]:al,[hl]:cl,[dl]:ll,[ul]:Hs};class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const Rr=Math.PI/180,Gr=180/Math.PI;function Sn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function Ou(n,t){return(n%t+t)%t}function _0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function v0(n,t,e){return n!==t?(e-n)/(t-n):0}function Pr(n,t,e){return(1-e)*n+e*t}function x0(n,t,e,i){return Pr(n,t,1-Math.exp(-e*i))}function y0(n,t=1){return t-Math.abs(Ou(n,t*2)-t)}function S0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function M0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function b0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function E0(n,t){return n+Math.random()*(t-n)}function w0(n){return n*(.5-Math.random())}function T0(n){n!==void 0&&(Gh=n);let t=Gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function A0(n){return n*Rr}function C0(n){return n*Gr}function R0(n){return(n&n-1)===0&&n!==0}function P0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function L0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function I0(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),f=r((i-t)/2),p=a((i-t)/2);switch(s){case"XYX":n.set(o*u,c*d,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*p,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*p,o*l);break;case"ZYZ":n.set(c*p,c*f,o*u,o*l);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lp={DEG2RAD:Rr,RAD2DEG:Gr,generateUUID:Sn,clamp:qt,euclideanModulo:Ou,mapLinear:_0,inverseLerp:v0,lerp:Pr,damp:x0,pingpong:y0,smoothstep:S0,smootherstep:M0,randInt:b0,randFloat:E0,randFloatSpread:w0,seededRandom:T0,degToRad:A0,radToDeg:C0,isPowerOfTwo:R0,ceilPowerOfTwo:P0,floorPowerOfTwo:L0,setQuaternionFromProperEuler:I0,normalize:re,denormalize:Pn};class q{constructor(t=0,e=0){q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],p=r[a+2],S=r[a+3];if(d!==S||c!==h||l!==f||u!==p){let g=c*h+l*f+u*p+d*S;g<0&&(h=-h,f=-f,p=-p,S=-S,g=-g);let m=1-o;if(g<.9995){const y=Math.acos(g),M=Math.sin(y);m=Math.sin(m*y)/M,o=Math.sin(o*y)/M,c=c*m+h*o,l=l*m+f*o,u=u*m+p*o,d=d*m+S*o}else{c=c*m+h*o,l=l*m+f*o,u=u*m+p*o,d=d*m+S*o;const y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+u*d+c*f-l*h,t[e+1]=c*p+u*h+l*d-o*f,t[e+2]=l*p+u*f+o*h-c*d,t[e+3]=u*p-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),h=c(i/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"YZX":this._x=h*u*d+l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d-h*f*p;break;case"XZY":this._x=h*u*d-l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d+h*f*p;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sc.copy(this).projectOnVector(t),this.sub(sc)}reflect(t){return this.sub(sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sc=new L,Hh=new Mn;class Yt{constructor(t,e,i,s,r,a,o,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],S=s[0],g=s[3],m=s[6],y=s[1],M=s[4],x=s[7],T=s[2],A=s[5],C=s[8];return r[0]=a*S+o*y+c*T,r[3]=a*g+o*M+c*A,r[6]=a*m+o*x+c*C,r[1]=l*S+u*y+d*T,r[4]=l*g+u*M+d*A,r[7]=l*m+u*x+d*C,r[2]=h*S+f*y+p*T,r[5]=h*g+f*M+p*A,r[8]=h*m+f*x+p*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,p=e*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/p;return t[0]=d*S,t[1]=(s*l-u*i)*S,t[2]=(o*i-s*a)*S,t[3]=h*S,t[4]=(u*e-s*c)*S,t[5]=(s*r-o*e)*S,t[6]=f*S,t[7]=(i*c-l*e)*S,t[8]=(a*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(rc.makeScale(t,e)),this}rotate(t){return this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new Yt,Wh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D0(){const n={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===se&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qs]:{primaries:t,whitePoint:i,transfer:vo,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:i,transfer:se,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),n}const Qt=D0();function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class N0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{us===void 0&&(us=Vr("canvas")),us.width=t.width,us.height=t.height;const s=us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=us}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(li(e[i]/255)*255):e[i]=li(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let U0=0;class Bu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ac(s[a].image)):r.push(ac(s[a]))}else r=ac(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?N0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let F0=0;const oc=new L;class Ve extends Fi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=ri,s=ri,r=je,a=Zi,o=xn,c=fn,l=Ve.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Sn(),this.name="",this.source=new Bu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oc).x}get height(){return this.source.getSize(oc).y}get depth(){return this.source.getSize(oc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fl:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fl:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Jf;Ve.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],p=c[9],S=c[2],g=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(f+1)/2,T=(m+1)/2,A=(u+h)/4,C=(d+S)/4,_=(p+g)/4;return M>x&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=C/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=_/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=_/r),this.set(i,s,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-S)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O0 extends Fi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Ve(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends O0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class up extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class B0 extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jt{constructor(t,e,i,s,r,a,o,c,l,u,d,h,f,p,S,g){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,u,d,h,f,p,S,g)}set(t,e,i,s,r,a,o,c,l,u,d,h,f,p,S,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=S,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,p=o*u,S=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+p*l,e[5]=h-S*l,e[9]=-o*c,e[2]=S-h*l,e[6]=p+f*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,p=l*u,S=l*d;e[0]=h+S*o,e[4]=p*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-p,e[6]=S+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,p=l*u,S=l*d;e[0]=h-S*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,f=a*d,p=o*u,S=o*d;e[0]=c*u,e[4]=p*l-f,e[8]=h*l+S,e[1]=c*d,e[5]=S*l+h,e[9]=f*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,f=a*l,p=o*c,S=o*l;e[0]=c*u,e[4]=S-h*d,e[8]=p*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+p,e[10]=h-S*d}else if(t.order==="XZY"){const h=a*c,f=a*l,p=o*c,S=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+S,e[5]=a*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(k0,t,z0)}lookAt(t,e,i){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),xi.crossVectors(i,ln),xi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),xi.crossVectors(i,ln)),xi.normalize(),fa.crossVectors(ln,xi),s[0]=xi.x,s[4]=fa.x,s[8]=ln.x,s[1]=xi.y,s[5]=fa.y,s[9]=ln.y,s[2]=xi.z,s[6]=fa.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],S=i[6],g=i[10],m=i[14],y=i[3],M=i[7],x=i[11],T=i[15],A=s[0],C=s[4],_=s[8],b=s[12],F=s[1],P=s[5],N=s[9],k=s[13],H=s[2],B=s[6],z=s[10],O=s[14],it=s[3],Q=s[7],mt=s[11],_t=s[15];return r[0]=a*A+o*F+c*H+l*it,r[4]=a*C+o*P+c*B+l*Q,r[8]=a*_+o*N+c*z+l*mt,r[12]=a*b+o*k+c*O+l*_t,r[1]=u*A+d*F+h*H+f*it,r[5]=u*C+d*P+h*B+f*Q,r[9]=u*_+d*N+h*z+f*mt,r[13]=u*b+d*k+h*O+f*_t,r[2]=p*A+S*F+g*H+m*it,r[6]=p*C+S*P+g*B+m*Q,r[10]=p*_+S*N+g*z+m*mt,r[14]=p*b+S*k+g*O+m*_t,r[3]=y*A+M*F+x*H+T*it,r[7]=y*C+M*P+x*B+T*Q,r[11]=y*_+M*N+x*z+T*mt,r[15]=y*b+M*k+x*O+T*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],S=t[7],g=t[11],m=t[15],y=c*f-l*h,M=o*f-l*d,x=o*h-c*d,T=a*f-l*u,A=a*h-c*u,C=a*d-o*u;return e*(S*y-g*M+m*x)-i*(p*y-g*T+m*A)+s*(p*M-S*T+m*C)-r*(p*x-S*A+g*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],S=t[13],g=t[14],m=t[15],y=e*o-i*a,M=e*c-s*a,x=e*l-r*a,T=i*c-s*o,A=i*l-r*o,C=s*l-r*c,_=u*S-d*p,b=u*g-h*p,F=u*m-f*p,P=d*g-h*S,N=d*m-f*S,k=h*m-f*g,H=y*k-M*N+x*P+T*F-A*b+C*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=(o*k-c*N+l*P)*B,t[1]=(s*N-i*k-r*P)*B,t[2]=(S*C-g*A+m*T)*B,t[3]=(h*A-d*C-f*T)*B,t[4]=(c*F-a*k-l*b)*B,t[5]=(e*k-s*F+r*b)*B,t[6]=(g*x-p*C-m*M)*B,t[7]=(u*C-h*x+f*M)*B,t[8]=(a*N-o*F+l*_)*B,t[9]=(i*F-e*N-r*_)*B,t[10]=(p*A-S*x+m*y)*B,t[11]=(d*x-u*A-f*y)*B,t[12]=(o*b-a*P-c*_)*B,t[13]=(e*P-i*b+s*_)*B,t[14]=(S*M-p*T-g*y)*B,t[15]=(u*T-d*M+h*y)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,p=r*d,S=a*u,g=a*d,m=o*d,y=c*l,M=c*u,x=c*d,T=i.x,A=i.y,C=i.z;return s[0]=(1-(S+m))*T,s[1]=(f+x)*T,s[2]=(p-M)*T,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(h+m))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(p+M)*C,s[9]=(g-y)*C,s[10]=(1-(h+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let a=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),c=hs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);const l=1/a,u=1/o,d=1/c;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=Vn,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let p,S;if(c)p=r/(a-r),S=a*r/(a-r);else if(o===Vn)p=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===zr)p=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Vn,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let p,S;if(c)p=1/(a-r),S=a/(a-r);else if(o===Vn)p=-2/(a-r),S=-(a+r)/(a-r);else if(o===zr)p=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hs=new L,An=new Jt,k0=new L(0,0,0),z0=new L(1,1,1),xi=new L,fa=new L,ln=new L,qh=new Jt,Yh=new Mn;class Un{constructor(t=0,e=0,i=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class hp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let V0=0;const jh=new L,ds=new Mn,Qn=new Jt,pa=new L,lr=new L,G0=new L,H0=new Mn,$h=new L(1,0,0),Zh=new L(0,1,0),Kh=new L(0,0,1),Jh={type:"added"},W0={type:"removed"},fs={type:"childadded",child:null},cc={type:"childremoved",child:null};class Re extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new L,e=new Un,i=new Mn,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Yt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis($h,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis(Kh,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($h,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis(Kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?pa.copy(t):pa.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(lr,pa,this.up):Qn.lookAt(pa,lr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(Qn),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jh),fs.child=t,this.dispatchEvent(fs),fs.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(W0),cc.child=t,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,G0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,H0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Re.DEFAULT_UP=new L(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let Je=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}};const X0={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const g=e.getJointPose(S,i),m=this._getHandJoint(l,S);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ma={h:0,s:0,l:0};function uc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=Ou(t,1),e=qt(e,0,1),i=qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=uc(a,r,t+1/3),this.g=uc(a,r,t),this.b=uc(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const i=dp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return Qt.workingToColorSpace(Xe.copy(this),t),Math.round(qt(Xe.r*255,0,255))*65536+Math.round(qt(Xe.g*255,0,255))*256+Math.round(qt(Xe.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Xe.copy(this),e);const i=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Ye){Qt.workingToColorSpace(Xe.copy(this),t);const e=Xe.r,i=Xe.g,s=Xe.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(ma);const i=Pr(yi.h,ma.h,e),s=Pr(yi.s,ma.s,e),r=Pr(yi.l,ma.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Vt;Vt.NAMES=dp;class ku{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=i}clone(){return new ku(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class q0 extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Cn=new L,ti=new L,hc=new L,ei=new L,ps=new L,ms=new L,Qh=new L,dc=new L,fc=new L,pc=new L,mc=new ge,gc=new ge,_c=new ge;class vn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Cn.subVectors(s,e),ti.subVectors(i,e),hc.subVectors(t,e);const a=Cn.dot(Cn),o=Cn.dot(ti),c=Cn.dot(hc),l=ti.dot(ti),u=ti.dot(hc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,p=(a*u-o*c)*h;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(a,ei.y),c.addScaledVector(o,ei.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return mc.setScalar(0),gc.setScalar(0),_c.setScalar(0),mc.fromBufferAttribute(t,e),gc.fromBufferAttribute(t,i),_c.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(mc,r.x),a.addScaledVector(gc,r.y),a.addScaledVector(_c,r.z),a}static isFrontFacing(t,e,i,s){return Cn.subVectors(i,e),ti.subVectors(t,e),Cn.cross(ti).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Cn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,i),ms.subVectors(r,i),dc.subVectors(t,i);const c=ps.dot(dc),l=ms.dot(dc);if(c<=0&&l<=0)return e.copy(i);fc.subVectors(t,s);const u=ps.dot(fc),d=ms.dot(fc);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(ps,a);pc.subVectors(t,r);const f=ps.dot(pc),p=ms.dot(pc);if(p>=0&&f<=p)return e.copy(r);const S=f*l-c*p;if(S<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(ms,o);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return Qh.subVectors(r,s),o=(d-u)/(d-u+(f-p)),e.copy(s).addScaledVector(Qh,o);const m=1/(g+S+h);return a=S*m,o=h*m,e.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class er{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),_a.subVectors(this.max,ur),gs.subVectors(t.a,ur),_s.subVectors(t.b,ur),vs.subVectors(t.c,ur),Si.subVectors(_s,gs),Mi.subVectors(vs,_s),ki.subVectors(gs,vs);let e=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-ki.z,ki.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,ki.z,0,-ki.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-ki.y,ki.x,0];return!vc(e,gs,_s,vs,_a)||(e=[1,0,0,0,1,0,0,0,1],!vc(e,gs,_s,vs,_a))?!1:(va.crossVectors(Si,Mi),e=[va.x,va.y,va.z],vc(e,gs,_s,vs,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ni=[new L,new L,new L,new L,new L,new L,new L,new L],Rn=new L,ga=new er,gs=new L,_s=new L,vs=new L,Si=new L,Mi=new L,ki=new L,ur=new L,_a=new L,va=new L,zi=new L;function vc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){zi.fromArray(n,r);const o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const we=new L,xa=new q;let Y0=0;class Ge{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yl&&(t.usage=this.usage),t}}class zu extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fp extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class pe extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}}const j0=new er,hr=new L,xc=new L;class ea{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):j0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(xc)),this.expandByPoint(hr.copy(t.center).sub(xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $0=0;const pn=new Jt,yc=new Re,xs=new L,un=new er,dr=new er,De=new L;class Ee extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(d0(t)?fp:zu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,i){return pn.makeTranslation(t,e,i),this.applyMatrix4(pn),this}scale(t,e,i){return pn.makeScale(t,e,i),this.applyMatrix4(pn),this}lookAt(t){return yc.lookAt(t),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(un.min,dr.min),un.expandByPoint(De),De.addVectors(un.max,dr.max),un.expandByPoint(De)):(un.expandByPoint(dr.min),un.expandByPoint(dr.max))}un.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)De.fromBufferAttribute(o,l),c&&(xs.fromBufferAttribute(t,l),De.add(xs)),s=Math.max(s,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new L,c[_]=new L;const l=new L,u=new L,d=new L,h=new q,f=new q,p=new q,S=new L,g=new L;function m(_,b,F){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,F),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,F),u.sub(l),d.sub(l),f.sub(h),p.sub(h);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(S.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(P),o[_].add(S),o[b].add(S),o[F].add(S),c[_].add(g),c[b].add(g),c[F].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,b=y.length;_<b;++_){const F=y[_],P=F.start,N=F.count;for(let k=P,H=P+N;k<H;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new L,x=new L,T=new L,A=new L;function C(_){T.fromBufferAttribute(s,_),A.copy(T);const b=o[_];M.copy(b),M.sub(T.multiplyScalar(T.dot(b))).normalize(),x.crossVectors(A,b);const P=x.dot(c[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,P)}for(let _=0,b=y.length;_<b;++_){const F=y[_],P=F.start,N=F.count;for(let k=P,H=P+N;k<H;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,d=new L;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),S=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,p=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*u;for(let m=0;m<u;m++)h[p++]=l[f++]}return new Ge(h,u,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yl,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new L;class So{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){xo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new So(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){xo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let K0=0;class ns extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=ks,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bo extends ns{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ys;const fr=new L,Ss=new L,Ms=new L,bs=new q,pr=new q,pp=new Jt,ya=new L,mr=new L,Sa=new L,td=new q,Sc=new q,ed=new q;class Vu extends Re{constructor(t=new Bo){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Z0(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new So(i,3,0,!1)),ys.setAttribute("uv",new So(i,2,3,!1))}this.geometry=ys,this.material=t,this.center=new q(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),pp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Ms.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Ma(ya.set(-.5,-.5,0),Ms,a,Ss,s,r),Ma(mr.set(.5,-.5,0),Ms,a,Ss,s,r),Ma(Sa.set(.5,.5,0),Ms,a,Ss,s,r),td.set(0,0),Sc.set(1,0),ed.set(1,1);let o=t.ray.intersectTriangle(ya,mr,Sa,!1,fr);if(o===null&&(Ma(mr.set(-.5,.5,0),Ms,a,Ss,s,r),Sc.set(0,1),o=t.ray.intersectTriangle(ya,Sa,mr,!1,fr),o===null))return;const c=t.ray.origin.distanceTo(fr);c<t.near||c>t.far||e.push({distance:c,point:fr.clone(),uv:vn.getInterpolation(fr,ya,mr,Sa,td,Sc,ed,new q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ma(n,t,e,i,s,r){bs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(pr.x=r*bs.x-s*bs.y,pr.y=s*bs.x+r*bs.y):pr.copy(bs),n.copy(t),n.x+=pr.x,n.y+=pr.y,n.applyMatrix4(pp)}const ii=new L,Mc=new L,ba=new L,bi=new L,bc=new L,Ea=new L,Ec=new L;class Gu{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Mc.copy(t).add(e).multiplyScalar(.5),ba.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(Mc);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ba),o=bi.dot(this.direction),c=-bi.dot(ba),l=bi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*c-o,h=a*o-c,p=r*u,d>=0)if(h>=-p)if(h<=p){const S=1/u;d*=S,h*=S,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=p?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mc).addScaledVector(ba,h),f}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,i,s,r){bc.subVectors(e,t),Ea.subVectors(i,t),Ec.crossVectors(bc,Ea);let a=this.direction.dot(Ec),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,t);const c=o*this.direction.dot(Ea.crossVectors(bi,Ea));if(c<0)return null;const l=o*this.direction.dot(bc.cross(bi));if(l<0||c+l>a)return null;const u=-o*bi.dot(Ec);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ko extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nd=new Jt,Vi=new Gu,wa=new ea,id=new L,Ta=new L,Aa=new L,Ca=new L,wc=new L,Ra=new L,sd=new L,Pa=new L;class Kt extends Re{constructor(t=new Ee,e=new ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(wc.fromBufferAttribute(d,t),a?Ra.addScaledVector(wc,u):Ra.addScaledVector(wc.sub(e),u))}e.add(Ra)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(wa.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(wa,id)===null||Vi.origin.distanceToSquared(id)>(t.far-t.near)**2))&&(nd.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(nd),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,S=h.length;p<S;p++){const g=h[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,T=M;x<T;x+=3){const A=o.getX(x),C=o.getX(x+1),_=o.getX(x+2);s=La(this,m,t,i,l,u,d,A,C,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let g=p,m=S;g<m;g+=3){const y=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);s=La(this,a,t,i,l,u,d,y,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,S=h.length;p<S;p++){const g=h[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,T=M;x<T;x+=3){const A=x,C=x+1,_=x+2;s=La(this,m,t,i,l,u,d,A,C,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let g=p,m=S;g<m;g+=3){const y=g,M=g+1,x=g+2;s=La(this,a,t,i,l,u,d,y,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function J0(n,t,e,i,s,r,a,o){let c;if(t.side===an?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Di,o),c===null)return null;Pa.copy(o),Pa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Pa);return l<e.near||l>e.far?null:{distance:l,point:Pa.clone(),object:n}}function La(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Ta),n.getVertexPosition(c,Aa),n.getVertexPosition(l,Ca);const u=J0(n,t,e,i,Ta,Aa,Ca,sd);if(u){const d=new L;vn.getBarycoord(sd,Ta,Aa,Ca,d),s&&(u.uv=vn.getInterpolatedAttribute(s,o,c,l,d,new q)),r&&(u.uv1=vn.getInterpolatedAttribute(r,o,c,l,d,new q)),a&&(u.normal=vn.getInterpolatedAttribute(a,o,c,l,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new L,materialIndex:0};vn.getNormal(Ta,Aa,Ca,h.normal),u.face=h,u.barycoord=d}return u}const rd=new L,ad=new ge,od=new ge,Q0=new L,cd=new Jt,Ia=new L,Tc=new ea,ld=new Jt,Ac=new Gu;class t_ extends Kt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oh,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new er),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ea),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ia),this.boundingSphere.expandByPoint(Ia)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tc.copy(this.boundingSphere),Tc.applyMatrix4(s),t.ray.intersectsSphere(Tc)!==!1&&(ld.copy(s).invert(),Ac.copy(t.ray).applyMatrix4(ld),!(this.boundingBox!==null&&Ac.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ac)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ge,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===e0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,s=this.geometry;ad.fromBufferAttribute(s.attributes.skinIndex,t),od.fromBufferAttribute(s.attributes.skinWeight,t),rd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=od.getComponent(r);if(a!==0){const o=ad.getComponent(r);cd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(Q0.copy(rd).applyMatrix4(cd),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class jl extends Re{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mp extends Ve{constructor(t=null,e=1,i=1,s,r,a,o,c,l=ke,u=ke,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ud=new Jt,e_=new Jt;class Hu{constructor(t=[],e=[]){this.uuid=Sn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Jt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:e_;ud.multiplyMatrices(o,e[r]),ud.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Hu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new mp(e,t,t,xn,Ln);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){const r=t.bones[i];let a=e[r];a===void 0&&(Nt("Skeleton: No bone found with UUID:",r),a=new jl),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=i[s];t.boneInverses.push(o.toArray())}return t}}const Cc=new L,n_=new L,i_=new Yt;class wi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Cc.subVectors(i,e).cross(n_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Cc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||i_.getNormalMatrix(t),s=this.coplanarPoint(Cc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new ea,s_=new q(.5,.5),Da=new L;class Wu{constructor(t=new wi,e=new wi,i=new wi,s=new wi,r=new wi,a=new wi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],S=r[9],g=r[10],m=r[11],y=r[12],M=r[13],x=r[14],T=r[15];if(s[0].setComponents(l-a,f-u,m-p,T-y).normalize(),s[1].setComponents(l+a,f+u,m+p,T+y).normalize(),s[2].setComponents(l+o,f+d,m+S,T+M).normalize(),s[3].setComponents(l-o,f-d,m-S,T-M).normalize(),i)s[4].setComponents(c,h,g,x).normalize(),s[5].setComponents(l-c,f-h,m-g,T-x).normalize();else if(s[4].setComponents(l-c,f-h,m-g,T-x).normalize(),e===Vn)s[5].setComponents(l+c,f+h,m+g,T+x).normalize();else if(e===zr)s[5].setComponents(c,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);const e=s_.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Da.x=s.normal.x>0?t.max.x:t.min.x,Da.y=s.normal.y>0?t.max.y:t.min.y,Da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gp extends Ve{constructor(t=[],e=ts,i,s,r,a,o,c,l,u){super(t,e,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hr extends Ve{constructor(t,e,i=Xn,s,r,a,o=ke,c=ke,l,u=hi,d=1){if(u!==hi&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class r_ extends Hr{constructor(t,e=Xn,i=ts,s,r,a=ke,o=ke,c,l=hi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class _p extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class is extends Ee{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,s,a,2),p("x","z","y",1,-1,t,i,-e,s,a,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(d,2));function p(S,g,m,y,M,x,T,A,C,_,b){const F=x/C,P=T/_,N=x/2,k=T/2,H=A/2,B=C+1,z=_+1;let O=0,it=0;const Q=new L;for(let mt=0;mt<z;mt++){const _t=mt*P-k;for(let gt=0;gt<B;gt++){const kt=gt*F-N;Q[S]=kt*y,Q[g]=_t*M,Q[m]=H,l.push(Q.x,Q.y,Q.z),Q[S]=0,Q[g]=0,Q[m]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(gt/C),d.push(1-mt/_),O+=1}}for(let mt=0;mt<_;mt++)for(let _t=0;_t<C;_t++){const gt=h+_t+B*mt,kt=h+_t+B*(mt+1),ne=h+(_t+1)+B*(mt+1),oe=h+(_t+1)+B*mt;c.push(gt,kt,oe),c.push(kt,ne,oe),it+=6}o.addGroup(f,it,b),f+=it,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Xu extends Ee{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new L,u=new q;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=i+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ss extends Ee{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const S=[],g=i/2;let m=0;y(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function y(){const x=new L,T=new L;let A=0;const C=(e-t)/i;for(let _=0;_<=r;_++){const b=[],F=_/r,P=F*(e-t)+t;for(let N=0;N<=s;N++){const k=N/s,H=k*c+o,B=Math.sin(H),z=Math.cos(H);T.x=P*B,T.y=-F*i+g,T.z=P*z,d.push(T.x,T.y,T.z),x.set(B,C,z).normalize(),h.push(x.x,x.y,x.z),f.push(k,1-F),b.push(p++)}S.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){const F=S[b][_],P=S[b+1][_],N=S[b+1][_+1],k=S[b][_+1];(t>0||b!==0)&&(u.push(F,P,k),A+=3),(e>0||b!==r-1)&&(u.push(P,N,k),A+=3)}l.addGroup(m,A,0),m+=A}function M(x){const T=p,A=new q,C=new L;let _=0;const b=x===!0?t:e,F=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,g*F,0),h.push(0,F,0),f.push(.5,.5),p++;const P=p;for(let N=0;N<=s;N++){const H=N/s*c+o,B=Math.cos(H),z=Math.sin(H);C.x=b*z,C.y=g*F,C.z=b*B,d.push(C.x,C.y,C.z),h.push(0,F,0),A.x=B*.5+.5,A.y=z*.5*F+.5,f.push(A.x,A.y),p++}for(let N=0;N<s;N++){const k=T+N,H=P+N;x===!0?u.push(H,H+1,k):u.push(H+1,H,k),_+=3}l.addGroup(m,_,x===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class na extends ss{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new na(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zo extends Ee{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new L,x=new L,T=new L;for(let A=0;A<e.length;A+=3)f(e[A+0],M),f(e[A+1],x),f(e[A+2],T),c(M,x,T,y)}function c(y,M,x,T){const A=T+1,C=[];for(let _=0;_<=A;_++){C[_]=[];const b=y.clone().lerp(x,_/A),F=M.clone().lerp(x,_/A),P=A-_;for(let N=0;N<=P;N++)N===0&&_===A?C[_][N]=b:C[_][N]=b.clone().lerp(F,N/P)}for(let _=0;_<A;_++)for(let b=0;b<2*(A-_)-1;b++){const F=Math.floor(b/2);b%2===0?(h(C[_][F+1]),h(C[_+1][F]),h(C[_][F])):(h(C[_][F+1]),h(C[_+1][F+1]),h(C[_+1][F]))}}function l(y){const M=new L;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const y=new L;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const x=g(y)/2/Math.PI+.5,T=m(y)/Math.PI+.5;a.push(x,1-T)}p(),d()}function d(){for(let y=0;y<a.length;y+=6){const M=a[y+0],x=a[y+2],T=a[y+4],A=Math.max(M,x,T),C=Math.min(M,x,T);A>.9&&C<.1&&(M<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,M){const x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function p(){const y=new L,M=new L,x=new L,T=new L,A=new q,C=new q,_=new q;for(let b=0,F=0;b<r.length;b+=9,F+=6){y.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),A.set(a[F+0],a[F+1]),C.set(a[F+2],a[F+3]),_.set(a[F+4],a[F+5]),T.copy(y).add(M).add(x).divideScalar(3);const P=g(T);S(A,F+0,y,P),S(C,F+2,M,P),S(_,F+4,x,P)}}function S(y,M,x,T){T<0&&y.x===1&&(a[M]=y.x-1),x.x===0&&x.z===0&&(a[M]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.vertices,t.indices,t.radius,t.detail)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new q:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new L,s=[],r=[],a=[],o=new L,c=new Jt;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(qt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qu extends Zn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new q){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class a_ extends qu{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Yu(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Na=new L,Rc=new Yu,Pc=new Yu,Lc=new Yu;class o_ extends Zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Na.subVectors(s[0],s[1]).add(s[0]),l=Na);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Na.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Na),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);S<1e-4&&(S=1),p<1e-4&&(p=S),g<1e-4&&(g=S),Rc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,p,S,g),Pc.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,p,S,g),Lc.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,p,S,g)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Pc.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Lc.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Rc.calc(c),Pc.calc(c),Lc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hd(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function c_(n,t){const e=1-n;return e*e*t}function l_(n,t){return 2*(1-n)*n*t}function u_(n,t){return n*n*t}function Lr(n,t,e,i){return c_(n,t)+l_(n,e)+u_(n,i)}function h_(n,t){const e=1-n;return e*e*e*t}function d_(n,t){const e=1-n;return 3*e*e*n*t}function f_(n,t){return 3*(1-n)*n*n*t}function p_(n,t){return n*n*n*t}function Ir(n,t,e,i,s){return h_(n,t)+d_(n,e)+f_(n,i)+p_(n,s)}class vp extends Zn{constructor(t=new q,e=new q,i=new q,s=new q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new q){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(t,s.x,r.x,a.x,o.x),Ir(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xp extends Zn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(t,s.x,r.x,a.x,o.x),Ir(t,s.y,r.y,a.y,o.y),Ir(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yp extends Zn{constructor(t=new q,e=new q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class m_ extends Zn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sp extends Zn{constructor(t=new q,e=new q,i=new q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new q){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Lr(t,s.x,r.x,a.x),Lr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mp extends Zn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Lr(t,s.x,r.x,a.x),Lr(t,s.y,r.y,a.y),Lr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bp extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new q){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(hd(o,c.x,l.x,u.x,d.x),hd(o,c.y,l.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this}}var Mo=Object.freeze({__proto__:null,ArcCurve:a_,CatmullRomCurve3:o_,CubicBezierCurve:vp,CubicBezierCurve3:xp,EllipseCurve:qu,LineCurve:yp,LineCurve3:m_,QuadraticBezierCurve:Sp,QuadraticBezierCurve3:Mp,SplineCurve:bp});class Ep extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Mo[s.type]().fromJSON(s))}return this}}class dd extends Ep{constructor(t){super(),this.type="Path",this.currentPoint=new q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new yp(this.currentPoint.clone(),new q(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Sp(this.currentPoint.clone(),new q(t,e),new q(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new vp(this.currentPoint.clone(),new q(t,e),new q(i,s),new q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new bp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){const l=new qu(t,e,i,s,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wp extends dd{constructor(t){super(t),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new dd().fromJSON(s))}return this}}function g_(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Tp(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=S_(n,t,r,e)),n.length>80*e){o=n[0],c=n[1];let u=o,d=c;for(let h=e;h<s;h+=e){const f=n[h],p=n[h+1];f<o&&(o=f),p<c&&(c=p),f>u&&(u=f),p>d&&(d=p)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return Wr(r,a,e,o,c,l,0),a}function Tp(n,t,e,i,s){let r;if(s===I_(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=fd(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=fd(a/i|0,n[a],n[a+1],r);return r&&Ys(r,r.next)&&(qr(r),r=r.next),r}function es(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ys(e,e.next)||ve(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Wr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&T_(n,i,s,r);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?v_(n,i,s,r):__(n)){t.push(c.i,n.i,l.i),qr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=x_(es(n),t),Wr(n,t,e,i,s,r,2)):a===2&&y_(n,t,e,i,s,r):Wr(es(n),t,e,i,s,r,1);break}}}function __(n){const t=n.prev,e=n,i=n.next;if(ve(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,u=Math.min(s,r,a),d=Math.min(o,c,l),h=Math.max(s,r,a),f=Math.max(o,c,l);let p=i.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&wr(s,o,r,c,a,l,p.x,p.y)&&ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function v_(n,t,e,i){const s=n.prev,r=n,a=n.next;if(ve(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,c,l),p=Math.min(u,d,h),S=Math.max(o,c,l),g=Math.max(u,d,h),m=$l(f,p,t,e,i),y=$l(S,g,t,e,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=m&&x&&x.z<=y;){if(M.x>=f&&M.x<=S&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&wr(o,u,c,d,l,h,M.x,M.y)&&ve(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=S&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&wr(o,u,c,d,l,h,x.x,x.y)&&ve(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=S&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&wr(o,u,c,d,l,h,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=S&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&wr(o,u,c,d,l,h,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function x_(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Ys(i,s)&&Cp(i,e,e.next,s)&&Xr(i,s)&&Xr(s,i)&&(t.push(i.i,e.i,s.i),qr(e),qr(e.next),e=n=s),e=e.next}while(e!==n);return es(e)}function y_(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&R_(a,o)){let c=Rp(a,o);a=es(a,a.next),c=es(c,c.next),Wr(a,t,e,i,s,r,0),Wr(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function S_(n,t,e,i){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=Tp(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(C_(l))}s.sort(M_);for(let r=0;r<s.length;r++)e=b_(s[r],e);return e}function M_(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function b_(n,t){const e=E_(n,t);if(!e)return t;const i=Rp(e,n);return es(i,i.next),es(e,e.next)}function E_(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,a;if(Ys(n,e))return e;do{if(Ys(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Ap(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Xr(e,n)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&w_(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function w_(n,t){return ve(n.prev,n,t.prev)<0&&ve(t.next,n,n.next)<0}function T_(n,t,e,i){let s=n;do s.z===0&&(s.z=$l(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,A_(s)}function A_(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function $l(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function C_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ap(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function wr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Ap(n,t,e,i,s,r,a,o)}function R_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!P_(n,t)&&(Xr(n,t)&&Xr(t,n)&&L_(n,t)&&(ve(n.prev,n,t.prev)||ve(n,t.prev,t))||Ys(n,t)&&ve(n.prev,n,n.next)>0&&ve(t.prev,t,t.next)>0)}function ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ys(n,t){return n.x===t.x&&n.y===t.y}function Cp(n,t,e,i){const s=Fa(ve(n,t,e)),r=Fa(ve(n,t,i)),a=Fa(ve(e,i,n)),o=Fa(ve(e,i,t));return!!(s!==r&&a!==o||s===0&&Ua(n,e,t)||r===0&&Ua(n,i,t)||a===0&&Ua(e,n,i)||o===0&&Ua(e,t,i))}function Ua(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Fa(n){return n>0?1:n<0?-1:0}function P_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Cp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Xr(n,t){return ve(n.prev,n,n.next)<0?ve(n,t,n.next)>=0&&ve(n,n.prev,t)>=0:ve(n,t,n.prev)<0||ve(n,n.next,t)<0}function L_(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Rp(n,t){const e=Zl(n.i,n.x,n.y),i=Zl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function fd(n,t,e,i){const s=Zl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function qr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function I_(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class D_{static triangulate(t,e,i=2){return g_(t,e,i)}}class Us{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Us.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];pd(t),md(i,t);let a=t.length;e.forEach(pd);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,md(i,e[c]);const o=D_.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function pd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function md(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ju extends Ee{constructor(t=new wp([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:N_;let M,x=!1,T,A,C,_;if(m){M=m.getSpacedPoints(u),x=!0,h=!1;const K=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(u,K),A=new L,C=new L,_=new L}h||(g=0,f=0,p=0,S=0);const b=o.extractPoints(l);let F=b.shape;const P=b.holes;if(!Us.isClockWise(F)){F=F.reverse();for(let K=0,et=P.length;K<et;K++){const J=P[K];Us.isClockWise(J)&&(P[K]=J.reverse())}}function k(K){const J=10000000000000001e-36;let ht=K[0];for(let R=1;R<=K.length;R++){const Dt=R%K.length,vt=K[Dt],Ft=vt.x-ht.x,ct=vt.y-ht.y,w=Ft*Ft+ct*ct,v=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(ht.x),Math.abs(ht.y)),D=J*v*v;if(w<=D){K.splice(Dt,1),R--;continue}ht=vt}}k(F),P.forEach(k);const H=P.length,B=F;for(let K=0;K<H;K++){const et=P[K];F=F.concat(et)}function z(K,et,J){return et||Bt("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(et,J)}const O=F.length;function it(K,et,J){let ht,R,Dt;const vt=K.x-et.x,Ft=K.y-et.y,ct=J.x-K.x,w=J.y-K.y,v=vt*vt+Ft*Ft,D=vt*w-Ft*ct;if(Math.abs(D)>Number.EPSILON){const X=Math.sqrt(v),Z=Math.sqrt(ct*ct+w*w),Y=et.x-Ft/X,bt=et.y+vt/X,lt=J.x-w/Z,Pt=J.y+ct/Z,Ot=((lt-Y)*w-(Pt-bt)*ct)/(vt*w-Ft*ct);ht=Y+vt*Ot-K.x,R=bt+Ft*Ot-K.y;const tt=ht*ht+R*R;if(tt<=2)return new q(ht,R);Dt=Math.sqrt(tt/2)}else{let X=!1;vt>Number.EPSILON?ct>Number.EPSILON&&(X=!0):vt<-Number.EPSILON?ct<-Number.EPSILON&&(X=!0):Math.sign(Ft)===Math.sign(w)&&(X=!0),X?(ht=-Ft,R=vt,Dt=Math.sqrt(v)):(ht=vt,R=Ft,Dt=Math.sqrt(v/2))}return new q(ht/Dt,R/Dt)}const Q=[];for(let K=0,et=B.length,J=et-1,ht=K+1;K<et;K++,J++,ht++)J===et&&(J=0),ht===et&&(ht=0),Q[K]=it(B[K],B[J],B[ht]);const mt=[];let _t,gt=Q.concat();for(let K=0,et=H;K<et;K++){const J=P[K];_t=[];for(let ht=0,R=J.length,Dt=R-1,vt=ht+1;ht<R;ht++,Dt++,vt++)Dt===R&&(Dt=0),vt===R&&(vt=0),_t[ht]=it(J[ht],J[Dt],J[vt]);mt.push(_t),gt=gt.concat(_t)}let kt;if(g===0)kt=Us.triangulateShape(B,P);else{const K=[],et=[];for(let J=0;J<g;J++){const ht=J/g,R=f*Math.cos(ht*Math.PI/2),Dt=p*Math.sin(ht*Math.PI/2)+S;for(let vt=0,Ft=B.length;vt<Ft;vt++){const ct=z(B[vt],Q[vt],Dt);Ut(ct.x,ct.y,-R),ht===0&&K.push(ct)}for(let vt=0,Ft=H;vt<Ft;vt++){const ct=P[vt];_t=mt[vt];const w=[];for(let v=0,D=ct.length;v<D;v++){const X=z(ct[v],_t[v],Dt);Ut(X.x,X.y,-R),ht===0&&w.push(X)}ht===0&&et.push(w)}}kt=Us.triangulateShape(K,et)}const ne=kt.length,oe=p+S;for(let K=0;K<O;K++){const et=h?z(F[K],gt[K],oe):F[K];x?(C.copy(T.normals[0]).multiplyScalar(et.x),A.copy(T.binormals[0]).multiplyScalar(et.y),_.copy(M[0]).add(C).add(A),Ut(_.x,_.y,_.z)):Ut(et.x,et.y,0)}for(let K=1;K<=u;K++)for(let et=0;et<O;et++){const J=h?z(F[et],gt[et],oe):F[et];x?(C.copy(T.normals[K]).multiplyScalar(J.x),A.copy(T.binormals[K]).multiplyScalar(J.y),_.copy(M[K]).add(C).add(A),Ut(_.x,_.y,_.z)):Ut(J.x,J.y,d/u*K)}for(let K=g-1;K>=0;K--){const et=K/g,J=f*Math.cos(et*Math.PI/2),ht=p*Math.sin(et*Math.PI/2)+S;for(let R=0,Dt=B.length;R<Dt;R++){const vt=z(B[R],Q[R],ht);Ut(vt.x,vt.y,d+J)}for(let R=0,Dt=P.length;R<Dt;R++){const vt=P[R];_t=mt[R];for(let Ft=0,ct=vt.length;Ft<ct;Ft++){const w=z(vt[Ft],_t[Ft],ht);x?Ut(w.x,w.y+M[u-1].y,M[u-1].x+J):Ut(w.x,w.y,d+J)}}}$(),at();function $(){const K=s.length/3;if(h){let et=0,J=O*et;for(let ht=0;ht<ne;ht++){const R=kt[ht];It(R[2]+J,R[1]+J,R[0]+J)}et=u+g*2,J=O*et;for(let ht=0;ht<ne;ht++){const R=kt[ht];It(R[0]+J,R[1]+J,R[2]+J)}}else{for(let et=0;et<ne;et++){const J=kt[et];It(J[2],J[1],J[0])}for(let et=0;et<ne;et++){const J=kt[et];It(J[0]+O*u,J[1]+O*u,J[2]+O*u)}}i.addGroup(K,s.length/3-K,0)}function at(){const K=s.length/3;let et=0;ot(B,et),et+=B.length;for(let J=0,ht=P.length;J<ht;J++){const R=P[J];ot(R,et),et+=R.length}i.addGroup(K,s.length/3-K,1)}function ot(K,et){let J=K.length;for(;--J>=0;){const ht=J;let R=J-1;R<0&&(R=K.length-1);for(let Dt=0,vt=u+g*2;Dt<vt;Dt++){const Ft=O*Dt,ct=O*(Dt+1),w=et+ht+Ft,v=et+R+Ft,D=et+R+ct,X=et+ht+ct;zt(w,v,D,X)}}}function Ut(K,et,J){c.push(K),c.push(et),c.push(J)}function It(K,et,J){ce(K),ce(et),ce(J);const ht=s.length/3,R=y.generateTopUV(i,s,ht-3,ht-2,ht-1);Ht(R[0]),Ht(R[1]),Ht(R[2])}function zt(K,et,J,ht){ce(K),ce(et),ce(ht),ce(et),ce(J),ce(ht);const R=s.length/3,Dt=y.generateSideWallUV(i,s,R-6,R-3,R-2,R-1);Ht(Dt[0]),Ht(Dt[1]),Ht(Dt[3]),Ht(Dt[1]),Ht(Dt[2]),Ht(Dt[3])}function ce(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function Ht(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return U_(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Mo[s.type]().fromJSON(s)),new ju(i,t.options)}}const N_={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new q(r,a),new q(o,c),new q(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],p=t[s*3+2],S=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new q(a,1-c),new q(l,1-d),new q(h,1-p),new q(S,1-m)]:[new q(o,1-c),new q(u,1-d),new q(f,1-p),new q(g,1-m)]}};function U_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class $u extends zo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $u(t.radius,t.detail)}}class ia extends Ee{constructor(t=[new q(0,-.5),new q(.5,0),new q(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=qt(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,d=new L,h=new q,f=new L,p=new L,S=new L;let g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,S.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(S.x,S.y,S.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=S.x,f.y+=S.y,f.z+=S.z,f.normalize(),c.push(f.x,f.y,f.z),S.copy(p)}for(let y=0;y<=e;y++){const M=i+y*u*s,x=Math.sin(M),T=Math.cos(M);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*x,d.y=t[A].y,d.z=t[A].x*T,a.push(d.x,d.y,d.z),h.x=y/e,h.y=A/(t.length-1),o.push(h.x,h.y);const C=c[3*A+0]*x,_=c[3*A+1],b=c[3*A+0]*T;l.push(C,_,b)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const x=M+y*t.length,T=x,A=x+t.length,C=x+t.length+1,_=x+1;r.push(T,A,_),r.push(C,_,A)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("uv",new pe(o,2)),this.setAttribute("normal",new pe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.points,t.segments,t.phiStart,t.phiLength)}}class Zu extends zo{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zu(t.radius,t.detail)}}class di extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=e/c,f=[],p=[],S=[],g=[];for(let m=0;m<u;m++){const y=m*h-a;for(let M=0;M<l;M++){const x=M*d-r;p.push(x,-y,0),S.push(0,0,1),g.push(M/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){const M=y+l*m,x=y+l*(m+1),T=y+1+l*(m+1),A=y+1+l*m;f.push(M,x,A),f.push(x,T,A)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(S,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ku extends Ee{constructor(t=new Mp(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,c=new L,l=new q;let u=new L;const d=[],h=[],f=[],p=[];S(),this.setIndex(p),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function S(){for(let M=0;M<e;M++)g(M);g(r===!1?e:0),y(),m()}function g(M){u=t.getPointAt(M/e,u);const x=a.normals[M],T=a.binormals[M];for(let A=0;A<=s;A++){const C=A/s*Math.PI*2,_=Math.sin(C),b=-Math.cos(C);c.x=b*x.x+_*T.x,c.y=b*x.y+_*T.y,c.z=b*x.z+_*T.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+i*c.x,o.y=u.y+i*c.y,o.z=u.z+i*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const T=(s+1)*(M-1)+(x-1),A=(s+1)*M+(x-1),C=(s+1)*M+x,_=(s+1)*(M-1)+x;p.push(T,A,_),p.push(A,C,_)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)l.x=M/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ku(new Mo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function js(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ze(n){const t={};for(let e=0;e<n.length;e++){const i=js(n[e]);for(const s in i)t[s]=i[s]}return t}function F_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Pp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const O_={clone:js,merge:Ze};var B_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B_,this.fragmentShader=k_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=F_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class z_ extends qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lp extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class V_ extends Lp{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class pi extends ns{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Tu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class G_ extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H_ extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Oa(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function W_(n){function t(s,r){return n[s]-n[r]}const e=n.length,i=new Array(e);for(let s=0;s!==e;++s)i[s]=s;return i.sort(t),i}function gd(n,t,e){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=e[r]*t;for(let c=0;c!==t;++c)s[a++]=n[o+c]}return s}function Ip(n,t,e,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(t.push(r.time),e.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(t.push(r.time),e.push(a)),r=n[s++];while(r!==void 0)}class sa{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class X_ extends sa{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ds,endingEnd:Ds}}intervalChanged_(t,e,i){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ns:r=t,o=2*e-i;break;case _o:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ns:a=t,c=2*i-e;break;case _o:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}const l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),S=p*p,g=S*p,m=-h*g+2*h*S-h*p,y=(1+h)*g+(-1.5-2*h)*S+(-.5+h)*p+1,M=(-1-f)*g+(1.5+f)*S+.5*p,x=f*g-f*S;for(let T=0;T!==o;++T)r[T]=m*a[u+T]+y*a[l+T]+M*a[c+T]+x*a[d+T];return r}}class Dp extends sa{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(i-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}}class q_ extends sa{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Y_ extends sa{interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){const S=(i-e)/(s-e),g=1-S;for(let m=0;m!==o;++m)r[m]=a[l+m]*g+a[c+m]*S;return r}const f=o*2,p=t-1;for(let S=0;S!==o;++S){const g=a[l+S],m=a[c+S],y=p*f+S*2,M=h[y],x=h[y+1],T=t*f+S*2,A=d[T],C=d[T+1];let _=(i-e)/(s-e),b,F,P,N,k;for(let H=0;H<8;H++){b=_*_,F=b*_,P=1-_,N=P*P,k=N*P;const z=k*e+3*N*_*M+3*P*b*A+F*s-i;if(Math.abs(z)<1e-10)break;const O=3*N*(M-e)+6*P*_*(A-M)+3*b*(s-A);if(Math.abs(O)<1e-10)break;_=_-z/O,_=Math.max(0,Math.min(1,_))}r[S]=k*g+3*N*_*x+3*P*b*C+F*m}return r}}class de{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oa(e,this.TimeBufferType),this.values=Oa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Oa(t.times,Array),values:Oa(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new q_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new X_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Y_(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case go:e=this.InterpolantFactoryMethodDiscrete;break;case Dn:e=this.InterpolantFactoryMethodLinear;break;case Hn:e=this.InterpolantFactoryMethodSmooth;break;case Bh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return Dn;case this.InterpolantFactoryMethodSmooth:return Hn;case this.InterpolantFactoryMethodBezier:return Bh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){Bt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Bt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&f0(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Hn,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{const d=o*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){const S=e[d+p];if(S!==e[h+p]||S!==e[f+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const d=o*i,h=a*i;for(let f=0;f!==i;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}de.prototype.ValueTypeName="";de.prototype.TimeBufferType=Float32Array;de.prototype.ValueBufferType=Float32Array;de.prototype.DefaultInterpolation=Dn;class nr extends de{constructor(t,e,i){super(t,e,i)}}nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=go;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Np extends de{constructor(t,e,i,s){super(t,e,i,s)}}Np.prototype.ValueTypeName="color";class bo extends de{constructor(t,e,i,s){super(t,e,i,s)}}bo.prototype.ValueTypeName="number";class j_ extends sa{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e);let l=t*o;for(let u=l+o;l!==u;l+=4)Mn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Vo extends de{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new j_(this.times,this.values,this.getValueSize(),t)}}Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends de{constructor(t,e,i){super(t,e,i)}}ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=go;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Eo extends de{constructor(t,e,i,s){super(t,e,i,s)}}Eo.prototype.ValueTypeName="vector";class on{constructor(t="",e=-1,i=[],s=Du){this.name=t,this.tracks=i,this.duration=e,this.blendMode=s,this.uuid=Sn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,s=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(Z_(i[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=i.length;r!==a;++r)e.push(de.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(t,e,i,s){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=W_(c);c=gd(c,1,u),l=gd(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new bo(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===e)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,i));return a}static parseAnimation(t,e){if(Nt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Bt("AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,f,p,S){if(f.length!==0){const g=[],m=[];Ip(f,g,m,p),g.length!==0&&S.push(new d(h,g,m))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let S=0;S<h[p].morphTargets.length;S++)f[h[p].morphTargets[S]]=-1;for(const S in f){const g=[],m=[];for(let y=0;y!==h[p].morphTargets.length;++y){const M=h[p];g.push(M.time),m.push(M.morphTarget===S?1:0)}s.push(new bo(".morphTargetInfluence["+S+"]",g,m))}c=f.length*a}else{const f=".bones["+e[d].name+"]";i(Eo,f+".position",h,"pos",s),i(Vo,f+".quaternion",h,"rot",s),i(Eo,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,s=t.length;i!==s;++i){const r=this.tracks[i];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function $_(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bo;case"vector":case"vector2":case"vector3":case"vector4":return Eo;case"color":return Np;case"quaternion":return Vo;case"bool":case"boolean":return nr;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Z_(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=$_(n.type);if(n.times===void 0){const e=[],i=[];Ip(n.keys,e,i,"value"),n.times=e,n.values=i}return t.parse!==void 0?t.parse(n):new t(n.name,n.times,n.values,n.interpolation)}const Ic={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(_d(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!_d(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function _d(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class K_{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const J_=new K_;class Ju{constructor(t){this.manager=t!==void 0?t:J_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ju.DEFAULT_MATERIAL_NAME="__DEFAULT";const Es=new WeakMap;class Q_ extends Ju{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ic.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Es.get(a);d===void 0&&(d=[],Es.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=Vr("img");function c(){u(),e&&e(this);const d=Es.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Es.delete(this),r.manager.itemEnd(t)}function l(d){u(),s&&s(d),Ic.remove(`image:${t}`);const h=Es.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}Es.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ic.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class tv extends Ju{constructor(t){super(t)}load(t,e,i,s){const r=new Ve,a=new Q_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Up extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class ev extends Up{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Dc=new Jt,vd=new L,xd=new L;class nv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wu,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(vd),xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xd),e.updateMatrixWorld(),Dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===zr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ba=new L,ka=new Mn,Bn=new L;class Fp extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ba,ka,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Ba,ka,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new L,yd=new q,Sd=new q;class _n extends Fp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,yd,Sd),e.subVectors(Sd,yd)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Qu extends Fp{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class iv extends nv{constructor(){super(new Qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sv extends Up{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new iv}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ws=-90,Ts=1;class rv extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(ws,Ts,t,e);s.layers=this.layers,this.add(s);const r=new _n(ws,Ts,t,e);r.layers=this.layers,this.add(r);const a=new _n(ws,Ts,t,e);a.layers=this.layers,this.add(a);const o=new _n(ws,Ts,t,e);o.layers=this.layers,this.add(o);const c=new _n(ws,Ts,t,e);c.layers=this.layers,this.add(c);const l=new _n(ws,Ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class av extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Op{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=ov.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ov(){this._document.hidden===!1&&this.reset()}class cv{constructor(t,e,i){this.binding=t,this.valueSize=i;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,s=this.valueSize,r=t*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(i,s,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){o.setValue(i,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,s=i*this._origIndex;t.getValue(e,s);for(let r=i,a=s;r!==a;++r)e[r]=e[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[i+a]}_slerp(t,e,i,s){Mn.slerpFlat(t,e,t,e,t,i,s)}_slerpAdditive(t,e,i,s,r){const a=this._workIndex*r;Mn.multiplyQuaternionsFlat(t,a,t,e,t,i),Mn.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[i+o]*s}}_lerpAdditive(t,e,i,s,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[i+a]*s}}}const th="\\[\\]\\.:\\/",lv=new RegExp("["+th+"]","g"),eh="[^"+th+"]",uv="[^"+th.replace("\\.","")+"]",hv=/((?:WC+[\/:])*)/.source.replace("WC",eh),dv=/(WCOD+)?/.source.replace("WCOD",uv),fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),mv=new RegExp("^"+hv+dv+fv+pv+"$"),gv=["material","materials","bones","map"];class _v{constructor(t,e,i){const s=i||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class ae{constructor(t,e,i){this.path=e,this.parsedPath=i||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new ae.Composite(t,e,i):new ae(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lv,"")}static parseTrackName(t){const e=mv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);gv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[s];if(a===void 0){const l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=_v;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vv{constructor(t,e,i=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=s;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:Ds,endingEnd:Ds};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ta,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){const s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+i,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case i0:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Du:default:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(t)[0];e*=s,t>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(t)[0];e*=s,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let s=this.time+t,r=this._loopCount;const a=i===op;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(i===ap){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){const o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,i){const s=this._interpolantSettings;i?(s.endingStart=Ns,s.endingEnd=Ns):(t?s.endingStart=this.zeroSlopeAtStart?Ns:Ds:s.endingStart=_o,e?s.endingEnd=this.zeroSlopeAtEnd?Ns:Ds:s.endingEnd=_o)}_scheduleFading(t,e,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=i,this}}const xv=new Float32Array(1);class Bp extends Fi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const i=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let d=0;d!==r;++d){const h=s[d],f=h.name;let p=u[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const S=e&&e._propertyBindings[d].binding.parsedPath;p=new cv(ae.create(i,f,S),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,i)}const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const s=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],s=t._cacheIndex;i._cacheIndex=s,e[s]=i,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete d[h],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_addInactiveBinding(t,e,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[e];a===void 0&&(a={},s[e]=a),a[i]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new Dp(new Float32Array(2),new Float32Array(2),1,xv),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=i,e[i]=r}clipAction(t,e,i){const s=e||this._root,r=s.uuid;let a=typeof t=="string"?on.findByName(s,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Du),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===i)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new vv(this,a,e,i);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(t,e){const i=e||this._root,s=i.uuid,r=typeof t=="string"?on.findByName(i,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(s,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,d=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=u,e[u]=d,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Md{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bd=new q;class mi{constructor(t=new q(1/0,1/0),e=new q(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=bd.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bd).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class yv extends Fi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ed(n,t,e,i){const s=Sv(i);switch(e){case ip:return n*t;case rp:return n*t/s.components*s.byteLength;case Pu:return n*t/s.components*s.byteLength;case Xs:return n*t*2/s.components*s.byteLength;case Lu:return n*t*2/s.components*s.byteLength;case sp:return n*t*3/s.components*s.byteLength;case xn:return n*t*4/s.components*s.byteLength;case Iu:return n*t*4/s.components*s.byteLength;case Ja:case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gl:case vl:return Math.max(n,16)*Math.max(t,8)/4;case ml:case _l:return Math.max(n,8)*Math.max(t,8)/2;case xl:case yl:case Ml:case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sl:case El:case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zl:case Vl:case Gl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Hl:case Wl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xl:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sv(n){switch(n){case fn:case Qf:return{byteLength:1,components:1};case Br:case tp:case ui:return{byteLength:2,components:1};case Cu:case Ru:return{byteLength:2,components:4};case Xn:case Au:case Ln:return{byteLength:4,components:1};case ep:case np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wu}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wu);function kp(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Mv(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],S=d[f];S.start<=p.start+p.count+1?p.count=Math.max(p.count,S.start+S.count-p.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const S=d[f];n.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ev=`#ifdef USE_ALPHAHASH
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
#endif`,wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rv=`#ifdef USE_AOMAP
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
#endif`,Pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lv=`#ifdef USE_BATCHING
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
#endif`,Iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fv=`#ifdef USE_IRIDESCENCE
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
#endif`,Ov=`#ifdef USE_BUMPMAP
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
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qv=`#define PI 3.141592653589793
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
} // validated`,Yv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jv=`vec3 transformedNormal = objectNormal;
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
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
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
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,Sx=`uniform sampler2D dfgLUT;
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
}`,Mx=`
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ix=`#if defined( USE_POINTS_UV )
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
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
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
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
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
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,by=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
}`,Py=`#define DISTANCE
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
}`,Ly=`#define DISTANCE
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,By=`#define LAMBERT
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
}`,ky=`#define LAMBERT
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
}`,zy=`#define MATCAP
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
}`,Vy=`#define MATCAP
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
}`,Gy=`#define NORMAL
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
}`,Hy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define PHONG
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
}`,qy=`#define STANDARD
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
}`,Yy=`#define STANDARD
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
}`,jy=`#define TOON
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
}`,$y=`#define TOON
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
}`,Zy=`uniform float size;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,tS=`uniform float rotation;
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
}`,eS=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:bv,alphahash_pars_fragment:Ev,alphamap_fragment:wv,alphamap_pars_fragment:Tv,alphatest_fragment:Av,alphatest_pars_fragment:Cv,aomap_fragment:Rv,aomap_pars_fragment:Pv,batching_pars_vertex:Lv,batching_vertex:Iv,begin_vertex:Dv,beginnormal_vertex:Nv,bsdfs:Uv,iridescence_fragment:Fv,bumpmap_pars_fragment:Ov,clipping_planes_fragment:Bv,clipping_planes_pars_fragment:kv,clipping_planes_pars_vertex:zv,clipping_planes_vertex:Vv,color_fragment:Gv,color_pars_fragment:Hv,color_pars_vertex:Wv,color_vertex:Xv,common:qv,cube_uv_reflection_fragment:Yv,defaultnormal_vertex:jv,displacementmap_pars_vertex:$v,displacementmap_vertex:Zv,emissivemap_fragment:Kv,emissivemap_pars_fragment:Jv,colorspace_fragment:Qv,colorspace_pars_fragment:tx,envmap_fragment:ex,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:sx,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:ax,fog_pars_vertex:ox,fog_fragment:cx,fog_pars_fragment:lx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:hx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:fx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:vx,lights_phong_pars_fragment:xx,lights_physical_fragment:yx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Mx,lights_fragment_maps:bx,lights_fragment_end:Ex,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Cx,map_fragment:Rx,map_pars_fragment:Px,map_particle_fragment:Lx,map_particle_pars_fragment:Ix,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Ux,morphcolor_vertex:Fx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Bx,morphtarget_vertex:kx,normal_fragment_begin:zx,normal_fragment_maps:Vx,normal_pars_fragment:Gx,normal_pars_vertex:Hx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:$x,opaque_fragment:Zx,packing:Kx,premultiplied_alpha_fragment:Jx,project_vertex:Qx,dithering_fragment:ty,dithering_pars_fragment:ey,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ry,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:cy,skinning_pars_vertex:ly,skinning_vertex:uy,skinnormal_vertex:hy,specularmap_fragment:dy,specularmap_pars_fragment:fy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:_y,uv_pars_fragment:vy,uv_pars_vertex:xy,uv_vertex:yy,worldpos_vertex:Sy,background_vert:My,background_frag:by,backgroundCube_vert:Ey,backgroundCube_frag:wy,cube_vert:Ty,cube_frag:Ay,depth_vert:Cy,depth_frag:Ry,distance_vert:Py,distance_frag:Ly,equirect_vert:Iy,equirect_frag:Dy,linedashed_vert:Ny,linedashed_frag:Uy,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:By,meshlambert_frag:ky,meshmatcap_vert:zy,meshmatcap_frag:Vy,meshnormal_vert:Gy,meshnormal_frag:Hy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:qy,meshphysical_frag:Yy,meshtoon_vert:jy,meshtoon_frag:$y,points_vert:Zy,points_frag:Ky,shadow_vert:Jy,shadow_frag:Qy,sprite_vert:tS,sprite_frag:eS},dt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},zn={basic:{uniforms:Ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ze([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ze([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ze([dt.points,dt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ze([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ze([dt.common,dt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ze([dt.sprite,dt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Ze([dt.common,dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Ze([dt.lights,dt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};zn.physical={uniforms:Ze([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const za={r:0,b:0,g:0},Hi=new Un,nS=new Jt;function iS(n,t,e,i,s,r){const a=new Vt(0);let o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const x=y.backgroundBlurriness>0;M=t.get(M,x)}return M}function p(y){let M=!1;const x=f(y);x===null?g(a,o):x&&x.isColor&&(g(x,1),M=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(y,M){const x=f(M);x&&(x.isCubeTexture||x.mapping===Oo)?(l===void 0&&(l=new Kt(new is(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:js(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Hi.copy(M.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(Hi)),l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==se,(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Kt(new di(2,2),new qn({name:"BackgroundMaterial",uniforms:js(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,M){y.getRGB(za,Pp(n)),e.buffers.color.setClear(za.r,za.g,za.b,M,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:S,dispose:m}}function sS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(P,N,k,H,B){let z=!1;const O=d(P,H,k,N);r!==O&&(r=O,l(r.object)),z=f(P,H,k,B),z&&p(P,H,k,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,x(P,N,k,H),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function d(P,N,k,H){const B=H.wireframe===!0;let z=i[N.id];z===void 0&&(z={},i[N.id]=z);const O=P.isInstancedMesh===!0?P.id:0;let it=z[O];it===void 0&&(it={},z[O]=it);let Q=it[k.id];Q===void 0&&(Q={},it[k.id]=Q);let mt=Q[B];return mt===void 0&&(mt=h(c()),Q[B]=mt),mt}function h(P){const N=[],k=[],H=[];for(let B=0;B<e;B++)N[B]=0,k[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:H,object:P,attributes:{},index:null}}function f(P,N,k,H){const B=r.attributes,z=N.attributes;let O=0;const it=k.getAttributes();for(const Q in it)if(it[Q].location>=0){const _t=B[Q];let gt=z[Q];if(gt===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(gt=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(gt=P.instanceColor)),_t===void 0||_t.attribute!==gt||gt&&_t.data!==gt.data)return!0;O++}return r.attributesNum!==O||r.index!==H}function p(P,N,k,H){const B={},z=N.attributes;let O=0;const it=k.getAttributes();for(const Q in it)if(it[Q].location>=0){let _t=z[Q];_t===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(_t=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(_t=P.instanceColor));const gt={};gt.attribute=_t,_t&&_t.data&&(gt.data=_t.data),B[Q]=gt,O++}r.attributes=B,r.attributesNum=O,r.index=H}function S(){const P=r.newAttributes;for(let N=0,k=P.length;N<k;N++)P[N]=0}function g(P){m(P,0)}function m(P,N){const k=r.newAttributes,H=r.enabledAttributes,B=r.attributeDivisors;k[P]=1,H[P]===0&&(n.enableVertexAttribArray(P),H[P]=1),B[P]!==N&&(n.vertexAttribDivisor(P,N),B[P]=N)}function y(){const P=r.newAttributes,N=r.enabledAttributes;for(let k=0,H=N.length;k<H;k++)N[k]!==P[k]&&(n.disableVertexAttribArray(k),N[k]=0)}function M(P,N,k,H,B,z,O){O===!0?n.vertexAttribIPointer(P,N,k,B,z):n.vertexAttribPointer(P,N,k,H,B,z)}function x(P,N,k,H){S();const B=H.attributes,z=k.getAttributes(),O=N.defaultAttributeValues;for(const it in z){const Q=z[it];if(Q.location>=0){let mt=B[it];if(mt===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor)),mt!==void 0){const _t=mt.normalized,gt=mt.itemSize,kt=t.get(mt);if(kt===void 0)continue;const ne=kt.buffer,oe=kt.type,$=kt.bytesPerElement,at=oe===n.INT||oe===n.UNSIGNED_INT||mt.gpuType===Au;if(mt.isInterleavedBufferAttribute){const ot=mt.data,Ut=ot.stride,It=mt.offset;if(ot.isInstancedInterleavedBuffer){for(let zt=0;zt<Q.locationSize;zt++)m(Q.location+zt,ot.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let zt=0;zt<Q.locationSize;zt++)g(Q.location+zt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let zt=0;zt<Q.locationSize;zt++)M(Q.location+zt,gt/Q.locationSize,oe,_t,Ut*$,(It+gt/Q.locationSize*zt)*$,at)}else{if(mt.isInstancedBufferAttribute){for(let ot=0;ot<Q.locationSize;ot++)m(Q.location+ot,mt.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ot=0;ot<Q.locationSize;ot++)g(Q.location+ot);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let ot=0;ot<Q.locationSize;ot++)M(Q.location+ot,gt/Q.locationSize,oe,_t,gt*$,gt/Q.locationSize*ot*$,at)}}else if(O!==void 0){const _t=O[it];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(Q.location,_t);break;case 3:n.vertexAttrib3fv(Q.location,_t);break;case 4:n.vertexAttrib4fv(Q.location,_t);break;default:n.vertexAttrib1fv(Q.location,_t)}}}}y()}function T(){b();for(const P in i){const N=i[P];for(const k in N){const H=N[k];for(const B in H){const z=H[B];for(const O in z)u(z[O].object),delete z[O];delete H[B]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;const N=i[P.id];for(const k in N){const H=N[k];for(const B in H){const z=H[B];for(const O in z)u(z[O].object),delete z[O];delete H[B]}}delete i[P.id]}function C(P){for(const N in i){const k=i[N];for(const H in k){const B=k[H];if(B[P.id]===void 0)continue;const z=B[P.id];for(const O in z)u(z[O].object),delete z[O];delete B[P.id]}}}function _(P){for(const N in i){const k=i[N],H=P.isInstancedMesh===!0?P.id:0,B=k[H];if(B!==void 0){for(const z in B){const O=B[z];for(const it in O)u(O[it].object),delete O[it];delete B[z]}delete k[H],Object.keys(k).length===0&&delete i[N]}}}function b(){F(),a=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:y}}function rS(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),e.update(u,i,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];e.update(f,i,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)a(l[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let p=0;for(let S=0;S<d;S++)p+=u[S]*h[S];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function aS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==xn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==fn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ln&&!_)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Nt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:T,samples:A}}function oS(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new wi,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):l();else{const y=r?0:i,M=y*4;let x=m.clippingState||null;c.value=x,x=u(p,h,M,f);for(let T=0;T!==M;++T)x[T]=e[T];m.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,p){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=c.value,p!==!0||g===null){const m=f+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=f;M!==S;++M,x+=4)a.copy(d[M]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}const Ci=4,wd=[.125,.215,.35,.446,.526,.582],$i=20,cS=256,gr=new Qu,Td=new Vt;let Nc=null,Uc=0,Fc=0,Oc=!1;const lS=new L;class Ad{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=lS}=r;Nc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nc,Uc,Fc),this._renderer.xr.enabled=Oc,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:ui,format:xn,colorSpace:qs,depthBuffer:!1},s=Cd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uS(r)),this._blurMaterial=dS(r,t,e),this._ggxMaterial=hS(r,t,e)}return s}_compileMaterial(t){const e=new Kt(new Ee,t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,i,s,r){const c=new _n(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Td),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new is,new ko({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let m=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,m=!0):(g.color.copy(Td),m=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));const T=this._cubeSize;As(s,x*T,M>2?T:0,T,T),d.setRenderTarget(s),m&&d.render(S,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ts||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;As(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,gr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:p}=this,S=this._sizeLods[i],g=3*S*(i>p-Ci?i-p+Ci:0),m=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=p-e,As(r,g,m,3*S,2*S),s.setRenderTarget(r),s.render(o,gr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,As(t,g,m,3*S,2*S),s.setRenderTarget(t),s.render(o,gr)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$i-1),S=r/p,g=isFinite(r)?1+Math.floor(u*S):$i;g>$i&&Nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$i}`);const m=[];let y=0;for(let C=0;C<$i;++C){const _=C/S,b=Math.exp(-_*_/2);m.push(b),C===0?y+=b:C<g&&(y+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=p,h.mipInt.value=M-i;const x=this._sizeLods[s],T=3*x*(s>M-Ci?s-M+Ci:0),A=4*(this._cubeSize-x);As(e,T,A,3*x,2*x),c.setRenderTarget(e),c.render(d,gr)}}function uS(n){const t=[],e=[],i=[];let s=n;const r=n-Ci+1+wd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Ci?c=wd[a-n+Ci-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,S=3,g=2,m=1,y=new Float32Array(S*p*f),M=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,_=A>2?0:-1,b=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];y.set(b,S*p*A),M.set(h,g*p*A);const F=[A,A,A,A,A,A];x.set(F,m*p*A)}const T=new Ee;T.setAttribute("position",new Ge(y,S)),T.setAttribute("uv",new Ge(M,g)),T.setAttribute("faceIndex",new Ge(x,m)),i.push(new Kt(T,null)),s>Ci&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Cd(n,t,e){const i=new Wn(n,t,e);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function hS(n,t,e){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function dS(n,t,e){const i=new Float32Array($i),s=new L(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Go(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Rd(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Pd(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}class zp extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new gp(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new is(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:ci});r.uniforms.tEquirect.value=e;const a=new Kt(s,r),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=je),new rv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function fS(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===ec||f===nc)if(t.has(h)){const p=t.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const S=new zp(p.height);return S.fromEquirectangularTexture(n,h),t.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===ec||f===nc,S=f===ts||f===Ws;if(p||S){let g=e.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Ad(n)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||S&&y&&c(y)?(i===null&&(i=new Ad(n)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===ec?h.mapping=ts:f===nc&&(h.mapping=Ws),h}function c(h){let f=0;const p=6;for(let S=0;S<p;S++)h[S]!==void 0&&f++;return f===p}function l(h){const f=h.target;f.removeEventListener("dispose",l);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function pS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&yo("WebGLRenderer: "+i+" extension not supported."),s}}}function mS(n,t,e,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,p=d.attributes.position;let S=0;if(p===void 0)return;if(f!==null){const y=f.array;S=f.version;for(let M=0,x=y.length;M<x;M+=3){const T=y[M+0],A=y[M+1],C=y[M+2];h.push(T,A,A,C,C,T)}}else{const y=p.array;S=p.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const T=M+0,A=M+1,C=M+2;h.push(T,A,A,C,C,T)}}const g=new(p.count>=65535?fp:zu)(h,1);g.version=S;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function gS(n,t,e){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){n.drawElements(i,f,r,h*a),e.update(f,i,1)}function l(h,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,h*a,p),e.update(f,i,p))}function u(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function d(h,f,p,S){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)l(h[m]/a,f[m],S[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,S,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y]*S[y];e.update(m,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function _S(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function vS(n,t,e){const i=new WeakMap,s=new ge;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let F=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",F)};var f=F;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),S===!0&&(x=2),g===!0&&(x=3);let T=o.attributes.position.count*x,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*A*4*d),_=new up(C,T,A,d);_.type=Ln,_.needsUpdate=!0;const b=x*4;for(let P=0;P<d;P++){const N=m[P],k=y[P],H=M[P],B=T*A*4*P;for(let z=0;z<N.count;z++){const O=z*b;p===!0&&(s.fromBufferAttribute(N,z),C[B+O+0]=s.x,C[B+O+1]=s.y,C[B+O+2]=s.z,C[B+O+3]=0),S===!0&&(s.fromBufferAttribute(k,z),C[B+O+4]=s.x,C[B+O+5]=s.y,C[B+O+6]=s.z,C[B+O+7]=0),g===!0&&(s.fromBufferAttribute(H,z),C[B+O+8]=s.x,C[B+O+9]=s.y,C[B+O+10]=s.z,C[B+O+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new q(T,A)},i.set(o,h),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const S=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function xS(n,t,e,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const yS={[Xf]:"LINEAR_TONE_MAPPING",[qf]:"REINHARD_TONE_MAPPING",[Yf]:"CINEON_TONE_MAPPING",[jf]:"ACES_FILMIC_TONE_MAPPING",[Zf]:"AGX_TONE_MAPPING",[Kf]:"NEUTRAL_TONE_MAPPING",[$f]:"CUSTOM_TONE_MAPPING"};function SS(n,t,e,i,s){const r=new Wn(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),a=new Wn(t,e,{type:ui,depthBuffer:!1,stencilBuffer:!1}),o=new Ee;o.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new pe([0,2,0,0,2,0],2));const c=new z_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Kt(o,c),u=new Qu(-1,1,1,-1,0,1);let d=null,h=null,f=!1,p,S=null,g=[],m=!1;this.setSize=function(y,M){r.setSize(y,M),a.setSize(y,M);for(let x=0;x<g.length;x++){const T=g[x];T.setSize&&T.setSize(y,M)}},this.setEffects=function(y){g=y,m=g.length>0&&g[0].isRenderPass===!0;const M=r.width,x=r.height;for(let T=0;T<g.length;T++){const A=g[T];A.setSize&&A.setSize(M,x)}},this.begin=function(y,M){if(f||y.toneMapping===Gn&&g.length===0)return!1;if(S=M,M!==null){const x=M.width,T=M.height;(r.width!==x||r.height!==T)&&this.setSize(x,T)}return m===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=Gn,!0},this.hasRenderPass=function(){return m},this.end=function(y,M){y.toneMapping=p,f=!0;let x=r,T=a;for(let A=0;A<g.length;A++){const C=g[A];if(C.enabled!==!1&&(C.render(y,T,x,M),C.needsSwap!==!1)){const _=x;x=T,T=_}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,c.defines={},Qt.getTransfer(d)===se&&(c.defines.SRGB_TRANSFER="");const A=yS[h];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(S),y.render(l,u),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Vp=new Ve,Kl=new Hr(1,1),Gp=new up,Hp=new B0,Wp=new gp,Ld=[],Id=[],Dd=new Float32Array(16),Nd=new Float32Array(9),Ud=new Float32Array(4);function sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Pe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ho(n,t){let e=Id[t];e===void 0&&(e=new Int32Array(t),Id[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function MS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function bS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function ES(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function wS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function TS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;Ud.set(i),n.uniformMatrix2fv(this.addr,!1,Ud),Le(e,i)}}function AS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;Nd.set(i),n.uniformMatrix3fv(this.addr,!1,Nd),Le(e,i)}}function CS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;Dd.set(i),n.uniformMatrix4fv(this.addr,!1,Dd),Le(e,i)}}function RS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function PS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function LS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function IS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function DS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function NS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function US(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function FS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function OS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kl.compareFunction=e.isReversedDepthBuffer()?Fu:Uu,r=Kl):r=Vp,e.setTexture2D(t||r,s)}function BS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hp,s)}function kS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Wp,s)}function zS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Gp,s)}function VS(n){switch(n){case 5126:return MS;case 35664:return bS;case 35665:return ES;case 35666:return wS;case 35674:return TS;case 35675:return AS;case 35676:return CS;case 5124:case 35670:return RS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return IS;case 5125:return DS;case 36294:return NS;case 36295:return US;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return OS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return zS}}function GS(n,t){n.uniform1fv(this.addr,t)}function HS(n,t){const e=sr(t,this.size,2);n.uniform2fv(this.addr,e)}function WS(n,t){const e=sr(t,this.size,3);n.uniform3fv(this.addr,e)}function XS(n,t){const e=sr(t,this.size,4);n.uniform4fv(this.addr,e)}function qS(n,t){const e=sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function YS(n,t){const e=sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function jS(n,t){const e=sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $S(n,t){n.uniform1iv(this.addr,t)}function ZS(n,t){n.uniform2iv(this.addr,t)}function KS(n,t){n.uniform3iv(this.addr,t)}function JS(n,t){n.uniform4iv(this.addr,t)}function QS(n,t){n.uniform1uiv(this.addr,t)}function tM(n,t){n.uniform2uiv(this.addr,t)}function eM(n,t){n.uniform3uiv(this.addr,t)}function nM(n,t){n.uniform4uiv(this.addr,t)}function iM(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Kl:a=Vp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function sM(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Hp,r[a])}function rM(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wp,r[a])}function aM(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gp,r[a])}function oM(n){switch(n){case 5126:return GS;case 35664:return HS;case 35665:return WS;case 35666:return XS;case 35674:return qS;case 35675:return YS;case 35676:return jS;case 5124:case 35670:return $S;case 35667:case 35671:return ZS;case 35668:case 35672:return KS;case 35669:case 35673:return JS;case 5125:return QS;case 36294:return tM;case 36295:return eM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return aM}}class cM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=VS(e.type)}}class lM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=oM(e.type)}}class uM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function Fd(n,t){n.seq.push(t),n.map[t.id]=t}function hM(n,t,e){const i=n.name,s=i.length;for(Bc.lastIndex=0;;){const r=Bc.exec(i),a=Bc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Fd(e,l===void 0?new cM(o,n,t):new lM(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new uM(o),Fd(e,d)),e=d}}}class no{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);hM(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Od(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const dM=37297;let fM=0;function pM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Bd=new Yt;function mM(n){Qt._getMatrix(Bd,Qt.workingColorSpace,n);const t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case vo:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+pM(n.getShaderSource(t),o)}else return r}function gM(n,t){const e=mM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const _M={[Xf]:"Linear",[qf]:"Reinhard",[Yf]:"Cineon",[jf]:"ACESFilmic",[Zf]:"AgX",[Kf]:"Neutral",[$f]:"Custom"};function vM(n,t){const e=_M[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Va=new L;function xM(){Qt.getLuminanceCoefficients(Va);const n=Va.x.toFixed(4),t=Va.y.toFixed(4),e=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function SM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function MM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Tr(n){return n!==""}function zd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(n){return n.replace(bM,wM)}const EM=new Map;function wM(n,t){let e=jt[t];if(e===void 0){const i=EM.get(t);if(i!==void 0)e=jt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}const TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(n){return n.replace(TM,AM)}function AM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const CM={[Ka]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function RM(n){return CM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PM={[ts]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE_UV"};function LM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":PM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const IM={[Ws]:"ENVMAP_MODE_REFRACTION"};function DM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":IM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NM={[Tu]:"ENVMAP_BLENDING_MULTIPLY",[Qg]:"ENVMAP_BLENDING_MIX",[t0]:"ENVMAP_BLENDING_ADD"};function UM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":NM[n.combine]||"ENVMAP_BLENDING_NONE"}function FM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function OM(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=RM(e),l=LM(e),u=DM(e),d=UM(e),h=FM(e),f=yM(e),p=SM(r),S=s.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Tr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Tr).join(`
`),m.length>0&&(m+=`
`)):(g=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),m=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?vM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,gM("linearToOutputTexel",e.outputColorSpace),xM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),a=Jl(a),a=zd(a,e),a=Vd(a,e),o=Jl(o),o=zd(o,e),o=Vd(o,e),a=Gd(a),o=Gd(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+g+a,x=y+m+o,T=Od(s,s.VERTEX_SHADER,M),A=Od(s,s.FRAGMENT_SHADER,x);s.attachShader(S,T),s.attachShader(S,A),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(P){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(S)||"",k=s.getShaderInfoLog(T)||"",H=s.getShaderInfoLog(A)||"",B=N.trim(),z=k.trim(),O=H.trim();let it=!0,Q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,T,A);else{const mt=kd(s,T,"vertex"),_t=kd(s,A,"fragment");Bt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+mt+`
`+_t)}else B!==""?Nt("WebGLProgram: Program Info Log:",B):(z===""||O==="")&&(Q=!1);Q&&(P.diagnostics={runnable:it,programLog:B,vertexShader:{log:z,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(T),s.deleteShader(A),_=new no(s,S),b=MM(s,S)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(S,dM)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fM++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=A,this}let BM=0;class kM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new zM(t),e.set(t,i)),i}}class zM{constructor(t){this.id=BM++,this.code=t,this.usedTimes=0}}function VM(n,t,e,i,s,r){const a=new hp,o=new kM,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,b,F,P,N){const k=P.fog,H=N.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||B,z),it=O&&O.mapping===Oo?O.image.height:null,Q=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Nt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_t=mt!==void 0?mt.length:0;let gt=0;H.morphAttributes.position!==void 0&&(gt=1),H.morphAttributes.normal!==void 0&&(gt=2),H.morphAttributes.color!==void 0&&(gt=3);let kt,ne,oe,$;if(Q){const ie=zn[Q];kt=ie.vertexShader,ne=ie.fragmentShader}else kt=_.vertexShader,ne=_.fragmentShader,o.update(_),oe=o.getVertexShaderID(_),$=o.getFragmentShaderID(_);const at=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,It=N.isBatchedMesh===!0,zt=!!_.map,ce=!!_.matcap,Ht=!!O,K=!!_.aoMap,et=!!_.lightMap,J=!!_.bumpMap,ht=!!_.normalMap,R=!!_.displacementMap,Dt=!!_.emissiveMap,vt=!!_.metalnessMap,Ft=!!_.roughnessMap,ct=_.anisotropy>0,w=_.clearcoat>0,v=_.dispersion>0,D=_.iridescence>0,X=_.sheen>0,Z=_.transmission>0,Y=ct&&!!_.anisotropyMap,bt=w&&!!_.clearcoatMap,lt=w&&!!_.clearcoatNormalMap,Pt=w&&!!_.clearcoatRoughnessMap,Ot=D&&!!_.iridescenceMap,tt=D&&!!_.iridescenceThicknessMap,st=X&&!!_.sheenColorMap,Et=X&&!!_.sheenRoughnessMap,Tt=!!_.specularMap,xt=!!_.specularColorMap,$t=!!_.specularIntensityMap,I=Z&&!!_.transmissionMap,ut=Z&&!!_.thicknessMap,rt=!!_.gradientMap,Mt=!!_.alphaMap,nt=_.alphaTest>0,j=!!_.alphaHash,wt=!!_.extensions;let Gt=Gn;_.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Gt=n.toneMapping);const me={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:ne,defines:_.defines,customVertexShaderID:oe,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:It,batchingColor:It&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:qs,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:ce,envMap:Ht,envMapMode:Ht&&O.mapping,envMapCubeUVHeight:it,aoMap:K,lightMap:et,bumpMap:J,normalMap:ht,displacementMap:R,emissiveMap:Dt,normalMapObjectSpace:ht&&_.normalMapType===r0,normalMapTangentSpace:ht&&_.normalMapType===Nu,metalnessMap:vt,roughnessMap:Ft,anisotropy:ct,anisotropyMap:Y,clearcoat:w,clearcoatMap:bt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Pt,dispersion:v,iridescence:D,iridescenceMap:Ot,iridescenceThicknessMap:tt,sheen:X,sheenColorMap:st,sheenRoughnessMap:Et,specularMap:Tt,specularColorMap:xt,specularIntensityMap:$t,transmission:Z,transmissionMap:I,thicknessMap:ut,gradientMap:rt,opaque:_.transparent===!1&&_.blending===ks&&_.alphaToCoverage===!1,alphaMap:Mt,alphaTest:nt,alphaHash:j,combine:_.combine,mapUv:zt&&p(_.map.channel),aoMapUv:K&&p(_.aoMap.channel),lightMapUv:et&&p(_.lightMap.channel),bumpMapUv:J&&p(_.bumpMap.channel),normalMapUv:ht&&p(_.normalMap.channel),displacementMapUv:R&&p(_.displacementMap.channel),emissiveMapUv:Dt&&p(_.emissiveMap.channel),metalnessMapUv:vt&&p(_.metalnessMap.channel),roughnessMapUv:Ft&&p(_.roughnessMap.channel),anisotropyMapUv:Y&&p(_.anisotropyMap.channel),clearcoatMapUv:bt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:lt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:st&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Et&&p(_.sheenRoughnessMap.channel),specularMapUv:Tt&&p(_.specularMap.channel),specularColorMapUv:xt&&p(_.specularColorMap.channel),specularIntensityMapUv:$t&&p(_.specularIntensityMap.channel),transmissionMapUv:I&&p(_.transmissionMap.channel),thicknessMapUv:ut&&p(_.thicknessMap.channel),alphaMapUv:Mt&&p(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ht||ct),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(zt||Mt),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&ht===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ot,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:gt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===se,decodeVideoTextureEmissive:Dt&&_.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(_.emissiveMap.colorSpace)===se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Be,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:wt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&_.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function g(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)b.push(F),b.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(m(b,_),y(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){const b=f[_.type];let F;if(b){const P=zn[b];F=O_.clone(P.uniforms)}else F=_.uniforms;return F}function x(_,b){let F=u.get(b);return F!==void 0?++F.usedTimes:(F=new OM(n,b,_,s),l.push(F),u.set(b,F)),F}function T(_){if(--_.usedTimes===0){const b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:C}}function GM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function HM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Wd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,S,g,m){let y=n[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:g,group:m},n[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=p,y.materialVariant=a(h),y.groupOrder=S,y.renderOrder=h.renderOrder,y.z=g,y.group=m),t++,y}function c(h,f,p,S,g,m){const y=o(h,f,p,S,g,m);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):e.push(y)}function l(h,f,p,S,g,m){const y=o(h,f,p,S,g,m);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,f){e.length>1&&e.sort(h||HM),i.length>1&&i.sort(f||Wd),s.length>1&&s.sort(f||Wd)}function d(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function WM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Xd,n.set(i,[a])):s>=r.length?(a=new Xd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function XM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function qM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let YM=0;function jM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $M(n){const t=new XM,e=qM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,r=new Jt,a=new Jt;function o(l){let u=0,d=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,p=0,S=0,g=0,m=0,y=0,M=0,x=0,T=0,A=0,C=0;l.sort(jM);for(let b=0,F=l.length;b<F;b++){const P=l[b],N=P.color,k=P.intensity,H=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Xs?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*k,d+=N.g*k,h+=N.b*k;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],k);C++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,it=e.get(P);it.shadowIntensity=O.intensity,it.shadowBias=O.bias,it.shadowNormalBias=O.normalBias,it.shadowRadius=O.radius,it.shadowMapSize=O.mapSize,i.directionalShadow[f]=it,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=z,f++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(N).multiplyScalar(k),z.distance=H,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[S]=z;const O=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,O.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[S]=O.matrix,P.castShadow){const it=e.get(P);it.shadowIntensity=O.intensity,it.shadowBias=O.bias,it.shadowNormalBias=O.normalBias,it.shadowRadius=O.radius,it.shadowMapSize=O.mapSize,i.spotShadow[S]=it,i.spotShadowMap[S]=B,x++}S++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(N).multiplyScalar(k),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=z,g++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const O=P.shadow,it=e.get(P);it.shadowIntensity=O.intensity,it.shadowBias=O.bias,it.shadowNormalBias=O.normalBias,it.shadowRadius=O.radius,it.shadowMapSize=O.mapSize,it.shadowCameraNear=O.camera.near,it.shadowCameraFar=O.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=B,i.pointShadowMatrix[p]=P.shadow.matrix,M++}i.point[p]=z,p++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(k),z.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[m]=z,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==f||_.pointLength!==p||_.spotLength!==S||_.rectAreaLength!==g||_.hemiLength!==m||_.numDirectionalShadows!==y||_.numPointShadows!==M||_.numSpotShadows!==x||_.numSpotMaps!==T||_.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=S,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,_.directionalLength=f,_.pointLength=p,_.spotLength=S,_.rectAreaLength=g,_.hemiLength=m,_.numDirectionalShadows=y,_.numPointShadows=M,_.numSpotShadows=x,_.numSpotMaps=T,_.numLightProbes=C,i.version=YM++)}function c(l,u){let d=0,h=0,f=0,p=0,S=0;const g=u.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const M=l[m];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const x=i.hemi[S];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),S++}}}return{setup:o,setupView:c,state:i}}function qd(n){const t=new $M(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ZM(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new qd(n),t.set(s,[o])):r>=a.length?(o=new qd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
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
}`,QM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],tb=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Yd=new Jt,_r=new L,kc=new L;function eb(n,t,e){let i=new Wu;const s=new q,r=new q,a=new ge,o=new G_,c=new H_,l={},u=e.maxTextureSize,d={[Di]:an,[an]:Di,[Be]:Be},h=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:KM,fragmentShader:JM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ee;p.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Kt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let m=this.type;this.render=function(A,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Ng&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ka);const b=n.getRenderTarget(),F=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ci),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=m!==this.type;k&&C.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(B=>B.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,B=A.length;H<B;H++){const z=A[H],O=z.shadow;if(O===void 0){Nt("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const it=O.getFrameExtents();s.multiply(it),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,O.mapSize.y=r.y));const Q=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Q,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Er){if(z.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Wn(s.x,s.y,{format:Xs,type:ui,minFilter:je,magFilter:je,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Hr(s.x,s.y,Ln),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=hi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke}else z.isPointLight?(O.map=new zp(s.x),O.map.depthTexture=new r_(s.x,Xn)):(O.map=new Wn(s.x,s.y),O.map.depthTexture=new Hr(s.x,s.y,Xn)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=hi,this.type===Ka?(O.map.depthTexture.compareFunction=Q?Fu:Uu,O.map.depthTexture.minFilter=je,O.map.depthTexture.magFilter=je):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke);O.camera.updateProjectionMatrix()}const mt=O.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<mt;_t++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,_t),n.clear();else{_t===0&&(n.setRenderTarget(O.map),n.clear());const gt=O.getViewport(_t);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),N.viewport(a)}if(z.isPointLight){const gt=O.camera,kt=O.matrix,ne=z.distance||gt.far;ne!==gt.far&&(gt.far=ne,gt.updateProjectionMatrix()),_r.setFromMatrixPosition(z.matrixWorld),gt.position.copy(_r),kc.copy(gt.position),kc.add(QM[_t]),gt.up.copy(tb[_t]),gt.lookAt(kc),gt.updateMatrixWorld(),kt.makeTranslation(-_r.x,-_r.y,-_r.z),Yd.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Yd,gt.coordinateSystem,gt.reversedDepth)}else O.updateMatrices(z);i=O.getFrustum(),x(C,_,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Er&&y(O,_),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,F,P)};function y(A,C){const _=t.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wn(s.x,s.y,{format:Xs,type:ui})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,_,h,S,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,_,f,S,null)}function M(A,C,_,b){let F=null;const P=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)F=P;else if(F=_.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=F.uuid,k=C.uuid;let H=l[N];H===void 0&&(H={},l[N]=H);let B=H[k];B===void 0&&(B=F.clone(),H[k]=B,C.addEventListener("dispose",T)),F=B}if(F.visible=C.visible,F.wireframe=C.wireframe,b===Er?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:d[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,_.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const N=n.properties.get(F);N.light=_}return F}function x(A,C,_,b,F){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===Er)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const k=t.update(A),H=A.material;if(Array.isArray(H)){const B=k.groups;for(let z=0,O=B.length;z<O;z++){const it=B[z],Q=H[it.materialIndex];if(Q&&Q.visible){const mt=M(A,Q,b,F);A.onBeforeShadow(n,A,C,_,k,mt,it),n.renderBufferDirect(_,null,k,mt,A,it),A.onAfterShadow(n,A,C,_,k,mt,it)}}}else if(H.visible){const B=M(A,H,b,F);A.onBeforeShadow(n,A,C,_,k,B,null),n.renderBufferDirect(_,null,k,B,A,null),A.onAfterShadow(n,A,C,_,k,B,null)}}const N=A.children;for(let k=0,H=N.length;k<H;k++)x(N[k],C,_,b,F)}function T(A){A.target.removeEventListener("dispose",T);for(const _ in l){const b=l[_],F=A.target.uuid;F in b&&(b[F].dispose(),delete b[F])}}}function nb(n,t){function e(){let I=!1;const ut=new ge;let rt=null;const Mt=new ge(0,0,0,0);return{setMask:function(nt){rt!==nt&&!I&&(n.colorMask(nt,nt,nt,nt),rt=nt)},setLocked:function(nt){I=nt},setClear:function(nt,j,wt,Gt,me){me===!0&&(nt*=Gt,j*=Gt,wt*=Gt),ut.set(nt,j,wt,Gt),Mt.equals(ut)===!1&&(n.clearColor(nt,j,wt,Gt),Mt.copy(ut))},reset:function(){I=!1,rt=null,Mt.set(-1,0,0,0)}}}function i(){let I=!1,ut=!1,rt=null,Mt=null,nt=null;return{setReversed:function(j){if(ut!==j){const wt=t.get("EXT_clip_control");j?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),ut=j;const Gt=nt;nt=null,this.setClear(Gt)}},getReversed:function(){return ut},setTest:function(j){j?at(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(j){rt!==j&&!I&&(n.depthMask(j),rt=j)},setFunc:function(j){if(ut&&(j=g0[j]),Mt!==j){switch(j){case al:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case cl:n.depthFunc(n.LESS);break;case Hs:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case ul:n.depthFunc(n.GEQUAL);break;case hl:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=j}},setLocked:function(j){I=j},setClear:function(j){nt!==j&&(nt=j,ut&&(j=1-j),n.clearDepth(j))},reset:function(){I=!1,rt=null,Mt=null,nt=null,ut=!1}}}function s(){let I=!1,ut=null,rt=null,Mt=null,nt=null,j=null,wt=null,Gt=null,me=null;return{setTest:function(ie){I||(ie?at(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(ie){ut!==ie&&!I&&(n.stencilMask(ie),ut=ie)},setFunc:function(ie,Kn,Jn){(rt!==ie||Mt!==Kn||nt!==Jn)&&(n.stencilFunc(ie,Kn,Jn),rt=ie,Mt=Kn,nt=Jn)},setOp:function(ie,Kn,Jn){(j!==ie||wt!==Kn||Gt!==Jn)&&(n.stencilOp(ie,Kn,Jn),j=ie,wt=Kn,Gt=Jn)},setLocked:function(ie){I=ie},setClear:function(ie){me!==ie&&(n.clearStencil(ie),me=ie)},reset:function(){I=!1,ut=null,rt=null,Mt=null,nt=null,j=null,wt=null,Gt=null,me=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,S=!1,g=null,m=null,y=null,M=null,x=null,T=null,A=null,C=new Vt(0,0,0),_=0,b=!1,F=null,P=null,N=null,k=null,H=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(it)[1]),z=O>=1):it.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),z=O>=2);let Q=null,mt={};const _t=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),kt=new ge().fromArray(_t),ne=new ge().fromArray(gt);function oe(I,ut,rt,Mt){const nt=new Uint8Array(4),j=n.createTexture();n.bindTexture(I,j),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<rt;wt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,nt):n.texImage2D(ut+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,nt);return j}const $={};$[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(Hs),J(!1),ht(Dh),at(n.CULL_FACE),K(ci);function at(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ot(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ut(I,ut){return d[I]!==ut?(n.bindFramebuffer(I,ut),d[I]=ut,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ut),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function It(I,ut){let rt=f,Mt=!1;if(I){rt=h.get(ut),rt===void 0&&(rt=[],h.set(ut,rt));const nt=I.textures;if(rt.length!==nt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let j=0,wt=nt.length;j<wt;j++)rt[j]=n.COLOR_ATTACHMENT0+j;rt.length=nt.length,Mt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(rt)}function zt(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const ce={[ji]:n.FUNC_ADD,[Fg]:n.FUNC_SUBTRACT,[Og]:n.FUNC_REVERSE_SUBTRACT};ce[Bg]=n.MIN,ce[kg]=n.MAX;const Ht={[zg]:n.ZERO,[Vg]:n.ONE,[Gg]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[jg]:n.SRC_ALPHA_SATURATE,[qg]:n.DST_COLOR,[Wg]:n.DST_ALPHA,[Hg]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[Yg]:n.ONE_MINUS_DST_COLOR,[Xg]:n.ONE_MINUS_DST_ALPHA,[$g]:n.CONSTANT_COLOR,[Zg]:n.ONE_MINUS_CONSTANT_COLOR,[Kg]:n.CONSTANT_ALPHA,[Jg]:n.ONE_MINUS_CONSTANT_ALPHA};function K(I,ut,rt,Mt,nt,j,wt,Gt,me,ie){if(I===ci){S===!0&&(ot(n.BLEND),S=!1);return}if(S===!1&&(at(n.BLEND),S=!0),I!==Ug){if(I!==g||ie!==b){if((m!==ji||x!==ji)&&(n.blendEquation(n.FUNC_ADD),m=ji,x=ji),ie)switch(I){case ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nh:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",I);break}else switch(I){case ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uh:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",I);break}y=null,M=null,T=null,A=null,C.set(0,0,0),_=0,g=I,b=ie}return}nt=nt||ut,j=j||rt,wt=wt||Mt,(ut!==m||nt!==x)&&(n.blendEquationSeparate(ce[ut],ce[nt]),m=ut,x=nt),(rt!==y||Mt!==M||j!==T||wt!==A)&&(n.blendFuncSeparate(Ht[rt],Ht[Mt],Ht[j],Ht[wt]),y=rt,M=Mt,T=j,A=wt),(Gt.equals(C)===!1||me!==_)&&(n.blendColor(Gt.r,Gt.g,Gt.b,me),C.copy(Gt),_=me),g=I,b=!1}function et(I,ut){I.side===Be?ot(n.CULL_FACE):at(n.CULL_FACE);let rt=I.side===an;ut&&(rt=!rt),J(rt),I.blending===ks&&I.transparent===!1?K(ci):K(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Mt=I.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(I){F!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),F=I)}function ht(I){I!==Ig?(at(n.CULL_FACE),I!==P&&(I===Dh?n.cullFace(n.BACK):I===Dg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),P=I}function R(I){I!==N&&(z&&n.lineWidth(I),N=I)}function Dt(I,ut,rt){I?(at(n.POLYGON_OFFSET_FILL),(k!==ut||H!==rt)&&(k=ut,H=rt,a.getReversed()&&(ut=-ut),n.polygonOffset(ut,rt))):ot(n.POLYGON_OFFSET_FILL)}function vt(I){I?at(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function Ft(I){I===void 0&&(I=n.TEXTURE0+B-1),Q!==I&&(n.activeTexture(I),Q=I)}function ct(I,ut,rt){rt===void 0&&(Q===null?rt=n.TEXTURE0+B-1:rt=Q);let Mt=mt[rt];Mt===void 0&&(Mt={type:void 0,texture:void 0},mt[rt]=Mt),(Mt.type!==I||Mt.texture!==ut)&&(Q!==rt&&(n.activeTexture(rt),Q=rt),n.bindTexture(I,ut||$[I]),Mt.type=I,Mt.texture=ut)}function w(){const I=mt[Q];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function X(){try{n.texSubImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function Z(){try{n.texSubImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function lt(){try{n.texStorage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function Pt(){try{n.texStorage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function Ot(){try{n.texImage2D(...arguments)}catch(I){Bt("WebGLState:",I)}}function tt(){try{n.texImage3D(...arguments)}catch(I){Bt("WebGLState:",I)}}function st(I){kt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),kt.copy(I))}function Et(I){ne.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ne.copy(I))}function Tt(I,ut){let rt=l.get(ut);rt===void 0&&(rt=new WeakMap,l.set(ut,rt));let Mt=rt.get(I);Mt===void 0&&(Mt=n.getUniformBlockIndex(ut,I.name),rt.set(I,Mt))}function xt(I,ut){const Mt=l.get(ut).get(I);c.get(ut)!==Mt&&(n.uniformBlockBinding(ut,Mt,I.__bindingPointIndex),c.set(ut,Mt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,mt={},d={},h=new WeakMap,f=[],p=null,S=!1,g=null,m=null,y=null,M=null,x=null,T=null,A=null,C=new Vt(0,0,0),_=0,b=!1,F=null,P=null,N=null,k=null,H=null,kt.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:ot,bindFramebuffer:Ut,drawBuffers:It,useProgram:zt,setBlending:K,setMaterial:et,setFlipSided:J,setCullFace:ht,setLineWidth:R,setPolygonOffset:Dt,setScissorTest:vt,activeTexture:Ft,bindTexture:ct,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:Ot,texImage3D:tt,updateUBOMapping:Tt,uniformBlockBinding:xt,texStorage2D:lt,texStorage3D:Pt,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:bt,scissor:st,viewport:Et,reset:$t}}function ib(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new q,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,v){return f?new OffscreenCanvas(w,v):Vr("canvas")}function S(w,v,D){let X=1;const Z=ct(w);if((Z.width>D||Z.height>D)&&(X=D/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(X*Z.width),bt=Math.floor(X*Z.height);d===void 0&&(d=p(Y,bt));const lt=v?p(Y,bt):d;return lt.width=Y,lt.height=bt,lt.getContext("2d").drawImage(w,0,0,Y,bt),Nt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+bt+")."),lt}else return"data"in w&&Nt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function g(w){return w.generateMipmaps}function m(w){n.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,v,D,X,Z=!1){if(w!==null){if(n[w]!==void 0)return n[w];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=v;if(v===n.RED&&(D===n.FLOAT&&(Y=n.R32F),D===n.HALF_FLOAT&&(Y=n.R16F),D===n.UNSIGNED_BYTE&&(Y=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.R8UI),D===n.UNSIGNED_SHORT&&(Y=n.R16UI),D===n.UNSIGNED_INT&&(Y=n.R32UI),D===n.BYTE&&(Y=n.R8I),D===n.SHORT&&(Y=n.R16I),D===n.INT&&(Y=n.R32I)),v===n.RG&&(D===n.FLOAT&&(Y=n.RG32F),D===n.HALF_FLOAT&&(Y=n.RG16F),D===n.UNSIGNED_BYTE&&(Y=n.RG8)),v===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RG8UI),D===n.UNSIGNED_SHORT&&(Y=n.RG16UI),D===n.UNSIGNED_INT&&(Y=n.RG32UI),D===n.BYTE&&(Y=n.RG8I),D===n.SHORT&&(Y=n.RG16I),D===n.INT&&(Y=n.RG32I)),v===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),D===n.UNSIGNED_INT&&(Y=n.RGB32UI),D===n.BYTE&&(Y=n.RGB8I),D===n.SHORT&&(Y=n.RGB16I),D===n.INT&&(Y=n.RGB32I)),v===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),D===n.UNSIGNED_INT&&(Y=n.RGBA32UI),D===n.BYTE&&(Y=n.RGBA8I),D===n.SHORT&&(Y=n.RGBA16I),D===n.INT&&(Y=n.RGBA32I)),v===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),v===n.RGBA){const bt=Z?vo:Qt.getTransfer(X);D===n.FLOAT&&(Y=n.RGBA32F),D===n.HALF_FLOAT&&(Y=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Y=bt===se?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(w,v){let D;return w?v===null||v===Xn||v===kr?D=n.DEPTH24_STENCIL8:v===Ln?D=n.DEPTH32F_STENCIL8:v===Br&&(D=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xn||v===kr?D=n.DEPTH_COMPONENT24:v===Ln?D=n.DEPTH_COMPONENT32F:v===Br&&(D=n.DEPTH_COMPONENT16),D}function T(w,v){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==ke&&w.minFilter!==je?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){const v=w.target;v.removeEventListener("dispose",A),_(v),v.isVideoTexture&&u.delete(v)}function C(w){const v=w.target;v.removeEventListener("dispose",C),F(v)}function _(w){const v=i.get(w);if(v.__webglInit===void 0)return;const D=w.source,X=h.get(D);if(X){const Z=X[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(w),Object.keys(X).length===0&&h.delete(D)}i.remove(w)}function b(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const D=w.source,X=h.get(D);delete X[v.__cacheKey],a.memory.textures--}function F(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let Z=0;Z<v.__webglFramebuffer[X].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[X][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=w.textures;for(let X=0,Z=D.length;X<Z;X++){const Y=i.get(D[X]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(D[X])}i.remove(w)}let P=0;function N(){P=0}function k(){const w=P;return w>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function H(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function B(w,v){const D=i.get(w);if(w.isVideoTexture&&vt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&D.__version!==w.version){const X=w.image;if(X===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,w,v);return}}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function z(w,v){const D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){$(D,w,v);return}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function O(w,v){const D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){$(D,w,v);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function it(w,v){const D=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&D.__version!==w.version){at(D,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const Q={[fl]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[pl]:n.MIRRORED_REPEAT},mt={[ke]:n.NEAREST,[n0]:n.NEAREST_MIPMAP_NEAREST,[da]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[ic]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},_t={[a0]:n.NEVER,[h0]:n.ALWAYS,[o0]:n.LESS,[Uu]:n.LEQUAL,[c0]:n.EQUAL,[Fu]:n.GEQUAL,[l0]:n.GREATER,[u0]:n.NOTEQUAL};function gt(w,v){if(v.type===Ln&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===je||v.magFilter===ic||v.magFilter===da||v.magFilter===Zi||v.minFilter===je||v.minFilter===ic||v.minFilter===da||v.minFilter===Zi)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Q[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Q[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Q[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,mt[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ke||v.minFilter!==da&&v.minFilter!==Zi||v.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function kt(w,v){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));const X=v.source;let Z=h.get(X);Z===void 0&&(Z={},h.set(X,Z));const Y=H(v);if(Y!==w.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Z[Y].usedTimes++;const bt=Z[w.__cacheKey];bt!==void 0&&(Z[w.__cacheKey].usedTimes--,bt.usedTimes===0&&b(v)),w.__cacheKey=Y,w.__webglTexture=Z[Y].texture}return D}function ne(w,v,D){return Math.floor(Math.floor(w/D)/v)}function oe(w,v,D,X){const Y=w.updateRanges;if(Y.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,D,X,v.data);else{Y.sort((tt,st)=>tt.start-st.start);let bt=0;for(let tt=1;tt<Y.length;tt++){const st=Y[bt],Et=Y[tt],Tt=st.start+st.count,xt=ne(Et.start,v.width,4),$t=ne(st.start,v.width,4);Et.start<=Tt+1&&xt===$t&&ne(Et.start+Et.count-1,v.width,4)===xt?st.count=Math.max(st.count,Et.start+Et.count-st.start):(++bt,Y[bt]=Et)}Y.length=bt+1;const lt=n.getParameter(n.UNPACK_ROW_LENGTH),Pt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ot=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let tt=0,st=Y.length;tt<st;tt++){const Et=Y[tt],Tt=Math.floor(Et.start/4),xt=Math.ceil(Et.count/4),$t=Tt%v.width,I=Math.floor(Tt/v.width),ut=xt,rt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$t),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,$t,I,ut,rt,D,X,v.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,lt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ot)}}function $(w,v,D){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const Z=kt(w,v),Y=v.source;e.bindTexture(X,w.__webglTexture,n.TEXTURE0+D);const bt=i.get(Y);if(Y.version!==bt.__version||Z===!0){e.activeTexture(n.TEXTURE0+D);const lt=Qt.getPrimaries(Qt.workingColorSpace),Pt=v.colorSpace===Ti?null:Qt.getPrimaries(v.colorSpace),Ot=v.colorSpace===Ti||lt===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let tt=S(v.image,!1,s.maxTextureSize);tt=Ft(v,tt);const st=r.convert(v.format,v.colorSpace),Et=r.convert(v.type);let Tt=M(v.internalFormat,st,Et,v.colorSpace,v.isVideoTexture);gt(X,v);let xt;const $t=v.mipmaps,I=v.isVideoTexture!==!0,ut=bt.__version===void 0||Z===!0,rt=Y.dataReady,Mt=T(v,tt);if(v.isDepthTexture)Tt=x(v.format===Ki,v.type),ut&&(I?e.texStorage2D(n.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Tt,tt.width,tt.height,0,st,Et,null));else if(v.isDataTexture)if($t.length>0){I&&ut&&e.texStorage2D(n.TEXTURE_2D,Mt,Tt,$t[0].width,$t[0].height);for(let nt=0,j=$t.length;nt<j;nt++)xt=$t[nt],I?rt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,st,Et,xt.data):e.texImage2D(n.TEXTURE_2D,nt,Tt,xt.width,xt.height,0,st,Et,xt.data);v.generateMipmaps=!1}else I?(ut&&e.texStorage2D(n.TEXTURE_2D,Mt,Tt,tt.width,tt.height),rt&&oe(v,tt,st,Et)):e.texImage2D(n.TEXTURE_2D,0,Tt,tt.width,tt.height,0,st,Et,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Tt,$t[0].width,$t[0].height,tt.depth);for(let nt=0,j=$t.length;nt<j;nt++)if(xt=$t[nt],v.format!==xn)if(st!==null)if(I){if(rt)if(v.layerUpdates.size>0){const wt=Ed(xt.width,xt.height,v.format,v.type);for(const Gt of v.layerUpdates){const me=xt.data.subarray(Gt*wt/xt.data.BYTES_PER_ELEMENT,(Gt+1)*wt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Gt,xt.width,xt.height,1,st,me)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,tt.depth,st,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Tt,xt.width,xt.height,tt.depth,0,xt.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,tt.depth,st,Et,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Tt,xt.width,xt.height,tt.depth,0,st,Et,xt.data)}else{I&&ut&&e.texStorage2D(n.TEXTURE_2D,Mt,Tt,$t[0].width,$t[0].height);for(let nt=0,j=$t.length;nt<j;nt++)xt=$t[nt],v.format!==xn?st!==null?I?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,st,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Tt,xt.width,xt.height,0,xt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,st,Et,xt.data):e.texImage2D(n.TEXTURE_2D,nt,Tt,xt.width,xt.height,0,st,Et,xt.data)}else if(v.isDataArrayTexture)if(I){if(ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Tt,tt.width,tt.height,tt.depth),rt)if(v.layerUpdates.size>0){const nt=Ed(tt.width,tt.height,v.format,v.type);for(const j of v.layerUpdates){const wt=tt.data.subarray(j*nt/tt.data.BYTES_PER_ELEMENT,(j+1)*nt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,st,Et,wt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,st,Et,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,st,Et,tt.data);else if(v.isData3DTexture)I?(ut&&e.texStorage3D(n.TEXTURE_3D,Mt,Tt,tt.width,tt.height,tt.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,st,Et,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,st,Et,tt.data);else if(v.isFramebufferTexture){if(ut)if(I)e.texStorage2D(n.TEXTURE_2D,Mt,Tt,tt.width,tt.height);else{let nt=tt.width,j=tt.height;for(let wt=0;wt<Mt;wt++)e.texImage2D(n.TEXTURE_2D,wt,Tt,nt,j,0,st,Et,null),nt>>=1,j>>=1}}else if($t.length>0){if(I&&ut){const nt=ct($t[0]);e.texStorage2D(n.TEXTURE_2D,Mt,Tt,nt.width,nt.height)}for(let nt=0,j=$t.length;nt<j;nt++)xt=$t[nt],I?rt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,st,Et,xt):e.texImage2D(n.TEXTURE_2D,nt,Tt,st,Et,xt);v.generateMipmaps=!1}else if(I){if(ut){const nt=ct(tt);e.texStorage2D(n.TEXTURE_2D,Mt,Tt,nt.width,nt.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st,Et,tt)}else e.texImage2D(n.TEXTURE_2D,0,Tt,st,Et,tt);g(v)&&m(X),bt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function at(w,v,D){if(v.image.length!==6)return;const X=kt(w,v),Z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+D);const Y=i.get(Z);if(Z.version!==Y.__version||X===!0){e.activeTexture(n.TEXTURE0+D);const bt=Qt.getPrimaries(Qt.workingColorSpace),lt=v.colorSpace===Ti?null:Qt.getPrimaries(v.colorSpace),Pt=v.colorSpace===Ti||bt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Ot=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,st=[];for(let j=0;j<6;j++)!Ot&&!tt?st[j]=S(v.image[j],!0,s.maxCubemapSize):st[j]=tt?v.image[j].image:v.image[j],st[j]=Ft(v,st[j]);const Et=st[0],Tt=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),$t=M(v.internalFormat,Tt,xt,v.colorSpace),I=v.isVideoTexture!==!0,ut=Y.__version===void 0||X===!0,rt=Z.dataReady;let Mt=T(v,Et);gt(n.TEXTURE_CUBE_MAP,v);let nt;if(Ot){I&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,$t,Et.width,Et.height);for(let j=0;j<6;j++){nt=st[j].mipmaps;for(let wt=0;wt<nt.length;wt++){const Gt=nt[wt];v.format!==xn?Tt!==null?I?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,0,0,Gt.width,Gt.height,Tt,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,$t,Gt.width,Gt.height,0,Gt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,0,0,Gt.width,Gt.height,Tt,xt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,$t,Gt.width,Gt.height,0,Tt,xt,Gt.data)}}}else{if(nt=v.mipmaps,I&&ut){nt.length>0&&Mt++;const j=ct(st[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,$t,j.width,j.height)}for(let j=0;j<6;j++)if(tt){I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,st[j].width,st[j].height,Tt,xt,st[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,st[j].width,st[j].height,0,Tt,xt,st[j].data);for(let wt=0;wt<nt.length;wt++){const me=nt[wt].image[j].image;I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,0,0,me.width,me.height,Tt,xt,me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,$t,me.width,me.height,0,Tt,xt,me.data)}}else{I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Tt,xt,st[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,Tt,xt,st[j]);for(let wt=0;wt<nt.length;wt++){const Gt=nt[wt];I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,0,0,Tt,xt,Gt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,$t,Tt,xt,Gt.image[j])}}}g(v)&&m(n.TEXTURE_CUBE_MAP),Y.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ot(w,v,D,X,Z,Y){const bt=r.convert(D.format,D.colorSpace),lt=r.convert(D.type),Pt=M(D.internalFormat,bt,lt,D.colorSpace),Ot=i.get(v),tt=i.get(D);if(tt.__renderTarget=v,!Ot.__hasExternalTextures){const st=Math.max(1,v.width>>Y),Et=Math.max(1,v.height>>Y);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,Pt,st,Et,v.depth,0,bt,lt,null):e.texImage2D(Z,Y,Pt,st,Et,0,bt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Dt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Z,tt.__webglTexture,0,R(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Z,tt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(w,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const X=v.depthTexture,Z=X&&X.isDepthTexture?X.type:null,Y=x(v.stencilBuffer,Z),bt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Dt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(v),Y,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(v),Y,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Y,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,w)}else{const X=v.textures;for(let Z=0;Z<X.length;Z++){const Y=X[Z],bt=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),Pt=M(Y.internalFormat,bt,lt,Y.colorSpace);Dt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(v),Pt,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(v),Pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(w,v,D){const X=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),gt(n.TEXTURE_CUBE_MAP,v.depthTexture);const Ot=r.convert(v.depthTexture.format),tt=r.convert(v.depthTexture.type);let st;v.depthTexture.format===hi?st=n.DEPTH_COMPONENT24:v.depthTexture.format===Ki&&(st=n.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,st,v.width,v.height,0,Ot,tt,null)}}else B(v.depthTexture,0);const Y=Z.__webglTexture,bt=R(v),lt=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Pt=v.depthTexture.format===Ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===hi)Dt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pt,lt,Y,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,Pt,lt,Y,0);else if(v.depthTexture.format===Ki)Dt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pt,lt,Y,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,Pt,lt,Y,0);else throw new Error("Unknown depthTexture format")}function zt(w){const v=i.get(w),D=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=X}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let X=0;X<6;X++)It(v.__webglFramebuffer[X],w,X);else{const X=w.texture.mipmaps;X&&X.length>0?It(v.__webglFramebuffer[0],w,0):It(v.__webglFramebuffer,w,0)}else if(D){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),Ut(v.__webglDepthbuffer[X],w,!1);else{const Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Y)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ut(v.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Y)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(w,v,D){const X=i.get(w);v!==void 0&&ot(X.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&zt(w)}function Ht(w){const v=w.texture,D=i.get(w),X=i.get(v);w.addEventListener("dispose",C);const Z=w.textures,Y=w.isWebGLCubeRenderTarget===!0,bt=Z.length>1;if(bt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[lt]=[];for(let Pt=0;Pt<v.mipmaps.length;Pt++)D.__webglFramebuffer[lt][Pt]=n.createFramebuffer()}else D.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)D.__webglFramebuffer[lt]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(bt)for(let lt=0,Pt=Z.length;lt<Pt;lt++){const Ot=i.get(Z[lt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Dt(w)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const Pt=Z[lt];D.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[lt]);const Ot=r.convert(Pt.format,Pt.colorSpace),tt=r.convert(Pt.type),st=M(Pt.internalFormat,Ot,tt,Pt.colorSpace,w.isXRRenderTarget===!0),Et=R(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,st,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,D.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ut(D.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),gt(n.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)ot(D.__webglFramebuffer[lt][Pt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt);else ot(D.__webglFramebuffer[lt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(v)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let lt=0,Pt=Z.length;lt<Pt;lt++){const Ot=Z[lt],tt=i.get(Ot);let st=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(st=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,tt.__webglTexture),gt(st,Ot),ot(D.__webglFramebuffer,w,Ot,n.COLOR_ATTACHMENT0+lt,st,0),g(Ot)&&m(st)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,X.__webglTexture),gt(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)ot(D.__webglFramebuffer[Pt],w,v,n.COLOR_ATTACHMENT0,lt,Pt);else ot(D.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,lt,0);g(v)&&m(lt),e.unbindTexture()}w.depthBuffer&&zt(w)}function K(w){const v=w.textures;for(let D=0,X=v.length;D<X;D++){const Z=v[D];if(g(Z)){const Y=y(w),bt=i.get(Z).__webglTexture;e.bindTexture(Y,bt),m(Y),e.unbindTexture()}}}const et=[],J=[];function ht(w){if(w.samples>0){if(Dt(w)===!1){const v=w.textures,D=w.width,X=w.height;let Z=n.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(w),lt=v.length>1;if(lt)for(let Ot=0;Ot<v.length;Ot++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const Pt=w.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ot=0;Ot<v.length;Ot++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Ot]);const tt=i.get(v[Ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,D,X,0,0,D,X,Z,n.NEAREST),c===!0&&(et.length=0,J.length=0,et.push(n.COLOR_ATTACHMENT0+Ot),w.depthBuffer&&w.resolveDepthBuffer===!1&&(et.push(Y),J.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let Ot=0;Ot<v.length;Ot++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Ot]);const tt=i.get(v[Ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function R(w){return Math.min(s.maxSamples,w.samples)}function Dt(w){const v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(w){const v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function Ft(w,v){const D=w.colorSpace,X=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==qs&&D!==Ti&&(Qt.getTransfer(D)===se?(X!==xn||Z!==fn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",D)),v}function ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=it,this.rebindTextures=ce,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function sb(n,t){function e(i,s=Ti){let r;const a=Qt.getTransfer(s);if(i===fn)return n.UNSIGNED_BYTE;if(i===Cu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ru)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ep)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===np)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qf)return n.BYTE;if(i===tp)return n.SHORT;if(i===Br)return n.UNSIGNED_SHORT;if(i===Au)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===ui)return n.HALF_FLOAT;if(i===ip)return n.ALPHA;if(i===sp)return n.RGB;if(i===xn)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===rp)return n.RED;if(i===Pu)return n.RED_INTEGER;if(i===Xs)return n.RG;if(i===Lu)return n.RG_INTEGER;if(i===Iu)return n.RGBA_INTEGER;if(i===Ja||i===Qa||i===to||i===eo)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===_l||i===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===yl||i===Sl||i===Ml||i===bl||i===El||i===wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xl||i===yl)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ml)return r.COMPRESSED_R11_EAC;if(i===bl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===El)return r.COMPRESSED_RG11_EAC;if(i===wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tl||i===Al||i===Cl||i===Rl||i===Pl||i===Ll||i===Il||i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Tl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Il)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ul)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ol)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===Vl||i===Gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===zl)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hl||i===Wl||i===Xl||i===ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Hl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ab=`
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

}`;class ob{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new _p(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new qn({vertexShader:rb,fragmentShader:ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new di(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cb extends Fi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,p=null;const S=typeof XRWebGLBinding<"u",g=new ob,m={},y=e.getContextAttributes();let M=null,x=null;const T=[],A=[],C=new q;let _=null;const b=new _n;b.viewport=new ge;const F=new _n;F.viewport=new ge;const P=[b,F],N=new av;let k=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=T[$];return at===void 0&&(at=new lc,T[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=T[$];return at===void 0&&(at=new lc,T[$]=at),at.getGripSpace()},this.getHand=function($){let at=T[$];return at===void 0&&(at=new lc,T[$]=at),at.getHandSpace()};function B($){const at=A.indexOf($.inputSource);if(at===-1)return;const ot=T[at];ot!==void 0&&(ot.update($.inputSource,$.frame,l||a),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",O);for(let $=0;$<T.length;$++){const at=A[$];at!==null&&(A[$]=null,T[$].disconnect(at))}k=null,H=null,g.reset();for(const $ in m)delete m[$];t.setRenderTarget(M),f=null,h=null,d=null,s=null,x=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Ut=null,It=null;y.depth&&(It=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=y.stencil?Ki:hi,Ut=y.stencil?kr:Xn);const zt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Wn(h.textureWidth,h.textureHeight,{format:xn,type:fn,depthTexture:new Hr(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Wn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O($){for(let at=0;at<$.removed.length;at++){const ot=$.removed[at],Ut=A.indexOf(ot);Ut>=0&&(A[Ut]=null,T[Ut].disconnect(ot))}for(let at=0;at<$.added.length;at++){const ot=$.added[at];let Ut=A.indexOf(ot);if(Ut===-1){for(let zt=0;zt<T.length;zt++)if(zt>=A.length){A.push(ot),Ut=zt;break}else if(A[zt]===null){A[zt]=ot,Ut=zt;break}if(Ut===-1)break}const It=T[Ut];It&&It.connect(ot)}}const it=new L,Q=new L;function mt($,at,ot){it.setFromMatrixPosition(at.matrixWorld),Q.setFromMatrixPosition(ot.matrixWorld);const Ut=it.distanceTo(Q),It=at.projectionMatrix.elements,zt=ot.projectionMatrix.elements,ce=It[14]/(It[10]-1),Ht=It[14]/(It[10]+1),K=(It[9]+1)/It[5],et=(It[9]-1)/It[5],J=(It[8]-1)/It[0],ht=(zt[8]+1)/zt[0],R=ce*J,Dt=ce*ht,vt=Ut/(-J+ht),Ft=vt*-J;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ft),$.translateZ(vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),It[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const ct=ce+vt,w=Ht+vt,v=R-Ft,D=Dt+(Ut-Ft),X=K*Ht/w*ct,Z=et*Ht/w*ct;$.projectionMatrix.makePerspective(v,D,X,Z,ct,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _t($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let at=$.near,ot=$.far;g.texture!==null&&(g.depthNear>0&&(at=g.depthNear),g.depthFar>0&&(ot=g.depthFar)),N.near=F.near=b.near=at,N.far=F.far=b.far=ot,(k!==N.near||H!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,H=N.far),N.layers.mask=$.layers.mask|6,b.layers.mask=N.layers.mask&-5,F.layers.mask=N.layers.mask&-3;const Ut=$.parent,It=N.cameras;_t(N,Ut);for(let zt=0;zt<It.length;zt++)_t(It[zt],Ut);It.length===2?mt(N,b,F):N.projectionMatrix.copy(b.projectionMatrix),gt($,N,Ut)};function gt($,at,ot){ot===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function($){return m[$]};let kt=null;function ne($,at){if(u=at.getViewerPose(l||a),p=at,u!==null){const ot=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ut=!1;ot.length!==N.cameras.length&&(N.cameras.length=0,Ut=!0);for(let Ht=0;Ht<ot.length;Ht++){const K=ot[Ht];let et=null;if(f!==null)et=f.getViewport(K);else{const ht=d.getViewSubImage(h,K);et=ht.viewport,Ht===0&&(t.setRenderTargetTextures(x,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(x))}let J=P[Ht];J===void 0&&(J=new _n,J.layers.enable(Ht),J.viewport=new ge,P[Ht]=J),J.matrix.fromArray(K.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(K.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(et.x,et.y,et.width,et.height),Ht===0&&(N.matrix.copy(J.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ut===!0&&N.cameras.push(J)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Ht=d.getDepthInformation(ot[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(Ht,s.renderState)}if(It&&It.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let Ht=0;Ht<ot.length;Ht++){const K=ot[Ht].camera;if(K){let et=m[K];et||(et=new _p,m[K]=et);const J=d.getCameraImage(K);et.sourceTexture=J}}}}for(let ot=0;ot<T.length;ot++){const Ut=A[ot],It=T[ot];Ut!==null&&It!==void 0&&It.update(Ut,at,l||a)}kt&&kt($,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),p=null}const oe=new kp;oe.setAnimationLoop(ne),this.setAnimationLoop=function($){kt=$},this.dispose=function(){}}}const Wi=new Un,lb=new Jt;function ub(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Pp(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,M,x){m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),S(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,y,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===an&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===an&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),M=y.envMap,x=y.envMapRotation;M&&(g.envMap.value=M,Wi.copy(x),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),g.envMapRotation.value.setFromMatrix4(lb.makeRotationFromEuler(Wi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hb(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const x=M.program;i.uniformBlockBinding(y,x)}function l(y,M){let x=s[y.id];x===void 0&&(p(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",g));const T=M.program;i.updateUBOMapping(y,T);const A=t.render.frame;r[y.id]!==A&&(h(y),r[y.id]=A)}function u(y){const M=d();y.__bindingPointIndex=M;const x=n.createBuffer(),T=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=s[y.id],x=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,C=x.length;A<C;A++){const _=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,F=_.length;b<F;b++){const P=_[b];if(f(P,A,b,T)===!0){const N=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let B=0;B<k.length;B++){const z=k[B],O=S(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,N+H,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,H),H+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,M,x,T){const A=y.value,C=M+"_"+x;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const _=T[C];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return T[C]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function p(y){const M=y.uniforms;let x=0;const T=16;for(let C=0,_=M.length;C<_;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let F=0,P=b.length;F<P;F++){const N=b[F],k=Array.isArray(N.value)?N.value:[N.value];for(let H=0,B=k.length;H<B;H++){const z=k[H],O=S(z),it=x%T,Q=it%O.boundary,mt=it+Q;x+=Q,mt!==0&&T-mt<O.storage&&(x+=T-mt),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=O.storage}}}const A=x%T;return A>0&&(x+=T-A),y.__size=x,y.__cache={},this}function S(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Nt("WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}const db=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function fb(){return kn===null&&(kn=new mp(db,16,16,Xs,ui),kn.name="DFG_LUT",kn.minFilter=je,kn.magFilter=je,kn.wrapS=ri,kn.wrapT=ri,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class pb{constructor(t={}){const{canvas:e=p0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=fn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const S=f,g=new Set([Iu,Lu,Pu]),m=new Set([fn,Xn,Br,kr,Cu,Ru]),y=new Uint32Array(4),M=new Int32Array(4);let x=null,T=null;const A=[],C=[];let _=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let F=!1;this._outputColorSpace=Ye;let P=0,N=0,k=null,H=-1,B=null;const z=new ge,O=new ge;let it=null;const Q=new Vt(0);let mt=0,_t=e.width,gt=e.height,kt=1,ne=null,oe=null;const $=new ge(0,0,_t,gt),at=new ge(0,0,_t,gt);let ot=!1;const Ut=new Wu;let It=!1,zt=!1;const ce=new Jt,Ht=new L,K=new ge,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function ht(){return k===null?kt:1}let R=i;function Dt(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wu}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",me,!1),R===null){const U="webgl2";if(R=Dt(U,E),R===null)throw Dt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Bt("WebGLRenderer: "+E.message),E}let vt,Ft,ct,w,v,D,X,Z,Y,bt,lt,Pt,Ot,tt,st,Et,Tt,xt,$t,I,ut,rt,Mt;function nt(){vt=new pS(R),vt.init(),ut=new sb(R,vt),Ft=new aS(R,vt,t,ut),ct=new nb(R,vt),Ft.reversedDepthBuffer&&h&&ct.buffers.depth.setReversed(!0),w=new _S(R),v=new GM,D=new ib(R,vt,ct,v,Ft,ut,w),X=new fS(b),Z=new Mv(R),rt=new sS(R,Z),Y=new mS(R,Z,w,rt),bt=new xS(R,Y,Z,rt,w),xt=new vS(R,Ft,D),st=new oS(v),lt=new VM(b,X,vt,Ft,rt,st),Pt=new ub(b,v),Ot=new WM,tt=new ZM(vt),Tt=new iS(b,X,ct,bt,p,c),Et=new eb(b,bt,Ft),Mt=new hb(R,w,Ft,ct),$t=new rS(R,vt,w),I=new gS(R,vt,w),w.programs=lt.programs,b.capabilities=Ft,b.extensions=vt,b.properties=v,b.renderLists=Ot,b.shadowMap=Et,b.state=ct,b.info=w}nt(),S!==fn&&(_=new SS(S,e.width,e.height,s,r));const j=new cb(b,R);this.xr=j,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=vt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=vt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return kt},this.setPixelRatio=function(E){E!==void 0&&(kt=E,this.setSize(_t,gt,!1))},this.getSize=function(E){return E.set(_t,gt)},this.setSize=function(E,U,W=!0){if(j.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=E,gt=U,e.width=Math.floor(E*kt),e.height=Math.floor(U*kt),W===!0&&(e.style.width=E+"px",e.style.height=U+"px"),_!==null&&_.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(_t*kt,gt*kt).floor()},this.setDrawingBufferSize=function(E,U,W){_t=E,gt=U,kt=W,e.width=Math.floor(E*W),e.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(S===fn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,U,W,G){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,U,W,G),ct.viewport(z.copy($).multiplyScalar(kt).round())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,U,W,G){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,U,W,G),ct.scissor(O.copy(at).multiplyScalar(kt).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){ct.setScissorTest(ot=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,W=!0){let G=0;if(E){let V=!1;if(k!==null){const ft=k.texture.format;V=g.has(ft)}if(V){const ft=k.texture.type,St=m.has(ft),pt=Tt.getClearColor(),At=Tt.getClearAlpha(),Rt=pt.r,Xt=pt.g,Zt=pt.b;St?(y[0]=Rt,y[1]=Xt,y[2]=Zt,y[3]=At,R.clearBufferuiv(R.COLOR,0,y)):(M[0]=Rt,M[1]=Xt,M[2]=Zt,M[3]=At,R.clearBufferiv(R.COLOR,0,M))}else G|=R.COLOR_BUFFER_BIT}U&&(G|=R.DEPTH_BUFFER_BIT),W&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",me,!1),Tt.dispose(),Ot.dispose(),tt.dispose(),v.dispose(),X.dispose(),bt.dispose(),rt.dispose(),Mt.dispose(),lt.dispose(),j.dispose(),j.removeEventListener("sessionstart",wh),j.removeEventListener("sessionend",Th),Oi.stop()};function wt(E){E.preventDefault(),xo("WebGLRenderer: Context Lost."),F=!0}function Gt(){xo("WebGLRenderer: Context Restored."),F=!1;const E=w.autoReset,U=Et.enabled,W=Et.autoUpdate,G=Et.needsUpdate,V=Et.type;nt(),w.autoReset=E,Et.enabled=U,Et.autoUpdate=W,Et.needsUpdate=G,Et.type=V}function me(E){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ie(E){const U=E.target;U.removeEventListener("dispose",ie),Kn(U)}function Kn(E){Jn(E),v.remove(E)}function Jn(E){const U=v.get(E).programs;U!==void 0&&(U.forEach(function(W){lt.releaseProgram(W)}),E.isShaderMaterial&&lt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,G,V,ft){U===null&&(U=et);const St=V.isMesh&&V.matrixWorld.determinant()<0,pt=Tg(E,U,W,G,V);ct.setMaterial(G,St);let At=W.index,Rt=1;if(G.wireframe===!0){if(At=Y.getWireframeAttribute(W),At===void 0)return;Rt=2}const Xt=W.drawRange,Zt=W.attributes.position;let Lt=Xt.start*Rt,le=(Xt.start+Xt.count)*Rt;ft!==null&&(Lt=Math.max(Lt,ft.start*Rt),le=Math.min(le,(ft.start+ft.count)*Rt)),At!==null?(Lt=Math.max(Lt,0),le=Math.min(le,At.count)):Zt!=null&&(Lt=Math.max(Lt,0),le=Math.min(le,Zt.count));const Me=le-Lt;if(Me<0||Me===1/0)return;rt.setup(V,G,pt,W,At);let xe,ue=$t;if(At!==null&&(xe=Z.get(At),ue=I,ue.setIndex(xe)),V.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*ht()),ue.setMode(R.LINES)):ue.setMode(R.TRIANGLES);else if(V.isLine){let He=G.linewidth;He===void 0&&(He=1),ct.setLineWidth(He*ht()),V.isLineSegments?ue.setMode(R.LINES):V.isLineLoop?ue.setMode(R.LINE_LOOP):ue.setMode(R.LINE_STRIP)}else V.isPoints?ue.setMode(R.POINTS):V.isSprite&&ue.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)yo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ue.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const He=V._multiDrawStarts,Ct=V._multiDrawCounts,cn=V._multiDrawCount,ee=At?Z.get(At).bytesPerElement:1,Tn=v.get(G).currentProgram.getUniforms();for(let On=0;On<cn;On++)Tn.setValue(R,"_gl_DrawID",On),ue.render(He[On]/ee,Ct[On])}else if(V.isInstancedMesh)ue.renderInstances(Lt,Me,V.count);else if(W.isInstancedBufferGeometry){const He=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ct=Math.min(W.instanceCount,He);ue.renderInstances(Lt,Me,Ct)}else ue.render(Lt,Me)};function Eh(E,U,W){E.transparent===!0&&E.side===Be&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,ha(E,U,W),E.side=Di,E.needsUpdate=!0,ha(E,U,W),E.side=Be):ha(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),T=tt.get(W),T.init(U),C.push(T),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const G=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ft=V.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const pt=ft[St];Eh(pt,W,V),G.add(pt)}else Eh(ft,W,V),G.add(ft)}),T=C.pop(),G},this.compileAsync=function(E,U,W=null){const G=this.compile(E,U,W);return new Promise(V=>{function ft(){if(G.forEach(function(St){v.get(St).currentProgram.isReady()&&G.delete(St)}),G.size===0){V(E);return}setTimeout(ft,10)}vt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Qo=null;function wg(E){Qo&&Qo(E)}function wh(){Oi.stop()}function Th(){Oi.start()}const Oi=new kp;Oi.setAnimationLoop(wg),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(E){Qo=E,j.setAnimationLoop(E),E===null?Oi.stop():Oi.start()},j.addEventListener("sessionstart",wh),j.addEventListener("sessionend",Th),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const W=j.enabled===!0&&j.isPresenting===!0,G=_!==null&&(k===null||W)&&_.begin(b,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,U,k),T=tt.get(E,C.length),T.init(U),C.push(T),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ut.setFromProjectionMatrix(ce,Vn,U.reversedDepth),zt=this.localClippingEnabled,It=st.init(this.clippingPlanes,zt),x=Ot.get(E,A.length),x.init(),A.push(x),j.enabled===!0&&j.isPresenting===!0){const St=b.xr.getDepthSensingMesh();St!==null&&tc(St,U,-1/0,b.sortObjects)}tc(E,U,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(ne,oe),J=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,J&&Tt.addToRenderList(x,E),this.info.render.frame++,It===!0&&st.beginShadows();const V=T.state.shadowsArray;if(Et.render(V,E,U),It===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&_.hasRenderPass())===!1){const St=x.opaque,pt=x.transmissive;if(T.setupLights(),U.isArrayCamera){const At=U.cameras;if(pt.length>0)for(let Rt=0,Xt=At.length;Rt<Xt;Rt++){const Zt=At[Rt];Ch(St,pt,E,Zt)}J&&Tt.render(E);for(let Rt=0,Xt=At.length;Rt<Xt;Rt++){const Zt=At[Rt];Ah(x,E,Zt,Zt.viewport)}}else pt.length>0&&Ch(St,pt,E,U),J&&Tt.render(E),Ah(x,E,U)}k!==null&&N===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),G&&_.end(b),E.isScene===!0&&E.onAfterRender(b,E,U),rt.resetDefaultState(),H=-1,B=null,C.pop(),C.length>0?(T=C[C.length-1],It===!0&&st.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function tc(E,U,W,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ut.intersectsSprite(E)){G&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);const St=bt.update(E),pt=E.material;pt.visible&&x.push(E,St,pt,W,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ut.intersectsObject(E))){const St=bt.update(E),pt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),K.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),K.copy(St.boundingSphere.center)),K.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(pt)){const At=St.groups;for(let Rt=0,Xt=At.length;Rt<Xt;Rt++){const Zt=At[Rt],Lt=pt[Zt.materialIndex];Lt&&Lt.visible&&x.push(E,St,Lt,W,K.z,Zt)}}else pt.visible&&x.push(E,St,pt,W,K.z,null)}}const ft=E.children;for(let St=0,pt=ft.length;St<pt;St++)tc(ft[St],U,W,G)}function Ah(E,U,W,G){const{opaque:V,transmissive:ft,transparent:St}=E;T.setupLightsView(W),It===!0&&st.setGlobalState(b.clippingPlanes,W),G&&ct.viewport(z.copy(G)),V.length>0&&ua(V,U,W),ft.length>0&&ua(ft,U,W),St.length>0&&ua(St,U,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Ch(E,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Lt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Wn(1,1,{generateMipmaps:!0,type:Lt?ui:fn,minFilter:Zi,samples:Math.max(4,Ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const ft=T.state.transmissionRenderTarget[G.id],St=G.viewport||z;ft.setSize(St.z*b.transmissionResolutionScale,St.w*b.transmissionResolutionScale);const pt=b.getRenderTarget(),At=b.getActiveCubeFace(),Rt=b.getActiveMipmapLevel();b.setRenderTarget(ft),b.getClearColor(Q),mt=b.getClearAlpha(),mt<1&&b.setClearColor(16777215,.5),b.clear(),J&&Tt.render(W);const Xt=b.toneMapping;b.toneMapping=Gn;const Zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),It===!0&&st.setGlobalState(b.clippingPlanes,G),ua(E,W,G),D.updateMultisampleRenderTarget(ft),D.updateRenderTargetMipmap(ft),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let le=0,Me=U.length;le<Me;le++){const xe=U[le],{object:ue,geometry:He,material:Ct,group:cn}=xe;if(Ct.side===Be&&ue.layers.test(G.layers)){const ee=Ct.side;Ct.side=an,Ct.needsUpdate=!0,Rh(ue,W,G,He,Ct,cn),Ct.side=ee,Ct.needsUpdate=!0,Lt=!0}}Lt===!0&&(D.updateMultisampleRenderTarget(ft),D.updateRenderTargetMipmap(ft))}b.setRenderTarget(pt,At,Rt),b.setClearColor(Q,mt),Zt!==void 0&&(G.viewport=Zt),b.toneMapping=Xt}function ua(E,U,W){const G=U.isScene===!0?U.overrideMaterial:null;for(let V=0,ft=E.length;V<ft;V++){const St=E[V],{object:pt,geometry:At,group:Rt}=St;let Xt=St.material;Xt.allowOverride===!0&&G!==null&&(Xt=G),pt.layers.test(W.layers)&&Rh(pt,U,W,At,Xt,Rt)}}function Rh(E,U,W,G,V,ft){E.onBeforeRender(b,U,W,G,V,ft),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(b,U,W,G,E,ft),V.transparent===!0&&V.side===Be&&V.forceSinglePass===!1?(V.side=an,V.needsUpdate=!0,b.renderBufferDirect(W,U,G,V,E,ft),V.side=Di,V.needsUpdate=!0,b.renderBufferDirect(W,U,G,V,E,ft),V.side=Be):b.renderBufferDirect(W,U,G,V,E,ft),E.onAfterRender(b,U,W,G,V,ft)}function ha(E,U,W){U.isScene!==!0&&(U=et);const G=v.get(E),V=T.state.lights,ft=T.state.shadowsArray,St=V.state.version,pt=lt.getParameters(E,V.state,ft,U,W),At=lt.getProgramCacheKey(pt);let Rt=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Xt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=X.get(E.envMap||G.environment,Xt),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",ie),Rt=new Map,G.programs=Rt);let Zt=Rt.get(At);if(Zt!==void 0){if(G.currentProgram===Zt&&G.lightsStateVersion===St)return Lh(E,pt),Zt}else pt.uniforms=lt.getUniforms(E),E.onBeforeCompile(pt,b),Zt=lt.acquireProgram(pt,At),Rt.set(At,Zt),G.uniforms=pt.uniforms;const Lt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Lt.clippingPlanes=st.uniform),Lh(E,pt),G.needsLights=Cg(E),G.lightsStateVersion=St,G.needsLights&&(Lt.ambientLightColor.value=V.state.ambient,Lt.lightProbe.value=V.state.probe,Lt.directionalLights.value=V.state.directional,Lt.directionalLightShadows.value=V.state.directionalShadow,Lt.spotLights.value=V.state.spot,Lt.spotLightShadows.value=V.state.spotShadow,Lt.rectAreaLights.value=V.state.rectArea,Lt.ltc_1.value=V.state.rectAreaLTC1,Lt.ltc_2.value=V.state.rectAreaLTC2,Lt.pointLights.value=V.state.point,Lt.pointLightShadows.value=V.state.pointShadow,Lt.hemisphereLights.value=V.state.hemi,Lt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Lt.spotLightMatrix.value=V.state.spotLightMatrix,Lt.spotLightMap.value=V.state.spotLightMap,Lt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=Zt,G.uniformsList=null,Zt}function Ph(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=no.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Lh(E,U){const W=v.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Tg(E,U,W,G,V){U.isScene!==!0&&(U=et),D.resetTextureUnits();const ft=U.fog,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,pt=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:qs,At=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Rt=X.get(G.envMap||St,At),Xt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Zt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!W.morphAttributes.position,le=!!W.morphAttributes.normal,Me=!!W.morphAttributes.color;let xe=Gn;G.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(xe=b.toneMapping);const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,He=ue!==void 0?ue.length:0,Ct=v.get(G),cn=T.state.lights;if(It===!0&&(zt===!0||E!==B)){const Ie=E===B&&G.id===H;st.setState(G,E,Ie)}let ee=!1;G.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==cn.state.version||Ct.outputColorSpace!==pt||V.isBatchedMesh&&Ct.batching===!1||!V.isBatchedMesh&&Ct.batching===!0||V.isBatchedMesh&&Ct.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ct.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ct.instancing===!1||!V.isInstancedMesh&&Ct.instancing===!0||V.isSkinnedMesh&&Ct.skinning===!1||!V.isSkinnedMesh&&Ct.skinning===!0||V.isInstancedMesh&&Ct.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ct.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ct.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ct.instancingMorph===!1&&V.morphTexture!==null||Ct.envMap!==Rt||G.fog===!0&&Ct.fog!==ft||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==st.numPlanes||Ct.numIntersection!==st.numIntersection)||Ct.vertexAlphas!==Xt||Ct.vertexTangents!==Zt||Ct.morphTargets!==Lt||Ct.morphNormals!==le||Ct.morphColors!==Me||Ct.toneMapping!==xe||Ct.morphTargetsCount!==He)&&(ee=!0):(ee=!0,Ct.__version=G.version);let Tn=Ct.currentProgram;ee===!0&&(Tn=ha(G,U,V));let On=!1,Bi=!1,os=!1;const fe=Tn.getUniforms(),Fe=Ct.uniforms;if(ct.useProgram(Tn.program)&&(On=!0,Bi=!0,os=!0),G.id!==H&&(H=G.id,Bi=!0),On||B!==E){ct.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),fe.setValue(R,"projectionMatrix",E.projectionMatrix),fe.setValue(R,"viewMatrix",E.matrixWorldInverse);const vi=fe.map.cameraPosition;vi!==void 0&&vi.setValue(R,Ht.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&fe.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,Bi=!0,os=!0)}if(Ct.needsLights&&(cn.state.directionalShadowMap.length>0&&fe.setValue(R,"directionalShadowMap",cn.state.directionalShadowMap,D),cn.state.spotShadowMap.length>0&&fe.setValue(R,"spotShadowMap",cn.state.spotShadowMap,D),cn.state.pointShadowMap.length>0&&fe.setValue(R,"pointShadowMap",cn.state.pointShadowMap,D)),V.isSkinnedMesh){fe.setOptional(R,V,"bindMatrix"),fe.setOptional(R,V,"bindMatrixInverse");const Ie=V.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),fe.setValue(R,"boneTexture",Ie.boneTexture,D))}V.isBatchedMesh&&(fe.setOptional(R,V,"batchingTexture"),fe.setValue(R,"batchingTexture",V._matricesTexture,D),fe.setOptional(R,V,"batchingIdTexture"),fe.setValue(R,"batchingIdTexture",V._indirectTexture,D),fe.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&fe.setValue(R,"batchingColorTexture",V._colorsTexture,D));const _i=W.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&xt.update(V,W,Tn),(Bi||Ct.receiveShadow!==V.receiveShadow)&&(Ct.receiveShadow=V.receiveShadow,fe.setValue(R,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Fe.envMapIntensity.value=U.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=fb()),Bi&&(fe.setValue(R,"toneMappingExposure",b.toneMappingExposure),Ct.needsLights&&Ag(Fe,os),ft&&G.fog===!0&&Pt.refreshFogUniforms(Fe,ft),Pt.refreshMaterialUniforms(Fe,G,kt,gt,T.state.transmissionRenderTarget[E.id]),no.upload(R,Ph(Ct),Fe,D)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(no.upload(R,Ph(Ct),Fe,D),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(R,"center",V.center),fe.setValue(R,"modelViewMatrix",V.modelViewMatrix),fe.setValue(R,"normalMatrix",V.normalMatrix),fe.setValue(R,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ie=G.uniformsGroups;for(let vi=0,cs=Ie.length;vi<cs;vi++){const Ih=Ie[vi];Mt.update(Ih,Tn),Mt.bind(Ih,Tn)}}return Tn}function Ag(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Cg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,U,W){const G=v.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=U,v.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const W=v.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const Rg=R.createFramebuffer();this.setRenderTarget=function(E,U=0,W=0){k=E,P=U,N=W;let G=null,V=!1,ft=!1;if(E){const pt=v.get(E);if(pt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(R.FRAMEBUFFER,pt.__webglFramebuffer),z.copy(E.viewport),O.copy(E.scissor),it=E.scissorTest,ct.viewport(z),ct.scissor(O),ct.setScissorTest(it),H=-1;return}else if(pt.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(pt.__hasExternalTextures)D.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xt=E.depthTexture;if(pt.__boundDepthTexture!==Xt){if(Xt!==null&&v.has(Xt)&&(E.width!==Xt.image.width||E.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const At=E.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ft=!0);const Rt=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?G=Rt[U][W]:G=Rt[U],V=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?G=v.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?G=Rt[W]:G=Rt,z.copy(E.viewport),O.copy(E.scissor),it=E.scissorTest}else z.copy($).multiplyScalar(kt).floor(),O.copy(at).multiplyScalar(kt).floor(),it=ot;if(W!==0&&(G=Rg),ct.bindFramebuffer(R.FRAMEBUFFER,G)&&ct.drawBuffers(E,G),ct.viewport(z),ct.scissor(O),ct.setScissorTest(it),V){const pt=v.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,W)}else if(ft){const pt=U;for(let At=0;At<E.textures.length;At++){const Rt=v.get(E.textures[At]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+At,Rt.__webglTexture,W,pt)}}else if(E!==null&&W!==0){const pt=v.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pt.__webglTexture,W)}H=-1},this.readRenderTargetPixels=function(E,U,W,G,V,ft,St,pt=0){if(!(E&&E.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){ct.bindFramebuffer(R.FRAMEBUFFER,At);try{const Rt=E.textures[pt],Xt=Rt.format,Zt=Rt.type;if(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pt),!Ft.textureFormatReadable(Xt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Zt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&W>=0&&W<=E.height-V&&R.readPixels(U,W,G,V,ut.convert(Xt),ut.convert(Zt),ft)}finally{const Rt=k!==null?v.get(k).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,U,W,G,V,ft,St,pt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At)if(U>=0&&U<=E.width-G&&W>=0&&W<=E.height-V){ct.bindFramebuffer(R.FRAMEBUFFER,At);const Rt=E.textures[pt],Xt=Rt.format,Zt=Rt.type;if(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pt),!Ft.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Lt),R.bufferData(R.PIXEL_PACK_BUFFER,ft.byteLength,R.STREAM_READ),R.readPixels(U,W,G,V,ut.convert(Xt),ut.convert(Zt),0);const le=k!==null?v.get(k).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,le);const Me=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await m0(R,Me,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Lt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ft),R.deleteBuffer(Lt),R.deleteSync(Me),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,W=0){const G=Math.pow(2,-W),V=Math.floor(E.image.width*G),ft=Math.floor(E.image.height*G),St=U!==null?U.x:0,pt=U!==null?U.y:0;D.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,St,pt,V,ft),ct.unbindTexture()};const Pg=R.createFramebuffer(),Lg=R.createFramebuffer();this.copyTextureToTexture=function(E,U,W=null,G=null,V=0,ft=0){let St,pt,At,Rt,Xt,Zt,Lt,le,Me;const xe=E.isCompressedTexture?E.mipmaps[ft]:E.image;if(W!==null)St=W.max.x-W.min.x,pt=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,Rt=W.min.x,Xt=W.min.y,Zt=W.isBox3?W.min.z:0;else{const Fe=Math.pow(2,-V);St=Math.floor(xe.width*Fe),pt=Math.floor(xe.height*Fe),E.isDataArrayTexture?At=xe.depth:E.isData3DTexture?At=Math.floor(xe.depth*Fe):At=1,Rt=0,Xt=0,Zt=0}G!==null?(Lt=G.x,le=G.y,Me=G.z):(Lt=0,le=0,Me=0);const ue=ut.convert(U.format),He=ut.convert(U.type);let Ct;U.isData3DTexture?(D.setTexture3D(U,0),Ct=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(D.setTexture2DArray(U,0),Ct=R.TEXTURE_2D_ARRAY):(D.setTexture2D(U,0),Ct=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const cn=R.getParameter(R.UNPACK_ROW_LENGTH),ee=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Tn=R.getParameter(R.UNPACK_SKIP_PIXELS),On=R.getParameter(R.UNPACK_SKIP_ROWS),Bi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,xe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Rt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Zt);const os=E.isDataArrayTexture||E.isData3DTexture,fe=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Fe=v.get(E),_i=v.get(U),Ie=v.get(Fe.__renderTarget),vi=v.get(_i.__renderTarget);ct.bindFramebuffer(R.READ_FRAMEBUFFER,Ie.__webglFramebuffer),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let cs=0;cs<At;cs++)os&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,v.get(E).__webglTexture,V,Zt+cs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ft,Me+cs)),R.blitFramebuffer(Rt,Xt,St,pt,Lt,le,St,pt,R.DEPTH_BUFFER_BIT,R.NEAREST);ct.bindFramebuffer(R.READ_FRAMEBUFFER,null),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||v.has(E)){const Fe=v.get(E),_i=v.get(U);ct.bindFramebuffer(R.READ_FRAMEBUFFER,Pg),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,Lg);for(let Ie=0;Ie<At;Ie++)os?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Fe.__webglTexture,V,Zt+Ie):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Fe.__webglTexture,V),fe?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_i.__webglTexture,ft,Me+Ie):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_i.__webglTexture,ft),V!==0?R.blitFramebuffer(Rt,Xt,St,pt,Lt,le,St,pt,R.COLOR_BUFFER_BIT,R.NEAREST):fe?R.copyTexSubImage3D(Ct,ft,Lt,le,Me+Ie,Rt,Xt,St,pt):R.copyTexSubImage2D(Ct,ft,Lt,le,Rt,Xt,St,pt);ct.bindFramebuffer(R.READ_FRAMEBUFFER,null),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else fe?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ct,ft,Lt,le,Me,St,pt,At,ue,He,xe.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Ct,ft,Lt,le,Me,St,pt,At,ue,xe.data):R.texSubImage3D(Ct,ft,Lt,le,Me,St,pt,At,ue,He,xe):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ft,Lt,le,St,pt,ue,He,xe.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ft,Lt,le,xe.width,xe.height,ue,xe.data):R.texSubImage2D(R.TEXTURE_2D,ft,Lt,le,St,pt,ue,He,xe);R.pixelStorei(R.UNPACK_ROW_LENGTH,cn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Tn),R.pixelStorei(R.UNPACK_SKIP_ROWS,On),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Bi),ft===0&&U.generateMipmaps&&R.generateMipmap(Ct),ct.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){P=0,N=0,k=null,ct.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const $s={},Yr=400,Yn=100,mb=20,gb=8,nh=3,Xp=8,Ga=3600*1e3,qp=50,_b=35,Wo=100,vb=!0,Xo=.3,xb=.5,yb=.5,Ql=5,Sb=[.9,.95],jd=1.5,Yp=.6,Mb=1,bb=40,ra=10,jp=40,Eb=.2,wb=.6,Tb=8,Ab=80,$p=6,Zp=6,Cb=5,Rb=1,Pb=1,Lb=1,Ib=1,Db=20,Nb=0,Ub=4,Fb=1,Ob=10,wo=5,$d=9,ih=1,Bb=ih,kb=ih,zb=2.5,Vb=6,Gb=1.04,Hb=10,mn=8,Wb=5,Ha=6,Kp=60*ra-qp,Xb=8,jr=new L(0,100,100),qb=new L(0,-100,-200),tu=jr.clone().addScaledVector(qb,4),Yb=60,jb=.2,$b=1,To=Math.sqrt((Yr+jr.z)**2+jr.y**2),Zb=50,Kb={coin:[4,4],defaultSize:[15,25]},zc=Kb,vr=64,eu=4,Jp=3,te={conifer:[20,35],broadLeaf:[20,25],player:[4,16],gem:[10,10],bag:[6,6],gatePost:[2,20],boulder:[Yn/eu-2,20],hitBar:[10,1.333],butterfly:[5,5],bullet:[3,0],bulletDying:[6,6]},Jb={end:{w:Yn+nh,d:100,color:43775},other:{w:20,color:34816}},Qb=Jb;function $r(n){switch(!0){case n>=1e5:return`${Math.floor(n/1e3)}k`;case n>=1e4:return`${(Math.floor(n/100)/10).toFixed(1).replace(".0","")}k`;case n>=10:return String(Math.round(n));default:return n.toFixed(1).replace(".0","")}}function bn(n,t,e=$r){const i=typeof t=="string"?t:e(t),s=n.querySelector(".value");return s.textContent!==i&&(s.textContent=i),n.classList.toggle("hidden",!t),!!t}function Qp(n,t){for(const e of n.currencies){const i=t[e];im(i)||bn(i,n.read(e))}}function aa(n,t){n.classList.toggle("hidden",!!t)}function Ae(n,t="div",e,i=""){const s=document.createElement(t);return s.className=e,s.textContent=i,n?.append(s),s}function fi(n,t,e=!1){n in window&&!e?console.error(new Error("prop already exposed")):window[n]=t}function yt(n,t){const e=document.querySelector(n);if(!e){if("testingMode"in window&&window.testingMode)return null;throw new Error(`cannot get element by selector "${n}"`)}if(t&&!(e instanceof t))throw new Error(`found element by selector "${n}" but not the right instance`);return e}let Zd=0;function tm(){return Zd+=1,`_id_${Zd}`}function tE(n,t,e,i){n.classList.toggle(t,i),n.classList.toggle(e,!i)}function eE(){return!1}typeof window<"u"&&"RWNS_TESTS"in window&&document.body.classList.add("TESTING");function sh(n){const t=getComputedStyle(n).getPropertyValue("--theme-color");t&&document.querySelector("head meta[name=theme-color]")?.setAttribute("content",t)}class em{constructor(t,e,i){this.countTime=e,this.onFinish=i,this.remainingTime=e,this.showing=t,this.target=t}countTime;onFinish;remainingTime;showing;target;wasMoving=!1;add=t=>{this.setTarget(this.target+t)};setTarget=t=>{this.target=t,this.remainingTime=this.countTime};updateShowing=t=>{if(this.showing===this.target||t>=this.remainingTime)this.showing=this.target,this.remainingTime=0,this.wasMoving&&(this.onFinish?.(),this.wasMoving=!1);else{const e=Math.sign(this.target-this.showing),i=Math.abs(this.target-this.showing),s=t/this.remainingTime,r=Math.floor(i*(2-s)*s),a=Math.min(Math.max(1,r),i);this.showing+=a*e,this.remainingTime-=t,this.wasMoving=!0}return this.showing}}const nE=50,Zr=new Map;let nu=!1,Wa=0;function nm(){if(Zr.size===0){nu=!1,Wa=0;return}const n=Date.now(),t=Wa?(n-Wa)/1e3:0;Wa=n;for(const[e,i]of Zr.entries()){const s=i.updateShowing(t);bn(e,s)}setTimeout(nm,nE)}function rh(n,t,e){Zr.getOrInsertComputed(n,()=>new em(t,Yp,()=>{Zr.delete(n)})).setTarget(e),nu||(nu=!0,nm())}function im(n){return Zr.has(n)}function*Ni(n){for(let t=0;t<n;t+=1)yield t}function Xa(n,t){const e=n.find(i=>i.name===t);if(!e)throw new Error(`cannot find object with name "${t}"`);return e}function iE(n,t){const e=n.findIndex(i=>i.name===t);if(e<0)throw new Error(`cannot find object with name "${t}"`);return e}function sE(n,t){const e=new Array(t).fill(0);if(n<=0)return e;const i=Math.ceil((Math.sqrt(1+8*n)-1)/2);if(i<=t){const s=(i+1)*i/2,r=t-i;for(let a=0;a<i;a+=1)e[r+a]=a+1;console.assert(s-n<i);for(let a=0;a<s-n;a+=1)e[t-1-a]-=1}else rE(n,e);return e}function rE(n,t){const e=t.length;let i=0,s=n;for(;i<e-1;){const r=(i+1)*2*s/(e-i)/(e+1+i),a=Math.floor(r);t[i]=a,s-=a,i+=1}t[i]=s}function aE(n,t){const e=[...n],i=t.length;for(let s=0;s<i;s+=1){const r=Math.round(n.length/i*(i-s-1));e.splice(r,0,t[i-1-s])}return e}function oE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function cE(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var t=n.default;if(typeof t=="function"){var e=function i(){var s=!1;try{s=this instanceof i}catch{}return s?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var s=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:function(){return n[i]}})}),e}var io={exports:{}},lE=io.exports,Kd;function uE(){return Kd||(Kd=1,(function(n){(function(t,e,i){function s(c){var l=this,u=o();l.next=function(){var d=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=d-(l.c=d|0)},l.c=1,l.s0=u(" "),l.s1=u(" "),l.s2=u(" "),l.s0-=u(c),l.s0<0&&(l.s0+=1),l.s1-=u(c),l.s1<0&&(l.s1+=1),l.s2-=u(c),l.s2<0&&(l.s2+=1),u=null}function r(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function a(c,l){var u=new s(c),d=l&&l.state,h=u.next;return h.int32=function(){return u.next()*4294967296|0},h.double=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.quick=h,d&&(typeof d=="object"&&r(d,u),h.state=function(){return r(u,{})}),h}function o(){var c=4022871197,l=function(u){u=String(u);for(var d=0;d<u.length;d++){c+=u.charCodeAt(d);var h=.02519603282416938*c;c=h>>>0,h-=c,h*=c,c=h>>>0,h-=c,c+=h*4294967296}return(c>>>0)*23283064365386963e-26};return l}e&&e.exports?e.exports=a:this.alea=a})(lE,n)})(io)),io.exports}var so={exports:{}},hE=so.exports,Jd;function dE(){return Jd||(Jd=1,(function(n){(function(t,e,i){function s(o){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var d=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^d^d>>>8},o===(o|0)?c.x=o:l+=o;for(var u=0;u<l.length+64;u++)c.x^=l.charCodeAt(u)|0,c.next()}function r(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c}function a(o,c){var l=new s(o),u=c&&c.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var h=l.next()>>>11,f=(l.next()>>>0)/4294967296,p=(h+f)/(1<<21);while(p===0);return p},d.int32=l.next,d.quick=d,u&&(typeof u=="object"&&r(u,l),d.state=function(){return r(l,{})}),d}e&&e.exports?e.exports=a:this.xor128=a})(hE,n)})(so)),so.exports}var ro={exports:{}},fE=ro.exports,Qd;function pE(){return Qd||(Qd=1,(function(n){(function(t,e,i){function s(o){var c=this,l="";c.next=function(){var d=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(d^d<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,o===(o|0)?c.x=o:l+=o;for(var u=0;u<l.length+64;u++)c.x^=l.charCodeAt(u)|0,u==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function r(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c.v=o.v,c.d=o.d,c}function a(o,c){var l=new s(o),u=c&&c.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var h=l.next()>>>11,f=(l.next()>>>0)/4294967296,p=(h+f)/(1<<21);while(p===0);return p},d.int32=l.next,d.quick=d,u&&(typeof u=="object"&&r(u,l),d.state=function(){return r(l,{})}),d}e&&e.exports?e.exports=a:this.xorwow=a})(fE,n)})(ro)),ro.exports}var ao={exports:{}},mE=ao.exports,tf;function gE(){return tf||(tf=1,(function(n){(function(t,e,i){function s(o){var c=this;c.next=function(){var u=c.x,d=c.i,h,f;return h=u[d],h^=h>>>7,f=h^h<<24,h=u[d+1&7],f^=h^h>>>10,h=u[d+3&7],f^=h^h>>>3,h=u[d+4&7],f^=h^h<<7,h=u[d+7&7],h=h^h<<13,f^=h^h<<9,u[d]=f,c.i=d+1&7,f};function l(u,d){var h,f=[];if(d===(d|0))f[0]=d;else for(d=""+d,h=0;h<d.length;++h)f[h&7]=f[h&7]<<15^d.charCodeAt(h)+f[h+1&7]<<13;for(;f.length<8;)f.push(0);for(h=0;h<8&&f[h]===0;++h);for(h==8?f[7]=-1:f[h],u.x=f,u.i=0,h=256;h>0;--h)u.next()}l(c,o)}function r(o,c){return c.x=o.x.slice(),c.i=o.i,c}function a(o,c){o==null&&(o=+new Date);var l=new s(o),u=c&&c.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var h=l.next()>>>11,f=(l.next()>>>0)/4294967296,p=(h+f)/(1<<21);while(p===0);return p},d.int32=l.next,d.quick=d,u&&(u.x&&r(u,l),d.state=function(){return r(l,{})}),d}e&&e.exports?e.exports=a:this.xorshift7=a})(mE,n)})(ao)),ao.exports}var oo={exports:{}},_E=oo.exports,ef;function vE(){return ef||(ef=1,(function(n){(function(t,e,i){function s(o){var c=this;c.next=function(){var u=c.w,d=c.X,h=c.i,f,p;return c.w=u=u+1640531527|0,p=d[h+34&127],f=d[h=h+1&127],p^=p<<13,f^=f<<17,p^=p>>>15,f^=f>>>12,p=d[h]=p^f,c.i=h,p+(u^u>>>16)|0};function l(u,d){var h,f,p,S,g,m=[],y=128;for(d===(d|0)?(f=d,d=null):(d=d+"\0",f=0,y=Math.max(y,d.length)),p=0,S=-32;S<y;++S)d&&(f^=d.charCodeAt((S+32)%d.length)),S===0&&(g=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,S>=0&&(g=g+1640531527|0,h=m[S&127]^=f+g,p=h==0?p+1:0);for(p>=128&&(m[(d&&d.length||0)&127]=-1),p=127,S=512;S>0;--S)f=m[p+34&127],h=m[p=p+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,m[p]=f^h;u.w=g,u.X=m,u.i=p}l(c,o)}function r(o,c){return c.i=o.i,c.w=o.w,c.X=o.X.slice(),c}function a(o,c){o==null&&(o=+new Date);var l=new s(o),u=c&&c.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var h=l.next()>>>11,f=(l.next()>>>0)/4294967296,p=(h+f)/(1<<21);while(p===0);return p},d.int32=l.next,d.quick=d,u&&(u.X&&r(u,l),d.state=function(){return r(l,{})}),d}e&&e.exports?e.exports=a:this.xor4096=a})(_E,n)})(oo)),oo.exports}var co={exports:{}},xE=co.exports,nf;function yE(){return nf||(nf=1,(function(n){(function(t,e,i){function s(o){var c=this,l="";c.next=function(){var d=c.b,h=c.c,f=c.d,p=c.a;return d=d<<25^d>>>7^h,h=h-f|0,f=f<<24^f>>>8^p,p=p-d|0,c.b=d=d<<20^d>>>12^h,c.c=h=h-f|0,c.d=f<<16^h>>>16^p,c.a=p-d|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,o===Math.floor(o)?(c.a=o/4294967296|0,c.b=o|0):l+=o;for(var u=0;u<l.length+20;u++)c.b^=l.charCodeAt(u)|0,c.next()}function r(o,c){return c.a=o.a,c.b=o.b,c.c=o.c,c.d=o.d,c}function a(o,c){var l=new s(o),u=c&&c.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var h=l.next()>>>11,f=(l.next()>>>0)/4294967296,p=(h+f)/(1<<21);while(p===0);return p},d.int32=l.next,d.quick=d,u&&(typeof u=="object"&&r(u,l),d.state=function(){return r(l,{})}),d}e&&e.exports?e.exports=a:this.tychei=a})(xE,n)})(co)),co.exports}var lo={exports:{}};const SE={},ME=Object.freeze(Object.defineProperty({__proto__:null,default:SE},Symbol.toStringTag,{value:"Module"})),bE=cE(ME);var EE=lo.exports,sf;function wE(){return sf||(sf=1,(function(n){(function(t,e,i){var s=256,r=6,a=52,o="random",c=i.pow(s,r),l=i.pow(2,a),u=l*2,d=s-1,h;function f(x,T,A){var C=[];T=T==!0?{entropy:!0}:T||{};var _=m(g(T.entropy?[x,M(e)]:x??y(),3),C),b=new p(C),F=function(){for(var P=b.g(r),N=c,k=0;P<l;)P=(P+k)*s,N*=s,k=b.g(1);for(;P>=u;)P/=2,N/=2,k>>>=1;return(P+k)/N};return F.int32=function(){return b.g(4)|0},F.quick=function(){return b.g(4)/4294967296},F.double=F,m(M(b.S),e),(T.pass||A||function(P,N,k,H){return H&&(H.S&&S(H,b),P.state=function(){return S(b,{})}),k?(i[o]=P,N):P})(F,_,"global"in T?T.global:this==i,T.state)}function p(x){var T,A=x.length,C=this,_=0,b=C.i=C.j=0,F=C.S=[];for(A||(x=[A++]);_<s;)F[_]=_++;for(_=0;_<s;_++)F[_]=F[b=d&b+x[_%A]+(T=F[_])],F[b]=T;(C.g=function(P){for(var N,k=0,H=C.i,B=C.j,z=C.S;P--;)N=z[H=d&H+1],k=k*s+z[d&(z[H]=z[B=d&B+N])+(z[B]=N)];return C.i=H,C.j=B,k})(s)}function S(x,T){return T.i=x.i,T.j=x.j,T.S=x.S.slice(),T}function g(x,T){var A=[],C=typeof x,_;if(T&&C=="object")for(_ in x)try{A.push(g(x[_],T-1))}catch{}return A.length?A:C=="string"?x:x+"\0"}function m(x,T){for(var A=x+"",C,_=0;_<A.length;)T[d&_]=d&(C^=T[d&_]*19)+A.charCodeAt(_++);return M(T)}function y(){try{var x;return h&&(x=h.randomBytes)?x=x(s):(x=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(x)),M(x)}catch{var T=t.navigator,A=T&&T.plugins;return[+new Date,t,A,t.screen,M(e)]}}function M(x){return String.fromCharCode.apply(0,x)}if(m(i.random(),e),n.exports){n.exports=f;try{h=bE}catch{}}else i["seed"+o]=f})(typeof self<"u"?self:EE,[],Math)})(lo)),lo.exports}var Vc,rf;function TE(){if(rf)return Vc;rf=1;var n=uE(),t=dE(),e=pE(),i=gE(),s=vE(),r=yE(),a=wE();return a.alea=n,a.xor128=t,a.xorwow=e,a.xorshift7=i,a.xor4096=s,a.tychei=r,Vc=a,Vc}var AE=TE();const sm=oE(AE),ah="2";function qo(n=ah){return sm(n)}let Se=sm(ah);function CE(n=ah){Se=qo(n)}function rr(n,t=Se){if(n.length===0)throw new Error("cannot pick a random item from an empty array");return n[Math.floor(t()*n.length)]}function rm(n,t,e=Se){return Math.floor(e()*(t-n+1))+n}function am(n,t=Se){if(n.length===0)throw new Error("cannot remove a random item from an empty array");const e=Math.floor(t()*n.length),i=n[e];return n.splice(e,1),i}function iu(n,t,e=Se){if(n.length<=t)return Ni(n.length).toArray();const i=n.length;return Ni(t).map(s=>{const r=Math.floor(i*s/t),a=Math.floor(i*(s+1)/t)-1;return Math.floor(e()*(a-r+1))+r}).toArray()}function RE(n,t,e,i,s){const r=Math.sqrt(Math.max(0,s**2-i**2)),a=t-n,o=Math.min(a,Math.max(0,e-n-r)),c=Math.min(a,Math.max(0,t-e-r)),l=o+c,u=Se()*l;return u<=o?u+n:t-(l-u)}function PE(n,t,e=Se){if(n.length<1)throw new Error("cannot pick an item from an empty array");if(n.length===1)return n[0];const i=n.values().map(a=>t[a]).reduce((a,o)=>a+o),s=e()*i;let r=0;for(const a of n)if(r+=t[a],s<r)return a;return n.at(-1)}function LE(n,t=Se){if(n.length<1)throw new Error("cannot pick an item from an empty array");if(n.length===1)return n[0].value;const e=n.reduce((r,a)=>r+a.weight,0),i=t()*e;let s=0;for(const r of n)if(s+=r.weight,i<s)return r.value;return n.at(-1).value}function Ji(n,t){if(typeof n=="number")return n;if(n==null&&t!=null)return t;throw console.error("bad value",n),new TypeError("expected number")}function su(n,t){if(typeof n=="string")return n;if(n==null&&t!=null)return t;throw console.error("bad value",n),new TypeError("expected string")}function IE(n){if(Array.isArray(n)&&n.every(t=>typeof t=="string"))return n;if(n==null)return[];throw console.error("bad value",n),new TypeError("expected a string array")}function oh(n,t){if(n!=null){if(typeof n!="object")throw new TypeError(`malformed ${t} data`);return n}}function rs(){return new Date().toISOString().split("T")[0]}function DE(n){return new Date(Date.now()+n*24*60*60*1e3).toISOString().split("T")[0]}function NE(n,t,e){return n<t?t:n>e?e:n}const ru=document.querySelector("#log"),Gc=document.querySelector("#fps");function UE(n){ru&&(ru.textContent+=`
`+n)}let Hc,qa=0;function FE(n,t=""){!ru&&!Gc||(n!=null&&Hc!=null&&(qa+=1,Hc%1e3>n%1e3&&(Gc?Gc.textContent=String(qa):UE(`${t}${qa}`),qa=0)),Hc=n)}const Yo=["_test","range1","range2","range3","rate1","rate2","rate3","damage1","damage2","damage3","coins1","coins2","coins3","coins4","coins5","endCoins1","endCoins2","endCoins3","endCoins4","endCoins5","energy1","maxDmg","maxRate","coinsR1","endCoinsR1","startDmg","startRate","gems1","troop1","troop2"],jo=["coin","gem","card"];function af(n){return jo.includes(n)}function OE(n){const t=oh(n,"sideGames");return{backToBasics:BE(t?.backToBasics)}}function BE(n){const t=oh(n,"backToBasics");return{level:Ji(t?.level,1),played:Ji(t?.played,0),nextAllowed:su(t?.nextAllowed,rs())}}const kE=["players","damage","rate"];function zE(n){const t=oh(n,"run upgrade levels");if(!t)return{};const e={};for(const[i,s]of Object.entries(t)){if(!kE.includes(i))throw new TypeError(`unknown upgrade type ${i}`);e[i]=Ji(s)}return e}class Kr{constructor(t,e){if(this.currencies=t,e){if(typeof e!="object"||!("wallet"in e)||!e.wallet||typeof e.wallet!="object")throw new TypeError("unknown wallet data",e);const i=e.wallet;for(const s of t){const r=i[s];if(typeof r=="number")this.wallet[s]=r;else if(r)throw new TypeError(`wallet value for type ${s} is not a number`,r)}}}currencies;wallet={};add=(t,e)=>{const i=(this.wallet[t]??0)+e;return this.wallet[t]=i,i};read=t=>this.wallet[t]??0;reset=()=>{this.wallet={}};readAll=()=>this.wallet;entries=()=>Object.entries(this.wallet);addAll=t=>{const e=t.readAll();for(const[i,s]of Object.entries(e))this.add(i,s)};toJSON=()=>({wallet:this.wallet})}const Jr=[0],Dr=[0],VE=GE();function*GE(){let n=1;for(;;){for(let t=0;t<n;t++)yield n;n+=1}}function om(){const n=VE.next().value;Jr.push(Jr.at(-1)+n);const t=Dr.at(-1);for(let e=0;e<n-1;e+=1)Dr.push(t);Dr.push(t+1)}function cm(n){for(;n>=Jr.length;)om();return Jr[n]}function HE(n){const t=cm(n+1);return[Jr[n],t]}function lm(n){for(;Dr.length<n+1;)om();return Dr[n]}function um(n,t,e){const i=t.read(n);if(!i)return{type:n,level:0,nextLevelCards:1,nextLevelCardsHave:0};const s=lm(i);if(i>=e)return{type:n,level:s,nextLevelCards:0,nextLevelCardsHave:0};const[r,a]=HE(s);return{type:n,level:s,nextLevelCards:a-r,nextLevelCardsHave:i-r}}const Wc={typeLabel:"range",description:"make bullets fly farther",performUpgrade(n,t){t.playerBulletRange+=n}},Xc={typeLabel:"fire rate",description:"make guns reload quicker",performUpgrade(n,t){t.playerShotsPerSecond*=1.01**n}},xr={typeLabel:"income",description:"hide coins in final blocks",performUpgrade(n,t){t.endBlockCoinsPerLevel+=n}},WE={typeLabel:"income",description:"hide even more coins in final blocks",performUpgrade(n,t){t.endBlockCoinsPerLevel+=3*n}},yr={typeLabel:"income",description:"add coins to money bags",performUpgrade(n,t){t.coinsPerLevel+=n}},XE={typeLabel:"income",description:"add even more coins to money bags",performUpgrade(n,t){t.coinsPerLevel+=3*n}},qE={typeLabel:"income",description:"add more gems to levels",performUpgrade(n,t){t.gemsPerLevel+=n}},qc={typeLabel:"damage",description:"make bullets stronger",performUpgrade(n,t){t.playerBulletHitPoints*=1.5**n}},YE={typeLabel:"energy",description:"increase maximum energy",performUpgrade(n,t){t.energyMax+=n},onLevelUp(){Am(1)}},jE={typeLabel:"damage",description:"increase starting damage level",performUpgrade(n,t){t.damageStartUpgrade+=n},onLevelUp(){ar("damage")}},$E={typeLabel:"fire rate",description:"increase starting fire rate level",performUpgrade(n,t){t.rateStartUpgrade+=n},onLevelUp(){ar("rate")}},ZE={typeLabel:"max dmg",description:"increase the maximum available damage upgrade",performUpgrade(n,t){t.damageMaxUpgrade+=n},onLevelUp(){ar("damage")}},KE={typeLabel:"max rate",description:"increase the maximum available fire-rate upgrade",performUpgrade(n,t){t.rateMaxUpgrade+=n},onLevelUp(){ar("rate")}},JE={typeLabel:"troops",description:"increase starting number of robots",performUpgrade(n,t){t.playersStartUpgrade+=n},onLevelUp(){ar("players")}},QE={typeLabel:"troops",description:"increase the maximum available number of robots",performUpgrade(n,t){t.playersMaxUpgrade+=n},onLevelUp(){ar("players")}},of=["common","rare","epic","legendary"],Ui={_test:{cardsToGive:40,minPlayerLevel:1/0,name:"testing card",description:"testing card",rarity:"common",typeLabel:"fire rate",performUpgrade(){console.error("this should never be called, it's a testing card")}},range1:ye(25,"Atlatl          ",Wc),range2:ye(125,"Longbow         ",Wc),range3:ye(225,"Sniper Rifle    ",Wc),rate1:ye(25,"Mucho Practice  ",Xc),rate2:ye(125,"Reload Bot      ",Xc),rate3:ye(225,"Gatling Gun     ",Xc),damage1:ye(50,"Sharp Rock      ",qc),damage2:ye(150,"Heavy Bullet    ",qc),damage3:ye(250,"Pome Grenade    ",qc),coins1:ye(25,"Gold Nugget     ",yr,mn),coins2:ye(80,"Pay Raisin      ",yr,mn),coins3:ye(140,"1337 Loot       ",yr,mn),coins4:ye(200,"13th Month Pay  ",yr,mn),coins5:ye(260,"Inflation       ",yr,mn),endCoins1:ye(25,"Harvest         ",xr,mn),endCoins2:ye(80,"Treasure Chest  ",xr,mn),endCoins3:ye(140,"Pot of Gold     ",xr,mn),endCoins4:ye(200,"Gold Vain       ",xr,mn),endCoins5:ye(260,"Precious Granite",xr,mn),energy1:Sr(42,"Electron Boost  ",YE,24-Xp),maxDmg:Sr(42,"Steroids        ",ZE,Ha),maxRate:Sr(42,"Machine Oil     ",KE,Ha),coinsR1:Sr(60,"RwnsCoin        ",XE,mn),endCoinsR1:Sr(60,"Gold-rich Basalt",WE,mn),startDmg:Yc(50,"Porridge Brekkie",jE,$p),startRate:Yc(50,"Morning Coffee  ",$E,Zp),gems1:Yc(60,"Shiny Mine-y    ",qE,Wb),troop1:cf(50,"Good Friends   ",JE,Ha),troop2:cf(99,"Popularity Pill",QE,Ha)};function ye(n,t,e,i=Hb,s="common"){return{...e,rarity:s,cardsToGive:cm(i),name:t.trim(),minPlayerLevel:n}}function Sr(...[n,t,e,i]){return ye(n,t,e,i,"rare")}function Yc(...[n,t,e,i]){return ye(n,t,e,i,"epic")}function cf(...[n,t,e,i]){return ye(n,t,e,i,"legendary")}const Ao=Math.min(...Object.values(Ui).map(n=>n.minPlayerLevel)),hn={settingsBtn:yt("#settingsBtn",HTMLButtonElement),startDate:yt("#settings .startDate"),stateJson:yt("#settings .stateJson"),resetBtn:yt("#settings .resetProgressBtn",HTMLButtonElement),closeBtn:yt("#settings .closeBtn",HTMLButtonElement),copyBtn:yt("#settings .copyBtn",HTMLButtonElement),shareBtn:yt("#settings .shareBtn",HTMLButtonElement)};function tw(){hn.settingsBtn.addEventListener("click",()=>tn("settings")),hn.closeBtn.addEventListener("click",()=>tn("mainScreen")),hn.resetBtn.addEventListener("click",nw),hn.copyBtn.addEventListener("click",async()=>{const n=hn.stateJson.textContent;await navigator.clipboard.writeText(n),hn.copyBtn.classList.add("copied"),setTimeout(()=>{hn.copyBtn.classList.remove("copied")},1e3)}),aa(hn.shareBtn,typeof navigator.share!="function"),hn.shareBtn.addEventListener("click",async()=>{const n=hn.stateJson.textContent,t=new File([n],"rwns-state.txt",{type:"text/plain"});let e=!1;try{typeof navigator.canShare=="function"&&navigator.canShare({files:[t]})&&(await navigator.share({files:[t],title:"rwns-state.txt"}),e=!0)}catch(i){console.log("error sharing as JSON",i)}e||await navigator.share({text:n,title:"rwns-state.txt"})})}function ew(){const n=Fn();hn.startDate.textContent=n.startDate,hn.stateJson.textContent=JSON.stringify(n,null,2)}function nw(){window.confirm("Reset all progress?")&&(ww(),tn("mainScreen"))}function iw(n){hn.settingsBtn.classList.toggle("hidden",n.level<=1)}const Ri={main:yt("main"),energy:yt("#mainScreen .playStats .energy"),energyNext:yt("#mainScreen .playStats .energy .nextTime")};function Co(n,t=!0){const{energy:e,nextEnergyMs:i}=Tm(n);e<1/0?e>=n.energyMax||e===n.energyMax-1&&!t?(dm(),au(null,e)):(rw(i,e),au(i,e)):aa(Ri.energy,!0),Ri.main.classList.toggle("no-energy",!e)}function sw(){return!Ri.main.classList.contains("no-energy")}function au(n,t){if(im(Ri.energy)||bn(Ri.energy,String(t)),n){const e=Math.floor(n/6e4),i=e?`${e}min`:`${Math.ceil(n/1e3)}s`;Ri.energyNext.textContent=`(+1 in ${i})`}else Ri.energyNext.textContent=""}let uo=null,ho=0,ou=-1,hm=-1;function rw(n,t){ou=Date.now()+n,hm=t,ho=0,uo??=setInterval(aw,1e3)}function dm(){uo&&(clearInterval(uo),uo=null)}function aw(){if(as("run")){dm();return}const n=Date.now();if(n>ou){Co(gi());return}if(n>ho){const t=ou-n;au(t,hm),t<=61e3?ho=0:ho=n+t%6e4}}function ow(n,t){rh(Ri.energy,n,t)}const yn={upgrades:{players:yt("#mainScreen .upgradeButtons > .players"),rate:yt("#mainScreen .upgradeButtons > .rate"),damage:yt("#mainScreen .upgradeButtons > .damage")},runInfo:{all:yt("#runInfo"),level:yt("#runInfo .level"),damage:yt("#runInfo .damage"),rate:yt("#runInfo .rate")}};function cw(){yn.upgrades.players.addEventListener("click",jc("players")),yn.upgrades.rate.addEventListener("click",jc("rate")),yn.upgrades.damage.addEventListener("click",jc("damage"))}function lw(n,t){fm(!0);for(const e of Object.keys(yn.upgrades))yn.upgrades[e].classList.toggle("hidden",!En(`${e}Upgrade`,n)),hw(e,n,t);uw(n)}function fm(n){yn.runInfo.all.classList.toggle("hidden",!n)}function uw(n){yn.runInfo.level.textContent=String(n.level),yn.runInfo.all.classList.toggle("hidden",n.level<=1),yn.runInfo.rate.classList.toggle("hidden",!En("rateUpgrade",n)),yn.runInfo.damage.classList.toggle("hidden",!En("damageUpgrade",n))}function hw(n,t,e){const{currentLevel:i,nextLevel:s,nextPrice:r}=gm(n,t,e),a=t.wallet.read("coin")>=(r??0),o=s==null,c=yn.upgrades[n],l=!a||o;c.classList.toggle("disabled",l),c.classList.toggle("unaffordable",!a),c.classList.toggle("max",o);const u=c.querySelector(".cost .value");u.textContent=r?$r(r):"—";const d=c.querySelector(".level .value");d.textContent=o?"MAX":`Level ${i+1}`;const h=yn.runInfo.all.querySelector(`.${n} .value`);h&&(h.textContent=String(i+1))}function jc(n){return t=>{if(t.currentTarget instanceof HTMLElement&&!t.currentTarget.classList.contains("disabled")){const e=Fn(),i=gi();dw(n,e,i),ch(e,i)}}}const pm={damage:{price:(n,t)=>Zc(t.damageUpgradePrice,1.3*3**((n-1)/2)),value:(n,t)=>n*2**(t/6)},rate:{price:(n,t)=>Zc(t.rateUpgradePrice,1.3*3**((n-1)/2)),value:(n,t)=>n*2**(t/6)},players:{price:(n,t)=>Zc(t.playersUpgradePrice,31.92*1.2577**n),value:(n,t)=>n+t}};function dw(n,t,e){const{nextLevel:i,nextPrice:s}=gm(n,t,e);if(!i)return;const r=t.wallet.read("coin");if(r<s)return;const a=lu("coin",s);xm("coin",r,a),Cw(n,i)}function mm(n,t,e){return t[n]??0+_m(`${n}StartUpgrade`,e)}function gm(n,t,e){const i=mm(n,t.runUpgradeLevels,e),s=_m(`${n}MaxUpgrade`,e);if(i>=s)return{currentLevel:i};const r=i+1,a=pm[n].price,o=a(r,e);return{currentLevel:i,nextLevel:r,nextPrice:o}}function $c(n,t,e,i){const s=mm(e,t,i);if(!s)return n;const r=pm[e].value;return r(n,s)}function Zc(n,t){return Math.max(1,Math.round(n*Number(t.toPrecision(2))))}function _m(n,t){if(!(n in t))throw new Error(`cannot find ${n} in ${JSON.stringify(t)}`);return t[n]}const ai={main:yt("main"),section:yt("#mainScreen"),topButtons:yt("#mainScreen .topBar"),exitBtn:yt("#exitBtn",HTMLButtonElement),walletContainer:yt("#mainWallet .wallet"),wallet:{gem:yt("#mainWallet .wallet .gem"),coin:yt("#mainWallet .wallet .coin"),card:yt("#mainWallet .wallet .card")},playStats:{played:yt("#mainScreen .playStats .played"),level:yt("#mainScreen .playStats .level")},upgradeButtons:yt("#mainScreen .upgradeButtons")};function fw(){Ew(),cw(),ai.topButtons.addEventListener("touchdown",n=>n.stopPropagation()),ai.upgradeButtons.addEventListener("touchdown",n=>n.stopPropagation()),document.addEventListener("visibilitychange",gw)}function pw(){const n=gi();return sw()?Nw(n)?(Co(n,!1),!0):!1:(Co(n),!1)}let Kc=null;function mw(){Kc&&clearTimeout(Kc),ai.exitBtn.disabled=!1;const n=Fn(),t=gi();ch(n,t),wm(n)&&!Eu()&&(Kc=setTimeout(()=>{as("mainScreen")&&!Eu()&&tn("dailyGift")},1e3))}function gw(){as("run")||ch()}function ch(n=Fn(),t=gi()){bg({state:n,params:t,type:"normal",onProgress(){Mm("normal"),tn("mainScreen")},onRetry(){tn("mainScreen")}}),vm(n),aa(ai.walletContainer,!En("coins",n));const e=n.cards.entries().some(([,i])=>i>0);ai.wallet.gem.classList.toggle("neverHidden",e),bn(ai.playStats.level,n.level,String),bn(ai.playStats.played,n.played,String),Co(t),lw(n,t),kw(n),Mw(n),iw(n)}function vm(n){Qp(n.wallet,ai.wallet)}function xm(n,t,e){const i=ai.wallet[n];rh(i,t,e)}const Ro={backToBasicsBtn:yt("#mainScreen .sectionButtons .backToBasics"),closeBtn:yt("#backToBasics .closeBtn"),playStats:{played:yt("#backToBasics .playStats .played")}};function _w(){Ro.backToBasicsBtn.addEventListener("click",()=>hu("backToBasics","Humble Beginnings","calm-lotus")),Ro.closeBtn.addEventListener("click",()=>hu("mainScreen"))}function vw(n){const t=En("backToBasics",n)&&rs()>=n.sideGames.backToBasics.nextAllowed;aa(Ro.backToBasicsBtn,!t)}function xw(){fm(!1);const n=Fn();bn(Ro.playStats.played,n.sideGames.backToBasics.played,String);const t={...n,level:1,realLevel:n.level,runUpgradeLevels:{}},e=gi("backToBasics");bg({state:t,params:e,type:"backToBasics",objects:{customMessage:n.sideGames.backToBasics.level===1?"remember how calm it all once was?":""},endButtons:{retry:"OK",progress:"OK",hideRetryOnWin:!0},onProgress(){Mm("backToBasics"),hu("mainScreen")},onRetry(){tn("backToBasics")}})}function yw(){return!0}function Sw(){return DE(rm(6,8,Math.random))}function Mw(n){vw(n)}function cu(){return window.RWNS_LOCAL_STORAGE_KEY||"rwns-game-state"}function Qe(){localStorage.setItem(cu(),JSON.stringify(Wt))}function bw(){const n=localStorage.getItem(cu());if(!n)return null;try{const t=JSON.parse(n),e=rs();return{level:Ji(t.level,1),realLevel:void 0,energy:Ji(t.energy,1/0),wallet:new Kr(jo,t.wallet),cards:new Kr(Yo,t.cards),runUpgradeLevels:zE(t.runUpgradeLevels),collectedGemIds:IE(t.collectedGemIds),played:Ji(t.played,0),lastEnergyGiven:Ji(t.lastEnergyGiven,Date.now()),lastDailyGiftGiven:su(t.lastDailyGiftGiven,e),startDate:su(t.startDate,e),sideGames:OE(t.sideGames)}}catch(t){const e=cu()+new Date().toISOString();return localStorage.setItem(e,n),console.warn(`cannot read state, saving in "${e}"`,t),null}}function ym(){const n=rs();return{level:1,wallet:new Kr(jo),cards:new Kr(Yo),played:0,energy:1/0,lastEnergyGiven:Date.now(),runUpgradeLevels:{},collectedGemIds:[],lastDailyGiftGiven:n,startDate:n,sideGames:{backToBasics:{level:1,played:0,nextAllowed:n}}}}let Wt;function Ew(){Wt=bw()??ym(),Em(),fi("gameState",Wt)}function Fn(){return Wt}function ww(){Wt=ym(),fi("gameState",Wt,!0),Qe()}function Sm({type:n,amount:t}){Wt.wallet.add(n,t),Qe()}function Tw(n){for(const t of n)Wt.cards.add(t,1);Qe()}function lu(n,t){const e=Wt.wallet.add(n,-t);return Qe(),e}function Mm(n){switch(n){case"normal":Wt.level=Wt.level+1,Wt.runUpgradeLevels={},Wt.collectedGemIds=[],Em(),Qe();break;case"backToBasics":Wt.sideGames.backToBasics.level+=1,Qe();break}}function Aw(n){switch(n){case"normal":Wt.played+=1,Qe();break;case"backToBasics":Wt.sideGames.backToBasics.played+=1,Wt.sideGames.backToBasics.nextAllowed=Sw(),Qe();break}}function Cw(n,t){Wt.runUpgradeLevels[n]=t,Qe()}function ar(n){Wt.runUpgradeLevels[n]=(Wt.runUpgradeLevels[n]??0)+1,Qe()}function Rw(n){Wt.collectedGemIds.push(n),Qe()}function gi(n="normal"){const t={energyMax:Xp,coinsPerLevel:Db,gemsPerLevel:Ub,gemsGuaranteedPerRun:Fb,endBlockCoinsPerLevel:Nb,endGateGems:0,damageUpgradePrice:Rb,rateUpgradePrice:Pb,playersUpgradePrice:Lb,damageMaxUpgrade:$p,rateMaxUpgrade:Zp,playersMaxUpgrade:Cb,damageStartUpgrade:0,rateStartUpgrade:0,playersStartUpgrade:0,objectHitPoints:ih,maxEndBlockHitPoints:Vb,gemHitPoints:zb,playerBulletHitPoints:kb,playerBulletRange:bb,playerHitPoints:Bb,playerShotsPerSecond:Mb,startingPlayers:Ib,cardsBulkBuyingRate:1};if(n==="normal")for(const[e,i]of Wt.cards.entries()){const s=lm(i);Ui[e].performUpgrade(s,t)}return n==="backToBasics"&&(t.endGateGems=1),t}function Pw(n,t){switch(t){case"normal":return String(n.level);case"backToBasics":{const e=n.realLevel??n.sideGames.backToBasics.level,i=n.sideGames.backToBasics.level>1?e:1;return String(i)}}}const bm=64;function En(n,t){switch(n){case"coins":return t.level>=2;case"limitedEnergy":return t.level>=4;case"dailyGift":return t.level>=5;case"rateUpgrade":return t.level>=4;case"damageUpgrade":return t.level>=10;case"playersUpgrade":return t.level>=20;case"gems":return t.level>=Ao-1;case"cards":return t.level>=Ao;case"bulkCards":return!1;case"butterfly":return t.level>=bm;case"backToBasics":return t.level>=100}}function Em(){const n=gi();Wt.energy===1/0&&En("limitedEnergy",Wt)&&(Wt.energy=n.energyMax),Wt.level<4&&(Wt.energy=1/0)}function Lw(){const n=gi();return n.coinsPerLevel+n.endBlockCoinsPerLevel}function Iw(n){return Object.values(n.cards.readAll()).reduce((t,e)=>t+e,0)}function wm(n){const t=rs();return En("dailyGift",n)&&n.lastDailyGiftGiven!==t}function Dw(){const n=rs();Wt.lastDailyGiftGiven=n,Qe()}function Tm(n){const t=Date.now();if(Wt.energy>=n.energyMax)return{energy:Wt.energy,nextEnergyMs:t+Ga};{const e=t-Wt.lastEnergyGiven,i=Math.floor(e/Ga);return i>0&&(Wt.energy=Math.min(n.energyMax,Wt.energy+i),Wt.lastEnergyGiven=Wt.lastEnergyGiven+i*Ga,Qe()),{energy:Wt.energy,nextEnergyMs:Wt.lastEnergyGiven+Ga-t}}}function Am(n=1){Wt.energy+=n,Qe()}function Nw(n){return Wt.energy===1/0||eE()?!0:(Tm(n),Wt.energy>0?(Wt.energy>=n.energyMax&&(Wt.lastEnergyGiven=Date.now()),Wt.energy-=1,Qe(),!0):!1)}const Uw={common:96,rare:12,epic:3,legendary:1};function Fw(n){const t=Yo.filter(r=>Ow(n,r));if(t.length<=1)return t[0];const e=[...new Set(t.map(r=>Ui[r].rarity))],i=PE(e,Uw,Math.random),s=t.filter(r=>Ui[r].rarity===i);return rr(s,Math.random)}function Ow(n,t){const e=Ui[t];return n.level>=e.minPlayerLevel&&n.cards.read(t)<e.cardsToGive}const Ne={cardsSection:yt("#cards"),goToCardsSectionButton:yt("#mainScreen .sectionButtons .cards"),closeCardsSectionButton:yt("#cards button.close"),buyOne:yt("#cards button.buyOne"),buyBulk:yt("#cards button.buyBulk"),theCards:yt("#cards .theCards"),cardsContainer:yt("#cards .cardsContainer"),walletContainer:yt("#cards .wallet"),wallet:{gem:yt("#cards .wallet .gem"),coin:yt("#cards .wallet .coin"),card:yt("#cards .wallet .card")}};function Bw(){Ne.goToCardsSectionButton.addEventListener("click",()=>tn("cards")),Ne.closeCardsSectionButton.addEventListener("click",()=>{$o(),tn("mainScreen")}),Ne.buyOne.addEventListener("click",Ww),Ne.buyBulk.addEventListener("click",Xw)}function kw(n){aa(Ne.goToCardsSectionButton,!En("cards",n))}const Po=new Set,Lo=new Set;function zw(){$o(!0),Po.clear(),Lo.clear(),Cm()}function Cm(n){const t=Fn(),e=gi();Qp(t.wallet,Ne.wallet),uf(Ne.buyOne,wo,1,t),uf(Ne.buyBulk,wo*$d*e.cardsBulkBuyingRate,$d,t),Ne.buyBulk.classList.toggle("hidden",!En("bulkCards",t)),Ne.theCards.textContent="";const i=Yo.map(r=>({cardType:r,definition:Ui[r],cardData:um(r,t.cards,Ui[r].cardsToGive)})).filter(({cardData:r})=>r.level>0).sort(Vw);let s;$o();for(const{cardType:r,definition:a,cardData:o}of i){const c=Po.has(r),l=Lo.has(r),u=Hw(a,o,c,l);Ne.theCards.append(u),u.addEventListener("click",()=>Gw(u)),n?.includes(r)&&(s=u,Rm(u))}s&&setTimeout(()=>s.scrollIntoView({behavior:"smooth",block:"nearest"}),1)}function Vw(n,t){const e=of.indexOf(t.definition.rarity)-of.indexOf(n.definition.rarity);if(e)return e;if(n.cardData.nextLevelCards===0||t.cardData.nextLevelCards===0){const i=n.cardData.nextLevelCards-t.cardData.nextLevelCards;if(i)return i}return t.cardData.level-n.cardData.level}function Rm(n,t=!1){const e=n.cloneNode(!0);if(e.classList.add("showingNewCard"),t){e.classList.add("fromCard");const i=Ne.cardsSection.getBoundingClientRect(),s=n.getBoundingClientRect(),r=i.left+i.width*.5,a=i.top+i.height*.4,o=s.left+s.width*.5-r,c=s.top+s.height*.5-a;e.style.transform=`translate(calc(-50% + ${o}px), calc(-50% + ${c}px)) scale(0.5)`,e.style.opacity="0",requestAnimationFrame(()=>{e.style.transform="",e.style.opacity=""})}Ne.cardsSection.append(e),e.addEventListener("click",()=>Pm(e))}function Gw(n){Ne.cardsSection.querySelector(".showingNewCard:not(.hiding)")?$o():Rm(n,!0)}function Pm(n){const t=n.dataset.cardType;if(t){const e=Ne.theCards.querySelector(`[data-card-type="${t}"]`);if(e){e.scrollIntoView({behavior:"smooth",block:"nearest"});const i=n.getBoundingClientRect(),s=e.getBoundingClientRect(),r=Ne.cardsContainer.getBoundingClientRect(),a=s.left+s.width/2-(i.left+i.width/2),o=NE(s.top,r.top,r.bottom-s.height)+s.height/2-(i.top+i.height/2);n.style.setProperty("--hide-x",`${a}px`),n.style.setProperty("--hide-y",`${o}px`)}}n.classList.add("hiding"),n.inert=!0,setTimeout(()=>n.remove(),2e3)}function $o(n=!1){Ne.cardsSection.querySelectorAll(".showingNewCard:not(.hiding)").forEach(t=>n?t.remove():Pm(t))}function Hw(n,t,e,i){const s=Ae(void 0,"div","bigCard");s.classList.toggle("highlight",e||i),s.dataset.cardType=t.type,s.classList.add(lf("rarity",n.rarity)),s.classList.add(lf("type",n.typeLabel)),Ae(s,"div","rarity",n.rarity);const r=Ae(s,"div","name",n.name);if(r.append(" "),Ae(r,"span","level",String(t.level)),r.classList.toggle("highlight",e),Ae(s,"div","label",n.typeLabel),Ae(s,"div","description",n.description),t.nextLevelCards>0){const a=Ae(s,"div","nextLevel");a.classList.toggle("highlight",i);const o=Ae(a,"span","box"),c=Ae(o,"span","partBox");Ae(a,"span","have",String(t.nextLevelCardsHave)),Ae(a,"span","outOf",String(t.nextLevelCards)),c.style.width=`${t.nextLevelCardsHave/t.nextLevelCards*100}%`}else Ae(s,"div","nextLevel max");return s}function lf(n,t){return`${n}-${t.replaceAll(/\s+/g,"-")}`}function uf(n,t,e,i){const s=e===1&&i.wallet.read("card")>=1,r=s||i.wallet.read("gem")>=t;n.classList.toggle("disabled",!r),n.classList.toggle("unaffordable",!r);const a=n.querySelector(".cost");a.textContent=$r(s?1:t),tE(a,"card","gem",s);const o=n.querySelector(".amount");o.textContent=$r(e)}function Ww(){const n=Fn(),t=n.wallet.read("card")>=1;if(!t&&n.wallet.read("gem")<wo)return;const e=Fw(n);if(!e)return;const i=Ui[e],{nextLevelCards:s,nextLevelCardsHave:r}=um(e,n.cards,i.cardsToGive);if(t)lu("card",1);else{const o=n.wallet.read("gem"),c=lu("gem",wo);rh(Ne.wallet.gem,o,c)}Tw([e]);const a=!(s-r>1);a&&i.onLevelUp&&i.onLevelUp(),a?(Po.add(e),Lo.delete(e)):(Po.delete(e),Lo.add(e)),Cm([e])}function Xw(){console.warn("bulk buying not implemented yet")}const rn={section:yt("#dailyGift"),spinner:yt("#dailyGift .spinner")};function qw(){rn.section.addEventListener("click",jw),rn.spinner.style.setProperty("--spin-time",`${Ql}s`)}let Nr=[],gn,uu=!1,fo=null;function Yw(){Nr=$w(),gn=void 0,uu=!1,rn.spinner.style.setProperty("--start-angle","0deg"),rn.spinner.textContent="";for(const n of Nr){const t=Zw();switch(n.award){case"spin-again":Ae(t,"span","text spinAgain","spin");break;case"card":Ae(t,"i","i cards-icon");break;case"coin":Ae(t,"i","i coins");break;case"energy":Ae(t,"i","i energy");break;case"gem":Ae(t,"i","i gem");break}if(n.amount){const e=Ae(t,"span","amount",$r(n.amount));n.award!=="coin"&&e.classList.add("times")}}}function jw(){const n=Fn();if(rn.spinner.classList.contains("spinning")){fo&&clearTimeout(fo),hf();return}if(!wm(Fn())){if(gn&&gn.award!=="spin-again")if(af(gn.award)&&gn.amount){const s=n.wallet.read(gn.award);xm(gn.award,s-gn.amount,s)}else gn.award==="energy"&&gn.amount&&ow(n.energy-gn.amount,n.energy);tn("mainScreen");return}let t=Nr;uu&&(t=t.filter(s=>s.award!=="spin-again")),n.wallet.read("coin")<20&&(t=t.filter(s=>s.award==="coin"));const e=LE(t.map(s=>({value:s,weight:s.factor})),Math.random);e.award!=="spin-again"?(Dw(),gn=e,af(e.award)&&e.amount?Sm({type:e.award,amount:e.amount}):e.award==="energy"&&e.amount&&Am(e.amount)):uu=!0;const i=Nr.indexOf(e);rn.spinner.style.setProperty("--target-angle",`${Math.round(360-i/Nr.length*360)}deg`);for(const s of rn.spinner.children)s.classList.remove("winning");rn.spinner.children[i]?.classList.add("winning"),rn.spinner.classList.add("spinning"),fo=setTimeout(hf,Ql*1e3),setTimeout(Lm,Ql/2*1e3)}function hf(){fo=null,rn.spinner.classList.remove("spinning"),rn.spinner.style.setProperty("--start-angle",rn.spinner.style.getPropertyValue("--target-angle")),Lm()}function Lm(){rn.spinner.querySelector(".spinAgain").textContent="spin again"}function $w(){const n=Fn(),t=[],e=[];e.push({award:"spin-again",amount:null,factor:5});const i=qo(rs()),s=Lw();t.push({award:"coin",factor:10,amount:2*s}),t.push({award:"energy",factor:10,amount:3}),t.push({award:"coin",factor:6,amount:5*s}),t.push({award:"energy",factor:10,amount:2}),t.push({award:"coin",factor:10,amount:3*s}),t.push({award:"energy",factor:6,amount:5}),En("cards",n)&&(e.push({award:"gem",factor:10,amount:4}),e.push({award:"card",factor:10,amount:1}),e.push({award:"gem",factor:10,amount:8}),Iw(n)>20&&e.push({award:"card",factor:6,amount:rm(3,5,i)}));for(let r=0;t.length+e.length<12;r+=1)t.push(t[r]);return aE(t,e)}function Zw(){return Ae(rn.spinner,"div","prize")}function Kw(){fw(),aC(),Bw(),qw(),tw(),_w(),tn("mainScreen")}const Ya={fadeThrough:yt("#fadeThrough"),fadeThroughMessage:yt("#fadeThrough .message"),fadeThroughIcon:yt("#fadeThrough i.i")},Fs={...Cs("mainScreen",mw,{tryStartPlaying:pw}),...Cs("run",cC),...Cs("cards",zw,{alsoKeepVisible:"mainScreen"}),...Cs("dailyGift",Yw,{alsoKeepVisible:"mainScreen"}),...Cs("settings",ew,{alsoKeepVisible:"mainScreen"}),...Cs("backToBasics",xw,{tryStartPlaying:yw})};function tn(n){const t=Fs[n];for(const e of Object.values(Fs))e.el.classList.remove("_active"),e.el.classList.add("inactive"),e.el.inert=!e.el.classList.contains("no-inert");t.el.classList.add("_active"),t.el.classList.remove("inactive"),t.el.inert=!1,t.cb?.(),sh(t.el),t.alsoKeepVisible&&t.alsoKeepVisible in Fs&&Fs[t.alsoKeepVisible].el.classList.remove("inactive")}function Jw(n){return yt(`main > section#${n}`)}function Cs(n,t,e){return{[n]:{el:Jw(n),cb:t,...e}}}function as(n){return Fs[n].el.classList.contains("_active")}function Qw(){const n=Im()?.el;n&&sh(n)}function Im(){return Object.values(Fs).find(n=>n.el.classList.contains("_active"))}function tT(){return Im()?.tryStartPlaying?.()??!1}async function hu(n,t="",e="gem"){Ya.fadeThroughMessage.textContent=t,Ya.fadeThroughIcon.className=`i ${e}`,Ya.fadeThrough.classList.add("fading"),await new Promise(i=>setTimeout(i,500)),tn(n),await new Promise(i=>setTimeout(i,t?1e3:500)),Ya.fadeThrough.classList.remove("fading"),await new Promise(i=>setTimeout(i,500))}const Zs=new Op;Zs.connect(document);fi("gameTimer",Zs);typeof $s.timeScale=="number"&&Zs.setTimescale($s.timeScale);const Ks=new Map;function Dm(n){for(const t of Ks.keys())t.update(n)}function eT(){for(const n of Array.from(Ks.values()))n()}function lh(n,t){const e=new on("shrink",t,[new de(".scale",[0,t],[...n.scale,0,0,0])]);or(n,t,e,!0)}function nT(n,t){const e=new on("slide",t,[new de(".scale[y]",[0,t],[n.scale.y,0])]);or(n,t,e,!0)}function Nm(n,t,e=!1){const i=Ce(0,t),s=Ce(0,e?Math.PI:-Math.PI),r=new on("fallAndShrink",t,[new de(".rotation[x]",i(0,.6,.75),s(0,.25,.5),Hn),new de(".scale",i(.7,1),[...n.scale,0,0,0],Hn)]);or(n,t,r)}function iT(n,t,e){const i=Ce(0,e),s=Ce(n.position.x,t.x),r=Ce(n.position.y,t.y),a=Ce(n.position.z,t.z),o=new on("flyAndShrink",e,[new de(".position[x]",i(0,.5,1),s(0,.3,1),Hn),new de(".position[y]",i(0,.5,1),r(0,.8,1),Hn),new de(".position[z]",i(0,.1,.5,1),a(0,0,.2,1),Hn)]);or(n,e,o)}function Um(n,t,e){const i=Math.PI*2/t,s=Zs.getElapsed()*t,r=new on("rotate",i,[new de(`.rotation[${e}]`,[0,i],[s,s+Math.PI*2],Dn)]);return or(n,i,r,!1,ta)}function sT(n,t,e,i){const s=t+e,r=n.rotation[i],a=new on("rotate",s,[new de(`.rotation[${i}]`,[0,e,e+t*.1,e+t*.5,e+t*.5,s-t*.1,s],[r,r,r+Math.PI*.1,r+Math.PI,r-Math.PI,r-Math.PI*.1,r],Dn)]);return or(n,s,a,!1,ta)}function Ce(n,t){return(...e)=>e.map(i=>n+(t-n)*i)}function or(n,t,e,i=!1,s=ap){const r=new Bp(n),a=r.clipAction(e);a.loop=s,a.play(),i&&a.fadeIn(t);function o(){a.stop(),r.uncacheAction(e),r.uncacheClip(e),r.uncacheRoot(n),Ks.delete(r)}return Ks.set(r,o),r.addEventListener("finished",()=>{o(),n.removeFromParent()}),a}function Fm(n){const t=new Bp(n);function e(){t.stopAllAction(),t.uncacheRoot(n),Ks.delete(t)}return Ks.set(t,e),t}var Ii=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return n},Out:function(n){return n},InOut:function(n){return n}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var t=1.70158;return n===1?1:n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return n===0?0:--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Ii.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Ii.Bounce.In(n*2)*.5:Ii.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(t){return Math.pow(t,n)},Out:function(t){return 1-Math.pow(1-t,n)},InOut:function(t){return t<.5?Math.pow(t*2,n)/2:(1-Math.pow(2-t*2,n))/2+.5}}}}),Ar=function(){return performance.now()},rT=(function(){function n(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,t)}return n.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(){for(var t,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var s=0,r=e;s<r.length;s++){var a=r[s];(t=a._group)===null||t===void 0||t.remove(a),a._group=this,this._tweens[a.getId()]=a,this._tweensAddedDuringUpdate[a.getId()]=a}},n.prototype.remove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var i=0,s=t;i<s.length;i++){var r=s[i];r._group=void 0,delete this._tweens[r.getId()],delete this._tweensAddedDuringUpdate[r.getId()]}},n.prototype.allStopped=function(){return this.getAll().every(function(t){return!t.isPlaying()})},n.prototype.update=function(t,e){t===void 0&&(t=Ar()),e===void 0&&(e=!0);var i=Object.keys(this._tweens);if(i.length!==0)for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var r=this._tweens[i[s]],a=!e;r&&r.update(t,a)===!1&&!e&&this.remove(r)}i=Object.keys(this._tweensAddedDuringUpdate)}},n})(),du={Linear:function(n,t){var e=n.length-1,i=e*t,s=Math.floor(i),r=du.Utils.Linear;return t<0?r(n[0],n[1],i):t>1?r(n[e],n[e-1],e-i):r(n[s],n[s+1>e?e:s+1],i-s)},Utils:{Linear:function(n,t,e){return(t-n)*e+n}}},Om=(function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n})(),fu=new rT,aT=(function(){function n(t,e){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Ii.Linear.None,this._interpolationFunction=du.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Om.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=t,typeof e=="object"?(this._group=e,e.add(this)):e===!0&&(this._group=fu,fu.add(this))}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},n.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},n.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},n.prototype.start=function(t,e){if(t===void 0&&(t=Ar()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},n.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},n.prototype._setupProperties=function(t,e,i,s,r){for(var a in i){var o=t[a],c=Array.isArray(o),l=c?"array":typeof o,u=!c&&Array.isArray(i[a]);if(!(l==="undefined"||l==="function")){if(u){var d=i[a];if(d.length===0)continue;for(var h=[o],f=0,p=d.length;f<p;f+=1){var S=this._handleRelativeValue(o,d[f]);if(isNaN(S)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(S)}u&&(i[a]=h)}if((l==="object"||c)&&o&&!u){e[a]=c?[]:{};var g=o;for(var m in g)e[a][m]=g[m];s[a]=c?[]:{};var d=i[a];if(!this._isDynamic){var y={};for(var m in d)y[m]=d[m];i[a]=d=y}this._setupProperties(g,e[a],d,s[a],r)}else(typeof e[a]>"u"||r)&&(e[a]=o),c||(e[a]*=1),u?s[a]=i[a].slice().reverse():s[a]=e[a]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},n.prototype.pause=function(t){return t===void 0&&(t=Ar()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this)},n.prototype.resume=function(t){return t===void 0&&(t=Ar()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this)},n.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},n.prototype.group=function(t){return t?(t.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},n.prototype.remove=function(){var t;return(t=this._group)===null||t===void 0||t.remove(this),this},n.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},n.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},n.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},n.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},n.prototype.easing=function(t){return t===void 0&&(t=Ii.Linear.None),this._easingFunction=t,this},n.prototype.interpolation=function(t){return t===void 0&&(t=du.Linear),this._interpolationFunction=t,this},n.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},n.prototype.onStart=function(t){return this._onStartCallback=t,this},n.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},n.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},n.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},n.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},n.prototype.onStop=function(t){return this._onStopCallback=t,this},n.prototype.update=function(t,e){var i=this,s;if(t===void 0&&(t=Ar()),e===void 0&&(e=n.autoStartOnUpdate),this._isPaused)return!0;var r;if(!this._goToEnd&&!this._isPlaying)if(e)this.start(t,!0);else return!1;if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=t-this._startTime,o=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*o,l=function(){if(i._duration===0||a>c)return 1;var S=Math.trunc(a/o),g=a-S*o,m=Math.min(g/i._duration,1);return m===0&&a===i._duration?1:m},u=l(),d=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||a>=this._duration)if(this._repeat>0){var h=Math.min(Math.trunc((a-this._duration)/o)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=h);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=o*h,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var f=0,p=this._chainedTweens.length;f<p;f++)this._chainedTweens[f].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(t,e,i,s){for(var r in i)if(e[r]!==void 0){var a=e[r]||0,o=i[r],c=Array.isArray(t[r]),l=Array.isArray(o),u=!c&&l;u?t[r]=this._interpolationFunction(o,s):typeof o=="object"&&o?this._updateProperties(t[r],a,o,s):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(t[r]=a+(o-a)*s))}},n.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},n.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},n.autoStartOnUpdate=!1,n})();Om.nextId;var jn=fu;jn.getAll.bind(jn);jn.removeAll.bind(jn);jn.add.bind(jn);jn.remove.bind(jn);jn.update.bind(jn);let sn,Vs;const pu=new Op;function oT(n){sn=new _n(Yb,n.clientWidth/n.clientHeight,1,To),sn.position.copy(jr),sn.lookAt(tu),Vs=new aT(sn.position),Vs.onUpdate(()=>{sn.lookAt(tu)}),fi("gameCamera",sn),fi("gameCameraTween",Vs)}function cT(n,t,e){const i=new q,s=new q;sn.getViewBounds(n,i,s);const r=i.x+t*(s.x-i.x),a=i.y+e*(s.y-i.y),o=new L(r,a,-n);return sn.localToWorld(o)}function Bm(n,t,e){if($s.stopCamera)return;const i=n*.7,s=t&&e?$b:jb,r=uT(t,e);Vs.stop(),r?Vs.to({x:i},s).easing(r).start(pu.getElapsed(),!0):(sn.position.x=i,sn.lookAt(tu))}function lT(){pu.update(),Vs.update(pu.getElapsed())}function uT(n,t){switch(!0){case(n&&t):return Ii.Sinusoidal.InOut;case n:return Ii.Sinusoidal.Out;case t:return Ii.Sinusoidal.In;default:return}}const df=new q;class _e{constructor(t=new q(0,0),e=0){this.center=t,this.radius=e}center;radius;getCenter(t){return t.copy(this.center)}getRadius(){return this.radius}set(t,e){return this.center.copy(t),this.radius=e,this}clone(){return new _e().copy(this)}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}makeEmpty(){return this.radius=0,this}isEmpty(){return this.radius<=0}getSize(t){return t.set(this.radius*2,this.radius*2)}expandByScalar(t){return this.radius+=t,this}containsPoint(t){return t.distanceTo(this.center)<=this.radius}intersectsBox(t){return t.clampPoint(this.center,df),this.containsPoint(df)}intersectsCircle(t){return this.center.distanceTo(t.center)<this.radius+t.radius}translate(t){return this.center.add(t),this}translateXZ(t){return this.center.x+=t.x,this.center.y+=t.z,this}getNewBoundingBox(){return this.getBoundingBox(new mi)}getBoundingBox(t){return t.min.x=this.center.x-this.radius,t.min.y=this.center.y-this.radius,t.max.x=this.center.x+this.radius,t.max.y=this.center.y+this.radius,t}min={self:this,get x(){return this.self.center.x-this.self.radius},get y(){return this.self.center.y-this.self.radius}};max={self:this,get x(){return this.self.center.x+this.self.radius},get y(){return this.self.center.y+this.self.radius}};toJSON(){return{type:_e.jsonType,center:this.center,radius:this.radius}}static jsonType="CircleJSON"}function uh(n){return dh(n,"player")}function hh(n){return dh(n,"bullet")}function wn(n){return dh(n,"object")}function dh(n,t){const e=n.userData;if(e.type===t)return e;throw new TypeError(`expecting object type ${t}, got "${e.type}"`)}function Qr(n){return(n.parent?.position.z??0)+n.position.z}function hT(n){return(n.parent?.position.x??0)+n.position.x}function Zo(n){n.clear(),n.position.set(0,0,0)}function km(n,t=!0){const e=[];for(const i of n.children)if(!i.userData.keepBehindCamera&&Qr(i)>Wo)e.push(i);else if(t)break;for(const i of e)i.removeFromParent()}let zm=!1;const Gs=Vm();zm=!0;function Vm(){const n={coin:dT("🟡"),defaultMaterial:new Bo({color:56797})};if(zm)for(const[t,e]of Object.entries(Gs))e.dispose(),Gs[t]=n[t];return n}function dT(n){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=vr,t.height=vr,e.font=`${vr}px serif`,e.textAlign="center";const i=e.measureText(n);e.font=`${vr**2/i.width}px serif`,e.fillText(n,vr/2,i.actualBoundingBoxAscent);const s=new Ve(t);return s.colorSpace=Ye,s.needsUpdate=!0,new Bo({map:s,color:16777215})}function fT(n,t=!1){const e=n in Gs&&Gs[n];if(e)return e;if(t)return Gs.defaultMaterial;throw new TypeError(`no material known for type "${n}"`)}const fh={beige1:15654587,brown1:13413520,brown2:11176560,brown3:7819570,green1:4500036,green2:2265122,green3:30464,silver:13421823,gunGrey:5592405,red1:16711680},ph={side:Be},Js=Object.fromEntries(Object.entries(fh).map(([n,t])=>[n,new pi({color:t,flatShading:!1,...ph})])),oi=Object.fromEntries(Object.entries(fh).map(([n,t])=>[n,new pi({color:t,flatShading:!0,...ph})])),Gm=Object.fromEntries(Object.entries(fh).map(([n,t])=>[n,new pi({color:t,flatShading:!0,transparent:!0,opacity:.2,...ph})]));function pT(n,t={}){const e=fT(n,!0),i=n in zc?zc[n]:zc.defaultSize,{dataType:s=n,y:r=i[1]/2}=t,a=new Vu(e);a.scale.set(...i,1),mT(a,r);const o=i[0];return a.userData.extent2d=new mi(new q(-o/2,-o/6),new q(o/2,o/6)),a.userData.type=s,a.userData.dyingMaterial=`${n}Dying`in Gs?`${n}Dying`:n,a}function mT(n,t){n.center.y=.5-t/n.scale.y}function Hm(n,t){return n instanceof _e?t instanceof _e?n.intersectsCircle(t):n.intersectsBox(t):t.intersectsBox(n)}const ff=new q,pf=new q;function Wm(n,t){return n instanceof mi?(n.getCenter(ff),n.getSize(pf).multiplyScalar(t),n.setFromCenterAndSize(ff,pf)):n.radius*=t,n}function Io(n,t,e,i){return t instanceof _e?(i.copy(t),i.translateXZ(n.position),n.parent?.position&&i.translateXZ(n.parent.position),i):(e.copy(t),mf(e,n.position),n.parent?.position&&mf(e,n.parent.position),e)}function gT(n,t){return n instanceof _e?Math.sqrt(n.radius**2-(t-n.center.x)**2)+n.center.y:n.max.y}function mf(n,t){n.min.x+=t.x,n.max.x+=t.x,n.min.y+=t.z,n.max.y+=t.z}function Nn(n){return n.userData.dying}function mh(n){n.userData.dying=!0}const Ke={runScreen:yt("#run"),endRunScreen:yt("#endRunScreen"),endRunScreenCoins:yt("#endRunScreen .collected .coin"),endRunScreenGems:yt("#endRunScreen .collected .gem"),endRunScreenGemCount:yt("#endRunScreen .gemCount"),inRunWalletContainer:yt("#inRunWallet"),inRun:{gem:yt("#inRunWallet .gem"),coin:yt("#inRunWallet .coin"),card:yt("#inRunWallet .card")}},Do=new Kr(jo),gh=new Map,Ko=new Je;Ko.name="awardsGroup";function _T(){Ko.clear(),Do.reset(),gh.clear(),Xm(!1);for(const n of Object.values(Ke.inRun))bn(n,0);Ke.inRunWalletContainer.classList.add("hidden")}async function vT(n,t){if(!t.awards?.length)return;const e=t.awards;delete t.awards;let i=!0;for(const s of e){const{type:r,amount:a}=s;Do.add(r,a),Sm(s),qm();const o=cT(To,...Sb),[c,l]=xT(r,s.useForAward,n),u=ST(a);for(const d of u){i||await new Promise(f=>setTimeout(f,100));const h=i?c:c.clone();i||(h.position.copy(l),h.position.x+=(Se()-.5)*c.userData.extent2d.max.x),Ko.attach(h),iT(h,o,jd),setTimeout(()=>{yT(r,d)},jd*1e3*.8),i=!1}}}function xT(n,t,e){const i=new L;let s;return typeof t=="string"?s=e.getObjectByName(t):t&&(s=e),s?s.getWorldPosition(i):(e.getWorldPosition(i),s=pT(n),s.position.copy(i)),[s,i]}function yT(n,t){gh.getOrInsertComputed(n,()=>new em(0,Yp)).add(t)}function ST(n){if(n<=1)return[n];if(n<=2)return[n/2,n/2];if(n<=3)return[n/3,n/3,n/3];const t=Math.floor(Math.min(Math.log(n)+3,7)),e=new Array(t);let i=n;for(let s=0;s<t;s+=1){const r=Math.round(i/(t-s));e[s]=r,i-=r}return e}function MT(n){for(const[t,e]of gh.entries()){const i=Ke.inRun[t],s=e.updateShowing(n);bn(i,s),s&&Ke.inRunWalletContainer.classList.remove("hidden")}}function Xm(n,t){Ke.endRunScreen.classList.toggle("visible",n),Ke.runScreen.classList.toggle("endRun",n),n&&Ke.endRunScreen.classList.toggle("win",t)}function bT(){return Ke.endRunScreen.classList.contains("win")}function qm(){let n=!1;n=bn(Ke.endRunScreenCoins,Do.read("coin"))||n,n=bn(Ke.endRunScreenGems,Do.read("gem"))||n,vm(Fn());const t=Ke.endRunScreenGemCount.dataset.gemCount??"";Ke.endRunScreen.classList.toggle("gotGems",!!t),n=bn(Ke.endRunScreenGemCount,t)||n,Ke.endRunScreen.classList.toggle("has-collected",n)}function ET(n){Ke.endRunScreenGemCount.dataset.gemCount=n?String(n):""}const wT=new V_({color:16766720,emissive:6705152,flatShading:!1,metalness:.7,roughness:.5,reflectivity:1}),[TT,Mr]=te.bag,br=TT/2,AT=new ia([[0,0],[br*.9,0],[br,Mr*.1],[br*.8,Mr*.4],[br*.15,Mr*.85],[br*.3,Mr],[0,Mr]].map(n=>new q(...n)),8).applyMatrix4(new Jt().makeShear(0,0,.07,-.15,0,0));function CT(n=wT){return new Kt(AT,n)}function _h(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new Ee;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=gf(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let S=0;S<a[u].length;++S)f.push(a[u][S][h]);const p=gf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function gf(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new Ge(a,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/e;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<e;p++){const S=u.getComponent(h,p);o.setComponent(h+d,p,S)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const[mu,po]=te.boulder,mo=mu/2*Math.sqrt(2),Ym=.1,jm=.7,_f=te.player[1]/2*1.35,$m=mo*jm-po*Ym*Math.sqrt(2),vf=$m*Math.sqrt(2),RT=_h([new di(vf,vf).rotateX(-Math.PI/2).translate(0,po,0),new ia([[mo*.9,0],[mo,_f],[mo*jm,po*(1-Ym)],[$m,po]].map(n=>new q(...n)),4).rotateY(Math.PI/4),new di(mu,mu).rotateX(-Math.PI/2).translate(0,_f,0)]);function PT(n=oi.beige1){const t=new Kt(RT,n);return t.receiveShadow=!0,t.castShadow=!0,t}const LT="/rwns/assets/explosion-BrJVmXi7.svg",IT=new tv,DT={bulletDying:IT.load(LT)},NT=new pi({color:4473924}),[UT]=te.bullet,FT=UT/2,OT=kT(FT).rotateX(-Math.PI/2);function BT(){const n=new Kt(OT,NT);return n.castShadow=!0,n}function kT(n){const t=new Ee,e=new L(0,1,0),i=new L(0,0,-n),s=i.clone().applyAxisAngle(e,Math.PI*2/3),r=i.clone().applyAxisAngle(e,-Math.PI*2/3),a=new L(0,0,0);a.y=Math.sqrt(i.distanceToSquared(s)-a.distanceToSquared(s));const o=[i,s,r,a],c=[o[0],o[2],o[1],o[0],o[1],o[3],o[1],o[2],o[3],o[2],o[0],o[3]];return t.setFromPoints(c),t.computeVertexNormals(),t.translate(0,-n/2,0),t}const[zT,VT]=te.bulletDying,xf=new Kt(new di(zT,VT),new ko({map:DT.bulletDying,transparent:!0})),GT=7368816,HT=[3225597,16711680,16776960,255,65280,65535];class WT{object;actions;idleActions;fluttering=!1;constructor(t=10){const e=new Je;this.object=e;const i=XT(t);e.add(i),i.rotation.x=-Math.PI/8,i.position.y=t/10;const s=Sf(t),r=Sf(t);i.add(s,r),s.translateX(t*.05),r.translateX(-t*.05),s.rotateZ(Math.atan2(.05,1)),r.rotateZ(Math.atan2(-.05,1));const a=Fm(e);this.actions=[a.clipAction(Mf("left"),s),a.clipAction(Mf("right"),r),a.clipAction(qT(t),i)],e.traverse(o=>{o.castShadow=!0,o.receiveShadow=!0}),this.idleActions=[a.clipAction(bf("left",-Math.atan2(.05,1)),s),a.clipAction(bf("right",-Math.atan2(.05,1)),r)]}startFluttering(){if(!this.fluttering){for(const t of this.idleActions)t.fadeOut(.1);this.fluttering=!0;for(const t of this.actions)t.reset(),t.fadeIn(t.getClip().duration/2),t.loop=op,t.enabled=!0,t.play()}}stopFluttering(){if(this.fluttering){this.fluttering=!1;for(const t of this.actions)t.fadeOut(.1);for(const t of this.idleActions)t.reset(),t.loop=ta,t.enabled=!0,t.play()}}setFluttering(t){t?this.startFluttering():this.stopFluttering()}}const yf=new Vt;function Sf(n){const t=HT.map(p=>{yf.setHex(p,Ye);const{r:S,g,b:m}=yf;return[S,g,m]}),e=18,i=new Float32Array(e),s=new Float32Array(e),r=[0,0,n*.15],a=[0,0,n*.15],o=[0,n,n/2],c=[0,n*.8,-n*.25],l=[0,n*.75,-n*.25],u=[0,n*.1,-n*.5];i.set(r,0),i.set(o,3),i.set(c,6),i.set(a,9),i.set(l,12),i.set(u,15),s.set(t[0],0),s.set(t[1],3),s.set(t[2],6),s.set(t[3],9),s.set(t[4],12),s.set(t[5],15);const d=new Ee;d.setAttribute("position",new Ge(i,3)),d.setAttribute("color",new Ge(s,3)),d.computeVertexNormals();const h=new pi({vertexColors:!0,shadowSide:Be,side:Be}),f=new Kt(d,h);return f.receiveShadow=!0,f.castShadow=!0,f}function XT(n){const e=new Float32Array(108),i=n*.1,s=n*.06,r=[0,0,n*.35],a=Rs(i,0,n*.2),o=Rs(i,120,n*.2),c=Rs(i,-120,n*.2),l=Rs(s,60,-n*.25),u=Rs(s,180,-n*.25),d=Rs(s,-60,-n*.25),h=[0,0,-n*.35];e.set(r,0),e.set(a,3),e.set(o,6),e.set(r,9),e.set(o,12),e.set(c,15),e.set(r,18),e.set(c,21),e.set(a,24),e.set(a,27),e.set(l,30),e.set(o,33),e.set(o,36),e.set(u,39),e.set(c,42),e.set(c,45),e.set(d,48),e.set(a,51),e.set(a,54),e.set(d,57),e.set(l,60),e.set(o,63),e.set(l,66),e.set(u,69),e.set(c,72),e.set(u,75),e.set(d,78),e.set(l,81),e.set(u,84),e.set(h,87),e.set(u,90),e.set(d,93),e.set(h,96),e.set(d,99),e.set(l,102),e.set(h,105);const f=new Ee;f.setAttribute("position",new Ge(e,3)),f.computeVertexNormals();const p=new pi({shadowSide:Be,side:Be,color:GT}),S=new Kt(f,p);return S.receiveShadow=!0,S.castShadow=!0,S}function Rs(n,t,e){const i=t/180*Math.PI;return[n*Math.sin(i),n*Math.cos(i),e]}const No=.1,gu=.35;function Mf(n){const t=Ce(0,No),e=Ce(0,n==="right"?Math.PI:-Math.PI);return new on("flutter",No,[new de(".rotation[z]",t(0,1),e(.5-gu,.5+gu),Hn)])}function qT(n){const t=n/3*Math.sin(gu*Math.PI),e=Ce(0,No),i=Ce(0,t);return new on("flutter",No,[new de(".position[y]",e(0,1),i(0,2),Hn)])}function bf(n,t){const s=Ce(0,5),r=n==="right"?1:-1,a=Ce(r*t,r*Math.PI);return new on("openClose",5,[new de(".rotation[z]",s(0,.5,.55,.99,1),a(0,0,.45,.45,0),Dn)])}const YT=.9,[Ef,_u]=te.gatePost,jT=new is(Ef,_u,Ef).translate(0,_u/2,0);function $T(n,t=43775){const e=new pi({color:t,emissive:t,emissiveIntensity:.3,flatShading:!0}),i=new Vt(t),s=i.getHSL({});i.setHSL(s.h,s.s/2,s.l**.7);const r=new ko({color:i,transparent:!0,opacity:.5,side:Be}),a=_u*YT,o=new di(n,a).translate(0,a/2,0),c=new Kt(o,r);return c.add(wf(e).translateX(-n/2)),c.add(wf(e).translateX(n/2)),c}function wf(n){const t=new Kt(jT,n);return t.name=Zm,t}const Zm="gatePost",ZT=new Lp({color:4504575,emissive:4504575,emissiveIntensity:2.2,flatShading:!0,transparent:!0,metalness:3,roughness:.2,opacity:.5,side:Be}),[KT,Km]=te.gem,Tf=KT/2,ja=Km/2,Af=.8,JT=new ia([[0,-ja],[Tf,Km*Af-ja],[Tf*(1-(1-Af)*2),ja],[0,ja]].map(n=>new q(...n)),6);function QT(n=ZT){return new Kt(JT,n)}const Ls=[{from:.1,color:new Vt(16729156)},{from:.25,color:new Vt(16746496)},{from:.6,color:new Vt(47872)}],[Jm,Cf]=te.hitBar,Rf=.05;function t1(){const n=new Vu(new Bo({color:new Vt(Ls.at(-1).color),opacity:0}));return n.scale.set(Jm,Cf,1),n.translateY(Cf),n.name="hitBar",n}function vh(n){return n.getObjectByName("hitBar")}function e1(n,t){const e=n.getObjectByName("hitBar");if(!(!e||!(e instanceof Vu))){if(t<=0){e.removeFromParent();return}e.scale.x=Jm*(t*(1-Rf)+Rf),n1(t,e.material.color),e.material.opacity=1}}function n1(n,t){if(n<=Ls[0].from){t.copy(Ls[0].color);return}const e=Ls.findLastIndex(o=>o.from<=n),i=Ls[e];t.copy(i.color);const s=Ls[e+1];if(!s)return;const r=i.from,a=s.from;t.lerp(s.color,(n-r)/(a-r))}const i1=new L;function s1(n){const t={openEnded:!1,boneOffset:0,...n,radius2:n.radius2??n.radius},e=new ss(t.radius,t.radius2,t.length,t.sides,t.segmentsPerBone*(t.boneCount-1),t.openEnded).translate(0,t.length/2,0).rotateY(Math.PI/t.sides),i=t.length/(t.boneCount-1),s=[],r=[],a=e.attributes.position;for(let o=0;o<a.count;o++){const c=i1.fromBufferAttribute(a,o).y,l=Math.floor(c/i),u=(c-l*i)/i;s.push(t.boneOffset+l,t.boneOffset+l+1,0,0),r.push(1-u,u,0,0)}return e.setAttribute("skinIndex",new zu(s,4)),e.setAttribute("skinWeight",new pe(r,4)),e}class Qm{object;actions;idleAction;gunHeight;_size;walking=!1;constructor(t,e,i=e){const s=t.sides??4,r=t.maxStride??t.legLength*2,a={...t,legSegmentCount:t.legSegmentCount??5,sides:s,armRadius:t.armRadius??t.legRadius*.6,armSegmentCount:t.armSegmentCount??20,headRadius:t.headRadius??t.legLength/4,torsoOffset:t.torsoOffset??t.legRadius*(1/Math.cos(Math.PI/s)-1),gunRadius:t.gunRadius??t.legRadius,gunLength:t.gunLength??t.hipWidth,maxStride:r,...d1(t.speed,r,t.strideDuration??1.2),idleTurnDelay:t.idleTurnDelay??20,idleTurnDuration:t.idleTurnDuration??1.6};this._size=a;const o=new Je;this.object=o;const c=[...Pf(a,"left"),...Pf(a,"right")],l=new Hu(c);function u(C){const _=C==="right"?1:-1,b=a1(r1(a,iE(c,C+"Hip")),Xa(c,C+"Hip"),e,_*(a.hipWidth/2-a.legRadius));b.position.y=a.legLength,b.rotation.z=Math.PI,o.add(b),b.bind(l)}u("left"),u("right");const d=o1(a.strideDuration,a.strideLength,Xa(c,"rightFoot")),h=Fm(o);this.actions=[h.clipAction(d,Xa(c,"leftFoot")),h.clipAction(d,Xa(c,"rightFoot"))];const f=new Je;o.add(f);const p=(a.legLength-Math.sqrt(a.legLength**2-(a.strideLength/4)**2))/2,S=a.strideLength/2/a.legLength*.15,g=c1(a.strideDuration,p);this.actions.push(h.clipAction(g,f));const m=new Kt(l1(a.hipWidth+2*a.torsoOffset,(a.legRadius+a.torsoOffset)*2,a.legLength*.8).translate(0,a.legLength,0),e);f.add(m);const y=Lf(a.strideDuration,S);this.actions.push(h.clipAction(y,m));const M=new Kt(new Zu(a.headRadius,1).translate(0,a.legLength*1.85+a.headRadius,0),e);f.add(M);function x(C){const _=C==="right"?1:-1,b=new Kt(h1(C,a),e);b.position.y=a.legLength*1.8-a.armRadius,b.position.x=_*(a.hipWidth/2+a.torsoOffset),m.add(b)}x("left"),x("right");const T=new Kt(new ss(a.gunRadius*2.2,a.gunRadius,a.gunLength,3,1,!1).rotateX(Math.PI/2).translate(0,0,-a.gunLength/2+a.torsoOffset*2),i);this.gunHeight=a.legLength*1.35,T.position.y=this.gunHeight,T.position.z=-a.legRadius-a.torsoOffset*4,m.add(T),o.traverse(C=>{C.castShadow=!0,C.receiveShadow=!0});const A=Lf(a.strideDuration,-S);this.actions.push(h.clipAction(A,T)),a.idleTurnDuration&&(this.idleAction=sT(this.object,a.idleTurnDuration,a.idleTurnDelay,"y"),this.idleAction.time=Math.random()*this._size.idleTurnDuration*2)}getGunHeight(){return this.gunHeight}startWalking(){if(this.idleAction&&this.idleAction.fadeOut(.3),!this.walking){this.walking=!0;const e=this.actions[0].getClip().duration*Math.random();for(const i of this.actions)i.reset(),i.getRoot().name.startsWith("left")&&(i.time=i.getClip().duration/2),i.time+=e,i.fadeIn(i.getClip().duration/2),i.loop=ta,i.enabled=!0,i.play()}}stopWalking(){if(this.walking){this.walking=!1;for(const t of this.actions)t.fadeOut(.5);this.idleAction&&this.idleAction.play()}}setWalking(t){t?this.startWalking():this.stopWalking()}}function r1(n,t){return s1({boneCount:2,boneOffset:t,length:n.legLength,radius:n.legRadius/Math.cos(Math.PI/4),segmentsPerBone:n.legSegmentCount,sides:4})}function Pf(n,t){const e=new jl;e.name=t+"Hip";const i=new jl;return i.name=t+"Foot",i.position.z=-n.legRadius,i.position.y=n.legLength,e.add(i),[e,i]}function a1(n,t,e,i){const s=new t_(n,e);return s.add(t),s.position.x=i,s}function o1(n,t,e){const i=Ce(0,n),s=Ce(e.parent.position.y,e.position.y),r=Ce(e.position.z+t/4,e.position.z-t/4);return new on("walk",n,[new de(".rotation[x]",i(0,.15,.45,.75,1),[0,0,.7,0,0],Dn),new de(".position[z]",i(0,.25,.75,1),r(.5,0,1,.5),Dn),new de(".position[y]",i(0,.25,.4,.75,1),s(1,1,.85,1,1),Dn)])}function c1(n,t){const e=Ce(0,n),i=Ce(-t,0);return new on("bob",n,[new de(".position[y]",e(0,.25,.5,.75,1),i(1,0,1,0,1),Dn)])}function Lf(n,t){const e=Ce(0,n),i=Ce(0,t);return new on("bob",n,[new de(".rotation[y]",e(0,.25,.75,1),i(0,-1,1,0),Dn)])}function l1(n,t,e){const i=new wp;i.moveTo(-n/2,-t/2),i.lineTo(-n/2,t/2),i.lineTo(n/2,t/2),i.lineTo(n/2,-t/2),i.closePath();const s=new ju(i,{depth:e,bevelSize:e/7,bevelEnabled:!0,bevelOffset:-e/7,bevelSegments:1,bevelThickness:e/10});return s.rotateX(-Math.PI/2),s}function $a([n,t,e]){return new L(n,t,e)}function u1(n,t,e,i){return new xp($a(n),$a(t),$a(e),$a(i))}function h1(n,t){const e=n==="right"?1:-1,i=t.armRadius,s=e*(t.hipWidth/2+t.torsoOffset),r=t.legLength*.6,a=new Ep,o=[[0,0,0],[e*i,0,0],[e*i*2,-i,0],[e*i*2,-i*2,0],[e*i*2,-i*3,0],[e*i*1,-r,0],[-s,-r,0]];for(let l=0;l<o.length-3;l+=3)a.add(u1(o[l],o[l+1],o[l+2],o[l+3]));const c=Math.PI/180*(40+e*10);return new Ku(a,t.armSegmentCount,i,8).rotateX(c)}const If=.2;function d1(n,t,e){if(n>t/e)return{strideLength:t,strideDuration:t/n};if(n>t/e*If)return{strideLength:n*e,strideDuration:e};{const i=t*If;return{strideLength:i,strideDuration:i/n}}}const[oa,Oe]=te.broadLeaf,Ur=.3,nn=oa/2*.35,f1=Oe*(1-Ur),p1=Js.brown3;function m1(n){return(f1/oa)**(1-n)}const g1=5,Jc=[...Ni(g1).map(n=>{const t=new $u(oa/2,1).scale(1,m1(n),1);return t.computeBoundingBox(),t})],_1=[0,Oe,nn,0,0,0,[[Ur,Oe/2,nn/3,0,60,90,[[.3,Oe/4,nn/6,0,60,140],[.4,Oe/4,nn/6,0,80,-100]]],[Ur+.1,Oe/2,nn/3,0,60,-135,[[.2,Oe/4,nn/5,0,40,-90],[.4,Oe/4,nn/6,0,40,150]]],[Ur+.1,Oe/2,nn/3,0,60,-20,[[.3,Oe/4,nn/6,0,60,90],[.4,Oe/4,nn/7,0,70,-90]]],[.7,Oe/4,nn/5,0,80,15],[.75,Oe/5,nn/5,0,80,-105],[.6,Oe/4,nn/5,0,70,135]]],v1=tg(..._1,!0),x1=new na(nn,Oe,4).translate(0,Oe/2,0);function y1(n=!0){const t=n?rr(Jc):Jc[0],e=Oe*Ur,i=new Je;n&&(i.rotation.y=Se()*Math.PI);const s=new Kt(t,Js.green2);s.position.set(0,e-t.boundingBox.min.y,0),s.castShadow=!0,s.receiveShadow=!0,i.add(s);const r=new Kt(x1,Js.brown3);return r.castShadow=!0,r.receiveShadow=!0,i.add(r),i.userData.extent2d=new _e(void 0,oa/2),i.userData.type="object",i.userData.height=e+t.boundingBox.max.y-t.boundingBox.min.y,i.userData._crownIndex=Jc.indexOf(t),i}function S1(){const n=new Kt(v1,p1);return n.castShadow=!0,n.receiveShadow=!0,n.userData.extent2d=new _e(void 0,oa/2),n.userData.type="object",n}function tg(n,t,e,i,s,r,a,o=!1){const c=[];if(c.push(new ss(i,e,t,3,1,!o).translate(0,t/2,0)),a)for(const[l,...u]of a)c.push(tg(t*l,...u));return _h(c).rotateX(s/180*Math.PI).rotateY(r/180*Math.PI).translate(0,n,0)}const Df=[Js.green3,Js.green2],eg=Js.brown3,Fr=5,ng=.2,[ca,Uo]=te.conifer,M1=5,vu=ca/2*.3,ig=Uo*(1-ng),xu=ng*Uo,Nf=[...Ni(M1).map(n=>{const t=ig*1.11**n;return{height:t,cones:[...Ni(Fr).map(e=>{const i=t*(1-.9**(Fr-1-e)),s=.8**e,r=ca/2*s**.55,a=t*s-i,o=t-i-a;return new na(r,a,4,1,e>0).translate(0,a/2+o,0)})]}})],sg=new na(vu,Uo,4).translate(0,Uo/2,0),b1=_h([sg,...Ni(Fr*2).map(n=>{const t=ig,e=t*(1-.9**(Fr-1-n)),i=.8**n,s=ca/2*i**.55,r=t*i-e,a=t-e-r,o=Math.min(vu*(1-a/t)*.8,vu/2);return new ss(o,o/3,s,4,1).rotateY(Math.PI/4).rotateZ(Math.PI/2).translate(s/2,a+xu,0).rotateY(Math.PI*4/Fr*n)})]);function E1(n=!0){const t=new Je;n&&(t.rotation.y=Se()*Math.PI);const{height:e,cones:i}=n?rr(Nf):Nf[0];for(let r=0;r<i.length;r+=1){const a=Df[r%Df.length],o=new Kt(i[r],a);o.castShadow=!0,o.receiveShadow=!0,o.position.y=xu,t.add(o)}const s=new Kt(sg,eg);return s.castShadow=!0,s.receiveShadow=!0,t.add(s),t.userData.extent2d=new _e(void 0,ca/2),t.userData.type="object",t.userData.height=e+xu,t}function w1(){const n=new Kt(b1,eg);return n.castShadow=!0,n.receiveShadow=!0,n.userData.extent2d=new _e(void 0,ca/2),n.userData.type="object",n}const cr=Array();cr[4]=`from now on
it gets harder`;cr[5]=`level upgrades reset
in every level`;cr[bm]="hope you like butterflies";cr[Ao-1]="get gems by shooting them";cr[Ao]=`spend gems on cards,
they do not reset`;function T1(n){const t=BT();t.userData.extent2d=new _e(void 0,te.bullet[1]/2),t.userData.type="bullet",t.translateY(n.userData.gunHeight??te.player[1]/2);const e=Um(t,Tb,"z");return t.addEventListener("removed",()=>e.stop()),t}function A1(n,t){n instanceof Kt&&(n.geometry=xf.geometry,n.material=xf.material),n.position.z=gT(t,n.position.x)+.1-n.parent.position.z,mh(n),setTimeout(()=>n.removeFromParent(),Eb*1e3)}function C1(n,t){const{w:e,d:i=1,color:s}=Qb[n],r=$T(e,s);return r.userData.extent2d=new mi(new q(-e/2,-i),new q(e/2,1)),r.userData.type="object",r.userData.gateType=n,r.userData.onPlayerCollision=t,r.userData.benign=!0,r.userData.awardOnPass=!0,r.userData.height=te.gatePost[1],r}function R1(n){nT(n,Xo)}function P1(n){return n.userData.gateType==="end"}const rg=te.butterfly[0]*2,L1=.15;function I1(){const[n]=te.butterfly,t=new WT(n),e=t.object;return e.userData.extent2d=new _e(void 0,0),e.userData.type="object",e.userData.butterfly=t,e}const Xi=new L;function D1(n,t){const e=n[0];if(!e)return;const i=ag(e);if(i.lift>0){const s=rg*(t/L1);e.position.y+=Math.min(i.lift,s),i.lift=Math.max(0,i.lift-s)}if(i.target&&Nn(i.target))delete i.target,delete i.targetPosition,Ff(e);else if(i.targetPosition)if(e.position.x!==i.targetPosition.x||e.position.z!==i.targetPosition.z){Xi.copy(i.targetPosition),Xi.sub(e.position);const s=Xi.length(),r=Ab*t;s>r&&Xi.multiplyScalar(r/s),e.position.add(Xi),e.rotation.y=Math.atan2(Xi.x,Xi.z)}else if(i.butterfly.stopFluttering(),delete i.targetPosition,i.target){const s=vh(i.target);s&&(s.position.y+=te.butterfly[0])}else N1(e,n);else e.position.z+e.parent.position.z>0&&!i.parked&&Ff(e)}function ag(n){if(n.userData.objectSubtype!=="butterfly")throw new Error("butterfly expected");return n.userData}function Uf(n,t,e,i){const s=ag(n);if(!t)delete s.target,s.targetPosition??=new L,s.targetPosition.copy(n.position),s.targetPosition.x=Math.sign(n.position.x)*Yn*2;else{s.target=t,s.targetPosition=new L;const r=wn(t);if(s.targetPosition.set(t.position.x,r.height||n.position.y,t.position.z),e){const a=t.getObjectsByProperty("name",e);if(a.length){const o=rr(a,Math.random);s.targetPosition.add(o.position)}}}i&&(s.parked=!0),s.lift>0||(s.lift=rg),s.butterfly.startFluttering()}function Ff(n){const t=ze.children.find(e=>e.userData.objectSubtype==="tree"&&!Nn(e)&&e.position.z+e.parent.position.z<-80);if(t)Uf(n,t);else{const e=ze.children.find(i=>P1(i));Uf(n,e,Zm,!0)}}function N1(n,t){const e=t.indexOf(n);e>-1&&t.splice(e,1),n.removeFromParent()}const Qc=[oi.beige1,oi.brown1,oi.brown2,oi.brown3];function U1(n){const t=Qc[Math.min(Qc.length-1,Math.floor(n*Qc.length))],e=PT(t),[i,s]=te.boulder;return e.userData.extent2d=new mi(new q(-i/2,-i/2),new q(i/2,i/2)),e.userData.type="object",e.userData.height=s,e}function F1(n){lh(n,Xo)}function O1(n,t=!1){const e=QT();if(e.userData.extent2d=new _e(void 0,te.gem[0]/2),e.userData.type="object",n&&(e.userData.id=n),e.castShadow=!0,e.translateY(te.player[1]/2),e.userData.height=te.gem[1],!t){e.rotateY(Se()*Math.PI);const i=Um(e,yb,"y");e.addEventListener("removed",()=>i.stop())}return e}function B1(n,t=!1){t&&"id"in n.userData&&Rw(n.userData.id),t||lh(n,Xo)}function k1(){const n=CT();return n.userData.extent2d=new _e(void 0,te.bag[0]/2),n.userData.type="object",n.castShadow=!0,n.receiveShadow=!0,n.rotateY(Se()*Math.PI*2),n}function z1(n){lh(n,Xo)}function V1(n=Se()<.5){const t=n?E1():y1();return t.userData._createRandomTree_isConifer=n,t}function G1(n){const t=n.userData._createRandomTree_isConifer?w1():S1();t.position.copy(n.position),t.scale.copy(n.scale),t.rotation.copy(n.rotation),t.userData=n.userData,Nm(t,xb),n.parent.add(t),n.removeFromParent()}const og={butterfly:[I1,()=>{}],tree:[V1,G1],gems:[O1,B1],coins:[k1,z1],gate:[C1,R1],endBlock:[U1,F1]};function Qs(n,...t){const e=og[n][0](...t);if(e.userData.objectSubtype=n,e.userData.type!=="object")throw new Error(`${e.userData.type}`);return e.userData.height&&e.add(t1().translateY(e.userData.height)),e}function cg(n,t=!1){const e=n.userData.objectSubtype;mh(n),og[e][1](n,t);const i=wn(n);for(const s of i.awards??[])if(typeof s.useForAward=="string"){const r=n.getObjectByName(s.useForAward);r&&cg(r,t)}}const lg=oi.silver,ug=oi.gunGrey,xh=new Map;xh.set(lg,Gm.red1);xh.set(ug,Gm.red1);function hg(){const[n,t]=te.player,e=new Qm({hipWidth:n,legLength:t/2,legRadius:t*.053,speed:ra},lg,ug),i=e.object;return i.userData.extent2d=new _e(void 0,n/2*1.3),i.userData.type="player",i.userData.gunHeight=e.getGunHeight(),i.userData.marvin=e,i}function H1(n){const t=n.userData.marvin;return t instanceof Qm?t:void 0}function W1(n,t){H1(n)?.setWalking(t)}function dg(n){mh(n),Nm(n,wb,!0),n.traverse(t=>{if("material"in t){const e=xh.get(t.material);e&&(t.material=e)}})}const yu=new Vt,X1=qo("brickSquare1"),q1=[0,-3,-1,-2],Y1=[...Ni(10).map(n=>yu.setHSL(28/360,.37,(30+n*2)/100,Ye).getHex())];function j1(n=100,t=4,e=Y1){const i=Math.round(t),s=e.map(m=>{yu.setHex(m,Ye);const{r:y,g:M,b:x}=yu;return[y,M,x,y,M,x,y,M,x,y,M,x,y,M,x,y,M,x]}),r=i*4,a=i*8,c=(i**2*8+i*3)*18,l=n/r,u=l/2,d=new Float32Array(c),h=new Float32Array(c);let f=0;for(let m=0;m<r;m+=1){const y=m*l,M=(m+1)*l;for(let x=q1[m%4];x<a;x+=4){const T=Math.max(0,x*u),A=Math.min(n,(x+4)*u),C=[T,y],_=[A,y],b=[A,M],F=[T,M];d.set(C,f),d.set(_,f+3),d.set(b,f+6),d.set(b,f+9),d.set(F,f+12),d.set(C,f+15);const P=rr(s,X1);h.set(P,f),f+=18}}const p=new Ee;p.setAttribute("position",new Ge(d,3)),p.setAttribute("color",new Ge(h,3)),p.translate(-n/2,-n/2,0),p.computeVertexNormals();const S=new pi({vertexColors:!0,shadowSide:Be}),g=new Kt(p,S);return g.receiveShadow=!0,g}const Qi=Yn+2*nh,$1=j1(Qi,15).rotateX(-Math.PI/2);function Z1(n){const t=Math.ceil(Yr/Qi)*2;let e=Wo-Qi/2;for(let i=0;i<t;i+=1){const s=$1.clone();s.position.z=e,s.userData.type="track",n.add(s),e-=Qi}n.userData.trackDist=Qi,n.userData.trackNextZ=e}function K1(n){Z1(n);const t=Yr/mb,e=gb,i=nh,s=Of(!1,i,i,e),r=Of(!0,i,i,e);let a=Wo+e/2;for(;a>=-400-t*2;){const o=new Kt(s,oi.brown2),c=new Kt(r,oi.brown2);o.position.set(-Qi/2+i/2,i/2,a),c.position.set(Qi/2-i/2,i/2,a),o.userData.type="side",c.userData.type="side",o.receiveShadow=!0,c.receiveShadow=!0,o.castShadow=!0,c.castShadow=!0,n.add(o),n.add(c),a-=t}n.userData.sideDist=t,n.userData.sideNextZ=a}function J1(n,t){n.position.z+=t*ra;const e=Wo-n.position.z,i=n.userData.sideNextZ,s=n.userData.trackNextZ,r=e+n.userData.trackDist/2;let a=!1,o=!1;for(const c of[...n.children])c.userData.type==="side"&&c.position.z>e?(c.position.z=i,a=!0):c.userData.type==="track"&&c.position.z>r&&(c.position.z=s,o=!0);a&&(n.userData.sideNextZ-=n.userData.sideDist),o&&(n.userData.trackNextZ-=n.userData.trackDist)}function Of(n,t=1,e=1,i=1){return new is(t,e,i)}function fg(n,t,e,i=e){const s=[],r=te.conifer[0],a=Math.round(n/(r/t))+1,o=Yn-r;let c=1/0;for(let l=0;l<=a;l++){const u=-l*n/a,d=RE(-o/2,o/2,c,n/a,r*.75);c=d;const h=Qs("tree"),f=wn(h);h.position.x=d,h.position.z=u;const p=Math.max(i,(1-Se()/2)*e),S=e===i?e:p;f.hitPoints=S,Wm(f.extent2d,.9),s.push(h)}return s}function yh(n,t,e=!1){const i=Qs("gems",t,e),s=wn(i);return s.hitPoints=n,s.benign=!0,s.awards=[{type:"gem",amount:1,useForAward:!0}],i}function pg(n){const t=Qs("coins"),e=wn(t);return e.collectible=!0,e.awards=[{type:"coin",amount:n}],Wm(e.extent2d,3),t}function mg(n,t,e,i,s=0){const r=[],a=Yn/eu,o=sE(s,t);for(let c=0;c<t;c+=1)for(let l=0;l<eu;l+=1){const u=Qs("endBlock",c/(t-1));u.position.x=l*a+a/2-Yn/2,u.position.z=n-(c+1)*a*1.5;const d=wn(u);d.hitPoints=lp.lerp(i,e,c/(t-1)),o[c]&&(d.awards=[{amount:o[c],type:"coin"}]),r.push(u)}return r}function Q1(n,t){if(t<1)return 0;const e=yh(0);vh(e)?.removeFromParent(),e.position.y+=te.gatePost[1],e.name=tm(),e.castShadow=!1,n.add(e);const i=wn(n);return i.awards??=[],i.awards.unshift({amount:1,type:"gem",useForAward:e.name}),console.assert(t===1,"cannot do more than one gem in a gate yet"),1}const tA=4;function eA(n,t){const e=Gb**(n.level-tA+1),i=t.objectHitPoints*e,s=cr[n.level]??"",r=fg(Kp,Jp,i,t.objectHitPoints),a=En("gems",n)?t.gemsPerLevel:0,o=Math.round(a/2),c=a-o,l=iA(Ob,t.coinsPerLevel),u=[...Bf(o,"tree")];l.push(...u),nA(u,n,t);const d=iu(r,l.length);let h=0;for(const m of d){const y=r[m],M=am(l);let x=null;switch(M.type){case"gem":{const T=yh(t.gemHitPoints*e,M.id);(!M.id||!n.collectedGemIds.includes(M.id))&&(x=T,h+=1);break}case"bag":x=pg(M.amount);break;default:throw new Error(`unhandled item ${JSON.stringify(M)}`)}x&&(r[m]=x,x.position.add(y.position))}const f=r.at(-1).position.z-te.boulder[0]-te.conifer[0],p=mg(f,Xb,t.maxEndBlockHitPoints*e,i/2,t.endBlockCoinsPerLevel),S=[...Bf(c,"block")],g=iu(p,S.length);for(const m of g){const y=S.pop();sA(y,p[m],n)&&(h+=1)}return{objects:r.concat(p),customMessage:s,gemCount:h}}function nA(n,t,e){const i=n.filter(r=>r.id&&t.collectedGemIds.includes(r.id)),s=n.length-i.length;e.gemsGuaranteedPerRun>s&&i.values().take(e.gemsGuaranteedPerRun-s).forEach(r=>r.id=void 0)}function Bf(n,t=""){return Ni(n).map(e=>({type:"gem",id:`gem_${t}${e}`}))}function iA(n,t){if(t<=n)return Array(t).fill({type:"bag",amount:1});const e=new Array(n);let i=t;for(let a=0;a<n;a+=1){const o=Math.round(i/(n-a));e[a]=o,i-=o}const s=t/n,r=Math.round(s*.26);if(r>=1){const a=n/(r+.5);for(let o=0;o<n-1;o+=2){const c=r-Math.floor((o+1)/a);e[o]-=c,e[o+1]+=c}}return e.map(a=>({type:"bag",amount:a}))}function sA(n,t,e){const i=yh(0,n.id,!0),s=Math.PI*2*Se(),r=Math.PI*(Se()*.05+.05);if(!n.id||!e.collectedGemIds.includes(n.id)){i.position.y=te.boulder[1]-te.gem[1]*.3;const a=vh(t);a&&(a.position.y+=te.gem[1]*.3),i.name=n.id??tm(),i.castShadow=!1,i.rotation.y=s,i.rotation.z=r,t.add(i);const o=wn(t);return o.awards??=[],o.awards.unshift({amount:1,type:"gem",useForAward:i.name}),!0}else return!1}const tl=[Su,Su,gg,rA];function Su(n,t){return{objects:fg(Kp,Jp,t.playerBulletHitPoints),customMessage:"don't run into trees"}}function gg(n,t){const{objects:e}=Su(n,t),i=[1,2,3,1,2,3,1,2,3,2],s=i.length,r=iu(e,s);for(const a of r){const o=e[a],c=pg(am(i));e[a]=c,c.position.add(o.position)}return{objects:e,customMessage:"find and collect coins"}}function rA(n,t){const{objects:e}=gg(n,t),i="some things take more than one bullet",s=e.at(-1).position.z-te.boulder[0]-te.conifer[0],r=mg(s,4,3,1);return{objects:e.concat(r),customMessage:i}}function aA(n,t){try{return n.level<tl.length?tl[n.level](n,t):eA(n,t)}catch(e){return console.error("error making a level",e),{...tl[0](n,t),customMessage:"unexpected intermission"}}}const ze=new Je;ze.name="objectsGroup";const Or=ze.userData;function oA(n){Zo(ze),delete Or.butterflies,ze.position.z=-50;const{objects:t,customMessage:e="",gemCount:i=0}=aA(n.state,n.params);for(const o of t){const c=wn(o);c.maxHitPoints=c.hitPoints,o.userData.maxZ=o.position.z+c.extent2d.max.y}t.sort(cA);const s=Qs("gate","end",n.onFinish),r=t.at(-1).userData.maxZ-_b;s.userData.maxZ=r,s.translateZ(r);const a=Q1(s,n.params.endGateGems);if(t.push(s),En("butterfly",n.state)){const o=Qs("butterfly"),c=Math.random()<.5?-1:1;o.position.set(c*Yn,jr.y,qp),o.userData.keepBehindCamera=!0,Or.butterflies=[o]}for(const o of t)ze.add(o);for(const o of Or.butterflies??[])ze.add(o);return{msg:n.customMessage??e,gemCount:i+a}}function cA(n,t){return t.userData.maxZ-n.userData.maxZ}function lA(n){const t=ra*n;ze.position.z+=t,km(ze),Or.butterflies&&D1(Or.butterflies,n)}function _g(n,t,e=!1){if(Nn(n))return!1;const i=wn(n);if(!e&&i.collectible)return!1;e&&i.benign||(i.hitPoints-=t),i.maxHitPoints&&i.hitPoints<i.maxHitPoints&&e1(n,i.hitPoints/i.maxHitPoints);const s=i.collectible||i.hitPoints<=0||i.benign&&e&&i.hitPoints!==1/0,a=!!((s&&!(i.benign&&e)||e&&i.awardOnPass)&&i.awards?.length);return s&&cg(n,a),a&&vT(n,i),!0}const kf=new pi({color:0,wireframe:!0});function zf(n){for(const t of[...n])t.type!=="Sprite"&&vg(t)}function vg(n){const t=uA(n.userData.extent2d);t.rotateX(Math.PI/2),t.position.y=-n.position.y+.1,t.userData.isExtent=!0,n.add(t)}const el=new q;function uA(n){if(n instanceof _e){const t=new Xu(n.radius,16);return new Kt(t,kf)}else{n.getSize(el);const t=new di(el.x,el.y);return new Kt(t,kf)}}const In=new Je;In.name="bulletsGroup";function hA(){Zo(In)}function dA(n,t){const e=T1(n),i=hh(e);i.minZ=In.position.z-t.range,i.hitPoints=t.bulletHitPoints,e.position.z=-In.position.z+n.position.z+t.extent2d.min.y*2,e.position.x=hT(n),In.add(e),$s.showingExtents&&vg(e)}function fA(n){const t=jp*n;In.position.z-=t;for(const s of[...In.children])vA(s);const e=In.position.z,i=[];for(const s of In.children){const r=hh(s);if(e>=r.minZ)break;Nn(s)||i.push(s)}for(const s of i)s.removeFromParent()}const pA=new mi,mA=new mi,gA=new _e,_A=new _e;function vA(n){const t=hh(n),e=Qr(n),i=e+t.extent2d.min.y,s=e+t.extent2d.max.y;for(const r of ze.children){const a=Qr(r),o=wn(r),c=a+o.extent2d.min.y;if(a+o.extent2d.max.y<i)return;const u=Io(r,o.extent2d,pA,gA),d=Io(n,t.extent2d,mA,_A);if(c<s&&Hm(u,d)&&_g(r,t.hitPoints)){A1(n,u);return}}}function xA(n,t=Se){const e=SA(n),i=n>0?(t()-.5)/4:0;return{row:e.y+i,column:e.x}}const nl=[],yA=bA();function SA(n){for(;!nl[n];)nl.push(yA.next().value);return nl[n]}const MA=qo("0");function*bA(){const n=[new q(0,0),new q(1,0)];for(yield n[0],yield n[1];;){const t=EA(n,MA);yield t,n.push(t)}}function EA(n,t=Se){let e=1/0,i=null;for(const s of n)for(const r of TA(s))if(n.every(a=>r.distanceToSquared(a)>0)){const a=Mu(wA([...n,r]),[],t);a.radius<e&&(e=a.radius,i=r)}if(!i)throw new Error("could not generate a new position???");return i}function wA(n){const t=Math.sqrt(.75);let e=1/0,i=-1/0;for(const r of n)e>r.x&&(e=r.x),i<r.x&&(i=r.x);const s=i-e;return n.map(r=>{const a=r.clone();return a.y*=t*1.01**a.y,a.x*=(1+s/30)**2*1.01**a.y,a})}function*TA(n){yield new q(n.x+1,n.y),yield new q(n.x-1,n.y),yield new q(n.x+.5,n.y+1),yield new q(n.x-.5,n.y+1)}function Mu(n,t=[],e=Se){if(n.length===0||t.length===3)return AA(t);const i=rr(n,e),s=n.filter(a=>a!==i),r=Mu(s,t,e);return r.containsPoint(i)?r:Mu(s,t.concat(i),e)}const qi=new q,Yi=new q;function AA(n){if(n.length<=1)return new _e(n[0],0);if(n.length===2){const[t,e]=n,i=new _e(void 0,t.distanceTo(e)/2);return i.center.addScaledVector(t,.5),i.center.addScaledVector(e,.5),i}else{qi.copy(n[1]).sub(n[0]),Yi.copy(n[2]).sub(n[0]);const t=qi.x**2+qi.y**2,e=Yi.x**2+Yi.y**2,i=2*(qi.x*Yi.y-Yi.x*qi.y),s=new q((t*Yi.y-e*qi.y)/i,(e*qi.x-t*Yi.x)/i);return s.add(n[0]),new _e(s,s.distanceTo(n[0]))}}const Ue=new Je;Ue.name="playersGroup";const Pi=Ue.userData;function CA(n,t){Zo(Ue);const e=$c(t.playerShotsPerSecond,n.runUpgradeLevels,"rate",t),i=$c(t.playerBulletHitPoints,n.runUpgradeLevels,"damage",t),s=$c(t.startingPlayers,n.runUpgradeLevels,"players",t),r=Se()<.5;for(let o=0;o<s;o+=1){const c=hg(),{row:l,column:u}=xA(o,Se);c.position.z=l*te.player[0]*1.3,c.position.x=u*te.player[0]*2*(r?-1:1);const d=uh(c);d.shotTime=1/e,d.remainingShotTime=d.shotTime/s*o+d.shotTime/2-c.position.z/jp,d.range=t.playerBulletRange,d.bulletHitPoints=i,d.hitPoints=t.playerHitPoints,Ue.add(c)}bu(Ue);const a=(Pi.maxX+Pi.minX)/2;if(a!==0){for(const o of Ue.children)o.translateX(-a);bu(Ue)}Bm(0)}function bu(n){let t=1/0,e=-1/0;for(const i of n.children)if(!Nn(i)){const s=i.userData.extent2d.min.x+i.position.x;t>s&&(t=s);const r=i.userData.extent2d.max.x+i.position.x;e<r&&(e=r)}t<1/0&&(Pi.minX=t,Pi.maxX=e)}function RA(){bu(Ue)}function PA(n){const t=Yn-Pi.maxX+Pi.minX,e=n*t,i=Ue.position.x+e,s=Yn/2,r=-s-Pi.minX,a=s-Pi.maxX;Ue.position.x=Math.max(r,Math.min(a,i)),Bm(Ue.position.x,!0)}function LA(n){for(const t of Ue.children){if(Nn(t))continue;const e=uh(t);e.remainingShotTime-=n,e.remainingShotTime<=0&&(e.remainingShotTime+=e.shotTime,dA(t,e))}}const IA=new mi,DA=new mi,NA=new _e,UA=new _e;function FA(n){const t=uh(n),e=Qr(n),i=e+t.extent2d.max.y,s=e+t.extent2d.min.y;for(const r of[...ze.children]){if(Nn(r))continue;const a=Qr(r),o=wn(r),c=a+o.extent2d.min.y;if(a+o.extent2d.max.y<s)return;if(c<i&&Hm(Io(r,o.extent2d,IA,NA),Io(n,t.extent2d,DA,UA))){if(o.onPlayerCollision&&o.onPlayerCollision(n),_g(r,t.hitPoints,!0)&&!o.collectible&&!o.benign){const d=o.hitPoints||0;t.hitPoints-=d}if(t.hitPoints<=0){dg(n),RA();return}}}}function OA(){for(const n of[...Ue.children])Nn(n)||FA(n)}function xg(n){for(const t of Ue.children)W1(t,n)}const Li=new Je;Li.name="dyingGroup";function BA(){Zo(Li)}function kA(n){const t=ra*n;Li.position.z+=t,km(Li,!1);const e=[...Iterator.from(ze.children).filter(i=>Nn(i)),...Iterator.from(Ue.children).filter(i=>Nn(i)),...Iterator.from(In.children).filter(i=>Nn(i))];for(const i of e)i.position.add(i.parent.position),Li.add(i),i.position.sub(Li.position)}const Vf={type:"change"},Sh={type:"start"},yg={type:"end"},Za=new Gu,Gf=new wi,zA=Math.cos(70*lp.DEG2RAD),Te=new L,en=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},il=1e-6;class VA extends yv{constructor(t,e=null){super(t,e),this.state=he.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bs.ROTATE,MIDDLE:Bs.DOLLY,RIGHT:Bs.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Mn,this._lastTargetPosition=new L,this._quat=new Mn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Md,this._sphericalDelta=new Md,this._scale=1,this._panOffset=new L,this._rotateStart=new q,this._rotateEnd=new q,this._rotateDelta=new q,this._panStart=new q,this._panEnd=new q,this._panDelta=new q,this._dollyStart=new q,this._dollyEnd=new q,this._dollyDelta=new q,this._dollyDirection=new L,this._mouse=new q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HA.bind(this),this._onPointerDown=GA.bind(this),this._onPointerUp=WA.bind(this),this._onContextMenu=KA.bind(this),this._onMouseWheel=YA.bind(this),this._onKeyDown=jA.bind(this),this._onTouchStart=$A.bind(this),this._onTouchMove=ZA.bind(this),this._onMouseDown=XA.bind(this),this._onMouseMove=qA.bind(this),this._interceptControlDown=JA.bind(this),this._interceptControlUp=QA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vf),this.update(),this.state=he.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Te.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Za.origin.copy(this.object.position),Za.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Za.direction))<zA?this.object.lookAt(this.target):(Gf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Za.intersectPlane(Gf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>il||this._lastTargetPosition.distanceToSquared(this.target)>il?(this.dispatchEvent(Vf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new q,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function GA(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function HA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function WA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yg),this.state=he.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function XA(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case Bs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case Bs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Sh)}function qA(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function YA(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(Sh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(yg))}function jA(n){this.enabled!==!1&&this._handleKeyDown(n)}function $A(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Sh)}function ZA(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function KA(n){this.enabled!==!1&&n.preventDefault()}function JA(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function QA(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let Ai;const qe=new q0;function tC(n){const t=n.querySelector("canvas");if(!t)throw new Error("cannot work without a canvas");Ai=new pb({antialias:!0,canvas:t}),Ai.shadowMap.enabled=vb,oT(t),fi("gameScene",qe),fi("gameRenderer",Ai),e(),window.addEventListener("resize",e);function e(){Ai.setPixelRatio(window.devicePixelRatio),Ai.setSize(n.clientWidth,n.clientHeight),sn.aspect=n.clientWidth/n.clientHeight,sn.updateProjectionMatrix(),tr()}return()=>{window.removeEventListener("resize",e)}}function Sg(n){Ai.render(qe,sn),n&&console.log("triangles",Ai.info.render.triangles)}const tr=window.RWNS_TESTS?()=>{}:Sg;fi("gameDoRender",Sg);let Ps;function eC(n=!0){Ps||(Ps=new VA(sn,Ai.domElement),Ps.addEventListener("change",()=>tr()),Ps.screenSpacePanning=!0,Ps.zoomToCursor=!0),Ps.enabled=n}const Os=new Je;Os.name="trackGroup";function nC(){return Os.clear(),Os.position.set(0,0,0),K1(Os),Os}function iC(n){J1(Os,n)}class sC{constructor(t,e){this.el=t,this.opts=e,t.addEventListener("touchstart",this.handleStart,{passive:!1}),t.addEventListener("touchend",this.handleEnd,{passive:!0}),t.addEventListener("touchmove",this.handleMove,{passive:!0}),t.addEventListener("mousedown",this.handleStart,{passive:!1}),t.addEventListener("mouseup",this.handleEnd,{passive:!0}),t.addEventListener("mouseleave",this.handleEnd,{passive:!0}),t.addEventListener("mousemove",this.handleMove,{passive:!0}),this.speedUp=e.speedUp??1}el;opts;lastPosition=null;speedUp;enabled=!0;isActive=!1;handleStart=t=>{t.preventDefault(),this.lastPosition=this.getPositionFraction(t),this.isActive=!0};handleEnd=()=>{this.lastPosition=null,this.isActive=!1};handleMove=t=>{if(!this.enabled||!this.isActive)return;const e=this.getPositionFraction(t);if(e!=null&&this.lastPosition!=null){const i=(e-this.lastPosition)*this.speedUp;i&&this.opts.onMoveBy?.(i),this.lastPosition=e}};toggle=t=>{this.enabled=t??!this.enabled};shutdown=()=>{this.el.removeEventListener("touchstart",this.handleStart),this.el.removeEventListener("touchend",this.handleEnd),this.el.removeEventListener("touchmove",this.handleMove),this.el.removeEventListener("mousedown",this.handleStart),this.el.removeEventListener("mouseup",this.handleEnd),this.el.removeEventListener("mouseleave",this.handleEnd),this.el.removeEventListener("mousemove",this.handleMove)};getPositionFraction=t=>{const e="touches"in t?t.touches[0]?.clientX:t.clientX;return e!=null?e/this.el.clientWidth:null}}function rC(){qe.clear();const n=hg();qe.add(n),Hf(),dg(n),Hf()}function Hf(){tr();for(let n=0;n<3;n++)Dm(.1),tr()}let Mh,$n=!1,Fo=!1,si;const be={main:yt("main"),canvas:yt("#webglCanvas"),quitBtn:yt("#quitBtn",HTMLButtonElement),shortMessage:yt("#shortMessage"),endRunScreenProgress:yt("#endRunScreen button.progress",HTMLButtonElement),endRunScreenRetry:yt("#endRunScreen button.retry",HTMLButtonElement)};function aC(){tC(be.main),Mg(),Eg(),Mh=new sC(be.canvas,{speedUp:1+Zb/100,onMoveBy:PA}),Jo(),be.quitBtn.addEventListener("click",n=>{$n&&(bh(!0),n.stopImmediatePropagation(),n.stopPropagation(),n.preventDefault(),be.quitBtn.disabled=!0)}),be.endRunScreenProgress.addEventListener("click",uC),be.endRunScreenRetry.addEventListener("click",hC),be.canvas.addEventListener("touchstart",Wf),be.canvas.addEventListener("mousedown",Wf)}function Mg(){rC(),Vm(),oC()}function Jo(){Mh.toggle($n&&!Fo)}function oC(){qe.clear(),qe.background=new Vt(11583696),qe.fog=new ku(qe.background,To-Yr*.2,To);const n=new ev(16777215,12155424,1);qe.add(n);const t=new sv(16777215,3);t.position.set(40,40,20),qe.add(t),t.castShadow=!0,t.shadow.camera.left=-100,t.shadow.camera.right=Yr,t.shadow.camera.top=40,t.shadow.camera.bottom=-40,t.shadow.camera.near=1,t.shadow.camera.far=200,t.shadow.bias=-.01,t.shadow.camera.up=new L(-1,1,0).normalize(),t.shadow.mapSize.set(2048,256),qe.add(Ko),qe.add(ze),qe.add(Ue),qe.add(In),qe.add(Li),qe.add(nC())}function bg(n){const{state:t,params:e}=n;CE(Pw(t,n.type)),eT(),_T();const i=oA({state:t,params:e,onFinish:()=>bh(!0,!0),...n.objects});be.shortMessage.textContent=i.msg,ET(i.gemCount),CA(t,e),hA(),BA(),si=n,$n=!1,Jo(),$s.showingExtents&&(zf(Ue.children),zf(ze.children)),tr(!0)}function Wf(){$n||tT()&&tn("run")}function cC(){be.endRunScreenProgress.disabled=!1,be.endRunScreenRetry.disabled=!1,lC()}function lC(){$n||Aw(si.type),$n=!0,Fo=!1,be.quitBtn.disabled=!1,Jo(),xg(!0)}function bh(n=!1,t=!1){!$n||Fo||(Fo=!0,be.quitBtn.disabled=!0,Jo(),qm(),be.endRunScreenProgress.textContent=si.endButtons?.progress??"Next level",be.endRunScreenRetry.textContent=si.endButtons?.retry??"Play again",be.endRunScreenProgress.classList.toggle("hidden",si.endButtons?.progress===""),be.endRunScreenRetry.classList.toggle("hidden",si.endButtons?.retry===""||t&&!!si.endButtons?.hideRetryOnWin),setTimeout(()=>{Xm(!0,t),setTimeout(()=>{$n=!1,xg(!1)},1e3)},n?0:1e3))}function uC(){be.endRunScreenProgress.disabled=!0,be.endRunScreenRetry.disabled=!0,si.onProgress()}function hC(){be.endRunScreenProgress.disabled=!0,be.endRunScreenRetry.disabled=!0,si.onRetry(bT())}function dC(){const n=Ue.children.length===0;return!n&&ze.children.length===0&&Li.children.length===0?"win":n}let Cr=!1;function Eg(n){if(requestAnimationFrame(Eg),Zs.update(n),!Eu()){if(!Cr&&n!=null){const t=Zs.getDelta();if(Dm(t),lT(),$n){lA(t),iC(t),OA(),LA(t),fA(t),kA(t),MT(t);const e=dC();e&&bh(!1,e==="win")}}tr(),$n&&$s.fpsLogging&&FE(n,`${ze.children.length}: `)}}function fC(){Cr=!Cr,Mh.toggle(!Cr),eC(Cr)}fi("gamePause",fC);const pC="2026-08-14 20:49 (7b950b2)",dn={startBtn:yt("#startBtn",HTMLButtonElement),exitBtn:yt("#exitBtn"),main:yt("main"),body:yt("body"),version:yt("#version")};function mC(){Kw(),bn(dn.version,pC),la(!0),dn.startBtn.addEventListener("click",gC),dn.startBtn.disabled=!1,dn.startBtn.focus(),dn.exitBtn.addEventListener("click",_C),dn.main.addEventListener("fullscreenchange",vC),document.addEventListener("visibilitychange",xC),document.addEventListener("contextmenu",n=>n.preventDefault())}async function gC(){Mg();try{await dn.main.requestFullscreen()}catch{}la(!1),as("mainScreen")&&tn("mainScreen")}async function _C(){la(!0);try{await document.exitFullscreen()}catch{}}function vC(){dn.startBtn.textContent=as("run")?"Resume":"Start",dn.main!==document.fullscreenElement&&la(!0)}function xC(){dn.startBtn.textContent=as("run")?"Resume":"Start",document.visibilityState==="hidden"&&la(!0)}function Eu(){return dn.body.classList.contains("showingSplashScreen")}function la(n){dn.body.classList.toggle("showingSplashScreen",n),n?(as("run")||tn("mainScreen"),sh(dn.exitBtn)):Qw()}mC();
