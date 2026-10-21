const OLD_WORDS=[
["serendipity","/ˌsɛrənˈdɪpɪti/","اسم","خوش‌اقبالی ناگهانی","کشف اتفاقی چیزی خوب و ارزشمند، بدون اینکه دنبالش گشته باشید.","Meeting her there was pure serendipity."],
["ephemeral","/ɪˈfɛmərəl/","صفت","زودگذر","چیزی که فقط مدتی بسیار کوتاه دوام می‌آورد.","The beauty of cherry blossoms is ephemeral."],
["resilient","/rɪˈzɪliənt/","صفت","تاب‌آور","توانایی برگشتن به حالت اول پس از سختی و فشار.","Children are often remarkably resilient."],
["eloquent","/ˈɛləkwənt/","صفت","شیوا، سخنور","روان، مؤثر و زیبا سخن گفتن یا نوشتن.","She gave an eloquent speech."],
["nostalgia","/nɒˈstældʒə/","اسم","دلتنگی برای گذشته","احساس شیرین و غمگین نسبت به روزهای گذشته.","The old song filled him with nostalgia."],
["curiosity","/ˌkjʊəriˈɒsɪti/","اسم","کنجکاوی","میل شدید به دانستن و یاد گرفتن چیزهای تازه.","Curiosity led her to open the door."],
["harmony","/ˈhɑːrməni/","اسم","هماهنگی، همنوایی","حالتی که اجزا یا آدم‌ها در کنار هم آرام و بی‌تضاد باشند.","They lived together in harmony."],
["wanderlust","/ˈwɒndərlʌst/","اسم","شوق سفر","میل شدید به گشتن و دیدن جاهای تازه.","Her wanderlust took her to forty countries."],
["luminous","/ˈluːmɪnəs/","صفت","درخشان","روشن و نورانی، به‌ویژه در تاریکی.","The moon was luminous over the lake."],
["tenacity","/təˈnæsɪti/","اسم","پایداری، سخت‌کوشی","اصرار بر ادامه دادن و دست نکشیدن از هدف.","His tenacity finally paid off."],
["solitude","/ˈsɒlɪtjuːd/","اسم","خلوت","حالت تنها بودن، به‌ویژه وقتی خوشایند و آرام باشد.","He found peace in solitude."],
["ambiguous","/æmˈbɪɡjuəs/","صفت","مبهم","چیزی که بیش از یک معنی دارد یا روشن نیست.","The ending of the film was ambiguous."],
["benevolent","/bəˈnɛvələnt/","صفت","نیکوکار","مهربان و دوست‌دار کمک به دیگران.","A benevolent teacher helped him study."],
["catalyst","/ˈkætəlɪst/","اسم","کاتالیزور، برانگیزنده","عاملی که باعث شروع یا شتاب گرفتن یک تغییر می‌شود.","The speech was a catalyst for reform."],
["diligent","/ˈdɪlɪdʒənt/","صفت","پرتلاش","با دقت و کوشش مداوم کار کردن.","A diligent student reviews every day."],
["euphoria","/juːˈfɔːriə/","اسم","سرخوشی","احساس شادی و هیجان بسیار شدید.","The team was in euphoria after the win."],
["horizon","/həˈraɪzn/","اسم","افق","خطی که آسمان و زمین به نظر می‌رسد به هم می‌رسند؛ مرز دید و دانش.","The sun sank below the horizon."],
["mellifluous","/məˈlɪfluəs/","صفت","دل‌نشین، شیرین‌آوا","صدا یا موسیقی نرم، خوش‌آهنگ و گوش‌نواز.","Her mellifluous voice calmed the room."],
["pragmatic","/præɡˈmætɪk/","صفت","عمل‌گرا","بیشتر به نتیجه واقعی توجه دارد تا نظریه.","We need a pragmatic solution."],
["whimsical","/ˈwɪmzɪkəl/","صفت","هوس‌انگیز، شوخ‌طبع","عجیب و بازیگوشانه، به شکلی دوست‌داشتنی.","The garden had a whimsical design."]
];
const WORDS=[
["home","/hoʊm/","اسم","خانه","جایی که در آن زندگی می‌کنید و احساس راحتی دارید.","I want to go home.","The place where you live."],
["water","/ˈwɔːtər/","اسم","آب","مایع بی‌رنگ که می‌نوشیم و با آن می‌شوییم.","Can I have a glass of water?","The clear liquid we drink and wash with."],
["friend","/frɛnd/","اسم","دوست","کسی که دوستش دارید و با او وقت می‌گذرانید.","She is my best friend.","A person you like and enjoy spending time with."],
["family","/ˈfæmɪli/","اسم","خانواده","پدر، مادر، فرزندان و خویشاوندان یک نفر.","My family lives in Tehran.","Parents, children and close relatives."],
["love","/lʌv/","فعل","دوست داشتن، عاشق بودن","احساس محبت عمیق نسبت به کسی یا چیزی.","I love my mother.","To feel deep affection for someone or something."],
["eat","/iːt/","فعل","خوردن","غذا را در دهان گذاشتن و فرو دادن.","We eat dinner at eight.","To put food in your mouth and swallow it."],
["sleep","/sliːp/","فعل","خوابیدن","چشم‌ها را بستن و استراحت کردن در شب.","I need to sleep early tonight.","To rest with your eyes closed, usually at night."],
["work","/wɜːrk/","فعل","کار کردن","برای درآمد یا هدفی فعالیت کردن.","I work in a bank.","To do a job or put effort into something."],
["happy","/ˈhæpi/","صفت","خوشحال","حس شادی و رضایت داشتن.","I am happy to see you.","Feeling joy and satisfaction."],
["tired","/ˈtaɪərd/","صفت","خسته","نیاز به استراحت یا خواب داشتن.","I'm tired after the trip.","Needing rest or sleep."],
["hungry","/ˈhʌŋɡri/","صفت","گرسنه","دلتان غذا می‌خواهد.","Are you hungry?","Wanting to eat food."],
["beautiful","/ˈbjuːtɪfəl/","صفت","زیبا","دیدنش یا شنیدنش لذت‌بخش است.","What a beautiful day!","Very pleasing to see or hear."],
["time","/taɪm/","اسم","زمان، وقت","ساعت و دقیقه، یا مدتی که چیزی طول می‌کشد.","Do you have time today?","Hours and minutes; how long something takes."],
["money","/ˈmʌni/","اسم","پول","چیزی که با آن خرید و فروش می‌کنیم.","I don't have much money.","What we use to buy and sell things."],
["food","/fuːd/","اسم","غذا","هر چیزی که می‌خوریم تا زنده بمانیم.","The food here is great.","Anything we eat to stay alive."],
["weather","/ˈwɛðər/","اسم","آب‌وهوا","حالت هوا، مثل گرم، سرد، بارانی یا آفتابی.","The weather is nice today.","How hot, cold, rainy or sunny it is outside."],
["help","/hɛlp/","فعل","کمک کردن","کاری کردن که انجام کار برای کسی راحت‌تر شود.","Can you help me, please?","To make something easier for someone."],
["learn","/lɜːrn/","فعل","یاد گرفتن","دانش یا مهارت تازه به دست آوردن.","I want to learn English.","To gain new knowledge or skill."],
["buy","/baɪ/","فعل","خریدن","چیزی را با پول به دست آوردن.","I need to buy some bread.","To get something by paying money."],
["travel","/ˈtrævəl/","فعل","سفر کردن","از جایی به جای دیگر، معمولاً دور، رفتن.","We travel every summer.","To go from one place to another, often far away."],
["busy","/ˈbɪzi/","صفت","مشغول","کار زیاد دارید و وقت آزاد ندارید.","Sorry, I'm busy right now.","Having a lot to do; not free."],
["easy","/ˈiːzi/","صفت","آسان","انجام دادنش سخت نیست.","This test is easy.","Not difficult to do or understand."],
["delicious","/dɪˈlɪʃəs/","صفت","خوشمزه","مزه‌ی بسیار خوبی دارد.","This soup is delicious.","Tasting very good."],
["morning","/ˈmɔːrnɪŋ/","اسم","صبح","اول روز، از طلوع آفتاب تا ظهر.","Good morning!","The early part of the day, until noon."]
];
const $=id=>document.getElementById(id);
const ring=$('ring'),scene=$('scene'),stage=$('stage');
let list=WORDS.slice(),rot=0,cur=0,step=18,auto=null;

function esc(s){return s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}
function build(){
  ring.innerHTML='';
  const n=list.length;
  if(!n){ring.innerHTML='';$('count').textContent='';stage.insertAdjacentHTML('beforeend','<div class="empty" id="emp">واژه‌ای پیدا نشد. املای دیگری را امتحان کنید.</div>');return}
  const e=document.getElementById('emp');if(e)e.remove();
  step=360/n;
  const W=240,R=n>1?Math.max(W/2/Math.tan(Math.PI/n)+14,n<5?220:0):0;
  const narrow=window.innerWidth<520?0.82:1;
  scene.style.setProperty('--s',narrow);
  list.forEach((w,i)=>{
    const c=document.createElement('div');c.className='card';
    c.style.transform=`rotateY(${i*step}deg) translateZ(${R}px)`;
    c.innerHTML=`<div class="flip">
      <div class="face"><div><div class="en">${esc(w[0])}</div><div class="ph">${esc(w[1])}</div></div><div><span class="pos">${w[2]}</span><div class="fa" style="margin-top:10px">${w[3]}</div></div></div>
      <div class="face back"><span class="pos">${w[2]}</span><p class="def">${w[4]}</p><p class="ltr" style="margin:0;font-size:13px;line-height:1.5;color:var(--card-muted)">${ED[w[0]]}</p><p class="ex">${esc(w[5])}</p></div></div>`;
    c.addEventListener('click',()=>{ if(drag.moved)return; if(i===cur)c.classList.toggle('open'); else go(i); stopAuto();});
    ring.appendChild(c);
  });
  ring.dataset.r=R;
  cur=Math.min(cur,n-1);go(cur,true);
}
function paint(){
  const n=list.length;if(!n)return;
  ring.style.transform=`translateZ(${-ring.dataset.r}px) rotateY(${-rot}deg)`;
  [...ring.children].forEach((c,i)=>{
    let d=Math.abs(((rot-i*step)%360+540)%360-180);d=180-d; // 0 = front
    c.style.opacity=Math.max(.12,1-d/110);
    c.style.pointerEvents=d<95?'auto':'none';
  });
  const idx=((Math.round(rot/step)%n)+n)%n;
  $('count').textContent=(idx+1)+' از '+n;
}
function go(i,instant){
  const n=list.length;if(!n)return;
  const base=Math.round(rot/step);const cIdx=((base%n)+n)%n;
  let diff=i-cIdx;if(diff>n/2)diff-=n;if(diff<-n/2)diff+=n;
  const prev=cur;cur=((i%n)+n)%n;
  if(prev!==cur)[...ring.children].forEach(c=>c.classList.remove('open'));
  rot=(base+diff)*step;
  ring.style.transition=instant?'none':'';
  paint();
  if(instant)requestAnimationFrame(()=>ring.style.transition='');
}
const drag={on:false,x:0,r:0,moved:false};
stage.addEventListener('pointerdown',e=>{drag.on=true;drag.x=e.clientX;drag.r=rot;drag.moved=false;stopAuto()});
window.addEventListener('pointermove',e=>{
  const rect=stage.getBoundingClientRect();
  const nx=(e.clientX-rect.left)/rect.width-.5,ny=(e.clientY-rect.top)/rect.height-.5;
  if(!matchMedia('(prefers-reduced-motion:reduce)').matches)scene.style.transform=`scale(${scene.style.getPropertyValue('--s')||1}) rotateX(${(-ny*10).toFixed(1)}deg) rotateY(${(nx*8).toFixed(1)}deg)`;
  if(!drag.on)return;
  const dx=e.clientX-drag.x;if(Math.abs(dx)>5)drag.moved=true;
  if(drag.moved){ring.style.transition='none';rot=drag.r-dx*0.35;paint()}
});
window.addEventListener('pointerup',()=>{
  if(!drag.on)return;drag.on=false;
  if(drag.moved){ring.style.transition='';const n=list.length;const i=Math.round(rot/step);cur=((i%n)+n)%n;rot=i*step;
    [...ring.children].forEach(c=>c.classList.remove('open'));paint();setTimeout(()=>drag.moved=false,0)}
});
function stopAuto(){if(auto){clearInterval(auto);auto=null}}
$('next').onclick=()=>{stopAuto();go(cur+1)};
$('prev').onclick=()=>{stopAuto();go(cur-1)};
stage.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'){go(cur-1);stopAuto()}
  else if(e.key==='ArrowLeft'){go(cur+1);stopAuto()}
  else if(e.key==='Enter'||e.key===' '){e.preventDefault();ring.children[cur]&&ring.children[cur].classList.toggle('open')}
});
$('q').addEventListener('input',e=>{
  stopAuto();
  const t=e.target.value.trim().toLowerCase();
  list=t?WORDS.filter(w=>w[0].includes(t)||w[3].includes(t)||w[4].includes(t)||(ED[w[0]]||'').toLowerCase().includes(t)):WORDS.slice();
  cur=0;rot=0;build();
});
$('theme').onclick=()=>{
  const r=document.documentElement;
  const dark=r.dataset.theme?r.dataset.theme==='dark':!matchMedia('(prefers-color-scheme:light)').matches;
  r.dataset.theme=dark?'light':'dark';
};
const ED={serendipity:"Finding something good by happy accident, without looking for it.",ephemeral:"Lasting for a very short time.",resilient:"Able to recover quickly after hardship or pressure.",eloquent:"Speaking or writing fluently, clearly and persuasively.",nostalgia:"A sweet, wistful longing for the past.",curiosity:"A strong desire to know or learn something new.",harmony:"A state where things or people fit together peacefully.",wanderlust:"A strong desire to travel and explore.",luminous:"Full of light; bright and glowing.",tenacity:"Determination to keep going and not give up.",solitude:"The state of being alone, especially when peaceful.",ambiguous:"Having more than one possible meaning; unclear.",benevolent:"Kind, caring and eager to help others.",catalyst:"Something that starts or speeds up change.",diligent:"Working carefully and steadily with effort.",euphoria:"A feeling of intense happiness and excitement.",horizon:"The line where earth and sky seem to meet.",mellifluous:"Sweet, smooth and pleasant to hear.",pragmatic:"Focused on practical results rather than theory.",whimsical:"Playfully odd or fanciful, in a charming way."};
Object.assign(ED,Object.fromEntries(WORDS.map(w=>[w[0],w[6]])));
const TR=[[/^.*چرخ واژه‌ها$/,'Word wheel'],[/^.*آزمون ۱۰تایی$/,'10-question quiz'],[/^.*فلش‌کارت$/,'Flashcards'],[/^.*بازی حافظه$/,'Memory game'],
[/^واژه‌ها را بچرخانید.*$/,'Spin the words, tap a card to see its meaning.'],[/^کشیدن با موس.*$/,'Drag with mouse or finger · ← → keys · Enter flips the card'],
[/^‹ بعدی$/,'Next'],[/^قبلی ›$/,'Previous'],[/^(\d+) از (\d+)$/,'$1 of $2'],[/^سؤال (\d+) از (\d+)$/,'Question $1 of $2'],[/^امتیاز (\d+) · 🔥(\d+)$/,'Score $1 · 🔥$2'],
[/^پایان آزمون$/,'Quiz finished'],[/^بهترین امتیاز شما: (\d+)$/,'Your best score: $1'],[/^(یک دور دیگر|از نو|بازی تازه)$/,'Play again'],
[/^یاد گرفته‌ام: (\d+) از (\d+)$/,'Learned: $1 of $2'],[/^مانده: (\d+)$/,'Left: $1'],[/^همه را یاد گرفتید 🎉$/,'You learned them all!'],[/^برای دیدن معنی بزنید$/,'Tap to see the meaning'],
[/^هنوز نه$/,'Not yet'],[/^بلدم ✓$/,'Got it ✓'],[/^حرکت‌ها: (\d+)$/,'Moves: $1'],[/^جفت‌ها: (\d+) از 6$/,'Pairs: $1 of 6'],[/^آفرین! با (\d+) حرکت$/,'Well done! $1 moves'],
[/^هر واژه انگلیسی.*$/,'Match each English word with its Persian meaning.'],[/^واژه‌ای پیدا نشد.*$/,'No word found. Try another spelling.'],[/^اسم$/,'noun'],[/^صفت$/,'adjective']];
TR.push([/^فعل$/,'verb']);
function bilingual(){const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){
  const v=n.nodeValue;if(v.endsWith('\u200b')||!v.trim()||/^(SCRIPT|STYLE)$/.test(n.parentNode.tagName))continue;
  const t=v.trim();for(const [r,en] of TR){if(r.test(t)){n.nodeValue=t+' · '+t.replace(r,en)+'\u200b';break}}}}
new MutationObserver(bilingual).observe(document.body,{childList:true,subtree:true,characterData:true});
$('q').placeholder='جستجو · Search: happy / «شادی»';document.title='واژه‌گردون · WordWheel';bilingual();
const G=$('game'),rnd=a=>a.slice().sort(()=>Math.random()-.5);
const best=(k,v)=>{try{if(v!=null&&v>(+localStorage.getItem(k)||0))localStorage.setItem(k,v);return +localStorage.getItem(k)||0}catch(e){return v||0}};
const say=t=>{try{speechSynthesis.cancel();speechSynthesis.speak(Object.assign(new SpeechSynthesisUtterance(t),{lang:'en-US'}))}catch(e){}};
function tab(t){stopAuto();document.querySelectorAll('.home').forEach(e=>e.style.display=t==='home'?'':'none');G.hidden=t==='home';
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('on',b.dataset.t===t));({quiz,cards,memory})[t]&&({quiz,cards,memory})[t]()}
$('tabs').onclick=e=>{const b=e.target.closest('[data-t]');if(b)tab(b.dataset.t)};
function quiz(){let qs=rnd(WORDS).slice(0,10),i=0,s=0,st=0;
  const draw=()=>{
    if(i>=qs.length){const b=best('wq',s);G.innerHTML=`<div class="panel"><h2>پایان آزمون</h2><p class="big">${s} از ${qs.length}</p><p>بهترین امتیاز شما: ${b}</p><button class="go" id="again">یک دور دیگر</button></div>`;$('again').onclick=quiz;return}
    const w=qs[i],en=i%2===0,opts=rnd([w,...rnd(WORDS.filter(x=>x!==w)).slice(0,3)]);
    G.innerHTML=`<div class="panel"><div class="meter"><span>سؤال ${i+1} از ${qs.length}</span><span>امتیاز ${s} · 🔥${st}</span></div><div class="q ${en?'ltr':''}">${en?w[0]:w[3]}</div>${opts.map((o,k)=>`<button class="opt ${en?'':'ltr'}" data-k="${k}">${en?o[3]:o[0]}</button>`).join('')}</div>`;
    const bs=[...G.querySelectorAll('.opt')];
    bs.forEach((b,k)=>b.onclick=()=>{const ok=opts[k]===w;bs.forEach((x,j)=>{x.disabled=true;if(opts[j]===w)x.classList.add('good')});if(ok){s++;st++}else{b.classList.add('bad');st=0}i++;setTimeout(draw,950)})};
  draw()}
function cards(){let deck=rnd(WORDS),known=0,total=deck.length,open=false;
  const draw=()=>{
    if(!deck.length){G.innerHTML='<div class="panel"><h2>همه را یاد گرفتید 🎉</h2><button class="go" id="again">از نو</button></div>';$('again').onclick=cards;return}
    const w=deck[0];
    G.innerHTML=`<div class="panel"><div class="meter"><span>یاد گرفته‌ام: ${known} از ${total}</span><span>مانده: ${deck.length}</span></div><div class="fc" id="fc"><button class="spk" id="spk" aria-label="تلفظ">🔊</button><div class="en ltr">${w[0]}</div><div class="ph">${w[1]}</div>${open?`<div class="fa">${w[3]}</div><p class="def">${w[4]}</p><p class="ltr" style="margin:6px 0;font-size:14px;color:var(--card-muted)">${ED[w[0]]}</p><p class="ex">${w[5]}</p>`:'<p class="def">برای دیدن معنی بزنید</p>'}</div>${open?'<div class="row"><button class="go no" id="no">هنوز نه</button><button class="go" id="yes">بلدم ✓</button></div>':''}</div>`;
    $('spk').onclick=e=>{e.stopPropagation();say(w[0])};$('fc').onclick=()=>{open=true;draw()};
    if(open){$('yes').onclick=()=>{deck.shift();known++;open=false;draw()};$('no').onclick=()=>{deck.push(deck.shift());open=false;draw()}}};
  draw()}
function memory(){let ws=rnd(WORDS).slice(0,6),t=[];ws.forEach((w,i)=>t.push({i,txt:w[0],l:1},{i,txt:w[3]}));t=rnd(t);let pick=[],moves=0,done=0,lock=false;
  const draw=()=>{
    G.innerHTML=`<div class="panel"><div class="meter"><span>حرکت‌ها: ${moves}</span><span>جفت‌ها: ${done} از 6</span></div><div class="grid">${t.map((x,k)=>{const u=x.up||x.ok;return `<button class="tile ${u?'up':''} ${x.ok?'ok':''} ${x.l?'ltr':''}" data-k="${k}">${u?x.txt:'?'}</button>`}).join('')}</div>${done===6?`<p class="big">آفرین! با ${moves} حرکت</p><button class="go" id="again">بازی تازه</button>`:'<p class="hint">هر واژه انگلیسی را با معنی فارسی‌اش جفت کنید.</p>'}</div>`;
    if(done===6)$('again').onclick=memory;
    G.querySelectorAll('.tile').forEach(b=>b.onclick=()=>{const x=t[+b.dataset.k];if(lock||x.up||x.ok)return;x.up=1;pick.push(x);
      if(pick.length===2){moves++;lock=true;setTimeout(()=>{if(pick[0].i===pick[1].i){pick.forEach(p=>p.ok=1);done++}pick.forEach(p=>p.up=0);pick=[];lock=false;draw()},750)}draw()})};
  draw()}
window.addEventListener('resize',()=>{const s=window.innerWidth<520?.82:1;scene.style.setProperty('--s',s)});
build();
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)auto=setInterval(()=>go(cur+1),3800);
