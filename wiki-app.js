(() => {
  'use strict';
  const lessons=window.LESSON, readings=window.READING_SECTIONS, wiki=window.WIKI, course=window.COURSE, sources=window.SOURCES;
  const deck='https://docs.google.com/presentation/d/1zVq-5TW5P-lT14nweOT85ExGQ2ZSPAABJhpa4e_bNwQ/edit';
  const byId=id=>document.getElementById(id);
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pad=n=>String(n).padStart(2,'0');
  const plain=s=>s.replace(/<[^>]*>/g,' ');
  const normalize=s=>s.toLocaleLowerCase('he').replace(/[\u0591-\u05C7]/g,'').trim();
  const groups=items=>[...new Set(items.map(s=>s.group))];
  const termById=id=>wiki.find(t=>t.id===id);
  const sectionFromSlide=n=>readings.find(s=>s.sourceSlides.includes(Number(n)));
  let current=null,origin='intro',activeTerm=null,navMode='slides',pageType='home';
  const termHref=id=>`#term-${id}?from=${origin}`;
  const slideUrl=n=>`${deck}?slide=id.${lessons[n-1].slide}#slide=id.${lessons[n-1].slide}`;
  const normalizedOrigin=value=>value==='course'?'course':sectionFromSlide(value)?.n||'intro';
  function backContext(){const s=sectionFromSlide(origin);return s?{href:`#slide-${s.n}`,label:s.short||s.title}:origin==='course'?{href:'#course',label:'סילבוס ומטלה'}:{href:'#lesson-intro',label:'שיעור מבוא'};}
  function sourcesHtml(refs){return refs?.length?`<section class="sources"><h2>מקורות וקריאה נוספת</h2><ul>${refs.map(key=>{const r=sources[key];return `<li><a href="${r.url}" target="_blank" rel="noopener" dir="auto">${esc(r.title)} ↗</a>${r.note?`<span class="source-description">${esc(r.note)}</span>`:''}</li>`;}).join('')}</ul></section>`:'';}
  function relatedHtml(terms,label='מושגים להעמקה'){return terms.length?`<section class="term-links"><h2>${label}</h2><div>${terms.map(t=>`<a href="${termHref(t.id)}" title="${esc(t.definition)}">${esc(t.title)} <span aria-hidden="true">↗</span></a>`).join('')}</div></section>`:'';}
  function toc(query=''){
    const q=normalize(query);
    const sm=readings.filter(s=>normalize(`${s.n} ${s.sourceSlides.join(' ')} ${s.title} ${s.short||''} ${s.en} ${s.lead} ${plain(s.body)}`).includes(q));
    const tm=wiki.filter(t=>normalize(`${t.title} ${t.en} ${t.aliases.join(' ')} ${t.definition} ${plain(t.body)}`).includes(q));
    let html='';
    if(q){const cm=course.sections.filter(s=>normalize(`${s.label} ${s.search}`).includes(q));if(cm.length)html+=`<div class="toc-group"><h2>מידע על הקורס</h2>${cm.map(s=>`<a class="toc-link" href="#course-${s.id}">${esc(s.label)}</a>`).join('')}</div>`;}
    if(navMode==='terms'||q)html+=groups(tm).map(g=>`<div class="toc-group"><h2>${q?'מושגים · ':''}${esc(g)}</h2>${tm.filter(t=>t.group===g).map(t=>`<a class="toc-link term-toc" href="${termHref(t.id)}" ${activeTerm===t.id?'aria-current="page"':''}><span class="term-dot" aria-hidden="true">◦</span><span>${esc(t.title)}</span></a>`).join('')}</div>`).join('');
    if(navMode==='slides'||q)html+=groups(sm).map(g=>`<div class="toc-group"><h2>${q?'הרחבות · ':''}${esc(g)}</h2>${sm.filter(s=>s.group===g).map(s=>`<a class="toc-link" href="#slide-${s.n}" ${pageType==='reading'&&current===s.n?'aria-current="page"':''}><span class="number" dir="ltr">${pad(s.n)}</span><span>${esc(s.short||s.title)}</span></a>`).join('')}</div>`).join('');
    byId('toc').innerHTML=html;byId('no-results').hidden=!!html;
    byId('nav-slides').setAttribute('aria-pressed',String(navMode==='slides'));byId('nav-terms').setAttribute('aria-pressed',String(navMode==='terms'));
  }
  function closeMenu(){byId('sidebar').classList.remove('is-open');byId('menu-button').setAttribute('aria-expanded','false');}
  function linkTerms(root,exclude=null){
    if(!root)return;
    const candidates=wiki.filter(t=>t.id!==exclude).flatMap(t=>[...new Set([t.title,...t.aliases])].flatMap(alias=>[alias,...(/^[א-ת]/.test(alias)?['ב','ל','כ','מ','ו','ה'].map(p=>p+alias):[])].map(word=>({alias:word,id:t.id,definition:t.definition})))).sort((a,b)=>b.alias.length-a.alias.length);
    const unique=new Map();for(const c of candidates)if(!unique.has(c.alias.toLowerCase()))unique.set(c.alias.toLowerCase(),c);
    const quote=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const re=new RegExp(`(?<![\\p{L}\\p{N}])(${[...unique.values()].map(c=>quote(c.alias)).join('|')})(?![\\p{L}\\p{N}])`,'giu');
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest('a,h1,h2,h3,summary,script,style')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);const used=new Set();
    for(const node of nodes){const text=node.nodeValue;re.lastIndex=0;let match,last=0,changed=false;const fragment=document.createDocumentFragment();while((match=re.exec(text))){const c=unique.get(match[1].toLowerCase());if(used.has(c.id))continue;used.add(c.id);changed=true;fragment.append(text.slice(last,match.index));const a=document.createElement('a');a.className='wiki-link';a.href=termHref(c.id);a.title=c.definition;a.textContent=match[0];fragment.append(a);last=match.index+match[0].length;}if(changed){fragment.append(text.slice(last));node.replaceWith(fragment);}}
  }
  function readingInfo(group,content){byId('chapter-label').textContent=group;const minutes=Math.max(1,Math.ceil(plain(content).split(/\s+/).length/150));byId('reading-time').textContent=minutes===1?'כדקת קריאה':`כ־${minutes} דקות קריאה`;}
  function setPage(type){pageType=type;activeTerm=null;current=null;document.body.dataset.page=type;}
  function updateNavigation(){
    const inLesson=['intro','reading','term','index'].includes(pageType);
    byId('lesson-navigation').hidden=!inLesson;
    byId('course-navigation').hidden=pageType!=='course';
    const active=pageType==='home'?'home':pageType==='course'?'course':'intro';
    for(const id of ['home','course','intro']){
      const link=byId(id+'-link');
      link.classList.toggle('is-active',id===active);
      if(id===pageType)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
    }
    const trail=[{href:'#home',label:'דף הבית'}];
    if(pageType==='course')trail.push({label:'סילבוס ומטלה'});
    else if(inLesson){
      if(pageType==='term'&&origin==='course')trail.push({href:'#course',label:'סילבוס ומטלה'});
      else trail.push({href:'#lesson-intro',label:'שיעור מבוא'});
      if(pageType==='intro')delete trail[1].href;
      else trail.push({label:pageType==='reading'?(sectionFromSlide(current)?.short||'הרחבה'):pageType==='term'?termById(activeTerm).title:'מילון המושגים'});
    }
    byId('breadcrumbs').hidden=pageType==='home';
    byId('breadcrumbs').innerHTML=trail.map(item=>item.href?`<a href="${item.href}">${esc(item.label)}</a>`:`<span aria-current="page">${esc(item.label)}</span>`).join('<span aria-hidden="true">/</span>');
    byId('pager').hidden=!byId('pager').innerHTML;
  }

  function showHome(){
    setPage('home');origin='intro';byId('chapter-label').textContent='האתר המלווה לקורס';byId('reading-time').textContent='ויקי הקורס';byId('mobile-current').textContent='דף הבית';
    byId('article').innerHTML=`<header class="course-home-header"><div class="slide-kicker">קורס <bdi>${course.number}</bdi></div><h1>${esc(course.name)}<span class="title-detail">ויקי הקורס</span></h1><p class="lead">חומרי הקורס במקום אחד: סילבוס והנחיות המטלה, ולצדם הרחבות, מושגים ורקע מדעי לפי שיעור.</p></header><nav class="home-paths course-home-paths" aria-label="תכני הקורס"><a href="#course"><small>מידע על הקורס</small><strong>סילבוס ומטלה</strong><p>נושאי הלימוד, לוח המפגשים, דרכי ההערכה והנחיות אתגר מיפוי המוח.</p><span class="card-cta">לסילבוס ולמטלה <span aria-hidden="true">←</span></span></a><a href="#lesson-intro"><small>שיעור 01</small><strong>שיעור מבוא</strong><p>מה ממפים במוח, איך התחיל התחום, ומה אפשר ללמוד משיטות הדימות השונות.</p><span class="card-meta">${readings.length} הרחבות · ${wiki.length} מושגים · מצגת השיעור</span><span class="card-cta">לשיעור המבוא <span aria-hidden="true">←</span></span></a></nav>`;
    byId('pager').innerHTML='';document.title=`${course.name} · ${course.number} | ויקי הקורס`;
  }
  function showIntro(){
    setPage('intro');origin='intro';navMode='slides';byId('chapter-label').textContent='שיעור 01';byId('reading-time').textContent=`${readings.length} הרחבות · ${wiki.length} מושגים`;byId('mobile-current').textContent='שיעור מבוא';
    byId('article').innerHTML=`<header><div class="slide-kicker">לקרוא מעבר לשקופית</div><h1>שיעור מבוא<span class="title-detail">מושגי יסוד במיפוי המוח</span></h1><p class="lead">מה ממפים במוח, איך התפתח התחום ומה השיטות השונות מאפשרות לנו לראות? כאן תמצאו הרחבות לנושאים נבחרים והסברים למושגים שמופיעים בשיעור.</p></header><nav class="lesson-tools" aria-label="כלים לשיעור המבוא"><a href="${deck}" target="_blank" rel="noopener">מצגת השיעור <span aria-hidden="true">↗</span></a><a href="#concepts">מילון המושגים <small>${wiki.length} ערכים</small></a></nav><div class="body-content"><h2>מתחילים בשאלה שמעניינת אתכם</h2><p>מהן שכבות הקורטקס, מה מודד BOLD, ואיך אפשר ללמוד על תפקוד מפגיעה מוחית? מושגים מסומנים בטקסט פותחים ערכי הסבר. מכל ערך אפשר לחזור להרחבה שממנה יצאתם.</p><h2>הרחבות נבחרות לשיעור</h2><p>הנושאים מסודרים לפי מהלך השיעור. כמה שקופיות העוסקות באותו רעיון מופיעות יחד בהרחבה אחת, עם קישורים למקורות במצגת.</p></div><div class="reading-directory">${groups(readings).map(g=>`<section><h2>${esc(g)}</h2>${readings.filter(s=>s.group===g).map(s=>`<a href="#slide-${s.n}"><span>${esc(s.short||s.title)}</span><small>${s.sourceSlides.length===1?'שקופית':'שקופיות'} <bdi>${s.sourceSlides.join(', ')}</bdi></small></a>`).join('')}</section>`).join('')}</div><aside class="takeaway"><span class="label">לקראת השיעור הבא</span><p>ממשיכים לבסיס הפיזיקלי של MRI. אפשר להתחיל בערך <a href="#term-spin?from=intro">ספין</a>, ולהמשיך לתדירות לרמור ולרלקסציה.</p></aside>`;
    byId('pager').innerHTML='';document.title=`שיעור מבוא | ${course.name} · ${course.number}`;linkTerms(byId('article').querySelector('.body-content'));
  }
  function showCourse(anchor){
    setPage('course');origin='course';navMode='slides';byId('chapter-label').textContent='מידע על הקורס';byId('reading-time').textContent='לפי המצגת המעודכנת';byId('mobile-current').textContent='סילבוס ומטלה';
    byId('article').innerHTML=`<header><div class="slide-kicker"><span>${esc(course.name)} · קורס <bdi>${course.number}</bdi></span></div><h1>${course.title}</h1><p class="english-title" lang="en" dir="ltr">${course.en}</p><p class="lead">${course.lead}</p><nav class="course-jumps" aria-label="חלקי עמוד הקורס">${course.sections.map(s=>`<a href="#course-${s.id}">${s.label}</a>`).join('')}</nav></header>
    <div class="body-content course-body">
    <section id="course-syllabus"><h2>מה נלמד בקורס?</h2><div class="course-blocks">${course.blocks.map(b=>`<div><span class="block-number">${b.n}</span><div><h3>${b.title}</h3><small dir="auto">${b.dates}</small><p>${b.text}</p></div></div>`).join('')}</div><p>לאורך הסמסטר מתקיים אתגר מיפוי המוח: פרויקט קבוצתי שבו מציעים ניסוי fMRI, מכינים הצעות נבחרות לסריקה ומפרשים את התוצאות.</p><details class="course-details"><summary>צוות הקורס ופרטי קשר</summary><div class="team-list">${course.team.map(([name,email])=>`<div><strong>${name}</strong><a href="mailto:${email}" dir="ltr">${email}</a></div>`).join('')}</div></details><p class="course-source"><a href="${slideUrl(2)}" target="_blank" rel="noopener">הסילבוס במצגת ↗</a></p></section>
    <section id="course-assignment"><div class="section-heading"><h2>המטלה: אתגר מיפוי המוח</h2><span class="weight-tag">20% מהציון</span></div><p>מרעיון לניסוי, ומנתונים להסבר: עובדים בקבוצות של שישה, ומלווים את הניסוי לאורך הסמסטר.</p><ol class="assignment-steps">${course.steps.map((s,i)=>`<li><span class="step-number">${i+1}</span><div><h3>${s.title}</h3><p>${s.text}</p><span class="points-tag ${s.bonus?'bonus':''}">${s.points}</span></div></li>`).join('')}</ol><aside class="takeaway"><span class="label">איך מצטברות הנקודות?</span><p>ארבעת רכיבי הבסיס — הגשת ההצעה, הצגה, נוכחות בסריקה והגשת ניתוח — מזכים ב־5 נקודות כל אחד. כל נקודה מעל 20 בחלק האתגר נחשבת לבונוס בציון הסופי. ללא השתתפות באתגר, הציון המרבי בקורס הוא 80.</p></aside><h3>מועדי האתגר</h3><div class="milestone-list">${course.milestones.map(([date,text])=>`<div><bdi>${date}</bdi><span>${text}</span></div>`).join('')}</div><p class="course-source"><a href="${slideUrl(5)}" target="_blank" rel="noopener">הנחיות האתגר במצגת ↗</a></p></section>
    <section id="course-grading"><h2>הערכה וציונים</h2><div class="grade-split"><div><strong>80%</strong><span>מטלות הבחינה</span><small>מועד א׳ או מועד ב׳</small></div><div><strong>20%</strong><span>אתגר מיפוי המוח</span><small>ובתוספת הבונוסים המפורטים למעלה</small></div></div><h3>מועד א׳</h3><p>שמונה נושאים, ומטלה אחת לאחר כל נושא. כל מטלה פתוחה לארבעה ימים, וזמן הביצוע המשוער הוא כעשר דקות. לאחר ארבעה ימים מתפרסמות התשובות. שמונת הציונים מרכיבים את ציון מועד א׳.</p><h3>מועד ב׳</h3><p>בתאריך מועד ב׳ נפתחות שמונה מטלות חדשות, אחת לכל נושא. יש לענות על כל מטלה בתוך ארבע שעות.</p><h3>השלמות, חזרה והתאמות</h3><ul><li>מטלה שלא בוצעה במועד א׳ אפשר להשלים במועד ב׳.</li><li>אפשר לחזור במועד ב׳ על מטלה כדי לשפר את הציון. אם עונים בשני המועדים, <strong>הציון האחרון קובע</strong>.</li><li>לזכאים להתאמות משמעותיות בהחלטת המזכירות, למשל בעקבות מילואים, ייחשבו ששת הציונים הטובים מתוך שמונה.</li><li>לפי ההנחיות במצגת, אין מועדים נוספים, חריגים או הארכות.</li></ul><p class="course-source"><a href="${slideUrl(4)}" target="_blank" rel="noopener">כללי ההערכה במצגת ↗</a></p></section>
    <section id="course-schedule"><h2>לוח המפגשים</h2><p>המועדים והתכנים להלן מופיעים בלוח הקורס במצגת.</p><details class="course-details" ${anchor==='schedule'?'open':''}><summary>לוח המפגשים המלא</summary><div class="table-wrap"><table class="schedule-table"><thead><tr><th scope="col">תאריך</th><th scope="col">מרצה</th><th scope="col">נושא המפגש</th></tr></thead><tbody>${course.schedule.map(([date,teacher,topic])=>`<tr><td><bdi>${date}</bdi></td><td>${teacher}</td><td>${topic}</td></tr>`).join('')}</tbody></table></div></details><p class="course-source"><a href="${slideUrl(3)}" target="_blank" rel="noopener">לוח המפגשים במצגת ↗</a></p></section>
    <section id="course-reading"><h2>קריאה משלימה</h2>${course.readingHtml}<p class="course-source"><a href="${slideUrl(6)}" target="_blank" rel="noopener">רשימת הקריאה במצגת ↗</a></p></section></div>`;
    byId('pager').innerHTML='<a href="#home"><small>→ חזרה לדף הבית</small><span>ויקי הקורס</span></a><a class="next" href="#lesson-intro"><small>לחומרי השיעור ←</small><span>שיעור מבוא</span></a>';
    document.title=`סילבוס ומטלה | ${course.name} · ${course.number}`;linkTerms(byId('article').querySelector('.body-content'));
  }
  function showSlide(s){
    setPage('reading');current=s.n;origin=s.n;navMode='slides';readingInfo(s.group,s.lead+s.body+s.takeaway);byId('mobile-current').textContent='הרחבה לשיעור';
    const terms=wiki.filter(t=>t.slides.some(n=>s.sourceSlides.includes(n)));
    byId('article').innerHTML=`<header><div class="slide-kicker">הרחבה ל${s.sourceSlides.length===1?'שקופית':'שקופיות'} <bdi>${s.sourceSlides.join(', ')}</bdi></div><h1>${esc(s.title)}</h1><p class="english-title" dir="ltr" lang="en">${esc(s.en)}</p><p class="lead">${esc(s.lead)}</p><div class="article-meta"><span class="meta-label">במצגת:</span>${s.sourceSlides.map(n=>`<a href="${slideUrl(n)}" target="_blank" rel="noopener">שקופית ${n} ↗</a>`).join('')}<span class="meta-label">מושג מסומן פותח ערך להעמקה</span></div></header><div class="body-content">${s.body}</div>${relatedHtml(terms)}<aside class="takeaway"><span class="label">הרעיון לקחת הלאה</span><p>${esc(s.takeaway)}</p></aside>${sourcesHtml(s.refs)}`;
    const pos=readings.indexOf(s),prev=readings[pos-1],next=readings[pos+1];
    byId('pager').innerHTML=`${prev?`<a href="#slide-${prev.n}"><small>→ ההרחבה הקודמת</small><span>${esc(prev.short||prev.title)}</span></a>`:'<a href="#lesson-intro"><small>→ חזרה לשיעור</small><span>שיעור מבוא · כל ההרחבות</span></a>'}${next?`<a class="next" href="#slide-${next.n}"><small>ההרחבה הבאה ←</small><span>${esc(next.short||next.title)}</span></a>`:'<a class="next" href="#concepts"><small>להמשיך לחקור ←</small><span>כל המושגים בשיעור</span></a>'}`;
    document.title=`${s.title} | ${course.name} · ${course.number}`;linkTerms(byId('article').querySelector('.body-content'));linkTerms(byId('article').querySelector('.lead'));
  }
  function appearances(t){const relevant=readings.filter(s=>t.slides.some(n=>s.sourceSlides.includes(n)));const links=relevant.map(s=>`<a href="#slide-${s.n}">${esc(s.short||s.title)}</a>`);if(t.slides.some(n=>n>=2&&n<=6))links.push('<a href="#course">סילבוס ומטלה</a>');return links.length?`<section class="appears-in"><h2>פוגשים את המושג בהרחבות</h2>${links.join('')}</section>`:'';}
  function showTerm(t){
    setPage('term');activeTerm=t.id;navMode='terms';readingInfo(`ויקי הקורס · ${t.group}`,t.definition+t.body);byId('mobile-current').textContent='מילון המושגים';const back=backContext();
    byId('article').innerHTML=`<header><a class="back-to-lesson" href="${back.href}">→ חזרה: ${esc(back.label)}</a><div class="slide-kicker">ערך בוויקי · ${esc(t.group)}</div><h1>${esc(t.title)}</h1><p class="english-title" dir="ltr" lang="en">${esc(t.en)}</p><p class="lead">${esc(t.definition)}</p><div class="article-meta"><a href="#concepts">לכל המושגים</a><span class="meta-label">הגדרה, רקע והקשר לשיעור</span></div></header><div class="body-content">${t.body}</div>${relatedHtml(t.related.map(termById).filter(Boolean),'מושגים קשורים')}${sourcesHtml(t.refs)}${appearances(t)}`;
    byId('pager').innerHTML=`<a href="${back.href}"><small>→ חזרה</small><span>${esc(back.label)}</span></a><a class="next" href="#concepts"><small>להמשך קריאה ←</small><span>כל המושגים</span></a>`;
    document.title=`${t.title} | ${course.name} · ${course.number}`;linkTerms(byId('article').querySelector('.body-content'),t.id);
  }
  function showIndex(){
    setPage('index');origin='intro';activeTerm='index';navMode='terms';byId('chapter-label').textContent='שיעור מבוא · מילון המושגים';byId('reading-time').textContent=`${wiki.length} ערכים`;byId('mobile-current').textContent='מילון המושגים';
    byId('article').innerHTML=`<header><div class="slide-kicker">ללמוד מושג, לגלות את ההקשר</div><h1>המושגים שמאחורי השקופיות</h1><p class="lead">הסברים מהיסוד, רקע היסטורי וקישורים בין רעיונות. בחרו מושג או חפשו בעברית ובאנגלית.</p></header><div class="wiki-directory">${groups(wiki).map(g=>`<section><h2>${esc(g)}</h2>${wiki.filter(t=>t.group===g).map(t=>`<a href="${termHref(t.id)}"><strong>${esc(t.title)}</strong><span class="directory-en" lang="en" dir="ltr">${esc(t.en)}</span><p>${esc(t.definition)}</p></a>`).join('')}</section>`).join('')}</div>`;
    const back=backContext();byId('pager').innerHTML=`<a href="${back.href}"><small>→ חזרה</small><span>${esc(back.label)}</span></a>`;document.title=`מילון המושגים | ${course.name} · ${course.number}`;
  }
  function render(focus=false){
    const term=location.hash.match(/^#term-([a-z0-9-]+)(?:\?from=([a-z0-9-]+))?$/),slide=location.hash.match(/^#slide-(\d+)$/),courseRoute=location.hash.match(/^#course(?:-([a-z]+))?$/);
    let anchor=null;
    if(term&&termById(term[1])){origin=normalizedOrigin(term[2]||origin);showTerm(termById(term[1]));}
    else if(courseRoute){anchor=course.sections.some(s=>s.id===courseRoute[1])?courseRoute[1]:null;showCourse(anchor);}
    else if(location.hash==='#lesson-intro')showIntro();
    else if(location.hash==='#concepts')showIndex();
    else if(slide){const n=Number(slide[1]),section=sectionFromSlide(n);if(section)showSlide(section);else if(n>=2&&n<=6)showCourse();else if(n===26){origin='intro';showTerm(termById('spin'));}else if(n===1)showIntro();else showHome();}
    else showHome();
    toc(byId('search').value);updateNavigation();closeMenu();if(focus){byId('sidebar').scrollTop=0;window.scrollTo({top:0,behavior:'instant'});byId('reading').focus({preventScroll:true});}
    if(anchor)byId(`course-${anchor}`).scrollIntoView({block:'start',behavior:'instant'});
  }
  byId('course-navigation').innerHTML=course.sections.map(s=>`<a class="toc-link" href="#course-${s.id}">${esc(s.label)}</a>`).join('');
  byId('concept-count').textContent=`${wiki.length} מושגים`;
  byId('nav-slides').addEventListener('click',()=>{navMode='slides';byId('search').value='';toc();byId('sidebar').scrollTop=0;});
  byId('nav-terms').addEventListener('click',()=>{navMode='terms';byId('search').value='';toc();byId('sidebar').scrollTop=0;});
  byId('search').addEventListener('input',e=>toc(e.target.value));
  byId('menu-button').addEventListener('click',()=>{const open=byId('sidebar').classList.toggle('is-open');byId('menu-button').setAttribute('aria-expanded',String(open));if(open)(byId('lesson-navigation').hidden?byId('course-link'):byId('search')).focus();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  byId('sidebar').addEventListener('click',e=>{const a=e.target.closest('a');if(a&&a.hash===location.hash){closeMenu();byId('reading').focus();}});
  document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();closeMenu();byId('reading').focus();byId('reading').scrollIntoView({block:'start'});});
  window.addEventListener('hashchange',()=>render(true));render();
})();
