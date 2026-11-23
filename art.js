// Detailed vector art for Shiny Hunt: original creatures and trainers (no copies of existing characters).
(function(){
const L=(hex,a)=>{const n=parseInt(hex.slice(1),16),c=[n>>16,n>>8&255,n&255].map(v=>Math.max(0,Math.min(255,Math.round(a>0?v+(255-v)*a:v*(1+a)))));return "#"+c.map(v=>v.toString(16).padStart(2,"0")).join("")};
const O="#1d1a24",SW="stroke='"+O+"' stroke-width='2.4' stroke-linejoin='round' stroke-linecap='round'";
let uid=0;
function G(c,id){return `<radialGradient id='${id}' cx='35%' cy='28%' r='75%'><stop offset='0' stop-color='${L(c,.55)}'/><stop offset='.5' stop-color='${c}'/><stop offset='1' stop-color='${L(c,-.38)}'/></radialGradient>`}
function LG(a,b,id){return `<linearGradient id='${id}' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient>`}
function eye(x,y,s,iris,look=0){return `<ellipse cx='${x}' cy='${y}' rx='${s*.78}' ry='${s}' fill='#fff' ${SW}/><ellipse cx='${x+look}' cy='${y+s*.12}' rx='${s*.55}' ry='${s*.7}' fill='${iris}'/><ellipse cx='${x+look}' cy='${y+s*.2}' rx='${s*.3}' ry='${s*.42}' fill='#120f18'/><circle cx='${x+look-s*.22}' cy='${y-s*.25}' r='${s*.22}' fill='#fff'/><circle cx='${x+look+s*.18}' cy='${y+s*.38}' r='${s*.1}' fill='#fff'/>`}
function blush(x,y){return `<ellipse cx='${x}' cy='${y}' rx='5' ry='2.6' fill='#ff7a9a' opacity='.55'/>`}
function shadow(y=110,rx=32){return `<ellipse cx='60' cy='${y}' rx='${rx}' ry='6' fill='#000' opacity='.18'/>`}
function flame(x,y,s,id){return `<path d='M${x} ${y} c${-9*s} ${-6*s} ${-8*s} ${-18*s} ${-2*s} ${-26*s} c${1*s} ${7*s} ${5*s} ${8*s} ${6*s} ${3*s} c${3*s} ${6*s} ${6*s} ${12*s} ${-4*s} ${23*s}z' fill='url(#${id})' ${SW}/><path d='M${x} ${y-3*s} c${-4*s} ${-3*s} ${-4*s} ${-9*s} ${-1*s} ${-13*s} c${1*s} ${4*s} ${4*s} ${5*s} ${3*s} ${8*s}z' fill='#fff2a8' opacity='.85'/>`}
function wrap(defs,body){return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><defs>${defs}</defs>${body}</svg>`).replace(/'/g,"%27")}")`}

// ---------- Partners ----------
function emberdig(st){const u="e"+(uid++);const body="#c46a3c",cream="#f6cf9a";
 let d=G(body,u+"b")+G(cream,u+"c")+LG("#ffe066","#ff4a1a",u+"f");let s=shadow(112,30+st*3);const sc=1+st*.12;
 s+=`<g transform='translate(60 74) scale(${sc}) translate(-60 -74)'>`;
 // crest flames behind head
 if(st>=1)s+=flame(42,44,.8,u+"f")+flame(78,44,.8,u+"f");
 s+=flame(60,40,st===2?1.5:st===1?1.2:.9,u+"f");
 // body
 s+=`<ellipse cx='60' cy='76' rx='31' ry='30' fill='url(#${u}b)' ${SW}/>`;
 if(st===2)s+=`<path d='M40 70 l6 6 l-3 6 M80 66 l-5 7 l4 6 M58 96 l3 -6 l5 3' stroke='#ffb020' stroke-width='2.4' fill='none' stroke-linecap='round'/>`;
 s+=`<ellipse cx='60' cy='86' rx='19' ry='16' fill='url(#${u}c)'/>`;
 // snout
 s+=`<ellipse cx='60' cy='72' rx='11' ry='7.5' fill='${cream}' ${SW}/><ellipse cx='60' cy='68.5' rx='5' ry='3.6' fill='#ff6f8c' ${SW}/><path d='M56 76 q4 3 8 0' fill='none' ${SW}/>`;
 s+=eye(47,60,6.5,"#3b2a1a",.6)+eye(73,60,6.5,"#3b2a1a",-.6)+blush(42,71)+blush(78,71);
 // digging claws
 for(const x of[28,92]){const f=x<60?1:-1;s+=`<ellipse cx='${x}' cy='88' rx='9' ry='8' fill='${cream}' ${SW}/>`;for(let i=0;i<3;i++)s+=`<path d='M${x+f*(-4+i*4)} 94 l${f*-1} 7 l${f*3} -6z' fill='${st?"#ffb020":"#fff6dc"}' ${SW}/>`}
 s+=`<ellipse cx='48' cy='106' rx='9' ry='5' fill='${L(body,-.2)}' ${SW}/><ellipse cx='72' cy='106' rx='9' ry='5' fill='${L(body,-.2)}' ${SW}/>`;
 if(st===2)for(const[x,y]of[[22,40],[98,48],[30,22],[92,26]])s+=`<circle cx='${x}' cy='${y}' r='2.5' fill='#ffd23f'/>`;
 return wrap(d,s+"</g>")}
function driplet(st){const u="d"+(uid++);const top=st===2?"#9aa8c8":"#f4fbff",mid=st===2?"#6f7fa8":"#cfe6fb";
 let d=LG(top,mid,u+"c")+LG("#8fd3ff","#2f7fe0",u+"j");let s=shadow(114,26+st*4);const sc=1+st*.1;
 s+=`<g transform='translate(60 60) scale(${sc}) translate(-60 -60)'>`;
 const n=3+st*2;for(let i=0;i<n;i++){const x=60+(i-(n-1)/2)*(st?7.5:10),len=18+((i*7)%3)*6+st*6;s+=`<path d='M${x-3} 70 q-5 ${len/2} 0 ${len} q2 4 5 0 q4 ${-len/2} 1 ${-len}z' fill='url(#${u}j)' ${SW}/>`}
 s+=`<path d='M30 72 a14 14 0 0 1 6 -26 a18 18 0 0 1 30 -12 a16 16 0 0 1 26 12 a13 13 0 0 1 -2 26 z' fill='url(#${u}c)' ${SW}/>`;
 s+=`<path d='M40 50 a10 10 0 0 1 14 -8' fill='none' stroke='#fff' stroke-width='3' stroke-linecap='round' opacity='.9'/>`;
 s+=eye(50,58,6,"#2a6fd0",.5)+eye(70,58,6,"#2a6fd0",-.5)+blush(43,66)+blush(77,66)+`<path d='M56 66 q4 3.5 8 0' fill='none' ${SW}/>`;
 if(st>=1)for(const[x,y]of[[22,86],[98,80],[30,100]])s+=`<path d='M${x} ${y} q-4 6 0 8 q4 -2 0 -8z' fill='#6fb7ff' ${SW}/>`;
 if(st===2)s+=`<path d='M38 30 l-6 -12 l6 2 l-4 -10' fill='none' stroke='#ffd23f' stroke-width='3' stroke-linejoin='round'/><path d='M82 30 l6 -12 l-6 2 l4 -10' fill='none' stroke='#ffd23f' stroke-width='3' stroke-linejoin='round'/>`;
 return wrap(d,s+"</g>")}
function budbug(st){const u="g"+(uid++);let d=G("#6cc04a",u+"s")+G("#3f8f2f",u+"h")+LG("#c8f08a","#5fb83a",u+"l");let s=shadow(112,30+st*3);const sc=1+st*.12;
 s+=`<g transform='translate(60 72) scale(${sc}) translate(-60 -72)'>`;
 if(st>=1){for(const f of[1,-1])s+=`<path d='M${60-f*24} 70 q${-f*30} -26 ${-f*36} ${st===2?-2:6} q${f*14} 14 ${f*36} 6z' fill='url(#${u}l)' ${SW}/><path d='M${60-f*26} 70 q${-f*16} -10 ${-f*28} -2' fill='none' stroke='#3f8f2f' stroke-width='1.6'/>`}
 for(const x of[40,52,68,80])s+=`<path d='M${x} 96 l${x<60?-4:4} 10' ${SW} fill='none'/>`;
 s+=`<path d='M28 88 q0 -40 32 -40 q32 0 32 40 z' fill='url(#${u}s)' ${SW}/><path d='M60 48 v40' ${SW}/>`;
 for(const[x,y,r]of[[44,66,4],[50,80,3],[74,64,4.5],[70,80,3],[38,82,2.5],[82,80,2.5]])s+=`<circle cx='${x}' cy='${y}' r='${r}' fill='#f7e36a' ${SW}/>`;
 s+=`<ellipse cx='60' cy='90' rx='22' ry='12' fill='url(#${u}h)' ${SW}/>`;
 s+=eye(52,88,4.8,"#1f3a1a",.4)+eye(68,88,4.8,"#1f3a1a",-.4)+`<path d='M57 96 q3 2 6 0' fill='none' ${SW}/>`;
 s+=`<path d='M54 80 q-6 -14 -14 -16' fill='none' ${SW}/><path d='M66 80 q6 -14 14 -16' fill='none' ${SW}/><circle cx='40' cy='64' r='3.4' fill='#a8e07a' ${SW}/><circle cx='80' cy='64' r='3.4' fill='#a8e07a' ${SW}/>`;
 if(st===2)s+=`<g transform='translate(60 52)'>${[0,72,144,216,288].map(a=>`<ellipse rx='5' ry='9' transform='rotate(${a}) translate(0 -8)' fill='#ff9ac0' ${SW}/>`).join("")}<circle r='5' fill='#ffd23f' ${SW}/></g><path d='M60 30 l-4 -14 l4 4 l4 -4 z' fill='#a8e07a' ${SW}/>`;
 return wrap(d,s+"</g>")}

// ---------- Opponents ----------
const FOES={
 rock(){const u="r"+(uid++);let d=G("#a89a80",u);let s=shadow(110,34);
  s+=`<path d='M26 96 l-4 -30 l14 -24 l26 -8 l24 10 l12 24 l-4 28 z' fill='url(#${u})' ${SW}/>`;
  s+=`<path d='M40 50 l8 10 l-4 10 M84 64 l-8 6 l2 10 M56 92 l4 -8 l8 2' fill='none' stroke='${L("#a89a80",-.45)}' stroke-width='2'/>`;
  s+=`<path d='M60 34 l6 -18 l8 16 z' fill='#9ad8ff' ${SW}/><path d='M50 36 l-2 -12 l8 9 z' fill='#c8ecff' ${SW}/>`;
  s+=`<path d='M28 70 q6 -6 12 0 q6 -6 10 0' fill='#5fae4a' ${SW}/><path d='M80 92 q5 -5 10 0' fill='#5fae4a' ${SW}/>`;
  s+=eye(48,72,5.5,"#c0402a",.5)+eye(70,72,5.5,"#c0402a",-.5)+`<path d='M42 63 l12 4 M76 63 l-12 4' ${SW}/><path d='M52 86 q8 -4 16 0' fill='none' ${SW}/>`;return wrap(d,s)},
 fighting(){const u="f"+(uid++);let d=G("#e08a5a",u)+G("#fff2e0",u+"w");let s=shadow(112,30);
  s+=`<ellipse cx='60' cy='76' rx='26' ry='28' fill='url(#${u})' ${SW}/><path d='M38 84 h44' stroke='#2a2a3a' stroke-width='7'/>`;
  s+=`<path d='M36 50 q24 -10 48 0 l-2 7 q-22 -8 -44 0 z' fill='#e23b3b' ${SW}/><path d='M84 52 q12 2 16 12 q-10 -2 -14 -6 M84 54 q10 8 8 18' fill='#e23b3b' ${SW}/>`;
  s+=eye(50,64,5.5,"#5a2a1a",.4)+eye(70,64,5.5,"#5a2a1a",-.4)+`<path d='M44 56 l10 3 M76 56 l-10 3' ${SW}/><path d='M54 76 q6 4 12 0' fill='none' ${SW}/>`;
  for(const x of[24,96])s+=`<circle cx='${x}' cy='78' r='12' fill='url(#${u}w)' ${SW}/><path d='M${x-9} 74 h18 M${x-10} 80 h20' stroke='#d8c8b0' stroke-width='2'/>`;
  s+=`<ellipse cx='48' cy='106' rx='8' ry='5' fill='#b8603a' ${SW}/><ellipse cx='72' cy='106' rx='8' ry='5' fill='#b8603a' ${SW}/>`;return wrap(d,s)},
 electric(){const u="l"+(uid++);let d=LG("#fff07a","#e0a000",u);let s=shadow(112,30);
  s+=`<path d='M88 90 q20 0 18 -16 q-1 -8 8 -8' fill='none' stroke='#6a6f7a' stroke-width='4' stroke-linecap='round'/><rect x='108' y='60' width='8' height='10' rx='2' fill='#9aa0aa' ${SW}/>`;
  s+=`<rect x='30' y='44' width='58' height='62' rx='16' fill='url(#${u})' ${SW}/><rect x='30' y='78' width='58' height='10' fill='#2a2a3a'/><rect x='30' y='44' width='58' height='62' rx='16' fill='none' ${SW}/>`;
  s+=`<rect x='50' y='36' width='18' height='9' rx='3' fill='#c8ccd4' ${SW}/><path d='M59 36 q-2 -12 6 -18 q6 -4 4 -10' fill='none' ${SW}/><path d='M66 6 l-6 8 h6 l-6 9' fill='none' stroke='#6fd0ff' stroke-width='3' stroke-linejoin='round'/>`;
  s+=eye(48,62,6,"#1f6fd0",.5)+eye(70,62,6,"#1f6fd0",-.5)+`<path d='M55 72 q4 3 8 0' fill='none' ${SW}/>`+blush(40,71)+blush(78,71);
  s+=`<rect x='40' y='104' width='10' height='6' rx='2' fill='#6a6f7a' ${SW}/><rect x='68' y='104' width='10' height='6' rx='2' fill='#6a6f7a' ${SW}/>`;return wrap(d,s)},
 fire(){const u="x"+(uid++);let d=LG("#ffe066","#ff3a1a",u)+LG("#ffd23f","#ff8a2a",u+"i");let s=shadow(112,24);
  s+=`<path d='M60 108 c-26 0 -34 -22 -26 -40 c4 8 10 10 12 4 c-6 -16 6 -34 16 -48 c0 14 12 18 16 30 c4 -4 4 -10 2 -16 c14 14 18 32 10 50 c-6 12 -14 20 -30 20z' fill='url(#${u})' ${SW}/>`;
  s+=`<path d='M60 104 c-14 0 -20 -12 -14 -24 c6 6 10 2 10 -6 c8 6 16 14 14 22 c-2 6 -4 8 -10 8z' fill='url(#${u}i)'/>`;
  s+=eye(50,74,5.5,"#7a1a0a",.4)+eye(70,74,5.5,"#7a1a0a",-.4)+`<path d='M54 86 q6 5 12 0' fill='#7a1a0a' ${SW}/>`;
  for(const[x,y,r]of[[24,40,3],[98,30,2.5],[92,58,2],[30,20,2]])s+=`<circle cx='${x}' cy='${y}' r='${r}' fill='#ffb020'/>`;return wrap(d,s)},
 normal(){const u="n"+(uid++);let d=G("#f2e6d4",u)+G("#c9a8e8",u+"e");let s=shadow(112,30);
  s+=`<path d='M86 92 q22 -2 18 -22 q-2 -10 -10 -8 q8 6 0 14 q-6 6 -8 4' fill='url(#${u})' ${SW}/>`;
  for(const f of[1,-1])s+=`<path d='M${60-f*18} 50 q${-f*20} -24 ${-f*28} -8 q${-f*2} 16 ${f*14} 24z' fill='url(#${u}e)' ${SW}/>`;
  s+=`<circle cx='60' cy='78' r='30' fill='url(#${u})' ${SW}/><path d='M54 50 l6 8 l6 -8' fill='#b58a5a' ${SW}/>`;
  s+=eye(49,72,6,"#6a4a9a",.5)+eye(71,72,6,"#6a4a9a",-.5)+blush(41,82)+blush(79,82)+`<path d='M57 84 q3 3 6 0' fill='none' ${SW}/><ellipse cx='60' cy='80' rx='2.6' ry='2' fill='#ff8fb0'/>`;
  s+=`<ellipse cx='46' cy='106' rx='8' ry='5' fill='#d8c8b4' ${SW}/><ellipse cx='74' cy='106' rx='8' ry='5' fill='#d8c8b4' ${SW}/>`;return wrap(d,s)},
 flying(){const u="y"+(uid++);let d=G("#8a6ad8",u)+G("#d8ccff",u+"b");let s=shadow(114,26);
  for(const f of[1,-1])s+=`<path d='M${60-f*20} 70 q${-f*30} -22 ${-f*40} -6 q${f*6} 2 ${f*4} 8 q${f*8} 0 ${f*6} 8 q${f*10} 0 ${f*30} -4z' fill='url(#${u})' ${SW}/>`;
  s+=`<path d='M50 96 l-6 14 l8 -4 l4 8 l4 -8 l8 4 l-6 -14z' fill='#6a4ab8' ${SW}/>`;
  s+=`<ellipse cx='60' cy='74' rx='24' ry='26' fill='url(#${u})' ${SW}/><ellipse cx='60' cy='84' rx='14' ry='14' fill='url(#${u}b)'/>`;
  s+=`<path d='M56 50 q-6 -18 4 -24 q-2 10 4 14 q2 -12 12 -12 q-8 8 -6 22' fill='#ff5a7a' ${SW}/>`;
  s+=eye(51,66,5.5,"#3a2a6a",.5)+eye(69,66,5.5,"#3a2a6a",-.5)+`<path d='M54 74 l6 8 l6 -8 z' fill='#ffb43a' ${SW}/>`;
  s+=`<path d='M50 98 v10 M70 98 v10 M46 108 h8 M66 108 h8' stroke='#ffb43a' stroke-width='3' stroke-linecap='round'/>`;return wrap(d,s)},
 psychic(){const u="p"+(uid++);let d=LG("#ffc4e4","#c0408f",u);let s=shadow(114,20);
  s+=`<ellipse cx='60' cy='62' rx='44' ry='12' fill='none' stroke='#ffd23f' stroke-width='3' opacity='.85' transform='rotate(-14 60 62)'/>`;
  s+=`<path d='M60 14 l30 40 l-30 50 l-30 -50 z' fill='url(#${u})' ${SW}/><path d='M60 14 l-12 40 l12 50 M30 54 h60' fill='none' stroke='${L("#c0408f",-.2)}' stroke-width='1.6' opacity='.7'/>`;
  s+=`<path d='M44 32 l-6 10' stroke='#fff' stroke-width='3' stroke-linecap='round' opacity='.85'/>`;
  s+=eye(60,56,10,"#7a2aa8",0);
  s+=`<ellipse cx='60' cy='62' rx='44' ry='12' fill='none' stroke='#ffd23f' stroke-width='3' stroke-dasharray='40 200' transform='rotate(-14 60 62)'/><circle cx='22' cy='40' r='4' fill='#ff9ad8' ${SW}/><circle cx='98' cy='82' r='3' fill='#ff9ad8' ${SW}/>`;return wrap(d,s)},
 water(){const u="w"+(uid++);let d=G("#3fb8c8",u)+G("#c8f4f6",u+"b");let s=shadow(112,32);
  s+=`<path d='M86 66 l20 -16 q-2 16 0 32 z' fill='#1f7f9a' ${SW}/>`;
  s+=`<path d='M18 68 q10 -32 46 -32 q26 0 30 30 q-4 30 -30 30 q-36 0 -46 -28z' fill='url(#${u})' ${SW}/><path d='M26 76 q20 16 50 10 q-10 10 -24 10 q-18 0 -26 -20z' fill='url(#${u}b)'/>`;
  s+=`<path d='M52 36 q8 -16 22 -10 q-6 6 -4 14' fill='#1f7f9a' ${SW}/><path d='M50 92 q4 12 -6 16 q4 -8 0 -14' fill='#1f7f9a' ${SW}/>`;
  for(const[x,y]of[[58,56],[66,64],[74,56],[66,48],[82,64],[74,72]])s+=`<path d='M${x-3} ${y} q3 3 6 0' fill='none' stroke='${L("#3fb8c8",-.3)}' stroke-width='1.6'/>`;
  s+=eye(36,60,6,"#0f2f4a",-.6)+`<path d='M22 72 q4 2 8 0' fill='none' ${SW}/>`+blush(32,70);
  for(const[x,y,r]of[[16,40,4],[24,28,2.5],[12,24,2]])s+=`<circle cx='${x}' cy='${y}' r='${r}' fill='#c8f4f6' ${SW}/>`;return wrap(d,s)},
 dragon(){const u="z"+(uid++);let d=G("#7a4ae0",u)+G("#e8d8ff",u+"b")+G("#ffd23f",u+"h");let s=shadow(112,30);
  s+=`<path d='M78 96 q26 6 32 -14 l-6 2 l2 -8 q-6 14 -26 12' fill='url(#${u})' ${SW}/>`;
  for(const f of[1,-1])s+=`<path d='M${60-f*16} 64 l${-f*34} -26 l${f*6} 14 l${-f*10} 2 l${f*10} 10 l${-f*6} 4 l${f*28} 8z' fill='#5a2ab8' ${SW}/>`;
  s+=`<ellipse cx='60' cy='82' rx='22' ry='24' fill='url(#${u})' ${SW}/><ellipse cx='60' cy='88' rx='13' ry='16' fill='url(#${u}b)'/><path d='M50 84 h20 M49 92 h22 M51 100 h18' stroke='#b8a0e8' stroke-width='1.6'/>`;
  s+=`<circle cx='60' cy='50' r='20' fill='url(#${u})' ${SW}/><path d='M46 36 q-6 -14 -16 -16 q8 8 8 20z M74 36 q6 -14 16 -16 q-8 8 -8 20z' fill='url(#${u}h)' ${SW}/>`;
  s+=eye(52,50,5.5,"#ffb020",.4)+eye(68,50,5.5,"#ffb020",-.4)+`<path d='M54 60 q6 4 12 0' fill='none' ${SW}/><path d='M56 61 l1.5 3 l1.5 -2.6 M64 61 l-1.5 3 l-1.5 -2.6' fill='#fff' stroke='${O}' stroke-width='1'/>`;
  s+=`<ellipse cx='48' cy='106' rx='8' ry='5' fill='#5a2ab8' ${SW}/><ellipse cx='72' cy='106' rx='8' ry='5' fill='#5a2ab8' ${SW}/>`;return wrap(d,s)}
};

// ---------- Trainers ----------
function trainer(o){const u="t"+(uid++);let d=LG(L(o.jacket,.25),L(o.jacket,-.25),u+"j")+LG(L(o.hair,.2),L(o.hair,-.3),u+"h");let s=shadow(114,22);const skin=o.skin||"#f2c29a";
 s+=`<rect x='46' y='92' width='10' height='18' rx='3' fill='${o.pants||"#2f3a5a"}' ${SW}/><rect x='64' y='92' width='10' height='18' rx='3' fill='${o.pants||"#2f3a5a"}' ${SW}/>`;
 s+=`<ellipse cx='50' cy='111' rx='8' ry='4' fill='#3a2a20' ${SW}/><ellipse cx='70' cy='111' rx='8' ry='4' fill='#3a2a20' ${SW}/>`;
 if(o.style===0)s+=`<rect x='38' y='62' width='44' height='30' rx='8' fill='#5a4a3a' ${SW}/>`;
 s+=`<path d='M40 66 q20 -10 40 0 l4 28 h-48z' fill='url(#${u}j)' ${SW}/><path d='M60 64 v30' stroke='${L(o.jacket,-.4)}' stroke-width='2'/>`;
 s+=`<rect x='32' y='68' width='9' height='22' rx='4' fill='url(#${u}j)' ${SW}/><rect x='79' y='68' width='9' height='22' rx='4' fill='url(#${u}j)' ${SW}/><circle cx='36' cy='92' r='4.5' fill='${skin}' ${SW}/><circle cx='84' cy='92' r='4.5' fill='${skin}' ${SW}/>`;
 s+=`<path d='M44 64 q16 8 32 0 l-2 6 q-14 6 -28 0z' fill='${o.accent}' ${SW}/>`;
 s+=`<circle cx='60' cy='44' r='19' fill='${skin}' ${SW}/>`;
 if(o.style===0)s+=`<path d='M40 42 q0 -20 20 -20 q20 0 20 20 q-20 -6 -40 0z' fill='url(#${u}h)' ${SW}/><path d='M40 42 q20 -6 40 0' fill='none' stroke='#fff' stroke-width='3' opacity='.7'/><circle cx='60' cy='20' r='5' fill='${o.accent}' ${SW}/>`;
 else if(o.style===1)s+=`<path d='M40 46 l-4 -12 l8 2 l-2 -12 l10 6 l4 -12 l6 10 l8 -8 l0 12 l10 -2 l-6 12 l4 6 q-20 -14 -38 0z' fill='url(#${u}h)' ${SW}/>`;
 else s+=`<path d='M40 50 q-4 -28 20 -28 q24 0 20 28 q-4 -14 -20 -16 q-16 2 -20 16z' fill='url(#${u}h)' ${SW}/><path d='M78 40 q12 8 6 26 q-4 -10 -8 -14' fill='url(#${u}h)' ${SW}/>`;
 s+=eye(53,46,3.6,"#3a2a1a",0)+eye(67,46,3.6,"#3a2a1a",0)+`<path d='M57 55 q3 2 6 0' fill='none' ${SW}/>`+blush(48,52)+blush(72,52);
 return wrap(d,s)}

const P={fire:emberdig,water:driplet,grass:budbug};
window.ART={creature:(t,st)=>P[t](st),foe:t=>(FOES[t]||FOES.normal)(),trainer};
})();
